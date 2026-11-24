import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_animation_specs import _source_text_cues, build_specs
from scripts.run_course_review import REVIEWERS, build_agent_command, render_agent_prompt, select_reviewers


class AnimationSpecTests(unittest.TestCase):
    def sample_data(self):
        return {
            "modules": [{
                "id": "MOD-01",
                "title": "測試模組",
                "physicsPrinciples": [{
                    "title": "力學原理",
                    "formula": "F = ma",
                    "explanation": "原稿說明",
                    "mediaId": "p_01_01",
                    "image": "assets/media/images/p_01_01.jpg",
                    "video": "assets/media/videos/p_01_01.mp4",
                }],
                "coreSkills": [{
                    "name": "測試動作",
                    "level": "Lv.1",
                    "casiAasiRef": "待核驗標準",
                    "biomechanics": {
                        "comBos": "原稿 COM/BOS",
                        "jointAngles": "原稿角度",
                        "weightDistribution": "原稿承重",
                        "edgeControl": "原稿板刃",
                    },
                    "stepByStep": ["動作一", "動作二"],
                    "commonErrors": {
                        "symptom": "錯誤症狀",
                        "rootCause": "原稿原因",
                        "correctiveDrill": "修正練習",
                    },
                    "mediaId": "s_01_01",
                    "image": "assets/media/images/s_01_01.jpg",
                    "video": "assets/media/videos/s_01_01.mp4",
                    "stepMediaId": "step_01_01",
                    "stepVideo": "assets/media/videos/step_01_01.mp4",
                    "errMediaId": "err_01_01",
                    "errVideo": "assets/media/videos/err_01_01.mp4",
                }],
            }],
            "groundTrickComboMatrix": {
                "atomicSkills": [{
                    "code": "ATOM-01", "name": "Ollie", "biomechanics": "原稿原理",
                    "mediaId": "atomic_01", "video": "assets/media/videos/atomic_01.mp4",
                }],
                "combos": [{
                    "id": "COMBO-01", "name": "Combo", "phases": [
                        {"phase": "Phase 1", "action": "組合動作一", "com": "50/50", "edge": "Heelside 20°"}
                    ],
                    "failureMode": "錯誤模式",
                    "mediaId": "combo_01", "video": "assets/media/videos/combo_01.mp4",
                    "stepMediaId": "combo_step_01", "stepVideo": "assets/media/videos/combo_step_01.mp4",
                    "errMediaId": "combo_err_01", "errVideo": "assets/media/videos/combo_err_01.mp4",
                }],
            },
        }

    def test_specs_cover_every_video_slot_and_preserve_source_provenance(self):
        specs = build_specs(self.sample_data(), source_revision="test-rev")
        self.assertEqual(8, len(specs["specifications"]))
        ids = [item["media_id"] for item in specs["specifications"]]
        self.assertEqual(len(ids), len(set(ids)))
        self.assertEqual("test-rev", specs["source_revision"])
        skill = next(item for item in specs["specifications"] if item["media_id"] == "s_01_01")
        self.assertEqual(["動作一", "動作二"], [p["source_action"] for p in skill["shot_plan"]])
        self.assertTrue(all(p["timecode"] is None for p in skill["shot_plan"]))
        first_phase = skill["shot_plan"][0]
        self.assertEqual(
            {"value": None, "status": "needs_coach_input", "source_candidates": []},
            first_phase["body_part"],
        )
        self.assertEqual({"text": "動作一", "status": "draft_unverified"}, first_phase["subtitle_narration_cue"])
        self.assertEqual(
            {"arrows": [], "arrow_term_candidates": [], "angle_callouts": [], "status": "needs_coach_input"},
            first_phase["visual_annotations"],
        )
        self.assertIn(
            {"field": "edgeControl", "source_text": "原稿板刃", "status": "unmapped_needs_coach_review"},
            skill["unmapped_source_cues"],
        )
        combo = next(item for item in specs["specifications"] if item["media_id"] == "combo_01")
        self.assertEqual("50/50", combo["shot_plan"][0]["center_of_mass"]["value"])
        self.assertEqual("draft_unverified", combo["shot_plan"][0]["center_of_mass"]["status"])
        self.assertEqual(
            [{"text": "Heelside 20°", "status": "draft_unverified"}],
            combo["shot_plan"][0]["visual_annotations"]["angle_callouts"],
        )
        self.assertEqual("待教練核可", skill["review_gate"])
        self.assertIn("待核驗", skill["critical_points"][0]["status"])
        error = next(item for item in specs["specifications"] if item["media_id"] == "err_01_01")
        self.assertIn("錯誤症狀", error["source_content"])

    def test_annotation_candidates_are_literal_and_never_approved(self):
        cues = _source_text_cues("前腳膝蓋向前壓重心45°後刃")
        self.assertEqual(["前腳", "膝蓋"], cues["body_part_terms"])
        self.assertEqual(["後刃"], cues["edge_terms"])
        self.assertEqual(["前腳", "重心"], cues["center_of_mass_terms"])
        self.assertEqual(["向前"], cues["direction_terms"])
        self.assertEqual(["45°"], cues["angle_terms"])
        self.assertEqual("literal_matches_only_unverified", cues["status"])

    def test_every_phase_has_structured_visual_and_teaching_cues(self):
        specs = build_specs(self.sample_data(), source_revision="test-rev")
        for spec in specs["specifications"]:
            self.assertTrue(spec["shot_plan"], spec["media_id"])
            for phase in spec["shot_plan"]:
                for key in (
                    "body_part", "board_edge_direction", "center_of_mass",
                    "subtitle_narration_cue", "visual_annotations", "annotation_status",
                ):
                    self.assertIn(key, phase, f"{spec['media_id']} missing {key}")
                self.assertIn("status", phase["body_part"])
                self.assertIn("status", phase["board_edge_direction"])
                self.assertIn("status", phase["center_of_mass"])
                self.assertEqual("draft_unverified", phase["subtitle_narration_cue"]["status"])

    def test_skill_content_is_not_presented_as_verified_fact(self):
        specs = build_specs(self.sample_data(), source_revision="test-rev")
        for item in specs["specifications"]:
            self.assertEqual("draft_unverified", item["content_status"])
            self.assertEqual("教練核可及來源查證前不得作為教學定論", item["publication_rule"])


class ReviewOrchestrationTests(unittest.TestCase):
    def test_selecting_reviewers_preserves_canonical_order(self):
        selected = select_reviewers(["park_terrain", "foundations_safety"])
        self.assertEqual(
            ["foundations_safety", "park_terrain"],
            [reviewer["id"] for reviewer in selected],
        )

    def test_rejects_empty_or_unknown_reviewer_selection(self):
        with self.assertRaisesRegex(ValueError, "at least one"):
            select_reviewers([])
        with self.assertRaisesRegex(ValueError, "unknown reviewer"):
            select_reviewers(["not_a_reviewer"])

    def test_five_reviewers_cover_all_ten_modules_without_overlap(self):
        self.assertEqual(5, len(REVIEWERS))
        modules = [module for reviewer in REVIEWERS for module in reviewer["modules"]]
        self.assertEqual({f"MOD-{n:02}" for n in range(1, 11)}, set(modules))
        self.assertEqual(len(modules), len(set(modules)))

    def test_prompt_requires_evidence_and_prohibits_unapproved_edits(self):
        prompt = render_agent_prompt(REVIEWERS[0])
        for required in ("UNVERIFIED", "證據", "不得直接修改教材", "來源 URL", "待教練核可"):
            self.assertIn(required, prompt)

    def test_cli_is_read_only_and_loads_the_project_skill(self):
        with tempfile.TemporaryDirectory() as temp:
            skill = Path(temp) / "SKILL.md"
            skill.write_text("Skill rules", encoding="utf-8")
            command = build_agent_command(
                claude="/usr/local/bin/claude", model="opus", reviewer=REVIEWERS[0],
                repo=Path(temp), skill_text=skill.read_text(encoding="utf-8"),
                max_turns=6,
            )
        rendered = " ".join(command)
        self.assertIn("--model opus", rendered)
        self.assertIn("--permission-mode plan", rendered)
        self.assertIn("--append-system-prompt Skill rules", rendered)
        self.assertNotIn("Edit", rendered)
        self.assertNotIn("Bash", rendered)
        self.assertIn("WebSearch", rendered)
        self.assertIn("WebFetch", rendered)


class PublicDisclosureTests(unittest.TestCase):
    root = Path(__file__).resolve().parents[1]

    def test_expert_panel_disclaims_unverified_identity_and_signoff(self):
        app = (self.root / "js/app.js").read_text(encoding="utf-8")
        self.assertTrue(
            'class="expert-status expert-status-unverified">⚠ 人員身分、教材與媒體驗收未獨立核實</span>' in app,
            "expert panel must display the unverified status",
        )
        self.assertTrue("原始資料自述（未獨立核實）" in app, "self-reported notes must be caveated")
        self.assertTrue(
            "全部 ${experts.length} 筆名冊資料（身分未核實）" in app,
            "roster count must not claim 50 verified experts",
        )
        self.assertFalse(
            "✓ 教材 · 真人圖解 · 正誤連續影片 驗收通過" in app,
            "unsupported signoff claim must not be rendered",
        )

    def test_legacy_audit_claims_are_hidden_and_labeled_unverified(self):
        html = (self.root / "index.html").read_text(encoding="utf-8")
        self.assertTrue('<div hidden data-unverified-legacy-report' in html, "legacy report must remain hidden")
        self.assertTrue("UNVERIFIED LEGACY CLAIM: 50-COACH TEAM" in html, "legacy claim needs a warning label")
        self.assertTrue(
            "408 media paths in Git tree (204 JPG/MP4 pairs); content/playback/identity/rights unverified" in html,
            "media path count must not imply content or playback verification",
        )
        self.assertFalse(
            '<span class="tag-badge emerald">50-COACH TEAM' in html,
            "legacy signoff must not use verified styling",
        )

    def test_unverified_expert_status_uses_warning_color(self):
        css = (self.root / "css/styles.css").read_text(encoding="utf-8")
        self.assertTrue(".expert-status-unverified" in css, "status needs a dedicated warning style")
        self.assertTrue("color: var(--orange-400)" in css, "status text must use warning color")
        self.assertTrue(
            "border-left: 3px solid var(--orange-400)" in css,
            "self-reported audit note must use warning styling",
        )

    def test_ai_sample_video_is_labelled_not_filmed(self):
        app = (self.root / "js/app.js").read_text(encoding="utf-8")
        self.assertIn("AI 生成示範 · 非真人拍攝", app, "AI sample must carry a visible not-filmed label")
        self.assertIn("尚待合格教練核可", app, "AI sample must not read as approved coaching")
        for name in ("s_01_01_ai_live_action.mp4", "s_01_01_ai_live_action.jpg"):
            self.assertTrue((self.root / "assets/media/ai-samples" / name).is_file(), f"missing {name}")

    def test_mobile_shell_keeps_single_view_navigation(self):
        html = (self.root / "index.html").read_text(encoding="utf-8")
        self.assertIn('<nav class="tabbar" aria-label="主導覽列">', html)
        for view in ("overview", "curriculum", "lab", "tricks", "library"):
            self.assertIn(f'data-view-link="{view}"', html)
        self.assertIn('id="review-status-banner"', html, "review-pending notice must stay on the landing view")

    def test_curriculum_typo_uses_traditional_chinese(self):
        data = (self.root / "js/curriculum_data.js").read_text(encoding="utf-8")
        self.assertTrue("信號搜尋與粗略搜尋" in data, "correct Traditional Chinese conjunction must be present")
        self.assertFalse("信號搜尋与粗略搜尋" in data, "simplified conjunction typo must be absent")


if __name__ == "__main__":
    unittest.main()

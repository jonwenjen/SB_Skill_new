import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_animation_specs import build_specs
from scripts.run_course_review import REVIEWERS, build_agent_command, render_agent_prompt


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
                        {"phase": "Phase 1", "action": "組合動作一", "com": "50/50", "edge": "flat"}
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
        self.assertEqual("待教練核可", skill["review_gate"])
        self.assertIn("待核驗", skill["critical_points"][0]["status"])
        error = next(item for item in specs["specifications"] if item["media_id"] == "err_01_01")
        self.assertIn("錯誤症狀", error["source_content"])

    def test_skill_content_is_not_presented_as_verified_fact(self):
        specs = build_specs(self.sample_data(), source_revision="test-rev")
        for item in specs["specifications"]:
            self.assertEqual("draft_unverified", item["content_status"])
            self.assertEqual("教練核可及來源查證前不得作為教學定論", item["publication_rule"])


class ReviewOrchestrationTests(unittest.TestCase):
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


if __name__ == "__main__":
    unittest.main()

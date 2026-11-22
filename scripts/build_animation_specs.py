#!/usr/bin/env python3
"""Create draft, provenance-aware specs for every current course video slot.

The source curriculum is executed in a restricted Node VM with no host APIs. The
result is a review draft; it does not generate, modify, or publish any media.
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
NODE_EXTRACTOR = r'''const fs = require("fs");
const vm = require("vm");
const source = process.argv[1];
const sandbox = vm.createContext({window: {}});
vm.runInContext(fs.readFileSync(source, "utf8"), sandbox, {
  filename: source,
  timeout: 5000,
  displayErrors: true
});
if (!sandbox.window.SB_CURRICULUM_DATA) throw new Error("Curriculum data not found");
process.stdout.write(JSON.stringify(sandbox.window.SB_CURRICULUM_DATA));'''
PUBLICATION_RULE = "教練核可及來源查證前不得作為教學定論"


def read_curriculum(source: Path) -> dict[str, Any]:
    """Load the data-only JS file in a Node VM with no filesystem/network globals."""
    completed = subprocess.run(
        ["node", "-e", NODE_EXTRACTOR, str(source.resolve())],
        check=True, capture_output=True, text=True, timeout=20,
    )
    value = json.loads(completed.stdout)
    if not isinstance(value, dict) or not isinstance(value.get("modules"), list):
        raise ValueError("Unexpected curriculum structure")
    return value


def _points(values: dict[str, Any] | None) -> list[dict[str, str]]:
    labels = {
        "comBos": "重心／支撐範圍",
        "jointAngles": "關節動作／角度",
        "weightDistribution": "承重／壓力分布",
        "edgeControl": "雪板／刃控制",
    }
    return [
        {"label": labels.get(key, key), "source_text": str(value), "status": "原稿待核驗—需來源／教練簽核"}
        for key, value in (values or {}).items() if value not in (None, "")
    ]


def _spec(
    *, media_id: str, video_path: str, image_path: str | None,
    kind: str, module_id: str | None, module_title: str | None,
    title: str, source_ref: str, source_content: str,
    critical_points: list[dict[str, str]] | None = None,
    actions: list[dict[str, str]] | None = None,
) -> dict[str, Any]:
    plan = []
    for index, item in enumerate(actions or [], 1):
        plan.append({
            "phase": index,
            "phase_label": item.get("phase", f"階段 {index}"),
            "source_action": item.get("action", ""),
            "source_com": item.get("com", ""),
            "source_edge": item.get("edge", ""),
            "timecode": None,
            "annotation_status": "原稿待核驗—需教練簽核",
        })
    return {
        "media_id": media_id,
        "kind": kind,
        "module_id": module_id,
        "module_title": module_title,
        "title": title,
        "source_ref": source_ref,
        "video_path": video_path,
        "image_path": image_path,
        "content_status": "draft_unverified",
        "source_content": source_content,
        "critical_points": critical_points or [],
        "shot_plan": plan,
        "timecode_policy": "未有核准拍攝素材前不填時間碼；不得估造時長或影格",
        "review_gate": "待教練核可",
        "publication_rule": PUBLICATION_RULE,
        "production_constraints": [
            "真人示範；本規格不呼叫影片生成器、不重製或覆蓋現有影片。",
            "拍攝場地、速度、裝備與示範難度由合格教練依場地及學員程度核定。",
            "錯誤示範需安全、低風險、受控呈現；不得實際演出卡刃、碰撞或受傷。",
            "畫面重點須對照核准來源；原稿數字、角度、配重及物理說明均不可當成已證實事實。",
        ],
    }


def build_specs(data: dict[str, Any], source_revision: str = "unknown") -> dict[str, Any]:
    specs: list[dict[str, Any]] = []
    for module in data.get("modules", []):
        module_id = str(module.get("id", ""))
        module_title = str(module.get("title", ""))
        for index, principle in enumerate(module.get("physicsPrinciples", []), 1):
            media_id = principle.get("mediaId") or f"p_{module_id[-2:]}_{index:02}"
            specs.append(_spec(
                media_id=media_id, video_path=principle.get("video", f"assets/media/videos/{media_id}.mp4"),
                image_path=principle.get("image"), kind="physics_principle",
                module_id=module_id, module_title=module_title,
                title=principle.get("title", "未命名原理"), source_ref=f"{module_id}.physicsPrinciples[{index - 1}]",
                source_content="\n".join(x for x in [principle.get("formula", ""), principle.get("explanation", "")] if x),
                critical_points=[{"label": "原稿公式／解說", "source_text": x, "status": "原稿待核驗—需來源／教練簽核"}
                                 for x in [principle.get("formula", ""), principle.get("explanation", "")] if x],
                actions=[{"phase": "概念視覺化", "action": principle.get("explanation", "")}],
            ))
        for index, skill in enumerate(module.get("coreSkills", []), 1):
            source_ref = f"{module_id}.coreSkills[{index - 1}]"
            title = skill.get("name", "未命名動作")
            steps = [{"phase": f"步驟 {n}", "action": text} for n, text in enumerate(skill.get("stepByStep", []), 1)]
            main_id = skill.get("mediaId") or f"s_{module_id[-2:]}_{index:02}"
            points = _points(skill.get("biomechanics"))
            specs.append(_spec(
                media_id=main_id, video_path=skill.get("video", f"assets/media/videos/{main_id}.mp4"),
                image_path=skill.get("image"), kind="core_skill", module_id=module_id,
                module_title=module_title, title=title, source_ref=source_ref,
                source_content="\n".join(text for text in skill.get("stepByStep", [])),
                critical_points=points, actions=steps,
            ))
            if skill.get("stepMediaId") or skill.get("stepVideo"):
                step_id = skill.get("stepMediaId") or f"step_{module_id[-2:]}_{index:02}"
                specs.append(_spec(
                    media_id=step_id, video_path=skill.get("stepVideo", f"assets/media/videos/{step_id}.mp4"),
                    image_path=skill.get("stepImage"), kind="skill_steps", module_id=module_id,
                    module_title=module_title, title=f"{title}｜逐步拆解", source_ref=source_ref + ".stepByStep",
                    source_content="\n".join(text for text in skill.get("stepByStep", [])),
                    critical_points=points, actions=steps,
                ))
            errors = skill.get("commonErrors") or {}
            if skill.get("errMediaId") or skill.get("errVideo"):
                err_id = skill.get("errMediaId") or f"err_{module_id[-2:]}_{index:02}"
                specs.append(_spec(
                    media_id=err_id, video_path=skill.get("errVideo", f"assets/media/videos/{err_id}.mp4"),
                    image_path=skill.get("errImage"), kind="skill_error", module_id=module_id,
                    module_title=module_title, title=f"{title}｜常見錯誤（安全示範）", source_ref=source_ref + ".commonErrors",
                    source_content="\n".join(f"{key}: {value}" for key, value in errors.items()),
                    critical_points=[{"label": key, "source_text": str(value), "status": "原稿待核驗—需來源／教練簽核"}
                                     for key, value in errors.items()],
                    actions=[{"phase": "安全示範", "action": str(errors.get("symptom", "錯誤動作需教練設計安全替代呈現"))}],
                ))
    matrix = data.get("groundTrickComboMatrix") or {}
    for index, atomic in enumerate(matrix.get("atomicSkills", []), 1):
        media_id = atomic.get("mediaId") or f"atomic_{index:02}"
        details = {key: str(value) for key, value in atomic.items()
                   if key in {"biomechanics", "comPosition", "foreAft", "lateral", "vertical"} and value not in (None, "")}
        specs.append(_spec(
            media_id=media_id, video_path=atomic.get("video", f"assets/media/videos/{media_id}.mp4"),
            image_path=atomic.get("image"), kind="atomic_skill", module_id="MOD-06",
            module_title="平花技能矩陣", title=atomic.get("name", atomic.get("id", "原子技能")),
            source_ref=f"groundTrickComboMatrix.atomicSkills[{index - 1}]",
            source_content="\n".join(f"{key}: {value}" for key, value in details.items()),
            critical_points=[{"label": key, "source_text": value, "status": "原稿待核驗—需來源／教練簽核"} for key, value in details.items()],
            actions=[{"phase": "動作分解", "action": atomic.get("biomechanics", "")}],
        ))
    for index, combo in enumerate(matrix.get("combos", []), 1):
        source_ref = f"groundTrickComboMatrix.combos[{index - 1}]"
        title = combo.get("name", combo.get("id", "組合動作"))
        phases = [{"phase": item.get("phase", f"Phase {n}"), "action": item.get("action", ""),
                   "com": item.get("com", ""), "edge": item.get("edge", "")}
                  for n, item in enumerate(combo.get("phases", []), 1)]
        points = [{"label": key, "source_text": str(combo[key]), "status": "原稿待核驗—需來源／教練簽核"}
                  for key in ("comSummary", "edgeLogic", "formula", "torsionAngle") if combo.get(key)]
        main_id = combo.get("mediaId") or f"combo_{index:02}"
        specs.append(_spec(
            media_id=main_id, video_path=combo.get("video", f"assets/media/videos/{main_id}.mp4"),
            image_path=combo.get("image"), kind="combo_skill", module_id="MOD-06",
            module_title="平花技能矩陣", title=title, source_ref=source_ref,
            source_content="\n".join(p["action"] for p in phases), critical_points=points, actions=phases,
        ))
        if combo.get("stepMediaId") or combo.get("stepVideo"):
            step_id = combo.get("stepMediaId") or f"combo_step_{index:02}"
            specs.append(_spec(
                media_id=step_id, video_path=combo.get("stepVideo", f"assets/media/videos/{step_id}.mp4"),
                image_path=combo.get("stepImage"), kind="combo_steps", module_id="MOD-06",
                module_title="平花技能矩陣", title=f"{title}｜逐步拆解", source_ref=source_ref + ".phases",
                source_content="\n".join(p["action"] for p in phases), critical_points=points, actions=phases,
            ))
        failure = combo.get("failureMode", "")
        if combo.get("errMediaId") or combo.get("errVideo"):
            err_id = combo.get("errMediaId") or f"combo_err_{index:02}"
            specs.append(_spec(
                media_id=err_id, video_path=combo.get("errVideo", f"assets/media/videos/{err_id}.mp4"),
                image_path=combo.get("errImage"), kind="combo_error", module_id="MOD-06",
                module_title="平花技能矩陣", title=f"{title}｜常見失誤（安全示範）", source_ref=source_ref + ".failureMode",
                source_content=failure, critical_points=[{"label": "原稿失誤描述", "source_text": failure,
                    "status": "原稿待核驗—需來源／教練簽核"}] if failure else [],
                actions=[{"phase": "安全示範", "action": failure}],
            ))
    ids = [item["media_id"] for item in specs]
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate media IDs in generated specifications")
    return {
        "schema_version": "1.0",
        "source_revision": source_revision,
        "source_policy": "原稿只作資料來源；未核驗內容標註草稿，不可當作技術事實或直接發布。",
        "count": len(specs),
        "specifications": specs,
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=ROOT / "js/curriculum_data.js")
    parser.add_argument("--output", type=Path, default=ROOT / "docs/animation/animation-specs.json")
    args = parser.parse_args(argv)
    try:
        data = read_curriculum(args.source)
        revision = subprocess.run(
            ["git", "-C", str(ROOT), "rev-parse", "--short", "HEAD"],
            check=True, capture_output=True, text=True, timeout=5,
        ).stdout.strip()
        result = build_specs(data, revision or "unknown")
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Wrote {result['count']} draft specifications to {args.output}")
        return 0
    except (OSError, ValueError, subprocess.SubprocessError, json.JSONDecodeError) as exc:
        print(f"Failed to build animation specifications: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

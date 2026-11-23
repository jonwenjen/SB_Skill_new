#!/usr/bin/env python3
"""Run five independent, read-only Claude Code reviews of the snowboard course."""
from __future__ import annotations

import argparse
import concurrent.futures
import json
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
SKILL_PATH = ROOT / ".agents/skills/snowboard-course-review/SKILL.md"
REVIEWERS = [
    {"id": "foundations_safety", "modules": ["MOD-01", "MOD-02"], "focus": "體能與生理、安全準則、器材、救援與高風險指示"},
    {"id": "biomechanics_progression", "modules": ["MOD-03", "MOD-04"], "focus": "物理／生物力學主張、入門至進階教學順序及術語"},
    {"id": "carving_freestyle", "modules": ["MOD-05", "MOD-06"], "focus": "刻滑、平花招式、動作提示、動作安全與可教性"},
    {"id": "park_terrain", "modules": ["MOD-07", "MOD-08"], "focus": "公園／跳台、蘑菇／陡坡／樹林場景及場地風險"},
    {"id": "backcountry_integrity", "modules": ["MOD-09", "MOD-10"], "focus": "粉雪／野雪／雪崩、傷害防護、來源與全站審查／素材宣稱"},
]
ALLOWED_TOOLS = "Read,Grep,Glob,WebSearch,WebFetch"


def select_reviewers(reviewer_ids: list[str] | None = None) -> list[dict[str, Any]]:
    """Select a canonical-order subset, rejecting empty and unknown scopes."""
    if reviewer_ids is None:
        return REVIEWERS
    if not reviewer_ids:
        raise ValueError("Select at least one reviewer.")
    requested = set(reviewer_ids)
    known = {reviewer["id"] for reviewer in REVIEWERS}
    unknown = requested - known
    if unknown:
        raise ValueError(f"unknown reviewer(s): {', '.join(sorted(unknown))}")
    return [reviewer for reviewer in REVIEWERS if reviewer["id"] in requested]


def render_agent_prompt(reviewer: dict[str, Any]) -> str:
    module_list = ", ".join(reviewer["modules"])
    return f'''執行唯讀內容稽核：只審閱課程，不修改任何檔案。你的範圍為 {module_list}；重點：{reviewer["focus"]}。

先讀 js/curriculum_data.js，必要時讀 index.html、README.md、js/app.js 以核對資料流與對外宣稱。內容可能很長，使用搜尋定位你的模組。外部搜尋只使用可開啟且可靠的原始來源（例如課程機構正式教材、雪場／雪崩安全機構、同行評審研究）；不可把搜尋摘要、其他 AI 或 repo 自述當證據。每項發現須附 repo 路徑與行號、原始來源 URL、來源所支持的具體內容。無法實際開啟或定位的來源標為 UNVERIFIED，不可補猜引文。

對每項問題輸出：嚴重度（critical/high/medium/low）、狀態（SUPPORTED/CONTRADICTED/CONTEXT_DEPENDENT/UNVERIFIED）、模組與精確位置、原稿逐字主張、來源與證據、建議修正（若無證據則只建議標待核驗或移除精確數字，不要發明新教學指令）、是否需合格教練／醫療人員核可。把安全、體能、醫療、雪崩、力學數字和技術口訣視為高風險；不得依模型記憶下結論，不得假裝你查過沒有開啟的來源。

最後列出：可直接做的低風險文字修正；需人工核准且標為「待教練核可」的內容修正；未能核驗的清單；參考來源。不得直接修改教材，也不要把修正寫回教材。報告使用繁體中文，若無法使用 web 工具，明確說明並將相關事實留為 UNVERIFIED。'''


def build_agent_command(
    *, claude: str, model: str, reviewer: dict[str, Any], repo: Path,
    skill_text: str, max_turns: int,
) -> list[str]:
    return [
        claude, "-p", "--model", model, "--effort", "high",
        "--max-turns", str(max_turns), "--permission-mode", "plan",
        "--permission-prompts", "none", "--setting-sources", "project",
        "--tools", ALLOWED_TOOLS,
        "--allowedTools", ALLOWED_TOOLS, "--output-format", "json",
        "--no-session-persistence", "--append-system-prompt", skill_text,
        render_agent_prompt(reviewer),
    ]


def _run_one(command: list[str], repo: Path, timeout: int) -> dict[str, Any]:
    completed = subprocess.run(command, cwd=repo, capture_output=True, text=True, timeout=timeout)
    try:
        response = json.loads(completed.stdout)
    except json.JSONDecodeError as exc:
        if completed.returncode:
            details = (completed.stderr + "\\n" + completed.stdout)[-3000:]
            raise RuntimeError(f"claude exited {completed.returncode}: {details}") from exc
        raise RuntimeError(f"Claude did not return JSON: {exc}; output={completed.stdout[-1500:]}") from exc
    if isinstance(response, dict) and response.get("is_error"):
        detail = "; ".join(response.get("errors", [])) or response.get("result", "")
        raise RuntimeError(f"Claude error ({response.get('subtype', 'unknown')}): {detail}")
    if completed.returncode:
        raise RuntimeError(f"claude exited {completed.returncode}: {completed.stderr[-3000:]} {response}")
    if not isinstance(response, dict) or not response.get("result"):
        raise RuntimeError("Claude returned an empty/unexpected response")
    return response


def run_reviews(
    *, repo: Path, output_dir: Path, model: str = "opus", max_turns: int = 24,
    timeout: int = 900, claude: str | None = None,
    reviewer_ids: list[str] | None = None,
) -> dict[str, Any]:
    repo = repo.resolve()
    skill_path = repo / ".agents/skills/snowboard-course-review/SKILL.md"
    if not skill_path.is_file():
        raise FileNotFoundError(f"Project skill missing: {skill_path}")
    skill_text = skill_path.read_text(encoding="utf-8")
    executable = claude or shutil.which("claude") or "claude"
    selected_reviewers = select_reviewers(reviewer_ids)
    output_dir = output_dir if output_dir.is_absolute() else repo / output_dir
    output_dir.mkdir(parents=True, exist_ok=True)
    if any(output_dir.iterdir()):
        raise FileExistsError(f"Refusing to overwrite non-empty review directory: {output_dir}")
    results: dict[str, dict[str, Any]] = {}
    failures: dict[str, str] = {}
    commands = {
        reviewer["id"]: build_agent_command(
            claude=executable, model=model, reviewer=reviewer, repo=repo,
            skill_text=skill_text, max_turns=max_turns,
        ) for reviewer in selected_reviewers
    }
    with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:
        futures = {
            pool.submit(_run_one, commands[reviewer["id"]], repo, timeout): reviewer
            for reviewer in selected_reviewers
        }
        for future in concurrent.futures.as_completed(futures):
            reviewer = futures[future]
            try:
                response = future.result()
                results[reviewer["id"]] = response
                (output_dir / f"{reviewer['id']}.json").write_text(
                    json.dumps(response, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
                )
            except Exception as exc:  # preserve every failure; never imply a complete review
                failures[reviewer["id"]] = str(exc)
    index = {
        "model": model,
        "completed_at": datetime.now().astimezone().isoformat(timespec="seconds"),
        "reviewer_count": len(REVIEWERS),
        "requested_count": len(selected_reviewers),
        "requested_reviewers": [reviewer["id"] for reviewer in selected_reviewers],
        "completed_count": len(results),
        "failures": failures,
        "reviewers": [
            {
                "id": reviewer["id"],
                "modules": reviewer["modules"],
                "status": (
                    "completed" if reviewer["id"] in results
                    else "failed" if reviewer["id"] in failures
                    else "not_run"
                ),
                "file": f"{reviewer['id']}.json" if reviewer["id"] in results else None,
            }
            for reviewer in REVIEWERS
        ],
        "run_complete": len(results) == len(selected_reviewers) and not failures,
        "complete": len(results) == len(REVIEWERS) and not failures,
    }
    (output_dir / "index.json").write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if failures:
        raise RuntimeError(
            f"Only {len(results)}/{len(selected_reviewers)} requested reviews completed; "
            f"see {output_dir / 'index.json'}"
        )
    return index


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=ROOT)
    parser.add_argument("--output-dir", type=Path, default=None)
    parser.add_argument("--model", default="opus")
    parser.add_argument("--max-turns", type=int, default=24)
    parser.add_argument("--timeout", type=int, default=900)
    parser.add_argument("--claude", default=None)
    parser.add_argument(
        "--reviewer", action="append", choices=[reviewer["id"] for reviewer in REVIEWERS],
        help="Run only this reviewer (repeat the option to select more than one).",
    )
    args = parser.parse_args(argv)
    outdir = args.output_dir or Path("docs/course-review/run-" + datetime.now().astimezone().strftime("%Y%m%d-%H%M%S"))
    try:
        index = run_reviews(
            repo=args.repo, output_dir=outdir, model=args.model,
            max_turns=args.max_turns, timeout=args.timeout, claude=args.claude,
            reviewer_ids=args.reviewer,
        )
        print(
            f"Completed {index['completed_count']}/{index['requested_count']} requested "
            f"read-only reviews; whole-course-complete={index['complete']} in {outdir}"
        )
        return 0
    except (OSError, RuntimeError, subprocess.SubprocessError) as exc:
        print(f"Review run incomplete: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

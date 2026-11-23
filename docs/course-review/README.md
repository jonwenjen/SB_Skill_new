# Agent-assisted curriculum review

This repository includes a project-local skill for Hermes Agent (`.agents/skills/`) and Claude Code (`.claude/skills/`). The same skill content is kept in both supported locations.

## Run a review

Requirements: Node.js, Python 3, Claude Code CLI authenticated with Opus access, and web search/fetch tools enabled for source verification.

```sh
python3 scripts/run_course_review.py
```

The runner starts five separate `claude -p --model opus` sessions sequentially by default to avoid session contention. Each is read-only: it receives Read/Grep/Glob/WebSearch/WebFetch only, has plan permissions, and cannot edit course files. It writes each raw JSON response plus `index.json` into a timestamped `docs/course-review/run-*` directory. The default `--max-turns` is 24. To retry only specific failed roles, repeat `--reviewer` in a new output directory; see `python3 scripts/run_course_review.py --help` for valid IDs. A successful subset run has `run_complete: true` but still `complete: false` until all five roles succeed. Review responses and citations still require human verification.

To direct output to a chosen new directory:

```sh
python3 scripts/run_course_review.py --output-dir docs/course-review/run-YYYYMMDD-HHMMSS
```

The runner refuses to overwrite a non-empty directory.

Example selective retry:

```sh
python3 scripts/run_course_review.py --output-dir docs/course-review/run-YYYYMMDD-HHMMSS \
  --reviewer foundations_safety --reviewer biomechanics_progression \
  --reviewer park_terrain --reviewer backcountry_integrity
```

## Build animation specifications

```sh
python3 scripts/build_animation_specs.py
```

This writes `docs/animation/animation-specs.json`, one draft record for each video media ID referenced by the curriculum, with a phase entry for each source action. Phase-level body-part, edge, COM, direction, and angle candidates are literal text matches only, not validated technique or approved graphics. Missing fields remain explicitly pending coach input; the manifest is a first-pass storyboard skeleton, not camera-ready. Timecodes stay unset. It does not generate or overwrite media.

## Validate

```sh
python3 -m unittest discover -s tests -v
```

For Hermes, launch the agent in this checkout and trust the project skills once with `hermes skills trust "$PWD"`. Claude Code discovers the project skill from `.claude/skills/`.

## Review boundaries

Treat source-based counts as file inventory only. A filename does not establish real-person provenance, consent, playback, expertise, or technical correctness. Do not silently revise safety, medical, biomechanics, rescue, avalanche, equipment, or movement advice: those changes require an opened reliable source and qualified human approval. Put unresolved or high-risk corrections in the review report.

## Current status

See [the 2026-11-23 audit status and proposed corrections](audit-status-2026-11-23.md). All ten modules have bounded, read-only review coverage, but this is not a complete source-by-source safety audit or professional approval. The 17:26 Claude run completed 4/5 roles (MOD-01–08); a separate Opus `backcountry_integrity` rerun later completed 1/1 for MOD-09/10. Across runs all five roles have outputs, but the rerun index still marks `complete=false`; only directly corroborated findings are integrated in the [MOD-09/10 report](mod-09-10-review-2026-11-23.md), and this is not a full source audit. Five independent module-pair artifacts provide bounded supplementary coverage across MOD-01–10; the MOD-01/02 supplement checks selected high-risk claims, not every claim in that pair. Read the saved reports for [MOD-01/02](mod-01-02-opus-review-2026-11-23.md), [MOD-03/04](mod-03-04-opus-review-2026-11-23.md), [MOD-05/06](mod-05-06-opus-review-2026-11-23.md), [selected MOD-01/02 claims](mod-01-02-selected-review-2026-11-23.md), [MOD-03/04 supplementary review](mod-03-04-review-2026-11-23.md), [MOD-07/08](mod-07-08-review-2026-11-23.md), and [MOD-09/10](mod-09-10-review-2026-11-23.md). The only curriculum edit was a one-character traditional-Chinese typo fix; no safety/technical instruction or simulator code changed. The 204 animation records / 516 phases remain a storyboard skeleton with literal, unverified cue candidates—not camera-ready specifications.

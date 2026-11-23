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

See [the 2026-11-23 audit status and proposed corrections](audit-status-2026-11-23.md). It records incomplete runner coverage and is not a course sign-off. The 07:13 selective Claude run completed only the MOD-01/02 role; the remaining requested roles hit the session limit. Separate read-only bounded reviews are available for [selected MOD-01/02 claims](mod-01-02-selected-review-2026-11-23.md), [MOD-03/04](mod-03-04-review-2026-11-23.md), [MOD-07/08](mod-07-08-review-2026-11-23.md), and [MOD-09/10](mod-09-10-review-2026-11-23.md); none is a full audit or approval. The 204 animation records / 516 phases are first-pass storyboard skeletons with literal, unverified cue candidates—not camera-ready specifications.

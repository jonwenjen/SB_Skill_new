# Agent-assisted curriculum review

This repository includes a project-local skill for Hermes Agent (`.agents/skills/`) and Claude Code (`.claude/skills/`). The same skill content is kept in both supported locations.

## Run a review

Requirements: Node.js, Python 3, Claude Code CLI authenticated with Opus access, and web search/fetch tools enabled for source verification.

```sh
python3 scripts/run_course_review.py
```

The runner starts five separate `claude -p --model opus` sessions sequentially to avoid session contention. Each is read-only: it receives Read/Grep/Glob/WebSearch/WebFetch only, has plan permissions, and cannot edit course files. It writes each raw JSON response plus `index.json` into a timestamped `docs/course-review/run-*` directory. A failed reviewer makes the run incomplete; review responses and citations still require human verification.

To direct output to a chosen new directory:

```sh
python3 scripts/run_course_review.py --output-dir docs/course-review/run-YYYYMMDD-HHMMSS
```

The runner refuses to overwrite a non-empty directory.

## Build animation specifications

```sh
python3 scripts/build_animation_specs.py
```

This writes `docs/animation/animation-specs.json`, one draft record for each video media ID referenced by the curriculum. It preserves source cues but marks them unverified, leaves timecodes unset, and requires qualified coach approval. It does not generate or overwrite media.

## Validate

```sh
python3 -m unittest discover -s tests -v
```

For Hermes, launch the agent in this checkout and trust the project skills once with `hermes skills trust "$PWD"`. Claude Code discovers the project skill from `.claude/skills/`.

## Review boundaries

Treat source-based counts as file inventory only. A filename does not establish real-person provenance, consent, playback, expertise, or technical correctness. Do not silently revise safety, medical, biomechanics, rescue, avalanche, equipment, or movement advice: those changes require an opened reliable source and qualified human approval. Put unresolved or high-risk corrections in the review report.

## Current status

See [the 2026-11-23 audit status and proposed corrections](audit-status-2026-11-23.md). It records incomplete reviewer coverage; it is not a course sign-off. The current Opus run completed only MOD-05/06 (1 of 5 reviewer roles). MOD-07/08 and MOD-09/10 remain unreviewed.

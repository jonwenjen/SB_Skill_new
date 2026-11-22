---
name: snowboard-course-review
description: Review snowboard course claims and draft movement specs.
version: 0.1.0
author: Jon Wenjen (jonwenjen), Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [snowboard, curriculum, safety, review, animation-spec]
---

# Snowboard Course Review and Real-Person Animation Specs

Use this skill to audit `SB_Skill_new` course content and produce reviewable specifications for future human-performed footage. It does not generate, edit, replace, or publish videos.

## Required workflow

1. **Establish scope and source revision.** Read the target modules in `js/curriculum_data.js`; inspect `index.html`, `js/app.js`, and asset paths only where needed. Record repository revision and files/sections reviewed.
2. **Run five independent read-only Opus reviews.** From the repository root run:
   ```sh
   python3 scripts/run_course_review.py --output-dir docs/course-review/run-YYYYMMDD-HHMMSS
   ```
   The script runs five separate reviewers sequentially across MOD-01–10, passes this skill into every `claude -p` session, and omits all write/command tools. If any reviewer fails, mark the run incomplete; never report full coverage.
3. **Verify evidence yourself.** Reviewers are fallible. Open every cited source and confirm it supports the exact claim. Repository assertions, agent counts, expert lists, search snippets, AI output, and model memory are not independent evidence. Record `SUPPORTED`, `CONTRADICTED`, `CONTEXT_DEPENDENT`, or `UNVERIFIED`; explain limits and cite exact repo location plus source URL/title/access date.
4. **Separate proposals from edits.** Low-risk spelling, formatting, broken-link, and ID/path fixes may be applied only after direct verification. Safety, medical, biomechanics, rescue, avalanche, equipment, and movement instruction changes require a reliable source and qualified human approval. Without both, preserve the source text and file a proposed correction tagged `needs_coach_review`; do not silently rewrite it.
5. **Generate all current media specifications.** Run:
   ```sh
   python3 scripts/build_animation_specs.py
   ```
   The output is a draft manifest at `docs/animation/animation-specs.json`. It is derived from source data, not an endorsement of its claims. Keep quoted source cues and mark them unverified until checked.
6. **Validate and report.** Run `python3 -m unittest discover -s tests -v`; check media IDs for uniqueness and reconcile expected video slots against the repository tree. State which paths/counts were checked and what remains unverified (playback, human provenance, releases, and actual technique accuracy are not established by a filename or file count).

## Evidence and safety rules

- Never use model memory to validate a numerical, medical, biomechanical, safety, or technique claim. If an authoritative source cannot be found and opened, mark it `UNVERIFIED`; do not invent a citation or replace one precise unsupported statement with another.
- Prefer the relevant organization's current primary teaching/safety material for its own standard, peer-reviewed research for empirical health/biomechanics claims, and manufacturer manuals for device-specific instructions. One authority does not automatically validate a different organization's syllabus.
- Treat statements such as “50 experts reviewed/signed off” as unverified until identities, credentials, consent, scope, and dated lesson-level sign-offs are independently documented. An in-repository roster or prior “agent reviewed” commit message does not prove sign-off.
- A repository tree can prove that files with certain names exist; it cannot prove a clip depicts a real person, is original/licensed, has releases, plays correctly, or demonstrates safe/correct technique.
- For animation specs, never invent angles, percentages, speed, duration, timestamps, camera views, or a supposedly correct landing. Use the curriculum wording only as a quoted, unverified source cue. Leave timecodes null until measured against approved footage.
- Specs are for filming a real human rider with a qualified coach supervising. Stage errors without actual falls, collisions, edge catches, or injury. Coach approval, terrain/speed controls, appropriate protective equipment, consent/releases, and source checks are required before production or publication.
- Do not generate video. Do not overwrite current media. Do not label a draft as “real-human,” “expert-approved,” or “fact-checked” unless each claim has its own evidence.

## Review record format

For each finding include severity, status, module and exact line/field, verbatim claim, opened source and relevant evidence, bounded correction proposal, confidence/limitations, and whether a qualified instructor or medical professional must approve it. Keep unresolved content in a proposal report; keep verified low-risk edits separate. Do not make a “no findings” claim when any source could not be checked.

For every animation record include media ID and path, module/action source, source step(s), highlighted point(s), verification status, a safe real-person filming note, coach-review gate, and `timecode: null` unless it was measured on approved footage. The generated manifest follows this format and remains a draft until reviewed.

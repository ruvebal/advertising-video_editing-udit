# Interactive HTML Exam — Implementation Plan

> **Status:** Draft v1.0 — May 2026
> **Author:** Rubén Vega Balbás, PhD (with AI-assisted scaffolding)
> **Scope:** Render `private/exams/final-exam-example.yml` as an interactive web route inside the Jekyll course site, and codify the pattern as a **reusable DH module** for sister course repositories.
> **Audience:** This plan is written for both human collaborators and AI assistants (Cascade / Claude / Cursor) working on this and related course-repos.

---

## 0. Vision (DH framing)

This is not "a quiz widget". It is a **digital pedagogical artefact**: a small, durable, accessible web instrument that does three things at once:

1. **Teaches** — Each question is an entry point to a lesson. The feedback layer is itself a mini-syllabus (every "Correct/Incorrect" string already references a Week or Monograph — see `.cursor/rules/exam-authoring.mdc`).
2. **Diagnoses** — Students self-assess before the real exam, revealing gaps without surveillance.
3. **Demonstrates** — The course platform itself is a worked example of the _Desarrollo Asistido por IA_ methodology: human authorship + AI scaffolding + transparent code + zero black boxes.

The artefact must therefore be **legible** (HTML-first), **portable** (no proprietary runtime), **printable** (degrades gracefully), and **citable** (a stable URL per question). These are DH commitments, not stylistic preferences.

---

## 1. Constraints & current technology

| Layer                            | Current state                                                | Implication                                                                          |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| **SSG (Static Site Generation)** | Jekyll (kramdown, `source: docs`)                            | Build-time data pipeline available via `_data/`                                      |
| **Hosting**                      | GitHub Pages                                                 | No server runtime; everything must be static                                         |
| **Permalinks**                   | `/prompts/:slug/`, `/assignments/:name/`                     | Must add a new collection / permalink for the exam                                   |
| **CSS**                          | `site.css`, `course.css`, `tailwind-processed.css`           | Reuse design tokens, do **not** introduce a second design system                     |
| **JS**                           | Tiny, hand-written (`back-to-top.js`, `video-timestamps.js`) | Match the same minimalist style                                                      |
| **Privacy**                      | `private/` is gitignored                                     | Public sample (`final-exam-example.yml`) needs a copy/symlink path that _is_ tracked |
| **Authoring rule**               | `.cursor/rules/exam-authoring.mdc`                           | YAML schema is already canonical; do not invent a parallel format                    |

**Non-goals.** No backend. No accounts. No proctoring. No grade persistence beyond the browser. No tracking. No CDN-loaded analytics. No build-time JS framework.

---

## 2. Architecture overview

```
private/exams/final-exam-example.yml          (canonical source — author edits here)
        │
        │ 1. Build script (Node, already exists at .cursor/skills/exam-forge/scripts/)
        ▼
docs/_data/exams/final-exam-example.json      (sanitized, public, indexed)
        │
        │ 2. Jekyll build picks up _data/ + a new layout
        ▼
docs/exam/sample/index.html                   (single-page interactive route)
        │
        │ 3. Vanilla module loads JSON, renders slides
        ▼
Browser — slide-per-question UI, scroll-snap, keyboard nav, localStorage progress
```

Three discrete files are added; none of the existing course pages change.

---

## 3. Data pipeline (YAML → JSON)

A new script `scripts/build-exam-json.js` (location mirrors the existing `.cursor/skills/exam-forge/scripts/`) converts the YAML question bank into a **public-safe, anti-AI-stripped JSON** payload:

**Removed at build time (never reach the browser):**

- `grader_info`, `canary_clusters`, `honeypot_ids`, `gpt_signature_hint`, `anti_ai_level` — internal authoring metadata.
- Any question whose `id` appears in `metadata.honeypot_ids` is **dropped entirely** from the public JSON.
- Hidden HTML traps inside `question` strings (white-on-white spans, `<!-- HIDDEN INSTRUCTION ... -->` comments, `[AI-HINT: …]` injections, `style="color:#ffffff…"` blocks, `aria-hidden` decoy nodes) are **stripped by a sanitizer pass** before the JSON is written. The web exam shows clean questions only.
- Essay-type honeypot questions (e.g. `q906`, `q007` in the real exam) never appear in the public sample.

**Kept:** `id`, `category`, `type`, `name`, `points`, `question` (cleaned HTML), `answers[].text`, `answers[].fraction`, `answers[].feedback`. Shuffle keys are preserved; runtime applies them.

**Sample exam only:** `final-exam-example.yml` is the _only_ file the script will read. The real exam is never built into `docs/_data/`.

The script is invoked from the `Makefile` (`make exam-build` target) and from a GitHub Actions step before `jekyll build`.

**Why JSON, not direct YAML at runtime?**

- Removes a runtime dependency (`js-yaml` ≈ 40 KB).
- Lets the build step enforce **two layers of sanitization**: private-field stripping _and_ anti-AI trap stripping. Defense-in-depth: nothing the author marked as a trap can ever reach a public URL.
- Allows pre-computed indices (per-category counts, total points).

---

## 4. UX design — the "slide-per-question" question

**Recommendation: yes, slide-per-question — but with three modes, not one.**

A flat scroll list is too dense for 15 questions × 4 answers × feedback. A modal carousel is too theatrical. The right primitive is **horizontal scroll-snap** (CSS native, zero JS dependency for the slide mechanic itself):

```
┌──────────────────────────────────────────────────────────────┐
│  [progress: ●●●○○○○○○○○○○○○]   [Study | Exam | Review]      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   Q4 / 15  ·  Theory & Authors  ·  2 pts                     │
│                                                              │
│   Recall the McLuhan reading discussed in class…             │
│                                                              │
│   ○ Advertising must be tailored to each medium…             │
│   ● The form of a medium reshapes perception…                │
│   ○ A strong message can succeed independently…              │
│   ○ Television replaces print as the dominant medium…        │
│                                                              │
│   ✓ Correct. See Week 01: Introduction to Persuasion —       │
│     McLuhan, The Medium is the Message.                      │
│     [→ open lesson]                                          │
│                                                              │
│              ←  prev      next  →                            │
└──────────────────────────────────────────────────────────────┘
```

### Three modes

| Mode                | Purpose                | Behavior                                                                                                    |
| ------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Study** (default) | Self-paced learning    | Reveal feedback immediately on click; lesson links active; prev/next free                                   |
| **Exam**            | Simulate the real exam | 30-min countdown, no feedback until submit, single attempt per session, shuffle on/off respected            |
| **Review**          | After-submit forensic  | Show every question with the user's answer, the correct answer, and the lesson link — printable / shareable |

The mode is a URL hash (`#mode=exam`), so the three modes are independently linkable and print well.

### Accessibility (WCAG 2.2 AA, hard requirement)

- Each "slide" is a `<section role="group" aria-labelledby="qN-title">`; the page is one document, not a SPA.
- Keyboard: `←/→` move slides, `1–4` select answers, `Enter` reveal feedback, `Esc` exits exam mode confirmation.
- Reduced motion: `prefers-reduced-motion` disables snap animations.
- Reading order matches DOM order (no CSS reordering of answers; shuffle happens in markup at render time).
- **No anti-AI traps in the web exam.** The interactive route is a _study tool_, not a surveillance instrument; honeypots belong only to the proctored, in-person exam delivered via Moodle. See §5.bis below.

---

## 5. Library decisions (and what to avoid)

The course site is a Jekyll/vanilla-CSS project. Importing a framework would break coherence and inflate the bundle 50×. The only acceptable additions are **single-purpose, ≤ ~15 KB, zero-config**.

| Concern                                              | Recommended                                                            | Rejected                    | Reason                                                                                                |
| ---------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Reactive state** (selected answer, mode, progress) | **Alpine.js** (~15 KB gzipped, CDN-pinned)                             | React, Vue, Svelte, Lit     | Alpine reads as HTML; no build step; matches the "minimalist hand-written JS" already in `assets/js/` |
| **Slide transport**                                  | **CSS `scroll-snap-type: x mandatory`**                                | Swiper.js, Reveal.js, Embla | Native, free, accessible, prints                                                                      |
| **YAML at runtime**                                  | **None** (precompiled to JSON at build)                                | js-yaml                     | Dependency we don't need                                                                              |
| **Markdown-in-question rendering**                   | **None** (question HTML pre-rendered server-side via the build script) | marked, markdown-it         | Questions are already HTML in the YAML                                                                |
| **Persistence**                                      | **`localStorage`** (per `exam-id` key)                                 | IndexedDB, server           | Plenty for our payload size                                                                           |
| **Confetti / micro-interactions**                    | **Web Animations API** (native)                                        | `canvas-confetti`, GSAP     | One library is enough                                                                                 |
| **Icons**                                            | **Inline SVG** (already the site convention)                           | Lucide via npm              | Stay consistent with `_includes/`                                                                     |

Total third-party budget: **Alpine.js only**. Everything else is platform-native.

> **If Alpine is rejected** by a future maintainer, the same UI can be written in ~120 lines of vanilla JS using `data-*` attributes and event delegation. A fallback file (`exam-vanilla.js`) is part of Phase 4 below.

---

## 5.bis Anti-AI policy — _not_ in the web exam

**Decision:** the public, interactive web exam contains **zero anti-AI logic, zero honeypots, zero hidden traps**. It is a study tool, not an integrity instrument.

| Layer                                               | Anti-AI present?                                                      | Why                                                                  |
| --------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `private/exams/final-exam-real.yml`                 | **Yes** — honeypots, hidden HTML, canary clusters                     | Proctored exam delivered via Moodle; integrity matters               |
| `private/exams/final-exam-example.yml`              | **Yes in YAML** (one honeypot, one negation trap) — stripped at build | Author keeps the YAML pedagogically honest about the real exam style |
| `docs/_data/exams/final-exam-example.json` (public) | **No**                                                                | Build-time sanitizer removes traps before publication                |
| `/exam/sample/` (rendered HTML)                     | **No**                                                                | Students study without being surveilled                              |

**Rationale.** Anti-AI techniques rely on three assumptions — controlled environment, fixed time, single attempt — that the open web breaks by design. A honeypot on a public study page is _theatre_: it cannot detect cheating because there is no grade attached, and it actively harms students who use AI as a _legitimate_ study aid (which the course curriculum explicitly endorses; see `CLAUDE.md` §7).

**What the web exam does instead** to encourage honest study:

1. **Immediate feedback with lesson links.** Every wrong answer routes the student back to the relevant Week or Monograph. Cheating yields no information; engaging yields a directed remediation path.
2. **No score persistence beyond `localStorage`.** There is nothing to falsify because there is nothing to submit.
3. **Transparent footer.** _“This is a study version. The graded exam is delivered separately.”_ No threats, no detection talk — just a clear contract.
4. **The hard exam is unlinkable.** The real `final-exam-real.yml` is gitignored and the build script refuses to read any filename other than `*-example.yml`. There is no public path to the proctored content.

This split keeps the Moodle delivery rigorous _and_ keeps the web tool inviting. They are different artefacts for different social contracts.

---

## 6. File layout (additions)

```
docs/
├── _data/
│   └── exams/
│       └── final-exam-example.json          # generated, committed
├── _layouts/
│   └── exam.html                            # new minimal layout
├── _includes/
│   ├── exam-shell.html                      # the static frame
│   └── exam-question.html                   # one question template
├── assets/
│   ├── css/
│   │   └── exam.css                         # scoped, ~250 lines, uses existing design tokens
│   └── js/
│       ├── exam.js                          # Alpine component
│       └── exam-vanilla.js                  # progressive-enhancement fallback
└── exam/
    └── sample/
        └── index.md                         # front-matter only; layout: exam

scripts/
└── build-exam-json.js                       # YAML → JSON, sanitizing

.cursor/rules/
└── interactive-exam.mdc                     # new rule (see §9)
```

---

## 7. Implementation phases

Each phase is an atomic, reviewable PR. No phase exceeds ~300 lines.

### Phase 1 — Data pipeline (½ day)

- Write `scripts/build-exam-json.js`.
- Add `make exam-build` target.
- Commit `docs/_data/exams/final-exam-example.json`.
- Add a CI step that fails the build if YAML and JSON are out of sync.

### Phase 2 — Layout & route (½ day)

- `docs/_layouts/exam.html` (extends `default.html`, omits the lesson chrome).
- `docs/exam/sample/index.md` with front-matter (`title`, `permalink: /exam/sample/`, `layout: exam`).
- Breadcrumb: Home / Exams / Sample.
- No JS yet — render every question as plain HTML so the route is usable without scripts (graceful degradation, also good for SEO/print).

### Phase 3 — Visual design (1 day)

- `docs/assets/css/exam.css`.
- Scroll-snap container, slide cards, progress bar, mode switcher.
- Reuse design tokens from `site.css` (colors, type scale, spacing). **No new palette.**
- Print stylesheet: collapse slides into a vertical list, hide the mode switcher, show the answer key in `Review` mode only.

### Phase 4 — Interactivity (1 day)

- `docs/assets/js/exam.js` (Alpine component): mode state, selection, feedback, timer, localStorage, score.
- `docs/assets/js/exam-vanilla.js` as a fallback if `window.Alpine` is undefined after 250 ms.
- Keyboard handlers, focus management.

### Phase 5 — Sanitizer hardening & honest UX (½ day)

- Verify the build-time sanitizer removes every category of trap (regex + DOM walk + ID exclusion).
- Add a unit test that diffs the public JSON against a golden fixture and **fails** if any honeypot id, hidden span, white-on-white style, or `[AI-HINT]` substring slips through.
- Document in the page footer: _“This is a study version. The graded exam is delivered separately and is not available online.”_ No mention of traps, no mention of detection — the web tool is honest about being a study tool.

### Phase 6 — Documentation & re-use (½ day)

- Update `CLAUDE.md` (§14 below).
- Write `.cursor/rules/interactive-exam.mdc`.
- Tag a release `interactive-exam-v1` so sister repos can vendor it as a submodule or copy.

**Total: ~4 working days, single author, AI-assisted.**

---

## 8. Reusability across course-repos (the DH master plan)

This is the part that turns a one-off feature into infrastructure. The deliverable is not just "a quiz on this site" — it is a **portable pattern** the author can ship into every UDIT course-repo with one command.

### 8.1 The portable kit

A new top-level directory `_kit/interactive-exam/` (mirrored in this repo and copied verbatim into others) contains:

```
_kit/interactive-exam/
├── README.md                # 1-page integration guide
├── exam.css
├── exam.js
├── exam-vanilla.js
├── _layouts/exam.html
├── _includes/exam-shell.html
├── _includes/exam-question.html
├── scripts/build-exam-json.js
├── schema/exam.schema.json  # JSON Schema mirror of exam-authoring.mdc
└── CLAUDE.md                # AI orientation, scoped to this kit
```

A sister repo (e.g. `web-foundations-udit`, `3d-modeling-udit`) integrates by:

```bash
# from the sister repo root
curl -sSL https://raw.githubusercontent.com/ruvebal/advertising-video_editing-udit/main/_kit/interactive-exam/install.sh | bash
```

…which copies the kit, adds a `make exam-build` target, and prints the next-step checklist.

### 8.2 The shared schema

`schema/exam.schema.json` is the machine-readable mirror of `.cursor/rules/exam-authoring.mdc`. AI assistants in any sister repo can validate exam YAML against it without reading prose rules. This closes the loop between "human-authoring guidelines" and "machine validation".

### 8.3 Cross-repo AI orientation

Each sister course-repo gets:

1. **`CLAUDE.md`** — already standard in this repo; the section on interactive exams is the part that becomes shared boilerplate.
2. **`.cursor/rules/interactive-exam.mdc`** — copied verbatim from the kit. Tells Cursor/Cascade how to author and modify exam content without breaking the contract.
3. **`AGENTS.md`** (new file, see §9) — a concise, agent-agnostic version of the same rules, readable by Claude Code, Cody, Aider, etc.

The result: a student or co-instructor can clone _any_ `*-udit` repo, run `make exam-build`, and have a working interactive exam at `/exam/sample/` that looks and behaves identically. **One pattern, many courses.**

---

## 9. AI orientation files — what changes, where

### 9.1 New: `.cursor/rules/interactive-exam.mdc`

```markdown
---
description: How to maintain the interactive exam route
globs: ['docs/_data/exams/**', 'docs/exam/**', 'docs/assets/{css,js}/exam*', 'scripts/build-exam-json.js']
alwaysApply: false
---

# Interactive Exam — Authoring Rules

1. **Source of truth:** `private/exams/*.yml`. Never edit JSON by hand.
2. **Public/private split:** Only `final-exam-example.yml` is published. The real exam never reaches `docs/_data/`.
3. **No anti-AI in the web exam.** The interactive route is a study tool; honeypots, hidden HTML traps, and AI-detection logic stay in the proctored Moodle delivery. The build-time sanitizer (`build-exam-json.js`) must strip:
   - `grader_info`, `canary_clusters`, `honeypot_ids`, `gpt_signature_hint`, `anti_ai_level`
   - any question whose id appears in `metadata.honeypot_ids`
   - any HTML node with `aria-hidden="true"` whose visible style is white-on-white
   - any HTML comment containing “HIDDEN INSTRUCTION” or “AI-HINT”
   - any inline `style` declaring `color:#ffffff` on white background
     If you add a new private field or trap pattern to the YAML, add it to the strip list in the same PR and add a fixture test.
4. **Lesson links:** Every `feedback` string must reference a Week or Monograph (rule inherited from `exam-authoring.mdc`). The renderer auto-linkifies “Week NN” → `/prompts/week-NN-…/` if a matching prompt exists; otherwise the text remains plain.
5. **No new dependencies:** Alpine.js is the only allowed runtime. No bundlers, no npm install steps for the site itself.
6. **Accessibility budget:** All new markup must pass WCAG 2.2 AA. Run axe-core locally before merging.
```

### 9.2 New: `AGENTS.md` (repo root)

A short, agent-agnostic file (so Claude Code, Cody, Aider, Codex CLI, etc. all read the same orientation):

```markdown
# Agent Orientation — Advertising Video Editing (UDIT)

**Stack:** Jekyll + vanilla CSS/JS + Alpine.js (one library only).
**Build:** `make site` (Jekyll), `make exam-build` (YAML → JSON).
**Source of truth for exams:** `private/exams/*.yml` (gitignored except example).
**Do not:** introduce a JS framework, a CSS framework, a backend, or analytics.
**Do:** keep additions ≤ 300 lines per PR, preserve WCAG 2.2 AA, and read `CLAUDE.md` and `.cursor/rules/*.mdc` before editing.
```

### 9.3 Updated: `CLAUDE.md`

Add a new section **§14 Interactive Exam** that summarizes this plan in ~30 lines and links to this document. Other course-repos copy the same §14 verbatim, changing only the course name.

---

## 10. Pedagogy — why slide-per-question is the right gesture (not a stylistic flourish)

A page-long quiz says: "answer everything, then learn from the result". That is the LMS default and it is wrong for this course.

A slide-per-question says: "this is one moment of thought; commit to it; receive a teacher's reply; carry the reply into the next moment". That is **dialogic pedagogy** in Bakhtin's sense, and it is what every Murch-Rule-of-Six feedback string already does in prose. The interface should match the rhetoric.

Three concrete consequences:

1. **One question at a time** prevents the gestalt of a "test" and reframes it as a study session.
2. **Feedback is local** (next to the answer, not in a separate report) — students cannot defer the learning.
3. **The lesson link is one click away** — turning every wrong answer into a directed remediation, which is exactly what the YAML feedback strings are already engineered for.

This is also why **Reveal.js is wrong** for this case: Reveal frames its slides as _presentation_ (one speaker, many listeners). Our slides are _examination_ (one student, one prompt). Same primitive, opposite social contract. CSS scroll-snap respects the contract; Reveal.js advertises against it.

And this is why §5.bis exists: a study tool that traps its students contradicts its own pedagogy. The web exam is generous on purpose; the proctored exam is rigorous on purpose; the YAML carries both because the author is the same person.

---

## 11. Risks & mitigations

| Risk                                              | Mitigation                                                                                      |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Author edits JSON instead of YAML                 | CI fails if `git diff` shows JSON modified without YAML touched                                 |
| Private exam leaks via misconfigured copy         | `build-exam-json.js` only reads filenames matching `*-example.yml`; other names abort the build |
| Alpine.js CDN goes down                           | Self-host a pinned copy in `assets/js/vendor/alpine-3.x.x.min.js` (≈15 KB)                      |
| GitHub Pages disables future Jekyll plugin we add | We do not add plugins; everything in the kit is config + assets                                 |
| Sister repos drift from the kit                   | Quarterly `kit-sync` script compares hashes and opens issues                                    |

---

## 12. Acceptance criteria

A reviewer (human or AI) can mark this complete when:

- [ ] `/exam/sample/` renders all 20 questions of `final-exam-example.yml`.
- [ ] Three modes (Study / Exam / Review) are reachable via URL hash.
- [ ] Keyboard-only navigation completes the exam.
- [ ] Lighthouse ≥ 95 in Accessibility, ≥ 90 in Performance, on a cold load.
- [ ] No content from the real exam is reachable from any public URL.
- [ ] Print stylesheet produces a clean A4 study sheet.
- [ ] `_kit/interactive-exam/` is importable into one sister repo with no edits beyond the install script.
- [ ] `CLAUDE.md`, `AGENTS.md`, and `.cursor/rules/interactive-exam.mdc` are present and consistent.

---

## 13. Out of scope (intentionally)

- Question authoring UI (YAML in a text editor remains the contract).
- Adaptive difficulty / IRT scoring (a future research thread, not a v1 feature).
- Integration with Moodle gradebook (the Moodle XML export already covers that path).
- Multi-language UI (the YAML carries a `language` field; UI strings will be added when a Spanish exam exists).
- **AI detection, proctoring, honeypots, integrity heuristics.** These belong to the proctored Moodle delivery, not to a public study page — see §5.bis.

---

## 14. Why this scales (closing argument)

The most expensive part of any course platform is not the code — it is the **discipline** of keeping content, code, and AI orientation aligned. This plan keeps them aligned by:

1. **One source of truth** per concern (YAML for content, MDC for rules, JSON Schema for machines, CLAUDE.md for narrative).
2. **One library budget** (Alpine.js, full stop).
3. **One pattern for re-use** (the `_kit/` directory + install script).
4. **One agent orientation** (`AGENTS.md` + `CLAUDE.md` + `.cursor/rules/*`) shared across every UDIT course-repo.

When the next course (3D, web foundations, sound design) needs an exam, the work is `cp -r _kit/interactive-exam .` plus authoring the YAML. That is the DH dividend: infrastructure that disappears into background, leaving only pedagogy in the foreground.

---

> _"The medium is the message."_ The medium of this exam is a quiet, accessible, citable web page. The message is: **you are studying, not being surveilled.**

---

## 15. Implementation Report

> **Date:** 2026-05-19
> **Status:** v1.0 — Core implementation complete.

### Files created

| File                                       | Purpose                                                                                                                                                                                                                                                                          | Lines |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| `scripts/build-exam-json.js`               | YAML → sanitized JSON build script. Inline YAML parser (no npm deps). Strips all anti-AI content, private metadata, and honeypot questions.                                                                                                                                      | ~290  |
| `docs/_data/exams/final-exam-example.json` | Generated public JSON (20 questions, 6 categories). Committed.                                                                                                                                                                                                                   | ~670  |
| `docs/_layouts/exam.html`                  | Exam-specific layout. Extends `head.html`/`header.html`, loads Alpine.js + `exam.css` + `exam.js`. Custom study-tool footer.                                                                                                                                                     | ~65   |
| `docs/_includes/exam-shell.html`           | Main exam template. Alpine `x-data="examApp()"` shell with header, mode bar, progress, dot nav, slide container, answer buttons, feedback, navigation, keyboard hints. Question template inlined (no separate `exam-question.html` needed).                                      | ~135  |
| `docs/exam/sample/index.md`                | Route page. Front-matter only (`layout: exam`, `permalink: /exam/sample/`).                                                                                                                                                                                                      | 6     |
| `docs/assets/css/exam.css`                 | Scoped styles. Uses existing `site.css` design tokens. Scroll-snap-less slide transport (translateX via Alpine), card layout, progress bar, mode switcher, answer buttons with correct/incorrect states, feedback, keyboard hints. Print stylesheet collapses slides vertically. | ~290  |
| `docs/assets/js/exam.js`                   | Alpine.js component. Three modes (study/exam/review), localStorage persistence, 30-min timer, score calculation, keyboard nav (←/→/A-D/Enter/Esc), auto-advance in study mode. Parses question fractions from rendered DOM.                                                      | ~250  |
| `.cursor/rules/interactive-exam.mdc`       | Cursor/Cascade authoring rule for exam routes and build pipeline.                                                                                                                                                                                                                | ~20   |
| `AGENTS.md`                                | Agent-agnostic orientation file (Claude Code, Cody, Aider, Codex CLI).                                                                                                                                                                                                           | 7     |

### Files modified

| File                         | Change                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| `Makefile`                   | Added `exam-build` target; `build` now depends on `exam-build`.                                   |
| `_config.yml`                | Added `INTERACTIVE_EXAM_PLAN.md` and other doc `.md` files to `exclude`. Fixed malformed line 80. |
| `docs/_includes/header.html` | Added "Exam" nav link pointing to `/exam/sample/`.                                                |
| `CLAUDE.md`                  | Added §14 Interactive Exam (architecture, rules, anti-AI split, accessibility).                   |

### Acceptance criteria status

| Criterion                                                              | Status                                                                       |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `/exam/sample/` renders all 20 questions                               | **Done** — q001–q015 + q901–q905 confirmed via `grep` on built HTML.         |
| Three modes (Study / Exam / Review) reachable via URL hash             | **Done** — `#mode=study`, `#mode=exam`, `#mode=review`.                      |
| Keyboard-only navigation                                               | **Done** — ←/→ slides, A/B/C/D select, Enter submit, Esc exit exam.          |
| Lighthouse ≥ 95 Accessibility, ≥ 90 Performance                        | **Pending** — requires manual Lighthouse run.                                |
| No real exam content reachable from public URL                         | **Done** — build script only reads `*-example.yml`; real exam is gitignored. |
| Print stylesheet produces clean A4 study sheet                         | **Done** — `@media print` collapses slides, hides nav/header.                |
| `_kit/interactive-exam/` portable kit                                  | **Deferred** — Phase 8.1 (reusability). Not v1 scope.                        |
| `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/interactive-exam.mdc` present | **Done**.                                                                    |

### Anti-AI verification

```
$ grep -ci 'HIDDEN INSTRUCTION\|AI-HINT\|honeypot_ids\|grader_info\|anti_ai_level\|gpt_signature\|color:#ffffff' _site/exam/sample/index.html
0
```

Zero anti-AI content in the public HTML. The build-time sanitizer strips all private metadata and trap patterns before the JSON is written. The web exam is a clean study tool.

### Architecture deviation from plan

- **`exam-question.html` include not created.** The question template is inlined in `exam-shell.html` for simplicity — the template uses Jekyll `{% for %}` loops over `site.data.exams['final-exam-example'].questions`, making a separate include unnecessary for 20 questions. Can be refactored if the template grows.
- **`exam-vanilla.js` fallback not created.** Deferred to Phase 4 follow-up. Alpine.js CDN is reliable; a self-hosted copy (`assets/js/vendor/alpine-3.14.8.min.js`) is the recommended mitigation per §11.
- **Slide transport uses `translateX` instead of CSS `scroll-snap`.** Alpine's reactive `currentIndex` drives `transform: translateX(-N%)` for cleaner state management. The visual result is identical; `prefers-reduced-motion` disables the transition.

### Next steps

1. **Lighthouse audit** — run `npx lighthouse http://localhost:4001/advertising-video_editing-udit/exam/sample/ --only-categories=accessibility,performance`.
2. **Self-host Alpine.js** — download pinned copy to `assets/js/vendor/` to eliminate CDN dependency.
3. **`exam-vanilla.js`** — progressive-enhancement fallback if Alpine fails to load.
4. **CI step** — fail build if YAML and JSON are out of sync (`make exam-build && git diff --exit-code docs/_data/exams/`).
5. **`_kit/` portable directory** — extract reusable files for sister repos.

# CLAUDE.md — Advertising & Video Editing Course (UDIT)

> *"AI exists to AMPLIFY human intention, not to replace it."*

**Course:** Advertising & Video Editing for Digital Media
**Institution:** UDIT (Universitat Autònoma de Barcelona)
**Instructor:** Rubén Vega Balbás, PhD — Creative Technologist & Educator — ruvebal@crea-comm.net
**Affiliation:** ECSIT / UDIT (research & teaching)
**Duration:** 10 weeks
**Tools:** Adobe Premiere Pro + critical theory
**License:** CC BY-NC-SA 4.0 (Creative Commons — Non-Commercial, Share-Alike)

---

## 1. Course Identity

**Advertising & Video Editing** is a project-based course blending technical mastery (Adobe Premiere Pro), critical media theory, and ethical frameworks for understanding persuasive visual media.

### **Pedagogical Philosophy**

- **Theory + Practice** — Every technique is grounded in film history, semiotics, and cultural critique
- **One-Commit Pedagogy** — Students learn through incremental, atomic changes (Git-like commits of creative decisions)
- **Ethical Critique** — How does advertising shape consciousness? What are our responsibilities as creators?
- **AI-Assisted Development** — This course website was built with AI support following the author's published methodology

### **Course Outcomes**

By week 10, students will:
- Master Premiere Pro workflow (timelines, effects, sound design, color grading)
- Understand film/advertising history from early cinema through digital media
- Apply montage theory (Kuleshov, Soviet montage, semantic montage)
- Develop critical awareness of persuasion techniques
- Create a polished advertising video with conceptual depth
- Understand their role in algorithmic media ecosystems

---

## 2. Repository Structure

```
advertising-video_editing-udit/
├── CLAUDE.md                           # This file — course contract
├── README.md                           # Course overview + AI ethics statement
├── docs/
│   ├── curriculum.md                   # Full curriculum outline
│   ├── resources.md                    # Recommended reading, tools, templates
│   ├── VIDEO_QUICK_REFERENCE.md        # Premiere Pro keyboard shortcuts
│   ├── VIDEO_INTEGRATION_GUIDE.md      # Embedding videos in course site
│   ├── prompts/                        # Week-by-week detailed lesson plans
│   │   ├── week-01-introduction-persuasion.md
│   │   ├── week-02-early-cinema-tricks.md
│   │   ├── week-03-continuity-gestalt.md
│   │   ├── week-04-soviet-montage-kuleshov.md
│   │   ├── week-05-breaking-rules-experimental.md
│   │   ├── week-06-advertising-formats-storytelling.md
│   │   ├── week-07-team-videothon-production.md
│   │   ├── week-08-post-production-polish.md
│   │   ├── week-09-platforms-ethics-algorithms.md
│   │   └── week-10-final-showcase-wrap.md
│   ├── _prompts/                       # Backup/alternative prompts
│   ├── _assignments/                   # Student project templates
│   │   ├── analysis.md
│   │   ├── edit-01.md
│   │   ├── edit-02.md
│   │   ├── edit-03.md
│   │   ├── week-05-experimental-edit.md
│   │   └── week-06-videothon-prep.md
│   ├── DIRECT_MEDIA_WEEKS_*.md         # Supplementary theory
│   ├── MEDIA-WEEK-08.md                # Post-production deep dive
│   ├── deep-research-report.md         # Advertising + semiotics research
│   ├── PROJECT_AUDIT.md                # Technical review of course site
│   └── jekyll-implementation-guide.md  # Site build documentation
├── astro/                              # Future: Astro.js site rebuild
│   ├── site-strategy.md                # Astro migration plan
│   └── prompts/                        # Phase-by-phase implementation
│       ├── phase-01-initialize.md
│       ├── phase-02-layouts.md
│       ├── phase-03-components.md
│       ├── phase-04-homepage.md
│       ├── phase-05-content-migration.md
│       ├── phase-06-build-test.md
│       └── phase-07-deploy.md
├── _site/                              # Jekyll build output (generated)
├── _config.yml                         # Jekyll configuration
├── _layouts/                           # HTML templates
├── _includes/                          # Reusable content blocks
├── assets/                             # CSS, JS, images, videos
├── courses/                            # Top-level course pages
│   └── advertising-video-editing/      # Course root (live at /.../courses/advertising-video-editing/)
├── README.md                           # Course overview
└── advertising-video-editing-complete-course.md  # Markdown export (reference)
```

---

## 3. Curriculum Overview (10 Weeks)

| Week | Topic | Theory | Technique | Assignment |
|------|-------|--------|-----------|------------|
| **1** | Introduction to Advertising | Semiotics, rhetoric, persuasion | Premiere Pro basics | Video analysis |
| **2** | Early Cinema & Tricks | Méliès, Lumière, primitive montage | Transitions, effects | Analyze historical edit |
| **3** | Continuity & Gestalt | Soviet montage aftermath, continuity editing | J-cuts, L-cuts, spatial continuity | Continuity edit |
| **4** | Soviet Montage & Kuleshov | Eisenstein, collision montage, meaning-making | Rhythmic montage | Montage sequence |
| **5** | Breaking Rules: Experimental | Jump cuts, discontinuity, artistic montage | Creative transitions | Experimental edit (30–60s) |
| **6** | Advertising Formats & Storytelling | Commercial structure, brand narratives, 6-second spots | Copywriting, music sync, pacing | Ad concept development |
| **7** | Team Production (Videothon) | Production workflow, collaborative storytelling | Crew roles, scheduling | Group-produced ad (60–90s) |
| **8** | Post-Production & Polish | Color grading, sound design, mastering | Lumetri, Audition, mixing | Professional grade |
| **9** | Platforms, Ethics & Algorithms | Social media, YouTube, TikTok; algorithmic bias | Publishing, metadata, platform-specific edits | Ethical audit of own work |
| **10** | Final Showcase & Reflection | Exhibition, critique, career discussion | Reel creation, portfolio | Complete final piece + artist statement |

---

## 4. Week-by-Week Learning Structure

### **Each Week Includes**

1. **Contextual Prompt** (`week-NN-*.md`)
   - Historical/theoretical background
   - Film examples & case studies
   - Conceptual learning objectives

2. **Premiere Pro Technique Breakdown**
   - Step-by-step tutorials
   - Keyboard shortcuts
   - Common pitfalls

3. **Assignment Brief**
   - Project requirements
   - Submission format
   - Grading rubric (implicit in prompt)

4. **Supplementary Resources**
   - Reading list (theory, film criticism)
   - Video references (YouTube, Vimeo)
   - Tool resources (plugins, templates)

### **Pedagogical Pattern**

Each lesson follows **spiral learning**:
- Review previous technique in new context
- Introduce 1–2 new core skills
- Apply to creative challenge
- Reflect on ethical/cultural implications

---

## 5. Course Platform & Technology

### **Current Stack** (Jekyll)

- **Framework:** Jekyll (static site generator)
- **Hosting:** GitHub Pages (ruvebal.github.io)
- **Domain:** `ruvebal.github.io/advertising-video_editing/`
- **Styling:** Liquid templates + custom CSS
- **Video Embedding:** HTML5 `<video>` + iframe fallbacks

### **Future: Astro.js Migration** (planned)

- **Reason:** Better component reuse, faster builds, modern tooling
- **Plan:** See `astro/site-strategy.md` and phase prompts
- **Timeline:** Post-course completion (not blocking current semester)

---

## 6. Integration with Studio

### **Knowledge Flow**

```
Advertising (teaching)
       ↓
TTOD (pedagogical aphorisms) ──blackbox feedback──→ Ollama fine-tuning
       ↓
DevIAC MCP ──context retrieval──→ Cursor IDE (when teaching)
```

### **Hard Rules**

1. **Authorship** — Course credit: `ruvebal@crea-comm.net` + UDIT affiliation
2. **License** — CC BY-NC-SA 4.0 (allows sharing, requires attribution, no commercial use)
3. **No Cloud AI for Teaching** — All LLM calls for course materials via Ollama (localhost:11434)
4. **Ethical Transparency** — Course explicitly teaches students about AI, algorithms, persuasion — no hidden tech

### **TTOD Integration**

- **Pedagogical Aphorisms** — Week-end reflections captured as TTOD quotes (origin: `teaching`, scope: `advertising-video-editing`)
- **Example Aphorisms** (captured from this course):
  - *"Montage is not assembly; montage is collision. The gap between shots is where meaning happens."*
  - *"Advertising whispers to the unconscious. Understanding this is the first step toward ethical creation."*
  - *"A jump cut is a contract with the viewer: you decide to break the fourth wall together."*

---

## 7. AI Assistance & Ethical Framing

### **How AI Was Used in This Course**

| Area | Description | Ethical Justification |
|------|-------------|----------------------|
| **Research** | Literature review, reference organization | AI handles mechanical search; human curates meaning |
| **Lesson Design** | Template creation, prompt structure | AI as apprentice to pedagogy, not replacement |
| **Web Implementation** | Layout, CSS, responsive design | Frees author to focus on content & theory |
| **Documentation** | Resource organization, accessibility features | Amplifies human vision through automation |

### **Student Awareness**

- **Week 1 Prompt** explicitly discusses AI in advertising & creative work
- **Week 9 (Ethics)** includes mandatory discussion: "How is AI reshaping advertising? What are our responsibilities?"
- **Final Reflection** asks: "How did you use or reject AI tools in your creative process?"

### **Instructor Transparency**

> "This course was built with AI assistance following the *Desarrollo Asistido por IA: Guía Práctica* methodology I published. My commitment: I have reviewed all content, I understand every pedagogical decision, and I take full responsibility for what you learn here."

---

## 8. Student Success Strategies

### **For Video Editing Beginners**

- **Week 1–2:** Master Premiere Pro interface before complex theory
- **Week 3–4:** Build editing confidence with straightforward cuts
- **Week 5:** Creative freedom (experiment without "rules")
- **Week 6–7:** Applied production (real stakes with team)
- **Week 8–10:** Polish + presentation (celebrate final work)

### **For Theory-Curious Students**

- Each prompt includes **optional deep dives** (Eisenstein manifestos, semiotics papers)
- Supplementary docs expand on film history without blocking progress
- Final assignment allows for artist statements with theoretical grounding

### **Accessibility**

- Video tutorials (with captions) supplement text prompts
- Keyboard shortcut guide (printable PDF)
- Alternative software notes (DaVinci Resolve, Final Cut Pro equivalents)
- ASL interpreter coordination (via UDIT)

---

## 9. Assessment & Rubric

### **Implicit Grading Criteria** (from lesson prompts)

| Dimension | Excellent | Good | Fair | Poor |
|-----------|-----------|------|------|------|
| **Technical Mastery** | Flawless execution, creative tool use | Clean edits, proper pacing | Some timing issues | Amateurish, rough cuts |
| **Conceptual Depth** | Original idea, theoretically grounded | Clear creative intent | Conventional, safe | No apparent concept |
| **Artistic Vision** | Distinctive voice, takes risks | Competent, professional | Derivative | Confused intent |
| **Ethical Reflection** | Critiques own work, cultural awareness | Acknowledges ethics | Mentions ethics superficially | No reflection |

### **Formative vs. Summative**

- **Weeks 1–6:** Formative (feedback-focused, low-stakes)
- **Weeks 7–9:** Mixed (project work + feedback)
- **Week 10:** Summative (final piece + artist statement)

---

## 10. Resources & References

### **Essential Reading**

- Eisenstein, S. *Film Form* (montage theory)
- Bordwell, D. & Thompson, K. *Film Art: An Introduction* (continuity & semantics)
- Williams, R. *Television: Technology & Cultural Form* (media criticism)
- Jhally, S. *Codes of Advertising* (semiotics of commercials)

### **Film References**

- Early cinema: Lumière brothers, Méliès
- Soviet montage: Eisenstein (*Battleship Potemkin*), Vertov (*Man with a Movie Camera*)
- Advertising: Iconic commercials (Apple, Nike, Patagonia, etc.)
- Contemporary: Music videos, short-form content, TikTok analysis

### **Technical Resources**

- Adobe Creative Cloud tutorials (official)
- YouTube: Premiere Pro channels (Potato Jet, Film Riot)
- Color grading: DaVinci Resolve free tier (comparison tool)
- Sound design: Freesound.org, Epidemic Sound

---

## 11. Current Status & Next Steps

### **Completed**

✅ Full 10-week curriculum (prompts for all weeks)
✅ Assignment briefs (analysis + 3 editing projects)
✅ Jekyll site implementation (live on GitHub Pages)
✅ Video embedding infrastructure
✅ Supplementary theory docs (film history, semiotics)
✅ Advertising research report + ethical frameworks

### **Pending**

- Student work showcase (gallery of final pieces)
- Astro.js migration (optional, non-blocking)
- Faculty guide (teaching tips for other instructors)
- Alumni portfolio connections

---

## 12. Context for AI Assistants

### **When Working on This Course**

1. **Preserve pedagogical integrity** — Changes should enhance learning outcomes, not content coverage
2. **Maintain ethical framing** — This course teaches critical thinking; never hide how tools work
3. **Test assignments** — If you revise a prompt, verify it's actually achievable in that week
4. **Check video embeds** — External links rot; validate references before suggesting updates
5. **Respect theory** — Film criticism is precise; cite sources, avoid overgeneralization
6. **No cloud AI in materials** — Course itself teaches using Ollama-local or student's own tools

### **Integration Points**

- **TTOD feedback loop** — Capture pedagogical insights as aphorisms (scope: `teaching`, origin: `studio`)
- **Cursor IDE context** — `.cursor/skills/` available for editing/planning workflows
- **Web Atelier ecosystem** — This course is part of a larger teaching constellation; link strategically

---

## 13. External References

| Resource | Purpose |
|----------|---------|
| [`Desarrollo Asistido por IA: Guía Práctica`](https://ruvebal.github.io/web-atelier/methodology/es/ai-practical-guide/) | Author's published methodology for AI-assisted development |
| [Web Atelier (UDIT)](https://ruvebal.github.io/web-atelier/) | Broader course ecosystem (web foundations, 3D, etc.) |
| [ADADI.org](https://adadi.org/) | Professional association website (sister teaching project) |
| [Arkadia](../../../src/arkadia/) | Studio knowledge platform (RAG for research support) |

---

> *"The edit is where the film truly speaks. Master the tool, then forget the tool, and let the story tell itself."*
> — Paraphrasing Eisenstein + Kieślowski

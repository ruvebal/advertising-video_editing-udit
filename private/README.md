# Private exam material (not for public repos)

This directory holds **exam-forge** assets for this course. Contents are gitignored.

| Path | Purpose |
|------|---------|
| `exams/` | YAML question banks (source of truth) |
| `exams-out/` | Generated Moodle XML, GIFT, Blackboard QTI/ZIP, TXT |

## Commands

```bash
# From repo root (after: cd .cursor/skills/exam-forge/scripts && npm install)
.cursor/skills/exam-forge/scripts/export-exam.sh private/exams/my-exam.yml
```

Toolkit docs: `.cursor/skills/exam-forge/SKILL.md` and `PORTABILITY.md`.

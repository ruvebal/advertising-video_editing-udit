# Directory Structure Explanation: `prompts/` vs `_prompts/`

## The Issue

You have **two directories** with similar names:
- `docs/prompts/` - Contains 10 markdown files (946 lines each, no frontmatter)
- `docs/_prompts/` - Contains 10 markdown files (975 lines each, with Jekyll frontmatter)

## Why This Happened

The `prompts/` directory appears to be **old/backup files** from before Jekyll frontmatter was added. The `_prompts/` directory is the **correct, active directory** that Jekyll uses.

## How Jekyll Collections Work

In your `_config.yml`:

```yaml
collections:
  prompts:
    output: true
    permalink: /prompts/:slug/

defaults:
  - scope:
      path: '_prompts'    # ← Jekyll looks here
      type: 'prompts'
    values:
      layout: 'lesson'
      status: draft
```

**Key Points:**
1. Jekyll collections use **underscore-prefixed directories** (`_prompts/`)
2. The `_prompts/` directory is the **source** for your collection
3. Jekyll generates output to `_site/prompts/` (not `_site/_prompts/`)
4. The `prompts/` directory in your source is **NOT processed by Jekyll**

## File Comparison

| Directory | Purpose | Frontmatter | Status |
|-----------|---------|------------|--------|
| `prompts/` | Old/backup files | ❌ Missing | ⚠️ Not used by Jekyll |
| `_prompts/` | Active Jekyll collection | ✅ Present | ✅ Active |

## Recommendation: Remove `prompts/` Directory

The `prompts/` directory is:
- ❌ Not processed by Jekyll
- ❌ Missing Jekyll frontmatter
- ❌ Outdated (29 lines shorter per file)
- ⚠️ Causing confusion

**Action:** Delete `docs/prompts/` directory to avoid confusion.

## Verification

To verify which directory Jekyll uses:

1. **Check `_config.yml`** - Line 41 shows `path: '_prompts'`
2. **Check generated site** - Look in `_site/prompts/` (not `_site/_prompts/`)
3. **Check file differences** - `_prompts/` files have frontmatter, `prompts/` don't

## Safe Cleanup Steps

1. **Backup first** (optional, since `_prompts/` has the correct files):
   ```bash
   # Optional: create backup
   cp -r docs/prompts docs/prompts.backup
   ```

2. **Remove the duplicate directory**:
   ```bash
   rm -rf docs/prompts/
   ```

3. **Verify Jekyll still works**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Check that pages still generate**:
   - Visit `http://localhost:4000/prompts/week-01/`
   - Should work fine since Jekyll uses `_prompts/`

## Why Underscore Prefix?

In Jekyll:
- **Directories starting with `_`** are special:
  - `_includes/` - Reusable snippets
  - `_layouts/` - Page templates
  - `_data/` - Data files
  - `_prompts/` - Your collection source

- **Directories without `_`** are:
  - Processed as regular pages (if they have frontmatter)
  - Or ignored if not configured

Since `prompts/` is not in your `_config.yml` collections or defaults, Jekyll **ignores it**.

## Summary

✅ **Use:** `docs/_prompts/` (active, has frontmatter, processed by Jekyll)
❌ **Remove:** `docs/prompts/` (old, no frontmatter, not processed)

---

*After cleanup, you'll only have `_prompts/` which is the correct directory for your Jekyll collection.*

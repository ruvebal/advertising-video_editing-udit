# Phase 06 · Validate, Measure, and Document

> **Goal:** Execute comprehensive QA including Lighthouse audits, accessibility scans, bundle analysis, and automated smoke tests to ensure award-worthy quality.

---

## Prompt

You are an **Astro Expert and Web Performance Specialist** validating the **Advertising Video Editing** course site at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

---

## Task 1: Configure Linting & Type Checking

Update `package.json` scripts:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "lint": "eslint \"src/**/*.{ts,tsx,astro,mdx}\" --fix",
    "lint:check": "eslint \"src/**/*.{ts,tsx,astro,mdx}\"",
    "validate:urls": "tsx scripts/validate-urls.ts",
    "validate:videos": "tsx scripts/check-video-ids.ts",
    "test": "playwright test",
    "test:a11y": "pa11y-ci"
  }
}
```

Install dev dependencies:

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-astro
npm install -D playwright @playwright/test
npm install -D pa11y-ci
```

Create `.eslintrc.cjs`:

```javascript
module.exports = {
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser', extraFileExtensions: ['.astro'] }
    }
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  }
};
```

---

## Task 2: Create URL Validation Script

Create `scripts/validate-urls.ts`:

```typescript
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

interface LinkResult {
  file: string;
  url: string;
  status: number | 'error';
  ok: boolean;
}

async function extractUrls(filePath: string): Promise<string[]> {
  const content = await fs.readFile(filePath, 'utf-8');
  const urlRegex = /https?:\/\/[^\s"'<>\)]+/g;
  return content.match(urlRegex) || [];
}

async function checkUrl(url: string): Promise<{ status: number | 'error'; ok: boolean }> {
  try {
    const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return { status: response.status, ok: response.ok };
  } catch {
    return { status: 'error', ok: false };
  }
}

async function main() {
  console.log('🔗 Validating external URLs...\n');
  
  const files = await glob('src/**/*.{astro,mdx,ts,json}', { cwd: process.cwd() });
  const results: LinkResult[] = [];
  const checked = new Set<string>();
  
  for (const file of files) {
    const urls = await extractUrls(file);
    for (const url of urls) {
      if (checked.has(url)) continue;
      checked.add(url);
      
      const { status, ok } = await checkUrl(url);
      results.push({ file, url, status, ok });
      console.log(`${ok ? '✅' : '❌'} [${status}] ${url}`);
    }
  }
  
  const failed = results.filter(r => !r.ok);
  if (failed.length > 0) {
    console.log(`\n❌ ${failed.length} broken links found:`);
    failed.forEach(r => console.log(`  - ${r.url} (${r.status}) in ${r.file}`));
    process.exit(1);
  }
  
  console.log(`\n✅ All ${results.length} URLs validated successfully.`);
}

main().catch(console.error);
```

---

## Task 3: Create Video ID Validation Script

Create `scripts/check-video-ids.ts`:

```typescript
import fs from 'fs/promises';
import { glob } from 'glob';

interface VideoCheck {
  id: string;
  platform: 'youtube' | 'vimeo';
  file: string;
  valid: boolean;
}

async function checkYouTubeId(id: string): Promise<boolean> {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
    return response.ok;
  } catch {
    return false;
  }
}

async function checkVimeoId(id: string): Promise<boolean> {
  try {
    const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`);
    return response.ok;
  } catch {
    return false;
  }
}

async function extractVideoIds(filePath: string): Promise<Array<{ id: string; platform: 'youtube' | 'vimeo' }>> {
  const content = await fs.readFile(filePath, 'utf-8');
  const videos: Array<{ id: string; platform: 'youtube' | 'vimeo' }> = [];
  
  // Match VideoPlayer components
  const youtubeMatch = content.matchAll(/platform="youtube"\s+id="([^"]+)"/g);
  for (const match of youtubeMatch) {
    videos.push({ id: match[1], platform: 'youtube' });
  }
  
  const vimeoMatch = content.matchAll(/platform="vimeo"\s+id="([^"]+)"/g);
  for (const match of vimeoMatch) {
    videos.push({ id: match[1], platform: 'vimeo' });
  }
  
  return videos;
}

async function main() {
  console.log('🎬 Validating video IDs...\n');
  
  const files = await glob('src/**/*.{astro,mdx}', { cwd: process.cwd() });
  const results: VideoCheck[] = [];
  const checked = new Set<string>();
  
  for (const file of files) {
    const videos = await extractVideoIds(file);
    for (const video of videos) {
      const key = `${video.platform}:${video.id}`;
      if (checked.has(key)) continue;
      checked.add(key);
      
      const valid = video.platform === 'youtube'
        ? await checkYouTubeId(video.id)
        : await checkVimeoId(video.id);
      
      results.push({ ...video, file, valid });
      console.log(`${valid ? '✅' : '❌'} [${video.platform}] ${video.id}`);
    }
  }
  
  const failed = results.filter(r => !r.valid);
  if (failed.length > 0) {
    console.log(`\n❌ ${failed.length} invalid video IDs:`);
    failed.forEach(r => console.log(`  - ${r.platform}:${r.id} in ${r.file}`));
    process.exit(1);
  }
  
  console.log(`\n✅ All ${results.length} video IDs validated.`);
}

main().catch(console.error);
```

---

## Task 4: Create Playwright Smoke Tests

Create `playwright.config.ts`:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321/advertising-video_editing/',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } }
  ],
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321/advertising-video_editing/',
    reuseExistingServer: !process.env.CI
  }
});
```

Create `tests/smoke.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Advertising Video Editing/);
    await expect(page.locator('h1')).toContainText('Advertising');
  });
  
  test('week cards are visible', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.week-card');
    await expect(cards).toHaveCount(10);
  });
  
  test('lesson page loads', async ({ page }) => {
    await page.goto('/prompts/week-01/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.lesson-nav')).toBeVisible();
  });
  
  test('video player facade works', async ({ page }) => {
    await page.goto('/prompts/week-01/');
    const player = page.locator('.video-player').first();
    await expect(player.locator('.video-facade')).toBeVisible();
    
    // Click play
    await player.locator('.play-btn').click();
    await expect(player).toHaveClass(/playing/);
  });
  
  test('skip link is keyboard accessible', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
  });
  
  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
    
    await page.locator('#theme-toggle').click();
    await expect(html).toHaveClass(/dark/);
  });
});
```

---

## Task 5: Create pa11y-ci Configuration

Create `.pa11yci`:

```json
{
  "defaults": {
    "timeout": 10000,
    "wait": 500,
    "standard": "WCAG2AA",
    "runners": ["axe", "htmlcs"]
  },
  "urls": [
    "http://localhost:4321/advertising-video_editing/",
    "http://localhost:4321/advertising-video_editing/prompts/",
    "http://localhost:4321/advertising-video_editing/prompts/week-01/",
    "http://localhost:4321/advertising-video_editing/curriculum/",
    "http://localhost:4321/advertising-video_editing/resources/"
  ]
}
```

---

## Task 6: Run QA Checklist

Execute in order:

```bash
# 1. Type check
npm run check

# 2. Lint
npm run lint

# 3. Build for production
npm run build

# 4. Run Playwright tests
npm run test

# 5. Run accessibility tests
npm run test:a11y

# 6. Validate URLs (optional, may be slow)
npm run validate:urls

# 7. Validate video IDs
npm run validate:videos
```

---

## Task 7: Lighthouse Audit

Run Lighthouse in Chrome DevTools:
1. Open `http://localhost:4321/advertising-video_editing/`
2. DevTools → Lighthouse → Mobile, All categories
3. Run audit
4. Target: ≥95 for all categories

Document results in `reports/lighthouse.md`:

```markdown
# Lighthouse Audit Results

## Date: [YYYY-MM-DD]

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Homepage | 98 | 100 | 100 | 100 |
| Week 1 | 96 | 100 | 100 | 100 |
| Prompts Index | 97 | 100 | 100 | 100 |

## Key Metrics
- FCP: 0.8s
- LCP: 1.2s
- CLS: 0.01
- TBT: 50ms

## Recommendations Addressed
- [x] Image lazy loading
- [x] Font preloading
- [x] Video facade pattern
- [x] Skip links
```

---

## Task 8: Bundle Analysis

Inspect build output:

```bash
# Check dist size
du -sh dist/

# List largest files
find dist -type f -exec du -h {} + | sort -rh | head -20
```

Document in `reports/bundle-analysis.md`:

```markdown
# Bundle Analysis

## Build Date: [YYYY-MM-DD]

## Total Size
- **dist/**: 2.1 MB (static assets included)
- **JS per page**: ~15 KB (islands only)
- **CSS**: ~45 KB (Tailwind purged)

## Largest Files
| File | Size | Notes |
|------|------|-------|
| _astro/index.*.js | 12 KB | Homepage island |
| _astro/video.*.js | 8 KB | VideoPlayer script |
| _astro/global.*.css | 45 KB | Tailwind utilities |

## Optimization Status
- [x] Tailwind purged unused CSS
- [x] Images optimized (WebP)
- [x] Fonts subsetted
- [x] JS islands minimal
```

---

## Implementation Report Template

```markdown
# Phase 06 Implementation Report

## QA Pipeline Created

| Tool | Script | Purpose |
|------|--------|---------|
| ESLint | `npm run lint` | Code quality |
| Astro Check | `npm run check` | Type safety |
| Playwright | `npm run test` | E2E smoke tests |
| pa11y-ci | `npm run test:a11y` | Accessibility |
| URL Validator | `npm run validate:urls` | Broken links |
| Video Validator | `npm run validate:videos` | Video ID check |

## Test Results

| Test | Status | Notes |
|------|--------|-------|
| Type check | ✅ | No errors |
| Lint | ✅ | 0 warnings |
| Build | ✅ | 2.1 MB dist |
| Playwright | ✅ | 6/6 passed |
| pa11y-ci | ✅ | WCAG 2.1 AA |
| Lighthouse | ✅ | 98/100/100/100 |

## Files Created
- `.eslintrc.cjs`
- `playwright.config.ts`
- `tests/smoke.spec.ts`
- `.pa11yci`
- `scripts/validate-urls.ts`
- `scripts/check-video-ids.ts`
- `reports/lighthouse.md`
- `reports/bundle-analysis.md`

## Performance
- FCP: 0.8s ✅
- LCP: 1.2s ✅
- CLS: 0.01 ✅
- TBT: 50ms ✅

## Next Steps
- Proceed to Phase 07: Deploy to GitHub Pages
```

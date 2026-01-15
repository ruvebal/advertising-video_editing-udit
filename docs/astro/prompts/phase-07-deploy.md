# Phase 07 · Deploy to GitHub Pages

> **Goal:** Configure GitHub Actions for automated CI/CD deployment with Lighthouse performance budgets and accessibility gates.

---

## Prompt

You are an **Astro Expert and DevOps Specialist** deploying the **Advertising Video Editing** course site to GitHub Pages at:

```
/Users/ruvebal/projects/ruvebal/scholar/udit/advertising-video_editing
```

---

## Task 1: Create GitHub Actions Deploy Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Lint and Test
  quality:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run check
      
      - name: Lint
        run: npm run lint:check
      
      - name: Build (for test)
        run: npm run build
      
      - name: Install Playwright
        run: npx playwright install --with-deps chromium
      
      - name: Run Playwright tests
        run: npm run test -- --project=chromium
      
      - name: Upload test results
        uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  # Build for production
  build:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Astro site
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  # Deploy to GitHub Pages
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

  # Lighthouse Performance Audit
  lighthouse:
    needs: deploy
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            https://ruvebal.github.io/advertising-video_editing/
            https://ruvebal.github.io/advertising-video_editing/prompts/week-01/
          budgetPath: .github/lighthouse-budget.json
          uploadArtifacts: true
          temporaryPublicStorage: true
```

---

## Task 2: Create Lighthouse Budget

Create `.github/lighthouse-budget.json`:

```json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint", "budget": 1500 },
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "interactive", "budget": 3500 },
      { "metric": "total-blocking-time", "budget": 200 }
    ],
    "resourceCounts": [
      { "resourceType": "script", "budget": 10 },
      { "resourceType": "total", "budget": 50 }
    ],
    "resourceSizes": [
      { "resourceType": "script", "budget": 100000 },
      { "resourceType": "stylesheet", "budget": 50000 },
      { "resourceType": "total", "budget": 500000 }
    ]
  }
]
```

---

## Task 3: Create Accessibility CI Workflow

Create `.github/workflows/a11y.yml`:

```yaml
name: Accessibility Audit

on:
  pull_request:
    branches: [main]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Start preview server
        run: npm run preview &
        
      - name: Wait for server
        run: npx wait-on http://localhost:4321/advertising-video_editing/
      
      - name: Run pa11y-ci
        run: npm run test:a11y
```

---

## Task 4: Create URL Validation Workflow

Create `.github/workflows/validate-links.yml`:

```yaml
name: Validate Links

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sunday
  workflow_dispatch:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Validate URLs
        run: npm run validate:urls
        continue-on-error: true
      
      - name: Validate Video IDs
        run: npm run validate:videos
        continue-on-error: true
      
      - name: Create issue on failure
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: '🔗 Link Validation Failed',
              body: 'The weekly link validation found broken links or invalid video IDs. Check the workflow run for details.',
              labels: ['maintenance', 'automated']
            })
```

---

## Task 5: Configure GitHub Repository Settings

### In GitHub Repository Settings:

1. **Settings → Pages**
   - Source: **GitHub Actions**
   - Custom domain: *(optional)*

2. **Settings → Environments**
   - Create `github-pages` environment
   - Add protection rule: require reviewers (optional)

3. **Settings → Secrets and Variables → Actions**
   - No secrets needed for public GitHub Pages

4. **Settings → Branch protection rules**
   - Branch: `main`
   - Require status checks: `quality`, `build`
   - Require branches to be up to date

---

## Task 6: Create Deploy Script

Add to `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && echo 'Push to main branch to deploy via GitHub Actions'"
  }
}
```

---

## Task 7: Create README Badges

Update `README.md` with status badges:

```markdown
# Advertising Video Editing

[![Deploy to GitHub Pages](https://github.com/ruvebal/advertising-video_editing/actions/workflows/deploy.yml/badge.svg)](https://github.com/ruvebal/advertising-video_editing/actions/workflows/deploy.yml)
[![Accessibility](https://github.com/ruvebal/advertising-video_editing/actions/workflows/a11y.yml/badge.svg)](https://github.com/ruvebal/advertising-video_editing/actions/workflows/a11y.yml)

🎬 **[View Live Site](https://ruvebal.github.io/advertising-video_editing/)**

A comprehensive 10-week course on video editing for advertising, blending film theory, editing technique, and ethics.

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check |
| `npm run lint` | Lint and fix |
| `npm run test` | Run Playwright tests |
| `npm run test:a11y` | Run accessibility tests |

## License

- **Code**: MIT
- **Content**: CC BY-NC-SA 4.0

© 2026 Rubén Vega Balbás, PhD — UDIT
```

---

## Task 8: First Deploy

```bash
# Ensure all changes are committed
git add .
git commit -m "feat: Complete Astro site with CI/CD pipeline"

# Push to main to trigger deployment
git push origin main

# Monitor deployment
# Go to: https://github.com/ruvebal/advertising-video_editing/actions
```

---

## Implementation Report Template

```markdown
# Phase 07 Implementation Report

## CI/CD Pipeline Created

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `deploy.yml` | Push to main | Build, test, deploy |
| `a11y.yml` | Pull request | Accessibility gate |
| `validate-links.yml` | Weekly cron | Link rot prevention |

## Jobs in Deploy Pipeline

1. **quality**: Lint, type check, Playwright tests
2. **build**: Astro build, upload artifact
3. **deploy**: Deploy to GitHub Pages
4. **lighthouse**: Performance budget check

## Performance Budgets

| Metric | Budget |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| TTI | < 3.5s |
| TBT | < 200ms |
| JS total | < 100KB |
| CSS total | < 50KB |

## Files Created
- `.github/workflows/deploy.yml`
- `.github/workflows/a11y.yml`
- `.github/workflows/validate-links.yml`
- `.github/lighthouse-budget.json`

## Repository Configuration
- [x] Pages source: GitHub Actions
- [x] Branch protection on main
- [x] Status checks required

## Deployment URL
https://ruvebal.github.io/advertising-video_editing/

## Next Steps
- Monitor first deployment
- Review Lighthouse CI results
- Set up custom domain (optional)
```

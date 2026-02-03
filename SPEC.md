# SPEC: AI Training Center v5 Update

## Overview

Update the Gladly AI Training Center from its current structure to v5 content outline, which reorganizes the learning paths around Claude's product tiers (Chat → Cowork → Code).

- **Existing Site:** https://ai-training-inky.vercel.app/
- **Repo:** /Users/steve.westgladly.com/projects/ai-training
- **Content Source:** `AI_Training_Center_Content_Outline_v5.md`

---

## Critical Instructions

### Content Source of Truth

**Use `AI_Training_Center_Content_Outline_v5.md` as the source of truth for ALL content.**

- Pull text, tables, and examples directly from v5 — do not summarize or paraphrase
- Preserve all detailed walkthroughs (especially Module 2.1 Cowork examples)
- Include all tables exactly as formatted in v5
- Copy all external URLs from v5 (Skilljar courses, Prompt Cowboy, Skills.sh, etc.)

### Git Strategy

Before making any changes:
```bash
git checkout -b v5-update
```

- Commit after completing each phase
- Push to trigger Vercel preview deployment for review
- Do not merge to main until all phases complete and reviewed

---

## Current vs. New Structure

### Architecture (No Change)

- **Framework:** Static HTML/Vanilla JavaScript (no build step)
- **Styling:** Inline CSS per file with consistent design system
- **Deployment:** Vercel with URL rewrites via vercel.json
- **Content:** Hardcoded HTML (no CMS/MDX/JSON)

### URL Changes Summary

| Current URL | New URL | Action |
|-------------|---------|--------|
| /beginner/ai-fundamentals | /beginner/ai-foundations | Rename + merge agentic content |
| /beginner/claude-desktop | /beginner/claude-chat-overview | Rename + enhance |
| /beginner/effective-prompting | /beginner/effective-prompting | Enhance (add Styles) |
| /beginner/git-basics | /intermediate/git-concepts | Move to Intermediate |
| /beginner/agentic-concepts | — | Remove (merged into ai-foundations) |
| — | /beginner/connectors | New page |
| — | /beginner/artifacts | New page |
| — | /beginner/sharing-and-projects | New page |
| — | /beginner/skills-intro | New page |
| — | /beginner/assessment | New page |
| /intermediate/code-in-action | /advanced/claude-code-in-action | Move to Advanced |
| /intermediate/skills | /intermediate/skills-deep-dive | Rename |
| /intermediate/projects | /intermediate/projects-as-agents | Rename |
| /intermediate/planning-mode | /intermediate/planning-mode | Update content |
| /intermediate/automations | /intermediate/building-automations | Rename + enhance |
| — | /intermediate/intro-to-cowork | New page |
| /advanced/deep-dive | — | Remove |
| /advanced/gladly | — | Remove |
| /advanced/agent-sdk | /advanced/agent-sdk | Mark "Coming Soon" |
| /advanced/mcp-integration | /advanced/mcp-integration | Mark "Coming Soon" |
| /advanced/multi-agent | /advanced/multi-agent | Mark "Coming Soon" |
| /advanced/production | /advanced/production-agents | Rename + "Coming Soon" |
| — | /advanced/planning-mode-code | New page |
| — | /advanced/git-technical | New page |
| — | /appendices/ | New section (6 files) |

### Pages to Keep Unchanged

| Page | Notes |
|------|-------|
| /interviewer | Keep as-is, no changes needed |

---

## Pages to Create (14 new files)

### Beginner Path (5 new pages)

| File | Content Source (v5) |
|------|---------------------|
| /beginner/connectors.html | Module 1.3 — All 12 connectors table + web search deep dive |
| /beginner/artifacts.html | Module 1.4 — All 7 artifact types + execution + versioning |
| /beginner/sharing-and-projects.html | Module 1.5 — Part 1 Sharing + Part 2 Projects intro |
| /beginner/skills-intro.html | Module 1.7 — Skills as capabilities (natural language) |
| /beginner/assessment.html | Beginner Path Assessment — Self-assessment + practical demos |

### Intermediate Path (1 new page)

| File | Content Source (v5) |
|------|---------------------|
| /intermediate/intro-to-cowork.html | Module 2.1 — Full content including all 4 detailed examples (file organizing, data analysis, project setup, batch operations) |

### Advanced Path (2 new pages)

| File | Content Source (v5) |
|------|---------------------|
| /advanced/planning-mode-code.html | Module 3.2 — SPEC files + interview process + 6-step planning |
| /advanced/git-technical.html | Module 3.3 — Developer Git workflows + command reference |

### Appendices (6 files)

| File | Content Source (v5) |
|------|---------------------|
| /appendices/index.html | Landing page linking to all appendices |
| /appendices/troubleshooting.html | Appendix A — Full troubleshooting tables |
| /appendices/resources.html | Appendix B — External resources (Skilljar, tools, internal) |
| /appendices/concepts.html | Appendix C — Skills vs Automations vs Projects |
| /appendices/agents-reference.html | Appendix D — Gladly's 9 Agents table |
| /appendices/assessment-philosophy.html | Appendix E — Why confidence-based assessment |

---

## Pages to Update

### Homepage (index.html)

Update with exact content from v5 Homepage section:

**Hero Section:**
- Title: "Gladly AI Training Center"
- Subtitle: "Master Claude at your own pace—from daily productivity to building AI agents"

**Path Cards:**

| Path | Product Focus | Time | Modules | Description |
|------|---------------|------|---------|-------------|
| 🟢 Beginner | Claude Chat | 5-7 hours | 7 + assessment | Build foundational AI literacy and become a confident daily Claude Chat user. Learn prompting, artifacts, connectors, Styles, Memory, and how to leverage preloaded skills. |
| 🟡 Intermediate | Claude Cowork | 8-12 hours | 6 modules | Transform from task-giver to outcome-creator. Master file-based collaboration, planning-as-a-motion, create your own skills, and build automations with Projects. |
| 🔴 Advanced | Claude Code | 15-20 hours | 7 modules (4 locked) | Production-ready development. Master Git workflows, build agents with the SDK, and integrate with external services via MCP. |

### Beginner Path Pages

| Page | Changes |
|------|---------|
| beginner/index.html | New module list (7 modules + assessment), updated descriptions from v5 |
| beginner/ai-fundamentals.html → ai-foundations.html | Rename file, merge agentic concepts (Key Concepts table, Agents vs Chatbots vs Automation table), update nav |
| beginner/claude-desktop.html → claude-chat-overview.html | Rename, add Settings Navigation table, File Uploads section, Memory Feature, Extended Thinking. **IMPORTANT: Embed Loom video using URL: https://www.loom.com/share/97cb836202304912a45df619caa22f08** |
| beginner/effective-prompting.html | Add Styles Feature table, Creating Custom Styles section with "Executive Brief" example |

### Intermediate Path Pages

| Page | Changes |
|------|---------|
| intermediate/index.html | New module list (6 modules), Cowork product focus |
| intermediate/skills.html → skills-deep-dive.html | Rename, add Skill Structure section, full markdown anatomy example |
| intermediate/projects.html → projects-as-agents.html | Rename, add agent framing (Agent Project Components, Competitive Intel Agent example) |
| intermediate/planning-mode.html | Update to Cowork planning context, add 6-Step Planning Process preview |
| intermediate/automations.html → building-automations.html | Rename, add Automation Architecture diagram, Complexity Spectrum table, both automation examples |

### Advanced Path Pages

| Page | Changes |
|------|---------|
| advanced/index.html | New module list (7 modules), mark 4 as "Coming Soon" |
| advanced/agent-sdk.html | Add "🔒 Coming Soon" banner, keep planned content preview |
| advanced/mcp-integration.html | Add "🔒 Coming Soon" banner, keep planned content preview |
| advanced/multi-agent.html | Add "🔒 Coming Soon" banner, keep planned content preview |
| advanced/production.html → production-agents.html | Rename + "🔒 Coming Soon" banner |

---

## Pages to Delete (4 files)

- beginner/agentic-concepts.html
- beginner/git-basics.html (after moving content to intermediate/git-concepts.html)
- advanced/deep-dive.html
- advanced/gladly.html

---

## Component Updates

### Navigation Tabs

All path pages need updated tab navigation reflecting new module structure:

**Beginner tabs:**
1. AI Foundations
2. Claude Chat Overview
3. Connectors
4. Artifacts
5. Sharing & Projects
6. Effective Prompting
7. Skills Introduction
8. Assessment

**Intermediate tabs:**
1. Intro to Cowork
2. Planning Mode
3. Skills Deep Dive
4. Projects as Agents
5. Git Concepts
6. Building Automations

**Advanced tabs:**
1. Claude Code in Action
2. Planning Mode (Code)
3. Git Technical
4. MCP Integration 🔒
5. Agent SDK 🔒
6. Multi-Agent 🔒
7. Production Agents 🔒

### Vercel Rewrites (vercel.json)

- Add rewrites for all new URLs
- Remove rewrites for deleted pages
- No redirects needed (site is not live yet)

---

## Implementation Plan

### Phase 1: Setup & New Files (No breaking changes)

1. Create feature branch: `git checkout -b v5-update`
2. Create /appendices/ folder and all 6 appendix pages
3. Create new Beginner pages (connectors, artifacts, sharing-and-projects, skills-intro, assessment)
4. Create new Intermediate page (intro-to-cowork)
5. Create new Advanced pages (planning-mode-code, git-technical)
6. Commit: `git commit -m "Phase 1: Create new pages"`

### Phase 2: Homepage & Path Overviews

1. Update homepage with new structure (exact copy from v5)
2. Update beginner/index.html with new module list
3. Update intermediate/index.html with new module list
4. Update advanced/index.html with new module list + Coming Soon badges
5. Commit: `git commit -m "Phase 2: Update homepage and path overviews"`

### Phase 3: Content Updates

1. Enhance beginner/ai-fundamentals.html with merged agentic content
2. Enhance beginner/claude-desktop.html with Settings, Memory, Extended Thinking, Loom embed
3. Enhance beginner/effective-prompting.html with Styles feature
4. Update intermediate/planning-mode.html with Cowork context
5. Enhance intermediate/skills.html with deep dive content
6. Enhance intermediate/projects.html with agent framing
7. Enhance intermediate/automations.html with complexity spectrum
8. Add "Coming Soon" banners to locked Advanced modules
9. Commit: `git commit -m "Phase 3: Update existing page content"`

### Phase 4: Renames & Moves

1. Rename files per URL changes table
2. Move beginner/git-basics.html to intermediate/git-concepts.html
3. Move intermediate/code-in-action.html to advanced/claude-code-in-action.html
4. Update all internal links across site
5. Update navigation tabs on all affected pages
6. Update vercel.json with new rewrites
7. Commit: `git commit -m "Phase 4: Rename and reorganize files"`

### Phase 5: Cleanup

1. Delete deprecated pages (4 files)
2. Verify no broken internal links
3. Commit: `git commit -m "Phase 5: Remove deprecated pages"`

### Phase 6: QA & Verification

1. Push branch and deploy to Vercel preview
2. Complete verification checklist (see below)
3. Fix any issues found
4. Final commit and merge to main

---

## Verification Checklist

### Structure Verification

- [ ] All 14 new pages created and accessible
- [ ] All 4 deprecated pages removed
- [ ] All renamed pages work at new URLs
- [ ] Navigation tabs correct on all path pages
- [ ] Previous/Next links work on all module pages

### Content Verification

- [ ] Homepage has correct product focus (Chat/Cowork/Code)
- [ ] Homepage has correct time estimates (5-7/8-12/15-20 hours)
- [ ] Homepage has correct module counts (7+1/6/7)
- [ ] **Loom video embedded in claude-chat-overview.html**
- [ ] All 12 connectors listed in connectors.html
- [ ] All 7 artifact types in artifacts.html with execution + versioning sections
- [ ] Settings Navigation table in claude-chat-overview.html
- [ ] Memory and Extended Thinking sections in claude-chat-overview.html
- [ ] CTFC framework + Styles feature in effective-prompting.html
- [ ] All 4 Cowork examples in intro-to-cowork.html (file organizing, data analysis, project setup, batch operations)
- [ ] Skill Structure + full markdown example in skills-deep-dive.html
- [ ] Automation Architecture + Complexity Spectrum in building-automations.html
- [ ] SPEC.md template in planning-mode-code.html
- [ ] All troubleshooting tables in appendices/troubleshooting.html
- [ ] All external resource links in appendices/resources.html

### External Links Verification

- [ ] Loom: https://www.loom.com/share/97cb836202304912a45df619caa22f08
- [ ] CoE Portal: https://www.center-of-excellence.xyz/training
- [ ] Skilljar AI Fluency: https://anthropic.skilljar.com/ai-fluency-framework-foundations
- [ ] Skilljar Claude 101: https://anthropic.skilljar.com/claude-101
- [ ] Skilljar Claude Code: https://anthropic.skilljar.com/claude-code-in-action
- [ ] Skilljar MCP Intro: https://anthropic.skilljar.com/introduction-to-model-context-protocol
- [ ] Skilljar MCP Advanced: https://anthropic.skilljar.com/model-context-protocol-advanced-topics
- [ ] Prompt Cowboy: https://promptcowboy.ai
- [ ] Skills Directory: https://skills.sh/trending
- [ ] Agentation: https://agentation.dev/features
- [ ] Agent SDK Workshop: https://www.youtube.com/embed/TqC1qOfiVcQ

### Visual/UX Verification

- [ ] All pages render correctly
- [ ] Consistent styling across all pages
- [ ] Responsive layout works on mobile
- [ ] Tables display properly
- [ ] Code blocks formatted correctly
- [ ] "Coming Soon" badges visible on locked modules

---

## Files Summary

### Files to Create (14)

```
site/
├── beginner/
│   ├── connectors.html
│   ├── artifacts.html
│   ├── sharing-and-projects.html
│   ├── skills-intro.html
│   └── assessment.html
├── intermediate/
│   └── intro-to-cowork.html
├── advanced/
│   ├── planning-mode-code.html
│   └── git-technical.html
└── appendices/
    ├── index.html
    ├── troubleshooting.html
    ├── resources.html
    ├── concepts.html
    ├── agents-reference.html
    └── assessment-philosophy.html
```

### Files to Rename (7)

```
beginner/ai-fundamentals.html → ai-foundations.html
beginner/claude-desktop.html → claude-chat-overview.html
intermediate/skills.html → skills-deep-dive.html
intermediate/projects.html → projects-as-agents.html
intermediate/automations.html → building-automations.html
advanced/production.html → production-agents.html
```

### Files to Move (2)

```
beginner/git-basics.html → intermediate/git-concepts.html
intermediate/code-in-action.html → advanced/claude-code-in-action.html
```

### Files to Delete (4)

```
beginner/agentic-concepts.html
advanced/deep-dive.html
advanced/gladly.html
(beginner/git-basics.html after move)
```

### Files to Update (12)

```
vercel.json
index.html
beginner/index.html
beginner/ai-foundations.html (after rename)
beginner/claude-chat-overview.html (after rename)
beginner/effective-prompting.html
intermediate/index.html
intermediate/planning-mode.html
intermediate/skills-deep-dive.html (after rename)
intermediate/projects-as-agents.html (after rename)
intermediate/building-automations.html (after rename)
advanced/index.html
```

---

## Design Decisions

| Decision | Choice |
|----------|--------|
| Redirects | Not needed (site not live) |
| Coming Soon Pages | "🔒 Coming Soon" banner + planned content preview |
| Module Numbering | Titles only (no "1.1", "2.3" prefixes in nav) |
| External Links | Open in new tabs (`target="_blank"`) |
| Styling | Maintain existing design system |
| /interviewer page | Keep as-is, no changes |
| Content Source | Pull directly from v5, do not summarize |

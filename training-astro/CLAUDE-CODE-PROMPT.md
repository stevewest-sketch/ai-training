# Claude Code Migration Prompt
## Paste this into Claude Code when you're ready to execute the migration

---

I have an Astro scaffold for migrating my static HTML training site. Here's the situation:

**Current state:** Static HTML site in `/site` directory deployed to Vercel. ~25 HTML pages with heavily duplicated CSS, navigation, and JS across every file.

**Target state:** Astro site with shared components, layouts, and a `courses.ts` data file as the single source of truth.

**The scaffold is ready.** I've already created:
- `src/data/courses.ts` — Complete course data with all 3 learning paths and every module
- `src/data/types.ts` — TypeScript interfaces
- `src/styles/global.css` — All CSS consolidated from the HTML files
- `src/layouts/BaseLayout.astro` — HTML shell with fonts
- `src/layouts/ModuleLayout.astro` — Main lesson page layout (header, sidebar, breadcrumbs, module header, prev/next nav, jump nav)
- `src/layouts/PathIndexLayout.astro` — Learning path overview with auto-generated module list
- `src/components/` — GlobalHeader, PathSidebar, Breadcrumbs, ModuleHeader, ModuleNav, JumpNav, VideoEmbed, CalloutBox
- `src/pages/index.astro` — Homepage with auto-generated path cards
- `src/pages/beginner/index.astro` — Beginner path overview (7 lines total)
- `src/pages/beginner/ai-foundations.astro` — Example migrated module page

**Your task — migrate the remaining HTML pages:**

For each HTML file in `site/beginner/`, `site/intermediate/`, and `site/advanced/`:

1. Create the corresponding `.astro` file in `src/pages/{path}/`
2. Use `ModuleLayout` with the correct course/path/module slugs
3. Extract ONLY the unique lesson content from `<main>` — strip:
   - The `<header>` element
   - The `.section-tabs` nav
   - The `.breadcrumb` div
   - The `.section-indicator` div (ModuleHeader handles this)
   - The `.page-title` h1 (ModuleHeader handles this)
   - The `.page-subtitle` p (pass as prop instead)
   - The `.info-box` learning objective (pass as prop instead)
   - The `.nav-buttons` div at the bottom (ModuleNav handles this)
   - ALL `<style>` blocks
   - ALL `<script>` blocks (JumpNav handles jump nav)
4. Replace inline video embeds with `<VideoEmbed>` component usage
5. Replace inline callout divs with `<CalloutBox>` component usage
6. Keep: section headings with ids, tables, resource cards, self-assessment blocks, and all unique prose/content

**Module slug mapping (from courses.ts):**

Beginner: ai-foundations, claude-desktop-app, claude-chat, effective-prompting, connectors, artifacts, projects-intro, skills-intro, sharing-conversations, assessment

Intermediate: intro-to-cowork, planning-mode, skills-deep-dive, projects-as-agents, building-automations, daily-briefing-skill, assessment

Advanced: claude-code-in-action, planning-mode-code, git-workflows (merge git-concepts + git-technical), mcp-integration, agent-sdk, multi-agent, production-agents

**Start with the Beginner path.** Migrate all 10 pages (9 modules + assessment). Test locally with `npm run dev`. Then do Intermediate, then Advanced.

For the Advanced git-workflows page, merge the content from both `git-concepts.html` and `git-technical.html` into a single cohesive module.

After all pages are migrated, verify:
- Every page renders correctly at localhost
- All sidebar tabs link to the right pages
- All prev/next navigation works
- All breadcrumbs are correct
- Jump nav auto-discovers h2 headings on each page
- Homepage module counts match actual modules in courses.ts
- All video embeds play correctly

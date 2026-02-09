# Phase 2: Content Updates — Claude Code Prompt

Make the following content updates across the training hub. Each item is a specific edit to a specific file. Do not change any layout, structure, or navigation — only the content specified below.

---

## 1. `src/pages/beginner/ai-foundations.astro`

**Find and replace the Claude model/context window section.** The current content references "Claude 3 ~200,000 tokens" and includes GPT-3.5/GPT-4 context window comparisons.

**Replace with this updated content:**

- Change "Claude 3" references to "Claude 4.5 family"
- Context window: **200,000 tokens standard** (approximately 150,000 words or 500 pages of text) across all Claude 4.5 models (Opus, Sonnet, Haiku)
- Output limit: **up to 64,000 tokens** per response
- Extended context: **up to 1 million tokens** available for enterprise/API use cases
- The Claude 4.5 family consists of three tiers:
  - **Claude Opus 4.5** — Most capable, best for complex reasoning and coding (released November 2025)
  - **Claude Sonnet 4.5** — Balanced performance and speed, great for daily work (released September 2025)
  - **Claude Haiku 4.5** — Fastest and most cost-effective (released October 2025)
- **Remove or update** the GPT-3.5 and GPT-4 context window comparison numbers. These change frequently and date quickly. Replace with a general note like: "Other major models (GPT, Gemini) have similar context windows ranging from 128K to 1M+ tokens, but these specs change frequently."
- If there's a token comparison table, simplify it to focus on Claude's capabilities rather than competitor specs.

---

## 2. `src/pages/beginner/claude-desktop-app.astro`

**Gemini enterprise license mention:** Keep this reference. Gladly currently has an active Gemini enterprise license. No changes needed — just verify the mention is accurate and doesn't make claims about specific Gemini features that may have changed. If it says something like "Gladly also provides a Gemini license" that's fine. If it references specific Gemini capabilities, flag it for review but don't delete.

---

## 3. `src/pages/beginner/connectors.astro`

**Update the connectors table.** The current table says "All 12 Available Connectors." 

Replace the table with the following updated list. Change the heading from "All 12 Available Connectors" to "Available Connectors" (remove the number — the count changes as Anthropic adds more).

**Updated connector table:**

| Connector | What Claude Can Access | Example Use |
|-----------|----------------------|-------------|
| Google Drive | Documents, spreadsheets, slides, files | "Summarize my Q4 planning doc" |
| Gmail | Read emails, search inbox, find attachments | "Find the last email from [client]" |
| Google Calendar | View events, check availability, meeting details | "What meetings do I have tomorrow?" |
| Slack | Search messages, channels, read conversations | "Find recent discussions about PMM Agent" |
| Gong | Call recordings, transcripts, deal info | "Summarize last week's calls" |
| Figma | Design files, components, comments | "Review the latest mockups" |
| Asana | Tasks, projects, workspaces | "What tasks are due this week?" |
| Atlassian (Jira/Confluence) | Issues, projects, sprint info, wiki pages | "Show me open bugs in current sprint" |
| Sanity | CMS content, documents, assets | "Find recent blog drafts" |
| Granola | Meeting notes, transcripts, action items | "What were the action items from yesterday's standup?" |
| Crossbeam | Partner overlap data, account mapping | "Show partner overlap for [account]" |

**PLACEHOLDER NOTE:** Steve may confirm whether Notion and/or GitHub should also be listed. If he confirms, add:
- Notion: Pages, databases, workspace content / "Search my Notion for project specs"
- GitHub: Repositories, code, issues, PRs / "Check the status of open issues"

Also update any surrounding text that says "12 connectors" to just say "connectors" without a specific number.

---

## 4. `src/pages/beginner/artifacts.astro`

**Update the artifact types section.** Change "All 7 Artifact Types" to "Artifact Types" (remove the number).

Replace the artifact types list/table with the following complete list:

| Artifact Type | What It Creates | Example |
|--------------|----------------|---------|
| Documents (Markdown) | Formatted text, reports, articles, plans | Blog posts, meeting summaries, project plans |
| HTML Pages | Complete web pages with HTML, CSS, and JavaScript | Landing pages, forms, interactive demos |
| React Components | Interactive, reusable UI elements with real logic | Calculators, dashboards, data visualizers, prototypes |
| SVG Images | Scalable vector graphics | Logos, diagrams, technical illustrations |
| Mermaid Diagrams | Flowcharts, sequence diagrams, Gantt charts, ERDs | Process flows, architecture diagrams, timelines |
| Code Snippets | Code in any programming language | Python scripts, JavaScript functions, SQL queries |
| PDF Documents | Formatted documents for download | Reports, invoices, certificates |

Remove any text that says "All 7 artifact types" and replace with "Claude can create several types of artifacts" or similar phrasing without a specific number. The key point for learners: artifacts are standalone, editable content pieces that appear in a separate panel — they're not just text in the chat.

If there's mention of "code execution" as a separate artifact type, note that code execution is a **feature** (Claude can run code to analyze data), not an artifact type. The result of code execution might produce a React component or HTML artifact.

---

## 5. `src/pages/beginner/effective-prompting.astro`

**Update the Styles table.** The current preset styles in Claude are:

| Style | Description |
|-------|-------------|
| **Normal** | Default responses from Claude |
| **Concise** | Shorter and more direct responses |
| **Explanatory** | Educational responses for learning new concepts |
| **Formal** | Clear and polished responses for professional contexts |

**These are correct and current as of February 2026.** Verify the training content matches these four preset names exactly. If the current content already shows Normal/Concise/Explanatory/Formal, no change is needed.

**Important addition if not already covered:** Claude also supports **Custom Styles** where users can:
- Upload writing samples for Claude to learn their voice
- Describe a style in plain language
- Save and reuse custom styles across conversations

If the module already covers custom styles, great. If it only covers the presets, add a brief section noting that custom styles exist and are powerful for maintaining consistent voice across tasks.

---

## 6. `src/pages/advanced/mcp-integration.astro`

**agentation.dev reference:** This tool is **still active and maintained** as of February 2026. Agentation 2.0 was released with full MCP server integration for Claude Code. The reference can stay.

However, verify the context of how it's referenced. If the training says something like "use Agentation Features at agentation.dev" — update to be more specific: "Agentation (agentation.dev) is a visual feedback tool that connects to Claude Code via MCP, allowing you to annotate web pages and have your coding agent respond directly to your feedback."

---

## 7. `src/pages/learning-paths.astro` (if this file exists)

Make these changes:
1. **Title:** Change "Claude Code Learning Paths" → "Claude AI Learning Paths"
2. **Module counts:** Update to match courses.ts data:
   - Beginner: "9 modules + assessment" 
   - Intermediate: "6 modules + assessment"
   - Advanced: "7 modules (4 coming soon)"
3. **Certification badges:** 
   - Beginner badge should reference "Claude Chat proficiency" not "Claude Code expertise"
   - Intermediate badge should reference "Claude power user" or "Claude builder" not "Claude Code expertise"
   - Advanced badge can reference "Claude Code expertise" — this one is correct
4. **Description text:** 
   - Beginner description — if it says "5 modules", fix to match actual count
   - Advanced description — if it says "6 modules", fix to "7 modules"

If this file doesn't exist in the Astro migration, skip this item.

---

## Summary of changes:
- ai-foundations: Claude 3 → 4.5 family, update context window specs, simplify competitor comparisons
- claude-desktop-app: No changes needed (Gemini license confirmed)
- connectors: Update table to match Gladly's actual connector list, remove hardcoded "12" count
- artifacts: Update types list to include React/Mermaid/PDF, remove hardcoded "7" count
- effective-prompting: Verify styles table matches Normal/Concise/Explanatory/Formal, add custom styles if missing
- mcp-integration: agentation.dev is valid, update description if needed
- learning-paths: Fix title, module counts, certification badge labels

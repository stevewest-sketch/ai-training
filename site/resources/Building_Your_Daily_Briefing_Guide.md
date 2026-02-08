# Building Your Daily Briefing as a Claude Skill

A step-by-step guide to creating a skill that synthesizes your meetings, communications, documents, and tasks into actionable intelligence.

---

## Table of Contents

1. [What's a Skill?](#whats-a-skill)
2. [Prerequisites](#prerequisites)
3. [Step 1: Gather Your Information](#step-1-gather-your-information)
4. [Step 2: Build Your Skill in Claude Chat](#step-2-build-your-skill-in-claude-chat)
5. [Step 3: Install Your Skill](#step-3-install-your-skill)
6. [Step 4: Test Your Briefing](#step-4-test-your-briefing)
7. [Step 5: Customize and Iterate](#step-5-customize-and-iterate)
8. [Skill Architecture Reference](#skill-architecture-reference)
9. [Briefing Section Reference](#briefing-section-reference)
10. [Meeting Notes Setup](#meeting-notes-setup)
11. [Google Drive: Docs vs. Sheets](#google-drive-docs-vs-sheets)
12. [Cross-System Intelligence Patterns](#cross-system-intelligence-patterns)
13. [Maintenance & Iteration](#maintenance--iteration)
14. [Troubleshooting](#troubleshooting)

---

## What's a Skill?

A Claude Skill is an installable package that tells Claude how to behave when triggered. For your daily briefing, the skill contains instructions for how to gather and present your briefing, plus your context — who you are, your team, your priorities, your key documents.

Once installed, you say "let's start our day" in any Claude conversation and get a customized daily briefing. No file system setup, no Cowork required, works on web, mobile, and desktop.

### Skill Structure

```
daily-briefing/
├── SKILL.md                    ← Instructions (what Claude does when triggered)
└── references/
    └── context.md              ← Your knowledge base (who you are, your work context)
```

That's the entire structure. Two files.

---

## Prerequisites

**Required MCP Connectors** (check in Settings → Connected Apps or Connectors):
- Slack
- Gmail
- Google Calendar
- Google Drive

**Recommended:**
- Granola (for meeting notes — works with Zoom, Teams, Google Meet, any platform)

---

## Step 1: Gather Your Information

Fill this out before talking to Claude. You'll paste it directly into the build conversation.

```
ABOUT YOU
---------
Name:
Title:
Company: Gladly
Manager: [Name] ([Their Title])
Email:

YOUR TEAM (skip if IC without direct reports)
----------------------------------------------
Direct Report 1: [Name] - [Role] - [Focus Areas]
Direct Report 2: [Name] - [Role] - [Focus Areas]
Direct Report 3: [Name] - [Role] - [Focus Areas]

KEY COLLABORATORS
-----------------
[Name] - [Role] - [How you work together] - [Meeting cadence]
[Name] - [Role] - [How you work together]

PRIORITY SLACK CHANNELS (in order of importance)
-------------------------------------------------
1. DMs with [Manager Name]
2. DMs from direct reports (if applicable)
3. #[your-team-private-channel]
4. #[cross-functional-channel]
5. #[project-channel]
6. #[other relevant channel]

KEY GOOGLE DOCUMENTS
--------------------
[Doc Name]: [Full URL]  → Type: Doc / Sheet
[Doc Name]: [Full URL]  → Type: Doc / Sheet
[Doc Name]: [Full URL]  → Type: Doc / Sheet

YOUR OKRs OR CURRENT GOALS
---------------------------
Goal 1: [Description] — Due: [Date]
Goal 2: [Description] — Due: [Date]
Goal 3: [Description] — Due: [Date]

DAY-SPECIFIC PATTERNS
----------------------
Monday: [e.g., "Update OKR progress, weekly planning"]
Tuesday: [e.g., "Heavy meeting day — manager 1:1, team sync"]
Friday: [e.g., "Week wrap-up, prep next week"]

WHAT MATTERS MOST IN YOUR BRIEFING
-----------------------------------
(Rank or cross out what you don't need)
□ Today's schedule with meeting prep
□ Urgent items (48-hour action window)
□ Action items from recent meetings
□ Google Doc comments needing response
□ OKR progress
□ Manager activity / what they're tracking
□ Team pulse / direct report status
□ Competitive intelligence
□ Other: ___

ALERT TRIGGERS
--------------
[e.g., "Manager mentions same thing twice = they're tracking it"]
[e.g., "Same blocker from team 2+ times = needs escalation"]
[e.g., "Deadline within 48h I haven't mentioned"]
```

### Tips

- **Slack channels**: Think about which channels you actually check first every morning. Start with 4-6.
- **Google Docs vs. Sheets**: Claude can fetch Google Docs directly via MCP but Google Sheets require browser tools. Note which is which.
- **OKRs**: Include the Google Doc/Sheet URL so Claude can fetch them live instead of using stale data.
- **Don't overthink it**: You can always rebuild to add or remove things.

---

## Step 2: Build Your Skill in Claude Chat

Open a new conversation in claude.ai or the Claude app. Paste this prompt with your information:

```
I want to build a personal daily briefing skill for Claude.
Here's my information:

[Paste your completed worksheet from Step 1]

Please build this as a .skill file with:
1. SKILL.md — the briefing instructions Claude follows when I say
   "let's start our day"
2. references/context.md — my consolidated knowledge base

Important requirements:
- Work with MCP connectors: Slack, Gmail, Calendar, Drive, Granola
- If any data source fails or errors, continue with the remaining sources
- Include error handling for each source (especially Granola, which can be flaky)
- Google Docs should use google_drive_fetch; Google Sheets need Chrome browser tools
- Cross-reference signals across systems — don't just list data, connect it
- End the briefing with "Over to you" and contextual follow-up prompts
- Include day-specific logic (Monday OKR reminders, heavy meeting day prep, Friday wrap)

Package it as a downloadable .skill file when done.
```

### What Claude Does

1. Asks clarifying questions about anything ambiguous
2. Creates the SKILL.md with your customized briefing flow
3. Creates references/context.md with your consolidated knowledge base
4. Validates the skill format
5. Packages and presents a downloadable `.skill` file

One conversation, 10-20 minutes.

---

## Step 3: Install Your Skill

1. **Download** the `.skill` file Claude created
2. **Navigate** to claude.ai → Settings → Skills
3. **Upload** your `.skill` file
4. **Done** — active across all conversations

---

## Step 4: Test Your Briefing

Open a **new conversation** (not the one you used to build). Type:

```
Let's start our day
```

First run takes 30-60 seconds as Claude queries all connected systems.

### Evaluation Checklist

- ✅ Calendar pulled correctly?
- ✅ Relevant Slack messages found?
- ✅ Meeting action items surfaced?
- ✅ "Needs Your Attention" items actually urgent?
- ✅ Meeting prep useful?
- ❌ What's missing?
- ❌ What's noise?
- ❌ Any sections consistently empty?

---

## Step 5: Customize and Iterate

| If You Notice... | Fix It By... |
|-----------------|--------------|
| Briefing is too long | Remove sections or move to "over to you" prompts |
| Missing a Slack channel | Update context.md and rebuild |
| OKR data stale or missing | Verify Google Doc ID; check if it's a Sheet not a Doc |
| Manager section empty | Check the right Slack username for your manager |
| Granola keeps erroring | Skill handles this — shows warning, continues |
| Section always empty | Remove from briefing template |
| Want a new section | Describe to Claude, rebuild |

### How to Rebuild

Start a new Claude chat:

```
I want to update my daily briefing skill.
[Upload your current .skill or SKILL.md + context.md]

Changes I want:
- [Change 1]
- [Change 2]

Please rebuild and repackage as a .skill file.
```

Re-upload the new `.skill` to replace the old one.

---

## Skill Architecture Reference

### SKILL.md Key Sections

1. **YAML Frontmatter** — name (kebab-case) and description (includes trigger phrases)
2. **Trigger Definition** — what phrases activate the skill
3. **Execution Flow:**
   - Step 1: Read context
   - Step 2: Gather data from connected systems
   - Step 3: Assemble the briefing
   - Step 4: Proactive task offers
   - Step 5: Close with follow-up prompts
4. **Day-Specific Logic** — Monday reminders, heavy meeting day prep, Friday wrap
5. **Cross-System Intelligence** — rules for connecting signals
6. **Alert Triggers** — patterns that always get flagged
7. **Error Handling** — what to do when each source fails
8. **Style Guidelines** — tone, formatting, verbosity

### references/context.md Contents

One consolidated file:
- Your profile (name, role, reporting structure)
- Team roster (direct reports with roles and focus areas)
- Key collaborators
- Slack channel map (tiered by priority)
- Google Drive doc IDs and URLs (Docs vs. Sheets noted)
- OKR summary (with fallback data in case Drive fetch fails)
- Active projects (with associated channels and docs)
- Competitive landscape (if relevant)
- Working style preferences

---

## Briefing Section Reference

Not every section applies to every role:

| Section | Everyone | Managers | ICs | Customer-Facing |
|---------|----------|----------|-----|-----------------|
| 📅 Today's Schedule | ✅ | ✅ | ✅ | ✅ |
| 🔴 Needs Your Attention | ✅ | ✅ | ✅ | ✅ |
| ✅ Action Items From Meetings | ✅ | ✅ | ✅ | ✅ |
| 📧 Doc Comments | ✅ | ✅ | ✅ | ✅ |
| 🎯 OKR Progress | ✅ | ✅ | ✅ | ✅ |
| 🔥 Manager Activity | ✅ | ✅ | ✅ | ✅ |
| 👥 Team Pulse | | ✅ | | |
| 🗓️ Meeting Prep | ✅ | ✅ | ✅ | ✅ |
| Team OKR Snapshot | | ✅ | | |
| Deal/Account Intel | | | | ✅ |
| Competitive Intel | | Optional | | ✅ |

---

## Meeting Notes Setup

### Granola MCP (Recommended)

Rich notes from any platform. Setup: Install Granola → Enable MCP connector in Claude Settings.

Claude queries during your briefing:
```
query_granola_meetings: "What action items, decisions, and follow-ups
                         from my meetings in the last 3 days?"
```

**Known issue:** Granola's MCP can throw UUID errors occasionally. Your skill should handle this — show a warning, continue without meeting data.

### Gemini Notes via Gmail

Automatic for Google Meet. Summaries emailed with subject "Notes by Gemini." Claude searches Gmail during briefing. Good backup for Meet-only users.

### Both Together

Many users enable both. Claude pulls from both and deduplicates.

---

## Google Drive: Docs vs. Sheets

| Type | How Claude Fetches | What You Need |
|------|-------------------|---------------|
| **Google Docs** | `google_drive_fetch` MCP — fast, reliable | Doc ID (string between `/d/` and `/edit`) |
| **Google Sheets** | Chrome browser tools — navigates to URL | Full URL including `gid` parameter |

**How to find a Doc ID:**
From `https://docs.google.com/document/d/1ABC123xyz/edit` → Doc ID is `1ABC123xyz`

**For Sheets:** Use the complete URL with tab info:
`https://docs.google.com/spreadsheets/d/13wQQN.../edit?gid=731488875#gid=731488875`

**Tip:** Move critical data from Sheets to Docs when possible — faster and more reliable.

---

## Cross-System Intelligence Patterns

The value comes from connecting signals, not listing them:

| Pattern | Meaning | Where to Surface |
|---------|---------|-----------------|
| Topic in Slack AND on today's agenda | Likely to come up | Meeting Prep |
| Action item from meeting + today's calendar | Need to deliver/report | Needs Your Attention |
| Doc comment AND meeting note → same deliverable | High priority | Needs Your Attention |
| Manager mentions something twice | They're tracking it | Alert: flag explicitly |
| Team member signals blocker in Slack | Check against their OKRs | Team Pulse |
| Same blocker from someone 2+ times | Needs escalation | Alert: flag explicitly |
| Deadline within 48h, not recently mentioned | May be forgotten | Needs Your Attention |
| Item in BOTH email AND meeting notes | Definitely needs attention | Alert: flag explicitly |

---

## Maintenance & Iteration

| Trigger | What to Update |
|---------|---------------|
| OKRs change (quarterly) | Rebuild with new goals, due dates, Doc IDs |
| Team structure changes | Update team roster in context.md |
| New key Slack channel | Add to channel list, tier appropriately |
| Section consistently empty/noisy | Remove or adjust instructions |
| New project kicks off | Add project + channels/docs to context |
| Something breaks | Usually a Doc ID moved or connector disconnected |

### Iteration Tips

1. **Start simple.** Calendar + Slack + basic briefing, then layer in complexity.
2. **Note what's missing.** When you wish Claude had surfaced something, add it.
3. **Remove noise.** If a section isn't useful, cut it.
4. **Use "over to you" liberally.** Move nice-to-have sections to on-demand prompts.

---

## Troubleshooting

| Problem | Cause | Fix |
|---------|-------|-----|
| Briefing didn't trigger | Skill not installed or wrong phrase | Settings → Skills. Try "let's start our day." New conversation. |
| "Granola unavailable" | MCP connector flaky | Normal — briefing continues. Retry next time. |
| Missing Slack messages | Channel names don't match | Verify exact names including hyphens. Check Connected Apps. |
| OKR shows "⚠️ stale" | Drive fetch failed | Check Doc ID. Verify you have access. |
| Sheets data missing | `google_drive_fetch` doesn't work with Sheets | Sheets need Chrome tools. Note in skill. |
| "Response could not be fully generated" | Too much data | Reduce channels. Simplify sections. |
| Claude says can't find skill | Not installed correctly | Re-upload .skill in Settings → Skills. New conversation. |

---

*Built with Claude Skills. Last updated: February 2026.*

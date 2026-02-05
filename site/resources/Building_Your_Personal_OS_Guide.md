# Building Your Personal OS in Claude Cowork

A comprehensive guide to creating a daily operating system that synthesizes your meetings, communications, documents, and tasks into actionable briefings.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Folder Structure Setup](#folder-structure-setup)
4. [Creating Your CLAUDE.md Brain File](#creating-your-claudemd-brain-file)
5. [Building Your Context Files](#building-your-context-files)
6. [Connecting Your Systems](#connecting-your-systems)
7. [Setting Up Meeting Notes](#setting-up-meeting-notes)
8. [Customizing Your Briefing Output](#customizing-your-briefing-output)
9. [Over to You Options](#over-to-you-options)
10. [Maintenance & Iteration](#maintenance--iteration)
11. [Quick Start Checklist](#quick-start-checklist)
12. [Troubleshooting](#troubleshooting)

---

## Overview

### What You're Building

A personal AI chief of staff that:
- Pulls context from multiple systems (Slack, Gmail, Calendar, Drive, meeting notes)
- Synthesizes information across sources to surface what matters
- Delivers a daily briefing tailored to your role and priorities
- Tracks your OKRs, action items, and team status
- Responds to follow-up prompts for deeper dives

### The Core Concept

When you say "let's start our day" (or similar trigger phrase), Claude will:
1. Read your context files to understand who you are and what you care about
2. Search your connected systems for recent activity
3. Pull your Gemini meeting notes from Gmail for AI-generated summaries
4. Cross-reference everything to surface patterns and priorities
5. Present a structured briefing with clear next actions

### Meeting Notes Options

| Option | Best For | What You Get |
|--------|----------|--------------|
| **Gemini Notes** | Google Meet users | Automatic summaries emailed after meetings |
| **Granola** | All meetings (Zoom, Teams, Meet) | Rich structured notes with full context |

**Both are easy to set up.** Gemini works automatically via Gmail. Granola works via MCP connector — just as simple as connecting Slack. Many users enable both for complete coverage.

---

## Prerequisites

### Required
- Claude Cowork access (with folder mounted)
- Slack MCP connector enabled
- Gmail MCP connector enabled
- Google Calendar MCP connector enabled
- Google Drive MCP connector enabled

### For Meeting Notes (choose one or both)
- **Gemini Notes**: Automatic for Google Meet users (notes emailed via Gmail)
- **Granola MCP**: Enable in Settings → Connectors (works with any meeting platform)

---

## Folder Structure Setup

Create this folder structure in your mounted Claude folder:

```
Claude/
├── CLAUDE.md              ← Main instruction file (the "brain")
├── Context/
│   ├── profile.md         ← Who you are, your role, preferences
│   ├── team.md            ← Your direct reports and key collaborators
│   ├── projects.md        ← Active projects and initiatives
│   ├── drive_links.md     ← Key document links and IDs
│   └── competitors.md     ← Competitive landscape (if relevant)
└── Outbox/
    └── Daily/             ← (Optional) Saved briefings
```

### Creating the Folders

**Option 1: Ask Claude to create them**
In Cowork, simply say:
> "Create my Personal OS folder structure in the Claude folder"

**Option 2: Create manually in Terminal**
```bash
mkdir -p ~/Claude/Context
mkdir -p ~/Claude/Outbox/Daily
```

---

## Creating Your CLAUDE.md Brain File

This is the most important file. It tells Claude who you are, what to do when you ask for a briefing, and how to format outputs.

### Starter Template

Copy this entire block and paste it into a new file called `CLAUDE.md` in your Claude folder:

```markdown
# CLAUDE.md - [Your Name]'s Personal OS

You are my executive assistant and chief of staff. I'm [Your Role] at Gladly.

---

## "Let's start our day" → DAILY BRIEFING

When I say "let's start our day" (or "morning", "daily briefing", etc.), execute the briefing routine below.

### What to gather (in parallel):
1. Read context files: `Claude/Context/*.md`
2. Granola: Query recent meetings for action items and decisions (if enabled)
3. Slack: Messages to me, from my manager, from direct reports
4. Gmail: Doc comments/mentions (+ Gemini notes if not using Granola)
5. Calendar: Today's meetings
6. Drive: Recent updates to key documents

### Output format:

# 📋 Daily Briefing — [Day], [Date]

## 📅 Today's Schedule
[Table: Time | Meeting | Status/Attendees]

## 🔴 Needs Your Attention
[Numbered list with context - action items, doc comments, deadlines. Include links/sources]

## ✅ Action Items From Recent Meetings
**You committed to:**
- [Items from Granola/Gemini notes and recent meetings]

**Waiting on others:**
- [Person]: [What they owe]

## 📧 Doc Comments/Mentions Needing Response
[Table: Document | Who | What They Need]

## 🎯 OKR Progress & Alignment
**My OKRs:**
[Table: Objective | Key Result | Due | Status]

**Team OKR Status (for 1:1s):** *(if you have direct reports)*
- **[Report 1]**: [Status]
- **[Report 2]**: [Status]

## 🔥 Manager Activity (Last 24h)
[What my manager is tracking - 2-3 bullets]

## 👥 Team Pulse *(if applicable)*
[1-2 sentences each on direct reports]

## ✅ Gladly News (Use in Conversations)
[Recent wins, awards, research to reference]

## 🗓️ Meeting Prep
[Context and talking points for first 2-3 meetings]

**END with:** "Over to you—what do you want to dive into?"

### What goes in "Over to you" (NOT in main briefing):
- Competitive intel
- Planning doc deep dives
- Deal intel requests

---

## "Over to you" Options

When I ask for more, these are my options:

### Quick prompts
- **"competitive"** → Search for competitor news
- **"planning docs"** → Fetch and summarize key planning documents
- **"1:1 prep [name]"** → Deep context for upcoming 1:1
- **"meeting prep [topic]"** → Pull context for specific meeting
- **"email drafts"** → Help draft responses to flagged items

### Research prompts
- **"deal intel [account]"** → Search Slack + Drive for account context
- **"deep dive [topic]"** → Go deeper on specific area
- **"what did I miss on [channel]"** → Summarize Slack activity

### Action prompts
- **"help me write [deliverable]"** → Draft comms, docs, slides
- **"update OKRs"** → Walk through OKR progress updates
- **"weekly wrap"** → Friday summary + next week priorities

---

## Key People Reference

**My Manager:**
- [Name] - [Title]

**My Direct Reports:** *(if applicable)*
- [Name] - [Role]
- [Name] - [Role]

**Key Collaborators:**
- [Name] - [Role/Relationship]

---

## OKR Deadlines to Track

- Objective 1 KR1: [Description] → [Due Date]
- Objective 1 KR2: [Description] → [Due Date]
- Objective 2 KR1: [Description] → [Due Date]

---

## Priority Slack Channels

1. DMs with [Manager Name]
2. #[your-team-channel]
3. #[cross-functional-channel]
4. #[relevant-project-channel]

---

## Day-Specific Reminders

**Monday:** [e.g., Update OKR progress, prep for weekly meetings]
**Tuesday:** [e.g., Heavy meeting day - prioritize prep]
**Wednesday:** [e.g., Focus time - minimal meetings]
**Friday:** [e.g., Week wrap-up, next week prep]

---

## Alert Triggers (always flag these)

- [Manager] mentions same thing twice = they're tracking it
- Same blocker from team 2+ times = needs escalation
- Deadline within 48 hours I haven't mentioned = ask if handled
- Action item in BOTH email AND meeting = definitely needs attention

---

## Working Style

- Be concise - I'll ask for more if I want it
- Actually execute - run searches, don't describe them
- Flag only what needs action - skip FYI-only updates
```

### Customizing Your CLAUDE.md

After pasting, replace all `[bracketed items]` with your actual information:
- Your name and role
- Your manager's name
- Your direct reports (if any)
- Your OKR deadlines
- Your priority Slack channels

---

## Building Your Context Files

### profile.md

Create `Claude/Context/profile.md`:

```markdown
# [Your Name] - Profile

## Who I Am
- **Name**: [Your Name]
- **Role**: [Your Title]
- **Company**: Gladly
- **Reports to**: [Manager Name] (within [Department])
- **Email**: [your.email@gladly.com]

## My Team *(if applicable)*
- [Direct Report 1] - [Their Role]
- [Direct Report 2] - [Their Role]

## Key Stakeholders
- [Manager Name] - Manager
- [Stakeholder 1] - [Their Role/Relationship]
- [Stakeholder 2] - [Their Role/Relationship]

## What I Do
- [Key responsibility 1]
- [Key responsibility 2]
- [Key responsibility 3]

## Current Goals/Focus Areas
- [Goal 1]
- [Goal 2]

## Work Style Preferences
- [e.g., Prefer concise communication]
- [e.g., Like to see data before recommendations]
- [e.g., Track tasks mentally - need help capturing]
```

### team.md

Create `Claude/Context/team.md`:

```markdown
# My Team & Key Collaborators

## Direct Reports *(if applicable)*

### [Direct Report 1 Name]
**Role**: [Their Title]

**Focus Areas**:
- [Area 1]
- [Area 2]

**Current OKRs/Key Work**:
- **Objective 1**: [Description]
  - KR1: [Key Result] - [Due Date]

**1:1 Cadence**: [Day/Time]

---

### [Direct Report 2 Name]
[Same structure]

---

## Key Collaborators

### [Collaborator Name]
**Relationship**: [How you work together]
**Meeting Cadence**: [If applicable]
**Collaboration Areas**: [What you work on together]
```

### projects.md

Create `Claude/Context/projects.md`:

```markdown
# Active Projects

## [Project Name 1]
**Status**: [In Progress / Planning / Blocked]
**Priority**: [High / Medium / Low]
**Owner**: [You or who]

**Description**: [Brief description]

**Key Activities**:
- [Activity 1]
- [Activity 2]

**Next Actions**:
- [ ] [Action item]

---

## [Project Name 2]
[Same structure]

---

## Completed Projects
[Move finished projects here for reference]
```

### drive_links.md

Create `Claude/Context/drive_links.md`:

```markdown
# Key Google Drive Links

## OKRs & Planning

### [Document Name - e.g., "Team OKRs Q1"]
- **Link**: [Full URL]
- **Doc ID**: `[Extract from URL - the long string between /d/ and /edit]`
- **Your Focus Areas**: [What sections matter to you]
- **Update Cadence**: [e.g., Every Monday]

### [Document Name 2]
- **Link**: [URL]
- **Doc ID**: `[ID]`
- **Use**: [What you use this for]

## Team Documents

### [Document Name]
- **Link**: [URL]
- **Doc ID**: `[ID]`
- **Use**: [What you use this for]

## Meeting Documents

### [Recurring Meeting Notes Doc]
- **Link**: [URL]
- **Doc ID**: `[ID]`
- **Use**: [e.g., Review before Tuesday meetings]
```

**How to find a Doc ID:**
From a URL like `https://docs.google.com/document/d/1ABC123xyz/edit`, the Doc ID is `1ABC123xyz`.

### competitors.md (optional - for GTM roles)

Create `Claude/Context/competitors.md`:

```markdown
# Competitive Landscape

## Tier 1 - Primary Threats

### [Competitor Name]
- **Threat Level**: [Critical / High / Medium / Low]
- **Strategy**: [How they compete with Gladly]
- **Our Defense**: [How we win against them]

## Tier 2 - Market Competitors

### [Competitor Name]
- [Brief description]
- Gladly differentiator: [What we do better]

## Key Differentiators to Reinforce
- [Differentiator 1]
- [Differentiator 2]
```

---

## Connecting Your Systems

### Slack Searches

Add these search patterns to your CLAUDE.md (customize the usernames):

```markdown
## Slack Searches

1. **Messages to me:**
   slack_search_public: "to:me after:yesterday"

2. **Messages from my manager:**
   slack_search_public: "from:[manager.username] after:yesterday"

3. **Priority channels:**
   slack_search_public: "in:[your-team-channel] after:yesterday"
   slack_search_public: "in:[leadership-channel] after:yesterday"

4. **Messages from direct reports:** *(if applicable)*
   slack_search_public: "from:[report1.username] after:yesterday"
   slack_search_public: "from:[report2.username] after:yesterday"
```

### Gmail Searches

Focus on actionable items, not all email:

```markdown
## Gmail Searches

### Gemini Meeting Notes (HIGH PRIORITY)
search_gmail_messages: q="subject:(Notes by Gemini) newer_than:3d"

### Doc Comments/Mentions (HIGH PRIORITY)
search_gmail_messages: q="from:comments-noreply@docs.google.com newer_than:2d"

### Direct Messages from Key People
search_gmail_messages: q="from:[manager]@gladly.com newer_than:2d"

### IGNORE:
- Newsletters, marketing emails
- Automated notifications (except above)
- Calendar invites (captured in Calendar)
- Slack email notifications (captured in Slack)
```

### Google Calendar

```markdown
## Calendar

list_gcal_events: calendar_id="primary", time_min="today 00:00", time_max="today 23:59"

For first 3 meetings:
- Note title, time, attendees
- Search Slack/Drive for related context
- Suggest 2-3 talking points
```

### Google Drive

```markdown
## Drive Searches

### Recent activity:
google_drive_search: "modifiedTime > 'yesterday'"

### Key folders to monitor:
google_drive_search: "[Your Project Name]"
google_drive_search: "[Your Team Name]"
```

---

## Setting Up Meeting Notes

You have two options for meeting intelligence — use one or both depending on your workflow.

---

### Option A: Granola MCP (Recommended)

Granola provides the richest meeting context and works with any meeting platform.

**Setup:**
1. Install [Granola app](https://granola.ai) (free tier works)
2. Enable the Granola MCP connector in Claude Cowork (Settings → Connectors)
3. That's it — Claude can now query your meetings directly

**What Claude Can Access:**
- Full meeting notes with structured summaries
- Action items and decisions
- Participant lists and context
- Meeting transcripts (via Granola links)

**How Claude Queries Granola:**

For your daily briefing, Claude will use:
```
query_granola_meetings: "What action items and decisions from my meetings in the last 3 days?"
list_meetings: time_range="this_week"
```

For specific meeting context:
```
query_granola_meetings: "What was discussed in my 1:1 with [name]?"
```

**Why Granola is Recommended:**
- Works with Zoom, Teams, Meet, and any other platform
- Richer notes than Gemini
- Direct MCP queries (no email searching)
- Local storage means faster access

---

### Option B: Gemini Notes via Gmail

If you primarily use Google Meet and don't want another app, Gemini notes work automatically.

**How It Works:**
1. You attend a Google Meet meeting
2. Gemini generates notes with summary, action items, and key points
3. Notes are emailed to you with subject line "Notes by Gemini"
4. Claude searches Gmail for these notes during your briefing

**Gmail Search for Gemini Notes:**
```
search_gmail_messages: q="subject:(Notes by Gemini) newer_than:3d"
```

**Tips for Better Gemini Notes:**
- Enable transcription in Google Meet settings
- Use clear action language ("Steve will...", "Action item:...")
- State decisions explicitly

---

### Using Both Together

Many users enable both:
- **Granola** for detailed notes and cross-platform meetings
- **Gemini** as a backup for quick Google Meet summaries

Claude will pull from both sources and dedupe when presenting your briefing.

---

## Customizing Your Briefing Output

### Choose Your Sections

Not all sections apply to everyone. Customize based on your role:

**For Individual Contributors (ICs):**
- Remove "Team OKR Status" and "Team Pulse" sections
- Focus on your own deliverables and blockers
- Add project-specific tracking

**For Managers:**
- Keep all team-related sections
- Add 1:1 prep emphasis
- Include team Slack monitoring

**For Customer-Facing Roles:**
- Add deal/account channel monitoring
- Include customer health signals
- Track renewal/expansion activity

**For Executives:**
- Add competitive intel to main briefing
- Include company-wide metrics
- Track board/investor items

### Section Reference

| Section | Keep If... |
|---------|------------|
| Today's Schedule | Everyone |
| Needs Your Attention | Everyone |
| Action Items From Meetings | Everyone |
| Doc Comments/Mentions | Everyone |
| OKR Progress | You have OKRs to track |
| Team OKR Status | You manage people |
| Manager Activity | You want visibility into manager's focus |
| Team Pulse | You manage people |
| Gladly News | You're customer-facing or in GTM |
| Meeting Prep | You have meetings that day |

---

## Over to You Options

These are on-demand prompts for when you want to go deeper. Customize based on what you commonly need:

```markdown
## "Over to you" Options

### Quick prompts
- **"competitive"** → Search for competitor news
- **"planning docs"** → Fetch key planning documents
- **"1:1 prep [name]"** → Deep context for upcoming 1:1
- **"meeting prep [topic]"** → Pull context for specific meeting
- **"email drafts"** → Help draft responses

### Research prompts
- **"deal intel [account]"** → Search Slack + Drive for account
- **"deep dive [topic]"** → Go deeper on specific area
- **"what did I miss on [channel]"** → Summarize Slack activity

### Action prompts
- **"help me write [deliverable]"** → Draft comms, docs, slides
- **"update OKRs"** → Walk through OKR updates
- **"weekly wrap"** → Friday summary + next week priorities
```

---

## Maintenance & Iteration

### Weekly
- Review briefing output - is it surfacing the right things?
- Update `drive_links.md` with any new critical documents
- Adjust Slack channel priorities if needed

### Monthly
- Update `team.md` with current OKRs and focus areas
- Review and update `competitors.md` (if applicable)
- Archive completed projects in `projects.md`

### Quarterly
- Full review of CLAUDE.md instructions
- Update OKR deadlines
- Refresh team structure if org changes

### Tips for Iteration

1. **Start simple, add complexity** - Don't configure everything at once. Start with calendar + Slack + basic briefing, then add layers.

2. **Note what's missing** - When you wish Claude had surfaced something, add it to your CLAUDE.md instructions.

3. **Remove noise** - If sections aren't useful, remove them. The briefing should be actionable, not comprehensive.

4. **Use "over to you" liberally** - Move nice-to-have sections to on-demand prompts.

---

## Quick Start Checklist

- [ ] Enable MCP connectors (Slack, Gmail, Calendar, Drive, and optionally Granola)
- [ ] Create folder structure (`~/Claude/Context/`, etc.)
- [ ] Copy and customize `CLAUDE.md` template
- [ ] Create `profile.md` with your role and preferences
- [ ] Create `team.md` with direct reports or collaborators
- [ ] Create `drive_links.md` with key document IDs
- [ ] Test your briefing: Say "let's start our day"
- [ ] Iterate based on what's missing or noisy

---

## Troubleshooting

### "Briefing is missing meeting context"
- Check that Gemini notes are being sent to your email
- Verify the Gmail search is finding results: `subject:(Notes by Gemini)`
- Ensure you have Gmail MCP connector enabled

### "Briefing is too long"
- Move sections to "over to you" options
- Reduce the Slack search scope
- Focus on action items only

### "Claude isn't reading my files"
- Verify files exist in the mounted folder
- Check file permissions
- Ensure paths in CLAUDE.md match actual locations

### "Missing Slack messages"
- Check channel names are exact matches
- Verify Slack MCP connector is enabled
- Try searching with `in:#channel-name` format

---

## Troubleshooting

### "Briefing is missing meeting context"

**If using Granola MCP:**
- Verify the Granola MCP connector is enabled in Settings → Connectors
- Check that Granola app is running and has recorded meetings
- Try: `list_meetings time_range="this_week"` to verify connection

**If using Gemini Notes:**
- Check that Gemini notes are being sent to your email
- Verify the Gmail search is finding results: `subject:(Notes by Gemini)`
- Ensure you have Gmail MCP connector enabled

### "Briefing is too long"
- Move sections to "over to you" options
- Reduce the Slack search scope
- Focus on action items only

### "Claude isn't reading my files"
- Verify files exist in the mounted folder
- Check file permissions
- Ensure paths in CLAUDE.md match actual locations

### "Missing Slack messages"
- Check channel names are exact matches
- Verify Slack MCP connector is enabled
- Try searching with `in:#channel-name` format

---

*Built with Claude Cowork. Last updated: February 2026.*

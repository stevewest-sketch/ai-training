# AI Training Hub: Comprehensive Analysis & Recommendations

**Prepared for:** Steve West, Director of Revenue Enablement  
**Date:** February 3, 2026  
**Purpose:** Align AI Training Hub with Gladly company-wide training expectations for Hackathon Week

---

## Executive Summary

Your AI Training Hub (ai-training-inky.vercel.app) is well-structured with solid learning path architecture. However, the GTM Leadership meeting (Feb 2) revealed critical alignment gaps between what leadership expects and what the current site delivers. This analysis provides a prioritized roadmap to address these gaps before Thursday's hackathon.

### Critical Findings

| Priority | Gap | Impact | Effort |
|----------|-----|--------|--------|
| 🔴 P0 | Missing "Skills vs Automations" distinction | Users will build wrong things | Low |
| 🟡 P1 | Individual Courses section causes confusion | Conflicting navigation | Low |
| 🟢 P2 | No integration with Austin's live training | Missed coordination opportunity | Low |

---

## Part 1: Leadership Expectations (from GTM Meeting)

### Key Decisions Made

1. **Company-wide skill levels:**
   - **50%+ are beginners** — largest audience, needs most attention
   - **Intermediate** — can build Skills with guidance
   - **Advanced** — works with leader to build automations

2. **Skills vs. Automations (CRITICAL DISTINCTION):**
   > "I might recommend that we focus on starting with **Skills** which require somebody to click a button to run it. But can then be built into automations over time. It's a very complex thing to build like a recurring automation or a process that's plugged into multiple systems." — Austin

   This is the most important terminology your site needs to clarify.

3. **Thursday Hackathon Structure:**
   - **9:00 AM EST:** Austin's live Claude 101 training (45 min)
   - **After training:** Self-select path and consume on-demand content
   - **Beginner/Intermediate track:** Build Skills
   - **Advanced track:** Work with leader on automations
   - **Async sharing:** Optional Slack channel for demos
   - **Feb 13:** Polished show-and-tell at company meeting

4. **Friction acknowledged:**
   - Tool access/approvals taking days
   - API key security concerns
   - Not realistic for everyone to build an agent

5. **Success criteria:**
   > "Raise the lowest common denominator in terms of tool access and training... I just don't think it's realistic given the wide variety—some people have never even opened Claude."

---

## Part 2: Current Site Audit

### What's Working Well ✅

| Element | Assessment |
|---------|------------|
| Three-path structure | Matches curriculum doc perfectly |
| Module breakdown | Clear, actionable, time-boxed |
| Progressive difficulty | Beginner → Intermediate → Advanced flow is logical |
| Visual design | Clean, professional, on-brand |
| Progress tracking UI | Present (though not functional yet) |
| Completion criteria | Defined for each path |

### Critical Gaps 🔴

#### Gap 1: Skills vs. Automations Terminology
**Current state:** Your Intermediate path has "Module 5: Simple Automations" without explaining the critical distinction leadership made.

**Leadership expectation:** Skills = button-click workflows anyone can build. Automations = complex multi-system integrations requiring engineering support.

**Risk:** Intermediate users may attempt to build automations, hit blockers (API access, approvals), get frustrated, waste hackathon time.

#### Gap 2: Individual Courses Section
**Current state:** Training page shows both "Learning Paths" AND "Individual Courses" sections.

**Leadership expectation:** Jodi explicitly said:
> "Can we get rid of Advanced for now? I just want to simplify."

The dual structure creates decision paralysis.

---

## Part 3: Detailed Recommendations

### 🔴 P0: Critical (Complete Before Thursday)

#### 1. Add Skills vs. Automations Explainer
**Location:** Training page hero OR new callout box

**Copy:**
```
## Understanding Skills vs. Automations

**Skills** are single-task workflows you trigger with a button click. 
Anyone can build them. Start here.

**Automations** are complex multi-system workflows that run automatically. 
They require API access, engineering review, and leader approval. 
Only Advanced users working with their manager should attempt these.

👉 For Thursday's Hackathon: Focus on building Skills.
```

#### 2. Update Intermediate Path Module 5
**Current:** "Simple Automations"  
**Change to:** "From Skills to Automations"

**Updated description:**
> Learn how Skills become Automations. In this module, you'll understand the architecture of recurring workflows, but we recommend building Skills first and expanding to Automations only with leader approval.

---

### 🟡 P1: Important (Complete by Thursday if possible)

#### 3. Remove or Collapse Individual Courses Section
**Option A:** Remove entirely — courses are embedded in paths anyway  
**Option B:** Collapse into expandable "Advanced Resources" section  

**Rationale:** Leadership wanted simplicity. Two navigation structures = confusion.

---

### 🟢 P2: Nice to Have (Post-Hackathon)

#### 4. Live Training Integration
Add callout referencing Austin's recorded sessions once available.

#### 5. Progress Tracking Backend
Currently UI-only. Consider:
- Google Forms for completion confirmation (you have placeholders)
- Simple Airtable/Notion database
- Integration with company LMS if one exists

#### 6. Certification Badge System
Your curriculum mentions badges. Could implement as:
- Downloadable badge images
- LinkedIn badge integration
- Slack profile emoji unlocks

---

## Part 4: Learning Path Content Breakdown (CRITICAL)

Based on the GTM Leadership discussion, here's what should be included in each path:

---

### BEGINNER PATH: "AI Foundations & Claude Essentials"
**Duration:** 4-6 hours | **Audience:** Everyone at Gladly (50%+ of company)

**Goal:** Raise the lowest common denominator. Get everyone comfortable using Claude daily.

#### Required Content

| Module | Content | Duration | Source | Status |
|--------|---------|----------|--------|--------|
| 1.1 | AI Fundamentals | 60 min | CoE Portal course | ✅ Exists |
| 1.2 | Claude Desktop Navigation | 30 min | Loom video + practice | ✅ Exists |
| 1.3 | Effective Prompting | 45 min | PromptCowboy + practice | ✅ Exists |
| 1.4 | Git Fundamentals | 45 min | YouTube (GitHub) | ✅ Exists |
| 1.5 | Agentic AI Concepts | 45 min | CoE Portal course | ✅ Exists |

#### Key Concepts to Cover
- What are LLMs and how do they "think"
- Claude's three modes: Chat, Cowork, Code — when to use each
- Writing prompts that get results on the first try
- Basic version control (why Git matters for AI work)
- What AI agents are vs. chatbots vs. automations

#### Completion Criteria
- Pass AI Fundamentals quiz (80%+)
- Complete one task in each Claude mode
- Create and commit to a GitHub repo
- Submit before/after prompt examples

#### Leadership Quote
> "My sense is that every person in the org is at very different levels today. A big win would just be to raise the lowest common denominator... Some people have never even opened Claude."

---

### INTERMEDIATE PATH: "Building with Claude"
**Duration:** 8-12 hours | **Audience:** Anyone wanting to automate their work

**Goal:** Build SKILLS (button-click workflows). This is the focus for most employees during hackathon.

#### Required Content

| Module | Content | Duration | Source | Status |
|--------|---------|----------|--------|--------|
| 2.1 | Claude Code In Action | 60 min | Anthropic Skilljar | ✅ External |
| 2.2 | Planning Mode Mastery | 60 min | Internal training | 🔴 **NEEDS CREATION** |
| 2.3 | Claude Skills Creation | 90 min | Internal walkthrough | 🟡 Needs work |
| 2.4 | Claude Projects Setup | 45 min | Internal tutorial | 🟡 Needs work |
| 2.5 | From Skills to Automations | 90 min | Conceptual bridge | 🔴 **NEEDS CREATION** |

#### Key Concepts to Cover
- Core Claude Code tools: file manipulation, command execution, code analysis
- Context management: /init, CLAUDE.md files, @ mentions
- **Planning Mode methodology** (Austin's process):
  1. Voice dump (15-20 min)
  2. Create SPEC.md from transcript
  3. Enter Plan Mode (Shift+Tab)
  4. Interview process with AskUserQuestionTool
  5. Review plan before approving
  6. Execute and iterate
- What is a Skill vs. an Automation (CRITICAL DISTINCTION)
- Building reusable button-click workflows
- Creating structured knowledge bases (Projects)

#### The Skills vs. Automations Distinction

| Skills | Automations |
|--------|-------------|
| Triggered by clicking a button | Run automatically on schedule/trigger |
| Anyone can build | Requires engineering support |
| No API access needed | Requires API keys, integrations |
| Build during hackathon | Requires leader approval |
| Focus for Beginner/Intermediate | Focus for Advanced only |

#### Completion Criteria
- Complete Anthropic's Claude Code course (certificate)
- Build 2+ working Skills for your role
- Demonstrate Planning Mode workflow
- Document one Skill for team use

#### Leadership Quote
> "I might recommend that we focus on starting with Skills which require somebody to click a button to run it. But can then be built into automations over time. It's a very complex thing to build like a recurring automation or a process that's plugged into multiple systems."

---

### ADVANCED PATH: "Agent Development"
**Duration:** 15-20 hours | **Audience:** Core AI Acceleration team + agent owners

**Goal:** Build production-ready AUTOMATIONS and AI agents for Gladly's 9-agent initiative.

#### Required Content

| Module | Content | Duration | Source | Status |
|--------|---------|----------|--------|--------|
| 3.1 | Claude Code 101 Deep Dive | 30 min | CoE Portal course | ✅ Exists |
| 3.2 | Claude Agent SDK | 120 min | YouTube workshop + docs | ✅ External |
| 3.3 | MCP Server Integration | 90 min | Anthropic docs + lab | ✅ External |
| 3.4 | Multi-Agent Orchestration | 90 min | GitHub + Gist resources | ✅ External |
| 3.5 | Gladly Deep Dive | 90 min | CoE Portal course | ✅ Exists |
| 3.6 | Production Agent Development | 180 min | Hands-on lab | 🟡 Framework exists |

#### Key Concepts to Cover
- Advanced context management and custom commands
- Agent architecture patterns using the SDK
- Tool definitions, schemas, and state management
- MCP (Model Context Protocol) for external service connections
- Relevant integrations: Salesforce, Marketo, Google Workspace, Figma, Slack
- Multi-agent coordination and workflow orchestration
- Human-in-the-loop design and guardrails
- Deployment to sagansystems GitHub org

#### Prerequisites
- Completed Intermediate Path
- Built a working Skill
- Leader assignment to specific automation/agent

#### Completion Criteria
- Build functional agent using Agent SDK
- Integrate with at least one MCP server
- Demonstrate multi-agent coordination
- Deploy one production agent to sagansystems

#### Leadership Quote
> "I really don't want people building random things. I really think this team needs to own what their teams should be building... It's kind of a waste of time to do... random acts of AI."

---

### Content Creation Priority Matrix

| Content | Path | Priority | Owner | Notes |
|---------|------|----------|-------|-------|
| Planning Mode Deep Dive video | Intermediate | 🔴 Critical | Austin | Austin's methodology is the most important training |
| Skills Creation walkthrough | Intermediate | 🔴 Critical | Steve | Show how to build a Skill from scratch |
| Skills vs. Automations explainer | All | 🔴 Critical | Steve | Page-level content for /training |
| From Skills to Automations module | Intermediate | 🟡 High | Steve | Bridge concept between paths |
| Claude Desktop Navigation update | Beginner | 🟡 High | Austin | May need refresh |
| Effective Prompting tutorial | Beginner | 🟡 Medium | Steve | PromptCowboy + examples |

---

## Part 5: Updated Site Architecture

### Recommended Page Structure

```
/                           → Redirect to /training
/training                   → Main hub
  ├── Skills vs. Automations callout
  ├── Choose Your Path (3 cards)
  └── [Collapsed: Individual Courses]

/beginner/                  → Beginner Path Landing
  ├── /ai-fundamentals
  ├── /claude-desktop
  ├── /effective-prompting
  ├── /git-basics
  └── /agentic-concepts

/intermediate/              → Intermediate Path Landing
  ├── /code-in-action
  ├── /planning-mode        ← CRITICAL content needed
  ├── /skills               
  ├── /projects
  └── /skills-to-automations  ← Rename from "automations"

/advanced/                  → Advanced Path Landing
  ├── /deep-dive
  ├── /agent-sdk
  ├── /mcp-integration
  ├── /multi-agent
  ├── /gladly
  └── /production
```

---

## Part 6: Content Gap Inventory

### Missing Content (Needs Creation)

| Content | Path | Priority | Owner |
|---------|------|----------|-------|
| Planning Mode Deep Dive video | Intermediate | 🔴 Critical | Austin |
| Skills Creation walkthrough | Intermediate | 🔴 Critical | Steve |
| Claude Desktop Navigation video | Beginner | 🟡 High | Austin |
| Effective Prompting tutorial | Beginner | 🟡 High | Steve |
| Skills vs. Automations explainer | Training | 🔴 Critical | Steve |

### Existing Content to Link

| Content | Source | Status |
|---------|--------|--------|
| Claude Code in Action | Anthropic Skilljar | ✅ Linked |
| AI Fundamentals | CoE Portal | ✅ Linked |
| Agentic AI Primer | CoE Portal | ✅ Linked |
| Git Fundamentals | YouTube | ✅ Linked |
| Agent SDK Workshop | YouTube | ✅ Linked |

---

## Part 7: Implementation Checklist

### Before Thursday (Feb 6)

- [ ] Add Skills vs. Automations callout to /training
- [ ] Update Intermediate Module 5 title and description
- [ ] Remove or collapse Individual Courses section
- [ ] Create #hackathon-2026 Slack channel
- [ ] Verify all module links work
- [ ] Test on mobile (employees may use phones Thursday)

### After Hackathon (Feb 7-13)

- [ ] Collect feedback via Slack channel
- [ ] Update modules based on friction points
- [ ] Record Planning Mode video (Austin)
- [ ] Add completion tracking backend
- [ ] Prepare demos for Feb 13 show-and-tell

### Ongoing

- [ ] Quarterly content freshness review
- [ ] Post-training survey at 3-week mark
- [ ] Badge/certification system

---

## Claude Code Implementation Prompts

When you're ready to implement, use these prompts with Claude Code:

### Prompt 1: Update Module 5 Intermediate
```
On the Intermediate path, rename Module 5 from "Simple Automations" to 
"From Skills to Automations" and update the description to emphasize that 
Skills should be the focus, and Automations require leader approval.
```

---

## Appendix: Key Quotes from Leadership Meeting

**On beginner focus:**
> "My sense is that every person in the org is at very different levels today. A big win would just be to raise the lowest common denominator."

**On Skills vs. Automations:**
> "I might recommend that we focus on starting with Skills which require somebody to click a button to run it... It's a very complex thing to build like a recurring automation."

**On avoiding random builds:**
> "I really don't want people building random things. I really think this team needs to own what their teams should be building... It's kind of a waste of time to do... random acts of AI."

**On friction:**
> "There's just like a lot of steps and process and we'll get back to you. We cannot tell the company we need you to build automations but they're stopped in the process really early on because I don't have access to basic tools."

**On your site:**
> "I also don't believe that I'm creating something that will confuse people more. I think it's only a net positive that we've turned kind of Slack mess into a centralized sort of hub."

---

*Analysis prepared by Claude • February 3, 2026*

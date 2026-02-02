# Claude Code Learning Paths
## Gladly AI Transformation Training Framework

*Comprehensive guide for onboarding and scaling Claude Code usage across the organization*

---

## Executive Summary

This document defines three progressive learning paths designed to take employees from AI fundamentals to production-ready agent development. These paths directly support Gladly's 9-agent initiative and broader AI transformation goals.

### Learning Objectives (Aligned with OKR Goals)

By completing these learning paths, participants will be able to:

1. **Navigate** between Claude's Chat, Cowork, and Code modes effectively
2. **Apply** planning mode methodology to reduce iteration cycles by 50%+
3. **Create** reusable Claude Skills and Projects for recurring workflows
4. **Build** functional AI agents using Claude Code and the Agent SDK
5. **Integrate** agents with Gladly's tech stack (Salesforce, Marketo, Google Workspace)
6. **Collaborate** using Git/GitHub for version-controlled agent development

---

## Learning Path Overview

| Path | Duration | Target Audience | Outcome |
|------|----------|-----------------|---------|
| **Beginner** | 4-6 hours | All employees | Comfortable daily Claude user |
| **Intermediate** | 8-12 hours | Agent contributors | Can create Skills & simple automations |
| **Advanced** | 15-20 hours | Agent builders (Core team) | Can build production agents |

---

# PATH 1: BEGINNER
## "AI Foundations & Claude Essentials"

**Goal:** Build foundational AI literacy and become a confident daily Claude user

**Who should take this:** Everyone at Gladly

**Time commitment:** 4-6 hours over 1-2 weeks

### Module 1.1: AI Fundamentals (60 min)
**Learning Objective:** Understand core AI/ML concepts and how LLMs work

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| AI Foundations | CoE Portal Course | 60 min | [center-of-excellence.xyz/training](https://www.center-of-excellence.xyz/training) |

**Key Concepts:**
- What are Large Language Models (LLMs)
- How AI "thinks" (tokens, context windows, temperature)
- AI capabilities vs. limitations
- Responsible AI usage

**Knowledge Check:** Quiz on AI fundamentals (target: 80% pass rate)

---

### Module 1.2: Claude Desktop Navigation (30 min)
**Learning Objective:** Navigate Claude's three modes and understand when to use each

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Claude Desktop App Overview | Loom Video | 10 min | [Loom Link](https://www.loom.com/share/97cb836202304912a45df619caa22f08) |
| Hands-on Practice | Self-guided | 20 min | — |

**Key Concepts:**
- **Chat Mode:** Conversational AI for questions and brainstorming
- **Cowork Mode:** File-based collaboration and document creation
- **Code Mode:** Terminal-based development and automation

**Pro Tips:**
- Double-tap Option ⌥ to open Claude Code input field
- Keep Claude Desktop updated (Check for Updates in menu)
- Use keyboard shortcuts: Shift+Tab to cycle modes

**Knowledge Check:** Complete 3 tasks—one in each mode

---

### Module 1.3: Effective Prompting (45 min)
**Learning Objective:** Write prompts that get high-quality results on the first try

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Prompt Cowboy Tool | Interactive Tool | 15 min | [promptcowboy.ai](https://www.promptcowboy.ai/) |
| Prompting Practice | Self-guided | 30 min | — |

**Key Concepts:**
- Be specific about desired output format
- Provide context and constraints
- Use examples when helpful
- Iterate based on results

**Prompting Framework:**
```
CONTEXT: [Who you are and what you're working on]
TASK: [Specific action you need]
FORMAT: [How you want the output structured]
CONSTRAINTS: [Any limitations or requirements]
```

**Knowledge Check:** Submit before/after prompts showing improvement

---

### Module 1.4: Git Fundamentals (45 min)
**Learning Objective:** Understand version control basics for collaborative development

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| A Brief Introduction to Git | YouTube (GitHub) | 15 min | [YouTube](https://www.youtube.com/watch?v=r8jQ9hVA2qs) |
| Git Practice Exercise | Hands-on | 30 min | — |

**Key Concepts:**
- What is version control and why it matters
- Repositories, commits, and branches
- Basic Git commands (status, add, commit, push, pull)
- GitHub as collaboration platform

**Why This Matters for AI:**
- All Gladly agents will live in GitHub (sagansystems org)
- Claude Code integrates directly with Git
- Version control enables safe experimentation

**Knowledge Check:** Create a repo, make a commit, push to GitHub

---

### Module 1.5: Agentic AI Concepts (45 min)
**Learning Objective:** Understand what AI agents are and how they work

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Agentic AI Primer | CoE Portal Course | 45 min | [center-of-excellence.xyz/training](https://www.center-of-excellence.xyz/training) |

**Key Concepts:**
- Agents vs. chatbots vs. automation
- Tool use and function calling
- Guardrails and approval workflows
- Human-in-the-loop design

**Knowledge Check:** Identify which of Gladly's 9 agents would help your role

---

## Beginner Path Completion Criteria

✅ Pass AI Fundamentals quiz (80%+)
✅ Complete task in each Claude mode
✅ Create and commit to a GitHub repo
✅ Submit improved prompt examples
✅ Identify relevant agent for your role

**Certification:** "Claude Essentials" badge

---

# PATH 2: INTERMEDIATE
## "Building with Claude"

**Goal:** Create Claude Skills and Projects to automate your own workflows

**Who should take this:** Anyone contributing to agent development or wanting to automate their work

**Prerequisites:** Completion of Beginner Path

**Time commitment:** 8-12 hours over 2-3 weeks

### Module 2.1: Claude Code In Action (60 min) ⭐ REQUIRED
**Learning Objective:** Master Claude Code's core tools and workflows

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Claude Code in Action | Anthropic Official Course | 1 hour | [anthropic.skilljar.com](https://anthropic.skilljar.com/claude-code-in-action) |

**Key Concepts:**
- Core tools: file manipulation, command execution, code analysis
- Context management: /init, CLAUDE.md files, @ mentions
- Hotkeys and commands for conversation flow
- Plan Mode and Thinking Mode for complex tasks

**This is the most important training.** It covers everything from Anthropic directly.

**Knowledge Check:** Course quiz + certificate of completion

---

### Module 2.2: Planning Mode Mastery (60 min) ⭐ CRITICAL
**Learning Objective:** Use planning mode to reduce iteration and improve output quality

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Planning Mode Deep Dive | Internal Training | 30 min | [To be created] |
| Practice Session | Hands-on | 30 min | — |

**Austin's Planning Process:**
1. **Voice dump** (15-20 min): Record thoughts about your idea using Apple Voice Memo
2. **Create SPEC.md**: Paste transcript into Claude, ask it to create a specification doc
3. **Enter Plan Mode**: Share SPEC.md with Claude Code, press Shift+Tab for plan mode
4. **Interview Process**: Use this prompt:
   ```
   Read this @SPEC.md file and interview me in detail using the
   AskUserQuestionTool about literally anything: technical implementation,
   UI & UX, concerns, tradeoffs, etc. but make sure the questions are not
   obvious. Be very in-depth and continue interviewing me continually until
   it's complete, then write the detailed spec to the file.
   ```
5. **Review Plan**: Read thoroughly before approving (ask for non-technical version if needed)
6. **Execute**: Approve the plan and iterate

**Key Insight:** "The majority of your time in a coding project with AI should be spent in planning mode."

**Knowledge Check:** Complete a project using the full planning workflow

---

### Module 2.3: Claude Skills Creation (90 min)
**Learning Objective:** Build reusable workflows that automate recurring tasks

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Claude Skills Explained | YouTube | 25 min | [YouTube](https://www.youtube.com/watch?v=MZZCW179nKM&t=1421s) |
| Skills Creation Walkthrough | Internal Recording | 11 min | [AI-Lab Office Hours 2/2/26 - 00:09:57 to 00:20:49] |
| Skills Directory | Reference | Browse | [skills.sh/trending](https://skills.sh/trending) |
| Build Your First Skill | Hands-on | 45 min | — |

**Key Concepts:**
- **Why Skills exist:** Claude Code doesn't retain contextual memory between sessions—skills provide that persistent memory for repeatable processes
- **The Matrix analogy:** Skills are like uploading kung fu to Neo—you're giving Claude the knowledge to do a specific repeatable task
- **Skill structure:** Markdown files with a description section (read every conversation to determine if skill should trigger) and detailed instructions section
- **Skill creation skill:** Claude has a built-in skill that helps you create new skills—just say "help me create a skill"
- **Triggering:** Claude scans skill descriptions at conversation start to identify relevant skills to activate

**Skill Creation Framework:**
```
1. Start a new chat in Claude Desktop (Chat or Cowork mode)
2. Describe what you want to automate:
   "I want to create a skill file that allows me to [TASK]
   every [FREQUENCY] and then surface [OUTPUTS]"
3. Claude reads the skill-creator guidelines automatically
4. Answer Claude's clarifying questions about:
   - Data sources and channel patterns
   - What counts as "important" (triggers/flags)
   - Output format preferences
   - Default time ranges
5. Review the generated skill.md file
6. Click "Copy to my skills" to activate
7. Test by mentioning trigger words in a new chat
```

**Example Skills to Build:**
- Weekly Slack channel pulse analysis across customer accounts
- Turn demo notes into structured follow-up emails
- Generate changelog summaries from commit history
- Create meeting prep briefs from calendar and Slack context

**Pro Tips from Austin (AI Office Hours 2/2/26):**
- Focus most attention on tuning the **description section**—this determines when your skill fires
- Start with Chat or Cowork before moving to Code for recurring automations
- **Phase 2/3:** Set up cron jobs via Claude Code + GitHub Actions for true automation
- Build the skill yourself from scratch to learn better (don't just copy someone else's)
- Add output actions to skills: "send a message to Slack channel" or "create a Google doc"

**Automation Progression:**
| Phase | Where to Run | Use Case |
|-------|--------------|----------|
| Phase 1 | Chat/Cowork | Manual trigger, learning the skill |
| Phase 2 | Claude Code | Scheduled via cron job |
| Phase 3 | GitHub Actions + Slackbot | Fully automated recurring runs |

**Knowledge Check:** Create and share one working Claude Skill that automates a task you do weekly

---

### Module 2.4: Claude Projects Setup (45 min)
**Learning Objective:** Create Claude Projects as structured knowledge bases

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Projects Overview | Claude Docs | 15 min | [docs.anthropic.com](https://docs.anthropic.com) |
| Create a Project | Hands-on | 30 min | — |

**Key Concepts:**
- Projects as persistent context containers
- Adding files, docs, and reference materials
- Custom instructions for project-specific behavior
- Sharing projects with teammates

**Recommendation from Sam:** Start with Projects before building skill-based agents—more flexible while learning.

**Knowledge Check:** Create a project with at least 3 reference documents

---

### Module 2.5: Simple Automations (90 min)
**Learning Objective:** Build your first working automation using Claude Code

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Playground Plugin | Plugin Guide | 30 min | See content doc |
| First Automation | Hands-on | 60 min | — |

**Playground Plugin Setup:**
```
/plugin marketplace update claude-plugins-official
/plugin install playground@claude-plugins-official
```

**Example Automations:**
- Design review and feedback collector
- Architecture diagram generator
- Writing critique tool

**Knowledge Check:** Build and demo one working automation

---

## Intermediate Path Completion Criteria

✅ Complete Claude Code in Action course (certificate)
✅ Complete a project using full planning workflow
✅ Create and share one Claude Skill
✅ Build one working Claude Project
✅ Demo one automation to the team

**Certification:** "Claude Builder" badge

---

# PATH 3: ADVANCED
## "Agent Development"

**Goal:** Build production-ready AI agents for Gladly's 9-agent initiative

**Who should take this:** Core AI Acceleration team and agent owners

**Prerequisites:** Completion of Intermediate Path

**Time commitment:** 15-20 hours over 4-6 weeks

### Module 3.1: Claude Code 101 Deep Dive (30 min)
**Learning Objective:** Advanced Claude Code features and patterns

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Claude Code 101 | CoE Portal Course | 30 min | [center-of-excellence.xyz/training](https://www.center-of-excellence.xyz/training) |

**Key Concepts:**
- Advanced context management
- Custom commands and hooks
- Memory patterns (CLAUDE.md files)
- Error handling and recovery

---

### Module 3.2: Claude Agent SDK (120 min)
**Learning Objective:** Build agents using Anthropic's official Agent SDK

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Agent SDK Full Workshop | YouTube | 60 min | [YouTube](https://www.youtube.com/watch?v=TqC1qOfiVcQ) |
| SDK Documentation | Reference | 30 min | [docs.anthropic.com](https://docs.anthropic.com) |
| Build SDK Agent | Hands-on | 30 min | — |

**Key Concepts:**
- Agent architecture patterns
- Tool definitions and schemas
- State management
- Testing agents locally

**Knowledge Check:** Build a functional agent using the SDK

---

### Module 3.3: MCP Server Integration (90 min)
**Learning Objective:** Extend Claude with external service connections

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| MCP Overview | Documentation | 30 min | Anthropic Docs |
| Agentation Features | Reference | 15 min | [agentation.dev/features](https://agentation.dev/features) |
| Integration Lab | Hands-on | 45 min | — |

**Key Concepts:**
- Model Context Protocol (MCP) architecture
- Pre-built vs. custom MCP servers
- Authentication and security
- Error handling for external services

**Relevant Integrations for 9 Agents:**
- Salesforce MCP (PMM Sidekick, Analytics, Presentations)
- Marketo MCP (Campaign Orchestration)
- Google Workspace (Presentations, Web)
- Figma (Design Automation)
- Slack (PMM Sidekick)

---

### Module 3.4: Multi-Agent Orchestration (90 min)
**Learning Objective:** Coordinate multiple agents working together

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Agent Swarms Overview | GitHub | 30 min | [Compound Engineering Plugin](https://github.com/EveryInc/compound-engineering-plugin) |
| Orchestration Patterns | Gist | 15 min | [Gist](https://gist.github.com/kieranklaassen/4f2aba89594a4aea4ad64d753984b2ea) |
| Multi-Agent Lab | Hands-on | 45 min | — |

**Key Concepts:**
- Agent swarm architecture
- Inter-agent communication
- Workflow orchestration
- Conflict resolution

**Agent Interconnections (from 9-Agent Spec):**
- Content Engine → Social Media (content repurposing)
- Competitive Intel → PMM Sidekick (real-time updates)
- Design Automation → Social Media (visual requests)
- Customer Content Hub → Multiple agents (central source)

---

### Module 3.5: Gladly Deep Dive (90 min)
**Learning Objective:** Understand Gladly's AI architecture for integration

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Gladly Deep Dive | CoE Portal Course | 90 min | [center-of-excellence.xyz/training](https://www.center-of-excellence.xyz/training) |

**Key Concepts:**
- Gladly AI capabilities
- Integration patterns
- Data flows and APIs
- Security and compliance requirements

---

### Module 3.6: Production Agent Development (180 min)
**Learning Objective:** Build, test, and deploy a production agent

| Resource | Type | Duration | Link |
|----------|------|----------|------|
| Agent Development Lab | Hands-on | 3 hours | — |

**Agent Development Checklist:**
1. ✅ Write SPEC.md using planning process
2. ✅ Define inputs, outputs, and integrations
3. ✅ Implement guardrails and approval workflows
4. ✅ Build in sagansystems GitHub org
5. ✅ Test locally with sample data
6. ✅ Document usage and limitations
7. ✅ Create user training materials
8. ✅ Deploy and monitor

---

## Advanced Path Completion Criteria

✅ Complete Gladly Deep Dive course
✅ Build functional agent using Agent SDK
✅ Integrate agent with at least one MCP server
✅ Demonstrate multi-agent coordination
✅ Deploy one production agent to sagansystems

**Certification:** "Agent Developer" badge

---

# AGENT SKILL MAPPING

## Which Path Enables Which Agent?

| Agent | Beginner | Intermediate | Advanced |
|-------|----------|--------------|----------|
| Content Engine | Prompting basics | Skills creation | Production deployment |
| Design Automation | — | Projects setup | Figma MCP integration |
| Campaign Orchestration | — | — | Marketo MCP, complex workflows |
| Analytics & Reporting | AI concepts | Skills, Projects | Multi-source data integration |
| PMM Sidekick | Prompting, Git | Skills, Projects | Slack MCP, Salesforce |
| Competitive Intel | — | Web automation | Monitoring systems |
| Web & Development | Git basics | Claude Code | CMS integration |
| Customer Presentations | — | Skills | Google Slides + Salesforce |
| Social Media | Prompting | Content Skills | Multi-agent orchestration |

---

## Recommended Path by Role

| Role | Recommended Path | Priority Agents |
|------|------------------|-----------------|
| All Employees | Beginner | Use PMM Sidekick |
| Marketing Managers | Intermediate | Content Engine, Social Media |
| Marketing Ops | Advanced | Campaign Orchestration, Analytics |
| PMMs | Intermediate → Advanced | PMM Sidekick, Competitive Intel |
| Designers | Intermediate | Design Automation |
| Web Team | Advanced | Web & Development |
| Sales/CS | Beginner + Intermediate | Customer Presentations |

---

# ASSESSMENT & MEASUREMENT

## Knowledge Checks by Path

| Path | Assessment Type | Pass Criteria |
|------|-----------------|---------------|
| Beginner | Quizzes + Tasks | 80% quiz, all tasks complete |
| Intermediate | Course cert + Demos | Certificate + 2 working demos |
| Advanced | Project-based | Deployed production agent |

## Post-Training Survey (Enablement Metric)

Conduct survey 3 weeks post-training:
1. How confident do you feel using Claude Code? (1-10)
2. How many hours per week does Claude save you?
3. What's still unclear or challenging?
4. What additional training would help?

---

# SUPPLEMENTARY RESOURCES

## Tools & Utilities
- **Prompt Optimizer:** [promptcowboy.ai](https://www.promptcowboy.ai/)
- **Skills Directory:** [skills.sh/trending](https://skills.sh/trending)
- **Agentation:** [agentation.dev/features](https://agentation.dev/features)

## Mobile Productivity
- **AI Voice Notes (iOS):** [iCloud Shortcut](https://www.icloud.com/shortcuts/27eabcc6d0974119a4c6a61b0571b50b)
- **SuperWhisper (Free):** [App Store](https://apps.apple.com/us/app/superwhisper/id6471464415)

## Articles & Deep Dives
- [What is Claude Code](https://www.producttalk.org/claude-code-what-it-is-and-how-its-different/)
- [Give Claude Code a Memory](https://www.producttalk.org/give-claude-code-a-memory/)

## Advanced Resources
- [Compound Engineering Plugin](https://github.com/EveryInc/compound-engineering-plugin)
- [Agent Swarm Orchestration](https://gist.github.com/kieranklaassen/4f2aba89594a4aea4ad64d753984b2ea)
- [Vercel GTM Workflows](https://vercel.com/go/shipping-gtm-workflows-using-v0-pipeline)

---

# NEXT STEPS

## Immediate Actions
1. **Review with Austin** to validate path structure and content gaps
2. **Identify content to create** (Planning Mode Deep Dive video, etc.)
3. **Add to CoE Portal** at center-of-excellence.xyz/training
4. **Announce at Marketing Kickoff** with training table

## Gaps to Address
- [ ] Create internal "Planning Mode Deep Dive" training
- [ ] Record Gladly-specific agent examples
- [ ] Build assessment quizzes for each module
- [ ] Create hands-on lab environments
- [ ] Develop post-training survey

---

*Document Version: 1.0*
*Created: February 2, 2026*
*Author: Steve West / AI-Assisted*
*For: Gladly AI Transformation Initiative*

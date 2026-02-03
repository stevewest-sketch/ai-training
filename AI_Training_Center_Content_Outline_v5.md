# Gladly AI Training Center - Content Outline v5

**URL:** https://ai-training-v2.vercel.app/  
**Last Updated:** February 3, 2026  
**Version:** 5.0 (Comprehensive merge of v3 detailed content + v4 enhancements)

---

## Overview: Structure by Claude Product

The training center follows a progressive learning path aligned with Claude's product tiers:

| Path | Claude Product | Focus | Duration |
|------|----------------|-------|----------|
| **Beginner** | Claude Chat | Foundational AI literacy + confident daily Claude Chat usage | 5-7 hours |
| **Intermediate** | Claude Cowork | Understanding Cowork, planning-as-a-motion, skills creation, basic agents | 8-12 hours |
| **Advanced** | Claude Code | Production development, Git workflows, agent building | 15-20 hours |

---

## Site Structure

```
/ (Homepage)
├── /beginner/                    (Claude Chat - Required for all)
│   ├── /ai-foundations           (Combined AI fundamentals)
│   ├── /claude-chat-overview     (Interface, Settings, Files, Memory, Extended Thinking) ← ENHANCED
│   ├── /connectors               (Connectors + Web Search deep dive) ← ENHANCED
│   ├── /artifacts                (Complete artifact coverage with execution) ← ENHANCED
│   ├── /sharing-and-projects     (Sharing chats + Projects intro)
│   ├── /effective-prompting      (Prompting + Styles feature) ← ENHANCED
│   ├── /skills-intro             (Skills as capabilities)
│   └── /assessment               (Enhanced practical assessment) ← ENHANCED
│
├── /intermediate/                (Claude Cowork)
│   ├── /intro-to-cowork          (What Cowork is + when to use it)
│   ├── /planning-mode            (Planning as a motion)
│   ├── /skills-deep-dive         (Skills explained + creation)
│   ├── /projects-as-agents       (Projects as basic AI agents)
│   ├── /git-concepts             (Conceptual Git from Git 101 doc)
│   └── /building-automations     (Comprehensive automation guide) ← ENHANCED
│
├── /advanced/                    (Claude Code)
│   ├── /claude-code-in-action    (Anthropic Skilljar course)
│   ├── /planning-mode-code       (Spec files + interview process)
│   ├── /git-technical            (Dev-heavy Git workflows)
│   ├── /mcp-integration          (🔒 Coming Soon)
│   ├── /agent-sdk                (🔒 Coming Soon)
│   ├── /multi-agent              (🔒 Coming Soon)
│   └── /production-agents        (🔒 Coming Soon)
│
└── /appendices/
    ├── /troubleshooting          (Comprehensive troubleshooting guide) ← NEW
    ├── /resources                (External resources)
    ├── /concepts                 (Skills vs Automations vs Projects)
    ├── /agents-reference         (Gladly's 9 Agents)
    └── /assessment-philosophy    (Why confidence-based assessment)
```

---

## Homepage (`/`)

### Hero Section

**Title:** Gladly AI Training Center  
**Subtitle:** Master Claude at your own pace—from daily productivity to building AI agents

### Choose Your Learning Path

| Path | Product Focus | Description | Who It's For |
|------|---------------|-------------|--------------|
| 🟢 **Beginner** | Claude Chat | Build foundational AI literacy and become a confident daily Claude Chat user. Learn prompting, artifacts, connectors, Styles, Memory, and how to leverage preloaded skills. | Everyone at Gladly (Required) |
| 🟡 **Intermediate** | Claude Cowork | Transform from task-giver to outcome-creator. Master file-based collaboration, planning-as-a-motion, create your own skills, and build automations with Projects. | Anyone wanting to automate workflows |
| 🔴 **Advanced** | Claude Code | Production-ready development. Master Git workflows, build agents with the SDK, and integrate with external services via MCP. | Core AI Acceleration team |

### Path Selection Guidance

> **Not sure which path to start with?**  
> If you're new to AI tools, start with Beginner. Most Gladly employees should complete Beginner before moving on. Your manager can recommend the right progression, or use common sense based on your current comfort level with AI tools.

---

## Beginner Path: Claude Chat Fundamentals

**URL:** `/beginner/`

### Path Overview

**Title:** Claude Chat Fundamentals  
**Subtitle:** Build foundational AI literacy and become a confident daily Claude Chat user

**Product Focus:** This path focuses exclusively on Claude Chat—the conversational AI interface for questions, brainstorming, content creation, and quick productivity wins.

**What You'll Learn:**
- Core AI concepts and how large language models work
- Navigate Claude Chat's full feature set: Settings, Memory, Styles, Extended Thinking
- Master file uploads and all 12 connectors including web search
- Create and iterate on all 7 artifact types including interactive and executable
- Write effective prompts using CTFC framework and Styles
- Use preloaded skills through natural language
- Export your work and share conversations

**Time Commitment:** 5-7 hours spread over 1-2 weeks

---

### Module 1.1: AI Foundations (`/beginner/ai-foundations`)

**Duration:** 60 minutes  
**Learning Objective:** Understand what Large Language Models are, how they process information, and the key concepts that determine their capabilities and limitations.

> **Note:** This module combines content from the previous "AI Fundamentals" and "Agentic AI Concepts" modules into a single, streamlined foundations course.

#### Why This Matters
Understanding how AI "thinks" helps you work with it more effectively. You'll know why certain prompts work better than others and what Claude can and can't do.

#### Course Resource
- **AI Foundations Course** — CoE Portal (60 min)
  - URL: https://www.center-of-excellence.xyz/training
  - Comprehensive introduction to AI concepts, LLMs, and responsible AI usage

#### Supplementary Resource (Optional)
- **AI Fluency: Framework & Foundations** — Anthropic Skilljar
  - URL: https://anthropic.skilljar.com/ai-fluency-framework-foundations
  - Learn to collaborate with AI systems effectively, efficiently, ethically, and safely

#### Key Concepts

| Concept | What It Means |
|---------|---------------|
| **LLMs** | AI trained on vast text that predicts likely next words based on patterns |
| **Tokens** | How AI breaks down text into pieces for processing |
| **Context Window** | The limit on how much Claude can "remember" in a conversation |
| **Temperature** | Setting controlling creative vs. predictable responses |
| **Hallucinations** | Confident-sounding but incorrect information |

#### Detailed Concept Explanations

**1. Large Language Models (LLMs)**
- AI systems trained on vast text data that understand and generate human-like language
- They predict likely next words based on patterns—they don't truly "understand" in the human sense

**2. Tokens & Context Windows**
- How AI breaks down text into pieces (tokens)
- The limit on how much Claude can "remember" in a conversation (context window)

**3. Temperature**
- The setting that controls how creative vs. predictable AI responses are

**4. AI Capabilities vs. Limitations**
- What AI does well: synthesizing information, drafting content, brainstorming, analysis
- Key limitation: Can produce confident-sounding but incorrect information (hallucinations)

#### Agents vs. Chatbots vs. Automation

| Type | What It Does | Example |
|------|--------------|---------|
| Chatbot | Answers questions based on training data | Customer support FAQ bot |
| Automation | Follows predefined rules without reasoning | Zapier workflow, email rules |
| AI Agent | Reasons, uses tools, and takes actions autonomously | PMM Sidekick analyzing Slack |

#### Connection to Gladly
Gladly's 9-agent initiative builds on these concepts—understanding the difference between chatbots and agents helps you see where AI is headed.

---

### Module 1.2: Claude Chat Overview (`/beginner/claude-chat-overview`) ← ENHANCED

**Duration:** 35-40 minutes  
**Learning Objective:** Navigate Claude Chat confidently, master Settings, understand file handling, and leverage Memory and Extended Thinking features.

#### Video Resource
- **Claude Desktop Overview** — Loom (10 min)
  - URL: https://www.loom.com/share/97cb836202304912a45df619caa22f08
  - Austin's walkthrough of the Claude Desktop application
  - Covers navigation, basic features, and getting started

#### The Claude Product Family

| Product | What It's For | Where You'll Learn It |
|---------|---------------|----------------------|
| **Claude Chat** | Conversational AI for questions, brainstorming, content creation | This path (Beginner) |
| **Claude Cowork** | File-based collaboration, planning, deeper automation | Intermediate path |
| **Claude Code** | Terminal-based development, building agents | Advanced path |

**This course focuses on Claude Chat.** The other modes are covered in later paths.

#### Claude Chat Interface Components

**Sidebar Navigation:**
- New Chat / History
- Projects
- Starred conversations
- Settings

**Main Chat Area:**
- Conversation thread
- Input field
- Attachment options

**Key Actions:**
- Starting a new conversation
- Attaching files/images
- Using keyboard shortcuts

#### Essential Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘ + N` | Start a new conversation |
| `⌘ + K` | Quick command palette |
| `⌘ + /` | Toggle sidebar |
| `⌘ + Shift + C` | Copy last response |
| `⌘ + Enter` | Submit message |

#### Settings Navigation (NEW)

| Settings Section | What's There | When You'll Use It |
|------------------|--------------|-------------------|
| **Profile** | Account info, display name, avatar | Rarely - initial setup |
| **Preferences** | Default model, response language, theme | Once - set and forget |
| **Connectors** | Google Drive, Gmail, Slack, Calendar + 8 more | Module 1.3 |
| **Skills** | Organization skills library | Module 1.7 |
| **Memory** | What Claude remembers about you | See below |
| **Styles** | Built-in and custom response styles | Module 1.6 |

#### File Uploads (NEW)

**Three Ways to Upload:** Click attachment icon, drag-and-drop, or paste (⌘ + V)

| Category | Formats | Max Size |
|----------|---------|----------|
| Documents | PDF, DOCX, TXT, MD, RTF | 30MB |
| Spreadsheets | XLSX, CSV | 30MB |
| Images | PNG, JPG, JPEG, GIF, WEBP | 30MB |
| Code | JS, PY, HTML, CSS, JSON, and 20+ more | 30MB |
| Presentations | PPTX (converted to images) | 30MB |

**Upload vs. Connectors:** Upload for local files; use Connectors when files live in Drive, email, etc.

#### Memory Feature (NEW)

Memory allows Claude to remember information about you across conversations.

| Feature | Memory | Projects |
|---------|--------|----------|
| Scope | Across all conversations | Within the project only |
| Content | Personal facts, preferences | Documents, instructions |
| Persistence | Long-term | As long as project exists |

**Example Commands:**
- "Remember that I prefer bullet points for summaries"
- "What do you remember about my preferences?"
- "Forget what you remember about [topic]"

#### Extended Thinking (Preview)

Extended Thinking allows Claude to "think out loud" before responding for complex problems.

**When to Use:** Complex multi-step problems, strategic analysis, code debugging

**How to Request:** "Think through this step by step before answering"

---

### Module 1.3: Working with Connectors (`/beginner/connectors`) ← ENHANCED

**Duration:** 25 minutes  
**Learning Objective:** Understand all 12 connectors, master web search, and know when to use each.

#### What Are Connectors?

Connectors allow Claude Chat to access external data sources and services during your conversation. Instead of copying and pasting information, Claude can pull it directly.

#### All 12 Available Connectors

| Connector | What Claude Can Access | Example Use |
|-----------|------------------------|-------------|
| **Google Drive** | Documents, spreadsheets, slides, files | "Summarize my Q4 planning doc" |
| **Gmail** | Read emails, search inbox, find attachments | "Find the last email from [client]" |
| **Google Calendar** | View events, check availability, meeting details | "What meetings do I have tomorrow?" |
| **Slack** | Search messages, channels, read conversations | "Find recent discussions about Sidekick" |
| **Notion** | Pages, databases, workspace content | "Search my Notion for project specs" |
| **Gong** | Call recordings, transcripts, deal info | "Summarize last week's calls" |
| **GitHub** | Repositories, code, issues, PRs | "Check the status of open issues" |
| **Figma** | Design files, components, comments | "Review the latest mockups" |
| **Asana** | Tasks, projects, workspaces | "What tasks are due this week?" |
| **Jira** | Issues, projects, sprint info | "Show me open bugs in current sprint" |
| **Sanity** | CMS content, documents, assets | "Find recent blog drafts" |
| **Web Search** | Real-time internet search results | "What's Sierra AI announcing this week?" |

#### How to Enable Connectors

1. Open Claude Settings (gear icon)
2. Navigate to "Connectors" section
3. Toggle on desired connectors
4. Authorize access when prompted

#### Using Connectors in Conversation

Once enabled, you simply mention the data you need:

**Google Drive:**
```
"Look at my doc called 'Q4 OKRs' and summarize the key objectives"
```

**Calendar:**
```
"What does my week look like? Any conflicts I should know about?"
```

**Slack:**
```
"Search our Slack for recent conversations about the pricing page redesign"
```

**Web Search:**
```
"What's Sierra AI announcing this week?"
```

#### Best Practices

- Be specific about which document or channel you're referencing
- Claude will ask for clarification if multiple matches exist
- Connectors work in Chat mode only (Cowork has direct file access instead)

#### Web Search Deep Dive (NEW)

**When Claude Searches Automatically:** Questions about recent events, current data, topics requiring up-to-date information

**Explicit Request:** "Search the web for recent reviews of [product]"

**Understanding Citations:** Numbered references [1], [2] link to sources

**Web Search vs. Connectors:**

| Use Web Search When... | Use Connectors When... |
|------------------------|------------------------|
| Information is publicly available | Information is in your workspace |
| You need current/recent data | You need historical company data |
| Researching external topics | Accessing emails, files, messages |

**Limitations:** Cannot access paywalled content, login-required pages, real-time dynamic data

---

### Module 1.4: Understanding Artifacts (`/beginner/artifacts`) ← ENHANCED

**Duration:** 30-35 minutes  
**Learning Objective:** Master all 7 artifact types, understand versioning, work with interactive and executable artifacts.

#### What Are Artifacts?

Artifacts are the tangible outputs Claude creates during your conversation—documents, code, spreadsheets, diagrams, and more. They appear in a separate panel for easy viewing and export.

#### All 7 Artifact Types

| Type | What It Does | Example Prompt |
|------|--------------|----------------|
| **Documents** | Rich text with formatting | "Create a project brief for our Q2 launch" |
| **Code** | Syntax-highlighted code | "Write a Python script to analyze this CSV" |
| **Data/Tables** | Structured data, spreadsheets | "Create a comparison table of these vendors" |
| **Diagrams** | Flowcharts, org charts (Mermaid) | "Create a flowchart of our approval process" |
| **Interactive** | Functional React components | "Build a ROI calculator" |
| **HTML/Web** | Complete webpage previews | "Create a landing page mockup" |
| **SVG/Image** | Vector graphics | "Create an icon for our new feature" |

#### Working with Artifacts

**Viewing:** Click any artifact to open it in the preview panel

**Editing:** Ask Claude to modify the artifact:
```
"Make the introduction shorter"
"Add a section on implementation timeline"
"Change the chart to show percentages instead of raw numbers"
```

**Versioning:** Claude keeps track of iterations—you can ask to revert:
```
"Go back to the previous version of this doc"
```

#### Interactive Artifacts (NEW)

Functional web components that actually work—calculators, quizzes, data visualizations, forms.

**Example:** "Build a tip calculator with split options" → Creates working calculator you can use

**Limitations:** Cannot connect to databases, make network requests, or persist data

#### Code Execution (NEW)

Claude can run Python and JavaScript code, not just display it.

**When to Use:** Data analysis, calculations, data transformation, quick scripts

**Example:** "Analyze this CSV and show me trends" → Claude runs code, displays results

#### Artifact Versioning (NEW)

When you iterate, Claude creates versions (v1, v2, v3) you can navigate.

**Navigation:** Arrow buttons to move between versions; click version indicator for history

**Iteration Prompts:** "Make it more concise" → Creates v2

#### Exporting to Google Drive (Step-by-Step)

1. Click the artifact to select it
2. Click the **Export** button (arrow icon)
3. Select **Google Drive** as destination
4. Choose folder location
5. Confirm export

The file will be created as a native Google Doc, Sheet, or Slide—fully editable in Google Workspace.

#### Other Export Options

- **Copy to clipboard:** For pasting elsewhere
- **Download:** Save as local file
- **Share link:** Generate shareable artifact URL

---

### Module 1.5: Sharing Chats & Introduction to Projects (`/beginner/sharing-and-projects`)

**Duration:** 25 minutes  
**Learning Objective:** Share conversations effectively and understand how Projects create persistent context.

#### Part 1: Sharing Conversations

##### Why Share?
- Collaborate with teammates on AI-assisted work
- Hand off context when you're OOO
- Save valuable exchanges for future reference

##### How to Share

1. Open the conversation you want to share
2. Click the **Share** button (top right)
3. Choose sharing option:
   - **Link sharing:** Anyone with link can view
   - **Team sharing:** Specific Gladly users

##### What Gets Shared?
- Full conversation history
- All artifacts created
- Any attached files

##### What Doesn't Get Shared?
- Your connected services (Drive, Slack access)
- Personal settings or preferences

---

#### Part 2: Introduction to Projects

##### What Are Projects?

> "Projects are just like a little agent. This is the most basic form of an AI agent—a space that has context that permeates across conversations."  
> — Austin, AI Lab Session

Think of Projects as persistent workspaces where Claude maintains memory and context across multiple conversations.

##### Projects vs. Regular Chats

| Aspect | Regular Chat | Project |
|--------|--------------|---------|
| Context | Resets each conversation | Persists across conversations |
| Focus | General-purpose | Topic or task-focused |
| Files | Upload per conversation | Always available |
| Knowledge | None shared | Can include reference documents |
| Instructions | Prompt each time | Set once, always applied |

##### When to Use a Project

- **Ongoing initiatives:** Quarter-long projects, recurring work
- **Reference-heavy work:** Work that needs consistent access to key documents
- **Team collaboration:** Multiple people working on the same context

##### Creating Your First Project

1. Click **New Project** in the sidebar
2. Name it descriptively (e.g., "Q1 SKO Planning")
3. Add project instructions (optional)
4. Upload reference documents (optional)
5. Start your first conversation

##### Preview: Projects as Basic Agents

We'll go much deeper on Projects in the Intermediate path. For now, understand that Projects are your gateway to more sophisticated AI collaboration—the bridge between simple chats and full AI agents.

---

### Module 1.6: Effective Prompting (`/beginner/effective-prompting`) ← ENHANCED

**Duration:** 35-40 minutes  
**Learning Objective:** Master the CTFC framework, understand Styles, create custom styles.

#### The CTFC Framework

A simple approach to structuring prompts:

| Component | What It Does | Example |
|-----------|--------------|---------|
| **C**ontext | Background Claude needs | "I'm preparing for a call with Spotify's CX team..." |
| **T**ask | What you want done | "Create a one-page brief covering..." |
| **F**ormat | How you want the output | "Use bullet points, keep it under 300 words" |
| **C**onstraints | Boundaries or requirements | "Don't mention pricing, focus on technical capabilities" |

#### Example: Basic vs. CTFC Prompt

**Basic Prompt:**
```
Write about Gladly for Spotify.
```

**CTFC Prompt:**
```
Context: I'm preparing for a discovery call with Spotify's CX leadership team tomorrow. They're evaluating customer service platforms and have expressed interest in AI capabilities.

Task: Create a one-page brief that positions Gladly as the ideal solution for a music streaming company.

Format: Use these sections: Company Overview, Relevant Capabilities, Key Differentiators, Discussion Questions

Constraints: Focus on AI and agent-assist features. Don't include pricing. Keep technical depth appropriate for executive audience.
```

#### Common Prompting Patterns

**For Analysis:**
```
"Review [this document] and identify:
1. Key themes
2. Potential concerns
3. Recommendations for improvement"
```

**For Content Creation:**
```
"Write a [type of content] for [audience] that:
- [requirement 1]
- [requirement 2]
- [requirement 3]"
```

**For Feedback:**
```
"Act as a [role] and give me feedback on [this work]. Be specific about what works and what could improve."
```

#### Practice Resource

- **Prompt Cowboy** — Interactive prompting practice
  - URL: https://promptcowboy.ai
  - Gamified exercises to improve your prompting skills

#### The Styles Feature (NEW)

| Style | What It Does | Best For |
|-------|--------------|----------|
| **Normal** | Balanced, conversational | General use |
| **Concise** | Brief, direct | Quick answers |
| **Explanatory** | Detailed with context | Learning, complex topics |
| **Formal** | Professional tone | External communications |

#### Creating Custom Styles (NEW)

1. Go to **Settings → Styles**
2. Click **Create New Style**
3. Write instructions for tone, format, approach

**Example: "Executive Brief"**
```
Write for executive audiences:
- Lead with the insight or recommendation
- Max 3 paragraphs
- Use numbers and metrics when available
- End with clear next steps
```

---

### Module 1.7: Introduction to Skills (`/beginner/skills-intro`)

**Duration:** 20 minutes  
**Learning Objective:** Understand what skills are and how to leverage preloaded capabilities through natural language.

#### What Are Skills?

> "Skills are capabilities you can call upon that are preloaded into Claude... To call on those skills, you just do it in natural language."

Think of skills as specialized abilities Claude has been trained to perform well. Some come from Anthropic, some are Gladly-specific.

#### Skills vs. Connectors

| Feature | Connectors | Skills |
|---------|------------|--------|
| What they do | Access external data | Perform specific workflows |
| Who creates them | Built into Claude | Your organization |
| How activated | Always available | Triggered by context |

#### How Skills Work

You don't need to know how skills are built—just how to use them. Simply describe what you need:

```
"Create a PowerPoint presentation about..."
"Analyze this data and show me a chart..."
"Help me structure this document using our standard template..."
```

Claude recognizes when a skill applies and uses it automatically.

#### Types of Skills Available

**From Anthropic (Built-in):**
- Document creation (Word, PowerPoint, etc.)
- Data analysis and visualization
- Code generation and explanation
- Image understanding

**From Gladly (Custom):**
- Competitive positioning frameworks
- Strategic messaging alignment
- Presentation templates
- Content formatting standards

#### Using Skills Naturally

You don't need special commands:
- ❌ "Activate competitive analysis skill"
- ✅ "Analyze Sierra AI's recent product announcements"

#### Example: Using a Skill

**You say:**
```
"Create a competitive comparison slide for Sierra AI vs Gladly"
```

**What happens:**
1. Claude recognizes this needs the competitive positioning skill
2. Applies Gladly's framework and messaging
3. Creates properly formatted output

You didn't have to specify "use the competitive skill"—Claude figured it out from context.

#### Looking Ahead

In the Intermediate path, you'll learn what skills actually are (they're markdown files!) and how to create your own. For now, just focus on calling them naturally.

---

### Beginner Path Assessment (`/beginner/assessment`) ← ENHANCED

**Type:** Knowledge Self-Assessment + Practical Demonstration  
**When:** After completing all modules

#### Part 1: Knowledge Self-Assessment

Rate your confidence (1-5) on each statement:

1. **AI Foundations:** I can explain what LLMs are and their key limitations to a colleague
2. **Interface & Settings:** I can confidently navigate Claude Chat's interface, settings, and features
3. **Files & Memory:** I understand file uploads, Memory, and Extended Thinking
4. **Connectors:** I know when and how to use all 12 connectors including web search
5. **Artifacts:** I can create, edit, iterate, and export all 7 artifact types
6. **Prompting & Styles:** I can write CTFC-structured prompts and use/create Styles
7. **Skills:** I understand what skills are and can call them through natural language

**Passing Criteria:** No ratings below 3; average 4.0+

#### Part 2: Practical Demonstrations

Complete **ANY 3** of 6 tasks:

**Task A: Document Analysis**
- Upload a document
- Ask Claude to summarize key points
- Export the summary to Google Drive

**Task B: Content Creation with Artifact**
- Create a document or presentation artifact
- Iterate on it (at least 2 versions)
- Export to your preferred format

**Task C: Connector Usage**
- Use at least one connector to find information
- Could be Drive file, email, calendar event, or Slack search
- Demonstrate Claude pulling external data

**Task D: Using Skills**
- Find an organization skill in Settings
- Trigger it through natural language
- Show the skill-enhanced output

**Task E: Prompting with CTFC**
- Write a prompt using all four CTFC components
- Show the improved result vs. a basic prompt

**Task F: Interactive Exploration**
- Request an interactive artifact (calculator, quiz, etc.)
- Test that it actually functions
- Explain what it does

#### Next Steps

- **Average 4+:** You're ready for the Intermediate path!
- **Any 3 or below:** Review the specific module and try the exercises again
- **Want more practice?** Use Prompt Cowboy or start a Project to apply your learning

---

## Intermediate Path: Claude Cowork & Planning

**URL:** `/intermediate/`

### Path Overview

**Title:** Mastering Claude Cowork  
**Subtitle:** Transform from task-giver to outcome-creator with AI-powered collaboration

**Product Focus:** This path focuses on Claude Cowork—the file-based collaboration mode where Claude moves from conversation partner to active collaborator.

**What You'll Learn:**
- What Cowork is and when to use it vs. Chat
- The planning-as-a-motion mindset for outcome-focused collaboration
- Create your own skills (yes, they're just markdown files)
- Use Projects as basic AI agents
- Git concepts for working with developers (no coding required)
- Build automations that run without you

**Prerequisites:** Completed Beginner Path

**Time Commitment:** 8-12 hours spread over 2-4 weeks

---

### Module 2.1: Introduction to Claude Cowork (`/intermediate/intro-to-cowork`)

**Duration:** 20–25 minutes  
**Learning Objective:** Understand what Claude Cowork is, how it differs from Claude Chat, and when to use each mode.

#### Overview

In the Beginner path, you mastered Claude Chat — the conversational interface for thinking through problems, drafting content, and getting answers. Now it's time to level up.

**Claude Cowork** is where Claude stops just talking and starts *doing*. It's the bridge between conversation and action — an AI collaborator that can work with your actual files, folders, and data on your computer.

> **The Key Difference:**  
> Claude Chat is for *thinking together*.  
> Claude Cowork is for *working together*.

---

#### What Makes Cowork Different?

| Capability | Claude Chat | Claude Cowork |
|------------|-------------|---------------|
| Answer questions | ✅ | ✅ |
| Draft content | ✅ | ✅ |
| Access your files | ❌ | ✅ |
| Move/organize files | ❌ | ✅ |
| Read spreadsheets & data | Limited (upload only) | ✅ Full access |
| Create files on your computer | ❌ | ✅ |
| Execute multi-step workflows | ❌ | ✅ |
| Work while you describe the outcome | ❌ | ✅ |

##### The Mental Model

Think of it this way:

- **Claude Chat** = A brilliant colleague you can call anytime to talk through ideas
- **Claude Cowork** = That same colleague sitting at your desk, able to actually do the work with you

---

#### When to Use Cowork vs. Chat

##### Use Claude Chat when you want to:
- Brainstorm or think through a problem
- Draft an email, document, or message
- Get explanations or learn something new
- Have a back-and-forth conversation to refine ideas
- Quick questions and answers

##### Use Claude Cowork when you want to:
- Work with files already on your computer
- Organize, rename, or move folders
- Analyze data in spreadsheets or CSVs
- Create multiple files as part of a project
- Execute a multi-step workflow
- Have Claude *do* something rather than just *describe* it

> **Rule of Thumb:** If you find yourself saying "now take that and..." or "can you actually do this?" — you probably want Cowork.

---

#### Cowork in Action: Real Examples

Let's look at the types of tasks where Cowork shines. These aren't hypotheticals — they're the everyday workflows that make Cowork invaluable.

##### Example 1: Organizing Files

**The Situation:**  
You have a Downloads folder that's become a graveyard of random files. You need to organize it but keep putting it off.

**What You'd Say:**
```
I need help organizing my Downloads folder. Can you:
1. Look at what's in there
2. Suggest a folder structure based on file types
3. Show me the plan before moving anything
4. Then organize the files once I approve
```

**What Cowork Does:**
1. Scans your Downloads folder
2. Identifies file types (PDFs, images, spreadsheets, documents, etc.)
3. Proposes a structure like:
   - `/Documents`
   - `/Images`
   - `/Spreadsheets`
   - `/Installers`
   - `/Archive`
4. Waits for your approval
5. Moves files into the new structure
6. Reports what was moved where

**Key Point:** Notice the approval step. Cowork plans before acting — you stay in control.

---

##### Example 2: Analyzing Data

**The Situation:**  
You have a CSV export from Salesforce with 6 months of opportunity data. You need to understand win rates by segment.

**What You'd Say:**
```
I have a Salesforce export at /Users/me/Documents/Q3-Q4-opps.csv

Can you analyze this and tell me:
- Win rate by customer segment
- Average deal size by segment
- How win rates have trended month over month
- Any segments where we're losing more than winning

Show me the analysis and create a summary I could share with leadership.
```

**What Cowork Does:**
1. Reads the CSV file directly
2. Processes the data (no upload needed — it accesses your file system)
3. Calculates the metrics you requested
4. Creates visualizations if helpful
5. Generates a shareable summary document
6. Saves the summary to your specified location

**Key Point:** Cowork works with files *in place*. No uploading, no copy-pasting, no "here's the data" back and forth.

---

##### Example 3: Multi-File Project Setup

**The Situation:**  
You're starting a new enablement project and need to set up the folder structure with template files.

**What You'd Say:**
```
I'm starting a new project called "Q1 SKO Prep"

Can you create a project folder structure at /Users/me/Projects/Q1-SKO-Prep with:
- A planning folder with a blank project brief template
- A content folder with subfolders for presentations, handouts, and videos
- A logistics folder for venue, catering, and travel
- A README file explaining the folder structure

Use our standard project brief template if you know it, otherwise create a basic one.
```

**What Cowork Does:**
1. Creates the folder structure
2. Generates template files
3. Writes the README
4. Reports back what was created

**Key Point:** Cowork can create entire project scaffolds in seconds — work that would take you 15+ minutes of clicking and typing.

---

##### Example 4: Batch File Operations

**The Situation:**  
You have 47 screenshots from a product demo that need to be renamed from `Screenshot 2024-01-15 at 3.42.17 PM.png` to something useful.

**What You'd Say:**
```
I have a folder of demo screenshots at /Users/me/Desktop/Demo-Screenshots

Can you:
1. Look at each image
2. Rename them based on what's shown in the screenshot
3. Add a sequence number prefix so they stay in order
4. Show me the proposed renames before executing
```

**What Cowork Does:**
1. Opens each image
2. Analyzes the content (sees "login screen", "dashboard", "settings page", etc.)
3. Proposes renames like:
   - `01-login-screen.png`
   - `02-dashboard-overview.png`
   - `03-customer-profile.png`
4. Shows you the plan
5. Executes after approval

**Key Point:** Cowork can *see* images and make intelligent decisions based on content — not just metadata.

---

#### The Cowork Interface

When you open Claude Cowork, you'll notice it looks similar to Chat but with key differences:

##### What's the Same:
- Conversation interface
- Your message input at the bottom
- Claude's responses in the main area

##### What's Different:
- **File Access Indicator:** Shows Cowork can access your file system
- **Planning Mode Trigger:** Complex requests trigger a planning phase (more on this in the next module)
- **Action Confirmations:** Cowork asks before making changes to your files
- **Execution Logs:** You can see what actions Cowork is taking

---

#### Working with Cowork: Best Practices

##### 1. Be Specific About Locations

**Less Effective:**
```
Can you organize my files?
```

**More Effective:**
```
Can you organize the files in /Users/me/Downloads into folders by file type?
```

##### 2. Ask for a Plan First

For any operation that modifies files, ask Cowork to show you the plan before executing:

```
Before making any changes, show me what you plan to do.
```

This triggers the planning behavior we'll cover in depth in the next module.

##### 3. Start with Read-Only Tasks

When you're new to Cowork, start with tasks that don't modify anything:
- "What's in this folder?"
- "Analyze this spreadsheet and summarize the findings"
- "Read these files and identify any inconsistencies"

Once you're comfortable with how Cowork works, move to modification tasks.

##### 4. Use Natural Descriptions of Outcomes

Don't give step-by-step instructions. Describe what you want to end up with:

**Instead of:**
```
1. Create a folder called Reports
2. Move all PDFs to that folder
3. Create a subfolder called 2024
4. Move PDFs with 2024 in the name there
```

**Try:**
```
I want all my PDFs organized into a Reports folder, with subfolders by year based on the filename.
```

Cowork figures out the steps. You describe the destination.

---

#### Common Cowork Use Cases at Gladly

Here's how your colleagues are using Cowork today:

| Use Case | What They're Doing |
|----------|-------------------|
| **Meeting Prep** | "Read my last 5 emails from [client] and the attached documents, then create a prep brief for tomorrow's call" |
| **Content Audits** | "Go through /Content/Battlecards and identify any that reference [old competitor] or haven't been updated in 6 months" |
| **Data Cleanup** | "This CSV has duplicate rows and inconsistent formatting in the company name column. Clean it up and save a new version" |
| **Project Setup** | "Create a new project folder structure for [initiative] using our standard template" |
| **File Consolidation** | "Find all files related to [customer] across my Documents folder and copy them to a single folder" |

---

#### What Cowork Can't Do (Yet)

To set proper expectations:

- **Can't access cloud storage directly** — Files need to be on your local machine or synced locally
- **Can't interact with web applications** — That's Claude Code territory
- **Can't run indefinitely** — Very long operations may need to be broken into chunks
- **Can't access files you don't have permissions for** — System files, other user folders, etc.

---

#### Try It Yourself: Starter Exercises

Before moving to the next module, try these low-risk exercises to get comfortable with Cowork:

##### Exercise 1: Folder Inventory
```
Look at my Desktop folder and tell me:
- How many files are there?
- What types of files are most common?
- Are there any files older than 6 months?
- What would you recommend for better organization?
```

##### Exercise 2: Document Analysis
```
Read [path to a document you have] and give me:
- A 3-sentence summary
- The key points or decisions
- Any action items mentioned
```

##### Exercise 3: Simple Rename (with approval)
```
I have some files in [folder path]. Can you:
1. Look at what's there
2. Suggest better, more descriptive names
3. Show me the plan WITHOUT executing yet

I'll tell you if I want to proceed.
```

---

#### Key Takeaways

1. **Cowork = Claude that can act**, not just talk
2. **Use it for file operations**, data analysis, and multi-step workflows
3. **Describe outcomes**, not step-by-step instructions
4. **Always ask for a plan** before file modifications
5. **Start with read-only tasks** to build confidence

---

### Module 2.2: Planning Mode — The Motion (`/intermediate/planning-mode`)

**Duration:** 20–25 minutes  
**Learning Objective:** Adopt the outcome-creator mindset and learn how to collaborate with Claude through planning rather than task-by-task instruction.

#### The Mental Reframe

> "There's a mental reframe when we're working with more powerful AI agents. They turn from task-doers to outcome creators."  
> — Austin, AI Lab Session

This is the single most important shift in how you work with AI. Stop thinking of Claude as something you give instructions to. Start thinking of it as a collaborator you share context with.

| Old Mindset (Task-Doer) | New Mindset (Outcome-Creator) |
|-------------------------|-------------------------------|
| "Do step 1, then step 2, then step 3" | "Here's what I'm trying to achieve" |
| You plan, Claude executes | You share context, Claude plans with you |
| One task at a time | Holistic outcome |
| You manage the process | Claude manages the process |

#### What Is Planning Mode?

When you give Claude Cowork a complex request, it doesn't just start executing. It:

1. **Analyzes** your request and context
2. **Creates a plan** for how to achieve your outcome
3. **Shows you the plan** before taking action
4. **Waits for approval** before executing
5. **Reports progress** as it works

This is Planning Mode — and it's what makes Cowork feel like a real collaborator rather than a tool.

#### How to Trigger Planning Mode

Planning mode activates naturally when your request is complex. But you can also explicitly trigger it:

**The Planning Prompt Pattern:**
```
Let's talk through a plan for [outcome].

Here's the context:
- [relevant background]
- [constraints or requirements]
- [what success looks like]

Ask me questions until you have everything you need to create a solid plan.
```

**Example:**
```
Let's talk through a plan for organizing our Q1 content calendar.

Here's the context:
- I have a folder of draft content briefs at /Content/Q1-Drafts
- Each brief includes topic, target persona, and estimated publish date
- We need to identify gaps in our coverage and prioritize what to complete first

Ask me questions until you have everything you need to create a plan.
```

Claude will then ask clarifying questions, propose a plan, and wait for your approval before executing.

---

#### Cowork in Planning Mode: A Walkthrough

Let's see how Planning Mode works in practice with Cowork:

**Step 1: You Share Context and Outcome**
```
I need to prepare for our QBR next week. Can you help me:
1. Find all Salesforce reports I've downloaded this quarter
2. Identify the key metrics across them
3. Create a summary document with trends and insights

The reports are somewhere in my Documents folder.
```

**Step 2: Claude Creates a Plan**
```
I'll help you prepare for your QBR. Here's my plan:

1. SEARCH: Scan /Documents for files matching Salesforce report patterns
2. ANALYZE: Review each file to understand metrics covered
3. EXTRACT: Pull key numbers from each report
4. SYNTHESIZE: Identify trends and insights across the data
5. CREATE: Generate a summary document with findings

Before I start, a few questions:
- Should I include any specific time period comparison?
- Are there particular metrics you care most about?
- What format do you want for the summary?
```

**Step 3: You Approve (or Adjust)**
```
Focus on win rate and average deal size. 
Compare Q3 to Q4.
Keep the summary to one page.
```

**Step 4: Claude Executes and Reports**
Claude works through each step, showing progress and the final output.

---

#### The Outcome-Focused Prompt

Instead of breaking your request into steps, describe the destination:

| Instead of... | Try... |
|---------------|--------|
| "Open file X, find section Y, extract Z, save to new file" | "I need the key decisions from this document in a format I can share with my manager" |
| "Search folder A for files with B, rename them to C" | "Help me clean up my project folder so it's organized by client" |
| "Read document 1, compare to document 2, list differences" | "I have two versions of this proposal—help me understand what changed" |

Claude figures out the steps. You describe where you want to end up.

---

#### The 6-Step Planning Process (Preview)

For complex projects, Claude uses this process:

```
Request → Research → Plan → Interview → Execute → Review
```

1. **Problem Definition** - What are we solving?
2. **Scope Boundaries** - What's in/out?
3. **Requirements** - What must be true?
4. **Dependencies** - What do we need?
5. **Milestones** - How do we chunk this?
6. **Success Criteria** - How do we know we're done?

---

#### Looking Ahead: Advanced Planning in Claude Code

What we've covered here works in Claude Cowork for file-based work. In the Advanced path, you'll learn:
- The 6-step planning process with SPEC.md files
- The interview prompt technique for complex development projects
- How to save and reference plans across sessions

For now, practice the outcome-creator mindset in your Cowork sessions.

---

#### Key Takeaways

1. **Shift from task-giver to outcome-sharer**
2. **Trigger planning mode** with complex requests or explicit "let's plan" prompts
3. **Answer Claude's questions** to refine the plan
4. **Approve before execution** — you stay in control
5. **Describe destinations**, not directions

---

### Module 2.3: Skills Deep Dive (`/intermediate/skills-deep-dive`)

**Duration:** 25–30 minutes  
**Learning Objective:** Understand what skills actually are, how they're structured, and how to create your own.

> Remember from the Beginner path, skills are "capabilities you can call upon in natural language." Now let's look under the hood.

#### What Skills Actually Are

Skills are just **markdown files**. That's it.

Each skill file contains:
- A **description** that tells Claude when to use it
- **Instructions** that tell Claude how to execute it
- Optional **examples** showing expected behavior

#### Skill Structure

```markdown
# Skill Name
## Description - What this skill does
## Trigger - When to activate
## Instructions - Step-by-step process
## Output Format - How to structure results
## Examples - Sample inputs and outputs
```

#### Anatomy of a Skill File

```markdown
---
name: Competitive Positioning
description: >
  Use this skill when the user asks about competitive 
  differentiation, comparison to competitors, or needs 
  help positioning Gladly against alternatives.
---

# Instructions

When helping with competitive positioning:

1. Always lead with Gladly's unique value proposition
2. Focus on customer outcomes, not feature comparisons
3. Use the "AND, not OR" framework when relevant
4. Reference specific customer success stories when available

## Key Differentiators

- Radically personal service at scale
- Single lifelong conversation
- AI-native from the ground up
- Built for customer loyalty, not ticket deflection

## Competitors to Address

### Sierra AI
- Their pitch: AI-first customer service
- Our counter: AI without CX expertise is just automation
- Key proof point: [customer story]

### Zendesk
- Their pitch: Established platform, broad capabilities
- Our counter: Legacy architecture can't deliver truly personal service
- Key proof point: [customer story]
```

#### The Two Key Sections

**Description (Triggers)**
- This tells Claude WHEN to apply the skill
- Think of it as the "if user asks about X" rule
- Be specific about trigger conditions

**Instructions**
- This tells Claude HOW to execute the skill
- Include frameworks, rules, examples
- The more detailed, the more consistent the output

#### Creating Your First Skill

##### Step 1: Identify the Pattern
What do you repeatedly ask Claude to do? That's a skill candidate.

Examples:
- "Every time I write a customer email, I want it to follow our tone guidelines"
- "When I analyze win/loss data, I always want the same metrics"
- "When I summarize meetings, I need a specific format"

##### Step 2: Write the Skill File
Use this template:

```markdown
---
name: [Skill Name]
description: >
  Use this skill when [trigger conditions].
---

# Instructions

[What Claude should do when this skill activates]

## [Section 1]
[Details]

## [Section 2]
[Details]
```

##### Step 3: Save to Skills Folder
Save your `.md` file to Claude's skills directory.

##### Step 4: Test It
Ask Claude something that should trigger your skill. Refine the description if it doesn't activate, or the instructions if the output isn't right.

---

#### Video Resources

- **Skills Creation Walkthrough** — Internal Recording (11 min)
  - Austin demonstrates creating a skill from scratch
  - Shows the admin interface and testing process

- **Claude Skills Explained** — YouTube (25 min, start at 23:41)
  - Deeper dive into skill architecture
  - Advanced patterns for complex skills

#### Skills Directory Reference

Browse community-created skills for inspiration:
- **Skills Directory:** https://skills.sh/trending

---

#### Where Your Skills Work

Skills you create are available in **both Claude Chat AND Claude Cowork**:
- In **Chat**, you call them conversationally
- In **Cowork**, they can be part of larger file-based workflows

This means a skill you create for email tone guidelines works whether you're drafting in Chat or processing a folder of draft emails in Cowork.

---

#### Key Takeaways

1. **Skills are markdown files** — not magic, just structured instructions
2. **Description = when**, Instructions = how
3. **Start with patterns** — what do you ask Claude repeatedly?
4. **Test and refine** — skills improve with iteration
5. **Skills work across modes** — Chat and Cowork both benefit

---

### Module 2.4: Projects as Basic AI Agents (`/intermediate/projects-as-agents`)

**Duration:** 15–20 minutes  
**Learning Objective:** See Projects not just as folders, but as the foundation for building AI agents.

> "Projects are just a little agent. This is the most basic form of an AI agent—a space that has context that permeates across conversations."  
> — Austin, AI Lab Session

#### From Folder to Agent

In the Beginner path, you learned Projects as persistent workspaces. Now let's reframe them through an agent lens.

#### What Makes Something an "Agent"?

| Agent Component | How Projects Deliver It |
|-----------------|------------------------|
| **Persistent Memory** | Context carries across conversations |
| **Specialized Knowledge** | Custom instructions + reference docs |
| **Consistent Behavior** | Instructions shape every response |
| **Tool Access** | Connectors + skills available in Project |

A Project is essentially an agent with a conversation interface.

#### The Agent Mindset for Projects

When creating a Project, think:

1. **What does this agent know?** → Reference documents
2. **How does this agent behave?** → Custom instructions
3. **What can this agent do?** → Enabled skills and connectors
4. **Who does this agent serve?** → The problem space it addresses

#### Agent Project Components

1. **Project Instructions** - Behavior rules
2. **Knowledge Files** - Reference documents
3. **Associated Skills** - Capabilities
4. **Connector Context** - External data access

#### Example: Competitive Intel Agent

**Project Name:** Competitive Intel Hub

**Reference Documents:**
- Latest battlecards for each competitor
- Win/loss analysis from last quarter
- Product comparison matrices
- Analyst reports

**Custom Instructions:**
```
You are a competitive intelligence analyst for Gladly. When I ask about competitors:

1. Always reference the uploaded battlecards first
2. Cite specific data points from win/loss analysis
3. Flag if information might be outdated (>60 days old)
4. Suggest follow-up research if you can't answer definitively

Keep responses concise and actionable.
```

**Result:** A persistent agent that gives consistent, well-sourced competitive intelligence across multiple conversations.

#### Sam's Advice

> "Start with Projects before building skill-based agents. Projects let you prototype agent behavior through conversation before investing in code."  
> — Sam, AI Team

Projects are your testing ground. Get the context and instructions right in a Project, then graduate to skills and automations.

---

#### Key Takeaways

1. **Projects ARE basic agents** — persistent context + custom instructions
2. **Think in agent terms** — knowledge, behavior, capabilities, purpose
3. **Prototype before building** — Projects let you test agent concepts quickly
4. **Graduate to skills** — Once a Project pattern proves useful, codify it

---

### Module 2.5: Git Concepts for Non-Developers (`/intermediate/git-concepts`)

**Duration:** 15–20 minutes  
**Learning Objective:** Understand Git's core concepts so you can collaborate with developers and work in Claude Code later—without learning commands.

> **Content Source:** Git & GitHub 101 document (Austin's conceptual guide)

#### Why Learn Git (Conceptually)?

You don't need to become a developer. But understanding Git helps you:
- Follow along when the AI team discusses code changes
- Use Claude Code effectively (it handles the commands for you)
- Collaborate on technical projects without feeling lost

#### The Core Mental Model

Think of Git as a **time machine for files** with a **review process** before changes go live.

#### Key Concepts in Plain English

##### Repository (Repo)
**What it is:** A folder of files with full history tracked  
**Analogy:** A Google Doc where you can see and restore every previous version

##### Branch
**What it is:** A separate copy where you can make changes without affecting the main version  
**Analogy:** Creating a copy of a document to try a different approach, knowing you can always go back to the original

##### Commit
**What it is:** A snapshot of your changes with a description  
**Analogy:** Clicking "Save" but with a note explaining what you changed and why

##### Push
**What it is:** Uploading your commits to the shared repository (GitHub)  
**Analogy:** Saving your local document changes to the cloud

##### Pull Request (PR)
**What it is:** Asking teammates to review your branch before merging it into main  
**Analogy:** Sending a "track changes" document for review before finalizing

##### Merge
**What it is:** Combining your branch changes into the main branch  
**Analogy:** Accepting all the tracked changes and finalizing the document

##### Main Branch
**What it is:** The "official" version of the code that's deployed and live  
**Analogy:** The published version of a document that everyone references

---

#### You Don't Need to Memorize Commands

In Claude Code, you just describe what you want:

| What You'd Say | What Git Calls It |
|----------------|------------------|
| "Start a new branch for this feature" | `git checkout -b` |
| "Save my changes" | `git commit` |
| "Upload this to GitHub" | `git push` |
| "Get the latest changes from the team" | `git pull` |
| "I'm done, create a review request" | Create PR |

Claude Code translates your intent into the right commands.

| You Say | Git Meaning |
|---------|-------------|
| "Latest version" | The main branch |
| "Save my progress" | Make a commit |
| "Work on something separately" | Create a branch |
| "Get feedback" | Open a pull request |
| "Combine my changes" | Merge |

#### Quick Reference

| Action | Command for Claude |
|--------|-------------------|
| Start new work | "Create a branch for [feature name]" |
| Save progress | "Commit these changes" |
| Upload to GitHub | "Push to GitHub" |
| Propose changes | "Create a PR" |
| See status | "Show me the git status" |
| Return to main | "Switch to main branch" |
| Get latest | "Pull the latest from main" |
| Undo last save | "Undo the last commit" |

---

#### Why This Matters for Advanced Path

When you reach the Advanced path and start using Claude Code:
- You'll understand what's happening when Claude "commits" changes
- You'll know what a PR is when Claude asks if you want to create one
- You'll be able to follow the team's development workflow

---

#### Key Takeaways

1. **Git = version control** — time machine for files
2. **Branches = safe experimentation** — try things without breaking production
3. **PRs = review process** — changes get checked before going live
4. **You don't need commands** — Claude Code speaks Git for you

---

### Module 2.6: Building Your First Automation (`/intermediate/building-automations`) ← ENHANCED

**Duration:** 35-40 minutes  
**Learning Objective:** Build automations from simple manual triggers to scheduled workflows.

#### Skills → Automations: The Progression

Remember the file organization and data analysis examples from Module 2.1? Those were manual Cowork sessions—you had to initiate them. Now imagine those same workflows running automatically—that's what automations enable.

| Skills | Automations |
|--------|-------------|
| Capabilities Claude can use | Skills that run on schedule/trigger |
| Activated by your request | Activated by time or event |
| Manual initiation | Hands-free execution |

**Automations are just skills + a trigger.**

#### Automation Architecture

```
TRIGGER → SKILL(S) → ACTION
```

#### Complexity Spectrum

| Level | Components | You Need |
|-------|------------|----------|
| **Simple** | Chat + Skill + Manual | Claude Chat only |
| **Moderate** | Project + Skill + Scheduling | Claude + external scheduler |
| **Advanced** | API + Custom triggers + Code | Claude Code + development |

#### The Automation Progression

Think of building automations in phases:

##### Phase 1: Manual (Where You Are Now)
- You run the skill by asking Claude
- Good for: Testing, refining, occasional use

##### Phase 2: Scheduled
- Skill runs on a schedule (daily, weekly)
- Good for: Regular reports, recurring cleanup

##### Phase 3: Event-Triggered
- Skill runs when something happens
- Good for: Monitoring, real-time responses

#### Example: Weekly Slack Pulse

**Phase 1 — Manual Skill:**
```
"Analyze #sales-team for the past week and give me a summary of key discussions"
```

**Phase 2 — Scheduled Automation:**
The same skill runs every Monday at 9 AM and posts to #sales-leadership

**Phase 3 — Event-Triggered (Advanced):**
The skill runs whenever a thread in #sales-team gets more than 10 replies

---

#### Example: Weekly Pipeline Summary (Moderate)

**Setup:**
1. Create skill with pipeline analysis instructions
2. Create macOS Shortcut to open Claude + send trigger prompt
3. Schedule: Monday 8:00 AM

**Trigger Prompt:**
> "Generate this week's pipeline summary using the standard format."

#### Example: Email-Triggered Analysis (via Zapier)

**Flow:**
1. Zapier watches Gmail for competitive emails
2. Posts notification to Slack with review prompt
3. You analyze in Claude with competitive skill
4. Share insights back to team

---

#### Building a Scheduled Automation

##### Step 1: Start with a Working Skill
Make sure your skill works reliably when you run it manually.

##### Step 2: Define the Schedule
Common patterns:
- Daily at specific time
- Weekly on specific day
- Monthly on specific date
- Every X hours

##### Step 3: Set Up the Trigger
This is where things get more technical—we'll cover the full setup in the Advanced path. For now, understand that:
- Automations use cron schedules or GitHub Actions
- The trigger tells the skill when to run
- Output goes to a specified destination (Slack, email, file)

---

#### What You Can Automate

| Automation Type | Example | Frequency |
|-----------------|---------|-----------|
| **Reporting** | Pull Salesforce metrics and summarize | Weekly |
| **Monitoring** | Check competitor websites for changes | Daily |
| **Cleanup** | Organize Downloads folder | Weekly |
| **Content** | Generate social posts from blog content | Per new post |
| **Analysis** | Win/loss pattern identification | Monthly |

---

#### What Requires Advanced Path

- Fully automatic triggers (webhooks, API calls)
- Processing without you present
- Output directly to external systems
- Multiple conditional branches
- High volume (100+ items)

---

#### A Note on Complexity

Most automations follow this pattern:
1. **Get data** from somewhere (files, APIs, Slack)
2. **Process it** (analyze, summarize, transform)
3. **Output results** somewhere (Slack, email, doc)

The more complex your automation:
- The more it belongs in Claude Code (Advanced path)
- The more testing it needs
- The more approval workflows matter

---

#### Key Takeaways

1. **Automations = skills + triggers**
2. **Start manual, then automate** — prove value first
3. **Match complexity to capability** — simple = Cowork, complex = Code
4. **Phase your approach** — manual → scheduled → event-triggered

---

### Intermediate Path Assessment

**Type:** Confidence-Based Self-Assessment + Demonstration  
**When:** After completing all modules

#### Self-Assessment Questions

Rate your confidence (1-5) on each statement:

1. **Cowork Fundamentals:** I understand when to use Cowork vs. Chat and can execute file-based tasks confidently
2. **Planning Motion:** I approach Claude as an outcome-collaborator, not a task-executor
3. **Skills:** I can read, understand, and create my own skill files
4. **Projects as Agents:** I can design a Project with the agent mindset (knowledge, behavior, capabilities)
5. **Git Concepts:** I understand repos, branches, commits, and PRs conceptually
6. **Automations:** I understand the skill → automation progression and when to automate

#### Demonstration Requirement

To complete the Intermediate path, demonstrate one of:

**Option A: Custom Skill**
- Create a skill that addresses a real need in your role
- Show it working in both Chat and Cowork
- Document trigger conditions and instructions

**Option B: Project Agent**
- Build a Project that functions as a specialized agent
- Include custom instructions and reference docs
- Show consistent behavior across multiple conversations

**Option C: Documented Automation Candidate**
- Identify a manual workflow you do repeatedly
- Write the skill that would power it
- Document the trigger and output (actual automation setup is Advanced)

---

## Advanced Path: Claude Code & Production Development

**URL:** `/advanced/`

### Path Overview

**Title:** Claude Code Mastery  
**Subtitle:** Build production-ready AI agents and integrations

**Product Focus:** This path focuses on Claude Code—the terminal-based development environment for building real applications, agents, and integrations.

**What You'll Learn:**
- Navigate and use Claude Code's development environment
- Apply the full 6-step planning process with SPEC files
- Master Git workflows for professional development
- Build agents with the Claude SDK
- Integrate with external services via MCP
- Deploy production agents in the sagansystems org

**Prerequisites:** Completed Intermediate Path + developer comfort (or willingness to learn)

**Time Commitment:** 15-20 hours spread over 4-6 weeks

**Note:** Much of this path is 🔒 **Coming Soon** — we're building it as the AI team's capabilities mature.

---

### Module 3.1: Claude Code in Action (`/advanced/claude-code-in-action`)

**Duration:** 90 minutes  
**Learning Objective:** Gain hands-on experience with Claude Code through Anthropic's official training course.

#### Course Resource

- **Claude Code in Action** — Anthropic Skilljar
  - URL: https://anthropic.skilljar.com/claude-code-in-action
  - Official Anthropic course on Claude Code
  - Hands-on exercises with real development scenarios

#### What You'll Cover

- Setting up Claude Code environment
- Basic navigation and commands
- Working with files and projects
- Executing code and seeing results
- Integration with development workflows

#### Why Start Here

This Anthropic course provides the foundation. Our subsequent modules build on it with Gladly-specific patterns and advanced techniques.

---

### Module 3.2: Planning Mode in Claude Code (`/advanced/planning-mode-code`)

**Duration:** 45 minutes  
**Learning Objective:** Master the full 6-step planning process using SPEC files and the interview prompt technique.

#### Beyond Cowork Planning

In the Intermediate path, you learned planning as a motion—sharing context and letting Claude propose approaches. In Claude Code, we formalize this with:

- **SPEC.md files** — Persistent planning documents
- **The interview prompt** — A specific technique for complex projects
- **Plan-then-execute** — Approval gates before code changes

#### The 6-Step Planning Process

##### Step 1: Create SPEC.md
Start every project with a specification file that captures:
- What you're building
- Why it matters
- Success criteria
- Known constraints

##### Step 2: Run the Interview Prompt
```
Read the SPEC.md file. Then interview me about this project.

Ask questions one at a time until you have everything you need to:
1. Understand the full scope
2. Identify potential challenges
3. Propose an implementation approach

Don't start building until I approve your plan.
```

##### Step 3: Answer Claude's Questions
Claude will ask about:
- Edge cases you may not have considered
- Technical constraints
- Integration requirements
- Testing expectations

##### Step 4: Review the Proposed Plan
Claude generates a detailed implementation plan. Review it for:
- Completeness
- Correct understanding
- Reasonable approach

##### Step 5: Approve and Execute
Once satisfied, approve the plan. Claude begins implementation, checking in at key milestones.

##### Step 6: Update SPEC as You Go
The SPEC file becomes living documentation. Update it as requirements evolve or you learn new information.

---

#### The SPEC.md Template

```markdown
# Project: [Name]

## Overview
[What this project does and why it matters]

## Goals
- [ ] Goal 1
- [ ] Goal 2
- [ ] Goal 3

## Success Criteria
- [How we know it's working]
- [Metrics or outcomes to measure]

## Constraints
- [Technical limitations]
- [Timeline requirements]
- [Dependencies]

## Open Questions
- [Things we still need to figure out]

## Implementation Plan
[Filled in after interview process]

## Progress Log
[Updated as work progresses]
```

---

#### Key Takeaways

1. **SPEC files make planning persistent** — context survives across sessions
2. **The interview prompt surfaces unknowns** — better plans through questions
3. **Approval gates prevent runaway execution** — you stay in control
4. **Update specs as you learn** — living documentation

---

### Module 3.3: Git Technical (`/advanced/git-technical`)

**Duration:** 30 minutes  
**Learning Objective:** Master Git workflows for professional development, letting Claude Code handle commands while you drive strategy.

> In the Intermediate path, you learned Git concepts. Now let's see how they work in practice with Claude Code.

#### Common Scenarios

| Scenario | What to Say |
|----------|-------------|
| Need to switch tasks | "Save what I'm working on, I need to fix a bug" |
| Made a mistake | "Undo that last commit, I want to redo it" |
| Need current status | "What's the current status? What have I changed?" |
| Someone else made changes | "Pull the latest changes from main" |

#### Quick Reference

| Action | Command for Claude |
|--------|-------------------|
| Start new work | "Create a branch for [feature name]" |
| Save progress | "Commit these changes" |
| Upload to GitHub | "Push to GitHub" |
| Propose changes | "Create a PR" |
| See status | "Show me the git status" |
| Return to main | "Switch to main branch" |
| Get latest | "Pull the latest from main" |
| Undo last save | "Undo the last commit" |

---

### Module 3.4: MCP Integration (`/advanced/mcp-integration`)

🔒 **Coming Soon**

**Planned Content:**
- Model Context Protocol (MCP) architecture
- Pre-built vs. custom MCP servers
- Authentication and security patterns
- Integration with Salesforce, Marketo, Google Workspace, Figma, Slack

**Related Anthropic Course (Available Now):**
- Introduction to Model Context Protocol — Anthropic Skilljar
  - URL: https://anthropic.skilljar.com/introduction-to-model-context-protocol

---

### Module 3.5: Claude Agent SDK (`/advanced/agent-sdk`)

🔒 **Coming Soon**

**Planned Content:**
- Agent architecture patterns
- Tool definitions and schemas
- State management
- Testing agents locally

**Related Resource (Available Now):**
- Agent SDK Full Workshop — YouTube (60 min)
  - URL: https://www.youtube.com/embed/TqC1qOfiVcQ
- Agent SDK Documentation — docs.anthropic.com

---

### Module 3.6: Multi-Agent Orchestration (`/advanced/multi-agent`)

🔒 **Coming Soon**

**Planned Content:**
- Agent swarm architecture
- Inter-agent communication
- Workflow orchestration
- Conflict resolution
- Gladly's 9-agent interconnections

---

### Module 3.7: Production Agent Development (`/advanced/production-agents`)

🔒 **Coming Soon**

**Planned Content:**
- Production agent checklist
- Guardrails and approval workflows
- Building in sagansystems GitHub org
- Testing, documentation, deployment
- Monitoring and maintenance

---

### Advanced Path Assessment

**Type:** Confidence-Based Self-Assessment + Project Demonstration  
**When:** After completing available modules

#### Self-Assessment Questions

Rate your confidence (1-5) on each statement:

1. **Claude Code:** I can navigate and use Claude Code's core features confidently
2. **Planning Process:** I can apply the 6-step planning process for complex projects
3. **Git Workflows:** I can manage branches, commits, and PRs through Claude Code
4. **Production Readiness:** I understand what's required to deploy a production agent

#### Capstone Requirement

To complete the Advanced path certification, you must:
- Build a functional agent or tool using Claude Code
- Follow the planning process (SPEC.md → interview → execution)
- Deploy to the sagansystems GitHub organization
- Document usage and limitations
- Demo to the AI Acceleration team

---

## Appendix A: Troubleshooting Guide (NEW)

### Claude Understanding Issues

| Problem | Fix |
|---------|-----|
| Goes off-topic | Break into focused, single-task prompts |
| Too generic | Add specific context, examples, constraints |
| Too verbose | Add "Be concise" or specify length |
| Misunderstands request | Rephrase with more context; use CTFC |

### Connector Problems

| Problem | Fix |
|---------|-----|
| "I can't access Drive" | Re-authenticate in Settings → Connectors |
| File not found | Check file permissions; be more specific about filename |
| Web search returns nothing | Broaden search terms; try different phrasing |
| "I don't have access to..." | Enable the connector in Settings → Connectors |

### Artifact Problems

| Problem | Fix |
|---------|-----|
| Won't create artifact | Ask explicitly: "Create this as an artifact" |
| Export fails | Re-auth Google; check permissions |
| Interactive broken | Ask Claude to debug; refresh and try again |
| Wrong artifact type | Specify type: "Create this as a table/diagram/code" |

### Memory Issues

| Problem | Fix |
|---------|-----|
| Doesn't remember something | Check Settings → Memory; re-tell Claude |
| Remembers incorrectly | "Forget what you remember about [topic]" |
| Too much remembered | Review and clear specific memories |

### Quick Reference: Error Messages

| Error | Fix |
|-------|-----|
| "I don't have access to..." | Enable in Settings → Connectors |
| "I couldn't find..." | Try different search terms |
| "I'm not able to..." | Rephrase; add business context |
| "That file doesn't exist" | Check file path; ensure synced locally |

---

## Appendix B: External Resources

### Anthropic Courses (Skilljar)

| Course | URL | Relevant Path |
|--------|-----|---------------|
| AI Fluency: Framework & Foundations | https://anthropic.skilljar.com/ai-fluency-framework-foundations | Beginner |
| Claude 101 | https://anthropic.skilljar.com/claude-101 | Beginner |
| Claude Code in Action | https://anthropic.skilljar.com/claude-code-in-action | Advanced |
| Building with the Claude API | https://anthropic.skilljar.com/claude-with-the-anthropic-api | Advanced |
| Intro to MCP | https://anthropic.skilljar.com/introduction-to-model-context-protocol | Advanced |
| MCP Advanced Topics | https://anthropic.skilljar.com/model-context-protocol-advanced-topics | Advanced |

### Tools & Utilities

| Tool | URL | Use |
|------|-----|-----|
| Prompt Cowboy | https://promptcowboy.ai | Prompting practice |
| Skills Directory | https://skills.sh/trending | Browse skills |
| Agentation | https://agentation.dev/features | MCP reference |

### Internal Resources

| Resource | Location | Use |
|----------|----------|-----|
| CoE Portal | https://www.center-of-excellence.xyz/training | AI courses |
| Claude Desktop Loom | https://www.loom.com/share/97cb836202304912a45df619caa22f08 | Interface overview |
| Skills Creation Recording | [Google Drive] | Skills tutorial |

---

## Appendix C: Skills vs. Automations vs. Projects

| Concept | What It Is | When to Use | Example |
|---------|-----------|-------------|---------|
| **Skill** | Markdown file defining a capability | When you want Claude to know how to do something | "Analyze Slack channels for sentiment" |
| **Project** | Persistent context container | Ongoing work with consistent context | Competitive Intel knowledge base |
| **Automation** | Skill that runs on schedule/trigger | Hands-free recurring tasks | Weekly Slack pulse every Monday |

**Progression:**
1. Start with **Projects** for flexibility
2. Create **Skills** for repeatable workflows
3. Add scheduling to make **Automations**

---

## Appendix D: Gladly's 9 Agents Reference

| Agent | Description | Path Coverage |
|-------|-------------|---------------|
| Content Engine | Creates and repurposes marketing content | Intermediate skills → Advanced |
| Design Automation | Generates design assets via Figma | Advanced (MCP) |
| Campaign Orchestration | Manages Marketo campaigns | Advanced (MCP) |
| Analytics & Reporting | Pulls and analyzes data | Intermediate → Advanced |
| PMM Sidekick | Supports PMMs with research and content | Intermediate → Advanced |
| Competitive Intel | Monitors competitor activity | Intermediate projects → Advanced |
| Web & Development | Updates website and CMS | Advanced |
| Customer Presentations | Creates customized slide decks | Intermediate skills → Advanced |
| Social Media | Manages social content creation | Intermediate → Advanced |

---

## Appendix E: Assessment Philosophy

**Why Confidence-Based?**

We use confidence self-assessment rather than knowledge quizzes because:
1. **Adult learning:** Professionals know when they've internalized something
2. **Reduces anxiety:** No "test" pressure that detracts from learning
3. **Action-oriented:** Focuses on "can you do this?" not "do you remember this?"
4. **Self-directed:** Empowers learners to identify their own gaps

**How Assessments Work:**

Each path ends with:
1. Self-rating on key competencies (1-5 scale)
2. Suggested next steps based on ratings
3. Practical exercises to confirm readiness

**Certificates are earned by:**
- Completing all modules
- Achieving average confidence of 4+ across all competencies
- Completing hands-on demonstration (Intermediate+)

---

## Document Metadata

**Version:** 5.0  
**Created:** February 3, 2026  
**Author:** Steve West / AI-Assisted  
**For:** Gladly AI Transformation Initiative

### Change Log

| Version | Date | Changes |
|---------|------|---------|
| 5.0 | Feb 3, 2026 | **Comprehensive merge:** Combined all detailed content from v3 (examples, walkthroughs, step-by-step instructions) with all v4 enhancements (Settings, Memory, Extended Thinking, Styles, all 12 connectors, Interactive artifacts, Code execution, Troubleshooting). Added Loom video URL. Full Module 2.1 Cowork intro. Complete Advanced path modules. All appendices including Assessment Philosophy. |
| 4.0 | Feb 3, 2026 | Enhanced Module 1.2 (Settings, Files, Memory, Extended Thinking); Web Search in Module 1.3; Complete Module 1.4 (all artifacts, versioning, execution); Enhanced Module 1.6 (Styles, custom styles); Comprehensive Module 2.6 (automations); New Appendix A (Troubleshooting); Enhanced Beginner Assessment |
| 3.0 | Feb 3, 2026 | Added Module 2.1: Introduction to Claude Cowork; Detailed examples and walkthroughs throughout |
| 2.0 | Feb 3, 2026 | Complete restructure; aligned to Claude products |
| 1.0 | Feb 2, 2026 | Initial outline |

---

## Module Files Reference

| Module | Status |
|--------|--------|
| 1.1 AI Foundations | Complete |
| 1.2 Claude Chat Overview | Enhanced (v4 features + v3 detail) |
| 1.3 Connectors | Enhanced (all 12 + web search deep dive) |
| 1.4 Artifacts | Enhanced (all 7 types + execution + versioning) |
| 1.5 Sharing & Projects | Complete |
| 1.6 Effective Prompting | Enhanced (CTFC + Styles) |
| 1.7 Skills Intro | Complete |
| 2.1 Intro to Cowork | Complete (detailed examples) |
| 2.2 Planning Mode | Complete |
| 2.3 Skills Deep Dive | Complete |
| 2.4 Projects as Agents | Complete |
| 2.5 Git Concepts | Complete |
| 2.6 Building Automations | Enhanced |
| 3.1 Claude Code in Action | Complete |
| 3.2 Planning Mode Code | Complete |
| 3.3 Git Technical | Complete |
| 3.4-3.7 | 🔒 Coming Soon |
| Appendix A (Troubleshooting) | NEW |
| Appendix B (Resources) | Complete |
| Appendix C (Concepts) | Complete |
| Appendix D (9 Agents) | Complete |
| Appendix E (Assessment) | Complete |

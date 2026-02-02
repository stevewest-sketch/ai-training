# Claude Code Training Implementation Plan
## Adding Learning Paths to Center of Excellence Training Portal

*Implementation guide for integrating the Claude Code Learning Paths curriculum into center-of-excellence.xyz/training*

---

## Executive Summary

This plan outlines the implementation of three Claude Code learning paths (Beginner, Intermediate, Advanced) into the existing CoE training portal. The implementation follows the established site architecture and design patterns while introducing a new "Learning Paths" section that guides employees through progressive skill development.

---

## Site Architecture Analysis

### Current Structure
```
/training                           → Main training page (course listing)
/agentic-ai-training/
├── index.html                      → Agentic AI Primer course
├── ai-foundations.html             → AI Foundations course
├── claude-code-101.html            → Claude Code 101 course
└── gladly-deep-dive/
    └── index.html                  → Gladly Deep Dive course
```

### Proposed Structure
```
/training                           → Updated with Learning Paths section
/learning-paths/
├── index.html                      → Learning Paths overview page
├── beginner/
│   ├── index.html                  → Beginner Path landing
│   ├── module-1-1.html             → AI Fundamentals
│   ├── module-1-2.html             → Claude Desktop Navigation
│   ├── module-1-3.html             → Effective Prompting
│   ├── module-1-4.html             → Git Fundamentals
│   └── module-1-5.html             → Agentic AI Concepts
├── intermediate/
│   ├── index.html                  → Intermediate Path landing
│   ├── module-2-1.html             → Claude Code In Action
│   ├── module-2-2.html             → Planning Mode Mastery
│   ├── module-2-3.html             → Claude Skills Creation
│   ├── module-2-4.html             → Claude Projects Setup
│   └── module-2-5.html             → Simple Automations
└── advanced/
    ├── index.html                  → Advanced Path landing
    ├── module-3-1.html             → Claude Code 101 Deep Dive
    ├── module-3-2.html             → Claude Agent SDK
    ├── module-3-3.html             → MCP Server Integration
    ├── module-3-4.html             → Multi-Agent Orchestration
    ├── module-3-5.html             → Gladly Deep Dive
    └── module-3-6.html             → Production Agent Development
```

---

## Design System

### Color Palette (Matching Existing Site)
| Element | Color | Hex |
|---------|-------|-----|
| Primary Purple | Violet | `#7C3AED` |
| Secondary Purple | Light Violet | `#A78BFA` |
| Accent Purple | Dark Violet | `#5B21B6` |
| Background | White | `#FFFFFF` |
| Card Background | Light Gray | `#F9FAFB` |
| Text Primary | Dark Gray | `#1F2937` |
| Text Secondary | Gray | `#6B7280` |
| Success | Green | `#10B981` |
| Warning | Amber | `#F59E0B` |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page Title | Inter | 36px | Bold |
| Section Header | Inter | 24px | Semibold |
| Card Title | Inter | 18px | Semibold |
| Body Text | Inter | 16px | Regular |
| Caption | Inter | 14px | Regular |
| Badge Text | Inter | 12px | Medium |

### Component Library
- **Course Cards:** White background, subtle shadow, rounded corners, duration/level badges
- **Section Tabs:** Horizontal tab navigation with active state underline
- **Progress Indicators:** Colored progress bars with percentage
- **Callout Cards:** "Breakthrough" (green) and "Limitation" (amber) styles
- **Timeline Components:** Vertical timeline with numbered steps
- **Completion Checkmarks:** Circular icons with check marks

---

## Page Templates

### 1. Main Training Page Update (`/training`)

**Changes Required:**
- Add "Learning Paths" section above or alongside existing courses
- Include three learning path cards with visual progress tracking
- Add "Recommended for You" badge logic based on role

**New Section Content:**
```html
<section id="learning-paths">
  <h2>Learning Paths</h2>
  <p>Progressive learning journeys from AI foundations to production agents</p>

  <!-- Three path cards -->
  <div class="path-card beginner">
    <span class="badge">4-6 hours</span>
    <h3>Beginner: AI Foundations & Claude Essentials</h3>
    <p>Build foundational AI literacy and become a confident daily Claude user</p>
    <div class="modules">5 modules • Required for everyone</div>
    <a href="/learning-paths/beginner/" class="btn-primary">Start Path</a>
  </div>

  <!-- Intermediate and Advanced cards similar structure -->
</section>
```

### 2. Learning Paths Overview (`/learning-paths/index.html`)

**Content:**
- Visual comparison of all three paths
- Recommended path by role table
- Prerequisites and time commitments
- Certification badges preview

### 3. Path Landing Pages (`/learning-paths/[level]/index.html`)

**Template Structure:**
- Path hero section with title, description, time estimate
- Module list with completion status
- Learning objectives summary
- Progress tracker
- "Start Learning" CTA

**Example for Beginner Path:**
```
Hero: "Beginner Path: AI Foundations & Claude Essentials"
Subtitle: "4-6 hours • 5 Modules • Required for all employees"

Module List:
[1] AI Fundamentals (60 min) - links to AI Foundations course
[2] Claude Desktop Navigation (30 min) - internal content
[3] Effective Prompting (45 min) - internal content
[4] Git Fundamentals (45 min) - external YouTube
[5] Agentic AI Concepts (45 min) - links to Agentic AI Primer course

Completion Criteria:
✅ Pass AI Fundamentals quiz (80%+)
✅ Complete task in each Claude mode
...
```

### 4. Module Pages (`/learning-paths/[level]/module-X-X.html`)

**Template Structure:**
- Module header with title, duration, objective
- Section tabs (if multiple content areas):
  - Overview
  - Resources
  - Key Concepts
  - Knowledge Check
- Video embed (if applicable)
- External resource links
- "Key Concepts" callout cards
- Pro Tips section
- Interactive knowledge check
- "Mark Complete" button
- Navigation to next/previous module

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
| Task | Owner | Deliverable |
|------|-------|-------------|
| Create `/learning-paths/` directory structure | Dev | Empty HTML files |
| Build path card component | Dev | CSS component |
| Design module page template | Design | Figma mockup |
| Update `/training` page with paths section | Dev | Updated HTML |
| Create progress tracking system | Dev | LocalStorage + UI |

### Phase 2: Beginner Path (Week 2)
| Task | Owner | Deliverable |
|------|-------|-------------|
| Build Beginner path landing page | Dev | `/learning-paths/beginner/index.html` |
| Create Module 1.1 page (AI Fundamentals) | Content | Module page linking to existing course |
| Create Module 1.2 page (Claude Desktop) | Content | New internal content |
| Create Module 1.3 page (Prompting) | Content | New internal content |
| Create Module 1.4 page (Git) | Content | Module page with YouTube embed |
| Create Module 1.5 page (Agentic AI) | Content | Module page linking to existing course |
| Build knowledge check components | Dev | Interactive quiz UI |

### Phase 3: Intermediate Path (Week 3)
| Task | Owner | Deliverable |
|------|-------|-------------|
| Build Intermediate path landing page | Dev | `/learning-paths/intermediate/index.html` |
| Create Module 2.1 page (Claude Code in Action) | Content | External Skilljar link |
| Create Module 2.2 page (Planning Mode) | Content | **NEW CONTENT NEEDED** |
| Create Module 2.3 page (Skills Creation) | Content | New internal content |
| Create Module 2.4 page (Projects Setup) | Content | New internal content |
| Create Module 2.5 page (Automations) | Content | New internal content |

### Phase 4: Advanced Path (Week 4)
| Task | Owner | Deliverable |
|------|-------|-------------|
| Build Advanced path landing page | Dev | `/learning-paths/advanced/index.html` |
| Create all 6 Advanced module pages | Content | Module pages |
| Build certification badge system | Dev | Badge award logic |
| Create assessment tracking | Dev | Progress database |

### Phase 5: Polish & Launch (Week 5)
| Task | Owner | Deliverable |
|------|-------|-------------|
| QA all pages across devices | QA | Bug report |
| Add analytics tracking | Dev | Event tracking |
| Create admin completion tracking | Dev | Dashboard |
| Write launch announcement | Marketing | Slack/email copy |
| Launch to company | All | Live site |

---

## Content Requirements

### New Content to Create

| Module | Content Type | Duration | Priority |
|--------|--------------|----------|----------|
| 1.2 Claude Desktop Navigation | Internal video/walkthrough | 30 min | High |
| 1.3 Effective Prompting | Interactive tutorial | 45 min | High |
| 2.2 Planning Mode Mastery | Internal training video | 60 min | **Critical** |
| 2.3 Skills Creation | Walkthrough guide | 90 min | High |
| 2.4 Projects Setup | Interactive tutorial | 45 min | Medium |
| 2.5 Simple Automations | Lab guide | 90 min | Medium |
| 3.4 Multi-Agent Orchestration | Technical guide | 90 min | Medium |
| 3.6 Production Agent Development | Lab guide | 180 min | Low (can be hands-on only) |

### Content Reuse

| Module | Existing Source |
|--------|-----------------|
| 1.1 AI Fundamentals | Link to AI Foundations course |
| 1.5 Agentic AI Concepts | Link to Agentic AI Primer course |
| 2.1 Claude Code in Action | Link to Anthropic Skilljar |
| 3.1 Claude Code 101 Deep Dive | Link to Claude Code 101 course |
| 3.5 Gladly Deep Dive | Link to Gladly Deep Dive course |

---

## Technical Requirements

### Progress Tracking
- LocalStorage for immediate UI feedback
- API endpoint for server-side completion tracking
- User authentication integration
- Admin dashboard for reporting

### Video Hosting
- Loom embeds for internal videos
- YouTube embeds for external content
- Skilljar redirect for Anthropic courses

### Knowledge Checks
- Multiple choice quiz component
- Pass/fail threshold (80%)
- Retry functionality
- Results storage

### Certificates/Badges
- Badge image assets (3 levels)
- Award logic on path completion
- Shareable badge link generation
- LinkedIn badge integration (optional)

---

## Success Metrics

### Launch Metrics (Week 1-2)
- % of employees who start Beginner path
- Completion rate of Module 1.1
- Page load times < 2 seconds

### Adoption Metrics (Month 1)
- Beginner path completion rate: Target 70%+
- Intermediate path starts: Target 30% of Beginner completers
- Average time to complete Beginner: Target < 2 weeks

### Impact Metrics (Month 2+)
- Post-training confidence score (survey): Target 7+/10
- Weekly hours saved by Claude users: Target 3+ hours
- Number of Skills created by Intermediate completers

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| New content not ready | Delayed launch | Pre-produce critical content (Planning Mode video) |
| Low adoption | Wasted effort | Mandate Beginner path, tie to goals |
| Technical issues | Poor UX | Thorough QA, soft launch to AI team first |
| Outdated content | Confusion | Assign content owner, quarterly reviews |

---

## Appendix: File Naming Convention

```
/learning-paths/
├── assets/
│   ├── badges/
│   │   ├── badge-beginner.svg
│   │   ├── badge-intermediate.svg
│   │   └── badge-advanced.svg
│   ├── icons/
│   │   └── [module icons]
│   └── images/
│       └── [hero images]
├── css/
│   ├── learning-paths.css
│   └── module-page.css
├── js/
│   ├── progress-tracker.js
│   └── quiz-component.js
└── [page HTML files per structure above]
```

---

*Document Version: 1.0*
*Created: February 2, 2026*
*Author: Steve West / AI-Assisted*
*For: Gladly AI Transformation Initiative*

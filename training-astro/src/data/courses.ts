// src/data/courses.ts
// ═══════════════════════════════════════════════════════════════════
// SINGLE SOURCE OF TRUTH for all training hub content.
// Navigation, sidebars, breadcrumbs, prev/next, module numbers —
// everything reads from this file.
//
// To add a module:  Add an entry to the modules array. Create the .astro page.
// To add a path:    Add a path object. Create the folder + index + module pages.
// To add a course:  Add a course object. Create the folder structure.
// ═══════════════════════════════════════════════════════════════════

import type { Course, ModuleContext } from './types';

export const courses: Course[] = [
  {
    slug: 'claude-training',
    title: 'Gladly Training Center: Claude AI',
    subtitle: 'Master Claude at your own pace',
    description: 'Three progressive learning paths aligned with Claude\'s product tiers. Not sure which path to start with? If you\'re new to AI tools, start with Beginner. Most Gladly employees should complete Beginner before moving on.',
    paths: [

      // ─────────────────────────────────────────────
      // BEGINNER PATH — Claude Chat
      // Resequenced: Prompting moved to #4, Sharing moved to #9
      // ─────────────────────────────────────────────
      {
        slug: 'beginner',
        title: 'Foundations: Using Claude',
        subtitle: 'Core Concepts & Daily Use',
        emoji: '🟢',
        color: 'green',
        productFocus: 'Claude Chat',
        description: 'Build foundational AI literacy and become a confident, effective Claude user every day.',
        prerequisites: 'None — start here if you\'re new to AI tools.',
        whatYoullLearn: [
          'Core AI concepts: LLMs, tokens, context windows, hallucinations',
          'Navigate Claude\'s interface, settings, and three modes',
          'Use Claude Chat for research, drafting, brainstorming, and analysis',
          'Structure effective prompts with the CTFC framework',
          'Connect Claude to Google Drive, Gmail, Slack, and 9 other services',
          'Create all artifact types and export to Google Drive',
          'Set up Projects as persistent workspaces',
          'Use preloaded skills through natural language',
        ],
        modules: [
          {
            slug: 'ai-foundations',
            title: 'AI Foundations',
            shortTitle: 'AI Foundations',
            time: '60 min',
            description: 'Core AI concepts, LLMs, agents vs chatbots',
            status: 'live',
          },
          {
            slug: 'claude-desktop-app',
            title: 'Claude Desktop App Overview',
            shortTitle: 'Desktop App',
            time: '20 min',
            description: 'Interface, modes, settings navigation',
            status: 'live',
          },
          {
            slug: 'claude-chat',
            title: 'Introduction to Claude Chat',
            shortTitle: 'Claude Chat',
            time: '40 min',
            description: 'Chat mode deep dive, Memory, Extended Thinking, conversation sharing',
            status: 'live',
          },
          // ↓ MOVED FROM POSITION 8 → 4
          {
            slug: 'effective-prompting',
            title: 'Effective Prompting',
            shortTitle: 'Prompting',
            time: '35 min',
            description: 'CTFC framework + Styles feature',
            status: 'live',
          },
          {
            slug: 'connectors',
            title: 'Working with Connectors',
            shortTitle: 'Connectors',
            time: '25 min',
            description: 'Connectors overview + web search deep dive',
            status: 'live',
          },
          {
            slug: 'artifacts',
            title: 'Understanding Artifacts',
            shortTitle: 'Artifacts',
            time: '30 min',
            description: 'All artifact types, execution, versioning',
            status: 'live',
          },
          {
            slug: 'projects-intro',
            title: 'Introduction to Projects',
            shortTitle: 'Projects',
            time: '15 min',
            description: 'Persistent workspaces with memory',
            status: 'live',
          },
          {
            slug: 'skills-intro',
            title: 'Introduction to Skills',
            shortTitle: 'Skills',
            time: '20 min',
            description: 'Skills as capabilities, natural language triggers',
            status: 'live',
          },
          {
            slug: 'assessment',
            title: 'Path Assessment',
            shortTitle: 'Assessment',
            description: 'Self-assessment + practical demonstrations',
            status: 'live',
            isAssessment: true,
          },
        ],
      },

      // ─────────────────────────────────────────────
      // INTERMEDIATE PATH — Claude Cowork
      // ─────────────────────────────────────────────
      {
        slug: 'intermediate',
        title: 'Builder: Creating with Claude',
        subtitle: 'Skills, Projects & Automations',
        emoji: '🟡',
        color: 'yellow',
        productFocus: 'Claude Cowork',
        description: 'Transform from task-giver to outcome-creator. Master planning methodology, create custom skills, build automations, and design AI-powered workflows.',
        prerequisites: 'Completed Beginner Path.',
        whatYoullLearn: [
          'What Cowork is and when to use it vs. Chat',
          'The planning-as-a-motion mindset for outcome-focused collaboration',
          'Create your own skills (yes, they\'re just markdown files)',
          'Use Projects as basic AI agents',
          'Build automations that run without you',
          'Build a daily briefing skill that synthesizes meetings, messages, and documents',
        ],
        modules: [
          {
            slug: 'intro-to-cowork',
            title: 'Introduction to Claude Cowork',
            shortTitle: 'Claude Cowork',
            time: '25 min',
            description: 'What Cowork is + when to use it vs. Chat',
            status: 'live',
          },
          {
            slug: 'planning-mode',
            title: 'Planning Mode — The Motion',
            shortTitle: 'Planning Mode',
            time: '25 min',
            description: 'Outcome-creator mindset + planning workflow',
            status: 'live',
          },
          {
            slug: 'skills-deep-dive',
            title: 'Skills Deep Dive',
            shortTitle: 'Skills',
            time: '30 min',
            description: 'What skills are + how to create your own',
            status: 'live',
          },
          {
            slug: 'projects-as-agents',
            title: 'Projects as Basic AI Agents',
            shortTitle: 'Projects',
            time: '20 min',
            description: 'Projects through an agent lens',
            status: 'live',
          },
          {
            slug: 'building-automations',
            title: 'Building Automations',
            shortTitle: 'Automations',
            time: '40 min',
            description: 'From manual skills to scheduled workflows',
            status: 'live',
          },
          {
            slug: 'daily-briefing-skill',
            title: 'Build Your Daily Briefing Skill',
            shortTitle: 'Daily Briefing',
            time: '45 min',
            description: 'Build a skill for daily briefings from connected systems',
            status: 'live',
          },
          {
            slug: 'assessment',
            title: 'Path Assessment',
            shortTitle: 'Assessment',
            description: 'Demonstrate your Claude Cowork skills',
            status: 'live',
            isAssessment: true,
          },
        ],
      },

      // ─────────────────────────────────────────────
      // ADVANCED PATH — Claude Code
      // Resequenced: Planning Mode moved to #2, Git merged into one module
      // ─────────────────────────────────────────────
      {
        slug: 'advanced',
        title: 'Developer: Building Agents',
        subtitle: 'Claude Code & Agent Development',
        emoji: '🔴',
        color: 'red',
        productFocus: 'Claude Code',
        description: 'Build production AI agents with Claude Code. Master Git workflows, MCP integrations, the Agent SDK, and multi-agent architectures.',
        prerequisites: 'Completed Intermediate Path + developer comfort (or willingness to learn).',
        whatYoullLearn: [
          'Navigate and use Claude Code\'s development environment',
          'Apply the full 6-step planning process with SPEC files',
          'Master Git workflows for professional development',
          'Build agents with the Claude SDK',
          'Integrate with external services via MCP',
          'Deploy production agents',
        ],
        modules: [
          {
            slug: 'claude-code-in-action',
            title: 'Claude Code in Action',
            shortTitle: 'Code in Action',
            time: '90 min',
            description: 'Anthropic Skilljar course',
            status: 'live',
          },
          // ↓ MOVED FROM POSITION 4 → 2
          {
            slug: 'planning-mode-code',
            title: 'Planning Mode in Claude Code',
            shortTitle: 'Planning Mode',
            time: '45 min',
            description: 'SPEC files + interview process',
            status: 'live',
          },
          // ↓ MERGED Git Concepts + Git Technical into one module
          {
            slug: 'git-workflows',
            title: 'Git Workflows for Claude Code',
            shortTitle: 'Git Workflows',
            time: '45 min',
            description: 'Version control concepts + professional workflows',
            status: 'live',
          },
          {
            slug: 'mcp-integration',
            title: 'MCP Server Integration',
            shortTitle: 'MCP Integration',
            time: '60 min',
            description: 'Connect to external services',
            status: 'coming-soon',
          },
          {
            slug: 'agent-sdk',
            title: 'Claude Agent SDK',
            shortTitle: 'Agent SDK',
            time: '60 min',
            description: 'Build agents with SDK',
            status: 'coming-soon',
          },
          {
            slug: 'multi-agent',
            title: 'Multi-Agent Orchestration',
            shortTitle: 'Multi-Agent',
            time: '60 min',
            description: 'Coordinate multiple agents',
            status: 'coming-soon',
          },
          {
            slug: 'production-agents',
            title: 'Production Agent Development',
            shortTitle: 'Production Agents',
            time: '90 min',
            description: 'Build, test, and deploy',
            status: 'coming-soon',
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // FUTURE COURSES — Uncomment and populate when ready
  // ═══════════════════════════════════════════════════════════════
  //
  // {
  //   slug: 'demoing-gladly',
  //   title: 'Demoing Gladly',
  //   subtitle: 'Master the Gladly demo',
  //   description: 'Learn to deliver compelling Gladly demos for prospects.',
  //   paths: [
  //     {
  //       slug: 'foundations',
  //       title: 'Demo Foundations',
  //       ...
  //     },
  //   ],
  // },
  //
  // {
  //   slug: 'competitive-intel',
  //   title: 'Competitive Intelligence',
  //   subtitle: 'Know your market',
  //   description: 'Deep dives on competitors and positioning.',
  //   paths: [],
  // },
];


// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS — Used by layouts and components
// ═══════════════════════════════════════════════════════════════════

/**
 * Get a course by slug
 */
export function getCourse(courseSlug: string): Course | undefined {
  return courses.find(c => c.slug === courseSlug);
}

/**
 * Get a learning path within a course
 */
export function getPath(courseSlug: string, pathSlug: string) {
  const course = getCourse(courseSlug);
  return course?.paths.find(p => p.slug === pathSlug);
}

/**
 * Get a module within a path
 */
export function getModule(courseSlug: string, pathSlug: string, moduleSlug: string) {
  const path = getPath(courseSlug, pathSlug);
  return path?.modules.find(m => m.slug === moduleSlug);
}

/**
 * Get full navigation context for a module page.
 * This is what ModuleLayout.astro uses to render everything.
 */
export function getModuleContext(
  courseSlug: string,
  pathSlug: string,
  moduleSlug: string
): ModuleContext | null {
  const course = getCourse(courseSlug);
  if (!course) return null;

  const path = course.paths.find(p => p.slug === pathSlug);
  if (!path) return null;

  const moduleIndex = path.modules.findIndex(m => m.slug === moduleSlug);
  if (moduleIndex === -1) return null;

  const module = path.modules[moduleIndex];
  const contentModules = path.modules.filter(m => !m.isAssessment);
  const moduleNumber = module.isAssessment
    ? 0
    : contentModules.findIndex(m => m.slug === moduleSlug) + 1;
  const totalModules = contentModules.length;

  return {
    course,
    path,
    module,
    moduleIndex,
    moduleNumber,
    totalModules,
    prevModule: moduleIndex > 0 ? path.modules[moduleIndex - 1] : null,
    nextModule: moduleIndex < path.modules.length - 1 ? path.modules[moduleIndex + 1] : null,
  };
}

/**
 * Get the URL for a module page
 */
export function getModuleUrl(courseSlug: string, pathSlug: string, moduleSlug: string): string {
  // For the main claude-training course, URLs are /beginner/module-slug
  // For future courses, URLs would be /course-slug/path-slug/module-slug
  if (courseSlug === 'claude-training') {
    return `/${pathSlug}/${moduleSlug}`;
  }
  return `/${courseSlug}/${pathSlug}/${moduleSlug}`;
}

/**
 * Get the URL for a path index page
 */
export function getPathUrl(courseSlug: string, pathSlug: string): string {
  if (courseSlug === 'claude-training') {
    return `/${pathSlug}/`;
  }
  return `/${courseSlug}/${pathSlug}/`;
}

/**
 * Calculate total estimated time for a path
 */
export function getPathTotalTime(path: { modules: Module[] }): string {
  const totalMinutes = path.modules
    .filter(m => m.time)
    .reduce((sum, m) => {
      const mins = parseInt(m.time!.replace(/[^0-9]/g, ''), 10);
      return sum + (isNaN(mins) ? 0 : mins);
    }, 0);

  if (totalMinutes < 60) return `${totalMinutes} min`;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return mins > 0 ? `~${hours}h ${mins}m` : `~${hours}h`;
}

/**
 * Count live (non-assessment) modules in a path
 */
export function getLiveModuleCount(path: { modules: Module[] }): number {
  return path.modules.filter(m => !m.isAssessment && m.status === 'live').length;
}

/**
 * Check if a path has any coming-soon modules
 */
export function hasComingSoon(path: { modules: Module[] }): boolean {
  return path.modules.some(m => m.status === 'coming-soon');
}

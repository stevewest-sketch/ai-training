// src/data/types.ts
// Core data model for the training hub

export interface Module {
  slug: string;
  title: string;
  shortTitle: string;
  time?: string;
  description?: string;
  status: 'live' | 'coming-soon' | 'draft';
  isAssessment?: boolean;
}

export interface LearningPath {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: 'green' | 'yellow' | 'red' | 'blue' | 'purple';
  productFocus: string;
  description: string;
  longDescription?: string;
  prerequisites?: string;
  whatYoullLearn?: string[];
  modules: Module[];
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  paths: LearningPath[];
}

// Helper types
export type PathSlug = string;
export type ModuleSlug = string;

// Navigation context passed to layouts
export interface ModuleContext {
  course: Course;
  path: LearningPath;
  module: Module;
  moduleIndex: number;       // 0-based index in modules array
  moduleNumber: number;       // 1-based display number (excludes assessment)
  totalModules: number;       // count of non-assessment modules
  prevModule: Module | null;
  nextModule: Module | null;
}

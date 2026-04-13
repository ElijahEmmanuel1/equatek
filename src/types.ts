export type PageId = 'home' | 'pathways' | 'chapter' | 'quiz' | 'chrono' | 'progress'

export type SubjectId = 'maths' | 'physique' | 'chimie'

export type ResourceKey = 'cours' | 'exercices' | 'quiz' | 'bac' | 'equatek'

export interface QuizQuestion {
  id: string
  question: string
  choices: string[]
  correct: number
  explanation: string
}

export interface ResourceItem {
  label: string
  locked?: boolean
  comingSoon?: boolean   // true = pas encore disponible, affiché "À venir"
  url?: string           // lien externe si disponible
}

export interface ChapterResources {
  cours: ResourceItem[]
  exercices: ResourceItem[]
  quiz: ResourceItem[]
  bac: ResourceItem[]
  equatek: ResourceItem[]
}

// ─── Cours inline ──────────────────────────────────────────
/** Un bloc de contenu dans une section de cours */
export type CourseBlockType =
  | 'text'        // paragraphe texte (markdown simple)
  | 'formula'     // formule KaTeX display
  | 'table'       // tableau (headers + rows)
  | 'method'      // étapes numérotées (type Bac)
  | 'example'     // exemple résolu
  | 'warning'     // point clé / piège fréquent

export interface CourseBlock {
  type: CourseBlockType
  /** Texte principal (markdown ou LaTeX selon le type) */
  content: string
  /** Pour type='table' : en-têtes des colonnes */
  headers?: string[]
  /** Pour type='table' : lignes du tableau (chaque ligne = tableau de cellules) */
  rows?: string[][]
  /** Pour type='method' | 'example' : liste d'étapes */
  steps?: string[]
  /** Titre optionnel du bloc */
  title?: string
}

export interface CourseSection {
  id: string
  title: string
  icon: string
  blocks: CourseBlock[]
}

// ─── Chapitre ──────────────────────────────────────────────
export interface Chapter {
  id: string
  title: string
  period: string
  goal: string
  subjectId?: SubjectId
  resources: ChapterResources
  quizQuestions: QuizQuestion[]
  chronoDuration: number // minutes
  /** Cours inline structuré (optionnel — si absent, affiche la resource card) */
  courseContent?: CourseSection[]
  /** Exercices inline structurés (optionnel) */
  exercicesContent?: CourseSection[]
}

export interface Pathway {
  id: string
  label: string
  badge: string
  objective: string
  themes: string[]
  targets: string[]
  weeklyPlan: string[]
  chapterIds: string[]
}

export interface ChapterProgress {
  started: boolean
  quizScore?: number // 0-100
  quizCompleted: boolean
  chronoCompleted: boolean
  coursRead: boolean
  exercicesDone: boolean
}

export type ProgressStore = Record<string, ChapterProgress>

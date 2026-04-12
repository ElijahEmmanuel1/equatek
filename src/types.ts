export type PageId = 'home' | 'pathways' | 'chapter' | 'quiz' | 'chrono' | 'progress'

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

export interface Chapter {
  id: string
  title: string
  period: string
  goal: string
  resources: ChapterResources
  quizQuestions: QuizQuestion[]
  chronoDuration: number // minutes
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

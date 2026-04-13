import { useState, useEffect } from 'react'
import type { ProgressStore } from './types'

const STORAGE_KEY = 'equatek_progress'
const CONFIG_KEY = 'equatek_config'

const defaultProgress: ProgressStore = {}

interface AppConfig {
  hasOnboarded: boolean
  userLevel: string | null
}

const defaultConfig: AppConfig = {
  hasOnboarded: false,
  userLevel: null,
}

export function useProgress() {
  const [appConfig, setAppConfig] = useState<AppConfig>(() => {
    try {
      const stored = localStorage.getItem(CONFIG_KEY)
      return stored ? JSON.parse(stored) : defaultConfig
    } catch {
      return defaultConfig
    }
  })

  const [progress, setProgress] = useState<ProgressStore>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : defaultProgress
    } catch {
      return defaultProgress
    }
  })

  useEffect(() => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(appConfig))
  }, [appConfig])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markCoursRead = (chapterId: string) => {
    setProgress((prev) => ({
      ...prev,
      [chapterId]: { ...getChapterProgress(prev, chapterId), started: true, coursRead: true },
    }))
  }

  const markExercicesDone = (chapterId: string) => {
    setProgress((prev) => ({
      ...prev,
      [chapterId]: { ...getChapterProgress(prev, chapterId), started: true, exercicesDone: true },
    }))
  }

  const setQuizResult = (chapterId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      [chapterId]: {
        ...getChapterProgress(prev, chapterId),
        started: true,
        quizCompleted: true,
        quizScore: score,
      },
    }))
  }

  /** Remet le quiz d'un chapitre à zéro pour permettre de le refaire */
  const resetQuiz = (chapterId: string) => {
    setProgress((prev) => ({
      ...prev,
      [chapterId]: {
        ...getChapterProgress(prev, chapterId),
        quizCompleted: false,
        quizScore: undefined,
      },
    }))
  }

  const markChronoCompleted = (chapterId: string) => {
    setProgress((prev) => ({
      ...prev,
      [chapterId]: { ...getChapterProgress(prev, chapterId), started: true, chronoCompleted: true },
    }))
  }

  const getChapterCompletion = (chapterId: string): number => {
    const p = progress[chapterId]
    if (!p) return 0
    let score = 0
    if (p.coursRead) score += 25
    if (p.exercicesDone) score += 25
    if (p.quizCompleted) score += 30
    if (p.chronoCompleted) score += 20
    return score
  }

  const completeOnboarding = (level: string) => {
    setAppConfig({ hasOnboarded: true, userLevel: level })
  }

  return {
    appConfig,
    completeOnboarding,
    progress,
    markCoursRead,
    markExercicesDone,
    setQuizResult,
    resetQuiz,
    markChronoCompleted,
    getChapterCompletion,
  }
}

function getChapterProgress(store: ProgressStore, chapterId: string) {
  return (
    store[chapterId] ?? {
      started: false,
      quizCompleted: false,
      chronoCompleted: false,
      coursRead: false,
      exercicesDone: false,
    }
  )
}

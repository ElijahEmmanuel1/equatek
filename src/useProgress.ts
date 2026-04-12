import { useState, useEffect } from 'react'
import type { ProgressStore } from './types'

const STORAGE_KEY = 'equatek_progress'

const defaultProgress: ProgressStore = {}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressStore>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : defaultProgress
    } catch {
      return defaultProgress
    }
  })

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

  return {
    progress,
    markCoursRead,
    markExercicesDone,
    setQuizResult,
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

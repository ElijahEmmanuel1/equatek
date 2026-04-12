import type { Chapter, ResourceKey } from '../types'
import type { ChapterProgress } from '../types'
import { QuizView } from './QuizView'
import { ChronoMode } from './ChronoMode'
import { SubjectViewer } from './SubjectViewer'
import { equatekSubjects } from '../subjects'

interface ChapterPageProps {
  chapter: Chapter
  progress: ChapterProgress | undefined
  completion: number
  onMarkCoursRead: () => void
  onMarkExercicesDone: () => void
  onQuizComplete: (score: number) => void
  onChronoComplete: () => void
  onBack: () => void
}

type SubPage = 'overview' | 'quiz' | 'chrono' | 'subject'

const RESOURCE_CONFIGS: { key: ResourceKey; label: string; icon: string; color: string }[] = [
  { key: 'cours', label: 'Cours', icon: '📖', color: '#7c9eff' },
  { key: 'exercices', label: 'Exercices', icon: '✏️', color: '#ffd190' },
  { key: 'quiz', label: 'Quiz', icon: '🧠', color: '#c084fc' },
  { key: 'bac', label: 'Sujets de Bac', icon: '🎯', color: '#5cffb4' },
  { key: 'equatek', label: 'Sujets Equatek', icon: '⚡', color: '#ff9f7a' },
]

import { useState } from 'react'

export function ChapterPage({
  chapter,
  progress,
  completion,
  onMarkCoursRead,
  onMarkExercicesDone,
  onQuizComplete,
  onChronoComplete,
  onBack,
}: ChapterPageProps) {
  const [subPage, setSubPage] = useState<SubPage>('overview')

  return (
    <div className="chapter-page">
      <button className="back-btn" onClick={onBack} type="button">
        ← Retour aux chapitres
      </button>

      <header className="chapter-page-header">
        <div>
          <p className="eyebrow">{chapter.period}</p>
          <h2 className="chapter-page-title">{chapter.title}</h2>
          <p className="chapter-page-goal">{chapter.goal}</p>
        </div>
        <div className="chapter-page-completion">
          <div className="completion-bar-wrap">
            <div className="completion-bar-fill" style={{ width: `${completion}%` }} />
          </div>
          <span className="completion-label">{completion}% complété</span>
        </div>
      </header>

      <div className="chapter-subnav">
        {(['overview', 'quiz', 'chrono', 'subject'] as SubPage[]).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setSubPage(p)}
            className={`chapter-subnav-btn ${subPage === p ? 'active' : ''}`}
          >
            {p === 'overview' ? '📚 Contenu' :
             p === 'quiz' ? '🧠 Quiz' :
             p === 'chrono' ? '⏱️ Mode Chrono' :
             '📄 Sujets Equatek'}
          </button>
        ))}
      </div>

      {subPage === 'overview' && (
        <div className="chapter-resources">
          {RESOURCE_CONFIGS.map((rc) => {
            const items = chapter.resources[rc.key]
            const isCours = rc.key === 'cours'
            const isExo = rc.key === 'exercices'
            const isDone = (isCours && progress?.coursRead) || (isExo && progress?.exercicesDone)

            return (
              <article key={rc.key} className="res-card">
                <div className="res-card-head">
                  <span className="res-icon" style={{ background: `${rc.color}18`, color: rc.color }}>
                    {rc.icon}
                  </span>
                  <div>
                    <h4 className="res-card-title">{rc.label}</h4>
                    <span className="res-count">{items.length} ressources</span>
                  </div>
                  {isDone && <span className="res-done-badge">✓ Fait</span>}
                </div>
                <ul className="res-list">
                  {items.map((item) => {
                    const isEquatek = rc.key === 'equatek'
                    const subjectKey = isEquatek ? item.label.replace('Sujet Equatek ', '') : null
                    const hasSubject = subjectKey !== null && equatekSubjects[subjectKey] !== undefined
                    return (
                      <li key={item.label} className={`res-item ${hasSubject ? 'res-item--link' : ''}`}
                        onClick={hasSubject ? () => setSubPage('subject') : undefined}
                        style={hasSubject ? { cursor: 'pointer' } : {}}
                      >
                        <span className="res-bullet" style={{ color: rc.color }}>›</span>
                        {item.label}
                        {hasSubject && <span className="res-open-badge">Ouvrir →</span>}
                      </li>
                    )
                  })}
                </ul>
                {(isCours || isExo) && !isDone && (
                  <button
                    className="res-mark-btn"
                    type="button"
                    onClick={isCours ? onMarkCoursRead : onMarkExercicesDone}
                  >
                    Marquer comme fait ✓
                  </button>
                )}
              </article>
            )
          })}
        </div>
      )}

      {subPage === 'quiz' && (
        <div className="subpage-wrap">
          {progress?.quizCompleted ? (
            <div className="already-done">
              <p className="already-done-score">
                Tu as obtenu <strong style={{ color: '#ffd190' }}>{progress.quizScore}%</strong> à ce quiz.
              </p>
              <button className="button button-soft" onClick={() => {
                onQuizComplete(0) // reset then redo
              }} type="button">Refaire le quiz</button>
              <QuizView
                questions={chapter.quizQuestions}
                chapterId={chapter.id}
                onComplete={onQuizComplete}
              />
            </div>
          ) : (
            <QuizView
              questions={chapter.quizQuestions}
              chapterId={chapter.id}
              onComplete={onQuizComplete}
            />
          )}
        </div>
      )}

      {subPage === 'chrono' && (
        <div className="subpage-wrap">
          <ChronoMode
            duration={chapter.chronoDuration}
            chapterTitle={chapter.title}
            onComplete={onChronoComplete}
          />
        </div>
      )}

      {subPage === 'subject' && (
        <div className="subpage-wrap">
          <SubjectViewer
            subject={equatekSubjects['A1']}
            onClose={() => setSubPage('overview')}
          />
        </div>
      )}
    </div>
  )
}

import type { Chapter, ChapterProgress } from '../types'
import { ProgressRing } from './ProgressRing'
import { CheckCircle2 } from 'lucide-react'

interface ChapterCardProps {
  chapter: Chapter
  completion: number
  progress: ChapterProgress | undefined
  onOpen: () => void
}

export function ChapterCard({ chapter, completion, progress, onOpen }: ChapterCardProps) {
  const status = completion === 100 ? 'done' : completion > 0 ? 'partial' : 'todo'

  return (
    <article
      className={`chapter-card chapter-card--${status}`}
      onClick={onOpen}
      tabIndex={0}
      role="button"
      aria-label={`Ouvrir ${chapter.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      <div className="chapter-card-body">
        <p className="chapter-card-period">{chapter.period}</p>
        <h3 className="chapter-card-title">{chapter.title}</h3>
        <p className="chapter-card-goal">{chapter.goal}</p>
        <div className="chapter-card-pills">
          <span className={`pill ${progress?.coursRead ? 'pill-done' : 'pill-pending'}`}>
            {progress?.coursRead ? <><CheckCircle2 size={12} strokeWidth={3} /> Cours</> : 'Cours'}
          </span>
          <span className={`pill ${progress?.quizCompleted ? 'pill-done' : 'pill-pending'}`}>
            {progress?.quizCompleted ? <><CheckCircle2 size={12} strokeWidth={3} /> Quiz</> : 'Quiz'}
          </span>
          <span className={`pill ${progress?.chronoCompleted ? 'pill-done' : 'pill-pending'}`}>
            {progress?.chronoCompleted ? <><CheckCircle2 size={12} strokeWidth={3} /> Chrono</> : 'Chrono'}
          </span>
        </div>
      </div>
      <div className="chapter-card-ring">
        <ProgressRing value={completion} size={60} stroke={5} />
      </div>
    </article>
  )
}

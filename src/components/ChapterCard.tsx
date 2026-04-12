import type { Chapter } from '../types'
import type { ChapterProgress } from '../types'
import { ProgressRing } from './ProgressRing'

interface ChapterCardProps {
  chapter: Chapter
  completion: number
  progress: ChapterProgress | undefined
  onOpen: () => void
}

const STATUS_LABELS: Record<string, string> = {
  done: 'Validé',
  partial: 'En cours',
  locked: 'À commencer',
}

export function ChapterCard({ chapter, completion, progress, onOpen }: ChapterCardProps) {
  const status = completion === 100 ? 'done' : completion > 0 ? 'partial' : 'locked'
  const statusColor = status === 'done' ? '#5cffb4' : status === 'partial' ? '#ffd190' : '#6f6fa8'

  return (
    <article className={`chapter-card chapter-card--${status}`} onClick={onOpen} tabIndex={0} role="button"
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
      <div className="chapter-card-top">
        <div>
          <p className="eyebrow">{chapter.period}</p>
          <h3 className="chapter-card-title">{chapter.title}</h3>
          <p className="chapter-card-goal">{chapter.goal}</p>
        </div>
        <ProgressRing value={completion} size={62} />
      </div>
      <div className="chapter-card-footer">
        <span className="chapter-card-status" style={{ color: statusColor }}>● {STATUS_LABELS[status]}</span>
        <div className="chapter-card-pills">
          {progress?.coursRead && <span className="pill pill-done">Cours ✓</span>}
          {progress?.quizCompleted && <span className="pill pill-done">Quiz ✓</span>}
          {progress?.chronoCompleted && <span className="pill pill-done">Chrono ✓</span>}
        </div>
        <span className="chapter-card-arrow">Ouvrir →</span>
      </div>
    </article>
  )
}

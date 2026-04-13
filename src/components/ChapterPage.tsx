import { useState } from 'react'
import type { Chapter, ResourceKey } from '../types'
import type { ChapterProgress } from '../types'
import { QuizView } from './QuizView'
import { ChronoMode } from './ChronoMode'
import { SubjectViewer } from './SubjectViewer'
import { CourseViewer } from './CourseViewer'
import { equatekSubjects } from '../subjects'
import { BookOpen, Pencil, BrainCircuit, Target, Zap, Library, Timer, FileText, ChevronLeft, CheckCircle2 } from 'lucide-react'

interface ChapterPageProps {
  chapter: Chapter
  progress: ChapterProgress | undefined
  completion: number
  onMarkCoursRead: () => void
  onMarkExercicesDone: () => void
  onQuizComplete: (score: number) => void
  onResetQuiz: () => void
  onChronoComplete: () => void
  onBack: () => void
}

type SubPage = 'overview' | 'cours' | 'quiz' | 'chrono' | 'subject'

const RESOURCE_CONFIGS: { key: ResourceKey; label: string; icon: React.ReactNode; color: string }[] = [
  { key: 'cours',     label: 'Cours',          icon: <BookOpen size={18} strokeWidth={2.5} />, color: '#7c9eff' },
  { key: 'exercices', label: 'Exercices',       icon: <Pencil size={18} strokeWidth={2.5} />, color: '#ffd190' },
  { key: 'quiz',      label: 'Quiz',            icon: <BrainCircuit size={18} strokeWidth={2.5} />, color: '#c084fc' },
  { key: 'bac',       label: 'Sujets Bac',      icon: <Target size={18} strokeWidth={2.5} />, color: '#5cffb4' },
  { key: 'equatek',   label: 'Sujets Equatek',  icon: <Zap size={18} strokeWidth={2.5} />, color: '#ff9f7a' },
]

// Configs sans la carte Cours (utilisé quand un cours inline est disponible)
const RESOURCE_CONFIGS_NO_COURS: { key: ResourceKey; label: string; icon: React.ReactNode; color: string }[] = [
  { key: 'exercices', label: 'Exercices',      icon: <Pencil size={18} strokeWidth={2.5} />, color: '#ffd190' },
  { key: 'quiz',      label: 'Quiz',           icon: <BrainCircuit size={18} strokeWidth={2.5} />, color: '#c084fc' },
  { key: 'bac',       label: 'Sujets Bac',     icon: <Target size={18} strokeWidth={2.5} />, color: '#5cffb4' },
  { key: 'equatek',   label: 'Sujets Equatek', icon: <Zap size={18} strokeWidth={2.5} />, color: '#ff9f7a' },
]

const SUBNAV_BASE: Record<SubPage, { text: string; icon: React.ReactNode }> = {
  cours:    { text: 'Cours', icon: <BookOpen size={14} strokeWidth={2.5} /> },
  overview: { text: 'Ressources', icon: <Library size={14} strokeWidth={2.5} /> },
  quiz:     { text: 'Quiz', icon: <BrainCircuit size={14} strokeWidth={2.5} /> },
  chrono:   { text: 'Chrono', icon: <Timer size={14} strokeWidth={2.5} /> },
  subject:  { text: 'Sujets', icon: <FileText size={14} strokeWidth={2.5} /> },
}

export function ChapterPage({
  chapter,
  progress,
  completion,
  onMarkCoursRead,
  onMarkExercicesDone,
  onQuizComplete,
  onResetQuiz,
  onChronoComplete,
  onBack,
}: ChapterPageProps) {
  const hasCours = Boolean(chapter.courseContent?.length)
  const [subPage, setSubPage] = useState<SubPage>(hasCours ? 'cours' : 'overview')
  const [activeSubjectKey, setActiveSubjectKey] = useState<string>('A1')
  /* redoingQuiz contrôle l'affichage du quiz après un "Refaire" */
  const [redoingQuiz, setRedoingQuiz] = useState(false)

  // Construire la liste des onglets selon si un cours inline existe
  const subnavItems: SubPage[] = hasCours
    ? ['cours', 'overview', 'quiz', 'chrono', 'subject']
    : ['overview', 'quiz', 'chrono', 'subject']

  const openSubject = (key: string) => {
    setActiveSubjectKey(key)
    setSubPage('subject')
  }

  const handleQuizComplete = (score: number) => {
    onQuizComplete(score)
    setRedoingQuiz(false)
  }

  const handleRedoQuiz = () => {
    onResetQuiz()      // remet quizCompleted = false dans le store
    setRedoingQuiz(true)
  }

  return (
    <div className="chapter-page">
      <button className="back-btn" onClick={onBack} type="button">
        <ChevronLeft size={16} strokeWidth={3} /> Retour aux chapitres
      </button>

      {/* En-tête chapitre */}
      <header className="chapter-page-header">
        <div>
          <p className="eyebrow">{chapter.period}</p>
          <h2 className="chapter-page-title">{chapter.title}</h2>
          <p className="chapter-page-goal">{chapter.goal}</p>
        </div>
        <div className="chapter-page-completion">
          <div
            className="completion-bar-wrap"
            role="progressbar"
            aria-valuenow={completion}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="completion-bar-fill" style={{ width: `${completion}%` }} />
          </div>
          <span className="completion-label">{completion}% complété</span>
        </div>
      </header>

      {/* Sous-navigation */}
      <div className="chapter-subnav" role="tablist">
        {subnavItems.map((p) => (
          <button
            key={p}
            type="button"
            role="tab"
            aria-selected={subPage === p}
            onClick={() => setSubPage(p)}
            className={`chapter-subnav-btn ${subPage === p ? 'active' : ''}`}
          >
            {SUBNAV_BASE[p].icon}
            <span>{SUBNAV_BASE[p].text}</span>
          </button>
        ))}
      </div>

      {/* ── Vue : Cours inline ──────────────────────────────── */}
      {subPage === 'cours' && chapter.courseContent && (
        <div className="subpage-wrap">
          <CourseViewer
            sections={chapter.courseContent}
            isRead={progress?.coursRead}
            onMarkRead={onMarkCoursRead}
          />
        </div>
      )}

      {/* ── Vue : Ressources ──────────────────────────────────── */}
      {subPage === 'overview' && (
        <div className="chapter-resources">
          {(hasCours ? RESOURCE_CONFIGS_NO_COURS : RESOURCE_CONFIGS).map((rc) => {
            const items = chapter.resources[rc.key]
            const isCours    = rc.key === 'cours'
            const isExo      = rc.key === 'exercices'
            const isEquatek  = rc.key === 'equatek'
            /* La carte est "à venir" si TOUS ses items sont comingSoon */
            const allSoon    = items.every((i) => i.comingSoon)
            const isDone     = (isCours && progress?.coursRead) || (isExo && progress?.exercicesDone)
            /* Affiche le bouton "Marquer comme fait" seulement si contenu réel */
            const canMark    = (isCours || isExo) && !allSoon

            return (
              <article
                key={rc.key}
                className={`res-card${allSoon ? ' res-card--soon' : ''}`}
              >
                <div className="res-card-head">
                  <span className="res-icon" style={{ background: `${rc.color}18`, color: rc.color }}>
                    {rc.icon}
                  </span>
                  <div>
                    <h4 className="res-card-title">{rc.label}</h4>
                    <span className="res-count">{items.length} ressource{items.length > 1 ? 's' : ''}</span>
                  </div>
                  {isDone && !allSoon && <span className="res-done-badge">✓ Fait</span>}
                  {allSoon && <span className="res-soon-badge">Bientôt</span>}
                </div>

                <ul className="res-list">
                  {items.map((item) => {
                    /* Pour les sujets Equatek, on détecte la clé (A1, A2…) */
                    const subKey   = isEquatek ? item.label.replace('Sujet Equatek ', '') : null
                    const hasDoc   = !item.comingSoon && subKey !== null && equatekSubjects[subKey] !== undefined
                    const isSoon   = item.comingSoon || (isEquatek && subKey !== null && !hasDoc)

                    return (
                      <li
                        key={item.label}
                        className={[
                          'res-item',
                          hasDoc ? 'res-item--link' : '',
                          isSoon ? 'res-item--soon' : '',
                        ].join(' ').trim()}
                        onClick={hasDoc ? () => openSubject(subKey!) : undefined}
                        style={hasDoc ? { cursor: 'pointer' } : {}}
                      >
                        <ChevronLeft className="res-bullet" size={14} strokeWidth={3} style={{ color: rc.color, transform: 'rotate(180deg)' }} />
                        <span className="res-label-text">{item.label}</span>
                        {hasDoc && <span className="res-open-badge">Ouvrir <ChevronLeft size={12} strokeWidth={3} style={{ transform: 'rotate(180deg)', marginLeft: 2 }} /></span>}
                        {isSoon && <span className="res-soon-inline">À venir</span>}
                      </li>
                    )
                  })}
                </ul>

                {/* Bouton "Marquer comme fait" uniquement si contenu disponible */}
                {canMark && !isDone && (
                  <button
                    className="res-mark-btn"
                    type="button"
                    onClick={isCours ? onMarkCoursRead : onMarkExercicesDone}
                  >
                    Marquer comme fait <CheckCircle2 size={16} />
                  </button>
                )}

                {/* Message informatif pour cartes "à venir" */}
                {allSoon && (
                  <p className="res-soon-msg">
                    {isEquatek
                      ? 'Ces sujets seront publiés prochainement.'
                      : 'Ces ressources seront disponibles dans quelques jours.'}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      )}

      {/* ── Vue : Quiz ────────────────────────────────────────── */}
      {subPage === 'quiz' && (
        <div className="subpage-wrap">
          {progress?.quizCompleted && !redoingQuiz ? (
            /* Quiz déjà complété → écran de résultat propre */
            <div className="quiz-already-done">
              <div className="quiz-already-icon">
                {progress.quizScore ?? 0 >= 70 ? <Target size={32} color="#5cffb4" /> : <BrainCircuit size={32} color="#ffd190" />}
              </div>
              <h3>Quiz déjà réalisé</h3>
              <p className="quiz-already-score">
                Tu as obtenu{' '}
                <strong style={{ color: (progress.quizScore ?? 0) >= 70 ? '#5cffb4' : '#ffd190' }}>
                  {progress.quizScore ?? 0}%
                </strong>{' '}
                à ce quiz.
              </p>
              <p className="quiz-already-hint">
                {(progress.quizScore ?? 0) >= 70
                  ? 'Excellent résultat ! Tu peux passer au mode Chrono.'
                  : 'Relis le cours sur les points manqués, puis retente le quiz.'}
              </p>
              <div className="quiz-already-actions">
                <button className="button button-strong" onClick={handleRedoQuiz} type="button">
                  Refaire le quiz
                </button>
                <button
                  className="button button-soft"
                  onClick={() => setSubPage('chrono')}
                  type="button"
                >
                  Mode Chrono →
                </button>
              </div>
            </div>
          ) : (
            /* Quiz actif (premier passage ou après reset) */
            <QuizView
              questions={chapter.quizQuestions}
              chapterId={chapter.id}
              onComplete={handleQuizComplete}
            />
          )}
        </div>
      )}

      {/* ── Vue : Chrono ─────────────────────────────────────── */}
      {subPage === 'chrono' && (
        <div className="subpage-wrap">
          <ChronoMode
            duration={chapter.chronoDuration}
            chapterTitle={chapter.title}
            onComplete={onChronoComplete}
          />
        </div>
      )}

      {/* ── Vue : Sujet Equatek ──────────────────────────────── */}
      {subPage === 'subject' && (
        <div className="subpage-wrap">
          {equatekSubjects[activeSubjectKey] ? (
            <SubjectViewer
              subject={equatekSubjects[activeSubjectKey]}
              onClose={() => setSubPage('overview')}
            />
          ) : (
            /* Sujet demandé inexistant — ne devrait pas arriver */
            <div className="subject-missing">
              <FileText size={48} strokeWidth={1} style={{ opacity: 0.5, marginBottom: 12 }} />
              <p>Ce sujet n'est pas encore disponible.</p>
              <button className="button button-soft" onClick={() => setSubPage('overview')} type="button">
                <ChevronLeft size={16} strokeWidth={2} /> Retour
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import { chapters, pathways } from './data'
import { useProgress } from './useProgress'
import { ChapterCard } from './components/ChapterCard'
import { ChapterPage } from './components/ChapterPage'
import type { Pathway } from './types'

type Page = 'home' | 'chapter'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null)
  const [activePathId, setActivePathId] = useState<string>(pathways[0].id)

  const {
    progress,
    markCoursRead,
    markExercicesDone,
    setQuizResult,
    markChronoCompleted,
    getChapterCompletion,
  } = useProgress()

  const activePath: Pathway = pathways.find((p) => p.id === activePathId) ?? pathways[0]
  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null

  const totalCompletion = chapters.length
    ? Math.round(chapters.reduce((sum, c) => sum + getChapterCompletion(c.id), 0) / chapters.length)
    : 0

  const openChapter = (id: string) => {
    setActiveChapterId(id)
    setPage('chapter')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="platform">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      {/* ─── NAV ─── */}
      <header className="hero">
        <nav className="hero-nav">
          <p className="brand" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
            Equatek
          </p>
          <div className="hero-nav-links">
            <button type="button" onClick={() => setPage('home')} className={`nav-btn ${page === 'home' ? 'nav-btn--active' : ''}`}>
              Chapitres
            </button>
            <a className="nav-btn" href="#pathways">Parcours</a>
          </div>
          <div className="hero-nav-progress">
            <span className="hero-nav-progress-label">Progression globale</span>
            <div className="hero-nav-progress-bar">
              <div className="hero-nav-progress-fill" style={{ width: `${totalCompletion}%` }} />
            </div>
            <span className="hero-nav-progress-pct">{totalCompletion}%</span>
          </div>
        </nav>

        {page === 'home' && (
          <section className="hero-main">
            <div>
              <p className="eyebrow">Terminale — Mathématiques</p>
              <h1>On avance chapitre par chapitre, avec cours, exos, quiz et sujets Bac.</h1>
              <p className="hero-text">
                Pour chaque chapitre de maths en Terminale : cours ciblé, exercices progressifs, quiz
                de validation, sujets Bac et simulation chrono.
              </p>
              <div className="hero-actions">
                <button className="button button-strong" type="button"
                  onClick={() => openChapter(chapters[0].id)}>
                  Commencer le premier chapitre
                </button>
                <a className="button button-soft" href="#pathways">Voir le parcours annuel</a>
              </div>
            </div>

            <aside className="hero-panel">
              <p>Objectif actuel</p>
              <h2>Transformer chaque chapitre en points gagnés au Bac.</h2>
              <ul>
                <li>1 chapitre à la fois, sans dispersion</li>
                <li>Validation par quiz et sujet chrono</li>
                <li>Progression visible semaine après semaine</li>
              </ul>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-value">{chapters.filter((c) => getChapterCompletion(c.id) === 100).length}</span>
                  <span className="stat-label">chapitres validés</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{chapters.filter((c) => progress[c.id]?.quizCompleted).length}</span>
                  <span className="stat-label">quiz réussis</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{chapters.filter((c) => progress[c.id]?.chronoCompleted).length}</span>
                  <span className="stat-label">chronos effectués</span>
                </div>
              </div>
            </aside>
          </section>
        )}
      </header>

      {/* ─── CHAPTER PAGE ─── */}
      {page === 'chapter' && activeChapter && (
        <section className="section">
          <ChapterPage
            chapter={activeChapter}
            progress={progress[activeChapter.id]}
            completion={getChapterCompletion(activeChapter.id)}
            onMarkCoursRead={() => markCoursRead(activeChapter.id)}
            onMarkExercicesDone={() => markExercicesDone(activeChapter.id)}
            onQuizComplete={(score) => setQuizResult(activeChapter.id, score)}
            onChronoComplete={() => markChronoCompleted(activeChapter.id)}
            onBack={() => setPage('home')}
          />
        </section>
      )}

      {/* ─── HOME: Chapter list ─── */}
      {page === 'home' && (
        <>
          <section className="section" id="chapters">
            <div className="section-head">
              <p className="eyebrow">Chapitres de maths</p>
              <h2>Choisis un chapitre et commence à travailler.</h2>
            </div>
            <div className="chapter-cards-grid">
              {chapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  completion={getChapterCompletion(chapter.id)}
                  progress={progress[chapter.id]}
                  onOpen={() => openChapter(chapter.id)}
                />
              ))}
            </div>
          </section>

          {/* ─── PATHWAYS ─── */}
          <section className="section" id="pathways">
            <div className="section-head">
              <p className="eyebrow">Parcours pédagogique</p>
              <h2>Progression annuelle en maths Terminale.</h2>
            </div>
            <div className="pathway-tabs">
              {pathways.map((path) => (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setActivePathId(path.id)}
                  className={`pathway-tab ${path.id === activePathId ? 'active' : ''}`}
                >
                  <span>{path.label}</span>
                  <strong>{path.badge}</strong>
                </button>
              ))}
            </div>
            <article className="pathway-detail">
              <header>
                <p className="eyebrow">{activePath.badge}</p>
                <h3>{activePath.label}</h3>
                <p>{activePath.objective}</p>
              </header>
              <div className="detail-grid">
                <div>
                  <h4>Thèmes prioritaires</h4>
                  <ul>{activePath.themes.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
                <div>
                  <h4>Objectifs de résultat</h4>
                  <ul>{activePath.targets.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
                <div>
                  <h4>Rythme hebdomadaire conseillé</h4>
                  <ul>{activePath.weeklyPlan.map((s) => <li key={s}>{s}</li>)}</ul>
                </div>
              </div>
              {activePath.chapterIds.length > 0 && (
                <div className="pathway-chapters">
                  <p className="pathway-chapters-label">Chapitres liés</p>
                  <div className="pathway-chapters-list">
                    {activePath.chapterIds.map((cid) => {
                      const c = chapters.find((ch) => ch.id === cid)
                      if (!c) return null
                      return (
                        <button key={cid} className="pathway-chapter-btn" type="button"
                          onClick={() => openChapter(cid)}>
                          {c.title} →
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </article>
          </section>
        </>
      )}
    </main>
  )
}

import { useState, useEffect } from 'react'
import './App.css'
import { chapters, pathways } from './data'
import { useProgress } from './useProgress'
import { ChapterCard } from './components/ChapterCard'
import { ChapterPage } from './components/ChapterPage'
import type { Pathway } from './types'

type Page = 'home' | 'chapter'

/* Type pour l'événement d'installation PWA (non-standard) */
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/* ── Routing hash ─────────────────────────────────────────── */
function parseHash(): { page: Page; chapterId: string | null } {
  const hash = window.location.hash.slice(1) // retire le "#"
  if (hash.startsWith('/chapter/')) {
    const id = hash.slice('/chapter/'.length)
    if (chapters.find((c) => c.id === id)) {
      return { page: 'chapter', chapterId: id }
    }
  }
  return { page: 'home', chapterId: null }
}

export default function App() {
  const initial = parseHash()
  const [page, setPage] = useState<Page>(initial.page)
  const [activeChapterId, setActiveChapterId] = useState<string | null>(initial.chapterId)
  const [activePathId, setActivePathId] = useState<string>(pathways[0].id)
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  const {
    progress,
    markCoursRead,
    markExercicesDone,
    setQuizResult,
    resetQuiz,
    markChronoCompleted,
    getChapterCompletion,
  } = useProgress()

  /* ── Hash routing : écoute retour/avance navigateur ─────── */
  useEffect(() => {
    const handleHashChange = () => {
      const { page: p, chapterId } = parseHash()
      setPage(p)
      setActiveChapterId(chapterId)
      if (p === 'home') window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  /* ── PWA install prompt ──────────────────────────────────── */
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setInstallPrompt(null)
    })
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const activePath: Pathway = pathways.find((p) => p.id === activePathId) ?? pathways[0]
  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null

  const totalCompletion = chapters.length
    ? Math.round(chapters.reduce((sum, c) => sum + getChapterCompletion(c.id), 0) / chapters.length)
    : 0

  /* ── Navigation ─────────────────────────────────────────── */
  const openChapter = (id: string) => {
    setActiveChapterId(id)
    setPage('chapter')
    window.location.hash = `/chapter/${id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setPage('home')
    window.location.hash = '/'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPathways = () => {
    if (page === 'chapter') {
      goHome()
      setTimeout(() => {
        document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInstall = async () => {
    if (!installPrompt) return
    await installPrompt.prompt()
    setInstallPrompt(null)
  }

  return (
    <main className="platform">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      {/* ── Bandeau d'installation PWA ── */}
      {installPrompt && !isInstalled && (
        <div className="install-banner">
          <div className="install-banner-text">
            <span className="install-banner-icon">📲</span>
            <div>
              <strong>Installer Equatek</strong>
              <p>Accès rapide depuis ton écran d'accueil, fonctionne hors-ligne.</p>
            </div>
          </div>
          <div className="install-banner-actions">
            <button className="button button-strong install-btn" onClick={handleInstall} type="button">
              Installer
            </button>
            <button className="install-dismiss" onClick={() => setInstallPrompt(null)} type="button" aria-label="Fermer">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ─── NAV ──────────────────────────────────────────── */}
      <header className="hero">
        <nav className="hero-nav">
          <p className="brand" onClick={goHome} style={{ cursor: 'pointer' }} role="link" tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && goHome()}>
            Equatek
          </p>
          <div className="hero-nav-links">
            <button
              type="button"
              onClick={goHome}
              className={`nav-btn ${page === 'home' ? 'nav-btn--active' : ''}`}
            >
              Chapitres
            </button>
            <button type="button" className="nav-btn" onClick={goToPathways}>
              Parcours
            </button>
          </div>
          <div className="hero-nav-progress">
            <span className="hero-nav-progress-label">Progression globale</span>
            <div className="hero-nav-progress-bar" role="progressbar" aria-valuenow={totalCompletion} aria-valuemin={0} aria-valuemax={100}>
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
                <button
                  className="button button-strong"
                  type="button"
                  onClick={() => openChapter(chapters[0].id)}
                >
                  Commencer le premier chapitre
                </button>
                <button className="button button-soft" type="button" onClick={goToPathways}>
                  Voir le parcours annuel
                </button>
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
                  <span className="stat-value">
                    {chapters.filter((c) => getChapterCompletion(c.id) === 100).length}
                  </span>
                  <span className="stat-label">chapitres validés</span>
                </div>
                <div className="stat">
                  <span className="stat-value">
                    {chapters.filter((c) => progress[c.id]?.quizCompleted).length}
                  </span>
                  <span className="stat-label">quiz réussis</span>
                </div>
                <div className="stat">
                  <span className="stat-value">
                    {chapters.filter((c) => progress[c.id]?.chronoCompleted).length}
                  </span>
                  <span className="stat-label">chronos effectués</span>
                </div>
              </div>
            </aside>
          </section>
        )}
      </header>

      {/* ─── PAGE CHAPITRE ────────────────────────────────── */}
      {page === 'chapter' && activeChapter && (
        <section className="section">
          <ChapterPage
            chapter={activeChapter}
            progress={progress[activeChapter.id]}
            completion={getChapterCompletion(activeChapter.id)}
            onMarkCoursRead={() => markCoursRead(activeChapter.id)}
            onMarkExercicesDone={() => markExercicesDone(activeChapter.id)}
            onQuizComplete={(score) => setQuizResult(activeChapter.id, score)}
            onResetQuiz={() => resetQuiz(activeChapter.id)}
            onChronoComplete={() => markChronoCompleted(activeChapter.id)}
            onBack={goHome}
          />
        </section>
      )}

      {/* ─── ACCUEIL : liste des chapitres + parcours ─────── */}
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

              {activePath.chapterIds.length > 0 ? (
                <div className="pathway-chapters">
                  <p className="pathway-chapters-label">Chapitres liés</p>
                  <div className="pathway-chapters-list">
                    {activePath.chapterIds.map((cid) => {
                      const c = chapters.find((ch) => ch.id === cid)
                      if (!c) return null
                      return (
                        <button
                          key={cid}
                          className="pathway-chapter-btn"
                          type="button"
                          onClick={() => openChapter(cid)}
                        >
                          {c.title} →
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <div className="pathway-empty">
                  <span>🚧</span>
                  <p>Les chapitres de ce trimestre arrivent bientôt.</p>
                </div>
              )}
            </article>
          </section>
        </>
      )}

      {/* ─── Navigation mobile (bottom bar) ──────────────── */}
      <nav className="bottom-nav" aria-label="Navigation principale">
        <button
          className={`bottom-nav-btn ${page === 'home' ? 'active' : ''}`}
          onClick={goHome}
          type="button"
        >
          <span className="bottom-nav-icon">📚</span>
          <span>Chapitres</span>
        </button>
        <button
          className="bottom-nav-btn"
          onClick={goToPathways}
          type="button"
        >
          <span className="bottom-nav-icon">🗺️</span>
          <span>Parcours</span>
        </button>
        <div className="bottom-nav-progress">
          <div className="bottom-nav-bar">
            <div className="bottom-nav-bar-fill" style={{ width: `${totalCompletion}%` }} />
          </div>
          <span>{totalCompletion}%</span>
        </div>
      </nav>
    </main>
  )
}

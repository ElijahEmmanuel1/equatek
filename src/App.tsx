import { useState, useEffect } from 'react'
import './App.css'
import { chapters, pathways } from './data'
import { useProgress } from './useProgress'
import { ChapterCard } from './components/ChapterCard'
import { ChapterPage } from './components/ChapterPage'
import type { Pathway, SubjectId } from './types'

type Page = 'home' | 'chapter'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const SUBJECTS: { id: SubjectId; label: string; emoji: string; available: boolean }[] = [
  { id: 'maths',    label: 'Maths',    emoji: '∑',  available: true  },
  { id: 'physique', label: 'Physique', emoji: '⚛️', available: false },
  { id: 'chimie',   label: 'Chimie',   emoji: '🧪', available: false },
]

function parseHash(): { page: Page; chapterId: string | null; subject: SubjectId } {
  const hash = window.location.hash.slice(1)
  // Format: /maths/chapter/chap1  or /maths
  const m = hash.match(/^\/(maths|physique|chimie)(?:\/chapter\/(.+))?$/)
  if (m) {
    const subject = m[1] as SubjectId
    const chapterId = m[2] ?? null
    if (chapterId && chapters.find((c) => c.id === chapterId)) {
      return { page: 'chapter', chapterId, subject }
    }
    return { page: 'home', chapterId: null, subject }
  }
  // Legacy hash compat: /chapter/chap1
  if (hash.startsWith('/chapter/')) {
    const id = hash.slice('/chapter/'.length)
    if (chapters.find((c) => c.id === id)) return { page: 'chapter', chapterId: id, subject: 'maths' }
  }
  return { page: 'home', chapterId: null, subject: 'maths' }
}

export default function App() {
  const initial = parseHash()
  const [page, setPage] = useState<Page>(initial.page)
  const [activeChapterId, setActiveChapterId] = useState<string | null>(initial.chapterId)
  const [activePathId, setActivePathId] = useState<string>(pathways[0].id)
  const [activeSubject, setActiveSubject] = useState<SubjectId>(initial.subject)
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  const {
    progress, markCoursRead, markExercicesDone,
    setQuizResult, resetQuiz, markChronoCompleted, getChapterCompletion,
  } = useProgress()

  useEffect(() => {
    const onHash = () => {
      const { page: p, chapterId, subject } = parseHash()
      setPage(p); setActiveChapterId(chapterId); setActiveSubject(subject)
      if (p === 'home') window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const handler = (e: Event) => { e.preventDefault(); setInstallPrompt(e as BeforeInstallPromptEvent) }
    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => { setIsInstalled(true); setInstallPrompt(null) })
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  // Filtrer les chapitres selon la matière active
  const visibleChapters = chapters.filter((c) => (c.subjectId ?? 'maths') === activeSubject)

  const activePath: Pathway = pathways.find((p) => p.id === activePathId) ?? pathways[0]
  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null
  const totalCompletion = visibleChapters.length
    ? Math.round(visibleChapters.reduce((sum, c) => sum + getChapterCompletion(c.id), 0) / visibleChapters.length)
    : 0

  const openChapter = (id: string) => {
    setActiveChapterId(id); setPage('chapter')
    window.location.hash = `/${activeSubject}/chapter/${id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setPage('home')
    window.location.hash = `/${activeSubject}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const switchSubject = (id: SubjectId) => {
    if (!SUBJECTS.find((s) => s.id === id)?.available) return
    setActiveSubject(id)
    setPage('home')
    window.location.hash = `/${id}`
    window.scrollTo({ top: 0 })
  }

  const goToPathways = () => {
    if (page === 'chapter') {
      goHome()
      setTimeout(() => document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' }), 130)
    } else {
      document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInstall = async () => {
    if (!installPrompt) return
    await installPrompt.prompt()
    setInstallPrompt(null)
  }

  const validatedCount   = visibleChapters.filter((c) => getChapterCompletion(c.id) === 100).length
  const quizDoneCount    = visibleChapters.filter((c) => progress[c.id]?.quizCompleted).length
  const chronoDoneCount  = visibleChapters.filter((c) => progress[c.id]?.chronoCompleted).length
  const isFirstVisit     = totalCompletion === 0

  return (
    <div className="app">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      {/* ── Bandeau install PWA ──────────────────────────── */}
      {installPrompt && !isInstalled && (
        <div className="install-banner">
          <div className="install-banner-text">
            <span className="install-banner-icon">📲</span>
            <div>
              <strong>Installer Equatek</strong>
              <p>Accès rapide &amp; hors-ligne depuis ton écran d'accueil.</p>
            </div>
          </div>
          <div className="install-banner-actions">
            <button className="button button-strong install-btn" onClick={handleInstall} type="button">
              Installer
            </button>
            <button className="install-dismiss" onClick={() => setInstallPrompt(null)} type="button" aria-label="Fermer">✕</button>
          </div>
        </div>
      )}

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="app-header">
        <p className="brand" onClick={goHome} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && goHome()}>
          Equatek
        </p>

        {/* Onglets matière */}
        <nav className="subject-tabs" aria-label="Matières">
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={[
                'subject-tab',
                s.id === activeSubject ? 'subject-tab--active' : '',
                !s.available ? 'subject-tab--locked' : '',
              ].join(' ')}
              onClick={() => switchSubject(s.id)}
              title={!s.available ? 'Bientôt disponible' : s.label}
              disabled={!s.available}
            >
              <span className="subject-tab-emoji">{s.emoji}</span>
              <span className="subject-tab-label">{s.label}</span>
              {!s.available && <span className="subject-tab-soon">Bientôt</span>}
            </button>
          ))}
        </nav>

        <div className="header-progress">
          <div className="header-progress-track"
            role="progressbar" aria-valuenow={totalCompletion} aria-valuemin={0} aria-valuemax={100}>
            <div className="header-progress-fill" style={{ width: `${totalCompletion}%` }} />
          </div>
          <span className="header-pct">{totalCompletion}%</span>
        </div>
      </header>

      {/* ── Contenu principal ─────────────────────────────── */}
      <main className="app-content">

        {/* ── PAGE ACCUEIL ─────────────────────────────────── */}
        {page === 'home' && (
          <div className="home-page page-enter">

            {/* Stats */}
            {isFirstVisit ? (
              <div className="stats-strip stats-strip--empty">
                <div className="stat-card">
                  <span className="stat-val">{visibleChapters.length}</span>
                  <span className="stat-lbl">chapitres disponibles</span>
                </div>
                <div className="stat-card">
                  <span className="stat-val">3</span>
                  <span className="stat-lbl">activités par chapitre</span>
                </div>
                <div className="stat-card">
                  <span className="stat-val">∞</span>
                  <span className="stat-lbl">tentatives quiz</span>
                </div>
              </div>
            ) : (
              <div className="stats-strip">
                <div className="stat-card">
                  <span className="stat-val">{validatedCount}</span>
                  <span className="stat-lbl">chapitres validés</span>
                </div>
                <div className="stat-card">
                  <span className="stat-val">{quizDoneCount}</span>
                  <span className="stat-lbl">quiz réussis</span>
                </div>
                <div className="stat-card">
                  <span className="stat-val">{chronoDoneCount}</span>
                  <span className="stat-lbl">chronos effectués</span>
                </div>
              </div>
            )}

            {/* CTA première visite */}
            {isFirstVisit && visibleChapters.length > 0 && (
              <div className="home-cta">
                <p className="eyebrow">Terminale — Mathématiques</p>
                <h2>Un chapitre à la fois, des points gagnés au Bac.</h2>
                <p>Cours interactif, quiz, mode chrono et sujets d'entraînement pour chaque chapitre.</p>
                <div className="home-cta-actions">
                  <button className="button button-strong" type="button"
                    onClick={() => openChapter(visibleChapters[0].id)}>
                    Commencer le Chap. 1 →
                  </button>
                  <button className="button button-soft" type="button" onClick={goToPathways}>
                    Voir le parcours
                  </button>
                </div>
              </div>
            )}

            {/* Message matière non disponible */}
            {!SUBJECTS.find((s) => s.id === activeSubject)?.available && (
              <div className="subject-unavailable">
                <span className="subject-unavailable-emoji">🚧</span>
                <h3>Bientôt disponible</h3>
                <p>Les chapitres de {SUBJECTS.find((s) => s.id === activeSubject)?.label} arrivent prochainement.</p>
                <button className="button button-soft" type="button" onClick={() => switchSubject('maths')}>
                  Revenir aux Maths
                </button>
              </div>
            )}

            {/* Liste des chapitres */}
            {visibleChapters.length > 0 && (
              <div>
                <div className="home-section-head">
                  <p className="eyebrow">
                    {SUBJECTS.find((s) => s.id === activeSubject)?.label ?? 'Maths'} — Terminale
                  </p>
                  <h2>Choisis ton chapitre</h2>
                </div>
                <div className="chapter-list">
                  {visibleChapters.map((chapter) => (
                    <ChapterCard
                      key={chapter.id}
                      chapter={chapter}
                      completion={getChapterCompletion(chapter.id)}
                      progress={progress[chapter.id]}
                      onOpen={() => openChapter(chapter.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Parcours */}
            <div id="pathways">
              <div className="home-section-head">
                <p className="eyebrow">Parcours pédagogique</p>
                <h2>Progression annuelle</h2>
              </div>
              <div className="pathway-tabs">
                {pathways.map((path) => (
                  <button key={path.id} type="button"
                    onClick={() => setActivePathId(path.id)}
                    className={`pathway-tab ${path.id === activePathId ? 'active' : ''}`}>
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
                    <h4>Objectifs</h4>
                    <ul>{activePath.targets.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Rythme hebdomadaire</h4>
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
                          <button key={cid} className="pathway-chapter-btn" type="button"
                            onClick={() => openChapter(cid)}>
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
            </div>

          </div>
        )}

        {/* ── PAGE CHAPITRE ─────────────────────────────────── */}
        {page === 'chapter' && activeChapter && (
          <div className="page-enter">
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
          </div>
        )}
      </main>

      {/* ── Bottom nav ──────────────────────────────────────── */}
      <nav className="bottom-nav" aria-label="Navigation">
        {/* Chapitres */}
        <button type="button"
          className={`bnav-btn ${page === 'home' ? 'active' : ''}`}
          onClick={goHome}>
          <svg className="bnav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <span>Chapitres</span>
        </button>

        <div className="bnav-sep" />

        {/* Parcours */}
        <button type="button" className="bnav-btn" onClick={goToPathways}>
          <svg className="bnav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
            <line x1="9" y1="3" x2="9" y2="18"/>
            <line x1="15" y1="6" x2="15" y2="21"/>
          </svg>
          <span>Parcours</span>
        </button>

        <div className="bnav-sep" />

        {/* Progression */}
        <div className="bnav-progress">
          <div className="bnav-progress-track">
            <div className="bnav-progress-fill" style={{ width: `${totalCompletion}%` }} />
          </div>
          <span>{totalCompletion}%</span>
        </div>
      </nav>
    </div>
  )
}

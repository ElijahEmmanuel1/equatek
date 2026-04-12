import { useState } from 'react'
import './App.css'

const termMathPathways = [
  {
    id: 'trim1',
    label: 'Terminale - Fondations',
    badge: 'Trimestre 1',
    objective: 'Installer des bases solides en Terminale maths pour éviter les lacunes.',
    themes: ['Dérivation et convexité', 'Suites numériques', 'Fonctions exponentielles', 'Raisonnement par récurrence'],
    targets: ['Démarrer solide', 'Être prêt pour le premier bac blanc'],
    weeklyPlan: ['2 cours ciblés', '2 séries d exercices', '1 quiz validation'],
  },
  {
    id: 'trim2',
    label: 'Terminale - Maîtrise',
    badge: 'Trimestre 2',
    objective: 'Renforcer les méthodes Bac et stabiliser la qualité de rédaction.',
    themes: ['Primitives et intégration', 'Probabilités conditionnelles', 'Variables aléatoires', 'Combinatoire'],
    targets: ['Élever la moyenne', 'Rendre des copies propres et complètes'],
    weeklyPlan: ['3 blocs de travail', '2 sujets type Bac', '1 séance de correction active'],
  },
  {
    id: 'trim3',
    label: 'Terminale - Performance Bac',
    badge: 'Trimestre 3',
    objective: 'Passer en mode performance sur annales, timing et stratégies de sujets maths.',
    themes: ['Annales maths spécialité', 'Sujets zéro', 'Pièges fréquents', 'Stratégie de sujet'],
    targets: ['Maximiser la note au Bac', 'Arriver serein le jour J'],
    weeklyPlan: ['2 sujets complets', '1 oral de 20 min', '1 bilan des erreurs critiques'],
  },
] as const

const chapters = [
  {
    id: 'chap1',
    title: 'Dérivation et convexité',
    period: 'Septembre',
    goal: 'Maîtriser les variations, extremums, tangentes et courbes.',
    resources: {
      cours: ['Résumé de cours en 12 fiches', 'Méthodes de résolution guidées', 'Erreurs fréquentes à éviter'],
      exercices: ['18 exercices progressifs', '6 problèmes type Bac', '3 entraînements chrono'],
      quiz: ['Quiz notions essentielles', 'Quiz dérivées usuelles', 'Quiz interprétation graphique'],
      bac: ['Sujet Bac France 2024 - Exercice dérivation', 'Sujet Bac Centres étrangers 2023'],
      equatek: ['Sujet Equatek A1', 'Sujet Equatek A2'],
    },
  },
  {
    id: 'chap2',
    title: 'Suites numériques',
    period: 'Octobre',
    goal: 'Analyser convergence, récurrence et modélisation par suites.',
    resources: {
      cours: ['Fiche convergence', 'Méthode récurrence complète', 'Suites arithmético-géométriques'],
      exercices: ['15 exercices corrigés', '8 exercices d approfondissement', '2 devoirs surveillés blancs'],
      quiz: ['Quiz de définitions', 'Quiz calcul de limite', 'Quiz récurrence'],
      bac: ['Sujet Bac Polynésie 2022', 'Sujet Bac Amérique du Nord 2023'],
      equatek: ['Sujet Equatek B1', 'Sujet Equatek B2'],
    },
  },
  {
    id: 'chap3',
    title: 'Probabilités conditionnelles',
    period: 'Novembre',
    goal: 'Raisonner proprement avec événements, indépendance et loi binomiale.',
    resources: {
      cours: ['Arbres et tableaux', 'Conditionnement et Bayes', 'Loi binomiale et espérance'],
      exercices: ['20 exercices ciblés', '5 sujets mixtes', '2 études de cas'],
      quiz: ['Quiz arbre pondéré', 'Quiz indépendance', 'Quiz loi binomiale'],
      bac: ['Sujet Bac Métropole 2021', 'Sujet Bac Asie 2024'],
      equatek: ['Sujet Equatek C1', 'Sujet Equatek C2'],
    },
  },
] as const

const resourceBlocks = [
  { key: 'cours', label: 'Cours', icon: 'Cours' },
  { key: 'exercices', label: 'Exercices', icon: 'Exos' },
  { key: 'quiz', label: 'Quiz', icon: 'Quiz' },
  { key: 'bac', label: 'Sujets de Bac', icon: 'Bac' },
  { key: 'equatek', label: 'Sujets Equatek', icon: 'EQK' },
] as const

const termMathTools = [
  {
    title: 'Progression chapitre par chapitre',
    description: 'Tu avances chapitre par chapitre avec des objectifs et validations nettes.',
  },
  {
    title: 'Mode chrono',
    description: 'Simulation de sujet de Bac en temps réel, barème et correction structurée.',
  },
  {
    title: 'Suivi des erreurs',
    description: 'Chaque erreur est classée par notion pour cibler tes prochaines séances.',
  },
  {
    title: 'Parcours personnalisé',
    description: 'Le planning s adapte selon les quiz et les résultats aux sujets.',
  },
] as const

function App() {
  const [activePathId, setActivePathId] = useState<(typeof termMathPathways)[number]['id']>('trim1')
  const [activeChapterId, setActiveChapterId] = useState<(typeof chapters)[number]['id']>('chap1')
  const activePath = termMathPathways.find((path) => path.id === activePathId) ?? termMathPathways[0]
  const activeChapter = chapters.find((chapter) => chapter.id === activeChapterId) ?? chapters[0]

  return (
    <main className="platform">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <header className="hero">
        <nav className="hero-nav">
          <p className="brand">Equatek</p>
          <div className="hero-nav-links">
            <a href="#pathways">Parcours</a>
            <a href="#chapters">Chapitres</a>
            <a href="#concours">Concours</a>
          </div>
        </nav>

        <section className="hero-main">
          <div>
            <p className="eyebrow">Terminale - Mathématiques</p>
            <h1>On avance chapitre par chapitre, avec cours, exos, quiz et sujets Bac.</h1>
            <p className="hero-text">
              Pour chaque chapitre de maths en Terminale: tu as un parcours clair avec contenus de cours,
              entraînements, quiz de validation, sujets de Bac et sujets Equatek.
            </p>
            <div className="hero-actions">
              <a className="button button-strong" href="#chapters">
                Commencer un chapitre
              </a>
              <a className="button button-soft" href="#concours">
                Préparer le Bac
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p>Objectif actuel</p>
            <h2>Transformer chaque chapitre en points gagnés au Bac.</h2>
            <ul>
              <li>1 chapitre a la fois, sans dispersion</li>
              <li>Validation par quiz et sujet</li>
              <li>Progression visible semaine après semaine</li>
            </ul>
          </aside>
        </section>
      </header>

      <section className="section" id="pathways">
        <div className="section-head">
          <p className="eyebrow">Parcours pédagogique</p>
          <h2>Progression annuelle en maths Terminale.</h2>
        </div>

        <div className="pathway-tabs">
          {termMathPathways.map((path) => (
            <button
              key={path.id}
              type="button"
              onClick={() => setActivePathId(path.id)}
              className={path.id === activePathId ? 'pathway-tab active' : 'pathway-tab'}
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
              <ul>
                {activePath.themes.map((theme) => (
                  <li key={theme}>{theme}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Objectifs de résultat</h4>
              <ul>
                {activePath.targets.map((target) => (
                  <li key={target}>{target}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Rythme hebdomadaire conseillé</h4>
              <ul>
                {activePath.weeklyPlan.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="section" id="chapters">
        <div className="section-head">
          <p className="eyebrow">Chapitres de maths</p>
          <h2>Choisis un chapitre puis travaille les 5 blocs essentiels.</h2>
        </div>

        <div className="chapter-tabs">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => setActiveChapterId(chapter.id)}
              className={chapter.id === activeChapterId ? 'chapter-tab active' : 'chapter-tab'}
            >
              <span>{chapter.title}</span>
              <strong>{chapter.period}</strong>
            </button>
          ))}
        </div>

        <article className="chapter-detail">
          <header>
            <p className="eyebrow">{activeChapter.period}</p>
            <h3>{activeChapter.title}</h3>
            <p>{activeChapter.goal}</p>
          </header>

          <div className="resource-grid">
            {resourceBlocks.map((block) => (
              <article key={block.key} className="resource-card">
                <div className="resource-top">
                  <span>{block.icon}</span>
                  <h4>{block.label}</h4>
                </div>
                <ul>
                  {activeChapter.resources[block.key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section" id="concours">
        <div className="section-head">
          <p className="eyebrow">Mode Bac</p>
          <h2>Préparer le Bac de maths avec une méthode stable.</h2>
        </div>

        <div className="tool-grid">
          {termMathTools.map((tool) => (
            <article key={tool.title} className="tool-card">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App

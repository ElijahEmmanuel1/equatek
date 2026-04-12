import { useState } from 'react'
import './App.css'

const pathways = [
  {
    id: 'troisieme',
    label: 'Troisième',
    badge: 'Brevet',
    objective: 'Construire des bases solides et des automatismes propres.',
    themes: ['Fractions et puissances', 'Géométrie et théorème de Thalès', 'Chimie des solutions', 'Électricité simple'],
    targets: ['Réussir le Brevet', 'Passer en Seconde avec confiance'],
    weeklyPlan: ['2 cours courts', '3 exercices guidés', '1 devoir bilan'],
  },
  {
    id: 'lycee',
    label: 'Lycée',
    badge: 'Bac',
    objective: 'Monter en abstraction et maîtriser les chapitres clés du Bac.',
    themes: ['Fonctions et dérivées', 'Mécanique et énergie', 'Acide-base et redox', 'Probabilités conditionnelles'],
    targets: ['Performance au Bac', 'Préparation à Parcoursup scientifique'],
    weeklyPlan: ['3 cours ciblés', '2 sujets type Bac', '1 correction active'],
  },
  {
    id: 'sup',
    label: 'Post-bac scientifique',
    badge: 'L1/L2',
    objective: 'Structurer les méthodes universitaires avant la spécialisation.',
    themes: ['Algèbre linéaire', 'Intégration et EDO', 'Thermodynamique', 'Cinétique chimique'],
    targets: ['Valider les UE fondamentales', 'Préparer les passerelles vers concours'],
    weeklyPlan: ['2 fiches méthode', '2 TD chronométrés', '1 oral blanc'],
  },
  {
    id: 'cpge',
    label: 'CPGE MPSI/MP',
    badge: 'Concours',
    objective: 'Rédiger proprement, aller vite, tenir sous pression concours.',
    themes: ['Analyse avancée', 'Mécanique et électromagnétisme', 'Chimie de concours', 'Exercices oraux de colles'],
    targets: ['Mines, Centrale, CCP', 'Oral maîtrisé et stratégie de sujet'],
    weeklyPlan: ['4 blocs intensifs', '2 annales complètes', '1 simulation de colle'],
  },
] as const

const subjectPillars = [
  {
    name: 'Maths',
    tone: 'tone-maths',
    items: ['Cours progressif par niveau', 'Exercices gradués', 'Méthodes de rédaction'],
    progress: 82,
  },
  {
    name: 'Physique',
    tone: 'tone-physics',
    items: ['Modélisation guidée', 'TP expliqués', 'Sujets type concours'],
    progress: 76,
  },
  {
    name: 'Chimie',
    tone: 'tone-chemistry',
    items: ['Mécanismes et bilans', 'Fiches flash', 'Annales corrigées'],
    progress: 71,
  },
] as const

const contestTools = [
  {
    title: 'Annales intelligentes',
    description: 'Filtre par niveau, thème et difficulté pour travailler exactement ce dont tu as besoin.',
  },
  {
    title: 'Mode chrono',
    description: 'Simulation d’épreuve avec timer, barème et correction structurée.',
  },
  {
    title: 'Prépa orale',
    description: 'Questions de colle, relances, et grille d’évaluation de la réponse.',
  },
  {
    title: 'Tableau de progression',
    description: 'Suivi des chapitres, lacunes critiques et recommandations de séances.',
  },
] as const

function App() {
  const [activePathId, setActivePathId] = useState<(typeof pathways)[number]['id']>('troisieme')
  const activePath = pathways.find((path) => path.id === activePathId) ?? pathways[0]

  return (
    <main className="platform">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <header className="hero">
        <nav className="hero-nav">
          <p className="brand">Equatek</p>
          <div className="hero-nav-links">
            <a href="#pathways">Parcours</a>
            <a href="#subjects">Matières</a>
            <a href="#concours">Concours</a>
          </div>
        </nav>

        <section className="hero-main">
          <div>
            <p className="eyebrow">Troisième jusqu’en CPGE</p>
            <h1>Une plateforme unique pour préparer examens et concours scientifiques.</h1>
            <p className="hero-text">
              Tu voulais une vraie progression continue: on couvre les bases collège, la montée en niveau lycée,
              puis la performance concours en MPSI/MP avec des méthodes adaptées à chaque étape.
            </p>
            <div className="hero-actions">
              <a className="button button-strong" href="#pathways">
                Choisir mon niveau
              </a>
              <a className="button button-soft" href="#concours">
                Voir le mode concours
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p>Objectif actuel</p>
            <h2>Performance régulière, pas révision panique.</h2>
            <ul>
              <li>Plan de travail hebdomadaire auto-adapté</li>
              <li>Exercices corrigés et commentés</li>
              <li>Suivi de progression par compétence</li>
            </ul>
          </aside>
        </section>
      </header>

      <section className="section" id="pathways">
        <div className="section-head">
          <p className="eyebrow">Parcours pédagogique</p>
          <h2>Ton chemin du Brevet aux concours CPGE.</h2>
        </div>

        <div className="pathway-tabs">
          {pathways.map((path) => (
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

      <section className="section" id="subjects">
        <div className="section-head">
          <p className="eyebrow">Matières</p>
          <h2>Maths, Physique, Chimie: mêmes standards, niveaux différents.</h2>
        </div>

        <div className="pillar-grid">
          {subjectPillars.map((pillar) => (
            <article key={pillar.name} className={`pillar ${pillar.tone}`}>
              <h3>{pillar.name}</h3>
              <ul>
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="progress-wrap">
                <span>Bibliothèque prête</span>
                <strong>{pillar.progress}%</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: `${pillar.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="concours">
        <div className="section-head">
          <p className="eyebrow">Préparation concours</p>
          <h2>Une UX faite pour performer sous contrainte.</h2>
        </div>

        <div className="tool-grid">
          {contestTools.map((tool) => (
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

import { useState } from 'react'
import './App.css'

const pathways = [
  {
    id: 'term-start',
    label: 'Terminale - Mise en route',
    badge: 'Trimestre 1',
    objective: 'Installer les bases de Terminale en maths et physique-chimie sans lacunes.',
    themes: ['Dérivation et convexité', 'Suites et raisonnement', 'Cinématique et dynamique', 'Réactions acide-base'],
    targets: ['Démarrer solide', 'Être prêt pour le premier bac blanc'],
    weeklyPlan: ['2 cours ciblés', '2 séries d exercices', '1 mini devoir chronométré'],
  },
  {
    id: 'term-mid',
    label: 'Terminale - Consolidation',
    badge: 'Trimestre 2',
    objective: 'Renforcer les méthodes Bac et stabiliser la rédaction scientifique.',
    themes: ['Primitives et équations diff', 'Probabilités conditionnelles', 'Énergie et conversions', 'Oxydoréduction et cinétique'],
    targets: ['Élever la moyenne', 'Rendre des copies propres et complètes'],
    weeklyPlan: ['3 blocs de travail', '2 sujets type Bac', '1 séance de correction active'],
  },
  {
    id: 'term-bac',
    label: 'Terminale - Sprint Bac',
    badge: 'Révisions finales',
    objective: 'Passer en mode performance sur annales, timing et stratégies de sujets.',
    themes: ['Annales maths spécialité', 'Annales physique-chimie', 'Sujets transversaux', 'Pièges fréquents'],
    targets: ['Maximiser la note au Bac', 'Arriver serein le jour J'],
    weeklyPlan: ['2 sujets complets', '1 oral de 20 min', '1 bilan des erreurs critiques'],
  },
  {
    id: 'term-bridge',
    label: 'Terminale - Passerelle CPGE',
    badge: 'Après Bac',
    objective: 'Préparer la transition vers MPSI/MP avec de bons automatismes scientifiques.',
    themes: ['Rigueur de rédaction', 'Calcul algébrique rapide', 'Modélisation physique', 'Organisation de travail en autonomie'],
    targets: ['Entrée en CPGE plus fluide', 'Moins de choc de niveau en septembre'],
    weeklyPlan: ['2 fiches passerelle', '1 problème guidé', '1 oral blanc type colle'],
  },
] as const

const subjectPillars = [
  {
    name: 'Maths',
    tone: 'tone-maths',
    items: ['Spé maths Terminale', 'Exercices type Bac', 'Méthodes de rédaction notées'],
    progress: 82,
  },
  {
    name: 'Physique',
    tone: 'tone-physics',
    items: ['Physique Terminale', 'Modélisation guidée', 'Sujets Bac chronométrés'],
    progress: 76,
  },
  {
    name: 'Chimie',
    tone: 'tone-chemistry',
    items: ['Chimie Terminale', 'Bilans réactionnels', 'Annales corrigées et commentées'],
    progress: 71,
  },
] as const

const contestTools = [
  {
    title: 'Mode Bac intelligent',
    description: 'Annales Terminale filtrées par chapitre, niveau de difficulté et durée.',
  },
  {
    title: 'Mode chrono',
    description: 'Simulation d épreuve Bac avec timer, barème, et correction structurée.',
  },
  {
    title: 'Grand oral scientifique',
    description: 'Sujets, relances, grille d évaluation et entraînement de prise de parole.',
  },
  {
    title: 'Tableau de progression',
    description: 'Suivi des chapitres Terminale, lacunes critiques et plan de révision adaptatif.',
  },
] as const

function App() {
  const [activePathId, setActivePathId] = useState<(typeof pathways)[number]['id']>('term-start')
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
            <h1>Mode Terminale activé: réussir le Bac et préparer l entrée en CPGE.</h1>
            <p className="hero-text">
              On se concentre maintenant sur Terminale: progression trimestrielle, entraînement Bac, et
              passerelle vers le supérieur pour arriver en prépa avec plus de confiance.
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
            <h2>Gagner des points chaque semaine, sans surcharge inutile.</h2>
            <ul>
              <li>Plan Terminale hebdomadaire clair</li>
              <li>Exercices Bac corrigés et expliqués</li>
              <li>Suivi de progression par chapitre</li>
            </ul>
          </aside>
        </section>
      </header>

      <section className="section" id="pathways">
        <div className="section-head">
          <p className="eyebrow">Parcours pédagogique</p>
          <h2>Ton plan Terminale du T1 jusqu au post-Bac.</h2>
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
          <h2>Maths, Physique, Chimie en version Terminale performante.</h2>
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
          <h2>Préparer le Bac maintenant, préparer les concours ensuite.</h2>
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

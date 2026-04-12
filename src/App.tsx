import './App.css'

const subjects = [
  {
    name: 'Maths',
    accent: 'La structure avant le calcul',
    description:
      'Algèbre linéaire, analyse, probabilités et méthodes de résolution pour les colles, DM et concours.',
    modules: ['Suites et séries', 'Espaces vectoriels', 'Intégrales impropres', 'Probabilités'],
    gradient: 'from-maths',
    stats: ['24 fiches', '52 exercices', '18 méthodes'],
  },
  {
    name: 'Physique',
    accent: 'Modéliser, écrire, vérifier',
    description:
      'Mécanique, électromagnétisme, thermodynamique et ondes avec les bons réflexes de rédaction.',
    modules: ['Mécanique du point', 'Circuits RLC', 'Thermodynamique', 'Optique'],
    gradient: 'from-physics',
    stats: ['19 fiches', '41 exercices', '12 TP'],
  },
  {
    name: 'Chimie',
    accent: 'Relier équilibres et énergie',
    description:
      'Thermochimie, équilibres acide-base, cinétique et coordination pour gagner des points rapidement.',
    modules: ['Réactions acide-base', 'Oxydoréduction', 'Cinétique', 'Diagrammes'],
    gradient: 'from-chemistry',
    stats: ['21 fiches', '38 exercices', '9 synthèses'],
  },
] as const

const formulas = [
  {
    label: 'Produit scalaire',
    value: 'u · v = ||u|| ||v|| cos(θ)',
    note: 'Point d’appui pour les projections, distances et optimisations.',
  },
  {
    label: 'Loi de Newton',
    value: 'ΣF = m a',
    note: 'Toujours commencer par le système et le référentiel.',
  },
  {
    label: 'Équilibre chimique',
    value: 'K = Π produits / Π réactifs',
    note: 'Tracer le sens d’évolution avant de calculer.',
  },
  {
    label: 'Théorème de l’énergie cinétique',
    value: 'ΔEc = ΣW(ext)',
    note: 'Excellent pour verrouiller une mise en équation en mécanique.',
  },
] as const

const focusBlocks = [
  {
    title: 'Méthode express',
    items: ['Identifier les données', 'Écrire la loi physique', 'Isoler l’inconnue', 'Vérifier les unités'],
  },
  {
    title: 'Sprint concours',
    items: ['1 exercice de maths', '1 problème de physique', '1 synthèse de chimie', '1 correction active'],
  },
  {
    title: 'Révision longue',
    items: ['Relire la fiche', 'Refaire un exercice sans aide', 'Comparer avec la correction', 'Noter les pièges'],
  },
] as const

function App() {
  return (
    <main className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <div>
          <p className="eyebrow">Equatek • CPGE MPSI / MP</p>
          <h1>La base d’entraînement la plus propre pour maths, physique et chimie.</h1>
        </div>

        <div className="topbar-card">
          <span>Programme ciblé</span>
          <strong>Colles, DS, concours</strong>
          <p>Fiches nettes, exercices guidés et rappels de méthode en un seul endroit.</p>
        </div>
      </header>

      <section className="hero-grid">
        <article className="hero-panel hero-panel-main">
          <div className="hero-kicker">
            <span className="pill pill-primary">3e année de travail</span>
            <span className="pill">Rationnel et visuel</span>
          </div>
          <h2>Apprends vite, retiens mieux, rédige juste.</h2>
          <p>
            Une interface conçue pour la prépa: progression par matière, points-clés mémorisables,
            et entraînement orienté concours pour éviter les révisions dispersées.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#subjects">
              Explorer les matières
            </a>
            <a className="button button-secondary" href="#planner">
              Voir le planning
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>64</strong>
              <span>fiches de cours</span>
            </div>
            <div>
              <strong>131</strong>
              <span>exercices et problèmes</span>
            </div>
            <div>
              <strong>3</strong>
              <span>matières synchronisées</span>
            </div>
          </div>
        </article>

        <aside className="hero-panel hero-panel-aside">
          <div className="scoreboard">
            <div>
              <span>Objectif du jour</span>
              <strong>Relancer les automatismes</strong>
            </div>
            <span className="score">8 h 20 min</span>
          </div>

          <div className="mini-stack">
            <div className="mini-card mini-card-highlight">
              <span>Maths</span>
              <strong>Diagonaliser sans hésiter</strong>
              <p>Base, noyau, rang, interprétation géométrique.</p>
            </div>
            <div className="mini-card">
              <span>Physique</span>
              <strong>Modéliser avant de calculer</strong>
              <p>Un schéma, une loi, une projection, un bilan.</p>
            </div>
            <div className="mini-card">
              <span>Chimie</span>
              <strong>Suivre le sens d’évolution</strong>
              <p>Avancement, quotient réactionnel, état final.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="subjects">
        <div className="section-heading">
          <p className="eyebrow">Matières</p>
          <h2>Une colonne vertébrale par discipline.</h2>
          <p>Chaque bloc va droit à l’essentiel: cours, exercices, méthodes et réflexes de copie.</p>
        </div>

        <div className="subject-grid">
          {subjects.map((subject) => (
            <article key={subject.name} className={`subject-card ${subject.gradient}`}>
              <div className="subject-header">
                <div>
                  <p>{subject.name}</p>
                  <h3>{subject.accent}</h3>
                </div>
                <span>{subject.stats[0]}</span>
              </div>

              <p className="subject-description">{subject.description}</p>

              <div className="tag-list">
                {subject.modules.map((module) => (
                  <span key={module} className="tag">
                    {module}
                  </span>
                ))}
              </div>

              <div className="stats-row">
                {subject.stats.map((stat) => (
                  <div key={stat}>
                    <strong>{stat.split(' ')[0]}</strong>
                    <span>{stat.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <div className="section-heading compact">
            <p className="eyebrow">Repères</p>
            <h2>Les formules qui doivent devenir instantanées.</h2>
          </div>

          <div className="formula-list">
            {formulas.map((formula) => (
              <article key={formula.label} className="formula-card">
                <div>
                  <p>{formula.label}</p>
                  <strong>{formula.value}</strong>
                </div>
                <span>{formula.note}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="focus-panel">
          <div className="section-heading compact">
            <p className="eyebrow">Organisation</p>
            <h2>3 formats de séance, selon ton énergie.</h2>
          </div>

          <div className="focus-grid">
            {focusBlocks.map((block) => (
              <article key={block.title} className="focus-card">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="section planner-section" id="planner">
        <div className="section-heading">
          <p className="eyebrow">Planning hebdo</p>
          <h2>Une semaine de révisions simple à tenir.</h2>
          <p>Le but n’est pas de tout faire. Le but est de faire les bons blocs au bon moment.</p>
        </div>

        <div className="planner-grid">
          <article>
            <span>Lundi</span>
            <strong>Algèbre et calcul</strong>
            <p>Diagonalisation, espaces vectoriels, méthodes de calcul rapide.</p>
          </article>
          <article>
            <span>Mercredi</span>
            <strong>Mécanique et énergie</strong>
            <p>Modélisation, bilan des forces, théorèmes énergétiques, rédaction.</p>
          </article>
          <article>
            <span>Vendredi</span>
            <strong>Chimie et synthèse</strong>
            <p>Équilibres, cinétique, diagrammes et exercices de concours.</p>
          </article>
          <article>
            <span>Dimanche</span>
            <strong>Correction active</strong>
            <p>Refaire les erreurs de la semaine et consolider les automatismes.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App

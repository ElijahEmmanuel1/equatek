import type { Chapter, Pathway } from './types'
import { chap1Cours } from './content/maths/chap1-cours'
import { chap1ExercisesContent } from './content/maths/chap1-exercices'

export const chapters: Chapter[] = [
  {
    id: 'chap1',
    title: 'Dérivation et convexité',
    period: 'Septembre',
    subjectId: 'maths',
    goal: 'Maîtriser les variations, extremums, tangentes et courbes convexes.',
    resources: {
      cours: [
        { label: 'Résumé de cours — 12 fiches essentielles', comingSoon: true },
        { label: 'Méthodes de résolution guidées', comingSoon: true },
        { label: 'Erreurs fréquentes à éviter', comingSoon: true },
      ],
      exercices: [
        { label: 'Recueil complet — 50 exercices structurés' },
        { label: 'Partie 1 à 4 — dérivation, optimisation, expert' },
        { label: 'Rendu mathématique dans l’onglet Exercices' },
      ],
      quiz: [
        { label: 'Quiz notions essentielles' },
        { label: 'Quiz dérivées usuelles' },
        { label: 'Quiz interprétation graphique' },
      ],
      bac: [
        { label: 'Sujet Bac France 2024 — Exercice dérivation', comingSoon: true },
        { label: 'Sujet Bac Centres étrangers 2023', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek A1' },
        { label: 'Sujet Equatek A2' },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: 'La dérivée de f(x) = x³ − 3x est :',
        choices: ['3x² − 3', '3x²', 'x² − 3', '3x − 3'],
        correct: 0,
        explanation: "On dérive terme à terme : (x³)' = 3x² et (−3x)' = −3. Donc f'(x) = 3x² − 3.",
      },
      {
        id: 'q2',
        question: 'Une fonction est convexe sur un intervalle si :',
        choices: [
          'Sa dérivée est décroissante',
          'Sa dérivée seconde est positive',
          'Sa dérivée est nulle',
          'Sa dérivée seconde est négative',
        ],
        correct: 1,
        explanation: "Une fonction est convexe (courbe tournée vers le haut) quand sa dérivée seconde f''(x) ≥ 0 sur l'intervalle.",
      },
      {
        id: 'q3',
        question: "Au point d'abscisse x₀ où f'(x₀) = 0 et f''(x₀) > 0, la fonction :",
        choices: [
          'Admet un maximum local',
          'Admet un minimum local',
          "A un point d'inflexion",
          'Est constante',
        ],
        correct: 1,
        explanation: "Si f'(x₀) = 0 et f''(x₀) > 0, la courbe est convexe en x₀ et la fonction admet un minimum local.",
      },
      {
        id: 'q4',
        question: "L'équation de la tangente à C_f au point d'abscisse a est :",
        choices: [
          "y = f(a)(x − a) + f'(a)",
          "y = f'(a)(x − a) + f(a)",
          "y = f'(a)x + f(a)",
          "y = f(a)x + f'(a)",
        ],
        correct: 1,
        explanation: "La tangente en (a, f(a)) a pour pente f'(a). Son équation est y = f'(a)(x − a) + f(a).",
      },
    ],
    chronoDuration: 25,
    courseContent: chap1Cours,
    exercicesContent: chap1ExercisesContent,
  },
  {
    id: 'chap2',
    subjectId: 'maths',
    title: 'Suites numériques',
    period: 'Octobre',
    goal: 'Analyser convergence, récurrence et modélisation par suites.',
    resources: {
      cours: [
        { label: 'Fiche convergence et limites', comingSoon: true },
        { label: 'Méthode récurrence complète', comingSoon: true },
        { label: 'Suites arithmético-géométriques', comingSoon: true },
      ],
      exercices: [
        { label: '15 exercices corrigés', comingSoon: true },
        { label: "8 exercices d'approfondissement", comingSoon: true },
        { label: '2 devoirs blancs surveillés', comingSoon: true },
      ],
      quiz: [
        { label: 'Quiz de définitions' },
        { label: 'Quiz calcul de limite' },
        { label: 'Quiz raisonnement par récurrence' },
      ],
      bac: [
        { label: 'Sujet Bac Polynésie 2022', comingSoon: true },
        { label: 'Sujet Bac Amérique du Nord 2023', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek B1' },
        { label: 'Sujet Equatek B2', comingSoon: true },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: 'Une suite (uₙ) est arithmétique de raison r si :',
        choices: [
          'uₙ₊₁ = r × uₙ',
          'uₙ₊₁ = uₙ + r',
          'uₙ = u₀ × rⁿ',
          'uₙ = n × r',
        ],
        correct: 1,
        explanation: 'Une suite arithmétique vérifie uₙ₊₁ = uₙ + r (on ajoute la raison r à chaque étape).',
      },
      {
        id: 'q2',
        question: 'La suite géométrique de premier terme u₀ = 3 et de raison q = 2 vérifie uₙ = :',
        choices: ['3 + 2n', '3 × 2ⁿ', '2 × 3ⁿ', '3n + 2'],
        correct: 1,
        explanation: 'Pour une suite géométrique : uₙ = u₀ × qⁿ = 3 × 2ⁿ.',
      },
      {
        id: 'q3',
        question: 'Pour montrer que Pₙ est vraie pour tout n ∈ ℕ par récurrence, on démontre :',
        choices: [
          'P₀ vraie, puis Pₙ vraie ⟹ Pₙ₊₁ vraie',
          'P₁ vraie, puis Pₙ₊₁ vraie ⟹ Pₙ vraie',
          'P₀ vraie et P₁ vraie',
          'Pₙ vraie pour n grand',
        ],
        correct: 0,
        explanation: 'Par récurrence : (1) Initialisation (P₀), (2) Hérédité (Pₙ vraie ⟹ Pₙ₊₁ vraie). Ces deux étapes suffisent.',
      },
    ],
    chronoDuration: 25,
  },
  {
    id: 'chap3',
    subjectId: 'maths',
    title: 'Probabilités conditionnelles',
    period: 'Novembre',
    goal: 'Raisonner proprement avec événements, indépendance et loi binomiale.',
    resources: {
      cours: [
        { label: 'Arbres de probabilités et tableaux', comingSoon: true },
        { label: 'Conditionnement et formule de Bayes', comingSoon: true },
        { label: 'Loi binomiale et espérance', comingSoon: true },
      ],
      exercices: [
        { label: '20 exercices ciblés', comingSoon: true },
        { label: '5 sujets mixtes', comingSoon: true },
        { label: '2 études de cas réels', comingSoon: true },
      ],
      quiz: [
        { label: 'Quiz arbre pondéré' },
        { label: "Quiz indépendance d'événements" },
        { label: 'Quiz loi binomiale' },
      ],
      bac: [
        { label: 'Sujet Bac Métropole 2021', comingSoon: true },
        { label: 'Sujet Bac Asie 2024', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek C1', comingSoon: true },
        { label: 'Sujet Equatek C2', comingSoon: true },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: 'La probabilité conditionnelle P(A|B) se lit :',
        choices: [
          'Probabilité de A et B simultanément',
          'Probabilité de A sachant B',
          'Probabilité de A ou B',
          'Probabilité de B sachant A',
        ],
        correct: 1,
        explanation: 'P(A|B) signifie "probabilité de A sachant que B est réalisé". On a P(A|B) = P(A∩B) / P(B).',
      },
      {
        id: 'q2',
        question: 'Deux événements A et B sont indépendants si :',
        choices: [
          'P(A∩B) = P(A) + P(B)',
          'P(A∩B) = 0',
          'P(A∩B) = P(A) × P(B)',
          'P(A|B) = P(B)',
        ],
        correct: 2,
        explanation: 'A et B sont indépendants si et seulement si P(A∩B) = P(A) × P(B), ce qui implique aussi P(A|B) = P(A).',
      },
      {
        id: 'q3',
        question: 'X suit une loi binomiale B(n, p). Son espérance est :',
        choices: ['np(1−p)', 'np²', 'np', 'n/p'],
        correct: 2,
        explanation: "L'espérance d'une loi binomiale B(n, p) est E(X) = n × p. La variance est np(1−p).",
      },
    ],
    chronoDuration: 30,
  },

  /* ── CHAPITRE 4 ──────────────────────────────────────────── */
  {
    id: 'chap4',
    title: 'Fonctions exp et ln',
    period: 'Janvier',
    goal: 'Maîtriser les propriétés, dérivées, primitives et limites de exp et ln.',
    resources: {
      cours: [
        { label: 'Fiches propriétés algébriques de ln et exp', comingSoon: true },
        { label: 'Méthodes — équations et inéquations avec ln et exp', comingSoon: true },
        { label: 'Croissances comparées et limites remarquables', comingSoon: true },
      ],
      exercices: [
        { label: '16 exercices progressifs', comingSoon: true },
        { label: '5 problèmes type Bac', comingSoon: true },
        { label: '3 entraînements chrono', comingSoon: true },
      ],
      quiz: [
        { label: 'Quiz propriétés de ln' },
        { label: 'Quiz dérivées de exp et ln' },
        { label: 'Quiz équations et inéquations' },
      ],
      bac: [
        { label: 'Sujet Bac Métropole 2023 — exp et ln', comingSoon: true },
        { label: 'Sujet Bac Centres étrangers 2024', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek D1', comingSoon: true },
        { label: 'Sujet Equatek D2', comingSoon: true },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: 'ln(e³) est égal à :',
        choices: ['3', 'e³', '3e', '1/3'],
        correct: 0,
        explanation: "Par définition : ln(e^x) = x pour tout réel x. Donc ln(e³) = 3.",
      },
      {
        id: 'q2',
        question: "La dérivée de f(x) = e^(2x + 3) est :",
        choices: ['e^(2x + 3)', '2e^(2x + 3)', '(2x + 3)e^(2x + 2)', '2x·e^(2x + 3)'],
        correct: 1,
        explanation: "Règle de dérivation en chaîne : (e^u)' = u'·e^u. Ici u = 2x+3, u' = 2, donc f'(x) = 2e^(2x+3).",
      },
      {
        id: 'q3',
        question: "La dérivée de g(x) = ln(3x²) pour x > 0 est :",
        choices: ['1/(3x²)', '3/x', '2/x', '6x'],
        correct: 2,
        explanation: "On écrit ln(3x²) = ln 3 + 2 ln x, donc g'(x) = 2/x. Vérification : (ln u)' = u'/u, avec u = 3x², u' = 6x → 6x/(3x²) = 2/x. ✓",
      },
      {
        id: 'q4',
        question: "L'unique solution de l'équation ln(x) + ln(x + 2) = ln(8) est :",
        choices: ['x = 2', 'x = −4', 'x = 4', 'x = 8'],
        correct: 0,
        explanation: "ln(x(x+2)) = ln 8 ⟹ x² + 2x = 8 ⟹ x² + 2x − 8 = 0 ⟹ (x+4)(x−2) = 0. Comme x > 0 (domaine de ln), on garde x = 2.",
      },
    ],
    chronoDuration: 20,
  },

  /* ── CHAPITRE 5 ──────────────────────────────────────────── */
  {
    id: 'chap5',
    title: 'Calcul intégral',
    period: 'Février',
    goal: "Calculer des primitives et intégrales, appliquer l'intégration par parties.",
    resources: {
      cours: [
        { label: 'Tableau des primitives usuelles', comingSoon: true },
        { label: "Méthode — intégration par parties (IPP)", comingSoon: true },
        { label: 'Interprétation géométrique et valeur moyenne', comingSoon: true },
      ],
      exercices: [
        { label: '18 exercices de primitives progressifs', comingSoon: true },
        { label: "6 exercices d'intégration par parties", comingSoon: true },
        { label: 'Applications — aires et volumes de révolution', comingSoon: true },
      ],
      quiz: [
        { label: 'Quiz primitives usuelles' },
        { label: "Quiz calcul d'intégrales" },
        { label: 'Quiz interprétation et applications' },
      ],
      bac: [
        { label: 'Sujet Bac Métropole 2024 — intégration', comingSoon: true },
        { label: 'Sujet Bac Polynésie 2024', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek E1', comingSoon: true },
        { label: 'Sujet Equatek E2', comingSoon: true },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: "Une primitive de f(x) = 6x² − 4x + 1 sur ℝ est :",
        choices: ['12x − 4', '2x³ − 2x² + x', '3x² − 2', '6x³ − 4x²'],
        correct: 1,
        explanation: "On intègre terme à terme : ∫6x² dx = 2x³, ∫(−4x) dx = −2x², ∫1 dx = x. Une primitive est F(x) = 2x³ − 2x² + x.",
      },
      {
        id: 'q2',
        question: "La valeur exacte de ∫₀³ (2x + 1) dx est :",
        choices: ['10', '9', '12', '7'],
        correct: 2,
        explanation: "[x² + x]₀³ = (9 + 3) − (0 + 0) = 12.",
      },
      {
        id: 'q3',
        question: "Pour f ≥ 0 sur [a, b], l'intégrale ∫_a^b f(x) dx représente :",
        choices: [
          "La valeur moyenne de f sur [a, b]",
          "L'aire de la région délimitée par la courbe de f et l'axe des abscisses sur [a, b]",
          "La longueur de la courbe de f sur [a, b]",
          "Le maximum de f sur [a, b]",
        ],
        correct: 1,
        explanation: "Pour une fonction positive, ∫_a^b f(x) dx est l'aire (en unités d'aire) entre la courbe de f, l'axe des abscisses et les droites x = a, x = b.",
      },
      {
        id: 'q4',
        question: "La formule d'intégration par parties est :",
        choices: [
          "∫_a^b u'v dx = [uv]_a^b − ∫_a^b uv' dx",
          "∫_a^b u'v dx = [uv]_a^b + ∫_a^b uv' dx",
          "∫_a^b u'v dx = u'(b)v(b) − u'(a)v(a)",
          "∫_a^b u'v dx = [u'v']_a^b",
        ],
        correct: 0,
        explanation: "La formule IPP : ∫_a^b u'(x)v(x) dx = [u(x)v(x)]_a^b − ∫_a^b u(x)v'(x) dx. Elle échange la dérivée entre les deux facteurs.",
      },
    ],
    chronoDuration: 25,
  },

  /* ── CHAPITRE 6 ──────────────────────────────────────────── */
  {
    id: 'chap6',
    title: "Géométrie dans l'espace",
    period: 'Mars',
    goal: "Repérer droites et plans dans l'espace, calculer distances, angles et volumes.",
    resources: {
      cours: [
        { label: "Repères, vecteurs et produit scalaire dans l'espace", comingSoon: true },
        { label: 'Plans, droites et équations cartésiennes', comingSoon: true },
        { label: 'Distances, projections et sphères', comingSoon: true },
      ],
      exercices: [
        { label: '15 exercices progressifs', comingSoon: true },
        { label: '6 exercices de géométrie analytique', comingSoon: true },
        { label: '3 problèmes type Bac', comingSoon: true },
      ],
      quiz: [
        { label: "Quiz vecteurs et repères 3D" },
        { label: 'Quiz plans et droites' },
        { label: 'Quiz distances et projections' },
      ],
      bac: [
        { label: "Sujet Bac Métropole 2022 — géométrie", comingSoon: true },
        { label: 'Sujet Bac Asie 2023 — géométrie', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek F1', comingSoon: true },
        { label: 'Sujet Equatek F2', comingSoon: true },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: "Deux vecteurs u⃗ et v⃗ de l'espace sont colinéaires si et seulement si :",
        choices: [
          "u⃗ · v⃗ = 0",
          "Il existe un réel k tel que u⃗ = k·v⃗",
          "‖u⃗‖ = ‖v⃗‖",
          "u⃗ + v⃗ = 0⃗",
        ],
        correct: 1,
        explanation: "Deux vecteurs sont colinéaires s'il existe k ∈ ℝ tel que l'un est le multiple scalaire de l'autre. La condition u⃗ · v⃗ = 0 caractérise l'orthogonalité, pas la colinéarité.",
      },
      {
        id: 'q2',
        question: "Un vecteur n⃗ est dit normal au plan (P) si :",
        choices: [
          "n⃗ est parallèle à (P)",
          "n⃗ est perpendiculaire à tout vecteur directeur de (P)",
          "‖n⃗‖ = 1",
          "n⃗ est contenu dans le plan (P)",
        ],
        correct: 1,
        explanation: "Un vecteur normal à un plan est orthogonal à tous les vecteurs directeurs de ce plan. Si n⃗(a,b,c) est normal à (P) et A ∈ (P), l'équation de (P) est a(x−xₐ) + b(y−yₐ) + c(z−zₐ) = 0.",
      },
      {
        id: 'q3',
        question: "Le plan (P) a pour vecteur normal n⃗(2, 1, −3) et passe par A(1, 0, 1). Son équation cartésienne est :",
        choices: ['2x + y − 3z = −1', '2x + y − 3z = 0', '2x + y − 3z = 3', 'x + y − 3z = 1'],
        correct: 0,
        explanation: "L'équation est 2(x−1) + 1(y−0) − 3(z−1) = 0, soit 2x − 2 + y − 3z + 3 = 0, soit 2x + y − 3z = −1.",
      },
      {
        id: 'q4',
        question: "La droite (d) passe par A(2, 1, 3) et B(4, 5, 1). Une représentation paramétrique de (d) est :",
        choices: [
          'x = 2 + 2t,  y = 1 + 4t,  z = 3 − 2t',
          'x = 4t,  y = 5t,  z = t',
          'x = 2 + 4t,  y = 1 + 5t,  z = 3 + t',
          'x = 2t,  y = t,  z = 3t',
        ],
        correct: 0,
        explanation: "Le vecteur directeur est AB⃗ = (4−2, 5−1, 1−3) = (2, 4, −2). La droite passe par A(2,1,3), donc : x = 2+2t, y = 1+4t, z = 3−2t (t ∈ ℝ).",
      },
    ],
    chronoDuration: 30,
  },

  /* ── CHAPITRE 7 ──────────────────────────────────────────── */
  {
    id: 'chap7',
    title: 'Variables aléatoires',
    period: 'Avril',
    goal: "Calculer espérance et variance, appliquer la loi binomiale et la loi normale.",
    resources: {
      cours: [
        { label: 'Variables aléatoires discrètes — espérance et variance', comingSoon: true },
        { label: 'Loi binomiale : formules et tableaux', comingSoon: true },
        { label: "Loi normale et intervalle de fluctuation", comingSoon: true },
      ],
      exercices: [
        { label: '14 exercices guidés', comingSoon: true },
        { label: '6 problèmes de modélisation', comingSoon: true },
        { label: '2 sujets type Bac', comingSoon: true },
      ],
      quiz: [
        { label: 'Quiz loi binomiale' },
        { label: 'Quiz espérance et variance' },
        { label: 'Quiz loi normale' },
      ],
      bac: [
        { label: 'Sujet Bac France 2023 — probabilités', comingSoon: true },
        { label: 'Sujet Bac Centres étrangers 2024', comingSoon: true },
      ],
      equatek: [
        { label: 'Sujet Equatek G1', comingSoon: true },
        { label: 'Sujet Equatek G2', comingSoon: true },
      ],
    },
    quizQuestions: [
      {
        id: 'q1',
        question: "X suit la loi normale N(μ, σ²). L'espérance de X est :",
        choices: ['σ', 'μ', 'σ²', 'μ²'],
        correct: 1,
        explanation: "Pour X ~ N(μ, σ²), l'espérance est E(X) = μ et la variance est V(X) = σ². Le paramètre μ est la moyenne, σ l'écart-type.",
      },
      {
        id: 'q2',
        question: "Pour X ~ N(0, 1) (loi normale centrée réduite), P(−1,96 ≤ X ≤ 1,96) ≈ :",
        choices: ['68 %', '90 %', '95 %', '99,7 %'],
        correct: 2,
        explanation: "Les valeurs clés : P(−1 ≤ X ≤ 1) ≈ 68 %, P(−1,96 ≤ X ≤ 1,96) ≈ 95 %, P(−2,58 ≤ X ≤ 2,58) ≈ 99 %. La valeur 1,96 est fondamentale pour les intervalles de confiance.",
      },
      {
        id: 'q3',
        question: "Y suit la loi B(20 ; 0,3). La variance de Y est :",
        choices: ['6', '4,2', '√4,2 ≈ 2,05', '0,3'],
        correct: 1,
        explanation: "Pour B(n, p), la variance est V(Y) = np(1−p) = 20 × 0,3 × 0,7 = 4,2. L'espérance est E(Y) = np = 6 et l'écart-type √4,2 ≈ 2,05.",
      },
      {
        id: 'q4',
        question: "La loi normale N(μ, σ²) est une bonne approximation de B(n, p) quand :",
        choices: [
          'n ≥ 5',
          'np ≥ 5 et n(1 − p) ≥ 5',
          'p ≤ 0,1 et n ≥ 50',
          'n ≥ 100 quelles que soient les valeurs de p',
        ],
        correct: 1,
        explanation: "On approche B(n, p) par N(μ = np, σ² = np(1−p)) lorsque np ≥ 5 et n(1−p) ≥ 5. Ces conditions garantissent que la binomiale est assez « symétrique ».",
      },
    ],
    chronoDuration: 25,
  },
]

export const pathways: Pathway[] = [
  {
    id: 'trim1',
    label: 'Terminale — Fondations',
    badge: 'Trimestre 1',
    objective: 'Installer des bases solides en Terminale : dérivation, suites et premiers raisonnements rigoureux.',
    themes: ['Dérivation et convexité', 'Suites numériques', 'Raisonnement par récurrence', 'Probabilités conditionnelles'],
    targets: ['Démarrer solide', 'Être prêt pour le premier bac blanc'],
    weeklyPlan: ['2 cours ciblés', "2 séries d'exercices", '1 quiz validation'],
    chapterIds: ['chap1', 'chap2', 'chap3'],
  },
  {
    id: 'trim2',
    label: 'Terminale — Maîtrise',
    badge: 'Trimestre 2',
    objective: 'Consolider les grandes familles de fonctions et maîtriser le calcul intégral.',
    themes: ['Fonctions exp et ln', 'Calcul intégral', 'Primitives et IPP', 'Variables aléatoires'],
    targets: ['Élever la moyenne', 'Rendre des copies propres et complètes'],
    weeklyPlan: ['3 blocs de travail', '2 sujets type Bac', '1 séance de correction active'],
    chapterIds: ['chap4', 'chap5', 'chap7'],
  },
  {
    id: 'trim3',
    label: 'Terminale — Performance Bac',
    badge: 'Trimestre 3',
    objective: 'Passer en mode performance : géométrie dans l\'espace, annales et stratégie de sujet.',
    themes: ["Géométrie dans l'espace", 'Annales maths spécialité', 'Pièges fréquents', 'Stratégie de sujet'],
    targets: ['Maximiser la note au Bac', 'Arriver serein le jour J'],
    weeklyPlan: ['2 sujets complets chrono', "1 révision ciblée par chapitre", '1 bilan des erreurs critiques'],
    chapterIds: ['chap6'],
  },
]

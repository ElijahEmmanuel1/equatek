import type { Chapter, Pathway } from './types'
import { chap1Cours } from './content/maths/chap1-cours'

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
        { label: '18 exercices progressifs', comingSoon: true },
        { label: '6 problèmes type Bac', comingSoon: true },
        { label: '3 entraînements chrono', comingSoon: true },
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
        { label: 'Sujet Equatek B1', comingSoon: true },
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
]

export const pathways: Pathway[] = [
  {
    id: 'trim1',
    label: 'Terminale — Fondations',
    badge: 'Trimestre 1',
    objective: 'Installer des bases solides en Terminale maths pour éviter les lacunes.',
    themes: ['Dérivation et convexité', 'Suites numériques', 'Fonctions exponentielles', 'Raisonnement par récurrence'],
    targets: ['Démarrer solide', 'Être prêt pour le premier bac blanc'],
    weeklyPlan: ['2 cours ciblés', "2 séries d'exercices", '1 quiz validation'],
    chapterIds: ['chap1', 'chap2'],
  },
  {
    id: 'trim2',
    label: 'Terminale — Maîtrise',
    badge: 'Trimestre 2',
    objective: 'Renforcer les méthodes Bac et stabiliser la qualité de rédaction.',
    themes: ['Primitives et intégration', 'Probabilités conditionnelles', 'Variables aléatoires', 'Combinatoire'],
    targets: ['Élever la moyenne', 'Rendre des copies propres et complètes'],
    weeklyPlan: ['3 blocs de travail', '2 sujets type Bac', '1 séance de correction active'],
    chapterIds: ['chap3'],
  },
  {
    id: 'trim3',
    label: 'Terminale — Performance Bac',
    badge: 'Trimestre 3',
    objective: 'Passer en mode performance sur annales, timing et stratégies de sujets maths.',
    themes: ['Annales maths spécialité', 'Sujets zéro', 'Pièges fréquents', 'Stratégie de sujet'],
    targets: ['Maximiser la note au Bac', 'Arriver serein le jour J'],
    weeklyPlan: ['2 sujets complets', '1 oral de 20 min', '1 bilan des erreurs critiques'],
    chapterIds: [],
  },
]

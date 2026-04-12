export interface SubjectExercise {
  id: string
  number: number
  title: string
  points: number
  color: string
  subtitle?: string
  intro?: string
  parts: SubjectPart[]
  expert?: boolean
}

export interface SubjectPart {
  title?: string
  intro?: string
  questions: SubjectQuestion[]
}

export interface SubjectQuestion {
  num: number
  text: string
  sub?: string // sub-statement
  highlight?: string // boxed formula
}

export interface EquatekSubject {
  id: string
  title: string
  label: string
  year: number
  duration: string
  notice: string
  exercises: SubjectExercise[]
}

export const subjectA1: EquatekSubject = {
  id: 'A1',
  label: 'Sujet Equatek A1',
  title: 'Épreuve Blanche — Sujet 1',
  year: 2026,
  duration: '4 heures',
  notice:
    'La qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l\'appréciation des copies. L\'usage de la calculatrice est autorisé. Le sujet de Spécialité est noté sur 20 points (Exercices 1 à 4). L\'Exercice 5 s\'adresse uniquement aux élèves suivant l\'option Mathématiques Expertes.',
  exercises: [
    {
      id: 'ex1',
      number: 1,
      title: 'Analyse & Suites Intégrales',
      points: 7,
      color: '#7c9eff',
      intro:
        'Pour tout entier naturel $n$, on considère la suite $(I_n)$ définie par :',
      parts: [
        {
          title: 'Partie A : Étude de la convergence',
          questions: [
            { num: 1, text: 'Calculer la valeur exacte de $I_0$ et $I_1$.' },
            {
              num: 2,
              text: 'Étudier le signe de la différence $I_{n+1} - I_n$ sur l\'intervalle $[0;1]$. En déduire le sens de variation de la suite $(I_n)$.',
            },
            {
              num: 3,
              text: 'Démontrer que pour tout $x \\in [0;1]$, on a $\\displaystyle 0 \\leq \\dfrac{x^n}{1+x^2} \\leq x^n$.',
            },
            {
              num: 4,
              text: 'En déduire que pour tout entier naturel $n$ : $\\displaystyle 0 \\leq I_n \\leq \\dfrac{1}{n+1}$.',
            },
            {
              num: 5,
              text: 'Conclure quant à la convergence de la suite $(I_n)$ et déterminer sa limite.',
            },
          ],
        },
        {
          title: "Partie B : Relation de récurrence et approximation de $\\pi$",
          questions: [
            {
              num: 6,
              text: "Démontrer que pour tout entier naturel $n$ : $\\displaystyle I_n + I_{n+2} = \\dfrac{1}{n+1}$.",
            },
            {
              num: 7,
              text: "On pose $\\displaystyle S_n = I_0 + I_2 + I_4 + \\dots + I_{2n}$. Déduire de la question précédente une expression de $S_n$ sous la forme d'une somme de termes.",
            },
            {
              num: 8,
              text: "Montrer que $\\displaystyle I_0 - I_{2n+2} = \\sum_{k=0}^{n} \\dfrac{(-1)^k}{2k+1}$.",
            },
            {
              num: 9,
              text: "En utilisant la limite trouvée à la question 5, démontrer la formule de Leibniz :",
              highlight: '\\lim_{n \\to +\\infty} \\sum_{k=0}^{n} \\dfrac{(-1)^k}{2k+1} = \\dfrac{\\pi}{4}',
            },
          ],
        },
      ],
    },
    {
      id: 'ex2',
      number: 2,
      title: 'Géométrie dans l\'espace',
      points: 5,
      color: '#c084fc',
      intro:
        "Dans un repère orthonormé $(O;\\vec{i},\\vec{j},\\vec{k})$ de l'espace, on donne les points : $A(1;2;-1)$, $B(3;-1;2)$, $C(0;1;1)$ et $S(4;5;6)$.",
      parts: [
        {
          questions: [
            { num: 1, text: "Démontrer que les points $A$, $B$ et $C$ ne sont pas alignés." },
            {
              num: 2,
              text: "Démontrer que le vecteur $\\vec{n}\\begin{pmatrix} 5 \\\\ 7 \\\\ 5 \\end{pmatrix}$ est un vecteur normal au plan $(ABC)$.",
            },
            { num: 3, text: "En déduire une équation cartésienne du plan $(ABC)$." },
            {
              num: 4,
              text: "Soit $(d)$ la droite orthogonale au plan $(ABC)$ passant par le point $S$. Déterminer une représentation paramétrique de $(d)$.",
            },
            {
              num: 5,
              text: "Déterminer les coordonnées du point $H$, projeté orthogonal du point $S$ sur le plan $(ABC)$.",
            },
            {
              num: 6,
              text: "Calculer le volume du tétraèdre $SABC$. On rappelle que $\\mathcal{V} = \\dfrac{1}{3} \\times \\text{Aire de la base} \\times \\text{hauteur}$.",
            },
            {
              num: 7,
              text: "On considère l'ensemble des points $M(x;y;z)$ vérifiant : $(x-1)(x-3)+(y-2)(y+1)+(z+1)(z-2)=0$. Identifier cet ensemble de points et préciser ses caractéristiques géométriques.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex3',
      number: 3,
      title: 'Probabilités et Suites',
      points: 4,
      color: '#ffd190',
      intro:
        "Une araignée se déplace sur une toile composée de trois zones notées $A$, $B$ et $C$. À l'instant $t=0$, l'araignée se trouve dans la zone $A$. Chaque minute, elle change de zone selon :",
      parts: [
        {
          questions: [
            {
              num: 1,
              text: "Si elle est en $A$ : probabilité $0{,}5$ d'aller en $B$, et $0{,}5$ d'aller en $C$. Si elle est en $B$ : probabilité $0{,}2$ de rester, $0{,}6$ d'aller en $A$, $0{,}2$ d'aller en $C$. Si elle est en $C$ : probabilité $0{,}8$ d'aller en $A$, $0{,}2$ d'aller en $B$. Elle ne reste jamais en $C$.",
              sub: 'Représenter la situation par un graphe probabiliste.',
            },
            { num: 2, text: "Écrire la matrice de transition $M$ telle que $P_{n+1} = P_n \\times M$." },
            { num: 3, text: "Calculer la probabilité que l'araignée se trouve dans la zone $B$ à l'instant $t=2$." },
            {
              num: 4,
              text: "Démontrer que pour tout entier naturel $n$ : $\\displaystyle a_{n+1} = 0{,}6\\,b_n + 0{,}8\\,c_n$.",
            },
            {
              num: 5,
              text: "En utilisant la relation $a_n + b_n + c_n = 1$, exprimer $a_{n+1}$ uniquement en fonction de $a_n$ et $b_n$.",
            },
            {
              num: 6,
              text: "L'état probabiliste limite (ou invariant) est noté $P = \\begin{pmatrix} a & b & c \\end{pmatrix}$. Calculer les valeurs exactes de $a$, $b$ et $c$. Interpréter ce résultat.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex4',
      number: 4,
      title: 'Équations Différentielles',
      points: 4,
      color: '#5cffb4',
      intro:
        "Une substance médicamenteuse est injectée dans le sang d'un patient. On note $f(t)$ la concentration (en $\\mathrm{mg}\\cdot\\mathrm{L}^{-1}$) au temps $t$ (en heures). L'évolution est modélisée par :",
      parts: [
        {
          questions: [
            {
              num: 1,
              text: "Résoudre l'équation différentielle $(E)$ sur $[0;+\\infty[$.",
              highlight: '(E) : y\' + 0{,}2\\,y = 1{,}6',
            },
            {
              num: 2,
              text: "Déterminer l'unique solution $f$ vérifiant la condition initiale $f(0) = 20$.",
            },
            {
              num: 3,
              text: "On admet que $f(t) = 12e^{-0{,}2t} + 8$. Calculer $\\lim_{t\\to+\\infty} f(t)$. Interpréter ce résultat dans le contexte médical.",
            },
            { num: 4, text: "Étudier les variations de la fonction $f$ sur $[0;+\\infty[$." },
            {
              num: 5,
              text: "Calculer $f''(t)$ et en déduire la convexité de la fonction $f$. Qu'est-ce que cela signifie concernant la vitesse d'élimination ?",
            },
            {
              num: 6,
              text: "Résoudre l'inéquation $f(t) \\leq 10$. Donner la valeur exacte, puis une valeur arrondie à l'heure près.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex5',
      number: 5,
      title: 'Arithmétique',
      points: 4,
      color: '#7c9eff',
      expert: true,
      parts: [
        {
          title: 'Partie A : Équation diophantienne',
          intro: "On considère l'équation $(E) : 17x - 13y = 5$, où $x$ et $y$ sont des entiers relatifs.",
          questions: [
            { num: 1, text: "Justifier que l'équation $(E)$ admet au moins une solution dans $\\mathbb{Z}^2$." },
            {
              num: 2,
              text: "Déterminer, en utilisant l'algorithme d'Euclide, une solution particulière $(x_0 ; y_0)$ de $(E)$.",
            },
            {
              num: 3,
              text: "Déterminer l'ensemble de toutes les solutions $(x ; y)$ de $(E)$ dans $\\mathbb{Z}^2$.",
            },
            {
              num: 4,
              text: "Trouver le couple solution $(x ; y)$ pour lequel la somme $x+y$ est minimale et strictement positive.",
            },
          ],
        },
        {
          title: 'Partie B : Nombres de Mersenne et Congruences',
          intro:
            "Pour tout entier naturel $n \\geq 1$, on appelle $n$-ième nombre de Mersenne le nombre $M_n = 2^n - 1$.",
          questions: [
            {
              num: 5,
              text: "Montrer que si $a$ divise $b$, alors $(2^a-1)$ divise $(2^b-1)$.",
              sub: "Indice : utiliser l'identité $X^k-1=(X-1)(X^{k-1}+\\dots+1)$.",
            },
            {
              num: 6,
              text: "En déduire que si $n$ est un nombre composé (non premier), alors $M_n$ est composé.",
            },
            {
              num: 7,
              text: "La réciproque est-elle vraie ? (On pourra tester avec $n=11$.)",
            },
            {
              num: 8,
              text: "Démontrer, en utilisant le petit théorème de Fermat, que pour tout entier $p$ premier impair, $M_{p-1}$ est un multiple de $p$.",
            },
          ],
        },
      ],
    },
  ],
}

export const equatekSubjects: Record<string, EquatekSubject> = {
  A1: subjectA1,
}

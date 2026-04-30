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

export const subjectA2: EquatekSubject = {
  id: 'A2',
  label: 'Sujet Equatek A2',
  title: 'Épreuve Blanche — Sujet 2',
  year: 2026,
  duration: '4 heures',
  notice:
    "La qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies. L'usage de la calculatrice est autorisé. Le sujet de Spécialité est noté sur 20 points (Exercices 1 à 4). L'Exercice 5 s'adresse uniquement aux élèves suivant l'option Mathématiques Expertes.",
  exercises: [
    {
      id: 'ex1',
      number: 1,
      title: 'Probabilités & Chaînes de Markov',
      points: 5,
      color: '#7c9eff',
      parts: [
        {
          title: 'Partie A : Contrôle de qualité',
          intro:
            "Une entreprise fabrique des composants électroniques. La probabilité qu'un composant soit défectueux est $p = 0{,}03$. Les composants sont emballés par lots de $50$. On note $X$ la variable aléatoire donnant le nombre de composants défectueux dans un lot.",
          questions: [
            {
              num: 1,
              text: "Justifier que la variable aléatoire $X$ suit une loi binomiale dont on précisera les paramètres.",
            },
            {
              num: 2,
              text: "Calculer la probabilité qu'un lot ne contienne aucun composant défectueux. Arrondir à $10^{-3}$.",
            },
            {
              num: 3,
              text: "Calculer la probabilité qu'un lot contienne au moins un composant défectueux.",
            },
            {
              num: 4,
              text: "L'entreprise souhaite que la probabilité d'avoir au moins un composant défectueux dans un lot de taille $n$ soit supérieure à $0{,}99$. Quelle doit être la taille minimale $n$ du lot ?",
            },
          ],
        },
        {
          title: 'Partie B : Maintenance des machines',
          intro:
            "La machine est soit en état de marche $(M)$, soit en panne $(P)$. Si elle est en marche le jour $n$, elle a $90\\%$ de chances d'être en marche le jour $n+1$. Si elle est en panne, les techniciens interviennent et elle a $70\\%$ de chances d'être réparée. On note $M_0 = 1$ et $P_0 = 0$.",
          questions: [
            {
              num: 5,
              text: "Représenter la situation par un graphe probabiliste et donner la matrice de transition $A$.",
            },
            {
              num: 6,
              text: "Exprimer $M_{n+1}$ en fonction de $M_n$ et $P_n$.",
            },
            {
              num: 7,
              text: "En déduire que pour tout entier naturel $n$ : $M_{n+1} = 0{,}2\\,M_n + 0{,}7$.",
            },
            {
              num: 8,
              text: "On pose $u_n = M_n - 0{,}875$. Montrer que la suite $(u_n)$ est géométrique de raison $0{,}2$.",
            },
            {
              num: 9,
              text: "Déterminer la limite de la suite $(M_n)$ quand $n \\to +\\infty$ et interpréter ce résultat.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex2',
      number: 2,
      title: 'Géométrie dans un Cube',
      points: 5,
      color: '#c084fc',
      intro:
        "On considère un cube $ABCDEFGH$ d'arête $1$ dans le repère orthonormé $(A;\\vec{AB},\\vec{AD},\\vec{AE})$. On place : $I$ le centre de la face $EFGH$, $J$ le milieu de $[BC]$, $K$ le milieu de $[CD]$.",
      parts: [
        {
          questions: [
            { num: 1, text: "Déterminer, sans justification, les coordonnées des points $I$, $J$ et $K$." },
            {
              num: 2,
              text: "Démontrer que $\\vec{n}\\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$ est un vecteur normal au plan $(IJK)$.",
            },
            { num: 3, text: "En déduire une équation cartésienne du plan $(IJK)$." },
            {
              num: 4,
              text: "Soit $(d)$ la droite passant par $F$ et orthogonale au plan $(IJK)$. Déterminer une représentation paramétrique de $(d)$.",
            },
            {
              num: 5,
              text: "Déterminer les coordonnées du point $L$, intersection de $(d)$ et du plan $(IJK)$.",
            },
            { num: 6, text: "Calculer la distance du point $F$ au plan $(IJK)$." },
            {
              num: 7,
              text: "Les plans $(IJK)$ et $(ABC)$ sont-ils sécants ? Si oui, donner un vecteur directeur de leur droite d'intersection.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex3',
      number: 3,
      title: 'Analyse et Étude de Fonction',
      points: 6,
      color: '#ffd190',
      intro: "On considère la fonction $f$ définie sur $\\mathbb{R}$ par :",
      parts: [
        {
          questions: [
            {
              num: 1,
              text: "Déterminer la limite de $f(x)$ lorsque $x \\to -\\infty$.",
              highlight: 'f(x) = (x^2 - 2x + 2)e^{-x}',
            },
          ],
        },
        {
          title: 'Étude des limites',
          questions: [
            {
              num: 1,
              text: "Déterminer $\\lim_{x \\to -\\infty} f(x)$.",
            },
            {
              num: 2,
              text: "En développant $f(x)$, déterminer $\\lim_{x \\to +\\infty} f(x)$. On rappelle que $\\lim_{x \\to +\\infty} \\dfrac{x^n}{e^x} = 0$. Interpréter graphiquement.",
            },
          ],
        },
        {
          title: 'Étude des variations',
          questions: [
            {
              num: 3,
              text: "Démontrer que pour tout réel $x$ : $f'(x) = -x^2 e^{-x}$.",
            },
            { num: 4, text: "En déduire le signe de $f'(x)$ sur $\\mathbb{R}$." },
            { num: 5, text: "Dresser le tableau de variations complet de la fonction $f$." },
          ],
        },
        {
          title: 'Tangentes et Convexité',
          questions: [
            {
              num: 6,
              text: "Déterminer l'équation réduite de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x = 0$.",
            },
            { num: 7, text: "Calculer $f''(x)$ et étudier son signe." },
            {
              num: 8,
              text: "Déterminer les coordonnées exactes des points d'inflexion de la courbe $\\mathcal{C}_f$.",
            },
          ],
        },
        {
          title: 'Équation',
          questions: [
            {
              num: 9,
              text: "Démontrer que $f(x) = 10$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. Donner un encadrement de $\\alpha$ d'amplitude $10^{-1}$.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex4',
      number: 4,
      title: 'Équations Différentielles & IPP',
      points: 4,
      color: '#5cffb4',
      parts: [
        {
          title: 'Partie A : Résolution de l\'équation différentielle',
          intro: "On considère l'équation différentielle $(E) : y' + y = 2e^{-x}$.",
          questions: [
            {
              num: 1,
              text: "Résoudre l'équation différentielle homogène associée $(E_0) : y' + y = 0$.",
            },
            {
              num: 2,
              text: "Soit $u(x) = 2xe^{-x}$. Démontrer que $u$ est une solution particulière de $(E)$.",
            },
            {
              num: 3,
              text: "En déduire l'ensemble des solutions de l'équation différentielle $(E)$.",
            },
            {
              num: 4,
              text: "Déterminer l'unique solution $f$ de $(E)$ vérifiant $f(0) = -3$.",
            },
          ],
        },
        {
          title: 'Partie B : Calcul Intégral',
          intro: "On s'intéresse à la fonction $g$ définie sur $\\mathbb{R}$ par $g(x) = 2xe^{-x}$.",
          questions: [
            {
              num: 5,
              text: "À l'aide d'une intégration par parties (IPP), calculer la valeur exacte de :",
              highlight: 'I = \\int_{0}^{2} 2x\\,e^{-x}\\,dx',
            },
            {
              num: 6,
              text: "La fonction $g$ étant positive sur $[0;2]$, que représente concrètement la valeur de $I$ ?",
            },
          ],
        },
      ],
    },
    {
      id: 'ex5',
      number: 5,
      title: 'Nombres Complexes & Géométrie',
      points: 4,
      color: '#ff9f7a',
      expert: true,
      parts: [
        {
          title: 'Partie 1 : Résolution de l\'équation',
          intro: "Dans le plan complexe, on considère l'équation $(E)$ d'inconnue $z$ :",
          questions: [
            {
              num: 1,
              text: "Montrer que $z_0 = 4$ est une solution de $(E)$.",
              highlight: '(E) : z^3 - 8z^2 + 24z - 32 = 0',
            },
            {
              num: 2,
              text: "Déterminer les réels $a$, $b$, $c$ tels que : $z^3 - 8z^2 + 24z - 32 = (z-4)(az^2 + bz + c)$.",
            },
            {
              num: 3,
              text: "Résoudre dans $\\mathbb{C}$ l'équation $z^2 - 4z + 8 = 0$.",
            },
            {
              num: 4,
              text: "En déduire l'ensemble des solutions de $(E)$.",
            },
          ],
        },
        {
          title: 'Partie 2 : Étude géométrique',
          intro:
            "On note $A$, $B$ et $C$ les points d'affixes $z_A = 4$, $z_B = 2+2i$, $z_C = 2-2i$.",
          questions: [
            {
              num: 5,
              text: "Placer de façon précise les points $A$, $B$ et $C$ dans un repère du plan complexe.",
            },
            {
              num: 6,
              text: "Calculer le module et un argument de $\\displaystyle Z = \\dfrac{z_B - z_A}{z_C - z_A}$.",
            },
            { num: 7, text: "En déduire la nature exacte du triangle $ABC$." },
            {
              num: 8,
              text: "Soit $D$ l'image de $B$ par la rotation de centre $O$ et d'angle $\\dfrac{\\pi}{2}$. Déterminer l'affixe de $D$.",
            },
            {
              num: 9,
              text: "Montrer que les points $O$, $C$ et $D$ sont alignés.",
            },
          ],
        },
      ],
    },
  ],
}

export const subjectB1: EquatekSubject = {
  id: 'B1',
  label: 'Sujet Equatek B1',
  title: 'Épreuve Blanche — Sujet 3',
  year: 2026,
  duration: '4 heures',
  notice:
    "La qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies. L'usage de la calculatrice est autorisé. Le sujet est noté sur 20 points.",
  exercises: [
    {
      id: 'ex1',
      number: 1,
      title: "Remboursement d'un Prêt Immobilier",
      points: 7,
      color: '#7c9eff',
      intro:
        "Un ménage contracte un prêt immobilier de $150\\,000$ euros à un taux mensuel fixe de $0{,}5\\,\\%$. Il verse chaque mois une mensualité constante de $m$ euros. On note $u_n$ le capital restant dû après $n$ mensualités, avec $u_0 = 150\\,000$.",
      parts: [
        {
          title: 'Partie A : Modélisation par une suite',
          questions: [
            {
              num: 1,
              text: "Exprimer $u_{n+1}$ en fonction de $u_n$ et $m$.",
              sub: "Le capital est majoré des intérêts du mois ($0{,}5\\,\\%$ du capital restant), puis diminué de la mensualité $m$.",
            },
            {
              num: 2,
              text: "On pose $v_n = u_n - L$ où $L$ est un réel. Déterminer $L$ de sorte que la suite $(v_n)$ soit géométrique. Identifier la raison et le premier terme.",
            },
            {
              num: 3,
              text: "Exprimer $u_n$ en fonction de $n$, $m$ et $L$.",
            },
            {
              num: 4,
              text: "Pour que le prêt soit remboursé en $240$ mois, on doit avoir $u_{240} = 0$. En déduire la valeur exacte de $m$, puis une valeur arrondie à l'euro près.",
              highlight:
                'm = \\dfrac{150\\,000 \\times 0{,}005}{1 - 1{,}005^{-240}}',
            },
          ],
        },
        {
          title: 'Partie B : Analyse du remboursement',
          questions: [
            {
              num: 5,
              text: "Montrer que la suite $(u_n)$ est décroissante pour la valeur de $m$ trouvée. Interpréter économiquement.",
            },
            {
              num: 6,
              text: "Déterminer, à l'aide d'un algorithme, à partir de quel mois $n$ le capital restant dû passe en dessous de $75\\,000$ euros.",
            },
            {
              num: 7,
              text: "Si le taux mensuel était $0{,}8\\,\\%$ au lieu de $0{,}5\\,\\%$, de combien augmenterait la mensualité (pour 240 mois) ? Commenter l'impact du taux d'intérêt.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex2',
      number: 2,
      title: 'Raisonnement par Récurrence',
      points: 5,
      color: '#c084fc',
      parts: [
        {
          title: 'Partie A : Formule de la somme des carrés',
          intro: "On cherche à démontrer que pour tout entier naturel $n \\geq 1$ :",
          questions: [
            {
              num: 1,
              text: "Vérifier l'initialisation pour $n = 1$.",
              highlight:
                '\\forall\\, n \\geq 1,\\quad \\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}',
            },
            {
              num: 2,
              text: "Supposons la propriété vraie au rang $n$. Montrer qu'elle est vraie au rang $n+1$ en calculant $\\displaystyle\\sum_{k=1}^{n+1} k^2$.",
            },
            {
              num: 3,
              text: "Conclure par récurrence, puis calculer la valeur exacte de $1^2 + 2^2 + \\dots + 50^2$.",
            },
          ],
        },
        {
          title: 'Partie B : Majoration exponentielle',
          questions: [
            {
              num: 4,
              text: "Démontrer par récurrence que pour tout entier $n \\geq 4$ : $n^2 \\leq 2^n$.",
            },
            {
              num: 5,
              text: "En déduire que la suite $\\left(\\dfrac{n^2}{2^n}\\right)_{n \\geq 4}$ est bornée. Quel est son comportement lorsque $n \\to +\\infty$ ?",
            },
          ],
        },
      ],
    },
    {
      id: 'ex3',
      number: 3,
      title: 'Suite Définie par Récurrence',
      points: 5,
      color: '#ffd190',
      intro:
        "On considère la suite $(u_n)$ définie par $u_0 = 3$ et, pour tout entier $n \\geq 0$ :",
      parts: [
        {
          title: 'Partie A : Étude qualitative',
          questions: [
            {
              num: 1,
              text: "Calculer $u_1$, $u_2$ et $u_3$ en valeur exacte.",
              highlight: 'u_{n+1} = \\sqrt{u_n + 6}',
            },
            {
              num: 2,
              text: "Démontrer par récurrence que pour tout $n \\in \\mathbb{N}$ : $2 \\leq u_n \\leq 3$.",
              sub: "On pourra étudier la fonction $f(x) = \\sqrt{x+6}$ sur $[2\\,;\\,3]$ et vérifier que $f([2,3]) \\subset [2,3]$.",
            },
            {
              num: 3,
              text: "Montrer que la suite $(u_n)$ est décroissante en étudiant le signe de $u_{n+1} - u_n$.",
            },
          ],
        },
        {
          title: 'Partie B : Convergence',
          questions: [
            {
              num: 4,
              text: "En déduire que la suite $(u_n)$ converge. On note $L$ sa limite.",
            },
            {
              num: 5,
              text: "Déterminer $L$ en passant à la limite dans la relation de récurrence. (Résoudre $L = \\sqrt{L+6}$.)",
            },
            {
              num: 6,
              text: "Écrire un algorithme en pseudo-code qui calcule et affiche les valeurs de $u_n$ jusqu'à ce que $|u_{n+1} - u_n| < 10^{-4}$.",
            },
          ],
        },
      ],
    },
    {
      id: 'ex4',
      number: 4,
      title: 'Suites Classiques et Application',
      points: 3,
      color: '#5cffb4',
      parts: [
        {
          questions: [
            {
              num: 1,
              text: "Une suite arithmétique vérifie $u_3 = 11$ et $u_8 = 26$. Calculer la raison $r$ et le premier terme $u_0$.",
            },
            {
              num: 2,
              text: "Calculer la somme $S = u_0 + u_1 + \\dots + u_{19}$ des $20$ premiers termes.",
            },
            {
              num: 3,
              text: "Une suite géométrique vérifie $v_0 = 5$ et $v_3 = 40$. Déterminer la raison $q$ et l'expression de $v_n$ pour $n \\geq 0$.",
            },
            {
              num: 4,
              text: "Un capital initial de $5\\,000$ euros est placé à intérêts composés au taux annuel de $3\\,\\%$. Au bout de combien d'années $n$ ce capital dépasse-t-il $8\\,000$ euros ? (Utiliser la calculatrice.)",
            },
          ],
        },
      ],
    },
  ],
}

export const equatekSubjects: Record<string, EquatekSubject> = {
  A1: subjectA1,
  A2: subjectA2,
  B1: subjectB1,
}


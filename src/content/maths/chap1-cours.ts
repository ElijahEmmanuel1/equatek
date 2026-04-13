import type { CourseSection } from '../../types'

/**
 * Cours inline — Chapitre 1 : Dérivation et convexité
 * Terminale Mathématiques Spécialité
 */
export const chap1Cours: CourseSection[] = [
  // ══════════════════════════════════════════════════════════
  // SECTION 1 — Dérivées usuelles
  // ══════════════════════════════════════════════════════════
  {
    id: 's1',
    title: 'Dérivées usuelles',
    icon: '📐',
    blocks: [
      {
        type: 'text',
        content:
          "La **dérivée** d'une fonction en un point mesure son taux de variation instantané. Géométriquement, c'est la pente de la tangente à la courbe en ce point.",
      },
      {
        type: 'table',
        content: 'Tableau des dérivées usuelles à connaître par coeur.',
        headers: ['Fonction f(x)', "Dérivée f'(x)", 'Domaine'],
        rows: [
          ['k \\; (\\text{constante})', '0', '\\mathbb{R}'],
          ['x^n \\; (n \\in \\mathbb{Z})', 'n\\,x^{n-1}', '\\mathbb{R}'],
          ['\\sqrt{x}', '\\dfrac{1}{2\\sqrt{x}}', ']0;+\\infty['],
          ['\\dfrac{1}{x}', '-\\dfrac{1}{x^2}', '\\mathbb{R}^*'],
          ['e^x', 'e^x', '\\mathbb{R}'],
          ['\\ln x', '\\dfrac{1}{x}', ']0;+\\infty['],
          ['\\sin x', '\\cos x', '\\mathbb{R}'],
          ['\\cos x', '-\\sin x', '\\mathbb{R}'],
        ],
      },
      {
        type: 'text',
        content: '**Opérations sur les dérivées** (u et v fonctions dérivables) :',
      },
      {
        type: 'formula',
        content: "(u + v)' = u' + v'",
      },
      {
        type: 'formula',
        content: "(k \\cdot u)' = k \\cdot u'",
      },
      {
        type: 'formula',
        content: "(u \\cdot v)' = u'v + uv'",
      },
      {
        type: 'formula',
        content: "\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2} \\quad (v \\neq 0)",
      },
      {
        type: 'formula',
        content: "(u \\circ v)' = v' \\cdot (u' \\circ v) \\quad \\text{(dérivée de la composée)}",
      },
      {
        type: 'example',
        title: "Exemple — Calculer f'(x) pour f(x) = 3x^4 - 2x^2 + 5x - 1",
        content: '',
        steps: [
          'On dérive terme à terme.',
          "(3x^4)' = 12x^3",
          "(-2x^2)' = -4x",
          "(5x)' = 5 \\text{ et } (-1)' = 0",
          "\\textbf{Résultat :}\\; f'(x) = 12x^3 - 4x + 5",
        ],
      },
      {
        type: 'warning',
        title: 'Piège fréquent',
        content:
          "Ne pas confondre (u·v)' = u'v + uv' avec (u·v)' = u'·v'. Le produit des dérivées est une erreur très courante en copie de Bac.",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 2 — Tangente et interprétation graphique
  // ══════════════════════════════════════════════════════════
  {
    id: 's2',
    title: 'Équation de la tangente',
    icon: '📏',
    blocks: [
      {
        type: 'text',
        content:
          "La **tangente** à la courbe de f au point d'abscisse a est la droite qui frôle la courbe en ce point. Sa pente est exactement f'(a).",
      },
      {
        type: 'formula',
        content: "\\boxed{T : y = f'(a)(x - a) + f(a)}",
      },
      {
        type: 'text',
        content:
          "- **f'(a) > 0** : la tangente est croissante\n- **f'(a) < 0** : la tangente est décroissante\n- **f'(a) = 0** : la tangente est horizontale (candidat extremum)",
      },
      {
        type: 'example',
        title: 'Exemple — Tangente de f(x) = x^2 - 3x en a = 2',
        content: '',
        steps: [
          'f(2) = 4 - 6 = -2 \\;\\Rightarrow\\; \\text{point de passage}\\; (2,\\,-2)',
          "f'(x) = 2x - 3 \\;\\Rightarrow\\; f'(2) = 1",
          '\\textbf{Tangente :}\\; y = 1 \\cdot (x - 2) - 2 = x - 4',
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 3 — Variations et extremums
  // ══════════════════════════════════════════════════════════
  {
    id: 's3',
    title: 'Variations & Extremums',
    icon: '📈',
    blocks: [
      {
        type: 'text',
        content:
          "Le **signe de f'** détermine les variations de f. Les **extremums locaux** se trouvent là où f' s'annule et change de signe.",
      },
      {
        type: 'table',
        content: "Règle du signe de f' et variations de f.",
        headers: ["Signe de f'(x)", 'Variation de f', 'Conclusion'],
        rows: [
          ["f'(x) > 0", 'f \\text{ croissante}', '\\nearrow'],
          ["f'(x) < 0", 'f \\text{ décroissante}', '\\searrow'],
          [
            "f'(x_0) = 0 \\text{ et change de signe}",
            '\\text{changement de variation}',
            '\\text{extremum local}',
          ],
          [
            "f'(x_0) = 0 \\text{ sans changement}",
            '\\text{pas de changement}',
            '\\text{palier}',
          ],
        ],
      },
      {
        type: 'text',
        content: "**Critère de la dérivée seconde pour les extremums :**",
      },
      {
        type: 'formula',
        content: "f'(x_0) = 0 \\text{ et } f''(x_0) > 0 \\;\\Rightarrow\\; \\text{minimum local}",
      },
      {
        type: 'formula',
        content: "f'(x_0) = 0 \\text{ et } f''(x_0) < 0 \\;\\Rightarrow\\; \\text{maximum local}",
      },
      {
        type: 'example',
        title: 'Exemple — Étude de f(x) = x^3 - 3x',
        content: '',
        steps: [
          "f'(x) = 3x^2 - 3 = 3(x-1)(x+1)",
          "f'(x) = 0 \\;\\Leftrightarrow\\; x = -1 \\text{ ou } x = 1",
          "\\text{Signe de } f' : + \\text{ sur } ]-\\infty;-1[,\\; - \\text{ sur } ]-1;1[,\\; + \\text{ sur } ]1;+\\infty[",
          '\\text{Maximum local en } x=-1 : f(-1) = 2',
          '\\text{Minimum local en } x=1 : f(1) = -2',
        ],
      },
      {
        type: 'warning',
        title: 'Point clé Bac',
        content:
          "Si f' s'annule sans changer de signe, il n'y a PAS d'extremum : c'est un palier. Toujours vérifier le changement de signe !",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 4 — Convexité et points d'inflexion
  // ══════════════════════════════════════════════════════════
  {
    id: 's4',
    title: "Convexité & Points d'inflexion",
    icon: '〰️',
    blocks: [
      {
        type: 'text',
        content:
          "La **convexité** décrit la courbure d'une fonction. Elle est déterminée par le signe de la dérivée **seconde** f''(x).",
      },
      {
        type: 'table',
        content: "Signe de f'' et nature de la courbure.",
        headers: ["Signe de f''(x)", 'Nom', 'Image graphique'],
        rows: [
          ["f''(x) > 0", '\\text{Convexe (sourit)}', '\\cup'],
          ["f''(x) < 0", '\\text{Concave (pleure)}', '\\cap'],
          [
            "f''(x_0) = 0 \\text{ et change de signe}",
            "\\text{Point d'inflexion}",
            '\\text{changement de courbure}',
          ],
        ],
      },
      {
        type: 'formula',
        content:
          "f''(x_0) = 0 \\text{ et } f'' \\text{ change de signe en } x_0 \\;\\Rightarrow\\; I(x_0,\\,f(x_0)) \\text{ est un point d'inflexion}",
      },
      {
        type: 'example',
        title: "Exemple — Points d'inflexion de f(x) = x^3 - 3x",
        content: '',
        steps: [
          "f'(x) = 3x^2 - 3",
          "f''(x) = 6x",
          "f''(x) = 0 \\;\\Leftrightarrow\\; x = 0",
          "f'' \\text{ change de signe en } 0 \\;\\Rightarrow\\; \\text{point d'inflexion en } (0,\\,0)",
        ],
      },
      {
        type: 'warning',
        title: 'Distinction à maîtriser',
        content:
          "- **Extremum local** : f'(x0) = 0 **et** f' change de signe\n- **Point d'inflexion** : f''(x0) = 0 **et** f'' change de signe\nCes deux notions sont indépendantes !",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 5 — Méthode type Bac
  // ══════════════════════════════════════════════════════════
  {
    id: 's5',
    title: 'Méthode complète type Bac',
    icon: '🎯',
    blocks: [
      {
        type: 'text',
        content:
          "Voici la **démarche standard** attendue en copie de Bac pour une étude complète de fonction. Chaque étape doit être rédigée.",
      },
      {
        type: 'method',
        title: 'Étude complète de f sur un intervalle I',
        content: '',
        steps: [
          "**Domaine de définition** : Identifier où f est définie (dénominateur non nul, ln > 0, racine >= 0...)",
          "**Limites aux bornes** : Calculer les limites en +-infini ou aux bornes (chercher asymptotes)",
          "**Dérivée f'(x)** : Calculer f' en détaillant les règles utilisées (produit, quotient, composée...)",
          "**Signe de f'** : Résoudre f'(x) = 0, dresser le tableau de signe",
          "**Tableau de variations** : Reporter le signe de f' puis les valeurs aux extremums",
          "**Dérivée seconde f''(x)** : Calculer f'' pour la convexité (si demandé)",
          "**Signe de f''** : Trouver les points d'inflexion (f'' = 0 avec changement de signe)",
          "**Tangentes notables** : Calculer y = f'(a)(x-a)+f(a) aux points demandés",
          "**Représentation graphique** : Placer les extremums, asymptotes, inflexions, tangentes",
        ],
      },
      {
        type: 'warning',
        title: '⚡ Points bonus souvent oubliés',
        content:
          "- **Vérifier le changement de signe** de f' avant de conclure à un extremum\n- **Rédiger la conclusion** : 'f admet un maximum local de ... en x = ...'\n- **Mention des tangentes horizontales** (f'(a)=0) si demandé en copie",
      },
    ],
  },
]

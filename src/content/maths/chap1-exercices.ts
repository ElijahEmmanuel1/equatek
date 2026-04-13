import type { CourseSection } from '../../types'

export const chap1ExercisesContent: CourseSection[] = [
  {
    id: 'exo-n1',
    title: 'Niveau 1 — Gammes, calculs et tangentes',
    icon: '📐',
    blocks: [
      {
        type: 'text',
        content: String.raw`1. Calculer la dérivée de $f(x) = 3x^4 - 5x^2 + 2x - \pi$.
2. Calculer la dérivée de $g(x) = \dfrac{2x - 1}{x + 3}$ sur $\mathbb{R} \setminus \{-3\}$.
3. Calculer la dérivée de $h(x) = (x^2 + 1)e^{2x}$.
4. Calculer la dérivée de $k(x) = \ln(x^2 - 4x + 5)$.
5. Calculer la dérivée de $m(x) = \sqrt{e^x + 1}$.`,
      },
      {
        type: 'text',
        content: String.raw`6. Calculer la dérivée de $p(x) = \cos(3x)\sin(2x)$.
7. Calculer la dérivée de $q(x) = \dfrac{e^x - e^{-x}}{e^x + e^{-x}}$.
8. Déterminer l’équation de la tangente à la courbe de $f(x) = x^3 - 2x$ au point d’abscisse $x = 1$.
9. Existe-t-il des tangentes à la courbe de $g(x) = \dfrac{x}{x - 1}$ parallèles à la droite $y = -x$ ?
10. Démontrer que la courbe de $h(x) = \ln(x)$ n’admet aucune tangente passant par l’origine du repère.`,
      },
      {
        type: 'text',
        content: String.raw`11. Étudier la dérivabilité de $f(x) = x\sqrt{x}$ en $0$.
12. Soit $f(x) = (ax + b)e^{-x}$. Déterminer $a$ et $b$ pour que la courbe passe par $A(0 ; 2)$ et admette une tangente horizontale en $x = 1$.
13. Déterminer les points de la courbe de $f(x) = x^3 - 3x^2 + 3x$ où la tangente est horizontale.
14. Calculer la dérivée seconde de $f(x) = \ln(1 + e^x)$.
15. Soit $f(x) = \sin^2(x) + \cos^2(x)$. Calculer $f\'(x)$ et retrouver une propriété trigonométrique bien connue.`,
      },
    ],
  },
  {
    id: 'exo-n2',
    title: 'Niveau 2 — Études complètes et convexité',
    icon: '📈',
    blocks: [
      {
        type: 'text',
        content: String.raw`16. Soit $f(x) = x - \ln(x)$. Dresser le tableau de variations complet de $f$ sur $]0 ; +\infty[$. En déduire le signe de $f$.
17. Soit $g(x) = (x^2 - 2x + 2)e^{-x}$. Démontrer que $g$ est strictement décroissante sur $[0 ; +\infty[$.
18. Étudier la convexité de $h(x) = x^4 - 6x^3 + 12x^2 - x + 1$. Déterminer les coordonnées de ses points d’inflexion.
19. Démontrer que l’équation $e^x = 3 - x$ admet une unique solution $\alpha$ sur $\mathbb{R}$. Donner un encadrement de $\alpha$ à $10^{-2}$.
20. Soit $f(x) = \dfrac{2\ln x}{x}$. Démontrer que la fonction admet un maximum global en un point à préciser.`,
      },
      {
        type: 'text',
        content: String.raw`21. On considère $f(x) = e^{-x^2/2}$ (courbe de Gauss). Étudier ses variations, sa convexité et tracer l’allure de sa courbe.
22. Soit $f(x) = x^3 - 3x + 1$. Déterminer le nombre de solutions de l’équation $f(x) = 0$ sur $\mathbb{R}$.
23. Étudier les variations de la fonction $f(x) = \ln\!\left(\dfrac{x + 1}{x - 1}\right)$ sur $]1 ; +\infty[$.
24. Soient les courbes $\mathcal{C}_1 : y = e^x$ et $\mathcal{C}_2 : y = x^2 + 1$. Démontrer qu’elles admettent une tangente commune au point d’abscisse $0$.
25. On pose $f_k(x) = x^k e^{-x}$ pour $k \in \mathbb{N}^*$. Démontrer que pour tout $k$, $f_k$ admet un maximum local en $x = k$.`,
      },
      {
        type: 'text',
        content: String.raw`26. Étudier la position relative des courbes $\mathcal{C}_f : y = \ln(x)$ et $\mathcal{C}_g : y = x - 1$.
27. Démontrer l’inégalité suivante pour tout $x > 0$ : $x - \dfrac{x^2}{2} < \ln(1+x) < x$.
28. Soit $f(x) = \sqrt{x^2 + x + 1} - x$. Calculer $\lim_{x \to +\infty} f(x)$. La fonction admet-elle un minimum ?
29. Démontrer que si une fonction polynomiale de degré 3 admet trois racines réelles distinctes, alors elle admet exactement un point d’inflexion situé au milieu de ses deux extremums locaux.
30. Soit $f(x) = x\ln(x) - x$. Démontrer que $f$ établit une bijection de $[1 ; +\infty[$ sur un intervalle à préciser.`,
      },
    ],
  },
  {
    id: 'exo-n3',
    title: 'Niveau 3 — Optimisation et modélisation',
    icon: '🎯',
    blocks: [
      {
        type: 'text',
        content: String.raw`31. La boîte sans couvercle : on dispose d’un carton carré de $20\text{ cm}$ de côté. On découpe des carrés de côté $x$ aux quatre coins pour former une boîte sans couvercle. Déterminer $x$ pour que le volume de la boîte soit maximal.
32. Le cylindre optimal : une canette cylindrique de volume $V = 33\text{ cL}$. Déterminer le rayon $R$ et la hauteur $H$ minimisant la surface de métal utilisée.
33. Distance minimale : soit $\mathcal{P}$ la parabole d’équation $y = x^2$ et le point $A(0 ; 3)$. Quel est le point de la parabole le plus proche de $A$ ?
34. Génie civil : deux villes $A$ et $B$ sont situées du même côté d’une autoroute rectiligne. Construire une bretelle au point $M$ pour minimiser $AM + MB$.
35. Économie : une entreprise fabrique $q$ objets. Le coût est $C(q) = 0{,}1q^2 + 10q + 1500$ et chaque objet est vendu $50$ euros. Déterminer $q$ pour maximiser le bénéfice.`,
      },
      {
        type: 'text',
        content: String.raw`36. L’échelle : une échelle de longueur $L$ s’appuie contre un mur et doit passer par-dessus une caisse cubique de $1\text{ m}$ de côté collée au mur. Quelle est la longueur minimale de l’échelle ?
37. Lois de Snell-Descartes : retrouver la loi de la réfraction par dérivation en minimisant le temps de parcours d’un rayon lumineux entre $A$, $M$ et $B$.
38. Pharmacocinétique : la concentration d’un médicament est $C(t) = \dfrac{5t}{t^2 + 4}$. À quel instant la concentration est-elle maximale ?
39. Aérodynamisme : la résistance de l’air est $R(v) = av^2 + \dfrac{b}{v}$. À quelle vitesse la résistance est-elle minimale ?
40. Triangle inscrit : déterminer les dimensions du triangle isocèle d’aire maximale que l’on peut inscrire dans un cercle de rayon $R$.`,
      },
    ],
  },
  {
    id: 'exo-n4',
    title: 'Niveau 4 — Expert et concours CPGE',
    icon: '〰️',
    blocks: [
      {
        type: 'text',
        content: String.raw`41. Formule de Leibniz : soit $f(x) = x^2e^x$. Calculer $f\'(x)$, $f\''(x)$ et $f\'''(x)$. Conjecturer une expression pour la dérivée $n$-ième $f^{(n)}(x)$ et la démontrer par récurrence.
42. Équation différentielle fonctionnelle : déterminer toutes les fonctions $f$ dérivables sur $\mathbb{R}$ telles que, pour tout $x \in \mathbb{R}$, on ait $f\'(x) = f(-x)$.
43. Polynôme et dérivées : soit $P$ un polynôme de degré $n$. Démontrer que si $P(x) \ge 0$ pour tout réel $x$, alors $P(x) + P\'(x) + P\''(x) + \dots + P^{(n)}(x) \ge 0$.
44. Suite de racines : on considère la fonction $f_n(x) = x^n + x - 1$ pour $n \ge 1$. Montrer que l’équation $f_n(x) = 0$ admet une unique solution positive notée $\alpha_n$. Montrer que la suite $(\alpha_n)$ est croissante et déterminer sa limite.
45. Équation implicite : la courbe d’équation $x^3 + y^3 - 3xy = 0$ admet une tangente en chaque point. Déterminer l’équation de la tangente au point $A\!\left(\dfrac{3}{2} ; \dfrac{3}{2}\right)$.`,
      },
      {
        type: 'text',
        content: String.raw`46. Théorème de Rolle caché : soit $f$ une fonction dérivable sur $[0 ; 1]$ telle que $f(0) = 0$ et $f(1) = 1$. Démontrer qu’il existe un réel $c \in ]0 ; 1[$ tel que $f\'(c) = 2c$.
47. Fonction $x^x$ : on étudie la fonction $f(x) = x^x$ sur $]0 ; +\infty[$. Calculer $f\'(x)$ et démontrer que la courbe de $f$ admet un unique point d’inflexion.
48. Équation fonctionnelle : soit $f$ une fonction dérivable sur $\mathbb{R}$ vérifiant pour tous réels $x, y$ : $f(x+y) = f(x)f(y)$. On suppose de plus que $f\'(0) = 1$. Montrer que $f(x) = e^x$.
49. Les polynômes d’Hermite : soit $H_n(x) = (-1)^n e^{x^2} \dfrac{d^n}{dx^n}\!\left(e^{-x^2}\right)$. Démontrer que $H_n$ est un polynôme de degré $n$.
50. Inégalité de Taylor : soit $f(x) = \sin(x) - x + \dfrac{x^3}{6}$. Montrer que pour tout $x \ge 0$, $\sin(x) \le x - \dfrac{x^3}{6} + \dfrac{x^5}{120}$.`,
      },
    ],
  },
]
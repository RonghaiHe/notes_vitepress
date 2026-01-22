# Angle-Bearing
## Angle Rigidity with Bearing-Only Constraints [1]
### Introduction
This work is founded on the recognition that **pairs of bearing measurements** originating from the same robot define angles **independently** of a coordinate frame. Contrasting with infinitesimally bearing-rigid frameworks, where individual bearings are maintained, **infinitesimally shape-similar frameworks**, are invariant to **translation, rotation, and uniform scaling** when the angles of the framework, or, equivalently, the inner-products of bearing pairs as discussed in this work, are maintained.

### Preliminaries
#### Graphs and Frameworks
Frameworks for which any of the vertex positions are the **same** are referred to as **degenerate frameworks**. For frameworks in which the positions of the vertices are functions of time, the framework is denoted $G(\boldsymbol{p}(t)) = (\mathcal{G},\boldsymbol{p}(t))$; the infinitesimal motion of $G(\boldsymbol{p}(t))$ is $\dot{\boldsymbol{p}}(t) = [\dot{\boldsymbol{p}}_1(t)^\top, \dot{\boldsymbol{p}}_2(t)^\top, \ldots \dot{\boldsymbol{p}}_n(t)^\top]^\top$. For notational clarity, time dependence of the vertex positions is omitted when the presentation is unambiguous.

Restricted to the plane, the following definitions, exemplified in Figure 1, are relevant to the results on planar frameworks in [Sections: Triangulations](#a-class-of-infinitesimally-shape-similar-frameworks-triangulations) and V. TODO

<figure>
   <img src="/frontiers_rigidity_4_1_outerplane.jpg" id="fig-4-1-outerplane" alt="Outerplane graph" width="100%" align="center">
   <figcaption> Figure 1: An outerplane graph (black vertices/edges) is a plane graph for which all vertices are on the outer face; its weak dual graph (red vertices/edges) is composed of vertices for each inner face with edges capturing the adjacency of inner faces. Addition of the dashed black edge removes a vertex from the outer face, resulting in a nonouterplanar graph whose weak dual has a cycle.</figcaption>
</figure>

::: warning Definition: planar
A graph $\mathcal{G}$ is **planar** if it can be drawn in the plane so that its edges intersect only at their ends. The planar embedding of the graph $\mathcal{G}$ is a plane graph.
:::

In other words, plane graphs are frameworks $G(\boldsymbol{p})$ in which the vertices are embedded in the plane, i.e., $\boldsymbol{p} \in\mathbb{R}^{2n}$, and the graph $\mathcal{G}$ is planar.

::: warning Definition: faces
The **faces** of a plane graph are the **arc-wise-connected open sets** partitioned by the embedding of the edges and vertices.
:::

The **outer face** of a plane graph is the **only unbounded face** of the plane graph; all other faces are **inner faces** as depicted in [Figure 1](#fig-4-1-outerplane). The **boundary** of a face is the boundary of the associated open set, and faces are **adjacent** if their boundaries share an edge. The **degree** of a face is the **number of adjacent faces**.

::: warning Definition: outerplane graph
An **outerplane graph** is a plane graph for which all vertices lie on the **boundary** of **the outer face**.
:::

The adjacency of the faces of a plane graph is described by the **weak dual graph**, defined as follows.

::: warning Definition: weak dual graph
The **weak dual graph** of a plane graph is the geometric dual graph, in which vertices correspond to faces of the plane graph and edges correspond to adjacency of the faces, less the vertex corresponding to the outer face.
:::

Finally, a **labeled graph** is denoted $g=(\mathcal{G}, \nu, \xi)$, where $\nu$ is the **set of vertex labels**, and $\xi$ is the **set of edge labels**. A **graph grammar** $\Phi$ consists of **rules**, **ordered pairs of labeled graphs** of the form $r=\left(g_a, g_b\right)$; applying $r$ **transforms** $g_a$ to $g_b$. With an initial labeled graph $g_0, \Phi$ defines a **nondeterministic dynamical system** $\left(g_0, \Phi\right)$. The trajectory of ( $g_0, \Phi$ ) is the sequence of graphs attained by applying $\Phi$, denoted $\tau=\left\{g_k\right\}_{k=0}^{\infty}$.

#### Affine Sets

The set $A \subseteq \mathbb{R}^n$ is **affine** if $\alpha x+\beta y \in A$ for $x, y \in A$ and $\alpha+\beta=1$. The **affine hull** of a set $A \subseteq \mathbb{R}^n$ is the **intersection of all affine sets containing $A$** and is written  $\operatorname{aff}\{A\}$; its dimension is denoted $\dim (\operatorname{aff} \{A\})$. The affine hull of the vertex positions of a framework is written $\operatorname{aff}\{\boldsymbol{p}\}=\operatorname{aff}\left\{\boldsymbol{p}_1, \boldsymbol{p}_2, \ldots, \boldsymbol{p}_n\right\}$.

An **isometric transformation** of $\mathbb{R}^n$ is a distance-preserving transformation $T: \mathbb{R}^n \rightarrow \mathbb{R}^n$ of the form $T=M x+c$, where $M \in \mathbb{R}^{n \times n}$ is an orthogonal matrix and $c \in \mathbb{R}^n$. Affine sets are isometric if there is an isometry $T(A)=B$. The following lemma is important for the developments of [Section: Infinitesimal Shape-Similarity](#definition-of-infinitesimal-shape-similarity).

::: tip Lemma 1
Let $A$ and $B$ be affine sets of dimension $r$ in $\mathbb{R}^n$. Then, $A$ and $B$ are **isometric**.
:::

#### Notation
The rank of a matrix is written as $\operatorname{rank}(\cdot)$; the nullspace of a matrix is denoted by $\operatorname{null}(\cdot)$, and the dimension of the nullspace is written as $\operatorname{dim}(\operatorname{null}(\cdot))$. Diagonal matrices are denoted by $\operatorname{diag}(\cdot)$, where the arguments appear ordered along the diagonal. The $d \times d$ identity matrix is denoted by $I_d ; \mathbf{1}_n \in \mathbb{R}^n$ is a vector of ones, and $\mathbf{0}$ denotes a vector of zeros. The Kronecnull product is written as $\otimes$.

### Infinitesimal Shape-Similarity

In this section, **infinitesimal shape-similarity** is presented as a tool to describe the types of formations that can be achieved by **maintaining the relative angles between robots**.
1. Beginning in [Section: Infinitesimal Shape-Similarity](#definition-of-infinitesimal-shape-similarity), infinitesimal shape-similarity is defined.
2. In [Section: Shape-Similarity Matrix](#shape-similarity-matrix), the shape-similarity matrix, the primary tool for characterizing frameworks for infinitesimal shape-similarity, is developed.
3. Finally, in [Section: Assessing Frameworks for infinitesimal Shape-Similarity](#assessing-frameworks-for-infinitesimal-shape-similarity), the nullspace of the shape-similarity matrix is examined, yielding a rank condition on the shape-similarity matrix for assessing frameworks for infinitesimal shape-similarity.

#### Definition of Infinitesimal Shape-Similarity
<figure>
   <img src="/frontiers_rigidity_4_2_bearing.jpg" id="fig-4-2-bearing" alt="Bearing" width="100%" align="center">
   <figcaption> Figure 2: Interrobot bearings capture direction information relative to a coordinate frame and are represented as unit vectors. Pairs of bearings define angles independently of a coordinate frame; infinitesimal shape-similarity characterizes frameworks for which these angles are maintained.</figcaption>
</figure>

Consider a framework${ }^2$ $G(\boldsymbol{p})$ with vertex positions $\boldsymbol{p}=\left[\boldsymbol{p}_1^{\top}, \boldsymbol{p}_2^{\top}, \ldots, \boldsymbol{p}_n^{\top}\right]^{\top} \in \mathbb{R}^{d n}$, and denote by $\Theta$ the angle-set, which contains all $m$ angles formed between 3 distinct, connected vertices in the framework; i.e., $\Theta=\{(i, k, j) \mid(i, k),(j, k) \in \mathcal{E}, i \neq j\}$. For $G(\boldsymbol{p}), \quad$ let $\theta(\boldsymbol{p})=\left[\ldots, \theta_{i k j}, \ldots\right]^{\top} \in \mathbb{R}^m, \forall(i, k, j) \in \Theta$, be the vector of angles formed between 3 distinct, connected vertices, where the angle between the vectors $\boldsymbol{z}_{i k}=\boldsymbol{p}_i-\boldsymbol{p}_k$ and $\boldsymbol{z}_{j k}=\boldsymbol{p}_j-\boldsymbol{p}_k$ centered on $\boldsymbol{p}_k$, shown in Figure 2, is given by
$$
\theta_{i k j}=\cos ^{-1}\left(\frac{\boldsymbol{z}_{i k}^{\top} \boldsymbol{z}_{j k}}{\left\|\boldsymbol{z}_{i k}\right\|\left\|\boldsymbol{z}_{j k}\right\|}\right) . \tag{1}
$$

> 2. As with infinitesimal bearing-rigidity, the edges of $G(\boldsymbol{p})$ represent interrobot bearings; however, **pairs of bearings**, rather than the bearings themselves, are the quantities of interest in the study of infinitesimal shape-similarity.

Having introduced the angles of $G(\boldsymbol{p})$, consider **infinitesimal motions** of $G(\boldsymbol{p})$ under which these angles remain constant.

::: warning Definition: angle-consistent motions
Infinitesimal motions $\boldsymbol{p}$ of the framework $G(\boldsymbol{p})$ are **angle-consistent motions** if $\frac{\mathrm{d}}{\mathrm{d} t} \theta(\boldsymbol{p}(t))=\mathbf{0},\, \forall t \geqslant 0$; the trajectory $\{\boldsymbol{p}(t)\}$ of the framework $G(\boldsymbol{p})$ is **angle-consistent** if $\dot{\boldsymbol{p}}$ is angle-consistent.
:::

Of particular interest are **angle-consistent infinitesimal motions** that preserve the shape of $G(\boldsymbol{p})$, where the shape refers to the initial angles of the corresponding complete framework $G^\kappa(\boldsymbol{p}(0))$. Geometric intuition and parallels with graph rigidity correctly suggest that the shape of the framework will be maintained by **only applying infinitesimal translations, rotations, and uniform scalings** to the framework; however, depending on the underlying graph topology, there may exist **angle-consistent** motions of $G(\boldsymbol{p})$ that do **not preserve its shape-infinitesimal shape-similarity** captures this notion.

::: warning Definition: infinitesimally shape-similar
The framework $G(\boldsymbol{p}(t))$ is **infinitesimally shape-similar** if all angle-consistent trajectories only result in translations, rotations, and uniform scalings of $G(\boldsymbol{p}(0))$.
:::

Infinitesimal shape-similarity, as defined in Definition above, requires that all angle-consistent motions of the framework be **shape-preserving**, which is a property that depends on the underlying graph topology and does not hold for frameworks at large; for example, consider the frameworks of Figure 3.

Furthermore, in order for frameworks to be infinitesimally shape-similar, the **angles** between vertices in the framework must be defined; thus, the frameworks under consideration must have **at least 3 vertices and not be degenerate**. The following subsections develop analytical tools to determine whether a given framework is infinitesimally shape-similar.

<figure>
   <img src="/frontiers_rigidity_4_3_similar.jpg" id="fig-4-3-similar" alt="infinitesimally shape-similar" width="100%" align="center">
   <figcaption> Figure 3: The left framework is infinitesimally shape-similar. In contrast, the right frameworks are not infinitesimally shape-similar because, due to network topology and pathological configuration, angle-consistent motion along the dotted lines is not a translation, rotation, or uniform scaling.</figcaption>
</figure>

#### Shape-Similarity Matrix

This subsection develops the **shape-similarity matrix**, the primary tool for investigating the infinitesimal shape-similarity of a given framework. To begin, consider **angle-consistent motions** of $G(\boldsymbol{p})$. Rather than considering the time derivatives of these angles directly, the time derivatives of the **cosines of these angles are shown to be zero along angle-consistent trajectories of $G(\boldsymbol{p})$**; this alternate formulation results in the same shape-similarity matrix, but avoids indeterminate forms in the derivative as discussed later.

::: tip Proposition 1:
For angles $\theta_{i k j}$ as described in $(1)$, $\dot{\theta}_{i k j}=0$ if and only if $\frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)=0$.
:::

::: details Details of Proof
Suppose $\dot{\theta}_{i k j}=0$; then,
$$
\frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)=-\sin \left(\theta_{i k j}\right) \dot{\theta}_{i k j}=0 . \tag{2}
$$

Now, suppose $\frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)=0$; this implies that $\cos \left(\theta_{i k j}\right)= c_1$, where $c_1 \in[-1,1]$ is a constant. Thus, $\theta_{i k j}=\cos ^{-1}\left(c_1\right)= c_2$, where $c_2 \in[0, \pi]$ is a constant, so $\dot{\theta}_{i k j}=0$. <div style="text-align: right;">$\square$</div>
:::

By Proposition 1, the time derivatives of the cosines of the angles of an angle-consistent framework are **zero**. Exploiting this fact, the structure of the shape-similarity matrix is revealed by examining the time derivative of the cosine of an arbitrary angle $\theta_{i k j}$ along angle-consistent trajectories of $G(\boldsymbol{p})$
$$
\frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)=\frac{\mathrm{d}}{\mathrm{d} t}\left(\frac{\boldsymbol{z}_{i k}^{\top} \boldsymbol{z}_{j k}}{\left\|\boldsymbol{z}_{i k}\right\|\left\|\boldsymbol{z}_{j k}\right\|}\right)=\frac{\partial \cos \left(\theta_{i k j}\right)}{\partial \boldsymbol{p}} \dot{\boldsymbol{p}}=0 .
$$

Because it depends only on $\boldsymbol{p}_i, \boldsymbol{p}_j$, and $\boldsymbol{p}_k$, the partial derivatives of $\cos \left(\theta_{i k j}\right)$ w.r.t. all other vertex positions are zero; thus,
$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)  =&\,\gamma_{i k j}\left(Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right) \dot{\boldsymbol{p}}_i+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right) \dot{\boldsymbol{p}}_j\right. \\
& \left.-\left(Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right)+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right)\right) \dot{\boldsymbol{p}}_k\right)=0
\end{aligned} \tag{3}
$$

where $\gamma_{i k j}=\left(\left\|\boldsymbol{z}_{i k}\right\|\cdot\left\|\boldsymbol{z}_{j k}\right\|\right)^{-1}$, and $Q_{\boldsymbol{z}_{j k}}\left(\boldsymbol{z}_{i k}\right) \in \mathbb{R}^d$ is the component of $\boldsymbol{z}_{i k}$ orthogonal to $\boldsymbol{z}_{j k}$ given by
$$
Q_{\boldsymbol{z}_{j k}}\left(\boldsymbol{z}_{i k}\right)=\left(I_d-\frac{\boldsymbol{z}_{j k} \boldsymbol{z}_{j k}^{\top}}{\left\|\boldsymbol{z}_{j k}\right\|^2}\right) \boldsymbol{z}_{i k} .
$$

Repeating this process for all $m$ angles in $\theta(\boldsymbol{p})$ specifying the framework of $n$ vertices, $(3)$ takes the form
$$
\frac{\mathrm{d}}{\mathrm{d} t} \cos (\theta(\boldsymbol{p}))=\Gamma(\boldsymbol{p}) R_S(\boldsymbol{p}) \dot{\boldsymbol{p}}=\mathbf{0} \tag{4}
$$

where: 
- $\cos (\theta(\boldsymbol{p}))$ denotes the elementwise cosine of the vector $\theta(\boldsymbol{p})$,
- $R_S(\boldsymbol{p}) \in \mathbb{R}^{m \times d n}$ is the **shape-similarity matrix**,
- $\Gamma(\boldsymbol{p})=\operatorname{diag}\left(\ldots, \gamma_{i k j}, \ldots\right) \in \mathbb{R}^{m \times m}$ is a diagonal matrix of positive scalars associated with rows of $R_S(\boldsymbol{p})$.

Each row of the expression in $(3)$ corresponds with an angle. The element $\boldsymbol{m}_{a q} \in \mathbb{R}^{1 \times d}$ of $R_S(x)$ corresponds to the component of the angle $a$ contributed by vertex $q$; if vertex $q$ is not one of the 3 vertices defining the angle $a$, then $\boldsymbol{m}_{a q}=0$. For example, the shape-similarity matrix of the triangle between $\boldsymbol{p}_i$, $\boldsymbol{p}_j$, and $\boldsymbol{p}_k$ is
$$
R_S(\boldsymbol{p})=\left[\begin{array}{ccc}
Q_{\boldsymbol{z}_{i j}}^{\top}\left(\boldsymbol{z}_{k j}\right) & K\left(\boldsymbol{z}_{k j}, \boldsymbol{z}_{i j}\right) & Q_{\boldsymbol{z}_{k j}}^{\top}\left(\boldsymbol{z}_{i j}\right) \\
K\left(\boldsymbol{z}_{j i}, \boldsymbol{z}_{k i}\right) & Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{k i}\right) & Q_{\boldsymbol{z}_{k i}}^{\top}\left(\boldsymbol{z}_{j i}\right) \\
Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right) & Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right) & K\left(\boldsymbol{z}_{i k}, \boldsymbol{z}_{j k}\right)
\end{array}\right], \tag{5}
$$

where $K\left(\boldsymbol{z}_{k j}, \boldsymbol{z}_{i j}\right)=-Q_{\boldsymbol{z}_{i j}}^{\top}\left(\boldsymbol{z}_{k j}\right)-Q_{\boldsymbol{z}_{k j}}^{\top}\left(\boldsymbol{z}_{i j}\right)$.
Along angle-consistent trajectories of $G(\boldsymbol{p})$, the time derivatives of each $\theta_{i k j}$ can also be written using $(2)$ and $(3)$
$$
\begin{aligned}
\dot{\theta}_{i k j}= & \lambda_{i k j}\left(Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right) \dot{\boldsymbol{p}}_i+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right) \dot{\boldsymbol{p}}_j\right. \\
& \left.-\left(Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right)+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right)\right) \dot{\boldsymbol{p}}_k\right)=0
\end{aligned} \tag{6}
$$

where $\lambda_{i k j}=-\gamma_{i k j} / \sin \left(\theta_{i k j}\right)$. Repeated for $m$ angles along angle-consistent trajectories, $\dot{\theta}=\Lambda(\boldsymbol{p}) R_S(\boldsymbol{p}) \dot{\boldsymbol{p}}=0$, where $\Lambda(\boldsymbol{p})=\operatorname{diag}\left(\ldots, \lambda_{i k j}, \ldots\right) \in \mathbb{R}^{m \times m}$.

The expression in $(6)$ was originally used to develop the shape-similarity matrix. In this formulation, the behavior of $\dot{\theta}_{i k j}$ is unclear when $\theta_{i k j}$ is $0$ or $\pi$ because of the **division by $\sin \left(\theta_{i k j}\right)$**, which results in an indeterminate form; in contrast, the formulation in $(3)$ does not suffer this limitation and enables the following observation.

::: info **Remark** 1
Consider $(3)$; when the angle $\theta_{i k j}$ formed between the 3 vertices is zero or $\pi, \frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)=0$ regardless of $\dot{\boldsymbol{p}}$. In effect, for certain configurations, **all infinitesimal motions of $G(\boldsymbol{p})$ are angle-consistent**, which is significant because **a framework that is infinitesimally shape-similar in one configuration may not be in another**; such pathologies are discussed in the next section.
:::


#### Assessing Frameworks for Infinitesimal Shape-Similarity

This subsection develops tools for **assessing arbitrary frameworks for infinitesimal shape-similarity**; examination of the **nullspace of the shape-similarity matrix** is central in this development. Consider the following theorem, which follows from the construction of the shape-similarity matrix.

::: danger Theorem 1
Infinitesimal motions $\dot{\boldsymbol{p}}$ of the framework $G(\boldsymbol{p})$ are **angle-consistent** if and only if
$$
\dot{\boldsymbol{p}} \in \operatorname{null}\left(R_S(\boldsymbol{p})\right) .
$$

:::

::: details Details of Proof
Suppose $\dot{\boldsymbol{p}}$ is an angle-consistent motion of $G(\boldsymbol{p})$; by Definition of angle-consistent motions, $\dot{\theta}(\boldsymbol{p})=\mathbf{0}$. By Proposition 1 and the construction of $R_S(\boldsymbol{p})$, this implies that $\frac{\mathrm{d}}{\mathrm{d} t} \cos (\theta(\boldsymbol{p}))=\Gamma(\boldsymbol{p}) R_S(\boldsymbol{p}) \dot{\boldsymbol{p}}= \mathbf{0}$, so $\dot{\boldsymbol{p}} \in \operatorname{null}\left(R_S(\boldsymbol{p})\right)$. Now, suppose that $\dot{\boldsymbol{p}} \in \operatorname{null}\left(R_S(\boldsymbol{p})\right)$; $\frac{\mathrm{d}}{\mathrm{d} t} \cos (\theta(\boldsymbol{p}))=\Gamma(\boldsymbol{p}) R_S(\boldsymbol{p}) \dot{\boldsymbol{p}}=\mathbf{0}$, so by Proposition 1 and Definition of angle-consistent motions, $\dot{\boldsymbol{p}}$ is an angle-consistent motion of $G(\boldsymbol{p})$. <div style="text-align: right;">$\square$</div>
:::

From Theorem 1, $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ **characterizes the angle-consistent motions** of $G(\boldsymbol{p})$, which is particularly significant when assessing the available motions of multirobot formations under angle maintenance. By Definition, $G(\boldsymbol{p})$ is **infinitesimally shape-similar** if the only $\dot{\boldsymbol{p}}$ in $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ are infinitesimal translations, rotations, and uniform scalings. The following presentation builds upon Theorem 1 and develops a basis for $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ of infinitesimally shape-similar $G(\boldsymbol{p})$. To facilitate this development, the following definition is first introduced.

::: warning Definition: oriented
The points $\boldsymbol{p}=\left[\boldsymbol{p}_1^{\top}, \boldsymbol{p}_2^{\top}, \ldots, \boldsymbol{p}_n^{\top}\right]^{\top} \in \mathbb{R}^{d n}$ are **oriented** if the last $(d-\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\}))$ coordinates of each point are zero; i.e., if $\boldsymbol{p}_i=\left[\boldsymbol{p}_{i, 1}, \ldots, \boldsymbol{p}_{i, p}, 0, \ldots, 0\right]^{\top}, \, \forall i=1, \ldots, n$. A framework $G(\boldsymbol{p})$ is **oriented** if the vertices $\boldsymbol{p}$ are **oriented**.
:::

Note that $0 \leqslant \operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\}) \leqslant d$, so $(d-\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\}))$ may be $0$ when the dimension of the affine hull of the points is sufficiently high. For example, **3 vertices in the plane are always oriented** if they are **not collinear or collocated** because the dimension of the affine hull of the vertices is $2$.

As demonstrated shortly, oriented frameworks facilitate examination of $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ for the development of a basis; towards this result, denote the standard basis vectors of $\mathbb{R}^d$ by $\boldsymbol{e}_\alpha \in \mathbb{R}^d, \alpha=1, \ldots, d$, and denote by $S_\beta \in \mathbb{R}^{d \times d}, \beta=1, \ldots,\binom{d}{2}$, skew symmetric matrices formed by left and right multiplying the matrix $S=\left[\begin{array}{cc}0 & 1 \\ -1 & 0\end{array}\right]$ by distinct two-combinations of the standard basis vectors; i.e.,
$$
S_\beta \in\left\{\left[e_i\, e_j\right] S \left[ e_i^{\top}\, e_j^{\top}\right]^{\top} \mid 1 \leqslant i<d, i<j \leqslant d\right\} .
$$

The following theorem can now be stated.

::: danger Theorem 2
Let $G(\boldsymbol{p})$ be an oriented framework and $\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})>1 ; G(\boldsymbol{p})$ is **infinitesimally shape-similar** if and only if a basis${ }^3$ for $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ can be formed from: $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha, \alpha=1, \ldots, d ; \boldsymbol{p}$; and the nonzero vectors of $\left(I_n \otimes S_\beta\right) \boldsymbol{p}$, $\beta=1, \ldots,\binom{d}{2}$.
:::

> 3. Using the definition of oriented frameworks, the linear independence of the basis vectors is established in the proof of Theorem 2, which facilitates the determination of the nullity of the shape-similarity matrix

::: detail Details of proof
To prove Theorem 2, the proposed basis vectors are first shown to be in $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ and linearly independent. The proof then follows from Definition of infinitesimally shape-similar and Theorem 1.

To show that each proposed basis vector lies in the nullspace of the shape-similarity matrix of $G(\boldsymbol{p})$, examine an arbitrary row of $R_S(\boldsymbol{p})$ as in $(3)$. An arbitrary row of $R_S(\boldsymbol{p})$ as in $(3)$ multiplied by an arbitrary vector $\left(\mathbf{1} \otimes c_\alpha\right), \alpha=1, \ldots, d$, yields
$$
\left(Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right)+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right)-Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right)-Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right)\right) e_\alpha=0 ;
$$

thus, $\left(\mathbf{1} \otimes e_\alpha\right) \in \operatorname{null}\left(R_S(\boldsymbol{p})\right),\, \forall \alpha=1, \ldots, d$. Multiplying an arbitrary row of $R_S(\boldsymbol{p})$ by $\boldsymbol{p}$ yields
$$
Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right) \boldsymbol{z}_{i k}+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right) \boldsymbol{z}_{j k}=0 ;
$$

thus, $\boldsymbol{p} \in \operatorname{null}\left(R_S(\boldsymbol{p})\right)$. Finally, multiplying an arbitrary row of $R_S(\boldsymbol{p})$ by an arbitrary vector of $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta=1, \ldots,\binom{d}{2}$
$$
\begin{aligned}
&Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right) S_\beta \boldsymbol{z}_{i k}+Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right) S_\beta \boldsymbol{z}_{j k} \\
=&\,\boldsymbol{z}_{j k}^{\top} S_\beta \boldsymbol{z}_{i k}+\boldsymbol{z}_{i k}^{\top} S_\beta \boldsymbol{z}_{j k}=0
\end{aligned}
$$

which follows from the skew symmetric property of $S_\beta$; thus, $\left(I_n \otimes S_\beta\right) \boldsymbol{p} \in \operatorname{null}\left(R_S(\boldsymbol{p})\right),\, \forall \beta=1, \ldots,\binom{d}{2}$.

Having established that each of the proposed basis vectors lies in $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$, linear independence is now shown. Begin by considering the vectors $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha, \alpha=1, \ldots, d$, which are **mutually orthogonal** because the standard basis vectors are mutually orthogonal; i.e.,
$$
\left(\mathbf{1}_n \otimes \boldsymbol{e}_i\right)^{\top}\left(\mathbf{1}_n \otimes \boldsymbol{e}_j\right)=\boldsymbol{e}_i^{\top}\left(\mathbf{1}_n^{\top} \otimes I_d\right)\left(\mathbf{1}_n \otimes I_d\right) \boldsymbol{e}_j=\mathbf{0} .
$$

Now consider linear independence of the vectors $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha$, $\alpha=1, \ldots, d$, and $\boldsymbol{p}$. Suppose that $\boldsymbol{p}$ is linearly dependent of the vectors $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha, \alpha=1, \ldots, d$, then there exist nontrivial $\zeta_\alpha \in \mathbb{R}, \alpha=1, \ldots, d$, such that
$$
\boldsymbol{p}=\sum_{\alpha=1}^d \zeta_\alpha\left(\mathbf{1}_n \otimes \boldsymbol{e}_\alpha\right) . \tag{7}
$$

Because of the sparse structure of $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha$, which can affect only the $\alpha$-coordinate of each vertex, $(7)$ would require that all $\boldsymbol{p}_1=\boldsymbol{p}_2=\ldots=\boldsymbol{p}_n$ and result in $\dim(\operatorname{aff}\{\boldsymbol{p}\})=0$, contradicting the assumption that $\dim(\operatorname{aff}\{\boldsymbol{p}\})>1$; thus, $\boldsymbol{p}$ is **linearly independent** of $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha,\, \forall \alpha=1, \ldots, d$.

To show linear independence of $\boldsymbol{p}$ and the vectors $\left(I_n \otimes S_\beta\right) \boldsymbol{p}$, $\beta=1, \ldots,\binom{d}{2}$, note that the matrix $I_n \otimes S_\beta$ is skew symmetric, so $\boldsymbol{p}^{\top}\left(I_n \otimes S_\beta\right) \boldsymbol{p}=0$, and $\boldsymbol{p}$ is **linearly independent** of the vectors $\left(I_n \otimes S_\beta\right) \boldsymbol{p},\, \forall \beta=1, \ldots,\binom{d}{2}$.

Linear independence of the vectors $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta= 1, \ldots,\binom{d}{2}$, requires examination of the effect of multiplying $\boldsymbol{p}$ by $I_n \otimes S_\beta$; to do this, multiply $\boldsymbol{p}_i$ by $S_\beta$. Such multiplication swaps two of the coordinates of $\boldsymbol{p}_i$, negates one of them, and sets the rest to zero. For example, consider the following instantiation of $\boldsymbol{p}_i$ and $S_\beta$ in $\mathbb{R}^3$ :
$$
S_\beta \boldsymbol{p}_i=\left[\begin{array}{ccc}
0 & 1 & 0 \\
-1 & 0 & 0 \\
0 & 0 & 0
\end{array}\right]\left[\begin{array}{l}
\boldsymbol{p}_{i, 1} \\
\boldsymbol{p}_{i, 2} \\
\boldsymbol{p}_{i, 3}
\end{array}\right]=\left[\begin{array}{c}
\boldsymbol{p}_{2, i} \\
-\boldsymbol{p}_{1, i} \\
0
\end{array}\right] .
$$

The Kronecker product repeats this effect for each vertex position in $\boldsymbol{p}$. Because $\boldsymbol{p}$ is oriented, the last $( d-\dim(\operatorname{aff}\{\boldsymbol{p}\}) )$ coordinates of each vertex position are zero, so there are exactly $\binom{d}{2}-\binom{d-\dim(\operatorname{aff}\{\boldsymbol{p}\})}{2}$ nonzero vectors of $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta=1, \ldots,\binom{d}{2}$; linear independence of these nonzero vectors is examined.

Suppose that some of the nonzero vectors of $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta= 1, \ldots,\binom{d}{2}$, are linearly dependent of the rest; let $q$ be the number of linearly independent vectors, and without loss of generality, order them such that the vectors $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta=1, \ldots, q$, are linearly independent. There must exist nontrival $\zeta_\beta \in \mathbb{R}, \beta= 1, \ldots, q$, such that each linearly dependent vector, e.g.,  $\left(I_n \otimes S_{q+1}\right) \boldsymbol{p}$, can be written as
$$
\left(I_n \otimes S_{q+1}\right) \boldsymbol{p}=\sum_{\beta=1}^q \zeta_\beta\left(I_n \otimes S_\beta\right) \boldsymbol{p} \tag{8}
$$

From the sparse structure of $I_n \otimes S_\beta$, no values of $\zeta_\beta$ for $\beta=1, \ldots, q$ can satisfy $(8)$, and the expression in $(8)$ holds only for $\boldsymbol{p}_1=\boldsymbol{p}_2=\ldots=\boldsymbol{p}_n$, which contradicts the assumption that $\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})>1$; thus, the nonzero vectors of $\left(I_n \otimes S_\beta\right) \boldsymbol{p}$, $\beta=1, \ldots,\binom{d}{2}$, are linearly independent.

Now, consider linear independence of the vectors $\mathbf{1}_n \otimes e_\alpha$, $\alpha=1, \ldots, d$, and the nonzero vectors of $\left(I_n \otimes S_\beta\right) \boldsymbol{p}$, $\beta=1, \ldots,\binom{d}{2}$. Choose an arbitrary $\left(I_n \otimes S_\beta\right) \boldsymbol{p}$ and suppose that it is linearly dependent of $\mathbf{1}_n \otimes \boldsymbol{e}_\alpha, \alpha=1, \ldots, d$, then there exists nontrivial $\zeta_\alpha$ such that
$$
\left(I_n \otimes S_\beta\right) \boldsymbol{p}=\sum_{\alpha=1}^d \zeta_\alpha\left(I_n \otimes \boldsymbol{e}_\alpha\right) \tag{9}
$$

Because of the sparse structure of $I_n \otimes e_\alpha$, which affects only the $\alpha$-coordinates of all of the vertices, $(9)$ implies that $\boldsymbol{p}_1=\boldsymbol{p}_2=\ldots=\boldsymbol{p}_n$, contradicting the assumption that $\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})>1$. Thus, $\mathbf{1}_n \otimes e_\alpha, \alpha=1, \ldots, d$, and nonzero $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta=1, \ldots,\binom{d}{2}$, are linearly independent.

Having demonstrated **linear independence** of the basis vectors in Theorem 2, the proof can be completed.
- The vectors $\mathbf{1}_n \otimes e_\alpha, \alpha=1, \ldots, d$ correspond with **translations**; 
- The vector $\boldsymbol{p}$ corresponds with **uniform scaling**;
- The nonzero vectors $\left(I_n \otimes S_\beta\right) \boldsymbol{p}, \beta=1, \ldots,\binom{d}{2}$, correspond with **rotations**.

By Definition of infinitesimally shape-similar, if $G(\boldsymbol{p})$ is infinitesimally shape-similar, then by Theorem 1 , the only vectors in $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ result in infinitesimal translations, rotations, and uniform scalings, so the vectors of Theorem 2 form a basis for $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$. The converse follows from Theorem 1; vectors in $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ are angle-consistent motions of the framework. If the vectors of Theorem 2 form a basis for $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$, then the only angle-consistent motions of $G(\boldsymbol{p})$ are infinitesimal translation, rotation, and uniform scaling, so $G(\boldsymbol{p})$ is infinitesimally shape-similar by the related definition. <div style="text-align: right;">$\square$</div>
:::

Having found a basis for the nullspace of the shape-similarity matrix of oriented frameworks, the following statements complete the analysis by first proving the existence of isometries that orient arbitrary frameworks and then proving invariance of $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$ to such transformations.

::: tip Proposition 2
Let $\boldsymbol{p}=\left[\boldsymbol{p}_1^{\top}, \boldsymbol{p}_2^{\top}, \ldots, \boldsymbol{p}_n^{\top}\right]^{\top} \in \mathbb{R}^{d n}$. There exists an **isometry** $T: \mathbb{R}^d \rightarrow \mathbb{R}^d$ such that $\bar{\boldsymbol{p}}=\left[T\left(\boldsymbol{p}_1\right)^{\top}, T\left(\boldsymbol{p}_2\right)^{\top}, \ldots, T\left(\boldsymbol{p}_n\right)^{\top}\right]^{\top}$ is oriented.
:::

::: details Details of Proof
By construction, $\dim(\operatorname{aff}\{\boldsymbol{p}\})=\dim(\operatorname{aff}\{\bar{\boldsymbol{p}}\})$. By definition and Lemma 1, there exists an isometric transformation $T$ such that aff $\{\bar{\boldsymbol{p}}\}=T(\operatorname{aff}\{\boldsymbol{p}\})$, which satisfies $\bar{\boldsymbol{p}}=\left[T\left(\boldsymbol{p}_1\right)^{\top}, T\left(\boldsymbol{p}_2\right)^{\top}, \ldots, T\left(\boldsymbol{p}_n\right)^{\top}\right]^{\top}$. <div style="text-align: right;">$\square$</div>
:::

As an example for Definition of oriented and Proposition 2, consider a framework of 2 vertices in the plane; by Proposition 2, an isometry exists that translates and rotates the vertices such that they are oriented along the horizontal axis.

::: tip Lemma 2
The **nullspace** of the shape-similarity matrix is **invariant** to isometric transformations.
:::

::: details Details of Proof
Let $T: \mathbb{R}^d \rightarrow \mathbb{R}^d$ be an isometric transformation; thus, for a point $\boldsymbol{p}_i \in \mathbb{R}^d, T\left(\boldsymbol{p}_i\right)=M \boldsymbol{p}_i+c$, where $c \in \mathbb{R}^d$ is a translation and $M \in \mathbb{R}^{d \times d}$ is an orthogonal matrix. Consider an arbitrary angle in a framework $G(\boldsymbol{p})$ formed between the transformed vertices $T\left(\boldsymbol{p}_i\right), T\left(\boldsymbol{p}_k\right)$, and $T\left(\boldsymbol{p}_j\right)$ as in $(1)$, and verify that it is invariant under the isometry
$$
\begin{aligned}
\cos \left(\theta_{i k j}\right) & =\frac{\left(T\left(\boldsymbol{p}_i\right)-T\left(\boldsymbol{p}_k\right)\right)^{\top}\left(T\left(\boldsymbol{p}_j\right)-T\left(\boldsymbol{p}_k\right)\right)}{\left\|T\left(\boldsymbol{p}_i\right)-T\left(\boldsymbol{p}_k\right)\right\|\left\|T\left(\boldsymbol{p}_j\right)-T\left(\boldsymbol{p}_k\right)\right\|} \\
& =\frac{\left(\boldsymbol{p}_i-\boldsymbol{p}_k\right)^{\top} M^{\top} M\left(\boldsymbol{p}_j-\boldsymbol{p}_k\right)}{\left\|M \boldsymbol{p}_i-M \boldsymbol{p}_k\right\|\left\|M \boldsymbol{p}_j-M \boldsymbol{p}_k\right\|} \\
& =\frac{\left(\boldsymbol{p}_i-\boldsymbol{p}_k\right)^{\top}\left(\boldsymbol{p}_j-\boldsymbol{p}_k\right)}{\left\|\boldsymbol{p}_i-\boldsymbol{p}_k\right\|\left\|\boldsymbol{p}_j-\boldsymbol{p}_k\right\|}
\end{aligned}
$$

Thus, the time derivative $\frac{\mathrm{d}}{\mathrm{d} t} \cos \left(\theta_{i k j}\right)$ is invariant under the isometric transformation, so the shape-similarity matrix and its nullspace are invariant to isometric transformations. <div style="text-align: right;">$\square$</div>
:::

Proposition 2 and Lemma 2 support the following corollary.

::: tip Corollary of Theorem 2
Let $G(\boldsymbol{p})$ be a framework where $\dim(\operatorname{aff}\{\boldsymbol{p}\})>1$, and denote the corresponding **oriented framework** by $G(\bar{\boldsymbol{p}})$. The basis vectors in Theorem 2 for $\operatorname{null}\left(R_S(\bar{\boldsymbol{p}})\right)$ are basis vectors for $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$.

::: details Details of Proof
By Proposition 2, there exists an isometric transformation between $\boldsymbol{p}$ and $\bar{\boldsymbol{p}}$, and by Lemma 2, $\operatorname{null}\left(R_S(\boldsymbol{p})\right)= \operatorname{null}\left(R_S(\bar{\boldsymbol{p}})\right)$ and, thus, share the basis vectors of Theorem 2. <div style="text-align: right;">$\square$</div>
:::

The results in Theorem 1 and Corrollary of Theorem 2 facilitate understanding of the available motions of multirobot teams maintaining angles and underpin the design of the formation-control strategies of Section V TODO; furthermore, these results yield a **rank condition** for evaluating frameworks for infinitesimal shapesimilarity.

::: danger Theorem 3
The framework $G(\boldsymbol{p})$ is **infinitesimally shape-similar** if and only if
$$
\begin{aligned}
  &\operatorname{rank}\left(R_S(\boldsymbol{p})\right)\\
  =&d n+\frac{1}{2} \dim(\operatorname{aff}\{\boldsymbol{p}\})(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1)-d(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1)-1 .   
\end{aligned} \tag{10}
$$

:::

::: details Details of Proof
The necessary and sufficient condition of Theorem 3 is proved for 3 cases of the dimension of the affine hull of the vertices of the framework. 
1. Let $G(\boldsymbol{p})$ be a framework with $\dim(\operatorname{aff}\{\boldsymbol{p}\})=0$. Such a framework is degenerate; it is not infinitesimally shape-similar, and the shape-similarity matrix, and thus the rank of the shape-similarity matrix, is undefined and does not satisfy $(10)$.
2. Let $G(\boldsymbol{p})$ be a framework with $\dim(\operatorname{aff}\{\boldsymbol{p}\})=1$; the corresponding shape-similarity matrix is a matrix of zeros. By Theorem 1, all infinitesimal motions of the framework are angle-consistent, so $G(\boldsymbol{p})$ is not infinitesimally shape-similar; furthermore, $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=0$ and does not satisfy $(10)$.
3. Consider frameworks $G(\boldsymbol{p})$ with $\dim(\operatorname{aff}\{\boldsymbol{p}\})>1$. The nullity of the shape-similarity matrix is the number of basis vectors for $\operatorname{null}\left(R_S(\boldsymbol{p})\right)$. Theorem 2 and Corrollary of Theorem 2 present such a basis, and as a direct result, a framework $G(\boldsymbol{p})$ is infinitesimally shape-similar if and only if
$$
\operatorname{dim}\left(\operatorname{null}\left(R_S(\boldsymbol{p})\right)\right)=-\frac{1}{2} \dim(\operatorname{aff}\{\boldsymbol{p}\})(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1)+d(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1)+1,
$$

where from the proof of Theorem 2, and the extension to unoriented frameworks in Corrollary 2.1, there are $d$ basis vectors for translations, one basis vector for uniform scaling, and $\binom{d}{2}-\binom{d-\dim(\operatorname{aff}\{\boldsymbol{p}\})}{2}$ basis vectors for rotations. The rank condition in $(10)$ follows from the necessary and sufficient condition on the nullity of the shape-similarity matrix in Theorem 2. <div style="text-align: right;">$\square$</div>
:::

The following corollary to Theorem 3 is presented for frameworks whose affine hull has **sufficient dimension**.

::: tip Corollary of Theorem 3
Let $G(\boldsymbol{p})$ be a framework with
$$
\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})=\max _{\boldsymbol{p} \in \mathbb{R}^{d n}}[\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})] .
$$

$G(\boldsymbol{p})$ is infinitesimally shape-similar if and only if
$$
\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=\left\{\begin{array}{ll}
d n-\frac{1}{2} d(d+1)-1, & n \geqslant d \\
\frac{1}{2}(n-2)(n+1), & n<d
\end{array} .\right.
$$

:::

::: details Details of Proof
The rank condition in $(10)$ can be conditioned on the relative values of $n$ and $d$. First, suppose $n>d ; \max\limits _{\boldsymbol{p} \in \mathbb{R}^{d n}}[\dim(\operatorname{aff}\{\boldsymbol{p}\})]=d$, for which $(10)$ reduces to $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=d n-\frac{1}{2} d(d+1)-1$. Similarly, for $n=d$, $p=\max\limits_{\boldsymbol{p} \in \mathbb{R}^{d n}}[\dim(\operatorname{aff}\{\boldsymbol{p}\})]=d-1$, and the rank condition reduces to $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=d n-\frac{1}{2} d(d+1)-1$. Finally, for $n<d, p=\max\limits_{\boldsymbol{p} \in \mathbb{R}^{d n}}[\dim(\operatorname{aff}\{\boldsymbol{p}\})]=n-1$, in which case, $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=\frac{1}{2}(n-2)(n+1)$. <div style="text-align: right;">$\square$</div>
:::

The **rank conditions** in Theorem 3 and Corollary of Theorem 3 are important tools when analyzing frameworks for infinitesimal shape-similarity, which will be demonstrated in [Section: Triangulations](#a-class-of-infinitesimally-shape-similar-frameworks-triangulations) where the rank of the shape-similarity matrix is examined explicitly to evaluate a class of frameworks for use in formation control. Beyond their utility in this example, the rank conditions enable further understanding of the significance of the framework embedding. As suggested in Remark 1, **the particular embedding of $\boldsymbol{p}$** has a fundamental effect on the infinitesimal shape-similarity of $G(\boldsymbol{p})$; the following definition characterizes frameworks for which the rank of the shape-similarity matrix does not attain its maximum over all embeddings.

::: warning Definition: pathological
A framework $G(\boldsymbol{p})$ is **pathological** ${ }^4$ if
$$
\operatorname{rank}\left(R_S(\boldsymbol{p})\right)<\max _{\boldsymbol{p} \in \mathbb{R}^{d n}}\left[\operatorname{rank}\left(R_S(\boldsymbol{p})\right)\right]
$$

and nonpathological otherwise.
:::

> 4. **pathological** defined in other research described frameworks for which any vertices were collocated or collinear, while its definition here is defined in terms of the rank of the shape-similarity matrix and describes frameworks that do not achieve infinitesimal shape-similarity due to the particular configuration of the vertices.

As a canonical example, a framework of collinear vertices, such as that shown in [Figure 3](#fig-4-3-similar), is pathological because its shapesimilarity is a matrix of zeros as noted in the proof of Theorem 3. The following result follows from Definition of pathological.

::: danger Theorem 4
If $G(\boldsymbol{p})$ is a pathological framework, then it is **not infinitesimally shape-similar**.
:::

::: details of Proof
If $G(\boldsymbol{p})$ is a pathological framework, then by Definition of pathological, $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)<\max\limits_{\boldsymbol{p} \in \mathbb{R}^{d n}}\left[\operatorname{rank}\left(R_S(\boldsymbol{p})\right)\right]$. For any $G(\boldsymbol{p})$, $\max\limits_{\boldsymbol{p} \in \mathbb{R}^{\mathrm{dn}}}\left[\operatorname{rank}\left(R_S(\boldsymbol{p})\right)\right] \leqslant d n+\dim(\operatorname{aff}\{\boldsymbol{p}\})(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1) / 2-d(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1)-1$, with equality if and only if $G(\boldsymbol{p})$ is infinitesimally shape-similar by Theorem 3. Because
$$
\operatorname{rank}\left(R_S(\boldsymbol{p})\right)<d n+\dim(\operatorname{aff}\{\boldsymbol{p}\})(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1) / 2-d(\dim(\operatorname{aff}\{\boldsymbol{p}\})+1)-1
$$

$G(\boldsymbol{p})$ is not infinitesimally shape-similar. <div style="text-align: right;">$\square$</div>
:::

::: info Remark 2
Assessing frameworks $G(\boldsymbol{p})$ for infinitesimal shape-similarity highlights the importance of both the network topology described by $\mathcal{G}$ and the embedding $\boldsymbol{p}$. Notably, the topology qualifies $G(\boldsymbol{p})$ for infinitesimal shape-similarity, and the embedding determines whether $G(\boldsymbol{p})$ is infinitesimally shape-similar. Relating Theorem 3 and Theorem 4, pathological frameworks with insufficient affine hull dimension do not satisfy the rank condition; for example, a fully connected framework of four vertices in $\mathbb{R}^5$ having $\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})=2$ is pathological with $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=4$, but is infinitesimally shape-similar with $\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=5$ when embedded such that $\operatorname{dim}(\operatorname{aff}\{\boldsymbol{p}\})=3$. Remarkably, in $\mathbb{R}^2$ and $\mathbb{R}^3$, the spaces of most interest for robot teams, the rank condition of Corollary of Theorem 3 always evaluates to the first case, and such frameworks are pathological only if the vertices are **collinear**.
:::

### A Class of Infinitesimally Shape-Similar Frameworks: Triangulations
Previously, infinitesimal shape-similarity was introduced to characterize the motions available to teams of robots in which angles in the formation are maintained. To demonstrate the significance of this development in the context of multirobot formations, this section examines triangulations, a structured class of planar frameworks.
- Beginning in [Section: Defining Triangulations](#defining-triangulations), triangulations are precisely defined.
- In [Section: Triangulations are infinitesimally Shape-Similar](#triangulations-are-infinitesimally-shape-similar), triangulations are shown to be infinitesimally shape-similar.
- Finally, [Section: Class of Triangulations](#a-class-of-triangulations) describes a mechanism for generating a class of triangulations.

#### Defining Triangulations
This subsection precisely defines triangulations, the frameworks of interest to this work.

::: warning Definition: near-triangulation $(1^\text{st})$
A **near-triangulation** is a plane graph all of whose inner faces have degree $3$.
:::

::: warning Definition: near-triangulation $(2^\text{nd})$
A **triangulation** is a near-triangulation whose outer face is a cycle. ${ }^{5}$
:::

> 5. An equivalent definition for triangulated disks is: the outer face is a cycle if the edges and vertices on the outer face form a cycle.

The $2^\text{nd}$ Definition of near-triangulation, which captures the features of the class of frameworks of interest, differs from other definitions of the term triangulation. For example, in the past research, triangulations refer to maximal planar graphs, which are plane graphs whose faces have degree $3$. The choice to define triangulations as in the $2^\text{nd}$ Definition of near-triangulation was made to improve clarity in the terminology of this work.

Relating the $2^\text{nd}$ Definition of near-triangulation to the results presented in [Section: Infinitesimally Shape-Similarity](#infinitesimal-shape-similarity), triangulations are planar objects; these frameworks are embedded in the plane with $\boldsymbol{p} \in \mathbb{R}^{2 n}$. Furthermore, as a consequence of the $2^\text{nd}$ Definition of near-triangulation, triangulations are nondegenerate and nonpathological.

#### Triangulations are Infinitesimally Shape-Similar

Having defined triangulations, this section justifies interest in this class of frameworks by showing that **triangulations are infinitesimally shape-similar**. To begin, consider the following theorem pertaining to the complete framework $G^\kappa(\boldsymbol{p})$.

::: danger Theorem 5
If the complete framework $G^\kappa(\boldsymbol{p})$ with $n \geqslant 3$ vertices is nonpathological and nondegenerate, then it is infinitesimally shape-similar. ${ }^{6}$
:::

> 6. Theorem 5 and its proof reflect changes to the definition of pathological frameworks.

::: details Details of Proof
If the complete framework $G^\kappa(\boldsymbol{p})$ with $n \geqslant 3$ vertices is nonpathological and nondegenerate, then the corresponding shape-similarity matrix $R_S(\boldsymbol{p})$ satisfies
$$
\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=\max _{\boldsymbol{p} \in \mathbb{R}^{d n}}\left[\operatorname{rank}\left(R_S(\boldsymbol{p})\right)\right] .
$$

Because the complete graph contains all edges, and thus all angles, the rank of the shape-similarity matrix of the complete framework satisfies
$$
\operatorname{rank}\left(R_S(\boldsymbol{p})\right)=\max _{\mathcal{E}}\left[\max _{\boldsymbol{p} \in \mathbb{R}^{d n}}\left[\operatorname{rank}\left(R_S(\boldsymbol{p})\right)\right]\right]
$$

and equals the rank condition in $(10)$, so by Theorem 3, $G^\kappa(\boldsymbol{p})$ is infinitesimally shape-similar. <div style="text-align: right;">$\square$</div>
:::

Note that the **triangle is both a triangulation and a complete framework**, so by Theorem 5, it is infinitesimally shape-similar; using this fact, the result in Theorem 6 follows by induction.

::: danger Theorem 6
Triangulations are infinitesimally shape-similar. ${ }^{7}$
:::

> 7. It's proved that triangulated frameworks are infinitesimally shapesimilar. Theorem 6 and its proof reflect clarifications to the definitions of triangulations and pathology; furthermore, the proof is restructured to emphasize the edge additions that do not increase the rank of the shape-similarity matrix.

::: details Details of Proof
The theorem is proved by induction, and for the purpose of this proof, $G\left(\boldsymbol{p}^k\right)$ refers to a triangulation of $k$ vertices; the corresponding shape-similarity matrix is $R_S\left(\boldsymbol{p}^k\right)$.

Consider the triangulation $G\left(\boldsymbol{p}^3\right)$, which, by Theorem 5, is infinitesimally shape-similar with $\operatorname{rank}\left(R_S\left(\boldsymbol{p}^3\right)\right)=2$. Suppose $G\left(\boldsymbol{p}^{k-1}\right)$ is an infinitesimally shape-similar triangulation with $m$ angles. Connect $x_k$ to adjacent vertices $x_i$ and $x_j$ on the outer face by two edges ([Figure 4](#fig-4-4-addition), left). The triangulation is $G\left(\boldsymbol{p}^k\right)$, whose shape-similarity matrix can be written as
$$
R_S\left(\boldsymbol{p}^k\right)=\left[\begin{array}{cc}
R_S\left(\boldsymbol{p}^{k-1}\right) & 0 \\
A\left(\boldsymbol{p}^k\right) & B\left(\boldsymbol{p}^k\right)
\end{array}\right],
$$

where $R_S\left(\boldsymbol{p}^{k-1}\right) \in \mathbb{R}^{m \times 2(k-1)}, A\left(\boldsymbol{p}^k\right) \in \mathbb{R}^{q \times 2(k-1)}, B\left(\boldsymbol{p}^k\right) \in \mathbb{R}^{q \times 2}$, and $q$ is the number of new angles formed by the vertex/edge-addition. The matrix $A\left(\boldsymbol{p}^k\right)$ is composed of orthogonal projections of vectors including $x_k$ onto vectors not including $x_k$, and $B\left(\boldsymbol{p}^k\right)$ is formed of orthogonal projections onto vectors including $x_k$.

Consider the reduced shape-similarity matrix $\bar{R}_S\left(\boldsymbol{p}^k\right)$ of $G\left(\boldsymbol{p}^k\right)$ formed by considering only the three angles of the new triangle created by the vertex/edge-addition rather than the $q$ new angles ([Figure 4](#fig-4-4-addition), center), which can be written as
$$
\bar{R}_S\left(\boldsymbol{p}^k\right)=\left[\begin{array}{cc}
R_S\left(\boldsymbol{p}^{k-1}\right) & 0 \\
\bar{A}\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right) & \bar{B}\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)
\end{array}\right]
$$
where $\bar{A}\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)$ and $\bar{B}\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)$ are the rows of $A\left(\boldsymbol{p}^k\right)$ and $B\left(\boldsymbol{p}^k\right)$ corresponding with the three angles of the new triangle. Because $\bar{R}_S\left(\boldsymbol{p}^k\right)$ has $q-3$ fewer rows than $R_S\left(\boldsymbol{p}^k\right)$, $\operatorname{rank}\left(\bar{R}_S\left(\boldsymbol{p}^k\right)\right) \leqslant \operatorname{rank}\left(R_S\left(\boldsymbol{p}^k\right)\right) \leqslant 2 k-4$.

Replacing $\bar{A}\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)$ with zeros yields the block diagonal matrix $\hat{R}_S\left(\boldsymbol{p}^k\right)$, which is related to $R_S\left(\boldsymbol{p}^k\right)$ through the rank relationship: $\operatorname{rank}\left(\hat{R}_S\left(\boldsymbol{p}^k\right)\right) \leqslant \operatorname{rank}\left(R_S\left(\boldsymbol{p}^k\right)\right)$.

From the construction of the shape-similarity matrix,
$$
B\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)=\left[\begin{array}{c}
-Q_{\boldsymbol{z}_{i k}}^{\top}\left(\boldsymbol{z}_{j k}\right)-Q_{\boldsymbol{z}_{j k}}^{\top}\left(\boldsymbol{z}_{i k}\right) \\
Q_{\boldsymbol{z}_{k j}}^{\top}\left(\boldsymbol{z}_{j i}\right) \\
Q_{\boldsymbol{z}_{k i}}^{\top}\left(\boldsymbol{z}_{i j}\right)
\end{array}\right]
$$

The rank of $B\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)$ is at most $2$. If the last two rows of $B\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)$ were linearly dependent then there would exist a nonzero $\alpha \in \mathbf{R}$ such that $\alpha Q_{\boldsymbol{z}_{k j}}\left(\boldsymbol{z}_{j i}\right)=Q_{\boldsymbol{z}_{k i}}\left(\boldsymbol{z}_{i j}\right)$, which rewritten as $-\alpha Q_{\boldsymbol{z}_{k j}}\left(\boldsymbol{z}_{i j}\right)=Q_{\boldsymbol{z}_{k t}}\left(\boldsymbol{z}_{i j}\right)$, can be expanded to
$$
-\alpha\left(I_2-\frac{\boldsymbol{z}_{k j} \boldsymbol{z}_{k j}^{\top}}{\left\|\boldsymbol{z}_{k j}\right\|^2}\right) \boldsymbol{z}_{i j}=\left(I_2-\frac{\boldsymbol{z}_{k i} \boldsymbol{z}_{k i}^{\top}}{\left\|\boldsymbol{z}_{k i}\right\|^2}\right) \boldsymbol{z}_{i j} .
$$

Such an $\alpha$ would require that $\boldsymbol{z}_{k i}$ be parallel with $\boldsymbol{z}_{k j}$, contradicting the fact that $G\left(\boldsymbol{p}^k\right)$ is a triangulation. Thus $\operatorname{rank}\left(B\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)\right)=2$, and $\hat{R}_S\left(\boldsymbol{p}^k\right)$ is block diagonal:
$$
\begin{aligned}
\operatorname{rank}\left(\hat{R}_S\left(\boldsymbol{p}^k\right)\right) & =\operatorname{rank}\left(R_S\left(\boldsymbol{p}^{k-1}\right)\right)+\operatorname{rank}\left(B\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right)\right) \\
& =2 k-4
\end{aligned}
$$

Because $\operatorname{rank}\left(\hat{R}_S\left(\boldsymbol{p}^k\right)\right) \leqslant \operatorname{rank}\left(R_S\left(\boldsymbol{p}^k\right)\right), R_S\left(\boldsymbol{p}^k\right)$ satisfies the rank condition in $(10)$ for infinitesimal shape-similarity.

To complete the proof, consider additional edges that could be added to $G\left(\boldsymbol{p}^k\right)$ such that the resulting framework is still a triangulation ([Figure 4](#fig-4-4-addition), right). Denote the shape-similarity matrix resulting from these edge-additions by $\bar{R}_S\left(\boldsymbol{p}^k\right)$. The edge-additions produce angles, so $\bar{R}_S\left(\boldsymbol{p}^k\right)$ has more rows than $R_S\left(\boldsymbol{p}^k\right)$. Accordingly,
$$
2 k-4=\operatorname{rank}\left(R_S\left(\boldsymbol{p}^k\right)\right) \leqslant \operatorname{rank}\left(\bar{R}_S\left(\boldsymbol{p}^k\right)\right) \leqslant 2 k-4
$$
so any edge-additions between vertices in the triangulation do not affect the rank, which was already at its maximum. By induction, triangulations are infinitesimally shape-similar. <div style="text-align: right;">$\square$</div>
:::

<figure>
   <img src="/frontiers_rigidity_4_4_addition.jpg" id="fig-4-4-addition" alt="vertex addition" width="100%" align="center">
   <figcaption> Figure 4: Angles produced by vertex/edge-addition to aid in visualization of the proof of Theorem 6. The left image shows the angles produced by the addition of x_k(p_k in the content), the center image shows the reduced set of angles, and the right image shows the angles resulting from edge-addition.</figcaption>
</figure>

::: info Remark 3
The proof of Theorem 6 highlights the importance of the **underlying repeated structure of triangulations**. In the proof, each additional triangle created through vertex/edge addition increases the rank of the shape-similarity matrix of the triangulation by exactly $2$. Applied to control strategies for mobile robot formations described by triangulations, the proof of Theorem 6 suggests an approach in which one robot maintains $2$ angles for each triangular face; [Section: Preliminaries](#preliminaries) pursues this approach. The proof highlights the importance of the underlying repeated structure of triangulations. In the proof, each additional triangle created through vertex/edge addition increases the rank of the shape-similarity matrix of the triangulation by exactly $2$; this observation can be leveraged when controlling formations of mobile robots described by triangulations by requiring that one robot for each triangular face maintain $2$ angles of that triangle.

#### A Class of Triangulations

Having established that **all triangulations are infinitesimally shape-similar**, this section highlights **maximally outerplane graphs**, a class of triangulations amenable to formation control by multirobot teams in the plane as described in Remark 3.

::: warning Definition: maximally outerplane graph
A **maximally outerplane graph** is a simple plane graph (a plane graph for which there are no parallel edges or loops) for which any edge addition results in a graph which is not an outerplane graph.
:::

<figure>
   <img src="/frontiers_rigidity_4_5_relationship.jpg" alt="relationship" width="100%" align="center">
   <figcaption> Figure 5: Relationship between near-triangulations, triangulations, and maximally outerplane graphs. Triangulations are near-triangulations whose outer face is a cycle; maximally outerplane graphs are triangulations for which the weak dual graph is a tree.</figcaption>
</figure>

Figure 5 distinguishes maximally outerplane graphs from the broader class of triangulations. Maximally outerplane graphs with at least 3 vertices are triangulations as in the $2^\text{nd}$ Definition of near-triangulations, so they are infinitesimally shape-similar. Furthermore, the weak dual graph of a maximally outerplane graph is a tree; this is related to the observation of Remark 3.

To construct maximally outerplane graphs, define the graph grammar $\Phi=\left\{r_1\right\}$ consisting of the rule defined in Figure 6. Vertices are labeled by their degrees, denoted $d_i$ for $i=1, \ldots, n$. Edges are labeled as $\sigma$ when they are on the outer face of the plane graph, or $\iota$ when it is not; $r_1$ connects a disconnected vertex to two vertices across a $\sigma$ edge.

<figure>
   <img src="/frontiers_rigidity_4_6_r1.jpg" alt="r1" width="100%" align="center">
   <figcaption> Figure 6: The rule r_1 connects disconnected vertices across adjacent vertices on the outer face of a maximally outerplane graph.</figcaption>
</figure>

::: danger Theorem 7
Let $\mathcal{G}_0$ be an initial plane graph consisting of $n$ vertices in which three vertices form a triangle and the rest are disconnected. Let $g_0=\left(\mathcal{G}_0, \nu, \xi\right)$ be an initial labeled graph where vertex $i$ is labeled $d_i$, the degree of vertex $i$, and the three edges are labeled $\sigma$. Let $\Phi=\left\{r_1\right\}$ be the graph grammar, where $r_1$ is defined ${ }^{14}$ as in Figure 6. For the system $\left(g_0, \Phi\right)$, the graphs $\mathcal{G}_k \in\left\{g_k\right\}_{k=0}^n$ have a single connected component, which is a maximally outerplane graph.
:::

::: details Details of Proof
The theorem will be proved by induction. The connected component of the initial plane graph $\mathcal{G}_0$ is a maximally outerplane graph. Consider $\mathcal{G}_k \in\left\{g_k\right\}_{k=0}^n$ for arbitrary $k<n$. By assumption, the single connected component of $\mathcal{G}_k$ is a maximally outerplane graph.

Apply $r_1$ to $\mathcal{G}_k$. The graph grammar $\Phi=\left\{r_1\right\}$ connects a zero degree vertex to two adjacent vertices connected by a $\sigma$ edge on the outer face. Applying $r_1$ results in the maximally outer plane graph $\mathcal{G}_{k+1}$ because the new vertex can always be placed in the outer face of $\mathcal{G}_k$ such that the new vertex is on the boundary of the outer face, no vertex is removed from the boundary of the outer face, the two new edges intersect other edges only at the vertices, and $\mathcal{G}_k$ is edge maximal. By induction, the connected component of $\mathcal{G}_k \in\left\{g_k\right\}_{k=0}^n$ is a maximally outerplane graph. <div style="text-align: right;">$\square$</div>
:::

::: info Remark 4
Numerous methods can be employed to **produce triangulations**:
- using embedded graph grammars;
- Delaunay triangulation of a set of points; etc. 

Similarly, there are various procedures for **generating maximally outerplane graphs**; e.g., ear clipping of certain polygons produces maximally outerplane graphs. The graph grammar $\Phi=\left\{r_1\right\}$ is notable because of the implicit role of the weak dual of the maximally outerplane graph and its relationship to the proof of Theorem 6, in which triangular faces are incorporated along the weak dual; this structure is exploited in the Section V-B TODO when controlling mobile robot formations described by maximally outerplane graphs.
:::


## References
1. *Infinitesimal Shape-Similarity for Characterization and Control of Bearing-Only Multirobot Formations*, [IEEE](https://ieeexplore.ieee.org/document/9451189/), by Ian Buckley and Magnus Egerstedt in TRO.
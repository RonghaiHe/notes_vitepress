# Basis
## Graph Theory [4,5]
> Please make sure you are familiar with the **concept** of graph

Consider an **undirected graph** with $m$ **edges** and $n$ **vertices**, denoted by $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ with vertex set $\mathcal{V} = \{v_1,\cdots,v_n\} = \{1, 2, \cdots, n\}$ and edge set $\mathcal{E} \subset \mathcal{V} \times \mathcal{V}$. The neighbor set $\mathcal{N}_i$ is defined as $\mathcal{N}_i:=\{j\in\mathcal{V}:(i,j)\in\mathcal{E}\}$

::: warning Definition: complete graph
A graph $\mathcal{G}$ is said to be **complete** if every pair of distinct vertices is connected by an edge, i.e., $m = n(n − 1)∕2$. A complete graph with n vertices is symbolized by $\mathcal{K}_n$
:::

::: warning Definition: path
A **path** is a trail that goes from an origin vertex to a destination vertex by traversing edges of the graph.
:::

::: warning Definition: connected
Two **vertices** $i$ and $j$ are said to be **connected** if there exists a **path** between these vertices. A **graph** is **connected** if there is a path between **every pair** of vertices of $\mathcal{G}$.
:::

- the **vertex** set: the **robots** (and we may use the word **agent** interchangeably in the context)
- the **edge** set: the **communication links** between different robots

The **incidence matrix**: $H=\{h_{kj}\}\in\mathbb{R}^{m\times n}$, whose entries are defined as (with arbitrary edge orientations)
$$
h_{kj} = \begin{cases}
    1, & \text{the \textit{k}-th edge sinks at node \textit{j}}\\
    -1, & \text{the \textit{k}-th edge leaves at node \textit{j}}\\
    0, & \text{otherwise}
\end{cases}
$$

For a connected and undirected graph, one has:
- $\operatorname{rank}(H) = n − 1$
- $\operatorname{null}(H) = \operatorname{span}\{\mathbf{1}_n\}$.

Define $\mathbf{H}_o\in\mathbb{R}^{n\times m}$ as:
$$
[\mathbf{H}_o]_{ij} =
\begin{cases}
    -1, & \text{if } e_k=(v_i,v_j)\in\mathcal{E} \text{ (outgoing edge)} \\
    0, & \text{otherwise}
\end{cases}.
$$

The **adjacency matrix**: $A(\mathcal{G})$, a symmetric $n \times n$ matrix encoding the vertex adjacency relationships, with entries
$$
A_{ij} = \begin{cases}
    1, & \{i,j\}\in\mathcal{E}\\
    0 & \text{otherwise}
\end{cases}
$$

- $A_{ij} = A_{ji}$

The **Laplacian matrix**: $L(\mathcal{G})$:
$$
\begin{gathered}
L(\mathcal{G}) = H^\top H = \operatorname{diag}(A\mathbf{1}) - A \\
L_{ij} = \begin{cases}
    \sum\limits_{j=1}^n A_{ij} = |\mathcal{N}_i|, & i=j\\
    -A_{ij} = -1 \text{ or }0, & i\neq j, \, =-1 \text{ if }(i,j)\in\mathcal{E}
\end{cases}.
\end{gathered}
$$

::: tip Lemma: Properties of **Laplacian matrix**
- $L(\mathcal{G})$ is orientation-independent
- $L(\mathcal{G})$ is symmetric and positive semidefinite
- $\sum\limits_{j=1}^nL_{ij}=0, \quad i=1,\cdots,n.$
- If $\mathcal{G}$ is connected, then $L(\mathcal{G})$ has one and only one zero eigenvalue, with $\operatorname{null}(L(\mathcal{G})) = \operatorname{span}\{\mathbf{1}\}$
- $\operatorname{rank}(L(\mathcal{G}))=n-1$ with $0$ being a simple eigenvalue of $L(\mathcal{G})$ if and only if the directed graph $\mathcal{G}$ contains a (directed) spanning tree
- $x^\top Lx = \sum\limits_{\{i,j\}\in\mathcal{E}}A_{ij}(x_i-x_j)^2$ where $x$ is a column  vector
:::

::: warning Definition: induced subgraph
For a graph $\mathcal{G} = (\mathcal{V},\mathcal{E})$, let $\mathcal{V}'$ be a **subset** of $\mathcal{V}$, then the **subgraph** of $\mathcal{G}$ induced by $\mathcal{V}'$ is the graph $\mathcal{G}' = (\mathcal{V}', \mathcal{E}')$ where $\mathcal{E}'$ includes all those edges of $\mathcal{E}$ that are incident on a vertex pair in $\mathcal{V}'$.
:::

## Framework [2]
::: warning Definition: Framework
A **framework** is simply a **realization** of a graph at given points in Euclidean space. Specifically, if $p_i \in \mathbb{R}^d$ is the coordinate of vertex $i$ w.r.t. some fixed coordinate frame, then a framework $\mathcal{F}$ is a pair $(\mathcal{G}, \boldsymbol{p})$ where configuration $\boldsymbol{p} = [p_1, \cdots , p_n] \in \mathbb{R}^{dn}$. We will use the notation $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ to denote that framework $\mathcal{F}$ is composed of graph $\mathcal{G}$ with coordinates $\boldsymbol{p}$.
:::

The importance of a framework is that it can model a **physical structure**. That is, consider the so-called “**bar-and-joint**” framework, which is a structure made of rigid bars joined at their ends by universal joints. A bar-and-joint framework can be used to describe a wide range of static and dynamic structures, such as bridges, mechanical linkages, and biological molecules.

In 2D, treat $p_i =  [p_{ix}, p_{iy}]^\top \in \mathbb{R}^2, i \in {1, 2, \cdots , n}$ as the **position**  of node $i$. The stacked vector $\boldsymbol{p} = [p_1^\top , p_2^\top , \cdots , p_n^\top ]^\top$ represents the position configuration for all the n nodes. By  introducing the matrix $\bar{H}:= H \otimes I_2 \in \mathbb{R}^{2m\times 2n}$, one can  construct the edge space as an image of $\bar{H}$ from the position vector $\boldsymbol{p}$:
$$
\boldsymbol{z}=\bar{H}\boldsymbol{p} \tag{1}
$$

with $z_k=[z_{kx},z_{ky}]^\top\in\mathbb{R}^2$ being the **relative position** vector $p_j-p_i$ for the vertex pair defined by the $k$-th edge. In the following, two notations, $z_k$ and $z_{kij}$ will be used interchangeably to denote the $k$-th edge which links agent $i$ and agent $j$.

Introduce:
$$
Z(z) = \operatorname{diag}(z_1,z_2,\cdots,z_m)\in\mathbb{R}^{2m\times m}
$$

denote block diagonal matrix of the relative position.

The **edge function** (Specific for distance rigidity function denoted as $\boldsymbol{d}_\mathcal{G}(\boldsymbol{p})$) $r_{\mathcal{G}}(\boldsymbol{p}): \mathbb{R}^{2n} \to \mathbb{R}^m$ associated with the framework $(\mathcal{G}, \boldsymbol{p})$ is defined as:
$$
r_{\mathcal{G}}(\boldsymbol{p}) = [\cdots, \|p_i-p_j\|^2, \cdots] = Z(\boldsymbol{z})^\top \boldsymbol{z}, \quad (i,j)\in\mathcal{E}. \tag{2}
$$

where the **norm** is the standard Euclidean norm, and the $k$-th component in $r_{\mathcal{G}}(p), \|p_i − p_j\|^2$, corresponds to the **square length** of edge $z_k$.

## Rigidity Theory [1,2]
### Rigidity Graphs
#### Characterized by rigid body
Given a bar-and-joint framework, a fundamental question is whether it is **rigid** or not. By rigidity, we mean the **non-deformation** of the structure. 

Roughly speaking, a formation is **rigid** if its only **smooth motions** are those corresponding to **translation or rotation** of the **whole formation**

::: warning Definition: Translation and Rotation of a rigid body
A **rigid body** is said to be in **translation** if all points forming the body move along parallel paths (straight or curvilinear). A **rigid body** is said to be in **rotation** if all points move in parallel planes along circles centered on a same axis that intersects the body.
:::

If the axis of rotation does not intersect the rigid body, the motion is usually called a **revolution** or **orbit**. This type of motion (in fact, any type of rigid body motion) can be decomposed into a **translation superimposed on a rotation**. That is, the above definitions allow one to **decouple** pure translation from pure rotation. Recall from rigid body kinematics that given body-fixed points $p$ and $O$ (see Figure 1.7), the following relationship holds
$$
\dot{\rho} = \dot{R}+\omega\times r \tag{3}
$$

where $\omega \in \mathbb{R}^3$ denotes the angular velocity of the rigid body about an arbitrary  axis $\hat{R}$ passing through point $O$ and $\{x, y, z\}$ is an inertial coordinate frame.

<figure>
   <img src="/frontiers_rigidity_1_0_motion.png" alt="Motion of rigid body" width="100%" align="center">
   <figcaption> Figure 0: Rigid body kinematics.</figcaption>
</figure>

::: warning Definition: Equivalent & Congruent
Two frameworks $(\mathcal{G}, \boldsymbol{p})$ and $(\mathcal{G},\hat{\boldsymbol{p}})$ with $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ are:
- **Equivalent**: if $\|p_i-p_j\| = \|\hat{p}_i-\hat{p}_j\|$ for all $(i, j) \in \mathcal{E}$, i.e., the edge function (2) is the **same**;
- **Congruent**: if $\|p_i-p_j\| = \|\hat{p}_i-\hat{p}_j\|$ for all $i, j \in \mathcal{V}$ (with $i\neq j$), i.e., all distances between vertices are the **same** (such $(i,j)$ pairs is always $n(n-1)/2$);
:::

Note that congruency implies equivalency, but the reverse is not necessarily true.

::: warning Definition: isometry
An isometry of $\mathbb{R}^m$ is a bijective map $T ∶ \mathbb{R}^m \to \mathbb{R}^m$ such that
$$
\|T(x) - T(y)\| = \|x-y\|, \quad \forall x,y\in\mathbb{R}^m.
$$
:::

Note that $T$ accounts for **rotation and/or translation** of the vector $x,y$.

Two frameworks $(\mathcal{G},\boldsymbol{p})$ and $(\mathcal{G},\hat{\boldsymbol{p}})$ are said to be **isomorphic** in $\mathbb{R}^d$ if they are related by an **isometry** in $\mathbb{R}^d$. It is not difficult to see that isomorphic frameworks are **congruent**. We denote the set of all frameworks that are **isomorphic** to $\mathcal{F}$ by $\operatorname{Iso}(\mathcal{F})$.

::: warning Definition
A motion of a framework $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ with $\mathcal{G} = (\mathcal{V} , \mathcal{E})$ is a **continuous family of equivalent frameworks** $\mathcal{F}(t)$ for $t \in [0, 1]$ where $\mathcal{F}(0) = \mathcal{F}$. That is, each point $p_i, i \in \mathcal{V}$ moves along a **continuous trajectory** $p_i(t)$ while **preserving the distances** between points connected by an edge:
$$
\|p_i(t) - p_j(t)\| = \|p_i-p_j\|, \quad (i,j)\in\mathcal{E}. \tag{4}
$$
:::

This leads us to the following definition of rigidity.

::: warning Definition: rigidity
A framework $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ is **rigid** in $\mathbb{R}^d$ if **all** of its motions satisfy $p_i(t) = T(p_i), \forall i \in \mathcal{V}$ , and $\forall t \in [0, 1]$, i.e., the family of frameworks $\mathcal{F}(t)$ is isomorphic.
:::

On the other hand, the framework is **flexible** in $\mathbb{R}^d$ if and only if it is possible to continuously move its vertices to form an **equivalent but non-congruent** framework.

#### Chacaterized in Combination
**Counting-type conditions** related to the graph can be used to ascertain the rigidity or nonrigidity of a generic formation corresponding to the graph.

At first, define the Laman graph.
::: warning Definition: Laman Graph
A graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ is **Laman** if $|\mathcal{E}| = 2|\mathcal{V}|−3$ and every subset of $k \geqslant 2$ vertices spans at most $2k − 3$ edges.
:::

The above is a combinatorial definition of Laman graphs. Its intuition is that the edges should be **distributed evenly** in a Laman graph.

Laman graphs may also be characterized by the [Henneberg construction](#henneberg-construction) shown in the next 3 sections.

::: danger Laman's Theorem
A graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ modeling a formation in **2D** with $n$ vertices and $m$ edges is **rigid** if and only if there **exists** a **subgraph** $\mathcal{G}' = (\mathcal{V}, \mathcal{E}')$ with $2n − 3$ edges such that for **every subset** $\mathcal{V}''$ of $\mathcal{V}$ , the induced subgraph $\mathcal{G}'' = (\mathcal{V}'', \mathcal{E}'')$ of $\mathcal{G}'$ satisfies $|\mathcal{E}''| \leqslant 2|\mathcal{V}''| − 3$.
:::

If a graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ modeling a formation in **3D** of $n$ vertices and $m$ edges is **rigid** then
- there exists a subgraph $\mathcal{G}' = (\mathcal{V}, \mathcal{E}')$ with $3n − 6$ edges such that, for every subset $\mathcal{V}''$ of $\mathcal{V}$ , the induced subgraph $\mathcal{G}'' = (\mathcal{V}'', \mathcal{E}'')$ of $\mathcal{G}'$ satisfies $|\mathcal{E}| \leqslant 3|\mathcal{V}| − 6$
- if $|\mathcal{E}| = 3|\mathcal{V}| − 6$, then $\mathcal{G}$ is 3-connected (equivalently, every pair of vertices of $\mathcal{G}$ is connected by three paths that pairwise have no vertices in common except the end vertices).

#### Characterized in Linear Algebra
First, embed the graph $\mathcal{G}$ into **2-D space**

::: warning Definition: (global) rigidity
A framework  $(\mathcal{G}, p)$ is **rigid** in $\mathbb{R}^2$ if there exists a **neighborhood** $\mathcal{U}$ of $p$ such that $r^{−1}_\mathcal{G}(r_\mathcal{G} (p)) \cap \mathcal{U} = r^{−1}_\mathcal{K}(r_\mathcal{K}(p)) \cap \mathcal{U}$, where $\mathcal{K}$ is  the **complete** graph with the same vertex set as $\mathcal{G}$.
:::

Two frameworks $(\mathcal{G}, \boldsymbol{p})$ and $(\mathcal{G}, \bar{\boldsymbol{p}})$ are **equivalent** if $r_\mathcal{G} (\boldsymbol{p}) = r_\mathcal{G} (\bar{\boldsymbol{p}})$ and are **congruent** if $\|p_i − p_j\| = \|\bar{p}_i − \bar{p}_j\|$ for all $i, j \in \mathcal{V}$.

Now give the definition of regular point[7].

For a smooth map $f: X \rightarrow Y$ where $X$ and $Y$ are smooth manifolds, we denote the derivative of $f$ at $\boldsymbol{x} \in X$ by $\mathrm{d} f(\boldsymbol{x})$. Let $k=\max \{\operatorname{rank} (\mathrm{d} f(\boldsymbol{x}))$ : $\boldsymbol{x} \in X\}$. We say that $\boldsymbol{x} \in X$ is a **regular point** of $f$ if $\operatorname{rank} (\mathrm{d} f(\boldsymbol{x}))=k$ and a **singular point** otherwise.

::: tip Proposition 1
Let $\boldsymbol{f}: \mathbb{R}^{n} \rightarrow \mathbb{R}^{m}$ be a smooth map and $k=\max \left\{\operatorname{rank} (\mathrm{d} \boldsymbol{f}(\boldsymbol{x})): \boldsymbol{x} \in \mathbb{R}^{n}\right\}$. If $\boldsymbol{x}_{0} \in \mathbb{R}^{n}$ is a regular point of $\boldsymbol{f}$, then the image under $\boldsymbol{f}$ of some neighborhood of $\boldsymbol{x}_{0}$ is a $k$-dimensional manifold.
:::

::: details Details of Proof
Let $\boldsymbol{f}=\left(\boldsymbol{f}_{1}, \boldsymbol{f}_{2}\right)$ where $\boldsymbol{f}_{1}$ consists of the first $k$ coordinate functions of $\boldsymbol{f}$ and assume that $\operatorname{rank}\left(\mathrm{d} \boldsymbol{f}_{1}(\boldsymbol{x}_{0})\right)=k$. Since $\operatorname{rank}(\mathrm{d} \boldsymbol{f}_{1})=k$ in a neighborhood of $\boldsymbol{x}_{0}$, the Inverse Function Theorem yields local coordinates at $\boldsymbol{x}_{0}$ such that $\boldsymbol{f}_{1}\left(\boldsymbol{x}_{1}, \boldsymbol{x}_{2}\right)=\boldsymbol{x}_{1}$. Thus in local coordinates
$$
\mathrm{d} \boldsymbol{f}=\left[\begin{array}{cc}
I & 0 \\
\frac{\partial \boldsymbol{f}_{2}}{\partial \boldsymbol{x}_{1}} & \frac{\partial \boldsymbol{f}_{2}}{\partial \boldsymbol{x}_{2}}
\end{array}\right]
$$

Since  $\operatorname{rank}(\mathrm{d} \boldsymbol{f})=k$ near $\boldsymbol{x}_{0}, \partial \boldsymbol{f}_{2} / \partial \boldsymbol{x}_{2}=0$ near $\boldsymbol{x}_{0}$. Hence $\boldsymbol{f}_{2}\left(\boldsymbol{x}_{1}, \boldsymbol{x}_{2}\right)=g\left(\boldsymbol{x}_{1}\right)$ and therefore $\boldsymbol{f}\left(\boldsymbol{x}_{1}, \boldsymbol{x}_{2}\right)=\left(\boldsymbol{x}_{1}, g\left(\boldsymbol{x}_{1}\right)\right)$ near $\boldsymbol{x}_{0}$. Thus $\boldsymbol{f}$ maps some neighborhood of $\boldsymbol{x}_{0}$ onto the graph of $g$ which is a $k$-dimensional manifold. <div style="text-align: right;">$\square$</div>
:::

It follows that if $\boldsymbol{p}$ is a regular point of $f_\mathcal{G}$, then $f_\mathcal{G}^{-1}\left(f_{G}(\boldsymbol{p})\right)$ is a manifold of co-dimension $k$ near $\boldsymbol{p}$. In this case, the construction of a smooth path in non-rigid implies flexible of Proposition 1 is straightforward since near $\boldsymbol{p}$ we then have that $f_\mathcal{K}^{-1}\left(f_\mathcal{K}(\boldsymbol{p})\right)$ is a proper submanifold of $f_\mathcal{G}^{-1}\left(f_\mathcal{G}(\boldsymbol{p})\right)$.

Finally, a subset $M$ of $\mathbb{R}^{d}$ is said to be an affine set if $M$ contains the entire line through each pair of distinct points in $M$. The dimension of an affine set $M$ in $\mathbb{R}^{d}$ is defined to be the dimension of the subspace $M-M=\{x- y: x, y \in M\}$ parallel to $M$ and the affine hull of a set $S \subset \mathbb{R}^{d}$ is the smallest affine set containing $S$. For $\boldsymbol{p}=\left(p_{1}, \ldots, p_{n}\right) \in \mathbb{R}^{d n}$, let $\dim\boldsymbol{p}$ be the dimension of the affine hull of $\left\{p_{1}, \ldots, p_{n}\right\}$.

::: danger Theorem 0
Let $\mathcal{G}$ be a graph with $n$ vertices, $m$ edges, and edge function $f_\mathcal{G}$ : $\mathbb{R}^{dn} \rightarrow \mathbb{R}^{m}$. Suppose that $\boldsymbol{p} \in \mathbb{R}^{dn}$ is a regular point of $f_\mathcal{G}$. Then the graph $\mathcal{G}(\boldsymbol{p})$ is **rigid** in $\mathbb{R}^{d}$ if and only if
$$
\operatorname{rank} (\mathrm{d} f_\mathcal{G}(\boldsymbol{p}))=d n-(\dim\boldsymbol{p}+1)(2 d-\dim\boldsymbol{p}) / 2,
$$

and $\mathcal{G}(\boldsymbol{p})$ is **flexible** in $\mathbb{R}^{d}$ if and only if
$$
\operatorname{rank} (\mathrm{d} f_\mathcal{G}(\boldsymbol{p}))<d n-(\dim\boldsymbol{p}+1)(2 d-\dim\boldsymbol{p}) / 2 .
$$

:::

TODO

### Infinitesimal Rigidity
Although our physical intuition can indicate if certain frameworks are rigid or not, in general it is difficult to determine rigidity from the definition characterized by rigid body. Therefore, we will consider a related notion of rigidity called **infinitesimal rigidity**, which can be easily verified via a **matrix rank**.

In general, rigidity does not imply infinitesimal rigidity, but infinitesimal rigidity implies rigidity. Frameworks that are rigid but not infinitesimally rigid usually have **collinear** or **parallel** edges.

For so-called **generic** frameworks, rigidity is equivalent to infinitesimal rigidity. When a framework $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ is generic, then almost all of its realizations have the same rigidity property under small perturbations on $\boldsymbol{p}$. As a result, generic rigidity is a property only of the underlying graph $\mathcal{G}$, i.e., it is independent of almost all $\boldsymbol{p}$. The term “almost all” is used to exclude certain degenerate configurations, such as frameworks that lie in a hyperplane.

For example, The planar framework in Figure below is nongeneric in $\mathbb{R}^2$ since vertices $1, 2, 3, 4$ are collinear.

<figure>
   <img src="/frontiers_rigidity_1_05_nongeneric.png" id="fig-105-nongeneric" alt="Nongeneric framework"  width="100%" align="center">
   <figcaption> Figure 0.5: A nongeneric framework in 2D real field.</figcaption>
</figure>



In infinitesimal rigidity, instead of preserving distances during a continuous deformation, we require **first-order preservation of distances** during an **infinitesimal motion**. Therefore, infinitesimal rigidity (also called first-order rigidity) is a linear approximation to rigidity.

In the definition of continuous family, i.e. formula $(4)$, the right-hand side is constant by definition. Assuming the trajectories $p_i(t), i \in \mathcal{V}$ are differentiable on $t \in [0, 1]$, we square both sides of $(4)$ and differentiate w.r.t. time to obtain
$$
\frac{\mathrm{d}}{\mathrm{d}t}\|p_i(t)-p_j(t)\|^2 = 2(p_i(t)-p_j(t))^\top(\dot{p}_i(t)-\dot{p}_j(t)) = 0, \quad (i,j)\in\mathcal{E}.
$$

where $\dot{p}_i$ denotes the time derivative of $p_i$. Rather than require the formula above be satisfied for all $t \in [0, 1]$, we impose the condition that it only need to hold at $t = 0$:
$$
(p_i-p_j)^\top(v_i-v_j) = 0, \quad (i,j)\in\mathcal{E}. \tag{5}
$$

where $v_i:=\dot{p}_i(0)$ and $p_i(0) = p_i$ from the definition of continuous family. The above equation leads to a system of $m$ linear equations with the $dn$ unknowns being the velocities $v_i$. When instantaneous velocities $v_i$ that satisfy above formula exist, we say the framework has **infinitesimal motion**.

::: warning Definition: infinitesimal motion [6]
An **infinitesimal motion** is an assignment of velocities that guarantees the invariance of $r_\mathcal{G}(\boldsymbol{p})$, i.e.,
$$
\dot{r}_\mathcal{G}(\boldsymbol{p}) = \frac{\partial r_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}}\boldsymbol{v} = 0,
$$

where $\boldsymbol{v} = (\boldsymbol{v}_1^\top, \cdots, \boldsymbol{v}_n^\top)^\top, \boldsymbol{v}_i=\dot{\boldsymbol{p}}_i$ is the velocity of vertex $i$. We say a motion is **trivial** if it satisfies equation above for **any framework** with $n$ vertices. A framework is **infinitesimally rigid** if every infinitesimal motion is trivial.
:::

When analyzing infinitesimal rigidity, the **rigidity matrix** of a framework comes in handy, which is defined as
$$
R_\mathcal{D}(\boldsymbol{p}) = \frac12\frac{\partial r_{\mathcal{G}}(p)}{\partial p} = Z(z)^\top \bar{H}\in\mathbb{R}^{m\times dn}.\tag{6}
$$

Note that:
- the entries of $R_\mathcal{D}(\boldsymbol{p})$ only involve relative position vectors $z$, and we can rewrite it as $R_\mathcal{D}(\boldsymbol{z})$. 
- the rigidity matrix has a row for each edge and $2$ columns for each vertex. That is, for the $k$-th edge of $\mathcal{E}$ connecting vertices $i$ and $j$, the $k$-th row of $R$ is $[0,\cdots,0,(p_i-p_j)^\top,0,\cdots,0,(p_j-p_i)^\top, 0, \cdots, 0]$ where $(p_i-p_j)^\top$ is in the columns for vertex $i$, $(p_j-p_i)^\top$ is in the columns for vertex $j$, and all other elements are zero.

A useful structural property of the rigidity matrix:
$$
R_\mathcal{D}(\boldsymbol{p})(\mathbf{1}_n\otimes \boldsymbol{x}) = 0.
$$

given any vector $\boldsymbol{x}\in\mathbb{R}^d$.

Using $(6)$, we can conveniently rewrite $(5)$ as
$$
R_\mathcal{D}(\boldsymbol{p})\boldsymbol{v} = 0 \tag{7}
$$

where $\boldsymbol{v}=[v_1,\cdots,v_n]\in\mathbb{R}^{dn}$. Therefore, infinitesimal motion exists when the above equation has a nontrivial (nonzero) solution $\boldsymbol{v}$. We would like to know when this is the case.

Let $\delta\boldsymbol{p}$ be a variation of $\boldsymbol{p}$. If $R_\mathcal{D}(\boldsymbol{p})\delta\boldsymbol{p}=\mathbf{0}$, then $\delta\boldsymbol{p}$ is an infinitesimal (distance) motion of $\mathcal{G}(\boldsymbol{p})$.

Note that if a framework undergoes any rigid body motion, then according to $(3)$ vertex $i$ has velocity
$$
v_i = v^*+\omega\times p_i
$$

where $v^* \in\mathbb{R}^3$ is the translational velocity and $\omega \in\mathbb{R}^3$ is the angular velocity.

> Notice that the vectors are defined here with dimension $3$ irrespective of the Euclidean space of the framework. If the framework is planar, then $v^*=[v_x^*,v_y^*,0],\omega=[0,0,\omega_z], p_i=[p_{ix},p_{iy},0]$.

It is not difficult to check that $(7)$ holds in this case since for the $k$-th row of $R$:
$$
\begin{aligned}
  &(p_i-p_j)^\top v_i + (p_j-p_i)^\top v_j \\
  =\quad & (p_i-p_j)^\top (v^*+\omega\times p_i) + (p_j-p_i)^\top (v^*+\omega\times p_j)\\
  =\quad & (p_i-p_j)\cdot(\omega\times p_i) + (p_j-p_i)\cdot(\omega\times p_j)\\
  =\quad & p_i\cdot\omega\times p_i - p_j\cdot\omega\times p_i + p_j\cdot\omega\times p_j - p_i\cdot\omega\times p_j\\
  =\quad & - p_j\cdot\omega\times p_i - p_i\cdot\omega\times p_j = 0
\end{aligned}
$$

upon use of the properties of vector products. In other words, **rigid body motions produce infinitesimal motions**. This leads us to the following definition.

::: warning Definition: infinitesimal rigidity
A framework is **infinitesimally rigid** if the only solutions to $(7)$ arise from rigid body motions. Otherwise, it is infinitesimally flexible.
:::

We can use Definition above to determine if a framework is infinitesimally rigid or flexible by attempting to assign a velocity vector to each vertex such that $(7)$ holds. For example, consider the framework in [Figure](#fig-105-nongeneric) about nongeneric framework and assign velocity $v_2 \in \mathbb{R}^2$ to vertex $2$ such that it is any vector perpendicular to $p_1 − p_2$ and $p_2 − p_3$ while keeping all other velocities at zero, i.e., $\boldsymbol{v} = [0, v_2, 0, 0, 0, 0]$. It is easy to see that $R_\mathcal{D}(\boldsymbol{p})\boldsymbol{v} = 0$ in this case although $\boldsymbol{v}$ is **not** due to a **rigid body motion**. Therefore, the framework is **infinitesimally flexible**. (This framework is, however, **rigid** since it is **nongeneric**) This **trial-and-error** method becomes cumbersome as the complexity of the framework increases or when the framework is generic. More important, it cannot be easily implemented computationally.

Fortunately, there is an easy way of checking whether a framework is **infinitesimally rigid** via the **rank** of the rigidity matrix. Before presenting this useful result, we need the following facts: 
1. the rank of an $d \times n$ matrix is equal to $n$ minus the dimension of its null space.
2. the number of independent rigid body motions for a generic framework in $\mathbb{R}^d$ is $d(d+1)/2$. This means that there exist $3$ independent rigid body motions in $\mathbb{R}^2$ (translation along $x$, translation along $y$, and rotation about $z$) and $6$ in $\mathbb{R}^3$ (translations along $x, y, z$ and rotations about $x, y, z$).

Given the above, we deduce that $\dim(\operatorname{Null}(R_\mathcal{D}(\boldsymbol{p}))) \geqslant d(d+1)/2$ and therefore  $\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})) \leqslant nd − d(d+1)/2$. From Definition of infinitesimal rigidity, we know that for infinitesimally rigid frameworks $\dim(\operatorname{Null}(R_\mathcal{D}(\boldsymbol{p}))) = d(d+1)/2$ , which gives us the following theorem

::: danger Theorem 1 [3]
Consider a framework $(\mathcal{G}, p)$ in $d$-dimensional space with $n \geqslant d$ vertices and $m$ edges. It is **infinitesimally rigid** if and only if
$$
\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})) = 
\begin{cases}
dn-d(d+1)/2, & n\geqslant d, \\
n(n-1)/2, & n<d
\end{cases}. \tag{5}
$$

- $d=2: 2n-3$
- $d=3: 3n-6$
:::

Obviously, in order to have an infinitesimally rigid framework, the graph should have  at least $2n − 3$ (resp. $3n − 6$) edges in $\mathbb{R}^2$ (resp. $\mathbb{R}^3$).

From Theorem 1, one knows that the dimension of the null space of $R_\mathcal{D}(\boldsymbol{p})$ for an infinitesimally rigid framework $(\mathcal{G}, \boldsymbol{p})$ in the $d$-dimensional space is $d(d + 1)/2$. The following Lemma characterizes the structure of its null space.

::: tip Lemma 1: Null space of the rigidity matrix
Suppose the framework $(\mathcal{G}, p)$ is **infinitesimally rigid** with the associated rigidity matrix denoted as $R_\mathcal{D}(\boldsymbol{p})$.

- $d=2$: The null space of $R_\mathcal{D}(\boldsymbol{p})$ is of dimension $3$ and is described as $\operatorname{null}(R_\mathcal{D}(\boldsymbol{p})) = \operatorname{span}(q_1, q_2, q_3)$, where
$$
\begin{gathered}
q_1=\mathbf{1}_n\otimes
\begin{bmatrix}
    1 \\
    0
\end{bmatrix}, \quad q_2=\mathbf{1}_n\otimes
\begin{bmatrix}
    0 \\
    1
\end{bmatrix}\\
q_3 = [(K_3p_1)^\top, (K_3p_2)^\top, \cdots, (K_3p_n)^\top]^\top
\end{gathered}
$$

and the matrix $K_3$ is defined as
$$
K_3 =
\begin{bmatrix}
    0 & 1\\
    -1 & 0
\end{bmatrix}
$$

- $d=3$: The null space of $R_\mathcal{D}(\boldsymbol{p})$ is of dimension $6$ and is described as $\operatorname{null}(R_\mathcal{D}(\boldsymbol{p})) = \operatorname{span}(q_1, q_2, q_3, q_4, q_5, q_6)$, where
$$
\begin{gathered}
q_1=\mathbf{1}_n\otimes
\begin{bmatrix}
    1 \\
    0 \\
    0
\end{bmatrix}, \quad q_2=\mathbf{1}_n\otimes
\begin{bmatrix}
    0 \\
    1 \\
    0
\end{bmatrix}
\quad q_3=\mathbf{1}_n\otimes
\begin{bmatrix}
    0 \\
    0 \\
    1
\end{bmatrix}\\ 
q_i= [(K_ip_1)^\top, (K_ip_2)^\top, \cdots, (K_ip_n)^\top]^\top, \quad i=4,5,6\\
\end{gathered}
$$

and the matrix $K_i$ is defined as
$$
K_4 =
\begin{bmatrix}
    0 & 0 & 0\\
    0 & 0 & -1\\
    0 & 1 & 0
\end{bmatrix}, \quad
K_5 =
\begin{bmatrix}
    0 & 0 & 1\\
    0 & 0 & 0\\
    -1 & 0 & 0
\end{bmatrix}, \quad
K_6 =
\begin{bmatrix}
    0 & -1 & 0\\
    1 & 0 & 0\\
    0 & 0 & 0
\end{bmatrix}
$$
:::

TODO Proof

::: tip Lemma 2
Suppose the framework $(\mathcal{G}, \boldsymbol{p})$ is **infinitesimally rigid**. Then for any node $i$, the set of relative position vectors $p_j − p_i, j \in \mathcal{N}_i$ **cannot all be collinear** (in the 2-D case) or **all be coplanar** (in the 3-D case).
:::

TODO Proof


- if $(\mathcal{G}, \boldsymbol{p})$ is **infinitesimally rigid**, so is $(\mathcal{G}, \boldsymbol{p}')$ for a generic (open and dense) set of $\boldsymbol{p}'$.
- Generally speaking, infinitesimal rigidity implies rigidity, but the converse is not true.

As discussed earlier, the rigidity property of a generic framework $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ is invariant under small perturbations on $\boldsymbol{p}$. With the intent of formalizing this idea, we introduce the following result.

::: danger Theorem 2
Consider two frameworks $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ and $\bar{\mathcal{F}} = (\mathcal{G}, \bar{\boldsymbol{p}})$ sharing the same graph. If $\mathcal{F}$ is **infinitesimally rigid** and $\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Iso}(\mathcal{F})) \leqslant \varepsilon$ where $\varepsilon$ is a sufficiently small positive constant, then $\bar{\mathcal{F}}$ is also **infinitesimally rigid**.

Here,
$$
\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Iso}(\mathcal{F})) := \inf_{\boldsymbol{x}\in\operatorname{Iso}(\mathcal{F})}\|\bar{\boldsymbol{p}}-\boldsymbol{x}\|.
$$

:::

::: details Details of Proof
Let $\hat{\mathcal{F}}=(\mathcal{G},\hat{\boldsymbol{p}})\in\operatorname{Iso}(\mathcal{F})$ be such that
$$
\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Iso}(\mathcal{F})) = \inf_{\boldsymbol{x}\in\operatorname{Iso}(\mathcal{F})}\|\bar{\boldsymbol{p}} - \boldsymbol{x}\| = \|\bar{\boldsymbol{p}} - \hat{\boldsymbol{p}}\|.
$$

Obviously, $\hat{\mathcal{F}}$ is infinitesimally rigid since it is isomorphic to $\mathcal{F}$. Therefore, $\operatorname{rank}(R_\mathcal{D}(\hat{\boldsymbol{p}})) = 2n − 3$ according to Theorem 1, and there exists a $(2n − 3) \times (2n − 3)$ submatrix of $R_\mathcal{D}(\hat{\boldsymbol{p}})$, $R_s(\hat{\boldsymbol{p}})$, such that $\det[R_s(\hat{\boldsymbol{p}})] \neq 0$. The  submatrix $R_s(\hat{\boldsymbol{p}})$ has nonzero elements of the form $(\hat{p}_i − \hat{p}_j)^\top , (i, j) \in \mathcal{E}$. Since $\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Iso}(\mathcal{F}))=\|\bar{\boldsymbol{p}} - \hat{\boldsymbol{p}}\|\leqslant \varepsilon$, it is not difficult to show that $[\bar{p}_i]_k = [\hat{p}_i]_k + \gamma_{ik}$ where $\gamma_{ik}$ is a sufficiently small positive constant. Thus, the nonzero elements of $R_s(\hat{\boldsymbol{p}})$ have the form $[\bar{p}_i]_k − [\bar{p}_j]_k = [\hat{p}_i]_k − [\hat{p}_j]_k + \gamma_{ik} − \gamma_{jk}$, which are continuously dependent on $\hat{\boldsymbol{p}}$. Since the eigenvalues of a matrix depend continuously on its elements, and the determinant of a matrix is the product of its eigenvalues, it follows that **the determinant continuously depends on the elements of the matrix**. Thus, for sufficiently small $\gamma_{ik}$, we have that $\det[R_s(\hat{\boldsymbol{p}})] \neq 0$ and $\operatorname{rank}(R_s(\bar{\boldsymbol{p}})) = \operatorname{rank}(R_s(\hat{\boldsymbol{p}})) = 2n − 3$. Now, since $R_s(\bar{\boldsymbol{p}})$ is a full rank submatrix of $R_\mathcal{D}(\bar{\boldsymbol{p}})$, we know $\operatorname{rank}(R_\mathcal{D}(\bar{\boldsymbol{p}})) = 2n − 3$, so $\bar{\mathcal{F}}$ is infinitesimally rigid. <div style="text-align: right;">$\square$</div>
:::

### Minimal Rigidity
It is obvious that adding edges to a graph does not destroy rigidity. A natural question is then: What is the minimum number of edges that ensures rigidity? This is important in practice because it ensures that a formation of multiple agents is rigid with the **minimum number of sensing and communication links**. The disadvantage of minimal rigidity is that it **lacks robustness** to the loss of a sensor or communication link since redundant edges are removed from the graph

::: warning Definition: minimally rigidity
A formation is **minimally rigid** if it is **rigid** and if **no single** interagent distance constraint **can be removed** without causing the formation to lose rigidity
:::

A graph is minimally rigid if almost all formations to which the graph corresponds are minimally rigid.

As for **minimal rigidity**, it can be described in 2D and 3D with the rigidity matrix, is characterizable in 2D with Laman’s theorem, and, in 3D, is the subject of necessary conditions and distinct sufficiency conditions on the graph determined by a formation. 

Given a graph with edge set $\mathcal{E}$ and vertex set $\mathcal{V}$, which is known to be **rigid**, it is additionally **minimally rigid** in 2D or 3D if and only if $|\mathcal{E}| = 2|\mathcal{V}| − 3$ or $|\mathcal{E}| = 3|\mathcal{V}| − 6$, respectively, where $|\mathcal{E}|$ and $|\mathcal{V}|$ are the numbers of edges and vertices of the graph.
::: danger Theorem 3
A rigid graph is minimally rigid if and only if $m=dn-d(d+1)/2$.
:::

This leads to the following corollary.

::: tip Corollary 1
If a framework is infinitesimally and minimally rigid, then its rigidity matrix has **full row rank** and $R_\mathcal{D}(\boldsymbol{p})R_\mathcal{D}^\top(\boldsymbol{p})$ is **positive definite**.
:::

::: details Details of Proof
Given that the rigidity matrix has $m$ rows and $\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})) = dn − d(d+1)/2$  and $m = dn − d(d+1)/2$ for infinitesimally and minimally rigid frameworks, we  know $R_\mathcal{D}(\boldsymbol{p})$ is full row rank. Now, let $\boldsymbol{y} = R_\mathcal{D}^\top(\boldsymbol{p})\boldsymbol{x}$ and
$$
V=\boldsymbol{y}^\top\boldsymbol{y}\geqslant 0.
$$

Note that $V$ is positive definite w.r.t. $y$ and positive semi-definite with respect to $x$. Given that $\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})) = \operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})R_\mathcal{D}^\top(\boldsymbol{p}))$ and $R_\mathcal{D}(\boldsymbol{p})$ is full row rank, we know $R_\mathcal{D}(\boldsymbol{p})R_\mathcal{D}^\top(\boldsymbol{p})$ is **invertible** and has **no zero eigenvalues**. Therefore, $V$ is positive definite w.r.t. $x$ and $R_\mathcal{D}(\boldsymbol{p})R_\mathcal{D}^\top(\boldsymbol{p})$ is a positive definite matrix. <div style="text-align: right;">$\square$</div>
:::

For an **infinitesimally minimally distance rigid** framework, there must exist a vertex associated with **fewer than $4$ distance constraints**; otherwise, the total number of distance constraints will be at least $2 n$ and thus greater than the minimum number $2n − 3$.

### Henneberg construction
The Henneberg construction deals with the **iterative construction** of rigid formations. As for the characterization of rigidity, the Henneberg construction procedure for **2D** formations is better developed than that for 3D formations.

The 2D Henneberg construction comprises the application at each step of one of two possible operations, known as **vertex addition** and **edge splitting**.

The procedure begins with a minimally rigid graph, and the application of either operation creates a minimally rigid graph with one additional vertex. Minimally rigid graphs can be progressively built up this way

::: warning Definition: Henneberg Construction
The Henneberg construction is a technique for growing minimally rigid graphs, **starting from a graph with two vertices and one edge joining the vertices**.

At each step in the procedure, illustrated in greater detail below, either **a vertex and two edges are added**, or **a vertex and three new edges are added, while one existing edge is removed**. The new edges are incident on the new vertex. These operations are termed **vertex addition** and **edge splitting**, respectively.
:::

- vertex addition
Let $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ be a graph modeling a formation in 2D. A new graph $\mathcal{G}' = (\mathcal{V}', \mathcal{E}')$ is formed, where a vertex v is adjoined as well as two edges from $\mathcal{G}$ to $v$ , so that $\mathcal{V}' = \mathcal{V} \cup \{v\}$ and $\mathcal{E}' = \mathcal{E} \cup \{(v, j ), (v, k )\}$ for some $j, k \in \mathcal{V}$ .

- edge splitting
A new graph $\mathcal{G}' = (\mathcal{V}', \mathcal{E}')$ is formed from $\mathcal{G} = (\mathcal{V}, \mathcal{E})$, where $\mathcal{V}' = \mathcal{V} \cup \{v\}$ and $\mathcal{E}' = \mathcal{E} \cup \{(v, j ), (v, k ), (v,m)\}\backslash \{e\}$  for some $j, k, m \in \mathcal{V}$ with at least two of the vertices $j, k, m$ adjacent in $\mathcal{G}$, and the edge $e$ either $( j, k), ( j, m )$, or $(k, m )$

<figure>
   <img src="/frontiers_rigidity_1_1_henneberg.png" alt="Henneberg's Method" width="100%" align="center">
   <figcaption> Figure 1: Growing formations using a Henneberg sequence. (a) The four-agent formation can be expanded to include agent 5 by either (b) a vertex addition operation or (c) an edge-splitting operation. In (b), agent 5 is connected to two distinct agents of the formations. In (c) the edge (1,4) is replaced by two edges (1,5) and (5,4), which are incident on the newly added agent. A third connection (5,2) is also added to the latter agent. Both operations lead to a minimally rigid formation provided that the initial formation is minimally rigid. Moreover, every minimally rigid formation can be obtained by performing a sequence of these operations on an initial formation consisting of two connected agents.</figcaption>
</figure>

These vertex-addition and edge-splitting operations are enough to grow **every** minimally rigid graph. It is also possible to **deconstruct a minimally rigid graph** by removing one vertex and a net count of two edges at each step.

- In growing and deconstructing a minimally rigid graph, all the intermediate graphs are minimally rigid
- A by-product is the fact that every 2D minimally rigid graph is constructible from a primitive comprising a **two-vertex single edge** graph by using a sequence of these operations
- A Henneberg construction starting from an edge connecting two vertices will result in a **Laman graph**. The **converse** is also true. That is if a graph is Laman, then it can be generated by a Henneberg construction

In 3D, operations that are analogous to vertex addition and edge splitting can be defined, but whether these analogously defined operations are necessary and sufficient to build and deconstruct all minimally rigid graphs is still a **matter of conjecture**

### Framework Ambiguities
Consider that a graph $\mathcal{G} = (\mathcal{V} , \mathcal{E})$ and the length of each edge (i.e., $\|p_i − p_j\|, (i, j) \in \mathcal{E}$) are given. We want to know all frameworks $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ that are consistent with this data **excluding** isometries. Can a framework have **multiple** (non-isomorphic) realizations? There are several sources of nonunique realizations. The trivial one is flexibility, an infinite number of equivalent frameworks exist that satisfy the edge constraints. **Infinitesimally rigid frameworks can also suffer from nonuniqueness**. Two types of nonuniqueness can occur in this case, but unlike flexibility they lead to a finite number of equivalent frameworks
- **flip ambiguity**: one vertex can be flip to another side. This occurs when a graph in $\mathbb{R}^d$ has a set of vertices lying in a $(d − 1)$-dimensional subspace about which a portion of the graph can be reflected. Notice that there cannot be any edges between the portions of the graph separated by the mirror edge.
  - **Not** every minimally rigid graph contains a flip ambiguity
  - Multiple flips can happen in a given framework
- **discontinuous flex ambiguity**: positions of 2 or more vertexes can be changed while satisfying the constraints. This occurs in minimally rigid graphs since the removal of an edge allows a portion of the graph to flex. If the removed edge is reinserted after a flexing, one may obtain an equivalent framework with a different configuration.
  - Every formation corresponding to a minimally rigid graph with **four or more vertices** at generic positions can exhibit flex ambiguity

This leads us to the following definition.

::: warning Definition: ambiguous
If two infinitesimally rigid frameworks are **equivalent but not congruent**, then they are said to be **ambiguous**.
:::

We denote the set of **all ambiguities** of an infinitesimally rigid framework $\mathcal{F}$ by $\operatorname{Amb}(\mathcal{F})$. We assume that all frameworks in $\operatorname{Amb}(\mathcal{F})$ are also **infinitesimally rigid** (This assumption is reasonable and, in fact, holds almost everywhere). 

The existence of framework ambiguities is **problematic for formation control** since the control law cannot distinguish the actual framework from an ambiguous one if only the edge lengths (i.e., inter-agent distances) are being controlled. In such a case, one solution is to **initialize** the agents sufficiently **close to the desired framework** to avoid their convergence to an ambiguous framework. From a control theory standpoint, this means that stability results will be **local** in nature rather than **global**. The following corollary to Theorem 2 will be helpful in establishing the stability.

::: tip Corollary of Theorem 2
Let $\mathcal{F} = (\mathcal{G}, \boldsymbol{p})$ and $\bar{\mathcal{F}} = (\mathcal{G}, \bar{\boldsymbol{p}})$ be two frameworks sharing the **same graph**, and consider the function
$$
\Psi(\bar{\mathcal{F}},\mathcal{F}) = \sum_{(i,j)\in\mathcal{E}}(\|\bar{p}_i-\bar{p}_j\| - \|p_i-p_j\|)^2.
$$

If $\mathcal{F}$ is infinitesimally rigid and $\Psi(\bar{\mathcal{F}},\mathcal{F}) \leqslant \delta$ where $\delta$ is a sufficiently small positive constant, then $\bar{\mathcal{F}}$ is also infinitesimally rigid.
:::

::: details Detail of Proof
First, note that $\Psi(\bar{\mathcal{F}},\mathcal{F})=0$ implies that $\bar{\mathcal{F}} \in \operatorname{Iso}(\mathcal{F})$ or $\bar{\mathcal{F}} \in \operatorname{Amb}(\mathcal{F})$. Therefore, $\Psi(\bar{\mathcal{F}},\mathcal{F}) \leqslant \delta$ implies that there is a sufficiently small positive constant $\varepsilon$ such that $\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Iso}(\mathcal{F})) \leqslant \varepsilon$ or $\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Amb}(\mathcal{F})) \leqslant \varepsilon$. From Theorem 2, we know that $\bar{\mathcal{F}}$ is infinitesimally rigid if $\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Iso}(\mathcal{F})) \leqslant \varepsilon$. Since the elements of $\operatorname{Amb}(\mathcal{F})$ are infinitesimally rigid, the proof of Theorem 2 can be followed with $\operatorname{Iso}(\mathcal{F})$ replaced by $\operatorname{Amb}(\mathcal{F})$ to show that $\operatorname{dist}(\bar{\boldsymbol{p}}, \operatorname{Amb}(\mathcal{F})) \leqslant \varepsilon$ implies $\bar{\mathcal{F}}$ is infinitesimally rigid. <div style="text-align: right;">$\square$</div>
:::

### Globally Rigidity
Consider a formation with distinctly labeled agents and with some of the interagent distances known. We wish to understand what **alternative formation shapes** agents can have when they are positioned consistently with the data.  Note that if the formation $\mathcal{\mathcal{F}}$ is consistent with the data, then so is every rotation, translation, and reflection of $\mathcal{\mathcal{F}}$ . However, the existence of alternative formation shapes that are not obtainable from $\mathcal{\mathcal{F}}$ through rotation, translation, and reflection is not clear.

::: warning Deifnition: globally rigidity
A 2D or 3D formation is **globally rigid** if and only if one of the following works:
- any two formations corresponding to the distance data differ by a combination of translation, rotation, and reflection
- every framework that is equivalent to $(\mathcal{G}, \boldsymbol{p})$ is congruent to $(\mathcal{G}, \boldsymbol{p})$
- $r_\mathcal{G}^{-1}(r_\mathcal{G}(\boldsymbol{p})) = r_\mathcal{K}^{-1}(r_\mathcal{K}(\boldsymbol{p}))$ shown in the [definition of rigidity](#characterized-in-linear-algebra).

A graph is **globally rigid** if and only if a generic formation corresponding to the graph is globally rigid.
:::

Global rigidity is a **more demanding** concept than rigidity since there exist rigid formations that are not globally rigid, and such formations can be converted to globally rigid formations only by the **inclusion of additional distance constraints**.

- **Local rigidity**: cannot cannot deform smoothly from one shape. **Minimal rigidity** therefore allows retention of shape only in the face of potential smooth deformations, although it does not of itself specify what shape is retained. But with same constraints, graph can have different shapes
- **Global rigidity**: ensure that the shape is **unique**

<figure>
   <img src="/frontiers_rigidity_1_2_local_rigidity.png" alt="Ambiguity in local rigidity" width="100%" align="center">
   <figcaption> Figure 2: Noncongruent rigid formations with the same set of distance constraints. (a) depicts flip ambiguity since vertex A can be flipped over edge (B,C) to the symmetric position A′ while the distance constraints remain the same. (b) depicts discontinuous flex ambiguity since, by temporarily removing edge (A,D), the edge triple (A,E), (A,B), (B,C) can be flexed to obtain positions A′ and B′ such that the edge length (A′,D) equals the edge length (A,D), and thus all of the distance constraints are maintained. The formations (a) and (b) are thus rigid but not globally rigid. Although no smooth motion can deform these formations without affecting the distances between agents connected by edges, the sets of edges and corresponding distance constraints do not uniquely define the relative positions of the agents. In other words, the distance constraints do not specify the formation shape up to a rotation, translation, or reflection.</figcaption>
</figure>

A nice characterization of global rigidity is available for **2D formations** and their associated graphs. No extension is known for 3D formations. The 2D characterization uses the terms **redundant rigidity** and three **connectivity**. 

::: warning Definition: redundant rigidity
An undirected graph is termed **redundantly rigid** if it remains rigid after the removal of any single edge.
:::

::: warning Definition: connected graph
A graph is **connected** if there is a path from any vertex to any other vertex. A graph is $k$-connected if it remains connected when any $k − 1$ vertices are removed. Equivalently, between any two vertices of a $k$-connected graph, there are $k$ paths that have no common edge and no common vertex, except for the end vertices
:::

::: danger Theorem 4
A graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ modeling a formation in 2D of $|\mathcal{V}|$ vertices and $|\mathcal{E}|$ edges is globally rigid if and only if it is redundantly rigid and $3$-connected.
:::

- When a graph is globally rigid, a generic formation corresponding to the graph is also globally rigid.
- A variation of Laman’s theorem is available that characterizes the redundant rigidity property.
- A useful **property** of a **2D globally rigid formation** is that if the positions of 3 noncollinear agents are known, then the positions of all the other agents can be uniquely determined from the interagent distances corresponding to the edges in the formation graph.
- For the trivial case of small graphs $|\V| \leqslant 3$, a complete graph is both **necessary and sufficient** for global rigidity
- Globally rigid formations with 4 or more agents are **not minimally rigid**. A reason for using nonminimally rigid formations, where more constraints are imposed than are needed for shape maintenance: **loss** of a sensor / communication link / control actuator

Application:
- sensor network localization: unit disk graph
use the distance data to determine the Euclidean coordinates for the sensor positions that are consistent with the distance set.
The Euclidean coordinates, however, become **uniquely specified** by using further information obtained from designated **anchor** nodes or sensors, whose positions are known absolutely

Some problems arise in handling nonminimally rigid formations: if the distances between agents in a formation are measured with some **noise** and controls operate to try to bring certain distances to specified values, a similar type of **inconsistency** will be likely to arise

### Generic Rigidity [8]
One can ask, for a given bar framework $\mathcal{G}(\boldsymbol{p})$, whether it is **globally rigid**. However, it is shown that this problem is **strongly NP hard** even for bar frameworks in $\mathbb{R}^1$. We will show that there is an **algebraic set** of configurations, defined by polynomial equations in the coordinates of the configuration, such that when the configuration $\boldsymbol{p}$ is outside that set, $\mathcal{G}(\boldsymbol{p})$ is globally rigid in $\mathbb{R}^2$. However, the complexity of that set of configurations appears to be exponential in $n$, the number of points of the configuration.

So, we are led to consider the question of whether “most” configurations $\boldsymbol{p}$ for a given graph $\mathcal{G}$ are globally rigid.

::: warning Definition: algebraically dependent, generic
A set $A = (\alpha_1, \cdots , \alpha_m)$ of distinct real numbers is said to be **algebraically dependent** if there is a non-zero polynomial $h(x_1, \cdots , x_m)$ with integer coefficients such that $h = (\alpha_1, \cdots , \alpha_m) = 0$. If $A$ is not algebraically dependent, it is called **generic**. If a configuration $\boldsymbol{p} = ( \boldsymbol{p}_1, \cdots , \boldsymbol{p}_n)$ in $\mathbb{R}^d$ is such that its $dn$ coordinates are generic, we say $\boldsymbol{p}$ is generic.
:::

We raise a possibly more tractable problem. For a given graph $\mathcal{G}$, when $\mathcal{G}(\boldsymbol{p})$ is globally rigid for all generic configurations $\boldsymbol{p}$ in $\mathbb{R}^d$ we say that $\mathcal{G}$ itself is **generically globally rigid** in $\mathbb{R}^d$. So for a fixed dimension $d$ we ask whether a given graph $\mathcal{G}$ is generically globally rigid.

For $d = 1$, it is easy to see that $\mathcal{G}$ is generically globally rigid if and only if $\mathcal{G}$ is **vertex $2$-connected**, which means that it takes the removal of at least two vertices of $\mathcal{G}$ to disconnect the rest of the vertices. In general a graph is **vertex $m$-connected** if it takes the removal of at least $m$ vertices of $\mathcal{G}$ to disconnect the rest of the vertices.

For $d = 2$, here we now have complete information about generic global rigidity for any graph. A framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d$ is said to be redundantly rigid if $\mathcal{G}(\boldsymbol{p})$ is rigid in $\mathbb{R}^d$ even after the removal of any edge of $\mathcal{G}$.

::: danger Theorem 5 (Theorem 4 in arbitary dimension)
Let $\mathcal{G}(\boldsymbol{p})$ be a framework in $\mathbb{R}^d$ such that the configuration $\boldsymbol{p}$ is **generic**, and $\mathcal{G}(\boldsymbol{p})$ is **globally rigid** with at least $d + 1$ vertices. Then the following conditions must hold:

1. The graph $\mathcal{G}$ is **vertex $(d + 1)$-connected**.
2. The framework $\mathcal{G}(\boldsymbol{p})$ is **redundantly rigid** in $\mathbb{R}^d$ .
:::

Condition 1 is clear. One just reflects the vertices on one side of a hyperplane through any separating set of $d$ vertices. Condition 2 is more subtle. Roughly the idea is to remove an edge from $\mathcal{G}$, let the resulting framework flex, and replace the edge in a different configuration.

It is natural to conjecture that conditions 1 and 2 are sufficient for generic global rigidity as well as **necessary**. Unfortunately, for $d \geqslant 3$, that conjecture is shown to be false. For $d = 3$, the complete bipartite graph $K (5, 5)$ is redundantly rigid, vertex $4$-connected, but there are generic configurations, where the corresponding framework is **not** globally rigid, and it is the only known example. For $d \geqslant 3$ it is somewhat embarrassing to admit that it is **not known** whether global rigidity is a generic property. This means that if $\mathcal{G}(\boldsymbol{p})$ is a generically rigid framework in $\mathbb{R}^d$, and $\boldsymbol{q}$ is another generic configuration in $\mathbb{R}^d$, it is not known, except for $d = 1$ or $d = 2$, whether $\mathcal{G}(\boldsymbol{q})$ is globally rigid.

On the other hand, it is known that **rigidity is a generic property**. In other words, if $\boldsymbol{p}$ is a generic configuration in $\mathbb{R}^d$ , and $\boldsymbol{q}$ is another generic configuration in $\mathbb{R}^d$ , it is known that $\mathcal{G}(\boldsymbol{q})$ is rigid if and only if $\mathcal{G}(\boldsymbol{p})$ is rigid. Thus rigidity in $\mathbb{R}^d$ is entirely a combinatorial property of the graph $\mathcal{G}$, although a purely combinatorial polynomial time algorithm to determine generic rigidity is known only for $d = 1$ and $d = 2$.

## References
> 1. *[Rigid graph control architectures for autonomous formations](https://ieeexplore.ieee.org/abstract/document/4653105)* by **D. O. Anderson** etc.;
> 2. Section 1.2-1.3 of *[Formation Control of Multi-Agent Systems: A Graph Rigidity Approach](https://onlinelibrary.wiley.com/doi/book/10.1002/9781118887455)* by Marcio de Queiroz etc.;
> 3. Theorem from [Conditions for unique graph realizations](http://epubs.siam.org/doi/10.1137/0221008) by Bruce Hendrickson;
> 4. Preliminaries part of *[Distributed estimation and control for preserving formation rigidity for mobile robot teams](https://arxiv.org/abs/1309.4850)* by **Zhiyong Sun**, ..., **D. O. Anderson**;
> 5. Preliminaries part of *[Distributed stabilization control of rigid formations with prescribed orientation](https://arxiv.org/abs/1606.03199)* by **Zhiyong Sun**, ..., **D. O. Anderson**, Hyo-Sung Ahn
> 6. Preliminaries part of *[Angle-based shape determination theory of planar graphs with application to formation stabilization](https://www.sciencedirect.com/science/article/pii/S0005109819301475)* by Gangshan Jing, etc..
> 7. [The Rigidity of Graphs](https://www.jstor.org/stable/1998867) by L. Asimow and B. Roth in 1978.
> 8. Part 1.2: Generic Global Rigidity in *[Generic Global Rigidity](http://link.springer.com/10.1007/s00454-004-1124-4)* by Robert Connelly

<!-- ### Target formation and control framework
First, define a **target formation** with the given **interagent distance and formation orientation constraints**. Intuitively, by regarding the rigid formation as a **rigid body** and **specifying certain directions of some chosen edges in a global coordinate frame**, the orientation of the overall rigid formation can be fixed. 



### Gradient-based formation controller and problem formulation
Let $d_{k_{ij}}$ denote the desired distance of edge $k$ which links agent $i$ and $j$. We further define
$$
e_{k_{ij}} = \|p_i-p_j\|^2 - (d_{k_{ij}})^2. \tag{5}
$$

to denote the **squared distance error** for edge $k$.

> For ease of notation we may use $e_k$ and $d_k$ interchangeably in the sequel. This will also apply to $d_{k_{ij}}$ and $d_k$, $z_k$ and $z_{k_{ij}}$ in the following context when the dropping out of the dummy subscript $ij$ in each vector causes no confusion.

The squared distance error  vector is denoted by $e = [e_1, e_2, \cdots , e_m]^\top$ . In this paper, we suppose that each agent is modeled by a single integrator $\dot{p}_i = u_i$ where $u_i$ is the controller to be designed for achieving the formation control objective.

In Krick et al. (2009), the following **formation control system** was proposed:
$$
\dot{p}_i = -\sum_{j\in\mathcal{N}_i}(\|p_i-p_j\|^2 - d_{k_{ij}}^2)(p_i-p_j), \quad i=1,\cdots,n.\tag{6}
$$

The above control describes a steepest descent gradient flow of the following potential function (for rigid shape stabilization)
$$
V_1(p) = \frac14\sum_{(i,j)\in\mathcal{E}}(\|p_i-p_j\|^2 - d_{k_{ij}}^2)^2. \tag{7}
$$

However, the above control only stabilize a rigid formation shape, while the orientation of the formation is not specified. In this paper we will consider the problem of how to simultaneously stabilize a rigid shape and achieve a desired orientation for a target formation. -->
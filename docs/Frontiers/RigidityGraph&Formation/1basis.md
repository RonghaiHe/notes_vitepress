# Basis
> **Mostly** in [Rigid graph control architectures for autonomous formations](https://ieeexplore.ieee.org/abstract/document/4653105) by **D. O. Anderson** etc.
> 
> [Distributed estimation and control for preserving formation rigidity for mobile robot teams](https://arxiv.org/abs/1309.4850) by Zhiyong Sun, ..., **D. O. Anderson**
> 
> [Distributed stabilization control of rigid formations with prescribed orientation](https://arxiv.org/abs/1606.03199) by Zhiyong Sun, ..., **D. O. Anderson**, Hyo-Sung Ahn

## Graph Theory
> Please make sure you are familiar with the **concept** of graph

Consider an **undirected graph** with $m$ **edges** and $n$ **vertices**, denoted by $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ with vertex set $\mathcal{V} = \{1, 2, \cdots, n\}$ and edge set $\mathcal{E} \subset \mathcal{V} \times \mathcal{V}$. The neighbor set $\mathcal{N}_i$ is defined as $\mathcal{N}_i:=\{j\in\mathcal{V}:(i,j)\in\mathcal{E}\}$

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

::: tip
For a connected and undirected graph, one has $\operatorname{rank}(H) = n − 1$ and $\operatorname{null}(H) = \operatorname{span}{\mathbf{1}_n}$.
:::

The **adjacency matrix**: $A(\mathcal{G})$, a symmetric $n \times n$ matrix encoding the vertex adjacency relationships, with entries
$$
A_{ij} = \begin{cases}
    1, & \{i,j\}\in\mathcal{E}\\
    0 & \text{otherwise}
\end{cases}
$$

The **Laplacian matrix**: $L(\mathcal{G})$:
$$
L(\mathcal{G}) = H^\top H = \operatorname{diag}(A\mathbf{1}) - A
$$

::: tip Lemma Properties of **Laplacian matrix**
- $L(\mathcal{G})$ is orientation-independent
- $L(\mathcal{G})$ is symmetric and positive semidefinite
- If $\mathcal{G}$ is connected, then $L(\mathcal{G})$ has one and only one zero eigenvalue, with $\operatorname{null}(L(\mathcal{G})) = \operatorname{span}\{\mathbf{1}\}$
- $x^\top Lx = \sum\limits_{\{i,j\}\in\mathcal{E}}A_{ij}(x_i-x_j)^2$ where $x$ is a column  vector
:::

::: warning Definition: induced subgraph
For a graph $\mathcal{G} = (\mathcal{V},\mathcal{E})$, let $\mathcal{V}'$ be a **subset** of $\mathcal{V}$, then the **subgraph** of $\mathcal{G}$ induced by $\mathcal{V}'$ is the graph $\mathcal{G}' = (\mathcal{V}', \mathcal{E}')$ where $\mathcal{E}'$ includes all those edges of $\mathcal{E}$ that are incident on a vertex pair in $\mathcal{V}'$.
:::

## Rigidity theory
Roughly speaking, a formation is **rigid** if its only **smooth motions** are those corresponding to **translation or rotation** of the **whole formation**

To begin with, introduce **minimally rigidity**:
::: warning Definition: minimally rigidity
A formation is **minimally rigid** if it is **rigid** and if **no single** interagent distance constraint **can be removed** without causing the formation to lose rigidity
:::

A graph is minimally rigid if almost all formations to which the graph corresponds are minimally rigid. 

### Chacaterized in Combination
**Counting-type conditions** related to the graph can be used to ascertain the rigidity or nonrigidity of a generic formation corresponding to the graph.

::: danger Laman's Theorem
A graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ modeling a formation in **2D** with $n$ vertices and $m$ edges is **rigid** if and only if there **exists** a **subgraph** $\mathcal{G}' = (\mathcal{V}, \mathcal{E}')$ with $2n − 3$ edges such that for **every subset** $\mathcal{V}''$ of $\mathcal{V}$ , the induced subgraph $\mathcal{G}'' = (\mathcal{V}'', \mathcal{E}'')$ of $\mathcal{G}'$ satisfies $|\mathcal{E}''| \leqslant 2|\mathcal{V}''| − 3$.
:::

If a graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ modeling a formation in **3D** of $n$ vertices and $m$ edges is **rigid** then
- there exists a subgraph $\mathcal{G}' = (\mathcal{V}, \mathcal{E}')$ with $3n − 6$ edges such that, for every subset $\mathcal{V}''$ of $\mathcal{V}$ , the induced subgraph $\mathcal{G}'' = (\mathcal{V}'', \mathcal{E}'')$ of $\mathcal{G}'$ satisfies $|\mathcal{E}| \leqslant 3|\mathcal{V}| − 6$
- if $|\mathcal{E}| = 3|\mathcal{V}| − 6$, then $\mathcal{G}$ is 3-connected (equivalently, every pair of vertices of $\mathcal{G}$ is connected by three paths that pairwise have no vertices in common except the end vertices).

### Characterized in Linear Algebra
First, embed the graph $\mathcal{G}$ into **2-D space**

Let $p_i =  [p_{ix}, p_{iy}]^\top \in \mathbb{R}^2, i \in {1, 2, \cdots , n}$ denote the **position**  of node $i$. The stacked vector $p = [p_1^\top , p_2^\top , \cdots , p_n^\top ]^\top$ represents the position configuration for all the n nodes. By  introducing the matrix $\bar{H}:= H \otimes I_2 \in \mathbb{R}^{2m\times 2n}$, one can  construct the edge space as an image of $\bar{H}$ from the position vector $p$:
$$
z=\bar{H}p \tag{1}
$$

with $z_k=[z_{kx},z_{ky}]^\top\in\mathbb{R}^2$ being the **relative position** vector $p_j-p_i$ for the vertex pair defined by the $k$-th edge. In the following, two notations, $z_k$ and $z_{kij}$ will be used interchangeably to denote the $k$-th edge which links agent $i$ and agent $j$.

Introduce:
$$
Z(z) = \operatorname{diag}(z_1,z_2,\cdots,z_m)\in\mathbb{R}^{2m\times m}
$$

denote block diagonal matrix of the relative position.

The **rigidity function**: $r_{\mathcal{G}}(p): \mathbb{R}^{2n} \to \mathbb{R}^m$ associated with the framework $(\mathcal{G}, p)$ is defined as:
$$
r_{\mathcal{G}}(p) = (\|p_i-p_j\|^2)_{(i,j)\in\mathcal{E}} = Z(z)^\top z. \tag{2}
$$

where the **norm** is the standard Euclidean norm, and the $k$-th component in $r_{\mathcal{G}}(p), \|p_i − p_j\|^2$, corresponds to the **square length** of edge $z_k$.

::: warning Definition: rigidity
A framework  $(\mathcal{G}, p)$ is **rigid** in $\mathbb{R}^2$ if there exists a **neighborhood** $\mathbb{U}$ of $p$ such that $r^{−1}_\mathcal{G}(r_\mathcal{G} (p)) \cap \mathbb{U} = r^{−1}_\mathcal{K}(r_\mathcal{K}(p)) \cap \mathbb{U}$, where $\mathcal{K}$ is  the **complete** graph with the same vertex set as $\mathcal{G}$.
:::

Two frameworks $(\mathcal{G}, p)$ and $(\mathcal{G}, \bar{p})$ are **equivalent** if $r_\mathcal{G} (p) = r_\mathcal{G} (\bar{p})$ and are **congruent** if $\|p_i − p_j\| = \|\bar{p}_i − \bar{p}_j\|$ for all $i, j \in \mathcal{V}$.

Another useful tool to characterize the rigidity property of a framework is the **rigidity matrix**, which is defined as
$$
R(p) = \frac12\frac{\partial r_{\mathcal{G}}(p)}{\partial p} = Z(z)^\top \bar{H}\in\mathbb{R}^{m\times 2n}.\tag{3}
$$

Note that the entries of $R(p)$ only involve relative position vectors $z$, and we can rewrite it as $R(z)$. The rigidity matrix will be used to determine the **infinitesimal rigidity** of a framework, as shown in the following theorem.

::: danger Theorem 1
Consider a framework $(\mathcal{G}, p)$ in $d$-dimensional space with $n \geqslant d$ vertices and $m$ edges. It is **infinitesimally rigid** if and only if
$$
\operatorname{rank}(R(p)) = dn-d(d+1)/2. \tag{4}
$$

- $d=2: 2n-3$
- $d=3: 3n-6$
:::

Obviously, in order to have an infinitesimally rigid framework, the graph should have  at least $2n − 3$ (resp. $3n − 6$) edges in $\mathbb{R}^2$ (resp. $\mathbb{R}^3$).

From Theorem 1, one knows that the dimension of the null space of R(p) for an infinitesimally rigid framework $(\mathcal{G}, p)$ in the d-dimensional space is $d(d + 1)/2$. The following Lemma characterizes the structure of its null space.

::: tip Lemma 1: Null space of the rigidity matrix
Suppose the framework $(\mathcal{G}, p)$ is **infinitesimally rigid** with the associated rigidity matrix denoted as $R(p)$.

- $d=2$: The null space of $R(p)$ is of dimension $3$ and is described as $\operatorname{null}(R(p)) = \operatorname{span}(q_1, q_2, q_3)$, where
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

- $d=3$: The null space of $R(p)$ is of dimension $6$ and is described as $\operatorname{null}(R(p)) = \operatorname{span}(q_1, q_2, q_3, q_4, q_5, q_6)$, where
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
Suppose the framework $(\mathcal{G}, p)$ is **infinitesimally rigid**. Then for any node $i$, the set of relative position vectors $p_j − p_i, j \in \mathcal{N}_i$ **cannot all be collinear** (in the 2-D case) or **all be coplanar** (in the 3-D case).
:::

TODO Proof


- if $(\mathcal{G}, p)$ is **infinitesimally rigid**, so is $(\mathcal{G}, p')$ for a generic (open and dense) set of $p'$.
- Generally speaking, infinitesimal rigidity implies rigidity, but the converse is not true.

As for **minimal rigidity**, it can be described in two and 3D with the rigidity matrix, is characterizable in 2D with Laman’s theorem, and, in 3D, is the subject of necessary conditions and distinct sufficiency conditions on the graph determined by a formation. 

Given a graph with edge set $\mathcal{E}$ and vertex set $\mathcal{V}$, which is known to be **rigid**, it is additionally **minimally rigid** in two or 3D if and only if $|\mathcal{E}| = 2|\mathcal{V}| − 3$ or $|\mathcal{E}| = 3|\mathcal{V}| − 6$, respectively, where $|\mathcal{E}|$ and $|\mathcal{V}|$ are the numbers of edges and vertices of the graph.

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

<img src="/frontiers_rigidity_1_1_henneberg.png" alt="Henneberg's Method" width="100%" align="center">

These vertex-addition and edge-splitting operations are enough to grow every minimally rigid graph. It is also possible to **deconstruct a minimally rigid graph** by removing one vertex and a net count of two edges at each step

In growing and deconstructing a minimally rigid graph, all the intermediate graphs are minimally rigid

A by-product is the fact that every 2D minimally rigid graph is constructible from a primitive comprising a two-vertex single edge graph by using a sequence of these operations

In 3D, operations that are analogous to vertex addition and edge splitting can be defined, but whether these analogously defined operations are necessary and sufficient to build and deconstruct all minimally rigid graphs is still a **matter of conjecture**

### Globally Rigidity
Consider a formation with distinctly labeled agents and with some of the interagent distances known. We wish to understand what **alternative formation shapes** agents can have when they are positioned consistently with the data.  Note that if the formation $\mathcal{F}$ is consistent with the data, then so is every rotation, translation, and reflection of $\mathcal{F}$ . However, the existence of alternative formation shapes that are not obtainable from $\mathcal{F}$ through rotation, translation, and reflection is not clear.

::: warning Deifnition: globally rigidity
A 2D or 3D formation is **globally rigid** if and only if any two formations corresponding to the distance data differ by a combination of translation, rotation, and reflection.

A graph is **globally rigid** if and only if a generic formation corresponding to the graph is globally rigid.
:::

Global rigidity is a **more demanding** concept than rigidity since there exist rigid formations that are not globally rigid, and such formations can be converted to globally rigid formations only by the inclusion of additional distance constraints

- **Local rigidity**: cannot cannot deform smoothly from one shape. **Minimal rigidity** therefore allows retention of shape only in the face of potential smooth deformations, although it does not of itself specify what shape is retained. But with same constraints, graph can have different shapes
  - **flip ambiguity**: one vertex can be flip to another side
    - **Not** every minimally rigid graph contains a flip ambiguity
  - **discontinuous flex ambiguity**: positions of 2 or more vertexes can be changed while satisfying the constraints
    - Every formation corresponding to a minimally rigid graph with **four or more vertices** at generic positions can exhibit flex ambiguity
- **Global rigidity**: ensure that the shape is **unique**

<img src="/frontiers_rigidity_1_2_local_rigidity.png" alt="Ambiguity in local rigidity" width="100%" align="center">

A nice characterization of global rigidity is available for **2D formations** and their associated graphs. No extension is known for 3D formations. The 2D characterization uses the terms **redundant rigidity** and three **connectivity**. 

::: warning Definition: redundant rigidity
An undirected graph is termed **redundantly rigid** if it remains rigid after the removal of any single edge.
:::

::: warning Definition: connected graph
A graph is **connected** if there is a path from any vertex to any other vertex. A graph is $k$-connected if it remains connected when any $k − 1$ vertices are removed. Equivalently, between any two vertices of a $k$-connected graph, there are $k$ paths that have no common edge and no common vertex, except for the end vertices
:::

::: danger Theorem
A graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ modeling a formation in 2D of $|\mathcal{V}|$ vertices and $|\mathcal{E}|$ edges is globally rigid if and only if it is redundantly rigid and $3$-connected.
:::

- When a graph is globally rigid, a generic formation corresponding to the graph is also globally rigid.
- A variation of Laman’s theorem is available that characterizes the redundant rigidity property.
- A useful **property** of a **2D globally rigid formation** is that if the positions of three noncollinear agents are known, then the positions of all the other agents can be uniquely determined from the interagent distances corresponding to the edges in the formation graph.

Application:
- sensor network localization: unit disk graph
use the distance data to determine the Euclidean coordinates for the sensor positions that are consistent with the distance set.
The Euclidean coordinates, however, become **uniquely specified** by using further information obtained from designated **anchor** nodes or sensors, whose positions are known absolutely

Globally rigid formations with four or more agents are **not minimally rigid**. A reason for using nonminimally rigid formations, where more constraints are imposed than are needed for shape maintenance: **loss** of a sensor / communication link / control actuator

Some problems arise in handling nonminimally rigid formations: if the distances between agents in a formation are measured with some **noise** and controls operate to try to bring certain distances to specified values, a similar type of **inconsistency** will be likely to arise

## Formations
The task of maintaining a prescribed distance between a pair of agents requires **control action**. The **execution** of the task could be the responsibility of **both agents or one nominated agent** of the pair.

- Modeling using undirected graphs is appropriate in the case of **shared responsibility**
- The case of **single-agent or unilateral responsibility** is captured by assigning a **direction** to the relevant edge in the graph

A directed edge from vertex $u$ to vertex $v$ appears when agent $u$ has the **task** of maintaining a specified distance from agent $v$, and agent $v$ is **unconstrained** in its own motions w.r.t. the motion of $u$, or differently put, agent $v$ is **unconscious** of the task that agent $u$ has to execute. In this case, only one of the two agents has to sense the position of the other agent or receive the position information broadcast by the other agent and make decisions on its own.

Therefore, and advantageously, both the overall **communication complexity** in terms of sensed or received information and the overall **control complexity** for the formation are **halved** in comparison to the shared responsibility case.

The reduction in communication links can mean **lower bit rates** and **reduced difficulties with interference**. In the shared responsibility case, a problem can arise when noise is present and two agents fail to share distance estimate information and instead use inconsistent estimates of the distance between each other, but this problem cannot arise in the single-agent responsibility case

### Constraint Consistence and Persistence of Formations
Consider conditions involving **unilateral distance constraints** that ensure that the motions of a formation are restricted to translations or rotations of the formation as a whole.

A notion of **persistence** is introduced, which is an amalgam of two conditions, specifically, **rigidity** and a further notion of **constraint consistence**.
- **Rigidity**: if certain interagent distances are maintained, then all interagent distances are maintained when the formation moves smoothly
- **Constraint consistence**: the ability to maintain the specified interagent distances
  - **NOT** constraint consistence: When one agent moves, another agent has an **impossible** task due to the former agent is **unconscious** of the constraint
  - A 2D graph that has **no** more than **2** outgoing edges from every vertex is constraint consistent, although there are constraint consistent graphs that possess vertices having out-degree greater than two

A graph can be checked for persistence, that is, rigidity plus constraint consistence, by testing a certain collection of subgraphs for rigidity:

In 2D, Let $\mathcal{G}$ be a **directed graph** representing a 2D formation, and let $\{\mathcal{G}_1, \mathcal{G}_2, \cdots\}$ be the set of **undirected graphs** that are obtainable from $\mathcal{G}$ by **deleting** edges outgoing from every vertex whose **out-degree exceeds** $2$, until exactly $2$ outgoing edges remain for that vertex. 
Suppose, for example, that $\mathcal{G}$ has exactly one vertex $A$ with **out-degree** $3$; one vertex $B$ with **out-degree** $4$; and the others with out-degree $2$ or less. There are then $3(=C_3^1)$ possibilities for deleting a single outgoing edge from $A$, and there are $6(=C_4^2)$ ways to delete $2$ edges from the four edges outgoing from $B$. Thus there are $18$ different graphs $\mathcal{G}_i$ . Then $\mathcal{G}$ is **persistent** if and only if **all undirected versions** of the $\mathcal{G}_i$ are **rigid**.

In 3D, the same idea applies, except that outgoing edges in excess of $3$ rather than $2$ are deleted. A strengthened form of persistence, termed **structural persistence**, is useful for working with 3D graphs.

### Securing Persistence
Suppose that a two-dimensional undirected graph is **rigid**. Can we **assign edge directions** so that it is **constraint consistent** and thus **persistent**? The question in its full generality remains open. However, affirmative answers exist for **minimally rigid graphs**, as well as for graphs with certain structures, including **wheel graphs**, **trilateration graphs**, **complete graphs**, and **power graphs of cycle graphs**
> See *Acquiring and maintaining persistence of autonomous multi-vehicle formations* for more details

The **simplest algorithm** for assigning directions in a minimally rigid graph is to consider the associated **undirected graph** and determine a **Henneberg sequence** that generates it. Then directions can be assigned to the edges that are added at each step, using the rule that any vertex can have **no more than two outgoing edges**. Such a directed graph is termed **minimally persistent**. Minimally persistent graphs are precisely those that are minimally rigid and constraint consistent.

<img src="/frontiers_rigidity_1_3_persistent.png" alt="Persistent Graphs" width="100%" align="center">

Figure 3 shows some direction assignments for wheel graphs and C${}^2$-graphs, both structures being attractive for operational autonomous agent formations. Given an arbitrary graph $\mathcal{G}$, the graph $\mathcal{G}^2$ (the **square** of $\mathcal{G}$) is obtained by adding edges to $\mathcal{G}$, linking each vertex to its **two-hop** neighbors, i.e., to those vertices with which a neighbor vertex is **shared**. A C${}^2$-graph is the **square** of a **cycle graph**, which is a graph that is simply a cycle.

Wheel and C${}^2$ graphs have robustness properties, in the form of tolerance of agent or link loss in the formation, corresponding to vertex or edge loss in the graph. A wheel graph with $N$ vertices, which has $2N − 2$ edges, can **tolerate the loss of any single edge** while remaining persistent. A wheel graph can also **tolerate the loss of any single vertex other than the central vertex** together with the associated edges leaving or entering the lost vertex, in the sense that persistence is retained for the remaining graph. A C${}^2$ graph with $N$ vertices, which has $2N$ edges, retains persistence with the **loss of any single edge**, or with the **loss of any single vertex** and its incident edges.

### Henneberg Sequence Theory and Persistent Graphs
The broad conclusion is that the technique can be applied, so long as the primitive operations are modified to **allow directed edges** in the graphs, and also a further primitive operation is introduced.

More than one operation is possible, with the simplest possible operation being **edge-reversal**, that is, **reversing the direction** of one edge arriving at a vertex that has $1$ or $2$ DoF.

::: warning Definition: degree of freedom(DoF)
In 2D, a vertex is said to have $2$, $1$, or $0$ DoF if it has $0,1$, or at least $2$ outgoing edges; each outgoing edge uses up $1$ DoF. A direct generalization applies in 3D, where an agent can have up to $3$ DoF.
:::

### Extension of the Persistence Concept to 3D Formations
In 3D, most of the consistence and persistence ideas described above carry through. However, these extensions involve the **behavior of subsets of agents**, as opposed to individual agents or vertices. For $3$ and indeed higher dimensions, the concept of **structural persistence** is required.

<img src="/frontiers_rigidity_1_4_structural.png" alt="Structural Persistence" width="100%" align="center">

In 3D, checking structural persistence is trivial once persistence has been established. To illustrate structural persistence, Figure 4 depicts a three-dimensional formation with an underlying directed graph, which is persistent since it is rigid and each agent has no more than three outgoing edges. However, agents 1 and 2 are unconstrained, **having no outgoing edges**, and so in principle can **move apart**, thus **destroying** the shape of the formation. Hence, despite the persistence property, this formation is not structurally persistent, and thus does not have a sensing and control architecture that allows retention of its shape

Every 3D graph that has no more than $3$ outgoing edges from every vertex is **constraint consistent**, while a graph can be checked for persistence by testing a certain collection of subgraphs for rigidity. If a directed graph is persistent, the graph can be checked for  structural persistence.

In particular, the graph is structurally persistent if it is **persistent** and there is at most $1$ vertex of the graph with **no outwardly directed edges**.

If a graph is **acyclic and persistent**, it has at most $1$ vertex with no outwardly directed edges. Because the persistence property requires that the **total number of DoF** summed across all vertices is $6$, and the **only** way this number can be achieved in an acyclic graph is by having $1$ vertex with $3$ DoF, $1$ vertex with $2$ DoF, $1$ vertex with $1$ DoF, and the remainder with $0$ DoF, it follows that there is at most $1$ vertex with no outwardly directed edges, and the graph is then structurally persistent.

## Operation with formations
Various operations on formations can be contemplated. In particular, the concepts of **splitting**, **merging**, and **closing ranks** are defined for formations that are modeled using undirected graphs.

An application domain where such scenarios arise is **terrain surveillance** and **target localization** using a formation of aerial vehicles. The individual vehicles carry sensors performing tasks such as range determination, bearing determination, or time-difference-of-arrival determination.

- In this application, **acquiring and maintaining certain formation shapes** and hence rigidity is essential because of the need for well-established coordination as well as optimality of certain formation geometries for cooperative localization. Formation shape maintenance within a class of allowable shapes may also be required in scenarios such as avoidance of obstacle collision or of entry into no-fly zones; this may be achieved by **splitting**, and **merging** back the split formations once the obstacle or no-fly zone is passed.
- Formation shape adjustment may also be needed for restructuring (**closing ranks**) to **maintain rigidity** and **form an allowable shape** in the event of **loss** of one or more aerial vehicle agents, or for **addition** of one or more aerial vehicle agents during a mission to improve surveillance coverage.

Apart from rigidity preservation, the successful execution of these maneuvers requires detailed consideration of **agent dynamics** (since instantaneous changes of control strategy can produce undesired transient behavior), as well as inclusion of collision-avoidance protection

### Splitting
Consider a single rigid formation. Splitting refers to the division of the set of agents into **two subsets**, along with **suppression of the distance constraints** between agent pairs when the agents are in **different subsets**. Reasons for splitting include a **change of objective or obstacle avoidance**. See Figure 5 for an illustration of the problem.

<img src="/frontiers_rigidity_1_5_splitting.png" id="fig-15-splitting" alt="Formation Splitting"  width="100%" align="center">

In graph theory terms, the split yields two **separate subgraphs**, neither of which is guaranteed to be rigid. Introducing **additional distance constraints** in the separate subformations is thus required to **ensure rigidity** of each subformation separately. 

Additionally, we could consider **variations of the problem**. For example, we could assume that the starting formation is minimally rigid, we could consider 2D and 3D formations, and we could consider directed graph versions. We could also consider algorithm complexity, as well as the possibility of imposing computational constraints on individual agents to perform calculations on a decentralized basis for determining where additional distance constraints should be inserted. These problems are largely open.

### Merging
Consider two rigid formations. Merging requires the determination of **additional distance constraints** linking agent pairs with one agent drawn from each formation, such that the union of the agents of the two formations, along with the union of the distance constraints in the original formations and the new distance constraints, describes a single rigid formation. Figure 6 illustrates the problem.

<img src="/frontiers_rigidity_1_6_merging.png" alt="Formation Merging" width="100%" align="center">

### Closing ranks
Consider a single rigid formation. Suppose that one agent is removed, and, consequently all distance constraints are lost between this agent and the remaining agents of the formation; see Figure 7. 

<img src="/frontiers_rigidity_1_7_closing_ranks.png" id="fig-17-closing_ranks" alt="Closing Ranks" width="100%" align="center">

The problem is to determine **where new distance constraints can be inserted to recover rigidity**. In addition, the closing ranks problem can be generalized to contemplate simultaneous removal of two or more agents from a formation, with the removal also of the associated distance constraints.

A technique is given below for dealing with the problems of splitting, merging and closing ranks.

### Technique for dealing with operations
One way to solve these problems depends on a significant modification of the **Henneberg sequence** and is based on a **minimal cover problem**. This minimal cover problem presents a graph that is **not rigid** and for which a minimum number of new edges must be introduced to render the graph generically rigid. The solution of the minimal cover problem can be applied to solve the problems of formation merging, splitting, and closing ranks.

Additionally, the splitting problem is actually a particular case of the closing ranks problem, since one subformation can regard the agents of the other subformation as the lost agents. Further, the closing ranks problem can be solved by introducing new edges between former neighbors of the lost vertices of the graph, i.e., by performing a **local repair** as illustrated in [Figure 7](#fig-17-closing_ranks). Therefore, in the splitting problem, new edges can be restricted to connecting pairs of those vertices in one subformation graph that were previously neighbors of vertices that ended up in the other subformation graph, as illustrated in [Figure 5](#fig-15-splitting).

The formation operations discussed above can also be contemplated for directed graphs

## Metavertices, rigid bodies, and Metaformation
In merging two formations, **much of the internal structure is largely irrelevant**. For example, if two rigid formations are to be merged in 2D, the merging can be done by introducing $3$ distance constraints, each of which involves one agent in each of the two formations, while ensuring that, in each formation, **at least two distinct agents are involved in the new distance constraints**. This conclusion holds irrespective of the internal structure of the formations. Establishing general rules for connecting formations to form larger formations, while preserving rigidity is thus of interest. Since for this purpose details of the internal connections of the individual formations are unimportant, we term the **larger formation** a **metaformation**. In this connection, we note two streams of work.

### Rigidity and 2D Formations of Formations
**Body-bar systems** conceptually underpin the metaformation view of merging problems. A **body** is a generalization of a point agent. **Any rigid formation of agents can be replaced by a body**, a rigid object that in 2D has $3$ DoF, two displacements and one rotation. In contrast, a point agent in 2D has $2$ DoF, both translational. Each body can be deemed to have a set of connection points on its surface, with the property that distances can be constrained between two connection points in distinct bodies by inserting a **joining bar**. We can imagine a framework comprising a set of bodies, each of which might also be termed a **metavertex** or **meta-agent**, with certain distance constraints between them. Usually more than one connection point on the surface of a body is used; for if only one connection point were used, the body or the metavertex would be free to rotate about the connection point and the individual agents in it would then no longer remain at constant distance from the agent at the other end of the distance constraint from the connection point.

A key problem is to determine when such a framework, better termed a **metaformation** given that it is obtained by interconnecting bodies, is **rigid**. Of course, we want to answer this problem **without accounting for the internal structure** of the bodies.

Rigidity is characterized for metaformations of bodies using **both a generalization of the rigidity matrix and a generalization of Laman’s theorem** for the 2D case. Recall that Laman’s theorem provides necessary and sufficient conditions for generic rigidity of a graph corresponding to a formation of point agents, and the conditions are of a counting form; a simple adjustment of certain numbers appearing in the statement of Laman’s theorem converts the result to a theorem concerning generic rigidity of a graph corresponding to a 2D bodyframework. However, as for checking rigidity of a normal graph in 3D, there is no known necessary and sufficient counting condition in the style of Laman’s theorem for a 3D body-bar framework to be rigid. On the other hand, the rigidity matrix ideas work in 3D space, where the bodies have $6$ DoF, namely, three translational DoF and three rotational DoF.

Interconnection of two formations involves the interconnection of two bodies, and the extension of Laman’s theorem states $3$ distance constraints between connection points on each of the two bodies, with at least two connection points involved for each body, implies rigidity of the overall metaformation. This idea is extendable to the problem of merging more than two formations (metavertices) and agents (vertices). This type of result holds also for directed graphs.

### More on Formation Merging
Besides the problem described above of connecting two formations in 2D, several other related problems can be considered:

- connecting, by means of insertion of additional edges, two formations in 3D to secure **minimal rigidity**
- connecting two formations in 2D / 3D to secure **global rigidity**
- connecting two formations when they are not disjoint. Nondisjoint formations may have a limited number of **common vertices**, or a limited number of **common edges**, or both.

By appealing to various results on **rigidity** and **global rigidity**, various conditions are established to solve these problems. These conditions require the insertion of a minimum or exactly specified number of new connections that are incident on a minimum specified number of vertices in  each of the two merging formations. We give two examples to illustrate the results.

1. Consider two globally rigid 2D graphs, with one vertex in common. By **adding two new edges with one vertex in each formation**, and such that in **at least one of the formations the edges are incident on two distinct vertices**, we obtain a **globally rigid graph**. Note that the two added edges **cannot be incident on the vertex common** to the two initially given graphs.
2. Consider two **minimally rigid graphs** of 3D formations, with no vertices in common. **Merging** requires the addition of **at least $6$ new edges**, with the new edge set incident in each graph on **at least $3$ vertices**. Most patterns involving **precisely $6$ edges** ensure that the merged graph is **minimally rigid**. Acceptable patterns include every pattern such that **each graph has exactly $3$ vertices that the $6$ new edges are incident on**. Each graph can have either $2$ new incident edges for each of the $3$ vertices, or $1,2,3$ edges incident on the $3$ vertices. A further set of patterns can be obtained using any vertex that has $2$ or more new incident edges, by moving one of those incidences to a new vertex in the same graph on which no new edge is yet incident. In this way, up to $6$ vertices in each of the two merging graphs can have a new edge incident on it.
   1. A related result is that if the two 3D graphs are rigid but **not necessarily minimally rigid**, inserting $6$ new edges using the same incidence rules yields a **rigid graph**. Such an interconnection can be regarded as minimally rigid from the metaformation point of view, since the issue of whether or not the individual metavertices are minimally rigid internally is irrelevant

Directed versions of these results are given in [ref](https://google.com "Rigidity and persistence for ensuring shape maintenance of multiagent meta-formations"). Conditions for securing persistence include the conditions applicable to securing rigidity as discussed above.
For example, to merge two minimally persistent graphs in 3D into a larger minimally persistent graph, we need to insert **$6$ directed interconnection edges** that leave vertices with some DoF in the initial pre-merging graphs, thereby using $1$ DoF for each outgoing edge, although the added edges can arrive at any $3$ or more vertices of the other initial premerging graph. In 3D, the DoF of a vertex are $3,2,1,0$, according to whether the vertex has, respectively, $0,1,2,3$ or more outgoing edges. **Not every selection of interconnection edges leads to a persistent merged graph**, although, if one exists, then **a set of interconnection edges that make the merged graph structurally persistent can always be found**, even when the initial persistent graphs are **not structurally persistent**.

If the merged graph must be **persistent** but **not necessarily minimally persistent**, we need to **add $6$ directed edges that must leave vertices with positive DoF**. Further, **the number of new edges leaving a vertex with positive DoF must be no greater than its DoF count**. Other edges, possibly leaving vertices with **$0$ DoF, can under some conditions also be added**, although such additions can always be avoided. As a consequence, **at least $6$ DoF must be available in the two initial graphs**. the presence of $6$ DoF is, however, not guaranteed in nonminimally persistent graphs, in which case the two graphs cannot be merged.

In 3D, if only **two agents** in the two persistent graphs have **positive DoF**, then the two graphs **cannot be merged** into a single **persistent** graph. However, in every other case, if **at least $6$ DoF** are available, **$6$ directed interconnection edges can always be chosen** to make the merged graph **persistent** and even **structurally persistent**.

<img src="/frontiers_rigidity_1_8_merging.png" alt="Merging Persistent Graphs" width="100%" align="center">


Figure 8 illustrates merging two persistent 2D formations using directed edges. As with undirected graphs, three new edges incident on at least two agents in each formation can achieve the merging. To ensure persistence of the overall structure, the vertices left by these three new edges must have in the merged structure a **maximum out-degree** of $2$. This upper bound restricts the vertices at which outwardly directed edges must be added. In Figure 8(a), all the DoF of the merged formation end up associated with the upper subformation, which in a sense is a leader. The lower subformation is the follower.

For 3D formations, structural persistence of the merged formation is also desired. Requirements are set out in [ref](https://google.com "Rigidity and persistence for ensuring shape maintenance of multiagent meta-formations")

### Toward a More Systematic Theory
In 2D we have described a variation of Laman’s theorem describing the rigidity of a metaformation, obtained by connecting together metavertices or meta-agents. This result leads to the question of whether **the concept of a Henneberg sequence can be extended to metaformations**. Such a sequence could start with a single metavertex, or rigid formation, and involve the successive addition of meta-agents to the metaformation. Each addition would result in a metaformation that has the **minimal number of edges between metavertices** so as to guarantee rigidity of the overall metaformation. Indeed, such a construction is available. Analogues to the primitive operations of the standard Henneberg construction, namely, vertex addition and edge splitting, can be constructed. These operations are termed **metavertex addition** and **metaedge splitting**, respectively. See, for example, Figure 9. The construction can also be described by building on the results described in the previous section.

<img src="/frontiers_rigidity_1_9_meta_henn.png" alt="Meta-Henneberg's Method" width="100%" align="center">

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
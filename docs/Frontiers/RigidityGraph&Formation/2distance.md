# Distance-based Rigidity Formation
> *[Formation control of mobile agents based on inter-agent distance dynamics](https://www.sciencedirect.com/science/article/pii/S0005109811003906)*

## Preliminaries
### Graph Rigidity
Given an undirected graph $\mathcal{G}=(\mathcal{V},\mathcal{E}), \mathcal{V}=\{1,\cdots,N\}$. Let $p_i\in\mathbb{R}^2$ be assigned to each vertex $i$. A framework is defined as a  pair $(\mathcal{G},\boldsymbol{p})$, where $\boldsymbol{p}=(p_1,\cdots,p_N)\in\mathbb{R}^{2N}$.

The rigidity function $r_\mathcal{G}:\mathbb{R}^{2N}\to\mathbb{R}^{|\mathcal{E}|}$ associated with $(\mathcal{G},\boldsymbol{p})$ is defined as
$$
r_\mathcal{G}:=(\cdots,\|p_i-p_j\|^2, \cdots), \quad (i,j)\in\mathcal{E}.
$$

where $|\mathcal{E}|$ denotes the **cardinality** of $\mathcal{E}$ and $\|\cdot\|$ denotes the 2D Euclidean norm. For simplicity, we assume that edges are ordered as $\cdots , (i, j), \cdots , (k, l), \cdots$ such that $i > j, j \geqslant k$ and $k > l$.

### Euclidean distance matrix and graph realizability
A matrix $D=\left(d_{i j}\right) \in \mathbb{R}^{N \times N}$ is a **Euclidean distance matrix** (EDM) if and only if there exists a point $\left(p_1, \ldots, p_N\right) \in \mathbb{R}^{m N}$, where $p_i \in \mathbb{R}^m, i=1, \ldots, N$, such that $d_{i j}=\left\|p_i-p_j\right\|^2$ for $i, j=1, \ldots, N$.

The triangular inequality holds for elements of EDMs such that $\sqrt{d_{i j}} \leq \sqrt{d_{i k}}+\sqrt{d_{k j}}$ for all distinct $i, j$, and $k$. The dimension $m$ of the affine span of points $p_1, \ldots, p_N$ generating an EDM $D$ is the embedding dimension of $D$. An EDM $D$ is invariant under the translation and rotation of $p$.

Given an undirected graph $\mathcal{G}=(\mathcal{V}, \mathcal{E}), \mathcal{V}=\{1, \ldots, N\}$, a pair $(\mathcal{G}, \boldsymbol{d})$, where $\boldsymbol{d}=\left(\ldots, d_{i j}, \ldots\right),(i, j) \in \mathcal{E}$, is **realizable** if and only if there exists a point $\left(p_1, \ldots, p_N\right) \in \mathbb{R}^{m N}$ such that $d_{i j}=\left\|p_i-p_j\right\|^2$ for $i, j=1, \ldots, N$. That is, $(\mathcal{G}, \boldsymbol{d})$ is realizable if and only if $r_\mathcal{G}^{-1}(\boldsymbol{d})$ is not **empty**. The partial matrix $D^{\prime}$ induced by ( $\mathcal{G}, \boldsymbol{d}$ ) such that $d_{i j}^{\prime}=d_{i j}$ if $(i, j) \in \mathcal{E}$ and **all the other elements are unspecified** has an EDM completion $D$ if and only if $(\mathcal{G}, \boldsymbol{d})$ is realizable.

### Problem formulation
Consider an $N$ single-integrator modeled agent group in the plane:
$$
\dot{p}_i=u_i, \quad i=1,\cdots,N, \tag{1}
$$

where $p_i\in\mathbb{R}^2$ and $u_i\in\mathbb{R}^2$ denote the position and control input, respectively, of agent $i$.

The **sensing topology** among agents of the group is modeled by an undirected graph $\mathcal{G}=(\mathcal{V},\mathcal{E})$, which is referred to as the sensing graph of the group. We assume that $(\mathcal{G},\boldsymbol{p})$ is **rigid**. Each agent $i$ measures relative displacements of its neighbors,
$$
p_{ji}:=p_j-p_i, j\in\mathcal{N}_i, i\in\mathcal{V}, \tag{2}
$$

where $\mathcal{N}_i$ is the **set of all neighbors** of agent $i$. Due to the absence of a common directional-sense, the directional information contained in $p_{ji}$ **cannot** be used in a **global** sense. The **distance-based control laws**, thus, generally **adjust** $\|p_{ji}\|$ rather than $p_{ji}$, while the **displacement-based control laws** directly adjust $p_{ji}$.

Given a point $\boldsymbol{p}^*=\left(p_1^*, \ldots, p_N^*\right) \in \mathbb{R}^{2 N}$ of $\mathcal{G}$ such that $\left(\mathcal{G}, \boldsymbol{p}^*\right)$ is **infinitesimally rigid**, the desired formation is defined as
$$
E_p:=\left\{\boldsymbol{p} \in \mathbb{R}^{2 N}:\left\|p_i-p_j\right\|=\left\|p_i^*-p_j^*\right\|, i, j \in \mathcal{V}\right\} . \tag{3}
$$

That is, $E_p$ is the set of all formations congruent to $\boldsymbol{p}^*$.

Thus the overall group task is the **stabilization** of $p$ to satisfy
$$
\left\|p_i-p_j\right\|=\left\|p_i^*-p_j^*\right\|, \quad i, j \in \mathcal{V}
$$

Then the subtask of each agent $i$ can be assigned as the stabilization of its position $p_i$ to satisfy
$$
\left\|p_i-p_j\right\|=\left\|p_i^*-p_j^*\right\|, \quad j \in \mathcal{N}_i, i \in \mathcal{V} \tag{4}
$$

The **consistency** between the overall group task and the subtasks of agents is crucial, i.e., the achievement of all subtasks should imply the completion of the overall group task. The rigidity of $\left(\mathcal{G}, \boldsymbol{p}^*\right)$ is linked to the consistency. Based on [Definition of rigidity](./1distance#characterized-in-linear-algebra), it follows from the rigidity of $\left(\mathcal{G}, \boldsymbol{p}^*\right)$ that there exists a neighborhood $\mathcal{U}_q$ of $q \in E_p$ such that if $\boldsymbol{p} \in \mathcal{U}_q$, then the desired formation is achieved by satisfying (4), i.e., $r_\mathcal{G}^{-1}\left(r_\mathcal{G}\left(\boldsymbol{p}^*\right)\right) \cap \mathcal{U}_q \subset E_p$. Note that if $\left(\mathcal{G}, \boldsymbol{p}^*\right)$ is not rigid, then $r_\mathcal{G}^{-1}\left(r_\mathcal{G}\left(\boldsymbol{p}^*\right)\right) \cap \mathcal{U}_q \not \subset E_p$.

The formation control problem is then formulated as follows:

**Problem** 1: Given $N(N \geqslant 3)$ single-integrator modeled agents, an undirected graph $\mathcal{G}=(\mathcal{V}, \mathcal{E})$ and a point $\boldsymbol{p}^* \in \mathbb{R}^{2 N}$ of $\mathscr{g}$, suppose that $\left(\mathcal{G}, \boldsymbol{p}^*\right)$ is **infinitesimally rigid**. Design a control law $\boldsymbol{u} \in \mathbb{R}^{2 N}$ such that the desired formation $E_p$ in (3) is asymptotically stable under the control law, based on measurements (2).

### Gradient Law
Given general groups of single-integrator modeled agents, the gradient law is as follows:
$$
\boldsymbol{u}_g = -\nabla \phi(\boldsymbol{p}) = -k_g(R(\boldsymbol{p}))^\top\tilde{\boldsymbol{d}}, \tag{5}
$$

where $\tilde{\boldsymbol{d}} = \boldsymbol{d}-\boldsymbol{d}^*, \boldsymbol{d}=r_\mathcal{G}(\boldsymbol{p}), \boldsymbol{d}^* = r_\mathcal{G}(\boldsymbol{p}^*)$, and
$$
\phi(\boldsymbol{p}) := \frac{k_g}{4}\sum_{(i,j)\in\mathcal{E}}(\|p_i-p_j\|^2 - d_{ij}^*)^2
$$


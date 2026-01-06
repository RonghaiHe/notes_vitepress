# Bearing
> - Section 2-3 of *[Formation shape control based on bearing rigidity](https://doi.org/10.1080/00207179.2012.685183)* by **Tolga Eren** in 2012, where $k$ edges in the paper is replaced by $m$ here.
> - Section 2.2-4 of *[Using angle of arrival (bearing) information for localization in robot networks](https://journals.tubitak.gov.tr/elektrik/vol15/iss2/4)* by **Tolga Eren** in 2007
> - *[Sensor and network topologies of formations with direction, bearing, and angle information between agents](https://ieeexplore.ieee.org/abstract/document/1273093)* by **Tolga Eren**, ..., **Brian D.O. Anderson**
> - Section II of *[Bearing Rigidity and Almost Global Bearing-Only Formation Stabilization](https://ieeexplore.ieee.org/abstract/document/7163542)* by Shiyu Zhao and Daniel Zelazo for the part "arbitary dimensions". Note that the bearing function $F_B(p)$ is replaced by $B_\mathcal{G}(\boldsymbol{p})$

## Introduction
**Distance** measurements are **not** the **only** geometrically pertinent quantities that can be used in formation maintenance. Agents in a formation network can have other sensing capabilities and exploiting one or more of the capabilities can contribute to shape control.

Another form of such a geometric quantity is **bearing**, and such a quantity, in conjunction with distance, can contribute in maintaining the shape of a formation. Bearings along with distances have been used for navigation of robot applications by using the leaderfollower approach while maintaining a desired formation.

A **bearing** is the **angle** between the $x$-axis of the local coordinate system of node $i$ and the line segment joining node $i$ with node $j$ with which the node $i$ has a sensing/communication link. The angle is measured in **trigonometric direction** from $x$-axis of the local coordinate system.
- By “**trigonometric direction**” is meant the **counterclockwise** rotation direction around a trigonometric circle.
- By **a node’s local coordinate system** is meant a coordinate system which is chosen by each node based on some criteria, e.g., the coordinates are referenced to a known location in the immediate area, or the longer side of a node is chosen to be the x -axis of the local coordinate system, and so forth. Two local coordinate systems may not always line up on the same map.

If two nodes $i$ and $j$ have a sensing/communication link  between each other, then **bearing constraints** for $i$ and $j$, denoted by $\psi_{ij}$ and $\psi_{ji}$ respectively, are the **angles** between the $x$-axis of each node’s own coordinate system and the link $(i, j)$.

two benefits of bearing measurements:
1. A formation based on angles can be **scaled up more easily** compared to formations using only distance measurements since bearings are essentially **angle measurements**. A bearing rigid formation based on all bearings with an additional measurement of one distance measurement maintains its shape. If we reserve the single distance measurement between the $1^\text{st}$ and the $2^\text{nd}$ leader agents, then translation, rotation and scaling of the formation can easily be managed by these two agents.
2. Bearing-based rigidity along with a single distance measurement not only provides local uniqueness that is useful for formation shape, but also provides **global uniqueness** that plays a role in multi-agent localisation. This property gives us an **unambiguous relative positions** of agents with respect to each other.

## 2D Bearing Rigidity
### Parallel Drawings
::: warning Definition: plane configuration
A **plane configuration** is a collection of geometric objects such as points, line segments and circular arcs in the plane, together with constraints on and between these objects.
:::

::: warning Definition: parallel drawings
Two formations on the same graph are **parallel drawings** if corresponding edges are parallel.
:::

By a 2D formation at $\boldsymbol{p}\triangleq[p_1, p_2, \cdots, p_n]^\top$, written $F(\boldsymbol{p})=(\mathcal{V}, \mathcal{E}, \boldsymbol{p})$, is meant a set of $n$ agents indexed by a set of integers $\mathcal{V}=\{1, 2, \cdots, n\}$, together with a set $\mathcal{E}$ of $m$ links, labelled $(i, j)$, where $i$ and $j$ are distinct integers in $\{1, 2, \cdots, n\}$. In this context, the points $p_i$ represent the centre positions of agents in $\mathbb{R}^2$.
<!-- and the ordered pairs in $\mathcal{E}$ label those specific-ordered agent pairs between which, there is a **bearing constraint**. -->

Given a formation $\mathcal{F}(\boldsymbol{r})$ with an underlying graph $\mathcal{G}=(\mathcal{V}, \mathcal{E})$, we are interested in **parallel drawings** $\mathcal{F}(\boldsymbol{s})$ with the **same underlying graph** $\mathcal{G}=(\mathcal{V}, \mathcal{E})$ in which $s_i - s_j$ is **parallel** to $r_i - r_j$ for all $(i, j) \in \mathcal{E}$. Using the operator $(\cdot)^\perp$, for turning a plane vector by $\pi/2$ counterclockwise, these constraints can be written as
$$
(r_i-r_j)^\perp\cdot(s_i-s_j)=0 \tag{1}
$$

Each such constraint is called a **direction constraint** $\mathcal{D}$. A formation with direction constraints can be represented by $( \mathcal{V} ,\mathcal{D}, g)$ where $g : \mathcal{D} \longmapsto \mathbb{S}^{d-1}$ (the unit sphere of directions). Each maintenance link $( i , j ) \in \mathcal{D}$ is used to maintain the direction $g ( ( i , j))$ of the line joining certain pairs of agents fixed w.r.t. a reference coordinate system. This gives a system of $|\mathcal{D}|$ homogeneous linear equations, and a parallel drawing is a solution of this system. The theory of parallel drawings is the **dual of rigidity**.

::: tip Proposition 1
A bearing constraint can be written as a direction constraint.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

A bearing constraint for node $i$ along the trajectory $s$ can be expressed as:
$$
\angle[s_j(t)-s_i(t),e_x]=\Theta_{ij}.
$$

and similarly the bearing constraint for node $j$ along the trajectory $s$ can be expressed as:
$$
\angle[s_i(t)-s_j(t),e_x]=\Theta_{ji}.
$$

where $e_x$ is the unit vector along the $x$-axis of the global coordinate system, and $\angle[\cdot]$ stands for the function that maps the two vectors in the argument to the angle between them, where the angle is measured in the **counterclockwise** direction from the $2^\text{nd}$ vector to the $1^\text{st}$ vector in the argument, and $\Theta$ is the bearing information in the **global** coordinate system.

By a trajectory of  $\mathcal{F}_{\boldsymbol{p}}$, we mean a continuously parameterized, one-parameter family of points $\{s(t) : t \geqslant 0\}$ in $\mathbb{R}^{dn}$ , which  contains $\boldsymbol{p}$. Let us consider a particular fixed set of points, $\boldsymbol{p}_d = (p_1, p_2, \cdots, p_n)$, along the trajectory $s(t)$  where the bearing constraints are satisfied. We can think of $\boldsymbol{p}_d$ as a reference set of points that determines the desired bearing constraints for the formation and the nodes can be thought of satisfying the bearing constraints set by $\boldsymbol{p}_d$ at all other points along the trajectory. For node $i$, we can write
$$
\angle[(p_j-p_i),e_x]=\Theta_{ij}.
$$

and for node $j$, we get:
$$
\angle[(p_i-p_j),e_x]=\Theta_{ji}.
$$

Next, let us consider the vector $(p_j − p_i)^\perp$ which is obtained by rotating the vector $(p_j − p_i)$ counterclockwise by $90^\circ$ and the vector $(p_i − p_j)^\perp$ which is obtained by rotating the vector $(p_i − p_j)$ counterclockwise by $90^\circ$. For these two vectors we write,
$$
\angle[(p_j-p_i)^\perp,e_x]=\frac{\pi}{2} + \Theta_{ij}\pmod{2\pi}.
$$

and for node $j$, we get:
$$
\angle[(p_i-p_j)^\perp,e_x]=\frac{\pi}{2} + \Theta_{ji}\pmod{2\pi}.
$$

Thus
$$
\begin{aligned}
  &\angle[(p_j-p_i)^\perp,s_j(t)-s_i(t)]=\frac{\pi}{2}\\  
  &\angle[(p_i-p_j)^\perp,s_i(t)-s_j(t)]=\frac{\pi}{2}\\
  \implies & (p_i-p_j)^\perp\cdot (s_i(t)-s_j(t)) = 0.
\end{aligned}
$$

For every link with a bearing constraint in the point formation, it is now straightforward to write
$$
(p_i-p_j)^\perp\cdot (s_i(t)-s_j(t)) = 0, \quad (i,j)\in\mathcal{E}, \, t\geqslant 0.
$$

Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

This gives a system of $|\mathcal{E}|$ homogenous linear equations. A solution of this system with respect to $\mathcal{F}_{\boldsymbol{p}}$ is called a **parallel point formation**.

### Parallel Rigidity
Given a formation $F(\boldsymbol{p})$ in $2$-space with **direction constraints**, we are interested in parallel formations $F(\boldsymbol{r})$ in which $r_i - r_j$ is **parallel** to $p_i - p_j$ for all $(i, j) \in\mathcal{E}$ within the global coordinate system. **Trivially**, parallel formations are **translations and uniform scaling** (homothety) of the original formation, including the parallel formation in which all agents are coincident. All others are **non-trivial**.

<figure>
   <img src="/frontiers_rigidity_2_1_parallel.jpg" alt="Parallel Constaints" width="100%" align="center">
   <figcaption> Figure 1: Parallel Constraits</figcaption>
</figure>

For example, Figure 1(b) shows a **translation** of the formation in Figure 1(a); and Figure 1(c) and (d) are **uniform scaling** of the formation in Figure 1(a). In particular, Figure 1(c) is a **uniform contraction** and Figure 1(d) is an **uniform expansion**. Figure 1(e) shows a **non-trivial parallel formation** of Figure 1(a), because the formation in Figure 1(e) **cannot** be obtained from the formation in Figure 1(a) by **translation or uniform scaling** although all the corresponding links in these two formations are parallel to each other.

::: warning Definition: parallel rigid motion
A **parallel rigid motion** is a trajectory along which point formations contained in this trajectory are **translations or dilations** of each other. 

Two point formations $\mathcal{F}_{\boldsymbol{p}}$, and $\mathcal{F}_{\boldsymbol{q}}$, are **parallel** if they have the **same graph** and their corresponding maintenance links are **parallel** to each other.
:::

::: warning Definition: parallel rigid
A formation $F(\boldsymbol{p})$ with direction constraints is called **parallel rigid** if all parallel point formations of $F(\boldsymbol{p})$ are **trivially parallel** to $F(\boldsymbol{p})$. Otherwise it is called **flexible**.

If **parallel rigid motions** are the **only** possible trajectories then the formation is called **parallel rigid**, otherwise **parallel flexible**.
:::

For example, the formation in Figure 1(a) is **flexible**. On the other hand, the formation in Figure 1(f), which is obtained from the formation in Figure 1(a) by **inserting an extra link** $(1, 3)$, is a parallel rigid formation.

Taking the derivative of $(1)$ (recall that $\boldsymbol{p}$ is a fixed point set and $s(t)$ is time varying in $(1)$), we  obtain
$$
(p_i-p_j)^\perp\cdot (\dot{s}_i(t)-\dot{s}_j(t)) = 0, \quad (i,j)\in\mathcal{E}, \, t\geqslant 0.
$$

These equations can be rewritten in matrix form as
$$
R_\mathcal{B}(\boldsymbol{p})\dot{s} = 0
$$

where $\dot{\boldsymbol{q}}= [\dot{q}_1, \dot{q}_2, \cdots, \dot{q}_n]^\top$ and $R_\mathcal{B}(\boldsymbol{p})$ is the **rigidity matrix** for formations with **bearing information**.

It is shown that any statement for a point formation of **distances** can be given for the same point formation of **directions** where distances are **switched** with directions. The **isomorphism** goes down the pairs of columns for each vertex, turning all the vectors by $90^\circ$ (in a direction of choice). This process preserves the solution space (just turning the solutions by $90^\circ$ as well), and turns each row for a distance into a row for a direction. Because of this geometric switching, there is a generic switching theorem that converts results in a direct fashion, so the generic type of rigidity is defined in the same manner as in the case of distances. Thus the graph theoretic test is given with the following theorem:

::: danger Theorem 1
A graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$, where $\mathcal{E}$ denotes the set of links with bearing measurements, is **generically parallel rigid** in $2$-space if and only if there is a subset $\mathcal{E}'\subseteq\mathcal{E}$ satisfying the following two conditions:
1. $|\mathcal{E}'| = 2|\mathcal{V}|-3$;
2. For all $\mathcal{E}''\subseteq\mathcal{E}', \mathcal{E}''\neq\phi, |\mathcal{E}''|\leqslant 2|\mathcal{V}(\mathcal{E}'')|-3$, where $\mathcal{V}(\mathcal{E}'')$ is the number of vertices that are end-vertices of the edges in $\mathcal{E}''$;
:::

For networks using **pure distance information**, the conditions for global rigidity are **stronger** than those for rigidity of formation with distance constraints.

For networks in $2$-space with bearing information between nodes, the situation is strikingly different. Because the key constraints are **linear equations**, if there are two non-similar parallel formations with points $p$ and $q$, then both formations are **not rigid**. Therefore, for these formations, **parallel rigidity** implies **global rigidity up to similarity**. In $2$-space, if we have the $2n − 3$ bearings of a parallel rigid formation, and add one length, we will have a **globally rigid formation**. We do have a simple combinatorial characterization (counting) and fast algorithms for global rigidity.

::: danger Theorem 2
If $\mathcal{F}_{\boldsymbol{p}}$ is a formation in $2$-space, then $\mathcal{F}_{\boldsymbol{p}}$ is **parallel rigid** if and only if $\mathcal{F}_{\boldsymbol{p}}$ is **globally rigid** under **translation** and **dilation** maps.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

Suppose that $\mathcal{F}_{\boldsymbol{p}}$ is **not** globally rigid. Therefore, there is a parallel drawing $\mathcal{F}_{\boldsymbol{q}}$ which is not similar to $\mathcal{F}_{\boldsymbol{p}}$ as a configuration. We will show that $\mathcal{F}_{\boldsymbol{p}}$ is **flexible** with $\mathcal{F}_{\boldsymbol{q}}$ as a non-trivial parallel drawing. For all edges $(i, j) \in \mathcal{E} , (p_i − p_j)$ is parallel to $(q_i − q_j)$. Therefore, $(p_i − p_j)^\perp \cdot(q_i − q_j) = 0$ as required. Since $\mathcal{F}_{\boldsymbol{p}}$ is not similar to $\mathcal{F}_{\boldsymbol{q}}$, there is some pair $(h, k) \not\in\mathcal{E}$ such that $p_h − p_k$ is not parallel to $q_h − q_k$ . Therefore,  $(p_h − p_k)^\perp \cdot(q_h − q_k) \neq 0$ . This confirms that $\mathcal{F}_{\boldsymbol{q}}$ is a non-trivial parallel drawing of $\mathcal{F}_{\boldsymbol{p}}$.

Conversely, suppose that $\mathcal{F}_{\boldsymbol{p}}$ is flexible with a non-trivial parallel drawing $\mathcal{F}_{\boldsymbol{q}}$. Then $\mathcal{F}_{\boldsymbol{q}}$ itself is the non-similar parallel drawing of $\mathcal{F}_{\boldsymbol{p}}$ which shows it is not globally rigid. <div style="text-align: right;">$\square$</div>
</details>

More generally, nodes are not confined to use their sensing and communication links for measuring **distances only**. We can exploit such a possibility to generate point formation that is not only locally unique but also globally unique with as few links as a minimally rigid formation.

For formations with combined distance-bearing constraints, there is the following combinatorial characterization of parallel rigidity.

::: danger Theorem 3: generically parallel rigid
With $\mathcal{L}$ for **distances** and $\mathcal{B}$ for **bearings**, a graph $\mathcal{G} = (\mathcal{V}, \mathcal{L}, \mathcal{B})$ is **generically parallel rigid**  in $2$-space if and only if the following conditions hold:
1. $|\mathcal{L}| + |\mathcal{B}| = 2|\mathcal{V}| − 2$ ;
2. For all subsets $\mathcal{V}'$ of vertices: $|\mathcal{L}'| + |\mathcal{B}'| \leqslant 2|\mathcal{V'}| − 2$ ;
3. For all subsets $\mathcal{V}'$ of at least $2$ vertices: $|\mathcal{B}'| \leqslant 2|\mathcal{V}'| − 3$;
4. For all subsets $\mathcal{V}'$ of at least $2$ vertices: $|\mathcal{L}'| \leqslant 2|\mathcal{V}'| − 3$ .
:::

TODO Proof 
> B. Servatius, W. Whiteley, “Constraining plane configurations in Computer Aided Design: Combinatorics of  directions and lengths,” 1995, preprint, York University, North York, Ontario.

The conditions for distance-direction constraints are closely related to the conditions for parallel rigidity for distance-bearing constraints since bearing constraints can be written as direction constraints as stated in Proposition 1.

A point formation using direction-distance constraints can be unique up to translation.  This will require $2|\mathcal{V}| − 2$ independent constraints.
For example, it is easy to see that: 
1. An independent set  of $2|\mathcal{V}| − 3$ distances plus any single direction is an appropriate set of $2|\mathcal{V}| − 2$ constraints; 
2. An independent set of $2|\mathcal{V}| − 3$ directions plus any single distance is an appropriate set of $2|\mathcal{V}| − 2$ constraints;
3. A **spanning tree**, used once for distances and a second time for directions, is an appropriate set of $2(|\mathcal{V}| − 1) = 2|\mathcal{V}| − 2$  constraints.
> A **tree** is a graph in which any two vertices are connected by exactly **one path**. Given a  connected, undirected graph, a **spanning tree** of that graph is a subgraph which is a tree and connects all the vertices together. 

Are these sufficient? Even for distances, we know that these conditions are not sufficient for special positions of the points. However, by **Laman’s Theorem**, they are sufficient for distances on ‘generic configurations’. The most we can expect is that these expanded conditions are also sufficient for ‘generic configurations’. We replace the entries for the points $p$, in the matrix by algebraically independent values, and look at the solution space for these values. If all solutions are translations, then almost all  configurations (an open dense subset of configurations) $p \in \mathbb{R}^{2|\mathcal{V}|}$ have only translations. Specifically, if we use variables for the coordinates, the rank of this matrix is determined by maximal non-zero minors a finite set of polynomials in these variables. Such a polynomial is either always zero or is non-zero for an open dense subset. The intersection of this finite collection of subsets for all maximal non-zero minors forms the set of generic plane configurations for formations with distance-direction constraints.

This characterization also covers the distance-bearing combinations that permit more than one distance. Note that this is the criterion for rigidity up to translation, not for global rigidity, if there are multiple distance constraints. It is **rigidity up to translation** since rotations are not allowed because of bearing constraints. We suspect that it is probably the criterion for global rigidity, up to translation, if there are **enough bearing constraints**. Under this assumption, and assuming that angle of arrival is measured in trigonometric direction, we have a conjecture for global rigidity.

::: tip Conjecture 1 (in 2007)
Provided that the underlying graph constructed with the links representing **bearing constraints** form **at least a spanning tree**, then for generic formations, **rigidity up to translation** is **equivalent** to **global rigidity** of the formation.
:::

### Bearing Rigidity
**Bearing constraints** in mobile formations have $2$ major differences compared to directions used in parallel drawings.

<figure>
   <img src="/frontiers_rigidity_2_2_bearing_constraints.jpg" alt="Bearing Constaints v.s. Direction Constraints" width="100%" align="center">
   <figcaption> Figure 2: Bearing Constaints v.s. Direction Constraints</figcaption>
</figure>

1. **Bearing constraint** is more **stringent** than **direction constraint**.
For example, assume that $a_1$ is fixed in $2$-space as shown in Figure 2(a) and $a_2$ has a **bearing constraint** $\psi_{12}$ with $a_1$. Note that, direction constraint is satisfied by both $\psi_{12}$ and $\psi_{12}^* = \psi_{12}-\pi$ as shown in Figure 2(b), where one is obtained by a flip of the other w.r.t. $a_1$. Thus, a direction constraint can be thought as a **necessary condition** of a bearing constraint. For maintaining the shape of a mobile formation, where only continuous motions of agents are feasible, flip ambiguity is avoided, and thus, we can make use of parallel drawings for the analysis and design of rigid formations that make use of bearing measurements.
2. **Direction constraints**, in the context of parallel drawings studied in computer-aided design, are measured w.r.t. **a fixed global reference frame**, whereas **bearing constraints** in mobile formations are measured w.r.t. **the heading of leader agents**.
This selection of reference frame renders bearing constraints convenient for mobile formations, because follower agents act to satisfy bearing constraints as their leaders move (and possibly change their headings), hence preserving the shape of the overall formation. For example, if a1 changes its heading direction as shown in Figure 2(c), then $a_2$ has to change its position to satisfy the bearing constraint, which results in shape maintenance. This aspect makes the application of bearing rigidity in formation navigation different than the application of bearing rigidity in network localisation.



We can state the conditions for **bearing rigidity** for a digraph as follows:

::: warning Definition: Bearing Rigidity
Given a **digraph** $\mathcal{G}(\mathcal{V}, \mathcal{E})$ of a formation network, $\mathcal{G}$ is **bearing rigid** if and only if there is a subset $\mathcal{E}'\subseteq\mathcal{E}$ satisfying the following conditions:
1. $|\mathcal{E}'| = 2|\mathcal{V}|-3$;
2. For all $\mathcal{E}''\subseteq\mathcal{E}', \mathcal{E}''\neq\phi, |\mathcal{E}''|\leqslant 2|\mathcal{V}(\mathcal{E}'')|-3$, where $\mathcal{V}(\mathcal{E}'')$ is the number of vertices that are end-vertices of the edges in $\mathcal{E}''$;
3. $\mathcal{G}'(\mathcal{V}, \mathcal{E}')$ is **constraint consistent**.
:::

This test provides a combinatorial formation analysis method to **test rigidity** for a given formation. In the context of navigating formations of mobile agents, we will call the formations satisfying the **$1^\text{st}$ two conditions** listed above as **bearing rigid formations**. We will call the formations satisfying the **three conditions** listed above as **directed bearing rigid formations**. If a bearing rigid formation loses rigidity property in the loss of any edge in $\mathcal{G}$, then such a formation is called **minimally (directed) bearing rigid formation**.

From a formation synthesis (design) point-of-view, there is a Henneberg type method to construct bearing rigid formations.

### Bearing-based Henneberg construction
A Henneberg-type construction is a technique for growing **rigid digraphs** starting from **a single edge** in 2-space. One of the following operations is applied (when applicable) at each step in the procedure. The resulting graphs are provably rigid.

- **Directed $2$-valent vertex addition**: Given a digraph $\mathcal{G}(\mathcal{V}, \mathcal{E})$ where $(a, b)\in\mathcal{E}$, a vertex $q$ of in-degree $2$ is inserted into $\mathcal{G}$ by adding the edges $(a, q)$ and $(b, q)$.
- **Directed $2$-valent vertex deletion**: Given a digraph $\mathcal{G}(\mathcal{V}, \mathcal{E})$ where $(a, q), (b, q) \in \mathcal{E}$, a vertex $q \in \mathcal{V}$ of in-degree $2$ with the edges $(a, q)$ and $(b, q)$ is deleted from $\mathcal{G}$.
- **Directed $3$-valent vertex addition**: Given a digraph $\mathcal{G}(\mathcal{V}, \mathcal{E})$ where $(a, b)\in\mathcal{E}$, a vertex $q$ of in-degree $2$ and out-degree $1$ is inserted into $\mathcal{G}$ by deleting the edge $(a, b)$ and adding the edges $(a, q), (c, q)$ and $(q, b)$. This operation is also known as **edge splitting operation**.
- **Directed $3$-valent vertex deletion**: Given a digraph $\mathcal{G}(\mathcal{V}, \mathcal{E})$ where $(a, q), (c, q), (q, b) \in \mathcal{E}$, the vertex $q$ of in-degree $2$ and out-degree $1$ is removed from $\mathcal{G}$ by deleting the edges $(a, q), (c, q)$ and $(q, b)$ and inserting one of the pairs in $\{(a, b), (c, b)\}$.
- **Edge reversal**: Given a digraph $\mathcal{G}(\mathcal{V}, \mathcal{E})$ where $(a, b)\in\mathcal{E}$, an edge $(a, b)$ in $\mathcal{G}$ is replaced by $(b, a)$.

A **minimally bearing rigid formation** in 2-space has $2n-3$ links. Subtracted three in this formula comes from the three DoF distributed to some agents in a rigid formation: $2$ for translation and $1$ for scaling. As in the case of distance-based persistent formations, this freedom can be distributed in a number of ways.

- **two-leader formation structure**, in which there is an agent ( $1^\text{st}$ leader) that has $2$ DoF, and another agent ($2^\text{nd}$ leader) with $1$ DoF such that these $2$ agents are neighbours. For bearing rigid formations, we prefer the term $2$-leader formation because the agent that has $1$ DoF in a bearing rigid formation has the control of scaling on the entire formation, which makes it act like a leader rather than a follower. Moreover, by changing its bearing to the $1^\text{st}$ leader, the $2^\text{nd}$ leader can change the orientation of the entire formation.
- **leader-remote follower structure**, in which the agent with $1$ DoF is not a neighbour of the agent with $2$ DoF.
- **three-coleaders structure**. This is a formation structure in which there are three agents $a_1, a_2, a_3$ (called the coleaders) with $1$ DoF each. Three-coleader structure can further be classified within itself depending on the neighbourhood relations of coleaders.

In this article, the formations we study are of a two-leader variety.

### Scalable bearing rigid formations
We need to address one more issue on bearing rigidity before we proceed any further. Bearing rigidity, as it is defined above, is based on $2n - 3$ links, all of which are used for **bearing constraints**. An advantage of bearing rigid formations used in shape control is its **uniform scalability (homothety) property**, since every constraint is essentially based on an **angle measurement**.

However, unless there is a proper action, note that all bearing constraints will still be satisfied if a formation expands or contracts. In other words, we have **no control over the scale** of a formation in a bearing rigid formation. We need **at least one distance measurement** to be able to fix the scale of a formation, which results in ‘scalable bearing rigid formations’.

A **scalable bearing rigid formation** is obtained from a bearing rigid formation of $2n - 3$ bearing constraints by inserting **one additional distance constraint**, i.e. $2n - 2$ links in total. This additional distance constraint is imposed on **the $2^\text{nd}$ leader with a new incoming link from the $1^\text{st}$ leader as a distance constraint**. Therefore, in a scalable bearing rigid formation, the $2^\text{nd}$ leader has $2$ incoming links, and therefore, zero DoF when we fix the distance and bearing constraints imposed upon it. This is in contrast with a **bearing rigid formation**, where the $2^\text{nd}$ leader has **only one** incoming link. When we use such a single distance constraint between the $1^\text{st}$ leader and the $2^\text{nd}$ leader for shape control, all we need to do for scaling shape is to **adjust this distance constraint**.

In summary, the $1^\text{st}$ leader determines the **translational motion** of a formation. It has $2$ DoF. **Scaling** of the entire formation is managed by the $2^\text{nd}$ leader by adjusting its distance constraint. The rotation of the formation is achieved either by changing the heading of the $1^\text{st}$ leader or by changing the bearing of the $2^\text{nd}$ leader.

### Directed Rigidity
#### Acyclic formations
First, we give some terminology.

- A **directed edge** is written with an ordered pair of end-vertices $(i, j)$ representing an edge directed from $j$ to $i$ and drawn with an arrow from $j$ to $i$, that is from the source to the sink.
- The number of edges directed into a given vertex i in a digraph $\mathcal{G}$ is called the **in-degree** of the vertex and is denoted by $d^-_\mathcal{G}(i)$. The number of edges directed out from a given vertex $i$ in a digraph $\mathcal{G}$ is called the **out-degree** of the vertex and is denoted  by $d^+_\mathcal{G}(i)$.
- The **out-neighborhood** $\mathcal{N}^+_\mathcal{G}(i)$ of a vertex $i$ is $\{j \in \mathcal{V} : (j, i) \in \mathcal{E}\}$ , and the in-neighborhood  $\mathcal{N}^-_\mathcal{G}(i)$ of a vertex $i$ is $\{j \in \mathcal{V} : (i, j) \in \mathcal{E}\}$. The union of out-neighborhood and in-neighborhood is the set of **neighbors** of $i$, i.e., the (open) neighborhood of $i$, $\mathcal{N}_\mathcal{G}(i)$. When $i$ is also included, it is the **closed neighborhood** of $i, \mathcal{N}_\mathcal{G}[i]$.

::: warning Definition: directed path
A **directed path** is a non-empty **digraph** $\mathcal{G} = (\mathcal{V},\mathcal{E})$ of the form $\mathcal{V}=\{x_0, x_1, \cdots, x_k\}, \mathcal{E}=\{(x_0, x_1), (x_1, x_2), \cdots, (x_{k-1}, x_k)\}$. We refer to a **path** by the sequence of its vertices as $P = x_0 x_1\cdots x_k$ and calling $P$ a path from $x_0$ to $x_k$. In a **simple path**, all the $x_i$ are distinct. In a **closed path**, $x_0=x_k$.
:::

::: warning Definition: cycle
A **closed directed path**, with no repeated vertices other than the starting and ending vertices is called a **(directed) cycle** and is denoted by $C$.
:::

::: warning Definition: cycle graph & cyclic graph & acyclic graph
- A **cycle graph** is a graph on $n$ vertices containing **a single cycle through all vertices**.
- A **cyclic graph** is a graph containing **at least one cycle**.
- A graph that is **not cyclic** is said to be **acyclic**.
:::

Care should be taken with **cyclic formations**, which can lead to **unstable behaviours** in the presence of **measurement errors** if the agents are **not** allowed to **communicate**. Further, we show that **bearing rigid formations** with **coleader structure** and **leader-remote follower structure** occur **only** in **cyclic formations**. Therefore, we avoid such structures in shape control.

Another disadvantage of **coleader formations** in bearing rigid formations is that they not only require a **coordinated motion** of three coleaders, but also require a **consensus** on the heading of all three coleaders. We have the following two theorems.

::: danger Theorem 1
For a digraph $\mathcal{G}=(\mathcal{V}, \mathcal{E})$, with at least $2$ vertices, the following are **equivalent**:
1. $\mathcal{G}=(\mathcal{V}, \mathcal{E})$ is **minimally bearing rigid** and **acyclic**;
2. $\mathcal{G}=(\mathcal{V}, \mathcal{E})$ is constructed from a **single edge** by a sequence of **directed vertex additions**
3. $\mathcal{G}=(\mathcal{V}, \mathcal{E})$ has **two-leader** architecture, and is **acyclic** with all other vertices having in-degree exactly $2$.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

1. $1\to 2$: Minimally directed bearing rigid digraphs are constraint consistent and they have $|\mathcal{E}| = 2|\mathcal{V}|-3$. We are given that there are **no cycles** in the digraph. Therefore, the digraph represents a **partial order** between vertices. The partial order can be made into a complete order. The smallest element in the order is the $1^\text{st}$ leader, and the next smallest is the $2^\text{nd}$ leader, and this will be our target edge for the directed Henneberg sequence. Assume that there are more than $3$ vertices. The maximal element has all edges in so it has in-degree $d_{\mathcal{G}}^-(i)\leqslant 2$. Overall, since each edge is directed: $\sum\limits_{i\in\mathcal{V}}d_{\mathcal{G}}^-(i)=|\mathcal{E}| = 2|\mathcal{V}|-3$. However, the two initial vertices have a total in-degree of $1$, so on **all other vertices** $\mathcal{V}': \sum\limits_{i\in\mathcal{V}'}d_{\mathcal{G}}^-(i)=|\mathcal{E}| = 2|\mathcal{V}'|=2(|\mathcal{V}|-2)$. We also know that **all vertices** have $d_{\mathcal{G}}^-(i)\leqslant 2$, so we conclude that **all other vertices** have $d_{\mathcal{G}}^-(i)= 2$. Take the maximal vertex in the **linear order**. All edges are in-directed, so the overall valence is $2$. We can apply **$2$-valent vertex deletion** to get a smaller directed bearing rigid acyclic graph, with the induced linear order. We continue with this until there are only the $1^\text{st}$ leader and the $2^\text{nd}$ leader. Reversing this sequence gives the desired construction.
2. $2$ is **equivalent** to $3$: This is immediate, as the **initial edge** is the first leader-second leader edge, and the valence assumption is equivalent to the count of $2$. <div style="text-align: right;">$\square$</div>
</details>

::: danger Theorem 2
**Minimal bearing rigid** formations with **coleader structure** or **leader-remote follower structure** occur only in **cyclic** formations.
:::

**Proof**:
Suppose that coleader structures and leader-remote follower structures occur in **acyclic** formations too. Acyclic formations can be built by using only $2$-valent vertex addition and creates topological order of vertices from Theorem 1. Apply $2$-valent vertex deletion to the formation in reverse order until we are left with a single edge. There is $1$ vertex of in-degree $0$ (having $2$ DoF left) and $1$ vertex of in-degree $1$ (having 1 DoF left). Thus, these two agents manage all the DoF that the formation has, which is $3$, leaving no DoF to the rest of the agents. Thus, all the remaining vertices have an in-degree $2$, which means that the acyclic formation has **two-leader architecture**. This contradicts with our initial assumption. Thus, coleader structures or leader-remote follower structures occur only in cyclic formations. <div style="text-align: right;">$\square$</div>

In short, formation control using bearing measurements is straightforward if the underlying directed graph is **acyclic**, since it is based on a **partial ordering** of agents due to an absence of cycles. **Acyclic bearing rigid formations** can be constructed using **a sequence of directed vertex additions**, and they have **two-leader** architecture. Therefore, we will base the rest of this article on acyclic bearing rigid formations. In particular, we will make use of scalable bearing rigid formations. Construction of such formations starts with a double edge between the $1^\text{st}$ leader and the $2^\text{nd}$ leader (one distance constraint-one bearing constraint), then continues with directed $2$-valent vertex additions with bearing constraints.

#### $2$-directed digraphs
Any ordinary node in a network with directed bearing links needs to have **at least $2$** in-coming links to localize itself, that is, $d^-_{\mathcal{G}}(i)\geqslant 2$. Of course, **anchor nodes** do not need any in-coming links to localize themselves.

However, we insert the **implicit links** among anchor nodes to obtain the **grounded graph**. Furthermore, the existence of one anchor node rules out **translation**. If there is **only one** anchor node, then **scaling** is still allowed. This means that $1$ ordinary node can have $1$ DoF. We call such a node a **free node**. Anchor node and free node together make up the set of **guide nodes**. The digraph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ is $2$-directed if for all $i \in \mathcal{V}, d^-_\mathcal{G}(i)\leqslant 2$.

A point formation with directed bearing constraints is called **directed parallel rigid** if all directed parallel point formations are **trivially parallel**. There are a number of issues that must be addressed in the localization of networks with directed links. We identify three key layers as follows:
1. Parallel rigidity of the underlying undirected formation;
2. Directed parallel rigidity of the formation;
3. Convergence and the quality of initial position estimates in the network

**If underlying undirected formation is non-rigid, then directed formation cannot be rigid**. Thus, undirected rigidity is a **necessary condition** for directed rigidity. On the other hand, when we associate a direction to each link in a rigid undirected formation, directed parallel rigidity is **not necessarily guaranteed**, because an in-degree of a node may be set to $1$ while another node has an in-degree of $3$ resulting from a poor selection of directions. Consequently, undirected parallel rigidity is **not a sufficient condition** for directed parallel rigidity. Even if there is subset of the grounded graph that is $2$-directed, the undirected graph **may still be flexible**. Thus, we can state the conditions for **global rigidity** for a directed graph as follows:

::: Theorem 4
Given a **grounded digraph** $\hat{\mathcal{G}} = (\mathcal{V}, \hat{\mathcal{B}})$ of the network $N$, there is a subset $\mathcal{B}'\subseteq\mathcal{B}$ satisfying the following conditions:
1. $|\mathcal{B}'| = 2|\mathcal{V}|-3$;
2. For all $\mathcal{B}''\subseteq\mathcal{B}', \mathcal{B}''\neq\phi, |\mathcal{B}''|\leqslant 2|\mathcal{V}(\mathcal{B}'')|-3$, where $\mathcal{V}(\mathcal{B}'')$ is the number of vertices that are end-vertices of the edges in $\mathcal{B}''$;
3. $\mathcal{G}'(\mathcal{V}, \mathcal{B}')$ is $2$-directed.
:::

## Bearing Rigidity in Arbitary Dimensions
### Conceptions
Define:
$$
e_{ij}\triangleq p_j-p_i, \quad g_{ij}\triangleq \frac{e_{ij}}{\|e_{ij}\|} = \frac{p_j-p_i}{\|p_j-p_i\|}, \quad \forall (i,j)\in\mathcal{E}.
$$

Note the unit vector $g_{ij}$ represents the **relative bearing** of $p_j$ to $p_i$. This unit-vector representation is different from the conventional ways where a bearing is described as one angle (azimuth) in $\mathbb{R}^2$, or two angles (azimuth and altitude) in $\mathbb{R}^3$. Note also that $e_{ij} = −e_{ji}$ and $g_{ij} = −g_{ji}$.

We now introduce an important **orthogonal projection operator** that will be widely used in this paper. For any nonzero vector $\boldsymbol{x}\in\mathbb{R}^d (d\geqslant 2)$, define the operator $P:\mathbb{R}^d\longmapsto\mathbb{R}^{d\times d}$ as
$$
P(\boldsymbol{x})\triangleq I_d - \frac{\boldsymbol{x}}{\|\boldsymbol{x}\|}\frac{\boldsymbol{x}^\top}{\|\boldsymbol{x}\|}
$$

For notational simplicity, denote $P_x = P(\boldsymbol{x})$. Note:
- $P_x$ is an **orthogonal projection matrix** which geometrically projects any vector onto the orthogonal compliment of $\boldsymbol{x}$
- It can be verified that $P_x^\top = P_x, P_x^2 = P_x$, and $P_x$ is **positive semi-definite**.
- $\operatorname{Null}(P_x) = \operatorname{span}\{\boldsymbol{x}\}$ and the **eigenvalues** of $P_x$ are $\{0, 1^{(d−1)}\}$.

::: tip Lemma 1: parallel in $d$-dimensions
Two nonzero vectors $\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^d$ are **parallel** if and only if $P_x\boldsymbol{y} = 0$ (or equivalently $P_y\boldsymbol{x} = 0$).
:::

**Proof**: The result follows from $\operatorname{Null}(P_x) = \operatorname{span}\{\boldsymbol{x}\}$. <div style="text-align: right;">$\square$</div>

> Most existing works, like the last section, use the notion of **normal vectors** to describe parallel vectors in $\mathbb{R}^2$. Specifically, given a nonzero vector $\boldsymbol{x} \in \mathbb{R}^2$, denote $\boldsymbol{x}^\perp \in \mathbb{R}^2$ as a **nonzero normal vector** satisfying $\boldsymbol{x}^\top\boldsymbol{x}^\perp = 0$. Then any vector $\boldsymbol{y} \in \mathbb{R}^2$ is parallel to $\boldsymbol{x}$ if and only if $(\boldsymbol{x}^\perp)^\top\boldsymbol{y}= 0$. This approach is applicable to 2D cases but difficult to extend to arbitrary dimensions. Moreover, it is straightforward to prove that in $\mathbb{R}^2$ the use of the orthogonal projection operator is **equivalent** to the use of normal vectors based on the fact that
> $$
P_x = \frac{\boldsymbol{x}^\perp(\boldsymbol{x}^\perp)^\top}{\|\boldsymbol{x}^\perp\|^2}, \quad \forall \boldsymbol{x}\in\mathbb{R}^2.
> $$

### Fundamental Concepts about Bearing Rigidity
Now ready to define the fundamental concepts in bearing rigidity. These concepts are defined analogously to those in the distance rigidity theory.

::: warning Definition: Bearing Equivalency
Frameworks $\mathcal{G}(\boldsymbol{p})$ and $\mathcal{G}(\boldsymbol{p}')$ are **bearing equivalent** if $P_{(p_i−p_j)}(p'_i − p'_j) = 0$ for all $(i, j) \in \mathcal{E}$.
:::

::: warning Definition: Bearing Congruency
Frameworks $\mathcal{G}(\boldsymbol{p})$ and $\mathcal{G}(\boldsymbol{p}')$ are **bearing congruency** if $P_{(p_i−p_j)}(p'_i − p'_j) = 0$ for all $i, j \in \mathcal{V}$.
:::

By definition, **bearing congruency implies bearing equivalency**. The converse, however, is not true, as illustrated in Figure 3.

<figure>
   <img src="/frontiers_rigidity_2_3_bearing.jpg" alt="Bearing equivalent but not bearing congruent" width="100%" align="center">
   <figcaption> Figure 3: Bearing equivalent but not bearing congruent</figcaption>
</figure>

::: warning Definition: Global Bearing Rigidity
A framework $\mathcal{G}(\boldsymbol{p})$ is **globally bearing rigid** if an **arbitrary** framework that is **bearing equivalent** to $\mathcal{G}(\boldsymbol{p})$ is also **bearing congruent** to $\mathcal{G}(\boldsymbol{p})$.
:::

By definition, global bearing rigidity implies bearing rigidity. As will be shown later, the converse is also true.

We next define **infinitesimal bearing rigidity**, which is one of the most important concepts in the bearing rigidity theory. Consider an arbitrary orientation of the graph $\mathcal{G}$ and denote
$$
e_{k}\triangleq p_j-p_i, \quad g_{k}\triangleq \frac{e_{k}}{\|e_{k}\|} = \frac{p_j-p_i}{\|p_j-p_i\|}, \quad \forall k\in\{1,2,\cdots,m\}.
$$

as the edge vector and the bearing for the $k$-th directed edge. Denote $\boldsymbol{e} = [e_1^\top,\cdots , e_m^\top]^\top$ and $\boldsymbol{g} = [g_1^\top, \cdots, g_m^\top]^\top$. Note $\boldsymbol{e}$ satisfies $\boldsymbol{e}=\bar{H}\boldsymbol{p}$ where $\bar{H}=H\otimes I_d$. Define the **bearing rigidity function** $B_\mathcal{G}(\boldsymbol{p}): \mathbb{R}^{dn} \longmapsto \mathbb{R}^{dm}$ as
$$
B_\mathcal{G}(\boldsymbol{p})\triangleq [g_1^\top, \cdots, g_m^\top]^\top \in\mathbb{R}^{dm}.
$$

The bearing function describes all the bearings in the framework. The **bearing rigidity matrix** is defined as the **Jacobian** of the bearing rigidity function
$$
R_\mathcal{B}(\boldsymbol{p})\triangleq \frac{\partial B_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}}\in\mathbb{R}^{dm\times dn}.  \tag{2}
$$

Let $\delta\boldsymbol{p}$ be a variation of the configuration $\boldsymbol{p}$. If $R(p)\delta\boldsymbol{p} = \mathbf{0}$, then $\delta\boldsymbol{p}$ is called an **infinitesimal bearing motion** of $\mathcal{G}(\boldsymbol{p})$. This is analogous to infinitesimal motions in distance-based rigidity.

**Distance** preserving motions of a framework include rigid-body **translations and rotations**, whereas **bearing** preserving motions of a framework include **translations and scalings**.

An infinitesimal bearing motion is called **trivial** if it corresponds to a translation and a scaling of the entire framework.

::: warning Definition: Infinitesimal Bearing Rigidity
A framework is **infinitesimally bearing rigid** if all the infinitesimal bearing motions are **trivial**.
:::

Up to this point, we have introduced all the fundamental concepts in the bearing rigidity theory. We next explore the properties of these concepts. We first derive a useful expression for the bearing rigidity matrix.

### Relationship among 3 types of bearing rigidity
::: tip Lemma 2
The **bearing rigidity matrix** $R_\mathcal{B}(\boldsymbol{p})$ in $(2)$ can be expressed as
$$
R_\mathcal{B}(\boldsymbol{p}) = \operatorname{diag}\left(\frac{P_{g_{k}}}{\|e_k\|}\right)\bar{H}. \tag{3}
$$
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

It follows from $g_{k}= e_{k}/\|e_{k}\| \, \forall k\in\{1,2,\cdots,m\}$ that:
$$
\frac{\partial g_k}{\partial e_k} = \frac{1}{\|e_k\|}(I_d - \frac{e_k}{\|e_k\|}\frac{e_k^\top}{\|e_k\|}) = \frac{1}{\|e_k\|}P_{g_k}.
$$

As a result, $\partial B_\mathcal{G}(\boldsymbol{p})/\partial \boldsymbol{e} = \operatorname{diag}(P_{g_k}/\|e_k\|)$ and consequently
$$
R_\mathcal{B}(\boldsymbol{p}) = \frac{\partial B_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{e}}\frac{\partial \boldsymbol{e}}{\partial \boldsymbol{p}} = \operatorname{diag}\left(\frac{P_{g_{k}}}{\|e_k\|}\right)\bar{H}.
$$

Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

The expression $(3)$ can be used to characterize the **null space** and the **rank** of the **bearing rigidity matrix**.

::: tip Lemma 3
A framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d$ **always** satisfies:
- $\operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\} \subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$
- $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) \leqslant dn − d − 1$.

:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

1. It's clear that $\operatorname{span}\{\mathbf{1} \otimes I_d\} \subseteq \operatorname{Null}(\bar{H}) \subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$
2. Since $P_{e_k}e_k=0$, we have $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}=\operatorname{diag}\left(\frac{P_{g_{k}}}{\|e_k\|}\right)\bar{H}\boldsymbol{p} = \operatorname{diag}\left(\frac{P_{g_{k}}}{\|e_k\|}\right)\boldsymbol{e} = 0$ and hence $\boldsymbol{p}\subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$.
3. The inequality $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) \leqslant dn − d − 1$ follows immediately from $\operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\} \subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$. <div style="text-align: right;">$\square$</div>
</details>

For any undirected graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$, denote $\mathcal{G}^\mathcal{K}$ as the **complete graph** over the **same vertex** set $\mathcal{V}$, and $R^\mathcal{K}(\boldsymbol{p})$ as the bearing rigidity matrix of the framework $\mathcal{G}^\mathcal{K}(\boldsymbol{p})$. The next result gives the **necessary and sufficient conditions** for **bearing equivalency** and **bearing congruency**.

::: danger Theorem 5: bearing equivalent & bearing congruent
Two frameworks $\mathcal{G}(\boldsymbol{p})$ and $\mathcal{G}(\boldsymbol{p}')$ are:
- **bearing equivalent** if and only if $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$,
- **bearing congruent** if and only if $R^\mathcal{K}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$.

:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

Since $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \operatorname{diag}\left(\frac{P_{g_{k}}}{\|e_k\|}\right)\bar{H}\boldsymbol{p}' = \operatorname{diag}\left(\frac{P_{g_{k}}}{\|e_k\|}\right)\operatorname{diag}(P_{g_k})\boldsymbol{e}'$, we have
$$
R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0} \Leftrightarrow P_{g_k}e_k' = 0, \quad \forall k\in\{1,\cdots,m\}.
$$

Therefore, by Definition of bearing equivalent, the two frameworks are bearing equivalent if and only if $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$. By Definition of bearing equivalent, it can be analogously shown that frameworks are bearing equivalent if and only if $R^\mathcal{K}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$. <div style="text-align: right;">$\square$</div>
</details>

Since any **infinitesimal motion** $\delta\boldsymbol{p}$ is in $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$, it is implied from Lemma 3 and Theorem 5 that $R_\mathcal{B}(\boldsymbol{p})(\boldsymbol{p} + \delta\boldsymbol{p}) = \mathbf{0}$ and hence $\mathcal{G}(\boldsymbol{p} + \delta\boldsymbol{p})$ is **bearing equivalent** to $\mathcal{G}(\boldsymbol{p})$.

We next give a useful lemma and then prove the **necessary and sufficient condition** for **global bearing rigidity**.

::: tip Lemma 4
A framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d$ **always** satisfies:
- $\operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\} \subseteq \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))\subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$
- $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) \leqslant \operatorname{rank}(R^\mathcal{K}(\boldsymbol{p})) \leqslant dn − d − 1$.

:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

1. The result that $\operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\} \subseteq \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$ and $\operatorname{rank}(R^\mathcal{K}(\boldsymbol{p})) \leqslant dn − d − 1$ can be proved similarly as Lemma 3.
2. For any $\delta\boldsymbol{p}\in\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$, we have $R^\mathcal{K}(\boldsymbol{p})\delta\boldsymbol{p}=\mathbf{0}\Rightarrow R^\mathcal{K}(\boldsymbol{p})(\boldsymbol{p} + \delta\boldsymbol{p})=\mathbf{0}$. As a result, $\mathcal{G}(\boldsymbol{p}+\delta\boldsymbol{p})$ is **bearing congruent** to $\mathcal{G}(\boldsymbol{p})$ by Theorem 5. Since bearing congruency implies bearing equivalency, we further know $R_\mathcal{B}(\boldsymbol{p})(\boldsymbol{p} + \delta\boldsymbol{p})=\mathbf{0}$ and hence $R_\mathcal{B}(\boldsymbol{p})\delta\boldsymbol{p}=\mathbf{0}$. Therefore, any $\delta\boldsymbol{p}$ in $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$ is also in $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$.
3. Since $R_\mathcal{B}(\boldsymbol{p}),R^\mathcal{K}(\boldsymbol{p})$ have the same column number, it follows immediately that $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) \leqslant \operatorname{rank}(R^\mathcal{K}(\boldsymbol{p}))$. <div style="text-align: right;">$\square$</div>
</details>

::: danger Theorem 6: Condition for Global Bearing Rigidity
A framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d$ is **globally bearing rigid** if and only if $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p})) = \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$ or equivalently $\operatorname{rank}(R^\mathcal{K}(\boldsymbol{p})) = \operatorname{rank}(R_\mathcal{B}(\boldsymbol{p}))$.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

1. (**Necessity**) Suppose the framework $\mathcal{G}(\boldsymbol{p})$ is **globally bearing rigid**. We next show that $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) \subseteq \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$. For any $\delta\boldsymbol{p} \in \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$, we have $R_\mathcal{B}(\boldsymbol{p})\delta\boldsymbol{p} = \mathbf{0} \Rightarrow R_\mathcal{B}(\boldsymbol{p})(\boldsymbol{p} + \delta\boldsymbol{p}) = \mathbf{0}$. As a result, $\mathcal{G}(\boldsymbol{p}+\delta\boldsymbol{p})$ is bearing equivalent to $\mathcal{G}(\boldsymbol{p})$ according to Theorem 5. Since $\mathcal{G}(\boldsymbol{p})$ is globally bearing rigid, it follows that $\mathcal{G}(\boldsymbol{p}+\delta\boldsymbol{p})$ is **also** bearing congruent to $\mathcal{G}(\boldsymbol{p})$, which means $R^\mathcal{K}(p)(p + \delta\boldsymbol{p}) = \mathbf{0} \Rightarrow R^\mathcal{K}(p)\delta\boldsymbol{p} = \mathbf{0}$. Therefore, any $\delta\boldsymbol{p}$ in $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$ is in $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$ and thus $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) \subseteq \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$. Since $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p})) \subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$ as shown in Lemma 4, we have $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$.
2. (Sufficiency) Suppose $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$. Any framework $\mathcal{G}(\boldsymbol{p}')$ that is **bearing equivalent** to $\mathcal{G}(\boldsymbol{p})$ satisfies $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$. It then follows from $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$ that $R^\mathcal{K}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$, which means $\mathcal{G}(\boldsymbol{p}')$ is **also bearing congruent** to $\mathcal{G}(\boldsymbol{p})$. As a result, $\mathcal{G}(\boldsymbol{p})$ is globally bearing rigid.
3. Because $R_\mathcal{B}(\boldsymbol{p})$ and $R^\mathcal{K}(\boldsymbol{p})$ have the same column number, it follows immediately that $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p})) = \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$ if and only if $\operatorname{rank}(R^\mathcal{K}(\boldsymbol{p})) = \operatorname{rank}(R_\mathcal{B}(\boldsymbol{p}))$. <div style="text-align: right;">$\square$</div>
</details>

The following result shows that **bearing rigidity** and **global bearing rigidity** are **equivalent notions**.

::: danger Theorem 7: Condition for Bearing Rigidity
A framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d$ is **bearing rigid** if and only if it is **globally bearing rigid**.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

By definition, global bearing rigidity implies bearing rigidity. We next prove the converse is also true. Suppose the framework $\mathcal{G}(\boldsymbol{p})$ is bearing rigid. By the definition of bearing rigidity and Theorem 5, any framework satisfying $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$ and $\|\boldsymbol{p}' − \boldsymbol{p}\| \leqslant\varepsilon$ also satisfies $R^\mathcal{K}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$, i.e.,
$$
R_\mathcal{B}(\boldsymbol{p})(\boldsymbol{p}+\delta\boldsymbol{p}) = \mathbf{0}\Rightarrow R^\mathcal{K}(\boldsymbol{p})(\boldsymbol{p}+\delta\boldsymbol{p}) = \mathbf{0}, \quad \forall \delta\boldsymbol{p},\|\delta\boldsymbol{p}\|\leqslant\varepsilon.
$$

where $\delta\boldsymbol{p} = \boldsymbol{p}' - \boldsymbol{p}$. It then follows from $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p} = \mathbf{0}$ and $R^\mathcal{K}(\boldsymbol{p})\boldsymbol{p} = \mathbf{0}$ that $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p} = \mathbf{0}\Rightarrow R^\mathcal{K}(\boldsymbol{p})\boldsymbol{p} = \mathbf{0}$ for all $\|\delta\boldsymbol{p}\|\leqslant\varepsilon$. This means $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))\subseteq\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$ in spite of the constraint of $\|\delta\boldsymbol{p}\|$. Since $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))\subseteq\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$ as shown in Lemma 4, we further have $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))=\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p}))$ and consequently $\mathcal{G}(\boldsymbol{p})$ is globally bearing rigidity. <div style="text-align: right;">$\square$</div>
</details>

We next give the necessary and sufficient condition for **infinitesimal bearing rigidity**.

::: danger Theorem 8: Condition for Infinitesimal Bearing Rigidity
For a framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d$, the following statements are equivalent:
- $\mathcal{G}(\boldsymbol{p})$ is **infinitesimally bearing rigid**;
- $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = dn − d − 1$;
- $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\} = \operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p} −  \mathbf{1} \otimes \bar{\boldsymbol{p}}\}$, where $\bar{\boldsymbol{p}}= (\mathbf{1} \otimes I_d)^\top \boldsymbol{p}/n$ is the centroid of $\{p_i\}_{i\in\mathcal{V}}$ .

:::

**Proof**: 
<details>
    <summary> Details of Proof </summary>

1. Lemma 3 shows $\operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\}\subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$. Observe $\mathbf{1} \otimes I_d$ and $\boldsymbol{p}$ correspond to a rigid-body **translation** and a **scaling** of the framework, respectively. The stated condition directly follows from Definition of infinitesimally bearing rigid.
2. Note also that $\{\mathbf{1} \otimes I_d, \boldsymbol{p} −  \mathbf{1} \otimes \bar{\boldsymbol{p}}\}$ is an **orthogonal basis** for $\operatorname{span}\{\mathbf{1} \otimes I_d, \boldsymbol{p}\}$. <div style="text-align: right;">$\square$</div>
</details>

The special cases of $\mathbb{R}^2$ and $\mathbb{R}^3$ are of particular interest. A framework G(p) is infinitesimally bearing rigid in $\mathbb{R}^2$ if and only if $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = 2n − 3$, and in $\mathbb{R}^3$ if and only if $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = 3n−4$. Note Theorem 8 does not require $n \geqslant d$. 

The following result characterizes the relationship between infinitesimal bearing rigidity and global bearing rigidity.

::: danger Theorem 9
Infinitesimal bearing rigidity implies global bearing rigidity.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

Infinitesimal bearing rigidity implies $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{span}\{\mathbf{1} \otimes  I_d, \boldsymbol{p}\}$. Since $\operatorname{span}\{\mathbf{1} \otimes  I_d, \boldsymbol{p}\} \subseteq \operatorname{Null}(R^\mathcal{K}(p)) \subseteq \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$ as shown in Lemma 4, it immediately follows from $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{span}\{\mathbf{1}\otimes I_d, \boldsymbol{p}\}$ that $\operatorname{Null}(R^\mathcal{K}(\boldsymbol{p})) = \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$, which means $\mathcal{G}(\boldsymbol{p})$ is globally bearing rigid according to Theorem 6. <div style="text-align: right;">$\square$</div>
</details>

The **converse** of Theorem 9 is **not true**, i.e., global bearing rigidity does not imply infinitesimal bearing rigidity. For example, the collinear framework as shown in Figure 4(a) is globally bearing rigid but not infinitesimally bearing rigid.

We have at this point discussed three notions of bearing rigidity:
- bearing rigidity,
- global bearing rigidity,
- infinitesimal bearing rigidity

According to Theorem 7 and Theorem 9, the relationship between the three kinds of bearing rigidity can be summarized as below:
$$
\begin{matrix}
    &\text{infinitesimal bearing rigidity}& \\
    \swarrow & & \searrow \\
    \text{bearing rigidity} & \longleftrightarrow &
\text{global bearing rigidity}
\end{matrix}
$$

We next explore two important properties of infinitesimal bearing rigidity.

### More about infinitesimal bearing rigidity

The following theorem shows that infinitesimal bearing rigidity can uniquely determine the shape of a framework.

::: danger Theorem 10: Unique Shape
An infinitesimally bearing rigid framework can be **uniquely** determined up to a **translational** and a **scaling** factor.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

Suppose $\mathcal{G}(\boldsymbol{p})$ is an infinitesimally bearing rigid framework in $\mathbb{R}^d$. Consider an arbitrary framework $\mathcal{G}(\boldsymbol{p}')$ that is **bearing equivalent** to $\mathcal{G}(\boldsymbol{p})$. Our aim is to prove $\mathcal{G}(\boldsymbol{p}')$ is different from $\mathcal{G}(\boldsymbol{p})$ only in a translation and a scaling factor. The configuration $\boldsymbol{p}'$ can always be decomposed as
$$
\boldsymbol{p}' = c\boldsymbol{p} + \mathbf{1}\otimes\eta + \boldsymbol{q} \tag{4}
$$

where $c\in\mathbb{R}\backslash\{0\}$ is the **scaling** factor, $\eta \in\mathbb{R}^d$ denotes a rigidbody **translation** of the framework, and $\boldsymbol{q} \in\mathbb{R}^{dn}$, which satisfies $\boldsymbol{q} \perp \operatorname{span}\{\mathbf{1} \otimes  I_d, \boldsymbol{p}\}$, represents a transformation other than translation and scaling. We only need to prove $\boldsymbol{q} = \mathbf{0}$. Since infinitesimal bearing rigidity implies that $\operatorname{Null}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{span}\{\mathbf{1} \otimes  I_d, \boldsymbol{p}\}$, multiplying $R_\mathcal{B}(\boldsymbol{p})$ on both sides of $(4)$ yields
$$
R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = R_\mathcal{B}(\boldsymbol{p})\boldsymbol{q}.
$$

Since $\mathcal{G}(\boldsymbol{p}')$ is bearing equivalent to $\mathcal{G}(\boldsymbol{p})$, we have $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{p}' = \mathbf{0}$ by Theorem 5. Therefore, the formula above implies $R_\mathcal{B}(\boldsymbol{p})\boldsymbol{q}=\mathbf{0}$. Since $\boldsymbol{q} \perp \operatorname{span}\{\mathbf{1} \otimes  I_d, \boldsymbol{p}\} = \operatorname{Null}(R_\mathcal{B}(\boldsymbol{p}))$, the above equation suggests $\boldsymbol{q} = \mathbf{0}$. As a result, $\boldsymbol{p}'$ is different from $\boldsymbol{p}$ only in a scaling factor $c$ and a rigid-body translation $\eta$. <div style="text-align: right;">$\square$</div>
</details>

The following theorem shows that if a framework is infinitesimally bearing rigid in a **lower** dimension, it is still infinitesimally bearing rigid when evaluated in a higher dimensional space.

::: danger Theorem 11: Invariance to Dimension
Infinitesimal bearing rigidity is **invariant** to space dimensions.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

Consider a framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^d (n \geqslant 2, d \geqslant 2)$. Suppose the framework becomes $\mathcal{G}(\tilde{\boldsymbol{p}})$ when the dimension is  lifted from $d$ to $\tilde{d} (\tilde{d} > d)$. Our goal is to prove that
$$
\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = dn-d-1 \Leftrightarrow \operatorname{rank}(R(\tilde{\boldsymbol{p}})) = \tilde{d}n-\tilde{d}-1
$$

and consequently $\mathcal{G}(\tilde{\boldsymbol{p}})$ is infinitesimally bearing rigid in $\mathbb{R}^{\tilde{d}}$ if and only if $\mathcal{G}(\boldsymbol{p})$ is infinitesimally bearing rigid in $\mathbb{R}^d$.

1. Consider an oriented graph and write the bearings of $\mathcal{G}(\boldsymbol{p})$ and $\mathcal{G}(\tilde{\boldsymbol{p}})$ as $\{g_k\}_{k=1}^m$ and $\{\tilde{g}_k\}_{k=1}^m$, respectively. Since $\tilde{p}_i$ is obtained from $p_i$ by **lifting** the dimension, without loss of generality, assume $\tilde{p}_i = [p_i^\top, 0]^\top\,(\forall i\in\mathcal{V})$ where the zero  vector is $(\tilde{d}-d)$-dimensional. Then
$$
\tilde{g}_k = 
\begin{bmatrix}
    g_k \\0
\end{bmatrix}, \quad P_{\tilde{g}_k} = 
\begin{bmatrix}
    P_{g_k} & 0\\
    0 & I_{\tilde{d}-d}
\end{bmatrix}, \quad \forall k=\{1,\cdots,m\}.
$$

2. The bearing rigidity matrix of $\mathcal{G}(\tilde{\boldsymbol{p}})$ is $R(\tilde{\boldsymbol{p}})=\operatorname{diag}(I_{\tilde{d}}/\|e_k\|)\operatorname{diag}(P_{\tilde{g}_k})(H\otimes I_{\tilde{d}})$ where
$$
\operatorname{diag}(P_{\tilde{g}_k})(H\otimes I_{\tilde{d}}) = \operatorname{diag}\left(
   \begin{bmatrix}
        P_{g_k} & 0\\
        0 & I_{\tilde{d}-d}
   \end{bmatrix}
\right)H\otimes
\begin{bmatrix}
    I_d & 0\\
    0 & I_{\tilde{d}-d}
\end{bmatrix}
$$

Permutate the rows of $\operatorname{diag}(P_{\tilde{g}_k})(H\otimes I_{\tilde{d}})$ to obtain
$$
A = 
\begin{bmatrix}
    \operatorname{diag}(P_{g_k})H\otimes [I_d\quad 0]\\
    I_{\tilde{d}-d}H\otimes [0\quad I_{\tilde{d}-d}]
\end{bmatrix}
\triangleq
\begin{bmatrix}
    A_1\\
    A_2
\end{bmatrix}
$$

Since the permutation of the rows does not change the matrix rank, we have $\operatorname{rank}(R(\tilde{\boldsymbol{p}})) = \operatorname{rank}(A)$. Because the rows of $A_1$ are **orthogonal** to the rows of $A_2$ (the identity matrix is divided), we have $\operatorname{rank}(A) = \operatorname{rank}(A_1) + \operatorname{rank}(A_2)$. As a result, considering:
$$
\begin{aligned}
    &\operatorname{rank}(A_1) = \operatorname{rank}(\operatorname{diag}(P_{g_k})H\otimes I_d) = \operatorname{rank}(R_\mathcal{B}(\boldsymbol{p}))\\
    &\operatorname{rank}(A_2) = \operatorname{rank}(H\otimes I_{\tilde{d}-d}) = (\tilde{d}-d)(n-1)\\
    \implies& \operatorname{rank}(R(\tilde{\boldsymbol{p}})) = \operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) + (\tilde{d}-d)(n-1).
\end{aligned}
$$

It can be easily verified using the above equation that $\operatorname{rank}(R(\tilde{\boldsymbol{p}})) = \tilde{d}n - \tilde{d}-1$ if and only if $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = dn - d-1$. <div style="text-align: right;">$\square$</div>
</details>

<figure>
   <img src="/frontiers_rigidity_2_4_not_inf.jpg" alt="not inf" id="fig-2-4-not-inf" width="100%" align="center">
   <figcaption> Figure 4: Examples of non-infinitesimally bearing rigid frameworks. The red arrows (solid) stand for non-trivial infinitesimal bearing motions and the blue arrows (dashed) for the associated orthogonal infinitesimal distance motions.</figcaption>
</figure>

Figure. 4 shows examples of non-infinitesimal bearing rigid frameworks. The frameworks in Figure. 4 are not infinitesimally bearing rigid because **there exist non-trivial infinitesimal bearing motions** (see, for example, the red arrows). Figure. 5 shows some two- and three-dimensional infinitesimally bearing rigid frameworks. It can be verified that each of the frameworks satisfies $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = dn − d − 1$.

<figure>
   <img src="/frontiers_rigidity_2_5_inf.jpg" alt="inf" id="fig-2-5-inf" width="100%" align="center">
   <figcaption> Figure 5: Examples of infinitesimally bearing rigid frameworks.</figcaption>
</figure>

### Connections to Distance Rigidity Theory
The bearing rigidity theory and the distance rigidity theory study **similar** problems of whether the shape of a framework can be uniquely determined by the inter-neighbor bearings and inter-neighbor distances, respectively. It is meaningful to study the connections between the two rigidity theories. The following theorem establishes the equivalence between infinitesimal bearing and distance rigidity in $\mathbb{R}^2$.

::: danger Theorem 12
In $\mathbb{R}^2$, a framework is infinitesimally bearing rigid if and only if it is infinitesimally distance rigid.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

To prove Theorem 12, we first prove the following result which indicates that the bearing rigidity matrix always has the **same rank** as the distance rigidity matrix for any framework in $\mathbb{R}^2$.

::: tip Proposition 2
For any framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^2$, $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{rank}(R_\mathcal{D}(\boldsymbol{p}))$
:::

**Proof**:
Consider an oriented graph and write the bearings of the framework as $\{g_k\}_{k=1}^m$. Let $Q_{\pi/2}$ be a $2\times 2$ rotation  matrix that rotates any vector $\pi/2$. Denote $g_k^\perp\triangleq Q_{\pi/2}g_k$. Then, $g_k^\perp\perp g_k$ and $\|g_k^\perp\| = \|g_k\| = 1$. Since $P_{g_k}=g_k^\perp(g_k^\perp)^\top$, the bearing rigidity matrix can be rewritten as
$$
R_\mathcal{B}(\boldsymbol{p}) = \operatorname{diag}\left(\frac{P_{g_k}}{\|e_k\|}\right)\bar{H} = \operatorname{diag}\left(\frac{g_k^\perp}{\|e_k\|}\right)\operatorname{diag}\left(\left(g_k^\perp\right)^\top\right)\bar{H}
$$

The matrix $\operatorname{diag}((g_k^\perp)^\top)\bar{H}$ can be further written as
$$\begin{aligned} \operatorname{diag}\left(\left(g_k^{\perp}\right)^{\top}\right) \bar{H} & =\operatorname{diag}\left(g_k^{\top} Q_{\pi / 2}^{\top}\right) \bar{H} \\ & =\operatorname{diag}\left(g_k^{\top}\right)\left(I_m \otimes Q_{\pi / 2}^{\top}\right)\left(H \otimes I_2\right) \\ & =\operatorname{diag}\left(g_k^{\top}\right)\left(H \otimes Q_{\pi / 2}^{\top}\right) \\ & =\operatorname{diag}\left(g_k^{\top}\right) \bar{H}\left(I_n \otimes Q_{\pi / 2}^{\top}\right) .\end{aligned}$$

Note the distance rigidity matrix can be expressed as $R_\mathcal{D}(\boldsymbol{p}) = \operatorname{diag}\left(e_k^\top\right)\bar{H}$ (this expression can be obtained by calculating the Jacobian of the distance function). Substituting $\operatorname{diag}\left(g_k^{\top}\right) \bar{H} = \operatorname{diag}(1/\|e_k\|)R_\mathcal{D}(\boldsymbol{p})$ yields
$$
R_\mathcal{B}(\boldsymbol{p}) = \operatorname{diag}\left(\frac{g_k^\perp}{\|e_k\|^2}\right)R_\mathcal{D}(\boldsymbol{p})\left(I_n \otimes Q_{\pi / 2}^{\top}\right). \tag{5}
$$

Since $\operatorname{diag}\left(g_k^\perp / \|e_k\|^2\right)$ has full column rank and and $I_n \otimes Q_{\pi / 2}^{\top}$ is invertible, we have $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{rank}(R_\mathcal{D}(\boldsymbol{p}))$. <div style="text-align: right;">$\square$</div>

Now it comes to proving Theorem 12: By Theorem 8, a framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^2$ is **infinitesimally bearing rigid** if and only if $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = 2n − 3$. It's known that a framework is **infinitesimally distance rigid** if and only if $\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})) = 2n − 3$. Since $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = \operatorname{rank}(R_\mathcal{D}(\boldsymbol{p}))$ as proved in Proposition 2, we know $\operatorname{rank}(R_\mathcal{B}(\boldsymbol{p})) = 2n − 3$ if and only if $\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p})) = 2n − 3$, which concludes the theorem. <div style="text-align: right;">$\square$</div>
</details>

Remarks:
1. Theorem 12 cannot be generalized to $\mathbb{R}^3$ or higher dimensions.
For example, the 3D cubic and hexagonal pyramid frameworks in Figure 5(c), (d) are infinitesimally bearing rigid but not distance rigid. In particular, the rank of the distance rigidity matrices of the two frameworks are $13$ and $12$, respectively, whereas the required ranks for infinitesimal distance rigidity are $18$ and $15$, respectively.
2. Theorem 12 suggests that we can determine the infinitesimal distance rigidity of a framework **by examining its infinitesimal bearing rigidity**. For example, it may be tricky to see the frameworks in [Figure 4](#fig-2-4-not-inf) (c), (d) are not infinitesimally distance rigid, but it is obvious to see the non-trivial infinitesimal bearing motions and conclude they are not infinitesimally bearing rigid.

An immediate corollary of Theorem 12 describes the relationship between **infinitesimal bearing motions** and **infinitesimal distance motions** of frameworks in $\mathbb{R}^2$. Let $Q_{\pi/2}\in\mathrm{SO}(2)$ be a rotation matrix that can rotate a vector in $\mathbb{R}^2$ by $\pi/2$. For any $\delta\boldsymbol{p}=[\delta p_1^\top, \cdots,\delta p_n^\top]^\top\in\mathbb{R}^{2n}$, denote $\delta\boldsymbol{p}^\perp=[(Q_{\pi/2}\delta p_1)^\top, \cdots,(Q_{\pi/2}\delta p_n)^\top]^\top\in\mathbb{R}^{2n}$

::: tip Corollary 12-1
The vector $\delta\boldsymbol{p}$ is an infinitesimal bearing motion of a framework $\mathcal{G}(\boldsymbol{p})$ in $\mathbb{R}^2$ if and only if $\delta\boldsymbol{p}^\perp$ is an infinitesimal distance motion of $\mathcal{G}(\boldsymbol{p})$.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

It immediately follows from $(5)$ that $R_\mathcal{B}(\boldsymbol{p})\delta\boldsymbol{p} = \mathbf{0}$ if and only if $R_\mathcal{D}(\boldsymbol{p})\delta\boldsymbol{p}^\perp = \mathbf{0}$. <div style="text-align: right;">$\square$</div>
</details>

Given a framework in $\mathbb{R}^2$, Corollary 12-1 suggests that **for any** infinitesimal bearing motion, **there exists** a perpendicular infinitesimal distance motion, and the converse is also true. Corollary 12-1 is illustrated by [Figure 4](#fig-2-4-not-inf) (indicated by the red (solid) and blue (dashed) arrows).

To end this section, we briefly compare the proposed bearing rigidity theory with the well-known distance rigidity theory. In the distance rigidity theory, there are three kinds of rigidity: 
(i) distance rigidity,
(ii) global distance rigidity,
(iii) infinitesimal distance rigidity. 

The relationship between them is (ii) ⇒ (i) and (iii)⇒(i). Note (ii) and (iii) do not imply each other. **The global distance rigidity can uniquely determine the shape of a framework**, but it is usually difficult to mathematically examine. Infinitesimal distance rigidity can be conveniently examined by a rank condition, but it is **not** able to ensure a unique shape.

As a comparison, the proposed infinitesimal bearing rigidity not only can be **examined by a rank condition** (Theorem 8) but also can ensure the **unique shape** of a framework (Theorem 10). In addition, the rank condition for infinitesimal distance rigidity requires to distinguish the cases of $n \geqslant d$ and $n < d$ (Lemma 14), while the rank condition for infinitesimal bearing rigidity does not. Finally, an infinitesimally distance rigid framework in a lower dimension may become non-rigid in a higher dimension (see, for example, [Figure 5](#fig-2-5-inf) (b)), while infinitesimal bearing rigidity is invariant to dimensions.

In summary, the bearing rigidity theory possesses a number of attractive features compared to the distance rigidity theory, and as we will show in the sequel, it is a powerful tool for analyzing bearing-based formation control problems.
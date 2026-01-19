# Angle
<!-- ## Introduction [1]
An angle constraint is defined on two maintenance links. We will denote an angle constraint by a pair $\{(i, j) , (j, k)\}$ where $j$ is the angle's vertex. We will denote the set of angles $\{ \{ ( i , j ) ,(j,k)\}: ( i , j ) ,( j ,k ) \in \mathcal{E} \}$ by $\mathcal{A}$. A formation with angle constraints can he represented by $( \mathcal{V} , \mathcal{A} , h )$ where $h : \mathcal{A} \longmapsto [0,2\pi)$  and $\mathcal{A} \subseteq \mathcal{E} \times \mathcal{E}$. Each angle is used to maintain the angle between two selected links fixed.

::: warning Definition: homothetic rigid (motion)
A **homothetic rigid motion** is a trajectoty along which point formations contained in this trajectory are **similar** to each other. Two point formations $\mathcal{F}_{\boldsymbol{p}}$, and $\mathcal{F}_{\boldsymbol{q}}$, are similar if they have the **same graph** and one can be obtained from the other by **congruence** and **scaling** transformations.

If homothetic rigid motions are the only possible trajectories then the formation is called **homothetic rigid**, otherwise **homothetic flexible**.
:::

In practice, one might measure the **angle** between two maintenance links. In the most general form, this problem becomes much more complex and there is no complete theory. In fact, **it is conjectured that there is no polynomial time algorithm to detect generically minimally rigid configurations of angles**. What can be said is that, in the same sense that directions and distances in the plane generate isomorphic theories, the first-order theory of angles between segments defined by pairs of points are isomorphic to the first-order theory of ratios of lengths between the same segments. Here, we give some initial results.

### A Matrix for First-order Angle Constraints
For an angle between two lines $p_1p_2$ and $p_3p_2$ meeting at the vertex $p_2$ , the cosine of the angle satisfies the equation: -->
## Introduction [1]
Unfortunately, similar to the displacement-based approach, a bearing-constrained formation requires either the **global coordinate system** for each agent or developing **observers** based on inter-agent communications. The authors in some research achieved bearing-based formation control in the absence of the global coordinate system, but each agent should have a controllable quantity determining the **relationship between the local body frame and the global coordinate frame**.

## 2D Angle Rigidity [1][3]
### Definition of angle rigidity in 2D
> We still use  $\boldsymbol{e}_{ij} = \boldsymbol{p}_i-\boldsymbol{p}_j, \boldsymbol{g}_{ij} = \frac{\boldsymbol{p}_i-\boldsymbol{p}_j}{\|\boldsymbol{p}_i-\boldsymbol{p}_j\|}$ from the Chapter: [Bearing Rigidity in arbitary dimension](./2bearing#bearing-rigidity-in-arbitary-dimensions-4) 

In this section, we develop an angle rigidity theory to investigate how to encode geometric shapes of graphs embedded in the **plane** through **angles only**.

For a framework $(\mathcal{G},\boldsymbol{p})$ in $\mathbb{R}^2$, we will employ $\boldsymbol{g}_{ij}^\top \boldsymbol{g}_{ik}$ as the object we will constrain, which is actually the **cosine of the angle** between edges $\boldsymbol{e}_{ij}$ and $\boldsymbol{e}_{ik}$. Let $\mathcal{T}_\mathcal{G}=\{(i,j,k)\in\mathcal{V}^3: (i,j),(i,k)\in\mathcal{E}, j<k\}$, then $\{\boldsymbol{g}_{ij}^\top\boldsymbol{g}_{ik}=c_{ijk}:c_{ijk}\in[-1,1],(i,j,k)\in\mathcal{T}_\mathcal{G}\}$ is the set of constraints on all angles in $(\mathcal{G},\boldsymbol{p})$.

We can also use $\mathcal{A}\subset\mathcal{V}\times\mathcal{V}\times\mathcal{V}$ to denote the angle set, each element of which is an ordered triplet. Denote $|\mathcal{A}| = M$. Then, the combination of the vertex set $\mathcal{V}$, the angle set $\mathcal{A}$, and the position vector \boldsymbol{p}_ is called an **angularity**, which we denote by $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$.

For the angle, given nonoverlapping positions $\boldsymbol{p}_i$, $\boldsymbol{p}_j$, and $\boldsymbol{p}_k$, the angle $\measuredangle ijk \in [0, 2\pi)$ can be uniquely calculated from
$$
\measuredangle ijk =
\begin{cases}
   \arccos(\boldsymbol{g}_{ij}^\top\boldsymbol{g}_{kj}) & \text{if } \boldsymbol{g}_{ij}^\perp\cdot\boldsymbol{g}_{kj}\geqslant 0\\
   2\pi - \arccos(\boldsymbol{g}_{ij}^\top\boldsymbol{g}_{kj}) & \text{otherwise}
\end{cases}.
$$

where $\measuredangle ijk$ for each triplet $(i, j, k)$ is measured counter-clockwise in the range $[0, 2\pi)$ where the ray starts by crossing the vertex $i$, rotating around the vertex $j$, and finally cross the vertex $k$. $\boldsymbol{g}_{ij}^\perp = Q_0\boldsymbol{g}_{ij} = \begin{bmatrix}   0 & -1\\   1 & 0 \end{bmatrix}\boldsymbol{g}_{ij}$ is the vector obtained by rotating $\boldsymbol{g}_{ij}$ counterclockwise by $\pi/2$.

We should note that a framework often has **redundant** angle information for shape determination.

<figure>
   <img src="/frontiers_rigidity_3_1_angle_rigidity.jpg" id="fig-3-1-angle" alt="Parallel Constaints" width="100%" align="center">
   <figcaption> Figure 1: (a) A globally and infinitesimally angle rigid framework; (b) A framework that is not angle rigid. (c) A globally and infinitesimally angle rigid framework; (d) A globally angle rigid framework.</figcaption>
</figure>

For example, in Figure 1(a), once $\boldsymbol{g}_{12}^\top\boldsymbol{g}_{13}$ and $\boldsymbol{g}_{21}^\top\boldsymbol{g}_{23}$ are available, it holds that $\boldsymbol{g}_{31}^\top\boldsymbol{g}_{32}=\cos(\pi-\arccos(\boldsymbol{g}_{12}^\top\boldsymbol{g}_{13})-\arccos(\boldsymbol{g}_{21}^\top\boldsymbol{g}_{23}))$. That is, the information of partial angles in the graph is often **sufficient to recognize** a framework. Therefore, by employing a **subset** $\mathcal{T}_\mathcal{G}^*\subset\mathcal{T}_\mathcal{G}$ with $|\mathcal{T}_\mathcal{G}^*|=w$, we will try to study whether $(\mathcal{G},\boldsymbol{p})$ can be **uniquely determined** by  $\{\boldsymbol{g}_{ij}^\top\boldsymbol{g}_{ik}\in[-1,1]:(i,j,k)\in\mathcal{T}_\mathcal{G}^*\}$ based on the angle rigidity theory to be developed in this paper. Note that although $\mathcal{T}_\mathcal{G}^*$ is only a subset of $\mathcal{T}_\mathcal{G}$, the elements in $\mathcal{T}_\mathcal{G}^*$ should **involve all vertices** in $\mathcal{G}$, otherwise the shape of $(\mathcal{G},\boldsymbol{p})$ can never be determined. Moreover, we call $\mathcal{T}_\mathcal{G}^*$ the **angle index set**.

For a framework $(\mathcal{G},\boldsymbol{p})$, the **angle rigidity function** corresponding to a given angle index set $\mathcal{T}_{\mathcal{G}}^*$ can be written as
$$
\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p})=(\cdots,\boldsymbol{g}_{ij}^\top(\boldsymbol{p})\boldsymbol{g}_{ik}(\boldsymbol{p}),\cdots)^\top, ~~(i,j,k)\in\mathcal{T}_\mathcal{G}^*.
$$

For the sake of notational simplicity, we denote $\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p})=\boldsymbol{a}_{\mathcal{T}_\mathcal{G}}(\boldsymbol{p})$.

It is easy to see that whether $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p})$ can determine a unique shape congruent to $\boldsymbol{p}$ is determined by the **choice** of $\mathcal{T}_{\mathcal{G}}^*$. As a result, the definitions of angle rigidity must be associated with $\mathcal{T}_{\mathcal{G}}^*$. We present the following definitions.

::: warning Definition: Equivalency and congruency abut angle rigidity
Two angularities $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ and $\mathbb{A}'(\mathcal{V}, \mathcal{A}, \boldsymbol{p}')$ with the same $\mathcal{V}$ and $\mathcal{A}$ are **equivalent** if
$$
\measuredangle ijk(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k) = \measuredangle ijk(\boldsymbol{p}_i', \boldsymbol{p}_j', \boldsymbol{p}_k'), \, \forall (i,j,k)\in\mathcal{A}.
$$

They are **congruency** if
$$
\measuredangle ijk(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k) = \measuredangle ijk(\boldsymbol{p}_i', \boldsymbol{p}_j', \boldsymbol{p}_k'), \, \forall i,j,k\in\mathcal{V}.
$$
:::

::: warning Definition: angle rigid
A framework $(\mathcal{G},\boldsymbol{p})$ is **angle rigid** if there exist an angle index set $\mathcal{T}_\mathcal{G}^*$ and a neighborhood $\mathcal{U}_p$ of $\boldsymbol{p}$ such that $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}^{-1}(\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p}))\cap \mathcal{U}_p=~\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))\cap \mathcal{U}_p$.

With equivalent and congruent relationships, here is another type of definition:
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is **angle rigid** if there exists an $\varepsilon > 0$ such that **every** angularity $\mathbb{A}'(\mathcal{V}, \mathcal{A}, \boldsymbol{p}')$ that is **equivalent** to it and satisfies $\|\boldsymbol{p}' − \boldsymbol{p}\| < \varepsilon$ is **congruent** to it.
:::

Definition of angle rigidity with equivalent and congruent implies that every configuration which is sufficiently close to $\boldsymbol{p}$ and satisfies all the angle constraints formed by $\mathcal{A}$ has the same magnitudes of the angles formed by any three vertices in $\mathcal{V}$ as the original configuration at $\boldsymbol{p}$.

::: warning Definition: globally angle rigid
A framework $(\mathcal{G},\boldsymbol{p})$ is **globally angle rigid** if there exists an angle index set $\mathcal{T}_\mathcal{G}^*$ such that $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}^{-1}(\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p}))=\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$.

With equivalent and congruent relationships, here is another type of definition:
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is **globally angle rigid** if **every** angularity that is **equivalent** to it is also **congruent** to it.
:::

::: warning Definition: minimally angle rigid
A framework $(\mathcal{G},\boldsymbol{p})$ is **minimally angle rigid** if $(\mathcal{G},\boldsymbol{p})$ is angle rigid, and deletion of any edge will make $(\mathcal{G},\boldsymbol{p})$ not angle rigid.
:::

By these definitions, the frameworks (a) and (c) in [Figure 1](#fig-3-1-angle) are both globally angle rigid. For the framework (b), by moving the vertices along the blue arrows, $f_{\mathcal{G}}$ is invariant but the shape is **deformed**, thus (b) is not angle rigid. For the framework (d), since the graph is complete, it obviously holds $\boldsymbol{a}_{\mathcal{G}}^{-1}(\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p}))=\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$, thus (d) is globally angle rigid. Note that the shape of (d) **still cannot be determined by angles uniquely**.

As is clear from Definitions of angle rigidity and global angle rigidity, **global angle rigidity always implies angle rigidity**. A natural question to ask is whether angle rigidity also implies global angle rigidity. In fact, for bearing rigidity, it has been shown that indeed **global bearing rigidity and bearing rigidity are equivalent**. However, this is not the case for angle rigidity:

::: danger Theorem 0: Nonequivalence between angle rigidity and global angle rigidity
An angle rigid angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is **not necessarily** globally angle rigid.
:::

<figure>
   <img src="/frontiers_rigidity_3_2_amb_example.jpg" id="fig-3-2-amb" alt="example about ambiguity" width="100%" align="center">
   <figcaption> Figure 2: Flex ambiguity in angle rigid angularity.</figcaption>
</figure>

Here is an example, see Figure 2. $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is angle rigid, but **not** globally angle rigid.

- Since two of its angles $\measuredangle 321$ and $\measuredangle 132$ have been constrained, the remaining $\measuredangle 213$ is **uniquely** determined to be $\pi − \measuredangle 321 − \measuredangle 132$, no matter how $\boldsymbol{p}$ is locally perturbed.
- The constraint on $\measuredangle 234$ requires $4$ must lie in the ray starting from $3$ and rotating from ray $32$ counter-clockwise by $30^\circ$; at the same time, the constraint on $\measuredangle 142$ requires $4$ must lie on the **arc** passing through $1$ and $2$ such that the inscribed angle $\measuredangle 142$ is $45^\circ$. No matter how $\boldsymbol{p}$ is **locally perturbed**, there is only one unique position for $4$ in the neighborhood of its current given coordinates because the two intersection points between the ray and the arc are **not in the same local neighborhood**. This local uniqueness implies that this four-vertex angularity is angle rigid (when $4$’s position is uniquely determined, any angle associated with it is also uniquely determined).
- Note that there is the other intersection point $4'$ as shown in Figure 2 satisfying the angle constraints given in $\mathcal{A}$.

Bearing rigidity is a **global** property because the bearing constraints **always represent linear constraints** in the end point’s position and two noncollinear rays have **at most one intersection**.

In contrast, the angle constraint can be:
- **linear** constraint in $\boldsymbol{p}$ when it requires the corresponding vertex to be on a **ray**;
- **quadratic** in $\boldsymbol{p}$ when it restricts the corresponding vertex to be on an **arc** passing through other vertices.

The possible nonlinearity in the angle constraints gives rise to potential ambiguity of the vertices’ positions under the given angle constraints.

<figure>
   <img src="/frontiers_rigidity_3_3_3vertex.jpg" id="fig-3-3-3vertex" alt="3 vertex with different angles" width="100%" align="center">
   <figcaption> Figure 3: Nongeneric p changes rigidity. (a) Not rigid; (b) Angle rigid; (c) Globally angle rigid.</figcaption>
</figure>

Note that the embedding of $\boldsymbol{p}$ in the plane may affect the rigidity of $\mathbb{A}$. Consider the $3$-vertex angularity as embedded in three different situations in Figure 3 when its angle set $\mathcal{A}$ contains only one element $(2,1,3)$.
- Figure 3(a) shows that $1$, $2$, and $3$ are not collinear, and then this angularity is in general **not rigid** since if we perturb point $1$ in an **arc** with $2$ and $3$ as the arc’s ending points, $\measuredangle 213$ can be the **same** while angles $\measuredangle 123$ and $\measuredangle 132$ change.
- In Figure 3(b), $1$, $2$, and $3$ are collinear and $1$ is on one side; in this case, if the angle constraint happens to be $\measuredangle 213 = 0$, then one can check the angularity becomes **angle rigid**, although it is **not** globally rigid since the angle of $\measuredangle 132$ changes by $180$ degree if we swap $2$ and $3$.
- In Figure 3(c), $1$, $2$, and $3$ are collinear and $1$ is in the middle; when the constraint becomes $\measuredangle 213 = \pi$, one can check that the angularity is **not only rigid, but also globally rigid** (swapping of $2$ and $3$ in this case does not change the resulting angles $\measuredangle 132$, $\measuredangle 123$ being zero).

So the angularity $\mathbb{A}(\{1, 2, 3\}, \{(2, 1, 3)\}, \boldsymbol{p})$ is generically not rigid, but rarely rigid **depending on** $\boldsymbol{p}$. To clearly describe this relationship between angle rigidity and $\boldsymbol{p}$, like in standard rigidity theory, we define what we mean by **generic positions**.

::: warnig Definition: Generic position
The position vector $\boldsymbol{p}$ is said to be **generic** if its components are [algebraically independent](./1basis#generic-rigidity-8). Then, we say an angularity is **generically** (respectively globally) angle rigid if its $\boldsymbol{p}$ is generic and it is (respectively globally) angle rigid.
:::

An example for **nongeneric positions** is the case when three points are **collinearly** positioned. Note that angle rigidity for $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ with generic $\boldsymbol{p}$ represents the common property of the combination $(\mathcal{V}, \mathcal{A})$ from a topological perspective, which is also referred to as generic angle rigidity. For convenience, we also say an angularity is **generic** if its $\boldsymbol{p}$ is **generic**. Now we provide some **sufficient** conditions for an angularity to be **globally angle rigid**. Towards this end, we need to introduce some concepts and operations.

::: warning Definition: subangularity
For two angularities $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ and $\mathbb{A}'(\mathcal{V}', \mathcal{A}', \boldsymbol{p}')$, we say $\mathbb{A}$ is a **subangularity** of $\mathbb{A}'$ if $\mathcal{V} \subset \mathcal{V}', \mathcal{A} \subset \mathcal{A}'$ and $\boldsymbol{p}$ is the corresponding **subvector** of $\boldsymbol{p}'$.
:::

We first clarify that for the smallest angularities, namely those that contain only three vertices, there is no gap between angle rigidity and global angle rigidity assuming generic positions.

::: tip Lemma 0
For a 3-vertex angularity, if it is **generically angle rigid**, it is also **generically globally angle rigid**.
:::

**Proof**: For this 3-vertex angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, since it is angle rigid and $\boldsymbol{p}$ is generic, $\mathcal{A}$ must contain **at least two elements**, or said differently, two of the interior angles of the triangle formed by the three vertices are constrained. Again since $\boldsymbol{p}$ is generic, the sum of the three interior angles in this triangle has to be $\pi$, and thus the magnitude of this triangle’s remaining interior angle is uniquely determined too. Therefore, $\mathbb{A}$ is generically globally angle rigid. <div style="text-align: right;">$\square$</div>

Now, we define linear and quadratic constraints.

::: warning Definition: Linear and quadratic constraints
- For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, a new vertex $i$ positioned at $\boldsymbol{p}_i$ is **linearly constrained** w.r.t. $\mathbb{A}$ if there is $j \in \mathcal{V}$ such that $\boldsymbol{p}_i \neq \boldsymbol{p}_j$ and $\boldsymbol{p}_i$ is constrained to be on a ray starting from $\boldsymbol{p}_j$;
- $i$ is **quadratically constrained** w.r.t. $\mathbb{A}$ if there are $j, k \in \mathcal{V}$ such that $\{\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\}$ is generic and $\boldsymbol{p}_i$ is constrained to be on an arc with $\boldsymbol{p}_j$ and $\boldsymbol{p}_k$ being the arc’s two ending points.

Correspondingly, we call $i$’s constraint in the former case a **linear constraint** and in the latter case a **quadratic constraint** w.r.t. $\mathbb{A}$.
:::

As shown in [Figure 2](#fig-3-2-amb), $\measuredangle 234 = 30^\circ$ is a **linear constraint** for the end vertex $4$ since $\boldsymbol{p}_4$ is constrained to be on a ray starting from  $\boldsymbol{p}_3$, while $\measuredangle 142 = 45^\circ$ is a **quadratic constraint** for $4$ because $\boldsymbol{p}_4$  is constrained to be on the major arc $\stackrel\frown{12}$.

Similar to [Henneberg’s construction](./1basis#henneberg-construction) in distance rigidity, in the following, we define two types of vertex addition operations in angle rigidity to demonstrate how a bigger angularity might grow from a smaller one, which are shown in Figure 4.

<figure>
   <img src="/frontiers_rigidity_3_4_addition.jpg" alt="vertex addition" width="100%" align="center">
   <figcaption> Figure 4: Type-I vertex addition and Type-II vertex addition. (a) Case 1 in Type-I vertex addition. (b) Case 2 in Type-I vertex addition. (c) Case 3 in Type-I vertex addition. (d) Case 1 in Type-II vertex addition. (e) Case 2 in Type-II vertex addition.</figcaption>
</figure>

::: warning Definition: Type-I vertex addition
For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, we say the angularity $\mathbb{A}'$ with the augmented vertex set $\{\mathcal{V} \cup \{i\}\}$ is obtained from $\mathbb{A}$ through a **Type-I vertex addition** if the new vertex $i$’s constraints w.r.t. $\mathbb{A}$ contain at least one of the following.
- Case 1: **2 linear constraints**, not aligned, associated with 2 distinct vertices in $\mathcal{V}$ (1 vertex for 1 constraint and the other vertex for the other constraint).
- Case 2: **1 linear constraint and 1 quadratic constraint** associated with 2 distinct vertices in $\mathcal{V}$ (1 for the former and both for the latter).
- Case 3: **2 different quadratic constraints** associated with 3 vertices in $\mathcal{V}$ (2 for each and 1 is shared by both), and the positions of $i$ and these 3 vertices are generic.
:::

::: warning Definition: Type-II vertex addition
For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, we say the angularity $\mathbb{A}'$ with the augmented vertex set $\{\mathcal{V} \cup \{i\}\}$ is obtained from $\mathbb{A}$ through a **Type-II vertex addition** if the new vertex $i$’s constraints w.r.t. $\mathbb{A}$ contain at least one of the following:
- Case 1: **1 linear constraint and 1 quadratic constraint** associated with three distinct vertices in $\mathcal{V}$ (1 for the former and the other 2 for the latter);
- Case 2: **2 different quadratic constraints** associated with 4 vertices in $\mathcal{V}$ (2 for the former and the other 2 for the latter), and the positions of $i$ and these 4 vertices are generic.
:::

**Remark**:
1. Although the types of constraints are similar between Case 2 of Type-I and Case 1 of Type-II, **the numbers of vertices** involved in Case 2 of Type-I and Case 1 of Type-II **differ** in these two types of vertex addition operations. Similarly, those in Case 3 of Type-I and Case 2 of Type-II are also different.
2. Note that in these two vertex addition operations, the involved vertices are required to be in **generic positions**. However, the overall angle rigid angularity $\mathbb{A}'$ constructed through a sequence of vertex addition operations is **not necessarily generic**, and an example is given in Figure 5.

<figure>
   <img src="/frontiers_rigidity_3_5_not-generic.jpg" alt="not generic" width="100%" align="center">
   <figcaption> Figure 5: Overall angularity is not necessarily generic. (a) Point 4 is unique when {1,3,4} are generic. (b) Point 4 is not unique when {1,3,4} are not generic. (c) {2,3,5} are not generic but angularity is rigid.</figcaption>
</figure>

Now we are ready to present a **sufficient condition** for global angle rigidity using Type-I vertex addition.

::: tip Proposition 1: Sufficient condition for global angle rigidity
An angularity is globally angle rigid if it can be obtained through a sequence of **Type-I vertex additions** from a **generically angle rigid $3$-vertex angularity**.
:::

::: details Details of Proof
According to Lemma 0, the generically angle rigid $3$-vertex angularity is **globally angle rigid**. Consider the three conditions in the Type-I vertex addition.
- If case 1 applies, then the position $\boldsymbol{p}_i$ of the newly added vertex $i$ is unique since two rays, not aligned, starting from two different points may intersect only at one point;
- If case 2 applies, $\boldsymbol{p}_i$ is again unique since a ray starting from the end point of an arc may intersect with the arc at most at one other point;
- If case 3 applies, $\boldsymbol{p}_i$ is unique since two arc sharing one end point on different circles can only intersect at most at one other point.

Therefore, $\boldsymbol{p}_i$ is always globally uniquely determined. After $\boldsymbol{p}_i$ is **globally uniquely determined**, all the angles associated with $\boldsymbol{p}_i$ are also globally uniquely determined. Because each Type-I vertex addition operation can **guarantee a unique adding point** $\boldsymbol{p}_i$, we conclude that the obtained angularity after a sequence of Type-I vertex additions is globally angle rigid. <div style="text-align: right;">$\square$</div>
:::

In comparison, Type-II vertex additions can only guarantee angle rigidity, but not global angle rigidity.

::: tip Proposition 2: Sufficient condition for angle rigidity
An angularity is angle rigid if it can be obtained through a sequence of Type-II vertex additions from a generically angle rigid $3$-vertex angularity.
:::

The proof can be easily constructed following similar arguments as those for Proposition 1. The only difference is that $\boldsymbol{p}_i$ now may have two solutions and is only unique locally.

After having presented our results on angularity and angle rigidity, in the following section, we discuss infinitesimal angle rigidity, which relates closely to infinitesimal motion.

### Infinitesimal Angle Rigidity
#### From [1]
Similar to distance and bearing rigidity theory, we define the **infinitesimal angle motion** as a motion preserving the invariance of $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p})$. The velocity $\boldsymbol{v}=\dot{\boldsymbol{p}}$ corresponding to an infinitesimal motion should satisfy $\dot{\boldsymbol{a}}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p})=0$, which is equivalent to the following equation
$$
\dot{\boldsymbol{g}}_{ij}^\top\boldsymbol{g}_{ik}+\boldsymbol{g}_{ij}^\top\dot{\boldsymbol{g}}_{ik}=0,~~(i,j,k)\in\mathcal{T}_\mathcal{G}^*. \tag{1}
$$

From the Chapter: [Lemma 6 of Chapter: Bearing rigidity](./2bearing#relationship-among-types-of-bearing-rigidity), we know that $\frac{\partial \boldsymbol{g}_{ij}}{\partial \boldsymbol{e}_{ij}}=\frac{1}{\|\boldsymbol{e}_{ij}\|}P_{ij}$, where $P_{ij}\triangleq P(\boldsymbol{g}_{ij})$, $P(\cdot):\mathbb{R}^2\rightarrow\mathbb{R}^{2\times 2}$ is a projection matrix defined as $P(x)= I_2-\boldsymbol{xx}^\top$, $\boldsymbol{x}\in\mathbb{R}^2$ is a unit vector. Then we have $\dot{\boldsymbol{g}}_{ij}=\frac{1}{\|\boldsymbol{e}_{ij}\|}P_{ij}\dot{\boldsymbol{e}}_{ij}$. Let $\boldsymbol{b}_\mathcal{G}(\boldsymbol{p})=(\cdots,\boldsymbol{g}_{ij}^\top(\boldsymbol{p}),\cdots)^\top$, where $(i,j)\in\mathcal{E}$, and $R_g\triangleq\frac{\partial \boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}}{\partial \boldsymbol{g}}$. It follows from the chain rule that
$$
\dot{\boldsymbol{a}}_{\mathcal{T}_\mathcal{G}^*}=\frac{\partial \boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}}{\partial \boldsymbol{b}_\mathcal{G}} \frac{\partial \boldsymbol{b}_\mathcal{G}}{\partial \boldsymbol{e}} \frac{\partial \boldsymbol{e}}{\partial \boldsymbol{p}}\dot{\boldsymbol{p}}=R_g(\boldsymbol{p}) \operatorname{diag}(\frac{P_{ij}}{\|\boldsymbol{e}_{ij}\|})\bar{H}\dot{\boldsymbol{p}}= R_{\mathcal{T}_{\mathcal{G}}^*}(\boldsymbol{p})\dot{\boldsymbol{p}},
$$

where $\bar{H}=H\otimes I_2$, $R_{\mathcal{T}_{\mathcal{G}}^*}(\boldsymbol{p})\triangleq R_g(\boldsymbol{p}) \operatorname{diag}(\frac{P_{ij}}{\|\boldsymbol{e}_{ij}\|})\bar{H}=R_g(\boldsymbol{p})R_B(\boldsymbol{p})\in\mathbb{R}^{w\times 2n}$ is termed the **angle rigidity matrix**, $R_\mathcal{B}=\frac{\partial g(\boldsymbol{p})}{\partial \boldsymbol{p}}$ is actually the bearing rigidity matrix. Therefore, equation $(1)$ is equivalent to $R_{\mathcal{T}_{\mathcal{G}}^*}(\boldsymbol{p})\dot{\boldsymbol{p}}=\mathbf{0}$.

Next we define **infinitesimal angle rigidity**, to do this, we should distinguish all **trivial** motions for an angle-constrained geometric shape. By an intuitive observation, the motions always preserving invariance of angles in the framework are **translations, rotations, and scalings**. Therefore, the dimension of the trivial motion space is $2+1+1=4$. Note that the trivial motion space is always a subspace of $\operatorname{Null}(R_{\mathcal{T}_{\mathcal{G}}^*})$, implying that $\dim(\operatorname{Null}(R_{\mathcal{T}_{\mathcal{G}}^*}))\geq 4$. We present the following definition.

::: warning Definition: infinitesimally angle rigid
A framework $(\mathcal{G},\boldsymbol{p})$ is **infinitesimally angle rigid** if there exists an angle index set $\mathcal{T}_\mathcal{G}^*$ such that every possible motion satisfying equation $(1)$ is trivial, or equivalently, $\dim(\operatorname{Null}(R_{\mathcal{T}_{\mathcal{G}}^*}))=4$.
:::

By this definition, the frameworks in [Figure 1](#fig-3-1-angle) (a) and (c) are both infinitesimally angle rigid. The frameworks (b) and (d) are not infinitesimally angle rigid since they both have nontrivial infinitesimal angle motions, which are interpreted by the arrows in blue.

In this paper, we say an angle index set $\mathcal{T}_\mathcal{G}^*$ **supports** or is **suitable** for (global, minimal, infinitesimal) angle rigidity of $(\mathcal{G},\boldsymbol{p})$ if $\mathcal{T}_\mathcal{G}^*$ makes the condition in the corresponding definition **valid**. We say $\mathcal{T}_\mathcal{G}^*$ is **minimally suitable** if $\mathcal{T}_\mathcal{G}^*$ is suitable and no proper subset of $\mathcal{T}_\mathcal{G}^*$ can be suitable.

It is easy to see from Definitions above that the angle rigidity property of a framework $(\mathcal{G},\boldsymbol{p})$ is completely dependent on $\mathcal{G}$ and $\boldsymbol{p}$. After $(\mathcal{G},\boldsymbol{p})$ is given, whether a suitable $\mathcal{T}_\mathcal{G}^*$ exists becomes certain. However, even for an angle rigid framework, there may exist $\mathcal{T}_\mathcal{G}^*$ such that the conditions in the angle rigidity definitions are **invalid**. For example, if we choose $\mathcal{T}_\mathcal{G}^*=\mathcal{T}_T$ where $T$ is a **spanning tree** of $\mathcal{G}$, $\mathcal{T}_\mathcal{G}^*$ can never support angle rigidity of $(\mathcal{G},\boldsymbol{p})$. On the other hand, there may exist **multiple choices** of $\mathcal{T}_\mathcal{G}^*$ supporting angle rigidity of a rigid framework. In [Subsection](#construction-of--for-infinitesimal-angle-rigidity), Algorithm 1 will be given to construct a suitable angle index set. 

#### From [3]
##### Angle Rigidity Matrix
We consider an arbitrary element $(i, j, k)$ in A and denote the corresponding angle constraint by $\measuredangle ijk(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k) = \beta \in [0, 2\pi)$, or in shorthand $\measuredangle ijk = \beta$. From the definition of the dot product, one has
$$
\cos\beta = \frac{(\boldsymbol{p}_i-\boldsymbol{p}_j)^\top}{\|\boldsymbol{p}_i-\boldsymbol{p}_j\|}\frac{(\boldsymbol{p}_k-\boldsymbol{p}_j)^\top}{\|\boldsymbol{p}_k-\boldsymbol{p}_j\|} = \boldsymbol{g}_{ij}^\top\boldsymbol{g}_{kj}
$$

Differentiating both sides of formula above w.r.t. time leads to
$$
\begin{aligned}
   (-\sin\beta)\dot{\beta} &= \dot{\boldsymbol{g}}_{ij}^\top\boldsymbol{g}_{kj} + \boldsymbol{g}_{ij}^\top\dot{\boldsymbol{g}}_{kj} \\
   &= \left[\frac{P_{ij}}{l_{ij}}(\dot{\boldsymbol{p}}_i - \dot{\boldsymbol{p}}_j)\right]^\top\boldsymbol{g}_{kj} + \boldsymbol{g}_{ij}^\top\frac{P_{kj}}{l_{kj}}(\dot{\boldsymbol{p}}_k - \dot{\boldsymbol{p}}_j)
\end{aligned}
$$

where $l_{jk} = \|\boldsymbol{p}_j - \boldsymbol{p}_k\|$. By rearranging, one obtains
$$
\begin{aligned}
   \frac{\mathrm{d}\beta}{\mathrm{d}t} &= \frac{\partial\beta}{\partial\boldsymbol{p}_i}\dot{\boldsymbol{p}}_i + \frac{\partial\beta}{\partial\boldsymbol{p}_j}\dot{\boldsymbol{p}}_j + \frac{\partial\beta}{\partial\boldsymbol{p}_k}\dot{\boldsymbol{p}}_k \\
   &= N_{kji}\dot{\boldsymbol{p}}_i - (N_{kji} + N_{ijk})\dot{\boldsymbol{p}}_j + N_{ijk}\dot{\boldsymbol{p}}_k.
\end{aligned}
$$

where $N_{kji} = -\frac{\boldsymbol{g}_{kj}^\top P_{ij}}{l_{ij}\sin\beta}\in\mathbb{R}^{1\times 2}, N_{ijk} = -\frac{\boldsymbol{g}_{ij}^\top P_{kj}}{l_{kj}\sin\beta}\in\mathbb{R}^{1\times 2}$, and we have assumed $\sin\beta \neq 0$, i.e., no collinearity among $\boldsymbol{p}_i$, $\boldsymbol{p}_j$, and $\boldsymbol{p}_k$. For each $(i, j, k)$ in $\mathcal{A}$, we obtain an equation in the form above, and then one can write such $M$ equations into the matrix form
$$
\frac{\mathrm{d}\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})}{\mathrm{d}t} = \frac{\partial \boldsymbol{a}_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}}\dot{\boldsymbol{p}} = R_\mathcal{A}(\boldsymbol{p})\dot{\boldsymbol{p}}
$$

where $R_\mathcal{A}(\boldsymbol{p}) \in \mathbb{R}^{M\times 2n}$ is called the **angle rigidity matrix**, whose rows are indexed by the elements of $\mathcal{A}$ and columns the coordinates of the vertices
$$
\begin{aligned}
  R_\mathcal{A}(\boldsymbol{p}) &= \frac{\partial \boldsymbol{a}_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}} \\
  &=
  \begin{matrix}
   & \cdots & \text{Vertex }i & \cdots & \text{Vertex }j & \cdots & \text{Vertex }k & \cdots \\
   \text{Angle }1 & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots \\
   \cdots & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots \\
   \measuredangle ijk & 0 & N_{kji} & 0 & -(N_{kji} - N_{ijk}) & 0 & N_{ijk} & 0\\
   \cdots & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots \\
   \text{Angle }M & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots & \cdots
  \end{matrix} 
\end{aligned}
$$

For an angularity, its angle preservation motions satisfy $\dot{\boldsymbol{a}}_\mathcal{G} = R_\mathcal{A}(\boldsymbol{p})\boldsymbol{p}'= \mathbf{0}$ which include **translation, rotation, and scaling**. One may rightfully expect that such motions are captured by the null space of the angle rigidity matrix, which always contains the following four linearly independent vectors:
$$
\begin{aligned}
   &\boldsymbol{q}_1 = \mathbf{1}_n\otimes
   \begin{bmatrix}
      1 \\ 0
   \end{bmatrix}, \quad \boldsymbol{q}_2 = \mathbf{1}_n\otimes
   \begin{bmatrix}
      0 \\ 1
   \end{bmatrix} \\
   &\boldsymbol{q}_3 = \begin{bmatrix}
      (Q_0\boldsymbol{p}_1)^\top & (Q_0\boldsymbol{p}_2)^\top & \ldots (Q_0\boldsymbol{p}_n)^\top
   \end{bmatrix}^\top \\
   &\boldsymbol{q}_4 = \begin{bmatrix}
      (c\boldsymbol{p}_1)^\top & (c\boldsymbol{p}_2)^\top & \ldots (c\boldsymbol{p}_n)^\top
   \end{bmatrix}^\top
\end{aligned}
$$

Note that $\boldsymbol{q}_1$ and $\boldsymbol{q}_2$ correspond to translation, $\boldsymbol{q}_3$ rotation, and $\boldsymbol{q}_4$ scaling.

::: tip Lemma 1: Rank of angle rigidity matrix
For an angle rigidity matrix $R_\mathcal{A}(\boldsymbol{p})$, it always holds that $\operatorname{span}\{\boldsymbol{q}_1, \boldsymbol{q}_2, \boldsymbol{q}_3, \boldsymbol{q}_4\} \subseteq \operatorname{null}(R_\mathcal{A}(\boldsymbol{p}))$ and correspondingly $\operatorname{rank}(R_\mathcal{A}(\boldsymbol{p})) \leqslant 2n − 4$.
:::

::: details Detail of Proof
Because each row sum of $R_\mathcal{A}(\boldsymbol{p})$ equals zero, one has $R_\mathcal{A}(\boldsymbol{p})\boldsymbol{q}_1 = \mathbf{0}$ and $R_\mathcal{A}(\boldsymbol{p})\boldsymbol{q}_2 = \mathbf{0}$. Taking an arbitrary row $\measuredangle ijk$ in $R_\mathcal{A}(\boldsymbol{p})$ as an example, one has the corresponding row in $R_\mathcal{A}(\boldsymbol{p})\boldsymbol{q}_3$
$$
\begin{aligned}
&N_{k j i} Q_0\left(\boldsymbol{p}_i-\boldsymbol{p}_j\right)+N_{i j k} Q_0\left(\boldsymbol{p}_k-\boldsymbol{p}_j\right) \\
=&\frac{z_{kj}^{\top} P_{ij} Q_0 \boldsymbol{g}_{ij}+\boldsymbol{g}_{ij}^{\top} P_{kj} Q_0 \boldsymbol{g}_{kj}}{-\sin \beta} \\
=&\frac{\boldsymbol{g}_{kj}^{\top} Q_0 \boldsymbol{g}_{ij}+\boldsymbol{g}_{ij}^{\top} Q_0 \boldsymbol{g}_{kj}}{-\sin \beta}=0
\end{aligned}
$$

where we have used the fact that $Q_0^{\top}=-Q_0$ and $\boldsymbol{g}_{ij}^{\top} Q_0 \boldsymbol{g}_{ij}=0$. Similarly, for $R_a(\boldsymbol{p}) \boldsymbol{q}_4$, one has
$$
\begin{aligned}
& c N_{k j i}\left(\boldsymbol{p}_i-\boldsymbol{p}_j\right)+c N_{i j k}\left(\boldsymbol{p}_k-\boldsymbol{p}_j\right) \\
=& \quad c \frac{\boldsymbol{g}_{kj}^{\top} P_{ij} \boldsymbol{g}_{ij}+\boldsymbol{g}_{ij}^{\top} P_{kj} \boldsymbol{g}_{kj}}{-\sin \beta}=0
\end{aligned}
$$

where we have used the fact that $P_{ij} \boldsymbol{g}_{ij}=0$. Therefore, $\operatorname{span}\left\{\boldsymbol{q}_1, \boldsymbol{q}_2, \boldsymbol{q}_3, \boldsymbol{q}_4\right\} \subseteq \operatorname{null}\left(R_a(\boldsymbol{p})\right)$.

Since $\boldsymbol{p}$ has no overlapping elements, one has that $\boldsymbol{q}_3$ and $\boldsymbol{q}_4$ are linearly independent to $\boldsymbol{q}_1$ and $\boldsymbol{q}_2$. Because $\boldsymbol{q}_1^\top \boldsymbol{q}_2 =  0$ and $\boldsymbol{q}_3^\top \boldsymbol{q}_4 = 0$, one has that $\boldsymbol{q}_1$, $\boldsymbol{q}_2$, $\boldsymbol{q}_3$, and $\boldsymbol{q}_4$ are linearly independent. <div style="text-align: right;">$\square$</div>
:::

Obviously the row rank of the angle rigidity matrix, or equivalently its **row linear dependency**, is a critical property of an angularity. We capture this property by using the notion of **“independent” angles**.

::: warning Definition: Independent angles
For an angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, we say its angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$ are **independent** if its angle rigidity matrix $R_\mathcal{A}(\boldsymbol{p})$ has **full row rank**.
:::

Since rank is a **generic property** of a rigidity matrix, one may wonder whether it is possible to disregard $\boldsymbol{p}$ of $\mathbb{A}$ and check generic angle rigidity only using $(\mathcal{V}, \mathcal{A})$. This is **indeed doable** as what we will show in the following subsection. Note that $2n − 4$ is the **maximum rank** that $R_\mathcal{A}(\boldsymbol{p})$ can have. When $\boldsymbol{p}$ is generic, the exact realization of $\boldsymbol{p}$ is not important for $(\mathcal{V}, \mathcal{A})$, and when checking the angle rigidity matrix’s rank, one can replace $\boldsymbol{p}$ by a random generic realization.

Using the notion of infinitesimal motion, checking the rank of the rigidity matrix can also enable us to check “infinitesimal” angle rigidity.

##### Infinitesimal Angle Rigidity
To consider infinitesimal motion, suppose that each $\boldsymbol{p}_i$, $\forall i \in \mathcal{V}$ of $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is on a differentiable smooth path. We say the whole path $\boldsymbol{p}(t)$ is generated by an **infinitesimally angle rigid motion** of $\mathbb{A}$ if on the path $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$ remains **constant**. We say such an infinitesimally angle rigid motion $\boldsymbol{p}(t)$ is **trivial** if it can be given by
$$
\boldsymbol{p}_i(t) = c(t)\mathcal{Q}(t)\boldsymbol{p}_i(t_0) + \mathcal{W}(t), \, \forall i\in\mathcal{V}, t\geqslant t_0. 
$$

where $c(t)\neq 0$ is a scalar scaling factor, $\mathcal{Q}(t) \in \mathbb{R}^{2\times 2}$ is a rotation matrix, $\mathcal{W}(t) \in \mathbb{R}^2$ is a translation vector, and $c(t), \mathcal{Q}(t), \mathcal{W}(t)$ are all differentiable smooth functions. Since all $\boldsymbol{p}_i(t), \forall i\in\mathcal{V}$ share the same $c(t), \mathcal{Q}(t), \mathcal{W}(t)$, it follows
$$
\boldsymbol{p}(t) = \{I_n\otimes [c(t)\mathcal{Q}(t)]\}\boldsymbol{p}(t_0) + \mathbf{1}_n\otimes \mathcal{W}(t), \, t\geqslant t_0. \tag{2}
$$

Now we are ready to define infinitesimal angle rigidity.
::: warning Definition: Infinitesimal angle rigidity
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is infinitesimally angle rigid if all its continuous infinitesimally angle rigid motion $\boldsymbol{p}(t)$ are trivial.
:::

In fact, a motion satisfying $(2)$ is always an **infinitesimally angle rigid motion** because the combination of **translation, rotation, and scaling** preserves all the angle constraints. However, the **converse does not necessarily hold**, e.g., nontrivial infinitesimally angle rigid motion exists when only point $1$ moves along line $12$ in [Figure 3](#fig-3-3-3vertex) (b). We formalize these remarks in the following theorem in the following subsection.

### Theorem Parts
#### From [1] about theorem
The following lemma gives the specific form of trivial motions preserving invariance of angles.

::: tip Lemma 2
The trivial motion space for angle rigidity in $\mathbb{R}^2$ is $\mathcal{S}=\mathcal{S}_r\cup\mathcal{S}_s\cup\mathcal{S}_t$, where:
- $\mathcal{S}_r=\{(I_n\otimes \mathscr{R}_o(\frac{\pi}{2}))\boldsymbol{p}\}$ is the space formed by infinitesimal **rotations**;
- $\mathcal{S}_s=\operatorname{span}\{\boldsymbol{p}\}$ is the space formed by infinitesimal **scalings**;
- $\mathcal{S}_t=\operatorname{null}(\bar{H})=\{\mathbf{1}_n\otimes (1,0)^\top, \mathbf{1}_n\otimes (0,1)^\top\}$ is the space formed by infinitesimal **translations**.

where $\mathscr{R}_o(\theta)=\begin{bmatrix}
    \cos\theta & -\sin\theta\\
    \sin\theta & \cos\theta
\end{bmatrix}$ is the $2$-dimensional rotation matrix associated with $\theta\in[0,2\pi)$.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>
In the Chapter: [Bearing rigidity in arbitary dimension](./2bearing#bearing-rigidity-in-arbitary-dimensions-4), the authors showed that $\mathcal{S}_s$ and $\mathcal{S}_t$ are **scaling** and **translational** motion spaces, respectively, and always belong to $\operatorname{null}(R_\mathcal{B}(\boldsymbol{p}))$. Since $R_{\mathcal{T}_{\mathcal{G}}^*}(\boldsymbol{p})=R_g(\boldsymbol{p})R_\mathcal{B}(\boldsymbol{p})$, it is straightforward that $\mathcal{S}_s\cup\mathcal{S}_t\subseteq \operatorname{null}(R_{\mathcal{T}_{\mathcal{G}}^*}(\boldsymbol{p}))$.

Next we show $\mathcal{S}_r\subseteq \operatorname{null}(R_{\mathcal{T}_{\mathcal{G}}^*}(\boldsymbol{p}))$.

Let $\eta^\top =\frac{\partial \boldsymbol{g}_{ij}^\top \boldsymbol{g}_{ik}}{\partial \boldsymbol{b}_\mathcal{G}}$ be an arbitrary row of $R_g$. It suffices to show $\eta^\top R_\mathcal{B}(\boldsymbol{p})(I_n\otimes \mathscr{R}_o(\frac{\pi}{2}))\boldsymbol{p}=0$. Note that $\eta=(\mathbf{0},\boldsymbol{g}_{ik}^\top ,\mathbf{0},\boldsymbol{g}_{ij}^\top ,\mathbf{0})^\top $, which follows $\eta^\top \operatorname{diag}(\frac{P_{ij}}{\|\boldsymbol{e}_{ij}\|})=(\mathbf{0},\boldsymbol{g}_{ik}^\top P_{ij}/\|\boldsymbol{e}_{ij}\|,\mathbf{0},\boldsymbol{g}_{ij}^\top P_{ik}/\|\boldsymbol{e}_{ik}\|,\mathbf{0})$. Note also that $\bar{H}(I_n\otimes \mathscr{R}_o(\frac{\pi}{2}))\boldsymbol{p}=(H\otimes I_2)(I_n\otimes \mathscr{R}_o(\frac{\pi}{2}))\boldsymbol{p}=(I_m\otimes \mathscr{R}_o(\frac{\pi}{2}))(H\otimes I_2)\boldsymbol{p}=(I_m\otimes \mathscr{R}_o(\frac{\pi}{2}))\boldsymbol{e}$, where $\boldsymbol{e}=(\cdots,\boldsymbol{e}_{ij}^\top ,\cdots)^\top $, the order of $\boldsymbol{e}_{ij}$ in the vector $\boldsymbol{e}$ is the same as the one of $\boldsymbol{g}_{ij}$ in the vector $\boldsymbol{b}_\mathcal{G}$. It follows that
$$
\begin{aligned}
&\eta^\top R_\mathcal{B}(\boldsymbol{p})\left(I_n\otimes \mathscr{R}_o\left(\frac{\pi}{2}\right)\right)\boldsymbol{p}\\=&\eta^\top \operatorname{diag}\left(\frac{P_{ij}}{\|\boldsymbol{e}_{ij}\|}\right)\bar{H}\left(I_n\otimes \mathscr{R}_o\left(\frac{\pi}{2}\right)\right)\boldsymbol{p}\\
=&\boldsymbol{g}_{ik}^\top \frac{P_{ij}}{\|\boldsymbol{e}_{ij}\|}\mathscr{R}_o\left(\frac{\pi}{2}\right)\boldsymbol{e}_{ij}+\boldsymbol{g}_{ij}^\top \frac{P_{ik}}{\|\boldsymbol{e}_{ik}\|}\mathscr{R}_o\left(\frac{\pi}{2}\right)\boldsymbol{e}_{ik}\\
=&\boldsymbol{g}_{ik}^\top (I-\boldsymbol{g}_{ij}\boldsymbol{g}_{ij}^\top )\mathscr{R}_o\left(\frac{\pi}{2}\right)\boldsymbol{g}_{ij}+\boldsymbol{g}_{ij}^\top (I-\boldsymbol{g}_{ik}\boldsymbol{g}_{ik}^\top )\mathscr{R}_o\left(\frac{\pi}{2}\right)\boldsymbol{g}_{ik}\\
=&\boldsymbol{g}_{ik}^\top \mathscr{R}_o\left(\frac{\pi}{2}\right)\boldsymbol{g}_{ij}+\boldsymbol{g}_{ij}^\top \mathscr{R}_o\left(\frac{\pi}{2}\right)\boldsymbol{g}_{ik}\\
=&\boldsymbol{g}_{ik}^\top \left[\mathscr{R}_o(\frac{\pi}{2})+\mathscr{R}^\top_o\left(\frac{\pi}{2}\right)\right]\boldsymbol{g}_{ij}=0.
\end{aligned}
$$

This completes the proof. <div style="text-align: right;">$\square$</div>
</details>

::: tip Lemma 3
A framework $(\mathcal{G},\boldsymbol{p})$ is **infinitesimally angle rigid** if and only if
$$
\operatorname{null}(R_{\mathcal{T}_{\mathcal{G}}}(\boldsymbol{p}))=\mathcal{S}.
$$

:::

In the Chapter: [basis](./1basis), it's shown that the set $D_{\mathcal K}^{-1}(D_{\mathcal K}(\boldsymbol{p}))$, which includes all configurations having inter-distance **congruent** to $\boldsymbol{p}$, is always a manifold of dimension $3$. In fact, since an angle-constrained shape has at least $4$ DoF, $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$ is a manifold of dimension $4$ when $(\mathcal{K},\boldsymbol{p})$ is infinitesimally angle rigid (i.e., $\boldsymbol{p}$ is a regular point). See the following theorem.

::: danger Theorem 1
Let $\mathscr{S}_p \triangleq \{\boldsymbol{q}\in\mathbb{R}^{2n}: \boldsymbol{q}=c(I_n\otimes \mathscr{R})\boldsymbol{p}+\mathbf{1}_n\otimes\xi, \mathscr{R}\in \textrm{O(2)}, c\in\mathbb{R}\setminus\{0\}, \xi\in\mathbb{R}^2\}$. If $(\mathcal{K},\boldsymbol{p})$ is **infinitesimally angle rigid**, then $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))=\mathscr{S}_p$, and  $\mathscr{S}_p$ is a $4$-dimensional manifold.

where $\mathrm{O}(2)$ is the orthogonal group in $\mathbb{R}^2$.
:::

The proof will be presented in [later subsections](#the-relation-to-infinitesimal-bearing-rigidity).

With the aid of Theorem 1, we can derive the relationship between infinitesimal angle rigidity and angle rigidity, which is as follows.

::: danger Theorem 2
If $(\mathcal{G},\boldsymbol{p})$ is **infinitesimally angle rigid** for $\mathcal{T}_\mathcal{G}^*$, then $(\mathcal{G},\boldsymbol{p})$ is **angle rigid** for $\mathcal{T}_\mathcal{G}^*$.
:::

**Proof**:

By [Proposition 1 from the Chapter: Basis](./1basis#characterized-in-linear-algebra) and $\operatorname{rank}\left(\frac{\partial \boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}}{\partial \boldsymbol{p}}\right)=2n-4$, there is a neighborhood $\mathcal{U}$ of $\boldsymbol{p}$, such that $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}^{-1}(\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p}))\cap \mathcal{U}$ is a manifold of dimension $4$. From Theorem 1, $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$ is also a $4$-dimensional manifold. As a result, $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}^{-1}(\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p}))$ and $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$ coincide in $\mathcal{U}$, implying that $(\mathcal{G},\boldsymbol{p})$ is angle rigid. <div style="text-align: right;">$\square$</div>

The converse of Theorem 2 is not true. A typical counter-example is the framework $(\mathcal{K},\boldsymbol{p})$ with $\boldsymbol{p}$ being a degenerate configuration. In this case, $(\mathcal{K},\boldsymbol{p})$ is globally angle rigid but not infinitesimally angle rigid.

#### From [3] aboout Theorem
::: danger Theorem 3: Sufficient and necessary condition for infinitesimal angle rigidity
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is **infinitesimally angle rigid** if and only if the **rank** of its angle rigidity matrix $R_\mathcal{A}(\boldsymbol{p})$ is $2n − 4$.
:::

::: details Details of Proof
In view of the definition, $\mathbb{A}$ is infinitesimally angle rigid if and only if all its infinitesimally angle rigid motions are **trivial**. That is to say, these infinitesimally angle rigid motions $\boldsymbol{p}(t), t \in [t_0, t_1]$ **maintaining the angle constraints** are exactly the **combination of translation, rotation, and scaling** w.r.t. the initial configuration $\boldsymbol{p}(t0)$, which are precisely captured by the 4 linearly independent vectors $\boldsymbol{q}_1$, $\boldsymbol{q}_2$, $\boldsymbol{q}_3$, and $\boldsymbol{q}_4$, which in turn is equivalent to the fact that the rigidity matrix’s null space is precisely the **span** of $\{\boldsymbol{q}_1, \boldsymbol{q}_2, \boldsymbol{q}_3, \boldsymbol{q}_4\}$. The conclusion then follows from the fact that such a specification of the null space holds if and only if the rank of the rigidity matrix reaches its maximum $2n − 4$. <div style="text-align: right;">$\square$</div>
:::

Note that this theorem implies that $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is infinitesimally angle rigid if and only if there are $2n − 4$ independent angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$. We want to further remark that no matter what $\boldsymbol{p}$ is, if one of the following three combinatorial structures appears in $\mathcal{A}$, then the angles are always **dependent**.
1. A cycle formed by the triplets in $\mathcal{A}$ and $M = n$ . For example, $\mathcal{A} = \{(i, j, k), (j, k, m), (k, m, n), (m, n, l), (n, l, i), (l, i, j)\}$ [See Figure 6 (a)]
2. Triplets with the same middle vertex and $M = n − 1$. For example, $\mathcal{A} = \{(i, m, j), (j, m, k), (k, m, i)\}$ [See Figure 6 (b)]
3. An angle subset $\mathcal{A}' \subset \mathcal{A}$ such that the number $n'$ of the involved vertices in $\mathcal{A}'$ satisfies $|\mathcal{A}'| > 2 n ' − 4$. For example, $\mathcal{A} = \{(i, m, j), (m, j, i), (i, k, j), (i, j, k), (k, m, j), (n, i, m), (n, m, i)\}$ and $\mathcal{A}' = \{(i, m, j), (m, j, i), (i, k, j), (i, j, k), (k, m, j)\}$, and thus $n' = 4$, $|\mathcal{A}'| = 5$ in Figure 6 (c).

<figure>
   <img src="/frontiers_rigidity_3_6_dependent.jpg" id="fig-3-6-dependent" alt="dependent" width="100%" align="center">
   <figcaption> Figure 6: Types of dependent triplet elements in A. (a) Cycle. (b) Triplets with the same middle vertex. (c) Overly constrained angle subset.</figcaption>
</figure>

If $\mathcal{A}$ contains 1 of the above 3 combinatorial structures, we say the triplet elements in $\mathcal{A}$ are **dependent**; otherwise, they are **independent**. One can further quantify the number of triplet elements such that the angularity is **infinitesimally angle rigid**.

::: danger Theorem 4: Combinatorial **necessary** condition for infinitesimal angle rigidity
For an angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, if it is **infinitesimally angle rigid**, then it has $2n − 4$ independent triplet elements in $\mathcal{A}$.
:::

::: details Details of Proof
From [Theorem 3](#from-3-aboout-theorem), we know $\mathbb{A}$ has $2 n-4$ independent angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$. First, we prove that dependent triplet elements in $\mathcal{A}$ imply dependent angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$. Using geometric transformation, one has $N_{k j i}^{\top}=\frac{\left(l_{j k} \cos \measuredangle i j k\right) z_{j i}-\left(p_k-p_j\right)}{l_{j i} l_{j k} \sin \measuredangle i j k}=-\frac{\left(p_i-p_j\right)^{\perp}}{l_{i j}^2}$. Then, by taking the dependent triplet elements in Figure 6(a) as an example, it can be verified that
$$
\left[\begin{array}{llllll}
1 & 1 & 1 & 1 & 1 & 1
\end{array}\right] R_\mathcal{A}(\boldsymbol{p})=0
$$

which implies the row dependence in $R_\mathcal{A}(\boldsymbol{p})$ and dependent angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$. The cases in Figure 6(b) and (c) can be similarly obtained. Now, one has that dependent triplet elements in $\mathcal{A}$ ⇒ dependent angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p})$, which implies that independent angles in $\boldsymbol{a}_\mathcal{G}(\boldsymbol{p}) \Rightarrow$ independent triplet elements in $\mathcal{A}$. So its angle set $\mathcal{A}$ has $2 n-4$ independent triplet elements. <div style="text-align: right;">$\square$</div>
:::

Now we show the relationship between angle rigidity and infinitesimal angle rigidity.

::: danger Theorem 5: Relationship between infinitesimal angle rigidity and angle rigidity
If an angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ is **infinitesimally angle rigid**, then it is **angle rigid**.
:::

::: details Details of Proof
From the definition, we know that if $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ is infinitesimally angle rigid, then all the continuous infinitesimally angle rigid motion $\boldsymbol{p}(t)$ are **trivial**, which are the combination of translation, rotation, and scaling of $\mathbb{A}$. Consider another angularity $\mathbb{A}^{\prime}\left(\mathcal{V}, \mathcal{A}, \boldsymbol{p}^{\prime}\right)$ with $\varepsilon>0$ and $\left\|\boldsymbol{p}^{\prime}-\boldsymbol{p}\right\|<\varepsilon$, which is equivalent to $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$. Then, the continuous motion from $\boldsymbol{p}$ to $\boldsymbol{p}^{\prime}$ maintaining $\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p})$ is the combination of translation, rotation, and scaling of $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, which are **angle-preserving** motions, i.e.,  $\mathbb{A}\left(\mathcal{V}, \mathcal{A}, \boldsymbol{p}^{\prime}\right)$ is congruent to $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, which implies that $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is angle rigid. <div style="text-align: right;">$\square$</div>
:::

For infinitesimally angle rigid angularities, we now discuss when its **number of angles** in $\mathcal{A}$ becomes the **minimum**. Towards this end, we need to clarify what we mean by **minimal angle rigidity**.

::: warning Definition: Minimal angle rigidity
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ is minimally angle rigid if it is angle rigid and **fails to remain so after removing any element** in $\mathcal{A}$, and is infinitesimally minimally angle rigid if it is infinitesimally angle rigid and minimally angle rigid.
:::

Since $\operatorname{rank}\left[R_\mathcal{A}(p)\right] \leq 2 n-4$, the **minimum number of angle constraints** in $f_{\mathcal{A}}(p)$ to maintain infinitesimal angle rigidity is exactly $2 n-4$. So we immediately have the following lemma.

::: tip Lemma 4
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ is **infinitesimally minimally angle rigid** if and only if it is infinitesimally angle rigid and $|\mathcal{A}|=2 n-4$.
:::

For an **infinitesimally minimally distance rigid** framework, there must exist a vertex associated with **fewer than $4$ distance constraints**; otherwise, the total number of distance constraints will be at least $2 n$ and thus greater than the minimum number $2n − 3$. This property is critical for the success of the Henneberg construction method in order to generate an arbitrary infinitesimally minimally distance rigid framework. 

However, for an infinitesimally minimally angle rigid angularity, the situation is more challenging, which in fact prevents drawing similar conclusions as the Henneberg construction does for distance rigidity. To be more precise, we have the following lemma.

::: tip Lemma 5
For an infinitesimally minimally angle rigid angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ with $|\mathcal{A}|=2 n-4$, it must have a vertex involved in more than $1$ but fewer than $6$ angle constraints.
:::

::: details Details of Proof
If every vertex is involved in at least $6$ angle constraints, then the total number of angle constraints is at least $|\mathcal{A}| \geqslant \frac{6 n}{3}=2 N$, which contradicts Lemma 4. Then, for that vertex, which has fewer than $6$ angle constraints, if it is involved in only $1$ angle constraint, then it is not infinitesimally rigid w.r.t. the rest of the angularity, which contradicts the property of infinitesimal angle rigidity. So there must be at least $1$ vertex that is involved in $2,3,4$, or $5$ angle constraints. <div style="text-align: right;">$\square$</div>
:::

In Figure 7, we show an infinitesimally minimally angle rigid angularity whose vertices are all involved in $5$ angle constraints.

<figure>
   <img src="/frontiers_rigidity_3_7_inf-min.jpg" alt="infinitesimally minimally angle rigid angularity" width="100%" align="center">
   <figcaption> Figure 7: All vertices are involved in 5 angle constraints in an infinitesimally minimally angle rigid angularity.</figcaption>
</figure>

Note that if an angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ is infinitesimally minimally angle rigid, then $|\mathcal{A}|=2 n-4$, and more importantly, the triplet elements in $\mathcal{A}$ need to be **independent**; this also implies that those situations listed in [Figure 6](#fig-3-6-dependent), namely cyclic triplets, triplets with the same middle vertex, and overly constrained angle subsets, **cannot** show up in $\mathcal{A}$, which is a **necessary combinatorial condition** for infinitesimal minimal angle rigidity.


### The relation to infinitesimal bearing rigidity
In this subsection, we will establish some connections between angle rigidity and bearing rigidity. The following theorem shows the **equivalence** of infinitesimal angle rigidity and infinitesimal bearing rigidity in the **plane**, which also implies the feasibility of angle-based approach for determining a framework in the plane.

::: danger Theorem 6
A framework $(\mathcal{G},\boldsymbol{p})$ is infinitesimally angle rigid if and only if it is infinitesimally bearing rigid.
:::

**Proof**: TODO

> It's proved that infinitesimal bearing rigidity is a **generic** property of the graph. That is, if $(\mathcal{G},\boldsymbol{p})$ is infinitesimally bearing rigid, then $(\mathcal{G},\boldsymbol{q})$ is infinitesimally bearing rigid for almost all configuration $\boldsymbol{q}$. The underlying approach is showing that a framework embedded by a graph is either infinitesimally bearing rigid or not infinitesimally bearing rigid for all generic configurations
> A configuration $\boldsymbol{p}=(p_1^\top,\cdots,p_n^\top)^\top\in\mathbb{R}^{2n}$ is generic if its $2n$ coordinates are algebraically independent. The set of generic configurations in $\mathbb{R}^{2n}$ is dense.

**Remark**:
1. From Theorem 6, **infinitesimal angle rigidity** is also a **generic** property of the graph, thus is primarily determined by the graph, rather than the configuration. In fact, **angle rigidity** is also a **generic** property of the graph. To show this, it suffices to show that an angle rigid framework $(\mathcal{G},\boldsymbol{p}^*)$ with a generic configuration $\boldsymbol{p}^*$ is always infinitesimally angle rigid. In \cite[Theorem3-17]{Jing18}(TODO), we have shown that a generic configuration $\boldsymbol{p}^*$ must be a regular point, i.e., $\operatorname{rank}(R_{\mathcal{T}_\mathcal{G}}(\boldsymbol{p}^*))=\max\limits_{\boldsymbol{p}\in\mathbb{R}^{2n}}\operatorname{rank}(R_{\mathcal{T}_\mathcal{G}}(\boldsymbol{p}))\triangleq\kappa$. By [Proposition 1 of Chapter: Basis](./1basis#characterized-in-linear-algebra), there exists a neighborhood $\mathcal{U}$ of $\boldsymbol{p}^*$, such that $\boldsymbol{a}_{\mathcal{G}}^{-1}(\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p}^*))\cap \mathcal{U}$ is a manifold of dimension $2n-\kappa$. From the definition of angle rigidity and Theorem 1, we know that there exists a neighborhood $\mathcal{U}'$ of $\boldsymbol{p}^*$, such that $\boldsymbol{a}_{\mathcal{G}}^{-1}(\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p}^*))\cap \mathcal{U}'$ is a manifold of dimension $4$. By definition of the manifold, we have $2n-\kappa=4$. Then $\kappa=2n-4$. That is, $(\mathcal{G},\boldsymbol{p}^*)$ is infinitesimally angle rigid. Hence, angle rigidity is also a generic property of the graph. By a similar approach, it can be easily obtained that **global angle rigidity** is also a **generic** property of the graph.
2. From Definition of infinitesimal angle rigidity, we can conclude that the **minimal number of angle constraints** for achieving infinitesimal angle rigidity is $2n-4$. On the other hand, it has been shown in Theorem8 about Algebraic property in the Chapter: [Bearing](./2bearing#relationship-among-types-of-bearing-rigidity) that the minimal number of edges for a framework to be infinitesimally bearing rigid is $2n-3$. By Theorem 6,  the same is true for infinitesimal angle rigidity.

Consider a framework $(\mathcal{G},\boldsymbol{p})$ in the **plane**. For distance rigidity theory, it is obvious that the shape of $(\mathcal{G},\boldsymbol{p})$ can be uniquely determined by $\boldsymbol{d}_{\mathcal{G}}(\boldsymbol{p})$ if $\mathcal{G}=\mathcal{K}$. For bearing rigidity theory, it's shown that $\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{p})$ uniquely determines a shape if $(\mathcal{G},\boldsymbol{p})$ is **infinitesimally bearing rigid**. However, for angle rigidity theory, it cannot be immediately answered that whether the shape can be uniquely determined by angles between edges. This is because angles are only constraints on relationships between those **edges joining a common vertex**. Even for a complete graph, if $n>3$, there always exist disjoint edges, the angle between each pair of disjoint edges cannot be constrained directly.

In the following theorem, the connection between $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(p))$ and $\boldsymbol{b}_{\mathcal{K}}^{-1}(\boldsymbol{b}_{\mathcal{K}}(p))$ is established.

::: danger Theorem 7
Given configurations $\boldsymbol{p},\boldsymbol{q}\in\mathbb{R}^{2n}$, $\boldsymbol{q}\in \boldsymbol{a}_\mathcal{K}^{-1}(\boldsymbol{a}_\mathcal{K}(\boldsymbol{p}))$ if and only if $(I_n\otimes\mathscr{R})^{-1}\boldsymbol{q}\in \boldsymbol{b}_{\mathcal{K}}^{-1}(\boldsymbol{b}_{\mathcal{K}}(\boldsymbol{p}))$, where $\mathscr{R}\in \textrm{O(2)}$.
:::

**Proof**: TODO

**Remark**: One can realize that the validity of Theorem 7 will not be lost provided the complete graph $\mathcal{K}$ is replaced with $\mathcal{G}$, where $(\mathcal{G},\boldsymbol{p})$ is both globally angle rigid and globally bearing rigid. Note that once $\mathcal{K}$ is replaced with a general graph $\mathcal{G}$, Theorem 7 **may become invalid**. As shown in Figure 8, although $\boldsymbol{q}\in \boldsymbol{a}_{\mathcal{G}}^{-1}(\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p}))$, there does not exist $\mathscr{R}\in \textrm{O(2)}$ such that $\boldsymbol{q}\in(I_n\otimes\mathscr{R})^{-1}\boldsymbol{q}\in \boldsymbol{b}_{\mathcal{G}}^{-1}(\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{p}))$.

<figure>
   <img src="/frontiers_rigidity_3_8_angle_non-bearing.jpg" alt="angle, non-bearing" width="100%" align="center">
   <figcaption> Figure 8: The angle constraints are the same, but not the bearing constraints. The angles in red are all constrained angles.</figcaption>
</figure>

It is important to note that Theorem 7 cannot induce equivalence of global angle rigidity and global bearing rigidity. Some examples show that this equivalence holds, but we still have no idea of how to prove it. Nonetheless, we are able to establish the following result.

::: danger Theorem 8
If a framework $(\mathcal{G},\boldsymbol{p})$ is (globally) angle rigid, then it is (globally) bearing rigid.
:::

**Proof**:

Suppose $(\mathcal{G},\boldsymbol{p})$ is angle rigid. Then there exists a neighborhood $\mathcal{U}_p$ of $\boldsymbol{p}$ such that $\boldsymbol{a}_{\mathcal{G}}^{-1}(\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p}))\cap \mathcal{U}_p=\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))\cap \mathcal{U}_p$. For this $\mathcal{U}_p$, consider any $\boldsymbol{q}\in \boldsymbol{b}_{\mathcal{G}}^{-1}(\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{p}))\cap \mathcal{U}_p$. It follows from $\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{p})=\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{q})$ that $\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p})=\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{q})$. Therefore, $\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p})=\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{q})$. By Theorem 7, $\boldsymbol{b}_{\mathcal{K}}(\boldsymbol{p})=(I_m\otimes\mathscr{R})\boldsymbol{b}_{\mathcal{K}}(\boldsymbol{q})$ for some $\mathscr{R}\in \textrm{O(2)}$. Recall that $\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{p})=\boldsymbol{b}_{\mathcal{G}}(\boldsymbol{q})$, we have $\mathscr{R}=I_2$. As a result, $\boldsymbol{b}_{\mathcal{K}}(\boldsymbol{p})=\boldsymbol{b}_{\mathcal{K}}(\boldsymbol{q})$, i.e., $\boldsymbol{q}\in \boldsymbol{b}_{\mathcal{K}}^{-1}(\boldsymbol{b}_{\mathcal{K}}(\boldsymbol{p}))$. That is, $(\mathcal{G},\boldsymbol{p})$ is bearing rigid.

From the relatonship among bearing rigidity in Chapter: [Bearing in arbitary dimensions](./2bearing#relationship-among-types-of-bearing-rigidity), bearing rigidity is equivalent to global bearing rigidity. Since global angle rigidity obviously leads to angle rigidity, it can also induce global bearing rigidity. <div style="text-align: right;">$\square$</div>

To prove Theorem 1, we introduce the following theorem
::: danger Theorem 9: Constant-Rank Level Set Theorem
Let $\mathcal{M}$ and $\mathcal{N}$ be smooth manifolds, and let $\Phi:\mathcal{M}\rightarrow \mathcal{N}$ be a smooth map, the Jacobian matrix of $\Phi$ has constant rank $r$. Each level set of $\Phi$ is a properly embedded submanifold of codimension $r$ in $\mathcal{M}$.
:::

<details>
    <summary> Here is details of proof for Theorem 1 </summary>

From Theorem 6, $(\mathcal{K},p)$ is infinitesimally bearing rigid. it's shown that $\boldsymbol{b}_{\mathcal{K}}^{-1}(\boldsymbol{b}_{\mathcal{K}}(p))=\{\boldsymbol{q}\in\mathbb{R}^{2n}:\boldsymbol{q}=c\boldsymbol{p}+\mathbf{1}_n\otimes\xi,  c\in\mathbb{R}\setminus\{0\}, \xi\in\mathbb{R}^2\}$. Together with Theorem 7, there must hold $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(p))=\mathscr{S}_p$.

Next we show $\mathscr{S}_p$ is a manifold. For any $\boldsymbol{q}\in \boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$, it is obvious that $\boldsymbol{q}=(I_n\otimes \mathscr{R})(c\boldsymbol{p}+\mathbf{1}_n\otimes\xi)$ for some $\mathscr{R}\in \textrm{O(2)}$, scalar $c$ and vector $\xi\in\mathbb{R}^2$. From the chain rule, we have
$$
\begin{split}
\operatorname{rank} \frac{\partial \boldsymbol{a}_{\mathcal{K}}(\boldsymbol{q})}{\partial \boldsymbol{q}}&=\operatorname{rank}\frac{\partial \boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p})}{\partial c(I_n\otimes \mathscr{R})\boldsymbol{p}}\\&=\operatorname{rank}\big[\frac{\partial \boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p})}{\partial \boldsymbol{p}}\frac{1}{c}(I_n\otimes \mathscr{R}^{-1})\big]\\&=2n-4.
\end{split}
$$

Note that $\boldsymbol{a}_{\mathcal{K}}:\mathbb{R}^{2n}\rightarrow\mathbb{R}^{|\mathcal{T}_{\mathcal{K}}|}$ is a smooth map, according to Theorem 9, $\boldsymbol{a}_{\mathcal{K}}^{-1}(\boldsymbol{a}_{\mathcal{K}}(\boldsymbol{p}))$ is a properly embedded submanifold of dimension $2n-(2n-4)=4$. <div style="text-align: right;">$\square$</div>
</details>

### Construction of $\mathcal{T}_\mathcal{G}^*$ for infinitesimal angle rigidity
From Definition of infinitesimal angle rigidity, it is easy to see that $\mathcal{T}_\mathcal{G}$ is always sufficient to determine whether a framework is infinitesimally angle rigid or not. However, the set of angles determined by $\mathcal{T}_\mathcal{G}$ is usually **redundant**. To reduce computational cost, we give an algorithm to construct a subset $\mathcal{T}_\mathcal{G}^*\subset\mathcal{T}_\mathcal{G}$, which is also sufficient to determine infinitesimal angle rigidity. In the proof for sufficiency of Theorem 6, we have presented an approach for constructing a set $\mathcal{T}_\mathcal{G}^*$, and proved that $\mathcal{T}_\mathcal{G}^*$ is a suitable angle index set. Here we give the following algorithm to implement this procedure.

<figure>
   <img src="/frontiers_rigidity_3_9_alg_suit_set.jpg" alt="Algorithms for suitable angle index set" width="100%" align="center">
   <figcaption> Figure 9: Algorithms for Constructing Suitable Angle Index Set.</figcaption>
</figure>

Since each vertex has at most $n-1$ neighbors, it is easy to see that the number of elementary operations performed by Algorithm 1 is at most $n(n-2)$. Hence the time complexity of Algorithm 1 is $\mathcal{O}(n^2)$.

An example of constructing $^i\mathcal{T}_{\mathcal{G}}^*$ by Algorithm 1 is shown in Figure 10.

<figure>
   <img src="/frontiers_rigidity_3_10_construction.jpg" alt="Constructon" width="100%" align="center">
   <figcaption> Figure 10: An example to illustrate the construction of $^i\mathcal{T}_{\mathcal{G}}^*$ by Algorithm 1. (a) The subgraph composed of vertex $i$ and its neighbors $j_1$, $j_2$, $k_1$, $k_2$, $k_3$. Note that $i,k_2,k_3$ are collinear, $i,j_1,j_2$ are collinear. (b) $\hat{\mathcal{N}}_i=\{j_1,j_2\}$, $\check{\mathcal{N}}_i=\{k_1,k_2,k_3\}$. If $j_s$ and $k_l$ are connected by a red line, it implies that the angle between edge $(i,j_s)$ and edge $(i,k_l)$ is selected to be constrained. This also implies that $(i,j_s,k_l)$ (if $j_s < k_l$) or $(i,k_l,j_s)$ (if $k_l< j_s$) is an element of $^i\mathcal{T}_{\mathcal{G}}^*$. </figcaption>
</figure>

Note that for an infinitesimally angle rigid framework, the angle index set generated by Algorithm 1 is **suitable** but **not minimally suitable** for infinitesimal angle rigidity. For example, let $(\mathcal{G},\boldsymbol{p})$ be a minimally angle rigid framework, then $|\mathcal{E}|=2n-3$. For a set $\mathcal{T}_\mathcal{G}^*$ generated by Algorithm 1, we have $|\mathcal{T}_\mathcal{G}^*|=\sum\limits_{i\in\mathcal{V}}|^i\mathcal{T}_\mathcal{G}^*|=\sum\limits_{i\in\mathcal{V}}(|\mathcal{N}_i|-1)=2(2n-3)-n=3n-6\geq 2n-4$ for $n\geq2$. Currently we do not have an algorithm to construct a minimally suitable angle index set for an arbitrary infinitesimally angle rigid framework.

**Remark**: Although $\mathcal{T}_\mathcal{G}^*$ constructed by Algorithm 1 supports infinitesimal angle rigidity, it **may not support global angle rigidity**. As shown in Figure 11 (a), by Algorithm 1, we can obtain $\mathcal{T}_\mathcal{G}^*=\{(1,2,4), (4,1,2), (1,3,4), (4,1,3)\}$. Although $(\mathcal{G},\boldsymbol{p})$ is infinitesimally angle rigid, $\boldsymbol{a}_{\mathcal{T}_\mathcal{G}^*}(\boldsymbol{p})$ may determine an incorrect shape as shown in Figure 11 (b). However, if we let $\bar{\mathcal{T}}_\mathcal{G}^*=\{(1,2,3)\}\cup\mathcal{T}_\mathcal{G}^*$, then $\boldsymbol{a}_{\bar{\mathcal{T}}_\mathcal{G}^*}(\boldsymbol{p})$ can always determine a correct shape. This implies that $(\mathcal{G},\boldsymbol{p})$ in Figure 11 (a) is both infinitesimally and globally angle rigid for $\bar{\mathcal{T}}_\mathcal{G}^*(\boldsymbol{p})$. 

<figure>
   <img src="/frontiers_rigidity_3_11_amb.jpg" alt="Ambiguity" width="100%" align="center">
   <figcaption> Figure 11: Both are infinitesimally angle rigid for $\mathcal{T}_\mathcal{G}^*=\{(1,2,4), (4,1,2), (1,3,4), (4,1,3)\}$, globally angle rigid for $\bar{\mathcal{T}}_\mathcal{G}^*=\{(1,2,3)\}\cup\mathcal{T}_\mathcal{G}^*$. </figcaption>
</figure>

In fact, even for a complete graph, it is possible that the geometric shape cannot be determined by angle-only or bearing-only information. A typical example is the degenerate configuration shown in [Figure 1](#fig-3-1-angle) (d).

Generally, we hope to determine a framework $(\mathcal{G},\boldsymbol{p})$ by angles uniquely up to translations, rotations, scalings and reflections in the plane. That is, $\boldsymbol{a}_{\mathcal{G}}^{-1}(\boldsymbol{a}_{\mathcal{G}}(\boldsymbol{p}))=\mathscr{S}_p$. In the next subsection, we will introduce a specific class of frameworks satisfying this condition.

### A class of frameworks uniquely determined by angles

It's introduced a particular class of **Laman graphs** termed **triangulated Laman graphs**, which are constructed by a modified Henneberg insertion procedure. In what follows, we will show that the shape of such frameworks can always be determined by angles uniquely. Let $\mathcal{L}_n=(\mathcal{V}_n,\mathcal{E}_n)$ be an $n$ -point $(n\geqslant 3)$ triangulated Laman graph, its definition is as follows.

::: warning Definition: $n$ -point triangulated Laman graph
Let $\mathcal{L}_2$ be the graph with vertex set $\mathcal{V}_2=\{1,2\}$ and edge set $\mathcal{E}_2=\{(1,2)\}$. $\mathcal{L}_n$ ($n\geq3$) is a graph obtained by adding a vertex $n$ and two edges $(n,i)$, $(n,j)$ into graph $\mathcal{L}_{n-1}$ for some $i$ and $j$ satisfying $(i,j)\in\mathcal{E}_{n-1}$.
:::

Note that the triangulated Laman graph considered here is an undirected graph. Now we give the following result for frameworks embedded by triangulated Laman graphs.

::: tip Lemma 6
A triangulated framework $(\mathcal{L}_n,\boldsymbol{p})$ is infinitesimally distance rigid if and only if $(\mathcal{L}_n,\boldsymbol{p})$ is strongly nondegenerate, i.e., $\boldsymbol{p}_i$, $\boldsymbol{p}_j$ and $\boldsymbol{p}_k$ are not collinear for any three vertices $i,j,k$ satisfying $(i,j),(j,k),(i,k)\in\mathcal{E}_n$.
:::

**Proof**:
<details>
    <summary> Details of Proof </summary>

1. Sufficiency[2]:
Let $Q_\mathcal{G}\subset P_\mathcal{G}$ be the set of strongly rigid configurations in $P_\mathcal{G}$ where $P_\mathcal{G}$ is the **configuration space** $\{(\boldsymbol{p}_1\ldots,\boldsymbol{p}_n)\in\mathbb{R}^{2n}|\boldsymbol{p}_i\neq\boldsymbol{p}_j, \forall (i,j)\in\mathcal{E}\}$. We first show that $Q_\mathcal{G}$ is open and dense, and then show that each configuration $p$ in $Q_\mathcal{G}$ is infinitesimally distance rigid. 
Let vertices $i$, $j$, and $k$ form a $3$-cycle of $\mathcal{G}$; we then let $T_{(i, j, k)}$ be a proper subspace of $P_\mathcal{G}$ as follows:
$$
T_{(i,j,k)} := \left \{ \boldsymbol{p}\in P_G \mid \det(\boldsymbol{p}_j - \boldsymbol{p}_i, \boldsymbol{p}_k - \boldsymbol{p}_i ) = 0 \right \}.
$$

The codimension of  $T_{(i,j,k)}$ in $P_\mathcal{G} $ is one. Further, we define $T_\mathcal{G} := \cup_{(i,j,k)} T_{(i,j,k)}$ where the union is taken over all triplets of vertices $(i,j,k)$ such that they form a $3$-cycle of $\mathcal{G}$.  Then, $Q_\mathcal{G} = P_\mathcal{G} - T_\mathcal{G}$ which implies that $Q_\mathcal{G}$ is an open dense subset of $P_\mathcal{G}$.

Recall that for a graph $\mathcal{G}$, the distance map $\rho_G: d_\mathcal{G}\longrightarrow \R^{|\mathcal{E}|}_+$  is defined as
$$
\rho_\mathcal{G}(\boldsymbol{p}) = (\cdots, \| x_i -  x_j\|^2,\cdots)_{(i,j)\in \mathcal{E}}. 
$$

Let $\boldsymbol{p}$ be in $Q_\mathcal{G}$; we now show that 
$$
\operatorname{rank}\left(\frac{\partial \rho_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}}\right) = 2n - 3.
$$

The proof will be carried out by induction on the number of vertices of $\mathcal{G}$.   For the base case $n = 2$, we have $\rho_G(x_1, x_2)= \|x_2 -x_1\|^2$, and hence 
$$
\frac{\partial \rho_G(\boldsymbol{p})}{\partial \boldsymbol{p}} = ( x^\top_1 - x^\top_2,\, x^\top_2 - x^\top_1 ).
$$

Since $x_1\neq x_2$, the rank of $\partial \rho_G(\boldsymbol{p}) / \partial \boldsymbol{p}$ is one. 

For the inductive step, assuming that the statement holds for $n < k$ for $k \geqslant 3$, we prove it for $n = k$. Choose a Henneberg sequence of $\mathcal{G}$, and label the vertices of $\mathcal{G}$ such that vertex $1$ is the last vertex appearing in the sequence, linking to the vertices $2$ and $3$. Let $\mathcal{G}^* = (\mathcal{V}^*, \mathcal{E}^*)$ be the  subgraph induced by the vertices $\mathcal{V}^* :=\{2, \ldots, k\}$, and $(\mathcal{G}^*, \boldsymbol{p}^*)$ be the corresponding framework. Note that $\boldsymbol{p}^*$ is strongly rigid. Hence, from the induction hypothesis, we have
$$
\operatorname{rank}\left(\left. \frac{\partial \rho_{\mathcal{G}^*}(\boldsymbol{p}')}{\partial \boldsymbol{p}'} \right |_{\boldsymbol{p}' = \boldsymbol{p}^*}\right) = 2(k-1) - 3.
$$ 
On the other hand, by computation, we have
$$
\frac{\partial \rho_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}} = 
\begin{pmatrix}
A_{11} & A_{12}\\
0 &  \left. \frac{\partial \rho_{\mathcal{G}^*}(\boldsymbol{p}')}{\partial \boldsymbol{p}'} \right |_{\boldsymbol{p}' = \boldsymbol{p}^*}
\end{pmatrix}
$$
with $A_{11}$ a $2\times2$ matrix given by $A_{11} = ( x_1 - x_2, x_1 -x_3 )^\top$. 

Since $\boldsymbol{p}$ is strongly rigid, we have that $(x_1 - x_2)$ and $(x_1 - x_3)$ are linearly independent. So then,
$$
\operatorname{rank}\left(\frac{\partial \rho_G(\boldsymbol{p})}{\partial \boldsymbol{p}}\right) = \operatorname{rank}(A_{11} ) + \operatorname{rank}\left(\left. \frac{\partial \rho_{G^*}(\boldsymbol{p}')}{\partial \boldsymbol{p}'} \right |_{\boldsymbol{p}' = \boldsymbol{p}^*}\right) = 2k - 3.
$$

2. Necessity
Suppose that strong nondegeneracy does not hold, then there exist $i,j,k\in\mathcal{V}$, such that $(i,j),(j,k),(i,k)\in\mathcal{E}_n$ and $\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k$ stay collinear. Note that $(\mathcal{L}_n,\boldsymbol{p})$ has exactly $2n-3$ edges. Let $R_\mathcal{D}(\boldsymbol{p})=\frac{\partial \boldsymbol{d}_\mathcal{G}(\boldsymbol{p})}{\partial \boldsymbol{p}}\in\mathbb{R}^{(2n-3)\times 2n}$ be the distance rigidity matrix. To guarantee $\operatorname{rank}(R_\mathcal{D}(\boldsymbol{p}))=2n-3$, $R_\mathcal{D}(\boldsymbol{p})$ should be of full row rank. However, it is easy to see that $\frac{\partial ||e_{ij}||^2}{\partial \boldsymbol{p}}$, $\frac{\partial ||e_{ik}||^2}{\partial \boldsymbol{p}}$, and $\frac{\partial ||e_{jk}||^2}{\partial \boldsymbol{p}}$ are always linearly dependent. Hence, $R_\mathcal{D}(\boldsymbol{p})$ cannot be of full row rank, which is a contradiction.

<div style="text-align: right;">$\square$</div>
</details>

The following theorem shows that the shape of a **strongly nondegenerate triangulated framework** in the **plane** can always be uniquely determined by angles.

::: danger Theorem 10
A triangulated framework $(\mathcal{L}_n,p)$ is **strongly nondegenerate**	
1. if and only if $(\mathcal{L}_n,\boldsymbol{p})$ is **minimally infinitesimally angle rigid**. A minimally suitable angle index set is 
$$
\mathcal{T}_{\mathcal{L}_n}^*=\{(i,j,k)\in\mathcal{V}^3_n:~~(i,j),(j,k),(i,k)\in\mathcal{E}_n,~i,j<k\}; \tag{3}
$$
	
2. only if $(\mathcal{L}_n,\boldsymbol{p})$ is **globally angle rigid**. A minimally suitable angle index set is $\mathcal{T}_{\mathcal{L}_n}^\dagger=\mathcal{T}_{\mathcal{L}_n}^*\cup\Delta\mathcal{T}_{\mathcal{L}_n}$, where $\Delta\mathcal{T}_{\mathcal{L}_n}=\{(i,k,l):  k=\min\{\mathcal{N}_i\cap\mathcal{N}_j\cap\mathcal{V}_{l-1}\}, i,j\in\mathcal{N}_l, ~ i<j<l, l=4,\cdots,n\}$ if $n\geqslant 4$, and $\Delta\mathcal{T}_{\mathcal{L}_n}=\varnothing$ otherwise. 
:::

**Proof**: TODO


<!-- 1. From Lemma 6 and the fact that $|\mathcal{E}_n|=2n-3$, strong nondegeneracy and minimal infinitesimal angle rigidity are equivalent for $(\mathcal{L}_n,\boldsymbol{p})$. Next we show $\mathcal{T}_{\mathcal{L}_n}^*$ in $(3)$ is minimally suitable for $(\mathcal{L}_n,\boldsymbol{p})$ to be **minimally infinitesimally angle rigid**. 

By virtues of Theorem 6 and Lemma 6, $(\mathcal{L}_n,\boldsymbol{p})$ is **infinitesimally bearing rigid**. Then $\operatorname{null}(R_B)=\mathcal{S}_s\cup\mathcal{S}_t$. It suffices to show that for any $\boldsymbol{\eta}\in \operatorname{null}(R_g)\cap \operatorname{range}(R_\mathcal{B})$, there always exists $\boldsymbol{q}\in\mathcal{S}_r$ such that $\boldsymbol{\eta}=R_\mathcal{B}\boldsymbol{q}$. Suppose that $R_{\mathcal{T}_{\mathcal{L}_n}^*}\boldsymbol{v}=R_gR_\mathcal{B}\boldsymbol{v}=\mathbf{0}$ and $R_\mathcal{B}\boldsymbol{v}\neq \mathbf{0}$, where $\boldsymbol{v}=(\boldsymbol{v}_1^\top ,\cdots, \boldsymbol{v}_n^\top )\in\mathbb{R}^{2n}$. In the proof of Theorem 6, we have shown that for any $(i,j,k)\in\mathcal{T}_{\mathcal{L}_n}^*$, if $g_{ij}$ is not collinear with $g_{ik}$, then (\ref{two final equalities}) holds for some $c_{ijk}$. Recall that $(\mathcal{L}_n,\boldsymbol{p})$ is strongly nondegenerate, then for any $(i,j,k)\in\mathcal{T}_{\mathcal{L}_n}^*$, (\ref{two final equalities}) holds for some $c_{ijk}$. Without loss of generality, suppose $i<j<k$. Due to the definition in (\ref{T_L^*}), for each triangle in $\mathcal{L}_n$ formed by vertices $i$, $j$ and $k$, we have $(i,j,k),(j,i,k)\in\mathcal{T}_{\mathcal{L}_n}^*$. Now we regard $(i,j)$ as a vertex of $\mathcal{G}'$ for all $(i,j)\in\mathcal{E}_n$, two vertices in $\mathcal{G}'$ are adjacent if they belong to a same triangle in $\mathcal{L}_n$. Let $c_{ij}$ be the state of $(i,j)$ if $v_i-v_j=c_{ij}\mathscr{R}_o(\frac{\pi}{2})e_{ij}+\bar{c}_{ij}e_{ij}$ for some $\bar{c}_{ij}\in\mathbb{R}$. It is easy to see that $(i,j)$, $(i,k)$ and $(k,j)$ have a common state, implying that adjacent vertices in $\mathcal{G}'$ must have a common state. Note that in every step during the generation of graph $\mathcal{L}_n$, a new triangle is generated based on an existing edge. Therefore, $\mathcal{G}'$ must be connected. As a result, there exists a constant $c\in\mathbb{R}$ such that $v_i-v_j=c\mathscr{R}_o(\frac{\pi}{2})e_{ij}+\bar{c}_{ij}e_{ij}$ for all $(i,j)\in\mathcal{E}_n$. By similar analysis to the proof of Theorem \ref{th IAR=IBR}, we can obtain $v\in\mathcal{S}_r$, which implies that $(\mathcal{L}_n,p)$ is infinitesimally angle rigid for $\mathcal{T}_{\mathcal{L}_n}^*$. Moreover, observe that $|\mathcal{T}_{\mathcal{L}_n}^*|=2n-4$, we conclude that $\mathcal{T}_{\mathcal{L}_n}^*$ is also minimal.

2. We prove the statement by induction.

For $n=3$, it is obvious that $(\mathcal{L}_3,p)$ with $\mathcal{T}_{\mathcal{L}_3}^\dagger=\mathcal{T}_{\mathcal{L}_3}^*=\{(1,2,3),(2,1,3)\}$ is globally angle rigid.

For $n\geq4$, suppose that $(\mathcal{L}_{n-1},p)$ with $\mathcal{T}_{\mathcal{L}_{n-1}}^\dagger$ is globally angle rigid. Next we show that $(\mathcal{L}_n,p)$ is globally angle rigid with $\mathcal{T}_{\mathcal{L}_{n}}^\dagger$. Without loss of generality, let $i$ and $j$ be the neighbors of $n$ and $i<j$. Note that $(i,j)\in\mathcal{E}_{n-1}$, and $i$, $j$ must have at least one common neighbor vertex in $\mathcal{L}_{n-1}$, let $k$ be the minimum index among them, it is easy to see $\mathcal{T}_{\mathcal{L}_n}^\dagger=\{(i,j,n),(j,i,n),(i,k,n)\}\cup\mathcal{T}_{\mathcal{L}_{n-1}}^\dagger$. It suffices to show that for any $q$ such that $f_{\mathcal{T}_{\mathcal{L}_n}^\dagger}(p)=f_{\mathcal{T}_{\mathcal{L}_n}^\dagger}(q)$, it always holds $f_{\mathcal{K}_n}(p)=f_{\mathcal{K}_n}(q)$. Since $\mathcal{L}_{n-1}$ is globally angle rigid, by Theorem \ref{th angle congruence=bearing congruence}, there exists a matrix $\mathscr{R}_{n-1}\in \textrm{O(2)}$ such that $g_{i'j'}(p)=\mathscr{R}_{n-1}g_{i'j'}(q)$ for all $i',j'\in\mathcal{V}_{n-1}$. From $g_{ij}^\top (p)g_{in}(p)=g_{ij}^\top (q)g_{in}(q)$, and $g_{ji}^\top (p)g_{jn}(p)=g_{ji}^\top (q)g_{jn}(q)$, we have $G_{ijn}^\top (p)G_{ijn}(p)=G_{ijn}^\top (q)G_{ijn}(q)$, where $G_{ijn}=(g_{ij},g_{nj},g_{ni})\in\mathbb{R}^{2\times3}$. Using strong nondegeneracy of $(\mathcal{L}_n,p)$, we have $\operatorname{rank}(G_{ijn}(p))=2$. By Lemma \ref{le unique cholesky decomposition}, $G_{ijn}(p)=\mathscr{R}_{ijn}G_{ijn}(q)$ for some $\mathscr{R}_{ijn}\in \textrm{O(2)}$. It follows that $g_{ij}(p)=\mathscr{R}_{n-1}g_{ij}(q)=\mathscr{R}_{ijn}g_{ij}(q)$. According to Lemma \ref{le A=BH}, $\mathscr{R}_{n-1}=\mathscr{R}_{ijn}$ or $\mathscr{R}_{n-1}=\mathscr{R}_{ijn}\mathscr{H}_{g_{ij}^{\perp}(q)}$.

Suppose that $\mathscr{R}_{n-1}\neq\mathscr{R}_{ijn}$, then $g_{ik}(p)=\mathscr{R}_{n-1}g_{ik}(q)=\mathscr{R}_{ijn}\mathscr{H}_{g_{ij}^{\perp}(q)}g_{ik}(q)$, and $g_{in}(p)=\mathscr{R}_{ijn}g_{in}(q)$. It follows that
$$
\begin{split}
g_{ik}^\top (p)g_{in}(p)&=g_{ik}^\top (q)\mathscr{H}_{g_{ij}^{\perp}(q)}\mathscr{R}_{ijn}^\top \mathscr{R}_{ijn}g_{in}(q)\\ &=g_{ik}^\top (q)\mathscr{H}_{g_{ij}^{\perp}(q)}g_{in}(q).
\end{split}
$$

Recall that $(i,k,n)\in\mathcal{T}_{\mathcal{L}_n}^\dagger$, we have $g_{ik}^\top (p)g_{in}(p)=g_{ik}^\top (q)g_{in}(q)$. Together with (\ref{gikgin}), it follows that $g_{ik}^\top (q)\mathscr{H}_{g_{ij}^{\perp}(q)}g_{in}(q)=g_{ik}^\top (q)g_{in}(q)$, which holds if and only if $g_{ij}(q)$ is collinear with either $g_{ik}(q)$ or $g_{in}(q)$, i.e., either $(q_i^\top ,q_j^\top ,q_k^\top )^\top $ or $(q_i^\top ,q_j^\top ,q_n^\top )^\top $ is degenerate, implying that either $(p_i^\top ,p_j^\top ,p_k^\top )^\top $ or $(p_i^\top ,p_j^\top ,p_n^\top )^\top $ is degenerate. This conflicts with strong nondegeneracy of $(\mathcal{L}_n,p)$.  Therefore, $\mathscr{R}_{n-1}=\mathscr{R}_{ijn}\triangleq\mathscr{R}_{n}$. That is, $g_{i'j'}(p)=\mathscr{R}_{n}g_{i'j'}(q)$ for any $(i',j')\in\mathcal{E}_n$. It follows that $f_{\mathcal{K}}(p)=~f_{\mathcal{K}}(q)$. Hence, $(\mathcal{L}_{n},p)$ with $\mathcal{T}_{\mathcal{L}_{n}}^*$ is globally angle rigid.
</details> -->


<figure>
   <img src="/frontiers_rigidity_3_12_tri-laman.jpg" alt="tri-laman graph" width="100%" align="center">
   <figcaption> Figure 12: (a) A framework embedded by a triangulated Laman graph $\mathcal{L}_5$. $(\mathcal{L}_5,p)$ is infinitesimally angle rigid for $\mathcal{T}_{\mathcal{L}_5}^*=\{(1,2,3),(1,3,4),(1,4,5),(2,1,3),(3,1,4),$ $(4,1,5)\}$, and globally angle rigid for $\mathcal{T}_{\mathcal{L}_5}^\dagger= \mathcal{T}_{\mathcal{L}_5}^*\cup\{(1,2,4), (1,3,5)\}$. The angles in red are constrained angles determined by $\mathcal{T}_{\mathcal{L}_5}^\dagger$. (b) A framework embedded by a Laman graph that is not triangulated. The framework is globally and infinitesimally angle rigid, but $\mathcal{T}_{\mathcal{L}_n}^*$ is not sufficient for its global and infinitesimal angle rigidity. The angles in red are constrained angles determined by $\mathcal{T}_{\mathcal{L}_n}^*$. </figcaption>
</figure>

An example of strongly nondegenerate framework embedded by a triangulated Laman graph is shown in Figure 12 (a). The angles in red are constrained angles determined by $\mathcal{T}_{\mathcal{L}_5}^\dagger$. The framework in Figure 12 (b) is both globally angle rigid and infinitesimally angle rigid, but it is not embedded by a triangulated Laman graph. 

It is important to note that strong nondegeneracy is **not necessary** for a triangulated framework to be globally angle rigid. A simple counterexample is the framework shown in [Figure 1](#fig-3-1-angle) (d). The framework is globally angle rigid, but not strongly nondegenerate. Moreover, the angle index set we give in Theorem 10 is only **one suitable** choice, there are also other choices of the angle index set supporting minimal infinitesimal angle rigidity or global angle rigidity of $(\mathcal{L}_n,\boldsymbol{p})$.

## 3D Angle Rigidity [4]
### Definition in 3D
An element $(j, i, k)$ in $\mathcal{A}$, when pi, pj, and pk are distinct, corresponds to the interior  angle formed by the rays $\vec{ij}$ and $\vec{ik}$; more specifically, using the position vector $\boldsymbol{p}$, the angle $\measuredangle jik \in [0, \pi]$ corresponding to the triplet $(j, i, k)$ in $\mathcal{A}$ can be calculated by
$$
\measuredangle jik = \arccos(\boldsymbol{g}_{ij}^\top\boldsymbol{g}_{ik}) \tag{4}
$$

where $\measuredangle jik = \measuredangle kij$, the unit vector $\boldsymbol{g}_{ij}$ represents the direction $\vec{ij}$.

**Remark**: The 2-D angle is calculated using the **counterclockwise direction**. However, the definition of each 3-D angle’s direction depends on the **associated vertices’ coordinate frames**, which are not assumed to be aligned and known in this 3-D angle rigidity. Although the 3-D angle defined in $(4)$ does not need the notion of being counterclockwise, the 3-D angle constraints will rely on similar notions to be defined later.

In this section, we first introduce 3-D angle rigidity, then introduce the merging operation for two angle rigid angularities, and in the end discuss angle rigidity of convex polyhedra. All the discussions are confined to 3-D and the right-hand rule applies to all rotation operations of vectors.

The definition of [equivalence, congruence, angle rigid and globally angle rigid in 2D](#definition-of-angle-rigidity-in-2d) are the same as 2-D. According to Definitions, **global angle rigidity always implies angle rigidity**, but the inverse is not necessarily true. This is different from bearing rigidity for which global bearing rigidity and bearing rigidity are equivalent.

::: danger Theorem 11: Nonequivalence between angle rigidity and global angle rigidity in 3D
An angle rigid angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ in 3-D is **not necessarily** globally angle rigid.
:::

We prove this theorem by constructing an angularity that is angle rigid but not globally angle rigid. Consider the angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ in Figure 13 with $\mathcal{V} = \{1, 2, 3, 4\}, \mathcal{A} = \{(1, 3, 2), (3, 2, 1), (1, 4, 2), (1, 4, 3), (2, 4, 3)\}$.

<figure>
   <img src="/frontiers_rigidity_3_13_amb-3d.jpg" id="fig-3-13-amb" alt="amb-3D" width="100%" align="center">
   <figcaption> Figure 13: Flex ambiguity in an angle rigid angularity (3D). </figcaption>
</figure>

We first check whether $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is angle rigid. In $\measuredangle 123$, one can uniquely determine $\measuredangle 213 = \pi − \measuredangle 132 − \measuredangle 321$, which implies that the interior angles in $\measuredangle 123$ are uniquely determined. If point $4$’s position could be uniquely determined by $\measuredangle 142, \measuredangle 143, \measuredangle 243$, the other angles formed by $4$ and $1,2,3$ would also be uniquely determined. To check the uniqueness of point $4$ under $\measuredangle 142, \measuredangle 143, \measuredangle 243$, we first show the surface which satisfies the angle constraint of $\measuredangle 142$ given points $1$ and $2$.

Since a 2-D angle constraint $\measuredangle 142$ allows point $4$ to be in an arc $\stackrel\frown{12}$ [see Figure 14(a)], the angle constraint of $\measuredangle 142$ in 3-D gives rise to a closed surface [see Figure 14(b)] formed by rotating the arc $\stackrel\frown{12}$ along the line $\overline{12}$ in Figure 14(a).

<figure>
   <img src="/frontiers_rigidity_3_14_constraints-3d.jpg" id="fig-3-14-con" alt="constraints-3D" width="100%" align="center">
   <figcaption> Figure 14: Extension of angle constraints from 2-D to 3-D. (a) 2D angle 142. (B) 3D angle 142. (C) 2D angle 214. (D) 3D angle 214. </figcaption>
</figure>

Given points $1$, $2$, and $3$ and angles $\measuredangle 142, \measuredangle 143, \measuredangle 243$, point $4$ can be determined by 3 such surfaces. By numerically checking the intersections of these 3 surfaces in Figure 15(a), one can see that there are 4 separate points of intersection [see Figure 15(b)] in these 3 surfaces. Therefore, when $\boldsymbol{p}_1, \boldsymbol{p}_2, \boldsymbol{p}_3, \boldsymbol{p}_4$ are locally perturbed, there is only one unique position for point $4$ in the neighborhood of its current position because these 4 intersection points are separate. More specifically, there always exists a sufficiently small perturbation (corresponding to $\varepsilon$ in Definition of angle rigid) such that every perturbed angularity satisfying the given 5 angle constraints is congruent to $\mathbb{A}$, i,e., $\mathbb{A}$ is angle rigid.

<figure>
   <img src="/frontiers_rigidity_3_15_intersection-3d.jpg" alt="intersection-3D" width="100%" align="center">
   <figcaption> Figure 15: Intersection of 3 surfaces. (a) 3 surfaces. (b) Surfaces’ intersected curves. </figcaption>
</figure>

We now show that $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is not globally angle rigid. Perturbing $\boldsymbol{p}_4$ in $\mathbb{R}^3$, one finds another point $\boldsymbol{p}_4'$ satisfying all the angle constraints associated with $\mathcal{A}$ together with $\boldsymbol{p}_1, \boldsymbol{p}_2, \boldsymbol{p}_3$, but $\measuredangle 412 \neq \measuredangle 4'12$. This flex ambiguity shown in Figure 13 implies that $\mathbb{A}$ is not globally angle rigid.

<figure>
   <img src="/frontiers_rigidity_3_16_nongeneric.jpg" alt="Non-generic" width="100%" align="center">
   <figcaption> Figure 16: Nongeneric p changes rigidity. </figcaption>
</figure>

Note that nongeneric embeddings of $\boldsymbol{p}$ in $\mathbb{R}^3$ may change rigidity properties. Now, we consider 3 different embeddings of a four-vertex angularity. When $213 = 0, 143 = 0$ as shown in Figure 16(a), the angularity is angle rigid but not globally angle rigid since if $2$ and $3$ swap their positions, $\measuredangle 213, \measuredangle 143$ remain the same but $\measuredangle 234$ changes by $\pi$. On the other hand, Figure 16(b) shows that when the same 2 angles are assigned to be $\measuredangle 213 = \pi, \measuredangle 143 = \pi$, the angularity becomes globally angle rigid according to Definition. Note that in the above 2 cases, all the 4 points are collinear. When only 3 points are collinear as in Figure 16(c), this angularity is in **general flexible** if fewer than 4 angle constraints are given according to 2-D angle rigidity, i.e. Theorem 4, since points $1,2,3,4$ are in a plane in this case. By giving 3 generic angles (e.g., not $0$ or $\pi$) for $\measuredangle 213, \measuredangle 143, \measuredangle 413$ and one nongeneric angle $\measuredangle 234 = \pi$ in Figure 16(c), the angularity becomes globally angle rigid because $\measuredangle 124 = \pi − \measuredangle 213 − \measuredangle 143 − \measuredangle 413, \measuredangle 132 = \measuredangle 413 + \measuredangle 143$, and $\measuredangle 134 = \pi − \measuredangle 132$ are all uniquely determined. However, four vertices in general form a **tetrahedron** in 3-D. To rule out nongeneric situations for $\boldsymbol{p}$, the notion of generic positions can be used. Following the Definition in 2-D, we say $\boldsymbol{p}$ is a generic position vector if its components are algebraically independent. We say an angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is **generically (globally) angle rigid** if $\boldsymbol{p}$ is generic and $\mathbb{A}$ is (globally) angle rigid.

Since an angle rigid angularity is **not necessarily** globally angle rigid, 3-D angle rigidity is a local property, which is **not related to the number of angle constraints** imposed on a specific angularity. However, if one wants to construct an angle rigid structure efficiently, **the number of angle constraints and their distributions** within an angularity become central, which motivates us to develop **sufficient conditions to guarantee global angle rigidity**. First, for two angularities $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ and $\mathbb{A}'(\mathcal{V}', \mathcal{A}', \boldsymbol{p}')$, we say $\mathbb{A}$ is a **subangularity** of $\mathbb{A}'$ if $\mathcal{V} \subset \mathcal{V}'$, $\mathcal{A} \subset \mathcal{A}'$ and $\boldsymbol{p}$ is the corresponding **subvector** of $\boldsymbol{p}'$. For the smallest angularities with only 3 vertices, there is **no difference** between generic angle rigidity and generic global angle rigidity.

::: tip Lemma 7
If a 3-vertex angularity in 3-D is **generically angle rigid**, it is also **generically globally angle rigid**.
:::

**Proof**: This is straightforward by following the proof in 2-D angle rigidity, i.e. Lemma 0.

Now, we develop the vertex addition operations for 3-D angle rigidity to construct an angle rigid angularity from the smallest 3-vertex angularity. Toward this end, we first define some related notions.

::: warning Definition: Constraints in 3-D
For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, we say that
1. a new vertex $i$ positioned at $\boldsymbol{p}_i$ is **linearly constrained** w.r.t. $\mathbb{A}$ if there is $j \in \mathcal{V}$ such that $\boldsymbol{p}_i \neq \boldsymbol{p}_j$ and $\boldsymbol{p}_i$ is  constrained to be on a ray $\vec{ji}$ starting from $\boldsymbol{p}_j$, e.g., $\boldsymbol{p}_4$ is  constrained in ray $\vec{14}$ in [Figure 14](#fig-3-14-con) (c). Later it's shown **how to generate** this constraint.
2. $i$ is **conically constrained** w.r.t. $\mathbb{A}$ if there are $j, k \in \mathcal{V}$ such that $\{\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\}$ is generic and $\boldsymbol{p}_i$ is constrained to be on a cone $\mathcal{C}_{j\to k}$ with $\boldsymbol{p}_j$ as the cone’s  apex and $\vec{jk}$ as the cone’s axis, e.g., $\boldsymbol{p}_4$ is constrained in cone $\mathcal{C}_{1\to 2}$ in [Figure 14](#fig-3-14-con) (d).
3. $i$ is **near-spherically constrained** w.r.t. $\mathbb{A}$ if there are $j, k \in \mathcal{V}$ such that $\{\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\}$ is generic and $\boldsymbol{p}_i$ is constrained to be on a near-spherical surface $\mathcal{S}_{jk}$ with $\overline{jk}$ in the surface’s rotation axis, e.g., $\boldsymbol{p}_4$ is constrained in near-spherical surface $\mathcal{S}_{12}$ in [Figure 14](#fig-3-14-con) (b).

For convenience, we also simply say $i$’s angle constraint is **linear**, **conic**, and **near-spherical** in the above 3 cases, respectively.
:::

In contrast to the linear and quadratic constraints from 2-D angles [see [Figure 14](#fig-3-14-con) (a) and (c)], each angle constraint in 3-D generally determines a **surface** [see [Figure 14](#fig-3-14-con) (b) and (d)] making computations and the exploration of its properties in 3-D more challenging.

To deal with this challenge, inspired by those formation control approaches where **counterclockwise direction** information among agents is employed to **exclude formations’ ambiguities**, we also utilize counterclockwise direction constraints for 3-D angle rigidity to exclude angularities’ ambiguities.

::: warning Definition: counterclockwise / clockwise direction
For 4 points $i, j, k, m$ in generic positions $\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k, \boldsymbol{p}_m$, we say $m$ is in a **counterclockwise** (resp. **clockwise**) **direction** w.r.t. $i, j, k$ if the **signed volume of the tetrahedron** formed by $\boldsymbol{p}_m$ and $\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k$ is positive (resp. negative), i.e., $V_{m-i j k}=\frac{\left(\boldsymbol{p}_i-\boldsymbol{p}_m\right)^{\top}\left[\left(\boldsymbol{p}_j-\boldsymbol{p}_m\right) \times\left(\boldsymbol{p}_k-\boldsymbol{p}_m\right)\right]}{6}>0$. 

Correspondingly, when the sign of the tetrahedron's volume is fixed to be positive (resp. negative), we say $\boldsymbol{p}_m$ is under a counterclockwise (resp. clockwise) direction constraint w.r.t. $\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k$, e.g., see Figure 17(a) and (b).
:::

<figure>
   <img src="/frontiers_rigidity_3_17_clockwise.jpg" alt="Clockwise" width="100%" align="center">
   <figcaption> Figure 17: Counterclockwise, clockwise, and linear constraints. (a) Counterclockwise constraint. (b) Clockwise constraint. (c) Linear constraint. </figcaption>
</figure>

**Remark**: As shown in Figure 17(c), 2 noncoincident conic constraints $\mathcal{C}_{j \rightarrow k_1}, \mathcal{C}_{j \rightarrow k_2}$ **sharing the same apex** $\boldsymbol{p}_j$ will lead to 2 cones intersecting at no more than 2 rays, denoted by $\overrightarrow{j i_1}$ and $\overrightarrow{j i_2}$. Since $\overrightarrow{j i_1}$ and $\overrightarrow{j i_2}$ are symmetric w.r.t. the plane formed by the 2 cones' rotation axes $\overrightarrow{j k_1}$ and $\overrightarrow{j k_2}$, one has that $V_{i_1-j k_1 k_2}$ and $V_{i_2-j k_1 k_2}$ have different signs. Therefore, **each linear constraint can be obtained by 2 conic constraints with a common apex and an associated counterclockwise constraint**.

Motivated by Henneberg's construction which has been seen as a cornerstone for distance rigidity theory, we now develop 2 types of **vertex addition** operations to construct global angle rigid and angle rigid angularities in 3-D, respectively.

<figure>
   <img src="/frontiers_rigidity_3_18_vertex_addition-3D.jpg" alt="vertex addition in 3D" width="100%" align="center">
   <figcaption> Figure 18: Type-I vertex addition and Type-II vertex addition. (a) Case 1 in Type-I vertex addition. (b) Case 2 in Type-I vertex addition. (c) Case 1 in Type-II vertex addition. (d) Case 2 in Type-II vertex addition. </figcaption>
</figure>

::: warning Definition: Type-I vertex addition
For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, we say the angularity $\mathbb{A}^{\prime}$ with the augmented vertex set $\{\mathcal{V} \cup\{i\}\}$ is obtained from $\mathbb{A}$ through a **Type-I vertex addition** if the new vertex $i$ 's constraints w.r.t. $\mathbb{A}$ contain at least 1 of the following 2 cases:

- Case 1: 2 linear constraints $\overrightarrow{j_1 i}, \overrightarrow{j_2 i}$, in which $\left\{j_1, j_2\right\} \subseteq \mathcal{V}$, and $\overrightarrow{j_1 i}$ and $\overrightarrow{j_2 i}$ are not aligned but intersecting, see Figure 18(a);
- Case 2: 1 linear constraint $\overrightarrow{j_1 i}$ and 1 conic constraint $\mathcal{C}_{j_1 \rightarrow j_2}$, in which $\left\{j_1, j_2\right\} \subseteq \mathcal{V}$, and $\overrightarrow{j_1 i}$ and $\overrightarrow{j_1 j_2}$ are not aligned but intersecting, see Figure 18(b).
:::

::: warning Definition: Type-II vertex addition
For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, we say the angularity $\mathbb{A}^{\prime}$ with the augmented vertex set $\{\mathcal{V} \cup\{i\}\}$ is obtained from $\mathbb{A}$ through a **Type-II vertex addition** if the new vertex $i$ 's constraints w.r.t. $\mathbb{A}$ contain at least one of the following 2 cases:
- Case 1: 3 near-spherical constraints $\mathcal{S}_{j_1 j_2}, \mathcal{S}_{j_1 k_1}, \mathcal{S}_{j_2 k_1}$ with generic $\left\{\boldsymbol{p}_i, \boldsymbol{p}_{j_1}, \boldsymbol{p}_{j_2}, \boldsymbol{p}_{k_1}\right\}$ and $\left\{j_1, j_2, k_1\right\} \subseteq \mathcal{V}$, see Figure 18(c).
- Case 2: 2 near-spherical constraints $\mathcal{S}_{j_1 k_1}, \mathcal{S}_{j_4 k_1}$ and 1 conic constraint $\mathcal{C}_{j_1 \rightarrow j_4}$ with generic $\left\{p_i, p_{j_1}, p_{j_4}, p_{k_1}\right\} \quad$ and $\quad\left\{j_1, j_4, k_1\right\} \subseteq \mathcal{V}$, see Figure 18(d).
:::

Now, we are ready to present a **sufficient condition** for global angle rigidity using Type-I vertex addition.

::: tip Proposition 3
An angularity in 3-D is **globally angle rigid** if it can be obtained through a sequence of **Type-I vertex additions** starting from a **generically angle rigid 3-vertex angularity**.
:::

::: details Details of Proof
According to Lemma 7, a **generically angle rigid** 3-vertex angularity is **globally angle rigid**. Consider the 2 cases in the Type-I vertex addition given in the related Definition.
- If case 1 applies, each linear constraint corresponds to a ray according to Definition of counterclockwise direction. Then, the position $\boldsymbol{p}_i$ of the newly added vertex $i$ is unique since two rays, not aligned, starting from 2 different points may intersect only at one point;
- If case 2 applies, $\boldsymbol{p}_i$ is again unique since a ray starting from the axis of a cone can have only one intersection with the cone. 

Therefore, $\boldsymbol{p}_i$ is always globally uniquely determined, after which all the involved angles are also globally uniquely determined. Then, iteratively, after a sequence of type-I vertex additions, the obtained angularity is globally angle rigid. <div style="text-align: right;">$\square$</div>
:::

In comparison, type-II vertex additions can **only guarantee angle rigidity** instead of global angle rigidity.

::: tip Proposition 4
An angularity in 3-D is **angle rigid** if it can be obtained through a sequence of **Type-II vertex additions** starting from a **generically angle rigid 3-vertex angularity**.
:::

The proof can be easily constructed following similar arguments as those for Proposition 3 and Theorem 11. The only difference is that $\boldsymbol{p}_i$ now may have multiple isolated solutions and is **only unique locally**. Also, note that only 2 types of constraints are defined in Type-II vertex addition operation in Definition, but there are more possible combinations of constraints which can also guarantee a locally unique point $\boldsymbol{p}_i$.

::: tip Corollary of Proposition 1 & 2
For an angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, if there exists an angle rigid (resp. globally angle rigid) subangularity $\mathbb{A}^{\prime}\left(\mathcal{V}, \mathcal{A},{ }^{\prime} \boldsymbol{p}\right)$ with $\mathcal{A}^{\prime} \subset \mathcal{A}$, then $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is also angle rigid (resp. globally angle rigid).
:::

**Proof**: Since the vertex set in the subangularity $\mathbb{A}^{\prime}$ is the same as $\mathbb{A}$, one has from Definitions of angle rigidity and globally angle rigidity that angle rigidity of the subangularity $\mathbb{A}^{\prime}$ implies angle rigidity of $\mathbb{A}$. <div style="text-align: right;">$\square$</div>

**Remark**:
1. The associated counterclockwise direction constraint introduced in the related Definition can be used to remove the reflection ambiguity such that the position of the added vertex $i$ in the Type-I vertex addition operation (see the related Definition) can be **globally uniquely determined**. But this constraint is **not sufficient** to make the position of the added point in Type-II vertex addition operation (see the related Definition) globally uniquely determined. An example is given in [Figue 13](#fig-3-13-amb), where points $1, 2, 3$ are in the clockwise direction w.r.t. both points $4$ and $4^{\prime}$. In other words, not only reflection ambiguity but also flex ambiguity may exist in Type-II vertex addition operation.
2. Note that Propositions 3 and 4 can also be used as topological conditions to check global angle rigidity and angle rigidity of angularities that **can be sequentially constructed from a triangle**, respectively. For those angularities that are not constructed through such sequential operations, **rank-based algebraic conditions** can be employed to check their **infinitesimal or generic angle rigidity** when the corresponding angularities' embedding $\boldsymbol{p}$ is known [15, Th. 3]TODO.

### Merging two Angle Rigid Angularities

<figure>
   <img src="/frontiers_rigidity_3_19_vertex_operation.jpg" id="fig-3-19-operation" alt="vertex operation in 3D" width="100%" align="center">
   <figcaption> Figure 19: 3-vertex addition operation and merging operation. </figcaption>
</figure>

After introducing how to add 1 vertex to an angularity in Propositions 3 and 4, we now investigate how to add 3 vertices to an angularity [see Figure 19(a)], which becomes useful later for merging two angle rigid angularities.

::: warning Definition: 3-vertex addition operation
For a given angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ and 3 new vertices $\left\{i_1, i_2, i_3\right\} \nsubseteq \mathcal{V}$, we say that the angularity $\mathbb{A}^{\prime}$ with the augmented vertex set $\left\{\mathcal{V} \cup\left\{i_1, i_2, i_3\right\}\right\}$ is obtained from $\mathbb{A}$ through a **3-vertex addition operation** if the new vertices' constraints w.r.t. $\mathbb{A}$ contain:
- 2 unaligned linear constraints $\overrightarrow{j_1 i_1}, \overrightarrow{k_1 i_1}$,
- 2 unaligned linear constraints $\overrightarrow{j_2 i_2}, \overrightarrow{k_3 i_2}$,
- 1 conic constraint $\mathcal{C}_{i_1 \rightarrow k_1}$
- 1 associated counterclockwise constraint $V_{i_3-i_2 i_1 k_1}$ for $i_3$

in which $\left\{j_1, j_2, k_1, k_3\right\} \subseteq \mathcal{V}$. We further denote the angle set corresponding to these added angle constraints by $\mathcal{A}^{\left\{i_1, i_2, i_3\right\}}$.
:::

Now, we merge a 3-vertex generically angle rigid angularity to a globally angle rigid angularity by the 3-vertex addition operation [see Figure 19(a)].

::: tip Proposition 5
For a **globally angle rigid angularity** $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ and a **3-vertex generically angle rigid angularity** $\mathbb{A}_3\left(\left\{i_1, i_2, i_3\right\}, \mathcal{A}_3,\left[\boldsymbol{p}_{i_1}^{\top}, \boldsymbol{p}_{i_2}^{\top}, \boldsymbol{p}_{i_3}^{\top}\right]^{\top}\right)$, if one merges $\mathbb{A}$ and $\mathbb{A}_3$ by adding the vertices $i_1, i_2, i_3$ to $\mathbb{A}$ through the 3-vertex addition operation, then the merged angularity $\mathbb{A}^{\prime}\left(\mathcal{V} \cup\left\{i_1, i_2, i_3\right\}, \mathcal{A} \cup \mathcal{A}_3 \cup \mathcal{A}^{\left\{i_1, i_2, i_3\right\}},\left[\boldsymbol{p}^{\top}, \boldsymbol{p}_{i_1}^{\top}, \boldsymbol{p}_{i_2}^{\top}, \boldsymbol{p}_{i_3}^{\top}\right]^{\top}\right)$ is **globally angle rigid**.
:::

::: details Details of Proof
Note that the positions of the added vertices $i_1$ and $i_2$ are globally unique according to Proposition 3 (case 1 of Type I vertex addition). After $\boldsymbol{p}_{i_1}$ and $\boldsymbol{p}_{i_2}$ are fixed, the vertex $i_3$ is constrained on the intersection of two cones with $\overline{i_1 i_2}$ as these two cones' rotation axis because $\mathbb{A}_3$ is **generically angle rigid** and $\measuredangle i_3 i_1 i_2$ and $\measuredangle i_3 i_2 i_1$ are fixed. By further using the given conic constraint for $i_3$ together with the associated counterclockwise constraint, one has that the position of the added vertex $i_3$ is also **globally unique** according to Proposition 3 (case 2 of Type-I vertex addition). <div style="text-align: right;">$\square$</div>
:::

Since the vertex set and the embedding of $\mathbb{A}$ are different from those of $\mathbb{A}^{\prime}$, Corollary 1 of Proposition 3 & 4 cannot be used as the the proof of Proposition 5. [Figure 19](#fig-3-19-operation) (a) shows the original angle constraints to realize the 3-vertex addition operation. It's known that the **minimum number of angle constraints** to guarantee an $n$-node angle-constrained framework's **angle rigidity** is $3 n-7$. Therefore, the number of these angle constraints in [Figure 19](#fig-3-19-operation) (a) is 7 because the total DoF for vertices $i_1, i_2, i_3$ in 3-D is $9$ , and at least $2$ angle constraints are needed to make $\mathbb{A}_3$ generically angle rigid. Thus, at least $9-2=7$ angle constraints related to $i_1, i_2, i_3$ are needed to merge $\mathbb{A}_3$ with $\mathbb{A}$. Definition of 3-vertex addition operation only gives one set of angle constraints for merging operation under global angle rigidity, and there are many other acceptable sets, especially when the number of angle constraints is larger than $7$ or the merged angularity is only required to be angle rigid. Now, we discuss how to merge two angle rigid angularities as shown in [Figure 19](#fig-3-19-operation) (b).

::: tip Proposition 6
Suppose that the angularity $\mathbb{A}_1\left(\mathcal{V}_1, \mathcal{A}_1, \boldsymbol{p}\right)$ is globally angle rigid and $\mathbb{A}_2\left(\mathcal{V}_2, \mathcal{A}_2, \boldsymbol{p}^{\prime}\right)$ with $\mathcal{V}_1 \cap \mathcal{V}_2=\varnothing$ has a **subangularity** $\mathbb{A}_2^{\prime}\left(\mathcal{V}_2, \mathcal{A}_2^{\prime}, \boldsymbol{p}^{\prime}\right)$ which can be obtained through a sequence of Type-I vertex additions from a generically angle rigid 3-vertex angularity $\mathbb{A}_3\left(\left\{i_1, i_2, i_3\right\}, \mathcal{A}_3,\left[\boldsymbol{p}_{i_1}^{\top}, \boldsymbol{p}_{i_2}^{\top}, \boldsymbol{p}_{i_3}^{\top}\right]^{\top}\right)$. If one merges $\mathbb{A}_1$ and $\mathbb{A}_2$ by adding the vertices $i_1, i_2, i_3$ to $\mathbb{A}_1$ through the 3-vertex addition operation, then the merged angularity $\mathbb{A}^{\prime \prime}\left(\mathcal{V}_1 \cup \mathcal{V}_2, \mathcal{A}_1 \cup \mathcal{A}_2 \cup \mathcal{A}^{\left\{i_1, i_2, i_3\right\}},\left[\boldsymbol{p}^{\top}, \boldsymbol{p}^{\prime \top}\right]^{\top}\right)$ is **globally angle rigid**.
:::

::: details Details of Proof
According to Proposition 5, adding the vertices $i_1, i_2, i_3$ to $\mathbb{A}_1$ through the 3-vertex addition operation yields global angle rigidity of the merged angularity with augmented vertex set $\left\{\mathcal{V}_1 \cup\left\{i_1, i_2, i_3\right\}\right\}$. According to Proposition 3, since $\mathbb{A}_2^{\prime}$ can be obtained through a sequence of Type-I vertex additions from $\mathbb{A}_3$, one has **global angle rigidity** of the angularity $\mathbb{A}_{1-2}^{\prime}\left(\mathcal{V}_1 \cup \mathcal{V}_2, \mathcal{A}_1 \cup \mathcal{A}_2^{\prime} \cup \mathcal{A}^{\left\{i_1, i_2, i_3\right\}},\left[\boldsymbol{p}^{\top}, \boldsymbol{p}^{\prime\top}\right]^{\top}\right)$ after merging $\mathbb{A}_1$ and $\mathbb{A}_2^{\prime}$. Because the angularity $\mathbb{A}_{1-2}^{\prime}$ is a subangularity of $\mathbb{A}^{\prime \prime}$, the merged angularity $\mathbb{A}^{\prime \prime}$ is **globally angle rigid** according to Corollary 1 of Proposition 3 & 4. <div style="text-align: right;">$\square$</div>
:::

### Minimal Angle Rigidity
Minimal angle rigidity plays an important role in deriving **angle rigidity's necessary and sufficient conditions**. Inspired by Laman theorem for 2-D distance-constrained frameworks, we now present some results on **3-D infinitesimal minimal angle rigidity**, whose definition is the same as 2D after replacing 2-D by 3-D.

::: tip Lemma 8
A 3-D angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, p)$ is **infinitesimally minimally angle rigid** if and only if it is **infinitesimally angle rigid** and $|\mathcal{A}|=3|\mathcal{V}|-7$.
:::

The proof of Lemma 8 follows straightforwardly from the fact that the magnitude of each 3-D angle is invariant under its associated vertices' overall translation, rotation, and scaling.

::: tip Lemma 9
A 3-D **infinitesimally minimally angle rigid** angularity must have a vertex associated with **more than 2 but fewer than 9 angle constraints**.
:::

From Lemma 8, the proof of Lemma 9 can be obtained straightforwardly by following the proof of [Lemma 5](#from-3-aboout-theorem).

However, according to Lemma 9, there are 6 cases for the number of the vertex's associated constraints, which makes it challenging to use Laman's induction method to get a necessary condition for angle rigidity. Instead, we focus on a **special class** of angularity, namely **tetrahedral angularity** whose angle set $\mathcal{A}$ is a tetrahedral angle set.

::: warning Definition: triangular angle set & tetrahedral angle set
- We say $\mathcal{A}$ is a **triangular angle set** if for every $\left(i_1, j_1, k_1\right) \in \mathcal{A}$, there also exists $\left\{\left(j_1, k_1, i_1\right),\left(k_1, i_1, j_1\right)\right\} \subset \mathcal{A}$.
- We say $\mathcal{A}$ is a **tetrahedral angle set** if $\mathcal{A}$ is a triangular angle set and for every triangular angle subset $\mathcal{T}_{\Delta i_1 j_1 k_1}:=\left\{\left(i_1, j_1, k_1\right),\left(j_1, k_1, i_1\right),\left(k_1, i_1, j_1\right)\right\} \subset \mathcal{A}$, there always exists a vertex $m \in \mathcal{V}, m \neq i_1 \neq j_1 \neq k_1$ such that $\mathcal{T}_{\Delta i_1 j_1 m} \subset \mathcal{A}, \mathcal{T}_{\Delta i_1 k_1 m} \subset \mathcal{A}, \mathcal{T}_{\Delta j_1 k_1 m} \subset \mathcal{A}$.
- We say $\left\{\mathcal{T}_{\Delta i_1 j_1 k_1}, \mathcal{T}_{\Delta i_1 j_1 m}, \mathcal{T}_{\Delta i_1 k_1 m}, \mathcal{T}_{\Delta j_1 k_1 m}\right\}$ is a **tetrahedral angle subset** corresponding to tetrahedron $\Delta m i_1 j_1 k_1$.
:::

::: warning Definition: infinitesimally minimally and tetrahedrally angle rigid
An angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ is said to be **infinitesimally minimally and tetrahedrally angle rigid** if $\mathcal{A}$ is a **tetrahedral angle set**, $\mathbb{A}$ is **infinitesimally angle rigid** and fails to remain so after removing any tetrahedron in $\mathcal{A}$.
:::

Let $n_\mathcal{A}^{\Delta} \in \mathbb{N}$ be the **number of tetrahedra** in the tetrahedral angle set $\mathcal{A}$. Let $\bar{\mathcal{A}}$ be the multiset satisfying that each element of $\bar{\mathcal{A}}$ is a triplet, $\bar{\mathcal{A}}$ consists of $n_{\mathcal{A}}^{\Delta}$ tetrahedral angle subset of $\mathcal{A}$, $|\bar{\mathcal{A}}|=3 \times 4 \times n_{\mathcal{A}}^{\Delta}$ ($3$ from triangular angle set and $4$ from tetrahedral angle subset), and duplicate elements may exist in $\bar{\mathcal{A}}$.

::: tip Proposition 7
For an **infinitesimally minimally and tetrahedrally angle rigid angularity** $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, one has that $n_{\mathcal{A}}^{\Delta}= \left\lceil\frac{3 |\mathcal{V}|-7}{5}\right\rceil$, and $\mathbb{A}$ must have a vertex associated with one or two tetrahedra in $\bar{\mathcal{A}}$.
:::

::: details Details of Proof
First, we prove $n_\mathcal{A}^{\Delta}=\left\lceil\frac{3|\mathcal{V}|-7}{5}\right\rceil$. From Lemma 8, angle rigid angularities' minimum number of [independent angle](#angle-rigidity-matrix) constraints is $3|\mathcal{V}|-7$. Since each tetrahedron has 5 independent angle constraints, one has $n_\mathcal{A}^{\Delta}=\left\lceil\frac{3|\mathcal{V}|-7}{5}\right\rceil$.

Then, we prove $\mathbb{A}$ must have a vertex associated with 1 or 2 tetrahedra. Suppose on the contrary that each vertex is associated with at least 3 tetrahedra in $\bar{\mathcal{A}}$. Since $\bar{\mathcal{A}}$ is a tetrahedral angle set and each vertex $m$ will show up 9 times ($3$ surfaces of triangles, with each $3$ angles) in its associated tetrahedral angle subset $\left\{\mathcal{T}_{\Delta i_1 j_1 k_1}, \mathcal{T}_{\Delta i_1 j_1 m}, \mathcal{T}_{\Delta i_1 k_1 m}, \mathcal{T}_{\Delta j_1 k_1 m}\right\}$, all the vertices' appearance times in $\bar{\mathcal{A}}$ will be at least $3 \times 9 \times|\mathcal{V}|$. However, the set $\bar{\mathcal{A}}$ only has $3 \times 4 \times n_{\mathcal{A}}^{\Delta}$ triples, i.e., all the vertices' total appearance times in $\bar{\mathcal{A}}$ are $3 \times 4 \times 3 \times n_{\mathcal{A}}^{\Delta}$. Since $36 n_A^{\Delta}=36\left\lceil\frac{3 |\mathcal{V}|-7}{5}\right\rceil<27|\mathcal{V}|$, this implies a contradiction, for which $\mathbb{A}$ must have a vertex associated with 1 or 2 tetrahedra. <div style="text-align: right;">$\square$</div>
:::

Although there are only 2 cases for the number of the vertex’s associated tetrahedra in an **infinitesimally, minimally and tetrahedrally angle rigid angularity**, the combinatory form of those tetrahedra with respect to the other vertices in $\mathcal{V}$ is multiple, which makes it challenging to obtain a similar conclusion like Laman’s theorem. Nevertheless, the conclusions presented in this section can be a foundation for further investigation of 3-D minimal angle rigidity.

### Angle Rigidity of Convex Polyhedra
As is well known, **distance rigidity of convex polyhedra** is one of the oldest geometric problems and has been studied by Euler, Cauchy, and Gluck, to name a few. Although many distance rigidity-related results have been obtained for convex polyhedra, the problem of angle rigidity of convex polyhedra${}^1$ has not been investigated so far. Instead of using edge-based frameworks, we use angularities introduced to describe **polyhedra with angle constraints**.

> 1: We only consider **closed polyhedra** here.

For a convex polyhedron $\mathbb{P}$, we define the corresponding angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, where $\mathcal{V}$ is the vertex set consisting of all the vertices of $\mathbb{P}, \mathcal{A}$ is the angle set consisting of all the angles${}^2$ of the faces of $\mathbb{P}$, and $\boldsymbol{p}$ is the position vector of the 3-D embedding of the vertices in $\mathcal{V}$. Define the angle function $f_{\mathcal{A}}(\boldsymbol{p}):=\left[f_1, \ldots, f_{|\mathcal{A}|}\right]^{\top} \in \mathbb{R}^{|\mathcal{A}|}$ for the angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ where $f_m: \mathbb{R}^9 \rightarrow[0, \pi], m=1, \ldots,|\mathcal{A}|$, is the mapping from $\left[\boldsymbol{p}_i^{\top}, \boldsymbol{p}_j^{\top}, \boldsymbol{p}_k^{\top}\right]^{\top}$ of the $m$ th element $(i, j, k)$ in $\mathcal{A}$ to the angle $\measuredangle i j k$. The main difference between this section and the previous sections is that the angle constraints of a polyhedron are **not in a cascading sequence**, but all on its **surfaces**.

> 2. For a closed polyhedron, one can easily distinguish the **inside** that its surfaces enclose from its **outside**, so it is possible to define the **positive directions** of the faces to be the normals pointing outwards. Therefore, the angle constraints on the surfaces of such a polyhedron can be associated with the clockwise or counterclockwise directions.

::: tip Lemma 10
If all angles on the faces of a convex polyhedron $\mathbb{P}$ remain **constant** when $\mathbb{A}$ is **perturbed**, then all the **dihedral angles** of $\mathbb{P}$ remain **constant**.
:::

::: tip Lemma 11
If **all edge lengths, angles in faces, and dihedral angles** of a convex polyhedron $\mathbb{P}$ remain **constant** under a perturbation of $\mathbb{A}$, then the perturbation must be a **translation** or **rotation** of $\mathbb{A}$.
:::

With the properties of the perturbation provided in Lemmas 10 and 11, we now provide a specific class of $\mathcal{A}$ such that these properties can be used for angle rigidity of convex polyhedra.

::: danger Theorem 12
The angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$ obtained from a convex polyhedron $\mathbb{P}$ with **all faces being triangles** is **angle rigid**.
:::

::: details Details of Proof
Following the Definition, we consider $\mathbb{A}$'s **equivalent** angularity $\mathbb{A}^{\prime}\left(\mathcal{V}, \mathcal{A}, \boldsymbol{p}^{\prime}\right)$ with $\left\|\boldsymbol{p}^{\prime}-\boldsymbol{p}\right\|<\varepsilon, \varepsilon>0$, and denote by $\mathbb{P}^{\prime}$ the corresponding polyhedron. Since $\mathbb{A}$ and $\mathbb{A}^{\prime}$ are equivalent, each two corresponding face angles in $\mathbb{A}$ and $\mathbb{A}^{\prime}$ have the **same** value (i.e., $f_\mathcal{A}(\boldsymbol{p})=f_{\mathcal{A}}\left(\boldsymbol{p}^{\prime}\right)$ ). According to Lemma 10, one has that each two corresponding **dihedral angles** formed by two adjacent faces in $\mathbb{P}$ and $\mathbb{P}^{\prime}$ have the **same** value.

Considering an arbitrary face triangle $\triangle i j k, i, j, k \in \mathcal{V}$, one has $\triangle i j k\left(\boldsymbol{p}_i, \boldsymbol{p}_j, \boldsymbol{p}_k\right) \sim \triangle i j k\left(\boldsymbol{p}_i^{\prime}, \boldsymbol{p}_j^{\prime}, \boldsymbol{p}_k^{\prime}\right)$. Now, we **scale** $\mathbb{A}^{\prime}$ to obtain $\mathbb{A}^{\prime \prime}$, which satisfies $\left\|p_i-p_j\right\|=\left\|p_i^{\prime \prime}-p_j^{\prime \prime}\right\|$, $\left\|p_i-p_k\right\|=\left\|p_i^{\prime \prime}-p_k^{\prime \prime}\right\|$ and $\left\|p_k-p_j\right\|=\left\|p_k^{\prime \prime}-p_j^{\prime \prime}\right\|$. We denote the scaled polyhedron by $\mathbf{P}^{\prime \prime}$. Since the scaling will not change all (face or dihedral) angles of a polyhedron, one has $f_{\mathcal{A}^*-\mathcal{A}}\left(\boldsymbol{p}^{\prime}\right)=f_{\mathcal{A}^*-\mathcal{A}}\left(\boldsymbol{p}^{\prime \prime}\right)$ and $f_{\mathcal{A}}\left(\boldsymbol{p}^{\prime}\right)=f_{\mathcal{A}}\left(\boldsymbol{p}^{\prime \prime}\right)$, where $\mathcal{A}^*= \{(i, j, k) \mid \forall i, j, k \in \mathcal{A}, i \neq j \neq k\}$ is the complete angle set. Now, we check $\mathbb{A}$ and $\mathbb{A}^{\prime \prime}$. 
1. all the face angles have the same values in $\mathbb{A}$ and $\mathbb{A}^{\prime \prime}$ because $f_{\mathcal{A}}(\boldsymbol{p})=f_{\mathcal{A}}\left(\boldsymbol{p}^{\prime}\right)=f_{\mathcal{A}}\left(\boldsymbol{p}^{\prime \prime}\right)$.
2. All the dihedral angles in $\mathbb{P}$ and $\mathbb{P}^{\prime \prime}$ have the same values because $\mathbb{P}$ and $\mathbb{P}^{\prime}$ have the same dihedral angles and $\mathbb{A}^{\prime \prime}$ is a scaling of $\mathbb{A}^{\prime}$.
3. Because $\triangle i j k\left(p_i, p_j, p_k\right) \simeq \triangle i j k\left(p_i^{\prime \prime}, p_j^{\prime \prime}, p_k^{\prime \prime}\right)$, the lengths of the edges in $\mathbf{P}$ have the same values as the lengths of the corresponding edges in $\mathbb{P}^{\prime \prime}$, which can be obtained by using the **law of sines** iteratively for the face triangles in $\mathbb{P}$ and $\mathbb{P}^{\prime \prime}$.

From the above 3 facts and using Lemma 11 for $\mathbb{A}$ and $\mathbb{A}^{\prime \prime}$, one has that $\mathbb{A}^{\prime \prime}$ is the translation or rotation of $\mathbb{A}$, under which the values of all triple-vertex angles remain unchanged. It follows that $f_{\mathcal{A}^*-\mathcal{A}}(\boldsymbol{p})=f_{\mathcal{A}^*-\mathcal{A}}\left(\boldsymbol{p}^{\prime \prime}\right)=f_{\mathcal{A}^*-\mathcal{A}}\left(\boldsymbol{p}^{\prime}\right)$. Therefore, $\mathbb{A}$ and $\mathbb{A}^{\prime}$ are **congruent**, and $\mathbb{A}$ is **angle rigid**.
:::

<figure>
   <img src="/frontiers_rigidity_3_20_polyhedra.jpg" id="fig-3-20-polyhedra" alt="Angle rigidity of convex polyhedra" width="100%" align="center">
   <figcaption> Figure 20: Angle rigidity of convex polyhedra. (a) Convex polyhedron with triangular surfaces. (b) Surface triangulation. (c) Coplanar face. </figcaption>
</figure>

Instead of focusing on convex polyhedra with triangular faces [see [Figure 20](#fig-3-20-polyhedra) (a)], we now study the case of convex polyhedra whose faces are **not necessarily triangles**. Note that when a face is not a triangle, the face's vertices may become **noncoplanar** under perturbations, for which we now develop the operations of **polygonal triangulation** and **surface triangulation**.

::: warning Definition: Polygonal triangulation
Polygonal triangulation is the **decomposition** of a **polygon** into **a set of triangles** where any two of these triangles either do **not intersect** at all or **intersect at a common vertex or edge**.
:::

::: warning Definition: Surface triangulation
Surface triangulation for a polyhedron $\mathbb{P}$ is the **decomposition** of the **surface** of $\mathbb{P}$ using **polygonal triangulation** for each face of $\mathbf{P}$ and at the same time any 2 decomposed **triangles** from 2 **faces** of $\mathbb{P}$ either do **not intersect** at all or **intersect at a common vertex or edge**.
:::

An example of surface triangulation is shown in [Figure 20](#fig-3-20-polyhedra) (b). Then, we define the corresponding triangulated angularity.

::: warning Definition: Triangulated polyhedral angularity
Let $\mathcal{K}$ be a surface triangulation of a polyhedron $\mathbf{P}$ with the vertex set $\mathcal{V}=\{1,2, \ldots, n\}$ and embedding $\boldsymbol{p}=\left[\boldsymbol{p}_1^{\top}, \ldots, \boldsymbol{p}_n^{\top}\right]^{\top}$. Then, we call $\mathbb{A}\left(\mathcal{V} \cup \mathcal{V},{ }^{\prime} \mathcal{A},\left[\boldsymbol{p}^{\top}, \boldsymbol{p}^{\top}\right]^{\top}\right)$ a **triangulated polyhedral angularity**, where $\mathcal{V}^{\prime}$ is the vertex set consisting of the vertices **added in the surface triangulation** $\mathcal{K}, \boldsymbol{p}^{\prime}$ is the corresponding embedding of the vertices in $\mathcal{V}^{\prime}$, and $\mathcal{A}$ denotes the angle set consisting of the interior angles of all polygonal faces of the polyhedron with vertices $\mathcal{V} \cup \mathcal{V}^{\prime}$ and embedding $\left[p^{\top}, \boldsymbol{p}^{\prime \top}\right]^{\top}$ and all the interior angles of triangles${}^3$ obtained by $\mathcal{K}$ for the surface of $\mathbb{P}$. Then, the polyhedron corresponding to $\mathcal{K}$ is called a triangulated polyhedron $\tilde{\mathbb{P}}$.
:::

> 3: Since the sum of three interior angles of each triangle is $\pi$, each triangle has one redundant angle in the angle set.

Note that if $\mathbb{P}$ is convex, we say its corresponding $\mathbb{A}$ is a **convex triangulated polyhedral angularity**. We first present two lemmas which will be needed for the proof of the main result.

::: tip Lemma 12
When locally perturbing the convex triangulated polyhedral angularity $\mathrm{A}\left(\mathcal{V} \cup \mathcal{V}^\prime,  \mathcal{A},\left[\boldsymbol{p}^{\top}, \boldsymbol{p}^{\top}\right]^{\prime\top}\right)$, the vertices of $\mathcal{V} \cup \mathcal{V}^{\prime}$ that are on a face of $\tilde{\mathbb{P}}$ are always **coplanar** under the angle constraints given in $\mathcal{A}$.
:::

::: details Details of Proof
We first prove that under the given angle constraints all the triangles in a face of $\tilde{\mathbb{P}}$ will be coplanar under the local perturbation. Consider an arbitrary face $\mathbb{S}$ of $\tilde{\mathbb{P}}$ whose vertices consist of $\mathcal{I}=\left\{i_1, \ldots, i_m\right\}$ where $m \geqslant 3$. Suppose that $i_k, 1 \leqslant k \leqslant m$ is one of the vertices in $\mathbb{S}$ and is involved in face triangles $\triangle j_1 i_k j_2, \triangle j_2 i_k j_3, \ldots, \triangle j_{n-1} i_k j_n$ where $j_1, \ldots, j_n \in \mathcal{I}$ and $j_1, \ldots, j_n \neq i_k$, and an example is in [Figure 20](#fig-3-20-polyhedra) (c). Note that if $j_1=j_{n-1}$ and $j_2=j_n$, i.e., $i_k$ is only involved in 1 triangle $\triangle j_1 i_k j_2$ in $\mathbb{S}$, then one has that $j_1, i_k, j_2$ are coplanar since three arbitrary points in 3-D are coplanar. When $i_k$ is involved in **more than 1 triangle** in $\mathbb{S}$, one has $\left\{\left(j_1, i_k, j_2\right),\left(j_2, i_k, j_3\right), \ldots,\left(j_{n-1}, i_k, j_n\right)\right\} \in \mathcal{A},\left(j_1, i_k, j_n\right) \in \mathcal{A}$ and $\measuredangle j_1 i_k j_2+\measuredangle j_2 i_k j_3+\cdots \measuredangle j_{n-1} i_k j_n=\measuredangle j_1 i_k j_n$. Since all the vertices of $\mathcal{V}$ and $\mathcal{V}^\prime$ lie on the boundary of the polyhedron, under the local perturbation, $i_k, j_1, j_2, \ldots, j_n$ must be coplanar; otherwise $\measuredangle j_1 i_k j_2+\measuredangle j_2 i_k j_3+\cdots+\measuredangle j_{n-1} i_k j_n>\measuredangle j_1 i_k j_n$, which violates the given angle constraints. Note that for each triangle $\triangle i j k$ in face $\mathbb{S}$, there always exists another triangle in face $\mathbb{S}$ that shares a common edge with $\triangle i j k$. Without loss of generality, assume that the another triangle is $\triangle i j k$ and the intersected edge is $i j$. Consider the first case that $i$ is only involved in these 2 triangles in face $\mathbb{S}$. Then $\{(j, i, k),(j, i, \tilde{k})\} \in \mathcal{A}$, $(k, i, \tilde{k}) \in \mathcal{A}$ and $\measuredangle j i k+\measuredangle j i \tilde{k}=\measuredangle k i \tilde{k}$. Under local perturbation, these 2 triangles are coplanar. The second case is that $i$ is involved in multiple triangles, using the same argument for the shared vertex as $i_k$, one has that these triangles are coplanar.

To prove that all the vertices in each face $\mathbb{S}$ is coplanar, we now consider that vertex $i_k$ is involved in $n-1$ coplanar triangles in face $\mathbb{S}$, and its neighboring vertex $i_{k+1}$ is involved in $\tilde{n}$ coplanar triangles in $\mathbb{S}$ , for which an example is in [Figure 20](#fig-3-20-polyhedra) (c). Note that those $n-1$ triangles from $i_k$ and $\tilde{n}$ triangles from $i_{k+1}$ must share at least 1 common triangle because of the existence of edge $i_k i_{k+1}$. Then, those $n+\tilde{n}-2$ triangles of $i_k$ and $i_{k+1}$ should be coplanar, and thus all the these triangles' vertices are coplanar. Next, if $i_{k+1}$ has a different neighboring vertex than $i_k$, we consider this vertex and label it $i_{k+2}$. Using the previous argument again, one has that all triangles of $i_k, i_{k+1}, i_{k+2}$ are coplanar. Using this argument repeatedly for new neighboring vertices until one reaches all vertices in $\mathcal{I}$, one has that all the triangles in $\mathbb{S} \cap \mathcal{K}$ are coplanar since the vertices of each triangle in $\mathbb{S} \cap \mathcal{K}$ lie in $\mathcal{I}$. Because all the triangles in $\mathbb{S} \cap \mathcal{K}$ cover all the vertices in $\mathcal{I}$, one has that the vertices of $\mathcal{V} \cup \mathcal{V}^{\prime}$ that is in S are coplanar under the perturbation. The same holds for the other faces of $\tilde{\mathbf{P}}$. <div style="text-align: right;">$\square$</div>
:::

::: tip Lemma 13
When locally perturbing the convex triangulated polyhedral angularity $\mathrm{A}\left(\mathcal{V} \cup \mathcal{V},^{\prime} \mathcal{A},\left[p^{\top}, p^{\prime \top}\right]^{\top}\right)$, if the **scale** of a triangle in a face of $\vec{P}$ remains **constant**, then **all the edge lengths** of $\tilde{\mathbf{P}}$ remain **constant**.
:::

::: details Details of Proof
Note that after triangulating the faces of the polyhedron $\mathbb{P}$, the surface of $\tilde{\mathbb{P}}$ becomes $\bar{K}$, in which each triangle $\triangle i j k \in \mathcal{K}$ has 3 neighboring triangles and each of them shares a different edge with the triangle $\triangle i j k$. When the scale of this arbitrary triangle $\triangle i j k$ in $\mathcal{K}$ is **fixed**, its 3 neighboring triangles also have the same fixed scale using the law of sines. Now, we show why the scales of all the other triangles in $\mathcal{K}$ are fixed as well.

Let the face where $\Delta i j k$ lies be $\mathbb{S}_1$ and the total number of triangles in $\mathbb{S}_1$ is $m$. Then, after fixing the scale of the 3 neighboring triangles of $\triangle i j k$, one can fix $\triangle i j k$ 's neighboring triangles' neighboring triangle; such a propagating fixing process will fix the scales of all the triangles in $\mathbf{S}_1$. Now, consider $\mathbb{S}_1$ 's neighboring face $\mathbb{S}_2$ that shares at least one edge with $\mathbb{S}_1$. Since the scales of all triangles in $S_1$ are fixed, the length of this shared edge is fixed and the scale of the triangle containing this edge in $S_2$ is also fixed. Apply for $S_2$ the same argument for $S_1$, all the triangles in $S_2$ can be fixed. Because the polyhedron $\mathbb{P}$ is closed, under the triangulation $\mathcal{K}$, one can always fix the neighboring triangles from those triangles with fixed scale until all the triangles in $\mathcal{K}$ are fixed. Therefore, all the edge lengths are constant provided that one triangle's scale is constant. <div style="text-align: right;">$\square$</div>
:::

Now, we present the main result about the convex triangulated polyhedral angularity.

::: danger Theorem 13
A **convex triangulated polyhedral angularity** $\mathrm{A}\left(\mathcal{V} \cup \mathcal{V},^{\prime} \mathcal{A},\left[p^{\top}, p^{\top}\right]^{\top}\right)$ **without** any vertex of $\mathcal{V}^{\prime}$ lying in the **interior** of a face of $\mathbf{P}$ is **angle rigid**.
:::

::: details Details of Proof
We prove Theorem 13 following the proof of Theorem 12. According to Lemma 12, one has that the vertices of $\mathcal{V} \cup \mathcal{V}^{\prime}$ that are involved in a face of $\tilde{\mathrm{P}}$ will be coplanar under the perturbation. Therefore, using Lemma 10, each corresponding dihedral angle formed by two adjacent faces keep constant under the perturbation. On the other hand, Lemma 13 implies that all the edge lengths of $\tilde{\mathbb{P}}$ keep constant under the given conditions. Based on these two facts and the proof of Theorem 12, one has that $\mathbb{A}$ is angle rigid. <div style="text-align: right;">$\square$</div>
:::

A face in a convex polyhedron is said to be **infinitesimally angle rigid** if the face can only translate, rotate and scale under any local perturbation. We now consider the case where each face of the convex polyhedron is infinitesimally angle rigid.

::: tip Corollary of Theorem 13
A convex polyhedron with infinitesimally angle rigid faces is angle rigid.
:::

::: details Details of Proof
The proof of this corollary follows the proof of Theorem 12. On the one hand, all angles in each face will remain constant under a perturbation according to the definition of infinitesimally angle rigid face. On the other hand, translation and rotation of a face will not change the lengths of its edges. When one edge length is fixed under the perturbation, the scale of the infinitesimally angle rigid face is also fixed, which implies that the lengths of the other edges of the face are fixed. Note that each face of the convex polyhedron has at least three neighboring faces and each pair of them share a different edge with the original face. Therefore, by fixing edge length iteratively, all the edge lengths of the polyhedron will be fixed given one fixed edge length in the polyhedron. From the above two facts and Lemma 11, one has that the convex polyhedron is angle rigid. <div style="text-align: right;">$\square$</div>
:::

### Comparison With 2-D Angle Rigidity
Compared with the existing results in 2-D, the contributions of the developed 3-D angle rigidity in this article lie in 3 aspects.
1. we show in [Section: Angle Rigidity](#3d-angle-rigidity-4) that each angle constraint determines a conic or nearspherical surface in 3-D, where a counterclockwise constraint is defined to avoid reflection ambiguity.
2. The approaches of constructing and merging 3-D angle rigid frameworks are proposed in [Section: Angle Rigidity](#3d-angle-rigidity-4) and [Section: Merging](#merging-two-angle-rigid-angularities). The proposed **sequential construction approach** for 3-D angle rigid and globally angle rigid frameworks can also be employed as topological conditions to **check 3-D frameworks’ angle rigidit**y.
3. Angle rigidity of convex polyhedra is discussed in [Section: Minimal Angle Rigidity](#minimal-angle-rigidity), in which all the angle constraints only lie in the faces of polyhedra and no sequential construction from the given angle constraints is applicable.

## References
> 1. *Angle-based shape determination theory of planar graphs with application to formation stabilization*, [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0005109819301475) & [arXiv](https://arxiv.org/pdf/1803.04276), by **Gangshan Jing**, etc.. Note that the angle rigidity function was denoted by $f_{\mathcal{T}_\mathcal{G}}$ and $\boldsymbol{g}_p$ is replaced by $\boldsymbol{b}_\mathcal{G}$ in the paper.
> 2. Appendix A.1 of *[Global stabilization of triangulated formations](http://epubs.siam.org/doi/10.1137/15M105094X)* by Xudong Chen etc..
> 3. *Angle rigidity and its usage to stabilize multiagent formations in 2-D*, [IEEE](https://ieeexplore.ieee.org/document/9204421), by **Liangming Chen**, Ming Cao and Chuanjiang Li.
> 4. *Angle rigidity for multiagent formations in 3-D*, [IEEE](https://ieeexplore.ieee.org/document/10018886), by **Liangming Chen** and Ming Cao.
<!-- > 1. *[Sensor and framework topologies of formations with direction, bearing, and angle information between agents](https://ieeexplore.ieee.org/abstract/document/1273093)* by **Tolga Eren**, ..., **Brian D.O. Anderson** -->
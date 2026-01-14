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
For a $3$-vertex angularity, if it is **generically angle rigid**, it is also **generically globally angle rigid**.
:::

**Proof**: For this $3$-vertex angularity $\mathbb{A}(\mathcal{V}, \mathcal{A}, \boldsymbol{p})$, since it is angle rigid and $\boldsymbol{p}$ is generic, $\mathcal{A}$ must contain **at least two elements**, or said differently, two of the interior angles of the triangle formed by the three vertices are constrained. Again since $\boldsymbol{p}$ is generic, the sum of the three interior angles in this triangle has to be $\pi$, and thus the magnitude of this triangle’s remaining interior angle is uniquely determined too. Therefore, $\mathbb{A}$ is generically globally angle rigid. <div style="text-align: right;">$\square$</div>

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

## References
> 1. *[Angle-based shape determination theory of planar graphs with application to formation stabilization](https://www.sciencedirect.com/science/article/pii/S0005109819301475)* by **Gangshan Jing**, etc.. Note that the angle rigidity function was denoted by $f_{\mathcal{T}_\mathcal{G}}$ and $\boldsymbol{g}_p$ is replaced by $\boldsymbol{b}_\mathcal{G}$ in the paper.
> 2. Appendix A.1 of *[Global stabilization of triangulated formations](http://epubs.siam.org/doi/10.1137/15M105094X)* by Xudong Chen etc..
> 3. [Angle rigidity and its usage to stabilize multiagent formations in 2-D](https://ieeexplore.ieee.org/document/9204421) by **Liangming Chen** etc..
<!-- > 1. *[Sensor and framework topologies of formations with direction, bearing, and angle information between agents](https://ieeexplore.ieee.org/abstract/document/1273093)* by **Tolga Eren**, ..., **Brian D.O. Anderson** -->
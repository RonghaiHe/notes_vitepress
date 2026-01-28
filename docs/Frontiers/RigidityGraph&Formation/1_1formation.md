# Formations [1]
The task of maintaining a prescribed distance between a pair of agents requires **control action**. The **execution** of the task could be the responsibility of **both agents or one nominated agent** of the pair.

- Modeling using undirected graphs is appropriate in the case of **shared responsibility**
- The case of **single-agent or unilateral responsibility** is captured by assigning a **direction** to the relevant edge in the graph

A directed edge from vertex $u$ to vertex $v$ appears when agent $u$ has the **task** of maintaining a specified distance from agent $v$, and agent $v$ is **unconstrained** in its own motions w.r.t. the motion of $u$, or differently put, agent $v$ is **unconscious** of the task that agent $u$ has to execute. In this case, only one of the two agents has to sense the position of the other agent or receive the position information broadcast by the other agent and make decisions on its own.

Therefore, and advantageously, both the overall **communication complexity** in terms of sensed or received information and the overall **control complexity** for the formation are **halved** in comparison to the shared responsibility case.

The reduction in communication links can mean **lower bit rates** and **reduced difficulties with interference**. In the shared responsibility case, a problem can arise when noise is present and two agents fail to share distance estimate information and instead use inconsistent estimates of the distance between each other, but this problem cannot arise in the single-agent responsibility case

## Constraint Consistence and Persistence of Formations
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

## Securing Persistence
Suppose that a 2D undirected graph is **rigid**. Can we **assign edge directions** so that it is **constraint consistent** and thus **persistent**? The question in its full generality remains open. However, affirmative answers exist for **minimally rigid graphs**, as well as for graphs with certain structures, including **wheel graphs**, **trilateration graphs**, **complete graphs**, and **power graphs of cycle graphs**
> See *Acquiring and maintaining persistence of autonomous multi-vehicle formations* for more details

The **simplest algorithm** for assigning directions in a minimally rigid graph is to consider the associated **undirected graph** and determine a **Henneberg sequence** that generates it. Then directions can be assigned to the edges that are added at each step, using the rule that any vertex can have **no more than two outgoing edges**. Such a directed graph is termed **minimally persistent**. Minimally persistent graphs are precisely those that are minimally rigid and constraint consistent.

<figure>
   <img src="/frontiers_rigidity_1_3_persistent.png" alt="Persistent Graphs" width="100%" align="center">
   <figcaption> Figure 3: Persistent graphs. (a) depicts a persistent wheel graph, while (b) illustrates a persistent C^2 graph, a generalization of a graph comprising a single cycle, obtained by inserting edges between two-hop neighbors of the original cycle. The persistence property follows from the fact that both graphs are rigid as well as the fact that no vertex has an out-degree larger than two. The direction assignment can be generalized to all wheel and C^2 graphs. A wheel graph is a convenient abstraction for a formation that has one of its agents as a commander or leader; a C^2 graph abstracts the reverse situation, in that all agents have the same task, and none is a leader.</figcaption>
</figure>

Figure 3 shows some direction assignments for wheel graphs and C${}^2$-graphs, both structures being attractive for operational autonomous agent formations. Given an arbitrary graph $\mathcal{G}$, the graph $\mathcal{G}^2$ (the **square** of $\mathcal{G}$) is obtained by adding edges to $\mathcal{G}$, linking each vertex to its **two-hop** neighbors, i.e., to those vertices with which a neighbor vertex is **shared**. A C${}^2$-graph is the **square** of a **cycle graph**, which is a graph that is simply a cycle.

Wheel and C${}^2$ graphs have robustness properties, in the form of tolerance of agent or link loss in the formation, corresponding to vertex or edge loss in the graph. A wheel graph with $N$ vertices, which has $2N − 2$ edges, can **tolerate the loss of any single edge** while remaining persistent. A wheel graph can also **tolerate the loss of any single vertex other than the central vertex** together with the associated edges leaving or entering the lost vertex, in the sense that persistence is retained for the remaining graph. A C${}^2$ graph with $N$ vertices, which has $2N$ edges, retains persistence with the **loss of any single edge**, or with the **loss of any single vertex** and its incident edges.

## Henneberg Sequence Theory and Persistent Graphs
The broad conclusion is that the technique can be applied, so long as the primitive operations are modified to **allow directed edges** in the graphs, and also a further primitive operation is introduced.

More than one operation is possible, with the simplest possible operation being **edge-reversal**, that is, **reversing the direction** of one edge arriving at a vertex that has $1$ or $2$ DoF.

::: warning Definition: degree of freedom(DoF)
In 2D, a vertex is said to have $2$, $1$, or $0$ DoF if it has $0,1$, or at least $2$ outgoing edges; each outgoing edge uses up $1$ DoF. A direct generalization applies in 3D, where an agent can have up to $3$ DoF.
:::

## Extension of the Persistence Concept to 3D Formations
In 3D, most of the consistence and persistence ideas described above carry through. However, these extensions involve the **behavior of subsets of agents**, as opposed to individual agents or vertices. For $3$ and indeed higher dimensions, the concept of **structural persistence** is required.

<figure>
   <img src="/frontiers_rigidity_1_4_structural.png" alt="Structural Persistence" width="100%" align="center">
   <figcaption> Figure 4: Persistence and structural persistence. According to the theoretical characterization of persistence, this 3D formation is persistent because it can be proved to be rigid and none of its agents has an out-degree larger than three. This formation, however, does not qualify as a persistent formation according to the intuitive meaning that we give to persistence. Agents 1 and 2 are indeed not responsible for the maintenance of any distance and can move freely. Suppose that agents 1 and 2 move in such a way that the distance between them changes. Then agents 3, 4, and 5 cannot simultaneously satisfy all of the constraints that they are responsible for, although each of them could individually satisfy its three constraints if the positions of all other agents remained fixed. This paradox is solved by introducing the concept of structural persistence, which, in addition to considering the behavior of each agent, considers the behavior of groups of agents. The formation depicted here is persistent but not structurally persistent.</figcaption>
</figure>

In 3D, checking structural persistence is trivial once persistence has been established. To illustrate structural persistence, Figure 4 depicts a 3D formation with an underlying directed graph, which is persistent since it is rigid and each agent has no more than three outgoing edges. However, agents 1 and 2 are unconstrained, **having no outgoing edges**, and so in principle can **move apart**, thus **destroying** the shape of the formation. Hence, despite the persistence property, this formation is not structurally persistent, and thus does not have a sensing and control architecture that allows retention of its shape

Every 3D graph that has no more than $3$ outgoing edges from every vertex is **constraint consistent**, while a graph can be checked for persistence by testing a certain collection of subgraphs for rigidity. If a directed graph is persistent, the graph can be checked for  structural persistence.

In particular, the graph is structurally persistent if it is **persistent** and there is at most $1$ vertex of the graph with **no outwardly directed edges**.

If a graph is **acyclic and persistent**, it has at most $1$ vertex with no outwardly directed edges. Because the persistence property requires that the **total number of DoF** summed across all vertices is $6$, and the **only** way this number can be achieved in an acyclic graph is by having $1$ vertex with $3$ DoF, $1$ vertex with $2$ DoF, $1$ vertex with $1$ DoF, and the remainder with $0$ DoF, it follows that there is at most $1$ vertex with no outwardly directed edges, and the graph is then structurally persistent.

## Operation with formations [1]
Various operations on formations can be contemplated. In particular, the concepts of **splitting**, **merging**, and **closing ranks** are defined for formations that are modeled using undirected graphs.

An application domain where such scenarios arise is **terrain surveillance** and **target localization** using a formation of aerial vehicles. The individual vehicles carry sensors performing tasks such as range determination, bearing determination, or time-difference-of-arrival determination.

- In this application, **acquiring and maintaining certain formation shapes** and hence rigidity is essential because of the need for well-established coordination as well as optimality of certain formation geometries for cooperative localization. Formation shape maintenance within a class of allowable shapes may also be required in scenarios such as avoidance of obstacle collision or of entry into no-fly zones; this may be achieved by **splitting**, and **merging** back the split formations once the obstacle or no-fly zone is passed.
- Formation shape adjustment may also be needed for restructuring (**closing ranks**) to **maintain rigidity** and **form an allowable shape** in the event of **loss** of one or more aerial vehicle agents, or for **addition** of one or more aerial vehicle agents during a mission to improve surveillance coverage.

Apart from rigidity preservation, the successful execution of these maneuvers requires detailed consideration of **agent dynamics** (since instantaneous changes of control strategy can produce undesired transient behavior), as well as inclusion of collision-avoidance protection

### Splitting
Consider a single rigid formation. Splitting refers to the division of the set of agents into **two subsets**, along with **suppression of the distance constraints** between agent pairs when the agents are in **different subsets**. Reasons for splitting include a **change of objective or obstacle avoidance**. See Figure 5 for an illustration of the problem.

<figure>
   <img src="/frontiers_rigidity_1_5_splitting.png" id="fig-15-splitting" alt="Formation Splitting"  width="100%" align="center">
   <figcaption> Figure 5: Formation splitting to avoid obstacles. Some distance constraints in (a) are removed (b) to separate the agents into two independent groups. The two formations obtained are not necessarily rigid, although rigidity can always be regained as in (c) by adding connections within each formation between agents that, in the original formation, are incident to the removed edges.</figcaption>
</figure>

In graph theory terms, the split yields two **separate subgraphs**, neither of which is guaranteed to be rigid. Introducing **additional distance constraints** in the separate subformations is thus required to **ensure rigidity** of each subformation separately. 

Additionally, we could consider **variations of the problem**. For example, we could assume that the starting formation is minimally rigid, we could consider 2D and 3D formations, and we could consider directed graph versions. We could also consider algorithm complexity, as well as the possibility of imposing computational constraints on individual agents to perform calculations on a decentralized basis for determining where additional distance constraints should be inserted. These problems are largely open.

### Merging
Consider two rigid formations. Merging requires the determination of **additional distance constraints** linking agent pairs with one agent drawn from each formation, such that the union of the agents of the two formations, along with the union of the distance constraints in the original formations and the new distance constraints, describes a single rigid formation. Figure 6 illustrates the problem.

<figure>
   <img src="/frontiers_rigidity_1_6_merging.png" alt="Formation Merging" width="100%" align="center">
   <figcaption> Figure 6: Formation merging. (a) Two distinct rigid formations are merged into the larger rigid formation (b) by inserting three interconnecting edges. At least three interconnecting edges are needed, and merging to secure a larger rigid formation can always be achieved using exactly three interconnecting edges. In that case, the formation obtained is rigid if and only if at least two distinct agents in each formation are incident to the new interconnecting edges.</figcaption>
</figure>

### Closing ranks
Consider a single rigid formation. Suppose that one agent is removed, and, consequently all distance constraints are lost between this agent and the remaining agents of the formation; see Figure 7. 

<figure>
   <img src="/frontiers_rigidity_1_7_closing_ranks.png" id="fig-17-closing_ranks" alt="Closing Ranks" width="100%" align="center">
   <figcaption> Figure 7: Closing ranks. In the rigid formation in (a), agent 1 and all associated links are lost, and new links (5,3) and (4,3) are inserted as in (b) to reestablish rigidity. Agents 6 and 7 are not affected by the process. Rigidity can always be recovered after loss of one or more agents by appropriately connecting agents that are adjacent in the original formation to the lost agent(s).</figcaption>
</figure>

The problem is to determine **where new distance constraints can be inserted to recover rigidity**. In addition, the closing ranks problem can be generalized to contemplate simultaneous removal of two or more agents from a formation, with the removal also of the associated distance constraints.

A technique is given below for dealing with the problems of splitting, merging and closing ranks.

### Technique for dealing with operations
One way to solve these problems depends on a significant modification of the **Henneberg sequence** and is based on a **minimal cover problem**. This minimal cover problem presents a graph that is **not rigid** and for which a minimum number of new edges must be introduced to render the graph generically rigid. The solution of the minimal cover problem can be applied to solve the problems of formation merging, splitting, and closing ranks.

Additionally, the splitting problem is actually a particular case of the closing ranks problem, since one subformation can regard the agents of the other subformation as the lost agents. Further, the closing ranks problem can be solved by introducing new edges between former neighbors of the lost vertices of the graph, i.e., by performing a **local repair** as illustrated in [Figure 7](#fig-17-closing_ranks). Therefore, in the splitting problem, new edges can be restricted to connecting pairs of those vertices in one subformation graph that were previously neighbors of vertices that ended up in the other subformation graph, as illustrated in [Figure 5](#fig-15-splitting).

The formation operations discussed above can also be contemplated for directed graphs

## Metavertices, rigid bodies, and Metaformation [1]
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

<figure>
   <img src="/frontiers_rigidity_1_8_merging.png" alt="Merging Persistent Graphs" width="100%" align="center">
   <figcaption> Figure 8: Merging persistent graphs. Two types of merging are illustrated, (a) leader-follower merging and (b) collaborative merging. In both cases, two persistent formations are merged into a larger persistent formation by inserting three directed interconnecting edges. For the obtained graph to be persistent, it is necessary to insert at least three edges and that the agents that these edges leave do not have an out-degree larger than two in the resulting formation. The formation is then persistent if and only if it is rigid. Under some conditions, alternative interconnecting edges are possible, but using these other possibilities is never necessary.</figcaption>
</figure>

Figure 8 illustrates merging two persistent 2D formations using directed edges. As with undirected graphs, three new edges incident on at least two agents in each formation can achieve the merging. To ensure persistence of the overall structure, the vertices left by these three new edges must have in the merged structure a **maximum out-degree** of $2$. This upper bound restricts the vertices at which outwardly directed edges must be added. In Figure 8(a), all the DoF of the merged formation end up associated with the upper subformation, which in a sense is a leader. The lower subformation is the follower.

For 3D formations, structural persistence of the merged formation is also desired. Requirements are set out in [ref](https://google.com "Rigidity and persistence for ensuring shape maintenance of multiagent meta-formations")

### Toward a More Systematic Theory
In 2D we have described a variation of Laman’s theorem describing the rigidity of a metaformation, obtained by connecting together metavertices or meta-agents. This result leads to the question of whether **the concept of a Henneberg sequence can be extended to metaformations**. Such a sequence could start with a single metavertex, or rigid formation, and involve the successive addition of meta-agents to the metaformation. Each addition would result in a metaformation that has the **minimal number of edges between metavertices** so as to guarantee rigidity of the overall metaformation. Indeed, such a construction is available. Analogues to the primitive operations of the standard Henneberg construction, namely, vertex addition and edge splitting, can be constructed. These operations are termed **metavertex addition** and **metaedge splitting**, respectively. See, for example, Figure 9. The construction can also be described by building on the results described in the previous section.

<figure>
   <img src="/frontiers_rigidity_1_9_meta_henn.png" alt="Meta-Henneberg's Method" width="100%" align="center">
   <figcaption> Figure 9: Merging three two-dimensional formations. Two possible ways to merge three rigid two-dimensional formations are illustrated. In the first step, G ′ is obtained by connecting G1 to G2 with three interconnecting edges. This operation is called meta-vertex addition. G3 can then be merged with G ′ using metavertex addition as in (a) or by means of meta-edge splitting as in (b). In the latter case, one of the edges connecting G1 to G2 is split into two parts, which are reconnected to an agent in G3. Two additional edges are then inserted to connect G3 to G ′.</figcaption>
</figure>

## References
> 1. *[Rigid graph control architectures for autonomous formations](https://ieeexplore.ieee.org/abstract/document/4653105)* by **D. O. Anderson** etc.;
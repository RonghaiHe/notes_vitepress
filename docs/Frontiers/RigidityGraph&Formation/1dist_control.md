# Formation Control
## 1 Introduction [1]

Consider a system of $n$ mobile agents where $\boldsymbol{q}_i \in \mathbb{R}^m$ is the **position** of the $i^\text{th}$ agent relative to an Earth-fixed coordinate frame, and $\boldsymbol{u}_i \in \mathbb{R}^m$ is the corresponding **control input**. In subsequent parts, $\boldsymbol{u}_i$ will be a velocity-, acceleration-, or actuator-level input depending on the mathematical model used to describe the agent motion.

Let the **desired** formation for the agents be represented by an infinitesimally and minimally rigid framework $\mathcal{F}^∗ = (\mathcal{G}^∗, \boldsymbol{q}^∗)$ where $\mathcal{G}^∗ = (\mathcal{V}^∗, \mathcal{E}^∗)$ is the formation graph, $\dim(\mathcal{V}^∗) = n, \dim(\mathcal{E}^∗) = l$, and $\boldsymbol{q}^∗ = [\boldsymbol{q}^∗_1, \ldots , \boldsymbol{q}^∗_n]$. The **constant** desired distance between agents $i$ and $j$ is given by

<span id="eq-1.1"></span>

$$
d_{ij} = \|\boldsymbol{q}_i^* - \boldsymbol{q}_j^*\| > 0, \quad i,j\in\mathcal{V}^*. \tag{1.1}
$$

In practice, the geometric shape/structure of the desired formation is dictated by the mission to be accomplished by the agents. When translating the desired shape into a framework, one needs to include enough edges to ensure that $\mathcal{F}^∗$ is indeed **infinitesimally and minimally rigid**.

The actual formation of the agents is represented by the framework $\mathcal{F}(t) = (\mathcal{G}_s, \boldsymbol{q}(t))$ where $\mathcal{G}_s$ represents the sensor graph and $\boldsymbol{q} = [\boldsymbol{q}_1, \ldots , \boldsymbol{q}_n]$. It is important to clarify the difference between the formation graph $\mathcal{G}^∗$ and the sensor graph $\mathcal{G}_s$, which in general need not be the same.
- $\mathcal{G}^∗$ indicates the **minimum number of inter-agent distances** that need to be controlled for the desired formation to be successfully reached. 
- $\mathcal{G}_s$ indicates the agent pairs that **can sense** and/or communicate with each other.

We make the following assumptions regarding the desired and actual formations:

> [!info] Assumption 1
The set where the agents achieve the desired formation is nonempty, i.e., there exist $\boldsymbol{q}^∗$ such that $r_\mathcal{G}(\boldsymbol{q}^∗) = \boldsymbol{d}$ where $\boldsymbol{d} = [\ldots, d^2_{ij}, \ldots] \in \mathbb{R}^l$.


> [!info] Assumption 2
> The formation and sensor graphs are the same, i.e., $\mathcal{G}_s = \mathcal{G}^∗$. Furthermore, inter-agent connectivity is always maintained in the sense that agent $i$ is always within the sensing/communication range of agent $j$, $\forall j \in \mathcal{N}_i(\mathcal{E}^∗)$. In other words, $\mathcal{G}^∗$ is **fixed**.


Connectivity maintenance prevents the occurrence of flex ambiguities since temporary loss of edges cannot happen.

> [!info] Assumption 3
At $t = 0$, the agents do not satisfy the desired inter-agent distance constraints, i.e., $\|\boldsymbol{q}_i(0) − \boldsymbol{q}_j(0)\| =\neq d_{ij}, \quad i, j \in \mathcal{V}^*$.


> [!info] Assumption 4
The only position information being measured is the **relative position** of agent pairs in $\mathcal{E}^∗, \boldsymbol{q}_i − \boldsymbol{q}_j, (i, j) \in \mathcal{E}^∗$^[The control could also be a function of other, nonposition-related variables depending on the agent model and formation problem being solved.]. That is, the global position of the agents, $\boldsymbol{q}_i, i = 1, \ldots , n$, are not available to the control.


We will deal with three types of control problems: 
- **Formation Acquisition**
- **Formation Maneuvering**
- **Target Interception**

> [!info] Problem 1: Formation Acquisition
> The goal is for the agents to acquire and maintain a pre-defined geometric shape in space. The control objective for formation acquisition, which serves as the common, primary objective for the other two problems, can be mathematically described as to design $\boldsymbol{u}_i$ such that
>
> <span id="eq-1.2"></span>
> 
> $$
\mathcal{F}(t)\to\operatorname{Iso}(\mathcal{F}^*) \text{ as }t\to\infty. \tag{1.2}
> $$
> which is equivalent to
>
> <span id="eq-1.3"></span>
> 
> $$
\|\boldsymbol{q}_i(t) - \boldsymbol{q}_j(t)\|\to d_{ij} \text{ as } t\to\infty, \quad i,j\in\mathcal{V}^*. \tag{1.3}
> $$

Since only the inter-agent distances are to be directly controlled, the actual formation can converge to any isometry of $\mathcal{F}^∗$. That is, the meaning is that the formation will converge to one framework in the set $\operatorname{Iso}(\mathcal{F}^*)$ with the specific one being determined by the initial position of the agents, $\boldsymbol{q}_i(0), i = 1, \ldots, n$.

> [!info] Problem 2: Formation Maneuvering
> The agents are required to simultaneously **acquire a formation** (i.e., satisfy [$(1.2)$](#eq-1.2)) and **maneuver cohesively** according to some pre-defined trajectory. Thus, the secondary objective is
>
> <span id="eq-1.4"></span>
>
> $$
\dot{\boldsymbol{q}}_i(t) - \boldsymbol{v}_{di}(t) \to \mathbf{0} \text{ as }t\to\infty, \quad i=1,\ldots, n. \tag{1.4}
> $$
> where $\boldsymbol{v}_{di} \in \mathbb{R}^3$ represents the **desired rigid body velocity** for the swarm of agents. That is, the fixed-shape, desired formation evolves in space as a virtual rigid body undergoing translation and/or rotation.

In practice, the selection of $\boldsymbol{v}_{di}$ is mission-dependent. For example, it could be related to a path planning algorithm that provides an optimal solution to the coverage problem where agents cooperatively maximize the coverage area of a given mission under certain time and/or fuel consumption constraints.

When $\boldsymbol{v}_{di}$ **only includes a translation velocity**, the formation maneuvering problem is also called **flocking**. For the case where $\boldsymbol{v}_{di}$ has a rotational component, we assign the $n^\text{th}$ agent (without lost of generality) to be the “leader” while the remaining agents are “followers”. This assignment is for the sole purpose of one agent serving as a reference point for the axis of rotation of the virtual rigid body. Therefore, $\mathcal{F}^∗$ should be constructed with the following additional conditions:
- $\boldsymbol{q}^*_n\in\operatorname{conv}\{\boldsymbol{q}_1^*, \ldots,\boldsymbol{q}_{n-1}^*\}$.
- $(i,n)\in\mathcal{E}^*, i=1,\ldots,n-1$, i.e., there is an edge between each follower and  the leader.

<figure>
   <img src="./images/1dist_control_1-example.JPG" alt="1-example" id="fig-1.1" width="100%" align="center">
   <div align="center"><figcaption> Figure 1.1: Example of the construction of $F^∗$: a tetrahedron formation where L stands for leader and F for follower.</figcaption></div>
</figure>

An example of $\mathcal{F}^∗$ is illustrated by the 3D formation in [Figure 1.1](#fig-1.1) where the leader is located in the interior of the tetrahedron. **The axis of rotation passes through the leader**, which is inside the tetrahedron. Since $n = 5$, we need $3n − 6 = 9$ for the framework to be **minimally rigid**. The solid lines indicate edges that form the faces of the tetrahedron while the dashed lines are edges in its interior. Notice that edge $(1, 4)$ is not necessary.

The association of a leader agent (instead of a virtual leader) with the axis of rotation is done for convenience (not necessity) since the leader’s relative position to the followers can be measured and it will not have to undergo any rotation. Note that if one uses a virtual leader, its location would have to be known in order to calculate its position relative to the agents (see [$(3)$](#eq-3) in [Distance](./1distance.md#rigidity-theory-12)). This in turn would require extra measurements and/or calculations.

> [!info] Problem 3: Target Interception
> The agents should intercept and surround a (possibly evading) moving target with a pre-defined formation. Here, we will also use the leader–follower approach by taking the $n^\text{th}$ agent to be the leader while the remaining agents are followers. The control protocol will consist of:
> 1. Selecting $\mathcal{F}^∗$ such that $\boldsymbol{q}^*_n\in\operatorname{conv}\{\boldsymbol{q}_1^*, \ldots,\boldsymbol{q}_{n-1}^*\}$ (Unlike formation maneuvering with rotation, we do not need the second condition for target interception)
> 2. The leader chasing the target
> 3. The followers tracking the leader while maintaining the desired formation.
> Thus, if $\boldsymbol{q}_T \in \mathbb{R}^m$ denotes the **target position**, the secondary objective for this problem is that $\boldsymbol{q}_T(t)$ approach $\operatorname{conv}\{\boldsymbol{q}_1(t), \boldsymbol{q}_2(t), \ldots, \boldsymbol{q}_{n−1}(t)\}$ as time evolves, which (with abuse of notation) we express as
>
> <span id="eq-1.5"></span>
>
> $$
\boldsymbol{q}_T(t)\in\operatorname{conv}\{\boldsymbol{q}_1(t), \boldsymbol{q}_2(t), \ldots, \boldsymbol{q}_{n−1}(t)\}\text{ as }t\to\infty. \tag{1.5}
> $$

Before beginning with the control design, some theorem and corollary statements will be made without proof.

> [!caution] Theorem 1.1 (Originally from [1] of Theorem C.2)
> Let $V: D \times \mathbb{R}_{\geqslant 0} \rightarrow \mathbb{R}$ be a continuously differentiable function such that
> 
> $$
\begin{aligned}
& U_1(x) \leq V(x, t) \leq U_2(x) \\
& \dot{V}=\frac{\partial V}{\partial t}+\frac{\partial V}{\partial x} f(x, t) \leq-U_3(x)
\end{aligned}
> $$
> 
> for all $t \geqslant 0$ and for all $x \in D$, where $U_i(x), i=1,2,3$ are continuous positive definite functions on $D$. Then, $x_e=0$ is uniformly asymptotically stable.

<span id="corollary-1.1"></span>

> [!tip] Corollary 1.1 (Originally from [1] of Corollary C.1)
> If $U_i(x)=c_i\|x\|^p, i=1,2,3$ where $c_i, p>0$ in Theorem 1.1, then $x_e=0$ is **exponentially stable**.

Input-to-state stability bridges the gap between the notions of Lyapunov stability and input–output stability by quantifying the effects of both initial conditions and external (control or disturbance) inputs on the system state.

> [!warning] Definition: Input-to-State Stability
> A dynamical system $\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x}, \boldsymbol{u}), \quad \boldsymbol{x}(0)=\boldsymbol{x}_0$ with $\boldsymbol{f}: \mathbb{R}^n \times \mathbb{R}^m \rightarrow \mathbb{R}^n$ is said to be **input-to-state stable** if there exist a class $\mathcal{KL}$ function $\beta$ and a class $\mathcal{K}$ function $\alpha$ such that, for any $\boldsymbol{x}_0$ and any $u(t)\in\mathcal{L}_\infty$, the solution $\boldsymbol{x}(t)$ exists for all $t\geqslant 0$ and satisfies
> $$
\|x(t)\| \leqslant \beta(\|x_0\|, t) + \alpha(\sup_{0\leqslant\tau \leqslant t} \|u(\tau)\|).
> $$

The above inequality has several implications.
- For any bounded input, the state is bounded.
- As $t \to\infty$, the state is ultimately bounded by function $\alpha$.
- If $\boldsymbol{u}(t) \to \mathbf{0}$ as $t \to\infty$, so does $\boldsymbol{x}(t)$.


<span id="theorem-1.2"></span>

> [!caution] Theorem 1.2 (Originally from [1] of Theorem C.4)
> Consider that $f(\boldsymbol{x}, \boldsymbol{u})$ in $\dot{\boldsymbol{x}=\boldsymbol{f}(\boldsymbol{x}, \boldsymbol{u})}, \quad \boldsymbol{x}(0)=\boldsymbol{x}_0$ is locally Lipschitz in $(\boldsymbol{x}, \boldsymbol{u})$ in some neighborhood of $(\boldsymbol{x}=0, \boldsymbol{u}=0)$. Then, the system is locally input-to-state stable if and only if the unforced system $\dot{\boldsymbol{x}}=\boldsymbol{f}(\boldsymbol{x}, 0)$ has a locally asymptotically stable equilibrium point at the origin.

<span id="theorem-1.3"></span>

> [!caution] Theorem 1.3 (Originally from [1] of Theorem C.5)
> Consider the interconnected system
>
> <span id="eq-1.6"></span>
> 
> $$
\begin{aligned}
& \Sigma_1: \dot{x}=f(x, y) \\
& \Sigma_2: \dot{y}=g(y) .
\end{aligned} \tag{1.6}
> $$
>
> If subsystem $\Sigma_1$ with input $y$ is locally input-to-state stable and $y=0$ is a locally asymptotically stable equilibrium point of subsystem $\Sigma_2$, then $[x, y]=0$ is a locally asymptotically stable equilibrium point of the interconnected system.

<span id="theorem-1.4"></span>

> [!caution] Theorem 1.4 (Originally from [1] of Theorem C. 6)
> If $0 \in K[f](0, t)$ in a region $Q \supset B(0, \delta) \times\left[t_0, \infty\right)$ and $V$ : $D \times \mathbb{R}_{\geq 0} \rightarrow \mathbb{R}$ is a regular function satisfying $V(0, t)=0$,
> 
> $$
\alpha_1(\|x\|) \leq V(x, t) \leq \alpha_2(\|x\|) \quad \forall x \neq 0
> $$
> 
> and
> 
> $$
\dot{V} \stackrel{\text { a.e. }}{\in} \underset{\xi \in \partial V(x, t)}{\cap} \xi^{\top}\left[\begin{array}{c}
K[f](x, t) \\
1
\end{array}\right] \leq-\alpha_3(\|x\|)
> $$
> 
> in $Q$ where $\alpha_i(\cdot), i=1,2,3$ are class $\mathcal{K}$ functions, $K[f](x, t)$ is an upper semi-continuous, nonempty, compact, convex-valued map on $D$ defined as
> 
> $$
K[f](x,t) := \underset{\delta>0}{\cap}\underset{\mu N=0}{\cap} \overline{\operatorname{co}}f(B(x, \delta) \backslash N, t),
> $$
>
> where $\underset{\mu N=0}{\cap}$ denotes the intersection over all sets $N$ of Lebesgue measure zero, $\overline{\operatorname{co}}$ is the convex closure, and $B$ was defined as 
>
> $$
B(\bar{\boldsymbol{x}},r) = \{\boldsymbol{x}\in\mathbb{R}^n: \|\boldsymbol{x} - \bar{\boldsymbol{x}}\| < r\}
> $$
>
> represents the "ball" of radius $r$ centered at $\bar{\boldsymbol{x}}$.
> 
> Then $x=0$ is a **uniformly asymptotically stable equilibrium point** of system $\dot{\boldsymbol{x}}=\boldsymbol{f}(\boldsymbol{x}, t), \quad \boldsymbol{x}(t_0)=\boldsymbol{x}_0$ where $\boldsymbol{f}: D \times \mathbb{R}_{\geq 0} \rightarrow \mathbb{R}^n$ is discontinuous in ${\boldsymbol{x}}$ and piecewise continuous in $t$ on $D \times \mathbb{R}_{\geq 0}$.

## 2 Single-Integrator Model [1]
This section will set the foundation for the formation control designs. We use here a very simple model for the motion of the agents known as the **single-integrator model**, which only includes two variables: **position and velocity**. This is a simplified kinematic model for omnidirectional robots (e.g., mobile robots with Swedish wheels). Specifically, we consider a system of $n$ agents governed by the first-order differential equation

<span id="eq-2.1"></span>

$$
\dot{\boldsymbol{q}}_i = \boldsymbol{u}_i, \quad i = 1, \ldots, n. \tag{2.1}
$$

where $\boldsymbol{q}_i \in \mathbb{R}^m$ is the position and $\boldsymbol{u}_i \in \mathbb{R}^m$ is the **velocity-level control input** of the $i^\text{th}$ agent with respect to an Earth-fixed coordinate frame. The name “single integrator” originates from the fact that the transfer function matrix of [$(2.1)$](#eq-2.1) is

$$
G_i(s) = \frac{1}{s}I_m \tag{2.2}
$$

where $s$ is the Laplace variable, i.e., the inputs and outputs are separated by one integrator.

Formation controllers based on [$(2.1)$](#eq-2.1) are called **high-level control laws** because they are often embedded in controllers designed for more refined agent models. Therefore, the control laws introduced in this section will form the basis for all subsequent designs.

### Formation Acquisition
We begin with the formation acquisition problem defined in [Section 1](#1-introduction-1). Given [$(2.1)$](#eq-2.1), we seek to design $\boldsymbol{u}_i = \boldsymbol{u}_i(\boldsymbol{q}_i − \boldsymbol{q}_j, d_{ij}), i = 1, \ldots , n$ and $j ∈ \mathcal{N}_i(\mathcal{E}^∗)$, where $\mathcal{N}_i(\cdot)$ was defined in [Preliminary of Graph Theory](./1distance.md#preliminary-graph-theory-45) to achieve the control objective described by [$(1.2)$](#eq-1.2) (or equivalently [$(1.3)$](#eq-1.3)).

It is appropriate at this point to elaborate on an issue mentioned at the end of [Section of framework ambiguities](./1distance.md#framework-ambiguities). The inputs $\boldsymbol{u}_i, i = 1, \ldots , n$ will directly control the distances $\|\boldsymbol{q}_i − \boldsymbol{q}_j\|, (i, j) \in \mathcal{E}^∗$. Therefore, they can only directly ensure that

<span id="eq-2.3"></span>

$$
\|\boldsymbol{q}_i(t) − \boldsymbol{q}_j(t)\|\to d_{ij}\text{ as }t\to\infty, \quad (i,j)\in\mathcal{E}^*, \tag{2.3}
$$

which is equivalent to

$$
r_\mathcal{G}(\boldsymbol{q}(t))\to r_\mathcal{G}(\boldsymbol{q}^*) = \boldsymbol{d}\text{ as }t\to\infty. \tag{2.4}
$$

Note that [$(2.3)$](#eq-2.3) is different than [$(1.3)$](#eq-1.3) since it is only defined for $(i, j) \in \mathcal{E}^∗$ while [$(1.3)$](#eq-1.3) is defined for all $i, j \in \mathcal{V}^∗$. This is potentially problematic since (with abuse of notation) $r_\mathcal{G}(\operatorname{Iso}(\mathcal{F}^∗)) = r_\mathcal{G}(\operatorname{Amb}(\mathcal{F}^∗))$. Therefore, the control scheme will need to avoid the possibility that $\mathcal{F}(t) \to \operatorname{Amb}(\mathcal{F}^∗)$ as $t \to \infty$. This will be accomplished by initializing the agents **sufficiently close to** $\operatorname{Iso}(\mathcal{F}^∗)$ in the sense that $\operatorname{dist}(\boldsymbol{q}(0), \operatorname{Iso}(\mathcal{F}^∗)) < \operatorname{dist}(\boldsymbol{q}(0), \operatorname{Amb}(\mathcal{F}^∗))$.

To simplify the notation in the following derivations, we define the relative position of two agents as

<span id="eq-2.5"></span>

$$
\tilde{\boldsymbol{q}}_{ij} = \boldsymbol{q}_i - \boldsymbol{q}_j. \tag{2.5}
$$

and let $\tilde{\boldsymbol{q}} = [\ldots , \tilde{\boldsymbol{q}}_{ij}, \ldots] \in \mathbb{R}^{ml}, (i, j) \in \mathcal{E}^∗$ with the same ordering of terms as the edge function $r_\mathcal{G}(\cdot)$. The distance error is given by

<span id="eq-2.6"></span>

$$
e_{ij} = \|\tilde{\boldsymbol{q}}_{ij}\| - d_{ij}. 
\tag{2.6}
$$

Note that [$(1.3)$](#eq-1.3) is equivalent to $e_{ij}(t) \to 0$ as $t \to\infty, i, j \in \mathcal{V}^∗$. The distance error dynamics can be derived from [$(2.6)$](#eq-2.6) and [$(2.1)$](#eq-2.1) as

<span id="eq-2.7"></span>

$$
\begin{align*}
   \dot{e}_{ij} &= \frac{\mathrm{d}}{\mathrm{d}t}\left(\sqrt{\tilde{\boldsymbol{q}}_{ij}^\top\tilde{\boldsymbol{q}}_{ij}}\right) \\
   &= (\tilde{\boldsymbol{q}}_{ij}^\top\tilde{\boldsymbol{q}}_{ij})^{-\frac12}\tilde{\boldsymbol{q}}_{ij}^\top(\boldsymbol{u}_i - \boldsymbol{u}_j) \\
   &= \frac{\tilde{\boldsymbol{q}}_{ij}^\top(\boldsymbol{u}_i - \boldsymbol{u}_j)}{e_{ij} + d_{ij}}. \tag{2.7}
\end{align*}
$$

Let

$$
z_{ij} = \|\tilde{\boldsymbol{q}}_{ij}\|^2 - d_{ij}^2, \tag{2.8}
$$

which can be rewritten as

<span id="eq-2.9"></span>

$$
z_{ij} = e_{ij}(e_{ij} + 2d_{ij}) \tag{2.9}
$$

using [$(2.6)$](#eq-2.6). Given that $\|\tilde{\boldsymbol{q}}_{ij}\| \geqslant 0$ (or equivalently, $e_{ij} \geqslant −d_{ij}$), it is not difficult to see that $z_{ij} = 0$ if and only if $e_{ij} = 0$. We now introduce the following **Lyapunov function candidate**

<span id="eq-2.10"></span>

$$
W(\boldsymbol{e}) = \frac14\sum_{(i,j)\in\mathcal{E}^*}z_{ij}^2 = \frac14 \boldsymbol{z}^\top\boldsymbol{z} \tag{2.10}
$$

where $\boldsymbol{e} = [\ldots , e_{ij}, \ldots] \in \mathbb{R}^l$ and $\boldsymbol{z} = [\ldots, z_{ij}, \ldots] \in \mathbb{R}^l, (i, j) \in \mathcal{E}^∗$ are ordered as $r_\mathcal{G}$. This function is **positive definite** in $\boldsymbol{e}$ and its level surfaces, $W (\boldsymbol{e}) = c$ for some $c > 0$, are **closed** since $e_{ij} \geqslant −d_{ij}$. The time derivative of [$(2.10)$](#eq-2.10) along [$(2.7)$](#eq-2.7) is given by

<span id="eq-2.11"></span>

$$
\dot{W} = \sum_{(i,j)\in\mathcal{E}^*}e_{ij}(e_{ij}+2d_{ij})\tilde{\boldsymbol{q}}^\top_{ij}(\boldsymbol{u}_i - \boldsymbol{u}_j). \tag{2.11}
$$

Using definition of rigidity matrix $R_\mathcal{D}$ i.e., [$(6)$](#eq-6) in [Infinitesimal Rigidity](./1distance.md#infinitesimal-rigidity), and [$(2.9)$](#eq-2.9), [$(2.11)$](#eq-2.11) can be conveniently written as[^2.1]

<span id="eq-2.12"></span>

$$
\dot{W} = \boldsymbol{z}^\top R_\mathcal{D}(\tilde{\boldsymbol{q}})\boldsymbol{u} \tag{2.12}
$$

where $\boldsymbol{u} = [\boldsymbol{u}_1, \ldots, \boldsymbol{u}_n] \in \mathbb{R}^{mn}$ is the stacked vector of control inputs. Before presenting the main result, we introduce a lemma that establishes the **relationship** between Corollary of Theorem 2 in [Graph Rigidity](./1distance.md#framework-ambiguities) and the level surfaces of the Lyapunov function candidate.

<span id="lemma-2.1"></span>

> [!tip] Lemma 2.1
> For **nonnegative** constants $c$ and $\delta$, the level set $W (e) \leqslant c$ is equivalent to $\Psi(\mathcal{F}, \mathcal{F}^∗) \leqslant \delta$ where $\Psi$ and $W$ were defined in Corollary of Theorem 2 in [Graph Rigidity](./1distance.md#framework-ambiguities) and [$(2.10)$](#eq-2.10), respectively.

**Proof**:
<details>
    <summary> Details of Proof </summary>

First, from the definition of $\Psi(\cdot,\cdot)$ in Corollary of Theorem 2 in [Graph Rigidity](./1distance.md#framework-ambiguities), [$(1.1)$](#eq-1.1), [$(2.5)$](#eq-2.5), [$(2.6)$](#eq-2.6), we have that

<span id="eq-2.13"></span>

$$
\begin{align*}
   \Psi(\mathcal{F},\mathcal{F}^*) &= \sum_{(i,j)\in\mathcal{E}^*}(\|\boldsymbol{q}_i - \boldsymbol{q}_j\| - \|\boldsymbol{q}_i^* - \boldsymbol{q}_j^*\|)^2 \\
   &= \sum_{(i,j)\in\mathcal{E}^*}(\|\boldsymbol{q}_i - \boldsymbol{q}_j\| - d_{ij})^2 \\
   &= \sum_{(i,j)\in\mathcal{E}^*} e_{ij}^2 \tag{2.13}
\end{align*}
$$

From [$(2.10)$](#eq-2.10), we know $W (e) \leqslant c$ implies that $e_{ij}, (i, j) \in \mathcal{E}^*$ is bounded. This  boundedness along with [$(2.13)$](#eq-2.13) implies $\Psi(\mathcal{F}, \mathcal{F}^*) \leqslant \delta$ where $\delta$ is some nonnegative constant. Now, given $\Psi(\mathcal{F}, \mathcal{F}^*) \leqslant \delta$, it follows from [$(2.13)$](#eq-2.13) that $e_{ij}$ is  bounded for $(i, j) \in \mathcal{E}^*$. This implies $z_{ij}, (i, j) \in \mathcal{E}^*$ is bounded, and $W (e) \leqslant c$ where $c$ is some nonnegative constant. Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

The control law for solving the formation acquisition problem is given in the following theorem. Its structure is based on [$(2.12)$](#eq-2.12) and Lyapunov stability theory. Specifically, the goal is to make the time derivative of the Lyapunov function candidate **negative definite**.

<span id="theorem-2.1"></span>

> [!caution] Theorem 2.1
> Consider the formation $\mathcal{F}(t)=\left(\mathcal{G}^{*}, \boldsymbol{q}(t)\right)$, and let the initial conditions of the error dynamics be such that $\boldsymbol{e}(0) \in \Omega_{1} \cap \Omega_{2}$ where
>
> $$
\begin{align*}
& \Omega_{1}=\left\{\boldsymbol{e} \in \mathbb{R}^{l} \mid \Psi\left(\mathcal{F}, \mathcal{F}^{*}\right) \leqslant \delta\right\}, \\
& \Omega_{2}=\left\{\boldsymbol{e} \in \mathbb{R}^{l} \mid \operatorname{dist}\left(\boldsymbol{q}, \operatorname{Iso}\left(\mathcal{F}^{*}\right)\right)<\operatorname{dist}\left(\boldsymbol{q}, \operatorname{Amb}\left(\mathcal{F}^{*}\right)\right)\right\}, \tag{2.14}
\end{align*}
> $$
>
> and $\delta$ is a sufficiently small positive constant. The control law[^2.2]
>
> <span id="eq-2.15"></span>
> 
> $$
\begin{equation*}
\boldsymbol{u}=\boldsymbol{u}_{a}:=-k_{v} R^{\top}_\mathcal{D}(\tilde{\boldsymbol{q}}) \boldsymbol{z}, \tag{2.15}
\end{equation*}
> $$
>
> where $k_{v}>0$ is a user-defined control gain, renders $\boldsymbol{e}=0$ exponentially stable and ensures [$(1.2)$](#eq-1.2) is satisfied.

**Proof**:
<details>
    <summary> Details of Proof </summary>

Given that $\mathcal{F}^{*}$ and $\mathcal{F}(t)$ have the same number of edges and that $\mathcal{F}^{*}$ is minimally rigid by design, then $\mathcal{F}(t)$ is minimally rigid for all $t \geqslant 0$. Substituting [$(2.15)$](#eq-2.15) into [$(2.12)$](#eq-2.12) yields

$$
\begin{equation*}
\dot{W}=-k_{v} \boldsymbol{z}^{\top} R_\mathcal{D}(\tilde{\boldsymbol{q}}) R_\mathcal{D}^{\top}(\tilde{\boldsymbol{q}}) \boldsymbol{z} . \tag{2.16}
\end{equation*}
$$

Since $\mathcal{F}^{*}$ is infinitesimally rigid, we know from Corollary of Theorem 2 in [Graph Rigidity](./1distance.md#framework-ambiguities) that $\mathcal{F}(t)$ is infinitesimally rigid for $\boldsymbol{e}(t) \in \Omega_{1}$. Therefore, we know $\mathcal{F}(t)$ is infinitesimally and minimally rigid for $\boldsymbol{e}(t) \in \Omega_{1}$, so we can invoke Corollary 1 in [Minimal Rigidity](./1distance.md#minimal-rigidity) to state

<span id="eq-2.17"></span>

$$
\begin{equation*}
\dot{W} \leqslant-k \lambda_{\min }\left(R_\mathcal{D} R_\mathcal{D}^{\top}\right) \boldsymbol{z}^{\top} \boldsymbol{z}=-4 k \lambda_{\min }\left(R_\mathcal{D} R_\mathcal{D}^{\top}\right) W \quad \text { for } \quad \boldsymbol{e}(t) \in \Omega_{1} \tag{2.17}
\end{equation*}
$$

where [$(2.10)$](#eq-2.10) was used. From [$(2.17)$](#eq-2.17), we know that $\dot{W}(t) \leqslant 0$ for all $t \geqslant 0$; hence, $W(t)$ is **nonincreasing** for all $t \geqslant 0$. Then, since $\boldsymbol{e}(t) \in \Omega_{1}$ is equivalent to $\boldsymbol{e}(t) \in\left\{\boldsymbol{e} \in \mathbb{R}^{3 n} \mid W(\boldsymbol{e}) \leqslant c\right\}$ from [Lemma 2.1](#lemma-2.1), a **sufficient condition** for [$(2.17)$](#eq-2.17) is given by

<span id="eq-2.18"></span>

$$
\begin{equation*}
\dot{W} \leqslant-4 k \lambda_{\min }\left(R_\mathcal{D} R_\mathcal{D}^{\top}\right) W \quad \text { for } \quad \boldsymbol{e}(0) \in \Omega_{1} . \tag{2.18}
\end{equation*}
$$

From the form of [$(2.18)$](#eq-2.18) and the fact that $W$ is positive definite in $\boldsymbol{e}$, we can invoke [Corollary 1.1](#corollary-1.1) to conclude that $\boldsymbol{e}=0$ is exponentially stable for $\boldsymbol{e}(0) \in \Omega_{1}$. Given that $\boldsymbol{e}$ is only defined for $(i, j) \in \mathcal{E}^{*}$, the exponential stability of $\boldsymbol{e}=0$ implies that $\mathcal{F}(t) \rightarrow \operatorname{Iso}\left(\mathcal{F}^{*}\right)$ or $\mathcal{F}(t) \rightarrow \operatorname{Amb}\left(\mathcal{F}^{*}\right)$ as $t \rightarrow \infty$. If we choose $\boldsymbol{e}(0) \in \Omega_{1} \cap \Omega_{2}$, we have from [$(2.14)$](#eq-2.14) that

<span id="eq-2.19"></span>

$$
\begin{equation*}
\operatorname{dist}\left(\boldsymbol{q}(0), \operatorname{Iso}\left(\mathcal{F}^{*}(0)\right)\right)<\operatorname{dist}\left(\boldsymbol{q}(0), \operatorname{Amb}\left(\mathcal{F}^{*}(0)\right)\right) . \tag{2.19}
\end{equation*}
$$

Due to [$(2.19)$](#eq-2.19), the energy-like function $W(t)$ would need to increase for a period of time for $\mathcal{F}(t) \rightarrow \operatorname{Amb}\left(\mathcal{F}^{*}\right)$ as $t \rightarrow \infty$, which is a **contradiction** since [$(2.18)$](#eq-2.18) establishes that $W(t)$ is nonincreasing for all $t \geqslant 0$. Therefore, we know $\mathcal{F}(t) \rightarrow \operatorname{Iso}\left(\mathcal{F}^{*}\right)$ as $t \rightarrow \infty$ for $\boldsymbol{e}(0) \in \Omega_{1} \cap \Omega_{2}$. This argument is conceptually illustrated by [Figure 2.1](#fig-2.1), where the ball, representing $\mathcal{F}(t)$, would have to overcome the energy barrier to reach $\operatorname{Amb}\left(\mathcal{F}^{*}\right)$. Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

<figure>
   <img src="./images/1dist_control_2-energy.JPG" alt="2-energy" id="fig-2.1" width="100%" align="center">
   <div align="center"><figcaption> Figure 2.1: Energy landscape showing the two equilibrium points, Iso(\mathcal{F}^{*}) and Amb(\mathcal{F}^{*})$, at the bottom of each well.</figcaption></div>
</figure>

The initial condition $\boldsymbol{e}(0) \in \Omega_{1} \cap \Omega_{2}$ in [Theorem 2.1](#theorem-2.1) is a sufficient condition for the actual formation $\mathcal{F}(t)$ to
1. Remain infinitesimally rigid for all time and
2. Be closer to a framework in $\operatorname{Iso}\left(\mathcal{F}^{*}\right)$ at $t=0$ than to one in $\operatorname{Amb}\left(\mathcal{F}^{*}\right)$ in order to avoid converging to an ambiguous framework.

The former constraint is satisfied by $\boldsymbol{e}(0) \in \Omega_{1}$ while the latter is satisfied by $\boldsymbol{e}(0) \in \Omega_{2}$. The set $\Omega_{1} \cap \Omega_{2}$ exists because it is always possible to select $\mathcal{F}(0)$ sufficiently close to a framework in $\operatorname{Iso}\left(\mathcal{F}^{*}\right)$.

The control [$(2.15)$](#eq-2.15) can be expressed element-wise as

<span id="eq-2.20"></span>

$$
\begin{equation*}
u_{i}=-k_{v} \sum_{j \in \mathcal{N}_{i}\left(\mathcal{E}^{*}\right)} \tilde{\boldsymbol{q}}_{i j} \boldsymbol{z}_{i j}, \quad i=1, \ldots n, \tag{2.20}
\end{equation*}
$$

which is only a function of $\tilde{\boldsymbol{q}}_{i j}$ and $d_{i j}$ for $(i, j) \in \mathcal{E}^{*}$. Thus, the control law is **decentralized** since it only requires the $i^\text{th}$ agent to measure its relative position to neighboring agents.

Notice that each individual term of the summation in [$(2.20)$](#eq-2.20) is a vector whose direction is along $\tilde{\boldsymbol{q}}_{i j}$. If all $n$ agents are positioned collinearly at $t=0$, the control input of each one will necessarily be **directed along the line**. As a result, the agents will be stuck in a collinear formation and will never converge to the desired formation. In other words, the collinear formation is an **invariant set**. However, if at least one agent is not initially collinear with the others, the agents will not necessarily remain collinear because the edges between these agents and the noncollinear ones will create **control components whose directions are not parallel to the line**.

The stability result of [Theorem 2.1](#theorem-2.1) guarantees that the desired formation is acquired up to rotation and translation. In other words, the formation acquisition controller does not regulate the formation to a pre-defined global location in space. This is a reflection of the facts that $\boldsymbol{u}_{i}$ is not a function of $\boldsymbol{q}_{i}$ but only of the relative positions $\tilde{\boldsymbol{q}}_{i j},(i, j) \in \mathcal{E}^{*}$ and that the control objective is to regulate $\left\|\tilde{q}_{i j}\right\|$.

Since we are only concerned with the inter-agent distances, any coordinate frame can be used to implement $\boldsymbol{u}_{i}$. That is, although the above analysis was done with the variables defined with respect to a common, fixed coordinate frame for convenience, [$(2.20)$](#eq-2.20) can be implemented in practice with respect to the $i^\text{th}$ agent's own local coordinate frame. This means that the agents do not need to have a common sense of orientation and [$(2.20)$](#eq-2.20) is rotationally invariant. To see this, let $\mathcal{F}_{0}$ and $\mathcal{F}_{i}$ denote the Earth-fixed coordinate frame and the local coordinate frame of the $i^\text{th}$ agent, respectively (see [Figure 2.2](#fig-2.2)). If $\mathcal{R}_{i}^{0} \in \mathbb{R}^{m}$ denotes the rotation matrix representing the orientation of $\mathcal{F}_{i}$ with respect to $\mathcal{F}_{0}$, we have that

$$
\begin{aligned}
& \tilde{\boldsymbol{q}}_{i j}:=\tilde{\boldsymbol{q}}_{i j}^{0}=\mathcal{R}_{i}^{0} \tilde{\boldsymbol{q}}_{i j}^{i} \\
& \boldsymbol{u}_{i}:=\boldsymbol{u}_{i}^{0}=\mathcal{R}_{i}^{0} \boldsymbol{u}_{i}^{i}
\end{aligned}
$$

where the superscript denotes the coordinate frame in which the vector is specified. From [$(2.20)$](#eq-2.20), we can then write

$$
\begin{aligned}
\boldsymbol{u}_{i}^{i} & =-k_{v} \sum_{j \in \mathcal{N}_{i}\left(E^{*}\right)}\left(\mathcal{R}_{i}^{0}\right)^{\mathrm{T}} \tilde{\boldsymbol{q}}_{i j} \boldsymbol{z}_{i j} \\
& =-k_{v} \sum_{j \in \mathcal{N}_{i}\left(E^{*}\right)} \tilde{\boldsymbol{q}}_{i j}^{i} \boldsymbol{z}_{i j}
\end{aligned}
$$

since $\boldsymbol{z}_{i j}$ is independent of the coordinate frame.

<figure>
   <img src="./images/1dist_control_2-coordinate.JPG" alt="2-coordinate" id="fig-2.2" width="100%" align="center">
   <div align="center"><figcaption> Figure 2.2: Fixed and local coordinate frames.</figcaption></div>
</figure>

Finally, the control [$(2.7)$](#eq-2.7) is in fact the standard gradient descent law that often appears in the literature. If we rewrite $\boldsymbol{z}$ as

$$
\begin{equation*}
\boldsymbol{z}=r_\mathcal{G}(\boldsymbol{q})-r_\mathcal{G}\left(\boldsymbol{q}^{*}\right) \tag{2.21}
\end{equation*}
$$

where $r_\mathcal{G}$ and [$(2.8)$](#eq-2.8) were used, it follows from [$(2.10)$](#eq-2.10) that

<span id="eq-2.22"></span>

$$
\begin{equation*}
W=\frac{1}{4}\left\|r_\mathcal{G}(\boldsymbol{q})-r_\mathcal{G}\left(\boldsymbol{q}^{*}\right)\right\|^{2} . \tag{2.22}
\end{equation*}
$$

The derivative of [$(2.22)$](#eq-2.22) with respect to $\boldsymbol{q}$ is given by

$$
\frac{\partial W}{\partial \boldsymbol{q}}=\frac{1}{2}\left(r_\mathcal{G}(\boldsymbol{q})-r_\mathcal{G}\left(\boldsymbol{q}^{*}\right)\right)^{\top} \frac{\partial r_\mathcal{G}(\boldsymbol{q})}{\partial \boldsymbol{q}}=\left(r_\mathcal{G}(\boldsymbol{q})-r_\mathcal{G}\left(\boldsymbol{q}^{*}\right)\right)^{\top} R_\mathcal{D}(\tilde{\boldsymbol{q}})
$$

where $R_\mathcal{D}(\boldsymbol{p})$ was used. Therefore,

$$
\boldsymbol{u}=-\nabla_{\boldsymbol{q}} W=-\left(\frac{\partial W}{\partial \boldsymbol{q}}\right)^{\top}=-R_\mathcal{D}^{\top}(\tilde{\boldsymbol{q}}) \boldsymbol{z},
$$

which is the same as [$(2.7)$](#eq-2.7) without the control gain. That is, since [$(2.22)$](#eq-2.22) (also called a **potential function**) has a minimum when $r_\mathcal{G}(\boldsymbol{q})=r_\mathcal{G}\left(\boldsymbol{q}^{*}\right)$, it is well known from optimization theory that the negative gradient causes the system trajectory to approach the local minimum.

### Formation Maneuvering

In this section, we solve the formation maneuvering problem defined in Section 1.4 using model [$(2.1)$](#eq-2.1). Since formation acquisition is embedded in the formation maneuvering problem, we use [$(2.12)$](#eq-2.12) as the starting point. The control law here will take the form $\boldsymbol{u}_{i}=\boldsymbol{u}_{i}\left(\tilde{\boldsymbol{q}}_{i j}, d_{i j}, \boldsymbol{v}_{d i}\right), i=1, \ldots, n$ and $j \in \mathcal{N}_{i}\left(\mathcal{E}^{*}\right)$ where $\boldsymbol{v}_{d i}(t)$, which was defined in [$(1.4)$](#eq-1.4), is a bounded continuous function.

<span id="theorem-2.2"></span>

> [!caution] Theorem 2.2
> Consider the formation $\mathcal{F}(t)=\left(\mathcal{G}^{*}, \boldsymbol{q}(t)\right)$ with the initial conditions on $\boldsymbol{e}(0)$ given in [Theorem 2.1](#theorem-2.1). Then, the control
>
> <span id="eq-2.23"></span>
>
> $$
\boldsymbol{u}=\boldsymbol{u}_{a}+\boldsymbol{v}_{d}, \tag{2.23}
> $$
>
> where $\boldsymbol{u}_{a}$ was defined in [$(2.15)$](#eq-2.15), $\boldsymbol{v}_{d}=\left[\boldsymbol{v}_{d 1}, \ldots, \boldsymbol{v}_{d n}\right] \in \mathbb{R}^{3 n}$ is the desired rigid body velocity specified by[^2.3]
>
> <span id="eq-2.24"></span>
>
> $$
\begin{equation*}
\boldsymbol{v}_{d i}=\boldsymbol{v}_{0}+\boldsymbol{\omega}_{0} \times \tilde{\boldsymbol{q}}_{i n}, i=1, \ldots, n \tag{2.24}
\end{equation*}
> $$
>
> $\boldsymbol{v}_{0}(t) \in \mathbb{R}^{3}$ denotes the desired translation velocity for the formation, $\boldsymbol{\omega}_{0}(t) \in \mathbb{R}^{3}$ is the desired angular velocity, renders $\boldsymbol{e}=0$ exponentially stable and ensures that [$(1.2)$](#eq-1.2) and [$(1.4)$](#eq-1.4) are satisfied.

**Proof**:
<details>
    <summary> Details of Proof </summary>

Substituting [$(2.23)$](#eq-2.23) into [$(2.12)$](#eq-2.12) yields

$$
\begin{equation*}
\dot{W}=-k_{v} \boldsymbol{z}^{T} R_\mathcal{D}(\tilde{q}) R_\mathcal{D}^{\top}(\tilde{q}) \boldsymbol{z}+\boldsymbol{z}^{T} R_\mathcal{D}(\tilde{\boldsymbol{q}}) \boldsymbol{v}_{d} . \tag{2.25}
\end{equation*}
$$

TODO It follows from (1.20) and [$(2.24)$](#eq-2.24) that

<span id="eq-2.26"></span>

$$
\begin{equation*}
R_\mathcal{D}(\tilde{\boldsymbol{q}}) \boldsymbol{v}_{d}=0 . \tag{2.26}
\end{equation*}
$$

Therefore, the proof of [Theorem 2.1](#theorem-2.1) can be directly followed to show that $\boldsymbol{e}=0$ is exponentially stable for $\boldsymbol{e}(0) \in \Omega_{1} \cap \Omega_{2}$ and [$(1.2)$](#eq-1.2) holds.

From [$(2.9)$](#eq-2.9) it is clear that $\boldsymbol{z} \rightarrow 0$ as $\boldsymbol{e} \rightarrow 0$. The exponential stability of $\boldsymbol{e}=0$ implies that $\tilde{\boldsymbol{q}}$ is bounded from [$(2.6)$](#eq-2.6). Therefore, $R_\mathcal{D}(\tilde{\boldsymbol{q}})$ is bounded and we know from [$(2.23)$](#eq-2.23) and [$(2.15)$](#eq-2.15) that

<span id="eq-2.27"></span>

$$
\begin{equation*}
\boldsymbol{u} \rightarrow \boldsymbol{v}_{d} \quad \text { as } \quad \boldsymbol{e} \rightarrow 0 \tag{2.27}
\end{equation*}
$$

Since we proved that $\boldsymbol{e}(t) \rightarrow 0$ as $t \rightarrow \infty$, it follows from [$(2.27)$](#eq-2.27) and [$(2.1)$](#eq-2.1) that [$(1.4)$](#eq-1.4) holds. Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

The control [$(2.23)$](#eq-2.23) has two independent components: the term $\boldsymbol{u}_{a}$ is responsible for formation acquisition while $\boldsymbol{v}_{d}$ is responsible for rigid body maneuvers of the whole formation. We can see from [$(2.26)$](#eq-2.26) that the control exploits the special structure of the rigidity matrix to disassociate the formation acquisition stability analysis from the formation maneuvering analysis. 

Another interesting point is that, despite being based on the single-integrator model, [$(2.24)$](#eq-2.24) is generally **not open-loop** in nature since it depends on feedback of $\tilde{\boldsymbol{q}}_{i n}$. That is, [$(2.24)$](#eq-2.24) has an open-loop form only when the maneuver is purely translational.

The control law can be written element-wise as

$$
\boldsymbol{u}_{i}=-k_{v} \sum_{j \in \mathcal{N}_{i}\left(E^{*}\right)} \tilde{\boldsymbol{q}}_{i j} \boldsymbol{z}_{i j}+\boldsymbol{v}_{0}+\boldsymbol{\omega}_{0} \times \tilde{\boldsymbol{q}}_{i n}, \quad i=1, \ldots n,
$$

which shows that it is **decentralized**. Note that in many applications the signals $\boldsymbol{v}_{0}$ and $\boldsymbol{\omega}_{0}$ are known a priori and therefore can be stored on each agent's onboard computer. Also, since $\tilde{\boldsymbol{q}}_{n n}=0$, the formation maneuvering term of the leader only has the translation component $\boldsymbol{v}_{0}$. This is expected since the leader by design lies on the axis of rotation of the virtual rigid body.

### Flocking

Here, we consider the special case of formation maneuvering where the **desired velocity only includes the translation component**. Recall from Section 1 that this is commonly referred to as **flocking**. Unlike last Section, we consider that the desired flocking velocity is only **available to a subset of agents**. We will overcome this constraint by employing a distributed observer that estimates this velocity by exploiting the connectedness of the formation graph.

#### Constant Flocking Velocity

We first consider the case where the flocking velocity is **constant**. Let $\boldsymbol{v}_{0} \in \mathbb{R}^{m}$ be the constant flocking velocity and $\mathcal{V}_{0} \subset \mathcal{V}^{*}$ be the nonempty subset of agents that have direct access to $\boldsymbol{v}_{0}$. To solve this flocking problem, we use the continuous controller-observer scheme

<span id="eq-2.28"></span>

$$
\begin{align*}
& \boldsymbol{u}=\boldsymbol{u}_{a}+\hat{\boldsymbol{v}}  \tag{2.28a}\\
& \dot{\hat{\boldsymbol{v}}}_{i}=-\alpha \sum_{j \in \mathcal{N}_{i}\left(\mathcal{E}^{*}\right)}\left(\hat{\boldsymbol{v}}_{i}-\hat{\boldsymbol{v}}_{j}\right)-\alpha b_{i}\left(\hat{\boldsymbol{v}}_{i}-\boldsymbol{v}_{0}\right), \quad i=1, \ldots n \tag{2.28b}
\end{align*}
$$

where

<span id="eq-2.29"></span>

$$
b_{i}= \begin{cases}1, & \text { if } i \in \mathcal{V}_{0}  \\ 0, & \text { otherwise }\end{cases} \tag{2.29}
$$

$\boldsymbol{u}_{a}$ was defined in [$(2.15)$](#eq-2.15), $\hat{\boldsymbol{v}}=\left[\hat{\boldsymbol{v}}_{1}, \ldots, \hat{\boldsymbol{v}}_{n}\right] \in \mathbb{R}^{m n}$ contains the velocity estimates for each agent, and $\alpha>0$ is a user-defined observer gain.

<span id="theorem-2.3"></span>

>[!caution] Theorem 2.3
> Consider the formation $\mathcal{F}(t)=\left(\mathcal{G}^{*}, \boldsymbol{q}(t)\right)$ with the initial conditions in [Theorem 2.1](#theorem-2.1). Then, the controller-observer scheme [$(2.28)$](#eq-2.28) with any $\hat{\boldsymbol{v}}(0)$ renders $\boldsymbol{e}=\boldsymbol{0}$ **asymptotically stable** and ensures that [$(1.2)$](#eq-1.2) and [$(1.4)$](#eq-1.4) are satisfied with $\boldsymbol{v}_{d i}=\boldsymbol{v}_{0}, i=1, \ldots, n$.

**Proof**:
<details>
    <summary> Details of Proof </summary>

Let

$$
\begin{equation*}
\tilde{\boldsymbol{v}}_{i}=\hat{\boldsymbol{v}}_{i}-\boldsymbol{v}_{0} \tag{2.30}
\end{equation*}
$$

denote the flocking velocity estimation error for agent $i$. If $\tilde{\boldsymbol{v}}=\left[\tilde{\boldsymbol{v}}_{1}, \ldots, \tilde{\boldsymbol{v}}_{n}\right] \in \mathbb{R}^{m n}$, then

<span id="eq-2.31"></span>

$$
\begin{equation*}
\tilde{\boldsymbol{v}}=\hat{\boldsymbol{v}}-\mathbf{1}_{n} \otimes \boldsymbol{v}_{0} . \tag{2.31}
\end{equation*}
$$

As part of this proof, we will show that [$(2.28b)$](#eq-2.28) guarantees $\tilde{\boldsymbol{v}}(t) \rightarrow \mathbf{0}$ as $t \rightarrow \infty$. From the time derivative of [$(2.8)$](#eq-2.8), we have that

<span id="eq-2.32"></span>

$$
\begin{equation*}
\dot{\boldsymbol{z}}=2 R_\mathcal{D}(\tilde{\boldsymbol{q}}) \boldsymbol{u} . \tag{2.32}
\end{equation*}
$$

After substituting [$(2.28a)$](#eq-2.28) into [$(2.32)$](#eq-2.32), we get the closed-loop system

<span id="eq-2.33"></span>

$$
\begin{equation*}
\dot{\boldsymbol{z}}=-2 k_{v} R_\mathcal{D}(\tilde{\boldsymbol{q}}) R_\mathcal{D}^{\top}(\tilde{\boldsymbol{q}}) \boldsymbol{z}+2 R_\mathcal{D}(\tilde{\boldsymbol{q}}) \hat{\boldsymbol{v}} . \tag{2.33}
\end{equation*}
$$

Using [$(2.31)$](#eq-2.31) in [$(2.33)$](#eq-2.33) yields

<span id="eq-2.34"></span>

$$
\begin{equation*}
\dot{\boldsymbol{z}}=-2 k_{v} R_\mathcal{D}(\tilde{\boldsymbol{q}}) R_\mathcal{D}^{\top}(\tilde{\boldsymbol{q}}) \boldsymbol{z}+2 R_\mathcal{D}(\tilde{\boldsymbol{q}}) \tilde{\boldsymbol{v}} \tag{2.34}
\end{equation*}
$$

upon application of Property $R_\mathcal{D}(\boldsymbol{p})(\mathbf{1}_n\otimes\boldsymbol{x})=0$ in [Infinitesimal Rigidity](./1distance.md#infinitesimal-rigidity).

Now, we turn our attention to deriving the dynamics of the estimation error. First, notice that

$$
\sum_{j \in \mathcal{N}_{i}\left(E^{*}\right)}\left(\hat{v}_{i}-\hat{v}_{j}\right)=\sum_{j=1}^{n} a_{i j}\left(\hat{v}_{i}-\hat{v}_{j}\right)
$$

where $a_{i j}$ are the elements of the adjacency matrix. Taking the time derivative of [$(2.31)$](#eq-2.31) and substituting [$(2.28b)$](#eq-2.28) gives

<span id="eq-2.35"></span>

$$
\begin{align*}
\dot{\tilde{v}} & =-\alpha\left(\mathcal{L} \otimes \mathbf{I}_{m}\right) \tilde{v}-\alpha\left(\mathbf{B} \otimes \mathbf{I}_{m}\right) \tilde{v} \\
& =-\alpha\left(\mathbf{M} \otimes I_{m}\right) \tilde{v} \tag{2.35}
\end{align*}
$$

where we used the fact that $\hat{\boldsymbol{v}}_{i}-\hat{\boldsymbol{v}}_{j}=\tilde{\boldsymbol{v}}_{i}-\tilde{\boldsymbol{v}}_{j}, \mathbf{B}:=\operatorname{diag}\left(b_{1}, \ldots b_{n}\right), \mathcal{L}$ is the Laplacian matrix defined in [$(1.4)$](#eq-1.4), and $\mathbf{M}:=\mathcal{L}+\mathbf{B}$ is symmetric. Our overall closed-loop system is composed of two interconnected subsystems, [$(2.34)$](#eq-2.34) and [$(2.35)$](#eq-2.35), which are in the form of [$(1.6)$](#eq-1.6). Notice that [$(2.34)$](#eq-2.34) with $\tilde{\boldsymbol{v}}=0$ is input-to-state stable by [Theorem 1.2](#theorem-1.2) since it reduces to the closed-loop system analyzed in [Theorem 2.1](#theorem-2.1). Since the graph of a rigid framework is always connected, we know that $\mathcal{G}^{*}$ is connected. Therefore, we know from Lemmas 1.1 and nonautonomous (time-varying) system $\dot{\boldsymbol{x}}=f(\boldsymbol{x},t), \quad \boldsymbol{x}(t_0)=\boldsymbol{x}_0$ that $\mathbf{M}$ and $\mathbf{M} \otimes \mathbf{I}_{m}$ are positive definite, respectively. It then follows from [$(2.35)$](#eq-2.35) that $\tilde{\boldsymbol{v}}=0$ is exponentially stable. We can now invoke [Theorem 1.3](#theorem-1.3) to claim that $(\boldsymbol{z}, \tilde{\boldsymbol{v}})=0$ is an asymptotically stable equilibrium point of the interconnected system. Since $\boldsymbol{z}=0$ if and only if $\boldsymbol{e}=0$, we know $\boldsymbol{e}=0$ is asymptotically stable. Finally, by virtue of the initial conditions, we know that $\mathcal{F}(t) \rightarrow \operatorname{Iso}\left(\mathcal{F}^{*}\right)$ as $t \rightarrow \infty$ as argued in the proof of [Theorem 2.1](#theorem-2.1).

Finally, due to the asymptotic stability of $\boldsymbol{e}=0$, we know $\boldsymbol{u}_{a}(t) \rightarrow 0$ as $t \rightarrow \infty$ and therefore from [$(2.28a)$](#eq-2.28) that $\boldsymbol{u}(t)-\hat{\boldsymbol{v}}(t) \rightarrow 0$ as $t \rightarrow \infty$. Since $\tilde{\boldsymbol{v}}_{i}(t)=\hat{\boldsymbol{v}}_{i}(t)- \boldsymbol{v}_{0} \rightarrow 0$ as $t \rightarrow \infty$, then we know from [$(2.1)$](#eq-2.1) that [$(1.4)$](#eq-1.4) holds. Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

The form of [$(2.28b)$](#eq-2.28) is inspired by **multi-agent consensus algorithms**. The premise behind the observer is that agents that do not have direct access to $\boldsymbol{v}_{0}$ can acquire this information from its neighbors since the graph modeling the communication network is connected. Note that the observer [$(2.28b)$](#eq-2.28) can accommodate a **leader-follower strategy** (only one agent has access to $\boldsymbol{v}_{0}$ ) as well as the general case where the velocity information exchange happens between any two agents.

#### Time-Varying Flocking Velocity

The observer scheme in [$(2.28b)$](#eq-2.28) cannot be proven to ensure $\tilde{\boldsymbol{v}}(t) \rightarrow 0$ as $t \rightarrow \infty$ for the case where the flocking velocity varies with time. In this situation, one can use the variable structure-type observer

$$
\begin{equation*}
\dot{\hat{\boldsymbol{v}}}_{i}=-\alpha \operatorname{sgn}\left(\sum_{j \in \mathcal{N}_{i}\left(E^{*}\right)}\left(\hat{\boldsymbol{v}}_{i}-\hat{\boldsymbol{v}}_{j}\right)+b_{i}\left(\hat{\boldsymbol{v}}_{i}-\boldsymbol{v}_{0}\right)\right), \quad i=1, \ldots n \tag{2.36}
\end{equation*}
$$

where $\boldsymbol{v}_{0}(t) \in \mathcal{L}_{\infty}$ is the time-varying flocking velocity, which is assumed to be differentiable with $\left\|\dot{\boldsymbol{v}}_{0}(t)\right\|_{\mathcal{L}_{\infty}} \leqslant \gamma$ for all time, $b_{i}$ was defined in [$(2.29)$](#eq-2.29), and $\operatorname{sgn}(\cdot)$ is the standard signum function:

$$
\operatorname{sgn}(x)=\left\{\begin{array}{cl}
1 & \text { for } x>0  \tag{2.37}\\
0 & \text { for } x=0 \\
-1 & \text { for } x<0
\end{array}\right.
$$

The dynamics of the estimation error now become

<span id="eq-2.38"></span>

$$
\begin{equation*}
\dot{\tilde{\boldsymbol{v}}}=-\alpha \operatorname{sgn}\left(\left(\mathbf{M} \otimes I_{m}\right) \tilde{\boldsymbol{v}}\right)-\mathbf{1}_{n} \otimes \dot{\boldsymbol{v}}_{0} \tag{2.38}
\end{equation*}
$$

where $\operatorname{sgn}(x)=\left[\operatorname{sgn}\left(x_{1}\right), \ldots, \operatorname{sgn}\left(x_{n}\right)\right], \forall x \in \mathbb{R}^{n}$. Notice that [$(2.38)$](#eq-2.38) has a discontinuous right-hand side; thus, its solution needs to be studied using nonsmooth analysis. Since $\operatorname{sgn}(\cdot)$ is Lebesgue measurable and essentially locally bounded, one can show the existence of generalized solutions by embedding the differential equation into the differential inclusion

$$
\begin{equation*}
\dot{\tilde{\boldsymbol{v}}} \in K[f](\tilde{\boldsymbol{v}}, t) \tag{2.39}
\end{equation*}
$$

where $K[\cdot]$ is a nonempty, compact, convex, upper semicontinuous set-valued map and $f(\tilde{\boldsymbol{v}}, t)=-\alpha \operatorname{sgn}\left(\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right)-\mathbf{1}_{n} \otimes \dot{\boldsymbol{v}}_{0}$.

If we define the Lyapunov function candidate

$$
\begin{equation*}
W_{f}=\frac{1}{2} \tilde{\boldsymbol{v}}^{\top}\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}} \tag{2.40}
\end{equation*}
$$

we get that

<span id="eq-2.41"></span>

$$
\begin{align*}
\dot{W}_{f} & \stackrel{\text { a.e. }}{\in} \frac{\partial W_{f}}{\partial \tilde{\boldsymbol{v}}} K[f](\tilde{\boldsymbol{v}}, t) \\
& \subset-\alpha \tilde{\boldsymbol{v}}^{\top}\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \operatorname{sgn}\left(\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right)-\tilde{\boldsymbol{v}}^{\top}\left(\mathbf{M} \otimes \mathbf{I}_{m}\right)\left(\mathbf{1}_{n} \otimes \dot{\boldsymbol{v}}_{0}\right) \tag{2.41}
\end{align*}
$$

where a.e. is the abbreviation for the term "almost everywhere". If we define $\operatorname{SGN}(x):=\left[\operatorname{SGN}\left(x_{1}\right), \ldots, \operatorname{SGN}\left(x_{n}\right)\right], \forall x \in \mathbb{R}^{n}$ where

$$
\operatorname{SGN}\left(x_{i}\right)= \begin{cases}1 & \text { for } x_{i}>0  \tag{2.42}\\ {[-1,1]} & \text { for } x_{i}=0 \\ -1 & \text { for } x_{i}<0\end{cases}
$$

then [$(2.41)$](#eq-2.41) becomes

$$
\begin{align*}
\dot{W}_{f} & =-\alpha \tilde{\boldsymbol{v}}^{\top}\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \mathrm{SGN}\left(\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right)-\tilde{\boldsymbol{v}}^{\top}\left(\mathbf{M} \otimes \mathbf{I}_{m}\right)\left(\mathbf{1}_{n} \otimes \dot{\boldsymbol{v}}_{0}\right) \\
& =-\alpha\left\|\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right\|_{1}-\left(\mathbf{1}_{n} \otimes \dot{\boldsymbol{v}}_{0}\right)^{\top}\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}} \\
& =-\alpha\left\|\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right\|_{1}+\dot{\boldsymbol{v}}_{0}^{\top} \sum_{i=1}^{m n}\left[\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right]_{i} \\
& \leqslant-\alpha\left\|\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right\|_{1}+\left\|\dot{\boldsymbol{v}}_{0}\right\|_{1}\left\|\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right\|_{1} \\
& \leqslant-(\alpha-\gamma)\left\|\left(\mathbf{M} \otimes \mathbf{I}_{m}\right) \tilde{\boldsymbol{v}}\right\|_{1} . \tag{2.43}
\end{align*}
$$

By choosing $\alpha>\gamma$, we get that $\dot{W}_{f}$ is negative definite. Therefore, from [Theorem 1.4](#theorem-1.4), we know that $\tilde{\boldsymbol{v}}=0$ is asymptotically stable.

Now the proof that [$(2.15)$](#eq-2.15) and [$(2.36)$](#eq-2.36) guarantee that [$(1.2)$](#eq-1.2) and [$(1.4)$](#eq-1.4) are satisfied directly follows from the proof of [Theorem 2.3](#theorem-2.3).

### Target Interception with Unknown Target Velocity

We now turn our attention to the target interception problem defined in Section 1. We assume the target motion is such that $\boldsymbol{q}_{T}(t)$ is three times continuously differentiable and $\mathrm{d}^{i} \boldsymbol{q}_{T} / \mathrm{d} t^{i} \in \mathcal{L}_{\infty}, i=0,1,2,3$. Furthermore, we consider the target velocity $\dot{\boldsymbol{q}}_{T}$ to be unknown to all agents, but that the **leader** can measure the target's relative position $\boldsymbol{q}_{T}-\boldsymbol{q}_{n}$ with its onboard sensors and can broadcast this information to the followers.

To simplify the notation, we let $\boldsymbol{v}_{T}:=\dot{\boldsymbol{q}}_{T}$ and

<span id="eq-2.44"></span>

$$
\begin{equation*}
\boldsymbol{e}_{T}=\boldsymbol{q}_{T}-\boldsymbol{q}_{n} \tag{2.44}
\end{equation*}
$$

denote the interception error between the leader and target. The control, which will include a term to "learn" the unknown target velocity, will take the general form $\boldsymbol{u}_{i}=\boldsymbol{u}_{i}\left(\tilde{\boldsymbol{q}}_{i j}, \boldsymbol{d}_{i j}, \boldsymbol{e}_{T}, \hat{\boldsymbol{v}}_{T}\right), i=1, \ldots, n$ and $j \in \mathcal{N}_{i}\left(\mathcal{E}^{*}\right)$ where $\hat{\boldsymbol{v}}_{T}$ is the target velocity estimate. This term is generated by the following continuous dynamic estimation mechanism

<span id="eq-2.45"></span>

$$
\begin{equation*}
\hat{\boldsymbol{v}}_{T}(t)=\int_{0}^{t}\left[k_{1} \boldsymbol{e}_{T}(\tau)+k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right)\right] \mathrm{~d} \tau \tag{2.45}
\end{equation*}
$$

where $k_{1}, k_{2}>0$ are user-defined control gains. This mechanism allows one to learn or compensate for sufficiently smooth, nonperiodic signals.

Before presenting the control law, a lemma is related to [$(2.45)$](#eq-2.45) is introduced.

<span id="lemma-2.2"></span>

>[!tip] Lemma 2.2
> Let
>
> <span id="eq-2.46"></span>
>
> $$
\begin{equation*}
L:=\left(k_{1} \boldsymbol{e}_{T}+\dot{\boldsymbol{e}}_{T}\right)^{\top}\left(\dot{\boldsymbol{v}}_{T}-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}\right)\right) . \tag{2.46}
\end{equation*}
> $$
>
> If $k_{2}$ in (2.45) is selected to satisfy the following sufficient condition
>
> <span id="eq-2.47"></span>
>
> $$
\begin{equation*}
k_{2}>\left\|\dot{\boldsymbol{v}}_{T}\right\|_{\mathcal{L}_{\infty}}+\frac{1}{k_{1}}\left\|\ddot{\boldsymbol{v}}_{T}\right\|_{\mathcal{L}_{\infty}}, \tag{2.47}
\end{equation*}
> $$
>
> then
>
> <span id="eq-2.48"></span>
>
> $$
\begin{equation*}
\int_{0}^{t} L(\tau) \mathrm{~d} \tau \leqslant \zeta_{b} \tag{2.48}
\end{equation*}
> $$
>
> where the positive constant $\zeta_{b}$ is defined as
>
> $$
\begin{equation*}
\zeta_{b}=k_{2}\left\|\boldsymbol{e}_{T}(0)\right\|_{1}-\boldsymbol{e}_{T}^{T}(0) \dot{\boldsymbol{v}}_{T}(0) \tag{2.49}
\end{equation*}
> $$

**Proof**:
<details>
    <summary> Details of Proof </summary>

Integrating [$(2.46)$](#eq-2.46) over time yields

$$
\begin{align*}
\int_{0}^{t} L(\tau) \mathrm{~d} \tau= & \int_{0}^{t}\left(k_{1} \boldsymbol{e}_{T}(\tau)+\dot{\boldsymbol{e}}_{T}(\tau)\right)^{\top}\left[\dot{\boldsymbol{v}}_{T}(\tau)-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right)\right] \mathrm{~d} \tau \\
= & \int_{0}^{t} k_{1} \boldsymbol{e}_{T}^{\top}(\tau)\left[\dot{\boldsymbol{v}}_{T}(\tau)-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right)\right] \mathrm{~d} \tau+\int_{0}^{t} \dot{\boldsymbol{e}}_{T}^{\top}(\tau) \dot{\boldsymbol{v}}_{T}(\tau) \mathrm{~d} \tau \\
& -\int_{0}^{t} k_{2} \dot{\boldsymbol{e}}_{T}^{\top}(\tau) \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right) \mathrm{~d} \tau \tag{2.50}
\end{align*}
$$

After integrating by parts the second integral on the right-hand side of (2.50) and applying Lemma 1 of [44] to the third integral, we obtain

<span id="eq-2.51"></span>

$$
\begin{align*}
\int_{0}^{t} L(\tau) \mathrm{~d} \tau= & \int_{0}^{t} k_{1} \boldsymbol{e}_{T}^{\top}(\tau)\left[\dot{\boldsymbol{v}}_{T}(\tau)-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right)\right] \mathrm{~d} \tau \\
& +\left.\boldsymbol{e}_{T}^{\top}(\tau) \dot{\boldsymbol{v}}_{T}(\tau)\right|_{0} ^{t}-\int_{0}^{t} \boldsymbol{e}_{T}^{\top}(\tau) \ddot{\boldsymbol{v}}_{T}(\tau) \mathrm{~d} \tau-\left.k_{2}\left\|\boldsymbol{e}_{T}(\tau)\right\|_{1}\right|_{0} ^{t} \\
= & \int_{0}^{t} k_{1} \boldsymbol{e}_{T}^{\top}(\tau)\left[\dot{\boldsymbol{v}}_{T}(\tau)-\frac{1}{k_{1}} \ddot{\boldsymbol{v}}_{T}(\tau)-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right)\right] \mathrm{~d} \tau \\
& +\boldsymbol{e}_{T}^{\top}(t) \dot{\boldsymbol{v}}_{T}(t)-\boldsymbol{e}_{T}^{\top}(0) \dot{\boldsymbol{v}}_{T}(0)-k_{2}\left\|\boldsymbol{e}_{T}(t)\right\|_{1}+k_{2}\left\|\boldsymbol{e}_{T}(0)\right\|_{1} \tag{2.51}
\end{align*}
$$

Using the fact that $\|x\|_{1} \geqslant\|x\|$ for any $x \in \mathbb{R}^{n}$, we can upper bound the right-hand side of [$(2.51)$](#eq-2.51) by

<span id="eq-2.52"></span>

$$
\begin{align*}
\int_{0}^{t} L(\tau) \mathrm{~d} \tau \leqslant & \int_{0}^{t} k_{1}\left\|\boldsymbol{e}_{T}(\tau)\right\|\left(\left\|\dot{\boldsymbol{v}}_{T}(\tau)\right\|+\frac{1}{k_{1}}\left\|\ddot{\boldsymbol{v}}_{T}(\tau)\right\|-k_{2}\right) \mathrm{~d} \tau \\
& +\left\|\boldsymbol{e}_{T}(t)\right\|\left(\left\|\dot{\boldsymbol{v}}_{T}(t)\right\|-k_{2}\right)+k_{2}\left\|\boldsymbol{e}_{T}(0)\right\|_{1}-\boldsymbol{e}_{T}^{\top}(0) \dot{\boldsymbol{v}}_{T}(0) \tag{2.52}
\end{align*}
$$

Applying [$(2.47)$](#eq-2.47) to [$(2.52)$](#eq-2.52) gives [$(2.48)$](#eq-2.48). Finally, the positiveness of (2.49) follows from the fact that

$$
k_{2}\left\|\boldsymbol{e}_{T}(0)\right\|_{1}-\boldsymbol{e}_{T}^{\top}(0) \dot{\boldsymbol{v}}_{T}(0) \geqslant\left\|\boldsymbol{e}_{T}(0)\right\|\left(k_{2}-\left\|\dot{\boldsymbol{v}}_{T}(0)\right\|\right)>0
$$

when $k_{2}$ is selected according to [$(2.47)$](#eq-2.47). Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

>[!caution] Theorem 2.4
> Consider the formation $\mathcal{F}(t)=\left(\mathcal{G}^{*}, \boldsymbol{q}(t)\right)$ with the initial conditions on $e(0)$ given in [Theorem 2.1](#theorem-2.1). Then, the control
>
> <span id="eq-2.53"></span>
>
> $$
u=u_{a}+\mathbf{1}_{n} \otimes \boldsymbol{h}, \tag{2.53}
> $$
>
> where $u_{a}=\left[u_{a 1}, \ldots, u_{a n}\right]$ was defined in [$(2.15)$](#eq-2.15) and
>
> <span id="eq-2.54"></span>
> $$
\begin{equation*}
\boldsymbol{h}=\left(k_{1}+1\right) \boldsymbol{e}_{T}+\hat{\boldsymbol{v}}_{T}-\boldsymbol{u}_{a n}, \tag{2.54}
\end{equation*}
> $$
>
> renders $e=0$ **exponentially stable** and ensures that [$(1.2)$](#eq-1.2) and [$(1.5)$](#eq-1.5) are satisfied. Further, the target velocity can be identified in the sense that $\boldsymbol{v}_{T}(t)-\hat{\boldsymbol{v}}_{T}(t) \rightarrow 0$ as $t \rightarrow \infty$.

**Proof**:
<details>
    <summary> Details of Proof </summary>

After substituting [$(2.53)$](#eq-2.53) into [$(2.12)$](#eq-2.12), we obtain

<span id="eq-2.55"></span>

$$
\begin{equation*}
\dot{W}=-k_{v} z^{\top} R(\tilde{q}) R^{\top}(\tilde{q}) z+z^{\top} R(\tilde{q})\left(\mathbf{1}_{n} \otimes \boldsymbol{h}\right) . \tag{2.55}
\end{equation*}
$$

Due to Property in the [Infinitesimal Rigidity](./1distance.md#infinitesimal-rigidity), the second term on the right-hand side of [$(2.55)$](#eq-2.55) disappears and the proof of [Theorem 2.1](#theorem-2.1) can be again followed to prove the exponential stability of $e=0$ and [$(1.2)$](#eq-1.2).

We now proceed to prove [$(1.5)$](#eq-1.5). From [$(2.53)$](#eq-2.53) and [$(2.54)$](#eq-2.54), we have that the leader control input is[^2.4]

<span id="eq-2.56"></span>

$$
\begin{equation*}
u_{n}=\left(k_{1}+1\right) \boldsymbol{e}_{T}+\hat{\boldsymbol{v}}_{T} . \tag{2.56}
\end{equation*}
$$

Differentiating [$(2.44)$](#eq-2.44) and using [$(2.56)$](#eq-2.56) yields

<span id="eq-2.57"></span>
<span id="eq-2.58"></span>
<span id="eq-2.59"></span>

$$
\begin{align*}
\dot{e}_{T} & =\boldsymbol{v}_{T}-u_{n}  \tag{2.57}\\
& =\boldsymbol{v}_{T}-\left(k_{1}+1\right) \boldsymbol{e}_{T}-\hat{\boldsymbol{v}}_{T}  \tag{2.58}\\
& =-k_{1} \boldsymbol{e}_{T}+w \tag{2.59}
\end{align*}
$$

where

<span id="eq-2.60"></span>

$$
\begin{equation*}
w=\boldsymbol{v}_{T}-\boldsymbol{e}_{T}-\hat{\boldsymbol{v}}_{T} \tag{2.60}
\end{equation*}
$$

The derivative of [$(2.60)$](#eq-2.60) is given by

<span id="eq-2.61"></span>

$$
\begin{equation*}
\dot{w}=\dot{\boldsymbol{v}}_{T}-\dot{\boldsymbol{e}}_{T}-k_{1} \boldsymbol{e}_{T}-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}\right)=-w+\dot{\boldsymbol{v}}_{T}-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}\right) \tag{2.61}
\end{equation*}
$$

where [$(2.45)$](#eq-2.45) and [$(2.59)$](#eq-2.59) were used.
Next, define the auxiliary function

$$
\begin{equation*}
P=\frac{1}{2} w^{\top} w, \tag{2.62}
\end{equation*}
$$

whose derivative along [$(2.61)$](#eq-2.61) is given by

<span id="eq-2.63"></span>

$$
\begin{equation*}
\dot{P}=w^{T}\left(-w+\dot{\boldsymbol{v}}_{T}-k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}\right)\right)=-w^{\top} w+L \tag{2.63}
\end{equation*}
$$

where [$(2.46)$](#eq-2.46) was used. After integrating both sides of [$(2.63)$](#eq-2.63) with respect to time and applying Lemma 2.2, we obtain

$$
\begin{align*}
\int_{0}^{t} \dot{P}(\tau) \mathrm{~d} \tau=P(t)-P(0) & =-\int_{0}^{t} w^{\top}(\tau) w(\tau) \mathrm{~d} \tau+\int_{0}^{t} L(\tau) \mathrm{~d} \tau \\
& \leqslant-\int_{0}^{t} w^{\top}(\tau) w(\tau) \mathrm{~d} \tau+\zeta_{b} \leqslant \zeta_{b} \tag{2.64}
\end{align*}
$$

[^2]Since $P(0)$ is finite, it follows from (2.64) that $P(t) \in \mathcal{L}_{\infty}$, which implies that $w(t) \in \mathcal{L}_{\infty}$ from (2.62). From (2.64), we also have that

$$
\int_{0}^{t} w^{\top}(\tau) w(\tau) \mathrm{~d} \tau \leqslant \zeta_{b}+P(0)-P(t)<\infty
$$

which means that $w(t) \in \mathcal{L}_{2}$. Therefore, we know from [$(2.59)$](#eq-2.59) and Theorem C. 1 that $e_{T}(t) \rightarrow 0$ as $t \rightarrow \infty$. We can also use [$(2.59)$](#eq-2.59) to claim that $\dot{e}_{T} \in \mathcal{L}_{\infty}$, which implies from [$(2.57)$](#eq-2.57) (together with the boundedness of $\boldsymbol{v}_{T}(t)$ ) that $u_{n}(t) \in \mathcal{L}_{\infty}$. From [$(2.56)$](#eq-2.56), we then know that $\hat{\boldsymbol{v}}_{T}(t) \in \mathcal{L}_{\infty}$. Since (1.26) holds and $F^{*}$ is constructed such that $q_{n}^{*} \in \operatorname{conv}\left\{q_{1}^{*}, \ldots, q_{n-1}^{*}\right\}$, we know that $q_{n}(t) \in \operatorname{conv}\left\{q_{1}(t), q_{2}(t), \ldots, q_{n-1}(t)\right\}$ as $t \rightarrow \infty$. Therefore, from the fact that $e_{T}(t) \rightarrow 0$ as $t \rightarrow \infty$, we conclude that [$(1.5)$](#eq-1.5) holds.

Finally, we know $\dot{w}(t) \in \mathcal{L}_{\infty}$ from [$(2.61)$](#eq-2.61) since $\dot{\boldsymbol{v}}_{T}$ is assumed bounded. It then follows from Theorem C. 3 that $w(t) \rightarrow 0$ as $t \rightarrow \infty$. Therefore, we can use (2.59) to show that $\dot{e}_{T}(t) \rightarrow 0$ as $t \rightarrow \infty$, and then (2.58) to conclude that $\boldsymbol{v}_{T}(t)-\hat{\boldsymbol{v}}_{T}(t) \rightarrow 0$ as $t \rightarrow \infty$. Q.E.D. <div style="text-align: right;">$\square$</div>
</details>

Similar to the formation maneuvering control, the target interception controller [$(2.53)$](#eq-2.53) and [$(2.54)$](#eq-2.54) has two components with well-defined roles:
- $\boldsymbol{u}_{a}$ ensures formation acquisition
- $\boldsymbol{h}$ guarantees target interception

The controller for the followers can be written element-wise as

$$
\boldsymbol{u}_{i}=-k_{v} \sum_{j \in \mathcal{N}_{i}\left(E^{*}\right)} \tilde{\boldsymbol{q}}_{i j} \boldsymbol{z}_{i j}+\left(k_{1}+1\right) \boldsymbol{e}_{T}+\int_{0}^{t}\left[k_{1} \boldsymbol{e}_{T}(\tau)+k_{2} \operatorname{sgn}\left(\boldsymbol{e}_{T}(\tau)\right)\right] \mathrm{~d} \tau-\boldsymbol{u}_{a n}
$$

for $i=1, \ldots, n-1$ where

$$
\boldsymbol{u}_{a n}=-k_{v} \sum_{j \in \mathcal{N}_{n}\left(\mathcal{E}^{*}\right)} \tilde{\boldsymbol{q}}_{n j} \boldsymbol{z}_{n j}
$$

whereas the control for the leader is given by [$(2.56)$](#eq-2.56). As one can see, each follower control input depends on its relative position to neighboring agents, the target interception error, and the formation acquisition control term of the leader. Therefore, it is less **decentralized** than the formation acquisition and maneuvering controllers since now **information needs to be wirelessly broadcast from the leader to the followers**.

Finally, note that the target interception error [$(2.44)$](#eq-2.44) could be redefined to include a constant **offset** so that the leader **does not collide** with the target, i.e., $\boldsymbol{e}_{T}=\boldsymbol{q}_{n}-\boldsymbol{q}_{T}-\boldsymbol{c}$ where $\boldsymbol{c} \in \mathbb{R}^{m}$ is a constant vector.

### Dynamic Formation Acquisition

So far, we have only considered formation acquisition when the desired formation $\mathcal{F}^{*}$ is static. In certain applications it may be necessary that the **formation size and/or geometric shape change in time**, such as to **avoid obstacles, dynamically adapt to a change of mission, or adapt to limits in communication range and bandwidth**. Thus, we consider now the problem of **dynamic** formation acquisition in the sense that the desired formation is a function of time, $\mathcal{F}^{*}(t)$. In control systems jargon, we will deal here with the more general **tracking** problem instead of the simpler setpoint problem.

Note that dynamic formation acquisition is independent of what we call formation maneuvering. In the former, the time-varying nature is related to the formation itself, whereas in the latter, the formation (whether static or dynamic) maneuvers as a virtual rigid body. The formal statement of the dynamic formation acquisition problem is as follows.

>[!info] Problem 1 (Dynamic Formation Acquisition)
> Let the desired formation be represented by a **dynamic**, infinitesimally and minimally rigid framework $\mathcal{F}^{*}(t)=\left(\mathcal{G}^{*}, \boldsymbol{q}^{*}(t)\right)$[^2.5] where the time-varying desired distance between agents $i$ and $j$ is given by
>
> <span id="eq-2.65"></span>
>
> $$
\boldsymbol{d}_{i j}(t)=\left\|\boldsymbol{q}_{i}^{*}(t)-\boldsymbol{q}_{j}^{*}(t)\right\|>0, \quad i, j \in \mathcal{V}^{*} . \tag{2.65}
> $$
>
> We assume the desired distances are sufficiently smooth functions of time[^2.6]. The control objective is to design $\boldsymbol{u}_{i}$ such that
>
> $$
\mathcal{F}(t)-\operatorname{Iso}\left(\mathcal{F}^{*}(t)\right) \rightarrow 0 \text { as } t \rightarrow \infty, \tag{2.66}
> $$
>
> or equivalently
>
> $$
\boldsymbol{e}_{i j}(t) \rightarrow 0 \text { as } t \rightarrow \infty, \quad i, j \in \mathcal{V}^{*} . \tag{2.67}
> $$

Because of the time-varying nature of [$(2.65)$](#eq-2.65), the distance error dynamics is now given by

<span id="eq-2.68"></span>

$$
\begin{equation*}
\dot{\boldsymbol{e}}_{i j}=\frac{\tilde{\boldsymbol{q}}_{i j}^{\top}\left(\boldsymbol{u}_{i}-\boldsymbol{u}_{j}\right)}{\boldsymbol{e}_{i j}+\boldsymbol{d}_{i j}}-\dot{\boldsymbol{d}}_{i j}, \tag{2.68}
\end{equation*}
$$

where [$(2.6)$](#eq-2.6) and [$(2.1)$](#eq-2.1) were used. As a result, the derivative of [$(2.10)$](#eq-2.10) along [$(2.68)$](#eq-2.68) becomes

<span id="eq-2.69"></span>

$$
\dot{W}=\sum_{(i, j) \in \mathcal{E}^{*}} \boldsymbol{e}_{i j}\left(\boldsymbol{e}_{i j}+2 \boldsymbol{d}_{i j}\right)\left[\tilde{\boldsymbol{q}}_{i j}^{\top}\left(\boldsymbol{u}_{i}-\boldsymbol{u}_{j}\right)-\boldsymbol{d}_{i j} \dot{\boldsymbol{d}}_{i j}\right]=\boldsymbol{z}^{\top}\left(R_\mathcal{D}(\tilde{\boldsymbol{q}}) \boldsymbol{u}-\boldsymbol{d}_{v}\right) \tag{2.69}
$$

where

$$
\boldsymbol{d}_{v}=\left[\ldots, \boldsymbol{d}_{i j} \dot{\boldsymbol{d}}_{i j}, \ldots\right] \in \mathbb{R}^{l}, \quad(i, j) \in \mathcal{E}^{*} \tag{2.70}
$$

with elements ordered as $r_\mathcal{G}$. We assume $\boldsymbol{d}_{i j}$ is a continuously differentiable function of time and $\boldsymbol{d}_{i j}(t), \dot{\boldsymbol{d}}_{i j}(t) \in \mathcal{L}_{\infty}$. The presence of the extra term, $\boldsymbol{d}_{v}$, in the derivative of the Lyapunov function candidate will dictate a different control structure.

>[!caution] Theorem 2.5
> Consider the formation $\mathcal{F}(t)=\left(\mathcal{G}^{*}, \boldsymbol{q}(t)\right)$ with the initial conditions given in [Theorem 2.1](#theorem-2.1). The control law
>
> <span id="eq-2.71"></span>
>
> $$
\boldsymbol{u}=R^{\dagger}_\mathcal{D}(\tilde{\boldsymbol{q}})\left(-k_{v} \boldsymbol{z}+\boldsymbol{d}_{v}\right) \tag{2.71}
> $$
>
> where $R^{\dagger}_\mathcal{D}(\tilde{\boldsymbol{q}})=R^{\top}_\mathcal{D}(\tilde{\boldsymbol{q}})\left[R_\mathcal{D}(\tilde{\boldsymbol{q}}) R^{\top}_\mathcal{D}(\tilde{\boldsymbol{q}})\right]^{-1}$ is the Moore-Penrose pseudoinverse, yields $\boldsymbol{e}=0$ exponentially stable and guarantees that [$(2.66)$](#eq-2.66) is satisfied.

The proof of this theorem is nearly identical to the proof of [Theorem 2.1](#theorem-2.1) so the details are omitted. The main difference is that, since $R_\mathcal{D}(\tilde{\boldsymbol{q}})$ has full row rank for $\boldsymbol{e}(t) \in \Omega_{1}$, then $R_\mathcal{D}(\tilde{\boldsymbol{q}}) R^{\dagger}_\mathcal{D}(\tilde{\boldsymbol{q}})=\mathbf{I}$ for $\boldsymbol{e}(t) \in \Omega_{1}$. Therefore, substituting [$(2.71)$](#eq-2.71) into [$(2.69)$](#eq-2.69) yields

$$
\dot{W}=-k_{v} \boldsymbol{z}^{\top} \boldsymbol{z}=-4 k_{v} W \quad \text { for } \boldsymbol{e}(t) \in \Omega_{1} . \tag{2.72}
$$

From this point on, the proof of [Theorem 2.1](#theorem-2.1) can be directly followed to show that [$(2.66)$](#eq-2.66) holds for $\boldsymbol{e}(0) \in \Omega_{1} \cap \Omega_{2}$.

A fundamental difference exists in the implementation of (2.71) in comparison to the previous controllers of this chapter. Namely, the matrix $R^{\dagger}_\mathcal{D}(\tilde{\boldsymbol{q}})$ couples the variables such that $\boldsymbol{u}_{i}=\boldsymbol{u}_{i}\left(\tilde{\boldsymbol{q}}_{i j}, \boldsymbol{d}_{i j}, \dot{\boldsymbol{d}}_{i j}\right), i=1, \ldots, n$ and $(i, j) \in \mathcal{E}^{*}$. That is, unlike in the previous cases where $j \in \mathcal{N}_{i}\left(\mathcal{E}^{*}\right)$ for the $i^\text{th}$ input, here each input is dependent on all $(i, j) \in \mathcal{E}^{*}$ variables.

Formation maneuvering can be performed on top of dynamic formation acquisition by modifying [$(2.71)$](#eq-2.71) to

<span id="eq-2.73"></span>

$$
\begin{equation*}
\boldsymbol{u}=R^{\dagger}_\mathcal{D}(\tilde{\boldsymbol{q}})\left(-k_{v} \boldsymbol{z}+\boldsymbol{d}_{v}\right)+\boldsymbol{v}_{d} \tag{2.73}
\end{equation*}
$$

where $\boldsymbol{v}_{d}$ was defined in [$(2.24)$](#eq-2.24). It is straightforward to show that [$(2.73)$](#eq-2.73) ensures [$(1.4)$](#eq-1.4) properties by following the proof of [Theorem 2.2](#theorem-2.2).

### Notes
**The directionality of the information exchange among agents** is an important design factor. This issue is of practical importance since it relates to **the number of communication, sensing, and/or control channels of the multi-agent system**.

In the case of bidirectional information exchange, a pair of agents concurrently controls the distance between them, whereas only one agent in the pair is responsible for this task in the unidirectional case. In terms of graph theory, bidirectional (resp., unidirectional) formation controllers are based on undirected (resp., directed) graphs. Undirected formation controllers have built-in redundancy, providing robustness. However, it can also lead to **instability** in the formation acquisition if agent pairs use **slightly different values** for the distance between them due to measurement errors. It was shown that this measurement mismatch causes a distortion of the formation from its desired shape and a circular (resp., helical) orbit of the distorted formation in 2D (resp., 3D).

One possible remedy for this problem is to have the agents communicate their respective measurements to one another and then **use a common value** for control (e.g., the average of the two measurements).

Yet another solution is to **use a directed graph-based controller** since it reduces the overall number of communication/sensing/control channels while avoiding the potential conflict between a pair of agents trying to achieve the same objective. However, in directed graphs it is possible to have cycles in the pathways, which are more challenging to control and can lead to formation instability. Therefore, the issue of **cyclic versus acyclic graphs** is an important consideration for directed formation control.

## 3 Double-Integrator Model [1]
TBC

[^2.1]: Although the argument of the rigidity matrix function is commonly written as q, it is obvious from $r_\mathcal{G}$ and $R_\mathcal{D}$ that $R_\mathcal{D}$ is dependent on $\tilde{\boldsymbol{q}}$ only. Henceforth, we write $R_\mathcal{D}(\tilde{\boldsymbol{q}})$ so it is clear that the matrix is a function of the relative position.

[^2.2]: The variable $u_{a}$ in [$(2.15)$](#eq-2.15) denotes the basic formation acquisition control term that will be embedded in all control algorithms.

[^2.3]: Recall from the statement of the formation maneuvering problem in Section 1 that agent $n$ serves as the reference point through which the rotation axis passes. Therefore, $\tilde{\boldsymbol{q}}_{\text {in }}$ in [$(2.24)$](#eq-2.24) is the relative position between each agent and agent $n$.

[^2.4]: The introduction of the term $-\boldsymbol{u}_{a n}$ in [$(2.54)$](#eq-2.54) is crucial for the following stability analysis of the target interception error since it allows $\boldsymbol{u}_{n}$ to have the simple form in [$(2.56)$](#eq-2.56).

[^2.5]: It is important to point out that the framework $\mathcal{F}^{*}(t)$ is required to be **infinitesimally and minimally rigid** for all time.

[^2.6]: Since the precise smoothness properties are agent model-dependent, they will be specified later.






----

> [1] Marcio de Queiroz, Xiaoyu Cai, and Matthew Feemster, *Formation Control of Multi-Agent Systems: A Graph Rigidity Approach*. USA: John Wiley & Sons, Ltd, 2019. Accessed: Dec. 31, 2025.
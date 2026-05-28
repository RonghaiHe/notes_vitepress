# MINCO: Geometrically Constrained Trajectory Optimization for Multicopters
> Source:
> [1] Z. Wang, X. Zhou, C. Xu, and F. Gao, "Geometrically constrained trajectory optimization for multicopters", *IEEE Trans. Robot.*, vol. 38, no. 5, pp. 3259–3278, Oct. 2022, doi: [10.1109/TRO.2022.3160022](https://doi.org/10.1109/TRO.2022.3160022).

## 1 Preliminaries
### 1.1 Differential Flatness

Consider a dynamical system of the following type

<span id="eq-1"></span>

$$
\dot{\boldsymbol{x}}=\boldsymbol{f}(\boldsymbol{x})+\boldsymbol{g}(\boldsymbol{x})\boldsymbol{u} \tag{1}
$$

with $\boldsymbol{f}:\mathbb{R}^n\mapsto\mathbb{R}^n$, $\boldsymbol{g}:\mathbb{R}^n\mapsto\mathbb{R}^{n\times m}$, state $\boldsymbol{x}\in\mathbb{R}^n$, and input $\boldsymbol{u}\in\mathbb{R}^m$. The map $\boldsymbol{g}$ is assumed to have rank $m$. The system is said to be **differentially flat**, if there exists a **flat output** $\boldsymbol{z}\in\mathbb{R}^m$ determined by $\boldsymbol{x}$ and finite derivatives of $\boldsymbol{u}$, such that $\boldsymbol{x}$ and $\boldsymbol{u}$ can both be parameterized by finite derivatives of $\boldsymbol{z}$:

<span id="eq-2"></span>
<span id="eq-3"></span>

$$
\begin{align*}
\boldsymbol{x}=\Psi_x\left(\boldsymbol{z},\dot{\boldsymbol{z}},\dots,\boldsymbol{z}^{(s-1)}\right) \tag{2}\\ 
\boldsymbol{u}=\Psi_u\left(\boldsymbol{z},\dot{\boldsymbol{z}},\dots,\boldsymbol{z}^{(s)}\right), \tag{3}
\end{align*}
$$

where $\Psi_x:\left(\mathbb{R}^m\right)^{s-1}\mapsto\mathbb{R}^n$ and  $\Psi_u:\left(\mathbb{R}^m\right)^s\mapsto\mathbb{R}^m$ are both induced by $\boldsymbol{f}$ and $\boldsymbol{g}$.  Intuitively, the state and control can be determined from $\boldsymbol{z}$ without explicit integration of the system dynamics [$(1)$](#eq-1).

Leveraging the flatness of a system, the trajectory generation is convenient when there are **only differential constraints** in [$(1)$](#eq-1). If we introduce a new control variable $\boldsymbol{v}=\boldsymbol{z}^{(s)}$ and denote $\boldsymbol{z}^{[s-1]}\in\mathbb{R}^{ms}$ as

<span id="eq-4"></span>

$$
\boldsymbol{z}^{[s-1]}=\left(\boldsymbol{z}^\top,\dot{\boldsymbol{z}}^\top,\dots,\boldsymbol{z}^{{(s-1)}^\top}\right)^\top, \tag{4}
$$

the input $\boldsymbol{u}=\Psi_u\left(\boldsymbol{z}^{[s-1]},\boldsymbol{v}\right)$ then exactly **linearizes** the original flat system into $m$ decoupled chains of $s$-integrators. Let $z_i$ denote the $i$-th entry in $\boldsymbol{z}$, $v_i$ the $i$-th entry in $\boldsymbol{v}$ and
$\boldsymbol{z}_i^{[s-1]}=\left(z_i,\dot{z}_i,\dots,z^{(s-1)}_i\right)^\top$. The $i$-th integrator chain is

<span id="eq-5"></span>

$$
\dot{\boldsymbol{z}}_i^{[s-1]}=\begin{pmatrix}\mathbf{0} & \mathbf{I}_{s-1} \\0 & \mathbf{0}^\top\end{pmatrix}
\boldsymbol{z}_i^{[s-1]}+
\begin{pmatrix}\mathbf{0} \\1 \end{pmatrix}
v_i, \tag{5}
$$

where $\mathbf{0}$ and $\mathbf{I}$ are a zero matrix and an identity matrix with appropriate sizes, respectively. Given an initial state and a goal state, boundary values of each integrator chain [$(5)$](#eq-5) can be algebraically computed. Thus **any trajectory integrated from these $m$ integrator chains can be transformed into a feasible trajectory for the original flat system** via [$(2)$](#eq-2) and [$(3)$](#eq-3).

For dynamics with a small $m$, the flatness maps $\Psi_x$ and $\Psi_u$ **further reduce the trajectory dimension and eliminate the differential constraints** [$(1)$](#eq-1), which is illustrated in [Fig. 1](#fig-9-1). As a side effect, **nonlinearity** coming from both $\Psi_x$ and $\Psi_u$ brings **additional difficulties** in trajectory generation for $\boldsymbol{z}$ when there are additional state-input constraints for [$(1)$](#eq-1). However, such an effect is relieved if the **flat-output space** coincides with the **configuration space** of the relevant planning problem.

<figure>
   <img src="./images/9StateInputToFlatOutput.jpg" id="fig-9-1" alt="fig-9-1" width="100%" align="center">
   <div align="center"><figcaption> Figure 1[1]: Transform $\Psi_u$ and $\Psi_x$ of a flat system eliminate differential constraints (blue surface) from dynamics in the state-input space (left coordinate). The original state-input constraint $\mathcal{G}_\mathcal{D}$ (red area) is also transformed into a new constraint $\mathcal{G}$ (blue volume) in the flat-output space (right coordinate).</figcaption></div>
</figure>

### 1.2 Direct Optimization in Flat-Output Space
Fortunately, the differential flatness of multicopters has been well studied and shown to have physically meaningful **flat-output** space which **overlaps with the configuration space**. Explicit forms of $\Psi_x$ and $\Psi_u$ are available in previous research (See original paper for details) for a variety of underactuated multicopters. More importantly, their flat outputs share the same form in general:

<span id="eq-6"></span>

$$
\boldsymbol{z}=\left(p_x,p_y,p_z,\psi\right)^\top \tag{6}
$$

where $\left(p_x,p_y,p_z\right)^\top$ is the translation of the Center of Gravity (CoG) and $\psi$ the yaw angle of the vehicle. The flat output $\boldsymbol{z}$, especially its translation, provides a lot of convenience for the multicopter motion planning with complex spatial constraints.

To generate feasible motions for a multicopter, we first optimize the trajectory $\boldsymbol{z}(t):[0,T]\mapsto\mathbb{R}^m$ in its flat-output space such that **most of the spatial constraints are directly enforced**. Then, the flatness maps $\Psi_x$ and $\Psi_u$ are applied to transform $\boldsymbol{z}(t)$ into the state-input trajectory $\boldsymbol{x}(t)$ and $\boldsymbol{u}(t)$.

For motion smoothness, the quadratic control effort with time regularization is adopted as a cost functional of $\boldsymbol{z}(t)$. General constraints on multicopters can be classified into **configuration constraints** and **user-defined dynamic constraints**. Normally, a collision-free motion implies

<span id="eq-7"></span>

$$
\boldsymbol{z}(t)\in\mathcal{F},~\forall t\in[0,T], \tag{7}
$$

where $\mathcal{F}$ is the concerned **obstacle-free** region in **configuration space**. Besides, user-defined state-input constraints such as **actuator limits or task-specific constraints** are denoted by

<span id="eq-8"></span>

$$
\mathcal{G}_\mathcal{D}\left(x(t),u(t)\right)\preceq\mathbf{0},~\forall t\in[0,T]. \tag{8}
$$

Exploiting $\Psi_x$ and $\Psi_u$, the corresponding constraints on $\boldsymbol{z}(t)$ are computed as

<span id="eq-9"></span>

$$
\mathcal{G}_\mathcal{D}\left(\Psi_x\left(z^{[s-1]}(t)\right),\Psi_u\left(z^{[s]}(t)\right)\right)\preceq\mathbf{0},~\forall t\in[0,T]. \tag{9}
$$

Apparently, via the flatness, a constraint on $x$ and $u$ has its equivalent form on the finite derivatives of $z(t)$. For simplicity, we denote [$(9)$](#eq-9) hereafter by

<span id="eq-10"></span>

$$
\mathcal{G}\left(z(t),\dot{z}(t),\dots,z^{(s)}(t)\right)\preceq\mathbf{0},~\forall t\in[0,T], \tag{10}
$$

where $\mathcal{G}$ consists of $n_g$ equivalent constraints.

It is worth noting that we do not make further assumptions on the multicopter dynamics and flatness maps. In other words, the proposed framework supports a wide range of multicopters.

### 1.3 Problem Formulation
Concluding above descriptions gives the following problem:

<span id="eq-11"></span>

$$
\begin{align}
\min_{\boldsymbol{z}(t), T}&\quad {\int_{0}^{T}{\boldsymbol{v}(t)^\top \mathbf{W}\boldsymbol{v}(t)\,\mathrm{d}t}+\rho(T)}, \tag{11a}\\
\mathrm{s.t.}\quad& \boldsymbol{z}^{(s)}(t)=\boldsymbol{v}(t),\quad\forall t\in[0,T],\tag{11b}\\
& \mathcal{G}\left(\boldsymbol{z}(t),\dots,\boldsymbol{z}^{(s)}(t)\right)\preceq\mathbf{0},\quad\forall t\in[0,T],\tag{11c}\\
& \boldsymbol{z}(t)\in\mathcal{F},\quad\forall t\in[0,T],\tag{11d}\\
& \boldsymbol{z}^{[s-1]}(0)=\bar{\boldsymbol{z}}_o,\quad \boldsymbol{z}^{[s-1]}(T)=\bar{\boldsymbol{z}}_f,\tag{11e}
\end{align}
$$

where $\mathbf{W}\in\mathbb{R}^{m\times m}$ is a positive diagonal matrix, $\rho:[0,\infty)\mapsto[0,\infty]$ the time regularization, $\bar{\boldsymbol{z}}_o\in\mathbb{R}^{ms}$ the initial condition and $\bar{\boldsymbol{z}}_f\in\mathbb{R}^{ms}$ the terminal condition. The control input $\boldsymbol{v}$ is **allowed to be discontinuous in a finite number of time instants**.

The trajectory optimization [$(11)$](#eq-11) is nontrivial because of the **continuous-time constraints** $\mathcal{G}$ and the **nonconvex set** $\mathcal{F}$. We further specify some reasonable conditions to make it a well-defined problem. As for time regularization $\rho$, it trades off between the **control effort** and the **expectation of total time**,

<span id="eq-12"></span>

$$
\rho_s(T)=\sum_{i=0}^{M_T}{b_iT^i},\tag{12}
$$

where $b_{M_T}$ is positive. Common choices are $\rho_s(T)=k_\rho T$ and $\rho_s(T)=k_\rho(T-T_\Sigma)^2$ with an expected time $T_\Sigma$. Besides, $\rho$ can also be defined to strictly fix the total time:

<span id="eq-13"></span>

$$
\rho_f(T)=\begin{cases} 0 & \mathrm{if}~T=T_\Sigma,\\ \infty & \mathrm{if}~T\neq T_\Sigma. \end{cases}\tag{13}
$$

As for nonlinear constraints $\mathcal{G}$, they are required to be $C^2$, i.e., **twice continuously differentiable**. As for the feasible region $\mathcal{F}$ in the configuration space, we approximate it geometrically by the union of $M_\mathcal{P}$ **closed convex sets** as

<span id="eq-14"></span>

$$
\mathcal{F}\simeq\tilde{\mathcal{F}}=\bigcup_{i=1}^{M_\mathcal{P}}\mathcal{P}_i. \tag{14}
$$

For simplicity, locally sequential connection is assumed on these convex sets:

<span id="eq-15"></span>

$$
\begin{cases}
\mathcal{P}_i\cap\mathcal{P}_j=\varnothing & \mathrm{if}~|i-j|=2,\\
\mathrm{Int}\left(\mathcal{P}_i\cap\mathcal{P}_j\right)\neq\varnothing & \mathrm{if}~|i-j|\leqslant 1,
\end{cases} \tag{15}
$$

where $\mathrm{Int}\left(\cdot\right)$ means the interior of a set. The translation of $\bar{\boldsymbol{z}}_o$ and $\bar{\boldsymbol{z}}_f$ is inscribed in $\mathcal{P}_1$ and $\mathcal{P}_{M_\mathcal{P}}$, respectively. As for $\tilde{\mathcal{F}}$, we consider the case that each $\mathcal{P}_i$ is a closed $m$-dimensional ball:

<span id="eq-16"></span>

$$
\mathcal{P}^\mathcal{B}_i=\left\{\boldsymbol{x}\in\mathbb{R}^m~\Big|~\|\boldsymbol{x}-\boldsymbol{o}_i\|_2\leqslant r_i\right\}, \tag{16}
$$

or, more generally, a bounded convex polytope described by its $\mathcal{H}$-representation with potentially redundant constraints:

<span id="eq-17"></span>

$$
\mathcal{P}^\mathcal{H}_i=\left\{\boldsymbol{x}\in\mathbb{R}^m~\Big|~\mathbf{A}_i\boldsymbol{x}\preceq \boldsymbol{b}_i\right\}. \tag{17}
$$

For the optimization in [$(11)$](#eq-11), we aim to construct a **computationally efficient solver** while retaining the **flexibility to handle different task-specific constraints** $\mathcal{G}_\mathcal{D}$ in [$(8)$](#eq-8).

## 2 Multi-Stage Control Effort Minimization
In this section, we analyze the multi-stage control effort minimization **without functional constraints**.

For this problem, we propose easy-to-use optimality conditions for general cases, which are proved to be necessary and sufficient. Leveraging our conditions, the optimal trajectory is directly constructed in **linear complexity of time and space**, without evaluating the cost functional explicitly or implicitly.

Base on them, a novel trajectory class along with linear-complexity spatial-temporal deformation is designed to meet user-defined objectives in various trajectory planning scenarios.

### 2.1 Unconstrained Control Effort Minimization

When constraint $\mathcal{F}$ exists, **adjusting the waypoints or control points** of a trajectory helps to ensure safety. When constraint $\mathcal{G}$ exists, adjusting the **time allocation** also helps to enforce physical limits. Therefore, **spatial and temporal parameters** are both vital to a flexible trajectory representation. A natural problem is to generate a smooth trajectory subject to these parameters.

We solve **Linear Quadratic Minimum-Time (LQMT)** problems to generate trajectories from spatial-temporal parameters. Although the LQMT problems have extensive studies and applications, only single-stage problems are considered in the literature. We study the multi-stage problems where **intermediate points and time vector are fixed** in advance for multi-piece trajectories. Consider an $M$-stage control effort minimization without $\mathcal{F}$ and $\mathcal{G}$,

<span id="eq-18"></span>

$$
    \begin{align}
    \min_{\boldsymbol{z}(t)}&~{\int_{t_0}^{t_M}{\boldsymbol{v}(t)^\top \mathbf{W}\boldsymbol{v}(t)}\mathrm{~d}t},\tag{18a}\\
    \mathrm{s.t.}~&~\boldsymbol{z}^{(s)}(t)=\boldsymbol{v}(t),~\forall t\in[t_0,t_M],\tag{18b}\\
    &~\boldsymbol{z}^{[s-1]}(t_0)=\bar{\boldsymbol{z}}_o,~\boldsymbol{z}^{[s-1]}(t_M)=\bar{\boldsymbol{z}}_f,\tag{18c}\\
    &~\boldsymbol{z}^{[d_i-1]}(t_i)=\bar{\boldsymbol{z}}_i,~1\leqslant i<M,\tag{18d}\\
    &~t_{i-1}<t_i,~1\leqslant i\leqslant M.\tag{18e}
    \end{align}
$$

The time interval $[t_0,t_M]$ is split into $M$ stages by $M+1$ fixed timestamps, with constant boundary conditions $\bar{\boldsymbol{z}}_o,\bar{\boldsymbol{z}}_f\in\mathbb{R}^{ms}$. Intermediate conditions $\bar{\boldsymbol{z}}_i\in\mathbb{R}^{md_i}$ with $d_i\leqslant s$ specify the value of $\boldsymbol{z}(t_i), \dot{\boldsymbol{z}}(t_i),\dots,\boldsymbol{z}^{(d_i-1)}(t_i)$, where $d_i$ is number of derivatives fixed at $t_i$. For example, if $\boldsymbol{z}(t)$ is only required to pass a given position at $t_i$, then $d_i=1$ because $\bar{\boldsymbol{z}}_i$ contains the $0$-order derivative and nothing else.

Existing works focus on the necessary conditions for special cases of [$(18)$](#eq-18). In aerial robotics area, the QP formulation and the closed-form one implicitly or explicitly optimize unknown knot derivatives, taking parameterization as **a priori**. This extra computation actually makes them less efficient.

In control area, a special case where $d_i=1$ is also studied via controllability Gramian. The result is for **general linear systems with possibly nonpolynomial solutions** while it is less intuitive considering the computational aspect. These necessary conditions can cause **potential degeneracy** in trajectory representation and sensitivity, if further parametric optimization on spatial-temporal parameters is needed.

### 2.2 Optimality Conditions
We propose **necessary and sufficient optimality conditions** for [$(18)$](#eq-18) with all possible settings of $d_i$, $\bar{\boldsymbol{z}}_i$, and $t_i$. Thus, an optimal trajectory can be directly constructed from spatial-temporal parameters. Furthermore, the **existence and uniqueness of the optimal trajectory** are always guaranteed.

We transform [$(18)$](#eq-18) into the **Mayer form** in which a new state $\boldsymbol{y}\in\mathbb{R}^{ms+1}$ augmented by $\tilde{y}\in\mathbb{R}$ is defined as

<span id="eq-19"></span>

$$
\boldsymbol{y}=\begin{pmatrix} \boldsymbol{z}^{[s-1]} \\ \tilde{y} \end{pmatrix}. \tag{19}
$$

The augmented system $\dot{\boldsymbol{y}}=\hat{f}\left(\boldsymbol{y},\boldsymbol{v}\right)$ has the structure

<span id="eq-20"></span>

$$
\dot{\boldsymbol{y}}=
\begin{pmatrix} \bar{\mathbf{A}} & \mathbf{0} \\ \mathbf{0}^\top & 0 \end{pmatrix}
\boldsymbol{y}+
\begin{pmatrix} \mathbf{0} \\ \boldsymbol{v} \\ \boldsymbol{v}^\top \mathbf{W}\boldsymbol{v} \end{pmatrix}, \tag{20}
$$

where

<span id="eq-21"></span>

$$
\bar{\mathbf{A}} =
\begin{pmatrix}
\mathbf{0} & \mathbf{I}_{m(s-1)} \\
\mathbf{0}_{m\times m} & \mathbf{0}^\top
\end{pmatrix}
\in\mathbb{R}^{ms\times ms}. \tag{21}
$$

We design a running process for the augmented system in $M$ stages, of which the $i$-th is $\Delta_i=[t_{i-1}, t_i]$. It is worth noting that state switching occurs in this running process. Strictly speaking, the state switching only occurs on $\tilde{y}$ at the beginning of each stage.

Denote by $\boldsymbol{y}_{[i]}:\Delta_i\mapsto\mathbb{R}^{ms+1}$ the **augmented state trajectory** in the $i$-th stage, which consists of two parts, $\boldsymbol{z}^{[s-1]}_{[i]}$ and $\tilde{y}_{[i]}$.

At each timestamp $t_i$, the state transfers from $\boldsymbol{y}_{[i]}$ to $\boldsymbol{y}_{[i+1]}$, and the part $\tilde{y}$ is reset as

<span id="eq-22"></span>

$$
\tilde{y}_{[i+1]}(t_{i})=0,~0\leqslant i<M, \tag{22}
$$

thus switching the partial state from $\tilde{y}_{[i]}(t_{i})$ to $0$.

The $\boldsymbol{z}^{[s-1]}$ part remains **continuous** between stages, which means

<span id="eq-23"></span>

$$
\boldsymbol{z}^{[s-1]}_{[i]}(t_i)=\boldsymbol{z}^{[s-1]}_{[i+1]}(t_i),~1\leqslant i<M. \tag{23}
$$

The conditions in [$(18c)$](#eq-18) and [$(18d)$](#eq-18) are still satisfied, i.e.,

<span id="eq-24"></span>
<span id="eq-25"></span>

$$
\begin{align}
  &\boldsymbol{z}^{[s-1]}_{[1]}(t_0)=\bar{\boldsymbol{z}}_o,~\boldsymbol{z}^{[s-1]}_{[M]}(t_M)=\bar{\boldsymbol{z}}_f, \tag{24}\\
&\boldsymbol{z}^{[d_i-1]}_{[i]}(t_i)=\bar{\boldsymbol{z}}_i,~1\leqslant i<M. \tag{25} 
\end{align}
$$

In this process, the cost functional in [$(18)$](#eq-18) is converted into the sum of terminal cost of each stage for the augmented system, i.e., $\sum\limits_{i=1}^{M}{\tilde{y}_{[i]}(t_i)}$.
Therefore, the optimal trajectories for the augmented system and the original one are identical in $\boldsymbol{z}^{[s-1]}$.

We utilize the **Hybrid Maximum Principle** to derive **necessary conditions** for the optimal solution.

<span id="thm-1"></span>

> [!caution] Theorem 1: Hybrid Maximum Principle
> Let $t_0<\dots<t_M$ be real numbers and $\Delta_k=[t_{k-1},t_k]$. For any collection of absolute continuous functions $\boldsymbol{x}_k:\Delta_k\mapsto\mathbb{R}^{n_k}$, define a vector, $\boldsymbol{x}_\Sigma\in\mathbb{R}^{\bar{n}}$ where $\bar{n}=2\sum\limits_{k=1}^M{n_k}$, as
>
> <span id="eq-26"></span>
>
> $$ \boldsymbol{x}_\Sigma=\left(\boldsymbol{x}_1^\top(t_0),\boldsymbol{x}_1^\top(t_1),\dots,\boldsymbol{x}_M^\top(t_{M-1}),\boldsymbol{x}_M^\top(t_M)\right)^\top. \tag{26}$$
>
> On the time interval $\Delta=[t_0,t_M]$ consider the problem
>
> <span id="eq-27"></span>
>
> $$ \begin{align} \min_{\boldsymbol{u}_k,\boldsymbol{x}_k}&~{J(\boldsymbol{x}_\Sigma)}, \tag{27a}\\ \mathrm{s.t.}~&~\dot{\boldsymbol{x}}_k(t)=\boldsymbol{f}_k\left(\boldsymbol{x}_k(t),\boldsymbol{u}_k(t)\right),\tag{27b}\\ &~\boldsymbol{u}_k(t)\in U_k\subseteq\mathbb{R}^{r_k}, \tag{27c}\\ &~\forall t\in\Delta_k,~k=1,\dots,M, \tag{27d}\\ &~\boldsymbol{\eta}(\boldsymbol{x}_\Sigma)=\mathbf{0}, \tag{27e}\end{align} $$
>
> where $\boldsymbol{f}_k:\mathbb{R}^{n_k}\times\mathbb{R}^{r_k}\mapsto\mathbb{R}^{n_k}$, $J:\mathbb{R}^{\bar{n}}\mapsto\mathbb{R}$ and $\boldsymbol{\eta}:\mathbb{R}^{\bar{n}}\mapsto\mathbb{R}^q$ are continuously differentiable, $\boldsymbol{u}_k:\mathbb{R}\mapsto\mathbb{R}^{r_k}$ are measurable and bounded on the corresponding $\Delta_k$.
>
> Denote an optimal process for [$(27)$](#eq-27) by $\left(\boldsymbol{x}^*(t),\boldsymbol{u}^*(t)\right)$. Then, there exists a collection $(\alpha, \boldsymbol{\gamma}, \boldsymbol{\psi}_1,\dots,\boldsymbol{\psi}_M)$, where $\alpha\geqslant 0$, $\boldsymbol{\gamma}\in\mathbb{R}^q$ and $\boldsymbol{\psi}_k:\Delta_k\mapsto\mathbb{R}^{n_k}$ are Lipschitz continuous. It generates $M$ Pontryagin functions
>
> <span id="eq-28"></span>
>
> $$ H_k(\boldsymbol{\psi}_k,\boldsymbol{x}_k,\boldsymbol{u}_k)=\boldsymbol{\psi}_k^\top \boldsymbol{f}_k(\boldsymbol{x}_k,\boldsymbol{u}_k),~t\in\Delta_k, \tag{28}$$
>
> and a Lagrange function $L(\boldsymbol{x}_\Sigma)=\alpha J(\boldsymbol{x}_\Sigma)+\boldsymbol{\gamma}^\top\boldsymbol{\eta}(\boldsymbol{x}_\Sigma)$. The following conditions are satisfied for all $k=1,\dots,M$.
> - **Nontriviality condition**:
>
> <span id="eq-29"></span>
>
> $$ (\alpha, \boldsymbol{\gamma}^\top)\neq\mathbf{0}; \tag{29}$$
> - **Adjoint equations**: for almost all $t\in\Delta_k$,
>
> <span id="eq-30"></span>
>
> $$ \dot{\boldsymbol{\psi}}_k(t)=-\frac{\partial H_k}{\partial \boldsymbol{x}_k}(\boldsymbol{\psi}_k(t),\boldsymbol{x}_k^*(t),\boldsymbol{u}_k^*(t)); \tag{30}$$
> - **Transversality conditions**:
>
> <span id="eq-31"></span>
>
>$$ \left\{\begin{gathered} \boldsymbol{\psi}_k(t_{k-1})=L_{\boldsymbol{x}_k(t_{k-1})}(\boldsymbol{x}_\Sigma^*),\\ \boldsymbol{\psi}_k(t_k)=-L_{\boldsymbol{x}_k(t_k)}(\boldsymbol{x}_\Sigma^*); \end{gathered}\right. \tag{31}$$
> - **Maximality conditions**: for all $t\in\Delta_k$,
>
> <span id="eq-32"></span>
>
> $$\begin{align*} &~H_k(\boldsymbol{\psi}_k(t),\boldsymbol{x}_k^*(t),\boldsymbol{u}_k^*(t))\\ =&\sup_{\boldsymbol{u}_k\in U_k}{H_k(\boldsymbol{\psi}_k(t),\boldsymbol{x}_k^*(t),\boldsymbol{u}_k)}\\ =&~0. \tag{32}\end{align*} $$

**Proof**:

The proof can be directly adapted from Theorem 4 by Dmitruk and Kaganovich. Here we only consider each system $f_k$ to be **time-invariant** and all intervals $\Delta_k$ to be **fixed**. Besides, no inequality constraints are specified on $\boldsymbol{x}_\Sigma$. <div style="text-align: right;">$\square$</div>

According to [Theorem 1](#thm-1), the **costate** $\boldsymbol{\psi}_{[i]}:\Delta_i\mapsto\mathbb{R}^{ms+1}$ in the $i$-th stage is defined as

<span id="eq-33"></span>

$$
\boldsymbol{\psi}_{[i]}=\begin{pmatrix} \boldsymbol{\lambda}_{[i]} \\ \mu_{[i]} \end{pmatrix}
=\left({\boldsymbol{\lambda}_{[i]}}_1, {\boldsymbol{\lambda}_{[i]}}_2, \dots, {\boldsymbol{\lambda}_{[i]}}_s, \mu_{[i]}\right)^\top, \tag{33}
$$

where $\mu_{[i]}:\Delta_i\mapsto\mathbb{R}$. ${\boldsymbol{\lambda}_{[i]}}_j:\Delta_i\mapsto\mathbb{R}^m$ is the $j$-th map in $\boldsymbol{\lambda}_{[i]}:\Delta_i\mapsto\mathbb{R}^{ms}$. The $i$-th Pontryagin function of [$(20)$](#eq-20) is

<span id="eq-34"></span>

$$
\begin{align*}
  &H_i(\boldsymbol{\psi}_{[i]}, \boldsymbol{y}_{[i]}, \boldsymbol{v}_{[i]})=\boldsymbol{\psi}_{[i]}^\top \hat{f}(\boldsymbol{y}_{[i]}, \boldsymbol{v}_{[i]})\\
&=\boldsymbol{\lambda}_{[i]}^\top\bar{\mathbf{A}}\boldsymbol{z}_{[i]}^{[s-1]}+{\boldsymbol{\lambda}_{[i]}^\top}_s \boldsymbol{v}_{[i]}+\mu_{[i]}\boldsymbol{v}_{[i]}^\top\mathbf{W}\boldsymbol{v}_{[i]}.\tag{34}
\end{align*}
$$

By applying the adjoint equation [$(30)$](#eq-30) for $\mu_{[i]}$, we have $\dot{\mu}_{[i]}=0$, which means $\mu_{[i]}(t)=\bar{\mu}_i\in\mathbb{R}$ is a **constant** in $\Delta_i$. Therefore, $H_i$ is always a quadratic function of $\boldsymbol{v}_{[i]}$,

<span id="eq-35"></span>

$$
H_i(\boldsymbol{\psi}_{[i]}, \boldsymbol{y}_{[i]}, \boldsymbol{v}_{[i]})=\boldsymbol{\lambda}_{[i]}^\top\bar{\mathbf{A}}\boldsymbol{z}_{[i]}^{[s-1]}+{\boldsymbol{\lambda}_{[i]}^\top}_s \boldsymbol{v}_{[i]}+\bar{\mu}_i \boldsymbol{v}_{[i]}^\top\mathbf{W}\boldsymbol{v}_{[i]}. \tag{35}
$$

By applying the adjoint equation for $\boldsymbol{\lambda}_{[i]}$, we obtain

<span id="eq-36"></span>

$$
\dot{\boldsymbol{\lambda}}_{[i]}=-\bar{\mathbf{A}}^\top\boldsymbol{\lambda}_{[i]}, \tag{36}
$$

which is expanded as

<span id="eq-37"></span>

$$
{{}\dot{\boldsymbol{\lambda}}_{[i]}}_j=\begin{cases} \mathbf{0} & \mathrm{if}~j=1, \\ -{\boldsymbol{\lambda}_{[i]}}_{j-1} & \mathrm{if}~2\leqslant j\leqslant s. \end{cases}\tag{37}
$$

It is obvious that ${\boldsymbol{\lambda}_{[i]}}_s(t)$ is an $s-1$ degree polynomial.

According to maximality conditions [$(32)$](#eq-32), the supremum of $H_i$ is always $0$ in $\Delta_i$. Thus the positive definiteness of $\mathbf{W}$ implies $\bar{\mu}_i\leqslant 0$. If $\bar{\mu}_i=0$, then [$(35)$](#eq-35) becomes a linear function of $\boldsymbol{v}_{[i]}$. The zero supremum means that ${\boldsymbol{\lambda}_{[i]}}_s(t)=\mathbf{0}$ in $\Delta_i$. As the result of [$(36)$](#eq-36), $\boldsymbol{\psi}_{[i]}(t)=\mathbf{0}$ holds for all $t$ in $\Delta_i$. In such a case, a contradiction occurs that the nontriviality condition [$(29)$](#eq-29) and the transversality conditions [$(31)$](#eq-31) cannot be satisfied at the same time. Therefore, $\bar{\mu}_i<0$ always holds in the whole $\Delta_i$. The optimal control $\boldsymbol{v}_{[i]}^*$ can be obtained from

<span id="eq-38"></span>

$$
\frac{\partial H_i}{\partial \boldsymbol{v}_{[i]}}(\psi_{[i]}, y_{[i]}^*, \boldsymbol{v}_{[i]}^*)={\boldsymbol{\lambda}_{[i]}}_s+2\bar{\mu}_i\mathbf{W}\boldsymbol{v}_{[i]}^*=\mathbf{0}, \tag{38}
$$

i.e.,

<span id="eq-39"></span>

$$
\boldsymbol{v}_{[i]}^*(t)=-\frac{1}{2\bar{\mu}_i}\mathbf{W}^{-1}{\boldsymbol{\lambda}_{[i]}}_s(t),~\forall t\in\Delta_i.
$$

Then, $\boldsymbol{z}_{[i]}^*$ produced by a chain of $s$-integrators from ${\boldsymbol{\lambda}_{[i]}}_s(t)$, is a $2s-1$ degree polynomial.

To further explore structures of the solution, we generate the Lagrange function using the cost of augmented system along with all constraints in [$(23)$](#eq-23), [$(24)$](#eq-24) and [$(25)$](#eq-25). We have

<span id="eq-40"></span>

$$
\begin{align*}
L(y_\Sigma)=&~\alpha\sum_{i=1}^{M}{\tilde{y}_{[i]}(t_i)}+\sum_{i=0}^{M-1}{\gamma_i\tilde{y}_{[i+1]}(t_{i})}\\
&+~\sum_{i=1}^{M-1}\left(\boldsymbol{\zeta}_i^\top,\boldsymbol{\sigma}_i^\top\right)\left(\boldsymbol{z}^{[s-1]}_{[i]}(t_i)-\boldsymbol{z}^{[s-1]}_{[i+1]}(t_i)\right)\\
&+~\boldsymbol{\theta}_o^\top\left(\boldsymbol{z}^{[s-1]}_{[1]}(t_0)-\bar{\boldsymbol{z}}_o\right)+\boldsymbol{\theta}_f^\top\left(\boldsymbol{z}^{[s-1]}_{[M]}(t_M)-\bar{\boldsymbol{z}}_f\right)\\
&+~\sum_{i=1}^{M-1}\boldsymbol{\theta}_i^\top\left(\boldsymbol{z}^{[d_i-1]}_{[i]}(t_i)-\bar{\boldsymbol{z}}_i\right), \tag{40}
\end{align*}
$$

where $\gamma_i\in\mathbb{R}$, $\boldsymbol{\zeta}_i\in\mathbb{R}^{md_i}$, $\boldsymbol{\sigma}_i\in\mathbb{R}^{m(s-d_i)}$, $\boldsymbol{\theta}_o\in\mathbb{R}^{ms}$, $\boldsymbol{\theta}_f\in\mathbb{R}^{ms}$ and $\boldsymbol{\theta}_i\in\mathbb{R}^{md_i}$ are all constant coefficients of corresponding constraints, $y_\Sigma$ is defined as in [$(26)$](#eq-26). Following transversality conditions [$(31)$](#eq-31), taking the derivative of $L$ w.r.t. $\boldsymbol{y}_\Sigma$ gives the boundary values of costates $\boldsymbol{\psi}_{[i]}$ and $\boldsymbol{\psi}_{[i+1]}$, i.e.,

<span id="eq-41"></span><span id="eq-42"></span>

$$
\begin{gather*}
\boldsymbol{\lambda}_{[i]}(t_i)=-\begin{pmatrix} \boldsymbol{\zeta}_i+\boldsymbol{\theta}_i \\\boldsymbol{\sigma}_i \end{pmatrix},~\boldsymbol{\lambda}_{[i+1]}(t_i)=-\begin{pmatrix} \boldsymbol{\zeta}_i \\\boldsymbol{\sigma}_i \end{pmatrix}, \tag{41}\\
\mu_{[i]}(t_i)=\mu_{[i+1]}(t_{i+1})=-\alpha. \tag{42}
\end{gather*}
$$

Because $\mu_{[i+1]}(t)=\bar{\mu}_{i+1}$ in $\Delta_{i+1}$,  we have

<span id="eq-43"></span>

$$
\bar{\mu}_i=-\alpha,~1\leqslant i\leqslant M. \tag{43}
$$

Finally, by substituting [$(36)$](#eq-36), [$(41)$](#eq-41) and [$(43)$](#eq-43) into [$(39)$](#eq-39), we obtain that the optimal controls of two consecutive stages satisfy

<span id="eq-44"></span>

$$
{\boldsymbol{v}^*}_{[i]}^{(j)}(t_i)={\boldsymbol{v}^*}_{[i+1]}^{(j)}(t_i),~ 0\leqslant j<(s-d_i). \tag{44}
$$

We finally know that the optimal control of the problem [$(18)$](#eq-18) is actually $s-d_i-1$ times continuously differentiable at the timestamp $t_i$. Accordingly, the optimal state trajectory, consisting of $M$ polynomials with $2s-1$ degree, is indeed $2s-d_i-1$ times continuously differentiable at $t_i$.

Now we conclude the conditions derived from both [$(39)$](#eq-39) and [$(44)$](#eq-44) in the following theorem, which are proved to be **necessary and sufficient** optimality conditions of [$(18)$](#eq-18).

<span id="thm-2"></span>

> [!caution] Theorem 2: Optimality Conditions
> A trajectory, denoted by $\boldsymbol{z}^*(t):[t_0, t_M]\mapsto\mathbb{R}^{m}$, is optimal for the problem [$(18)$](#eq-18), if and only if the following conditions are satisfied:
> - The map $\boldsymbol{z}^*(t):[t_{i-1}, t_i]\mapsto\mathbb{R}^{m}$ is parameterized as a $2s-1$ degree polynomial for any $1\leqslant i\leqslant M$;
> - The boundary conditions in [$(18c)$](#eq-18);
> - The intermediate conditions in [$(18d)$](#eq-18);
> - $\boldsymbol{z}^*(t)$ is $\bar{d}_i-1$ times continuously differentiable at $t_i$ for any $1\leqslant i<M$ where $\bar{d}_i=2s-d_i$.
>
> Moreover, a unique trajectory exists for these conditions.

**Proof (Sketch)**:

<details>
    <summary> Details of Proof (Sketch) </summary>
    
The proof of necessity is evident in the analyses from [$(33)$](#eq-33) to [$(44)$](#eq-44) that are directly derived from [Theorem 1](#thm-1). The proof of sufficiency is sketched below:
- The first and fourth conditions always determine a linear spline space of dimension $2s+\sum\limits_{i=1}^{M-1}{d_i}$ for any sequence of $d_i$;
- The second and third conditions are shown to form a square coefficient matrix on a basis of the spline space;
- The matrix is proved to be nonsingular since $t_{i-1}<t_i$ for each $i$, implying the existence and uniqueness of solution;
- The existence and uniqueness for the necessary conditions yield their sufficiency. This proof of sufficiency is detailed in Appendix of Paper (TODO).
</details>

To further explain the optimality conditions, we take the **multi-stage jerk minimization** as an example.

In this example, the position, velocity and acceleration are states of the jerk-controlled system ($s=3$). There are intermediate points ($d_i=1$) that the trajectory should pass through at certain timestamps.

The continuity of state only requires the continuity up to acceleration of the minimum-jerk trajectory, while jerk and snap of the optimal trajectory are also continuous everywhere. Accordingly, if we enforce all these continuity conditions, then [Theorem 2](#thm-2) guarantees that only one trajectory exists, which is exactly the optimal one.

### 2.3 Minimization Without Cost Functional
[Theorem 2](#thm-2) provides a direct way to construct the unique optimal trajectory. The computation enjoys **linear complexity in time and space**. It does not even require explicit or implicit evaluation of the cost functional or its gradient.

Consider an $m$-dimensional trajectory whose $i$-th piece is denoted by an $N=2s-1$ degree polynomial:

<span id="eq-45"></span>

$$
\boldsymbol{p}_i(t)=\mathbf{c}_i^\top\boldsymbol{\beta}(t-t_{i-1}),~t\in[t_{i-1},t_i], \tag{45}
$$

where $\boldsymbol{\beta}(x)=\left(1,x,\dots,x^N\right)^\top$ is the basis and $\mathbf{c}_i\in\mathbb{R}^{2s\times m}$ the coefficients. For simplicity, we use the timeline relative to $t_0=0$. The trajectory is described by a coefficient matrix $\mathbf{c}\in\mathbb{R}^{2Ms\times m}$ and a time vector $\mathbf{T}\in\mathbb{R}_{>0}^M$ defined by

<span id="eq-46"></span>

$$
\mathbf{c}=\left(\mathbf{c}_1^\top, \dots, \mathbf{c}_M^\top\right)^\top,~\mathbf{T}=\left(T_1, \dots, T_M\right)^\top, \tag{46}
$$

where $T_i$ means the duration of the $i$-th piece. Then we have the timestamp $t_i=\sum\limits_{j=1}^{i}{T_j}$ and the total duration $T=\|\mathbf{T}\|_1$. The $M$-piece trajectory $\boldsymbol{p}:[0,T]\mapsto\mathbb{R}^m$ is defined by

<span id="eq-47"></span>

$$
\boldsymbol{p}(t)=\boldsymbol{p}_i(t),~\forall t\in[t_{i-1},t_i),~\forall i\in\left\{1,\dots,M\right\}. \tag{47}
$$

To compute the unique solution for [$(18)$](#eq-18), we directly enforce optimality conditions on the coefficient matrix $\mathbf{c}$. Denote by $\mathbf{D}_0,\mathbf{D}_M\in\mathbb{R}^{s\times m}$ and $\mathbf{D}_i\in\mathbb{R}^{d_i\times m}$ the specified **derivatives** at boundaries and intermediate timestamp $t_i$, respectively. Each column of $\mathbf{D}_i$ is related to one dimension. Then, conditions at $t_i$ are formulated by $\mathbf{E}_i, \mathbf{F}_i\in\mathbb{R}^{2s\times 2s}$:

<span id="eq-48"></span>

$$
\begin{pmatrix} \mathbf{E}_i & \mathbf{F}_i \end{pmatrix}
\begin{pmatrix} \mathbf{c}_i \\ \mathbf{c}_{i+1} \end{pmatrix}
=
\begin{pmatrix} \mathbf{D}_i \\ \mathbf{0}_{\bar{d}_i\times m} \end{pmatrix}, \tag{48}
$$

<span id="eq-49"></span><span id="eq-50"></span>

$$
\begin{align*}
\mathbf{E}_i=(&\boldsymbol{\beta}(T_i), \dots,\boldsymbol{\beta}^{(d_i-1)}(T_i),\\
&\boldsymbol{\beta}(T_i), \dots, \boldsymbol{\beta}^{(\bar{d}_i-1)}(T_i))^\top \nonumber, \tag{49}\\
\mathbf{F}_i=(&\mathbf{0},-\boldsymbol{\beta}(0), \dots, -\boldsymbol{\beta}^{(\bar{d}_i-1)}(0))^\top. \tag{50}
\end{align*}
$$

Especially, define $\mathbf{F}_0, \mathbf{E}_M\in\mathbb{R}^{s\times 2s}$ as

<span id="eq-51"></span><span id="eq-52"></span>

$$
\begin{align*}
\mathbf{F}_0=&\left(\boldsymbol{\beta}(0), \dots, \boldsymbol{\beta}^{(s-1)}(0)\right)^\top,\tag{51}\\
\mathbf{E}_M=&\left(\boldsymbol{\beta}(T_M), \dots, \boldsymbol{\beta}^{(s-1)}(T_M)\right)^\top. \tag{52}
\end{align*}
$$

The linear system for the optimal coefficient matrix is

<span id="eq-53"></span>

$$
\mathbf{M}\mathbf{c}=\mathbf{b} \tag{53}
$$

where $\mathbf{M}\in\mathbb{R}^{2Ms\times2Ms}$ and $\mathbf{b}\in\mathbb{R}^{2Ms\times m}$ are

<span id="eq-54"></span>

$$
\mathbf{M}=
\begin{pmatrix}
\mathbf{F}_0 & \mathbf{0} & \mathbf{0} & \cdots & \mathbf{0} \\
\mathbf{E}_1 & \mathbf{F}_1 & \mathbf{0} & \cdots & \mathbf{0} \\
\mathbf{0} & \mathbf{E}_2 & \mathbf{F}_2 & \cdots & \mathbf{0} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\mathbf{0} & \mathbf{0} & \mathbf{0} & \cdots & \mathbf{F}_{M-1} \\
\mathbf{0} & \mathbf{0} & \mathbf{0} & \cdots & \mathbf{E}_M \\
\end{pmatrix}, \tag{54}
$$

<span id="eq-55"></span>

$$
\mathbf{b}=\left(\mathbf{D}_0^\top, \mathbf{D}_1^\top, \mathbf{0}_{m\times \bar{d}_1}, \dots, \mathbf{D}_{M-1}^\top, \mathbf{0}_{m\times \bar{d}_{M-1}}, \mathbf{D}_M^\top\right)^\top. \tag{55}
$$

It is essential that the uniqueness in [Theorem 2](#thm-2) ensures the nonsingularity of $\mathbf{M}$ for any time vector $\mathbf{T}\succ\mathbf{0}$. Consequently, the unique solution $\mathbf{c}$ can be obtained via linear equation system [$(53)$](#eq-53) with a banded matrix $\mathbf{M}$, i.e., a **banded system**.

As for a nonsingular banded system, its **Banded PLU Factorization** always exists, which can be employed to compute the solution with $O(M)$ time and space complexity. Therefore, without the need of cost functional, the unique solution of problem [$(18)$](#eq-18) is obtained in the lowest complexity, by directly applying our optimality conditions.

### 2.4 MINCO Trajectories With Spatial-Temporal Deformation
For multicopters, there are often **task-specific** requirements apart from feasibility, such as the **perception quality in active SLAM** or the **occlusion rate** in aerial videography. These user-defined requirements majorly need to flexibly and adaptively deform both the spatial and temporal profile of a trajectory. Therefore, we select the **intermediate points and the time vector as two salient parameters** in [$(18)$](#eq-18). Fortunately, the existence and uniqueness of solution guarantee the smoothness of sensitivity for them. An iterative procedure is then designed to conduct the spatial-temporal deformation with the lowest computation complexity per iteration.

We denote the intermediate points by $\mathbf{q}=\left(\boldsymbol{q}_1,\dots,\boldsymbol{q}_{M-1}\right)$ where $\boldsymbol{q}_i\in\mathbb{R}^m$ is a specified zero-order derivative at $t_i$. Denote by $\mathbf{T}=\left(T_1, \dots, T_M\right)^\top$ the time vector where $T_i\in\mathbb{R}_{>0}$. For any pair of $\mathbf{q}$ and $\mathbf{T}$, [Theorem 2](#thm-2) naturally determines a trajectory belonging to a class of control effort minimizers, named `MINCO` hereafter. The `MINCO` trajectory class, denoted by $\mathfrak{T}_{\mathrm{MINCO}}$, is defined as

$$
\begin{aligned}
  \mathfrak{T}_{\mathrm{MINCO}} = \Big\{&p(t):[0, T]\mapsto\mathbb{R}^m~\Big|~\mathbf{c}=\mathbf{c}(\mathbf{q},\mathbf{T})\text{ determined} ~\\ &\text{by Theorem 2,}~\forall~\mathbf{q}\in\mathbb{R}^{m\times(M-1)},~\mathbf{T}\in\mathbb{R}_{>0}^M\Big\}.  
\end{aligned}
$$

The dimension $m$, the system order $s$, initial and terminal conditions are omitted here for brevity.

Intuitively, all trajectories in $\mathfrak{T}_{\mathrm{MINCO}}$ are compactly parameterized by only $\mathbf{q}$ and $\mathbf{T}$. Evaluating an element in $\mathfrak{T}_{\mathrm{MINCO}}$ directly follows our linear-complexity formulation.

We denote any **user-defined objective** (or constraint) on a trajectory by a $C^2$ function $\mathcal{K}(\mathbf{c},\mathbf{T})$ with available gradient. This objective on $\mathfrak{T}_{\mathrm{MINCO}}$ can be computed as

<span id="eq-56"></span>

$$
\mathcal{W}(\mathbf{q},\mathbf{T})=\mathcal{K}(\mathbf{c}(\mathbf{q},\mathbf{T}), \mathbf{T}). \tag{56}
$$

To accomplish deformation of $\mathfrak{T}_{\mathrm{MINCO}}$, the function $\mathcal{W}$ together with its gradient $\partial\mathcal{W}/\partial\mathbf{q}$ and $\partial\mathcal{W}/\partial\mathbf{T}$ are needed for a high-level optimizer to optimize the objective.

Obviously, evaluating $\mathcal{W}$ shares the same complexity as evaluating any trajectory in $\mathfrak{T}_{\mathrm{MINCO}}$. The key procedure is to compute the gradient.

Now we give a linear-complexity scheme to compute $\partial\mathcal{W}/\partial\mathbf{q}$ and $\partial\mathcal{W}/\partial\mathbf{T}$ from the given $\partial\mathcal{K}/\partial\mathbf{c}$ and $\partial\mathcal{K}/\partial\mathbf{T}$.
We first rewrite the linear equation system [$(53)$](#eq-53) as

<span id="eq-57"></span>

$$
\mathbf{M}(\mathbf{T})\mathbf{c}(\mathbf{q},\mathbf{T})=\mathbf{b}(\mathbf{q}). \tag{57}
$$

Without causing ambiguity, we omit parameters in $\mathbf{M},\mathbf{b},\mathbf{c},\mathcal{K}$ and $\mathcal{W}$ temporarily for simplicity. Any notation involving $\mathbf{c}$ is interpreted as $\mathbf{c}(\mathbf{q},\mathbf{T})$.
Denote by $q_{i,j}$ the $j$-th entry in $q_i$.

As for the gradient w.r.t. $\mathbf{q}$, we first differentiate both sides of [$(57)$](#eq-57) w.r.t. $q_{i,j}$, which gives

<span id="eq-58"></span>

$$
\frac{\mathbf{\partial c}}{\partial q_{i,j}}=\mathbf{M}^{-1}\frac{\partial \mathbf{b}}{\partial q_{i,j}}. \tag{58}
$$

Then,

<span id="eq-59"></span>

$$
\begin{align*}
\frac{\partial\mathcal{W}}{\partial q_{i,j}}&=\operatorname{Tr}\left\{\left(\frac{\partial \mathbf{c}}{\partial q_{i,j}}\right)^\top\frac{\partial\mathcal{K}}{\partial\mathbf{c}}\right\} \nonumber\\  
&=\operatorname{Tr}\left\{\left(\mathbf{M}^{-1}\frac{\partial \mathbf{b}}{\partial q_{i,j}}\right)^\top\frac{\partial\mathcal{K}}{\partial\mathbf{c}}\right\} \nonumber\\
&=\operatorname{Tr}\left\{\left(\frac{\partial \mathbf{b}}{\partial q_{i,j}}\right)^\top\left(\mathbf{M}^{-\top}\frac{\partial\mathcal{K}}{\partial\mathbf{c}}\right)\right\}, \tag{59}
\end{align*}
$$

where $\operatorname{Tr}{(\cdot)}$ is the trace operation.

The definition of $\mathbf{b}(\mathbf{q})$ in [$(55)$](#eq-55) implies that $\partial\mathbf{b}/\partial q_{i,j}$ only has a single nonzero entry $1$ at its $(2i-1)s+1$ row and $j$ column.
Thus, stacking all the resultant scalars gives

<span id="eq-60"></span>

$$
\frac{\partial\mathcal{W}}{\partial q_i}=\left(\mathbf{M}^{-1}\frac{\partial\mathcal{K}}{\partial\mathbf{c}}\right)^\top e_{(2i-1)s+1}, \tag{60}
$$

where $e_j$ is the $j$-th column of $\mathbf{I}_{2Ms}$. Now that we have already conducted the banded PLU factorization for $\mathbf{M}$ when we compute $\mathbf{c}$. We can reuse the factorization to avoid inverting $\mathbf{M}^\top$. Define a matrix $\mathbf{G}\in\mathbb{R}^{2Ms\times m}$ as

<span id="eq-61"></span>

$$
\mathbf{M}^\top\mathbf{G}=\frac{\partial\mathcal{K}}{\partial\mathbf{c}}. \tag{61}
$$

We only need to compute $\mathbf{G}$ once to obtain $\partial\mathcal{W}/\partial q_i$ for all $1\leqslant i<M$. Denote the **factorization** of $\mathbf{M}$ as $\mathbf{M}=\mathbf{P}\mathbf{L}\mathbf{U}$. Specifically, $\mathbf{L}$ is a banded matrix with zero upper bandwidth and all-ones diagonal entries. $\mathbf{U}$ is a banded matrix with zero lower bandwidth and nonzero diagonal entries because of the nonsingularity of $\mathbf{M}$. The pivoting matrix $\mathbf{P}$ simply changes the row order of the operand, satisfying $\mathbf{P}^\top\mathbf{P}=\mathbf{I}$. Consequently, the transpose also has a **Banded LUP Factorization**. Specifically, $\mathbf{M}^\top=\bar{\mathbf{L}}\bar{\mathbf{U}}\mathbf{P}^\top$, where

<span id="eq-62"></span>

$$
\bar{\mathbf{L}}=\mathbf{U}^\top\left(\mathbf{U\circ\mathbf{I}}\right)^{-1},~\bar{\mathbf{U}}=\left(\mathbf{I\circ\mathbf{U}}\right)\mathbf{L}^\top, \tag{62}
$$

where the inverse is only done for a diagonal matrix and $\circ$ the Hadamard product. Then, $\mathbf{G}$ can be also computed in linear complexity through such a factorization. For convenience, we partition $\mathbf{G}$ into

<span id="eq-63"></span>

$$
\mathbf{G}=\left(\mathbf{G}_0^\top,\mathbf{G}_1^\top,\dots,\mathbf{G}_{M-1}^\top,\mathbf{G}_M^\top\right)^\top \tag{63}
$$

such that $\mathbf{G}_0,\mathbf{G}_M\in\mathbb{R}^{s\times m}$ and $\mathbf{G}_i\in\mathbb{R}^{2s\times m}$ for $1\leqslant i<M$. After that, the gradient of $\mathcal{W}$ w.r.t. $\mathbf{q}$ is determined as

<span id="eq-64"></span>

$$
\frac{\partial\mathcal{W}}{\partial\mathbf{q}}=\left(\mathbf{G}_1^\top e_1,\dots,\mathbf{G}_{M-1}^\top e_1\right), \tag{64}
$$

where $e_1$ is the first column of $\mathbf{I}_{2s}$. This operation takes out $M-1$ specific columns in $\mathbf{G}^\top$.

As for the gradient w.r.t. $\mathbf{T}$, differentiating both sides of [$(57)$](#eq-57) w.r.t. $T_i$ gives

<span id="eq-65"></span>

$$
\frac{\partial\mathbf{M}}{\partial T_i}\mathbf{c}+\mathbf{M}\frac{\mathbf{\partial c}}{\partial T_i}=\mathbf{0}. \tag{65}
$$

Thus,

<span id="eq-66"></span>

$$
\begin{align*}
\frac{\partial\mathcal{W}}{\partial T_i}&=\frac{\partial\mathcal{K}}{\partial T_i}+\operatorname{Tr}\left\{\left(\frac{\mathbf{\partial c}}{\partial T_i}\right)^\top\frac{\partial\mathcal{K}}{\partial\mathbf{c}}\right\} \\
&=\frac{\partial\mathcal{K}}{\partial T_i}-\operatorname{Tr}\left\{\left(\frac{\partial\mathbf{M}}{\partial T_i}\right)^\top\mathbf{M}^{-1}\frac{\partial\mathcal{K}}{\partial\mathbf{c}}\right\} \\
&=\frac{\partial\mathcal{K}}{\partial T_i}-\operatorname{Tr}\left\{\mathbf{G}_i^\top\frac{\partial\mathbf{M}}{\partial T_i}\mathbf{c}\right\} \tag{66}
\end{align*}
$$

The banded structure of $\mathbf{M}$ implies that

<span id="eq-67"></span>

$$
\mathbf{G}^\top\frac{\partial\mathbf{M}}{\partial T_i}\mathbf{c}=\mathbf{G}_i^\top\frac{\partial\mathbf{E}_i}{\partial T_i}\mathbf{c}_i.
$$

Then we obtain the gradient w.r.t. $T_i$ computed as

<span id="eq-68"></span>

$$
\frac{\partial\mathcal{W}}{\partial T_i}=\frac{\partial\mathcal{K}}{\partial T_i}-\operatorname{Tr}\left\{\mathbf{G}_i^\top\frac{\partial\mathbf{E}_i}{\partial T_i}\mathbf{c}_i\right\}, \tag{68}
$$

where $\partial\mathbf{E}_i/\partial T_i$ can be analytically derived from [$(64)$](#eq-64).
Computing [$(68)$](#eq-68) for every $1\leqslant i\leqslant M$ gives $\partial\mathcal{W}/\partial\mathbf{T}$.

Finally, we finish the computation of $\partial\mathcal{W}/\partial\mathbf{q}$ and $\partial\mathcal{W}/\partial\mathbf{T}$. It can be verified from both [$(64)$](#eq-64) and [$(68)$](#eq-68) that the gradient propagation is also done in $O(M)$ complexity. As for $\mathcal{K}$, we make no assumption on its concrete form. Actually, the smoothness of $\mathcal{K}$ is not even needed if only the resultant $\mathcal{W}$ is $C^2$. In other word, the linear-complexity gradient propagation enjoys both efficiency and flexibility. By incorporating it into common optimizers, we can accomplish the spatial-temporal deformation of $\mathfrak{T}_{\mathrm{MINCO}}$ for a wide range of planning purposes while maintaining the local smoothness of trajectories.

## 3. Geometrically Constrained Flight Trajectory Optimization
In this section, we provide a unified framework for flight trajectory optimization with different time regularization $\rho(T)$, spatial constraints $\tilde{\mathcal{F}}$ and continuous-time constraints $\mathcal{G}$. This framework indeed relaxes the original problem into $\mathfrak{T}_{\mathrm{MINCO}}$.

The spatial-temporal deformation is utilized to meet various feasibility requirements. Lightweight schemes are specially designed to eliminate geometrical constraints such that the trajectory can be freely deformed.
For continuous-time constraints, a time integral penalty functional is proposed to ensure the feasibility without sacrificing the scalability.

Finally, our framework transforms the constrained trajectory optimization into a sparse unconstrained one which can be reliably solved.

### 3.1 Temporal Constraint Elimination

<figure>
   <img src="./images/9LogObjectiveLevelSet.jpg" id="fig-9-2" alt="fig-9-2" width="100%" align="center">
   <div align="center"><figcaption> Figure 2[1]: Left: Domain of $J$ on an $M$-piece trajectory with total time fixed as $T_\Sigma$. The domain is indeed the relative interior of an $(M-1)$-simplex in $\mathbb{R}^M_{>0}$. Right: Contour of $\ln{J}$ with $M=3$. The function goes to infinity as the time vector approaches the boundary of the open domain in $\mathbb{R}^2_{>0}$.</figcaption></div>
</figure>

Deforming `MINCO` needs standard optimizers that are often designed for **Euclidean spaces**. However, the trajectory definition and cost functional~[$(11)$](#eq-11) both restrict the domain of $\mathbf{T}$ to **simple manifolds**, on which frequent retractions are needed during optimization. We give explicit diffeomorphisms for $\mathbf{T}$ such that **surrogate variables** are in Euclidean spaces. Thus, common efficient optimizers can be conveniently applied.

For polynomial splines, the control effort in [$(11)$](#eq-11) is a function of $\mathbf{c}$ and $\mathbf{T}$, denoted by $J_c(\mathbf{c},\mathbf{T})$. Analytical expressions of $J_c$, $\partial J_c/\partial\mathbf{c}$, and $\partial J_c/\partial\mathbf{T}$ are available in literatures(See original paper). Now that $\mathfrak{T}_{\mathrm{MINCO}}$ are polynomial splines with coefficients determined by $\mathbf{c}(\mathbf{q},\mathbf{T})$, the cost functional of [$(11)$](#eq-11) can be written as

<span id="eq-69"></span>

$$
J(\mathbf{q},\mathbf{T})=J_q(\mathbf{q},\mathbf{T})+\rho(\|\mathbf{T}\|_1), \tag{69}
$$

where $J_q$ is defined as $J_q(\mathbf{q},\mathbf{T})=J_c(\mathbf{c}(\mathbf{q},\mathbf{T}),\mathbf{T})$. Obviously, computing $J_q$, $\partial J_q/\partial\mathbf{q}$, and $\partial J_q/\partial\mathbf{T}$ from any provided $J_c$, $\partial J_c/\partial\mathbf{c}$, and $\partial J_c/\partial\mathbf{T}$ can be done in $O(M)$ complexity, as already shown in deformation of $\mathfrak{T}_{\mathrm{MINCO}}$.

It is natural to optimize $\mathbf{T}$ via $\partial J/\partial\mathbf{T}$. However, $J_q(\mathbf{q},\mathbf{T})$ has its definition over $\mathbf{T}\in\mathbb{R}_{>0}^M$. It becomes unbounded when any $T_i$ approaches zero and no consecutively repeating points appear in $\mathbf{q}$. Besides, $\rho_f$ defined in [$(13)$](#eq-13) further restricts the domain of $J$ to $\sum\limits_{i=1}^{M-1}{T_i}<T_\Sigma$, as shown in [Fig. 2](#fig-9-2).

We use **diffeomorphisms** to eliminate constraints for $\rho_f$ and $\rho_s$. Consider the domain of $\rho_f$ in [$(13)$](#eq-13),

<span id="eq-70"></span>

$$
\mathcal{T}_f=\left\{\mathbf{T}\in\mathbb{R}^M~\Big|~\|\mathbf{T}\|_1=T_\Sigma,~\mathbf{T}\succ\mathbf{0}\right\}. \tag{70}
$$

It is clear that $J(\mathbf{q},\cdot)$ is finite for a nontrivial $\mathbf{q}$ if and only if $\mathbf{T}\in \mathrm{RelInt}(\mathcal{T}_f)$, i.e., the relative interior of $\mathcal{T}_f$.
> [!tip] Proposition 1:
> $\mathcal{T}_f$ defined by [$(70)$](#eq-70) is diffeomorphic to $\mathbb{R}^{M-1}$. Denote by $\boldsymbol{\tau}=\left(\tau_1,\dots,\tau_{M-1}\right)$ an element in $\mathbb{R}^{M-1}$. A $C^\infty$ diffeomorphism is given by the map below for $1\leqslant i < M$:
>
> <span id="eq-71"></span>
>
> $$ T_i=\frac{e^{\tau_i}}{1+\sum\limits_{j=1}^{M-1}{e^{\tau_j}}}T_\Sigma,~~T_M=T_\Sigma-\sum_{j=1}^{M-1}{T_j}. \tag{71}$$

By exploiting the explicit diffeomorphism [$(71)$](#eq-71), we directly minimize the cost function $J$ over $\mathbb{R}^{M-1}$ via $\boldsymbol{\tau}$, because the domain constraints are **satisfied by default**.

Optimizing $\boldsymbol{\tau}$ requires gradient propagation. We partition the gradient as $\partial J_q/\partial \mathbf{T}=\left(g_a^\top,g_b\right)^\top$, where $g_a\in\mathbb{R}^{M-1}$ and $g_b\in\mathbb{R}$.

Differentiating the layer in [$(71)$](#eq-71) yields the gradient of $J$ w.r.t. $\boldsymbol{\tau}$,

<span id="eq-72"></span>

$$
\frac{\partial J}{\partial\boldsymbol{\tau}}=\frac{(g_a-g_b\mathbf{1})\circ e^{[\boldsymbol{\tau}]}}{1+\|e^{[\boldsymbol{\tau}]}\|_1}-\frac{\left(g_a^\top e^{[\boldsymbol{\tau}]}-g_b\|e^{[\boldsymbol{\tau}]}\|_1\right)e^{[\boldsymbol{\tau}]}}{\left(1+\|e^{[\boldsymbol{\tau}]}\|_1\right)^2}, \tag{72}
$$

where $e^{[\cdot]}$ is the entry-wise exponential map, and $\mathbf{1}$ an all-ones vector. If an initial guess $\mathbf{T}$ is specified, the corresponding $\boldsymbol{\tau}$ can be computed via the inverse map of the diffeomorphism, given by $\tau_i=\ln{\left(T_i/T_M\right)}$ for $1\leqslant i < M$. As for $\rho_s$ in [$(12)$](#eq-12), only $\mathbf{T}\succ\mathbf{0}$ needs to be ensured. It suffices to use $\mathbf{T}=e^{[\boldsymbol{\tau}]}$ as the diffeomorphism between $\mathbb{R}^M$ and $\mathbb{R}_{>0}^M$.

For either $\rho_f$ or $\rho_s$, we denote the diffeomorphism by $\mathbf{T}(\boldsymbol{\tau})$. Unconstrained optimization on $\boldsymbol{\tau}$ can be directly conducted to minimize $J(\mathbf{q},\mathbf{T}(\boldsymbol{\tau}))$. Although $\mathbf{T}(\boldsymbol{\tau})$ does not preserve convexity, the original cost $J(\mathbf{q},\mathbf{T})$ is already nonconvex as given in [$(57)$](#eq-57).

Thus, the only concern is whether $\mathbf{T}(\boldsymbol{\tau})$ brings new local minima in the space of $\boldsymbol{\tau}$ or eliminates local minima in the space of $\mathbf{T}$.

<span id="prop-2"></span>

> [!tip] Proposition 2
> Denote by $F:\mathbb{D}_\mathrm{F}\mapsto\mathbb{R}$ any $C^2$ function with a convex open domain $\mathbb{D}_\mathrm{F}\in\mathbb{R}^N$. Given any $C^2$ diffeomorphism $\mathbf{G}:\mathbb{R}^N\mapsto\mathbb{D}_\mathrm{F}$, define $H:\mathbb{R}^N\mapsto\mathbb{R}$ as $H(y)=F(\mathbf{G}(y))$ for $y\in\mathbb{R}^N$. For any $x\in\mathbb{D}_\mathrm{F}$ and $y\in\mathbb{R}^N$ satisfying $x=\mathbf{G}(y)$ or equivalently $y=\mathbf{G}^{-1}(x)$, the following statements always hold:
> - $\nabla {F(x)}=\mathbf{0}$ if and only if $\nabla {H(y)}=\mathbf{0}$;
> - $\nabla^2 {F(x)}$ is positive-definite (or positive-semidefinite) at $\nabla {F(x)}=\mathbf{0}$, if and only if $\nabla^2 {H(y)}$ is positive-definite (or positive-semidefinite) at $\nabla {H(y)}=\mathbf{0}$.

**Proof**:
    See Appendix in the original paper.

[Proposition 2](#prop-2) confirms that $\mathbf{T}(\boldsymbol{\tau})$ preserves the **first/second-order necessary optimality conditions** and **second-order sufficient optimality conditions**. It is also applicable to substitute the exponential map in this subsection with any $C^2$ diffeomorphism from $\mathbb{R}$ to $\mathbb{R}_{>0}$ for a better numerical condition. In the sense of commonly-used optimality conditions, our constraint elimination does not produce extra spurious local minima or cancel any existing one.

### 3.2 Spherical Spatial Constraint Elimination

<figure>
   <img src="./images/9InverseProjection.jpg" id="fig-9-3" alt="fig-9-3" width="100%" align="center">
   <div align="center"><figcaption> Figure 3[1]: Inverse stereographic projection $f_s$ maps the Euclidean space $\mathbb{R}^n$ onto a sphere without north pole $\mathcal{S}^n_\odot$ in an $(n+1)$-dimensional space. The orthographic projection $f_o$ maps $\mathcal{S}^n_\odot$ onto an $n$-dimensional ball $\mathcal{B}^n$. The variable $\xi$ moves freely in $\mathbb{R}^n$ while the transformed variable $q$ stays in $\mathcal{B}^n$. Optimization on $\xi$ becomes unconstrained when $q$ is constrained by a ball.</figcaption></div>
</figure>

We enforce motion safety by confining trajectories into the feasible region $\tilde{\mathcal{F}}$. Although $\tilde{\mathcal{F}}$ is nonconvex, it is a union of convex primitives that are sequentially connected. If all pieces have been assigned into these primitives, the safety constraint on each piece becomes convex and thus can be conveniently encoded in $\mathcal{G}$. Owing to the feature of `MINCO`, the traverse time for every primitive can be directly optimized. Thus, we fix the piece assignment before optimization, rather than resorting to integer variables during optimization. Consequently, intermediate points should be contained by the overlap between primitives, forming inequalities. For Inequality Constrained Problems (ICPs), general methods successively approximate the constraints via additional parameters. However, we aim to apply the constraints directly and efficiently. Therefore, we propose spatial constraint elimination to enforce them exactly, leveraging their geometrical properties.

Consider the constraint $q\in\mathcal{P}\subset\mathbb{R}^n$ where $\mathcal{P}$ is a closed ball. Its dimension satisfies $n\leqslant m$ since a low-dimensional constraint also exists in $\mathbb{R}^m$. If $\mathcal{P}$ is a closed ball $\mathcal{P}^\mathcal{B}$ centered at point $o$ with radius $r$,

<span id="eq-73"></span>

$$
\mathcal{P}^\mathcal{B}=\left\{\boldsymbol{x}\in\mathbb{R}^n~\Big|~\|\boldsymbol{x}-o\|_2\leqslant r\right\}, \tag{73}
$$

We utilize a smooth surjection to map $\mathbb{R}^n$ to $\mathcal{P}^\mathcal{B}$ such that optimization over $\mathbb{R}^n$ implicitly satisfies the constraint $\mathcal{P}^\mathcal{B}$. As illustrated in [Fig. 3](#fig-9-3), the map is a composition of the inverse stereographic projection and the orthographic projection.
First, we utilize the inverse stereographic projection to map $\mathbb{R}^n$ to $\mathcal{S}_\odot^n$, where  $\mathcal{S}_\odot^n$ is a unit sphere without north pole, i.e.,

<span id="eq-74"></span>

$$
\mathcal{S}_\odot^n=\left\{\boldsymbol{x}\in\mathbb{R}^{n+1}~\Big|~\|\boldsymbol{x}\|_2=1,~x_{n+1}<1\right\}. \tag{74}
$$

The inverse stereographic projection $f_s$ is define as

<span id="eq-75"></span>

$$
f_s(x)=\frac{\left(2x^\top,x^\top x-1\right)^\top}{x^\top x+1}\in\mathcal{S}_\odot^n,~\forall x\in\mathbb{R}^n. \tag{75}
$$

Note that $f_s$ is a diffeomorphism between $\mathbb{R}^n$ and $\mathcal{S}_\odot^n$.
We then project $\mathcal{S}_\odot^n$ from $\mathbb{R}^{n+1}$ back in $\mathbb{R}^n$ to obtain

<span id="eq-76"></span>

$$
\mathcal{B}^n=\left\{\boldsymbol{x}\in\mathbb{R}^n~\Big|~\|\boldsymbol{x}\|_2\leq1\right\}. \tag{76}
$$

The map is described by

<span id="eq-77"></span>

$$
f_o(x)=\left(x_1,\dots,x_n\right)^\top\in\mathcal{B}^n,~\forall x\in\mathcal{S}_\odot^n, \tag{77}
$$

which is indeed a smooth surjection onto $\mathcal{B}^n$.
Each point in $\mathcal{B}^n$, except the center, is paired with two points in $\mathcal{S}_\odot^n$. The composition of $f_s$, $f_o$, and a linear transformation, is a smooth surjection:

<span id="eq-78"></span>

$$
f_\mathcal{B}(x)=o+\frac{2rx}{x^\top x+1}\in\mathcal{P}^{\mathcal{B}},~\forall x\in\mathbb{R}^n. \tag{78}
$$

The map $f_\mathcal{B}$ introduces a new coordinate, denoted by $\xi$, such that optimizing $\xi$ over $\mathbb{R}^n$ always satisfies the constraint on $q$ described by $\mathcal{P}^\mathcal{B}$. For the $i$-th intermediate point $q_i$, denote by $\xi_i$ the corresponding new coordinate.

Accordingly, denote by $\boldsymbol{\xi}$ the new coordinate for $\mathbf{q}$. Optimizing $\boldsymbol{\xi}$ requires gradient propagation for $\partial J/\partial\mathbf{q}$.

Denote by $g_i$ the $i$-th entry $\partial J/\partial q_i$ in $\partial J/\partial\mathbf{q}$. Differentiating the layer $f_\mathcal{B}$ gives the gradient

<span id="eq-79"></span>

$$
\frac{\partial J}{\partial \xi_i}=\frac{2r_i g_i}{\xi_i^\top\xi_i+1}-\frac{4r_i(\xi_i^\top g_i)\xi_i}{(\xi_i^\top\xi_i+1)^2}. \tag{79}
$$

If the optimization needs to start from an initial guess $\mathbf{q}$, the backward evaluation of $\boldsymbol{\xi}$ can be done by using a local inverse of $f_\mathcal{B}$, given by $\xi_i$ for $1\leqslant i < M$:

<span id="eq-80"></span>

$$
\xi_i=\frac{r_i-\sqrt{r_i^2-\|q_i-o_i\|_2^2}}{\|q_i-o_i\|_2^2}(q_i-o_i). \tag{80}
$$

<figure>
   <img src="./images/9TransformedQuadratic.jpg" id="fig-9-4" alt="fig-9-4" width="100%" align="center">
   <div align="center"><figcaption> Figure 4[1]: Constrained minimum $q^*$ of a convex function $J(q)$ within a 2-D ball. Transformed by $f_\mathcal{B}$, the resultant function $J(f_\mathcal{B}(\xi))$ becomes nonconvex but it preserves the local minimum $\xi^*$ satisfying $q^*=f_\mathcal{B}(\xi^*)$ with no additional local minimum introduced.</figcaption></div>
</figure>

Similarly, we analyze influences that the smooth surjection $f_\mathcal{B}$ imposes on the constrained local minima in $\mathcal{P}^\mathcal{B}$. Although $f_\mathcal{B}$ lacks the one-to-one correspondence as diffeomorphisms possess, its components are all well-formed. Firstly, $f_o$ only takes the first $n$ entries of a point. This operation preserves at least the first-order necessary conditions for local minima in either $\mathcal{B}^n$ or $\mathcal{S}_\odot^n$. Secondly, $f_s$ is a diffeomorphism between $\mathcal{S}_\odot^n$ and $\mathbb{R}^n$, thus satisfying [Proposition 2](#prop-2). Therefore, we can also confirm that $f_\mathcal{B}$ does not produce extra spurious local minima or cancel any existing one. As shown in [Fig. 4](#fig-9-4), the constrained minimum within a 2-D ball is transformed into an unconstrained minimum.

### 3.3 Polyhedral Spatial Constraint Elimination

<figure>
   <img src="./images/9BarycentricTransform.jpg" id="fig-9-5" alt="fig-9-5" width="100%" align="center">
   <div align="center"><figcaption> Figure 5[1]: Transformations on a convex polytope. A convex polytope $\mathcal{P}^\mathcal{H}$ with $\hat{n}+1$ vertices is indeed a standard $\hat{n}$-simplex in the barycentric coordinate. The simplex $\mathcal{P}^\mathcal{H}_w$ is then the image of an entry-wise square map $[\cdot]^2$ with ball-shaped domain, which can be eliminated as in Fig. 3.</figcaption></div>
</figure>

Now we consider the elimination of polyhedral constraints. Specifically, $\mathcal{P}$ is a closed convex polytope $\mathcal{P}^\mathcal{H}$ defined by

<span id="eq-81"></span>

$$
\mathcal{P}^\mathcal{H}=\left\{x\in\mathbb{R}^n~\Big|~\mathbf{A}x\preceq b\right\}. \tag{81}
$$

where $\mathrm{Int}\left(\mathcal{P}^\mathcal{H}\right)\neq\varnothing$ according to [$(15)$](#eq-15). Common optimization algorithms use the $\mathcal{H}$-representation of $\mathcal{P}^\mathcal{H}$ as linear inequality constraints. In our framework, we exploit their geometrical property to eliminate these constraints so that $\mathfrak{T}_{\mathrm{MINCO}}$ can be freely deformed.

To achieve this, we use the $\mathcal{V}$-representation of $\mathcal{P}^\mathcal{H}$ instead, where any $q\in\mathcal{P}^\mathcal{H}$ has a (general) barycentric coordinate, i.e., a convex combination of vertices.
To obtain the vertices, we apply the efficient **convex hull algorithm** to the dual of $\mathcal{P}^\mathcal{H}$ based on an interior point calculated by **Seidel's algorithm**. Note that this procedure produces negligible overhead in our case ($n\leqslant 4$).

The procedure to eliminate a polytope constraint is illustrated in the [Fig. 5](#fig-9-5). We denote all $\hat{n}+1$ vertices of $\mathcal{P}^\mathcal{H}$ by $\left(v_0,\dots,v_{\hat{n}}\right)$, where $v_i\in\mathbb{R}^n$ for each $i$. The barycentric coordinate of a point $q\in\mathcal{P}^\mathcal{H}$ consists of the weights for these vertices. To obtain a more compact form, define $\hat{v}_i=v_i-v_0$ and $\hat{\mathbf{V}}=\left(\hat{v}_1,\dots,\hat{v}_{\hat{n}}\right)$, then the position can be calculated as

<span id="eq-82"></span>

$$
q=v_0+\hat{\mathbf{V}}\boldsymbol{w}, \tag{82}
$$

where $\boldsymbol{w}=\left(w_1,\dots,w_{\hat{n}}\right)^\top\in\mathbb{R}^{\hat{n}}$ is the last $\hat{n}$ entries in the barycentric coordinate. The set of coordinates in convex combinations can also be written as

<span id="eq-83"></span>

$$
\mathcal{P}_w^\mathcal{H}=\left\{\boldsymbol{w}\in\mathbb{R}^{\hat{n}}~\Big|~\boldsymbol{w}\succeq\mathbf{0},~\|\boldsymbol{w}\|_1\leqslant 1\right\}. \tag{83}
$$

The **Main Theorem of Polytope Theory** confirms the equivalence between $\mathcal{P}_w^\mathcal{H}$ and $\mathcal{P}^\mathcal{H}$ under [$(82)$](#eq-82). The polytope is exactly converted into a standard $(\hat{n}+1)$-simplex by simply adding auxiliary variables and applying a linear map to $q$.

This process does not produce additional nonlinearity in the optimization problem except that the dimension of decision variables is increased. Therefore, we only consider the decision variables on $q$ as the corresponding $w$ hereafter.

The simplex [$(83)$](#eq-83) can be eliminated by nonlinear transformations. We first use an entry-wise square map $[\cdot]^2:\mathbb{R}^{\hat{n}}\mapsto\mathbb{R}^{\hat{n}}$ to eliminate nonnegativity constraints using $w=[x]^2$. Then, the constraint $\mathcal{P}_w^\mathcal{H}$ on $w$ is transformed into a closed unit ball $\mathcal{B}^{\hat{n}}$ on $x$,

<span id="eq-84"></span>

$$
\mathcal{B}^{\hat{n}}=\left\{\boldsymbol{x}\in\mathbb{R}^{\hat{n}}~\Big|~\|\boldsymbol{x}\|_2\leqslant 1\right\}. \tag{84}
$$

Consequently, we can utilize the smooth surjection $f_\mathcal{B}$ in [$(78)$](#eq-78) again. The composition of [$(82)$](#eq-82), $[\cdot]^2$, and $f_\mathcal{B}$ yields a smooth surjection $f_\mathcal{H}$ from $\mathbb{R}^{\hat{n}}$ onto $\mathcal{P}^{\mathcal{H}}$:

<span id="eq-85"></span>

$$
f_\mathcal{H}(\boldsymbol{x})=v_0+\frac{4\hat{\mathbf{V}}[\boldsymbol{x}]^2}{(\boldsymbol{x}^\top \boldsymbol{x}+1)^2}\in\mathcal{P}^{\mathcal{H}},~\forall \boldsymbol{x}\in\mathbb{R}^{\hat{n}}. \tag{85}
$$

A new coordinate $\boldsymbol{\xi}$ is introduced by $f_\mathcal{H}$, where any $\boldsymbol{\xi}\in\mathbb{R}^{\hat{n}}$ ensures $q\in\mathcal{P}^\mathcal{H}$. The boundary of $\mathcal{P}^\mathcal{H}$ is also attainable. Similarly, $\boldsymbol{\xi}$ is the new coordinate for $\mathbf{q}$. Optimizing $\boldsymbol{\xi}$ requires gradient propagation. Denote by $g_i$ the $i$-th gradient $\partial J/\partial q_i$ in $\partial J/\partial\mathbf{q}$, then differentiating the layer $f_\mathcal{H}$ gives

<span id="eq-86"></span>

$$
\frac{\partial J}{\partial \xi_i}=\frac{8\xi_i\circ \hat{\mathbf{V}}^\top g_i}{(\xi_i^\top\xi_i+1)^2}-\frac{16g_i^\top \hat{\mathbf{V}}[\xi_i]^2}{(\xi_i^\top\xi_i+1)^3}\xi_i. \tag{86}
$$

If an initial guess $\mathbf{q}$ is specified, the corresponding $\boldsymbol{\xi}$ can be computed via the local inverse of $f_\mathcal{H}$. The barycentric coordinate of each $q_i$ can be obtained using the analytic approach by Warren et al.. After that the analytic local inverses of $[\cdot]^2$ and $f_\mathcal{B}(\cdot)$ give us the desired $\xi_i$. Another flexible way is to directly minimize the squared distance between $f_\mathcal{H}(\xi)$ and the given $q_i$. Both approaches have negligible time consumption but promising results.

The map $[\cdot]^2$ in $f_\mathcal{H}$ presents additional nonlinearity into optimization. Fortunately, variable transformation via $[\cdot]^2$ is a special case of the inequality-to-equality conversion. Concretely, the inequality constraints are $-\boldsymbol{w}\preceq\mathbf{0}$. By introducing additional variables $x$, the equivalent equality constraints are $-w+[x]^2=\mathbf{0}$, yielding $w=[x]^2$. Such type of constraint conversion is proved to preserve first/second-order necessary conditions and second-order sufficient conditions for ICPs by Bertsekas as provided in literature. We confirm that the additional nonlinearity in $f_\mathcal{H}$ does not exclude the desired minimum or produce undesired minimum practically.

Direct constraints on $\mathbf{q}$ are eliminated for either $\mathcal{P}^\mathcal{B}$ or $\mathcal{P}^\mathcal{H}$ using a smooth surjection $\mathbf{q}(\boldsymbol{\xi})$. We can conduct unconstrained optimization on $\boldsymbol{\xi}$ to minimize $J(\mathbf{q}(\boldsymbol{\xi}),\mathbf{T}(\boldsymbol{\tau}))$ hereafter.

### 3.4 Time Integral Penalty Functional
After eliminating direct constraints, $\mathfrak{T}_{\mathrm{MINCO}}$ can be freely deformed to meet the continuous-time constraints $\mathcal{G}$. However, enforcing $\mathcal{G}$ over the entire trajectory involves infinitely many inequalities that cannot be solved by constrained optimization. It further needs temporal discretization that usually produces a large number of decision variables. To preserve the sparsity of trajectory parameterization, we decouple the resolution of constraint evaluation from the number of decision variables. Inspired by the **constraint transcription**, we transform $\mathcal{G}$ into finite constraints by integral of constraint violations.

For a trajectory $\boldsymbol{p}:[0,T]\mapsto\mathbb{R}^m$, we define

<span id="eq-87"></span>

$$
I_\mathcal{G}^k\left[\boldsymbol{p}\right]=\int_0^T{\max{\left[\mathcal{G}\left(\boldsymbol{p}(t),\dots,\boldsymbol{p}^{(s)}(t)\right),\mathbf{0}\right]^k}~\mathrm{~d}t}, \tag{87}
$$

where $k\in\mathbb{R}_{>0}$ and $\max\left[\cdot,\mathbf{0}\right]^k$ is the composition of the entry-wise maximum and an entry-wise power function. Specifically, smoothing is needed if $k\leq1$. The functional-type constraint is then equivalent to equality constraints $I_\mathcal{G}^k\left[p\right]=\mathbf{0}$. Actually, $I_\mathcal{G}^k\left[p\right]$ is a function of trajectory parameters, which we adopt as penalty terms. If $k=1$, it forms a nonsmooth but exact penalty. If $k>1$, it forms a differentiable strictly convex penalty. Thus either $I_\mathcal{G}^3\left[p\right]$ or a smoothing approximation of $I_\mathcal{G}^1\left[p\right]$ can be adopted. For simplicity, we utilize $I_\mathcal{G}^3\left[p\right]$ hereafter unless otherwise specified. There are two reasons for choosing a penalty function method. Firstly, the integral in [$(87)$](#eq-87) can only be evaluated numerically, making the constraint approximation inevitable.

Secondly, penalty methods have no requirement on a feasible initial guess which is nontrivial to construct.

We define the time integral penalty functional for $\boldsymbol{p}(t)$ as

<span id="eq-88"></span>

$$
I_\mathcal{G}\left[\boldsymbol{p}\right]=\chi^\top I_\mathcal{G}^k\left[\boldsymbol{p}\right]. \tag{88}
$$

where $\chi\in\mathbb{R}^{n_g}_{\geqslant 0}$ is a weight vector. Normally, $\chi$ should contain large constants. If no constraint is violated, $I_\mathcal{G}\left[\boldsymbol{p}\right]$ remains zero. Otherwise, if any part on $\boldsymbol{p}(t)$ violates any constraint in $\mathcal{G}$, the penalty functional $I_\mathcal{G}\left[\boldsymbol{p}\right]$ grows rapidly. By incorporating $I_\mathcal{G}\left[\boldsymbol{p}\right]$ into the cost functional, continuous-time constraints are enforced within an acceptable tolerance.

Practically, $I_\mathcal{G}\left[\boldsymbol{p}\right]$ can only be evaluated by quadrature. To conduct the quadrature, we first define a sampled function $\mathcal{G}_\tau:\mathbb{R}^{2s\times m}\times\mathbb{R}_{>0}\times[0,1]\mapsto\mathbb{R}^{n_g}$ as

<span id="eq-89"></span>

$$
\mathcal{G}_\tau(\mathbf{c}_i,T_i,\tau)=\mathcal{G}\left(\mathbf{c}_i^\top\boldsymbol{\beta}(T_i\cdot\tau),\dots,\mathbf{c}_i^\top\boldsymbol{\beta}^{(s)}(T_i\cdot\tau)\right), \tag{89}
$$

where $\tau\in[0,1]$ is a normalized stamp. Then the quadrature for $I_\mathcal{G}\left[p\right]$, denoted by $I:\mathbb{R}^{2Ms\times m}\times\mathbb{R}_{>0}^M\mapsto\mathbb{R}_{>0}$, is computed as a weighted sum of the sampled penalty,

<span id="eq-90"></span>

$$
I(\mathbf{c},\mathbf{T})=\sum_{i=1}^{M}{\frac{T_i}{\kappa_i}\sum_{j=0}^{\kappa_i}\bar{\omega}_j\chi^\top\max{\left[\mathcal{G}_\tau\left(\mathbf{c}_i,T_i,\frac{j}{\kappa_i}\right),\mathbf{0}\right]^k}}, \tag{90}
$$

where $\kappa_i$ controls the resolution. We choose the trapezoidal rule $\left(\bar{\omega}_0,\bar{\omega}_1,\dots,\bar{\omega}_{\kappa_i-1},\bar{\omega}_{\kappa_i}\right)=\left(1/2,1,\dots,1,1/2\right)$ because of its reliable performance for ill-shaped $C^2$ integrands in our practice. Intuitively, $I(\mathbf{c},\mathbf{T})$ is a differentiable approximation to $I_\mathcal{G}[p]$, whose precision is adjustable through $\kappa_i$. The value and gradient at most timestamps can be parallelly computed then directly combined as one.

### 3.5 Trajectory Optimization via Unconstrained NLP
Due to $\mathcal{G}$ and $\mathcal{F}$ in [$(11)$](#eq-11), the optimal trajectory parameterization is generally hard to know.
Unlike traditional methods approximating solutions via a large number of variables, we propose to solve a lightweight relaxed optimization via unconstrained NLP, where the spatial-temporal deformation of $\mathfrak{T}_{\mathrm{MINCO}}$ is applied. The relaxation to [$(11)$](#eq-11) is defined as

<span id="eq-91"></span>

$$
\min_{\boldsymbol{\xi}, \boldsymbol{\tau}}~{J(\mathbf{q}(\boldsymbol{\xi}),\mathbf{T}(\boldsymbol{\tau}))+I(\mathbf{c}(\mathbf{q}(\boldsymbol{\xi}),\mathbf{T}(\boldsymbol{\tau})),\mathbf{T}(\boldsymbol{\tau}))}, \tag{91}
$$

where $J$ is the time-regularized control effort [$(69)$](#eq-69) for $\mathfrak{T}_{\mathrm{MINCO}}$ and $I$ is the quadrature of penalty functional [$(90)$](#eq-90). Note that any task-specific requirement, either objectives or constraints, can be combined in [$(91)$](#eq-91) without affecting its structure.

To generate trajectories for a flat multicopter, we first parameterize its flat-output trajectory as $\mathfrak{T}_{\mathrm{MINCO}}$. After assigning a fixed number of pieces into each $\mathcal{P}_i$, variable transformations are applied to eliminate all direct constraints.

User-defined $\mathcal{G}_\mathcal{D}$ are also transformed into $\mathcal{G}$ via $\Psi_x$ and $\Psi_u$.
Finally, we obtain the cost function [$(91)$](#eq-91).

Apparently, the gradient propagation is derived for all layers except $\Psi_x$ and $\Psi_u$. One can either apply **Automatic Differentiation** (AD) to $\Psi_x$ and $\Psi_u$ or derive the gradient propagation analytically by following the reverse-mode AD. The efficiency is the same as the flatness map as ensured by **Baur-Strassen Theorem**. The differentiation is only needed for the given flat dynamics once and for all. With available gradient, the relaxation [$(91)$](#eq-91) is then solved by the **L-BFGS algorithm**.

## 4 Conclusion (By GPT-5.2 in Github Copilot)

`MINCO` can be viewed as a **back-end trajectory generator + lightweight unconstrained optimizer**: given a piece assignment and boundary/intermediate conditions, it constructs the *unique* minimum-control-effort spline (solving a multi-stage LQMT like [$(18)$](#eq-18)), and then deforms its **spatial** and **temporal** parameters to satisfy geometry and continuous-time constraints (relaxing the original problem [$(11)$](#eq-11) into an unconstrained NLP [$(91)$](#eq-91)).

Below is a practical procedure you can follow to implement the `MINCO` pipeline.

### MINCO procedure (implementation-oriented)

**Inputs**
- Flatness order $s$ (e.g., jerk $s=3$ or snap $s=4$), weights $\mathbf{W}$, and time regularization $\rho(\cdot)$ in [$(11)$](#eq-11), [$(12)$](#eq-12), [$(13)$](#eq-13).
- Start/goal boundary derivatives $\bar{\boldsymbol{z}}_o,\bar{\boldsymbol{z}}_f$ (see [$(11e)$](#eq-11)).
- Free-space approximation $\tilde{\mathcal{F}}=\bigcup_i\mathcal{P}_i$ (see [$(14)$](#eq-14)–[$(17)$](#eq-17)), plus piece assignment (e.g., $K$ pieces per primitive).
- Continuous-time dynamic constraints $\mathcal{G}$ (obtained from $\mathcal{G}_\mathcal{D}$ via flatness maps, see [$(9)$](#eq-9)–[$(10)$](#eq-10)).

**Decision variables**
- Spatial variables $\boldsymbol{\xi}$ that generate intermediate points $\mathbf{q}(\boldsymbol{\xi})$ using a smooth surjection (e.g., ball case [$(78)$](#eq-78), polytope case via $f_\mathcal{H}$).
- Time variables $\boldsymbol{\tau}$ that generate $\mathbf{T}(\boldsymbol{\tau})$ via a diffeomorphism (e.g., fixed-sum case [$(71)$](#eq-71); gradient uses [$(72)$](#eq-72)).

**Algorithm**
1. **Discretize the topology (piece assignment)**
    - Choose $M$ polynomial pieces and assign each piece to a convex primitive $\mathcal{P}_i$ (sequential connection as in [$(15)$](#eq-15)).
    - Define intermediate points $\{q_i\}$ that must lie in overlaps of adjacent primitives (handled later by the surjection $\mathbf{q}(\boldsymbol{\xi})$).

2. **Parameterize the flat-output trajectory as a MINCO spline**
    - Represent each piece with polynomial coefficients $\mathbf{c}_i$ and duration $T_i$.
    - Use the MINCO construction to obtain coefficients from spatial-temporal parameters: $\mathbf{c}=\mathbf{c}(\mathbf{q},\mathbf{T})$ (banded linear system such as [$(57)$](#eq-57)).
    - Compute the smoothness+time cost
      $$J(\mathbf{q},\mathbf{T}) = J_q(\mathbf{q},\mathbf{T}) + \rho(\|\mathbf{T}\|_1) \quad \text{$(69)$.}$$

3. **Eliminate direct constraints by variable transformations**
    - **Time positivity / fixed total time**: optimize over $\boldsymbol{\tau}$ and map to $\mathbf{T}(\boldsymbol{\tau})$ (e.g., [$(71)$](#eq-71)).
    - **Geometry of intermediate points**: optimize over $\boldsymbol{\xi}$ and map to $\mathbf{q}(\boldsymbol{\xi})$ (e.g., [$(78)$](#eq-78) for balls; analogous smooth surjection for polytopes).
    - After this step, constraints like $\mathbf{T}\succ\mathbf{0}$ and $q_i\in\mathcal{P}$ are satisfied **by construction**.

4. **Handle continuous-time constraints via integral penalty**
    - Convert the infinite constraints $\mathcal{G}(\boldsymbol{z}(t),\dots,\boldsymbol{z}^{(s)}(t))\preceq \mathbf{0}$ into a penalty functional [$(87)$](#eq-87)–[$(88)$](#eq-88).
    - Numerically evaluate it by quadrature, yielding $I(\mathbf{c},\mathbf{T})$ in [$(90)$](#eq-90).

5. **Solve the unconstrained NLP**
    - Minimize the relaxed objective
      $$\min_{\boldsymbol{\xi},\boldsymbol{\tau}}\; J(\mathbf{q}(\boldsymbol{\xi}),\mathbf{T}(\boldsymbol{\tau})) + I(\mathbf{c}(\mathbf{q}(\boldsymbol{\xi}),\mathbf{T}(\boldsymbol{\tau})),\mathbf{T}(\boldsymbol{\tau}))\quad\text{$(91)$.}$$
    - Use L-BFGS (as described at the end of §3.5). For gradients, propagate through layers:
      - MINCO layer $\mathbf{c}(\mathbf{q},\mathbf{T})$: linear-complexity gradients w.r.t. $\mathbf{q}$ and $\mathbf{T}$ (see [$(64)$](#eq-64), [$(68)$](#eq-68)).
      - Time map $\mathbf{T}(\boldsymbol{\tau})$: use [$(72)$](#eq-72) (or the exponential map case).
      - Spatial map $\mathbf{q}(\boldsymbol{\xi})$: use the analytic Jacobians (e.g., [$(86)$](#eq-86)).
      - Flatness maps $\Psi_x,\Psi_u$: use AD or derive reverse-mode gradients once (see §3.5).

6. **Recover the feasible multicopter trajectory**
    - Output the optimized flat trajectory $\boldsymbol{z}(t)$, then map to state/input using [$(2)$](#eq-2)–[$(3)$](#eq-3).
    - Validate $\boldsymbol{z}(t)\in\mathcal{F}$ and $\mathcal{G}\preceq \mathbf{0}$ using the same sampling resolution $\kappa_i$ as in [$(90)$](#eq-90).

This procedure is exactly the “MINCO-as-a-module” viewpoint: **(i)** construct the unique minimum-effort spline from $\mathbf{q},\mathbf{T}$, and **(ii)** optimize $\mathbf{q},\mathbf{T}$ (via $\boldsymbol{\xi},\boldsymbol{\tau}$) to satisfy geometry and dynamics.



<!-- ## 4 Applications
### 4.1 Large-Scale Unconstrained Control Effort Minimization

We benchmark several existing schemes over problem [$(18)$](#eq-18), including the QP formulation by Mellinger and Kumar~[@Mellinger2011MinimumST], the closed-form solution by Bry et al.~[@Bry2015AggressiveFO], and the linear-complexity scheme by Burke et al.~[@Burke2020GeneratingMSTRF]. We implement all these schemes in C++11 without any explicit hardware acceleration. Mellinger's scheme is implemented using OSQP~[@Stellato2020OSQP]. Bry's solution is evaluated by both a dense solver and a sparse one~[@Demmel1999SupernodalLU]. Burke's scheme is re-implemented here for fairness, which is faster than the original one~[@Burke2020GeneratingMSTRF]. The benchmark is conducted on an Intel Core i7-8700 CPU under Linux.

The performance is reported in Fig.~[fig:BenchmarkSubproblems](#fig:BenchmarkSubproblems). Both jerk $s=3$ and snap $s=4$ are minimized as defined in [$(18)$](#eq-18). Mellinger's scheme~[@Mellinger2011MinimumST] only performs better than the dense evaluation of Bry's closed-form solution~[@Bry2015AggressiveFO] on middle-scale problems ($10^1<M<10^3$). Burke's scheme~[@Burke2020GeneratingMSTRF] benefits from its linear complexity, thus it can solve large-scale problems ($10^4<M<10^6$). Our scheme improves the computation speed by orders of magnitude against the others at any problem scale while retaining $O(M)$ complexity.

In conclusion, our optimality conditions provide a practical way to directly construct the solution of problem [$(18)$](#eq-18), which possesses simplicity, efficiency, stability and scalability.
The trajectory class $\mathfrak{T}_{\mathrm{MINCO}}$ can serve as a reliable submodule of our optimization framework.

\subsection{Trajectory Generation Within Safe Flight Corridors}
\begin{figure}[ht]
    \centering
    \includegraphics[width=1.0\columnwidth]{TrajSFCs.pdf}
    \caption{Piece assignment for a trajectory within different kinds of safe flight corridors in $\mathbb{R}^n$. Each geometrical primitive is assigned with $K$ pieces. An intermediate point $q_i$ is assigned to $\mathcal{P}_{\ceil{i/K}}\cap\mathcal{P}_{\ceil{(i+1)/K}}$. For ball-shaped corridors, a point is further anchored to an $(n-1)$-dimensional disk if it is assigned to the intersection of two $n$-dimensional balls.<a id="fig:TrajSFCs"></a>}
    \vspace{-0.0cm}
\end{figure}

\begin{figure}[ht]
    \centering
    \includegraphics[width=1.0\columnwidth]{TrajectoryInSFC.png}
    \caption{Optimized trajectories within different kinds of 3-D SFCs. The speed profile is colored according to its magnitude. The proposed method generates smooth trajectories within randomly generated SFCs. The speed persistently attains the maximum even if SFCs are narrow and twisted.<a id="fig:TrajectoryInSFC"></a>}
    \vspace{-0.0cm}
\end{figure}

As a special case of problem [$(11)$](#eq-11), trajectory generation within 3-D Safe Flight Corridors (SFCs) has been widely adopted in real-world applications such as~[@Gao2020TeachRepeatReplanAC],~[@Honig2018TrajectorySWARM], and~[@Gao2019FlyingPC]. The SFCs are usually generated by the \textit{front end} of a trajectory planning framework as an abstraction of the concerned configuration space, such as the Parallel Convex Cluster Inflation (PCCI)~[@Gao2020TeachRepeatReplanAC], the Regional Inflation by Line Search (RILS)~[@Liu2017PlanningDF], the Safe‐Region RRT* Expansion~[@Gao2019FlyingPC], or the Iterative Regional Inflation by Semidefinite programming (IRIS)~[@Deits2015ComputingIRIS]. We assume that an SFC, either polyhedron-shaped or ball-shaped, is already obtained here as in ([eq:FreeSpaceConvexDecomposition](#eq:FreeSpaceConvexDecomposition)) and [$(15)$](#eq-15). Optimizing dynamically feasible trajectories within SFCs is usually taken as a \textit{back end} of such kind of frameworks.

\begin{figure}[t]
    \centering
    \includegraphics[width=1.0\columnwidth]{PolytopesSFCOptBenchmark.pdf}
    \caption{Benchmark on computation efficiency. The Proposed$^\star$ one outperforms other methods by orders of magnitudes. Methods from Tordesillas$^\star$ and Deits$^\star$ suffer from combinatorial explosion, but they are faster than Patterson$^\star$ on small-scale problems. Methods not supporting time or interval optimization consume less computation time at the sacrifice of quality. <a id="fig:PolytopesSFCOptBenchmark"></a>}
    \vspace{-0.0cm}
\end{figure}

\begin{figure}[t]
    \centering
    \includegraphics[width=0.95\columnwidth]{sfcTrajOptBenchmarkViz.png}
    \caption{Geometrical profiles of trajectories generated by different methods in a random environment. The trajectory from the Proposed$^\star$ one is closer to the ground truth from Patterson$^\star$ than all other specialized ones.<a id="fig:sfcTrajOptBenchmarkViz"></a>}
        \vspace{-0.2cm}
\end{figure}

As is illustrated in Fig.~[fig:TrajSFCs](#fig:TrajSFCs), we consider two kinds of SFCs. Each convex primitive is assigned with $K$ trajectory pieces, thus $M=M_\mathcal{P}K$. The $i$-th trajectory piece $p_i(t):[0,T_i]\mapsto\mathbb{R}^3$ is assigned to $\mathcal{P}_{\ceil{i/K}}$. The intermediate point assignment of $\mathfrak{T}_{\mathrm{MINCO}}$ is also determined. Applying the constraint elimination, direct constraints on $\mathbf{T}$ and $\mathbf{q}$ are automatically satisfied, such as $\mathbf{T}\in\mathbb{R}_{>0}$ for $\rho_s(T)=k_\rho T$, $\|\mathbf{T}\|_1<T_\Sigma$ for $\rho_f$, as well as $q_i\in\mathcal{P}_{\ceil{i/K}}\cap\mathcal{P}_{\ceil{(i+1)/K}}$ for all $i$. Constraints $\mathcal{G}$ are specified as follows to ensure both safety and dynamic limits:
\begin{equation}
<a id="eq:SimpleContinuousConstraints"></a>
\begin{cases}
p_i(t)\in\mathcal{P}_{\ceil{i/K}}, &\forall t\in[0,T_i],~\forall 1\leqslant i\leqslant M,\\
\|p_i^{(1)}(t)\|_2^2\leqslant v_{max}^2, &\forall t\in[0,T_i],~\forall 1\leqslant i\leqslant M,\\
\|p_i^{(2)}(t)\|_2^2\leqslant a_{max}^2, &\forall t\in[0,T_i],~\forall 1\leqslant i\leqslant M,\\
\end{cases}
\end{equation}
where $v_{max}$ and $a_{max}$ are dynamic limits. Then, the trajectory generation in $\tilde{\mathcal{F}}$ can be accomplished by solving the unconstrained NLP in [$(91)$](#eq-91). We show some optimization results in Fig.~[fig:TrajectoryInSFC](#fig:TrajectoryInSFC) for randomly generated SFCs. Both the polyhedron-shaped and ball-shaped SFCs are handled.

To further evaluate the performance of our method, we benchmark several existing methods over polyhedron-shaped SFCs. Technical details for all methods are listed as here:

\begin{itemize}
    \item Proposed$^\star$: Jerk energy minimization is conducted with either linear time regularization or fixed total time. Constraints in ([eq:SimpleContinuousConstraints](#eq:SimpleContinuousConstraints)) are enforced.
    \item Patterson$^\star$~[@Patterson2014GPOPS2]: The LQMT problem of a jerk-controlled system is solved using Gauss pseudospectral method. Each trajectory phase is confined within one polytope. Dynamic limits are enforced through path constraints.
    \item Gao$^\star$~[@Gao2020TeachRepeatReplanAC]: A geometrical curve is optimized via QP formed by jerk energy cost and linear safety constraints on control points of B\'ezier curves. Its temporal profile is then optimized by an SOCP for TOPP under ([eq:SimpleContinuousConstraints](#eq:SimpleContinuousConstraints)).
    \item Deits$^\star$~[@Deits2015EfficientMISOS]: The jerk energy and interval allocation of a trajectory is optimized by an MISOCP. Safety constraints and dynamic limits on $L_1$-norm of trajectory derivatives are exactly enforced through SOS conditions. Each trajectory piece is a $3$-degree polynomial.
    \item Deits: Details are the same as Deits$^\star$ except that intervals are allocated heuristically. No integer variable exists.
    \item Tordesillas$^\star$~[@Tordesillas2019Faster]: Details are the same as Deits$^\star$ except that safety is ensured by linear constraints on control points of B\'ezier curves. An MIQP is solved instead. The total time is determined by a well-designed algorithm.
    \item Mellinger~[@Mellinger2011MinimumST]: A trajectory is optimized in a QP formed by quadratic cost on jerk and linear safety constraints on sampled points. Its time allocation is generated with trapezoidal velocity profiles. Dynamic limits in ([eq:SimpleContinuousConstraints](#eq:SimpleContinuousConstraints)) are enforced by time scaling [@Liu2017PlanningDF].
    \item Sun$^\star$~[@Sun2020BilevelTO]: A trajectory is optimized in a bilevel framework. The low-level QP is exact the same as Tordesillas$^\star$ except that $6$-degree polynomials are used. Its time allocation is optimized in the upper level optimization using analytical sensitivity of the low-level one.
\end{itemize}

\begin{figure}[t]
    \centering
    \includegraphics[width=1.0\columnwidth]{sfcOptOverviewPlot.pdf}
    \caption{Benchmark on success rates, relative control effort, and flight durations. Methods from Deits$^\star$ and Tordesillas$^\star$ have relatively low success rates because they optimize interval allocation which involves integer variables. Methods from Deits and Mellinger have relatively large control effort because optimization on time or interval allocation is not supported. Note that some methods need preassigned total flight duration. <a id="fig:sfcOptOverviewPlot"></a>}
    \vspace{-0.2cm}
\end{figure}

\begin{figure}[ht]
    \begin{center}
        \subfigure[<a id="fig:LongRangeFlightViz"></a> Trajectories from different methods within a long SFC of the office.]
        {\includegraphics[width=1.0\columnwidth]{LongRangeOfficeEnvViz.png}}
        \subfigure[<a id="fig:ConstrainedVelAccNorm"></a> The velocity and acceleration magnitude for different methods.]
        {\includegraphics[width=1.0\columnwidth]{LongRangeNormTemporalProfile.pdf}}
    \end{center}
    \caption{<a id="fig:LongRangeFlightProfile"></a> Trajectory profiles with large weight on time regularization. Only the Proposed$^\star$ one and the ground truth from Patterson$^\star$ generate persistently tight trajectories, considering the continuous-time constraints on norms of derivatives.}
    \vspace{-0.2cm}
\end{figure}

A method is asterisked if it supports optimizing time allocation or interval allocation. Dynamic limits are treated as the same for either $L_1$-norm or $L_2$-norm. Thus, constraints are indeed much tighter on methods from the Proposed$^\star$, Gao$^\star$, Mellinger, and Patterson$^\star$, that restrict $L_2$-norm of derivatives. As for total time, Deits$^\star$ and Sun$^\star$ need preassigned values, thus, we set their total time using trapezoidal velocity profiles. Patterson$^*$ handles the original problem directly, taking advantage of the exponential convergence of global collocation~[@Patterson2014GPOPS2]. Therefore, we take its trajectory as the ground truth.

The benchmark is conducted in randomly generated environments, one of which is shown in Fig.~[fig:sfcTrajOptBenchmarkViz](#fig:sfcTrajOptBenchmarkViz). The corridor size $M_\mathcal{P}$ ranges from $2$ to $64$ where $10$ SFCs are generated for each size. The facet number of $\mathcal{P}^\mathcal{H}_i$ ranges from $8$ to $30$. We set $K=1$, $k_\rho = 1024.0$, $v_{max}=5.0m/s$, $a_{max}=7.0m/s^2$, $\kappa_i = 16$, the timeout as $3$ minutes, and the relative tolerance as $10^{-4}$. Static boundary conditions are assumed. As for programs, methods from the Proposed$^\star$ and Mellinger are both implemented in C++11 with a single thread for sequential computing. The general-purpose solver~[@Patterson2014GPOPS2] is directly adopted for Patterson$^\star$. A C++11 re-implementation of the original MATLAB one~[@Deits2015EfficientMISOS] is adopted for both Deits$^\star$ and Deits. Methods from Gao$^\star$, Tordesillas$^\star$, and Sun$^\star$ are taken from their open-source implementations. Besides, the commercial solver Gurobi~[@GurobiOPT] is used by Deits$^\star$, Deits, and Tordesillas$^\star$ with $6$ threads enabled for parallel computing. The commercial solver MOSEK~[@MosekOPT] is used by both Gao$^\star$ and Sun$^\star$.

The computation efficiency is provided in Fig.~[fig:PolytopesSFCOptBenchmark](#fig:PolytopesSFCOptBenchmark). Clearly, Deits$^\star$ and Tordesillas$^\star$ have to optimize integer variables, thus possessing approximately exponential complexity as $M_\mathcal{P}$ grows. Nonetheless, Tordesillas$^\star$ achieves acceptable performance for small $M_\mathcal{P}$ by using a more conservative but easier constraints than Deits$^\star$. Methods from Deits and Mellinger achieve satisfactory performance by tackling time allocation or interval allocation heuristically. Methods from Gao$^\star$ and Sun$^\star$ performs well in their scalability while the overhead for small $M_\mathcal{P}$ does not suit real-time applications. The method from Patterson$^\star$ suits offline scenarios where computation time is far less important than solution quality. The Proposed$^\star$ method improves the speed by more than an order of magnitude, while retaining optimization on time allocation.

The geometrical profile of trajectories is provided in Fig.~[fig:sfcTrajOptBenchmarkViz](#fig:sfcTrajOptBenchmarkViz). Methods that do not optimize time or interval allocation are more likely to deviate from the ground truth. Trajectories by Deits$^\star$ and Tordesillas$^\star$ also deviate a lot from the ground truth because of the limited resolution of intervals. The success rates, relative control effort, and flight durations are all given in Fig.~[fig:sfcOptOverviewPlot](#fig:sfcOptOverviewPlot). Interval allocation based methods have relatively low success rates. All control effort are normalized by that of the Proposed$^\star$ one, whose total time is fixed accordingly for fairness. Clearly, heuristic time or interval allocation causes relatively high control effort. Besides, the flight duration from the Proposed$^\star$ method is the closest to the ground truth.

To explore the temporal profile, we also test four complete methods in a long-distance flight as shown in Fig.~[fig:LongRangeFlightProfile](#fig:LongRangeFlightProfile). The trajectory from Gao$^\star$ is less aggressive than the others. The trajectory from Tordesillas$^\star$ has discontinuous jerk since $3$-degree polynomials are used. The results from the Proposed$^\star$ one have nearly the same quality as the ground truth. Profiting from the effectiveness of the penalty functional, our method can also achieve the maximum speed persistently.

In simulations, our method achieves comparable trajectory quality to the collocation based method~[@Patterson2014GPOPS2] in both the geometrical and temporal profile, while having superior computational speed against all benchmarked ones.

\begin{figure}[t]
    \begin{center}
        \subfigure[<a id="fig:HeavyFPV"></a>Hardware settings of the vehicle.]
        {\includegraphics[width=0.49\columnwidth]{HeavyFPV.png}}%
        \hspace{0.02cm}
        \subfigure[<a id="fig:HighSpeedFirstPersonView"></a>An onboard camera image.]
        {\includegraphics[width=0.49\columnwidth]{HighSpeedFirstPersonView.png}}
    \end{center}
    \caption{<a id="fig:HighSpeedFlight"></a>Left: Our autonomous multicopter equipped with an onboard computer and a LiDAR. Right: A snapshot of the first person view during our high-speed flight experiment in a garage.}
    \vspace{-0.2cm}
\end{figure}

We conduct experimental validation of our framework by enabling high-speed autonomous flights of a multicopter in an underground garage. All computations are performed by an onboard computer with an Intel Core i7-8550U CPU, which is shown in Fig.~[fig:HighSpeedFlight](#fig:HighSpeedFlight). We utilize FAST-LIO2~[@Xu2021FastLIO2] for highly robust LiDAR-based localization. Polyhedron-shaped safe flight corridors are generated by following~[@Gao2020TeachRepeatReplanAC]. Our method generates a $343.57m$ global trajectory in only $0.29s$ in the first track. The planning results are provided in Fig.~[fig:HighSpeedGlobalView](#fig:HighSpeedGlobalView). We believe this computation time validates our framework's efficiency even for long-distance trajectory planning. In this experiment, the vehicle speed reaches $12.0m/s$ while ensuring its safety among obstacles and keeping a low thrust-to-weight ratio. We further compare planning results for different parameters on $v_{max}$. It turns out that our method can always squeeze the capability of $v_{max}$ and $a_{max}$ if $k_\rho$ is large. More details about this experiment are given in the attached multimedia.

\subsection{\texorpdfstring{$\mathrm{SE}(3)$}{SE(3)} Motion Planning in Quotient Space}

\begin{figure*}[ht]
    \begin{center}
        \subfigure[<a id="fig:LayoutForPolytopes"></a>SFC layout]
        {\includegraphics[width=0.30\columnwidth]{SE3NarrowLayout.png}}%
        \hspace{0.01cm}
        \subfigure[<a id="fig:NarrowGap30Deg"></a>$\phi_{gap}=30^\circ$]
        {\includegraphics[width=0.30\columnwidth]{SE3Narrow30Deg.png}}%
        \hspace{0.01cm}
        \subfigure[$\phi_{gap}=45^\circ$]
        {\includegraphics[width=0.30\columnwidth]{SE3Narrow45Deg.png}}%
        \hspace{0.01cm}
        \subfigure[$\phi_{gap}=60^\circ$]
        {\includegraphics[width=0.30\columnwidth]{SE3Narrow60Deg.png}}%
        \hspace{0.01cm}
        \subfigure[$\phi_{gap}=75^\circ$]
        {\includegraphics[width=0.30\columnwidth]{SE3Narrow75Deg.png}}%
        \hspace{0.01cm}
        \subfigure[<a id="fig:NarrowGap85Deg"></a>$\phi_{gap}=85^\circ$]
        {\includegraphics[width=0.30\columnwidth]{SE3Narrow85Deg.png}}
        \vspace{0.0cm}
        \subfigure[<a id="fig:SE3TrajectoryConstraintProfile"></a>The magnitude of angular velocity and the normalized thrust for different $\mathrm{SE}(3)$ trajectories.]
        {\includegraphics[width=1.95\columnwidth]{SE3NarrowGapProfile.pdf}}
    \end{center}
    \caption{<a id="fig:SE3PlanningForNarrowGaps"></a> SFC layout for a narrow gap, $\mathrm{SE}(3)$ trajectories under different widths of gaps, and control inputs for different motions. As the gap becomes narrower, larger angular rates and higher thrust are needed for a safe flight. The proposed method persistently enforces limits on these control inputs under different settings while retains millisecond-level computation time.}
\end{figure*}

In dense obstacle environments, safe motions often do not exist for narrow spaces unless a multicopter agilely adjusts its attitude to avoid collisions. Therefore, we consider $\mathrm{SE}(3)$ motion planning in our framework. An important property for planning in $\mathrm{SE}(3)$ as a manifold with structure $\mathbb{R}^3\times\mathrm{SO}(3)$ is the necessary condition that a feasible pose for a rigid body at least contains a feasible translation for a dimensionless point. The subspace $\mathbb{R}^3$ is referred to as a \textit{Quotient Space}~[@Orthey2019REQST].
Exploiting such a quotient-space decomposition~[@Orthey2018QSMP], we consider the rotational safety based on a translational trajectory, instead of handling them jointly. Therefore, we can relax assumptions for ([eq:FreeSpaceConvexDecomposition](#eq:FreeSpaceConvexDecomposition)) such that $\tilde{\mathcal{F}}$ is just a free region in the quotient space without considering multicopter's actual size.

We consider simplified quadcopter dynamics whose configuration is defined by its translation $p$ and rotation $\mathbf{R}$:
\begin{equation}
    <a id="eq:SimplifiedDynamics"></a>
    \left\{
    \begin{aligned}
    \dot{p}&=v,\\
    \bar{m}\dot{v}&=-\bar{m}\bar{g}e_3+\mathbf{R}\tilde{f}e_3,\\
    \dot{\mathbf{R}}&=\mathbf{R}\hat{\omega}.
    \end{aligned}
    \right.
\end{equation}
where $e_i$ is the $i$-th column of $\mathbf{I}_{3}$, $\bar{g}$ the gravitational acceleration, $\tilde{f}$ the thrust, $\omega$ the body rate input, and $\bar{m}$ the vehicle mass. The hat map $\hat{\cdot}:\mathbb{R}^3\mapsto\mathbb{R}^{3\times3}$ is defined by $\hat{a}b=a\times b$ for all $a,b\in\mathbb{R}^3$. Moreover, we model the geometrical shape of a symmetric multicopter as its outer L\"owner-John ellipsoid~[@Toth2017HandbookDCG],
\begin{equation}
<a id="eq:EllipsoidTrajectory"></a>
\mathcal{E}(t)=\left\{\mathbf{R\right\}(t)\mathbf{Q}x+p(t) ~\Big|~\|x}\|_2\leqslant 1}
\end{equation}
where $\mathbf{Q}=\Diag\left\{r_e,r_e,h_e\right\}$. $r_e$ and $h_e$ are the radius and the height of multicopter, respectively.

A feasible motion satisfies the safety and dynamic limits. By safety we mean $\mathcal{E}(t)\subset\tilde{\mathcal{F}},~\forall t\in[0,T]$, where $T$ is the total time of the motion. However, this safety constraint is indeed hard to enforce. We further make an assumption on $\mathcal{F}$ that all $\mathcal{P}_i^\mathcal{H}$ or their intersections are able to contain at least one ellipsoid of the multicopter. This assumption can be reasonably satisfied when $\tilde{\mathcal{F}}$ is generated incrementally. As a result, we can ensure safety through
\begin{equation}
<a id="eq:RelaxedSafetyConstraintSE3"></a>
\forall t\in[0,T],~\exists1\leqslant i\leqslant M_p,~\mathit{s.t.}~\mathcal{E}(t)\subset\mathcal{P}^\mathcal{H}_i.
\end{equation}
By dynamic limits we mean the velocity, thrust and body rate should have reasonable magnitude,
\begin{equation}
<a id="eq:DynamicLimitsSE3"></a>
\begin{cases}
\|p^{(1)}(t)\|_2^2\leqslant v_{max}^2, &\forall t\in[0,T],\\
f_{min}\leqslant\tilde{f}(t)\leqslant f_{max}, &\forall t\in[0,T],\\
\|\omega(t)\|_2^2\leqslant \omega_{max}^2, &\forall t\in[0,T].
\end{cases}
\end{equation}

Given a quotient-space trajectory $p(t):[0,T]\mapsto\mathbb{R}^3$, state-control trajectories of $p$, $v$, $\mathbf{R}$, and $\omega$ are all algebraically computed by flatness maps $\Psi_x$ and $\Psi_u$ of the dynamics ([eq:SimplifiedDynamics](#eq:SimplifiedDynamics)). The concrete forms of the algebraic maps are detailed in~[@Mellinger2011MinimumST] with fixes on the body rate~[@Faessler2018DiffFRD] for simple quadcopters thus are omitted here. Consequently, the entire $\mathrm{SE}(3)$ trajectory is also obtained. Denote by $\mathbf{R}(t)$ its rotational part. To generate $p(t)$ in $\tilde{\mathcal{F}}$, we follow the methodology of our previous experiment but with different constraints here.

The $i$-th trajectory piece $p_i(t):[0,T_i]\mapsto\mathbb{R}^3$ is assigned to the polytope $\mathcal{P}^\mathcal{H}_j$ defined in ([eq:HPolytopeDescription](#eq:HPolytopeDescription)) with $j=\ceil{i/K}$. We denote by $\mathcal{E}_i(t)$ the ellipsoid induced by $p_i(t)$ and the corresponding $\mathbf{R}_i(t)$ as is defined in ([eq:EllipsoidTrajectory](#eq:EllipsoidTrajectory)). As proposed by Wu et. al.~[@Wu2021ExternalFRSMP], ensuring safety by confining the vehicle ellipsoid in a polyhedron also has an analytical form. Specifically,
\begin{equation}
\mathcal{E}_i(t)\in\mathcal{P}^\mathcal{H}_j,~j=\ceil{i/K},~\forall t\in[0,T_i],
\end{equation}
is equivalent to
\begin{subequations}
<a id="eq:SafetyOnEllipsoid"></a>
\begin{align}
\left[\left[\mathbf{A}_j\mathbf{R}_i(t)\mathbf{Q}\right]^2\mathbf{1}\right]^{\frac{1}{2}}+&\mathbf{A}_j p_i(t)-b_j\preceq\mathbf{0},\\
j=\ceil{i/K},&~\forall t\in[0,T_i],
\end{align}
\end{subequations}
where $\mathbf{1}$ is an all-ones vector with an appropriate length, $[\cdot]^2$ and $[\cdot]^{\frac{1}{2}}$ are entry-wise square and square root, respectively. Finally, we obtained the state-control constraint $\mathcal{G}_\mathcal{D}$ in ([eq:OriginalStateControlConstraints](#eq:OriginalStateControlConstraints)) for the considered dynamics in ([eq:SimplifiedDynamics](#eq:SimplifiedDynamics)). We choose to minimize $s=3$ because it is the highest derivative order for flatness of ([eq:SimplifiedDynamics](#eq:SimplifiedDynamics)) and also helpful in smoothing the angular rate.

We validate our framework in simulations where a relatively large quadcopter is required to fly through a narrow gap with much smaller width as shown in Fig.~[fig:SE3PlanningForNarrowGaps](#fig:SE3PlanningForNarrowGaps). The settings are $r_e=0.5m$, $h_e=0.1m$, $f_{min}/\bar{m}=5.0m/s^2$, $f_{max}/\bar{m}=18.5m/s^2$, $v_{max}=6.5m/s$, and $\omega_{max}=5.2rad/s$. Intuitively, the quadcopter can only achieve no more than $1$ revolution per second ($rps$), making it less agile than small quadcopters~[@Kushleyev2013TowardsSAMQ] that can achieve $5rps$. The computation times, required roll angles, and $\mathrm{SE}(3)$ motions for different $d_{gap}$ are shown in the Table~[Tab:ComputationTimeForGaps](#Tab:ComputationTimeForGaps) and Fig.~[fig:NarrowGap30Deg](#fig:NarrowGap30Deg)-[fig:NarrowGap85Deg](#fig:NarrowGap85Deg).

\begin{table}[ht]
    \centering
    \caption{<a id="Tab:ComputationTimeForGaps"></a>Computation times and roll angles for different gaps}
    \begin{tabular}{c|c|c|c|c|c}
        \hline
        $d_{gap}$           & $0.88m$     & $0.76m$     & $0.60m$     & $0.40m$     & $0.25m$     \\ \hline
        $\phi_{gap}$ & $30^\circ$ & $45^\circ$ & $60^\circ$ & $75^\circ$ & $85^\circ$ \\ \hline
        $t_{comp.}$        & $4.7ms$     & $4.4ms$     & $6.0ms$    & $6.6ms$    & $7.4ms$    \\ \hline
    \end{tabular}
    \vspace{0.0cm}
\end{table}

As the gap becomes narrower, the required roll angle becomes larger and the feasible space becomes smaller in view of dynamic limits. Our method is still able to find all the feasible motions. The superior computation speed makes it possible to solving $\mathrm{SE}(3)$ planning at a high frequency (at least $100Hz$). Constraint functions are visualized in Fig.~[fig:SE3TrajectoryConstraintProfile](#fig:SE3TrajectoryConstraintProfile). The body rate and thrust satisfy dynamic limits all the time. The continuous-time tightness of $f_{min}$ for $\phi_{gap}\in\left\{60^\circ, 75^\circ, 85^\circ\right\}$ shows the effectiveness of our penalty functional.

\begin{figure}[h]
    \begin{center}
        \subfigure[<a id="fig:QuadrotorCfg"></a>The custom-made quadcopter.]
        {\includegraphics[width=0.572\columnwidth]{QuadrotorCfg.png}}%
        \hspace{-0.0cm}
        \subfigure[<a id="fig:WindowCfg"></a>The window.]
        {\includegraphics[width=0.24\columnwidth]{WindowCfg.png}}
    \end{center}
    \caption{<a id="fig:QuadrotorWindowCfg"></a>Sizes of the quadcopter and the narrow window.}
\end{figure}


\begin{figure*}[ht]
    \begin{center}
        \subfigure[<a id="fig:InteractiveScenario"></a>The interactive scenario.]
        {\includegraphics[width=0.63\columnwidth]{InteractiveScenario.png}}%
        \hspace{0.01cm}
        \subfigure[<a id="fig:DoubleSnapShotsMarked"></a>Flying through two consecutive windows.]
        {\includegraphics[width=0.63\columnwidth]{DoubleSnapShotsMarked.png}}%
        \hspace{0.01cm}
        \subfigure[<a id="fig:TripleSnapShotsMarked"></a>Flying through three consecutive windows.]
        {\includegraphics[width=0.63\columnwidth]{TripleSnapShotsMarked.png}}
        \vspace{0.00cm}
        \subfigure[<a id="fig:DoublePlanned"></a> $\mathrm{SE}(3)$ planning for two windows.]
        {\includegraphics[width=0.95\columnwidth]{TwoWindowsSE3.png}}%
        \hspace{0.01cm}
        \subfigure[<a id="fig:TriplePlanned"></a> $\mathrm{SE}(3)$ planning for three windows.]
        {\includegraphics[width=0.95\columnwidth]{ThreeWindowsSE3.png}}
        \vspace{0.00cm}
    \end{center}
    \caption{<a id="fig:FlyThroughMultipleWindows"></a> Experiment results for three $\mathrm{SE}(3)$ planning scenarios. The Fig.~[fig:InteractiveScenario](#fig:InteractiveScenario) gives a snapshot for the interactive scenario. Fig.~[fig:DoubleSnapShotsMarked](#fig:DoubleSnapShotsMarked)-[fig:TripleSnapShotsMarked](#fig:TripleSnapShotsMarked) show two snapshots for real flights through consecutive windows. Fig.~[fig:DoublePlanned](#fig:DoublePlanned)-[fig:TriplePlanned](#fig:TriplePlanned) show corresponding $\mathrm{SE}(3)$ trajectories generated by the proposed method.}
\end{figure*}

We evaluate the performance of our planner in a real-world experiment where a quadcopter flies through several narrow windows. Sizes of the quadcopter and windows are given in Fig.~[fig:QuadrotorWindowCfg](#fig:QuadrotorWindowCfg). The quadcopter weights $794.2g$. The safety margin of the short side is only $5.4cm$, implying that the feasible motion space is extremely small. The settings are $r_e = 20.0cm$, $h_e = 4.6cm$, $v_{max}=4.0m/s$, $f_{min}/\bar{m} = 3.0m/s^2$, $f_{max}/\bar{m} = 18.0m/s^2$, $\omega_{max} = 6.0rad/s$, and $K=2$. The flying space is a restricted volume of $6.5\times6.0\times2.0m^3$. All poses of narrow windows and the quadcopter are provided by a motion capture system running at $100Hz$. The obstacle-free region $\tilde{\mathcal{F}}$ is geometrically computed for multiple narrow windows in the free volume. The planner is run on an offboard computer where a human operator arbitrarily chooses the goal position. We adopt the control algorithm by Faessler et al.~[@Faessler2018DiffFRD] for onboard $\mathrm{SE}(3)$ trajectory tracking.

The first scenario contains consecutive windows with roll angles ranging from $30^\circ$ to $90^\circ$. The quadcopter has to fly through them and reach a randomly selected goal as shown in Fig.~[fig:DoubleSnapShotsMarked](#fig:DoubleSnapShotsMarked)-[fig:TriplePlanned](#fig:TriplePlanned). The second scenario is an interactive one where a human operator randomly holds a narrow window for real-time planning as given in Fig.~[fig:InteractiveScenario](#fig:InteractiveScenario). The third scenario requires the quadcopter persistently fly back and forth through multiple windows for a long duration as shown in Fig.~[fig:Consecutive](#fig:Consecutive) and Fig.~[fig:ConsecutiveSE3Trajectory](#fig:ConsecutiveSE3Trajectory). Our planner guides the quadcopter to fly back and forth through windows for about $20.0s$ while ensuring the safety and physical limits all the time. More details about this experiment are given in the attached multimedia.

In this experiment, the short distance between consecutive windows, the small acceleration/deceleration space, and the limited vehicle maneuverability are challenges that our planner must confront. We believe that these results constitute a strong evidence for its constraint fidelity, motion quality, computation efficiency, and robustness. However, we do observe the limitation of optimization-based methods. For example, if two $90^\circ$ windows are asymmetrically placed, a multicopter has to pass them in sequence. Each window only allows two roll angles $\pm90^\circ$. The combinations are $4$ locally optimal maneuvers but only one can be the global optimum. Thus, the other three are shallow local minima inevitable for local methods.

\section{Discussion and Conclusion}

\subsection{Extensions}
Profiting from the flexibility and efficiency, our framework has many applicative and algorithmic extensions. First, no assumption is ever made on concrete forms of vehicle dynamics and $\mathcal{G}_\mathcal{D}$. More accurate dynamics such as the rotor drag~[@Faessler2018DiffFRD] can be adopted to fully exploit physical limits via real-time high-fidelity planning and control. Time-dependent constraints for moving obstacles can also be supported by $\mathcal{G}_\mathcal{D}$. Second, our framework is inherently parallelizable to further squeeze its performance. Computation-demanding operations on $I_\mathcal{G}\sbrac{p}$ are independent at each timestamp, thus parallelization can effectively speedup our optimization. Moreover, it is possible to extend our methodology to other vehicle types whose flat-output space overlaps the configuration space.
An example is the fixed-wing aircraft in~[@Bry2015AggressiveFO] whose flights are mainly restricted by the trajectory curvature. Bry et al. propose Dubins–Polynomial trajectories~[@Bry2015AggressiveFO] for this restriction while the curvature constraint is a special case of $\mathcal{G}$ for MINCO.

To demonstrate the extendibility, we apply our framework to a swarm of multicopters to enable their autonomous navigation in unknown environments. All details of the formulation [$(11)$](#eq-11) and real-world flights are given in a technical report~[@Zhou2021DecentralizedSWARM].

\subsection{Limitations}
Our framework, like most optimization-based ones, focuses on local solutions of trajectory planning, thus suffering from shallow local minima. This can be alleviated by interleaving sampling-based or graph-search-based strategies into our framework, as proposed in~[@Zucker2013Chomp,@Campos2017HybridOTP,@Natarajan2021InterleavingGSTO]. A major limitation of the framework originates from MINCO itself. If $\mathcal{G}$ exist, optimal solutions cannot in general be represented by polynomial splines, let alone MINCO. Thus optimizing MINCO is just a relaxation to the original problem. However, our results show that MINCO can still represent high-quality solutions comparable to the ground truth, but with several orders of magnitudes faster computing. There are also limitations caused by the penalty functional. To achieve zero constraint violations, an unbounded smoothing factor or penalty weight and an unbounded quadrature resolution are both required. However, small constraint violations are empirically acceptable for multicopter navigation. As a reward, this method does not need initial feasible guesses.

\subsection{Conclusion}
In this article, we proposed a flexible multicopter trajectory planning framework powered by several core features, such as the MINCO trajectory based on our optimality conditions, constraint elimination schemes based on smooth maps, the penalty functional method based on constraint transcription, and the backward differentiation of the flatness maps from flat outputs.
All these components enjoy the efficiency and generality originating from low complexity and less preliminary assumptions. We performed extensive benchmarks against many kinds of multicopter trajectory planning methods to show the speedup over orders of magnitude and the top-level solution quality.
A variety of applications demonstrated the versatility of our framework. We also presented further discussions about several unlisted applications or extensions as future work.


\subsection{Proof of Sufficiency in Theorem [thm:OptimalityConditions](#thm:OptimalityConditions)}
<a id="apd:OptimalityConditionsProof"></a>
\begin{proof}
    We consider the space of $M$-piece polynomial $2s$-order splines defined over $[t_0, t_M]$ where consecutive pieces on any $x:[t_0, t_M]\mapsto\mathbb{R}$ satisfy $x_{i-1}^{(j)}(t_i)=x_i^{(j)}(t_i)$ for $0\leqslant j<\bar{d}_i$ and $1\leqslant i<M$.  In [$(18)$](#eq-18), $d_i\leqslant s$ holds for each $i$. For brevity, we define $D_{i,j}$ as $D_{i,j}=i\cdot s+\sum_{k=1}^{j}{d_k}$. According to Theorem 4.4 in~[@Schumaker2007SplineFBT], this spline space is actually a linear space of dimension $\bar{D}=D_{2,M-1}$.

    Moreover, an explicit basis of the space exists. Based on the original partition $t_0<t_1<\dots<t_M$, we define an \textit{extended partition} $\bar{t}_1\leqslant\bar{t}_2\leqslant\dots\leqslant\bar{t}_{\bar{M}}$ of length $\bar{M}=D_{4,M-1}$ as
    \begin{equation}
    <a id="eq:ExtendedPartition"></a>
    \bar{t}_i=\begin{cases} t_0 & \mathit{if}~1\leqslant i\leqslant D_{2,0}, \\ t_j & \mathit{if}~D_{2,j-1}<i\leqslant D_{2,j}, \\ t_M & \mathit{if}~D_{2,M-1}<i\leqslant\bar{M}. \end{cases}
    \end{equation}
    Based on this extended partition, Theorem 4.9 in~[@Schumaker2007SplineFBT] explicitly constructs $\bar{D}$ functions $\left\{B_i(t):[t_0,t_M]\mapsto\mathbb{R\right\}}_{i=1}^{\bar{D}}$ which form a basis for the considered spline space.

    Now we consider [$(18c)$](#eq-18) and [$(18d)$](#eq-18) in the spanned linear space. These conditions specify derivative values on timestamps of the original partition to be interpolated by the basis $\left\{B_i(t)\right\}_{i=1}^{\bar{D}}$. We only needs the specified orders along with their timestamps instead of the specified derivative values. Denote by $\tau_i$ the $i$-th specified timestamps, where
    \begin{equation}
    <a id="eq:SpecifiedStamps"></a>
    \tau_i=\begin{cases} t_0 & \mathit{if}~1\leqslant i\leqslant D_{1,0}, \\ t_j & \mathit{if}~D_{1,j-1}<i\leqslant D_{1,j}, \\ t_M & \mathit{if}~D_{1,M-1}<i\leqslant\bar{D}. \end{cases}
    \end{equation}
    Denote by $\nu_i$ the specified order at $\tau_i$, written as
    \begin{equation}
    <a id="eq:SpecifiedOrderSequence"></a>
    \nu_i=\begin{cases} i-1 & \mathit{if}~1\leqslant i\leqslant D_{1,0}, \\ i-1-D_{1,j-1} & \mathit{if}~D_{1,j-1}<i\leqslant D_{1,j}, \\ i-1-D_{1,M-1} & \mathit{if}~D_{1,M-1}<i\leqslant\bar{D}. \end{cases}
    \end{equation}
    Then, the conditions [$(18c)$](#eq-18) and [$(18d)$](#eq-18) generate a linear equation system on the basis, whose coefficient matrix is
    \begin{equation}
    \mathbf{B}=
    \begin{pmatrix}
    B_1^{(\nu_1)}(\tau_1) & B_2^{(\nu_1)}(\tau_1) & \cdots & B_{\bar{D}}^{(\nu_1)}(\tau_1) \\
    B_1^{(\nu_2)}(\tau_2) & B_2^{(\nu_2)}(\tau_2) & \cdots & B_{\bar{D}}^{(\nu_2)}(\tau_2) \\
    \vdots & \vdots & \ddots & \vdots \\
    B_1^{(\nu_{\bar{D}})}(\tau_{\bar{D}}) & B_2^{(\nu_{\bar{D}})}(\tau_{\bar{D}}) & \cdots & B_{\bar{D}}^{(\nu_{\bar{D}})}(\tau_{\bar{D}})
    \end{pmatrix}.
    \end{equation}
    It is obvious that $\mathbf{B}$ is a square matrix for any possible solution to Theorem [thm:OptimalityConditions](#thm:OptimalityConditions) in each dimension.

    According to Theorem 4.67 in~[@Schumaker2007SplineFBT], $\mathbf{B}$ is nonsingular if and only if
    \begin{equation}
    <a id="eq:NonsingularityCondition"></a>
    \tau_i\in\delta_i=\begin{cases} [\bar{t}_i, \bar{t}_{i+2s}) & \mathit{if}~\nu_i+\alpha_i-2s\geqslant 0, \\ (\bar{t}_i, \bar{t}_{i+2s}) & \mathit{if}~\nu_i+\alpha_i-2s<0, \end{cases}
    \end{equation}
    holds for any $i=1,\dots,\bar{D}$, where $\alpha_i$ is defined as
    \begin{equation}
    \alpha_i=\left\{\mathit{max\right\}~j~:~\bar{t}_i=\dots=\bar{t}_{i+j-1}}.
    \end{equation}
    We show that ([eq:NonsingularityCondition](#eq:NonsingularityCondition)) is always true in our case. It is obvious that $\alpha_i$ can be computed as
    \begin{equation}
    <a id="eq:OffsetSequence"></a>
    \alpha_i=\begin{cases} D_{2,0}-i+1 & \mathit{if}~1\leqslant i\leqslant D_{2,0}, \\ D_{2,j}-i+1 & \mathit{if}~D_{2,j-1}<i\leqslant D_{2,j}. \end{cases}
    \end{equation}
    Combining ([eq:SpecifiedOrderSequence](#eq:SpecifiedOrderSequence)) and ([eq:OffsetSequence](#eq:OffsetSequence)), we know that $\nu_i<s$ and $\alpha_i\leqslant s$ always hold for $i>s$, which means
    \begin{equation}
    \begin{cases}
    \nu_i+\alpha_i-2s=0 & \mathit{if}~1\leqslant i\leqslant s,\\
    \nu_i+\alpha_i-2s<0 & \mathit{if}~s<i\leqslant\bar{D}.
    \end{cases}
    \end{equation}
    Thus, the interval $\delta_i$ is computed as
    \begin{equation}
    \delta_i=\begin{cases} [\bar{t}_i, \bar{t}_{i+2s}) & \mathit{if}~1\leqslant i\leqslant s, \\ (\bar{t}_i, \bar{t}_{i+2s}) & \mathit{if}~s<i\leqslant\bar{D}. \end{cases}
    \end{equation}
    Consequently, we have
    \begin{equation}
    <a id="eq:FirstCaseInCondition"></a>
    \tau_i=t_0\in[t_0,t_1)\subseteq[\bar{t}_i,\bar{t}_{i+2s})=\delta_i,~1\leqslant i\leqslant s.
    \end{equation}
    When $i>s$, we denote $\bar{t}_i=t_k$, $\bar{t}_{i+2s}=t_l$ and $\tau_i=t_j$. As is shown in ([eq:ExtendedPartition](#eq:ExtendedPartition)) and ([eq:SpecifiedStamps](#eq:SpecifiedStamps)), we have
    \begin{equation}
    D_{2,k-1}<i,~(i+2s)\leqslant D_{2,l},~D_{1,j-1}<i\leqslant D_{1,j}.
    \end{equation}
    Due to the fact that $d_i\leqslant s$ holds for any $1\leqslant i<M$, the following two inequalities always hold.
    \begin{equation}
    <a id="eq:BoundOnK"></a>
    D_{2,k-1}<i\leqslant D_{1,j}=(D_{2,j}-s)\leqslant D_{2,j-1},
    \end{equation}
    \begin{equation}
    <a id="eq:BoundOnL"></a>
    D_{2,j}=(D_{1,j}+s)\leqslant(D_{1,j-1}+2s)<(i+2s)\leqslant D_{2,l}.
    \end{equation}
    Inequalities ([eq:BoundOnK](#eq:BoundOnK)) and ([eq:BoundOnL](#eq:BoundOnL)) imply $k<j$ and $j<l$, thus
    \begin{equation}
    <a id="eq:SecondCaseInCondition"></a>
    \tau_i=t_j\in(t_k,t_l)=(\bar{t}_i,\bar{t}_{i+2s})=\delta_i,~s<i\leqslant\bar{D},
    \end{equation}
    always holds. Combining ([eq:FirstCaseInCondition](#eq:FirstCaseInCondition)) and ([eq:SecondCaseInCondition](#eq:SecondCaseInCondition)) gives ([eq:NonsingularityCondition](#eq:NonsingularityCondition)). Therefore, the coefficient matrix $\mathbf{B}$ on basis is always nonsingular for settings on the original problem, implying the existence and uniqueness of solution.

    The optimality conditions guarantee one unique solution in each decoupled dimension, which gives its sufficiency.
\end{proof}

\subsection{Proof of Proposition [ps:DiffeomorphismKeepsLocalMin](#ps:DiffeomorphismKeepsLocalMin)}
<a id="apd:DiffeomorphismKeepsLocalMin"></a>
\begin{proof}
    Denote by $\mathbf{J}$ the Jacobian of $\mathbf{G}$. For any $x\in\mathbb{D}_\mathrm{F}$ and $y\in\mathbb{R}^N$, satisfying $x=\mathbf{G}(y)$ or $y=\mathbf{G}^{-1}(x)$, we have
    \begin{equation}
    \nabla {H(y)}=\mathbf{J}(y)^\top\nabla {F(x)}.
    \end{equation}
    Then, the nonsingularity of $\mathbf{J}$ implies that the first statement always holds. Denote by $\mathbf{K}_i$ the Hessian of the $i$-th entry in $\mathbf{G}$. If $x$ and $y$ are stationary points, the Hessian of $H$ is
    \begin{align}
    \nabla^2 {H(y)}&=\mathbf{J}(y)^\top\nabla^2 {F(x)}\mathbf{J}(y)+\sum_{i=1}^{N}{\frac{\partial F(x)}{\partial x_i}\mathbf{K}_i(y)} \nonumber\\
    &=\mathbf{J}(y)^\top\nabla^2 {F(x)}\mathbf{J}(y).
    \end{align}
    Then, the nonsingular $\mathbf{J}$ implies that $\nabla^2 {F(x)}$ and $\nabla^2 {H(y)}$ are congruent~[@Horn2012MatrixA]. Thus the second statement holds.
\end{proof} -->
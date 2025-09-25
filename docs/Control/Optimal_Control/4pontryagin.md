

# 4 The Pontryagin Maximum Principle

This important chapter moves us **beyond the linear dynamics** assumed in Chapters 2 and 3, to consider much wider classes of optimal control problems, to introduce **the fundamental Pontryagin Maximum Principle**, and to illustrate its uses in a variety of examples.

## 4.1 Calculus of Variations, Hamiltonian Dynamics
We begin in this section with a quick introduction to some **variational methods**. These ideas will later serve as motivation for the Pontryagin Maximum Principle.

Assume we are given a **smooth function** $L: \mathbb{R}^n\times \mathbb{R}^n\to\mathbb{R}, L=L(x,v); L$ is called the *Lagrangian*. Let $T>0,x^0,x^1\in\mathbb{R}^n$ be given.

### Basic Problem of the Calculus of Variations
Find a curve $\boldsymbol{x}^*(\cdot):[0,T]\to\mathbb{R}^n$ that **minimizes the functional**

$$
  I[\boldsymbol{x}(\cdot)]:=\int_0^T L(\boldsymbol{x}(t),\dot{\boldsymbol{x}}(t))\mathrm{d}t
$$

among all fintions $\boldsymbol{x}(\cdot)$ satisfying $\boldsymbol{x}(0)=x^0$ and $\boldsymbol{x}(T)=x^1$.

Now assume $\boldsymbol{x}^*(\cdot)$ solves our variational problem. The fundamental question is this: how can we characterize $\boldsymbol{x}^*(\cdot)$?

### 4.1.1 Derivation of Euler-Lagrange Equations

::: info Notation
We write $L=L(x,v)$, and regard the variable $x$ as denoting position, the variable $v$ as denoting velocity. The partial derivatives of $L$ are

$$
  \frac{\partial L}{\partial x_i} = L_{x_i}, \quad \frac{\partial L}{\partial v_i} = L_{v_i} \quad (1\le i\le n),
$$

and we write

$$
  \nabla_x L:=(L_{x_1}, \cdots,L_{x_n}), \quad \nabla_v L:=(L_{v_1}, \cdots,L_{v_n}).
$$

:::

::: danger Theorem 4.1: Euler-Lagrange Equations
Let $\boldsymbol{x}^*(\cdot)$ solve the calculus of variations problem. Then $\boldsymbol{x}^*(\cdot)$ solves the Euler–Lagrange differential equations:

$$
  \frac{\mathrm{d}}{\mathrm{d}t}[\nabla_v L(\boldsymbol{x}^*(t), \dot{\boldsymbol{x}}^*(t))] = \nabla_x L(\boldsymbol{x}^*(t), \dot{\boldsymbol{x}}^*(t)). \tag{E-L}
$$

:::

The significance of preceding theorem is that if we can solve the Euler–Lagrange equations (E-L), then the solution of our original calculus of variations problem (assuming it exists) will be **among the solutions**.

Note that (E-L) is a **quasilinear system** of $n$ **second–order** ODE. The $i^{\mathrm{th}}$ component of the system reads

$$
  \frac{\mathrm{d}}{\mathrm{d}t}[L_{v_i}(\boldsymbol{x}^*(t), \dot{\boldsymbol{x}}^*(t))] = L_{x_i}(\boldsymbol{x}^*(t), \dot{\boldsymbol{x}}^*(t)).
$$

Proof: 
1. Select any smooth curve $\boldsymbol{y}[0,T]\to\mathbb{R}^n$, satisfying $\boldsymbol{y}(0)=\boldsymbol{y}(T)=0$(Why? You'll know it). Define
  $$
    i(\tau):=I(\boldsymbol{x}^*(\cdot) + \tau\boldsymbol{y}^*(\cdot)).
  $$
  for $\tau\in\mathbb{R}$ and $\boldsymbol{x}(\cdot)=\boldsymbol{x}^*(\cdot)$. (To simplify we omit the superscript $*$.) Notice that $\boldsymbol{x}(\cdot) + \tau\boldsymbol{y}(\cdot)$ takes on the proper values at the endpoints ($0,T$). Hence, since $\boldsymbol{x}(\cdot)$ is minimizer (for the variational problem), we have
  $$
    i(\tau)\ge I[\boldsymbol{x}(\cdot)] = i(0).
  $$
  Consequently $i(\cdot)$ has a minimum at $\tau=0$, and so
  $$
    i'(0)=0.
  $$

2. We must compute $i'(\tau)$. Note first that
  $$
    i(\tau) = \int_0^T L(\boldsymbol{x}(t)+\tau\boldsymbol{y}(t), \dot{\boldsymbol{x}}(t)+\tau\dot{\boldsymbol{y}}(t))\mathrm{d}t.
  $$
  and hence
  $$
    i'(\tau) = \int_0^T \left(\sum_{i=1}^n L_{x_i}(\boldsymbol{x}(t)+\tau\boldsymbol{y}(t), \dot{\boldsymbol{x}}(t)+\tau\dot{\boldsymbol{y}}(t))\boldsymbol{y}_i(t) + \sum_{i=1}^n L_{v_i}(\cdots)\dot{\boldsymbol{y}}_i(t)\right)\mathrm{d}t.
  $$
  (Why sum: Chain rule)
  Let $\tau=0$. Then
  $$
    0 = i'(0) = \sum_{i=1}^n \int_0^T L_{x_i}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))\boldsymbol{y}_i(t) + L_{v_i}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))\dot{\boldsymbol{y}}_i(t)\mathrm{d}t.
  $$
  This equality holds for all choices of $\boldsymbol{y}:[0,T]\to\mathbb{R}^n$, with $\boldsymbol{y}(0)=\boldsymbol{y}(T)=0$.

3. Fix any $1\le j\le n$. Choose $\boldsymbol{y}(\cdot)$ s.t.
  $$
    y_j(t) = \psi(t), \quad y_i(t)\equiv 0, \quad \forall i\neq j, 
  $$
  where $\psi$ is an arbitary function. Use this choice of $\boldsymbol{y}(\cdot)$ above:
  $$
    0 = \int_0^T L_{x_j}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))\psi(t) + L_{v_j}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))\dot{\psi}(t)\mathrm{d}t.
  $$
  Integrate by parts, recalling that $\psi(0)=\psi(T)=0\to [L_{v_j}\psi(t)]|_0^T=0$:
  $$
    0 = \int_0^T \left[L_{x_j}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t)) - \frac{\mathrm{d}}{\mathrm{d}t}(L_{v_j}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t)))\right]\psi(t)\mathrm{d}t.
  $$
  This holds for alll $\psi: [0,T]\to\mathbb{R}, \psi(0)=\psi(T)=0$ and therefore
  $$
    L_{x_j}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t)) - \frac{\mathrm{d}}{\mathrm{d}t}(L_{v_j}(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))) = 0
  $$
  for all times $0\le t\le T$. To see this, observe that otherwise $L_{x_j}-\frac{\mathrm{d}}{\mathrm{d}t}(L_{v_j})$ would be, say, positive on some subinterval on $I\subseteq [0,T]$. Choose $\psi\equiv 0$ off $I,\psi>0$ on $I$. Then
  $$
    \int_0^T \left(L_{x_j}-\frac{\mathrm{d}}{\mathrm{d}t}(L_{v_j})\right)\psi\mathrm{d}t > 0,
  $$
  a contradiction. <div style="text-align: right;">$\square$</div>

### 4.1.2 Conversion to Hamilton's Equations
::: warning Definition: generalized momentum
For the given curve $\boldsymbol{x}(\cdot)$, define

$$
  \boldsymbol{p}(t):=\nabla_v L(\boldsymbol{x}(t) \dot{\boldsymbol{x}}(t))\quad (0\le t\le T).
$$

We call $\boldsymbol{p}(\cdot)$ the *generalized momentum*
:::

Our intention now is to rewrite the Euler–Lagrange equations as a **system of first–order ODE** for $\boldsymbol{x}(\cdot),\boldsymbol{p}(\cdot)$.

**Important Hypothesis**: Assume that for all $x,p\in\mathbb{R}$, we can solve the equation

$$
  p=\nabla_v L(x,v)
$$

for $v$ in terms of $x$ and $p$. That is, we suppose we can solve the identity for $v=\boldsymbol{v}(x,p)$.

::: warning Definition: dynamical systems Hamiltonian $H$
Define the *dynamical systems Hamiltonian* $H: \mathbb{R}^n \times \mathbb{R}^n\to\mathbb{R}$ by the formula

$$
  H(x,p)=p\cdot \boldsymbol{v}(x,p) - L(x,\boldsymbol{v}(x,p)),
$$

where $\boldsymbol{v}$ id defined above.
:::

::: info Notation
The partial derivatives of $H$ are

$$
  \frac{\partial H}{\partial x_i} = H_{x_i}, \quad \frac{\partial H}{\partial p_i} = H_{p_i} \quad (1\le i\le n),
$$

and we write

$$
  \nabla_x H:=(H_{x_1}, \cdots,H_{x_n}), \quad \nabla_p H:=(H_{p_1}, \cdots,H_{p_n}).
$$

:::

::: danger Theorem 4.2: Hamiltonian Dynamics
Let $\boldsymbol{x}(\cdot)$ solve the Euler-Lagrange equations (E-L) and define $\boldsymbol{p}(\cdot)$ as above. Then the pair $(\boldsymbol{x}(\cdot),\boldsymbol{p}(\cdot))$ solves Hamilton's equations:

$$
  \begin{cases}
    \dot{\boldsymbol{x}}(t) = \nabla_p H(\boldsymbol{x}(t), \boldsymbol{p}(t)) & (ODE)\\
    \dot{\boldsymbol{p}}(t) = -\nabla_x H(\boldsymbol{x}(t), \boldsymbol{p}(t)) & (ADJ)
  \end{cases}
$$

Furthermore, the mapping $t\to H(\boldsymbol{x}(t), \boldsymbol{p}(t))$ is constant.
:::

Proof: Recall that $H(x,p)=p\cdot \boldsymbol{v}(x,p) - L(x,\boldsymbol{v}(x,p))$, where $v=\boldsymbol{v}(x,p)$ or, equivalently, $p=\nabla_v L(x,v)$. then

$$
  \begin{aligned}
    \nabla_x H(x,p) &= p\cdot \nabla_x \boldsymbol{v} - [\nabla_x L(x,\boldsymbol{v}(x,p)) + \nabla_v L(x,\boldsymbol{v}(x,p))\cdot \nabla_x\boldsymbol{v}] \\
    &= [p - \nabla_v L(x,v)]\cdot \nabla_x\boldsymbol{v} - \nabla_x L(x,\boldsymbol{v}(x,p)) \\
    &= -\nabla_x L(x,\boldsymbol{v}(x,p))
  \end{aligned}
$$

(Why not consider $p$ in interms of $x$? See $H(x,p)$, they are currently divided)

because $p=\nabla_v L$. Now $\boldsymbol{p}(t)=\nabla_v L(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))$ iff $\dot{\boldsymbol{x}}(t) = \boldsymbol{v}(\boldsymbol{x}(t),\boldsymbol{p}(t))$. Therefore (E-L) implies

$$
  \begin{aligned}
    \dot{\boldsymbol{p}}(t) &= \nabla_x L(\boldsymbol{x}(t),\dot{\boldsymbol{x}}(t)) \\
    &= \nabla_x L(\boldsymbol{x}(t),\boldsymbol(\boldsymbol{x}(t), \boldsymbol{p}(t))) = -\nabla_x H(\boldsymbol{x}(t), \boldsymbol{p}(t)).
  \end{aligned}
$$

Also

$$
  \nabla_p H(x,p) = \boldsymbol{v}(x,p) + p\cdot\nabla_p \boldsymbol{v} - \nabla_v L \cdot \nabla_p \boldsymbol{v} = \boldsymbol{v}(x,p)
$$

since $p=\nabla_v L(x,\boldsymbol{v}(x,p))$. This implies

$$
  \nabla_p H(\boldsymbol{x}(t), \boldsymbol{p}(t)) = \boldsymbol{v}(\boldsymbol{x}(t), \boldsymbol{p}(t)).
$$

But

$$
  \boldsymbol{p}(t) = \nabla_v L(\boldsymbol{x}(t), \dot{\boldsymbol{x}}(t))
$$

and so $\dot{\boldsymbol{x}}(t) = \boldsymbol{v}(\boldsymbol{x}(t), \boldsymbol{p}(t))$. Therefore

$$
  \dot{\boldsymbol{x}}(t) = \nabla_p H(\boldsymbol{x}(t), \boldsymbol{p}(t)).
$$

Finaly note that

$$
  \begin{aligned}
    \frac{\mathrm{d}}{\mathrm{d}t}H(\boldsymbol{x}(t), \boldsymbol{p}(t)) &= \nabla_x H\cdot\dot{\boldsymbol{x}}(t) + \nabla_p H\cdot\dot{\boldsymbol{p}}(t) \\
    &= \nabla_x H\cdot\nabla_p H + \nabla_p H\cdot(-\nabla_x H) = 0.
  \end{aligned}
$$
<div style="text-align: right;">$\square$</div>

#### A Physical Example
We define the Lagrangian

$$
  L(x,v) = \frac{m|v|^2}{2} - V(x),
$$

which we interpret as the kinetic energy minus the potential energy $V$. then

$$
\begin{cases}
    \nabla_x L = -\nabla V(x)\\
    \nabla_v L = mv.
\end{cases}
$$

Therefore the Euler-Lagrange equation is

$$
  m\ddot{x}(t) = -\nabla V(\boldsymbol{x}(t)),
$$

which is *Newton’s law*. Furthermore

$$
  p = \nabla_v L(x,v) = mv
$$

is the *momentum*, and the Hamiltonian is

$$
  \begin{aligned}
    H(x,p) &= p\cdot\frac{p}{m} - L\left(x,\frac{p}{m}\right) \\
    &= \frac{|p|^2}{m} - \frac{m}{2}\left|\frac{p}{m}\right|^2 + V(x) = \frac{|p|^2}{2m}+ V(x).
    \end{aligned}
$$

the *sum* of the kinetic and potential energies. For this example, Hamilton’s equations read

$$
  \begin{cases}
    \dot{\boldsymbol{x}}(t) = \frac{\boldsymbol{p}(t)}{m} \\
    \dot{\boldsymbol{p}}(t) = -\nabla V(\boldsymbol{x}(t)).
  \end{cases}
$$

## 4.2 Review of Lagrange Multipliers
### Constraint and Lagrange Multipliers

What first strikes us about general optimal control problems is the **occurence of many constraints**, most notably that the dynamics be governed by the differential equation

$$
  \begin{cases}
    \dot{\boldsymbol{x}}(t) = \boldsymbol{f}(\boldsymbol{x}(t),\boldsymbol{\alpha}(t)) \quad (t>0) \\
    \boldsymbol{x}(0) = x^0.
  \end{cases}
$$

This is in contrast to **standard calculus of variations problems**, as discussed in [§4.1](#4-1-calculus-of-variations-hamiltonian-dynamics), where we could take any curve $\boldsymbol{x}(\cdot)$ as a candidate for a minimizer.

Now it is a general principle of variational and optimization theory that “**constraints create Lagrange multipliers**” and furthermore that these Lagrange multipliers often “contain valuable information”. This section provides a quick review of the standard method of Lagrange multipliers in solving multivariable constrained
optimization problems.

### Unconstrainted Optimization
Suppose first that we wish to find a **maximum point** for a given smooth function $f:\mathbb{R}^n\to \mathbb{R}$. In this case there is no constraint, and therefore if $f(x*)=\max\limits_{x\in\mathbb{R}^n}f(x)$, then $x*$ is a critical point of $f$:

$$
  \nabla f(x*)=0.
$$

### Constrainted Optimization
We modify the problem above by introducing the region

$$
  R:=\{x\in\mathbb{R}^n | g(x)\le 0\},
$$

determined by some given function $g:\mathbb{R}^n\to \mathbb{R}$. Suppose $x*\in R$ and $f(x*)=\max\limits_{x\in R}f(x)$. We would like a characterization of $x*$ in terms of the gradients of $f$ and $g$.

- Case 1: **$x*$ lies in the interior of $R$**
  Then the constraint is inactive, and so
  $$
    \nabla f(x*)=0.
  $$
  <img src="/control_om4_2_1_in.JPG" alt="interior" width="50%" align="center">

- Case 2: **$x*$ lies on $\partial R$**
  We look at the direction of the vector $\nabla f(x*)$. A geometric picture like Figure above is impossible; for if it were so, then $f(y*)$ would be greater that $f(x*)$ for some other point $y*\in\partial R$. So it must be $\nabla f(x*)$ is perpendicular to $\partial R$ at $x*$
  (Suppose not perpendicular, then there exists a unit vector $\tau$ in the tangential direction s.t. $\tau\cdot\nabla f(x*)>0$, and this is the direction derivative)
  Since $\nabla g$ is perpendicular to $\partial R=\{g=0\}$ (gradient is the fastest change direction, so normal to perpendicular), it follows that $\nabla f(x*)$ is parallel to $\nabla g(x*)$. Therefore
  $$
    \nabla f(x*)=\lambda\nabla g(x*) \tag{4.4}
  $$
  for some real number $\lambda$, called a *Lagrange multiplier*.
  <img src="/control_om4_2_2_bound.JPG" alt="boundary" width="50%" align="center">

### Critique
The foregoing argument is in fact incomplete, since we **implicitly assumed** that $\nabla g(x^*)\neq 0$, in which case the Implicit Function Theorem implies that the set $\{g=0\}$ is an $(n-1)$ -dimension surface near $x^*$ (as illustrated).

If instead $\nabla g(x^*) = 0$, the set $\{g=0\}$ need not have this simple form near $x^*$; and the reasoning discussed as Case 2 above is not complete.

The correct statement is this:

There exist real numbers $\lambda,\mu$ not both equal to $0$, s.t.

$$
  \mu\nabla f(x^*) = \lambda\nabla g(x^*). \tag{4.5}
$$

If $\mu\neq 0$, we can divide by $\mu$ and convert to the formulation (4.4). And if $\nabla g(x^*) = 0$, we can take $\lambda =1,\mu=0$, making assertion (4.5) correct (if not particularly useful).

## 4.3 Statemet of Pontryagin Maximum Principle
We come now to the key assertion of this chapter, the theoretically interesting and practically useful theorem that if $\boldsymbol{\alpha}^*(\cdot)$ is an optimal control, then there exists a function $\boldsymbol{p}^*(\cdot)$, called the *costate*, that satisfies a certain maximization principle. We should think of the function $\boldsymbol{p}^*(\cdot)$ as **a sort of Lagrange multiplier**, which appears owing to the constraint that the optimal curve $\boldsymbol{x}^*(\cdot)$ must satisfy (ODE). And just as conventional Lagrange multipliers are useful for actual calculations, so also will be the costate.

We quote Francis Clarke [C2]: “The maximum principle was, in fact, the culmination of a long search in the calculus of variations for a comprehensive multiplier rule, which is the correct way to view it: $p(t)$ is a “Lagrange multiplier” ... It makes optimal control **a design tool**, whereas the calculus of variations was a way
to study nature.”

### 4.3.1 Fixed Time, Free Endpoint Problem
Let us review the basic set-up for our control problem.

We are given $A\subseteq \mathbb{R}^m$ and also $f:\mathbb{R}^n\times A\to\mathbb{R}^n, x^0\in\mathbb{R}^n$. We as before denote the set of admissible controls by 

$$
  \mathcal{A}=\{\boldsymbol{\alpha}(\cdot):[0, \infty) \rightarrow A \mid \boldsymbol{\alpha}(\cdot) \text{ is measurable} \}.
$$

Then given $\boldsymbol{\alpha}(\cdot) \in \mathcal{A}$, we solve for the corresponding evolution of our system:

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(t)=\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \quad(t \geq 0) \\
\boldsymbol{x}(0)=x^{0}
\end{array}\right.
$$

We also introduce the payoff functional (To show the influence of free endpoint)

$$
P[\boldsymbol{\alpha}(\cdot)]=\int_{0}^{T} r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \mathrm{d} t+g(\boldsymbol{x}(T)) \tag{P}
$$

where the terminal time $T>0$, running payoff $r: \mathbb{R}^{n} \times A \rightarrow \mathbb{R}$ and terminal payoff $g: \mathbb{R}^{n} \rightarrow \mathbb{R}$ are given.

#### Basic Problem
Find a control $\boldsymbol{\alpha}^{*}(\cdot)$ such that

$$
P\left[\boldsymbol{\alpha}^{*}(\cdot)\right]=\max _{\boldsymbol{\alpha}(\cdot) \in \mathcal{A}} P[\boldsymbol{\alpha}(\cdot)]
$$

The **Pontryagin Maximum Principle**, stated below, asserts the existence of a function $\boldsymbol{p}^{*}(\cdot)$, which together with the optimal trajectory $\boldsymbol{x}^{*}(\cdot)$ satisfies an analog of Hamilton's ODE from [§4.1.2](#4-1-2-conversion-to-hamiltons-equations). For this, we will need an appropriate Hamiltonian:

::: warning Definition
The control theory Hamiltonian is the function

$$
H(x, p, a):=\boldsymbol{f}(x, a) \cdot p+r(x, a) \quad\left(x, p \in \mathbb{R}^{n}, a \in A\right)
$$
:::

::: danger Theorem 4.3 (Pontryagin Maximum Principle)
Assume $\boldsymbol{\alpha}^{*}(\cdot)$ is optimal for ( ODE ), ( $P$ ), and $\boldsymbol{x}^{*}(\cdot)$ is the corresponding trajectory.

Then there exists a function $\boldsymbol{p}^{*}:[0, T] \rightarrow \mathbb{R}^{n}$ such that

$$
\begin{gather*}
  \dot{\boldsymbol{x}}^{*}(t)=\nabla_{p} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right), \tag{ODE} \\
  \dot{\boldsymbol{p}}^{*}(t)=-\nabla_{x} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right), \tag{ADJ}
\end{gather*}
$$

and

$$
H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)=\max _{a \in A} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), a\right) \quad(0 \leq t \leq T) \tag{M}
$$

In addition,

$$
\text { the mapping } \quad t \mapsto H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right) \text { is constant. }
$$

Finally, we have the **terminal condition**

$$
\boldsymbol{p}^{*}(T)=\nabla g\left(\boldsymbol{x}^{*}(T)\right)
$$
:::

#### Remarks and Intepretations
1. The identities (ADJ) are the **adjoint equations** and (M) the **maximization principle**. Notice that (ODE) and (ADJ) resemble the structure of Hamilton's equations, discussed in [§4.1](#4-1-calculus-of-variations-hamiltonian-dynamics).
We also call ( $T$ ) the **transversality condition** and will discuss its significance later.

2. More precisely, formula (ODE) says that for $1 \leq i \leq n$, we have

$$
\dot{x}^{i *}(t)=H_{p_{i}}\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)=f^{i}\left(\boldsymbol{x}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right),
$$

which is just the original equation of **motion**. Likewise, (ADJ) says

$$
\begin{aligned}
\dot{p}^{i *}(t) & =-H_{x_{i}}\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right) \\
& =-\sum_{j=1}^{n} p^{j *}(t) f_{x_{i}}^{j}\left(\boldsymbol{x}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)-r_{x_{i}}\left(\boldsymbol{x}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right) .
\end{aligned}
$$

### 4.3.2 Free Time, Fixed Endpoint Problem
Let us next record the appropriate form of the Maximum Principle for a fixed endpoint problem.

As before, given a control $\boldsymbol{\alpha}(\cdot) \in \mathcal{A}$, we solve for the corresponding evolution of our system:

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(t)=\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \quad(t \geq 0) \\
\boldsymbol{x}(0)=x^{0}
\end{array}\right. \tag{ODE}
$$

Assume now that a **target point** $x^{1} \in \mathbb{R}^{n}$ is **given**. We introduce then the **payoff** functional

$$
P[\boldsymbol{\alpha}(\cdot)]=\int_{0}^{\tau} r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \mathrm{d} t.
$$

Here $r: \mathbb{R}^{n} \times A \rightarrow \mathbb{R}$ is the given running payoff, and $\tau=\tau[\boldsymbol{\alpha}(\cdot)] \leq \infty$ denotes the first time the solution of (ODE) hits the target point $x^{1}$.

As before, the basic problem is to find an optimal control $\boldsymbol{\alpha}^{*}(\cdot)$ such that

$$
P\left[\boldsymbol{\alpha}^{*}(\cdot)\right]=\max _{\boldsymbol{\alpha}(\cdot) \in \mathcal{A}} P[\boldsymbol{\alpha}(\cdot)]. \tag{P} 
$$

Define the Hamiltonian $H$ as in [§4.3.1](#4-3-1-fixed-time-free-endpoint-problem).

::: danger Theorem 4.4 (Pontryagin Maximum Principle)
Assume $\boldsymbol{\alpha}^{*}(\cdot)$ is optimal for (ODE), ($P$) and $\boldsymbol{x}^{*}(\cdot)$ is the corresponding trajectory.

Then there exists a function $\boldsymbol{p}^{*}:\left[0, \tau^{*}\right] \rightarrow \mathbb{R}^{n}$ such that

$$
\begin{gather*}
  \dot{\boldsymbol{x}}^{*}(t)=\nabla_{p} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right), \tag{ODE} \\
  \dot{\boldsymbol{p}}^{*}(t)=-\nabla_{x} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right), \tag{ADJ}
\end{gather*}
$$

and

$$
H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)=\max _{a \in A} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), a\right) \quad\left(0 \leq t \leq \tau^{*}\right) \tag{M}
$$

Also,

$$
H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right) \equiv 0 \quad\left(0 \leq t \leq \tau^{*}\right)
$$

:::

Here $\tau^{*}$ denotes the **first time** the trajectory $x^{*}(\cdot)$ **hits the target point** $x^{1}$. We call $\boldsymbol{x}^{*}(\cdot)$ the **state** of the optimally controlled system and $\boldsymbol{p}^{*}(\cdot)$ the **costate**.

#### Remark and Warning
More precisely, we should define

$$
H(x, p, q, a)=\boldsymbol{f}(x, a) \cdot p+r(x, a) q \quad(q \in \mathbb{R})
$$

A more careful statement of the Maximum Principle says "there exists a constant $q \geq 0$ and a function $\boldsymbol{p}^{*}:\left[0, t^{*}\right] \rightarrow \mathbb{R}^{n}$ such that (ODE), (ADJ), and (M) hold".

- If $q>0$, we can renormalize to get $q=1$, as we have done above. 
- If $q=0$, then $H$ does not depend on running payoff $r$ and in this case the Pontryagin Maximum Principle is **not useful**. This is a so-called "**abnormal problem**".

Compare these comments with the critique of the usual Lagrange multiplier method at the end of [§4.2](#4-2-review-of-lagrange-multipliers), and see also the proof in §A. 5 of the Appendix.

## 4.4 Application and Examples

### How to Use the Maximum Principle
We mentioned earlier that the **costate** $\boldsymbol{p}^{*}(\cdot)$ can be interpreted as a sort of Lagrange multiplier.

#### Calculations with Lagrange multipliers
Recall our discussion in [§4.2](#4-2-review-of-lagrange-multipliers) about finding a point $x^{*}$ that **maximizes** a function $f$, subject to the **requirement** that $g \leq 0$. Now $x^{*}=\left(x_{1}^{*}, \ldots, x_{n}^{*}\right)^{T}$ has $n$ unknown components we must find. Somewhat unexpectedly, it turns out in practice to be easier to solve (4.4) for the $n+1$ unknowns $x_{1}^{*}, \ldots, x_{n}^{*}$ and $\lambda$. We repeat this key insight: it is actually **easier** to solve the problem if we **add a new unknown, namely the Lagrange multiplier**. Worked examples abound in multivariable calculus books.

#### Calculations with the costate
This same principle is valid for our much more complicated control theory problems: it is usually best not just to look for an optimal control $\boldsymbol{\alpha}^{*}(\cdot)$ and an optimal trajectory $\boldsymbol{x}^{*}(\cdot)$ alone, but also to look as well for the costate $\boldsymbol{p}^{*}(\cdot)$. In practice, we add the equations (ADJ) and (M) to (ODE) and then try to solve for $\boldsymbol{\alpha}^{*}(\cdot), \boldsymbol{x}^{*}(\cdot)$ and for $\boldsymbol{p}^{*}(\cdot)$.

The following examples show how this works in practice, in certain cases for which we can actually solve everything explicitly or, failing that, at least deduce some u**seful information**.

### 4.4.1 Example 1: Linear Time-Optimal Control. 
For this example, let $A$ denote the cube $[-1,1]^{n}$ in $\mathbb{R}^{n}$. We consider again the linear dynamics:

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(t)=M \boldsymbol{x}(t)+N \boldsymbol{\alpha}(t) \\
\boldsymbol{x}(0)=x^{0}
\end{array}\right. \tag{ODE}
$$

for the payoff functional

$$
P[\boldsymbol{\alpha}(\cdot)]=-\int_{0}^{\tau} 1 d t=-\tau
$$

where $\tau$ denotes the first time the trajectory hits the target point $x^{1}=0$. We have $r \equiv-1$, and so

$$
H(x, p, a)=\boldsymbol{f} \cdot p+r=(M x+N a) \cdot p-1
$$

In [§3.2](./3linearTimeOptimalControl#3-2-the-maximum-principle-for-linear-time-optimal-control) we introduced the Hamiltonian $H=(M x+N a) \cdot p$, which differs by a **constant** from the present $H$. We can redefine $H$ in [§3.2](./3linearTimeOptimalControl#3-2-the-maximum-principle-for-linear-time-optimal-control) to match the present theory: compare then Theorems 3.4 and 4.4.

### 4.4.2 Example 2: Control of Production and Consumption
We return to [Example 1](./1introduction#example-1-control-of-production-and-consumption) in Chapter 1, a model for optimal consumption in a simple economy. Recall that

$$
\begin{aligned}
& x(t)=\text { output of economy at time } t \\
& \alpha(t)=\text { fraction of output reinvested at time } t
\end{aligned}
$$

We have the constraint $0 \leq \alpha(t) \leq 1$; that is, $A=[0,1] \subset \mathbb{R}$. The economy evolves according to the dynamics

$$
\left\{\begin{array}{l}
\dot{x}(t)=\alpha(t) x(t) \quad(0 \leq t \leq T) \\
x(0)=x^{0}
\end{array}\right. \tag{ODE}
$$

where $x^{0}>0$ and we have set the growth factor $k=1$. We want to maximize the total consumption

$$
P[\alpha(\cdot)]:=\int_{0}^{T}(1-\alpha(t)) x(t) \mathrm{d} t
$$

How can we characterize an optimal control $\alpha^{*}(\cdot)$ ?

#### Introducing the maximum principle
We apply Pontryagin Maximum Principle, and to simplify notation we will not write the superscripts $*$ for the optimal control, trajectory, etc. We have $n=m=1$,

$$
f(x, a)=x a, g \equiv 0, r(x, a)=(1-a) x
$$

and therefore

$$
  \begin{aligned}
    H(x, p, a)&=f(x, a) p+r(x, a) \\
    &=p x a+(1-a) x=x+a x(p-1)
  \end{aligned}
$$

The dynamical equation is

$$
\dot{x}(t)=H_{p}=\alpha(t) x(t) \tag{ODE}
$$

and the adjoint equation is

$$
\dot{p}(t)=-H_{x}=-1-\alpha(t)(p(t)-1) \tag{ADJ}
$$

The terminal condition reads

$$
p(T)=g_{x}(x(T))=0 \tag{T}
$$

Lastly, the maximality principle asserts

$$
H(x(t), p(t), \alpha(t))=\max _{0 \leq a \leq 1}\{x(t)+a x(t)(p(t)-1)\} \tag{M}
$$

#### Using the maximum principle
We now deduce useful information from (ODE), (ADJ), (M) and (T).

According to (M), at each time $t$ the control value $\alpha(t)$ must be selected to maximize $a(p(t)-1)$ for $0 \leq a \leq 1$. This is so, since $x(t)>0$ (It's fixed for the control is decided by the current state $x(t)$). Thus ($a$ is a placeholder variable used to denote $\alpha(t)$)

$$
\alpha(t)= \begin{cases}1 & \text { if } \quad p(t)>1 \\ 0 & \text { if } \quad p(t) \leq 1\end{cases}
$$

Hence if we know $p(\cdot)$, we can design the optimal control $\alpha(\cdot)$.
So next we must solve for the costate $p(\cdot)$. We know from $(\mathrm{ADJ})$ and $(\mathrm{T})$ that

$$
\begin{cases}\dot{p}(t)=-1-\alpha(t)[p(t)-1] & (0 \leq t \leq T) \\ p(T)=0 & \end{cases}
$$

Since $p(T)=0$, we deduce by continuity that $p(t) \leq 1$ for $t$ close to $T, t<T$. Thus $\alpha(t)=0$ for such values of $t$. Therefore $\dot{p}(t)=-1$, and consequently $p(t)=T-t$ for times $t$ in this interval. So we have that $p(t)=T-t$ so long as $p(t) \leq 1$. And this holds for $T-1 \leq t \leq T$

But for times $t \leq T-1$, with $t$ near $T-1$, we have $\alpha(t)=1$; and so ( $A D J$ ) becomes

$$
\dot{p}(t)=-1-(p(t)-1)=-p(t)
$$

Since $p(T-1)=1$, we see that $p(t)=e^{T-1-t}>1$ for all times $0 \leq t \leq T-1$. In particular there are no switches in the control over this time interval.

Restoring the superscript * to our notation, we consequently deduce that an optimal control is

$$
\alpha^{*}(t)= \begin{cases}1 & \text { if } \quad 0 \leq t \leq t^{*} \\ 0 & \text { if } \quad t^{*} \leq t \leq T\end{cases}
$$

for the optimal switching time $t^{*}=T-1$.

We leave it as an exercise to compute the switching time if the growth constant $k \neq 1$. $\square$

### 4.4.3 Example 3: A Simple Linear-Quadratic Regulator 

We take $n=m=1$ for this example, and consider the simple linear dynamics

$$
\left\{\begin{array}{l}
\dot{x}(t)=x(t)+\alpha(t) \\
x(0)=x^{0}
\end{array}\right. \tag{ODE}
$$

with the **quadratic cost functional**

$$
\int_{0}^{T} x(t)^{2}+\alpha(t)^{2} \mathrm{d} t,
$$

which we want to minimize. So we want to maximize the payoff functional

$$
P[\alpha(\cdot)]=-\int_{0}^{T} x(t)^{2}+\alpha(t)^{2} \mathrm{d} t. \tag{P}
$$

For this problem, the values of the controls are not constrained; that is, $A=\mathbb{R}$.

#### Introducing the maximum principle
To simplify notation further we again drop the superscripts *. We have $n=m=1$,

$$
f(x, a)=x+a, g \equiv 0, r(x, a)=-x^{2}-a^{2} ;
$$

and hence

$$
H(x, p, a)=f p+r=(x+a) p-\left(x^{2}+a^{2}\right)
$$

The maximality condition becomes

$$
H(x(t), p(t), \alpha(t))=\max _{a \in \mathbb{R}}\left\{-\left(x(t)^{2}+a^{2}\right)+p(t)(x(t)+a)\right\} \tag{M}
$$

We calculate the maximum on the right hand side by setting $H_{a}=-2 a+p=0$. Thus $a=\frac{p}{2}$, and so

$$
\alpha(t)=\frac{p(t)}{2} .
$$

The dynamical equations are therefore

$$
\dot{x}(t)=x(t)+\frac{p(t)}{2} \tag{ODE}
$$

and

$$
\dot{p}(t)=-H_{x}=2 x(t)-p(t) . \tag{ADJ}
$$

Moreover $x(0)=x^{0}$, and the terminal condition is

$$
p(T)=0 . \tag{T}
$$

#### Using the Maximum Principle
So we must look at the system of equations

$$
\binom{\dot{x}}{\dot{p}}=\underbrace{\left(\begin{array}{cc}
1 & 1 / 2 \\
2 & -1
\end{array}\right)}_{M}\binom{x}{p},
$$

the general solution of which is

$$
\binom{x(t)}{p(t)}=e^{t M}\binom{x^{0}}{p^{0}}
$$

Since we know $x^{0}$, the task is to **choose** $p^{0}$ so that $p(T)=0$.

#### Feedback controls
An elegant way to do so is to **try to find optimal control in linear feedback form**; that is, to look for a function $c(\cdot):[0, T] \rightarrow \mathbb{R}$ for which

$$
\alpha(t)=c(t) x(t)
$$

We henceforth suppose that an optimal feedback control of this form **exists**, and attempt to calculate $c(\cdot)$. Now

$$
\frac{p(t)}{2}=\alpha(t)=c(t) x(t)
$$

whence $c(t)=\frac{p(t)}{2 x(t)}$. Define now

$$
d(t):=\frac{p(t)}{x(t)}
$$

so that $c(t)=\frac{d(t)}{2}$.

We will next discover a differential equation that $d(\cdot)$ satisfies. Compute

$$
\dot{d}=\frac{\dot{p}}{x}-\frac{p \dot{x}}{x^{2}},
$$

and recall that

$$
\left\{\begin{array}{l}
\dot{x}=x+\frac{p}{2} \\
\dot{p}=2 x-p .
\end{array}\right.
$$

Therefore

$$
\dot{d}=\frac{2 x-p}{x}-\frac{p}{x^{2}}\left(x+\frac{p}{2}\right)=2-d-d\left(1+\frac{d}{2}\right)=2-2 d-\frac{d^{2}}{2} .
$$

Since $p(T)=0$, the terminal condition is $d(T)=0$.
So we have obtained a nonlinear first-order ODE for $d(\cdot)$ with a terminal boundary condition:

$$
\left\{\begin{array}{l}
\dot{d}=2-2 d-\frac{1}{2} d^{2} \quad(0 \leq t<T) \\
d(T)=0 .
\end{array}\right. \tag{R}
$$

This is called the **Riccati equation**.

In summary so far, to solve our linear-quadratic regulator problem, we need to first solve the Riccati equation $(\mathrm{R})$ and then set

$$
\alpha(t)=\frac{1}{2} d(t) x(t)
$$

How to solve the Riccati equation. It turns out that we can convert ( $R$ ) it into a second-order, linear ODE. To accomplish this, write

$$
d(t)=\frac{2 \dot{b}(t)}{b(t)}
$$

for a function $b(\cdot)$ to be found. What equation does $b(\cdot)$ solve? We compute

$$
\dot{d}=\frac{2 \ddot{b}}{b}-\frac{2(\dot{b})^{2}}{b^{2}}=\frac{2 \ddot{b}}{b}-\frac{d^{2}}{2} .
$$

Hence $(\mathrm{R})$ gives

$$
\frac{2 \ddot{b}}{b}=\dot{d}+\frac{d^{2}}{2}=2-2 d=2-2 \frac{2 \dot{b}}{b}
$$

and consequently

$$
\left\{\begin{array}{l}
\ddot{b}=b-2 \dot{b} \quad(0 \leq t<T) \\
\dot{b}(T)=0, b(T)=1
\end{array}\right.
$$

This is a terminal-value problem for second-order linear ODE, which we can solve by standard techniques. We then set $d=\frac{2 \dot{b}}{b}$, to derive the solution of the Riccati equation $(\mathrm{R})$.

We will generalize this example later to systems, in §5.2.

### 4.4.4 Example 4: Moon Lander
This is a much more elaborate and interesting example, already introduced in [Chapter 1](./1introduction#example-4-a-moon-lander). 
<!-- We follow the discussion of Fleming and Rishel $[\boldsymbol{F}-\boldsymbol{R}]$. -->

Introduce the notation

$$
\begin{aligned}
h(t) & =\text { height at time } t \\
v(t) & =\text { velocity }=\dot{h}(t) \\
m(t) & =\text { mass of spacecraft (changing as fuel is used up) } \\
\alpha(t) & =\text { thrust at time } t
\end{aligned}
$$

The thrust is constrained so that $0 \leq \alpha(t) \leq 1$; that is, $A=[0,1]$. There are also the constraints that the height and mass be nonnegative: $h(t) \geq 0, m(t) \geq 0$.

The dynamics are

$$
\left\{\begin{aligned}
\dot{h}(t) & =v(t) \\
\dot{v}(t) & =-g+\frac{\alpha(t)}{m(t)} \\
\dot{m}(t) & =-k \alpha(t)
\end{aligned}\right.
$$

with initial conditions

$$
\left\{\begin{array}{l}
h(0)=h_{0}>0 \\
v(0)=v_{0} \\
m(0)=m_{0}>0
\end{array}\right.
$$

The goal is to land on the moon safely, **maximizing the remaining fuel** $m(\tau)$, where $\tau=\tau[\alpha(\cdot)]$ is the **first time** $h(\tau)=v(\tau)=0$. Since $\alpha=-\frac{\dot{m}}{k}$, our intention is equivalently to minimize the total applied thrust before landing; so that

$$
P[\alpha(\cdot)]=-\int_{0}^{\tau} \alpha(t) d t
$$

This is so since

$$
\int_{0}^{\tau} \alpha(t) d t=\frac{m_{0}-m(\tau)}{k}
$$

#### Introducing the maximum principle
In terms of the general notation, we have

$$
\boldsymbol{x}(t)=\left[\begin{array}{c}
h(t) \\
v(t) \\
m(t)
\end{array}\right], \quad \boldsymbol{f}=\left[\begin{array}{c}
v \\
-g+a / m \\
-k a
\end{array}\right] .
$$

Hence the Hamiltonian is

$$
\begin{aligned}
H(x, p, a) & =\boldsymbol{f} \cdot \boldsymbol{p}+r \\
& =(v,-g+a / m,-k a) \cdot\left(p_{1}, p_{2}, p_{3}\right)-a \\
& =-a+p_{1} v+p_{2}\left(-g+\frac{a}{m}\right)+p_{3}(-k a)
\end{aligned}
$$

We next have to figure out the adjoint dynamics $(\mathrm{ADJ})$. For our particular Hamiltonian,

$$
H_{x_{1}}=H_{h}=0, H_{x_{2}}=H_{v}=p_{1}, H_{x_{3}}=H_{m}=-\frac{p_{2} a}{m^{2}}
$$

Therefore

$$
\left\{\begin{array}{l}
\dot{p}^{1}(t)=0 \\
\dot{p}^{2}(t)=-p^{1}(t) \\
\dot{p}^{3}(t)=\frac{p^{2}(t) \alpha(t)}{m(t)^{2}}
\end{array}\right. \tag{ADJ}
$$

The maximization condition $(\mathrm{M})$ reads

$$
\begin{align*}
  &H(\boldsymbol{x}(t), \boldsymbol{p}(t), \alpha(t))  =\max _{0 \leq a \leq 1} H(\boldsymbol{x}(t), \boldsymbol{p}(t), a) \tag{M}\\
  =&\max _{0 \leq a \leq 1}\left\{-a+p^{1}(t) v(t)+p^{2}(t)\left[-g+\frac{a}{m(t)}\right]+p^{3}(t)(-k a)\right\} \\
  =&p^{1}(t) v(t)-p^{2}(t) g+\max _{0 \leq a \leq 1}\left\{a\left(-1+\frac{p^{2}(t)}{m(t)}-k p^{3}(t)\right)\right\}
\end{align*}
$$

Thus the optimal control law is given by the rule:

$$
\alpha(t)= \begin{cases}1 & \text { if } \quad 1-\frac{p^{2}(t)}{m(t)}+k p^{3}(t)<0 \\ 0 & \text { if } \quad 1-\frac{p^{2}(t)}{m(t)}+k p^{3}(t)>0\end{cases}
$$

#### Using the maximum principle
Now we will attempt to figure out the form of the solution, and check it accords with the Maximum Principle.

Let us start by guessing that we first leave rocket engine of (i.e., set $\alpha \equiv 0$ ) and turn the engine on only at the end. Denote by $\tau$ the first time that $h(\tau)=v(\tau)=0$, meaning that we have landed. We guess that there exists a switching time $t^{*}<\tau$ when we turned engines on at full power (i.e., set $\alpha \equiv 1$ ). Consequently,

$$
\alpha(t)= \begin{cases}0 & \text { for } \quad 0 \leq t \leq t^{*} \\ 1 & \text { for } \quad t^{*} \leq t \leq \tau\end{cases}
$$

Therefore, for times $t^{*} \leq t \leq \tau$ our ODE becomes

$$
\left\{\begin{array}{l}
\dot{h}(t)=v(t) \\
\dot{v}(t)=-g+\frac{1}{m(t)} \\
\dot{m}(t)=-k
\end{array} \quad\left(t^{*} \leq t \leq \tau\right)\right.
$$

with $h(\tau)=0, v(\tau)=0, m\left(t^{*}\right)=m_{0}$. We solve these dynamics:

$$
\left\{\begin{array}{l}
m(t)=m_{0}+k\left(t^{*}-t\right) \\
v(t)=g(\tau-t)+\frac{1}{k} \log \left[\frac{m_{0}+k\left(t^{*}-\tau\right)}{m_{0}+k\left(t^{*}-t\right)}\right] \\
h(t)=\text { complicated formula }
\end{array}\right.
$$

Now put $t=t^{*}$ :

$$
\left\{\begin{array}{l}
m\left(t^{*}\right)=m_{0} \\
v\left(t^{*}\right)=g\left(\tau-t^{*}\right)+\frac{1}{k} \log \left[\frac{m_{0}+k\left(t^{*}-\tau\right)}{m_{0}}\right] \\
h\left(t^{*}\right)=-\frac{g\left(t^{*}-\tau\right)^{2}}{2}-\frac{m_{0}}{k^{2}} \log \left[\frac{m_{0}+k\left(t^{*}-\tau\right)}{m_{0}}\right]+\frac{t^{*}-\tau}{k}
\end{array}\right.
$$

Suppose the total amount of fuel to start with was $m_{1}$; so that $m_{0}-m_{1}$ is the weight of the empty spacecraft. When $\alpha \equiv 1$, the fuel is used up at rate $k$. Hence

$$
k\left(\tau-t^{*}\right) \leq m_{1}
$$

and so $0 \leq \tau-t^{*} \leq \frac{m_{1}}{k}$.
Before time $t^{*}$, we set $\alpha \equiv 0$. Then (ODE) reads

$$
\left\{\begin{array}{l}
\dot{h}=v \\
\dot{v}=-g \\
\dot{m}=0
\end{array}\right.
$$

<img src="/control_om4_4_1_vh.JPG" alt="v-h curve" width="50%" align="middle">

and thus

$$
\left\{\begin{array}{l}
m(t) \equiv m_{0} \\
v(t)=-g t+v_{0} \\
h(t)=-\frac{1}{2} g t^{2}+t v_{0}+h_{0}
\end{array}\right.
$$

We combine the formulas for $v(t)$ and $h(t)$, to discover

$$
h(t)=h_{0}-\frac{1}{2 g}\left(v^{2}(t)-v_{0}^{2}\right) \quad\left(0 \leq t \leq t^{*}\right)
$$

We deduce that the freefall trajectory $(v(t), h(t))$ therefore lies on a parabola

$$
h=h_{0}-\frac{1}{2 g}\left(v^{2}-v_{0}^{2}\right) .
$$

<img src="/control_om4_4_2_full_vh.JPG" alt="full v-h curve" width="50%" align="middle">

If we then move along this parabola until we hit the soft-landing curve from the previous picture, we can then turn on the rocket engine and land safely.

In the second case illustrated below, we miss switching curve, and hence cannot land safely on the moon switching once.

<img src="/control_om4_4_3_full_vh_fail.JPG" alt="full v-h curve but failed" width="50%" align="middle">

To justify our guess about the structure of the optimal control, let us now find the costate $\boldsymbol{p}(\cdot)$ so that $\alpha(\cdot)$ and $\boldsymbol{x}(\cdot)$ described above satisfy $(\mathrm{ODE}), (\mathrm{ADJ}), (\mathrm{M})$. To do this, we will have to figure out appropriate initial conditions

$$
p^{1}(0)=\lambda_{1}, p^{2}(0)=\lambda_{2}, p^{3}(0)=\lambda_{3}
$$

We solve $(\mathrm{ADJ})$ for $\alpha(\cdot)$ as above, and find

$$
  \begin{cases}
    p^1(t) \equiv \lambda_1 & (0\le t\le\tau)\\
    p^2(t) = \lambda_2 - \lambda_1t & (0\le t\le\tau)\\
    p^3(t) =
    \begin{cases}
      \lambda_3 & (0\le t\le t^*) \\
      \lambda_3 + \int_{t^*}^t \frac{\lambda_2-\lambda_1 s}{(m_0 + k(t^*-s))^2}\mathrm{d}s & (t^*\le t\le\tau).
    \end{cases}
  \end{cases}
$$

Define

$$
r(t):=1-\frac{p^{2}(t)}{m(t)}+p^{3}(t) k
$$

then

$$
\dot{r}=-\frac{\dot{p}^{2}}{m}+\frac{p^{2} \dot{m}}{m^{2}}+\dot{p}^{3} k=\frac{\lambda_{1}}{m}+\frac{p^{2}}{m^{2}}(-k \alpha)+\left(\frac{p^{2} \alpha}{m^{2}}\right) k=\frac{\lambda_{1}}{m(t)} .
$$

Choose $\lambda_{1}<0$, so that $r$ is decreasing. We calculate

$$
r\left(t^{*}\right)=1-\frac{\left(\lambda_{2}-\lambda_{1} t^{*}\right)}{m_{0}}+\lambda_{3} k
$$

and then adjust $\lambda_{2}, \lambda_{3}$ **so that** $r\left(t^{*}\right)=0$.
Then $r$ is nonincreasing, $r\left(t^{*}\right)=0$, and consequently $r>0$ on $\left[0, t^{*}\right), r<0$ on $\left(t^{*}, \tau\right]$. But $(\mathrm{M})$ says

$$
\alpha(t)= \begin{cases}1 & \text { if } r(t)<0 \\ 0 & \text { if } r(t)>0\end{cases}
$$

Thus an optimal control changes just once from 0 to 1 ; and so our earlier guess of $\alpha(\cdot)$ does indeed satisfy the Pontryagin Maximum Principle. <div style="text-align: right;">$\square$</div>

## 4.5 Maximum Principle with Transversality Conditions

Consider again the dynamics

$$
\dot{\boldsymbol{x}}(t)=\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \quad(t>0) \tag{ODE}
$$

In this section we discuss another variant problem, one for which the **initial position** is constrained to lie in a given set $X_{0} \subset \mathbb{R}^{n}$ and the **final position** is also constrained to lie within a given set $X_{1} \subset \mathbb{R}^{n}$.

<img src="/control_om4_4_4_transversality.JPG" alt="full v-h curve but failed" width="50%" align="middle">

So in this model we get to choose the starting point $x^{0} \in X_{0}$ in order to maximize

$$
P[\boldsymbol{\alpha}(\cdot)]=\int_{0}^{\tau} r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \mathrm{d} t, \tag{P}
$$

where $\tau=\tau[\boldsymbol{\alpha}(\cdot)]$ is the first time we hit $X_{1}$.

::: tip Notation
We will assume that $X_{0}, X_{1}$ are in fact smooth surfaces in $\mathbb{R}^{n}$. We let $T_{0}$ denote the tangent plane to $X_{0}$ at $x^{0}$, and $T_{1}$ the tangent plane to $X_{1}$ at $x^{1}$.
:::

::: danger Theorem 4.5 (More Transversality Conditions)
Let $\boldsymbol{\alpha}^{*}(\cdot)$ and $\boldsymbol{x}^{*}(\cdot)$ solve the problem above, with

$$
x^{0}=\boldsymbol{x}^{*}(0), x^{1}=\boldsymbol{x}^{*}\left(\tau^{*}\right)
$$

Then there exists a function $\boldsymbol{p}^{*}(\cdot):\left[0, \tau^{*}\right] \rightarrow \mathbb{R}^{n}$, such that $(\mathrm{ODE}), (\mathrm{ADJ})$ and $(\mathrm{M})$ hold for $0 \leq t \leq \tau^{*}$. In addition,

$$
\left\{\begin{array}{l}
\boldsymbol{p}^{*}\left(\tau^{*}\right) \text { is perpendicular to } T_{1} \\
\boldsymbol{p}^{*}(0) \text { is perpendicular to } T_{0}
\end{array}\right. \tag{T}
$$

:::

We call $(\mathrm{T})$ the transversality conditions.

### Remarks and Intepretations
- If we have $T>0$ fixed and
$$
P[\boldsymbol{\alpha}(\cdot)]=\int_{0}^{T} r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \mathrm{d} t+g(x(T)),
$$
then $(\mathrm{T})$ says
$$
\boldsymbol{p}^{*}(T)=\nabla g\left(\boldsymbol{x}^{*}(T)\right),
$$
in agreement with our earlier form of the terminal/transversality condition.

- Suppose that the surface $X_{1}$ is the graph $X_{1}=\left\{x \mid g_{k}(x)=0, k=1, \ldots, l\right\}$. Then $(\mathrm{T})$ says that $\boldsymbol{p}^{*}\left(\tau^{*}\right)$ belongs to the "orthogonal complement" of the subspace $T_{1}$. But orthogonal complement of $T_{1}$ is the span of $\nabla g_{k}\left(x^{1}\right)(k=1, \ldots, l)$. Thus
$$
\boldsymbol{p}^{*}\left(\tau^{*}\right)=\sum_{k=1}^{l} \lambda_{k} \nabla g_{k}\left(x^{1}\right)
$$
for some unknown constants $\lambda_{1}, \ldots, \lambda_{l}$.

## 4.6 More Applications
### 4.6.1 Example 1: Distance between Two Sets
As a first and simple example, let

$$
\dot{\boldsymbol{x}}(t)=\boldsymbol{\alpha}(t) \tag{ODE}
$$

for $A=S^{1}$, the unit sphere in $\mathbb{R}^{2}: a \in S^{1}$ if and only if $|a|^{2}=a_{1}^{2}+a_{2}^{2}=1$. In other words, we are considering only curves that move with unit speed.

We take

$$
\begin{align*}
P[\boldsymbol{\alpha}(\cdot)] & =-\int_{0}^{\tau}|\dot{\boldsymbol{x}}(t)| \mathrm{d} t=- \text { the length of the curve } \\
& =-\int_{0}^{\tau} \mathrm{d} t=- \text { time it takes to reach } X_{1} \tag{P}
\end{align*}
$$

We want to minimize the length of the curve and, as a check on our general theory, will prove that **the minimum is of course a straight line**.

#### Using the maximum principle
We have

$$
\begin{aligned}
H(x, p, a) & =\boldsymbol{f}(x, a) \cdot \boldsymbol{p}+r(x, a) \\
& =\boldsymbol{a} \cdot \boldsymbol{p}-1=p_{1} a_{1}+p_{2} a_{2}-1
\end{aligned}
$$

The adjoint dynamics equation $(\mathrm{ADJ})$ says

$$
\dot{\boldsymbol{p}}(t)=-\nabla_{x} H(\boldsymbol{x}(t), \boldsymbol{p}(t), \boldsymbol{\alpha}(t))=0
$$

and therefore

$$
\boldsymbol{p}(t) \equiv \text { constant }=p^{0} \neq 0 .
$$

The maximization principle ( M ) tells us that

$$
H(\boldsymbol{x}(t), \boldsymbol{p}(t), \boldsymbol{\alpha}(t))=\max _{a \in S^{1}}\left[-1+p_{1}^{0} a_{1}+p_{2}^{0} a_{2}\right] .
$$

The right hand side is maximized by $a^{0}=\frac{p^{0}}{\left|p^{0}\right|}$, a unit vector that points in the **same direction** of $p^{0}$. Thus $\boldsymbol{\alpha}(\cdot) \equiv a^{0}$ is constant in time. According then to $(\mathrm{ODE})$ we have $\dot{\boldsymbol{x}}=a^{0}$, and consequently $\boldsymbol{x}(\cdot)$ is a straight line.

Finally, the transversality conditions say that

$$
\boldsymbol{p}(0) \perp T_{0}, \boldsymbol{p}\left(t_{1}\right) \perp T_{1} . \tag{T}
$$

In other words, $p^{0} \perp T_{0}$ and $p^{0} \perp T_{1}$; and this means that the tangent planes $T_{0}$ and $T_{1}$ are parallel.

<img src="/control_om4_6_1_dist.JPG" alt="distance between sets" width="50%" align="middle">

Now all of this is pretty obvious from the picture, but it is reassuring that the general theory predicts the proper answer. <div style="text-align: right;">$\square$</div>


### 4.6.2 Example 2: Commodity Trading
Next is a simple model for the trading of a commodity, say wheat. We let $T$ be the fixed length of trading period, and introduce the variables

$$
\begin{aligned}
x^{1}(t) & =\text { money on hand at time } t \\
x^{2}(t) & =\text { amount of wheat owned at time } t \\
\alpha(t) & =\text { rate of buying or selling of wheat } \\
q(t) & =\text { price of wheat at time } t \text { (known) } \\
\lambda & =\text { cost of storing a unit amount of wheat for a unit of time. }
\end{aligned}
$$

We suppose that the price of wheat $q(t)$ is known for the entire trading period $0 \leq t \leq T$ (although this is probably unrealistic in practice). We assume also that the rate of selling and buying is constrained:

$$
|\alpha(t)| \leq M
$$

where $\alpha(t)>0$ means buying wheat, and $\alpha(t)<0$ means selling.

Our intention is to **maximize our holdings** at the end time $T$, namely the sum of the cash on hand and the value of the wheat we then own:

$$
P[\boldsymbol{\alpha}(\cdot)]=x^{1}(T)+q(T) x^{2}(T). \tag{P}
$$

The evolution is

$$
\left\{\begin{aligned}
\dot{x}^{1}(t) & =-\lambda x^{2}(t)-q(t) \alpha(t) \\
\dot{x}^{2}(t) & =\alpha(t)
\end{aligned}\right. \tag{ODE}
$$

This is a nonautonomous ( $=$ **time dependent**) case, but it turns out that the Pontryagin Maximum Principle still applies.

#### Using the maximum principle
What is our optimal buying and selling strategy? First, we compute the Hamiltonian

$$
H(x, \boldsymbol{p}, t, a)=\boldsymbol{f} \cdot \boldsymbol{p}+r=p_{1}\left(-\lambda x_{2}-q(t) a\right)+p_{2} a
$$

since $r \equiv 0$. The adjoint dynamics read

$$
\left\{\begin{array}{l}
\dot{p}^{1}=0 \\
\dot{p}^{2}=\lambda p^{1}
\end{array}\right. \tag{ADJ}
$$

with the terminal condition

$$
\boldsymbol{p}(T)=\nabla g(x(T)) \tag{T}
$$

In our case $g\left(x_{1}, x_{2}\right)=x_{1}+q(T) x_{2}$, and hence

$$
\left\{\begin{array}{l}
p^{1}(T)=1 \\
p^{2}(T)=q(T) .
\end{array}\right. \tag{T}
$$

We then can solve for the costate:

$$
\left\{\begin{array}{l}
p^{1}(t) \equiv 1 \\
p^{2}(t)=\lambda(t-T)+q(T) .
\end{array}\right.
$$

The maximization principle $(\mathrm{M})$ tells us that

$$
\begin{aligned}
&H(\boldsymbol{x}(t), \boldsymbol{p}(t), t, \alpha(t)) \\
=&\max _{|a| \leq M}\left\{p^{1}(t)\left(-\lambda x^{2}(t)-q(t) a\right)+p^{2}(t) a\right\} \\
=&-\lambda p^{1}(t) x^{2}(t)+\max _{|a| \leq M}\left\{a\left(-q(t)+p^{2}(t)\right)\right\}
\end{aligned} \tag{M}
$$

So

$$
\alpha(t)= \begin{cases}M & \text { if } q(t)<p^{2}(t) \\ -M & \text { if } q(t)>p^{2}(t)\end{cases}
$$

for $p^{2}(t):=\lambda(t-T)+q(T)$.

#### Critique
In some situations the amount of money on hand $x^{1}(\cdot)$ becomes negative for part of the time. The economic problem has a natural constraint $x_{2} \geq 0$ (unless we can borrow with no interest charges) which we did not take into account in the mathematical model.

## 4.7 Maximum Principle with State Constraints

We return once again to our usual setting:

$$
\begin{gather*}
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(t)=\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \\
\boldsymbol{x}(0)=x^{0}
\end{array}\right. \tag{ODE}\\
P[\boldsymbol{\alpha}(\cdot)]=\int_{0}^{\tau} r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \mathrm{d} t \tag{P}
\end{gather*}
$$

for $\tau=\tau[\boldsymbol{\alpha}(\cdot)]$, the first time that $x(\tau)=x^{1}$. This is the **fixed endpoint** problem.

### State Constraints
We introduce a new complication by asking that our dynamics $\boldsymbol{x}(\cdot)$ must always remain within a given region $R \subset \mathbb{R}^{n}$. We will as above suppose that $R$ has the explicit representation

$$
R=\left\{x \in \mathbb{R}^{n} \mid g(x) \leq 0\right\}
$$

for a given function $g(\cdot): \mathbb{R}^{n} \rightarrow \mathbb{R}$.

::: warning Definition
It will be convenient to introduce the quantity

$$
c(x, a):=\nabla g(x) \cdot \boldsymbol{f}(x, a) .
$$

Notice that
if $\boldsymbol{x}(t) \in \partial R$ for times $s_{0} \leq t \leq s_{1}$, then $c(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \equiv 0 \quad\left(s_{0} \leq t \leq s_{1}\right)$.
This is so since $\boldsymbol{f}$ is then tangent to $\partial R$, whereas $\nabla g$ is perpendicular.
:::

::: danger Theorem 4.6 (Maximum Principle with State Constraints)
Let $\boldsymbol{\alpha}^{*}(\cdot), \boldsymbol{x}^{*}(\cdot)$ solve the control theory problem above. Suppose also that $\boldsymbol{x}^{*}(t) \in \partial R$ for $s_{0} \leq t \leq s_{1}$.

Then there exists a costate function $\boldsymbol{p}^{*}(\cdot):\left[s_{0}, s_{1}\right] \rightarrow \mathbb{R}^{n}$ such that $(\mathrm{ODE})$ holds. There also exists $\lambda^{*}(\cdot):\left[s_{0}, s_{1}\right] \rightarrow \mathbb{R}$ such that for times $s_{0} \leq t \leq s_{1}$ we have

$$
\dot{\boldsymbol{p}}^{*}(t)=-\nabla_{x} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)+\lambda^{*}(t) \nabla_{x} c\left(\boldsymbol{x}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right) ; \tag{ADJ'}
$$

and

$$
  \left(\mathrm{M}^{\prime}\right) \quad H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)=\max _{a \in A}\left\{H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), a\right) \mid c\left(\boldsymbol{x}^{*}(t), a\right)=0\right\}. \tag{M'}
$$

:::

To keep things simple, we have omitted some technical assumptions really needed for the Theorem to be valid.

### Remarks and Intepretations
- Let $A \subset \mathbb{R}^{m}$ be of this form:

$$
A=\left\{a \in \mathbb{R}^{m} \mid g_{1}(a) \leq 0, \ldots, g_{s}(a) \leq 0\right\}
$$

for given functions $g_{1}, \ldots, g_{s}: \mathbb{R}^{m} \rightarrow \mathbb{R}$. In this case we can use Lagrange multipliers to deduce from $\left(\mathrm{M}^{\prime}\right)$ that

$$\nabla_{a} H\left(\boldsymbol{x}^{*}(t), \boldsymbol{p}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)=\lambda^{*}(t) \nabla_{a} c\left(\boldsymbol{x}^{*}(t), \boldsymbol{\alpha}^{*}(t)\right)+\sum_{i=1}^{s} \mu_{i}^{*}(t) \nabla_{a} g_{i}\left(\boldsymbol{x}^{*}(t)\right) \tag{M''}$$

The function $\lambda^{*}(\cdot)$ here is that appearing in $(\mathrm{ADJ'})$.
If $\boldsymbol{x}^{*}(t)$ lies in the **interior** of $R$ for say the times $0 \leq t<s_{0}$, then the **ordinary Maximum Principle holds**.
- **Jump conditions**. In the situation above, we always have

$$
\boldsymbol{p}^{*}\left(s_{0}-0\right)=\boldsymbol{p}^{*}\left(s_{0}+0\right)
$$

where $s_{0}$ is a time that $\boldsymbol{x}^{*}$ hits $\partial R$. In other words, there is no jump in $\boldsymbol{p}^{*}$ when we hit the boundary of the constraint $\partial R$.

However,

$$
\boldsymbol{p}^{*}\left(s_{1}+0\right)=\boldsymbol{p}^{*}\left(s_{1}-0\right)-\lambda^{*}\left(s_{1}\right) \nabla g\left(\boldsymbol{x}^{*}\left(s_{1}\right)\right)
$$

this says there is (possibly) a jump in $\boldsymbol{p}^{*}(\cdot)$ when we leave $\partial R$.

## 4.8 More Applications

### 4.8.1 Example 1: Shortest Distance between Two Points, Avoiding An Obstacle.

<img src="/control_om4_8_1_dist_obs.JPG" alt="distance between sets with obstacle" width="50%" align="middle">

What is the shortest path between two points that avoids the disk $B=B(0, r)$, as drawn?

Let us take

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(t)=\boldsymbol{\alpha}(t) \\
\boldsymbol{x}(0)=x^{0}
\end{array}\right. \tag{ODE}
$$

for $A=S^{1}$, with the payoff

$$
P[\boldsymbol{\alpha}(\cdot)]=-\int_{0}^{\tau}|\dot{\boldsymbol{x}}| \mathrm{d} t=- \text { length of the curve } \boldsymbol{x}(\cdot). \tag{P}
$$

We have

$$
H(x, \boldsymbol{p}, a)=\boldsymbol{f} \cdot \boldsymbol{p}+r=p_{1} a_{1}+p_{2} a_{2}-1 .
$$

#### Case 1: avoiding the obstacle
Assume $\boldsymbol{x}(t) \notin \partial B$ on some time interval. In this case, the usual Pontryagin Maximum Principle applies, and we deduce as before that

$$
\dot{\boldsymbol{p}}=-\nabla_{x} H=0 .
$$

Hence

$$
\boldsymbol{p}(t) \equiv \text { constant }=p^{0}. \tag{ADJ}
$$

Condition $\mathrm{(M)}$ says

$$
H(\boldsymbol{x}(t), \boldsymbol{p}(t), \boldsymbol{\alpha}(t))=\max _{a \in S^{1}}\left(-1+p_{1}^{0} a_{1}+p_{2}^{0} a_{2}\right)
$$

The maximum occurs for $\alpha=\frac{p^{0}}{\left|p^{0}\right|}$. Furthermore,

$$
-1+p_{1}^{0} \alpha_{1}+p_{2}^{0} \alpha_{2} \equiv 0
$$

and therefore $\alpha \cdot p^{0}=1$. This means that $\left|p^{0}\right|=1$, and hence in fact $\alpha=p^{0}$. We have proved that the trajectory $\boldsymbol{x}(\cdot)$ is a straight line away from the obstacle.

#### Case 2: touching the obstacle
Suppose now $\boldsymbol{x}(t) \in \partial B$ for some time interval $s_{0} \leq t \leq s_{1}$. Now we use the modified version of Maximum Principle, provided by [Theorem 4.6](#4-7-maximum-principle-with-state-constraints).

First we must calculate $c(x, a)=\nabla g(x) \cdot \boldsymbol{f}(x, a)$. In our case,

$$
R=\mathbb{R}^{2}-B=\left\{x \mid x_{1}^{2}+x_{2}^{2} \geq r^{2}\right\}=\left\{x \mid g:=r^{2}-x_{1}^{2}-x_{2}^{2} \leq 0\right\}
$$

Then $\nabla g=\binom{-2 x_{1}}{-2 x_{2}}$. Since $\boldsymbol{f}=\binom{a_{1}}{a_{2}}$, we have

$$
c(x, a)=-2 a_{1} x_{1}-2 a_{2} x_{2}
$$

Now condition $\mathrm{(ADJ')}$ implies

$$
\dot{\boldsymbol{p}}(t)=-\nabla_{x} H+\lambda(t) \nabla_{x} c ;
$$

which is to say,

$$
\left\{\begin{array}{l}
\dot{p}^{1}=-2 \lambda \alpha^{1} \\
\dot{p}^{2}=-2 \lambda \alpha^{2}
\end{array}\right. \tag{4.6}
$$

Next, we employ the maximization principle $( \mathrm{M}^{\prime} )$. We need to maximize

$$
H(\boldsymbol{x}(t), \boldsymbol{p}(t), a)
$$

subject to the requirements that $c(\boldsymbol{x}(t), a)=0$ and $g_{1}(a)=a_{1}^{2}+a_{2}^{2}-1=0$, since $A=\left\{a \in \mathbb{R}^{2} \mid a_{1}^{2}+a_{2}^{2}=1\right\}$. According to $(\mathrm{M}^{\prime \prime})$ we must solve

$$
\nabla_{a} H=\lambda(t) \nabla_{a} c+\mu(t) \nabla_{a} g_{1} ;
$$

that is,

$$
\left\{\begin{array}{l}
p^{1}=\lambda\left(-2 x^{1}\right)+\mu 2 \alpha^{1} \\
p^{2}=\lambda\left(-2 x^{2}\right)+\mu 2 \alpha^{2}
\end{array}\right.
$$

We can combine these identities to eliminate $\mu$. Since we also know that $\boldsymbol{x}(t) \in \partial B$, we have $\left(x^{1}\right)^{2}+\left(x^{2}\right)^{2}=r^{2}$; and also $\boldsymbol{\alpha}=\left(\alpha^{1}, \alpha^{2}\right)^\top$ is tangent to $\partial B$. Using these facts, we find after some calculations that

$$
\lambda=\frac{p^{2} \alpha^{1}-p^{1} \alpha^{2}}{2 r}. \tag{4.7}
$$

But we also know

$$
\left(\alpha^{1}\right)^{2}+\left(\alpha^{2}\right)^{2}=1 \tag{4.8}
$$

and

$$
H \equiv 0=-1+p^{1} \alpha^{1}+p^{2} \alpha^{2}
$$

hence

$$
p^{1} \alpha^{1}+p^{2} \alpha^{2} \equiv 1. \tag{4.9}
$$

**Solving for the unknowns**. We now have the five equations $(4.6) - (4.9)$ for the five unknown functions $p^{1}, p^{2}, \alpha^{1}, \alpha^{2}, \lambda$ that depend on $t$. We introduce the angle $\theta$, as illustrated, and note that $\frac{\mathrm{d}}{\mathrm{d} \theta}=r \frac{\mathrm{d}}{\mathrm{d} t}$. A calculation then confirms that the solutions are

$$
\begin{gathered}
\left\{\begin{array}{l}
\alpha^{1}(\theta)=-\sin \theta \\
\alpha^{2}(\theta)=\cos \theta
\end{array}\right. \\
\lambda=-\frac{k+\theta}{2 r}
\end{gathered}
$$

and

$$
\left\{\begin{array}{l}
p^{1}(\theta)=k \cos \theta-\sin \theta+\theta \cos \theta \\
p^{2}(\theta)=k \sin \theta+\cos \theta+\theta \sin \theta
\end{array}\right.
$$

for some constant $k$.

<img src="/control_om4_8_2_case2.JPG" alt="case 2" width="50%" align="middle">

#### Case 3: approaching and leaving the obstacle
In general, we must piece together the results from Case 1 and Case 2. So suppose now $\boldsymbol{x}(t) \in R=\mathbb{R}^{2}-B$ for $0 \leq t<s_{0}$ and $\boldsymbol{x}(t) \in \partial B$ for $s_{0} \leq t \leq s_{1}$.

We have shown that for times $0 \leq t<s_{0}$, the trajectory $\boldsymbol{x}(\cdot)$ is a straight line. For this case we have shown already that $p=\alpha$ and therefore

$$
\left\{\begin{array}{l}
p^{1} \equiv-\cos \phi_{0} \\
p^{2} \equiv \sin \phi_{0}
\end{array}\right.
$$

for the angle $\phi_{0}$ as shown in the picture.

By the jump conditions, $\boldsymbol{p}(\cdot)$ is **continuous** when $\boldsymbol{x}(\cdot)$ **hits** $\partial B$ at the time $s_{0}$, meaning in this case that

$$
\begin{cases}
k \cos \theta_{0}-\sin \theta_{0}+\theta_{0} \cos \theta_{0}=-\cos \phi_{0} \\
k \sin \theta_{0}+\cos \theta_{0}+\theta_{0} \sin \theta_{0}=\sin \phi_{0}
\end{cases}
$$

These identities hold if and only if

$$
\left\{\begin{array}{l}
k=-\theta_{0} \\
\theta_{0}+\phi_{0}=\frac{\pi}{2}
\end{array}\right.
$$

The second equality says that the optimal trajectory is tangent to the disk $B$ when it hits $\partial B$.

<img src="/control_om4_8_3_case3.JPG" alt="case 3" width="50%" align="middle">

We turn next to the trajectory as it **leaves** $\partial B$ : see the next picture. We then have

$$
\left\{\begin{array}{l}
p^{1}\left(\theta_{1}^{-}\right)=-\theta_{0} \cos \theta_{1}-\sin \theta_{1}+\theta_{1} \cos \theta_{1} \\
p^{2}\left(\theta_{1}^{-}\right)=-\theta_{0} \sin \theta_{1}+\cos \theta_{1}+\theta_{1} \sin \theta_{1} .
\end{array}\right.
$$

Now our formulas above for $\lambda$ and $k$ imply $\lambda\left(\theta_{1}\right)=\frac{\theta_{0}-\theta_{1}}{2 r}$. The jump conditions give

$$
\boldsymbol{p}\left(\theta_{1}^{+}\right)=\boldsymbol{p}\left(\theta_{1}^{-}\right)-\lambda\left(\theta_{1}\right) \nabla g\left(\boldsymbol{x}\left(\theta_{1}\right)\right)
$$

for $g(x)=r^{2}-x_{1}^{2}-x_{2}^{2}$. Then

$$
\lambda\left(\theta_{1}\right) \nabla g\left(\boldsymbol{x}\left(\theta_{1}\right)\right)=\left(\theta_{1}-\theta_{0}\right)\binom{\cos \theta_{1}}{\sin \theta_{1}} .
$$

<img src="/control_om4_8_4_case32.JPG" alt="case 3 leave" width="50%" align="middle">

Therefore

$$
\left\{\begin{array}{l}
p^{1}\left(\theta_{1}^{+}\right)=-\sin \theta_{1} \\
p^{2}\left(\theta_{1}^{+}\right)=\cos \theta_{1},
\end{array}\right.
$$

and so the trajectory is tangent to $\partial B$. If we apply usual Maximum Principle after $\boldsymbol{x}(\cdot)$ leaves $B$, we find

$$
\begin{aligned}
& p^{1} \equiv \mathrm{constant}=-\cos \phi_{1} \\
& p^{2} \equiv \mathrm{constant}=-\sin \phi_{1} .
\end{aligned}
$$

Thus

$$
\left\{\begin{array}{l}
-\cos \phi_{1}=-\sin \theta_{1} \\
-\sin \phi_{1}=\cos \theta_{1}
\end{array}\right.
$$

and so $\theta_{1}-\phi_{1}=\frac{\pi}{2}$.

#### Critique
We have carried out elaborate calculations to derive some pretty obvious conclusions in this example. It is best to think of this as a confirmation in a simple case of [Theorem 4.6](#state-constraints), which applies in far more complicated situations. <div style="text-align: right;">$\square$</div>

### 4.8.2 An Inventory Control Model
Now we turn to a simple model for ordering and storing items in a warehouse. Let the time period $T>0$ be given, and introduce the variables

$$
\begin{aligned}
x(t) & =\text { amount of inventory at time } t \\
\alpha(t) & =\text { rate of ordering from manufacturers, } \alpha \geq 0, \\
d(t) & =\text { customer demand }(\text { known }) \\
\gamma & =\text { cost of ordering } 1 \text { unit } \\
\beta & =\text { cost of storing } 1 \text { unit. }
\end{aligned}
$$

Our goal is to fill all customer orders shipped from our warehouse, while keeping our storage and ordering costs at a **minimum**. Hence the payoff to be maximized is

$$
P[\alpha(\cdot)]=-\int_{0}^{T} \gamma \alpha(t)+\beta x(t) \mathrm{d} t. \tag{P}
$$

We have $A=[0, \infty)$ and the constraint that $x(t) \geq 0$. The dynamics are

$$
\left\{\begin{array}{l}
\dot{x}(t)=\alpha(t)-d(t) \\
x(0)=x^{0}>0
\end{array}\right. \tag{ODE}
$$

#### Guessing the optimal strategy
Let us just guess the optimal control strategy: we should at first not order anything ( $\alpha=0$ ) and let the inventory in our warehouse **fall off to zero as we fill demands**; thereafter we should order just enough to meet our demands ( $\alpha=d$ ).

<img src="/control_om4_8_5_inventory.JPG" alt="inventory curve" width="50%" align="middle">

#### Using the maximum principle
We will prove this guess is right, using the Maximum Principle. Assume first that $x(t)>0$ on some interval $\left[0, s_{0}\right]$. We then have

$$
H(x, p, a, t)=(a-d(t)) p-\gamma a-\beta x
$$

and $\mathrm{(ADJ)}$ says $\dot{p}=-\nabla_{x} H=\beta$. Condition $\mathrm{(M)}$ implies

$$
\begin{aligned}
H(x(t), p(t), \alpha(t), t) & =\max _{a \geq 0}\{-\gamma a-\beta x(t)+p(t)(a-d(t))\} \\
& =-\beta x(t)-p(t) d(t)+\max _{a \geq 0}\{a(p(t)-\gamma)\}
\end{aligned}
$$

Thus

$$
\alpha(t)= \begin{cases}0 & \text { if } p(t) \leq \gamma \\ +\infty & \text { if } p(t)>\gamma\end{cases}
$$

If $\alpha(t) \equiv+\infty$ on some interval, then $P[\alpha(\cdot)]=-\infty$, which is **impossible**, because there exists a control with finite payoff. So it follows that $\alpha(\cdot) \equiv 0$ on $\left[0, s_{0}\right]$ : we place no orders.

According to $\mathrm{(ODE)}$, we have

$$
\left\{\begin{array}{l}
\dot{x}(t)=-d(t) \quad\left(0 \leq t \leq s_{0}\right) \\
x(0)=x^{0}
\end{array}\right.
$$

Thus $s_{0}$ is **first time the inventory hits 0** . Now since $x(t)=x^{0}-\int_{0}^{t} d(s) \mathrm{d} s$, we have $x\left(s_{0}\right)=0$. That is, $\int_{0}^{s_{0}} d(s) \mathrm{d} s=x^{0}$ and we have hit the constraint. Now use Pontryagin Maximum Principle with state constraint for times $t \geq s_{0}$

$$
R=\{x \geq 0\}=\{g(x):=-x \leq 0\}
$$

and

$$
c(x, a, t)=\nabla g(x) \cdot f(x, a, t)=(-1)(a-d(t))=d(t)-a .
$$

We have

$$
H(x(t), p(t), \alpha(t), t)=\max _{a \geq 0}\{H(x(t), p(t), a, t) \mid c(x(t), a, t)=0\} \tag{M'}
$$

But $c(x(t), \alpha(t), t)=0$ if and only if $\alpha(t)=d(t)$. Then ( ODE ) reads

$$
\dot{x}(t)=\alpha(t)-d(t)=0
$$

and so $x(t)=0$ for all times $t \geq s_{0}$.
We have confirmed that our guess for the optimal strategy was right.
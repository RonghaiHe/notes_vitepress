

# 3 Linear time-Optimal Control
## 3.1 Existence of Time-Optimal Control
Consider the linear system of ODE:

$$
  \begin{cases}
    \dot{\boldsymbol{x}}(t) = M\boldsymbol{x}(t) + N\boldsymbol{\alpha}(t) \\
    \boldsymbol{x}(0) = x^0,
  \end{cases}
$$

for given matrices $M\in\mathbb{M}^{n\times n}$ and $N\in\mathbb{M}^{n\times m}$. We'll again take $A$ to be the cube $[-1,1]^m \subset \mathbb{R}^m$.

Define next

$$
  P[\boldsymbol{\alpha}(\cdot)]:=-\int_0^\tau 1\mathrm{d}s = -\tau,
$$

where $\tau=\tau(\boldsymbol{\alpha}(\cdot))$ denotes **the first time** the solution of our system hits the origin $0$. (If the trajectory never hits $0$, we set $\tau=\infty$.)

::: warning **Optimal Control Problem**
We are given the starting point $x^0\in\mathbb{R}^n$, and want to find an optimal control $\boldsymbol{\alpha}^*(\cdot)$ s.t.

$$
  P[\boldsymbol{\alpha}^*(\cdot)]=\max_{\boldsymbol{\alpha}(\cdot)\in\mathcal{A}}P[\boldsymbol{\alpha}(\cdot)].
$$

Then $\tau^*=-\mathcal{P}[\boldsymbol{\alpha}^*(\cdot)]$ is the minimum time to steer to the origin.
:::

::: danger Theorem 3.1: Existence of Time-Optimal Control
Let $x^0\in\mathbb{R}^n$. Then there exists an optimal *bang-bang control* $\boldsymbol{\alpha}^*(\cdot)$.
:::

Proof: Let $\tau^*:=\inf\{t|x^0\in\mathcal{C}(t)\}$. We want to show that $x^0\in\mathcal{C}(\tau^*)$; that is, there exists an optimal control $\boldsymbol{\alpha}^*(\cdot)$ steering $x^0$ to $0$ at time $\tau^*$.

Coose $t_1\ge t_2\ge t_3\ge\cdots$ s.t. $x^0\in\mathcal{C}(t_n)$ and $t_n\to\tau^*$. Since $x^0\in\mathcal{C}(t_n)$, there exists a control $\boldsymbol{\alpha}_n(\cdot)\in\mathcal{A}$ s.t.

$$
  x^0 = -\int_0^{t_n}\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_n(s)\mathrm{d}s.
$$

If necessary, redefine $\boldsymbol{\alpha}_n(s)$ to be $0$ for $s\ge t_n$. By Alaoglu’s Theorem, there exists
a subsequence $n_k\to\infty$ and a control $\boldsymbol{\alpha}^*(\cdot)$ s.t.

$$
  \boldsymbol{\alpha}_{n}\stackrel{*}{\rightharpoonup} \boldsymbol{\alpha}^*.
$$

We assert that $\boldsymbol{\alpha}^*(\cdot)$ is **an optimal control**. It is easy to check that $\boldsymbol{\alpha}^*(s)=0,s\ge\tau^*$. Also

$$
  x^0 = -\int_0^{t_{n_k}}\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_{n_k}(s)\mathrm{d}s = -\int_0^{t_1}\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_{n_k}(s)\mathrm{d}s,
$$

Since $\boldsymbol{\alpha}_{n_k}=0$ for $s\ge t_{n_k}$. let $n_k\to\infty$:

$$
  x^0 = -\int_0^{t_{1}}\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}^*(s)\mathrm{d}s = -\int_0^{\tau^*}\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}^*(s)\mathrm{d}s
$$

because $\boldsymbol{\alpha}^*(s)=0$ for $s\ge\tau^*$. Hence $x^0\in\mathcal{C}(\tau^*)$, and therefore $\boldsymbol{\alpha}^*(\cdot)$ is optimal. 

According to Theorem 2.10 there in fact exists an optimal bang-bang control. <div style="text-align: right;">$\square$</div>

## 3.2 The Maximum Principle for Linear Time-Optimal Control
The really interesting practical issue now is understanding how to compute an optimal control $\boldsymbol{\alpha}^*(\cdot)$.

::: warning Definition
Define $K(t,x^0)$ to be the *reachable set* for time $t$. That is:

$$
  K(t,x^0) = \{x^1 | \text{there exists }\boldsymbol{\alpha}(\cdot)\in\mathcal{A} \text{ which steers from }x^0 \text{ to }x^1 \text{ at time } t\}.
$$

:::

Since $\boldsymbol{x}(\cdot)$ solves ODE, we have $x^1\in K(t,x^0)$ iff

$$
  x^1 = \boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s = \boldsymbol{x}(t)
$$

for some control $\boldsymbol{\alpha}(\cdot)\in\mathcal{A}$.

::: danger Theorem 3.2: Geometry of the set $K$
The set $K(t,x^0)$ is **convex** and **closed**.
:::

Proof:

1. (convexity) Let $x^1,x^2\in K(t,x^0)$. Then $\exists \boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2\in\mathcal{A}$ s.t.
  $$
    \begin{aligned}
        x^1 &= \boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_1(s)\mathrm{d}s \\
        x^2 &= \boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_2(s)\mathrm{d}s,
    \end{aligned}
  $$
  Let $0\le\lambda\le 1$. Then
  $$
    \lambda x^1 + (1-\lambda)x^2 = \boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)N\underbrace{(\lambda\boldsymbol{\alpha}_1(s) + (1-\lambda)\boldsymbol{\alpha}_2(s))}_{\in\mathcal{A}}\mathrm{d}s,
  $$
  and hence $\lambda x^1 + (1-\lambda)x^2\in K(t,x^0)$.

2. (Closedness) Assume $x^k\in K(t,x^0)$ for $(k=1,2,\cdots)$ and $x^k\to y$. We must show $y\in K(t,x^0)$. As $x^k\in K(t,x^0)$. As $x^k\in K(t,x^0), \exists \boldsymbol{\alpha}_k\in\mathcal{A}$ s.t.
  $$
    x^k = \boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_k(s)\mathrm{d}s.
  $$
  According to Alaoglu’s Theorem, there exist a subsequence $k_j\to\infty$ and $\boldsymbol{\alpha}\in\mathcal{A}$ s.t. $boldsymbol{\alpha}_{k}\stackrel{*}{\rightharpoonup} \boldsymbol{\alpha}$. Let $k=k_j\to\infty$ in the expression above, to find
  $$
    y = \boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s.
  $$
  Thus $y\in K(t,x^0)$, an hence $K(t,x^0)$ is closed. <div style="text-align: right;">$\square$</div>

::: info Notation: boundary
If $S$ is a set, we write $\partial S$ to denote the boundary of $S$.
:::

Recall that $\tau^*$ denotes the minimum time it takes to steer to 0, using the optimal control $\boldsymbol{\alpha}^*$. Note that then $0\in\partial K(\tau^*,x^0)$.

::: danger Theorem 3.3: Portryagin Maximum Prnciple for Linear Time-Optimal Control
there exists a nonzero vector $\boldsymbol{h}$ s.t.

$$
  \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}^*(t) = \max_{a\in A}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)Na\}. \tag{M}
$$

for each time $0\le t\le\tau^*$.
:::

**Interpretation**: The significance of this assertion is that if we know $\boldsymbol{h}$ then the *maximization principle (M)* provides us with a formula for computing $\boldsymbol{\alpha}^*(\cdot)$, or at least extracting useful information.

We will see in the next chapter that assertion (M) is a special case of the general Pontryagin Maximum Principle.

Proof:
1. We know $0\in\partial K(\tau^*,x^0)$. Since $K(\tau^*,x^0)$ is convex, There exist a supporting plane to $K(\tau^*,x^0)$ at $0$; this means tat for some $\boldsymbol{g}\neq 0$, we have
  $$
    \boldsymbol{g}\cdot x_1\le 0, \quad \forall x_1\in K(\tau^*,x^0).
  $$

2. Now $x^1\in K(\tau^*,x^0)$ iff $\exists \boldsymbol{\alpha}(\cdot)\in\mathcal{A}$ s.t.
  $$
    x^1 = \boldsymbol{X}(\tau^*)x^0 + \boldsymbol{X}(\tau^*)\int_0^{\tau^*} \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s.
  $$
  Also
  $$
    0 = \boldsymbol{X}(\tau^*)x^0 + \boldsymbol{X}(\tau^*)\int_0^{\tau^*} \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}^*(s)\mathrm{d}s.
  $$
  Since $\boldsymbol{g}\cdot x^1\le 0$, we deduce that
  $$
    \begin{aligned}
      &\boldsymbol{g}^\top\left(\boldsymbol{X}(\tau^*)x^0 + \boldsymbol{X}(\tau^*)\int_0^{\tau^*} \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s\right) \\
      \le& 0=\boldsymbol{X}(\tau^*)x^0 + \boldsymbol{X}(\tau^*)\int_0^{\tau^*} \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}^*(s)\mathrm{d}s.
    \end{aligned}
  $$
  Define $\boldsymbol{h}^\top=\boldsymbol{g}^\top \boldsymbol{X}(\tau^*)$. Then
  $$
    \int_0^{\tau^*} \boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s \le \int_0^{\tau^*} \boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}^*(s)\mathrm{d}s;
  $$
  and therefore
  $$
    \int_0^{\tau^*} \boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)N(\boldsymbol{\alpha}^*-\boldsymbol{\alpha}(s))\mathrm{d}s \ge 0
  $$
  for all controls $\boldsymbol{\alpha}(\cdot)\in\mathcal{A}$.

3. We claim now that the foregoing implies
  $$
    \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}^*(s) = \max_{a\in A}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)Na\}
  $$
  for almost every time $s$.
  For suppose not; then there would exists a subset $E\subset[0,\tau^*]$ of positive measure, s.t.
  $$
    \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}^*(s) < \max_{a\in A}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)Na\}
  $$
  for $s\in E$. Design a new control $\hat{\boldsymbol{\alpha}}(\cdot)$ as follows:
  $$
    \hat{\boldsymbol}(s) = 
    \begin{cases}
      \boldsymbol{\alpha}^*(s) & (s\notin E) \\
      \boldsymbol{\alpha}(s) & (s\in E)
    \end{cases}
  $$
  where $\boldsymbol{\alpha}(s)$ is selected s.t.
  $$
    \max_{a\in A}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)Na\} = \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}(s).
  $$
  Then
  $$
    \int_E \underbrace{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(s)N(\boldsymbol{\alpha}^*-\boldsymbol{\alpha}(s))}_{<0}\mathrm{d}s \ge 0.
  $$
  This contradicts Step 2 above. <div style="text-align: right;">$\square$</div>

For later reference, we pause here to rewrite the foregoing into different notation; this will turn out to be a special case of the general theory developed later in Chapter 4. First of all, define the *Hamiltonian*:

::: warning Definition: Hamiltonian
$$
  H(x,p,a):=(Mx+Na)\cdot p \quad (x,p\in\mathbb{R}^n,a\in A).
$$
:::

::: danger Theorem 3.4: Another way to write Pontryagin Maximum Principle for Linear Time-Optimal Control
Let $\boldsymbol{\alpha}^*(\cdot)$ be a time optimal control and $\boldsymbol{x}^*(\cdot)$ the corresponding response.

Then there exists a function $\boldsymbol{p}^*(\cdot):[0,\tau^*]\to\mathbb{R}^n$, s.t.

$$
  \begin{aligned}
    \dot{\boldsymbol{x}}^*(t) &= \nabla_p H(\boldsymbol{x}^*(t), \boldsymbol{p}^*(t), \boldsymbol{\alpha}^*(t)), \tag{ODE}\\
    \dot{\boldsymbol{p}}^*(t) &= -\nabla_x H(\boldsymbol{x}^*(t), \boldsymbol{p}^*(t), \boldsymbol{\alpha}^*(t)), \tag{ADJ}\\
    H(\boldsymbol{x}^*(t), \boldsymbol{p}^*(t), \boldsymbol{\alpha}^*(t)) &= \max_{a\in A}H(\boldsymbol{x}^*(t), \boldsymbol{p}^*(t), a). \tag{M}
  \end{aligned}
$$

We call (ADJ) the **adjoint equations** and (M) the **maximization principle**. The function $\boldsymbol{p}^*(\cdot)$ is the **costate**.
:::

Proof:

1. Select the vector $\boldsymbol{h}$ as in Theorem 3.3, and consider the system
  $$
    \begin{cases}
      \dot{\boldsymbol{p}}^*(t) = -M^\top \boldsymbol{p}^*(t)\\
      \boldsymbol{p}^*(0) = \boldsymbol{h}.
    \end{cases}
  $$
  The solution is $\boldsymbol{p}^*(t)=e^{-tM^\top}\boldsymbol{h}$; and hence
  $$
    \boldsymbol{p}^*(t)^\top=\boldsymbol{h}^\top \boldsymbol{X}^{-1}(t),
  $$
  Since $\left(e^{-tM^\top}\right)^\top = e^{-tM} = \boldsymbol{X}^{-1}(t)$.

2. We know from condition (M) in Theorem 3.3 that
  $$
    \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}^*(t) = \max_{a\in A}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)Na\}.
  $$
  Since $\boldsymbol{p}^*(t)^\top=\boldsymbol{h}^\top \boldsymbol{X}^{-1}(t)$, this means that
  $$
    \boldsymbol{p}^*(t)^\top(M\boldsymbol{x}^*(t)+N\boldsymbol{\alpha}^*(t)) = \max_{a\in A}\{\boldsymbol{p}^*(t)^\top(M\boldsymbol{x}^*(t)+Na)\}.
  $$

3. Finally, we observe that according to the definition of the Hamiltonian $H$, the dynamical equations for $\boldsymbol{x}^*(\cdot),\boldsymbol{p}^*(\cdot)$ take the form (ODE) and (ADJ), as stated in the Theorem. <div style="text-align: right;">$\square$</div>

## 3.3 Examples
### Example 1: Rocket Railroad Car
We recall this example, introduced in [§1.2](./1introduction#12-examples). We have

$$
  \dot{\boldsymbol{x}}(t) = \underbrace{
    \begin{bmatrix}
      0 & 1 \\
      0 & 0
    \end{bmatrix}}_M \boldsymbol{x}(t) + 
    \underbrace{
    \begin{bmatrix}
      0 \\
      1
    \end{bmatrix}}_N \alpha(t) \tag{ODE}
$$

for

$$
  \boldsymbol{x}(t) = (x^1(t),x^2(t))^\top, \quad A=[-1,1].
$$

According to the Pontryagin Maximum Principle, there exists $h \neq 0$ s.t.

$$
  \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}^*(t) = \max_{|a|\le 1}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)Na\}.
$$

We will extract the interesting fact that an optimal control $\alpha^*$ **switches at most one time**.

We must compute $e^{tM}$. To do so, we observe:

$$
  M^0=I, \quad M = 
  \begin{bmatrix}
    0 & 1 \\
    0 & 0
  \end{bmatrix} \quad M^2 = 
  \begin{bmatrix}
    0 & 1 \\
    0 & 0
  \end{bmatrix}
  \begin{bmatrix}
    0 & 1 \\
    0 & 0
  \end{bmatrix} = \mathbf{0};
$$


and therefore $M^k=0$ for all $k\ge 2$. Consequently,

$$
  e^{tM} = I+tM = 
  \begin{bmatrix}
    1 & t \\
    0 & 1
  \end{bmatrix}
$$

Then

$$
\begin{aligned}
  \boldsymbol{X}^{-1}(t) &= 
  \begin{bmatrix}
    1 & -t \\
    0 & 1
  \end{bmatrix} \\
  \boldsymbol{X}^{-1}(t)N &= 
  \begin{bmatrix}
    1 & -t \\
    0 & 1
  \end{bmatrix}
  \begin{bmatrix}
    0 \\
    1
  \end{bmatrix} = 
  \begin{bmatrix}
    -t \\
    1
  \end{bmatrix}\\
  \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N = (h_1,h_2)
  \begin{bmatrix}
    -t \\
    1
  \end{bmatrix} = -th_1+h_2.
\end{aligned}
$$

The Maximum Principle asserts

$$
  (-th_1+h_2)\alpha^*(t) = \max_{|a|\le 1}\{(-th_1+h_2)a\};
$$

and this implies that

$$
  \alpha^*(t) = \operatorname{sgn}(-th_1+h_2)
$$

for the sign function 

$$
  \operatorname{sgn} = 
  \begin{cases}
    1 & x>0 \\
    0 & x=0 \\
    -1 & x<0
  \end{cases}
$$

Therefore the optimal control $\boldsymbol{\alpha}^*$ switches at most once($-th_1+h_2$ is a function of $t$); and if $h_1 = 0$, then $\alpha^*$ is constant.

Since the optimal control switches at most once, then the control we constructed by a geometric method in [§1.3](./1introduction#13-a-geometric-solution) must have been optimal. <div style="text-align: right;">$\square$</div>

### Example 2: Control of a Vibrating Spring
Consider next thesimple dynamics

$$
  \ddot{x} + x = \alpha,
$$

where we interpret the control as an exterior force acting on an **oscillating weight (of unit mass)** hanging from a **spring**. Our goal is to design an optimal exterior forcing $\alpha^*(\cdot)$ that brings the motion to **a stop in minimum time**.

<img src="/control_om3_3_1_spring.JPG" alt="spring model" width="50%" align="middle">

We have $n = 2, m = 1$. The individual dynamical equations read:

$$
  \begin{cases}
    \dot{x}^1(t) = x^2(t) \\
    \dot{x}^2(t) = -x^1(t) + \alpha(t);
  \end{cases}
$$

which in vector notation become

$$
  \dot{\boldsymbol{x}}(t) = \underbrace{
    \begin{bmatrix}
      0 & 1\\
      -1 & 0
    \end{bmatrix}}_M \boldsymbol{x}(t) + \underbrace{
    \begin{bmatrix}
      0 \\
      1
    \end{bmatrix}}_N\alpha(t)
$$
for $|\alpha(t)|\le 1$. That is, $A=[-1,1]$.

#### Using the maximum principle
We employ the *Pontryagin Maximum Principle*, which asserts that there exists $\boldsymbol{h}\neq 0$ s.t.

$$
  \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N\boldsymbol{\alpha}^*(t) = \max_{|a|\le 1}\{\boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)Na\}. \tag{M}
$$

To extract useful information from (M) we must compute $\boldsymbol{X}(\cdot)$. To do so, we observe that the matrix $M$ is **skew symmetric**, and thus

$$
  M^0=I, \quad M = 
  \begin{bmatrix}
    0 & 1 \\
    -1 & 0
  \end{bmatrix} \quad M^2 = 
  \begin{bmatrix}
    0 & 1 \\
    -1 & 0
  \end{bmatrix}
  \begin{bmatrix}
    -1 & 0 \\
    0 & -1
  \end{bmatrix} = -I;
$$

Therefore

$$
  \begin{aligned}
    M^k &= I \quad &&\text{if } k=0,4,8,\cdots \\
    M^k &= M \quad &&\text{if } k=1,5,9,\cdots \\
    M^k &= -I \quad &&\text{if } k=2,6,\cdots \\
    M^k &= -M \quad &&\text{if } k=3,7,\cdots \\
  \end{aligned}
$$

and consequently

$$
  \begin{aligned}
    e^{tM} &= I+tM+\frac{t^2}{2!}M^2 + \cdots \\
    &= I+tM-\frac{t^2}{2!}I - \frac{t^3}{3!}M + \frac{t^4}{4!}I + \cdots \\
    &= \left(1-\frac{t^2}{2!} + \frac{t^4}{4!} - \cdots\right)I + \left(t-\frac{t^3}{3!} + \frac{t^5}{5!} - \cdots\right)M \\
    &= \cos tI + \sin tM = 
      \begin{bmatrix}
        \cos t & \sin t \\
        -\sin t & \cos t
      \end{bmatrix}.
  \end{aligned}
$$

So we have

$$
  \boldsymbol{X}^{-1}(t) = 
    \begin{bmatrix}
      \cos t & -\sin t \\
      \sin t & \cos t
    \end{bmatrix}.
$$

and

$$
  \boldsymbol{X}^{-1}(t)N = 
  \begin{bmatrix}
   \cos t & -\sin t \\
   \sin t & \cos t
  \end{bmatrix}
  \begin{bmatrix}
   0 \\
   1
  \end{bmatrix} = 
  \begin{bmatrix}
    -\sin t\\
    \cos t
  \end{bmatrix}
$$

whence

$$
  \boldsymbol{h}^\top\boldsymbol{X}^{-1}(t)N = 
  (h_1,h_2)
  \begin{bmatrix}
    -\sin t\\
    \cos t
  \end{bmatrix} = -h_1\sin t + h_2\cos t.
$$

According to condition (M), for each time $t$ we have

$$
  (-h_1\sin t + h_2\cos t)\alpha^*(t) = \max_{|a|\le 1}\{(-h_1\sin t + h_2\cos t)a\}
$$

Therefore

$$
  \alpha^*(t) = \operatorname{sgn}(-h_1\sin t + h_2\cos t).
$$

#### Finding the optimal control
To simplify further, we may assume $h_1^2+h_2^2 = 1$ (unit vector). Recall the trig identity $\sin(x+y)=\sin x\cos y+\cos x\sin y$, and choose $\delta$ s.t. $-h_1=\cos\delta, h_2=\sin\delta$. Then

$$
  \alpha^*(t) = \operatorname{sgn}(\cos\delta\sin t + \sin\delta\cos t) = \operatorname{sgn}(\sin(t+\delta)).
$$

We deduce therefore that $\alpha^*$ switches from $+1$ to $−1$, and vice versa, every $\pi$ units of time.

#### Geometric interpretation
Next, we figure out the geometric consequences.

- When $\alpha\equiv 1$, our (ODE) becomes
  $$
    \begin{cases}
      \dot{x}^1 = x^2 \\
      \dot{x}^2 = -x^1 + 1
    \end{cases}
  $$
  In this case, we can calculate that
  $$
    \begin{aligned}
      \frac{\mathrm{d}}{\mathrm{d}t}[(x^1(t) - 1)^2 + (x^2(t))^2] &= 2(x^1(t)-1)\dot{x}^1(t) + 2x^2(t)\dot{x}^2(t) \\
      &= 2(x^1(t)-1){x}^2(t) + 2x^2(t)(-x^1(t) + 1) = 0.
    \end{aligned}
  $$
  Consequently, the motion satisfies $(x^1(t) - 1)^2 + (x^2(t))^2\equiv r_1^2$, for some radius $r_1$, and therefore the trajectory lies on a circle with center $(1, 0)$, as illustrated.
  <img src="/control_om3_3_2_traj1.JPG" alt="traj when alpha=1" width="50%" align="center">

- If $\alpha\equiv -1$, our (ODE) instead becomes
  $$
    \begin{cases}
      \dot{x}^1 = x^2 \\
      \dot{x}^2 = -x^1 - 1
    \end{cases}
  $$
  In which case
  $$
    \frac{\mathrm{d}}{\mathrm{d}t}[(x^1(t) + 1)^2 + (x^2(t))^2] = 0.
  $$
  Thus $(x^1(t) + 1)^2 + (x^2(t))^2\equiv r_2^2$, for some radius $r_2$, and motion lies on a circle with center $(-1, 0)$, as illustrated.
  <img src="/control_om3_3_3_traj_1.JPG" alt="traj when alpha=-1" width="50%" align="center">

In summary, to get to the origin we must switch our control $\alpha(\cdot)$ back and forth between the values $\pm 1$, causing the trajectory to switch between lying on circles centered at (±1, 0). The switches occur each π units of time.

<img src="/control_om3_3_4_control.JPG" alt="contolled dynamics" width="50%" align="center">
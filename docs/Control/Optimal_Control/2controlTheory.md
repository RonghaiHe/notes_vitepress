---
comments: true
---

# 2 Controllablity, bang-bang control
## 2.1 Definitions
### Controllability question
Given the initial point $x^0$ and a “target” set $S \subset \mathbb{R}^n$, does there exist a control steering the system to $S$ in finite time?

For the time being we will therefore not introduce any payoff criterion that would characterize an “optimal” control, but instead will focus on the question as to whether or not **there exist controls that steer the system to a given goal**. In this chapter we will mostly consider the problem of driving the system to the origin $S = \{0\}$.

### Definition
::: warning Definition: reachable set
- *reachable set* for time $t$:
  $\mathcal{C}(t)=$ **set of initial points $x^0$** for which there exists a control such that $x(t) = 0$
- *reachable set*:
  $\mathcal{C}=$ **set of initial points $x^0$** for which there exists a control such that $x(t) = 0$ for some finite time $t$; 
  
  $$
    \mathcal{C}=\bigcup_{t\ge 0}\mathcal{C}(t)
  $$

:::

Let $\mathbb{M}^{n\times m}$ denote the set of all $n\times m$ matrices. Assume that this and next chapter, the ODE is linear in both the state $\boldsymbol{x}(\cdot)$ and the control $\boldsymbol{\alpha}(\cdot)$, and he ODE hasthe form

$$
\left\{\begin{array}{l}\dot{\boldsymbol{x}}(t)=M \boldsymbol{x}(t)+N \boldsymbol{\alpha}(t) \\ \boldsymbol{x}(0)=x^0\end{array}\right.
$$

where $M\in \mathbb{M}^{n\times n}$ and $N\in \mathbb{M}^{n\times m}$. Assume the set $A$ of conrol parameters is a cube in $\mathbb{R}^m$:

$$
A=[-1,1]^m=\{a\in\mathbb{R}^m| |a_i|\le 1, i=1,\ldots,m\}
$$

## 2.2 Quick review of linear ODE
::: warning Definition: fundamental solution
Let $\boldsymbol{X}(\cdot):\mathbb{R}\to \mathbb{M}^{n\times n}$ be the unique solution of the matrix ODE:

$$
\begin{cases}\dot{\boldsymbol{X}}(t)=M \boldsymbol{X}(t) \quad (t\in\mathbb{R})\\ \boldsymbol{X}(0)=\boldsymbol{I}.\end{cases}
$$

We call $\boldsymbol{X}(t)$ the *fundamental solution* and sometimes write

$$
\boldsymbol{X}(t)=e^{tM}:=\sum_{t=0}^\infty \frac{t^kM^k}{k!}
$$

Last formula being the definition of the exponential $e^{tM}$ and observe that
:::

$$
\boldsymbol{X}^{-1}(t)=\boldsymbol{X}(-t)
$$

::: danger Theorem 2.1: Solving linear systems of ODE
1. The *unique solution of the homogeneous system* of ODE

    $$
    	\begin{cases}\dot{\boldsymbol{x}}(t)=M \boldsymbol{x}(t)\\ \boldsymbol{x}(0)=x^0.\end{cases}
    $$

  is

  $$
  	\boldsymbol{x}(t)=\boldsymbol{X}(t)x^0=e^{tM}x^0
  $$

2. The *unique solution of the nonhomogeneous system*

  $$
  	\begin{cases}\dot{\boldsymbol{x}}(t)=M \boldsymbol{x}(t) + \boldsymbol{f}(t)\\ \boldsymbol{x}(0)=x^0.\end{cases}
  $$

  is

  $$
  	\boldsymbol{x}(t)=\boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t \boldsymbol{X}^{-1}(s)\boldsymbol{f}(s)\mathrm{d}s
  $$

This expression is the *variation of parameters formula*.
:::

## 2.3 Controllability of linear equations
According to the **variation of parameters formula**, the solution of (linear ODE) for a given control $\boldsymbol{\alpha}(·)$ is

$$
\boldsymbol{x}(t)=\boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s
$$

$$
\begin{aligned}
  &x^0\in\mathcal{C}(t) \\
  \leftrightarrow& \text{there exists a control } \boldsymbol{\alpha}(\cdot)\in\mathcal{A} \text{ s.t. } \boldsymbol{x}(t)=0 \\
  \leftrightarrow& 0=\boldsymbol{X}(t)x^0 + \boldsymbol{X}(t)\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s \text{ for some control }\boldsymbol{\alpha}(\cdot)\in\mathcal{A} \\
  \leftrightarrow& x^0 =-\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s \text{ for some control }\boldsymbol{\alpha}(\cdot)\in\mathcal{A}
\end{aligned}
$$

::: danger Theorem 2.2: Structure of reachable set
1. The *reachable set* $\mathcal{C}$ is symmetric and convex.
2. Also, if $x^0\in\mathcal{C}(\bar{t})$, then $x^0\in\mathcal{C}(t)$ for all times $t\ge \bar{t}$
:::

### Definition
::: warning Definition: symmetric & convex
1. A set $S$ is symmetric if $x\in S$ implies $-x\in S$
2. The set $S$ is convex if $x, \hat{x}\in S$ and $0\le\lambda\le 1$ imply $\lambda x+(1-\lambda)\hat{x}\in S$
:::

Proof of theorem 2.2:

1. (Symmetric) Let $t\ge 0$ and $x^0\in\mathcal{C}(t)$. Then $x^0=-\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s$ for some admissible control $\boldsymbol{\alpha}\in\mathcal{A}$.

  Therefore $-x^0=-\int_0^t\boldsymbol{X}^{-1}(s)N(-\boldsymbol{\alpha}(s))\mathrm{d}s$ and $-\boldsymbol{\alpha}(s)\in\mathcal{A}$ since set $A$ is symmetric

  Therefore $-x^0\in\mathcal{C}(t)$, and so each set $\mathcal{C}(t)$ symmetric. It follows that $\mathcal{C}$ is symmetric

2. (Convexity) Take $x^0, \hat{x}^0\in\mathcal{C}$ so that $x^0\in\mathcal{C}, \hat{x}^0\in\mathcal{C}(\hat{t})$ for appropriate time $t,\hat{t}\ge 0$. Assume $t\le \hat{t}$. Then

  $$
	\begin{aligned}
      x^0 &=-\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s \quad \text{ for some control }\boldsymbol{\alpha}(\cdot)\in\mathcal{A} \\
      \hat{x}^0 &=-\int_0^{\hat{t}}\boldsymbol{X}^{-1}(s)N\hat{\boldsymbol{\alpha}}(s)\mathrm{d}s \quad \text{ for some control }\hat{\boldsymbol{\alpha}}(\cdot)\in\mathcal{A}
  	\end{aligned}
  $$

  Define a new control

  $$
  	\tilde{\boldsymbol{\alpha}}(s):=\begin{cases}
    \boldsymbol{\alpha}(s) & \text{if } 0\le s\le t \\
    0 & \text{if } s> t
  	\end{cases}
  $$

  Then

  $$
  	x^0 =-\int_0^{\hat{t}}\boldsymbol{X}^{-1}(s)N\tilde{\boldsymbol{\alpha}}(s)\mathrm{d}s
  $$
  
  and hence $x^0\in\mathcal{C}(\hat{t})$. Now let $0\le \lambda\le 1$, and observe
  $$
  	\lambda x^0 + (1-\lambda)\hat{x}^0 = -\int_0^{\hat{t}}\boldsymbol{X}^{-1}(s)N(\lambda\tilde{\boldsymbol{\alpha}}(s) + (1-\lambda)\hat{\boldsymbol{\alpha}}(s))\mathrm{d}s
  $$
  Therefore $\lambda x^0 + (1-\lambda)\hat{x}^0\in\mathcal{C}(\hat{t})\subseteq\mathcal{C}$

3. Assertion (ii) follows from the foregoing if we take $\bar{t}=\hat{t}$. <div style="text-align: right;">$\square$</div>

### A simple example
Let $n=2$ and $m=1, A=[-1,1]$, and write $\boldsymbol{x}(t)= \left(x^1(t), x^2(t)\right)^T$. Suppose

$$
\begin{equation*}
\left\{\begin{array}{l}
\dot{x}^1=0 \\
\dot{x}^2=\alpha(t) .
\end{array}\right.
\end{equation*}
$$

This is a system of the form $\dot{\boldsymbol{x}}=M \boldsymbol{x}+N \alpha$, for

$$
\begin{equation*}
M=\left(\begin{array}{ll}
0 & 0 \\
0 & 0
\end{array}\right), \quad N=\binom{0}{1}
\end{equation*}
$$

Clearly $\mathcal{C}=\left\{\left(x_1, x_2\right) \mid x_1=0\right\}$, the $x_2$-axis.

We next wish to establish some general algebraic conditions ensuring that $\mathcal{C}$ **contains a neighborhood of the origin**

### Controllability
::: warning Definition: controllability matrix
The *controllability matrix* is

$$
G=G(M,N):=\underbrace{\begin{bmatrix}
  N & MN & M^2N & \cdots & M^{n-1}N
\end{bmatrix}}_{n\times (mn) \text{ matrix}}
$$
:::

::: danger Theorem 2.3: Controllability matrix
$$\operatorname{rank}G=n \leftrightarrow 0\in\mathcal{C}^\circ$$
:::

::: info Notation
- $\mathcal{C}^\circ$: the interior of the set $\mathcal{C}$, with its own and neighbor fields in the set
- rank of $G$ = number of linearly independent rows / columns of $G$; $\operatorname{rank}G\le n$
:::

Proof:

1. Suppose 1st that $\operatorname{rank}G<n$. This means that the linear span of the columns of G has dimension less than or equal to $n-1$. Thus there exists a vector $b \in \mathbb{R}^n, b \neq 0$, **orthogonal to each column of $G$**. This implies $b^\top G=0$. So

  $$
  	b^\top N = b^\top MN = \cdots = b^\top M^{n-1}N = 0
  $$

2. In fact, $b^\top M^kN=0, \, \forall k\in\mathbb{R}_+$
  To confirm this, recall that
  $$
  	p(\lambda):=\operatorname{det}(\lambda I-M)
  $$
  is the **characteristic polynomial** of $M$. The **Cayley–Hamilton** Theorem states that $p(M)=0$
  So if we write
  $$
  	p(\lambda)=\lambda^n+\beta_{n-1} \lambda^{n-1}+\cdots+\beta_1 \lambda^1+\beta_0
  $$
  then
  $$
  	p(M)=M^n+\beta_{n-1} M^{n-1}+\cdots+\beta_1 M+\beta_0I = 0
  $$
  Therefore
  $$
  	M^n=-\beta_{n-1} M^{n-1}-\beta_{n-2} M^{n-2}-\cdots-\beta_1 M-\beta_0I
  $$
  and so
  $$
  	b^\top M^nN=b^\top(-\beta_{n-1} M^{n-1}-\cdots)N=0
  $$
  Similarly, $b^\top M^{n+1}N=0$, etc.
  
  Now notice that
  $$
  	\begin{aligned}
    b^\top \mathbf{X}^{-1}(s) N&=b^\top e^{-s M} N\\
    &=b^T \sum_{k=0}^{\infty} \frac{(-s)^k M^k N}{k!}\\
    &=\sum_{k=0}^{\infty} \frac{(-s)^k}{k!} b^T M^k N=0
 	\end{aligned}
  $$

3. Assume next that $x^0\in\mathcal{C}(t)$. This is equivalent to having

  $$
  	x^0 =-\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s \quad \text{ for some control }\boldsymbol{\alpha}(\cdot)\in\mathcal{A}
  $$

  Then

  $$
  	b\cdot x^0 =-\int_0^tb^\top\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s =0
  $$
  This says that $b$ is **orthogonal** $x^0$. In other words, $\mathcal{C}$ must lie in the hyperplane orthogonal to $b \neq 0$. Consequently $\mathcal{C}^\circ=\phi$.

  (How to understand: in the hyperplane, there is no hypersphere in the set)

4. Conversely, assume that $0 \notin \mathcal{C}^\circ$. Thus $0 \notin \mathcal{C}^\circ(t), \, \forall t>0$. Since $\mathcal{C}(t)$ is convex, there exits a support hyperplane to $\mathcal{C}(t)$ through $0$(This hyperplane put the set into just one side, and $0$ is not in te interior, so can do this). This means that $\exists b\neq 0$, s.t. $b\cdot x^0\le 0, \forall x^0\in\mathcal{C}(t)$

(An equation for hyperplane that crosses thre origin is $b\cdot x=0$)

Choose any $x^0\in\mathcal{C}(t)$. Then

  $$
  	x^0 =-\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s
  $$

for some control $\boldsymbol{\alpha}$, and therefore

  $$
  	0 \ge b\cdot x^0 =-\int_0^tb^\top\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s
  $$

Thus

  $$
  	\int_0^tb^\top\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s\ge 0 \text{ for all controls } \boldsymbol{\alpha}(\cdot)
  $$

We assert that therefore

  $$
  	b^\top \boldsymbol{X}^{-1}(s)N\equiv 0
  $$

a proof of which follows as a lemma below. We rewrite it as

  $$
  	b^\top e^{-sM}N\equiv 0
  $$

Let $s=0$ to see that $b^\top N=0$. Next **differentiate it with respect to s**, to find that

  $$
  	b^\top (-M)e^{-sM}N\equiv 0
  $$

For $s=0$ this says

  $$
  	b^\top MN=0
  $$

We repeatedly differentiate, to deduce

  $$
  	b^\top M^kN=0, \quad \forall =0,1,\cdots
  $$

and so $b^\top G=0$. This implies $\operatorname{rank}G<n$, since $b\neq 0$. <div style="text-align: right;">$\square$</div>

::: tip Lemma 2.4: Integral inequalities
Assume that

$$
\int_0^t b^\top \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s\ge 0$$

for all controls $\boldsymbol{\alpha}(\cdot)$. Then

$$
b^\top \boldsymbol{X}^{-1}(s)N\equiv 0
$$

:::

Proof: Replacing $\boldsymbol{\alpha}$ with $-\boldsymbol{\alpha}$, we see that

$$\int_0^t b^\top \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s= 0$$

for all controls $\boldsymbol{\alpha}(\cdot)$.

Define 

$$
\boldsymbol{v}(s):=b^\top \boldsymbol{X}^{-1}(s)N
$$

If $\boldsymbol{v}\neq 0$, then $\boldsymbol{v}(s_0)\neq 0$ for some $s_0$. Then there exists an interval $I$ s.t. $s_0\in I$ and $\boldsymbol{v}(s)\neq 0$ on $I$. Now define $\boldsymbol{\alpha}(\cdot)\in\mathcal{A}$ this way:

$$
\begin{cases}
\boldsymbol{\alpha}(s)=0, \quad (s\notin I)\\
\boldsymbol{\alpha}(s)=\frac{\boldsymbol{v}(s)}{|\boldsymbol{v}(s)|}\frac{1}{\sqrt{n}}, \quad (s\in I)
\end{cases}
$$

Then

$$
0=\int_0^t \boldsymbol{v}(s)\boldsymbol{\alpha}(s)\mathrm{d}s = \int_I \frac{\boldsymbol{v}(s)}{\sqrt{n}}\frac{\boldsymbol{v}(s)}{|\boldsymbol{v}(s)|}\mathrm{d}s = \frac{1}{\sqrt{n}}\int_I |\boldsymbol{v}(s)|\mathrm{d}s
$$

This implies the contradiction that $\boldsymbol{v}\equiv 0$ in $I$. <div style="text-align: right;">$\square$</div>

::: warning Definition: controllable
We say the linear system (ODE) is *controllable* if $\mathcal{C}=\mathbb{R}^n$
:::

::: danger Theorem 2.5: Criterion for controllability
Let $A$ be the cube $[-1,1]^n$ in $\mathbb{R}^n$. Suppose as well that $\operatorname{rank}G=n$, and $\operatorname{Re}\lambda < 0$ for each eigenvalue $\lambda$ of the matrix $M$. Then the system(ODE) is controllable
:::

Proof: Since $\operatorname{rank}G=n$, Theroem 2.3 tells us that $\mathcal{C}$ contains some ball $B$ centered at $0$. Now take any $x^0\in\mathbb{R}^n$ and consider the evolution

$$
\begin{cases}
\dot{\boldsymbol{x}}(t)=M\boldsymbol{x}(t) \\
\boldsymbol{x}(0)=x^0
\end{cases}
$$

in other words, take the control $\boldsymbol{\alpha}(\cdot)\equiv 0$. Since $\operatorname{Re}\lambda < 0$ for each eigenvalue $\lambda$ of the matrix $M$, then the origin is asymptotically stable. So ther exists a time $T$ s.t. $\boldsymbol{x}(t)\in B$. Thus $\boldsymbol{x}(T)\in B\subset \mathcal{C}$; and hence there exists a control $\boldsymbol{\alpha}(\cdot)\in\mathcal{A}$ steering $\boldsymbol{x}(t)$ into $0$ in finite time. <div style="text-align: right;">$\square$</div>

**Example** We once again consider the rocket railroad car, from §1.2, for which $n=2,m=1,A=[-1,1]$, and

$$
\dot{\boldsymbol{x}}=
\begin{bmatrix}
  0 & 1 \\
  0 & 0 \\
\end{bmatrix}
\boldsymbol{x} + 
\begin{bmatrix}
  0 \\
  1
\end{bmatrix}\alpha
$$

Then
$$
G=[N, MN] = 
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

Therefore $\operatorname{rank}G=2=n$

Also, the characteristic polynomial of the matrix $M$ is

$$
p(\lambda)=\operatorname{det}(\lambda I-M)=\operatorname{det}
\begin{pmatrix}
  \lambda & -1 \\
  0 & \lambda
\end{pmatrix} = \lambda^2
$$

Since the eigenvalues are both $0$, we fail to satisfy the hypotheses of Theorem 2.5. 

This example motivates the following extension of the previous theorem:

::: danger Theorem 2.6: Improved criterion for controllability
Assume $\operatorname{rank}G=n$ and $\operatorname{Re}\lambda \le 0$ for each eigenvalue $\lambda$ of $M$. Then the system(ODE) is controllable.
:::

Proof:

1. If $\mathcal{C}\neq \mathbb{R}^n$, then the convexity of $\mathcal{C}$ implies that there exists a vector $b\neq 0$ and a real number $\mu$ s.t.

  $$b\cdot x^0\le\mu, \quad \forall x^0\in\mathcal{C}$$

(Must contain a support hyperplane if $\mathcal{C}$ doesn't contain the whole space)

Indeed, in the picture we see that $b\cdot(x^0-z^0)\le 0$; and this implies that $\mu:=b\cdot z^0$.

<img src="/control_om2_3_1_set.JPG" alt="plane" width="50%" align="middle">

We will derive a contradiction.

2. Given $b\neq 0, \mu\in\mathbb{R}$, our intention is to **find $x^0\in \mathcal{C}$ s.t. $b\cdot x^0\le\mu$ fails**. Recall $x^0\in \mathcal{C}$ iff $\exists t>0$ and a control $\boldsymbol{\alpha}(\cdot)\in\mathcal{A}$ s.t. 

  $$x^0=-\int_0^t\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s$$

Then

$$
  b\cdot x^0=-\int_0^tb^\top\boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s
$$

Define

  $$
  	\boldsymbol{v}(s):=b^\top\boldsymbol{X}^{-1}(s)N
  $$

3. We assert that $\boldsymbol{v}\neq 0$

To see this, suppose instead that $\boldsymbol{v}\equiv 0$. Then $k$ times differentiate the expression $b^\top \boldsymbol{X}^{-1}(s)N$ w.r.t. $s$ and set $s=0$, to discover

  $$
  	b^\top M^kN=0, \quad k=0,1,2,\ldots
  $$

This implies $b$ is orthogonal to the columns of $G$, and so $\operatorname{rank}G<n$. This is a contradiction to our hypothesis, and therefore $\boldsymbol{v}\neq 0$ holds.

4. Next, define $\boldsymbol{\alpha}(\cdot)$ this ay:

  $$
  	\boldsymbol{\alpha}(s):=
  	\begin{cases}
    -\frac{\boldsymbol{v}(s)}{|\boldsymbol{v}(s)|}, & \text{if } \boldsymbol{v}(s)\neq 0, \\
    0, & \text{if } \boldsymbol{v}(s)=0.
  	\end{cases}
  $$
Then
  
  $$
  	b\cdot x^0 = -\int_0^t \boldsymbol{v}(s)\boldsymbol{\alpha}(s)\mathrm{d}s = \int_0^t |\boldsymbol{v}(s)|\mathrm{d}s
  $$

We want to find a time $t>0$ s.t. $\int_0^t |\boldsymbol{v}(s)|\mathrm{d}s>\mu$. In fact, we assert that

$$
\int_0^\infty |\boldsymbol{v}(s)|\mathrm{d}s=+\infty
$$

To begin the proof above introduce the function  

$$
  \phi(t):=\int_t^\infty\boldsymbol{v}(s)\mathrm{d}s
$$

We will find an ODE $\phi$ satisfies. Take $p(\cdot)$ to be the characteristic polynomial of $M$. Then

$$
  \begin{aligned}
    &p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)\boldsymbol{v}(t)\\
    =&p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)[b^\top e^{-tM}N]\\
    =&b^\top \left(p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)e^{-tM}\right)N \\
    =&b^\top \left(p\left(M\right)e^{-tM}\right)N \equiv 0
  \end{aligned}
$$

Since $p(M)=0$, according to the Cayley–Hamilton Theorem. But since $p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)\boldsymbol{v}(t)\equiv 0$, it follows that 

  $$
  	-\frac{\mathrm{d}}{\mathrm{d}t}p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)\phi(t) = p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)\left(-\frac{\mathrm{d}}{\mathrm{d}t}\phi\right)=p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)\boldsymbol{v}(t)=0
  $$

Hence $\phi$ solves the (n+1)th order ODE

  $$
  	\frac{\mathrm{d}}{\mathrm{d}t}p\left(-\frac{\mathrm{d}}{\mathrm{d}t}\right)\phi(t) = 0
  $$

We also know that $\phi(\cdot)\neq 0$. Let $\mu_1,\cdots,\mu_{n+1}$ be the solutions of $\mu p(-\mu)=0$. According to ODE theory, we can write

$$
\phi(t)= \text{sum of the terms of the form } p_i(t)e^{\mu_i t}
$$

for appropriate polynomials $p_i(\cdot)$

Furthermore, we see that $\mu_{n+1}=0$ and $\mu_k=-\lambda_k$, where $\lambda_1,\cdots,\lambda_n$ are the eigenvalues of $M$. By assumption $\operatorname{Re}\mu_k\ge 0, \quad k=0,1,\cdots,n$. If $\int_0^\infty |\boldsymbol{v}(s)|\mathrm{d}s<\infty$, then

  $$
  	|\phi(t)|\le\int_0^\infty |\boldsymbol{v}(s)|\mathrm{d}s\to 0, \quad \text{as }t\to\infty
  $$

that is, $\phi(t)\to 0$ as $t\to\infty$. This's a contradiction to the representation formula of $\phi(t)=\sum p_i(t)e^{\mu_i t}$, with $\operatorname{Re}\mu_i\ge 0$. Assertaion is proved.

5. Consequently given any $\mu, \exists t>0$ s.t.

  $$
  	b\cdot x^0=\int_0^t |\boldsymbol{v}(s)|\mathrm{d}s > \mu
  $$

  a contradiction to (2.8). Therefore $\mathcal{C}=\mathbb{R}^n$. <div style="text-align: right;">$\square$</div>

## 2.4 Observability
Consider the linear system of ODE

$$
\begin{cases}\dot{\boldsymbol{x}}(t)=M \boldsymbol{x}(t)\\ \boldsymbol{x}(0)=x^0.\end{cases}
$$

where $M\in\mathbb{M}^{n\times n}$.

In this section we address the observability problem, modeled as follows. We suppose that we can observe

$$
\boldsymbol{y}(t):=N\boldsymbol{x}(t)\quad (t\ge 0)
$$

for a given matrix $N\in\mathbb{M}^{m\times n}$. Consequently, $\boldsymbol{y}(t)\in\mathbb{R}^{m}$. The interesting situation is when $m<<n$ and we interpret $\boldsymbol{y}(\cdot)$ as **low-dimensional** “observations” or “measurements” of the **high-dimensional** dynamics $\boldsymbol{x}(\cdot)$

**Observability question**: Given the observation $\boldsymbol{y}(\cdot)$, can we in principle reconstruct $\boldsymbol{x}(\cdot)$? In particular, do observations of $\boldsymbol{y}(\cdot)$ provide enough information for us to **deduce** the initial value $x^0$ for (ODE)?

::: warning Definition: observable
The pair (ODE, Observation) called *observable* if the knowledge of $\boldsymbol{y}(\cdot)$ on any time interval $[0, t]$ allows us to compute $x^0$.

More precisely, (ODE, Observation) is *observable* if for all solutions $\boldsymbol{x}_1(\cdot), \boldsymbol{x}_2(\cdot), N\boldsymbol{x}_1(\cdot)\equiv N\boldsymbol{x}_2(\cdot)$ on a time interval $[0, t]$ implies $\boldsymbol{x}_1(0)=\boldsymbol{x}_2(0)$.
:::

**2 simple examples**
1. If $N\equiv 0$, then clearly the system is not observable.
2. On the other hand, if $m = n$ and $N$ is **invertible**, then clearly $\boldsymbol{x}(t) = N^{−1}\boldsymbol{y}(t)$ is observable.

The interesting cases lie between these extremes.

**Theorem 2.7**: Observability and controllability
The system 1

$$
\begin{cases}
  \dot{\boldsymbol{x}}(t) = M\boldsymbol{x}(t) \\
  \boldsymbol{y}(t) = N\boldsymbol{x}(t)
\end{cases}
$$

is *observable* iff the system 2

$$
\dot{\boldsymbol{z}}(t) = M^\top \boldsymbol{z}(t) + N^\top \boldsymbol{\alpha}(t), \quad A=\mathbb{R}^m
$$

is *controllable*, meaning that $\mathcal{C}=\mathbb{R}^n$

**INTERPRETATION**. This theorem asserts that somehow “**observability** and **controllability** are dual concepts” for linear systems.

Proof:

1. ($\leftarrow$) Suppose the system 1 is not observable. Then $\exists x^1\neq x^2\in\mathbb{R}^n$, s.t.

   $$
   	\begin{cases}
     \dot{\boldsymbol{x}}_1(t) = M\boldsymbol{x}_1(t), \quad \boldsymbol{x}_1(0)=x^1 \\
     \dot{\boldsymbol{x}}_2(t) = M\boldsymbol{x}_2(t), \quad \boldsymbol{x}_2(0)=x^2
   	\end{cases}
   $$

but $\boldsymbol{y}(t):=N\boldsymbol{x}_1(t)\equiv N\boldsymbol{x}_2(t), \forall t\ge 0$. Let

  $$
  	\boldsymbol{x}(t):=\boldsymbol{x}_1(t) - \boldsymbol{x}_2(t), \quad x^0:=x^1-x^2
  $$

Then

  $$
  	\dot{\boldsymbol{x}}(t)=M\boldsymbol{x}(t), \quad\boldsymbol{x}(0)=x^0\neq 0
  $$

but

  $$
  	N\boldsymbol{x}(t)=0 \quad (t\ge 0)
  $$

Now

  $$
  	\boldsymbol{x}(t)=\boldsymbol{X}(t)x^0 = e^{tM}x^0
  $$

Thus

  $$
  	Ne^{tM}x^0=0 \quad (t\ge 0)
  $$

Let $t=0$, to find $Nx^0=0$. Then differentiate this expression $k$ times in $t$ and let $t = 0$, to discover as well that

  $$
  	NM^kx^0=0
  $$

for $k=0,1,2\cdots$ Hence $(x^0)^\top(M^k)^\top N^\top = 0$ and hence $(x^0)^\top(M^\top)^kN^\top = 0$. This implies

$$
(x^0)^\top[N^\top, M^\top N^\top, \cdots, (M^\top)^{n-1}N^\top]=0
$$

Since $x^0\neq 0, \operatorname{rank}[N^\top, \cdots, (M^\top)^{n-1}N^\top]<n$. Thus system 2 is not controllable. Consequently, system 2 controllable implies system 1 is observable.

2. ($\to$)Assume now system 2 is not controllable. Then $\operatorname{rank}[N^\top, \cdots,(M^\top)^{n-1}N^\top]<n$, and consequently according to Theorem 2.3, $\exists x^0\neq 0$, s.t.

  $$
  	(x^0)^\top[N^\top, \cdots,(M^\top)^{n-1}N^\top]=0
  $$

That is, $NM^kx^0=0, \, \forall k=0,1,2,\cdots,n-1$

We want to show that $\boldsymbol{y}(t)=N\boldsymbol{x}(t)\equiv 0$, where 

$$
\begin{cases}\dot{\boldsymbol{x}}(t)=M \boldsymbol{x}(t)\\ \boldsymbol{x}(0)=x^0.\end{cases}
$$

According to the Cayley–Hamilton Theorem, we can write

  $$
  	M^n = -\beta_{n-1}M^{n-1} - \cdots - \beta_0I
  $$

for appropriate constants. Consequently $NM^nx^0=0$. Likewise

$$
  \begin{aligned}
  M^{n+1}&=M(-\beta_{n-1}M^{n-1} - \cdots - \beta_0I) \\
  &= -\beta_{n-1}M^{n} - \cdots - \beta_0M
  \end{aligned}
$$

and so $NM^{n+1}x^0=0$. Similarly, $NM^kx^0=0, \, \forall k$.

Now

$$
\boldsymbol{x}(t)=\boldsymbol{X}(t)x^0 = e^{Mt}x^0 = \sum_{k=0}^\infty \frac{t^kM^k}{k!}x^0
$$

and therefore $N\boldsymbol{x}(t)=N\sum\limits_{k=0}^\infty \frac{t^kM^k}{k!}x^0 = 0$

We have shown that if system 2 is not controllable, then system 1 is not observable. <div style="text-align: right;">$\square$</div>

## 2.5 bang-bang control
Again take $A$ to be the cube $[-1,1]^m\in\mathbb{R}^m$.

::: warning Defnition: bang-bang
A control $\boldsymbol{\alpha}(\cdot)\in{\mathcal{A}}$ is called *bang-bang* if $\forall t\ge 0$ and for each index $i=1,\cdots,m$, we have $|\alpha^i(t)|=1$, where

$$
  \boldsymbol{\alpha}(t)=
    \begin{bmatrix}
      \alpha^1(t) & \cdots & \alpha^m(t)
    \end{bmatrix}^\top
$$

:::

::: danger Theorem 2.8: bang-bang principle
Let $t>0$ and suppose $x^0\in\mathcal{C}(t)$, for the system

$$
  \dot{\boldsymbol{x}}(t) = M\boldsymbol{x}(t) + N\boldsymbol{\alpha}(t).
$$

Then there exists a bang-bang control $\boldsymbol{\alpha}(\cdot)$ which steers $x^0$ to $0$ at time $t$.
:::

To prove the theorem we need some tools from functional analysis, among them the **Krein–Milman Theorem**, expressing the geometric fact that **every bounded convex set has an extreme point**.

### 2.5.1 Some functional analysis
We will study the “geometry” of certain infinite dimensional spaces of functions. 

::: info Notation
$$
\begin{gather}
  L^\infty = L^\infty(0,t;\mathbb{R}^m) = \{\boldsymbol{\alpha}(\cdot):(0,t)\to\mathbb{R}^m | \sup_{0\le s\le t}|\boldsymbol{\alpha}(s)|<\infty\}. \\
  \|\boldsymbol{\alpha}\|_{L^\infty}=\sup_{0\le s\le t}|\boldsymbol{\alpha}(s)|.
\end{gather}

$$

:::

::: warning Definition: converge in the weak* sense
Let $\boldsymbol{\alpha}\in L^\infty$ for $n=1,\cdots$ and $\boldsymbol{\alpha}\in L^\infty$. We say $\boldsymbol{\alpha}_n$ converges to $\boldsymbol{\alpha}$ in the weak* sense, written

$$
  \boldsymbol{\alpha}_n \stackrel{*}{\rightharpoonup} \boldsymbol{\alpha}.
$$

provided

$$
  \int_0^t \boldsymbol{\alpha}_n(s) \cdot \mathbf{v}(s) \mathrm{d} s \rightarrow \int_0^t \boldsymbol{\alpha}(s) \cdot \mathbf{v}(s) \mathrm{d} s
$$

as $n\to\infty$, for all $\boldsymbol{v}(\cdot):[0,t]\to\mathbb{R}^m$ satisfying $\int_0^t|\mathbf{v}(s)| \mathrm{d} s<\infty$.
:::

We will the following useful weak* compactness theorem for $L^\infty$.

::: danger Alaoglu's Theorem
Let $\boldsymbol{\alpha}_n\in{\mathcal{A}},n=1,\cdots$. Then there exists a subsequence $\boldsymbol{\alpha}_{n_k}$ and $\boldsymbol{\alpha}\in{\mathcal{A}}$ s.t.

$$
  \boldsymbol{\alpha}_{n_k}\stackrel{*}{\rightharpoonup} \boldsymbol{\alpha}.
$$

:::

::: warning Definition: convex; extreme point
- The set $\mathbb{K}$ is *convex* if $\forall x,\hat{x}\in\mathbb{K}$ and all real numbers $0\le\lambda\le 1$,
  $$
    \lambda x+(1-\lambda)\hat{x}\in\mathbb{K}.
  $$

- A point $z\in\mathbb{K}$ called *extreme* provided there **do not** exist points $x,\hat{x}\in\mathbb{K}$ and $0<\lambda<1$ s.t.
  $$
    z=\lambda x+(1-\lambda)\hat{x}.
  $$
:::

::: danger Krein-Milman Theorem
Let $\mathbb{K}$ be a convex, nonempty subset of $L^\infty$, which is compact in the weak* topology.

Then $\mathbb{K}$ has **at least one extreme point**.
:::

### 2.5.2 Application to bang-bang control
The foregoing abstract theory will be useful for us in the following setting. We will take $\mathbb{K}$ to be the set of controls which steer $x^0$ to $0$ at time $t$, prove it satisfies the hypotheses of Krein–Milman Theorem and finally show that an extreme point is a bang-bang control.

So consider again the linear dynamics

$$
  \begin{cases}
    \dot{\boldsymbol{x}}(t) = M\boldsymbol{x}(t) + N\boldsymbol{\alpha}(t)\\
    \boldsymbol{x}(0) = x^0.
  \end{cases}
$$

take $x^0\in\mathcal{C}(t)$ and write

$$
  \mathbb{K}=\{\boldsymbol{\alpha}(\cdot)\in{\mathcal{A}}|\boldsymbol{\alpha}(\cdot) \text{ steers } x^0 \text{ to } 0 \text{ in time }t\}.
$$

::: tip Lemma 2.9: Geometry of set of controls
The collection $\mathbb{K}$ of admissible controls satisfies the hypotheses of the Krein-Milman Theorem.
:::

Proof: Since $x^0\in\mathcal{C}(t)$, we see that $\mathbb{K}\notin\phi$.

Next we show that $\mathbb{K}$ is **convex**. For this, recall that $\boldsymbol{\alpha}(\cdot)\in\mathbb{K}$ iff

$$
  x^0 = -\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s.
$$

Now take also $\hat{\boldsymbol{\alpha}}\in\mathbb{K}$ and $0\le\lambda\le 1$. Then

$$
  x^0 = -\int_0^t \boldsymbol{X}^{-1}(s)N\hat{\boldsymbol{\alpha}}(s)\mathrm{d}s.
$$

and so

$$
  x^0 = -\int_0^t \boldsymbol{X}^{-1}(s)N(\boldsymbol{\alpha}(s) + (1-\lambda)\hat{\boldsymbol{\alpha}}(s))\mathrm{d}s.
$$

Hence $\lambda\boldsymbol{\alpha} + (1-\lambda)\hat{\boldsymbol{\alpha}}\in\mathbb{K}$.

Lastly, we confirm the **compactness**. Let $\boldsymbol{\alpha}_n\in\mathbb{K}$ for $n=1,\cdots$. According to
Alaoglu’s Theorem $\existss n_k\to\infty$ and $\boldsymbol{\alpha}\in\mathcal{A}$ s.t. $\boldsymbol{\alpha}_{n_k}\stackrel{*}{\rightharpoonup} \boldsymbol{\alpha}$. We need to show that $\boldsymbol{\alpha}\in\mathbb{K}$.

Now $\boldsymbol{\alpha}_{n_k}\in\mathbb{K}$ implies

$$
  x^0 = -\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}_{n_k}(s)\mathrm{d}s \to -\int_0^t \boldsymbol{X}^{-1}(s)N\boldsymbol{\alpha}(s)\mathrm{d}s.
$$

by definition of weak-* convergence. Hence $\boldsymbol{\alpha}\in\mathbb{K}.$ <div style="text-align: right;">$\square$</div>

We can now apply the Krein–Milman Theorem to deduce that there exists an extreme point $\boldsymbol{\alpha}\in\mathbb{K}$. What is interesting is that such an extreme point corresponds to a bang-bang control.

::: danger Theorem 2.10: Extremality and bang-bang principle
The control $\boldsymbol{\alpha}(\cdot)$ is *bang-bang*.
:::

Proof:

1. We must show that for almost all times $0\le s\le t$ and for each $i=1,\cdots,m$, we have
  
  $$
    |\alpha^{i*}(s)|=1.
  $$

  Suppose not. Then there exists an index $i\in\{1,\cdots,m\}$ and a subset $E\subset[0,t]$ of positive measure s.t. $|\alpha^{i*}(s)|<1$ for $s\in E$. In fact, $\existss \varepsilon>0$ and a subset $F\subseteq E$ s.t.

  $$
    |F|>0 \text{ and } |\alpha^{i*}(s)|\le 1-\varepsilon \text{ for } s\in F.
  $$

  Define

  $$
    I_F(\beta(\cdot)) := \int_F \boldsymbol{X}^{-1}(s)N\boldsymbol{\beta}(s)\mathrm{d}s.
  $$

  for $\boldsymbol{\beta}=(0,\cdots,\beta(\cdot),\cdots,0)^\top.$, the function $\beta$ in the $i^{\mathrm{th}}$ slot. Choose any real-valued function $\beta(\cdot)\not\equiv 0$, s.t.

  $$
    I_F(\beta(\cdot))=0
  $$

  and $|\beta(\cdot)|\le 1$. Define

  $$
    \begin{aligned}
      \boldsymbol{\alpha}_1(\cdot)&:=\boldsymbol{\alpha}^*(\cdot) + \varepsilon\boldsymbol{\beta}(\cdot) \\
      \boldsymbol{\alpha}_2(\cdot)&:=\boldsymbol{\alpha}^*(\cdot) - \varepsilon\boldsymbol{\beta}(\cdot),
    \end{aligned}
  $$

  where we redefine $\beta$ to be zero off the set $F$

2. We claim that $\boldsymbol{\alpha}_1(\cdot), \boldsymbol{\alpha}_2(\cdot)\in\mathbb{K}$.

  To see this, observe that

  $$
  \begin{aligned}
    &-\int_0^t \mathbf{X}^{-1}(s) N \boldsymbol{\alpha}_1(s) \mathrm{d} s \\
    =&-\int_0^t \mathbf{X}^{-1}(s) N \boldsymbol{\alpha}^*(s) \mathrm{d} s-\varepsilon \int_0^t \mathbf{X}^{-1}(s) N \boldsymbol{\beta}(s) \mathrm{d} s \\
   =& x^0-\varepsilon \underbrace{\int_F \mathbf{X}^{-1}(s) N \boldsymbol{\beta}(s) \mathrm{d} s}_{I_F(\beta(\cdot))=0}=x^0
  \end{aligned}
  $$

  Note also $\boldsymbol{\alpha}_1(\cdot) \in {\mathcal{A}}$. Indeed,
  
  $$
    \begin{cases}\boldsymbol{\alpha}_1(s)=\boldsymbol{\alpha}^*(s) & (s \notin F) \\ \boldsymbol{\alpha}_1(s)=\boldsymbol{\alpha}^*(s)+\varepsilon \boldsymbol{\beta}(s) & (s \in F) .\end{cases}
  $$

  But on the set $F$, we have $\left|\boldsymbol{\alpha}_i^*(s)\right| \leq 1-\varepsilon$, and therefore
  
  $$
  \left|\boldsymbol{\alpha}_1(s)\right| \leq\left|\boldsymbol{\alpha}^*(s)\right|+\varepsilon|\boldsymbol{\beta}(s)| \leq 1-\varepsilon+\varepsilon=1 \text {. }
  $$

  Similar considerations apply for $\boldsymbol{\alpha}_2$. Hence $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2\in\mathbb{K}$, as claimed above.

3. Finally, observe that
  $$
    \begin{aligned}
      \boldsymbol{\alpha}_1(\cdot)&=\boldsymbol{\alpha}^* + \varepsilon\boldsymbol{\beta},  & \boldsymbol{\alpha}_1\neq \boldsymbol{\alpha}^*\\
      \boldsymbol{\alpha}_2(\cdot)&=\boldsymbol{\alpha}^* - \varepsilon\boldsymbol{\beta}, & \boldsymbol{\alpha}_2\neq \boldsymbol{\alpha}^*
    \end{aligned}
  $$

  But

  $$
    \frac12\boldsymbol{\alpha}_1 + \frac12\boldsymbol{\alpha}_2 = \boldsymbol{\alpha}^*.
  $$

  and this is a contradiction, since $\boldsymbol{\alpha}^*$ is an extreme point of $\mathbb{K}$.  <div style="text-align: right;">$\square$</div>
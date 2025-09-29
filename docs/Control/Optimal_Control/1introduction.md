

# 1 Introduction

> This first 5 parts refers this e-book: [An Introduction to Mathematical Optimal Control Theory](https://www.math.berkeley.edu/~evans/control.course.pdf) by Lawrence C. Evans in 2024. The Chapter 6 (differential game) and 7 (stochastic control) of this e-book are not contained
> This 6th part is the note from various notes online

## 1.1 basic problem

**DYNAMICS**: Consider an ODE:
$$
\left\{\begin{aligned} \dot{\boldsymbol{x}}(t) & =\boldsymbol{f}(\boldsymbol{x}(t)) \quad(t>0) \\ \boldsymbol{x}(0) & =x^0\end{aligned}\right.
$$

- $x^0\in\mathbb{R}^n$: initial point
- $\boldsymbol{f}:\mathbb{R}^n\to\mathbb{R}^n$: dynamic function
- $\boldsymbol{x}: [0, \infty)\to\mathbb{R}^n$: **unknown**; dynamic evolution of the **state** of some "system" 

**CONTROLLED DYNAMICS**: Generalize a bit, $\boldsymbol{f}$ also depends upon some **"control" parameters** $a\in A\subset \mathbb{R}^m$. So $\boldsymbol{f}: \mathbb{R}^n\times A\to\mathbb{R}^n$:

$$\left\{\begin{aligned} \dot{\boldsymbol{x}}(t) & =\boldsymbol{f}(\boldsymbol{x}(t), a) \quad(t>0) \\ \boldsymbol{x}(0) & =x^0\end{aligned}\right.$$

Change the value $a$ as the system evolves, like:

$$
\boldsymbol{\alpha}(t)=\left\{\begin{array}{ll}a_1 & 0 \leq t \leq t_1 \\ a_2 & t_1<t \leq t_2 \\ a_3 & t_2<t \leq t_3\end{array} \quad\right.etc.
$$

Then the dynamic equation becomes: 

$$
\left\{\begin{aligned} \dot{\boldsymbol{x}}(t) & =\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \quad(t>0) \\ \boldsymbol{x}(0) & =x^0\end{aligned}\right.
$$

<img src="/control_om1_1_1_evolve_as_time.JPG" alt="contolled dynamics" width="50%" align="center">

We call a function $\boldsymbol{\alpha}: [0, \infty)\to A$ a *control* and regard the trajectory $\boldsymbol{x}(t)$ as te corresponding *response* of the system.

::: info Notation
- Introduce:
	$$
  	\mathcal{A}=\{\boldsymbol{\alpha}: [0,\infty) \to A | \boldsymbol{\alpha}(\cdot) \mathrm{ measurable}\}
	$$
  
  To denote the collection of all *admissible controls* 
- $\boldsymbol{x}(\cdot)=\boldsymbol{x}(\cdot, \boldsymbol{\alpha}(\cdot),x^0)$ would be more precise
:::

### Payoffs
Overall task will be to determine what is the "best" control for our system. For this we need to specify a specific **payoff** (or **reward**) criterion. Let us define the *payoff functional*

$$
P[\boldsymbol{\alpha}(\cdot)]:=\int_0^T r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \mathrm{d} t+g(\boldsymbol{x}(T)
)
$$

where:

- $\boldsymbol{x}(\cdot)$ solves ODE for the control $\boldsymbol{\alpha}(\cdot)$
- $r: \mathbb{R}^n\times A\to \mathbb{R}$: Given; *runnig payoff*
- $g: \mathbb{R}^n\to \mathbb{R}$: Given; *terminal payoff*; 
- $T$: Given; terminal time

### The basic problem
Aim: find a control $\boldsymbol{\alpha}^*(\cdot)$ which *maximizes* the payoff:

$$
P[\boldsymbol{\alpha}^*(\cdot)] \ge P[\boldsymbol{\alpha}(\cdot)].
$$

for all controls $\boldsymbol{\alpha}(\cdot)\in \mathcal{A}$. Such a control $\boldsymbol{\alpha}^*(\cdot)$ is called an **optimal control**.

This task presents us with these mathematical issues:

1. Does an optimal control exist?
2. How can we characterize an optimal control mathematically?
3. How can we construct an optimal control?

These turn out to be sometimes subtle problems, as the following collection of examples illustrates.

## 1.2 Examples
### Example 1: Control of Production and Consumption

Suppose we own, say, **a factory whose output we can control**. Let us begin to construct a mathematical model by setting

$x(t)=$ amount of output produced at time $t\ge 0$

We suppose that we **consume some fraction of our output at each time**, and likewise can **reinvest** the remaining fraction. Let us denote:

$\alpha(t)=$ fraction of output reinvested at time $t\ge 0$

This will be our control, and s.t. the obvious constraint that:

$$
	0\le \alpha(t)\le 1, \text{for each time }t\ge 0
$$

The corresponding dynamic equation is:

$$
\left\{\begin{aligned} \dot{x}(t) & =k\alpha(t)x(t) \quad(t>0) \\ x(0) & =x^0\end{aligned}\right.
$$

The constant $k>0$ modelling the growth rate of our reinvestment.

Take as a payoff functional:

$$
	P[\alpha(\cdot)]:=\int_0^T (1-\alpha(t))x(t) \mathrm{d} t
$$

That means we want to **maximize our total consumption of the output**, our consumption at a given time t being $(1-\alpha(t))x(t)$. Here $n=m=1$ and:

$$
A=[0,1], \, f(x,a)=kax, \, r(x,a)=(1-a)x, \, g\equiv 0.
$$

In 4.4.2, we will see that the optimal control is $\alpha^*$ is given by:

$$
\alpha^*=\left\{\begin{array}{ll}1 & 0 \le x(t) \le t^* \\ 0 & t^*< x(t)\le T\end{array}\right.
$$

In other words, we should reinvest all the output (and therefore consume nothing) up until time $t^*$, and afterwards, we should consume everything (and therefore reinvest nothing). The switchover time $t^*$ will have **to be determined**. We call $\alpha^*(\cdot)$ a *bang–bang control*.

### Example 2: Reproduction Strategies in Social Insects

In this example, we consider a population of social insects, a population if bees. Write $T$ for the length of the season,, and introduce the variables:

- $w(t)=$ number of workers at time $t$
- $q(t)=$ number of queens
- $\alpha(t)=$ fraction of colony effort devoted to increasing work force

Constraint of $\alpha(t)$: $0\le \alpha(t)\le 1$

Introduce the dynamic for the numbers of workers and the number of queens:

- workers: 
  	$$
    	\left\{\begin{aligned} \dot{w}(t) & =-\mu w(t) + bs(t)\alpha(t)w(t)\\ w(0) & =w^0 \end{aligned}\right.
  $$
  - $\mu$:is the death rate of workers; given constant
  - $s(t)$: the known rate at which each worker contributes to the bee economy
- queens:
  	$$
    	\left\{\begin{aligned} \dot{q}(t) & =-\nu q(t) + c(1-\alpha(t))s(t)w(t)\\ q(0) & =q^0 \end{aligned}\right.
  $$
  - $\nu, c$ constant

Goal: maximize the queens at time $T$:

$$
P[\alpha(\cdot)]=q(T)
$$

We have $\boldsymbol{x}(t)=(w(t),q(t))^\top$ and $x^0=(w^0,q^0)^\top$, take $r\equiv 0$ and $g(w,q)=q$

answer will again turn out to be a bang–bang control

### Example 3: A Pendulum

A hanging pendlum: $\theta(t)=$ angle of the pendulum at time $t\ge 0$

If no external force:

$$
\left\{\begin{aligned} &\ddot{\theta}(t) +\lambda \dot{\theta}(t) + \omega^2\theta(t) = 0 \\ &\theta(0)  =\theta_1, \, \dot{\theta}(0)=\theta_2\end{aligned}\right.
$$

The solution will be a damped oscillation, provided $\lambda>0$

Let $\alpha(t)$ denote an applied torque: $|\alpha|\le 1$ 

Our dynamics now become

$$
\begin{equation*}
\left\{\begin{array}{l}
\ddot{\theta}(t)+\lambda \dot{\theta}(t)+\omega^2 \theta(t)=\alpha(t) \\
\theta(0)=\theta_1, \dot{\theta}(0)=\theta_2
\end{array}\right.
\end{equation*}
$$

Define $x_1(t)=\theta(t), x_2(t)=\dot{\theta}(t)$, and $\boldsymbol{x}(t)=\left(x_1(t), x_2(t)\right)$. Then we can write the evolution as the system

$$
\begin{equation*}
\dot{\boldsymbol{x}}(t)=\binom{\dot{x}_1}{\dot{x}_2}=\binom{\dot{\theta}}{\ddot{\theta}}=\binom{x_2}{-\lambda x_2-\omega^2 x_1+\alpha(t)}=\boldsymbol{f}(\boldsymbol{x}, \alpha) .
\end{equation*}
$$

We introduce as well

$$
\begin{equation*}
P[\alpha(\cdot)]=-\int_0^\tau 1 d t=-\tau
\end{equation*}
$$

for

$$
\begin{equation*}
\tau=\tau(\alpha(\cdot))=\text { first time that } \boldsymbol{x}(\tau)=0 \quad \text { (that is, } \theta(\tau)=\dot{\theta}(\tau)=0 .)
\end{equation*}
$$

Maximize $P[\cdot]$, meaning that we want to *minimize* the time it takes to bring the pendulum to rest.

The terminal time isn't fixed, but rather depends upon the control. This's **a fixed endpoint, free time** problem.

### Example 4: A Moon Lander
This model asks us to bring a spacecraft to a soft landing on the lunar surface, using the least amount of fuel.

Introduce the notation:

::: info Notation
- $h(t)$: height at time $t$
- $v(t)$: velocity $=\dot{h}(t)$
- $m(t)$: mass of spacecraft at time $t$ (changing as fuel is burned)
- $\alpha(t)$: thrust at time t, assumed that $0\le \alpha(t)\le 1$
:::

For Newton's law:

$$
m\ddot{h}=-gm+\alpha
$$

Modelled by ODE:

$$
\left\{\begin{aligned} \dot{v}(t) & =-g+\frac{\alpha(t)}{m(t)} \\ \dot{h}(t) & =v(t) \\ \dot{m}(t) & =-k \alpha(t)\end{aligned}\right.
$$

We want to **minimize the amount of fuel used up**, that is, to **maximize the amount remaining once we have landed**. Thus

$$
P[\alpha(\cdot)]=m(\tau)
$$

where $\tau$ is the **first time** that $h(\tau)=v(\tau)=0$. This's a **variable endpoint problem**, since the final time is not given in advance.

We have also the extra constraints $h(t)\ge 0, \, m(t) \ge 0$

### Example 5: Rocket Railroad Car

Imagine a railroad car powered by rocket engines **on each side**. We introduce the variables:

- $q(t)$: position at time $t$
- $v(t)=\dot{q}(t)$: velocity at time $t$
- $\alpha(t)$: thrust from rockets at time $t$, assumed that $-1 \le \alpha(t)\le 1$ 

We want to figure out how to fire the rockets, so as to **arrive at the origin 0 with zero velocity in a minimum amount of time**. Assuming the car has mass $m = 1$, the law of motion is
$$\ddot{q}(t)=\alpha(t)$$

Rewrie by setting $\boldsymbol{x}(t)=(q(t), v(t))^\top$. Then

$$
\left\{\begin{array}{l}\dot{\boldsymbol{x}}(t)=\left(\begin{array}{ll}0 & 1 \\ 0 & 0\end{array}\right) \boldsymbol{x}(t)+\binom{0}{1} \alpha(t) \\ \boldsymbol{x}(0)=x^0=\left(q_0, v_0\right)^T\end{array}\right.
$$

Take

$$
P[\alpha(\cdot)]=-\int_0^\tau 1\mathrm{d}t=-\tau
$$

for $\tau=$ first time that $q(\tau)=v(\tau)=0$

## 1.3 A geometric solution
Introduce some *ad hoc* calculus and geometry methods for the rocke car problem.  

First of all, let us guess that to find an optimal solution we will need only to consider the cases $\alpha = 1$ or $\alpha = −1$. In other words, we will focus our attention only upon those controls for which at each moment of time **either the left or the right rocket engine is fired at full power.**

- **CASE 1**: $\alpha \equiv 1$
  $$
      \begin{cases}
        \dot{q}=v \\
        \dot{v}=1
      \end{cases}
  $$

  Then 
  $$
      v\dot{v}=\dot{q}
  $$

  And so
  $$
  \frac12 (v^2)^\cdot=\dot{q}
  $$

  Let $t_0$ belong to the time interval where $\alpha\equiv 1$ and interate from $t_0$ to $t$:
  $$
      \frac{v^2(t)}{2}-\frac{v^2(t_0)}{2}=q(t)-q(t_0)
  $$

  Then
  $$
    v^2(t)=2 q(t)+\underbrace{\left(v^2\left(t_0\right)-2 q\left(t_0\right)\right)}_b
  $$

  In other words, so long as the control is set for $\alpha\equiv 1$, the trajectory stays on the curve $v^2 = 2q + b$ for some constant $b$.

  <img src="/control_om1_3_1_curve1.JPG" alt="curve1" width="50%" align="center">

- **CASE 2**: $\alpha \equiv -1$
  $$
  \begin{cases}
    \dot{q}=v \\
    \dot{v}=-1
  \end{cases}
  $$
Then
  $$
    \frac12 (v^2)^\cdot=-\dot{q}
  $$
  
  Let $t_1$ belong to the time interval where $\alpha\equiv -1$ and interate from $t_1$ to $t$:

  $$
      v^2(t)=-2 q(t)+\underbrace{\left(2 q\left(t_1\right)-v^2\left(t_1\right)\right)}_c
  $$
  
  As long as the control is set for $\alpha\equiv -1$, the trajectory stays on the curve $v^2 = -2q + c$ for some constant $c$.

  <img src="/control_om1_3_2_curve2.JPG" alt="curve2" width="50%" align="center">

### Geometric interpretation
Now we can design an optimal control $\alpha^*(\cdot)$, which causes the trajectory to jump between the families of right– and left–pointing parabolas, as drawn. Say we **start at the black dot**, and wish to **steer to the origin**. This we accomplish by first setting the control to the value $\alpha = −1$, causing us to move down along the second family of parabolas. We then switch to the control $\alpha = 1$, and thereupon move to a parabola from the first family, along which we move up and to the left, ending up at the origin. See the picture.

<img src="/control_om1_3_3_control.JPG" alt="control" width="50%" align="center">

## 1.4 Optimal Control Solutions
> [3-Direct method (Single/Multiple shooting, collocation method) - Zhuanlan in Zhihu](https://zhuanlan.zhihu.com/p/396056002)
> including [Numerical Optimal Control](https://www.syscop.de/files/2024ws/NOC/book-NOCSE.pdf) by Moritz Diehl and Sebastien Gros, which is the reference e-book in 1.4.

There are 3 basic families of approaches to address continuous-time optimal control problems (OCP):
1. **State-space approaches**: Hamilton-Jacobian-Bellman (`HJB`) Equation (`Dynamic Programming` for discrete);
   - Core: states that **each subarc** of an optimal trajectory must be optimal
     - Use the principle of optimality: 
   - A **PDE** in the state space
   - Methods to **numerically** compute solution approximations **exist**
     - but the approach severely suffers from **Bellman’s “curse of dimensionality”**, thus restricted to **small state dimensions**
2. **Indirect Methods**: Pontryagin Maximum Principle (`PMP`);
   - Core: derive a **Boundary Value Problem** (BVP) in ODE
     - Use the necessary conditions of optimality of the infinite dimensional problem: 
   - This BVP must numerically be solved
   - **first optimize, then discretize**
     - the conditions of optimality are first written in continuous time for the given problem, and then discretized in one way or another in order for computing a numerical solution
   - numerical solution of the BVP: **shooting techniques** or by **collocation**
     - 2 major drawbacks: 
       - the underlying differential equations are often **difficult to solve** due to **strong nonlinearity and instability**, and that changes in the control structure, i.e. the sequence of arcs where different constraints are active, are difficult to handle: they usually require a completely new problem setup
       - on so-called singular arcs, higher index differential-algebraic equations (DAE) arise which necessitate specialized solution techniques
3. **Direct Methods**: 
   - Core: Transform the original infinite-dimensional OCP into a finite-dimensional NonLinear Program (NLP)
   - solved by structure-exploiting numerical optimization methods
   - **first discretize, then optimize**
     - the problem is first converted into a discrete one, on which optimization techniques are then deployed
   - Advantages over indirect ones: they can easily treat all sorts of constraints, such as e.g. the inequality path constraints in one formulation
     - the activation and de-activation of the inequality constraints, i.e. structural changes in active constraints, occurring during the optimization procedure are treated by **well-developed NLP methods** that can efficiently deal with such active set changes
   - All direct methods are based on one form or another of finite-dimensional parameterization of the control trajectory, but differ significantly in the way **the state trajectory** is handled
   - For solution of **constrained optimal control problems** in real world applications, direct methods are nowadays by far the most widespread and successfully used techniques
   1. Direct Single Shooting
   2. Direct Multiple Shooting
   3. Direct Collocation
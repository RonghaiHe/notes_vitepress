

# 5 Dynamic Programming
## 5.1 Derivation of Bellman's PDE
### 5.1.1 Dynamic Programming

We begin with some mathematical wisdom: 
> “It is sometimes easier to solve a problem by embedding it within a larger class of problems and then solving the larger class all at once.”

#### A Calculus Example
Suppose we wish to calculate the value of the integral

$$
\int_0^{\infty} \frac{\sin x}{x} \mathrm{d} x
$$

This is pretty hard to do directly, so let us as follows add a parameter $\alpha$ into the integral:
$$
I(\alpha):=\int_0^{\infty} e^{-\alpha x} \frac{\sin x}{x} \mathrm{d} x
$$

We compute
$$
I^{\prime}(\alpha)=\int_0^{\infty}(-x) e^{-\alpha x} \frac{\sin x}{x} \mathrm{d} x=-\int_0^{\infty} \sin x e^{-\alpha x} \mathrm{d} x=-\frac{1}{\alpha^2+1}
$$
where we integrated by parts twice to find the last equality. Consequently
$$
I(\alpha)=-\arctan \alpha+C
$$
and we **must compute the constant** $C$. To do so, observe that
$$
0=I(\infty)=-\arctan (\infty)+C=-\frac{\pi}{2}+C,
$$
and so $C=\frac{\pi}{2}$. Hence $I(\alpha)=-\arctan \alpha+\frac{\pi}{2}$, and consequently
$$
\int_0^{\infty} \frac{\sin x}{x} \mathrm{d} x=I(0)=\frac{\pi}{2}
$$

#### Come back to control
We want to adapt some version of this idea to the vastly more complicated setting of control theory. For this, fix a terminal time $T>0$ and then look at the controlled dynamics

$$
\begin{cases}\dot{\boldsymbol{x}}(s) =\boldsymbol{f}(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) \\ \boldsymbol{x}(0) =x^0,\end{cases} \tag{ODE}
$$

with the associated payoff functional

$$
P[\boldsymbol{\alpha}(\cdot)]=\int_{0}^{T} r(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) \mathrm{d} s+g(\boldsymbol{x}(T)). \tag{P}
$$

We embed this into a larger family of similar problems, by **varying the starting times and starting points**:

$$
\begin{cases}\dot{\boldsymbol{x}}(s)=\boldsymbol{f}(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) & (t \leq s \leq T) \\ \boldsymbol{x}(t)=x. & \end{cases} \tag{5.1}
$$

with

$$
P_{x, t}[\boldsymbol{\alpha}(\cdot)]=\int_{t}^{T} r(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) \mathrm{d} s+g(\boldsymbol{x}(T)). \tag{5.2}
$$

Consider the above problems for **all choices of starting times** $0 \leq t \leq T$ and **all initial points** $x \in \mathbb{R}^{n}$.

::: warning Definition: value function
For $x \in \mathbb{R}^{n}, 0 \leq t \leq T$, define the **value function** $v(x, t)$ to be the greatest payoff possible if we start at $x \in \mathbb{R}^{n}$ at time $t$. In other words,

$$
v(x, t):=\sup _{\boldsymbol{\alpha}(\cdot) \in \mathcal{A}} P_{x, t}[\boldsymbol{\alpha}(\cdot)] \quad\left(x \in \mathbb{R}^{n}, 0 \leq t \leq T\right). \tag{5.3}
$$

Notice then that

$$
v(x, T)=g(x) \quad\left(x \in \mathbb{R}^{n}\right). \tag{5.4}
$$

:::

### 5.1.2 Derivation of Hamilton-Jacobi-Bellman Equation

Our first task is to show that the value function $v$ satisfies **a certain nonlinear partial differential equation**.

Our derivation will be based upon the reasonable principle that 
> "it's better to be smart from the beginning, than to be stupid for a time and then become smart". 

We want to convert this philosophy of life into mathematics.

To simplify, we hereafter suppose that the set $A$ of control parameter values is **compact**.

::: danger Theorem 5.1 (Hamilton-Jacobi-Bellman Equation)
Assume that the value function $v$ is a $C^{1}$ function of the variables ( $x, t$ ). Then $v$ solves the nonlinear partial differential equation

$$
    v_{t}(x, t)+\max _{a \in A}\left\{\boldsymbol{f}(x, a) \cdot \nabla_{x} v(x, t)+r(x, a)\right\}=0 \,\left(x \in \mathbb{R}^{n}, 0 \leq t<T\right), \tag{HJB}
$$

with the terminal condition

$$
v(x, T)=g(x) \quad\left(x \in \mathbb{R}^{n}\right)
$$

:::

#### Remark
We call $\mathrm{(HJB)}$ the **Hamilton-Jacobi-Bellman equation**, and can rewrite it as

$$
v_{t}(x, t)+H\left(x, \nabla_{x} v\right)=0 \quad\left(x \in \mathbb{R}^{n}, 0 \leq t<T\right), \tag{HJB}
$$

for the **partial differential equations Hamiltonian**

$$
H(x, p):=\max _{a \in A} H(x, p, a)=\max _{a \in A}\{\boldsymbol{f}(x, a) \cdot p+r(x, a)\}
$$

where $x, p \in \mathbb{R}^{n}$.

#### Proof
1. Let $x \in \mathbb{R}^{n}, 0 \leq t<T$ and let $h>0$ be given. As always

$$
\mathcal{A}=\{\boldsymbol{\alpha}(\cdot):[0, \infty) \rightarrow A \text { measurable }\} .
$$

Pick any parameter $a \in A$ and use the constant control

$$
\boldsymbol{\alpha}(\cdot) \equiv a
$$

for times $t \leq s \leq t+h$. The dynamics then arrive at the point $\boldsymbol{x}(t+h)$, where $t+h<T$. Suppose now a time $t+h$, we switch to an optimal control and use it for the remaining times $t+h \leq s \leq T$.

What is the payoff of this procedure? Now for times $t \leq s \leq t+h$, we have

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(s)=\boldsymbol{f}(\boldsymbol{x}(s), a) \\
\boldsymbol{x}(t)=x
\end{array}\right.
$$

The payoff for this time period is $\int_{t}^{t+h} r(\boldsymbol{x}(s), a) \mathrm{d} s$. Furthermore, the payoff incurred from time $t+h$ to $T$ is $v(\boldsymbol{x}(t+h), t+h)$, according to the definition of the payoff function $v$. Hence the total payoff is

$$
\int_{t}^{t+h} r(\boldsymbol{x}(s), a) \mathrm{d} s+v(\boldsymbol{x}(t+h), t+h)
$$

But the greatest possible payoff if we start from ( $x, t$ ) is $v(x, t)$. Therefore

$$
v(x, t) \geq \int_{t}^{t+h} r(\boldsymbol{x}(s), a) \mathrm{d} s+v(\boldsymbol{x}(t+h), t+h). \tag{5.5}
$$

2. We now want to **convert this inequality into a differential form**. So we rearrange $(5.5)$ and divide by $h>0$ :

$$
\frac{v(\boldsymbol{x}(t+h), t+h)-v(x, t)}{h}+\frac{1}{h} \int_{t}^{t+h} r(\boldsymbol{x}(s), a) \mathrm{d} s \leq 0
$$

Let $h \rightarrow 0$ :

$$
v_{t}(x, t)+\nabla_{x} v(\boldsymbol{x}(t), t) \cdot \dot{\boldsymbol{x}}(t)+r(\boldsymbol{x}(t), a) \leq 0
$$

But $\boldsymbol{x}(\cdot)$ solves the ODE

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(s)=\boldsymbol{f}(\boldsymbol{x}(s), a) \quad(t \leq s \leq t+h) \\
\boldsymbol{x}(t)=x.
\end{array}\right.
$$

Employ this above, to discover:

$$
v_{t}(x, t)+\boldsymbol{f}(x, a) \cdot \nabla_{x} v(x, t)+r(x, a) \leq 0.
$$

This inequality holds for all control parameters $a \in A$, and consequently

$$
\max _{a \in A}\left\{v_{t}(x, t)+\boldsymbol{f}(x, a) \cdot \nabla_{x} v(x, t)+r(x, a)\right\} \leq 0. \tag{5.6}
$$

3. We next demonstrate that in fact the maximum above **equals zero**. To see this, suppose $\boldsymbol{\alpha}^{*}(\cdot), \boldsymbol{x}^{*}(\cdot)$ were optimal for the problem above. Let us utilize the optimal control $\boldsymbol{\alpha}^{*}(\cdot)$ for $t \leq s \leq t+h$. The payoff is

$$
\int_{t}^{t+h} r\left(\boldsymbol{x}^{*}(s), \boldsymbol{\alpha}^{*}(s)\right) \mathrm{d} s
$$

and the remaining payoff is $v\left(\boldsymbol{x}^{*}(t+h), t+h\right)$. Consequently, the total payoff is

$$
\int_{t}^{t+h} r\left(\boldsymbol{x}^{*}(s), \boldsymbol{\alpha}^{*}(s)\right) \mathrm{d} s+v\left(\boldsymbol{x}^{*}(t+h), t+h\right)=v(x, t).
$$

Rearrange and divide by $h$ :

$$
\frac{v\left(\boldsymbol{x}^{*}(t+h), t+h\right)-v(x, t)}{h}+\frac{1}{h} \int_{t}^{t+h} r\left(\boldsymbol{x}^{*}(s), \boldsymbol{\alpha}^{*}(s)\right) \mathrm{d} s=0.
$$

Let $h \rightarrow 0$ and suppose $\boldsymbol{\alpha}^{*}(t)=a^{*} \in A$. Then

$$
v_{t}(x, t)+\nabla_{x} v(x, t) \cdot \underbrace{\dot{\boldsymbol{x}}^{*}(t)}_{\boldsymbol{f}\left(x, a^{*}\right)}+r\left(x, a^{*}\right)=0;
$$

and therefore

$$
v_{t}(x, t)+\boldsymbol{f}\left(x, a^{*}\right) \cdot \nabla_{x} v(x, t)+r\left(x, a^{*}\right)=0
$$

for some parameter value $a^{*} \in A$. This proves $\mathrm{(HJB)}$. <div style="text-align: right;">$\square$</div>

### 5.1.2 The Dynamic Programming Method

Here is how to use the dynamic programming method to **design optimal controls**:

**Step 1**: Solve the Hamilton-Jacobi-Bellman equation, and thereby compute the value function $v$.

**Step 2**: Use the value function $v$ and the Hamilton-Jacobi-Bellman PDE to design an **optimal feedback control** $\boldsymbol{\alpha}^{*}(\cdot)$, as follows. Define for each point $x \in \mathbb{R}^{n}$ and each time $0 \leq t \leq T$,

$$
\boldsymbol{\alpha}(x, t)=a \in A
$$

to be a parameter value where the maximum in (HJB) is attained. In other words, we select $\boldsymbol{\alpha}(x, t)$ so that

$$
v_{t}(x, t)+\boldsymbol{f}(x, \boldsymbol{\alpha}(x, t)) \cdot \nabla_{x} v(x, t)+r(x, \boldsymbol{\alpha}(x, t))=0 .
$$

Next we solve the following ODE, assuming $\boldsymbol{\alpha}(\cdot, t)$ is sufficiently regular to let us do so:

$$
\left\{\begin{array}{l}\dot{\boldsymbol{x}}^{*}(s)=\boldsymbol{f}\left(\boldsymbol{x}^{*}(s), \boldsymbol{\alpha}\left(\boldsymbol{x}^{*}(s), s\right)\right) \quad(t \leq s \leq T) \\ \boldsymbol{x}(t)=x .\end{array}\right. \tag{ODE}
$$

Finally, define the **feedback control**

$$
\boldsymbol{\alpha}^{*}(s):=\boldsymbol{\alpha}\left(\boldsymbol{x}^{*}(s), s\right) . \tag{5.7}
$$

In summary, we design the optimal control this way: If the state of system is $x$ at time $t$, use the control which at time $t$ takes on the parameter value $a \in A$ such that the minimum(fault, maximum?) in (HJB) is obtained.

We demonstrate next that this construction does indeed provide us with an optimal control.

::: danger Theorem 5.2 (Verification of Optimality)
The control $\boldsymbol{\alpha}^{*}(\cdot)$ defined by the construction $(5.7)$ is optimal.
:::

#### Proof of Theorem 5.2

We have

$$
P_{x, t}\left[\boldsymbol{\alpha}^{*}(\cdot)\right]=\int_{t}^{T} r\left(\boldsymbol{x}^{*}(s), \boldsymbol{\alpha}^{*}(s)\right) \mathrm{d} s+g\left(\boldsymbol{x}^{*}(T)\right).
$$

Furthermore according to the definition $(5.7)$ of $\boldsymbol{\alpha}(\cdot)$ :

$$
\begin{aligned}
P_{x, t}\left[\boldsymbol{\alpha}^{*}(\cdot)\right] & =\int_{t}^{T}\left(-v_{t}\left(\boldsymbol{x}^{*}(s), s\right)-\boldsymbol{f}\left(\boldsymbol{x}^{*}(s), \boldsymbol{\alpha}^{*}(s)\right) \cdot \nabla_{x} v\left(\boldsymbol{x}^{*}(s), s\right)\right) \mathrm{d} s+g\left(\boldsymbol{x}^{*}(T)\right) \\
& =-\int_{t}^{T} v_{t}\left(\boldsymbol{x}^{*}(s), s\right)+\nabla_{x} v\left(\boldsymbol{x}^{*}(s), s\right) \cdot \dot{\boldsymbol{x}}^{*}(s) \mathrm{d} s+g\left(\boldsymbol{x}^{*}(T)\right) \\
& =-\int_{t}^{T} \frac{\mathrm{d}}{\mathrm{d} s} v\left(\boldsymbol{x}^{*}(s), s\right) \mathrm{d} s+g\left(\boldsymbol{x}^{*}(T)\right) (Chain Rule)\\
& =-v\left(\boldsymbol{x}^{*}(T), T\right)+v\left(\boldsymbol{x}^{*}(t), t\right)+g\left(\boldsymbol{x}^{*}(T)\right) \\
& =-g\left(\boldsymbol{x}^{*}(T)\right)+v\left(\boldsymbol{x}^{*}(t), t\right)+g\left(\boldsymbol{x}^{*}(T)\right) \\
& =v(x, t)=\sup _{\boldsymbol{\alpha}(\cdot) \in \mathcal{A}} P_{x, t}[\boldsymbol{\alpha}(\cdot)].
\end{aligned}
$$

That is,

$$
P_{x, t}\left[\boldsymbol{\alpha}^{*}(\cdot)\right]=\sup _{\boldsymbol{\alpha}(\cdot) \in \mathcal{A}} P_{x, t}[\boldsymbol{\alpha}(\cdot)] ;
$$

and so $\boldsymbol{\alpha}^{*}(\cdot)$ is optimal, as asserted. <div style="text-align: right;">$\square$</div>

## 5.2 Examples
### 5.2.1 Example 1: Dynamics with Three Velocities
Let us begin with a fairly easy problem:

$$
\left\{\begin{array}{l}
\dot{x}(s)=\alpha(s) \quad(0 \leq t \leq s \leq 1) \\
x(t)=x
\end{array}\right. \tag{ODE}
$$

where our set of control parameters is

$$
A=\{-1,0,1\} .
$$

We want to minimize

$$
\int_{t}^{1}|x(s)| \mathrm{d} s
$$

and so take for our payoff functional

$$
P_{x, t}[\alpha(\cdot)]=-\int_{t}^{1}|x(s)| \mathrm{d} s . \tag{P}
$$

As our first illustration of dynamic programming, we will compute the value function $v(x, t)$ and confirm that it does indeed solve the appropriate Hamilton-Jacobi-Bellman equation. To do this, we first introduce the three regions:

<img src="/control_om5_2_1_region.JPG" alt="3 regions" width="80%" align="middle">

- Region $I=\{(x, t) \mid x<t-1,0 \leq t \leq 1\}$.
- Region $I I=\{(x, t) \mid t-1<x<1-t, 0 \leq t \leq 1\}$.
- Region $I I I=\{(x, t) \mid x>1-t, 0 \leq t \leq 1\}$.

We will consider the three cases as to which region the initial data ( $x, t$ ) lie within.

- **Region III**

<img src="/control_om5_2_2_region3.JPG" alt="optimal path in region3" width="80%" align="middle">

In this case we should take $\alpha \equiv-1$, to steer as close to the origin 0 as quickly as possible. Then

$$
\begin{aligned}
    v(x, t)&=- \text{area under path taken} \\
    &=-(1-t) \frac{1}{2}(x+x+t-1)=-\frac{(1-t)}{2}(2 x+t-1).
\end{aligned}
$$

- **Region I**
In this region, we should take $\alpha \equiv 1$, in which case we can similarly compute $v(x, t)=-\left(\frac{1-t}{2}\right)(-2 x+t-1)$.

- **Region II**
In this region we take $\alpha \equiv \pm 1$, until we hit the origin, after which we take $\alpha \equiv 0$. We therefore calculate that $v(x, t)=-\frac{x^{2}}{2}$ in this region.

#### Checking the Hamilton-Jacobi-Bellman PDE
Now the Hamilton-JacobiBellman equation for our problem reads

$$
v_{t}+\max _{a \in A}\left\{f \cdot \nabla_{x} v+r\right\}=0 \tag{5.8}
$$

for $f=a, r=-|x|$. We rewrite this as

$$
v_{t}+\max _{a= \pm 1,0}\left\{a v_{x}\right\}-|x|=0;
$$

and so

$$
v_{t}+\left|v_{x}\right|-|x|=0. \tag{HJB}
$$

We must check that the value function $v$, defined explicitly above in Regions I-III, does in fact solve this PDE, with the terminal condition that $v(x, 1)=g(x)=0$.

Now in **Region II** $v=-\frac{x^{2}}{2}, v_{t}=0, v_{x}=-x$. Hence

$$
v_{t}+\left|v_{x}\right|-|x|=0+|-x|-|x|=0 \quad \text { in Region II, }
$$

in accordance with $\mathrm{(HJB)}$.
In **Region III** we have

$$
v(x, t)=-\frac{(1-t)}{2}(2 x+t-1);
$$

and therefore

$$
v_{t}=\frac{1}{2}(2 x+t-1)-\frac{(1-t)}{2}=x-1+t, \quad v_{x}=t-1, \quad|t-1|=1-t \geq 0.
$$

Hence

$$
v_{t}+\left|v_{x}\right|-|x|=x-1+t+|t-1|-|x|=0 \quad \text { in Region III, }
$$

because $x>0$ there.

Likewise the Hamilton-Jacobi-Bellman PDE holds in **Region I**.

#### Remarks
- In the example, $v$ is **not** continuously differentiable on the borderlines between Regions II and I or III.
- In general, **it may not be possible actually to find the optimal feedback control**. For example, reconsider the above problem, but now with $A=\{-1,1\}$. We still have $\alpha=\operatorname{sgn}\left(v_{x}\right)$, but there is no optimal control in Region II.

### 5.2.2 Example 2: Rocket Railroad Car
Recall that the equations of motion in this model are

$$
\binom{\dot{x}_{1}}{\dot{x}_{2}}=\left(\begin{array}{ll}
0 & 1 \\
0 & 0
\end{array}\right)\binom{x_{1}}{x_{2}}+\binom{0}{1} \alpha, \quad|\alpha| \leq 1
$$

and

$$
P[\alpha(\cdot)]=- \text { time to reach }(0,0)=-\int_{0}^{\tau} 1 \mathrm{d} t=-\tau.
$$

To use the method of dynamic programming, we define $v\left(x_{1}, x_{2}\right)$ to be minus the least time it takes to get to the origin $(0,0)$, given we start at the point $\left(x_{1}, x_{2}\right)$.

What is the Hamilton-Jacobi-Bellman equation? Note $v$ does not depend on $t$, and so we have

$$
\max _{a \in A}\left\{\boldsymbol{f} \cdot \nabla_{x} v+r\right\}=0
$$

for

$$
A=[-1,1], \quad \boldsymbol{f}=\binom{x_{2}}{a}, \quad r=-1
$$

Hence our PDE reads

$$
\max _{|a| \leq 1}\left\{x_{2} v_{x_{1}}+a v_{x_{2}}-1\right\}=0 ;
$$

and consequently

$$
\left\{\begin{array}{l}
x_{2} v_{x_{1}}+\left|v_{x_{2}}\right|-1=0 \quad \text { in } \mathbb{R}^{2} \\
v(0,0)=0 .
\end{array}\right. \tag{HJB}
$$

#### Checking the Hamilton-Jacobi-Bellman PDE
We now confirm that $v$ really satisfies $\mathrm{(HJB)}$. For this, define the regions

$$
\begin{aligned}
    I:=&\left\{\left.\left(x_{1}, x_{2}\right)\left|x_{1} \geq-\frac{1}{2} x_{2}\right| x_{2} \right\rvert\,\right\}, \\
    I I:=&\left\{\left.\left(x_{1}, x_{2}\right)\left|x_{1} \leq-\frac{1}{2} x_{2}\right| x_{2} \right\rvert\,\right\} .
\end{aligned}
$$

A direct computation, the details of which we omit, reveals that

$$
v(x)= \begin{cases}-x_{2}-2\left(x_{1}+\frac{1}{2} x_{2}^{2}\right)^{\frac{1}{2}} & \text { in Region I } \\ x_{2}-2\left(-x_{1}+\frac{1}{2} x_{2}^{2}\right)^{\frac{1}{2}} & \text { in Region II. }\end{cases}
$$

In **Region I** we compute

$$
\begin{aligned}
& v_{x_{2}}=-1-\left(x_{1}+\frac{x_{2}^{2}}{2}\right)^{-\frac{1}{2}} x_{2}, \\
& v_{x_{1}}=-\left(x_{1}+\frac{x_{2}^{2}}{2}\right)^{-\frac{1}{2}};
\end{aligned}
$$

and therefore

$$
\begin{aligned}
  &x_{2} v_{x_{1}}+\left|v_{x_{2}}\right|-1 \\
  =&-x_{2}\left(x_{1}+\frac{x_{2}^{2}}{2}\right)^{-\frac{1}{2}}+\left[1+x_{2}\left(x_{1}+\frac{x_{2}^{2}}{2}\right)^{-\frac{1}{2}}\right]-1=0 .  
\end{aligned}
$$

This confirms that our $\mathrm{(HJB)}$ equation holds in Region I, and a similar calculation holds in Region II.

#### Optimal control
Since

$$
\max _{|a| \leq 1}\left\{x_{2} v_{x_{1}}+a v_{x_{2}}+1\right\}=0,
$$

the optimal control is

$$
\alpha=\operatorname{sgn} v_{x_{2}} .
$$

### 5.2.3 Example 3: General Linear-Quadratic Regulator

For this important problem, we are given matrices $M, B, D \in \mathbb{M}^{n \times n}, N \in \mathbb{M}^{n \times m}, C \in \mathbb{M}^{m \times m}$; and assume

$$
B, C, D \text { are symmetric and nonnegative definite, }
$$

and

$$
C \text { is invertible. }
$$

We take the linear dynamics

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(s)=M \boldsymbol{x}(s)+N \boldsymbol{\alpha}(s) \quad(t \leq s \leq T) \\
\boldsymbol{x}(t)=x,
\end{array}\right. \tag{ODE}
$$

for which we want to **minimize** the quadratic cost functional

$$
\int_{t}^{T} \boldsymbol{x}(s)^{\top} B \boldsymbol{x}(s)+\boldsymbol{\alpha}(s)^{\top} C \boldsymbol{\alpha}(s) \mathrm{d} s+\boldsymbol{x}(T)^{\top} D \boldsymbol{x}(T).
$$

So we must **maximize** the payoff

$$
P_{\boldsymbol{x}, t}[\boldsymbol{\alpha}(\cdot)]=-\int_{t}^{T} \boldsymbol{x}(s)^{\top} B \boldsymbol{x}(s)+\boldsymbol{\alpha}(s)^{\top} C \boldsymbol{\alpha}(s) \mathrm{d} s-\boldsymbol{x}(T)^{\top} \mathrm{d} \boldsymbol{x}(T). \tag{P}
$$

The control values are unconstrained, meaning that the control parameter values can range over all of $A=\mathbb{R}^{m}$.

We will solve by dynamic programming the problem of designing an optimal control. To carry out this plan, we first compute the Hamilton-Jacobi-Bellman equation

$$
v_{t}+\max _{a \in \mathbb{R}^{m}}\left\{\boldsymbol{f} \cdot \nabla_{\boldsymbol{x}} v+r\right\}=0,
$$

where

$$
\left\{\begin{array}{l}
\boldsymbol{f}=M \boldsymbol{x}+N \boldsymbol{a} \\
r=-\boldsymbol{x}^{\top} B \boldsymbol{x}-\boldsymbol{a}^{\top} C \boldsymbol{a} \\
g=-\boldsymbol{x}^{\top} D \boldsymbol{x}
\end{array}\right.
$$

Rewrite:

$$
v_{t}+\max _{\boldsymbol{a} \in \mathbb{R}^{m}}\left\{(\nabla v)^{\top} N \boldsymbol{a}-\boldsymbol{a}^{\top} C \boldsymbol{a}\right\}+(\nabla v)^{\top} M \boldsymbol{x}-\boldsymbol{x}^{\top} B \boldsymbol{x}=0. \tag{HJB}
$$

We also have the terminal condition

$$
v(\boldsymbold{x}, T)=-\boldsymbold{x}^{\top} D x
$$

#### Maximization
For what value of the control parameter $a$ is the minimum in the original problem attained? To understand this, we define $Q(\boldsymbol{a}):=(\nabla v)^{\top} N \boldsymbol{a}- \boldsymbol{a}^{\top} C \boldsymbol{a}$, and determine where $Q$ has a **maximum** by computing the partial derivatives $Q_{a_{j}}$ for $j=1, \ldots, m$ and setting them equal to $0$ . This gives the identitites

$$
Q_{a_{j}}=\sum_{i=1}^{n} v_{x_{i}} n_{i j}-2 a_{i} c_{i j}=0.
$$

Therefore $(\nabla v)^{\top} N=2 \boldsymbol{a}^{\top} C$, and then $2 C^{\top} \boldsymbol{a}=N^{\top} \nabla v$. But $C^{\top}=C$. Therefore

$$
\boldsymbol{a}=\frac{1}{2} C^{-1} N^{\top} \nabla_{\boldsymbol{x}} v.
$$

This is the formula for the optimal feedback control: It will be very useful **once we compute the value function** $v$.

#### Finding the value function
We insert our formula $\boldsymbol{a}=\frac{1}{2} C^{-1} N^{\top} \nabla v$ into $\mathrm{(HJB)}$, and this PDE then reads

$$
\left\{\begin{array}{l}
v_{t}+\frac{1}{4}(\nabla v)^{\top} N C^{-1} N^{\top} \nabla v+(\nabla v)^{\top} M x-x^{\top} B x=0 \\
v(x, T)=-\boldsymbol{x}^{\top} D \boldsymbol{x} .
\end{array}\right. \tag{HJB}
$$

Our next move is to guess the form of the solution, namely

$$
v(x, t)=x^{\top} K(t) x,
$$

provided the **symmetric** $n \times n$-matrix valued function $K(\cdot)$ is properly selected. Will this guess work?

Now, since $-\boldsymbol{x}^{\top} K(T) \boldsymbol{x}=-v(\boldsymbol{x}, T)=x^{\top} D\boldsymbol{x}$, we must have the terminal condition that

$$
K(T)=-D.
$$

Next, compute that

$$
v_{t}=\boldsymbol{x}^{\top} \dot{K}(t) \boldsymbol{x}, \quad \nabla_{\boldsymbol{x}} v=2 K(t) \boldsymbol{x} .
$$

We insert our guess $v=\boldsymbol{x}^{\top} K(t) \boldsymbol{x}$ into $\mathrm{(HJB)}$, and discover that

$$
\boldsymbol{x}^{\top}\left\{\dot{K}(t)+K(t) N C^{-1} N^{\top} K(t)+2 K(t) M-B\right\} \boldsymbol{x}=0 .
$$

Look at the expression

$$
\begin{aligned}
2 \boldsymbol{x}^{\top} K M \boldsymbol{x} & =\boldsymbol{x}^{\top} K M \boldsymbol{x}+\left[\boldsymbol{x}^{\top} K M \boldsymbol{x}\right]^{\top} \\
& =\boldsymbol{x}^{\top} K M \boldsymbol{x}+\boldsymbol{x}^{\top} M^{\top} K \boldsymbol{x} .
\end{aligned}
$$

Then

$$
\boldsymbol{x}^{\top}\left\{\dot{K}+K N C^{-1} N^{\top} K+K M+M^{\top} K-B\right\} \boldsymbol{x}=0 .
$$

This identity will hold if $K(\cdot)$ satisfies the **matrix Riccati equation**

$$
    \left\{\begin{array}{l}\dot{K}(t)+K(t) N C^{-1} N^{\top} K(t)+K(t) M+M^{\top} K(t)-B=0 \quad(0 \leq t<T) \\ K(T)=-\mathrm{d}\end{array}\right. \tag{R}
$$

In summary, if we can solve the Riccati equation $\mathrm{(R)}$, we can construct an optimal feedback control

$$
\boldsymbol{\alpha}^{*}(t)=C^{-1} N^{\top} K(t) \boldsymbol{x}(t)
$$

Furthermore, $\mathrm{(R)}$ in fact does have a solution, as explained for instance in the book of Fleming-Rishel.

## 5.3 Dynamic Programming and the Pontryagin Maximum Principle

### 5.3.1 The Method of Characteristics.

Assume $H: \mathbb{R}^{n} \times \mathbb{R}^{n} \rightarrow \mathbb{R}$ and consider this initial-value problem for the Hamilton-Jacobi equation:

$$
\left\{\begin{array}{l}
u_{t}(\boldsymbol{x}, t)+H\left(\boldsymbol{x}, \nabla_{\boldsymbol{x}} u(\boldsymbol{x}, t)\right)=0 \quad\left(\boldsymbol{x} \in \mathbb{R}^{n}, 0<t<T\right) \\
u(\boldsymbol{x}, 0)=g(\boldsymbol{x})
\end{array}\right. \tag{HJ}
$$

A basic idea in PDE theory is to **introduce some ordinary differential equations**, the solution of which lets us compute the solution $u$. In particular, we want to find a curve $\boldsymbol{x}(\cdot)$ along which we can, in principle at least, compute $u(\boldsymbol{x}, t)$.

This section discusses this **method of characteristics**, to make clearer the connections between **PDE theory and the Pontryagin Maximum Principle**.

::: tip Notaion

$$
\boldsymbol{x}(t)=\left(\begin{array}{c}
x^{1}(t) \\
\vdots \\
x^{n}(t)
\end{array}\right), \boldsymbol{p}(t)=\nabla_{x} u(\boldsymbol{x}(t), t)=\left(\begin{array}{c}
p^{1}(t) \\
\vdots \\
p^{n}(t)
\end{array}\right)
$$

:::

#### Derivation of characteristic equations
We have

$$
p^{k}(t)=u_{x_{k}}(\boldsymbol{x}(t), t)
$$

and therefore

$$
\dot{p}^{k}(t)=u_{x_{k} t}(\boldsymbol{x}(t), t)+\sum_{i=1}^{n} u_{x_{k} x_{i}}(\boldsymbol{x}(t), t) \cdot \dot{x}^{i}
$$

Now suppose $u$ solves $\mathrm{(HJ)}$. We differentiate this PDE with respect to the variable $x_{k}$ :

$$
u_{t x_{k}}(x, t)=-H_{x_{k}}(x, \nabla u(x, t))-\sum_{i=1}^{n} H_{p_{i}}(x, \nabla u(x, t)) \cdot u_{x_{k} x_{i}}(x, t)
$$

Let $x=\boldsymbol{x}(t)$ and substitute above:

$$
\dot{p}^{k}(t)=-H_{x_{k}}(\boldsymbol{x}(t), \underbrace{\nabla_{x} u(\boldsymbol{x}(t), t)}_{\boldsymbol{p}(t)})+\sum_{i=1}^{n}(\dot{x}^{i}(t)-H_{p_{i}}(\boldsymbol{x}(t), \underbrace{\nabla_{x} u(x, t)}_{\boldsymbol{p}(t)}) u_{x_{k} x_{i}}(\boldsymbol{x}(t), t) .
$$

We can simplify this expression if we select $\boldsymbol{x}(\cdot)$ so that

$$
\dot{x}^{i}(t)=H_{p_{i}}(\boldsymbol{x}(t), \boldsymbol{p}(t)), \quad(1 \leq i \leq n) ;
$$

then

$$
\dot{p}^{k}(t)=-H_{x_{k}}(\boldsymbol{x}(t), \boldsymbol{p}(t)), \quad(1 \leq k \leq n).
$$

These are Hamilton's equations, already discussed in a different context in [§4.1](./4pontryagin#4-1-calculus-of-variations-hamiltonian-dynamics):

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(t)=\nabla_{p} H(\boldsymbol{x}(t), \boldsymbol{p}(t)) \\
\dot{\boldsymbol{p}}(t)=-\nabla_{x} H(\boldsymbol{x}(t), \boldsymbol{p}(t)) . \tag{H}
\end{array}\right.
$$

We next demonstrate that if we can solve $(\mathrm{H})$, then this **gives a solution** to PDE $\mathrm{(HJ)}$, satisfying the **initial conditions** $u=g$ on $t=0$. Set $p^{0}=\nabla g\left(x^{0}\right)$. We solve $\mathrm{(H)}$, with $\boldsymbol{x}(0)=x^{0}$ and $\boldsymbol{p}(0)=p^{0}$. Next, let us calculate

$$
\begin{aligned}
&\frac{\mathrm{d}}{\mathrm{d} t} u(\boldsymbol{x}(t), t) \\
=& u_{t}(\boldsymbol{x}(t), t)+\nabla_{x} u(\boldsymbol{x}(t), t) \cdot \dot{\boldsymbol{x}}(t) \\
=& -H(\underbrace{\nabla_{x} u(\boldsymbol{x}(t), t)}_{\boldsymbol{p}(t)}, \boldsymbol{x}(t))+\underbrace{\nabla_{x} u(\boldsymbol{x}(t), t)}_{\boldsymbol{p}(t)} \cdot \nabla_{p} H(\boldsymbol{x}(t), \boldsymbol{p}(t)) \\
=& -H(\boldsymbol{x}(t), \boldsymbol{p}(t))+\boldsymbol{p}(t) \cdot \nabla_{p} H(\boldsymbol{x}(t), \boldsymbol{p}(t))
\end{aligned}
$$

Note also $u(\boldsymbol{x}(0), 0)=u\left(x^{0}, 0\right)=g\left(x^{0}\right)$. Integrate, to compute $u$ along the curve $\boldsymbol{x}(\cdot)$ :

$$
u(\boldsymbol{x}(t), t)=\int_{0}^{T}-H+\nabla_{p} H \cdot \boldsymbol{p} \mathrm{d} s+g\left(x^{0}\right)
$$

This gives us the solution, once we have calculated $\boldsymbol{x}(\cdot)$ and $\boldsymbol{p}(\cdot)$.

### 5.3.2 Connections between Dynamic Programming AND The Pontryagin Maximum Principle

Return now to our usual control theory problem, with dynamics

$$
\left\{\begin{array}{l}
\dot{\boldsymbol{x}}(s)=\boldsymbol{f}(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) \quad(t \leq s \leq T) \\
\boldsymbol{x}(t)=x
\end{array}\right. \tag{ODE}
$$

and payoff

$$
P_{x, t}[\boldsymbol{\alpha}(\cdot)]=\int_{t}^{T} r(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) \mathrm{d} s+g(\boldsymbol{x}(T)). \tag{P}
$$

As above, the value function is

$$
v(x, t)=\sup _{\boldsymbol{\alpha}(\cdot)} P_{x, t}[\boldsymbol{\alpha}(\cdot)].
$$


The next theorem demonstrates that the **costate** in the Pontryagin Maximum Principle is in fact the gradient in $x$ of the value function $v$, taken along an **optimal trajectory**:

::: danger Theorem 5.3 (Costates AND Gradients)
Assume $\boldsymbol{\alpha}^{*}(\cdot), \boldsymbol{x}^{*}(\cdot)$ solve the control problem (ODE), (P).

If the value function $v$ is $C^{2}$, then the costate $\boldsymbol{p}^{*}(\cdot)$ occuring in the Maximum Principle is given by

$$
\boldsymbol{p}^{*}(s)=\nabla_{x} v\left(\boldsymbol{x}^{*}(s), s\right) \quad(t \leq s \leq T) .
$$

:::

#### Proof
1. As usual, suppress the superscript *. Define $\boldsymbol{p}(t):=\nabla_{x} v(\boldsymbol{x}(t), t)$.
We claim that $p(\cdot)$ satisfies conditions $\mathrm{(ADJ)}$ and $\mathrm{(M)}$ of the Pontryagin Maximum Principle. To confirm this assertion, look at

$$
\dot{p}^{i}(t)=\frac{\mathrm{d}}{\mathrm{d} t} v_{x_{i}}(\boldsymbol{x}(t), t)=v_{x_{i} t}(\boldsymbol{x}(t), t)+\sum_{j=1}^{n} v_{x_{i} x_{j}}(\boldsymbol{x}(t), t) \dot{x}^{j}(t).
$$

We know $v$ solves

$$
v_{t}(x, t)+\max _{a \in A}\left\{\boldsymbol{f}(x, a) \cdot \nabla_{x} v(x, t)+r(x, a)\right\}=0;
$$

and, applying the optimal control $\boldsymbol{\alpha}(\cdot)$, we find:

$$
v_{t}(\boldsymbol{x}(t), t)+\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \cdot \nabla_{x} v(\boldsymbol{x}(t), t)+r(\boldsymbol{x}(t), \boldsymbol{\alpha}(t))=0.
$$

2. Now freeze the time $t$ and define the function

$$
h(x):=v_{t}(x, t)+\boldsymbol{f}(x, \boldsymbol{\alpha}(t)) \cdot \nabla_{x} v(x, t)+r(x, \boldsymbol{\alpha}(t)) \leq 0 .
$$

Observe that $h(\boldsymbol{x}(t))=0$. Consequently $h(\cdot)$ has a maximum at the point $x=\boldsymbol{x}(t)$; and therefore for $i=1, \ldots, n$,

$$
\begin{aligned}
0=h_{x_{i}}( & \boldsymbol{x}(t))=v_{t x_{i}}(\boldsymbol{x}(t), t)+\boldsymbol{f}_{x_{i}}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \cdot \nabla_{x} v(\boldsymbol{x}(t), t) \\
& +\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \cdot \nabla_{x} v_{x_{i}}(\boldsymbol{x}(t), t)+r_{x_{i}}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)).
\end{aligned}
$$

Substitute above:

$$
\dot{p}^{i}(t)=v_{x_{i} t}+\sum_{i=1}^{n} v_{x_{i} x_{j}} f_{j}=v_{x_{i} t}+\boldsymbol{f} \cdot \nabla_{x} v_{x_{i}}=-\boldsymbol{f}_{x_{i}} \cdot \nabla_{x} v-r_{x_{i}} .
$$

Recalling that $\boldsymbol{p}(t)=\nabla_{x} v(\boldsymbol{x}(t), t)$, we deduce that

$$
\dot{\boldsymbol{p}}(t)=-\left(\nabla_{x} \boldsymbol{f}\right) \boldsymbol{p}-\nabla_{x} r .
$$

Recall also

$$
H=\boldsymbol{f} \cdot p+r, \quad \nabla_{x} H=\left(\nabla_{x} \boldsymbol{f}\right) p+\nabla_{x} r .
$$

Hence

$$
\dot{\boldsymbol{p}}(t)=-\nabla_{x} H(\boldsymbol{p}(t), \boldsymbol{x}(t)),
$$

which is $\mathrm{(ADJ)}$.
3. Now we must check condition $\mathrm{(M)}$. According to $\mathrm{(HJB)}$,

$$
v_{t}(\boldsymbol{x}(t), t)+\max _{a \in A}\{\boldsymbol{f}(\boldsymbol{x}(t), a) \cdot \underbrace{\nabla v(\boldsymbol{x}(t), t)}_{\boldsymbol{p}(t)}+r(\boldsymbol{x}(t), t)\}=0,
$$

and maximum occurs for $a=\boldsymbol{\alpha}(t)$. Hence

$$
\max _{a \in A}\{H(\boldsymbol{x}(t), \boldsymbol{p}(t), a)\}=H(\boldsymbol{x}(t), \boldsymbol{p}(t), \boldsymbol{\alpha}(t)) ;
$$

and this is assertion (M) of the Maximum Principle.  <div style="text-align: right;">$\square$</div>

#### Interpretations
The foregoing provides us with another way to look at transversality conditions:
- **Free endpoint problem**: Recall that we stated earlier in [Theorem 4.3](./4pontryagin#basic-problem) that for the free endpoint problem we have the condition

$$
\boldsymbol{p}^{*}(T)=\nabla g\left(\boldsymbol{x}^{*}(T)\right) \tag{T}
$$

for the payoff functional

$$
\int_{t}^{T} r(\boldsymbol{x}(s), \boldsymbol{\alpha}(s)) \mathrm{d} s+g(\boldsymbol{x}(T)).
$$

To understand this better, note $\boldsymbol{p}^{*}(s)=-\nabla v\left(\boldsymbol{x}^{*}(s), s\right)$. But $v(x, t)=g(x)$, and hence the foregoing implies

$$
\boldsymbol{p}^{*}(T)=\nabla_{x} v\left(\boldsymbol{x}^{*}(T), T\right)=\nabla g\left(\boldsymbol{x}^{*}(T)\right) .
$$

- **Constrained initial and target sets**:

Recall that for this problem we stated in [Theorem 4.5](./4pontryagin#4-5-maximum-principle-with-transversality-conditions) the **transversality conditions** that

$$
\left\{\begin{array}{l}
\boldsymbol{p}^{*}(0) \text { is perpendicular to } T_{0} \\
\boldsymbol{p}^{*}\left(\tau^{*}\right) \text { is perpendicular to } T_{1}
\end{array}\right.
$$

when $\tau^{*}$ denotes the first time the optimal trajectory hits the target set $X_{1}$.
Now let $v$ be the value function for this problem:

$$
v(x)=\sup _{\boldsymbol{\alpha}(\cdot)} P_{x}[\boldsymbol{\alpha}(\cdot)],
$$

with the constraint that we start at $x^{0} \in X_{0}$ and end at $x^{1} \in X_{1}$ But then $v$ will be constant on the set $X_{0}$ and also constant on $X_{1}$. Since $\nabla v$ is perpendicular to any level surface, $\nabla v$ is therefore perpendicular to both $\partial X_{0}$ and $\partial X_{1}$. And since

$$
\boldsymbol{p}^{*}(t)=\nabla v\left(\boldsymbol{x}^{*}(t)\right)
$$

this means that

$$
\left\{\begin{array}{l}
\boldsymbol{p}^{*} \text { is perpendicular to } \partial X_{0} \text { at } t=0 \\
\boldsymbol{p}^{*} \text { is perpendicular to } \partial X_{1} \text { at } t=\tau^{*}
\end{array}\right.
$$
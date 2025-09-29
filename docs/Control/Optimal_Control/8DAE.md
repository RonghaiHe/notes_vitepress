# 8 Optimal Control with Differential-Algebraic Equations

So far we have regarded optimal control problems based on model dynamics in their simplest explicit-ODE form:

$$
\dot{\boldsymbol{x}}(t)=\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) .
$$

This form of model for dynamic systems tend to arise naturally from the first-principle modelling approaches standardly taught and used by engineers. As a result, most continuous dynamic systems are described via explicit ODEs. It is a common but less widespread knowledge that for a large number of applications, building a dynamic model in the form of explicit ODEs can be significantly more **involved** and yield dramatically more **complex** model equations than via alternative model forms. Before laying down some theory, let us start with a simple illustrative example that we will use throughout this chapter.

## Example 8.1
Consider a mass $m$ attached to a fixed point via a rigid link of length $L$ for which one wants to develop a dynamic model. A classic modelling approach is to describe the mass via two angles (azimuth and elevation of the mass), which yields an explicit ODE. The alternative model construction we will consider here describes the system via the cartesian coordinates $\boldsymbol{p} \in \mathbb{R}^{3}$ of the mass in a fixed, inertial reference frame $E$ positioned at the attachment point of the mass, see [Figure 8.1](#fig-81).

<img src="/control_om8_1_1_example1.JPG" id="fig-81" alt="example1" width="50%" align="center">

Figure 8.1: Illustration of the example considered in this chapter. The system is described via the cartesian position of the mass $\boldsymbol{p} \in \mathbb{R}^{3}$ in the fixed frame $E$. The mass is subject to the gravity force $-m g \boldsymbol{E}_{3}$ and to a force $-z \boldsymbol{p}$ from the rod, which ensures that the mass remains at a distance $L$ from its attachment point. Here the scalar $z$ is a variable in the dynamics that scales this force adequately.

The rod maintains the mass at a distance $L$ of its attachment point by applying a force on the mass along its axis, i.e. having the support vector $\boldsymbol{p}$. We will then describe the force of the $\operatorname{rod}$ as $F_{\text {rod }}=-z \boldsymbol{p}$, where $z \in \mathbb{R}$ is a variable that adjusts the force magnitude to maintain the mass on a sphere of radius $L$, i.e. such that the condition $\boldsymbol{p}^{\top} \boldsymbol{p}-L^{2}=0$ holds at all time. The model of the system can then takes a very simple form:

$$
m \ddot{\boldsymbol{p}}=\alpha-z \boldsymbol{p}+m g \boldsymbol{E}_{3}, \quad \frac{1}{2}\left(\boldsymbol{p}^{\top} \boldsymbol{p}-L^{2}\right)=0 . \tag{8.1}
$$

where $\boldsymbol{E}_{3}^{\top}=\left[\begin{array}{lll}0 & 0 & 1\end{array}\right]$. One can readily observe here that the model equation $(8.1)$ is not a simple explicit ODE. Indeed, while the scalar variable $z$ is intrinsically part of the model, its time derivative does not appear in the model equation. Hence, variable $z$ is of a different nature than variable $p$. A variable that is intrinsic to the model equation (i.e. excluding possibly time-varying parameters and inputs) but that is not time differentiated in the model equation is labelled an **algebraic state**. A differential equation holding such variables is called a **Differential Algebraic Equation** (`DAE`).

Following up on this example, we will now provide a more formal view on the concept of Differential-Algebraic Equations.

## 8.1 What are DAEs ?

Let us consider a differential equation in a very generic form:

$$
\boldsymbol{f}(\dot{\boldsymbol{x}}(t), \boldsymbol{x}(t), \boldsymbol{\alpha}(t))=0 . \tag{8.2}
$$

Such a differential equation is labelled **implicit** as the state derivative $\dot{x}(t)$ is not provided via an explicit function of the state $\boldsymbol{x}(t)$ and input $\boldsymbol{\alpha}(t)$, but implicitly as the solution of $(8.2)$. 

The Implicit Function Theorem guarantees that $\dot{\boldsymbol{x}}(t)$ can be seen as a locally unique and continuously differentiable function of $\boldsymbol{x}(t)$ and $\boldsymbol{\alpha}(t)$ if the Jacobian of $f$ with respect to $\dot{\boldsymbol{x}}(t)$, i.e. $\frac{\partial f}{\partial \dot{\boldsymbol{x}}}$, is **full rank**. Under this condition, one is guaranteed that for a given state $\boldsymbol{x}(t)$ and input $\boldsymbol{\alpha}(t)$, the state time derivative $\dot{\boldsymbol{x}}(t)$ can be computed, either explicitly or numerically e.g. via a Newton iteration. Then $(8.2)$ is an **Ordinary Differential Equation**, since $\dot{\boldsymbol{x}}(t)$ can be computed at every time instant, and the model can in principle be treated as a classic explicit ODE.

Formally, Differential-Algebraic Equations are equations in the form $(8.2)$ for which the above **rank condition fails**. Let us formalise that in the following definition.

::: warning Definition DAE
$\boldsymbol{f}(\dot{\boldsymbol{x}}(t), \boldsymbol{x}(t), \boldsymbol{\alpha}(t))=0$ is a **DAE** if $\frac{\partial \boldsymbol{f}}{\partial \dot{\boldsymbol{x}}}$ is **rank deficient**.
:::

It is admittedly not straightforward to relate Definition above to the earlier [example $(8.1)$](#example-8-1). Before making this relationship clear, let us illustrate Definition above on a simple example.

### Example 8.2
Let us consider the following implicit differential equation, having the form $(8.2)$:

$$
f(\dot{x}, x, \alpha)=\left[\begin{array}{c}
x_{1}-\dot{x}_{1}+1 \\
\dot{x}_{1} x_{2}+2 \alpha
\end{array}\right]=0, \tag{8.3}
$$

then the Jacobian of $f$ with respect to the state derivatives $\dot{x}$ reads as:

$$
\frac{\partial f}{\partial \dot{x}}=\left[\begin{array}{cc}
-1 & 0 \\
x_{2} & 0
\end{array}\right]
$$

and is rank-deficient, entailing that $(8.3)$ is, by Definition above, a DAE.

Alternatively, one can also simply observe that $\dot{x}_{2}$ does not appear time-differentiated in $(8.3)$, such that one can assess by simple inspection that it is a DAE. 

In order to gain some further intuition in this example, consider solving the first equation in $(8.3)$ for $\dot{x}_{1}$, giving

$$
\dot{x}_{1}=x_{1}+1
$$

Upon inserting the expression for $\dot{x}_{1}$ in the second equation, one can then write $(8.3)$ as

$$
\begin{aligned}
\dot{x}_{1} & =x_{1}+1, \\
0 & =\left(x_{1}+1\right) x_{2}+2 .
\end{aligned}
$$

We observe here that the second equation is in fact purely algebraic, such that the model can be written as a mixture of an explicit differential equation and of an algebraic equation. This form of DAE is actually the most commonly used in practice. It is referred to as a **semi-explicit DAE**.

The above example can mislead one to believe that DAEs are fairly simple objects. To dispel that impression, let us provide a simple example of a DAE that possess fairly exotic properties.

### Example 8.3
Let us consider the following differential equation

$$
\begin{aligned}
\dot{x}_{1}+x_{1}-\alpha & =0, \\
\left(x_{1}-x_{2}\right) \dot{x}_{2}+x_{1}-x_{2} & =0,
\end{aligned}
$$

having the Jacobian

$$
\frac{\partial f}{\partial \dot{x}}=\left[\begin{array}{cc}
1 & 0 \\
0 & x_{1}-x_{2}
\end{array}\right]
$$

which is rank-deficient for $x_{1}=x_{2}$. Hence for the initial conditions:

$$
x_{1}(0)=x_{2}(0)
$$

our equation is a DAE and its solution obeys:

$$
\begin{aligned}
\dot{x}_{1} & =\alpha-x_{1} \\
0 & =x_{2}-x_{1}
\end{aligned}
$$

otherwise it is an ODE. The fact that some differential equation can switch between being DAEs and ODEs betrays the fact that DAEs are not necessarily simple to handle and analyse. However, in the context of numerical optimal control, simple DAEs are typically favoured.

### About DAE

As observed before, DAEs often simply arise from the fact that some states in the state vector $x$ **do not appear time-differentiated in the model equations**, yielding a column of zeros in the Jacobian $\frac{\partial f}{\partial \dot{x}}$, as e.g. in [example (8.2)](#example-8-2). In such a case, it is very useful to make an explicit distinction in the implicit differential equation (8.2) between the **differential variables**, i.e. the variables whose time derivative appear in $f$, typically labelled $x$, and the algebraic variables, i.e. the variables whose time derivative do not appear in $f$, typically labelled $z$. One can then rewrite (8.2) as:

$$
\boldsymbol{f}(\dot{\boldsymbol{x}}, \boldsymbol{z}, \boldsymbol{x}, \boldsymbol{\alpha})=0. \tag{8.4}
$$

A DAE in the form $(8.4)$ is called a fully-implicit DAE. The application of definition of DAE to $(8.4)$ must then be understood in the sense that

$$
\operatorname{det}\left(\begin{array}{cc}
\frac{\partial f}{\partial \dot{x}} & \frac{\partial f}{\partial \dot{z}}
\end{array}\right)=\operatorname{det}\left(\begin{array}{cc}
\frac{\partial f}{\partial \dot{x}} & 0
\end{array}\right)=0 \tag{8.5}
$$

is always rank deficient. The differential equation $(8.4)$ is therefore always a DAE.

As mentioned in [example 8.2](#example-8-2), a common form of DAE often used in practice is the so-called **semi-explicit** form. It consists in explicitly splitting the DAE between an explicit differential equation and an implicit algebraic one. It reads as:

$$
\begin{aligned}
& \dot{x}=f(x, z, \alpha), \\
& 0=g(x, z, \alpha) .
\end{aligned}
$$

The semi-explicit form is the most commonly used form of DAEs in optimal control. We turn next to a very important notion in the world of Differential-Algebraic Equations, both in theory and in practice.

## 8.2 Differential Index of DAEs

Before introducing the notion of differential index for DAE, it will be useful to take a brief and early tour into the problem of solving DAEs. Consider the semi-explicit DAE:

$$
\begin{align*}
& \dot{x}=f(x, z, \alpha), \tag{8.6a}\\
& 0=g(x, z, \alpha),\tag{8.6b}
\end{align*}
$$

and suppose that one can construct (possibly via a numerical algorithm such as a Newton iteration) a function $\xi(x, \alpha)$ such that:

$$
g(x, \xi(x, \alpha), \alpha)=0, \quad \forall x, \alpha
$$

That is, function $\xi(x, \alpha)$ delivers the algebraic state $z$ for any differential state $x$ and input $\alpha$. One can then proceed with eliminating the algebraic state $z$ in $(8.6)$, such that the DAE reads as:

$$
\begin{align*}
\dot{x} & =f(x, \xi(x, \alpha), \alpha), \tag{8.7a}\\
z & =\xi(x, \alpha) .\tag{8.7b}
\end{align*}
$$

One can observe that $(8.7a)$ is then an explicit ODE, and can therefore be handled via any classical numerical integration method. Moreover, $(8.7b)$ provides the algebraic states explicitly. When such an elimination of the algebraic states is possible, one can consider the DAE $(8.6)$ as "easy" to solve. 

It is then natural to ask when such an elimination is possible. The Implicit Function Theorem (IFT) provides here a straightforward answer, namely the function $\xi(x, \alpha)$ **exists** (locally) if the Jacobian

$$
\frac{\partial}{\partial z} g(x, z, \alpha) \tag{8.8}
$$

is **full rank** along the trajectories $x, \alpha, z$ of the system. The full-rankness of the Jacobian $(8.8)$ additionally guarantees that the Newton iteration:

$$
z \leftarrow z-\frac{\partial g(x, z, \alpha)}{\partial z}^{-1} g(x, z, \alpha) \tag{8.9}
$$

converges locally to the solution $z$ of $(8.6b)$. In that sense, $(8.9)$ can be seen as a numerical procedure for constructing the implicit function $\xi(x, \alpha)$.

These notions easily extend to fully-implicit DAEs in the distinct form $(8.4)$. More specifically, suppose that there exists two functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$ that satisfy the fully implicit DAE $(8.4)$, i.e.

$$
f\left(\xi_{\dot{x}}(x, \alpha), \xi_{z}(x, \alpha), x, \alpha\right)=0, \quad \forall x, \alpha
$$

Then one can rewrite $(8.4)$ as:

$$
\begin{align*}
\dot{x} & =\xi_{\dot{x}}(x, \alpha)\tag{8.10a} \\
z & =\xi_{z}(x, \alpha). \tag{8.10b}
\end{align*}
$$

Similarly to $(8.7)$, one can treat $(8.10a)$ as a simple ODE, while $(8.10b)$ delivers the algebraic states $z$ explicitly. The existence of functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$ can then again be guaranteed by invoking the IFT, namely if for $(8.4)$ the Jacobian matrix

$$
\left[\begin{array}{ll}
\frac{\partial f}{\partial \dot{x}} & \frac{\partial f}{\partial z}
\end{array}\right] \tag{8.11}
$$

is **full rank**, then functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$ **exist** locally. The attentive reader will want to observe the important distinction between $(8.5)$ which always hold for $(8.4)$, and $(8.11)$ whose full-rankness guarantees the local existence of the implicit functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$.

Let us consider two examples to illustrate these notions.

### Example 8.4
Consider again the fully-implicit DAE of [Example 8.2](#example-8-2), i.e.:

$$
f(\dot{x}, z, x, \alpha)=\left[\begin{array}{c}
x-\dot{x}+1 \\
\dot{x} z+2
\end{array}\right]=0
$$

We observe that

$$
\left[\begin{array}{ll}
\frac{\partial f}{\partial \dot{x}} & \frac{\partial f}{\partial z}
\end{array}\right]=\left[\begin{array}{rr}
-1 & 0 \\
z & \dot{x}
\end{array}\right]
$$

is **full rank** whenever $\dot{x} \neq 0$, such that the implicit functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$ are guaranteed to exist when $\dot{x} \neq 0$. In this simple case, they can actually be computed explicitly. Indeed, we observe that:

$$
\dot{x}=\xi_{\dot{x}}(x, \alpha)=x+1, \quad z=\xi_{z}(x, \alpha)=-\frac{2}{x+1}
$$

solve $f(\dot{x}, z, x, \alpha)$ whenever $\dot{x}=x+1 \neq 0$.

This simple example needs to be pitted against a more problematic one.

### Example 8.5
Consider the fully-implicit DAE:

$$
\boldsymbol{f}(\dot{\boldsymbol{x}}, z, \boldsymbol{x}, \alpha)=\left[\begin{array}{c}
\dot{x}_{1}-z \\
\dot{x}_{2}-x_{1} \\
x_{2}-\alpha
\end{array}\right]=0
$$

We observe that:

$$
\left[\begin{array}{ll}
\frac{\partial \boldsymbol{f}}{\partial \dot{\boldsymbol{x}}} & \frac{\partial \boldsymbol{f}}{\partial z}
\end{array}\right]=\left[\begin{array}{ccc}
1 & 0 & -1 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{array}\right]
$$

is **always rank-deficient**, such that the differential state $\dot{\boldsymbol{x}}$ and algebraic state $z$ cannot be uniquely obtained (even numerically) from solving $f(\dot{\boldsymbol{x}}, z, \boldsymbol{x}, \alpha)=0$ alone.

### differential index
The topic of this section is the notion of differential index of DAEs. As we will see next, the loose idea of "easy" DAEs presented above is directly related to it. Let us introduce now the notion of differential index for DAEs.

::: warning Definition: differential index of a DAE
The differential index of a DAE is **the number of times** it must be time-differentiated before an explicit ODE is obtained.
:::

For the specific case of a semi-explicit DAE, the above definition also reads as follows.

::: warning Definition: differential index of the semi-explicit DAE
The differential index of the semi-explicit DAE $(8.6)$ is the number of times its **algebraic part** $(8.6b)$ must be time-differentiated before an explicit ODE is obtained.
:::

In order to clarify these definitions, let us make a simple example.

### Example 8.5
Let us calculate the differential index of the DAE proposed in [Example 8.2](#example-8-2), i.e.:

$$
f(\dot{x}, z, x)=\left[\begin{array}{c}
x-\dot{x}+1 \\
\dot{x} z+2
\end{array}\right]=0
$$

We then consider the time derivative of $f$, i.e.:

$$
\dot{f}(\ddot{x}, \dot{x}, x, \dot{z}, z)=\left[\begin{array}{c}
\dot{x}-\ddot{x} \\
\ddot{x} z+\dot{x} \dot{z}
\end{array}\right]=0 . \tag{8.12}
$$

For the sake of clarity, we label $\boldsymbol{v}=\left[\begin{array}{c}x \\ z \\ \dot{x}\end{array}\right]$ and rewrite (8.12) in the equivalent form:

$$
\boldsymbol{\zeta}(\dot{\boldsymbol{v}}, \boldsymbol{v})=\left[\begin{array}{c}
\dot{v}_{1}-v_{3} \\
v_{3}-\dot{v}_{3} \\
\dot{v}_{3} v_{2}+v_{3} \dot{v}_{2}
\end{array}\right]=0
$$

The Jacobian

$$
\frac{\partial \boldsymbol{\zeta}(\dot{v}, v)}{\partial \dot{v}}=\left[\begin{array}{ccc}
1 & 0 & 0 \\
0 & 0 & -1 \\
0 & v_{3} & v_{2}
\end{array}\right]
$$

is then **full rank**, such that $\boldsymbol{\zeta}$ is an ODE for $\boldsymbol{v}$ according to Definition of DAE. Since a single time-differentiation has converted the original DAE of this example into an ODE, we can conclude that the original DAE is of index $1$.

Let us contrast this example with a DAE having a higher differential index.

### Example 8.6
Let us calculate the differential index of our illustrative [example $(8.1)$](#example-8-1). Using $v=\dot{p}$, and defining the differential state vector

$$
x=\left[\begin{array}{l}
p \\
v
\end{array}\right]
$$

one can easily verify that the DAE $(8.1)$ can be written as a semi-explicit DAE:

$$
\begin{align*}
\dot{p} & =v, \tag{8.13a}\\
\dot{v} & =m^{-1} \alpha-m^{-1} z p+g E_{3}, \tag{8.13b}\\
0 & =\underbrace{\frac{1}{2}\left(p^{\top} p-L^{2}\right)}_{=g(x, z, \alpha)} .\tag{8.13c}
\end{align*}
$$

We observe that for a given $z$, $(8.13a)-(8.13b)$ are already ODEs in $v$ and $p$. As per Definition of differential index of semi-explicit DAE, we need to differentiate the algebraic equation $(8.13c)$ until $(8.13)$ becomes an ODE. The two first time derivatives read as:

$$
\dot{g}(x, z, \alpha)=p^{\top} v=0, \quad \text { and } \quad \ddot{g}(\dot{x}, x, z, \alpha)=p^{\top} \dot{v}+v^{\top} v=0
$$

One can then use $(8.13b)$ in $\ddot{g}(\dot{x}, x, z, \alpha)$ to obtain

$$
\ddot{g}(\dot{x}, x, z, \alpha)=p^{\top}\left(\alpha-m^{-1} z p+g E_{3}\right)+v^{\top} v=0
$$

As $z$ now appears **explicitly** in $\ddot{g}(\dot{x}, x, z, \alpha)$, an extra time-differentiation yields a differential equation from which $\dot{z}$ can be computed if $p^{\top} p \neq 0$. We observe that $3$ time-differentiations of $(8.13c)$ were necessary to turn $(8.13)$ into an ODE. It follows that $(8.13)$ is an index-$3$ DAE.

### index $1$ DAE
Now we ought to relate the notion of "easy" DAEs to the notion of differential index. More specifically, we shall see next that index-1 DAEs are "easy" DAEs in the sense detailed previously. This observation can be formally described in the following Lemma.

::: tip Lemma
For any fully-implicit index-$1$ DAE

$$
f(\dot{x}, z, x, \alpha)=0
$$

there exists implicit functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$ that satisfy:

$$
f\left(\xi_{\dot{x}}(x, \alpha), \xi_{z}(x, \alpha), x, \alpha\right)=0, \quad \forall x, \alpha .
$$

:::

Proof: We observe that if $f$ is of index 1 , then a single time-differentiation:

$$
\dot{f}=\frac{\partial f}{\partial \dot{x}} \ddot{x}+\frac{\partial f}{\partial z} \dot{z}+\frac{\partial f}{\partial x} \dot{x}+\frac{\partial f}{\partial \alpha} \dot{\alpha}=0
$$

yields a pure ODE. For the sake of clarity, we label $v=\left[\begin{array}{c}\dot{x} \\ z\end{array}\right]$ and write:

$$
\dot{f}=\left[\begin{array}{ll}
\frac{\partial f}{\partial \dot{x}} & \frac{\partial f}{\partial z}
\end{array}\right] \dot{v}+\frac{\partial f}{\partial x} \dot{x}+\frac{\partial f}{\partial \alpha} \dot{\alpha}=0 . \tag{8.14}
$$

By assumption, $(8.14)$ can be written as an explicit ODE, hence $\left[\begin{array}{ll}\frac{\partial f}{\partial \dot{x}} & \frac{\partial f}{\partial z}\end{array}\right]$ must be full rank, such that:

$$
\dot{v}=-\left[\begin{array}{ll}
\frac{\partial f}{\partial \dot{x}} & \frac{\partial f}{\partial z}
\end{array}\right]^{-1}\left(\frac{\partial f}{\partial x} \dot{x}+\frac{\partial f}{\partial \alpha} \dot{\alpha}\right)
$$

holds on the DAE trajectories. The IFT then guarantees the existence of the implicit functions $\xi_{\dot{x}}(x, \alpha)$ and $\xi_{z}(x, \alpha)$ in a neighborhood of the trajectories of the DAE.  <div style="text-align: right;">$\square$</div>

A similar result can clearly be established for any index-$1$ semi-explicit DAEs on the existence of an implicit function $\xi_{z}(x, \alpha)$ that solves the algebraic equation, i.e. such that

$$
g\left(x, \xi_{z}(x, \alpha), \alpha\right)=0, \quad \forall x, \alpha
$$

The crucial practical consequence of these observations is that index-$1$ DAEs can be in principle solved numerically (or sometimes even explicitly) without difficulties, as for any state and input $x(t)$ and $\boldsymbol{\alpha}(t)$, the state derivative $\dot{x}(t)$ and algebraic state $z(t)$ can be computed, and the simulation of the dynamics performed. In practice, implicit integration methods are the most efficient approach to perform the simulations of index-$1$ DAEs, while DAEs of index higher than $1$ require specially-tailored integrators.

A non-trivial but important point needs to be stressed here. DAEs of index higher than $1$ , often labelled **high-index DAEs**, present a pitfall to uninformed users of numerical methods. Indeed, one deploying a classical implicit integration method on a high-index DAE may observe that the implicit integration method converges reliably and be mislead into believing that simulations of the DAE model can be reliably computed. In order to clarify this issue, let us consider the following example, based on a linear, high-index DAE.

### Example 8.7
In this example, we are interested to observe the result of "naively" deploying a classical implicit integration scheme on a high-index DAE. We consider again the fully-implicit DAE of [Example 8.5](#example-8-5), i.e.

$$
f(\dot{x}, z, x, \alpha)=\left[\begin{array}{c}
\dot{x}_{1}-z \\
\dot{x}_{2}-x_{1} \\
x_{2}-\alpha
\end{array}\right] \tag{8.15}
$$

The reader can easily verify that $(8.15)$ is not an index-$1$ DAE. We observe that we can rewrite $(8.15)$ in the linear form $E \dot{v}=A v+B \alpha$, where

$$
\boldsymbol{v}=\left[\begin{array}{l}
x \\
z
\end{array}\right], \quad E=\left[\begin{array}{lll}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{array}\right], \quad A=\left[\begin{array}{ccc}
0 & 0 & 1 \\
1 & 0 & 0 \\
0 & -1 & 0
\end{array}\right], \quad \boldsymbol{B}=\left[\begin{array}{l}
0 \\
0 \\
1
\end{array}\right] .
$$

We are interested now in naively deploying an implicit Euler scheme of step length $h$ on this DAE, yielding the steps:

$$
\frac{1}{h} E\left(\boldsymbol{v}_{+}-\boldsymbol{v}(t)\right)=A \boldsymbol{v}_{+}+\boldsymbol{B} \boldsymbol{\alpha}(t+h)
$$

where $\boldsymbol{v}_{+}$is an approximation of the state at time $\boldsymbol{v}(t+h)$, i.e. $\boldsymbol{v}_{+} \approx \boldsymbol{v}(t+h)$. It can be verified that the true trajectories $\boldsymbol{v}(t+h)$ satisfy:

$$
E\left[\frac{1}{h}(\boldsymbol{v}(t+h)-\boldsymbol{v}(t))+\frac{h}{2} \ddot{x}(\tau)\right]=A \boldsymbol{v}(t+h)+\boldsymbol{B} \boldsymbol{\alpha}(t+h)
$$

for some $\tau \in[t, t+h]$. We can then consider the one-step integration error $\boldsymbol{e}_{+}=\boldsymbol{v}_{+}-\boldsymbol{v}(t+h)$ given by:

$$
\boldsymbol{e}_{+}=\frac{\boldsymbol{h}^{2}}{2}(E-A \boldsymbol{h})^{-1} E \ddot{\boldsymbol{x}}(\tau) .
$$

For DAE $(8.15)$, matrix $\frac{h^{2}}{2}(E-A h)^{-1} E$ reads as:

$$
\frac{h^{2}}{2}(E-A h)^{-1} E=\frac{1}{2}\left[\begin{array}{lll}
0 & h & 0 \\
0 & 0 & 0 \\
h & 1 & 0
\end{array}\right],
$$

such that the integration error is of order $\mathcal{O}(1)$, i.e. much worse than the integration error expected from the implicit Euler method, which is of order $\mathcal{O}\left(h^{2}\right)$.

This simple example reveals that, even though a classic implicit integration scheme deployed on high-index DAEs $(8.15)$ can in some cases reliably deliver state trajectories, their **lousy numerical accuracy** typically makes them actually meaningless as simulations of the DAE model. The difficulty with DAE $(8.15)$ stems from its index larger than 1 . These observations must be taken as a warning that while one can sometimes deploy a classical implicit integration scheme on a high-index DAE without observing notable numerical difficulties, the resulting trajectories are typically nonetheless senseless. Hence, good practice in numerical optimization dictates that the index of a DAE ought to be **systematically checked** before tackling it via classical integration methods.

Because index-$1$ DAEs are significantly easier to treat than high-index DAEs, it is common in numerical optimal control to avoid DAEs of index larger than $1$. Unfortunately, the index of a DAE stems from the nature of the physical system it **models** and cannot be decided. However, a treatment of high-index DAEs generally allows one to ultimately treat them as index-$1$ DAEs. We will cover this question next.

## 8.3 Index reduction

As detailed in the previous Section, index-$1$ DAEs are simpler to treat numerically than high-index DAEs, as index-$1$ DAEs can be approached using standard implicit integration methods. This observation motivates the deployment of procedures for reducing the index of an arbitrary high-index DAE into an index-$1$ DAE, a procedure labelled **index reduction**. Index-reduction proceeds very similarly to the procedure leading to assess the index of a DAE, i.e. via time-differentiation of the DAE (or of some parts of the DAE) until a DAE of index $1$ is obtained. In order to explain this further, let us detail it on our illustrative [example $(8.1)$](#example-8-1).

### Example 8.8
We consider again the semi-explicit DAE $(8.13)$, i.e.

$$
\begin{align*}
\dot{\boldsymbol{p}} & =\boldsymbol{v}, \tag{8.16a}\\
\dot{\boldsymbol{v}} & =\alpha-m^{-1} z \boldsymbol{p}+g \boldsymbol{E}_{3}, \tag{8.16b}\\
0 & =\underbrace{\frac{1}{2}\left(\boldsymbol{p}^{\top} \boldsymbol{p}-L^{2}\right)}_{=g(x, z, \alpha)},\tag{8.16c}
\end{align*}
$$

which is in a semi-explicit form. Similarly to the index evaluation presented in [Example 8.6](#example-8-6), i.e. we consider the time-derivatives of the algebraic equation (8.16c)

$$
\dot{g}(x, z, \alpha)=p^{\top} v=0, \quad \text { and } \quad \ddot{g}(\dot{x}, x, z, \alpha)=p^{\top} \dot{v}+v^{\top} v=0
$$

One can then easily verify that the new DAE:

$$
\begin{align*}
\dot{\boldsymbol{p}} & =\boldsymbol{v}, \tag{8.17a}\\
m \dot{\boldsymbol{v}} & =\alpha-z \boldsymbol{p}+m g \boldsymbol{E}_{3}, \tag{8.17b}\\
0 & =\underbrace{\boldsymbol{p}^{\top} \dot{\boldsymbol{v}}+\boldsymbol{v}^{\top} \boldsymbol{v}}_{=\ddot{g}(\dot{x}, x, z, \alpha)},\tag{8.17c}
\end{align*}
$$

is of index $1$. Alternatively, it is useful to put $(8.17)$ in a more implicit form:

$$
\begin{align*}
\dot{\boldsymbol{p}} & =\boldsymbol{v}, \tag{8.18a}\\
{\left[\begin{array}{ll}
m & \boldsymbol{p} \\
\boldsymbol{p}^{\top} & 0
\end{array}\right]\left[\begin{array}{l}
\dot{\boldsymbol{v}} \\
\boldsymbol{z}
\end{array}\right] } & =\left[\begin{array}{c}
\alpha+m g \boldsymbol{E}_{3} \\
-\boldsymbol{v}^{\top} \boldsymbol{v}
\end{array}\right],\tag{8.18b}
\end{align*}
$$

which shows unambiguously that the state derivatives $\dot{\boldsymbol{v}}$ and $\dot{\boldsymbol{p}}$ as well as the algebraic state $z$ can be computed for any state $\boldsymbol{v}, \boldsymbol{p}$ and input $\alpha$ as long as $\boldsymbol{p} \neq 0$. This observation tells us without further investigation that (8.18) is an "easy" DAE, i.e. of index $1$.

Index-reduction procedures can be fairly intricate to deploy on very **complex models**. For the sake of completeness, let us report here a recipe for performing the index-reduction on any semi-explicit DAE:

$$
\begin{aligned}
& \dot{x}=f(x, z, \alpha) \\
& 0=g(x, z, \alpha)
\end{aligned}
$$

1. Check if the DAE system is index $1$ (i.e. $\frac{\partial g}{\partial z}$ full rank). If yes, stop.
2. Identify a subset of algebraic equations that can be solved for a subset of algebraic variables.
3. Perform a time-differentiation on the remaining algebraic equations that contain (some of) the differential variables $x$. Terms $\dot{x}$ will appear in these differentiated equations.
4. Substitute the $\dot{x}$ with their corresponding symbolic expressions $f(x, z, \alpha)$. This generates new algebraic equations.
5. With this new DAE system, go to step 1.

Our discussion on index reduction would not complete if we omit the question of consistency conditions. To understand this issue, consider the indexreduced DAE developed in [Example 8.8](#example-8-8), which takes the form:

$$
\begin{align*}
\dot{x} & =f(x, z, \alpha) \tag{8.19a}\\
0 & =\ddot{g}(\dot{x}, x, z, \alpha)\tag{8.19b}
\end{align*}
$$

One needs to observe here that while a solution to the original DAE $(8.16)$ in the form

$$
\begin{align*}
& \dot{x}=f(x, z, \alpha) \tag{8.20a}\\
& 0=g(x, z, \alpha)\tag{8.20b}
\end{align*}
$$

is obviously also a solution for the index-reduced DAE (8.19), **the converse is not necessarily true**, i.e. a solution of the index-reduced DAE $(8.19)$ is not necessarily a solution to the original DAE $(8.20)$. To understand this statement, one simply ought to imagine a trajectory that is solution of $(8.19a)$, and for which

$$
g(x(t), z(t), \boldsymbol{\alpha}(t))=g(x(0), z(0), \boldsymbol{\alpha}(0))+t \dot{g}(x(0), z(0), \boldsymbol{\alpha}(0))=0 \tag{8.21}
$$

holds. This trajectory clearly satisfies $(8.19b)$ but not $(8.20b)$. Equation $(8.21) $additionally reveals that the issue is not related the DAEs themselves, but rather to the **initial conditions** chosen for the simulation of the DAEs. Indeed, simply selecting the initial conditions $x(0)$ such that

$$
g(x(0), z(0), \boldsymbol{\alpha}(0))=0, \quad \text { and } \quad \dot{g}(x(0), z(0), \boldsymbol{\alpha}(0))=0 \tag{8.22}
$$

ensures that the trajectories of the index-reduced DAE are solution of the original one. More generally, enforcing

$$
g\left(x\left(t_{0}\right), z\left(t_{0}\right), \alpha\left(t_{0}\right)\right)=0, \quad \text { and } \quad \dot{g}\left(x\left(t_{0}\right), z\left(t_{0}\right), \alpha\left(t_{0}\right)\right) \tag{8.23}
$$

at any time $t_{0}$ on the trajectory guarantees a simulation run with the indexreduced DAE is a valid simulation of the original DAE. Conditions that guarantees the validity of the simulation performed on the index-reduced DAE, such as $(8.23)$, are labelled **consistency conditions**.

In the context of optimal control based on an index-reduced DAE, **consistency conditions** are crucial when the trajectories of the differential states of system do not have (fully) prescribed initial or terminal values. In such a case, the consistency conditions must be adequately enforced within the optimal control problem. E.g. an optimal control problem involving our index-reduced DAE $(8.18)$ having free initial or terminal states can e.g. be written as:

$$
\begin{align*}
\underset{\boldsymbol{v}, \boldsymbol{p}, z, \alpha}{\operatorname{min}} \quad & \int_{0}^{T} g(\boldsymbol{v}, \boldsymbol{p}, z, \alpha) \mathrm{d} t &&&&\\
\text { subject to } \quad & \dot{\boldsymbol{p}}=\boldsymbol{v} && \text { (Differential equ.), }\\
&m \dot{\boldsymbol{v}} =\alpha-z \boldsymbol{p}+m g \boldsymbol{E}_{3} && \text { (Differential equ.), } \\
&0 =\boldsymbol{p}^{\top} \dot{\boldsymbol{v}}+\boldsymbol{v}^{\top} \boldsymbol{v} &&  \text{(Algebratic equ.), }\\
&0 =\boldsymbol{p}\left(t_{0}\right)^{\top} \boldsymbol{v}\left(t_{0}\right) & & \text { (Consistency cond.), } \\
&0 =\boldsymbol{p}\left(t_{0}\right)^{\top} \dot{\boldsymbol{v}}\left(t_{0}\right)+\boldsymbol{v}\left(t_{0}\right)^{\top} \boldsymbol{v}\left(t_{0}\right) && \text { (Consistency cond.) }
\end{align*} \tag{8.24}
$$

for any $t_{0} \in[0, T]$.

It ought to be underlined here that imposing **some constraints** on the initial and/or terminal state trajectories in conjunction with imposing the consistency conditions must be done with great care in order to avoid generating a redundant set of constraints in the OCP. As a trivial example of this difficulty, imposing e.g. the initial states in $(8.24)$ in addition to the consistency conditions with $t_{0}=0$ would clearly **over-constrain** the initial state values $\boldsymbol{p}(0), \boldsymbol{v}(0)$. This issue can become significantly more involved in less obvious scenarios, such as e.g. in periodic OCPs, where the initial and terminal states are free but must satisfy a periodicity constraint of the form $x(0)=x(T)$. Handling the consistency conditions and the periodicity constraints together in the OCP without generating an over-constrained problem can then become fairly involved.

The consistency conditions can in principle be enforced at any time $t_{0}$ in the time span considered by the OCP. However, in some cases the selection of the time $t_{0}$ for imposing the consistency condition is not arbitrary. Indeed, one ought to observe that the combination of the index-reduced algebraic constraint and of the consistency conditions, i.e.

$$
\begin{align*}
\ddot{g}(x(t), z(t), \boldsymbol{\alpha}(t)) & =0 \tag{8.25}\\
\dot{g}\left(x\left(t_{0}\right), z\left(t_{0}\right), \alpha\left(t_{0}\right)\right) & =0 \tag{8.26}\\
g\left(x\left(t_{0}\right), z\left(t_{0}\right), \alpha\left(t_{0}\right)\right) & =0\tag{8.27}
\end{align*}
$$

ensure mathematically that

$$
g(x(t), z(t), \boldsymbol{\alpha}(t))=g\left(x\left(t_{0}\right), z\left(t_{0}\right), \alpha\left(t_{0}\right)\right)+\left(t-t_{0}\right) \dot{g}\left(x\left(t_{0}\right), z\left(t_{0}\right), \alpha\left(t_{0}\right)\right)=0
$$

holds at any time $t$. However, when the DAE dynamics are handled via numerical integration, **numerical errors tend to accumulate over time** such that $g(x(t), z(t), \boldsymbol{\alpha}(t))=0$ can be less accurately enforced at times that are distant from $t_{0}$. From this observation one ought to conclude that if the solution to an OCP is e.g. **more important at the beginning** of the time span the OCP covers, say $[0, T]$, then the **consistency conditions** ought to be **enforced in the beginning** of the time span, i.e. $t_{0}=0$. This situation occurs in Nonlinear Model Predictive Control (NMPC), where the first control input $q_{0}$ delivered by the OCP provides the control input to be deployed on the real system, such that the accuracy of the solution in the beginning of the time interval it covers is the more important than later in the horizon.

Conversely, if the OCP implements a Moving Horizon Estimation (MHE) scheme, then the differential state obtained at the very end of the time span covered by the OCP delivers a state estimation to e.g. an NMPC scheme. In such a case, the accuracy is **most important at the very end of the time interval**, such that the consistency conditions are best imposed at $t_{0}=T$.

## 8.4 Direct Methods with Differential-Algebraic Equations

We will now turn to discussing the deployment of direct optimal control methods on OCPs involving DAEs. For the reasons detailed previously, we will focus on OCPs involving index-$1$ DAEs, possibly arising from an index-reduction of a high-index DAE.

### 8.4.1 Numerical Solution of Differential-Algebraic Equations

In this Section, we will briefly discuss the numerical solution of DAEs. As hinted above, index-$1$ DAEs are significantly simpler to treat numerically than high-index ones, and are therefore often preferred in optimal control. In this Section, we will focus in the index-$1$ case.

Though low-order methods generally offer a poor ratio between accuracy and computational complexity and higher-order integrators should be preferred, let use nonetheless start here with a simple $m$-step implicit Euler scheme for the sake of illustration. For e.g. a semi-explicit DAE

$$
\begin{aligned}
& \dot{x}=f(x, z, \alpha), \\
& 0=g(x, z, \alpha),
\end{aligned}
$$

the $m$-step implicit Euler scheme computes a numerical simulation $x\left(t_{k+1}, \beta_{k}, q_{k}\right)$ of the model dynamics over a time interval $\left[t_{k}, t_{k+1}\right]$ from the initial state $\beta_{k}$ and the constant input $q_{k}$ via the following algorithm.

**Algorithm** 8.13 (Implicit Euler integrator).
**Input**: initial value $\beta_{k}$, input $q_{k}$ and times $t_{k}, t_{k+1}$
Set $v=q_{k}$, and $h=\left(t_{k+1}-t_{k}\right) / m$
**for** $i=0$ to $m-1$ **do**
Solve

$$
\begin{aligned}
x_{+} & =v+h f\left(x_{+}, z_{+}, q_{k}\right) \\
0 & =g\left(x_{+}, z_{+}, q_{k}\right)
\end{aligned}
$$

for $x_{+}, z_{+}$via a Newton iteration, set $v \leftarrow x_{+}$.
**end for**
**Output**: $x\left(t_{k+1}, \beta_{k}, q_{k}\right)=v$

A similar approach can be deployed using any implicit integration method, such as an IRK4 integrator.

A fairly efficient and useful type of implicit integrator already introduced in [Section 7.3](./7DirectMethods#7-3-direct-collocation-method) is the orthogonal collocation approach. Let us consider the building of the collocation equations for DAEs in a generic implicit form

$$
f(\dot{x}, x, z, \alpha)=0 \tag{8.29}
$$

on a time interval $\left[t_{k}, t_{k+1}\right]$, with initial value $\beta_{k}$ and a constant input $q_{k}$. The differential states are, as in the ODE case described via polynomials $p\left(t, v_{k}\right)$, with $t \in\left[t_{k}, t_{k+1}\right]$ linearly parametrized in $v_{k}$ such that:

- the polynomial interpolation meets the initial value, i.e.:

$$
\underbrace{p\left(t_{k}, v_{k}\right)}_{=v_{k, 0}}=\beta_{k} \tag{8.30}
$$

- the DAE is satisfied in the collocation times $t_{k, i}$ for $i=1, \ldots, d$, i.e.:

$$
f(\dot{p}_{k}\left(t_{k, i}, v_{k}\right), \underbrace{p_{k}\left(t_{k, i}, v_{k}\right)}_{=v_{k, i}}, z_{k, i}, q_{k})=0, \quad i=1, \ldots, d \tag{8.31}
$$

We can gather these requirements in the compact implicit equation:

$$
c_{k}\left(v_{k}, z_{k}, q_{k}, \beta_{k}\right)=\left[\begin{array}{c}
v_{k, 0}-\beta_{k} \\
f\left(\dot{p}_{k}\left(t_{k, 1}, v_{k}\right), v_{k, 1}, z_{k, 1}, q_{k}\right) \\
\vdots \\
f\left(\dot{p}_{k}\left(t_{k, d}, v_{k}\right), v_{k, d}, z_{k, d}, q_{k}\right)
\end{array}\right]=0 . \tag{8.32}
$$

The same observations as for the semi-explicit case hold for the general case.

One ought to observe that the discretized algebraic states $z_{k, i}$ appear only for the indices $i=1, \ldots, d$ in the collocation equations, while the discretized differential states $v_{k, i}$ appear for the indices $i=0, \ldots, d$. I.e. **the discrete algebraic states $z_{k}$ have one DoF less that the discrete differential states $v_{k}$**. The extra DoF granted to the differential state is actually required in order to be able to meet the initial value $\beta_{k}$ of the differential state trajectories, while the initial value of algebraic state trajectories cannot be assigned as they are already defined implicitly by the DAE, subject to the imposed state initial value $\beta_{k}$ and input $q_{k}$. This observation is most obvious in the semi-explicit case, where for a given state initial value $\beta_{k}$ and input $q_{k}$, the initial value for the algebraic state is implicitly given by $g\left(\beta_{k}, z\left(t_{k}\right), q_{k}\right)=0$.

For the sake of completeness, let us provide the algorithm for a collocation-based integrator for index-$1$ DAEs.

**Algorithm** 8.14 (Collocation-based integrator).
**Input**: initial value $\beta_{k}$ input $q_{k}$, initial guess $v_{k}, z_{k}$ and times $t_{k}, t_{k+1}$
Solve

$$
c_{k}\left(v_{k}, z_{k}, q_{k}, \beta_{k}\right)=0 \tag{8.33}
$$

for $v_{k}, z_{k}$ via a Newton iteration
**Output**: $x\left(t_{k+1}, \beta_{k}, q_{k}\right)=p_{k}\left(t_{k+1}, v_{k}\right)$

It is interesting to observe here that while the algorithm ought to receive an initial guess for the discrete algebraic states $z_{k}$, it receives an initial value $\beta_{k}$ only for the differential state. It is also important to notice that the algebraic states $z_{k}$ can in principle be entirely hidden inside the integrator (even though they can be, of course, reported).

#### Sensitivities of the integrators

The computation of the sensitivities of an implicit integrator such as $(8.14)$ can be done as detailed in Section 10.4(in referenced e-books). More specifically, if we label $\boldsymbol{w}_{k}=\left[\begin{array}{l}v_{k} \\ z_{k}\end{array}\right]$, the collocation equation $(8.36)$ in algorithm $8.14$ is typically solved using a (often full-step) Newton iteration:

$$
\boldsymbol{w}_{k}=\boldsymbol{w}_{k}-\frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)^{-1}}{\partial \boldsymbol{w}_{k}} c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right) \tag{8.34}
$$

The sensitivities are then provided at the solution $c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)=0$ by:

$$
\begin{align*}
& \frac{\partial \boldsymbol{w}_{k}}{\partial q_{k}}=-\frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)^{-1}}{\partial \boldsymbol{w}_{k}} \frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)}{\partial q_{k}} \tag{8.35a}\\
& \frac{\partial \boldsymbol{w}_{k}}{\partial \beta_{k}}=-\frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)^{-1}}{\partial \boldsymbol{w}_{k}} \frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)}{\partial \beta_{k}}\tag{8.35b}
\end{align*}
$$

It is important to note here that a factorization of the Jacobian matrix $\frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)}{\partial \boldsymbol{w}_{k}}$ is already computed for the Newton iterations $(8.34)$ and the last factorization can be readily reused at the end of the iteration to form the sensitivities $(8.35)$. The computational complexity of obtaining the sensitivities consists then only of the computation of the matrices $\frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)}{\partial \beta_{k}}$ and $\frac{\partial c_{k}\left(\boldsymbol{w}_{k}, q_{k}, \beta_{k}\right)}{\partial q_{k}}$ and the matrix products in $(8.35)$. A collocation-based integrator with sensitivities then reads as:

**Algorithm** 8.15 (Collocation-based integrator with Sensitivities).
**Input**: initial value $\beta_{k}$ input $q_{k}$, initial guess $v_{k}, z_{k}$ and times $t_{k}, t_{k+1}$
Solve

$$
c_{k}\left(v_{k}, z_{k}, q_{k}, \beta_{k}\right)=0 \tag{8.36}
$$

for $v_{k}, z_{k}$ via a Newton iteration
Compute $(8.35)$
Form:

$$
\begin{align*}
& \frac{\partial x\left(t_{k+1}, \beta_{k}, q_{k}\right)}{\partial \beta_{k}}=\frac{\partial p_{k}\left(t_{k+1}, v_{k}\right)}{\partial v_{k}} \frac{\partial v_{k}}{\partial \boldsymbol{w}_{k}} \frac{\partial \boldsymbol{w}_{k}}{\partial \beta_{k}} \tag{8.37}\\
& \frac{\partial x\left(t_{k+1}, \beta_{k}, q_{k}\right)}{\partial q_{k}}=\frac{\partial p_{k}\left(t_{k+1}, v_{k}\right)}{\partial v_{k}} \frac{\partial v_{k}}{\partial \boldsymbol{w}_{k}} \frac{\partial \boldsymbol{w}_{k}}{\partial q_{k}}\tag{8.38}
\end{align*}
$$

**Output**: $x\left(t_{k+1}, \beta_{k}, q_{k}\right)=p_{k}\left(t_{k+1}, v_{k}\right)$, and $\frac{\partial x\left(t_{k+1}, \beta_{k}, q_{k}\right)}{\partial \beta_{k}}, \frac{\partial x\left(t_{k+1}, \beta_{k}, q_{k}\right)}{\partial q_{k}}$
where $\frac{\partial v_{k}}{\partial \boldsymbol{w}_{k}}=\left[\begin{array}{ll}I & 0\end{array}\right]$ is constant.

We can now turn to the deployment of Multiple-Shooting on DAE-based optimal control problems.

### 8.4.2 Direct Multiple-Shooting with Differential-Algebraic Equations

<img src="/control_om8_4_1_diagram.JPG" alt="diagram" id="fig-841" width="80%" align="middle">

Figure 8.4.1: The diagram

In the context of Multiple-Shooting for DAE-based optimal control problems, the implicit numerical integration schemes detailed above are interacting with the NLP solver tackling the NLP resulting from the Multiple-Shooting discretization. We illustrate this interaction in Figure above. The NLP solver is then responsible for closing the shooting gaps, i.e. enforcing the continuity conditions:

$$
x\left(t_{k+1}, \beta_{k}, q_{k}\right)-\beta_{k+1}=0
$$

for $k=0, \ldots, N-1$, and solving the set of algebraic equations that capture the conditions of optimality. It is interesting to observe here that the overall process can be then construed as a "**two-level Newton scheme**", where the **upper level** solve the **KKT conditions** (e.g. using the relaxed KKT obtained in the primal-dual interior-point approach, or using SQP iterations) and the **lower level** solves the equations underlying the **numerical integration** (e.g. $(8.36)$). The NLP solver passes the discrete states and inputs $\beta_{k}, q_{k}$, which become inputs to the numerical integration algorithms, while the numerical integration algorithms report to the NLP solver the end states of the simulations $x\left(t_{k+1}, \beta_{k}, q_{k}\right)$ and their sensitivities.

One ought to observe here that the **algebraic state dynamics** can in principle be totally "**hidden**" inside the integrator scheme, and not reported at all to the NLP solver. In that sense, implicit integrators in general perform an elimination of the algebraic variables present in the dynamics, and hide their existence to the NLP solver.

Another crucial observation to make here is that **no continuity condition nor initial condition** is enforced on the algebraic state trajectories $z(t)$. Indeed, for a given differential state trajectory $x(t)$ and input profile $\boldsymbol{\alpha}(t)$, the algebraic state trajectories $z(t)$ are entirely defined via the DAE (e.g. by $g(x, z, \alpha)=0$ in the semi-explicit case), such that an extra continuity condition imposed on $z(t)$ would yield an **over-constrained** problem. As a matter of fact, if a discontinuous input parametrization is used (such as e.g. piecewise-constant), the algebraic state trajectories $z(t)$ can be discontinuous at the time instants $t_{k}$ corresponding to the multiple-shooting time grid. E.g. in the semi-explicit case and if the algebraic equation $g(x, z, \alpha)=0$ depends on $\alpha$, at the time instants $t_{k}$, a discontinuous input typically requires $z(t)$ to also be discontinuous.

As mentioned previously, the integrator can hide the algebraic variables from the NLP solvers and keep them as purely **internal**. However, one may want to use these variables in the cost function of the OCP, or impose some inequality constraints on them. In such a case, the algebraic states ought to be reported to the NLP solver, where they are regarded as functions of the decision variables $\beta_{k}, q_{k}$.

As illustrated in [Figure 8.4.1](#fig-841), Multiple-Shooting with implicit integrators can be viewed as a two-level Newton scheme, where algebraic conditions are solved at two different levels. A natural alternative to this setup is then clearly to introduce the algebraic conditions underlying the numerical integrators into the NLP, and leave them to be solved by the NLP solver. Doing so leads us back to the Direct Collocation scheme, which we revisit next in the context of DAE-based optimal control problems.

### 8.4.3 Direct Collocation with Differential-Algebraic Equations

We will focus now on the deployment of the Direct Collocation method on such DAE-based optimal control problems. The principle here is extremely similar to those detailed in [Section 7.3](./7DirectMethods#7-3-direct-collocation-method). However, there are a few important additional specific details arising from the presence of algebraic states and equations that need to be properly covered here. Let us briefly recall here the core principles of the direct collocation method. As detailed earlier in [Section 7.3](./7DirectMethods#7-3-direct-collocation-method) and briefly recalled in [Section 8.4.1](#8-4-1-numerical-solution-of-differential-algebraic-equations) above, the differential state trajectories are approximated on each time intervals $\left[t_{k}, t_{k+1}\right]$ via the polynomials $p_{k}\left(t, v_{k}\right)$ linearly parametrized by the set of variables $v_{k} \in \mathbb{R}^{n(d+1)}$. For an explicit ODE $\dot{x}=f(x, \alpha)$, the collocation equations then enforce:

- the **continuity conditions** of the differential states at the times $t_{k}$ for $k= 0, \ldots, N-1$

$$
p_{k}\left(t_{k+1}, v_{k}\right)-\beta_{k+1,0}=0, \tag{8.39}
$$

- the **state dynamics** at the times $t_{k, i}$ for $k=0, \ldots, N-1$ and $i=1, \ldots, d$

$$
\dot{p}_{k}\left(t_{k, i}, v_{k}\right)=f\left(v_{k, i}, q_{k}\right)
$$

Additional conditions are typically added as boundary conditions, e.g. $v_{0,0}- x_{0}=0$ to enforce the initial condition of the state trajectories.

The extension of the collocation equations for a semi-explicit DAE

$$
\begin{aligned}
& \dot{x}=f(x, z, \alpha) \\
& 0=g(x, z, \alpha)
\end{aligned}
$$

follow the exact same philosophy, namely the collocation equations enforce:

- the **continuity conditions** of the differential states via $(8.39)$ at the times $t_{0, \ldots, N-1}$.
- the **state dynamics** at the times $t_{k, i}$ for $k=0, \ldots, N-1$ and $i=1, \ldots, d$ via

$$
\begin{align*}
\dot{p}_{k}\left(t_{k, i}, v_{k}\right) & =f\left(v_{k, i}, z_{k, i}, q_{k}\right) \tag{8.40a}\\
0 & =g\left(v_{k, i}, z_{k, i}, q_{k}\right)\tag{8.40b}
\end{align*}
$$

The collocation equations for a semi-implicit DAE therefore read as:

$$
c_{k}\left(v_{k}, z_{k}, q_{k}, v_{k+1}\right)=\left[\begin{array}{c}
\dot{p}_{k}\left(t_{k, 1}, v_{k}\right)-f\left(v_{k, 1}, q_{k}\right) \\
g\left(v_{k, 1}, z_{k, 1}, q_{k}\right) \\
\vdots \\
\dot{p}_{k}\left(t_{k, d}, v_{k}\right)-f\left(v_{k, d}, q_{k}\right) \\
g\left(v_{k, d}, z_{k, d}, q_{k}\right) \\
p_{k}\left(t_{k+1}, v_{k}\right)-v_{k+1,0}
\end{array}\right]=0. \tag{8.41}
$$

for $k=0, \ldots, N-1$.

A few details ought to be properly stressed here. 
1. similarly to the observations made in [Section 8.4.2](#8-4-2-direct-multiple-shooting-with-differential-algebraic-equations), **no continuity condition is enforced on the algebraic states**, hence $(8.39)$ applies to the differential state trajectories alone.
2. one ought to observe that the discretized algebraic states $z_{k, i}$ appear only for the indices $i=1, \ldots, d$ in the collocation equations, i.e. **the discrete algebraic states have one DoF less that the discrete differential states $v_{k, i}$ which appear with the indices $i=0, \ldots, d$ in the collocation equations**. The extra DoF granted to the differential state is actually required in order to be able to impose the continuity of the differential state trajectories, while the algebraic state trajectories are not required to be continuous. When building the NLP arising from a discretization of a DAE-based OCP using direct collocation, one ought to make sure that the adequate number of discrete algebraic states and discrete differential states are declared to the NLP solver. Indeed, e.g. introducing by mistake the unnecessary extra variables $z_{k, 0}$ can create numerical difficulties in the solver, as these variables would be "free" in the NLP and their values not clearly fixed by the problem.

Building the collocation equations for DAEs in a generic implicit form

$$
f(\dot{x}, x, z, u)=0
$$

is a natural generalization of the constraints used in the case of a semi-explicit DAE. In the general case, the collocation equations simply read as:

$$
c_{k}\left(v_{k}, z_{k}, q_{k}, v_{k+1}\right)=\left[\begin{array}{c}
f\left(\dot{p}_{k}\left(t_{k, 1}, v_{k}\right), v_{k, 1}, z_{k, 1}, q_{k}\right) \\
\vdots \\
f\left(\dot{p}_{k}\left(t_{k, d}, v_{k}\right), v_{k, d}, z_{k, 1}, q_{k}\right) \\
p_{k}\left(t_{k+1}, v_{k}\right)-v_{k+1,0}
\end{array}\right]=0
$$

for $k=0, \ldots, N-1$. The same observations as for the semi-explicit case hold for the general case.
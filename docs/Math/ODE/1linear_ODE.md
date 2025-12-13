# Linear Ordinary Differential Equations

> This is the note from MNE8108 Engineering Methods in the Department of Mechanical Engineering, CityU (semester A, 2025)
> 
> Contents mostly From *Advanced Calculus for Applications* by Francis Begnaud Hildebrand

## Introduction

- Q1: Consider the cooling model. Assume there is a cup of boiled water (100°C), environment temperature is 20°C.
How does water cool down over time?
- **A**: According to the Newton's Law of Cooling
$$
\frac{\mathrm{d}T}{\mathrm{d}t} = -k(T - 20).
$$

$k$ is the cooling rate constant. Initial temperature $T(0) = 100$.
$$
T = 20 + 80 e^{-t}
$$

- Q2: Assume a ball goes from static to free fall. How to calculate the fall distance over time?
- **A**:
$$
\begin{align*}
\frac{\mathrm{d}v}{\mathrm{d}t} &= g\\
\frac{\mathrm{d}x}{\mathrm{d}t} &= v\\
\implies\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} &= g
\end{align*}
$$

$g$ is gravity, with initial position $x(0) = 0$.
$$x = \frac{1}{2} g t^2$$

Applications about Differential Equations include: 
- neutron diffusion equation:
    $$
        D\nabla^2\phi - \sum_a\phi + k_\infty\sum_a\phi = 0
    $$
- decay chain model:
    $$
        \frac{\mathrm{d}N_i}{\mathrm{d}t} = -\lambda_iN_i + \sum_{j=1}^{i-1}b_{j\to i}\lambda_jN_j
    $$
- Tsiolkovsky rocket equation:
    $$
        \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{u_e}{m}\frac{\mathrm{d}m}{\mathrm{d}t} - g
    $$
- Navier-Stokes equations:
    $$
        \rho\left(\frac{\partial \boldsymbol{v}}{\partial t} + \boldsymbol{v}\cdot\nabla\boldsymbol{v}\right) = -\nabla p + \mu\nabla^2\boldsymbol{v} + \boldsymbol{f}.
    $$

A differential equation relates two or more variables via derivatives or differentials.

The simplest form:
$$\frac{\mathrm{d}y}{\mathrm{d}x} = f(x)$$ 

where $f(x)$ is a function of $x$.
we define a solution of a differential equation to be any functional relation, not involving derivatives or integrals of unknown functions

The solution is obtained immediately by integration, in the form
$$ y = \int f(x) \mathrm{~d}x + C $$

Whether or not it happens that the integral can be expressed in terms of simple functions is incidental, in the sense that we define a solution of a differential equation to be any functional relation, not involving derivatives or integrals of unknown functions, which implies the differential equation.

Similarly, in an equation of the form
$$
    F(x)G(y)\mathrm{d}x + f(x)g(y)\mathrm{d}y= 0.
$$

We may **separate the variables** and obtain a solution by integration in the form
$$
\begin{align*}
    \int \frac{F(x)}{f(x)}\mathrm{~d}x + \int \frac{g(y)}{G(y)}\mathrm{~d}y &= C\\
    \implies H(x) + I(y) &= C
\end{align*}
$$

## Linear Ordinary Differential Equations (ODEs)

::: warning Definition: Linear ODEs
Linear differential equation of order $n$, in absence of products or nonlinear functions of the dependent variable $y$ and its derivatives the highest derivative present being of order $n$:
$$
    a_0(x)\frac{\mathrm{d}^n y}{\mathrm{d}x^n} + a_1(x)\frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + a_{n-1}(x)\frac{\mathrm{d} y}{\mathrm{d}x} + a_n(x)y = f(x).
$$

The coefficients $a$ may be arbitrarily specified functions of the independent variable $x$.
:::

**Examples**:
- First order:
$$\frac{\mathrm{d}y}{\mathrm{d}x} = g_x\\
\frac{\mathrm{d}y}{\mathrm{d}x} + ky = 20k, \quad (a_0=1,a_1 = k,f(x)=20k)$$
- Second order:
$$\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} + 2 \frac{\mathrm{d}y}{\mathrm{d}x} + y = x$$
- Higher orders include:
$$(y''')^5 + x^4 y'' - xy' + y^7 = 1,\\
y^{(4)} - 4 y''' + 10 y'' - 12 y' + 5 y = \sin 2x$$

The most general linear differential equation of the nth order can be written in the form (by dividing $a_0(x)$ in both terms):
$$
    \frac{\mathrm{d}^n y}{\mathrm{d}x^n} + a_1(x)\frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + a_{n-1}(x)\frac{\mathrm{d} y}{\mathrm{d}x} + a_n(x)y = h(x).
$$

This equation is frequently written in the abbreviated form
$$
    Ly = h(x).
$$

where $L$ here represents the linear differential operator:
$$
    L = \frac{\mathrm{d}^n}{\mathrm{d}x^n} + a_1(x)\frac{\mathrm{d}^{n-1}}{\mathrm{d}x^{n-1}} + \cdots + a_{n-1}(x)\frac{\mathrm{d}}{\mathrm{d}x} + a_n(x)
$$


## General solutions to linear differential equations

- If $n$ linearly independent solutions $u_1(x), u_2(x), ..., u_n(x)$ of the associated **homogeneous equation** $Ly_H=0$ are known, the general solution is of the form:
$$ y_H(x) = c_1 u_1(x) + c_2 u_2(x) + \dots + c_n u_n(x) = \sum_{k=1}^n c_ku_k(x) $$

where $c_i$ are required arbitrary constants.
- Suppose that one particular solution of $Ly_P = h(x)$ can be obtained by inspection or otherwise, such that $Ly_P=h(x)$, then the complete solution is of the form:
$$
    y = y_H(x) + y_P(x) = \sum_{k=1}^n c_ku_k(x) + y_P(x)
$$

The mission is:
1. Find $y_H: Ly_H=0$;
2. Find $y_P: Ly_P = h(x)$ need only one solution

Then $y=y_H+y_P: Ly = h(x)$

The question is : how do we know $n$ functions are **linearly independent**?

## Linear Dependence/Independence of functions

The functions $u_1,u_2,\cdots,u_n$ are said to **linear independence** over a given interval if over that interval no one of the functions can be expressed as a linear combination of **the others** (nontrival). Here are more specific:

We assume that each of a set of $n$ functions $u_1, u_2, \cdots, u_n$ possesses $n$ finite derivatives at all points of an interval $M$. Then, if a set of constants exists such that
$$
    c_1u_1+c_2u_2+\cdots+c_nu_n=0
$$

for all values of $x$ in the interval $M$.

these same constants also satisfy the identities
$$
\begin{aligned}
c_1\frac{\mathrm{d}u_1}{\mathrm{d}x} + c_2\frac{\mathrm{d}u_2}{\mathrm{d}x} + \cdots + c_n\frac{\mathrm{d}u_n}{\mathrm{d}x} &= 0\\
c_1\frac{\mathrm{d}^2u_1}{\mathrm{d}x^2} + c_2\frac{\mathrm{d}^2u_2}{\mathrm{d}x^2} + \cdots + c_n\frac{\mathrm{d}^2u_n}{\mathrm{d}x^2} &= 0\\
&\vdots\\
c_1\frac{\mathrm{d}^{n-1}u_1}{\mathrm{d}x^{n-1}} + c_2\frac{\mathrm{d}^{n-1}u_2}{\mathrm{d}x^{n-1}} + \cdots + c_n\frac{\mathrm{d}^{n-1}u_n}{\mathrm{d}x^{n-1}} &= 0    
\end{aligned}
$$

Then:
$$
\begin{pmatrix}
    u_1 & u_2 & \cdots & u_n\\
    \frac{\mathrm{d}u_1}{\mathrm{d}x} & \frac{\mathrm{d}u_2}{\mathrm{d}x}&\cdots &\frac{\mathrm{d}u_n}{\mathrm{d}x} \\
    \vdots&\vdots&\vdots&\vdots\\
    \frac{\mathrm{d}^{n-1}u_1}{\mathrm{d}x^{n-1}} & \frac{\mathrm{d}^{n-1}u_2}{\mathrm{d}x^{n-1}}&\cdots &\frac{\mathrm{d}^{n-1}u_n}{\mathrm{d}x^{n-1}}
\end{pmatrix}
\begin{pmatrix}
    c_1\\c_2\\\vdots\\c_n
\end{pmatrix} = \mathbf{0}.
$$

if the functions $u_1, u_2,\cdots, u_n$ are linearly dependent, then the determinant The following determinant vanishes if the functions are linearly dependent; otherwise, they are linearly independent

::: tip Lemma: Wronskian determinant [core]
The vanishing of the Wronskian determinant is necessary but not sufficient for linear dependence.
The functions are **linearly independent** if this determinant does not **vanish**, i.e.:
$$
    W(u_1,u_2,\cdots,u_n) = 
    \begin{vmatrix}
        u_1 & u_2 & \cdots & u_n\\
        \frac{\mathrm{d}u_1}{\mathrm{d}x} & \frac{\mathrm{d}u_2}{\mathrm{d}x} & \cdots & \frac{\mathrm{d}u_n}{\mathrm{d}x}\\
        \vdots & \vdots & \vdots & \vdots\\
        \frac{\mathrm{d}^{n-1}u_1}{\mathrm{d}x^{n-1}} & \frac{\mathrm{d}^{n-1}u_2}{\mathrm{d}x^{n-1}} & \cdots & \frac{\mathrm{d}^{n-1}u_n}{\mathrm{d}x^{n-1}}
    \end{vmatrix} \neq 0.
$$

:::


## First order linear solution
The linear equation of first order is readily solved in general terms, without determining separately homogeneous and particular solutions

we attempt to determine an **integrating factor** $p(x)$ such that the standard form
$$
    \frac{\mathrm{d}y}{\mathrm{d}x} + a_1(x)y = h(x).
$$

is equivalent to the equation
$$
    \frac{\mathrm{d}}{\mathrm{d}x}(py) = ph.
$$

> Here is the procession:
> $$
\begin{align*}
    \frac{\mathrm{d}}{\mathrm{d}x}(py) =& p\frac{\mathrm{d}y}{\mathrm{d}x} + y\frac{\mathrm{d}p}{\mathrm{d}x}\\
    \implies \frac{1}{p}\frac{\mathrm{d}}{\mathrm{d}x}(py) =& \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{y}{p}\frac{\mathrm{d}p}{\mathrm{d}x} \triangleq h(x)\\
    \implies \frac{\mathrm{d}}{\mathrm{d}x}(py) =& ph(x).
\end{align*}
$$

- The above equation can be written as $\frac{\mathrm{d}y}{\mathrm{d}x} + \left(\frac{1}{p}\frac{\mathrm{d}p}{\mathrm{d}x}\right)y = h(x)$.
- Therefore, we have $\frac{1}{p}\frac{\mathrm{d}p}{\mathrm{d}x} = a_1(x)$, which leads to 
$$
p = \exp(\int a_1(x)\mathrm{~d}x)
$$
- As a result, we obtain the general solution $py = \int ph\mathrm{~d}x+C$, $C$ is an arbitrary constant, or
    $$
        y = \frac{1}{p}\int ph\mathrm{~d}x + \frac{C}{p}.
    $$

### Example1: Integrating factor
To solve the differential equation
$$
x \frac{\mathrm{d} y}{\mathrm{d} x}+(1-x) y=x e^x
$$
we first rewrite the equation in the standard form,
$$
\frac{\mathrm{d} y}{\mathrm{d} x}+\left(\frac{1}{x}-1\right) y=e^x
$$

An integrating factor is then
$$
p=e^{\int\left(\frac{1}{x}-1\right) \mathrm{~d} x}=e^{\log x-x}=x e^{-x}
$$
no constant being added in the integration, since only a factor is needed. The solution is then given by
$$
\begin{aligned}
y&=\frac{e^x}{x} \int x \mathrm{~d} x+C \frac{e^x}{x} \\
\implies y&=\frac{x}{2} e^x+C \frac{e^x}{x}
\end{aligned}
$$


## Linear ODEs with Constant Coefficients
The simplest and perhaps the most important differential equation of higher order is the linear equation (in which the coefficients $a_k$ are **constants**)
$$
    Ly = \frac{\mathrm{d}^n y}{\mathrm{d}x^n} + a_1\frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + a_{n-1}\frac{\mathrm{d} y}{\mathrm{d}x} + a_ny = h(x).
$$

- Note that $\frac{\mathrm{d}^m}{\mathrm{d}x^m}e^{rx} = r^me^{rx}$
- Then
    $$Le^{rx} = (r^n+a_1r^{n-1}+\cdots+a_{n-1}r+a_n)e^{rx}$$
-  For a homogeneous equation ($h(x)=0$), we just need (The characteristic equation of $r$):
    $$
        r^n+a_1r^{n-1}+\cdots+a_{n-1}r+a_n = 0
    $$
   - If there are $n$ distinct roots to the characteristic equation:
    $$
        y_H = \sum_{k=1}^n c_ke^{r_kx}
    $$
   - if one or more of the roots is repeated, less than $n$ independent solutions are obtained. Suppose that $r = r_1$ is a **double root** of the characteristic equation:
    $$
        Le^{rx} = (r-r_1)^2(r-r_2)\cdots(r-r_n)e^{rx}, \, r_1\neq r_2\neq\cdots\neq r_n
    $$

    To solve it, note that:
    $$
    \begin{align*}
        L[e^{rx}]_{r=r_1} =& L[e^{r_1x}] = 0\\
        L\left[\frac{\partial}{\partial r}e^{rx}\right]_{r=r_1} =& L[xe^{r_1x}] = 0,
    \end{align*}
    $$

    > (Not so accuracy):
    $$L\left[\frac{\partial}{\partial r}e^{rx}\right] = \frac{\partial}{\partial r}L\left[e^{rx}\right] $$

    The part of the homogeneous solution corresponding to the **double root** $r_1$ can be written in the form
    $$
        c_1e^{r_1x} + c_2xe^{r_1x} = e^{r_1x}(c_1+c_2x).
    $$

    By a simple extension of this argument, it can be shown the part of the homogeneous solution corresponding to an **$m$-fold root** $r_1$ is of the form
    $$
        e^{r_1x}(c_1+c_2x+c_3x^2+\cdots+c_mx^{m-1}).
    $$

If the characteristic equation has **imaginary roots** and if the coefficients of that equation are real, the roots must occur in **conjugate pairs**. Thus, if $r_1=a+i b$ is one root, a second root must be $r_2=a-i b$. The part of the solution corresponding to these two roots can be written in the form
$$
A e^{(a+i b) x}+B e^{(a-i b) x}=e^{a x}\left(A e^{i b x}+B e^{-i b x}\right) .
$$

In order that this expression be real, the constants $A$ and $B$ must be imaginary By making use of Euler's formula,*
$$
e^{i \theta}=\cos \theta+i \sin \theta,
$$

we find that the solution becomes
$$
e^{a x}[A(\cos b x+i \sin b x)+B(\cos b x-i \sin b x)]
$$

and hence can be written in the more convenient form,
$$
e^{a x}\left(c_1 \cos b x+c_2 \sin b x\right),
$$

where $c_1$ and $c_2$ are new arbitrary constants replacing $(A+B)$ and $i(A-B)$, respectively. Thus real values of $c_1$ and $c_2$ correspond to values of $A$ and $B$ which are conjugate complex. 

Similarly, if $a \pm i b$ are $m$-fold roots, the corresponding $2 m$ terms in the homogeneous solution can be written in the real form,
$$
\begin{aligned}
e^{a x}\left[\left(c_1+c_2 x+\cdots\right.\right. & \left.+c_m x^{m-1}\right) \cos b x \\
& \left.+\left(c_{m+1}+c_{m+2} x+\cdots+c_{2 m} x^{m-1}\right) \sin b x\right]
\end{aligned}
$$

### Example2: Linear ODE with constant coefficients [core]
- For the equation
$$
\frac{\mathrm{d}^3 y}{\mathrm{d} x^3}-\frac{\mathrm{d} y}{\mathrm{d} x}=0,
$$

the characteristic equation is $r^3-r=r(r+1)(r-1)=0$, from which there follows $r=0, \pm 1$. The general solution is then
$$
y=c_1+c_2 e^x+c_3 e^{-x}
$$

- For the differential equation
$$
\frac{\mathrm{d}^3 y}{\mathrm{d} x^3}-5 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+8 \frac{\mathrm{d} y}{\mathrm{d} x}-4 y=0
$$
the characteristic equation is $(r-1)(r-2)^2=0$, from which there follows $r=1,2,2$. The general solution is then
$$
y=c_1 e^x+e^{2 x}\left(c_2+c_3 x\right) .
$$

- The equation
$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+2 \frac{\mathrm{d} y}{\mathrm{d} x}+5 y=0
$$

has the characteristic equation $r^2+2 r+5=0$, from which $r=-1 \pm 2 i$; hence
$$
y=e^{-x}\left(c_1 \cos 2 x+c_2 \sin 2 x\right)
$$

### Nonhomogeneous Linear ODEs
A shorter method which can be applied in many practical cases is that of undetermined coefficients. This method may be used when the right-hand side of $h(x)$ involves only terms of
$$
x^m, \sin(qx), \cos(qx), e^{px}, \text{ and/or products of two} 
$$

or more such functions. The reason for the success of the method is the fact that each of these functions, or any product of a finite number of these functions, has only a finite number of linearly independent derivatives.

If we define the family of a function $f(x)$ as the set of linearly independent functions of which the function $f(x)$ and its derivatives with respect to $x$ are linear combinations, the following families may be listed

|Term|Family|
|:--|:--|
|$x^m$|$x^m,x^{m-1},x^{m-2},\cdots,x^2,x,1$|
|$\sin(qx)$|$\sin(qx),\cos(qx)$|
|$\cos(qx)$|$\sin(qx),\cos(qx)$|
|$e^{px}$|$e^{px}$|

### Example3 [core]
Consider the differential equation
$$
\frac{\mathrm{d}^3 y}{\mathrm{d} x^3}-\frac{\mathrm{d} y}{\mathrm{d} x}=2 x+1-4 \cos x+2 e^x .
$$

The **general homogeneous solution** is
$$
y_H=c_1+c_2 e^x+c_3 e^{-x} .
$$

The **families** of the terms $x, 1, \cos x$, and $e^x$ on the right-hand side of the equation are, respectively,
$$
\{x, 1\}, \quad\{1\}, \quad\{\cos x, \sin x\}, \quad\left\{e^x\right\} .
$$

- The second family is **contained in the first**, and is **discarded**. 
- Since the first family has the representative $1$ in the **homogeneous solution**($r_1=0\to e^{0}=1$), it is replaced by the family $\left\{x^2, x\right\}$. Similarly, the last family is replaced by $\left\{x e^x\right\}$ ($r_2=1\to e^{1x}$).

A particular solution is then assumed in the form
$$
y_P=A x^2+B x+C \cos x+D \sin x+E x e^x .
$$

When $y$ is replaced by $y_P$, the differential equation becomes
$$
-2 A x-B-{2 D \cos x+{2 C} \sin x+2 E e^x=2 x+1-4 \cos x+2 e^x .}
$$

By equating the coefficients of $x, 1, \cos x, \sin x$, and $e^x$, there follows
$$
A=-1, \quad B=-1, \quad D=2, \quad C=0, \quad E=1 .
$$

A particular solution thus is
$$
y_P=-x^2-x+2 \sin x+x e^2,
$$

and the general solution is
$$
y=c_1+c_2 e^x+c_3 e^{-x}-x^2-x+2 \sin x+x e^x .
$$

## Equidimensional linear differential equation
An equation of the form
$$
    Ly = x^n\frac{\mathrm{d}^n y}{\mathrm{d}x^n} + b_1x^{n-1}\frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + b_{n-1}x\frac{\mathrm{d} y}{\mathrm{d}x} + b_ny = h(x).
$$

where the $b$'s are constants, this equation has the property that each term on the left is unchanged when $x$ is replaced by $cx$, where $c$ is a nonzero constant.

Introducing a new independent variable $z$ by the substitution:
$$
    x=e^z, \quad z = \log x
$$

There then follows
$$
    \frac{\mathrm{d}}{\mathrm{d}x} = \frac{\mathrm{d}z}{\mathrm{d}x}\frac{\mathrm{d}}{\mathrm{d}z} = \frac{1}{e^z}\frac{\mathrm{d}}{\mathrm{d}z}
$$

<!-- Hence
$$
    x^m\frac{\mathrm{d}^m}{\mathrm{d}x^m} = e^{mz}\left(\frac{1}{e^z}\frac{\mathrm{d}}{\mathrm{d}z}\right)^m = \left(\frac{\mathrm{d}}{\mathrm{d}z}\right)^m
$$ -->

In particular, we obtain
$$
\begin{aligned} x \frac{\mathrm{d} y}{\mathrm{d} x} & =\frac{\mathrm{d} y}{\mathrm{d} z} \\ x^2 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2} & =\frac{\mathrm{d}^2 y}{\mathrm{d} z^2}-\frac{\mathrm{d} y}{\mathrm{d} z}=\frac{\mathrm{d}}{\mathrm{d} z}\left(\frac{\mathrm{d}}{\mathrm{d} z}-1\right) y, \\ x^3 \frac{\mathrm{d}^3 y}{\mathrm{d} x^3} & =\frac{\mathrm{d}^3 y}{\mathrm{d} z^3}-3 \frac{\mathrm{d}^2 y}{\mathrm{d} z^2}+2 \frac{\mathrm{d} y}{\mathrm{d} z} \\ & =\frac{\mathrm{d}}{\mathrm{d} z}\left(\frac{\mathrm{d}}{\mathrm{d} z}-1\right)\left(\frac{\mathrm{d}}{\mathrm{d} z}-2\right) y,\end{aligned}
$$

> $$
    \begin{align*}
    x^2 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2} =& x^2 \frac{\mathrm{d} }{\mathrm{d} x} \left(\frac{\mathrm{d}}{\mathrm{d} x}y\right) = x \frac{\mathrm{d} }{\mathrm{d} z}\left(\frac{\mathrm{d} y}{\mathrm{d} x}\right) = x \frac{\mathrm{d} }{\mathrm{d} z}\left(\frac{1}{x}\frac{\mathrm{d} y}{\mathrm{d} z}\right)\\
    =& e^z \frac{\mathrm{d} }{\mathrm{d} z}\left(\frac{1}{e^z}\frac{\mathrm{d} y}{\mathrm{d} z}\right) = e^z\left(-\frac{1}{e^z}\frac{\mathrm{d} y}{\mathrm{d} z} + \frac{1}{e^z}\frac{\mathrm{d}^2 y}{\mathrm{d} z^2}\right) \\
    =& \frac{\mathrm{d}^2 y}{\mathrm{d} z^2}-\frac{\mathrm{d} y}{\mathrm{d} z}
    \end{align*}
> $$

In general, it is found that
$$
    x^m\frac{\mathrm{d}^m y}{\mathrm{d}x^m} = \frac{\mathrm{d}}{\mathrm{d}z}\left(\frac{\mathrm{d}}{\mathrm{d}z} - 1\right)\left(\frac{\mathrm{d}}{\mathrm{d}z} - 2\right)\cdots \left(\frac{\mathrm{d}}{\mathrm{d}z} - m + 1\right)y.
$$

The transformed equation thus becomes linear with constant coefficients, and $y$ then can be determined in terms of $z$. The final result is obtained by replacing $z$ by $\log x$

### Example4: Equidimensional linear differential equation
To solve the differential equation
$$
x^2 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}-2 x \frac{\mathrm{d} y}{\mathrm{d} x}+2 y=x^2+2
$$

Making use of the variable transformation, we obtain the transformed equation
$$
\frac{\mathrm{d}^2 y}{\mathrm{d} z^2}-3 \frac{\mathrm{d} y}{\mathrm{d} z}+2 y=e^{2 z}+2
$$

The solution is found to be
$$
y=c_1 e^z+c_2 e^{2 z}+z e^{2 z}+1
$$

or, returning to the variable $x$
$$
y=c_1 x+c_2 x^2+x^2 \log x+1
$$

## Particular Solutions by Variation of Parameters
Suppose
$$
    Ly = \frac{\mathrm{d}^n y}{\mathrm{d}x^n} + a_1(x)\frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + a_{n-1}(x)\frac{\mathrm{d} y}{\mathrm{d}x} + a_n(x)y = h(x).    
$$

has the homogeneous solution
$$
    y_H = \sum_{k=1}^nc_ku_k(x).
$$

where the $u$'s are $n$ linearly independent homogeneous solutions and the $c$’s are $n$ arbitrary constants or "parameters."

We assume that the particular solution of the above ODE is of the following form
$$
    y_P = \sum_{k=1}^nC_ku_k(x).
$$

Given $y_P$, we obtain:
$$
    \frac{\mathrm{d}}{\mathrm{d}x}y_P = \sum_{k=1}^nC_ku'_k + \sum_{k=1}^n C'_ku_k.
$$

In order to simplify this expression, we require
$$
    \sum_{k=1}^n C'_ku_k = 0.
$$

There then follows
$$
    \frac{\mathrm{d}^2}{\mathrm{d}x^2}y_P = \sum_{k=1}^nC_ku''_k + \sum_{k=1}^n C'_ku'_k.  
$$

As the second condition, we require
$$
    \sum_{k=1}^n C'_ku'_k = 0.
$$

Proceeding in this way through the $(n - 1)$th derivative, we have our $(n - 1)$th requirement:
$$
    \sum_{k=1}^n C'_ku^{(n-2)}_k = 0.
$$

And the $(n - 1)$th derivative is
$$
    \frac{\mathrm{d}^{n-1}}{\mathrm{d}x^{n-1}}y_P = \sum_{k=1}^nC_ku^{(n-1)}_k.
$$

The expression for the $n$th derivative is then
$$
    \frac{\mathrm{d}^{n}}{\mathrm{d}x^{n}}y_P = \sum_{k=1}^nC'_ku^{(n-1)}_k + \sum_{k=1}^n C_ku^{(n)}_k.
$$

Introducing the expressions for $y_P$ and its derivatives into the general linear differential equation:
$$
\begin{aligned}
L y_P=\sum_{k=1}^n C_k u_k^{(n)} & +a_1(x) \sum_{k=1}^n C_k u_k^{(n-1)}+\cdots \\
& +a_{n-1}(x) \sum_{k=1}^n C_k u_k^{\prime}+a_n(x) \sum_{k=1}^n C_k u_k+\sum_{k=1}^n C_k^{\prime} u_k^{(n-1)}=h(x)
\end{aligned}
$$

Combining the first summations, we obtain
$$
\begin{aligned}
& \sum_{k=1}^n C_k\left[\frac{\mathrm{d}^n u_k}{\mathrm{d} x^n}+a_1(x) \frac{\mathrm{d}^{n-1} u_k}{\mathrm{d} x^{n-1}}+\cdots\right. \\
& \left.\quad+a_{n-1}(x) \frac{\mathrm{d} u_k}{\mathrm{d} x}+a_n(x) u_k\right]+\sum_{k=1}^n C_k^{\prime} u_k^{(n-1)}=h(x)
\end{aligned}
$$

Therefore
$$
\sum_{k=1}^n C_k^{\prime} u_k^{(n-1)}=h(x)
$$

In summary, the $n$ conditions imposed on the $n$ unknown functions can be written in the expanded form
$$
\left\{\begin{array}{l}
C_1^{\prime}(x) u_1(x)+C_2^{\prime}(x) u_2(x)+\cdots+C_n^{\prime}(x) u_n(x)=0 \\
C_1^{\prime}(x) u_1^{\prime}(x)+C_2^{\prime}(x) u_2^{\prime}(x)+\cdots+C_n^{\prime}(x) u_n^{\prime}(x)=0 \\
\vdots\\
C_1^{\prime}(x) u_1^{(n-2)}(x)+C_2^{\prime}(x) u_2^{(n-2)}(x)+\cdots \cdots+C_n^{\prime}(x) u_n^{(n-2)}(x)=0 \\
C_1^{\prime}(x) u_1^{(n-1)}(x)+C_2^{\prime}(x) u_2^{(n-1)}(x)+\cdots+C_n^{\prime}(x) u_n^{(n-1)}(x)=h(x)
\end{array}\right. \tag{52}
$$

If this set of equations is solved for $C_1^{\prime}, C_2^{\prime}, \ldots, C_n^{\prime}$ by **Cramer's rule**, the common-denominator determinant is seen to be the **Wronskian** of $u_1, u_2$, $\ldots, u_n$.

### Example6:  the general solution to the second order linear differential equation
$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+a_1(x) \frac{\mathrm{d} y}{\mathrm{d} x}+a_2(x) y=h(x),
$$

there follows
$$
    y=C_1(x) u_1(x)+C_2(x) u_2(x)
$$

where
$$
C_1^{\prime}=\frac{\left|\begin{array}{ll}
0 & u_2 \\
h & u_2^{\prime}
\end{array}\right|}{\left|\begin{array}{ll}
u_1 & u_2 \\
u_1^{\prime} & u_2^{\prime}
\end{array}\right|}=-\frac{h(x) u_2(x)}{W\left[u_1(x), u_2(x)\right]}
$$

and, similarly,
$$
C_2^{\prime}=\frac{h(x) u_1(x)}{W\left[u_1(x), u_2(x)\right]} .
$$

Thus we can write
$$
\begin{aligned}
& C_1=-\int^x \frac{h(x) u_2(x)}{W\left[u_1(x), u_2(x)\right]} \mathrm{~d} x+c_1, \\
& C_2=\int^x \frac{h(x) u_1(x)}{W\left[u_1(x), u_2(x)\right]} \mathrm{~d} x+c_2
\end{aligned}
$$

### Example7: 2nd order linear differential equation
$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+y=f(x)
$$
two linearly independent homogeneous solutions are $u_1=\cos x, {u_2}=\sin x$. The Wronskian is
$$
W(\cos x, \sin x)=\left|\begin{array}{rr}
\cos x & \sin x \\
-\sin x & \cos x
\end{array}\right|=\sin ^2 x+\cos ^2 x=1 .
$$

Therefore
$$
y=-\cos x\left[\int^x f(x) \sin x \mathrm{~d} x+c_1\right]+\sin x\left[\int^x f(x) \cos x \mathrm{~d} x+c_2\right]
$$

or
$$
y=\int^x f(\xi)[\cos \xi \sin x-\sin \xi \cos x] \mathrm{~d} \xi+c_1 \cos x+c_2 \sin x
$$

or
$$
y=\int^x f(\xi) \sin (x-\xi) \mathrm{~d} \xi+c_1 \cos x+c_2 \sin x
$$

### Example8: 3rd order linear differential equation
$$
\frac{\mathrm{d}^3 y}{\mathrm{d} x^3}-3 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+2 \frac{\mathrm{d} y}{\mathrm{d} x}=f(x),
$$
we may take $u_1=1, u_2=e^x, u_3=e^{2 x}$. Equations (52) then become
$$
\begin{aligned}
C_1^{\prime}+&C_2^{\prime} e^x+C_3^{\prime} e^{2 x} && =0 \\
&C_2^{\prime} e^x+2 C_3^{\prime} e^{2 x} && =0 \\
&C_2^{\prime} e^x+4 C_3^{\prime} e^{2 x} && =f(x)
\end{aligned}
$$

Solving the three simultaneous equations, we obtain
$$
C_1^{\prime}=\frac{1}{2} f(x), \quad C_2^{\prime}=-e^{-x} f(x), \quad C_3^{\prime}=\frac{1}{2} e^{-2 x} f(x)
$$

The solution of the differential equation is then
$$
\begin{aligned}
y=&1\left[\frac{1}{2} \int^x f(\xi) \mathrm{~d} \xi+c_1\right]+e^x\left[-\int^x e^{-\xi} f(\xi) \mathrm{~d} \xi+c_2\right]\\
& +e^{2 x}\left[\frac{1}{2} \int^x e^{-2 \xi} f(\xi) \mathrm{~d} \xi+c_3\right]
\end{aligned}
$$

or, equivalently,
$$
y=\frac{1}{2} \int^x f(\xi)\left[1-2 e^{x-\xi}+e^{2(x-\xi)}\right] \mathrm{~d} \xi+c_1+c_2 e^x+c_3 e^{2 x}
$$

## Reduction of order
One of the important properties of linear differential equations is the fact that: 

if **one** homogeneous solution of an equation of order $n$ is known, a new linear differential equation of order $n - 1$,determining the remainder of the solution, can be obtained.

This procedure is in a sense analogous to the reduction of the degree of an algebraic equation when **one solution is known**.

Suppose that one homogeneous solution $u_1(x)$ is known.
1. We next write $y = v(x)u_1(x)$ and attempt to determine the function $v(x)$. 
2. Substituting $vu_1$ for $y$ in the left-hand side of the differential equation, we obtain a new linear differential equation of order $n$ to determine $v$. 
    But since $y=cu_1(x)$ is a homogeneous solution of the original equation, $v = c$ must be a homogeneous solution of the new equation. 
3. Hence the new equation must **lack the term of zero order** in $v$; that is, the coefficient of $v$ must be zero in equations. Thus the new equation is of order $n - 1$ in the variable $\mathrm{d}v/\mathrm{d}x$

### Example9: general 2nd-order linear equation
$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+a_1(x) \frac{\mathrm{d} y}{\mathrm{d} x}+a_2(x) y=h(x)
$$

Assuming $y=v(x) u_1(x)$, then introduce into $2^{\text {nd }}$-order linear equation
$$
v^{\prime \prime} u_1+2 v^{\prime} u_1^{\prime}+a_1 v^{\prime} u_1+v\left(\underbrace{u_1^{\prime \prime}+a_1 u_1^{\prime}+a_2 u_1}_{=0}\right)=h .
$$

since $u_1$ is a homogeneous solution, the expression in parentheses vanishes and the differential equation determining $v$ becomes
$$
v^{\prime \prime} u_1+2 v^{\prime} u_1^{\prime}+a_1 v^{\prime} u_1=h
$$

or
$$
\left(v^{\prime}\right)^{\prime}+\left(2 \frac{u_1^{\prime}}{u_1}+a_1\right) v^{\prime}=\frac{h}{u_1} .
$$

This equation is of first order in $v^{\prime}$, with an integrating factor (See [first order linear solution](#first-order-linear-solution)) in the form
$$
e^{2 \log u_1+\int a_1 \mathrm{~d} x}=p u_1^2, \quad \text { where } \quad p=e^{\int a_1 \mathrm{d} x}
$$

Hence
$$
\begin{align*}
   &v^{\prime}=\frac{1}{p u_1^2} \int^x p h u_1 \mathrm{~d} x+\frac{c_1}{p u_1^2}\\
   &v=\int^x \frac{\int^x p h u_1 \mathrm{~d} x}{p u_1^2} \mathrm{d} x+c_1 \int^x \frac{\mathrm{d} x}{p u_1^2}+c_2  
\end{align*}
$$

With ${y}={vu}_1({x})$,
$$
y=u_1(x) \int \frac{\int^x p h u_1 \mathrm{~d} x}{p u_1^2} \mathrm{~d} x+c_1 u_1(x) \int^x \frac{\mathrm{d} x}{p u_1^2}+c_2 u_1(x)
$$

## Determination of Constants
The $n$ arbitrary constants present in the general solution of a linear differential equation of order $n$ are to be determined by $n$ suitably prescribed **supplementary conditions**

Frequently these conditions consist of the requirement that the function and its first $n - 1$ derivatives take on prescribed values at a given point $x = a$:

$$
    y(a)=y_0, \quad y^{\prime}(a)=y_0^{\prime}, \quad \ldots, \quad y^{(n-1)}(a)=y_0^{(n-1)}
$$

When such conditions are prescribed, the problem is known as an **initial-value problem**. In this case it can be shown that if the point $x = a$ is included in an interval where the coefficients $a_1(x), \cdots , a_n(x)$ and the right-hand side $h(x)$ of the differential equation, in standard form, are continuous, there exists a **unique solution** satisfying above Equations. Here, if the complete solution is written in the form

$$
\begin{align*}
  &y=\sum_{k=1}^n c_k u_k(x)+y_P(x) \\
  \implies& \sum_{k=1}^n c_k u_k^{(m)}(a)=y_0^{(m)}-y_P^{(m)}(a) \quad(m=0,1,2, \ldots, n-1)\\
  \implies& \begin{pmatrix}
    u_1^{(0)} & u_2^{(0)} & \cdots & u_{n}^{(0)} \\
    u_1^{(1)} & u_2^{(1)} & \cdots & u_{n}^{(1)} \\
    \vdots & \vdots & \ddots & \vdots \\
    u_1^{(n-1)} & u_2^{(n-1)} & \cdots & u_{n}^{(n-1)} \\
  \end{pmatrix}
  \begin{pmatrix}
    c_1 \\
    c_2 \\
    \vdots\\
    c_n
  \end{pmatrix} = 
  \begin{pmatrix}
    y_0^{(0)} - y_p^{(0)}(a)\\
    y_0^{(1)} - y_p^{(1)}(a)\\
    \vdots \\
    y_0^{(n-1)} - y_p^{(n-1)}(a)\\
  \end{pmatrix}
\end{align*}
$$

determinant of the coefficients of the constants $c_k$ is the value of the Wronskian of the linearly independent solutions $u_k$ at the point $x = a$

## Special solvable types of nonlinear equations
### 1. Separable equations
Q: 
$$\left(1+x^2\right) \mathrm{~d} y+\left(1+y^2\right) \mathrm{~d} x=0$$

A:
$$
\begin{align*}
   \frac{\mathrm{d} x}{1+x^2}+\frac{\mathrm{d} y}{1+y^2}&=0\\
   \tan ^{-1} x+\tan ^{-1} y&=\tan ^{-1} c \\
   x+y&=c(1-x y)  
\end{align*}
$$

Q:
$$\left(\frac{\mathrm{d} y}{\mathrm{d} x}\right)^2-4 y+4=0$$

A: yields two separable equations when solved algebraically for $\mathrm{d}y/\mathrm{d}x$
$$
\frac{\mathrm{d} y}{\mathrm{d} x}= \pm 2 \sqrt{y-1},
$$

provided that the division by $\sqrt{y-1}$ is legitimate, and hence there follows $\pm \sqrt{y-1}=x-c$, or
$$
y=1+(x-c)^2 .
$$

### 2. Exact first-order equations
A first-order equation, written in the form
$$
P(x,y)\mathrm{~d}x + Q(x,y)\mathrm{~d}y = 0.
$$

where $P$ and $Q$ are assumed to have continuous first partial derivatives, is said to be **exact** when $P$ and $Q$ satisfy the condition
$$
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}.
$$

In this case, and in this case only, there exists a function $u(x,y)$ such that,
$$
\begin{align*}
    &\mathrm{d}u = P\mathrm{~d}x + Q\mathrm{~d}y = 0\\
    \implies& u(x,y) = c.
\end{align*}
$$

since
$$
\frac{\partial u}{\partial x}=P, \quad \frac{\partial u}{\partial y}=Q,
$$

the necessity follows from the fact that
$$
\frac{\partial}{\partial x}\left(\frac{\partial u}{\partial y}\right)=\frac{\partial}{\partial y}\left(\frac{\partial u}{\partial x}\right)
$$

In order to obtain a function u satisfying the two relations, for example, we start with the first relation $\partial u / \partial x=P$
$$
u(x, y)=\int^x P(x, y) d x+f(y)
$$

${f}({y})$ is the added constant of integration to be determined by second relation $\partial u / \partial y=Q$
$$
\int^x \frac{\partial P}{\partial y} d x+f^{\prime}(y)=Q
$$

hence
$$
f^{\prime}(y)=Q-\int^x \frac{\partial P}{\partial y} d x
$$

the right-hand member is indeed only a function of $y$, so that $f(y)$ can be determined (with an irrelevant arbitrary additive constant) by direct integration $f^{\prime}(y)$ has no relation with $x$, because
$$
\frac{\partial}{\partial x}\left(Q-\int^x \frac{\partial P}{\partial y} d x\right)=\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0
$$

#### Example 10
$$
\frac{\mathrm{d} y}{\mathrm{d} x}=\frac{1+y^2+3 x^2 y}{1-2 x y-x^3}
$$

can be written in the form
$$
\left(3 x^2 y+y^2+1\right) \mathrm{~d} x+\left(x^3+2 x y-1\right) \mathrm{~d} y=0
$$

and the condition of exactness is satisfied. From the relation
$$
\frac{\partial u}{\partial x}=3 x^2 y+y^2+1
$$

there follows $u=x^3 y+x y^2+x+f(y)$. The relation
$$
\frac{\partial u}{\partial y}=x^3+2 x y-1
$$

then gives $x^3+2 x y+f^{\prime}(y)=x^3+2 x y-1$ or $f^{\prime}(y)=-1$, from which $f(y)=-y$, apart from an irrelevant arbitrary additive constant. Hence the required solution $u=c$ is
$$
x^3 y+x y^2+x-y=c .
$$

### 3. Homogeneous first-order equations
A function $f(x, y)$ is said to be **homogeneous of degree $n$** if there exists a constant $n$ such that, for every number $\lambda$
$$
f(\lambda x, \lambda y)=\lambda^n f(x, y) .
$$

The first-order differential equation, ${P}({x}, {y}) {\mathrm{~d}} {x}+{Q}({x}, {y}) {\mathrm{~d}} {y}={0}$, is said to be homogeneous if $P$ and $Q$ are both homogeneous of degree $n$ , for some constant $n$ . Differential equation becomes separable upon the change of variables
$$
\begin{aligned}
&y=v x\implies \mathrm{~d}y = v \mathrm{~d} x+x \mathrm{~d} v\\
&x^n P(1, v) \mathrm{~d} x+x^n Q(1, v)(v \mathrm{~d} x+x \mathrm{~d} v)=0 \\
\text { or } \quad&[P(1, v)+v Q(1, v)] \mathrm{~d} x+x Q(1, v) \mathrm{~d} v=0
\end{aligned}
$$

#### Example 11
$$
\left(3 y^2-x^2\right) \mathrm{~d} x=2 x y \mathrm{~d} y
$$

is homogeneous (with $n=2$ ) and, with $y=v x$, it becomes
> $$
    (3v^2x^2 - x^2)\mathrm{~d}x = 2vx^2(v \mathrm{~d} x+x \mathrm{~d} v)
> $$

$$
\implies \left(v^2-1\right) \mathrm{~d} x+2 x v \mathrm{~d} v=0
$$



from which there follows
$$
\frac{2 v \mathrm{~d} v}{v^2-1}=\frac{\mathrm{d} x}{x} \quad\left(x \neq 0, v^2 \neq 1\right)
$$

and hence
$$
\log \left|v^2-1\right|=\log |x|+\log |c|=\log |c x|
$$

or
$$
v^2-1=c x
$$

or
$$
y^2-x^2=c x^3 .
$$

### 4. Second-order equations lacking one variable
The general equation of second order is of the form
$$
    F\left(x,y,\frac{\mathrm{d}y}{\mathrm{d}x}, \frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right) = 0.
$$

Assume
$$
    \frac{\mathrm{d}y}{\mathrm{d}x} = p \implies \frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{\mathrm{d}p}{\mathrm{d}x} = \frac{\mathrm{d}p}{\mathrm{d}y}p
$$

1. Lacking $y$ or else:
    $$
    \begin{cases}
        F\left(x,y,p,\frac{\mathrm{d}p}{\mathrm{d}x}\right) = 0\\
        \frac{\mathrm{d}y}{\mathrm{d}x} = p
    \end{cases}.
    $$
2. Lacking $x$ or else:
    $$
    \begin{cases}
        F\left(x,y,p,p\frac{\mathrm{d}p}{\mathrm{d}y}\right) = 0\\
        \frac{\mathrm{d}y}{\mathrm{d}x} = p
    \end{cases}.
    $$

#### Example 12
$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}=x\left(\frac{\mathrm{d} y}{\mathrm{d} x}\right)^3
$$
lacks the variable $y$. With $\frac{\mathrm{d} y}{\mathrm{d} x}=p$ and $\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}=\frac{\mathrm{d} p}{\mathrm{d} x}$, there follows
$$
\frac{\mathrm{d} p}{\mathrm{d} x}=x p^3
$$
which separates to give

Hence
$$
\begin{aligned}
p & =\frac{ \pm 1}{\sqrt{c_1^2-x^2}} \\
\mathrm{d} y & = \pm \frac{\mathrm{d} x}{\sqrt{c_1^2-x^2}}
\end{aligned}
$$

from which there follows
$$
y= \pm \sin ^{-1} \frac{x}{c_1}+c_2 \quad \text { or } \quad x=c_1^{\prime} \sin \left(y-c_2\right),
$$
where $c_1^{\prime}= \pm c_1$.

## HW
### Question 1

**Q1**: Prove that $e^{r_1 x}$ and $e^{r_2 x}$ are linearly independent over any finite interval if $r_1 \neq r_2$ (6 points)

**Answer**: Let $u_1(x)=e^{r_1x}$ and $u_2(x)=e^{r_2x}$, then

$$
\frac{\mathrm{d}u_1}{\mathrm{d}x} = r_1e^{r_1x},\quad \frac{\mathrm{d}u_2}{\mathrm{d}x} = r_2e^{r_2x}.
$$

And according to Wronskian:

$$
W(u_1,u_2) = 
\begin{vmatrix}
u_1 & u_2\\
\frac{\mathrm{d}u_1}{\mathrm{d}x} & \frac{\mathrm{d}u_2}{\mathrm{d}x}
\end{vmatrix} = 
\begin{vmatrix}
e^{r_1x} & e^{r_2x} \\
r_1e^{r_1x} & r_2e^{r_2x}
\end{vmatrix} = (r_2-r_1)e^{(r_1+r_2)x}.
$$

Since $r_1\neq r_2$, and the exponential function is always larger than $0$ over any finite interval, then $W(u_1,u_2)\neq 0$, that means $e^{r_1 x}$ and $e^{r_2 x}$ are linearly independent over any finite interval if $r_1 \neq r_2$.

### Question 2

**Q2**: Solving the homogeneous linear ordinary differential equation (6 points)

$$
\frac{\mathrm{d}^3 y}{\mathrm{d} x^3}-y=0.
$$

**Answer**: 

Let $y=e^{sx}\implies (r^3-1)e^{sx}=0\implies r^3-1=0$

The characteristic equation is:

$$
\begin{align*}
&r^3 - 1 = 0 \\
\implies& (r-1)(r^2+r+1) = 0\\
\implies& (r-1)\left(r-\frac{-1+\sqrt{3}i}{2}\right)\left(r-\frac{-1-\sqrt{3}i}{2}\right) = 0.
\end{align*}
$$

And the solution is: $r_1=1, r_2=\frac{-1+\sqrt{3}i}{2}, r_3=\frac{-1-\sqrt{3}i}{2}$. Then the general solution is:

$$
y = c_1e^x + e^{-\frac12 x}\left[c_2\cos\left(\frac{\sqrt{3}}{2}x\right) + c_3\sin\left(\frac{\sqrt{3}}{2}x\right)\right]
$$

where $c_1,c_2,c_3$ are arbitary constant values.

### Question 3

**Q3**: Solving the inhomogeneous linear ordinary differential equation (8 marks)

$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2}-y=\sin (x).
$$

**Answer**: The characteristic equation of the homogeneous equation is:

$$
r^2 - 1 = 0 \implies (r-1)(r+1) = 0 \implies r_1=1,r_2=-1.
$$

Thus the general solution of the homogeneous equation is

$$
c_1e^x + c_2e^{-x}
$$

where $c_1,c_2$ are arbitary constant values.

Since RHS is $\sin(x)$, and the family is $\{\sin(x), \cos(x)\}$, then it's assumed that $y_p$ is:

$$
y_p = A\sin(x) + B\cos(x)
$$

then

$$
\begin{align*}
&\begin{aligned}
\frac{\mathrm{d}^2 y_p}{\mathrm{d} x^2}-y_p =& -A\sin(x) - B\cos(x) - (A\sin(x) + B\cos(x)) \\
=& -2A\sin(x) -2B\cos(x) = \sin(x)
\end{aligned} \\
\implies& A = -\frac{1}{2}, B=0.
\end{align*}
$$

Thus $y_p = -\frac12\sin(x)$, and the general solution is

$$
y = c_1e^x + c_2e^{-x} -\frac12\sin(x)
$$

where $c_1,c_2$ are arbitary constant values.

**Method 2**:

Since $u_1=e^x \quad u_2=e^{-x} \quad W\left(u_1, u_2\right)=\left|\begin{array}{ll}e^x & e^{-x} \\ e^x & -e^{-x}\end{array}\right|=-1-1=-2$

$\therefore$ The particular solution

$$
y_p=c_1(x) u_1(x)+c_2(x) u_2(x)
$$

where

$$
\begin{aligned}
&c'_1(x) = \frac{\left|\begin{matrix}
0 & e^{-x} \\
\sin x & -e^{-x}
\end{matrix}\right|}{W(u_1,u_2)} = \frac{-e^{-x}\sin x}{W(u_1,u_2)}\\
&c'_2(x) = \frac{\left|\begin{matrix}
e^{x} & 0 \\
e^x & \sin x
\end{matrix}\right|}{W(u_1,u_2)} = \frac{e^{x}\sin x}{W(u_1,u_2)}
\end{aligned}
$$

$$
\implies c_1(x) = \int \frac{-e^{-x}\sin x}{W(u_1,u_2)}\mathrm{~d}x = \frac12\int e^{-x}\sin x\mathrm{~d}x.
$$

Integration by parts:

$$
\begin{aligned}
&c_1=-\frac{1}{2}(\sin x+\cos x) e^{-x}-c_1 \\
\Rightarrow& 2 c_1=-\frac{1}{2}(\sin x+\cos x) e^{-x} \\
\Rightarrow& c_1=-\frac{1}{4}(\sin x + \cos x)e^{-x}.
\end{aligned}
$$

Similarly 

$$
c_2=-\frac{1}{4}(\sin x-\cos x) e^x
$$

Therefore 

$$
y_p=-\frac{1}{4}(\sin x+\cos x)-\frac{1}{4}(\sin x-\cos x)=-\frac{1}{2} \sin x
$$

The general solution $y=A_1 e^x+B_2 e^{-x}-\frac{1}{2} \sin x$
}
# Boundary-Value Problems
## Characteristic Values and Characteristic Functions
### Introduction
In many problems the **solution** of an ordinary differential equation must satisfy **certain conditions** which are specified for two or more values of the independent variable. Such problems are called **boundary-value problems**, in distinction with initial-value problems, wherein all conditions are specified at **one point**.

In illustration, we may require a solution of a homogeneous linear equation of second order of the following form
$$
\frac{\mathrm{\mathrm{d}}^2y}{\mathrm{\mathrm{d}}x^2} + a_1(x)\frac{\mathrm{\mathrm{d}}y}{\mathrm{\mathrm{d}}x}+a_2(x)y = 0.
$$

which vanishes at the two points $x=a$ and $x=b$
$$
y(a) = 0, \quad y(b) = 0.
$$

The general solution of the differential equation is of the form
$$
y=c_1u_1(x) + c_2u_2(x).
$$

where $u_1$ and $u_2$ are linearly independent solutions and $c_1$ and $c_2$ are constants, the boundary conditions constitute the requirements
$$
\left.\begin{matrix}
  c_1u_1(a) + c_2u_2(a) = 0\\
  c_1u_1(b) + c_2u_2(b) = 0  
\end{matrix}\right\}
$$

In order that **nontrivial solutions exist** (no meaning in physics), it is necessary that the determinant of coefficients vanish
$$
\left|
\begin{matrix}
    u_1(a) & u_2(a)\\   
    u_1(b) & u_2(b)   
\end{matrix}
\right| = 0
$$

> OR $c_1=c_2\equiv 0$, has no nontrivial solution

If this condition exists, then we can easily derive (by solving the linear equations about $c_1,c_2$ )
$$
y = C[u_2(a)u_1(x) - u_1(a)u_2(x)]
$$

### Characteristic Values and Characteristic Functions
In many cases, one or both coefficients $a_1(x)$ and $a_2(x)$ and hence the solutions $u_1(x)$ and $u_2(x)$, depend upon a constant parameter $\lambda$ which may take on various constant values in a discussion.

In such cases, the **determinant may vanish for certain definite values** of $\lambda$, say $\lambda = \lambda_1,\lambda_2,\cdots$

the values of $\lambda$ for which **nontrivial solutions exist** are called the **characteristic values** (or eigenvalues) of $\lambda$, and the **corresponding solutions** are called the **characteristic functions** (or eigenfunctions) of the problem.

#### Example: boundary value problem

$$
\frac{\mathrm{\mathrm{d}}^{2} y}{\mathrm{\mathrm{d}} x^{2}}+\lambda y=0, \quad y(0)=y(L)=0
$$

How to solve this BVP?
Assume $y=e^{r x}$

$$
\begin{gathered}
r^{2} e^{r x}+\lambda e^{r x}=0 \\
r^{2}=-\lambda
\end{gathered}
$$

1. Suppose $\lambda<0$, let $\lambda=-\beta$

$$
\begin{aligned}
&r= \pm \sqrt{\beta} \\
\Rightarrow&y=c_{1} e^{\sqrt{\beta} x}+c_{2} e^{-\sqrt{\beta} x} \\
&y(0)=0 \Rightarrow c_{1}+c_{2}=0 ; \\
&y(L)=0 \Rightarrow c_{1} e^{\sqrt{\beta} L}+c_{2} e^{-\sqrt{\beta} L}=0 \\
&\left|\begin{array}{cc}
1 & 1 \\
e^{\sqrt{\beta} L} & e^{-\sqrt{\beta} L}
\end{array}\right| \neq 0 \\
\Rightarrow& {y}=0 \text { (trivial solution) }
\end{aligned}
$$

2. Suppose $\lambda>0$

$$
\begin{aligned}
&r^{2}+\lambda=0 \\
&r= \pm \sqrt{\lambda} i \\
\Rightarrow&y=c_{1} e^{\sqrt{\lambda} x i}+c_{2} e^{-\sqrt{\lambda} x i} \\
\text{Since}\quad &\sin x=\frac{e^{i x}-e^{-i x}}{2 i}, \quad \cos x=\frac{e^{i x}+e^{-i x}}{2} \\
\Rightarrow&y=A_{1} \sin (\sqrt{\lambda} x)+A_{2} \cos (\sqrt{\lambda} x) \\
&y(0)=0 \Rightarrow A_{2}=0 ; \\
&y(L)=0 \Rightarrow A_{1} \sin (\sqrt{\lambda} L)+A_{2} \cos (\sqrt{\lambda} L)=0 \\
\Rightarrow& \left\{
\begin{aligned}
  &A_{1}=0 \quad y=0, \text { trivial solution } \\
  &\sin (\sqrt{\lambda} L)=0 \Rightarrow \sqrt{\lambda} L=n \pi, \quad n=1,2, \ldots
\end{aligned} \right.\\
\Rightarrow&y=A_{1} \sin \left(\frac{n \pi}{L} x\right) \quad \text { nontrivial solution }
\end{aligned}
$$

## Orthogonality of Functions
> An extremely useful property of BVP of a rather general type consists of the fact that the **set of characteristic functions** corresponding to such problems are **orthogonal** w.r.t. a weighting function.
>
> An orthogonal basis can expand an indefinite dimensional **function space**, and eigenfunctions in S-L equations with specific boundary values can construct an orthogonal basis

The eigenfunctions of second-order linear differential equations have **orthogonality**

Two functions $\varphi_m(x)$ and $\varphi_n(x)$ are said to be **orthogonal** over an interval $(a,b)$ if the integral of the product $\varphi_m(x),\varphi_n(x)$ over that interval vanishes
$$
\int_a^b \varphi_m(x)\varphi_n(x)\mathrm{~\mathrm{d}}x = 0.
$$

More generally, the functions $\varphi_m(x)$ and $\varphi_n(x)$ are said to be orthogonal with respect to a **weighting function** $r(x)$, over an interval $(a,b)$, if
$$
\int_a^b r(x)\varphi_m(x)\varphi_n(x)\mathrm{~\mathrm{d}}x = 0.
$$

### Sturm-Liouville Problem
The linear homogeneous second-order differential equation with suitably prescribed homogeneous boundary conditions at the ends of an interval $(a, b)$
$$
\frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\left[p(x) \frac{\mathrm{\mathrm{d}} y}{\mathrm{\mathrm{d}} x}\right]+[q(x)+\lambda r(x)] y=0
$$

The functions $p, q$, and $r$ are assumed to be **real**. In terms of the operator

$$
\begin{gathered}
L=\frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\left(p \frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\right)+q=p \frac{\mathrm{\mathrm{d}}^{2}}{\mathrm{\mathrm{d}} x^{2}}+\frac{\mathrm{\mathrm{d}} p}{\mathrm{\mathrm{d}} x} \frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}+q \\
L y+\lambda r(x) y=0
\end{gathered}
$$

Note that any equation of the following form

$$
a_{0}(x) \frac{\mathrm{\mathrm{d}}^{2} y}{\mathrm{\mathrm{d}} x^{2}}+a_{1}(x) \frac{\mathrm{\mathrm{d}} y}{\mathrm{\mathrm{d}} x}+\left[a_{2}(x)+\lambda a_{3}(x)\right] y=0
$$

can be written in the **Sturm-Liouville form** by setting 
$$
p=e^{\int\frac{a_{1}}{a_{0}}\mathrm{~d}x}, \quad q=\frac{a_{2}}{a_{0}} p, \quad r=\frac{a_{3}}{a_{0}} p
$$

### Orthogonality of Characteristic Functions or Eigenfunctions

Suppose now that $\lambda_{1}$ and $\lambda_{2}$ are any two different characteristic values of the problem considered and that the corresponding characteristic functions are $y=\varphi_{1}(x)$ and $y=\varphi_{2}(x)$, respectively. There then follows

$$
\left.\begin{array}{l}
\frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\left(p \frac{\mathrm{\mathrm{d}} \varphi_{1}}{\mathrm{\mathrm{d}} x}\right)+\left(q+\lambda_{1} r\right) \varphi_{1}=0 \\
\frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\left(p \frac{\mathrm{\mathrm{d}} \varphi_{2}}{\mathrm{\mathrm{d}} x}\right)+\left(q+\lambda_{2} r\right) \varphi_{2}=0
\end{array}\right\}
$$

If the first of these equations is multiplied by $\varphi_{2}(x)$ and the second by $\varphi_{1}(x)$, and the resultant equations are subtracted from each other, there follows

$$
\varphi_{2} \frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\left(p \frac{\mathrm{\mathrm{d}} \varphi_{1}}{\mathrm{\mathrm{d}} x}\right)-\varphi_{1} \frac{\mathrm{\mathrm{d}}}{\mathrm{\mathrm{d}} x}\left(p \frac{\mathrm{\mathrm{d}} \varphi_{2}}{\mathrm{\mathrm{d}} x}\right)+\left(\lambda_{1}-\lambda_{2}\right) r \varphi_{1} \varphi_{2}=0,
$$

and hence

$$
\left(\lambda_{2}-\lambda_{1}\right) \int_{a}^{b} r \varphi_{1} \varphi_{2} \mathrm{\mathrm{d}} x=\int_{a}^{b}\left[\varphi_{2} \frac{\mathrm{d}}{\mathrm{d} x}\left(p \frac{\mathrm{d} \varphi_{1}}{\mathrm{d} x}\right)-\varphi_{1} \frac{\mathrm{d}}{\mathrm{d} x}\left(p \frac{\mathrm{d} \varphi_{2}}{\mathrm{d} x}\right)\right] \mathrm{~d} x
$$

Integrating the right member by parts, we obtain
> $$
\mathrm{RHS} = \int_{a}^{b}\left[\varphi_{2} \mathrm{~d}\left(p \frac{\mathrm{d} \varphi_{1}}{\mathrm{d} x}\right)-\varphi_{1} \mathrm{d}\left(p \frac{\mathrm{d} \varphi_{2}}{\mathrm{d} x}\right)\right]
> $$

$$
\begin{aligned}
\left(\lambda_{2}-\lambda_{1}\right) \int_{a}^{b} r \varphi_{1} \varphi_{2} \mathrm{d} x= & {\left[\varphi_{2}\left(p \frac{\mathrm{d} \varphi_{1}}{\mathrm{d} x}\right)-\varphi_{1}\left(p \frac{\mathrm{d} \varphi_{2}}{\mathrm{d} x}\right)\right]_{a}^{b} } \\
& -\int_{a}^{b}\left[\frac{\mathrm{d} \varphi_{2}}{\mathrm{d} x}\left(p \frac{\mathrm{d} \varphi_{1}}{\mathrm{d} x}\right)-\frac{\mathrm{d} \varphi_{1}}{\mathrm{d} x}\left(p \frac{\mathrm{d} \varphi_{2}}{\mathrm{d} x}\right)\right] \mathrm{d} x
\end{aligned}
$$

Since the last integrand vanishes identically, there follows finally

$$
\left(\lambda_{2}-\lambda_{1}\right) \int_{a}^{b} r \varphi_{1} \varphi_{2} \mathrm{d} x=\left[p(x)\left\{\varphi_{2}(x) \frac{\mathrm{d} \varphi_{1}(x)}{\mathrm{d} x}-\varphi_{1}(x) \frac{\mathrm{d} \varphi_{2}(x)}{\mathrm{d} x}\right\}\right]_{a}^{b} .
$$

if at each **end point** a prescribed condition is of one of the following forms:

$$
\left.\begin{aligned}
y & =0 \\
\frac{\mathrm{d} y}{\mathrm{d} x} & =0 \\
y+\alpha \frac{\mathrm{d} y}{\mathrm{d} x} & =0
\end{aligned}\right\} \quad(\text { when } x=a \text { or } x=b)
$$

> $$
\varphi_2\varphi_1' - \varphi_1\varphi_2'\equiv (\varphi_2 + \alpha\varphi_2')\varphi_1' - (\varphi_1 + \alpha\varphi_1')\varphi_2'
> $$

$$
\implies\int_{a}^{b} r(x) \varphi_{1}(x) \varphi_{2}(x) \mathrm{~d} x=0 \quad \text { if } \lambda_{2} \neq \lambda_{1}
$$

that is, if the characteristic functions correspond to different characteristic numbers, then they are orthogonal with respect to the function $r(x)$.

As an example, the problem

$$
\frac{\mathrm{d}^{2} y}{\mathrm{d} x^{2}}+\lambda y=0, \quad y(0)=y(L)=0
$$

has the characteristic values $\lambda_{n}=n^{2} \pi^{2} / L^{2}$ with corresponding characteristic functions proportional to the functions $y_{n}=\sin (n \pi x / L)$. Since in this case $r(x)=1$,

$$
\int_{0}^{L} y_{m}(x) y_{n}(x) \mathrm{d} x=\int_{0}^{L} \sin \frac{m \pi x}{L} \sin \frac{n \pi x}{L} \mathrm{d} x=0 \quad(m \neq n)
$$

when $m$ and $n$ are positive integers. This fact is readily verified independently by direct integration.

### Expansion of arbitrary functions in series of orthogonal functions

Suppose that we have a set of functions $\left\{\varphi_{n}(x)\right\}$, **orthogonal** in a given interval $( a, b )$ with respect to a certain **known** weighting function $r(x)$, and desire to expand a given function $f(x)$ in terms of a series of these functions, of the form

$$
\begin{aligned}
f(x) & =A_{0} \varphi_{0}(x)+A_{1} \varphi_{1}(x)+A_{2} \varphi_{2}(x)+\cdots \\
& =\sum_{n=0}^{\infty} A_{n} \varphi_{n}(x)
\end{aligned}
$$

If we assume that such an expansion exists, and multiply both sides by $r(x) \varphi_{k}(x)$, where $\varphi_{k}(x)$ is the $k$ th function in the set, we have

$$
r(x) f(x) \varphi_{k}(x)=\sum_{n=0}^{\infty} A_{n} r(x) \varphi_{n}(x) \varphi_{k}(x)
$$

Next, if we integrate both sides of this last equation over the interval $(a, b)$ and **assume** that the integral of the infinite sum is equivalent to the sum of the integrals, there follows formally

> The assumption is justified if $\sum\limits_{n=0}^{\infty} A_{n} \varphi_{n}(x)$ is **uniformly convergent** in $(a,b)$.

$$
\int_{a}^{b} r(x) f(x) \varphi_{k}(x) \mathrm{d} x=\sum_{n=0}^{\infty} A_{n} \int_{a}^{b} r(x) \varphi_{n}(x) \varphi_{k}(x) \mathrm{d} x
$$

But by virtue of the orthogonality of the set $\left\{\varphi_{n}(x)\right\}$, all terms in the sum on the right are **zero** except that one for which $n=k$

$$
A_{n} \int_{a}^{b} r(x)\left[\varphi_{n}(x)\right]^{2} \mathrm{d} x=\int_{a}^{b} r(x) f(x) \varphi_{n}(x) \mathrm{d} x
$$

With these values of the constants a formal series $\sum A_{n} \varphi_{n}(x)$ is determined. It should be emphasized, however, that we have not established the fact that this series actually does represent the function $f(x)$ in the interval $(a, b)$. In fact, we have not even shown that the series converges in $(a, b)$ and hence represents any function in that interval. We may, however, speak of the series so obtained as the **formal representation of the function** $f(x)$.

## BVP involving inhomogeneous differential equations

Boundary-value problems involving inhomogeneous differential equations

$$
\begin{aligned}
& {\left[\frac{\mathrm{d}}{\mathrm{d} x}\left(p \frac{\mathrm{d} y}{\mathrm{d} x}\right)+q y\right]+\lambda r y=F(x)} \\
& \quad \text { or } \quad L y+\lambda r y=F(x)
\end{aligned}
$$

if at each end point a prescribed condition is of one of

$$
\left.\begin{aligned}
y=0 \\
\frac{\mathrm{d} y}{\mathrm{d} x}=0 \\
y+\alpha \frac{\mathrm{d} y}{\mathrm{d} x}=0
\end{aligned}\right\} \quad(\text { when } x=a \text { or } x=b)
$$

If the required solution exists, we express it as a series of the form (method of series solution)

$$
y=\sum a_{n} \varphi_{n}(x)
$$

in which:

$$
L \varphi_{n}(x)+\lambda_{n} r(x) \varphi_{n}(x)=0, \quad n=1,2,\cdots
$$

Substituting the above expression of $y$ into the inhomogeneous equation

$$
r(x) \sum\left(\lambda-\lambda_{n}\right) a_{n} \varphi_{n}(x)=F(x)
$$

Taking

$$
\begin{aligned}
& f(x)=\frac{F(x)}{r(x)}=\sum A_{n} \varphi_{n}(x) \quad \text { where } \\
&A_{n} \int_{a}^{b} r(x)\left[\varphi_{n}(x)\right]^{2} \mathrm{d} x=\int_{a}^{b} r(x) f(x) \varphi_{n}(x) \mathrm{d} x \\
\implies& \sum\left(\lambda-\lambda_{n}\right) a_{n} \varphi_{n}(x) = \sum A_n\varphi_n(x)\\
& y=\sum \frac{A_{n}}{\lambda-\lambda_{n}} \varphi_{n}(x)=\frac{A_{0}}{\lambda-\lambda_{0}} \varphi_{0}(x)+\frac{A_{1}}{\lambda-\lambda_{1}} \varphi_{1}(x)+\cdots
\end{aligned}
$$

#### Example

$$
\begin{gathered}
\text { Solve }\quad \frac{\mathrm{d}^{2} y}{\mathrm{d} x^{2}}+\lambda y=F(x), \quad y(0)=y(L)=0 \\
\frac{\mathrm{d}^{2} y}{\mathrm{d} x^{2}}+\lambda y=0\implies \lambda_{n}=\left(\frac{n \pi}{L}\right)^{2}, y=\sum A_{n} \sin \left(\frac{n \pi}{L} x\right)
\end{gathered}
$$

What happens to $\lambda$ if ${F}(x)$ exists?

Substitute the homogeneous solution into question

$$
\sum_{n=0}^{\infty}\left[-A_{n}\left(\frac{n \pi}{L}\right)^{2} \sin \left(\frac{n \pi}{L} x\right)\right]+\lambda \sum_{n=0}^{\infty} A_{n} \sin \left(\frac{n \pi}{L} x\right)=F(x)
$$

Orthogonal expand ${F}({x}): F(x)=\sum\limits_{n=0}^{\infty} F_{n} \sin \left(\frac{n \pi}{L} x\right)$

$$
\begin{gathered}
A_{n}\left[\lambda-\left(\frac{n \pi}{L}\right)^{2}\right]=F_{n} \Rightarrow A_{n}=F_{n} \left/\left[\lambda-\left(\frac{n \pi}{L}\right)^{2}\right]\right. \\
y=\sum_{n=0}^{\infty} \frac{F_{n}}{\lambda-\left(\frac{n \pi}{L}\right)^{2}} \sin \left(\frac{n \pi}{L} x\right)
\end{gathered}
$$

## BV Problems in Engineering and Science

- Quantum mechanics
- Semi-conductor and electronics
- Continuum mechanics
- Elastic waves
- Thermal hydraulics


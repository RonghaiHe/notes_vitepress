# Laplace Transform
- [Formulation & Definition](#formulation-definition)
- [Properties](#properties-core)
- [Inversion of Laplace Transform](#inversion-of-laplace-transform)

## Formulation & Definition
### Introduction
In mathematics, the **Laplace transform**, named after its inventor Pierre-Simon Laplace is an integral **transform** that converts a function of a real variable $t$ (often **time**) to a function of a complex variable $s$ (**complex frequency**).

For suitable functions $f$, the Laplace transform is the integral
$$
    \mathscr{L}\{f\}(s) = \int_0^\infty f(t)e^{-st}\mathrm{~d}t.
$$

> Here's the Fourier Transformation (for **real number**):
> $$
    \mathscr{F}(\omega) = \mathscr{F}(f(t)) = \int_0^\infty f(t)e^{-i\omega t}\mathrm{~d}t.
> $$

### Why do we need Laplace Transform for solving ODE?

<img src="/math_em8_1_laplace.png" alt="Why using laplace transform" width="100%" align="center">

### The Formulation of Laplace Transform
::: warning Definition: Laplace Transform
If a function $f(t)$ is multiplied by $e^{-st}$, and the result is integrated with respect to $t$ from $t = 0$ to $t = \infty$, a new function of the variable $s$ is obtained when the integral exists.

This function (when it exists) is called the **Laplace transform** of $f(t)$:
$$
    \mathscr{L}\{f\}(s) = \int_0^\infty f(t)e^{-st}\mathrm{~d}t.
$$

:::

Suppose that we require the solution of the differential equation:
$$
\frac{\mathrm{d}y}{\mathrm{d}t} - y = e^{at}
$$

for positive values of $t$, which satisfies the initial condition
$$
y(0) = -1.
$$

> $$
    \begin{align*}
        &\frac{\mathrm{d}y}{\mathrm{d}t} - y = e^{at}\\
        \implies& \text{Let} \quad p = \exp\left(\int-1\mathrm{~d}t\right) = \exp(-t)\\
        \implies& y = \frac{1}{p}\int pe^{at}\mathrm{~d}t + \frac{c}{\exp(-t)}\\
        & y = \exp(t)\int \exp(-t+at)\mathrm{~d}t + c\exp(t)\\
        & y= \exp(t)\left(c+\frac{1}{a-1}\exp((a-1)t)\right)\\
        y(0)=-1 \implies & c = -1 - \frac{1}{a-1} = -\frac{a}{a-1}\\
        \implies& y = \exp(t)\left(-\frac{a}{a-1} + \frac{1}{a-1}\exp((a-1)t)\right)\\
        & y= \frac{1}{a-1}(\exp(at)-a\exp(t))
    \end{align*}
> $$

1. We first take the Laplace transform of both sides of the previous equation, by multiplying both sides of the equation by $e^{-s t}$ and integrating the results with respect to $t$ from zero to infinity,
$$
\int_0^{\infty} e^{-s t} \frac{\mathrm{d} y}{\mathrm{d} t} \mathrm{~d} t-\int_0^{\infty} e^{-s t} y \mathrm{~d} t=\int_0^{\infty} e^{-s t} e^{a t} \mathrm{~d} t
$$

2. The integral on the right is readily evaluated
$$
\int_0^{\infty} e^{-s t} e^{a t} \mathrm{~d} t=-\left.\frac{e^{-(s-a) t}}{s-a}\right|_0 ^{\infty}=\frac{1}{s-a}
$$

the integral exists when $s>a$. The first integral on the left can be integrated formally by parts to give
$$
\begin{aligned}
   \int_0^{\infty} e^{-s t} \frac{\mathrm{d} y}{\mathrm{d} t} \mathrm{~d} t & =\left.e^{-s t} y(t)\right|_0 ^{\infty}+s \int_0^{\infty} e^{-s t} y \mathrm{~d} t \\
   & =-y(0)+s \int_0^{\infty} e^{-s t} y \mathrm{~d} t \\
   & =1+s \int_0^{\infty} e^{-s t} y \mathrm{~d} t
\end{aligned}
$$

1. As a result, we obtain
$$
\begin{align*}
&(s-1) \int_0^{\infty} e^{-s t} y \mathrm{~d} t=\frac{1}{s-a}-1 \quad \text { or }\\
&\int_0^{\infty} e^{-s t} y \mathrm{~d} t=\frac{a+1-s}{(s-1)(s-a)}
\end{align*}
$$

1. Expand this expression by the method of partial fractions, to obtain the equivalent form
$$
\int_0^{\infty} e^{-s t} y \mathrm{~d} t=\frac{1}{a-1} \frac{1}{s-a}-\frac{a}{a-1} \frac{1}{s-1}
$$

1. Reference to $\int_0^{\infty} e^{-t} e^{a t} \mathrm{~d} t=-\left.\frac{e^{-(-b-a) t}}{s-a}\right|_0 ^{\infty}=\frac{1}{s-a}$, then indicates that, since $1 /({s}-{a})$ is the transform of ${e}^{{at}}$, the first term is the transform of ${e}^{{at} /({a}-1)}$ and the second term the transform of $-{ae}^{{t}} /({a}-1)$.

2. The original problem is now apparently reduced to the problem of determining a function $y(t)$ whose Laplace transform is given by the above equation
3. Applying the inverse Laplace transform, one can obtain for $a \neq 1$
$$
y=\frac{1}{a-1}\left(e^{a t}-a e^t\right)
$$
or for $a=1$, can be obtained by taking the limit as $a\to 1$

$$
y=(t-1) e^t
$$

### Definition of Laplace Transform
The Laplace transform of a function $f(t)$, defined for **positive values** of $t$, is frequently indicated by the notation $\mathscr{L}\{f(t)\}$ and is defined, as a function of the variable $s$, by the integral
$$
    \mathscr{L}\{f(t)\} = \int_0^\infty f(t)e^{-st}\mathrm{~d}t.
$$

over that range of values of $s$ for which the integral exists.

The notation $\bar{f}(s)$ or merely $\bar{f}$ is also used in place of $\mathscr{L}\{f(t)\}$.

### The Existence of Laplace Transform
- Integration may **fail** to define a function of $s$, in particular, because of infinite **discontinuities** in $f(t)$ for certain positive values of $t$ or because of failure of $f(t)$ to behave in a sufficiently regular way near $t=0$ or for large values of $t$. However, the presence of a **finite** number of finite discontinuities or "jumps" will not, in itself, **affect the existence** of the integral
- A function $f(t)$ is said to be **piecewise continuous** in a finite range if it is possible to divide that range into a finite number of intervals such that $f(t)$ is continuous inside each interval and approaches finite values as either end of any interval is approached from the interior. Such functions may thus have **finite jumps** at points inside the range considered
$$
    \mathscr{L}\{f(t)\} = \int_0^\infty f(t)e^{-st}\mathrm{~d}t = \left(\int_0^{t_1} + \int_{t_1}^T + \int_T^\infty\right) f(t)e^{-st}\mathrm{~d}t
$$

Sufficient additional condition to guarantee the existence of the third integral item $\mathscr{L}\{f(t)\} = \int_T^\infty f(t)e^{-st}\mathrm{~d}t$, at least for sufficiently large values of $s$, is the requirement that $f(t)$ belong to the rather extensive class of "functions of exponential order". 

A function $f(t)$ is said to be of **exponential order** if, for some number $s_0$, the product $e^{-s_0t}|f(t)|$ is bounded for large values of $t$, say for $t > T$.

If the bound is denoted by $M$, then there follows, when $t > T$:
$$
  e^{-s_0t}|f(t)| < M, \text{ or } |f(t)|<Me^{s_0t}.\\
  \implies \left|e^{-s t} f(t)\right|<e^{-s t} \cdot M e^{s_0 t}=M e^{-\left(s-s_0\right) t}
$$

the Laplace transform of $f(t)$ exists, when $s$ is sufficiently large, if $f(t)$ satisfies the following conditions:
- $f(t)$ is **continuous or piecewise continuous** in every finite interval $t_1 \leq t \leq T$, where $t_1>0$.
- $t^n|f(t)|$ is bounded near $t=0$ for some number $n$, where $n<1$.
- $e^{-s_0 t}|f(t)|$ is bounded for large values of $t$, for some number $s_0$.

### Examples for Laplace Transforms
$$
\begin{aligned}
\mathscr{L}\{1\}&=\int_0^{\infty} e^{-s t} \mathrm{~d} t=-\left.\frac{e^{-s t}}{s}\right|_0 ^{\infty}=\frac{1}{s} \quad(s>0) . \\ \mathscr{L}\left\{e^{a t}\right\}&=\int_0^{\infty} e^{-(s-a) t} \mathrm{~d} t=-\left.\frac{e^{-(s-a) t}}{s-a}\right|_0 ^{\infty}=\frac{1}{s-a} \quad(s>a) . \\ \mathscr{L}\{\sin a t\}&=\int_0^{\infty} e^{-s t} \sin a t \mathrm{~d} t=-\left.\frac{e^{-s t}}{s^2+a^2}(s \sin a t+a \cos a t)\right|_0 ^{\infty} \\ &=\frac{a}{s^2+a^2} \quad(s>0) .
\end{aligned}
$$

## Properties [core]
### Properties of Laplace Transform
Some most useful properties of Laplace transforms:
$$
\mathscr{L}\{a f(t)+b g(t)\}=a \bar{f}(s)+b \bar{g}(s)
$$

$$
\begin{align*}
\mathscr{L}\left\{\frac{\mathrm{d}^n f(t)}{\mathrm{d} t^n}\right\}=s^n \bar{f}(s)-&\left[s^{n-1} f(0+)+s^{n-2} \frac{\mathrm{d} f(0+)}{\mathrm{d} t}\right. \\
&\left.\quad +s^{n-3} \frac{\mathrm{d}^2 f(0+)}{\mathrm{d} t^2}+\cdots+\frac{\mathrm{d}^{n-1} f(0+)}{\mathrm{d} t^{n-1}}\right]
\end{align*}
$$

> $$
    \mathscr{L}\left\{\frac{\mathrm{d} f(t)}{\mathrm{d} t}\right\}=\int_0^{\infty} e^{-s t} \frac{\mathrm{d} f(t)}{\mathrm{d} t} \mathrm{~d} t
> $$
> 
>An integration by parts gives
> $$
\int_0^{\infty} e^{-s t} \frac{\mathrm{d} f(t)}{\mathrm{d} t} \mathrm{~d} t=\left.e^{-s t} f(t)\right|_0 ^{\infty}+s \int_0^{\infty} e^{-s t} f(t) \mathrm{~d} t
> $$
> 
> if $f(t)$ is continuous and $\frac{\mathrm{d} f(t)}{\mathrm{d} t}$ is piecewise continuous in every interval But since $f(t)$ is of exponential order, the integrated part vanishes as (for $s>s_0$ ), and there follows
> 
> $$
\begin{align*}
\mathscr{L}\left\{\frac{\mathrm{d} f(t)}{\mathrm{d} t}\right\}=&s \bar{f}(s)-f(0+) \\
\mathscr{L}\left\{\frac{\mathrm{d}^2 f(t)}{\mathrm{d} t^2}\right\}=&\int_0^{\infty} e^{-s t} \frac{\mathrm{d}^2 f(t)}{\mathrm{d} t^2} \mathrm{~d} t \\
=&\left.e^{-s t} \frac{\mathrm{d} f(t)}{\mathrm{d} t}\right|_0 ^{\infty}+s \int_0^{\infty} e^{-s t} \frac{\mathrm{d} f(t)}{\mathrm{d} t} \mathrm{~d} t \\
=&\left.e^{-s t} \frac{\mathrm{d} f(t)}{\mathrm{d} t}\right|_0 ^{\infty}+s \mathscr{L}\left\{\frac{\mathrm{d} f(t)}{\mathrm{d} t}\right\} \\
\mathscr{L}\left\{\frac{\mathrm{d}^2 f(t)}{\mathrm{d} t^2}\right\}=&s^2 \bar{f}(s)-s f(0+)-\frac{\mathrm{d} f(0+)}{\mathrm{d} t}
\end{align*}
> $$

$$
\mathscr{L}\left\{\int_0^t f(u) \mathrm{~d} u\right\}=\frac{1}{s} \bar{f}(s)$$

> $$
\begin{aligned}
\mathscr{L}\left\{\int_0^t f(u) \mathrm{~d} u\right\} & =\int_0^{\infty} e^{-s t}\left\{\int_0^t f(u) \mathrm{~d} u\right\} \mathrm{~d} t \\
& =\left[\frac{e^{-s t}}{-s} \int_0^t f(u) \mathrm{~d} u\right]_0^{\infty}+\frac{1}{s} \int_0^{\infty} e^{-s t} f(t) \mathrm{~d} t \\
& =\frac{1}{s} \bar{f}(s)
\end{aligned}
> $$
>
> the integrated part vanishing at the upper limit (for sufficiently large values of $s$ ), since $f(t)$, and hence $\int_0^t f(u) \mathrm{~d} u$, is of exponential order. Thus, in general, if a function is integrated over $(0, t)$, the transform of the integral is obtained by dividing the transform of the function by $s$.
> 
> If the lower limit differs from zero, the formula
> $$
\mathscr{L}\left\{\int_a^t f(u) \mathrm{~d} u\right\}=\frac{1}{s} \bar{f}(s)-\frac{1}{s} \int_0^a f(u) \mathrm{~d} u
> $$
> 
> is easily established.

$$\mathscr{L}\left\{e^{a t} f(t)\right\}=\bar{f}(s-a)$$

If $f(t)=\left\{\begin{array}{cc}0, & t<a \\ g(t-a), & t \geqq a\end{array}\right\}$ with $a \geqq 0$, then $\bar{f}(s)=e^{-a s} \bar{g}(s)$.

$$
\mathscr{L}\left\{t^n f(t)\right\}=(-1)^n \frac{\mathrm{d}^n \bar{f}(s)}{\mathrm{d} s^n}
$$

$$
\mathscr{L}\left\{\int_0^t f(t-u) g(u) \mathrm{~d} u\right\}=\bar{f}(s) \bar{g}(s)
$$

In these equations $a$ and $b$ are constants, and $n$ is a positive integer.

### The Convolution Properity
> $$
\begin{gathered}
\mathscr{L}\left\{\int_0^t f(t-u) g(u) \mathrm{~d} u\right\}=\bar{f}(s) \bar{g}(s) \\
\begin{align*}
  \bar{f}(s) \bar{g}(s)=&\left[\int_0^{\infty} e^{-s v} f(v) \mathrm{~d} v\right]\left[\int_0^{\infty} e^{-s u} g(u) \mathrm{~d} u\right] \\
  =&\int_0^{\infty} \int_0^{\infty} e^{-s(v+u)} f(v) g(u) \mathrm{~d} v \mathrm{~d} u \\
  =&\int_0^{\infty} g(u)\left\{\int_0^{\infty} e^{-s(v+u)} f(v) \mathrm{~d} v\right\} \mathrm{~d} u
\end{align*}  
\end{gathered}
> $$
> 
> if different "dummy variables" of integration ( $v$ and $u$ ) are used in defining the two transforms. If, in the inner integral of the last form, we replace $v$ by a new variable $t$ with the substitution
> $$
v=t-u, \quad \mathrm{d} v=\mathrm{d} t,
> $$
> 
> there follows
> $$
\int_0^{\infty} e^{-s(v+u)} f(v) \mathrm{~d} v=\int_u^{\infty} e^{-s t} f(t-u) \mathrm{~d} t
> $$
> 
> and hence
> $$
\begin{align*}
\bar{f}(s) \bar{g}(s)&=\int_0^{\infty}g(u)\left\{\int_u^{\infty} e^{-s t} f(t-u) \mathrm{~d} t\right\} \mathrm{~d} u \\
&= \int_0^{\infty}e^{-s t}\left\{\int_0^{t}  f(t-u)g(u) \mathrm{~d} u\right\} \mathrm{~d} t\\
&= \mathscr{L}\left\{\int_0^t f(t-u) g(u) \mathrm{~d} u\right\}.
\end{align*}
> $$
> 
> <img src="/math_em8_2_conv.png" alt="conv" width="100%" align="center">

## Inversion of Laplace Transform
### Inverse of the Laplace Transform
To determine the inverse transform of a given function $F(s)$ it is thus necessary to determine a function $f(t)$ which satisfies the equation
$$
\int_0^{\infty} e^{-s t} f(t) \mathrm{~d} t=F(s) . \Longleftrightarrow f(t)=\mathscr{L}^{-1}\{F(s)\} .
$$

Since the unknown function $f(t)$ appears under an integral sign, an equation of this type is called an **integral equation**.

In more advanced works it is proved that if this equation has a solution, then that solution is **unique**. Thus, if one function having a given transform is known, it is the only possible one. This result is known as **Lerch's theorem**.

More precisely, Lerch's theorem states that two functions having the same transform cannot differ throughout any interval of positive length. Thus, for example, it's shown that the continuous solution of
$$
\int_0^{\infty} e^{-s t} f(t) \mathrm{~d} t=\frac{1}{s}
$$

is $f(t)=1$; that is, $\mathscr{L}^{-1}\left\{s^{-1}\right\}=1$. However, it is clear that if we take $f(t)$ to be, say, zero at $t=1$ and **unity** elsewhere, or otherwise redefine the function $f(t)$ at a finite number of points, the value of the integral is not changed. Hence the new function is also a solution. Such artificialities are, however, generally of no significance in applications.

Table: Laplace Transform [core]
|  | Transform | Function |
| :--- | :--- | :--- |
| T1 | $\bar{f}(s)=\mathscr{L}\{f(t)\}=\int_0^{\infty} e^{-s t} f(t) \mathrm{~d} t$ | $f(t)$ |
| T2 | $a \bar{f}(s)+b \bar{g}(s)$ | $a f(t)+b g(t)$ |
| T3 | $s \bar{f}(s)-f(0)$ | $\frac{\mathrm{d} f(t)}{\mathrm{d} t}$ |
| T4 | $s^2 \bar{f}(s)-s f(0)-\frac{\mathrm{d} f(0)}{\mathrm{d} t}$ | $\frac{\mathrm{d}^2 f(t)}{\mathrm{d} t^2}$ |
| T5 | $s^n \bar{f}(s)-\sum\limits_{k=1}^n s^{n-k} \frac{\mathrm{d}^{k-1} f(0)}{\mathrm{d} t^{k-1}}$ | $\frac{\mathrm{d}^n f(t)}{\mathrm{d} t^n}$ |
| T6 | $\frac{1}{s^n} \bar{f}(s)$ | $\overbrace{\int_0^t \cdots \int_0^t}^{n \text { times }} f(t) \overbrace{\mathrm{d} t \cdots \mathrm{d} t}^{n \text { times }}$ |
| T7 | $(-1)^n \frac{\mathrm{d}^n \bar{f}(s)}{\mathrm{d} s^n}$ | $t^n f(t)$ |
| T8 | $\bar{f}(s-a)$ | $e^{a t} f(t)$ |
| T9 | $e^{-a s} \bar{f}(s)$ | $\left\{\begin{array}{c}f(t-a) \quad (t>a)\\ 0\quad (t<a)\end{array}\right.$ |
| T10 | $\bar{f}(s) \bar{g}(s)$ | $\int_0^t f(t-u) g(u) \mathrm{d} u=\int_0^t f(u) g(t-u) \mathrm{d} u$ |
| T11 | $\frac{1}{s}$ | $1$ |
| T12 | $\frac{1}{s+a}$ | $e^{-a t}$ |
| T13 | $\frac{1}{(s+a)(s+b)}$ | $\frac{1}{a-b}\left(e^{-b t}-e^{-a t}\right)$ |
| T14 | $\frac{s}{(s+a)(s+b)}$ | $\frac{1}{b-a}\left(b e^{-b t}-a e^{-a t}\right)$ |
| T15 | $\frac{a}{s^2+a^2}$ | $\sin a t$ |
| T16 | $\frac{s}{s^2+a^2}$ | $\cos a t$ |
| T17 | $\frac{a}{s^2-a^2}$ | $\sinh a t$ |
| T18 | $\frac{s}{s^2-a^2}$ | $\cosh a t$ |
| T19 | $\frac{2 a s}{\left(s^2+a^2\right)^2}$ | $t \sin a t$ |
| T20 | $\frac{s^2-a^2}{\left(s^2+a^2\right)^2}$ | $t \cos a t$ |
| T21 | $\frac{2 a^3}{\left(s^2+a^2\right)^2}$ | $\sin a t-a t \cos a t$ |
| T22 | $\frac{2 a s}{\left(s^2-a^2\right)^2}$ | $t \sinh at$  |
| T23 | $\frac{s^2+a^2}{\left(s^2-a^2\right)^2}$ | $t \cosh a t$ |
| T24 | $\frac{2 a^3}{\left(s^2-a^2\right)^2}$ |  $at\cosh a t-\sinh a t$ |
| T25 | $\frac{a}{(s+b)^2+a^2}$ | $e^{-b t} \sin a t$ |
| T26 | $\frac{s+b}{(s+b)^2+a^2}$ | $e^{-b t} \cos a t$ |
| T27 | $\frac{4 c^3}{s^4+4 a^4}$ | $\sin a t \cosh a t-\cos a t \sinh a t$ |
| T28 | $\frac{2 a^2 s}{s^4+4 a^1}$ | $\sin a t \sinh a t$ |
| T29 | $\frac{2 a^3}{s^4-a^4}$ | $\sinh a t-\sin a t$ |  |
| T30 | $\frac{2 a^1 s}{s^4-a^4}$ | $\cosh a t-\cos a t$ |  |
| T31 | $1$ | $\delta(t)$ |  |
| T32 | $e^{-s t_1}$ | $\delta\left(t-t_1\right)$ |  |
| T33 | $s$ | $\delta^{\prime}(t)$ |  |
| T34 | $s e^{-s t_1}$ | $\delta^{\prime}\left(t-t_1\right)$ |  |
| T35 | $\frac{1}{s^n}$ | $\frac{t^{n-1}}{(n-1)!}$ | ( $n>0$ ) |
| T35a | $\frac{n!}{s^{n+1}}$ | $t^n$ | ( $n>-1$ ) |
| T36 | $\frac{1}{(s+a)^n}$ | $\frac{t^{n-1} e^{-a t}}{(n-1)!}$ | ( $n>0$ ) |
| T37 | $\frac{s}{(s+a)^n}$ | $\frac{(n-1)-a t}{(n-1)!} t^{n-2} e^{-a t}$ | ( $n>1$ ) |
| T38 | $\frac{a^{2 n-1}}{\left(s^2+a^2\right)^n}$ | $\frac{1}{2^{n-1}(n-1)!}\left[\sqrt{\frac{\pi}{2}}(a t)^{n-1 / 2} J_{n-1 / 2}(a t)\right] \quad(n>0)$ |  |
| T39 | $\frac{a^{2 n-2} s}{\left(s^2+a^2\right)^n}$ | $\frac{a t}{2^n(n-1)!}\left[\sqrt{\frac{\pi}{2}}(a t)^{n-3 / 2} J_{n-3 / 2}(a t)\right] \quad(n>\frac12)$ |  |
| T40 | $\frac{a^{2 n-1}}{\left(s^2-a^2\right)^n}$ | $\frac{1}{2^{n-1}(n-1)!}\left[\sqrt{\frac{\pi}{2}}(a t)^{n-1 / 2} I_{n-1 / 2}(a t)\right] \quad(n>0)$ |  |
| T41 | $\frac{a^{2 n-2} s}{\left(s^2-a^2\right)^n}$ | $\frac{a t}{2^n(n-1)!}\left[\sqrt{\frac{\pi}{2}}(a t)^{n-3 / 2} I_{n-3 / 2}(a t)\right] \quad\left(n>\frac{1}{2}\right)$ |  |

Table: Bessel functions of order half an odd integer
| $m$ | $\sqrt{\frac{\pi}{2}} x^m J_m(x)$ | $\sqrt{\frac{\pi}{2}} x^m I_m(x)$ |
| :--- | :--- | :--- |
| -1/2 | $(\cos x) / x$ | $(\cosh x) / x$ |
| $\frac{1}{2}$ | $\sin x$ | $\sinh x$ |
| $\frac{3}{2}$ | $\sin x-x \cos x$ | $x \cosh x-\sinh x$ |
| $\frac{5}{2}$ | $\left(3-x^x\right) \sin x-3 x \cos x$ | $\left(3+x^2\right) \sinh x-3 x \cosh x$ |
| 7/2 | $\left(15-6 x^2\right) \sin x-\left(15-x^2\right) x \cos x$ | $\left(15+x^2\right) x \cosh x-\left(15+6 x^2\right) \sinh x$ |
| $\frac{9}{2}$ | $\left(105-45 x^2+1\right) \sin x-\left(105-10 x^2\right) x \cos x$ | $\left(105+45 x^2+1\right) \sinh x-\left(105+10 x^2\right) x \cosh x$ |
|   | Recurrence Formulas |  |
|  | $x^{m+1} J_{m+1}(x)=2 m\left[x^m J_m(x)\right]-x^2\left[x^{m-1} J_{m-1}(x)\right]$ | $x^{m+1} I_{m+1}(x)=-2 m\left[x^m I_m(x)\right]+x^2\left[x^{m-1} I_{m-1}(x)\right]$ |

### Method of Partial Fractions for the Inverse of Laplace Transform

For
$$
F(s)=\frac{N(s)}{D(s)}
$$
where $D(s)$ is a polynomial of degree $n$ with $n$ **distinct real** zeros $s=a_1, a_2, \cdots a_n$, and $N(s)$ is a polynomial of degree $n-1$ or less, there follows
$$
\begin{aligned}
\frac{N(s)}{D(s)} & =\frac{N\left(a_1\right)}{D^{\prime}\left(a_1\right)} \frac{1}{s-a_1}+\frac{N\left(a_2\right)}{D^{\prime}\left(a_2\right)} \frac{1}{s-a_2}+\cdots+\frac{N\left(a_n\right)}{D^{\prime}\left(a_n\right)} \frac{1}{s-a_n} \\
& =\sum_{m=1}^n \frac{N\left(a_m\right)}{D^{\prime}\left(a_m\right)} \frac{1}{s-a_m}
\end{aligned}
$$

> (Heaviside cover-up method / Residue Method) Let
> $$
    \begin{aligned}
      &\frac{N(s)}{D(s)} = \sum_{m=1}^n\frac{A_m}{s-a_m} \\
      \implies& (s-a_k)\frac{N(s)}{D(s)} = A_k + \sum_{m=1,m\neq k}^n A_m\frac{s-a_k}{s-a_m} \\
      \implies& \lim_{s\to a_k}(s-a_k)\frac{N(s)}{D(s)} = \lim_{s\to a_k}\left(A_k + \sum_{m=1,m\neq k}^n A_m\frac{s-a_k}{s-a_m}\right) \\
      & \lim_{s\to a_k}\frac{N(s)}{\frac{D(s) - D(a_k)}{s-a_k}} = A_k\\
      \implies& \frac{N(a_k)}{D^{\prime}(a_k)} = A_k.
    \end{aligned}
> $$

With $M$-fold roots, like only $a_k$, i.e. $(s-a_k)^M$:
$$
\frac{N(s)}{D(s)} =\sum_{m=1,m\neq k}^n \frac{N\left(a_m\right)}{D^{\prime}\left(a_m\right)} \frac{1}{s-a_m} + \sum_{m=1}^M \frac{1}{(M-m)!}\frac{\mathrm{d}^{(n-k)}}{\mathrm{d}x^{(n-k)}}\left(\frac{N(s)}{D(s)}(x-a_k)^n\right) \frac{1}{(s-a_k)^m}.
$$

and hence, from (T12),
$$
\mathscr{L}^{-1}\left\{\frac{N(s)}{D(s)}\right\}=\sum_{m=1}^n \frac{N\left(a_m\right)}{D^{\prime}\left(a_m\right)} e^{a_m t}
$$

#### Example1: Inverse Laplace Transform
To determine $\mathscr{L}^{-1}\left\{\frac{s^2+1}{s^3+3 s^2+2 s}\right\}$, we write
$$
N(s)=s^2+1, \quad D(s)=s^3+3 s^2+2 s=s(s+1)(s+2)
$$

With $a_1=0, a_2=-1, a_3=-2$, and $D^{\prime} = 3s^2+6s+2$, there follows
$$
\begin{gathered}
\begin{array}{cl}
N\left(a_1\right)=1, & D^{\prime}\left(a_1\right)=2, \\
N\left(a_2\right)=2, & D^{\prime}\left(a_2\right)=-1, \\
N\left(a_3\right)=5, & D^{\prime}\left(a_3\right)=2, \end{array}\\
\mathscr{L}^{-1}\left\{\frac{s^2+1}{s^3+3 s^2+2 s}\right\}=\frac{1}{2}-2 e^{-t}+\frac{5}{2} e^{-2 t} .    
\end{gathered}
$$

#### Example2: Inverse Laplace Transform
To determine $\mathscr{L}^{-1}\left\{\frac{s}{s^2+4 s+5}\right\}$, we first write
$$
\frac{s}{s^2+4 s+5}=\frac{s}{(s+2)^2+1}=\frac{(s+2)-2}{(s+2)^2+1} .
$$

Pairs $(T 25,26)$ then give the required inverse transform
$$
e^{-2 t}(\cos t-2 \sin t) .
$$

#### Example3: Solving the following ODE with Laplace Transform [core]
<img src="/math_em8_3_vibration.png" alt="vibration model" width="100%" align="center">

Forced vibration:
$$
\begin{gathered}
m \frac{\mathrm{d}^2 x}{\mathrm{d} t^2}+k x=f(t) \quad x(0)=\frac{\mathrm{d} x(0)}{\mathrm{d} t}=0 \\
m s^2 \bar{x}+k \bar{x}=\bar{f} .
\end{gathered}
$$

Thus, if we write
$$
\omega_0^2=\frac{k}{m},
$$
the transform of the required solution is
$$
\bar{x}=\frac{1}{m} \frac{\bar{f}}{s^2+\omega_0^2} .
$$

Since $\frac{1}{s^2+\omega_0^2}$ is the transform of $\frac{\sin \omega_0 t}{\omega_0}$, this product can be considered as the product of the transforms of $\frac{\sin \omega_0 t}{m \omega_0}$ and $f(t)$, and hence use of the convolution (T10) gives the solution
$$
x=\frac{1}{m \omega_0} \int_0^t f(u) \sin \omega_0(t-u) \mathrm{~d} u
$$

in terms of an arbitrary force function $f(t)$.

#### Example4: Solving the ODEs with Laplace Transform

We require the solution of the simultaneous equations
$$
\left.\begin{array}{l}
\frac{\mathrm{d} x}{\mathrm{d} t}-y=e^t \\
\frac{\mathrm{d} y}{\mathrm{d} t}+x=\sin t
\end{array}\right\}
$$

which satisfies the conditions
$$
x(0)=1, \quad y(0)=0 .
$$

The transforms of equations satisfying initial conditions are
$$
\left.\begin{array}{l}
s \bar{x}-\bar{y}=\frac{1}{s-1}+1 \\
\bar{x}+s \bar{y}=\frac{1}{s^2+1}
\end{array}\right\}
$$

from which we obtain, algebraically,
$$
\begin{aligned}
& \bar{x}=\frac{s}{(s-1)\left(s^2+1\right)}+\frac{s}{s^2+1}+\frac{1}{\left(s^2+1\right)^2} \\
& \bar{y}=-\frac{1}{(s-1)\left(s^2+1\right)}-\frac{1}{s^2+1}+\frac{s}{\left(s^2+1\right)^2}
\end{aligned}
$$

If the first terms on the right-hand sides of these equations are expanded in partial fractions, there follows
$$
\left.\begin{array}{l}
\bar{x}=\frac{1}{2}\left[\frac{1}{s-1}+\frac{1}{s^2+1}+\frac{s}{s^2 + 1}+\frac{2}{\left(s^2 + 1\right)^2}\right] \\
\bar{y}=\frac{1}{2}\left[-\frac{1}{s-1}-\frac{1}{s^2+1}+\frac{s}{s^2+1}+\frac{2 s}{\left(s^2+1\right)^2}\right]
\end{array}\right\}
$$

and reference to Table 1 gives the required solution,
$$
\left.\begin{array}{l}
x=\frac{1}{2}\left(e^t+2 \sin t+\cos t-t \cos t\right) \\
y=\frac{1}{2}\left(-e^t-\sin t+\cos t+t \sin t\right)
\end{array}\right\} .
$$

## Laplace Transform: Beyond solving ODEs
The physical significance of Laplace Transform (LT): from time domain $s(t)$ to frequency domain $S(\omega)$

## HW
### Question 1
**Q1**: Find the Laplace transform of the following functions (10 marks)
$$
1.1 \quad t^3, \qquad 1.2 \quad \frac{\mathrm{d}^3f}{\mathrm{d}t^3}
$$
	
**Answer**: 

$1.1$	At first, it's known that with L 'Hopital's Law:
$$
\lim_{t\to \infty}\frac{t^n}{e^{st}}\to \lim_{t\to \infty}\frac{nt^{n-1}}{se^{st}} \to\cdots\to \lim_{t\to\infty}\frac{n!}{s^ne^{st}} = 0
$$

$$
\begin{align*}
\mathscr{L}\{t^3\} =& \int_0^\infty t^3e^{-st}\mathrm{~d}t = -\frac{1}{s}\int_0^\infty t^3\mathrm{~d}(e^{-st}) = -\frac{1}{s}\left(t^3e^{-st}|_0^\infty - \int_0^\infty 3t^2e^{-st}\mathrm{~d}t\right) \\
=& \frac{1}{s}\int_0^\infty 3t^2e^{-st}\mathrm{~d}t = -\frac{1}{s^2}\int_0^\infty 3t^2\mathrm{~d}(e^{-st}) = -\frac{1}{s^2}\left(3t^2e^{-st}|_0^\infty - \int_0^\infty 6te^{-st}\mathrm{~d}t\right)\\
=& \frac{1}{s^2} \int_0^\infty 6te^{-st}\mathrm{~d}t = -\frac{1}{s^3}\int_0^\infty 6t\mathrm{~d}(e^{-st}) = -\frac{1}{s^3}\left(6te^{-st}|_0^\infty - \int_0^\infty 6e^{-st}\mathrm{~d}t\right)\\
=& \frac{1}{s^3}\int_0^\infty 6e^{-st}\mathrm{~d}t = -\frac{6}{s^4}\int_0^\infty e^{-st}\mathrm{~d}(-st) = -\left.\frac{6}{s^4}e^{-st}\right|_0^\infty = \frac{6}{s^4}, \quad s>0.
\end{align*}
$$

$1.2$: Assume the function $f(t), \frac{\mathrm{d}f}{\mathrm{d}t}, \frac{\mathrm{d}^2f}{\mathrm{d}t^2}$ is of exponential order, $\frac{\mathrm{d}f}{\mathrm{d}t}, \frac{\mathrm{d}^2f}{\mathrm{d}t^2},\frac{\mathrm{d}^3f}{\mathrm{d}t^3}$. Then as $t\to\infty, e^{-st}f(t), e^{-st}\frac{\mathrm{d}f}{\mathrm{d}t}, e^{-st}\frac{\mathrm{d}^2f}{\mathrm{d}t^2}$ vanishes.
$$
\begin{align*}
\mathscr{L}\left\{\frac{\mathrm{d}^3f}{\mathrm{d}t^3}\right\} =& \int_0^\infty e^{-st}\frac{\mathrm{d}^3f}{\mathrm{d}t^3}\mathrm{~d}t = \int_0^\infty e^{-st}\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\mathrm{d}^2f}{\mathrm{d}t^2}\right)\mathrm{~d}t \\
=& e^{-st}\left.\frac{\mathrm{d}^2f}{\mathrm{d}t^2}\right|_0^\infty + s\int_0^\infty \frac{\mathrm{d}^2f}{\mathrm{d}t^2}e^{-st}\mathrm{~d}t = -\frac{\mathrm{d}^2f(0+)}{\mathrm{d}t^2} + s\int_0^\infty e^{-st}\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\mathrm{d}f}{\mathrm{d}t}\right)\mathrm{~d}t\\
=& -\frac{\mathrm{d}^2f(0+)}{\mathrm{d}t^2} + s\left(e^{-st}\left.\frac{\mathrm{d}f}{\mathrm{d}t}\right|_0^\infty + s\int_0^\infty \frac{\mathrm{d}f}{\mathrm{d}t}e^{-st}\mathrm{~d}t\right) \\
=& -\frac{\mathrm{d}^2f(0+)}{\mathrm{d}t^2} -s\frac{\mathrm{d}f(0+)}{\mathrm{d}t} + s^2\int_0^\infty e^{-st}\frac{\mathrm{d}f}{\mathrm{d}t}\mathrm{~d}t\\
=& -\frac{\mathrm{d}^2f(0+)}{\mathrm{d}t^2} -s\frac{\mathrm{d}f(0+)}{\mathrm{d}t} + s^2\left(e^{-st}f(t)|_0^\infty + s\int_0^\infty f(t)e^{-st}\mathrm{~d}t\right)\\
=& -\frac{\mathrm{d}^2f(0+)}{\mathrm{d}t^2} -s\frac{\mathrm{d}f(0+)}{\mathrm{d}t} - s^2 f(0+) + s^3\mathscr{L}\{f(t)\}.
\end{align*}
$$

### Question2
Q2: Solve the following problem using Laplace transform (10 marks)
$$
\frac{\mathrm{d}y}{\mathrm{d}x} + ky = 0, \quad y(0)=1.
$$

**Answer**: Assume $y$ is of exponential order. Then using Laplace transform at both sides, then
$$
\begin{align*}
\frac{\mathrm{d}y}{\mathrm{d}x} =&- ky\\
\implies \mathscr{L}\left\{\frac{\mathrm{d}y}{\mathrm{d}x}\right\} =& \mathscr{L}\left\{-ky\right\} \\
\int_0^\infty e^{-sx}\frac{\mathrm{d}y}{\mathrm{d}x}\mathrm{~d}x =& -k\int_0^\infty e^{-sx}y(x)\mathrm{~d}x \\
e^{-sx}y(x)|_0^\infty + s\int_0^\infty e^{-sx}y(x)\mathrm{~d}t =& -k\int_0^\infty e^{-sx}y(x)\mathrm{~d}x \\
(s+k)\int_0^\infty e^{-sx}y(x)\mathrm{~d}x =& -e^{-sx}y(x)|_0^\infty = y(0) = 1\\
\implies \int_0^\infty e^{-sx}y(x)\mathrm{~d}x =& \frac{1}{s+k}, \quad s\neq -k.
\end{align*}
$$

Since $\mathscr{L}\{e^{-ax}\} = 1/(s+a)$, then using inverse of laplace transform:
$$
y(x) = \mathscr{L}^{-1}\left\{\frac{1}{s+k}\right\} = e^{-kx}
$$

And $e^{-kx}$ is exactly of exponential order, then problem solved.
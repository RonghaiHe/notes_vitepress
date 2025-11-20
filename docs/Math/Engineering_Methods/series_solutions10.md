# Series Solutions
## Power series
### Definition of Power series
::: warning Definition: Power Series
An expression of the form
$$
A_0+A_1(x-x_0) + \cdots+A_n(x-x_0)^n+\cdots=\sum_{n=0}^\infty A_n(x-x_0)^n.
$$

is called a **power series** and is defined as the limit
$$
\lim_{N\to\infty}\sum_{n=0}^N A_n(x-x_0)^n
$$

for those values of $x$ for which the limit exists
:::

### Ratio Test for the Convergence of Power Series
To determine for what values of $x$ the series **converges**, we may make use of the ratio test, which states that if the absolute value of the **ratio** of the $(n + 1)^{\text{th}}$ term to the $n^{\text{th}}$ term in any infinite series approaches a limit $\rho$ as $n$ goes to infinity, then the series converges when $\rho < 1$ and diverges when $\rho > 1$.

In the case of the power series
$$
\lim_{N\to\infty}\sum_{n=0}^N A_n(x-x_0)^n
$$

The ratio is
$$
\rho = \lim_{n\to\infty}\left|\frac{A_{n+1}}{A_n}\right||x-x_0| = L|x-x_0|
$$

where
$$
L = \lim_{n\to\infty}\left|\frac{A_{n+1}}{A_n}\right|.
$$

In this case, the power series converge if
$$
|x-x_0|<\frac1L
$$

Or, the interval of convergence is $\left(x_0-\frac1L, x_0+\frac1L\right)$.

The distance $1/L$ is frequently called the **radius of convergence**.

### Taylor Series Expansion
Suppose the function $f(x)$ can be expressed as a power series, which converges in a non-zero interval about $x=x_0$
$$
f(x) = \sum_{n=0}^\infty A_n(x-x_0)^n.
$$

Differentiating both sides of the above equation $k$ times and setting $x=x_0$
$$
f^{(k)}(x) = k!A_k, \quad (k=0,1,2,\cdots).
$$

Therefore, we obtain the **infinite Taylor series expansion**
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

If $f(x)$ and all its derivatives are continuous in an interval including $x = x_0$, then $f(x)$ can be expressed as a **finite Taylor series** plus a **remainder**,
$$
f(x) = \sum_{n=0}^{N-1} \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_N(x).
$$

Here, $R_N$, the remainder after $N$ terms, is given by
$$
R_N(x) = \frac{f^{(N)}(\xi)}{N!}(x-x_0)^{N}
$$

where $\xi$ is some point in the interval $(x_0, x)$.

#### Example1: Solving ODE with Power Series
To solve the differential equation
$$
Ly \equiv \frac{\mathrm{d}^2y}{\mathrm{d}x^2} - y = 0.
$$

we assume a solution in the form
$$
y = A_0+A_1x+A_2x^2+A_3x^3+A_4x^4+A_5x^5+\cdots.
$$

Hence
$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 2A_2+6A_3x+12A_4x^2+20A_5x^3+\cdots.
$$

By substituting the above two expressions into the ODE, we can obtain
$$
\begin{aligned}
  Ly \equiv &(2A_2-A_0)+(6A_3-A_1)x+(12A_4-A_2)x^2 \\
  &+(20A_5-A_3)x^3+\cdots = 0.  
\end{aligned}
$$

In order that this equation be valid over an interval, it is necessary that the coefficients of all powers of $x$ vanish independently to promise it works for all x in an interval, giving the equations
$$
2A_2=A_0, \quad 6A_3=A_1, \quad 12A_4=A_2, \quad 20A_5=A_3, \cdots
$$

from which there follows
$$
\begin{aligned}
  A_2=\frac12A_0, \quad& A_3=\frac16A_1, \\
  A_4=\frac{1}{12}A_2 = \frac{1}{24}A_0, \quad& A_5=\frac{1}{20}A_3 = \frac{1}{120}A_1,\\
  \cdots 
\end{aligned}
$$

Therefore, the solution becomes
$$
\begin{aligned}
    y =& A_0+A_1x+A_2x^2+A_3x^3+A_4x^4+A_5x^5+\cdots \\
    =& A_0 + A_1x + \frac12A_0x^2 + \frac16A_1x^3 + \frac{1}{24}A_0x^4 + \frac{1}{120}A_1x^5 + \cdots \\
    =& A_0\left(1+\frac12x^2+\frac{1}{24}x^4+\cdots\right) + A_1\left(x+\frac16x^3+\frac{1}{120}x^5+\cdots\right)
\end{aligned}
$$

It is seen that the coefficients $A_0$ and $A_1$ are undetermined, and hence arbitrary, but that succeeding coefficients are determined in terms of them. The general solution is thus of the form
$$
y=A_0u_1(x)+A_1u_2(x)
$$

> $$
y=A_0u_1(x)+A_1u_2(x) = A_1\cosh(x) + A_2\sinh(x)
> $$
> 
> Let $C_1 = (A_0+A_1)/2, C_2 = (A_0-A_1)/2$, then
> $$
y=C_1e^x + C_2e^{-x}.
> $$

where $u_1(x)$ and $u_2(x)$ are two linearly independent solutions

#### Example II: Solving ODE with Power Series
As a second example we consider the equation
$$
Ly \equiv x^2\frac{\mathrm{d}^2y}{\mathrm{d}x^2} + (x^2+x)\frac{\mathrm{d}y}{\mathrm{d}x} - y = 0.
$$

Assuming a solution of the form
$$
y=\sum_{k=0}^\infty A_kx^k
$$

we obtain
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = \sum_{k=0}^\infty kA_kx^{k-1}, \quad \frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \sum_{k=0}^\infty k(k-1)A_kx^{k-2}
$$

hence
$$
\begin{aligned}
  Ly \equiv &\sum_{k=0}^\infty k(k-1)A_kx^{k} + \sum_{k=0}^\infty kA_kx^{k+1} + \sum_{k=0}^\infty kA_kx^{k}\\
   &- \sum_{k=0}^\infty A_kx^{k} = 0.  
\end{aligned}
$$

The first, third, and fourth summations may be combined to give
$$
\sum_{k=0}^\infty[k(k-1)+k-1]A_kx^k = \sum_{k=0}^\infty(k^2-1)A_kx^k
$$

Hence there follows
$$
Ly\equiv\sum_{k=0}^\infty(k^2-1)A_kx^k + \sum_{k=0}^\infty kA_kx^{k+1} = 0
$$

In order to combine these sums, we replace $k$ by $k - 1$ in the second, to obtain
$$
Ly\equiv\sum_{k=0}^\infty(k^2-1)A_kx^k + \sum_{k=1}^\infty (k-1)A_{k-1}x^{k} = 0
$$

In this way, we find
$$
Ly\equiv-A_0 + \sum_{k=1}^\infty[(k^2-1)A_k + (k-1)A_{k-1}]x^k = 0.
$$

In order that $Ly$ may vanish identically, the constant term, as well as the coefficients of the successive powers of $x$, must vanish independently, giving the condition
$$
\begin{gathered}
    A_0 = 0\\
    (k-1)[(k+1)A_k+A_{k-1}] = 0\quad (k=1,2,3,\cdots)
\end{gathered}
$$

The recurrence formula is automatically satisfied when $k = 1$. When $k \ge 2$, it becomes
$$
A_k = -\frac{A_{k-1}}{k+1} \quad (k=2,3,4,\cdots)
$$

Hence, we obtain
$$
A_2 = -\frac{A_1}{3}, \quad A_3 = -\frac{A_2}{4} = \frac{A_1}{3\cdot 4}, \quad A_4 = -\frac{A_3}{5} = -\frac{A_1}{3\cdot 4\cdot 5}, \cdots
$$

Thus, in this case $A_0 = 0$, $A_1$ is arbitrary, and all succeeding coefficients are determined in terms of $A_1$. The solution becomes
$$
y = A_1\left(x - \frac{x^2}{3} + \frac{x^2}{3\cdot 4} - \frac{x^3}{3\cdot 4\cdot 5}+\cdots\right)
$$

If this solution is put in the form
$$
\begin{aligned}
  y =& \frac{2A_1}{x}\left(\frac{x^2}{2!} - \frac{x^3}{3!} + \frac{x^4}{4!} - \frac{x^5}{5!}+\cdots\right) \\ 
  =& \frac{2A_1}{x}\left[x-1+\left(1-\frac{x^1}{1!} + \frac{x^2}{2!} - \frac{x^3}{3!} + \frac{x^4}{4!} - \frac{x^5}{5!}+\cdots\right)\right]
\end{aligned}
$$

The series in parentheses in the final form is recognized as the expansion of $e^{-x}$ , and, writing $2A_1 = c$, the solution obtained may be put in the closed form
$$
y=c\frac{e^{-x}-1+x}{x}
$$

$x\neq 0$ for the analytic solution, but in the power series form, it can be seen that $x=0\implies y=0$, it means $x=0$ is meaningful, thus
$$
y = \begin{cases}
    c\frac{e^{-x}-1+x}{x} & x\neq 0\\
    0 & x=0
\end{cases}
$$

## Method of Frobenius
### The Method of Frobenius
- The series solutions is **valid** at $x=0$ if it is the ordinary point, or it's the singular point, where the power series is **diverges**
- If $x=0$ is the singular point for the ODE, the normal power series may fail.

For **regular singular point**: $xP(x)$ and $x^2Q(x)$ is analytic at $x=0$ where $y''+P(x)y'+Q(x)y=0$

Let us restrict attention to solutions valid about the point $x =0$ . Solutions valid near a more general point $x = x_0$ may be obtained in an analogous way

Suppose the equation has been put in the form
$$
Ly\equiv R(x)\frac{\mathrm{d}^2y}{\mathrm{d}x^2} + \frac1x P(x)\frac{\mathrm{d}y}{\mathrm{d}x} + \frac{1}{x^2}Q(x)y = 0.
$$

where $R(x)$ **does not vanish in some interval including** $x = 0$.

We also suppose that $P(x), Q(x)$, and $R(x)$ are regular at $x = 0$, therefore, based on the equation above, we can write
$$
xa_1(x) = \frac{P(x)}{R(x)}, \quad x^2a_2(x) = \frac{Q(x)}{R(x)}
$$

It is convenient to suppose also that the original equation has been divided through by a suitable constant so that $R(0) = 1$. Then we may write
$$
\begin{aligned}
& P(x)=P_0+P_1 x+P_2 x^2+\cdots \\
& Q(x)=Q_0+Q_1 x+Q_2 x^2+\cdots \\
& R(x)=1+R_1 x+R_2 x^2+\cdots
\end{aligned}
$$

The series converge in some interval including $x=0$.

We attempt to find nontrivial solutions which are in the form of a power series in $x$ multiplied by a power of $x$,
$$
y=x^s \sum_{k=0}^{\infty} A_k x^k=A_0 x^s+A_1 x^{s+1}+A_2 x^{s+2}+\cdots,
$$

where $s$ is to be determined.

Substituting the above expressions into the original ODE gives
$$
\begin{aligned}
L y \equiv&(1+  \left.R_1 x+R_2 x^2+\cdots\right) \times\left[s(s-1) A_0 x^{s-2}\right. \\
& \left.+(s+1) s A_1 x^{s-1}+(s+2)(s+1) A_2 x^s+\cdots\right] \\
& +\left(P_0+P_1 x+P_2 x^2+\cdots\right) \times\left[s A_0 x^{s-2}+(s+1) A_1 x^{s-1}\right. \\
& \left.+(s+2) A_2 x^s+\cdots\right] \\
& +\left(Q_0+Q_1 x+Q_2 x^2+\cdots\right) \times\left[A_0 x^{s-2}+A_1 x^{s-1}+A_2 x^s+\cdots\right]
\end{aligned}
$$

multiplying term by term and collecting the coefficients of successive powers of $x$
$$
\begin{aligned}
L y \equiv&\left[s(s-1)+P_0 s+Q_0\right] A_0 x^{s-2} \\
&+\left\{\left[(s+1) s+P_0(s+1)+Q_0\right] A_1\right. \\
&\left.+\left[R_1 s(s-1)+P_1 s+Q_1\right] A_0\right\} x^{s-1} \\
&+\left\{\left[(s+2)(s+1)+P_0(s+2)+Q_0\right] A_2\right. \\
&+\left[R_1(s+1) s+P_1(s+1)+Q_1\right] A_1 \\
&\left.+\left[R_2 s(s-1)+P_2 s+Q_2\right] A_0\right\} x^s+\cdots
\end{aligned}
$$

For the sake of convenience, let us take
$$
f(s)=s(s-1)+P_0 s+Q_0=s^2+\left(P_0-1\right) s+Q_0
$$

and
$$
\begin{aligned}
g_n(s) & =R_n(s-n)(s-n-1)+P_n(s-n)+Q_n \\
& =R_n(s-n)^2+\left(P_n-R_n\right)(s-n)+Q_n
\end{aligned}
$$

Hence, we have
$$
\begin{aligned}
L y \equiv & f(s) A_0 x^{s-2}+\left[f(s+1) A_1+g_1(s+1) A_0\right] x^{s-1} \\
& +\left[f(s+2) A_2+g_1(s+2) A_1+g_2(s+2) A_0\right] x^s+\cdots \\
& +\left[f(s+k) A_k+\sum_{n=1}^k g_n(s+k) A_{k-n}\right] x^{s+k-2}+\cdots
\end{aligned}
$$

The vanishing of the coefficient of the lowest power ${x}^{{s}-2}$ gives the requirement
$$
f(s)=0 \implies s^2+\left(P_0-1\right) s+Q_0=0
$$

This equation determines two values of $s$ (which may however be equal) and is called the **indicial equation**.

For each such value of $s$, the vanishing of the coefficient of $x^{s-1}$ gives the requirement
$$
f(s+1) A_1=-g_1(s+1) A_0
$$

and hence determines $A_1$ in terms of $A_0$ if $f(s+1) \neq 0$. Next, the vanishing of the coefficient of $x^s$ determines $A_2$ in terms of $A_1$ and $A_0$,
$$
f(s+2) A_2=-g_1(s+2) A_1-g_2(s+2) A_0,
$$

and hence in terms of $A_0$, if $f(s+2) \neq 0$.
In general, the vanishing of the coefficient of $x^{s+k-2}$ gives the **recurrence formula**
$$
f(s+k) A_k=-\sum_{n=1}^k g_n(s+k) A_{k-n} \quad(k \geqq 1),
$$

which determines each $A_k$ in terms of the preceding $A$ 's, and hence in terms of $A_0$, if for each $k$ the quantity $f(s+k)$ is not zero.

### Exceptional cases for the method of Frobenius
$$
\begin{aligned}
    &f(s)=0 \implies s^2+\left(P_0-1\right) s+Q_0=0 \\
    \implies& \begin{cases}
      s_1 = \frac{1-P_0}{2}+\frac12\sqrt{(1-P_0)^2-4Q_0}\\
      s_2 = \frac{1-P_0}{2}-\frac12\sqrt{(1-P_0)^2-4Q_0}
    \end{cases}
\end{aligned}
$$

as the root of
$$
y=x^s \sum_{k=0}^{\infty} A_k x^k=A_0 x^s+A_1 x^{s+1}+A_2 x^{s+2}+\cdots,
$$

- Two roots to the equation $f(s)=0$ are **equal**
$$
\begin{aligned}
  y_1(x) &= \sum_{k=0}^\infty A_kx^{k+s_1}\equiv A_0u_1(x)\\
  y_2(x) &= Cu_1(x)\log x + \sum_{k=0}^\infty B_kx^{k+s_2} 
\end{aligned}
$$
- Two distinctive roots, one is imaginary and the other is real (?)
For two roots $s_1$ and $s_2$, series solution $y = x^s\sum\limits_{k=0}^\infty A_kx^k, (s = s_1, s_2)$ can also be constructed
$$
y=c_1y_1(x)+c_2y_2(x).
$$

#### Rethinking [Example II](#example-ii-solving-ode-with-power-series)
$$
Ly \equiv x^2\frac{\mathrm{d}^2y}{\mathrm{d}x^2} + (x^2+x)\frac{\mathrm{d}y}{\mathrm{d}x} - y = 0.
$$

Assuming a solution of the form
$$
y=x^s\sum_{k=0}^\infty A_kx^k = \sum_{k=0}^\infty A_kx^{k+s}.
$$

By direct substitution, there follows
$$
L y=\left(s^2-1\right) A_0 x^s+\sum_{k=1}^{\infty}\left\{\left[(s+k)^2-1\right] A_k+(s+k-1) A_{k-1}\right\} x^{k+s}
$$

> From [Example II](#example-ii-solving-ode-with-power-series)
> $$
Ly\equiv\sum_{k=0}^\infty((k+s)^2-1)A_kx^{k+s} + \sum_{k=1}^\infty (k+s-1)A_{k-1}x^{k+s} = 0
> $$


Hence the indicial equation is
$$
s^2-1=0
$$
and the recurrence formula is
$$
\left[(s+k)^2-1\right] A_k+(s+k-1) A_{k-1}=0
$$
or
$$
(s+k-1)\left[(s+k+1) A_k+A_{k-1}\right]=0 \quad(k \geqq 1)
$$

The exponents $s_1$ and $s_2$ are $+1$ and $-1$ , respectively. Since they differ by an integer, a solution of the required type is assured only when $s$ has the larger value +1 .

With $s=+1$, the recurrence formula becomes
$$
k\left[(k+2) A_k+A_{k-1}\right]=0
$$
or, since $k \neq 0$,
$$
A_k=-\frac{A_{k-1}}{k+2} \quad(k \geqq 1)
$$

Thus, one has
$$
A_1=-\frac{A_0}{3}, \quad A_2=\frac{A_0}{3 \cdot 4}, \quad A_3=-\frac{A_0}{3 \cdot 4 \cdot 5}, \quad \ldots
$$

and hence the solution corresponding to $s=1$ is
$$
\begin{aligned}
y & =x\left[A_0-\frac{A_0}{3} x+\frac{A_0}{3 \cdot 4} x^2-\frac{A_0}{3 \cdot 4 \cdot 5} x^3+\cdots\right] \\
& =A_0\left(x-\frac{x^2}{3}+\frac{x^3}{3 \cdot 4}-\frac{x^4}{3 \cdot 4 \cdot 5}+\cdots\right) \\
& =2 A_0\left(\frac{e^{-x}-1+x}{x}\right)
\end{aligned}
$$

in accordance with the result obtained previously.
With $s=-1$, the recurrence formula becomes
$$
(k-2)\left(k A_k+A_{k-1}\right)-0 \quad(k \geqq 1) .
$$

It is important to notice that the factor $k-2$ cannot be canceled except on the understanding that $k \neq 2$. That is, when $k=2$, the correct form of the recurrence formula is $0=0$. If $k=1$, there follows
$$
A_1=-A_0
$$

If $k=2$, the recurrence formula is identically satisfied, so that $A_2$ is arbitrary.

If $k \geqq 3$, the recurrence formula can be written in the form
$$
A_k=-\frac{A_{k-1}}{k} \quad(k \geqq 3) .
$$

If we take $A_2=0$, then there follows $A_3=A_4=\cdots=0$, and the solution corresponding to $s=-1$ becomes simply
$$
y=x^{-1}\left(A_0-A_0 x\right)=A_0 \frac{1-x}{x} .
$$

The general solution of the given equation is then a linear combination of the two solutions so obtained, and hence can be taken conveniently in the form
$$
y=c_1 \frac{e^{-x}-1+x}{x}+c_2 \frac{1-x}{x},
$$

or, alternatively,
$$
y=C_1 \frac{e^{-x}}{x}+C_2 \frac{1-x}{x},
$$

where $C_1=c_1$, and $C_2=c_2-c_1$. The only solution regular at $x=0$ is the one formerly obtained,
$$
y=c \frac{e^{-x}-1+x}{x} .
$$

It can be verified that if $A_2$ is left arbitrary, the solution corresponding to the exponent $-1$ is the sum of $A_0$ times the two-term solution obtained and $A_2$ times the infinite series solution corresponding to the exponent $+1$ . That means, When $A_2$ is left arbiary, the solution is **contained** in the solution when $s_1=+1$.

## Special functions derived from the series solutions of ODEs
- The **Bessel functions** of order $p$ by solving
$$
x^2 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+x \frac{\mathrm{d} y}{\mathrm{d} x}+\left(x^2-p^2\right) y=0
$$

- The **Ber and Bei functions** by solving
$$
x^2 \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+x \frac{\mathrm{d} y}{\mathrm{d} x}-\left(p^2+i x^2\right) y=0
$$

- The **Legendre functions** of order $p$ by solving
$$
\left(1-x^2\right) \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}-2 x \frac{\mathrm{d} y}{\mathrm{d} x}+p(p+1) y=0
$$

- The **hypergeometric function** by solving
$$
x(1-x) \frac{\mathrm{d}^2 y}{\mathrm{d} x^2}+[\gamma-(\alpha+\beta+1) x] \frac{\mathrm{d} y}{\mathrm{d} x}-\alpha \beta y=0
$$
# Numerical Methods for Solving ODEs
Ordinary Differential Equations (ODEs):

- Equations which are composed of an unknown function and its derivatives are called **differential equations**.
- Differential equations play a fundamental role in engineering because many physical phenomena are best formulated mathematically in terms of their rate of change.

For example: the pendulum
$$
F=ma \implies\frac{\mathrm{d}v}{\mathrm{d}t} = g - \frac{c}{m}v
$$

- Analytical:
$$
v = \frac{g}{mc}(1-c^{-(c/m)t})
$$
- Numberical:
$$
v_{i+1} = v_i + (g - \frac{c}{m}v_i)\Delta t
$$

## Use of Taylor series
This lecture is devoted to solving ordinary differential equations of the form
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = f(x,y).
$$

- Suppose that the solution passes through the point $(x_0 ,y_0)$
- we attempt, by a step-by-step method, to calculate successively approximate values of $y$ at the points $x_1=x_0+h, x_2=x_0+2h, \cdots, x_k=x_0+kh\cdots$, where $h$ is a suitably chosen spacing along the $X$ axis
- Use the Taylor series representation in the form of function $y$ at $x$ point:
$$
y(x+h)=y(x)+y^{\prime}(x) \frac{h}{1!}+y^{\prime \prime}(x) \frac{h^2}{2!}+\cdots
$$

setting $x= x_k$, we obtain the formula:
$$
y_{k+1}=y_k+y_k^{\prime} \frac{h}{1!}+y_k^{\prime \prime} \frac{h^2}{2!}+\cdots
$$

where
$$
\begin{array}{ll}
y^{\prime}=F(x, y), & y_k^{\prime}=F\left(x_k, y_k\right) \\
y^{\prime \prime}=\frac{\partial F}{\partial x}+\frac{\partial F}{\partial y} \frac{\mathrm{d} y}{\mathrm{d} x}, & y_k^{\prime \prime}=\frac{\partial F\left(x_k, y_k\right)}{\partial x}+\frac{\partial F\left(x_k, y_k\right)}{\partial y} y_k^{\prime}
\end{array}
$$

### Example1
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = y-x.
$$

- with the **initial condition** that $y = 2$ at $x =0$. 
> $$
\begin{aligned}
  &\frac{\mathrm{d}y}{\mathrm{d}x} - y = -x\\
  \implies& y = 3\exp(x)-x-1.
\end{aligned}
> $$

- Choose an interval $h = 0.1$,
- calculate successively the approximate values of $y$ at $x = 0.1, 0.2, 0.3$, and so on:
$$
y^{\prime}=y-x, \quad y^{\prime \prime}=y^{\prime}-1, \quad y^{\prime \prime \prime}=y^{\prime \prime}, \quad \ldots
$$

- At ${x}=0$, with ${k}=0$
$$
\begin{aligned}
y_0^{\prime}&=2, \quad y_0^{\prime \prime}=1, \quad y_0^{\prime \prime \prime}=1, \quad \cdots, \\
y_1&= y|_{x=0.1}= y_0+2 h+\frac{h^2}{2}+\frac{h^3}{6}+\cdots \\
& \cong 2+0.2000+0.0050+0.0002+\cdots=2.2052 .
\end{aligned}
$$

> $y|_{x=0.1} = 3\exp(0.1)-0.1-1\approx 2.2155$
- At ${x}=0.1$, with ${k}=1$
$$
\begin{aligned}
y_1^{\prime}&\cong 2.1052, \quad y_1^{\prime \prime}\cong 1.1052, \quad y_1^{\prime \prime \prime}\cong 1.1052, \quad \cdots, \\
y_2&\cong y|_{x=0.2}= y_1+2.1052 h+0.5526{h^2}+0.1842{h^3}+\cdots \\
& \cong 2.2052+0.2105+0.0055+0.0002+\cdots=2.4214 .
\end{aligned}
$$
> $y|_{x=0.2} = 3\exp(0.2)-0.2-1\approx 2.4642$

## Euler’s Methods
<img src="/math_em9_1_euler.png" alt="euler's method to solving ODEs" width="100%" align="center">

The first derivative provides a direct estimate of the **slope** at $x_i$:
$$
\phi = f(x_i,y_i).
$$

where $f(x_i,y_i)$ is the differential equation evaluated at $x_i$ and $y_i$. This estimate can be substituted into the equation: [core]
$$
y_{i+1} = y_i + f(x_i,y_i)h
$$

A new value of $y$ is predicted using the slope to extrapolate linearly over the step size $h$.

<img src="/math_em9_2_euler.png" alt="euler's method with different steps" width="100%" align="center">

### Error Analysis for Euler’s Method
Numerical solutions of ODEs involves two types of error:
- **Truncation error**
  - Local truncation error
  $$E_a = \frac{f'(x_i,y_i)}{2!}h^2 + \cdots = \frac{y''(x_i,y_i)}{2!}h^2 + O(h^3) = O(h^2)$$
  - Propagated truncation error
  - The sum of the two is the total or global truncation error
- **Round-off errors**

### Improvements of Euler’s method
A fundamental source of error in Euler’s method is that the **derivative at the beginning of the interval** is assumed to **apply across the entire interval**.

Two simple modifications are available to circumvent this shortcoming:
- Heun’s Method
- The Midpoint (or Improved Polygon) Method

#### Heun’s Method
One method to improve the estimate of the slope involves the determination of two derivatives for the interval:
- At the initial point
- At the end point

The two derivatives are then averaged to obtain an improved estimate of the slope for the entire interval.

- Predictor:
$$
y_{i+1}^0 = y_i + f(x_i,y_i)h
$$
- Corrector:
$$
y_{i+1} = y_i + \frac{f(x_i,y_i) + f(x_{i+1},y_{i+1}^0)}{2}h
$$

<img src="/math_em9_3_heun.png" alt="heun's method to help euler's" width="100%" align="center">
<img src="/math_em9_4_heun.png" alt="result about heun's method" width="100%" align="center">

#### The Midpoint / Improved Polygon Method
Uses Euler’s method to predict a value of $y$ at the midpoint of the interval:

$$
y_{i+1} = y_i + f(x_{i+1/2},y_{i+1/2})h
$$

where
$$
\begin{aligned}
  x_{i+1/2} &= x_i + \frac12h\\
  y_{i+1/2} &= y_i + f(x_i,y_i)\frac{h}{2}
\end{aligned}
$$

<img src="/math_em9_5_midpoint.png" alt="midpoint method to help euler's" width="100%" align="center">

## Runge-Kutta (RK) Methods
Runge-Kutta methods achieve the accuracy of a Taylor series approach without requiring the calculation of higher derivatives.

$$
\begin{aligned} 
& y_{i+1}=y_i+\phi\left(x_i, y_i, h\right) h \\ & \phi=a_1 k_1+a_2 k_2+\cdots+a_n k_n \quad \text { Increment function } \\ & a \text {'s=constants; } k\text{'s: slopes in the interval}  \\ & k_1=f\left(x_i, y_i\right) \\ & k_2=f\left(x_i+p_1 h, y_i+q_{11} k_1 h\right) \quad \text { \textit{p}'s and \textit{q}'s are constants } \\ & k_3=f\left(x_i+p_2 h, y_i+q_{21} k_1 h+q_{22} k_2 h\right) \\ & \vdots \\ & k_n=f\left(x_i+p_{n-1} h, y_i+q_{n-1,1} k_1 h+q_{n-1,2} k_2 h+\cdots+q_{n-1, n-1} k_{n-1} h\right)\end{aligned}
$$

- $k$’s are **recurrence functions**. Because each $k$ is a functional evaluation, this recurrence makes RK methods efficient for computer calculations.
- Various types of RK methods can be devised by employing different number of terms in the increment function as specified by $n$.
- First order RK method with $n=1$ is in fact the Euler’s method.
- Once $n$ is chosen, values of $a$’s, $p$’s, and $q$’s are evaluated by setting general equation equal to terms in a Taylor series expansion.

### 2nd-Order RK
For $n=2$:
$$
\begin{aligned}
    & y_{i+1}=y_i+(a_1k_1+a_2k_2) h\\
    & k_1 = f(x_i,y_i) \\
    & k_2 = f(x_i+p_1h,y_i + q_{11}k_1h)
\end{aligned}
$$

Values of $a_1, a_2, p_1$, and $q_{11}$ are evaluated by setting the second order equation to Taylor series expansion to the second order term. Three equations to evaluate four unknowns constants are derived.

While for a general case, the Taylor expansion gives
$$
y_{i+1}\cong y_i+f(x_i,y_i)h+ f'(x_i,y_i)\frac{h^2}{2}
$$

Since
$$
f'(x_i,y_i) = \frac{\partial f(x_i,y_i)}{\partial x} + \frac{\partial f(x_i,y_i)}{\partial y}\frac{\mathrm{d}y}{\mathrm{d}x}
$$

Therefore
$$
y_{i+1}\cong y_i+f(x_i,y_i)h+ \left(\frac{\partial f}{\partial x} + \frac{\partial f}{\partial y}\frac{\mathrm{d}y}{\mathrm{d}x}\right)\frac{h^2}{2}
$$

On the other hand
$$
f(x_i+p_1h,y_i + q_{11}k_1h) = f(x_i,y_i) + p_1h\frac{\partial f}{\partial x} + q_{11}k_1h\frac{\partial f}{\partial y} + O(h^2).
$$

Then
$$
\begin{aligned}
    y_{i+1}=&y_i+(a_1k_1+a_2k_2) h \\
    \implies y_{i+1}\cong& y_i+a_1 hf(x_i,y_i)+\\
    &a_2 hf(x_i,y_i) + a_2p_1h^2\frac{\partial f}{\partial x} + a_2q_{11}k_1h^2\frac{\partial f}{\partial y} + O(h^3) \\
    =& y_i + (a_1+a_2)hf(x_i,y_i) + \\
    & \left(a_2p_1\frac{\partial f}{\partial x} + a_2q_{11}k_1\frac{\partial f}{\partial y}\right)h^2 + O(h^3)
\end{aligned}
$$

Thus
$$
\begin{cases}
    a_1 + a_2 = 1\\
    a_2p_1 = \frac12\\
    a_2q_{11} = \frac12
\end{cases}
$$

For $a_2$:
- (Midpoint) $a_2 = 1 \implies a_1=0;p_1=\frac12;q_{11} = \frac12$:
$$
y_{i+1} = y_i + f\left[x_i+\frac{h}{2},y_i+\frac{h}{2}f(x_i,y_i)\right]h
$$

- (Heun) $a_2 = \frac12 \implies a_1=\frac12;p_1=1;q_{11} = 1$:
$$
y_{i+1} = y_i + \{f(x_i,y_i) + f\left[x_i+{h},y_i+{h}f(x_i,y_i)\right]\}\frac{h}{2}
$$

- (Raltson) $a_2 = \frac23 \implies a_1=\frac13;p_1=\frac34;q_{11} = \frac34$:
$$
y_{i+1} = y_i + \left\{f(x_i,y_i) + 2f\left[x_i+\frac{3h}{4},y_i+\frac{3hf(x_i,y_i)}{4}\right]\right\}\frac{h}{3}
$$

- Because we can choose an infinite number of values for $a_2$, there are an infinite number of second-order RK methods.
- Every version would yield exactly the same results if the solution to ODE were quadratic, linear, or a constant.
- However, they yield different results if the solution is more complicated (typically the case).
- Three of the most commonly used methods are:
  - Huen Method with a Single Corrector ($a_2=1/2$)
  - The Midpoint Method ($a_2=1$)
  - Raltson’s Method ($a_2=2/3$)

<img src="/math_em9_6_rk2.png" alt="RK2's method to solving ODEs" width="100%" align="center">

### 3rd-Order RK
For $n=3$:
$$
\begin{aligned}
    & y_{i+1}=y_i+\frac{(k_1+4k_2+k_3)}{6} h\\
    & k_1 = f(x_i,y_i) \\
    & k_2 = f(x_i+\frac{h}{2},y_i + \frac12 k_1h)\\
    & k_3 = f(x_i+h,y_i - k_1h+2k_2h)
\end{aligned}
$$

### Classical 4th-Order RK [core]
For $n=4$:
$$
\begin{aligned}
    & y_{i+1}=y_i+\frac{(k_1+2k_2+2k_3+k_4)}{6} h\\
    & k_1 = f(x_i,y_i) \\
    & k_2 = f(x_i+\frac{h}{2},y_i + \frac12 k_1h)\\
    & k_3 = f(x_i+\frac{h}{2},y_i + \frac12 k_2h)\\
    & k_4 = f(x_i+h,y_i +k_3h)
\end{aligned}
$$

### Butcher’s 5th-Order RK Method
$$
\begin{aligned} & y_{i+1}=y_i+\frac{\left(7 k_1+32 k_3+12 k_4+32 k_5+7 k_6\right)}{90} h \\ & k_1=f\left(x_i, y_i\right) \\ & k_2=f\left(x_i+\frac{h}{4}, y_i+\frac{1}{4} k_1 h\right) \\ & k_3=f\left(x_i+\frac{h}{4}, y_i+\frac{1}{8} k_1 h+\frac{1}{8} k_2 h\right) \\ & k_4=f\left(x_i+\frac{h}{2}, y_i-\frac{1}{2} k_2 h+k_3 h\right) \\ & k_5=f\left(x_i+\frac{3 h}{4}, y_i+\frac{3}{16} k_1 h+\frac{9}{16} k_4 h\right) \\ & k_6=f\left(x_i+h, y_i-\frac{3}{7} k_1 h+\frac{2}{7} k_2 h+\frac{12}{7} k_3 h-\frac{12}{7} k_4 h+\frac{8}{7} k_5 h\right)\end{aligned}
$$

<img src="/math_em9_7_methods_effort.png" alt="efforts of different methods" width="100%" align="center">

### Example2
Solve the following initial-value problem over the
interval from $x = 0$ to $2$:
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = yx^2 - 1.1y
$$

where $y(0) = 1$. Plot the solution.
(a) Analytically.
(b) Use Euler’s method with $h = 0.5$ and $0.25$.
(c) Use Heun’s method with $h = 0.5$. Iterate the corrector to $\varepsilon_s = 1\%$.
(d) Use the midpoint method with $h = 0.5$ and $0.25$.
(e) Use the classic fourth-order RK method with $h = 0.5$ (relative error).

(a) The analytical solution can be derived by separation of variables
$$
\begin{aligned}
& \int \frac{d y}{y}=\int x^2-1.1 d x \\
& \ln y=\frac{x^3}{3}-1.1 x+C
\end{aligned}
$$

Substituting the initial conditions yields $C=0$. Taking the exponential gives the final result
$$
y=e^{\frac{x^3}{3}-1.1 x}
$$

The result can be plotted as

<img src="/math_em9_8_plot.png" alt="curve of examples" width="100%" align="center">

(b) Euler's method with $h=0.5$ gives
| ${x}$ | ${y}$ | $\mathrm{d} {y} / \mathrm{d} {x}$ |
| :---: | :---: | :---: |
| 0 | 1 | -1.1 |
| 0.5 | 0.45 | -0.3825 |
| 1 | 0.25875 | -0.02588 |
| 1.5 | 0.245813 | 0.282684 |
| 2 | 0.387155 | 1.122749 |

Euler's method with $h=0.25$ gives
| ${x}$ | ${y}$ | $\mathrm{d} {y} / \mathrm{d} {x}$ |
| :---: | :---: | :---: |
| 0 | 1 | -1.1 |
| 0.25 | 0.725 | -0.75219 |
| 0.5 | 0.536953 | -0.45641 |
| 0.75 | 0.422851 | -0.22728 |
| 1 | 0.36603 | -0.0366 |
| 1.25 | 0.356879 | 0.165057 |
| 1.5 | 0.398143 | 0.457865 |
| 1.75 | 0.51261 | 1.005997 |
| 2 | 0.764109 | 2.215916 |

(c) For [Heun's method](#heuns-method), the value of the slope at $x=0$ can be computed as $-1.1$ which can be used to compute the value of $y$ at the end of the interval as
$$
y(0.5)=1+(0-1.1(1)) 0.5=0.45
$$

The slope at the end of the interval can be computed as
$$
y^{\prime}(0.5)=0.45(0.5)^2-1.1(0.45)=-0.3825
$$
which can be averaged with the initial slope to predict
$$
y(0.5)=1+\frac{-1.1-0.3825}{2} 0.5=0.629375
$$

This formula can then be iterated to yield

| ${j}$ | ${y}_{{i}}^{{j}}$ | $\left\|{\varepsilon}_{{a}}\right\|$ |
| :---: | :---: | :---: |
| 0 | 0.45 |  |
| 1 | 0.629375 | $28.5 \%$ |
| 2 | 0.5912578 | $6.45 \%$ |
| 3 | 0.5993577 | $1.35 \%$ |
| 4 | 0.5976365 | $0.288 \%$ |

The remaining steps can be implemented with the result

| ${x}_{{i}}$ | ${y}_{{i}}$ |
| :---: | ---: |
| 0 | 1.0000000 |
| 0.5 | 0.5976365 |
| 1 | 0.4590875 |
| 1.5 | 0.6269127 |
| 2 | 2.8784358 |

The results along with the analytical solution are displayed below:

<img src="/math_em9_9_plot2.png" alt="curve of examples in Heun's method" width="100%" align="center">

(d) The [midpoint](#the-midpoint--improved-polygon-method) method with $h=0.5$
| ${x}$ | ${y}$ | $\mathrm{d} {y} / \mathrm{d} {x}$ | ${y}_{{m}}$ | $\mathrm{d} {y} / \mathrm{d} {x}-{\text{mid}}$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 1 | -1.1 | 0.725 | -0.75219 |
| 0.5 | 0.623906 | -0.53032 | 0.491326 | -0.26409 |
| 1 | 0.491862 | -0.04919 | 0.479566 | 0.221799 |
| 1.5 | 0.602762 | 0.693176 | 0.776056 | 1.52301 |
| 2 | 1.364267 | 3.956374 | 2.35336 | 9.32519 |

with $h=0.25$ gives

| ${x}$ | $y$ | $\mathrm{d} {y} / \mathrm{d} {x}$ | $y_m$ | $\mathrm{d} {y} / \mathrm{d} {x}-\text{mid}$ |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 1 | -1.1 | 0.8625 | -0.93527 |
| 0.25 | 0.766182 | -0.79491 | 0.666817 | -0.63973 |
| 0.5 | 0.60625 | -0.51531 | 0.541836 | -0.38436 |
| 0.75 | 0.510158 | -0.27421 | 0.475882 | -0.15912 |
| 1 | 0.470378 | -0.04704 | 0.464498 | 0.076932 |
| 1.25 | 0.489611 | 0.226445 | 0.517916 | 0.409478 |
| 1.5 | 0.59198 | 0.680777 | 0.677077 | 1.043122 |
| 1.75 | 0.852761 | 1.673543 | 1.061954 | 2.565282 |
| 2 | 1.494081 | 4.332836 | 2.035686 | 6.953139 |

<img src="/math_em9_10_plot3.png" alt="curve of examples in Midpoint's method" width="100%" align="center">

(d) The $4^{\text {th }}$-order RK method with $h=0.5$ gives

| ${x}$ | $y$ | ${k}_{\mathbf{1}}$ | ${y}_m$ | $k_2$ | ${y}_m$ | $k_3$ | $y_e$ | $k_4$ | $\phi$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 1 | -1.1 | 0.725 | -0.75219 | 0.811953 | -0.8424 | 0.578799 | -0.49198 | -0.79686 |
| 0.5 | 0.60157 | -0.51133 | 0.473737 | -0.25463 | 0.537912 | -0.28913 | 0.457006 | -0.0457 | -0.27409 |
| 1 | 0.464524 | -0.04645 | 0.452911 | 0.209471 | 0.516892 | 0.239062 | 0.584055 | 0.671663 | 0.253713 |
| 1.5 | 0.59138 | 0.680087 | 0.761402 | 1.494252 | 0.964943 | 1.893701 | 1.538231 | 4.460869 | 1.986144 |
| 2 | 1.584452 | 4.594911 | 2.73318 | 10.83023 | 4.292008 | 17.00708 | 10.08799 | 51.95317 | 18.70378 |

<img src="/math_em9_11_plot4.png" alt="curve of examples in RK4's method" width="100%" align="center">

## HW
### Question 1
**Q1**: Numerically solve differential equation using Euler method:

$$
\frac{\mathrm{d} w}{\mathrm{d} t}=0.04 w-100
$$

Suppose three initial conditions: (1) $w_{1}(0)=1500$; (2) $w_{2}(0)=2500$; (3) $w_{3}(0)=3500$. Select the iteration step ${h}=1$, and calculate at least 4 iteration steps. (12 points)

**Answer**: For Euler method:
$$
w(t+h) = w(t) + (0.04w(t) - 100)h.
$$

(1) $w_1(0) = 1500$:
$$
\begin{align*}
	w(1) =& w(0) + (0.04w(0)-100) = 1500 + (0.04\times 1500 - 100) = 1460 \\
	w(2) =& w(1) + (0.04w(1)-100) = 1460 + (0.04\times 1460 - 100) = 1418.4 \\
	w(3) =& w(2) + (0.04w(2)-100) = 1418.4 + (0.04\times 1418.4 - 100) = 1375.136 \\
	w(4) =& w(3) + (0.04w(3)-100) = 1375.136 + (0.04\times 1375.136 - 100) = 1330.14144.
\end{align*}
$$

(2) $w_2(0) = 2500$:
$$
\begin{align*}
	w(1) =& w(0) + (0.04w(0)-100) = 2500 + (0.04\times 2500 - 100) = 2500 \\
	w(2) =& w(1) + (0.04w(1)-100) = 2500 + (0.04\times 2500 - 100) = 2500 \\
	w(3) =& w(2) + (0.04w(2)-100) = 2500 + (0.04\times 2500 - 100) = 2500 \\
	w(4) =& w(3) + (0.04w(3)-100) = 2500 + (0.04\times 2500 - 100) = 2500.
\end{align*}
$$

(3) $w_1(0) = 3500$:
$$
\begin{align*}
	w(1) =& w(0) + (0.04w(0)-100) = 3500 + (0.04\times 3500 - 100) = 3540 \\
	w(2) =& w(1) + (0.04w(1)-100) = 3540 + (0.04\times 3540 - 100) = 3581.6 \\
	w(3) =& w(2) + (0.04w(2)-100) = 1418.4 + (0.04\times 1418.4 - 100) = 3624.864 \\
	w(4) =& w(3) + (0.04w(3)-100) = 3624.864 + (0.04\times 3624.864 - 100) = 3669.85856.
\end{align*}
$$

### Question 2
**Q2**: Numerically solve differential equation using 4th-Order Runge-Kutta Method:

$$
\frac{\mathrm{d} y}{\mathrm{d} x}=y^{2} \cos (x)
$$

Suppose the initial condition: ${y}(0)=1$. Select the iteration step ${h}=0.2$, and calculate at least 3 iteration steps. (8 points)

**Answer**: For 4th-Order Runge-Kutta Method:
$$
\begin{align*}
& y_{i+1}=y_i+\frac{(k_1+2k_2+2k_3+k_4)}{6} h\\
& k_1 = f(x_i,y_i) {\color{red}=y_n^2\cos x_n}\\
& k_2 = f(x_i+0.5h,y_i + 0.5 k_1h) {\color{red}=(y_n+0.1k_1)^2\cos (x_n+0.1)}\\
& k_3 = f(x_i+0.5h,y_i + 0.5 k_2h) {\color{red}=(y_n+0.1k_2)^2\cos (x_n+0.1)}\\
& k_4 = f(x_i+h,y_i +k_3h) {\color{red}=(y_n+0.2k_3)^2\cos (x_n+0.2)}
\end{align*}
$$

where $f(x,y) = y^2\cos(x)$. With $y(0)=1$ and $h=0.2$:

- 1st iteration: ($x_0 = 0, y_0 = y|_{x=0} = 1, y_1=y|_{x=0.2}$)
$$
\begin{align*}
	& k_1 = f(x_0,y_0) = 1\\
	& k_2 = f(x_0+0.1, y_0+0.5\times k_1\times 0.2) = f(0.1,1.1) = 1.21\cos(0.1)\approx 1.204\\
	& k_3 = f(x_0+0.1, y_0+0.5\times k_2\times 0.2) = f(0.1,1.120) \approx 1.249\\
	& k_4 = f(x_0+0.2, y_0+k_3\times 0.2) = f(0.2,1.249) \approx 1.531\\
	&y_1 = y_0 + \frac{1}{6}\times 0.2\times (k_1+2\times k_2 + 2\times k_3+k_4)\approx 1.248.
\end{align*}
$$

- 2nd iteration: ($x_1 = 0.2, y_1 = y|_{x=0.2} \approx 1.248, y_2=y|_{x=0.4}$)
$$
\begin{align*}
	& k_1 = f(x_1,y_1) \approx f(0.2,1.248) \approx 1.526\\
	& k_2 = f(x_1+0.1, y_1+0.5\times k_1\times 0.2) \approx f(0.3,1.400) \approx 1.874\\
	& k_3 = f(x_1+0.1, y_1+0.5\times k_2\times 0.2) \approx f(0.3,1.435) \approx 1.968\\
	& k_4 = f(x_1+0.2, y_1+k_3\times 0.2) \approx f(0.4,1.642) \approx 2.482\\
	&y_2 = y_1 + \frac{1}{6}\times 0.2\times (k_1+2\times k_2 + 2\times k_3+k_4)\approx 1.638.
\end{align*}
$$

- 3rd iteration: ($x_2 = 0.4, y_2 = y|_{x=0.4} \approx 1.638, y_3=y|_{x=0.6}$)
$$
\begin{align*}
	& k_1 = f(x_2,y_2) \approx f(0.4,1.638) \approx 2.470\\
	& k_2 = f(x_2+0.1, y_2+0.5\times k_1\times 0.2) \approx f(0.5,1.885) \approx 3.117\\
	& k_3 = f(x_2+0.1, y_2+0.5\times k_2\times 0.2) \approx f(0.5,1.950) \approx 3.335\\
	& k_4 = f(x_2+0.2, y_2+k_3\times 0.2) \approx f(0.6,2.305) \approx 4.383\\
	&y_3 = y_2 + \frac{1}{6}\times 0.2\times (k_1+2\times k_2 + 2\times k_3+k_4)\approx 2.296.
\end{align*}
$$
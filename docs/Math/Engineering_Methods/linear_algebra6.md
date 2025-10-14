# 6 Inner Products Spaces

## 6.1 Inner Products and Norms
### Definition

::: warning Definition: Inner product [core]
Let $\mathsf{V}$ be a vector space over field ${F}$. An **inner product** on $\mathsf{V}$ is a function assigning each ordered pair of vectors  $\langle x,y\rangle$ in $\mathsf{V} \times \mathsf{V}$ a scalar $\langle x,y\rangle  \in {F}$,satisfying:  
- $\langle x+z,y\rangle  = \langle x,y\rangle  + \langle z,y\rangle$.
- $\langle c x, y\rangle  = c \langle x,y\rangle$ for $c \in {F}$.
- $\langle x,y\rangle  = \overline{\langle y,x\rangle }$ where the bar denotes complex conjugation.   
- $\langle x,x\rangle  > 0$ if $x \neq 0$  
:::

Note that:
- The 3rd one reduces to $\langle x,y\rangle = \langle y,x\rangle$ if $F=\mathbb{R}$
- The 1st and 2nd parts simply require that the inner product be **linear** in the first component, (and conjugate linear in the second component).
- It's easily shown that if $a_1,a_2,\cdots,a_n\in F$ and $y,v_1,v_2,\cdots,v_n\in\mathsf{V}$, then
  $$
    \left\langle \sum_{i=1}^n a_iv_i, y \right\rangle = \sum_{i=1}^n a_i \langle v_i, y\rangle.
  $$

The idea of **distance or length** is missing. Therefore we need a richer structure, the so-called **inner product space** structure, by adding a new inner product function.

#### Example 6.1.1

Example 1
For $x=\left(a_1, a_2, \ldots, a_n\right)$ and $y=\left(b_1, b_2, \ldots, b_n\right)$ in $\mathsf{F}^n$, define
$$
\langle x, y\rangle=\sum_{i=1}^n a_i \overline{b_i}
$$

The verification that $\langle\cdot, \cdot\rangle$ satisfies conditions the 1st through (4th) is easy. For example, if $z=\left(c_1, c_2, \ldots, c_n\right)$, we have for (a)
$$
\begin{aligned}
\langle x+z, y\rangle & =\sum_{i=1}^n\left(a_i+c_i\right) \overline{b_i}=\sum_{i=1}^n a_i \overline{b_i}+\sum_{i=1}^n c_i \overline{b_i} \\
& =\langle x, y\rangle+\langle z, y\rangle
\end{aligned}
$$

Thus, for $x=(1+i, 4)$ and $y=(2-3 i, 4+5 i)$ in $\mathbb{C}^2$,
$$
\langle x, y\rangle=(1+i)(2+3 i)+4(4-5 i)=15-15 i .
$$

The inner product in Example 1 is called the **standard inner product** on $\mathsf{F}^n$. When $F=\mathbb{R}$ the conjugations are not needed, and in early courses this standard inner product is usually called the **dot product** and is denoted by $x \cdot y$ instead of $\langle x, y\rangle$.

#### Example 6.1.2

If $\langle x, y \rangle$ is any inner product on a vector space $\mathsf{V}$ and $r > 0$, define another inner product by $\langle x, y \rangle' = r \langle x, y \rangle$. If $r\le 0$, then the 4th one of definition for inner product would not hold.

#### Example 6.1.3

Let $\mathsf{V} = \mathsf{C}([0,1])$, the vector space of real-valued continuous functions on $[0,1]$. For $f,g \in \mathsf{V}$, define

$$
\langle f, g \rangle = \int_0^1 f(t)g(t) dt.
$$

- Since the proceding integral is linear in $f$, the 1st and the 2nd parts are immediate.
- the 3rd one is trival (real-value).
- If $f\not\equiv 0$, then $f^2$ is bounded away from zero on some subinterval of $[0,1]$ (continuity is used here), and hence $\langle f,f\rangle=\int_0^1 [f(t)]^2\mathrm{\mathrm{d}}t>0$.

### conjugate transpose
::: warning Definition: conjugate transpose
Let $A \in \mathsf{M}_{m \times n}(F)$. Define the **conjugate transpose** or **adjoint** of $A$ as the $n \times m$ matrix $A^*$ such that $(A^*)_{ij} = \overline{A}_{ji}$ for all $i,j$.
:::

#### Example 6.1.4

If

$$
A = \begin{bmatrix}
i & 1 + 2i \\
2 & 3 + 4i
\end{bmatrix},
$$

then

$$
A^* = \begin{bmatrix}
-i & 2 \\
1 - 2i & 3 - 4i
\end{bmatrix}.
$$

Notice that:
- if $x,y$ are viewed as column vector in $\mathsf{F}^n$, then $\langle \boldsymbol{x},\boldsymbol{y}\rangle = \boldsymbol{y}^*\boldsymbol{x}$.
- The conjugate transpose of a matrix plays a very important role in the remainder of this chapter. In the case that $A$ has only real entries, $A^*$ is simply the transpose of $A$.

#### Example 6.1.5

Let $\mathsf{V} = \mathsf{M}_{n \times n}(F)$, and define $\langle A, B\rangle  = \operatorname{tr}(B^* A)$ for $A, B \in \mathsf{V}$. (Recall that the trace of a matrix $A$ is defined by $\operatorname{tr}(A) = \sum_{i=1}^n A_{ii}$.) We verify that the 1st and 4th of the definition of inner product hold and leave (b) and (c) to the reader. For this purpose, let $A, B, C \in \mathsf{V}$. Then

$$
\begin{aligned}
  \langle A + B, C \rangle &= \operatorname{tr}(C^* (A + B)) = \operatorname{tr}(C^* A + C^* B) \\
  &= \operatorname{tr}(C^* A) + \operatorname{tr}(C^* B) = \langle A, C\rangle  + \langle B, C\rangle .  
\end{aligned}
$$

Also

$$
\begin{aligned}
  \langle A, A\rangle  &= \operatorname{tr}(A^* A) = \sum (A^* A)_{ii} = \sum_{i=1}^n \sum_{k=1}^n (A^*)_{ik} A_{ki} \\
  &= \sum_{i=1}^n \sum_{k=1}^n \overline{A_{ki}} A_{ki} = \sum_{i=1}^n \sum_{k=1}^n |A_{ki}|^2. 
\end{aligned}
$$

Now if $A \neq \mathbf{0}$, then $A_{ki} \neq 0$ for some $k$ and $i$. So $\langle A, A\rangle > 0$.

### inner product space
The inner product on $\mathsf{M}_{n\times n}(F)$ in Example 6.1.5 is called the **Frobenius inner product**.

A vector space $\mathsf{V}$ over $F$ endowed with a specific inner product is called an **inner product space**. If $F=\mathbb{C}$, we call $\mathsf{V}$ a **complex inner product space**, whereas if $F=\mathbb{R}$, we call $\mathsf{V}$ a **real inner product space**.

For the remainder of this chapter, $\mathsf{F}^n$ denotes the inner product space with the standard inner product as defined in [Example 6.1.1](#example-6-1-1). Likewise, $\mathsf{M}_{n \times n}(F)$ denotes the inner product space with the Frobenius inner product as defined in Example 6.1.5. The reader is cautioned that two distinct inner products on a given vector space yield **two distinct inner product spaces**. For instance, it can be shown that both

$$
\langle f(x), g(x)\rangle _1 = \int_{-1}^1 f(t) g(t) \mathrm{\mathrm{d}}t \quad \text{and} \quad \langle f(x), g(x)\rangle _2 = \int_0^1 f(t) g(t) \mathrm{\mathrm{d}}t
$$

are inner products on the vector space $\mathsf{P}(\mathbb{R})$. Even though the underlying vector space is the same, however, these two inner products yield two different inner product spaces. For example, the polynomials $f(x) = x$ and $g(x) = x^2$ are orthogonal in the second inner product space, but not in the first. About orthogonal, introduce it [later](#orthogonal).

A very important inner product space that resembles $\mathsf{C}([0,1])$ is the space $\mathsf{H}$ of continuous complex-valued functions defined on the interval $[0, 2\pi]$ with the inner product

$$
\langle f, g\rangle  = \frac{1}{2\pi} \int_0^{2\pi} f(t) \overline{g(t)} \mathrm{\mathrm{d}}t.
$$

Show that the vector space $\mathsf{H}$ with $\langle \cdot, \cdot \rangle$ defined above is an inner product space.

Check the condition one by one.

$$
\begin{aligned}
  &\langle f + h, g\rangle = \frac{1}{2\pi} \int_0^{2\pi} (f(t) + h(t)) \overline{g(t)} \mathrm{\mathrm{d}}t \\
  =& \frac{1}{2\pi} \int_0^{2\pi} f(t) \overline{g(t)} \mathrm{\mathrm{d}}t + \frac{1}{2\pi} \int_0^{2\pi} h(t) \overline{g(t)} \mathrm{\mathrm{d}}t = \langle f, g\rangle + \langle h, g\rangle. \\
  &\langle cf, g\rangle = \frac{1}{2\pi} \int_0^{2\pi} (c f(t)) \overline{g(t)} \mathrm{\mathrm{d}}t = c \frac{1}{2\pi} \int_0^{2\pi} f(t) \overline{g(t)} \mathrm{\mathrm{d}}t = c\langle f, g\rangle. \\
  &\langle f, g\rangle = \overline{\langle g, f\rangle}. \\
  &\langle f, f\rangle = \frac{1}{2\pi} \int_0^{2\pi} |f(t)|^2 \mathrm{\mathrm{d}}t > 0 \quad \text{if } f \not\equiv 0.
\end{aligned}
$$

At this point, we mention a few facts about integration of complex-valued functions.
1. the imaginary number $i$ can be treated as a constant under the integration sign.
2. every complex-valued function $f$ may be written as $f = f_1 + i f_2$, where $f_1$ and $f_2$ are real-valued functions. Thus we have
  $$\int f = \int f_1 + i\int f_2 \quad \text{and} \quad \overline{\int f} = \int \bar{f}.$$


::: danger Theorem 6.1
Let $V$ be an inner product space. Then for $x, y, z \in V$ and $c \in F$, the following statements are true.

- $\langle x, y + z\rangle = \langle x, y\rangle + \langle x, z\rangle$.
- $\langle x, c y\rangle = c \langle x, y\rangle$.
- $\langle x, 0\rangle = \langle 0, x\rangle = 0$.
- $\langle x, x\rangle = 0$ if and only if $x = 0$.
- If $\langle x, y\rangle = \langle x, z\rangle$ for all $x \in V$, then $y = z$.
:::

The 1st and 2nd of Theorem 6.1 show that the inner product is **conjugate linear** in the second component.

### Norms
::: warning Definition: Norm / Length 
Let $\mathsf{V}$ be an inner product space. For $x\in \mathsf{V}$, we define the **norm** or **length** of $x$ by $\|x\|= \sqrt{\langle x,x\rangle }$.  
:::

#### Example 6.1.6

Let $\mathsf{V} = \mathsf{F}^n$. If $x = (a_1, a_2, \ldots, a_n)$, then

$$
\| x \| = \|(a_1, a_2, \ldots, a_n)\| = \sqrt{\sum_{i=1}^n |a_i|^2}
$$

is the **Euclidean** definition of length. Note that if $n = 1$, we have $\|a\| = |a|$.

### Theorem 6.2
::: danger Theorem 6.2
Let $\mathsf{V}$ be an inner product space over $F$. Then for all $x, y \in \mathsf{V}$ and $c \in F$, the following statements are true.

- $\| c x \| = |c| \cdot \| x \|$.
- $\| x \| = 0$ if and only if $x = 0$. In any case, $\| x \| \geq 0$.
- (Cauchy-Schwarz Inequality) $| \langle x, y\rangle | \leq \| x \| \cdot\| y \|$.
- (Triangle Inequality) $\| x + y \| \leq \| x \| + \| y \|$.
:::

#### Example 6.1.7

For $\mathsf{F}^n$, we may apply 3rd and 4th of [Theorem 6.2](#theorem-6-2) to the standard inner product to obtain the following well-known inequalities:
$$
\left|\sum_{i=1}^n a_i \bar{b}_i\right| \leq\left[\sum_{i=1}^n\left|a_i\right|^2\right]^{1 / 2}\left[\sum_{i=1}^n\left|b_i\right|^2\right]^{1 / 2}
$$
and
$$
\left[\sum_{i=1}^n\left|a_i+b_i\right|^2\right]^{1 / 2} \leq\left[\sum_{i=1}^n\left|a_i\right|^2\right]^{1 / 2}+\left[\sum_{i=1}^n\left|b_i\right|^2\right]^{1 / 2}.
$$

### Orthogonal [core]
::: warning Definitions: orthogonal & orthonormal
Let $\mathsf{V}$ be an inner product space. Vectors $x$ and $y$ in $\mathsf{V}$ are **orthogonal** (**perpendicular**) if $\langle x, y\rangle = 0$. 

A subset $S$ of $\mathsf{V}$ is **orthogonal** if any two distinct vectors in $S$ are **orthogonal**. A vector $x$ in $\mathsf{V}$ is a **unit vector** if $\|x\| = 1$. Finally, a subset $S$ of $\mathsf{V}$ is **orthonormal** if $S$ is orthogonal and consists entirely of unit vectors.
:::

Note that if $S=\left\{v_1, v_2, \ldots\right\}$ (infinite dimension), then $S$ is orthonormal if and only if $\left\langle v_i, v_j\right\rangle= \delta_{i j}$, where $\delta_{i j}$ denotes the **Kronecker delta**. Also, observe that multiplying vectors by nonzero scalars **does not affect** their orthogonality and that if $x$ is any nonzero vector, then $(1 /\|x\|) x$ is a unit vector. The process of multiplying a nonzero vector by the reciprocal of its length is called **normalizing**.

#### Example 6.1.8

In $\mathsf{F}^3$, $\{(1,1,0), (1,-1,1), (-1,1,2)\}$ is an orthogonal set of nonzero vectors, but it is not orthonormal; however, if we normalize the vectors in the set, we obtain the orthonormal set

$$
\left\{ \frac{1}{\sqrt{2}} (1,1,0), \frac{1}{\sqrt{3}} (1,-1,1), \frac{1}{\sqrt{6}} (-1,1,2) \right\}.
$$

#### Example 6.1.9

Recall the inner product space $\mathsf{H}$ (defined above). We introduce an important orthonormal subset $S$ of $\mathsf{H}$. 

For what follows, $i$ is the imaginary number such that $i^2 = -1$. For any integer $n$, let $f_n(t) = e^{i n t}$, where $0 \leq t \leq 2\pi$. (Recall that $e^{i n t} = \cos nt + i \sin nt$.) 

Now define $S = \{ f_n : n \text{ is an integer} \}$. Clearly $S$ is a subset of $\mathsf{H}$. Using the property that $e^{i t} = e^{-i t}$ for every real number $t$, we have, for $m \neq n$,

$$
\langle f_m, f_n \rangle = \frac{1}{2\pi} \int_0^{2\pi} e^{i m t} e^{-i n t} dt = \frac{1}{2\pi} \int_0^{2\pi} e^{i(m-n) t} dt = 0.
$$

Also,

$$
\langle f_n, f_n \rangle = \frac{1}{2\pi} \int_0^{2\pi} 1 dt = 1.
$$

In other words, $\langle f_m, f_n \rangle = \delta_{mn}$, the Kronecker delta.

***

## 6.2 The Gram-Schmidt Orthogonalization Process and Orthogonal Complements
### Orthonormal basis
::: warning Definition: orthonormal basis
Let $\mathsf{V}$ be an inner product space. A subset of $\mathsf{V}$ is an **orthonormal basis** for $\mathsf{V}$ if it is an **ordered basis** that is **orthonormal**.
:::

#### Example 6.2.1

The standard ordered basis for $\mathsf{F}^n$ is an orthonormal basis for $\mathsf{F}^n$.

#### Example 6.2.2

The set $\{(1/\sqrt{5}, 2/\sqrt{5}), (2/\sqrt{5}, -1/\sqrt{5})\}$ is an orthonormal basis for $\mathbb{R}^2$.

### Theorem 6.3
::: danger Theorem 6.3
Let $\mathsf{V}$ be an inner product space and $S = \{v_1, v_2, \ldots, v_k\}$ be an orthogonal subset of $\mathsf{V}$ consisting of nonzero vectors. If $y \in \operatorname{span}(S)$, then

$$
y = \sum_{i=1}^k a_i v_i,
$$

where

$$
a_i = \frac{\langle y, v_i\rangle}{\|v_i\|^2} \quad \text{for } i = 1, 2, \ldots, k.
$$

:::

#### Corollary of Theorem 6.3
::: tip Corollary
1. If, in addition to the hypotheses of Theorem 6.3, $S$ is **orthonormal** and $y \in \operatorname{span}(S)$, then

$$
y = \sum_{i=1}^k \langle y, v_i\rangle v_i.
$$

2. Let $V$ be an inner product space, and let $S$ be an orthogonal subset of $V$ consisting of nonzero vectors. Then $S$ is linearly independent.
:::

For Corollary 1: If $\mathsf{V}$ possesses a finite orthonormal basis, then Corollary 1 allows us to compute the coefficients in a linear combination very easily.

#### Example 6.2.3

By Corollary 2, the orthonormal set 
$$\left\{\frac{1}{\sqrt{2}}(1,1,0), \frac{1}{\sqrt{3}}(1,-1,1), \frac{1}{\sqrt{6}}(-1,1,2)\right\}$$

obtained in [Example 6.1.8](#example-6-1-8) is an orthonormal basis for $\mathbb{R}^3$. Let $x = (2,1,3)$. The coefficients given by [Corollary 1](#corollary-of-theorem-6-3) to Theorem 6.3 that express $x$ as a linear combination of the basis vectors are

$$
a_1 = \frac{\langle x, v_1\rangle}{\|v_1\|^2} = \frac{2+1}{\sqrt{2}}, \quad a_2 = \frac{2-1+3}{\sqrt{3}}, \quad a_3 = \frac{-2+1+6}{\sqrt{6}}.
$$

As a check, we have

$$
(2,1,3) = a_1 (1,1,0) + a_2 (1,-1,1) + a_3 (-1,1,2).
$$

### Gram-Schmidt process

Before stating this theorem, let us consider a simple case. Suppose that $\{w_1, w_2\}$ is a linearly independent subset of an inner product space (and hence a basis for some two-dimensional subspace). We want to construct an orthogonal set from $\{w_1, w_2\}$ that spans the same subspace. 

<img src="/math_em6_1_gs.png" alt="gram-schmidt" width="100%" align="middle">

Figure 6.1 suggests that the set $\{v_1, v_2\}$, where $v_1 = w_1$ and $v_2 = w_2 - c w_1$, has this property if $c$ is chosen so that $v_2$ is orthogonal to $w_1$. To find $c$, we solve

$$
0 = \langle v_2, w_1\rangle = \langle w_2 - c w_1, w_1\rangle = \langle w_2, w_1\rangle - c \langle w_1, w_1\rangle.
$$

So

$$
c = \frac{(w_2, w_1)}{\|w_1\|^2}.
$$

Thus

$$
v_2=w_2-\frac{\langle w_2,w_1\rangle}{\|w_1\|^2}w_1
$$

::: danger Theorem 6.4: Gram-Schmidt process [core]
Let $\mathsf{V}$ be an inner product space and $S = \{w_1, w_2, \ldots, w_n\}$ be a linearly independent subset of $\mathsf{V}$. Define $S' = \{v_1, v_2, \ldots, v_n\}$, where $v_1 = w_1$, and for $2 \leq k \leq n$,

$$
v_k = w_k - \sum_{j=1}^{k-1} \frac{\langle w_k, v_j\rangle}{\|v_j\|^2} v_j.
$$

Then $S'$ is an **orthogonal** set of nonzero vectors such that $\operatorname{span}(S') = \operatorname{span}(S)$.
:::

This construction of $\{v_1,v_2,\cdots,v_n\}$ by the use of Theorem 6.4 is called the **Gram-Schmidt process**.

#### Example 6.2.4 [core]

In $\mathbb{R}^4$, let $w_1 = (1,0,1,0)$, $w_2 = (1,1,1,1)$, and $w_3 = (0,1,2,1)$. Then $\{w_1, w_2, w_3\}$ is linearly independent. We use the Gram-Schmidt process to compute orthogonal vectors $v_1, v_2, v_3$, then normalize them to obtain an orthonormal set.

Take $v_1 = w_1 = (1, 0, 1, 0)$. Then

$$
v_2 = w_2 - \frac{\langle w_2, v_1\rangle}{\|v_1\|^2} v_1 = (1,1,1,1) - \frac{2}{2} (1,0,1,0) = (0, 1, 0, 1).
$$

Finally,

$$
\begin{aligned}
  v_3 &= w_3 - \frac{\langle w_3, v_1\rangle}{\|v_1\|^2} v_1 - \frac{\langle w_3, v_2\rangle}{\|v_2\|^2} v_2 \\
  &= (0,1,2,1) - \frac{2}{2} (1,0,1,0) - \frac{2}{2} (0,1,0,1) = (-1,0,1,0).  
\end{aligned}
$$

Normalization yields the orthonormal basis $\{u_1, u_2, u_3\}$ where

$$
\begin{aligned}
u_1 &= \frac{v_1}{\|v_1\|} = \frac{1}{\sqrt{2}} (1,0,1,0), \\ u_2 &= \frac{v_2}{\|v_2\|} = \frac{1}{\sqrt{2}} (0,1,0,1), \\ u_3 &= \frac{v_3}{\|v_3\|} = (-1,0,1,0).
\end{aligned}
$$

***

#### Example 6.2.5

Let $\mathsf{V} = \mathsf{P}(\mathbb{R})$ with the inner product

$$
\langle f(x), g(x)\rangle = \int_{-1}^1 f(t) g(t) \mathrm{\mathrm{d}}t,
$$

and consider the subspace $\mathsf{P}_2(\mathbb{R})$ with the standard ordered basis $\beta = \{1, x, x^2\}$. We use the Gram-Schmidt process to replace $\beta$ with an orthogonal basis $\{v_1, v_2, v_3\}$ for $\mathsf{P}_2(\mathbb{R})$, then obtain an orthonormal basis.

Take $v_1=1$. Then $\left\|v_1\right\|^2=\int_{-1}^1 1^2 \mathrm{d} t=2$, and $\left\langle x, v_1\right\rangle=\int_{-1}^1 t \cdot 1 \mathrm{d} t=0$.
Thus
$$
v_2=x-\frac{\left\langle v_1, x\right\rangle}{\left\|v_1\right\|^2}=x-\frac{0}{2}=x .
$$

Furthermore,
$$
\left\langle x^2, v_1\right\rangle=\int_{-1}^1 t^2 \cdot 1 \mathrm{d} t=\frac{2}{3} \quad \text { and } \quad\left\langle x^2, v_2\right\rangle=\int_{-1}^1 t^2 \cdot t \mathrm{d} t=0
$$

Therefore
$$
\begin{aligned}
v_3 & =x^2-\frac{\left\langle x^2, v_1\right\rangle}{\left\|v_1\right\|^2} v_1-\frac{\left\langle x^2, v_2\right\rangle}{\left\|v_2\right\|^2} v_2 \\
& =x^2-\frac{1}{3} \cdot 1-0 \cdot x \\
& =x^2-\frac{1}{3}.
\end{aligned}
$$

We conclude that $\left\{1, x, x^2-\frac{1}{3}\right\}$ is an orthogonal basis for $\mathsf{P}_2(R)$.

To obtain an orthonormal basis, we normalize $v_1, v_2$, and $v_3$ to obtain
$$
\begin{aligned}
& u_1=\frac{1}{\sqrt{\int_{-1}^1 1^2 \mathrm{d} t}}=\frac{1}{\sqrt{2}} \\
& u_2=\frac{x}{\sqrt{\int_{-1}^1 t^2 \mathrm{d} t}}=\sqrt{\frac{3}{2}} x
\end{aligned}
$$
and similarly,
$$
u_3=\frac{v_3}{\left\|v_3\right\|}=\sqrt{\frac{5}{8}}\left(3 x^2-1\right) .
$$

Thus $\left\{u_1, u_2, u_3\right\}$ is the desired orthonormal basis for $\mathsf{P}_2(\mathbb{R})$.

If we continue applying the Gram-Schmidt orthogonalization process to the basis $\left\{1, x, x^2, \ldots\right\}$ for $\mathsf{P}(\mathbb{R})$, we obtain an orthogonal basis whose elements are called the **Legendre polynomials**. The orthogonal polynomials $v_1, v_2$, and $v_3$ in Example 6.2.5 are the first three Legendre polynomials.

### Theorem 6.5
::: danger Theorem 6.5
Let $\mathsf{V}$ be a nonzero finite-dimensional inner product space. Then $\mathsf{V}$ has an orthonormal basis $\beta$. Furthermore, if $\beta = \{v_1, v_2, \ldots, v_n\}$ and $x \in \mathsf{V}$, then

$$
x = \sum_{i=1}^n \langle x, v_i\rangle v_i.
$$

:::

#### Example 6.2.6

We use Theorem 6.5 to represent the polynomial $f(x) = 1 + 2x + 3x^2$ as a linear combination of the vectors in the orthonormal basis $\{u_1, u_2, u_3\}$ for $\mathsf{P}_2(\mathbb{R})$ obtained in Example 6.2.5. Observe that:

$$
\begin{aligned}
  \langle f(x), u_1\rangle = \int_{-1}^1 \frac{1}{\sqrt{2}}(1 + 2t + 3t^2) u_1(t) \mathrm{d}t = 2 \sqrt{2}, \\
  \langle f(x), u_2\rangle = \int_{-1}^1 \sqrt{\frac{3}{2}}t(1 + 2t + 3t^2) u_1(t) \mathrm{d}t = \frac{2 \sqrt{6}}{3}, \\
  \langle f(x), u_3\rangle = \int_{-1}^1 (1 + 2t + 3t^2) u_1(t) \mathrm{d}t = \frac{2\sqrt{10}}{5}.
\end{aligned}
$$

Therefore,

$$
f(x) = 2 \sqrt{2} u_1 + \frac{2 \sqrt{6}}{3} u_2 + \frac{2 \sqrt{10}}{5} u_3.
$$

#### Corollary of Theorem 6.5

::: tip Corollary
Let $\mathsf{V}$ be a finite-dimensional inner product space with an orthonormal basis $\beta = \{v_1, v_2, \ldots, v_n\}$. Let $\mathsf{T}$ be a linear operator on $V$, and let $A = [\mathsf{T}]_\beta$. Then for any $i$ and $j$,

$$
A_{ij} = \langle\mathsf{T}(v_j), v_i\rangle.
$$

:::

### Fourier coefficients [core]
::: warning Definition: Fourier coefficients
Let $\beta$ be an **orthonormal subset** (possibly infinite) of an inner product space $\mathsf{V}$, and let $x \in \mathsf{V}$. We define the **Fourier coefficients** of $x$ relative to $\beta$ to be the scalars $\langle x, y\rangle$ where $y \in \beta$.
:::

#### Example 6.2.7

Let $S = \{e^{i n t} : n \text{ is an integer}\}$. In [Example 6.1.9](#example-6-1-9), $S$ was shown to be an orthonormal set in $\mathsf{H}$. We compute the Fourier coefficients of $f(t) = t$ relative to $S$. Using integration by parts, for $n \neq 0$,

$$
\langle f, f_n\rangle = \frac{1}{2\pi} \int_0^{2\pi} t e^{-i n t} \mathrm{d}t = \frac{i}{n},
$$

and for $n=0$,

$$
\langle f, 1\rangle = \frac{1}{2\pi} \int_0^{2\pi} t \mathrm{d}t = \pi.
$$

### Orthogonal complement
::: warning Definition: orthogonal complement
Let $S$ be a nonempty subset of an inner product space $\mathsf{V}$. We define $S^\perp$ (read "S perp") to be the set of all vectors in $\mathsf{V}$ that are **orthogonal to every vector** in $S$; that is,

$$
S^\perp = \{ x \in \mathsf{V} : \langle x, y\rangle = 0 \text{ for all } y \in S \}.
$$

The set $S^\perp$ is called the **orthogonal complement** of $S$. It is easily seen that $S^\perp$ is a subspace of $\mathsf{V}$ for any subset $S$ of $\mathsf{V}$.
:::

#### Example 6.2.8

The reader should verify that $\{0\}^\perp = \mathsf{V}$ and $\mathsf{V}^\perp = \{0\}$ for any inner product space $\mathsf{V}$.

#### Example 6.2.9

If $\mathsf{V} = \mathbb{R}^3$ and $S = \{e_3\}$, then $S^\perp$ equals the xy-plane.

Let $S_0 = \{\boldsymbol{x}_0\}$, where $\boldsymbol{x}_0$ is a nonzero vector in $\mathbb{R}^3$. Describe $S^\perp$ geometrically. Now suppose $S = \{\boldsymbol{x}_1, \boldsymbol{x}_2\}$ is a linearly independent subset of $\mathbb{R}^3$. Describe $S^\perp$ geometrically.

We may think of $S^\perp$ as the plane orthogonal to $\boldsymbol{x}_0$, and if $S$ spans a plane, then $S^\perp$ is the line orthogonal to that plane.

Consider the problem in $\mathbb{R}^3$ of finding the distance from a point $P$ to a plane $\mathsf{W}$. (See Figure 6.2.) If we let $y$ be the vector determined by $0$ and $P$, we may restate the problem as follows: 

Determine the vector $\boldsymbol{u}$ in $\mathsf{W}$ that is "**closest**" to $y$. The desired distance is clearly given by $\|\boldsymbol{y} - \boldsymbol{u}\|$. Notice from the figure that the vector $\boldsymbol{z} = \boldsymbol{y} - \boldsymbol{u}$ is orthogonal to every vector in $\mathsf{W}$, so $\boldsymbol{z} \in \mathsf{W}^\perp$.

<img src="/math_em6_2_perp_plane.png" alt="perp_plane" width="100%" align="middle">

### Orthogonal projection
::: danger Theorem 6.6
Let $\mathsf{W}$ be a finite-dimensional subspace of an inner product space $\mathsf{V}$, and let $y \in \mathsf{V}$. Then there exist unique vectors $u \in \mathsf{W}$ and $z \in \mathsf{W}^\perp$ such that $y = u + z$. Furthermore, if $\{v_1, v_2, \ldots, v_k\}$ is an orthonormal basis for $\mathsf{W}$, then

$$
u = \sum_{i=1}^k \langle y, v_i\rangle v_i.
$$

:::

P.S. From [Corollary 1](#corollary-of-theorem-6-3) of Theorem 6.3: 
$$
u = \sum_{i=1}^k \langle u, v_i\rangle v_i.
$$

::: tip Corollary
In the notation of Theorem 6.6, the vector $u$ is the unique vector in $\mathsf{W}$ that is "closest" to $y$; that is, for any $x \in \mathsf{W}$, $\|y - x\| \geq \|y - u\|$, and this inequality is an equality if and only if $x = u$.
:::

The vector $u$ is called the **orthogonal projection** of $y$ onto $\mathsf{W}$.

#### Example 6.2.10

Let $\mathsf{V} = \mathsf{P}_3(\mathbb{R})$ with inner product

$$
\langle f(x), g(x)\rangle = \int_{-1}^1 f(t) g(t) \mathrm{d}t \quad \text{for all } f, g \in \mathsf{V}.
$$

We compute the orthogonal projection $f_1(x)$ of $f(x) = x^3$ on $\mathsf{P}_2(\mathbb{R})$. 

By [Example 6.2.5](#example-6-2-5), $\{u_1, u_2, u_3\}$ is an orthonormal basis for $\mathsf{P}_2(\mathbb{R})$ with

$$
\left\{\frac{1}{\sqrt{2}},\sqrt{\frac{3}{2}}x, \sqrt{\frac{5}{8}}(3x^2-1)\right\}
$$

Computing inner products:

$$
\langle f, u_1\rangle = 0, \quad \langle f, u_2\rangle = \int_{-1}^1t^3\sqrt{\frac{3}{2}}t\mathrm{d}t = \frac{\sqrt{6}}{5}, \quad \langle f, u_3\rangle = 0.
$$

Hence

$$
f_1(x) = \sum_{i=1}^3 \langle f(x), u_i\rangle u_i = \frac{3}{5}x.
$$

### Theorem 6.7
::: danger Theorem 6.7
Suppose that $S = \{v_1, v_2, \ldots, v_k\}$ is an orthonormal set in an $n$-dimensional inner product space $\mathsf{V}$. Then

- $S$ can be extended to an orthonormal basis $\{v_1, v_2, \ldots, v_k, v_{k+1}, \ldots, v_n\}$ for $\mathsf{V}$.

- If $\mathsf{W} = \operatorname{span}(S)$, then

$$
S_1 = \{v_{k+1}, v_{k+2}, \ldots, v_n\}
$$

is an orthonormal basis for $\mathsf{W}^\perp$.

- If $\mathsf{W}$ is any subspace of $\mathsf{V}$, then

$$
\dim(\mathsf{V}) = \dim(\mathsf{W}) + \dim(\mathsf{W}^\perp).
$$

:::

#### Example 6.2.11

Let $\mathsf{W} = \operatorname{span}(\{e_1, e_2\})$ in $\mathsf{F}^3$. Then $x = (a, b, c) \in \mathsf{W}^\perp$ if and only if

$$
\langle x, e_1\rangle = 0, \quad \langle x, e_2\rangle = 0.
$$

So $x = (0, 0, c)$, and therefore $\mathsf{W}^\perp = \operatorname{span}(\{e_3\})$. Thus $e_3\in\mathsf{W}^\perp$ and from 3rd claim of Theorem 6.7, that $\dim(\mathsf{W}^\perp) = 3 - 2 = 1$.
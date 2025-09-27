# 5 Eigenvalues and Eigenvectors
## 5.1 Eigenvalues and Eigenvectors
### Definition and Theorem
This chapter is concerned with the so-called **diagonalization problem**. For a given linear operator $\mathsf{T}$ on a finite-dimensional vector space $\mathsf{V}$, we seek answers to the following questions.

1. Does there exist an ordered basis $\beta$ for $\mathsf{V}$ such that $[T]_\beta$ is a **diagonal matrix**?
2. If such a basis exists, how can it be **found**?

::: warning Definitions: diagonalizable
A linear operator $\mathsf{T}$ on a finite-dimensional vector space $\mathsf{V}$ is called **diagonalizable** if there is an ordered basis $\beta$ for $\mathsf{V}$ such that $[\mathsf{T}]_\beta$ is a diagonal matrix. A square matrix $A$ is called **diagonalizable** if $\mathsf{L}_A$ is diagonalizable.
:::

::: warning Definitions: eigenvalue & eigenvector
Let $\mathsf{T}$ be a linear operator on a vector space $\mathsf{V}$. A nonzero vector $v \in \mathsf{V}$ is called an **eigenvector** of $\mathsf{T}$ if there exists a scalar $\lambda$ such that $\mathsf{T}(v) = \lambda v$. The scalar $\lambda$ is called the **eigenvalue** corresponding to the eigenvector $\mathsf{V}$.

Let $A$ be in $\mathsf{M}_{n \times n}(F)$. A nonzero vector $v \in \mathsf{F}^n$ is called an eigenvector of $A$ if $v$ is an **eigenvector** of $\mathsf{L}_A$; that is, if $Av = \lambda v$ for some scalar $\lambda$. The scalar $\lambda$ is called the **eigenvalue** of $A$ corresponding to the eigenvector $\mathsf{V}$.
:::

::: danger Theorem 5.1
A linear operator $\mathsf{T}$ on a finite-dimensional vector space $\mathsf{V}$ is **diagonalizable** if and only if there exists an ordered basis $\beta$ for $\mathsf{V}$ consisting of eigenvectors of $\mathsf{T}$. 

Furthermore, if $\mathsf{T}$ is diagonalizable, $\beta = \{v_1, v_2, ..., v_n\}$ is an ordered basis of eigenvectors of $\mathsf{T}$, and $D = [T]_\beta$, then $D$ is a diagonal matrix and $D_{jj}$ is the **eigenvalue** corresponding to $v_j$ for $1 \leq j \leq n$.
:::

::: tip Corollary
A matrix $A \in \mathsf{M}_{n \times n}(F)$ is diagonalizable if and only if there exists an ordered basis for $F^n$ consisting of eigenvectors of $A$. Furthermore, if $\{v_1, v_2, ..., v_n\}$ is an ordered basis for $\mathsf{F}^n$ consisting of eigenvectors of $A$ and $Q$ is the $n \times n$ matrix whose $j$th column is $v_j$ for $j=1,2,...,n$, then $D = Q^{-1} A Q$ is a **diagonal matrix** such that $D_{jj}$ is the **eigenvalue** of $A$ corresponding to $v_j$. Hence $A$ is diagonalizable if and only if it is **similar** to a diagonal matrix.

$$
[\mathsf{T}]_\beta = 
\begin{bmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n
\end{bmatrix}
$$

:::

#### Example 5.1.1

Let

$$
A = \begin{bmatrix} 1 & 3 \\ 4 & 2 \end{bmatrix}, \quad \boldsymbol{v}_1 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}, \quad \boldsymbol{v}_2 = \begin{bmatrix} 3 \\ 4 \end{bmatrix}.
$$

Since 

$$
\mathsf{L}_A(\boldsymbol{v}_1) = A \boldsymbol{v}_1 = \begin{bmatrix} 1 & 3 \\ 4 & 2 \end{bmatrix} \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} -2 \\ 2 \end{bmatrix} = -2 \begin{bmatrix} 1 \\ -1 \end{bmatrix} = -2\boldsymbol{v}_1
$$

$\boldsymbol{v}_1$ is an eigenvector of $\mathsf{L}_A$, and hence of $A$. Here $\lambda_1 = -2$ is the eigenvalue corresponding to $\boldsymbol{v}_1$. Furthermore,

$$
\mathsf{L}_A(\boldsymbol{v}_2) = A \boldsymbol{v}_2 = \begin{bmatrix} 1 & 3 \\ 4 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 15 \\ 20 \end{bmatrix} = 5 \begin{bmatrix} 3 \\ 4 \end{bmatrix} = 5\boldsymbol{v}_2,
$$

and so $\boldsymbol{v}_2$ is an eigenvector of $\mathsf{L}_A$, and hence of $A$, with the corresponding eigenvalue $\lambda_2 = 5$. Note that $\beta = \{\boldsymbol{v}_1, \boldsymbol{v}_2\}$ is an ordered basis for $\mathbb{R}^2$ consisting of eigenvectors of both $A$ and $\mathsf{L}_A$, and therefore $A$ and $\mathsf{L}_A$ are diagonalizable. Moreover, by Theorem 5.1 and its corollary, if

$$
Q = \begin{bmatrix} 2 & 3 \\ -1 & 4 \end{bmatrix}
$$

then

$$
Q^{-1} A Q = [\mathsf{L}_A]_\beta = \begin{bmatrix} -2 & 0 \\ 0 & 5 \end{bmatrix}
$$

#### Example 5.1.2

Let $\mathsf{T}$ be the linear operator on $\mathbb{R}^2$ that **rotates** each vector in the plane through an angle of $\pi/2$. 

It is clear geometrically that for any nonzero vector $v$, the vector $\mathsf{T}(v)$ does not lie on the line through 0 determined by $v$ (geometrical meaning of eigenvector, but for this $\mathsf{T}$); hence $\mathsf{T}(v)$ is not a multiple of $v$. Therefore $\mathsf{T}$ has no eigenvectors and, consequently, no eigenvalues. Thus there exist operators (and matrices) with no eigenvalues or eigenvectors. Of course, such operators and matrices are not diagonalizable.

While in the field of complex number $\mathbb{C}^2$, it exists: 

$$
A = \begin{bmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix}
$$

$$
p_A(t) = \det(A - tI) = t^2 - 2(\cos \theta) t + 1
$$

$$
e^{\pm i \theta} = \cos \theta \pm i \sin \theta, \quad \lambda_1 = e^{i \theta}, \quad \lambda_2 = e^{-i \theta}
$$

For basis $\beta = \{x_1, x_2\}$,

$$
[A]_\beta = \begin{bmatrix}
e^{i \theta} & 0 \\
0 & e^{-i \theta}
\end{bmatrix}
$$

Let

$$
\boldsymbol{x} = c_1\boldsymbol{x}_1 + c_2\boldsymbol{x}_2, \quad [\boldsymbol{x}]_\beta = (c_1,c_2)^\top
$$

Then

$$
[A\boldsymbol{x}]_\beta = [A]_\beta[\boldsymbol{x}]_\beta = [c_1e^{i\theta}, c_2e^{-i\theta}]^\top.
$$

#### Example 5.1.3

Let $C^\infty(\mathbb{R})$ denote the set of all functions $f: \mathbb{R} \to \mathbb{R}$ having derivatives of all orders(including the polynominl functions, the sine an cosine functions, the exponential functions, etc.). Clearly, $C^\infty(\mathbb{R})$ is a subspace of the vector space $\mathcal{F}(\mathbb{R}, \mathbb{R})$ of all functions from $\mathbb{R}$ to $\mathbb{R}$ as defined in [Section 1.2](./linear_algebra1#definition-about-some-vector-spaces).

Let $\mathsf{T}: C^\infty(\mathbb{R}) \to C^\infty(\mathbb{R})$ be the function defined by $\mathsf{T}(f) = f'$, the **derivative** of $f$. It's easily verified that $\mathsf{T}$ is a linear operator on $C^\infty(\mathbb{R})$. We determine the eigenvalues and eigenvectors of $\mathsf{T}$. 

Suppose $f$ is an eigenvector of $\mathsf{T}$ with eigenvalue $\lambda$. Then $f' = \lambda f$. This's a 1st-order differential equation whose solutions are of the form $f(t) = ce^{\lambda t}$ for some constant $c$. Consequently, **every** real number $\lambda$ is an eigenvalue of $\mathsf{T}$, and corresponds to eigenvectors of the form $ce^{\lambda t}$ for $c \neq 0$. Note that for $\lambda =0$, the eigevectors are the nonzero constant functions, i.e. $c$.

(Here, the function $f$ is the eigenvector $v$ in $Av=\lambda v$)

::: danger Theorem 5.2
Let $A \in M_{n \times n}(F)$. A scalar $\lambda$ is an eigenvalue of $A$ if and only if 

$$\det(A - \lambda I_n) = 0$$

:::

::: warning Definition: characteristic polynomial (For matrix)
The polynomial $f(t) = \det(A - t I_n)$ is called the **characteristic polynomial** of $A$.
:::

::: warning Definition: characteristic polynomial (For linear transformation)
Let $\mathsf{T}$ be a linear operator on an $n$-dimensional vector space $\mathsf{V}$ with ordered basis $\beta$. We define the characteristic polynomial $f(t)$ of $\mathsf{T}$ to be the characteristic polynomial of $A = [\mathsf{T}]_\beta$. That is,

$$
    f(t) = \det(A - t I_n)
$$

:::

#### Example 5.1.4

To find the eigenvalues of

$$
A = \begin{bmatrix}
1 & 1 \\
4 & 1
\end{bmatrix} \in \mathsf{M}_{2 \times 2}(\mathbb{R}),
$$

we compute its characteristic polynomial:

$$
\begin{aligned}
   &\det(A - t I_2) = \det \begin{bmatrix} 1 - t & 1 \\ 4 & 1 - t \end{bmatrix} \\
   =& (1 - t)^2 - 4 = t^2 - 2t - 3 = (t - 3)(t + 1). 
\end{aligned}
$$

Hence, the only eigenvalues of $A$ are 3 and -1.

#### Example 5.1.5

Let $\mathsf{T}$ be the linear operator on $\mathsf{P}_2(\mathbb{R})$ defined by  

$$ \mathsf{T}(f(x)) = f(x) + (x+1) f'(x), $$  

let $\beta$ be the standard ordered basis for $\mathsf{P}_2(\mathbb{R})$, and let $A = [\mathsf{T}]_\beta$. Then  

$$
A = \begin{bmatrix}
1 & 1 & 0 \\
0 & 2 & 2 \\
0 & 0 & 3 
\end{bmatrix}
$$

(Explanation: 

$$
\begin{gather*}
   f(x) = a + bx + cx^2 \\
   f'(x) = b + 2cx \\
   \begin{aligned}
      \mathsf{T}(f(x)) &= (a + bx + cx^2) + (x+1)(b + 2cx) \\
        &= a+bx+cx^2+bx+b+2cx^2+2cx \\
        &= (a+b)+(2b+2c)x+3cx^2
   \end{aligned}
\end{gather*}
$$

)

The characteristic polynomial of $\mathsf{T}$ is  
$$
\begin{aligned}
  \det(A - tI_3) &= 
   \begin{vmatrix}
   1 - t & 1 & 0 \\
   0 & 2 - t & 2 \\
   0 & 0 & 3 - t 
   \end{vmatrix} \\ &= (1-t)(2-t)(3-t) = - (t-1)(t-2)(t-3).  
\end{aligned}
$$  

Hence $\lambda$ is an eigenvalue of $\mathsf{T}$ if and only if $\lambda = 1, 2, \text{ or } 3$.

::: danger Theorem 5.3  
Let $A \in \mathsf{M}_{n \times n}(F)$.  
- The characteristic polynomial of $A$ is a polynomial of degree $n$ with leading coefficient $(-1)^n$.  
- $A$ has at most $n$ distinct eigenvalues.  
:::

::: danger Theorem 5.4  
Let $\mathsf{T}$ be a linear operator on a vector space $\mathsf{V}$, and let $\lambda$ be an eigenvalue of $\mathsf{T}$. A vector $v \in \mathsf{V}$ is an eigenvector of $\mathsf{T}$ corresponding to $\lambda$ if and only if $v \neq 0$ and $v \in \mathsf{N}(\mathsf{T} - \lambda I)$.  
:::

#### Example 5.1.6 [core] 
To find all eigenvectors of the matrix  

$$
A = \begin{bmatrix} 1 & 1 \\ 4 & 1 \end{bmatrix},
$$

recall $A$ has two eigenvalues $\lambda_1 = 3$ and $\lambda_2 = -1$. We begin with eigenvectors corresponding to $\lambda_1 = 3$. Let  
$$
B_1 = A - 3I = \begin{bmatrix} 1-3 & 1 \\ 4 & 1-3 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 4 & -2 \end{bmatrix}.
$$  

A vector $\boldsymbol{x} = (x_1, x_2)^T \in \mathbb{R}^2$ is an eigenvector corresponding to $\lambda_1 = 3$ iff $\boldsymbol{x} \neq \boldsymbol{0}$ and $\boldsymbol{x} \in \mathsf{N}(\mathsf{L}_{B_1})$, i.e.,  
$$
B_1 \boldsymbol{x} = \begin{bmatrix} -2 & 1 \\ 4 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} -2x_1 + x_2 \\ 4x_1-2x_2 \end{bmatrix} = \boldsymbol{0}.
$$  

Clearly the set of all solutions to this equation is 
$$
\left\{t \begin{bmatrix} 1 \\ 2 \end{bmatrix}: t \in\mathbb{R}\right\}.
$$

Now, suppose $\boldsymbol{x}$ is an eigenvector corresponding to $\lambda_2 = -1$. Let  
$$
B_2 = A - (-1)I = A + I = \begin{bmatrix} 1 +1 & 1 \\ 4 & 1 +1 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 4 & 2 \end{bmatrix}.
$$  

$\boldsymbol{x} \in \mathsf{N}(\mathsf{L}_{B_2})$ iff  
$$
B_2 \boldsymbol{x} = 0 \implies
\begin{cases}
2 x_1 + x_2 = 0 \\
4 x_1 + 2x_2 = 0
\end{cases}
$$

Hence

$$
\mathsf{N}(\mathsf{L}_{B_2})=\left\{t \begin{bmatrix} 1 \\ -2 \end{bmatrix}: t \in\mathbb{R}\right\}.
$$

Thus $\boldsymbol{x}$ is an eigenvector corresponding to $\lambda_2=-1$ iff

$$
\boldsymbol{x} = t(1,-2)^\top \quad \text{for some }t\neq 0.
$$

Observe that 

$$
\{(1,2)^\top, (1,-2)^\top\}
$$

is a basis for $\mathbb{R}^2$ consisting of eigenvectors of $A$. Thus $\mathsf{L}_A$, and hence $A$, is diagonalizable.

Suppose that $\beta$ is a basis for $\mathsf{F}^n$ consisting of eigenvectors of $A$. The [corollary](./linear_algebra2#corollary-of-theorem-2-23) to Theorem 2.23 assures that if $Q$ is the $n \times n$ matrix whose columns are the vectors in $\beta$, then $Q^{-1} A Q$ is a diagonal matrix. For example, in Example 5.1.6, if  
$$
Q = \begin{bmatrix}
1 & 1 \\
2 & -2 \\
\end{bmatrix},
\quad
D = Q^{-1} A Q = \begin{bmatrix}
3 & 0 \\
0 & -1 \\
\end{bmatrix}.
$$

The diagonal entries of this matrix are the eigenvalues of $A$ that correspond to the respective columns of $Q$.

To **find the eigenvectors** of a linear operator $\mathsf{T}$ on an $n$-dimensional vector space, select an ordered basis $\beta$ for $\mathsf{V}$ and let $A = [\mathsf{T}]_\beta$. Then for $v \in \mathsf{V}$, $\phi_{\beta}(v) = [v]_\beta$, the **coordinate vector** of $v$ relative to $\beta$. We show that $v \in \mathsf{V}$ is an eigenvector of $\mathsf{T}$ corresponding to $\lambda$ if and only if $\phi_{\beta}(v)$ is an eigenvector of $A$ corresponding to $\lambda$. Suppose $v$ is an eigenvector with eigenvalue $\lambda$, then $\mathsf{T}(v) = \lambda v$. Hence
$$
A \phi_{\beta}(v) = \mathsf{L}_A\phi_\beta\mathsf{T}(v) = \phi_{\beta}(\mathsf{T}(v)) = \phi_\beta(\lambda v) = \lambda \phi_{\beta}(v),
$$

Now $\phi_\beta(v) \neq 0$, since $\phi_\beta$ is an **isomorphism**; hence $\phi_\beta(v)$ is an eigenvector of $A$. This argument is reversible, and so we can establish that if $\phi_\beta(v)$ is an eigenvector of $A$ corresponding to $\lambda$, then $v$ is an eigenvector of T corresponding to $\lambda$.

An equivalent formulation of the result discussed in the preceding paragraph is that for an eigenvalue $\lambda$ of $A$ (and hence of $\mathsf{T}$ ), a vector $y \in \mathsf{F}^n$ is an eigenvector of $A$ corresponding to $\lambda$ if and only if $\phi_\beta^{-1}(y)$ is an eigenvector of T corresponding to $\lambda$.

We can choose to solve the problem using whichever path is easier.

#### Example 5.1.7


Let $\mathsf{T}$ be the linear operator on $\mathsf{P}_{2}(\mathbb{R})$ defined in [Example 5.1.5](#example-5-1-5), i.e., $\mathsf{T}(f(x))=f(x)+(x+1) f^{\prime}(x)$, and let $\beta$ be the standard ordered basis for $\mathsf{P}_{2}(\mathbb{R})$. Recall that $\mathsf{T}$ has eigenvalues $1,2,3$ and that

$$
A=[\mathsf{T}]_{\beta}=\left(\begin{array}{ccc}
1 & 1 & 0 \\
0 & 2 & 2 \\
0 & 0 & 3
\end{array}\right)
$$

We consider each eigenvalue separately.
Let $\lambda_{1}=1$, and define

$$
B_{1}=A-\lambda_{1} I=\left(\begin{array}{lll}
0 & 1 & 0 \\
0 & 1 & 2 \\
0 & 0 & 2
\end{array}\right)
$$

Then

$$
\boldsymbol{x}=\left(\begin{array}{l}
x_{1} \\
x_{2} \\
x_{3}
\end{array}\right) \in \mathbb{R}^{3}
$$

is an eigenvector corresponding to $\lambda_{1}=1$ if and only if $\boldsymbol{x} \neq \boldsymbol{0}$ and $\boldsymbol{x} \in \mathsf{N}\left(\mathsf{L}_{B_{1}}\right)$; that is, $\boldsymbol{x}$ is a nonzero solution to the system

$$
\begin{aligned}
&x_{2}&& && =0 \\
&x_{2}+&&2 x_{3} && =0 \\
& &&2 x_{3} && =0
\end{aligned}
$$

Notice that this system has three unknowns, $x_{1}, x_{2}$, and $x_{3}$, but one of these, $x_{1}$, does not actually appear in the system. Since the values of $x_{1}$ do not affect the system, we assign $x_{1}$ a parametric value, say $x_{1}=a$, and solve the system for $x_{2}$ and $x_{3}$. Clearly, $x_{2}=x_{3}=0$, and so the eigenvectors of $A$ corresponding to $\lambda_{1}=1$ are of the form

$$
a\left(\begin{array}{l}
1 \\
0 \\
0
\end{array}\right)=a e_{1}
$$

for $a \neq 0$. Consequently, the eigenvectors of T corresponding to $\lambda_{1}=1$ are of the form

$$
\phi_{\beta}^{-1}\left(a e_{1}\right)=a \phi_{\beta}^{-1}\left(e_{1}\right)=a \cdot 1=a
$$

for any $a \neq 0$. Hence the nonzero constant polynomials are the eigenvectors of $\mathsf{T}$ corresponding to $\lambda_{1}=1$.

Next let $\lambda_{2}=2$, and define

$$
B_{2}=A-\lambda_{2} I=\left(\begin{array}{rrr}
-1 & 1 & 0 \\
0 & 0 & 2 \\
0 & 0 & 1
\end{array}\right)
$$

It is easily verified that

$$
\mathsf{N}\left(\mathsf{L}_{B_{2}}\right)=\left\{a\left(\begin{array}{l}
1 \\
1 \\
0
\end{array}\right): a \in R\right\},
$$

and hence the eigenvectors of $\mathsf{T}$ corresponding to $\lambda_{2}=2$ are of the form

$$
\phi_{\beta}^{-1}\left(a\left(\begin{array}{l}
1 \\
1 \\
0
\end{array}\right)\right)=a \phi_{\beta}^{-1}\left(e_{1}+e_{2}\right)=a(1+x)
$$

for $a \neq 0$.
Finally, consider $\lambda_{3}=3$ and

$$
B_{3}=A-\lambda_{3} I=\left(\begin{array}{rrr}
-2 & 1 & 0 \\
0 & -1 & 2 \\
0 & 0 & 0
\end{array}\right)
$$

Since

$$
\mathsf{N}\left(\mathsf{L}_{B_{3}}\right)=\left\{a\left(\begin{array}{l}
1 \\
2 \\
1
\end{array}\right): a \in R\right\}
$$

the eigenvectors of $\mathsf{T}$ corresponding to $\lambda_{3}=3$ are of the form

$$
\phi_{\beta}^{-1}\left(a\left(\begin{array}{l}
1 \\
2 \\
1
\end{array}\right)\right)=a \phi_{\beta}^{-1}\left(e_{1}+2 e_{2}+e_{3}\right)=a\left(1+2 x+x^{2}\right)
$$

for $a \neq 0$.

For each eigenvalue, select the corresponding eigenvector with $a=1$ in the preceding descriptions to obtain $\gamma=\left\{1,1+x, 1+2 x+x^{2}\right\}$, which is an ordered basis for $\mathsf{P}_{2}(R)$ consisting of eigenvectors of $\mathsf{T}$ . Thus $\mathsf{T}$ is diagonalizable, and

$$
[\mathsf{T}]_{\gamma}=\left(\begin{array}{ccc}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3
\end{array}\right)
$$

## 5.2 Diagonalizability
### Theorem 5.5 and Corollary
What is still needed is a simple test to determine whether an operator or a matrix **can be diagonalized**, as well as a method for actually **finding a basis of eigenvectors**.

::: danger Theorem 5.5  
Let $\mathsf{T}$ be a linear operator on a vector space, and let $\lambda_1, \lambda_2, \ldots, \lambda_k$ be **distinct** eigenvalues of $\mathsf{T}$. For each $i=1,2,\ldots,k,$ let $S_i (i=1,2,\cdots,k)$ be a finite set of eigenvectors of $\mathsf{T}$ corresponding to $\lambda_i$. If each $S_i$ is **linearly independent**, then $S_1 \cup S_2 \cup \cdots \cup S_k$ is also **linearly independent**.  
:::

::: tip Corollary
Let $\mathsf{T}$ be a linear operator on an $n$-dimensional vector space $\mathsf{V}$. If $\mathsf{T}$ has $n$ distinct eigenvalues, then $\mathsf{T}$ is diagonalizable.  
:::

#### Example 5.2.1
Let  
$$
A = \begin{bmatrix}1 & 1 \\ 1 & 1\end{bmatrix}\in\mathsf{M}_{2\times 2}(\mathbb{R}).
$$

The characteristic polynomial of $A$ ( and hence of $\mathsf{L}_A$) is $t(t-2)$, giving two distinct eigenvalues $\lambda_1=0$ and $\lambda_2=2$. By the corollary to Theorem 5.5, $A$ is diagonalizable for $\mathsf{L}_A$ is a linear operator on the 2-dimensional vector space $\mathbb{R}^2$.

### split

::: warning Definition: split over
A polynomial $f(t)$ in $\mathsf{P}(F)$ **splits over** $F$ if there are scalars
$c, a_1, ..., a_n$ (not necessarily distinct) in $F$ such that
$$f(t) = c(t - a_1)(t - a_2) \cdots (t - a_n).$$

:::

For example, $t^2 - 1 = (t+1)(t-1)$ splits over $\mathbb{R}$, but $(t^2 + 1)(t - 2)$ does not split over $\mathbb{R}$ because $t^2 + 1$ cannot be factored into a product of linear factors. However, $(t^2 + 1)(t - 2)$ does split over $\mathbb{C}$ because it factors into the product $(t+i)(t-i)(t-2)$. 

If $f(t)$ is the characteristic polynomial of a linear operator or a matrix over a field $F$, then the statement that $f(t)$ **splits** is understood
to mean that it splits over $F$.

::: danger Theorem 5.6
The characteristic polynomial of any diagonalizable linear operator **splits**.
:::

From this theorem, it is clear that if $\mathsf{T}$ is a diagonalizable linear operator on an $n$-dimensional vector space that **fails to have distinct eigenvalues**, then the characteristic polynomial of $\mathsf{T}$ must have repeated zeros.

The converse of Theorem 5.6 is false; that is, the characteristic polynomial of $\mathsf{T}$ may split, but $\mathsf{T}$ **need not be diagonalizable**. (See Example 5.2.3, which
follows.) The following concept helps us determine when an operator whose characteristic polynomial splits is diagonalizable.

::: warning Definition: multiplicity
Let $\lambda$ be an eigenvalue of a linear operator or matrix with characteristic polynomial $f(t)$. The **multiplicity** (sometimes called the **algebraic multiplicity**) of $\lambda$ is the largest positive integer $k$ for which $(t - \lambda)^k$ is a factor of $f(t)$.
:::

#### Example 5.2.2

Let
$$
A = \begin{bmatrix}
3 & 1 & 0 \\
0 & 3 & 4 \\
0 & 0 & 4
\end{bmatrix},
$$

which has characteristic polynomial $f(t) = -(t-3)^2(t-4)$. Hence $\lambda = 3$ is an eigenvalue of $A$ with multiplicity $2$, and $\lambda = 4$ is an eigenvalue of $A$ with multiplicity $1$.

### Remark
Let $A$ be a square matrix. A (complex) number $\lambda$ is an eigenvalue of $A$ if and only if $\lambda$ is a root of the characteristic equation of $A$.

The multiplicity of $\lambda$ being a root of the characteristic equation is called the algebraic multiplicity of $\lambda$, denoted $m_a$. 

The dimension of the eigenspace associated to eigenvalue $\lambda$, that is, the **maximum number of linearly independent eigenvectors** associated with eigenvalue $\lambda$, is called the **geometric multiplicity** of $\lambda$, denoted $m_g$. It can be shown that for each eigenvalue $\lambda$, we have
$$
1 \leq m_g \leq m_a,
$$

where $m_g$ and $m_a$ are the geometric and algebraic multiplicities of $\lambda$
respectively. 

Therefore we have $A$ is diagonalizable if and only if the algebraic multiplicity and the geometric multiplicity are **equal** for **all** eigenvalues of $A$.

The eigenvectors of $\mathsf{T}$ corresponding to the eigenvalue $\lambda$ are the nonzero vectors in the null space of $\mathsf{T} - \lambda I$, we are led naturally to the 
study of this set.

### eigenspace

::: warning Definition: eigenspace
Let $\mathsf{T}$ be a linear operator on a vector space $\mathsf{V}$ , and let $\lambda$ be an eigenvalue of $\mathsf{T}$ . Define $\mathsf{E}_\lambda=\{x \in \mathsf{V}: \mathsf{T}(x)=\lambda x\}=\mathsf{N}\left(\mathsf{T}-\lambda \mathsf{I}_{\mathsf{V}}\right)$. The set $\mathsf{E}_\lambda$ is called the **eigenspace** of $\mathsf{T}$ corresponding to the eigenvalue $\lambda$. Analogously, we define the **eigenspace** of a square matrix $A$ corresponding to the eigenvalue $\lambda$ to be the eigenspace of $\mathsf{L}_A$ corresponding to $\lambda$.
:::

::: danger Theorem 5.7
Let $\mathsf{T}$ be a linear operator on a finite-dimensional vector space $\mathsf{V}$, and let $\lambda$ be an eigenvalue of $\mathsf{T}$ having multiplicity $m$. Then
$$
1 \leq \dim(\mathsf{E}_\lambda) \leq m,
$$

where $\mathsf{E}_\lambda$ is the eigenspace corresponding to $\lambda$.
:::

$$(1\le m_g\le m_a)$$

#### Example 5.2.3

Let $\mathsf{T}$ be the linear operator on $\mathsf{P}_2(\mathbb{R})$ defined by $\mathsf{T}(f(x)) = f'(x)$. The matrix representation of $\mathsf{T}$ with respect to the standard ordered basis $\beta$ for $\mathsf{P}_2(\mathbb{R})$ is
$$
[\mathsf{T}]_\beta = \begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 2 \\
0 & 0 & 0
\end{bmatrix}.
$$

Consequently, the characteristic polynomial of $\mathsf{T}$ is
$$
\det([\mathsf{T}]_\beta - tI) = \det \begin{bmatrix}
-t & 1 & 0 \\
0 & -t & 2 \\
0 & 0 & -t
\end{bmatrix} = -t^3.
$$

Thus $\mathsf{T}$ has only one eigenvalue ($\lambda=0$) with multiplicity $3$. Solving $\mathsf{T}(f(x)) = f'(x) = 0$ shows that $\mathsf{E}_\lambda = N(\mathsf{T} - \lambda I) = N(\mathsf{T})$ is the subspace of $\mathsf{P}_2(\mathbb{R})$ consisting of the constant polynomials. So $\{1\}$ is a basis for $\mathsf{E}_\lambda$, and therefore $\dim(\mathsf{E}_\lambda) = 1$. Consequently, there is no basis for $\mathsf{P}_2(\mathbb{R})$ consisting of eigenvectors of $\mathsf{T}$, and therefore $\mathsf{T}$ is not diagonalizable.

> A matrix is diagonalizable if and only if the algebraic multiplicity and geometric multiplicity are equal for all eigenvalues.

#### Example 5.2.4

Let $\mathsf{T}$ be the linear operator on $\mathbb{R}^3$ defined by
$$
\mathsf{T} \begin{bmatrix} a_1 \\ a_2 \\ a_3 \end{bmatrix} =
\begin{bmatrix}
4 a_1 + a_3 \\
2a_1 + 3a_2 + 2a_3 \\
a_1 + 4a_3
\end{bmatrix}.
$$

We determine the eigenspace of $\mathsf{T}$ corresponding to each eigenvalue. Let $\beta$ be the standard ordered basis for $\mathbb{R}^3$. Then
$$
[\mathsf{T}]_\beta = \begin{bmatrix}
4 & 0 & 1 \\
2 & 3 & 2 \\
1 & 0 & 4
\end{bmatrix},
$$

and hence the characteristic polynomial of $\mathsf{T}$ is
$$
\det([\mathsf{T}]_\beta - tI) = \det \begin{bmatrix}
4 - t & 0 & 1 \\
2 & 3 - t & 2 \\
1 & 4 & a_3 - t
\end{bmatrix} = -(t-5)(t-3)^2.
$$

So the eigenvalues of $\mathsf{T}$ are $\lambda_1 = 5$ and $\lambda_2 = 3$ with multiplicities $1$ and $2$, respectively.

Since
$$
\mathsf{E}_{\lambda_1} = \mathsf{N}(\mathsf{T} - \lambda_1 I) = \left\{ \boldsymbol{x} \in \mathbb{R}^3 : (\mathsf{T} - 5I)\boldsymbol{x} = 0 \right\},
$$

$\mathsf{E}_{\lambda_1}$ is the solution space of the system of linear equations
$$
\begin{cases}
-x_1 + x_3 = 0 \\
2x_1 + 2x_2+2x_3 = 0 \\
x_1 + x_3 = 0,
\end{cases}
$$

which means $\mathsf{E}_{\lambda_1}$ is spanned by the basis $\{ (1, 2, -1) \}$. Hence, $\dim(\mathsf{E}_{\lambda_1}) = 1$.

Similarly, $\mathsf{E}_{\lambda_2} = \mathsf{N}(\mathsf{T} - 3I)$ is the solution space of the system
$$
\begin{cases}
x_1 + x_3 = 0 \\
2x_1 + 2x_3 = 0 \\
x_1 + x_3 = 0.
\end{cases}
$$

Since the unknown $x_2$ does not appear in the first two equations, we assign it an arbitrary parameter $s$, and solve the system for $x_1$ and $x_3$, introducing another parameter $t$. The general solution to the system is
$$
\boldsymbol{x} = s \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}, \quad \text{for some }x,t\in\mathbb{R}.
$$

So a basis for $\mathsf{E}_{\lambda_2}$ is $\left\{ (0, 1, 0), (-1, 0, 1) \right\}$ and $\dim(\mathsf{E}_{\lambda_2}) = 2$.

In this case, the multiplicity of each eigenvalue $\lambda_i$ is equal to the dimension
of the corresponding eigenspace $\mathsf{E}_{\lambda_i}$. The union of the two bases just derived, namely,
$$
\{(1, 2, -1), (0, 1, 0), (-1, 0, 1)\},
$$

is linearly independent and hence is a basis for $\mathbb{R}^3$ consisting of eigenvectors of $\mathsf{T}$. Consequently, $\mathsf{T}$ is diagonalizable.

<img src="/math_em5_1_eigen.png" alt="diagram" width="80%" align="middle">

::: tip Lemma
Let $\mathsf{T}$ be a linear operator, and let $\lambda_1, \lambda_2, \dots, \lambda_k$ be **distinct** eigenvalues of $\mathsf{T}$. For each $i = 1, 2, \dots, k$, let $v_i \in \mathsf{E}_{\lambda_i}$, the eigenspace corresponding to $\lambda_i$. If
$$
v_1 + v_2 + \cdots + v_k = 0,
$$

then $v_i = 0$ for all $i$.
:::

Theorem 5.5 says that eigenvectors which corresponds to different eigenvalues are linearly independent, so the only possibility is that they are all zeros.

::: danger Theorem 5.8
Let $\mathsf{T}$ be a linear operator on a vector space $\mathsf{V}$, and let $\lambda_1, \lambda_2, \dots, \lambda_k$ be **distinct** eigenvalues of $\mathsf{T}$. For each $i = 1, \dots, k$, let $S_i$
be a finite linearly independent subset of the eigenspace $\mathsf{E}_{\lambda_i}$. Then $S = S_1 \cup S_2 \cup \cdots \cup S_k$ is a **linearly independent subset** of $\mathsf{V}$.
:::

::: danger Theorem 5.9
Let $\mathsf{T}$ be a linear operator on an $n$-dimensional vector space $\mathsf{V}$ such that the characteristic polynomial of $\mathsf{T}$ splits. Let $\lambda_1, \lambda_2, \dots, \lambda_k$ be the **distinct** eigenvalues of $\mathsf{T}$. Then

- $\mathsf{T}$ is diagonalizable if and only if the **algebraic multiplicity** of $\lambda_i$ equals $\dim(\mathsf{E}_{\lambda_i})$ for all $i$ (i.e. algebraic multiplicity = geometric multiplicity).
- If $\mathsf{T}$ is diagonalizable and $\beta_i$ is an ordered basis for $\mathsf{E}_{\lambda_i}$ for each $i$, then
$$
\beta = \beta_1 \cup \beta_2 \cup \cdots \cup \beta_k
$$

is an ordered basis for $V$ consisting of eigenvectors of $\mathsf{T}$.
:::

Test for Diagonalizability

Let $\mathsf{T}$ be a linear operator on an $n$-dimensional vector space $V$. Then $\mathsf{T}$ is diagonalizable if and only if
1. The characteristic polynomial of $\mathsf{T}$ splits.
2. For each eigenvalue $\lambda$ of $\mathsf{T}$, the multiplicity of $\lambda$ equals the corresponding geometrical multiplicity:
$$
\text{multiplicity}(\lambda) = \text{nullity}(\mathsf{T} - \lambda I) = n - \text{rank}(\mathsf{T} - \lambda I).
$$

#### Example 5.2.5

We test the matrix
$$
A = \begin{bmatrix}
3 & 1 & 0 \\
0 & 3 & 0 \\
0 & 0 & 4
\end{bmatrix} \in \mathsf{M}_{3\times 3}(\mathbb{R})
$$

for diagonalizability.

The characteristic polynomial of $A$ is
$$
\det(A - tI) = -(t - 4)(t - 3)^2,
$$

which splits and so condition 1 of the test for diagonalization is satisfied. The eigenvalues are $\lambda_1 = 4$ and $\lambda_2 = 3$ with multiplicities $1$ and $2$, respectively.

Since $\lambda_1$ has multiplicity 1, condition 2 is satisfied for $\lambda_1$. For $\lambda_2$:

$$
  A-\lambda_2 I = 
  \begin{bmatrix}
   0 & 1 & 0\\
   0 & 0 & 0\\
   0 & 0 & 1
  \end{bmatrix}
$$

the matrix $A - 3I$ has rank 2, so the nullity is $3 - 2 = 1$, which is not the multiplicity of $\lambda_2$. Thus, condition 2 fails for $\lambda_2$ and $A$ is not diagonalizable.

#### Example 5.2.6 [core]

Let $\mathsf{T}$ be the linear operator on $\mathsf{P}_2(\mathbb{R})$ defined by
$$
\mathsf{T}(f(x)) = f(1) + f'(0)x + (f'(0) + f''(0)) x^2.
$$

With $\alpha = \{1, x, x^2\}$ as the standard ordered basis for $\mathsf{P}_2(\mathbb{R})$, let $B = [\mathsf{T}]_\alpha$. Then
$$
B = \begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 0 \\
0 & 1 & 2
\end{bmatrix}.
$$

The characteristic polynomial of $B$, and hence of $\mathsf{T}$, is
$$
-(t - 1)^2 (t - 2),
$$

which splits. Hence, condition 1 of the test for diagonalizability is satisfied.

Also, $B$ has eigenvalues $\lambda_1 = 1$ and $\lambda_2 = 2$ with multiplicities $2$ and $1$, respectively.

Condition 2 is satisfied for $\lambda_2$ because it has multiplicity $1$.

Checking condition 2 for $\lambda_1 = 1$: 

$$
  \operatorname{rank}(B-\lambda_1 I) = \operatorname{rank}
  \begin{pmatrix}
   0 & 1 & 1\\
   0 & 0 & 0\\
   0 & 1 & 1
  \end{pmatrix} = 1,
$$

the rank of $B - I$ is 1, so nullity is $3 - 1 = 2$, which equals the multiplicity of $\lambda_1$. Therefore $\mathsf{T}$ is diagonalizable.

We now find an ordered basis $\gamma$ for $\mathbb{R}^3$ of eigenvectors of $B$. For each eigenvalue:

- The eigenspace corresponding to $\lambda_1 = 1$ is
$$
\mathsf{E}_{\lambda_1} = \{ \boldsymbol{x} \in \mathbb{R}^3 : (B - I) \boldsymbol{x} = 0 \}
$$

which is the solution space for the system

$$x_2+x_3 = 0,$$

and has

$$
\gamma_1 = \left\{\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ -1 \\ 1 \end{bmatrix}\right\}.
$$

as a basis.

- The eigenspace corresponding to $\lambda_2 = 2$ is
$$
\mathsf{E}_{\lambda_2} = \{ \boldsymbol{x} \in \mathbb{R}^3 : (B - 2I) \boldsymbol{x} = 0 \}
$$

which is the solution space for the system

$$
\begin{aligned}
   -x_1+&x_2+x_3&&=0\\
   &x_2 &&= 0,
\end{aligned}
$$

and has

$$
\gamma_1 = \left\{\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}\right\}.
$$

as a basis.

Let

$$
  \gamma = \gamma_1\cup\gamma_2 = \left\{\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ -1 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}\right\}
$$

Then $\gamma$ is an ordered basis for $\mathbb{R}^3$ consisting of eigenvectors of$B$.

Finally, observe that the vector in $\gamma$ are the coordinatevectors relative to $\alpha$ of the vectors in the set

$$\beta=\{1,-x+x^2,1+x^2\},$$

which is an ordered basis for $\mathsf{P}_2(\mathbb{R})$ consisting of eigenvectors of $\mathsf{T}$. Thus

$$
[\mathsf{T}]_\beta = 
\begin{bmatrix}
   1 & 0 & 0\\
   0 & 1 & 0\\
   0 & 0 & 2
\end{bmatrix}.
$$

#### Example 5.2.7

Let
$$
A = \begin{bmatrix}
0 & -2 \\
1 & 3
\end{bmatrix}.
$$

We show $A$ is diagonalizable and find a $2 \times 2$ matrix $Q$ such that $Q^{-1} A Q$ is diagonal. We then show how to use this result to compute $A^n$ for any positive integar $n$.

First observe the characteristic polynomial of $A$ is $(t - 1)(t - 2)$, so $A$ has two distinct eigenvalues, $\lambda_1 = 1$ and $\lambda_2 = 2$.

By applying the [corollary](#theorem-5-5-and-corollary) to Theorem 5.5 to the operator $\mathsf{L}_A$, $A$ is diagonalizable. Moreover,

$$
\gamma_1 = \{ (-2, 1)^\top \}, \quad \gamma_2 = \{ (-1, 1)^\top \}.
$$

are bases for the eigenspaces $\mathfrak{E}_{\lambda_1}$ and $\mathfrak{E}_{\lambda_2}$, respectively. Therefore,

$$
\gamma = \gamma_1 \cup \gamma_2 = \{ (-2, 1)^\top, (-1, 1)^\top \}
$$

is an ordered basis for $\mathbb{R}^2$ consisting of eigenvectors of $\mathbb{R}^2$. Let

$$
Q = \begin{bmatrix}
-2 & -1 \\
1 & 1
\end{bmatrix}
$$

be the matrix whose columns are the vectors in $\gamma$. Then, by the [corollary](./linear_algebra2#theorem-2-2-3) to Theorem 2.23,
$$
D = Q^{-1} A Q = \begin{bmatrix}
1 & 0 \\
0 & 2
\end{bmatrix}.
$$

To compute $A^n$ for any positive integer $n$,
$$
\begin{aligned}
  A^n &= (Q D Q^{-1})^n = (Q D Q^{-1})(Q D Q^{-1})\cdots(Q D Q^{-1}) \\
  &= Q D^n Q^{-1} \\
  &= Q
  \begin{bmatrix}
   1^n & 0\\
   0 & 2^n
  \end{bmatrix}
  Q^{-1} \\
  &= \begin{bmatrix}
   -2 & -1 \\
   1 & 1
  \end{bmatrix}
  \begin{bmatrix}
   1 & 0 \\
   0 & 2^n
  \end{bmatrix}
  \begin{bmatrix}
   -1 & -1 \\
   1 & 2
  \end{bmatrix} = 
  \begin{bmatrix}
  2-2^n & 2-2^{n+1} \\
  -1+2^n & -1+2^{n+1}
  \end{bmatrix}. 
\end{aligned}
$$

### Systems of Differential Equations
#### Exercise 5.2.8

Consider the system of differential equations
$$
\begin{cases}
x_1' = 3x_1 + x_2 + x_3 \\
x_2' = 2x_1 + 4x_2 + 2x_3 \\
x_3' = -x_1 - x_2 + x_3,
\end{cases}
$$

where each $x_i = x_i(t)$ is a differentiable real-valued function of the real value $t$. Clearly, this system has a solution, namel, the solution in which each $x_i(t)$ is the zero function. We determine all of the solutions to this system.

Let $x : \mathbb{R} \to \mathbb{R}^3$ be
$$
\boldsymbol{x}(t) = \begin{bmatrix} x_1(t) \\ x_2(t) \\ x_3(t) \end{bmatrix},
$$

and $\boldsymbol{x}'(t)$ is the **derivative** of $\boldsymbol{x}$.

Let
$$
A = \begin{bmatrix}
3 & 1 & 1 \\
2 & 4 & 2 \\
-1 & -1 & 1
\end{bmatrix}.
$$

be the coefficient omatrix of the given system, so that we can rewrite the system as matrix equation $\boldsymbol{x}' = A \boldsymbol{x}$.

It can be verified that for
$$
Q = \begin{bmatrix}
-1 & 0 & -1 \\
0 & -1 & -2 \\
1 & 1 & 1
\end{bmatrix}
\quad \text{and} \quad
D = \begin{bmatrix}
2 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 4
\end{bmatrix},
$$

we have $Q^{-1} A Q = D$. Substitute $A = Q D Q^{-1}$ into $\boldsymbol{x}' = A \boldsymbol{x}$ to obtain
$$
\boldsymbol{x}' = Q D Q^{-1} \boldsymbol{x},
$$

or equivalently,
$$
Q^{-1} \boldsymbol{x}' = D Q^{-1} \boldsymbol{x}.
$$

Define $\boldsymbol{y}(t) = Q^{-1} \boldsymbol{x}(t)$ yielding $\boldsymbol{y}' = Q^{-1} \boldsymbol{x}'$. Hence,
$$
\boldsymbol{y}' = D \boldsymbol{y},
$$

which is a system of **decoupled equations**
$$
\begin{cases}
y_1' = 2 y_1 \\
y_2' = 2 y_2 \\
y_3' = 4 y_3.
\end{cases}
$$

Solutions for each $y_i$ are
$$
y_1(t) = c_1 e^{2t}, \quad y_2(t) = c_2 e^{2t}, \quad y_3(t) = c_3 e^{4t},
$$

with arbitrary constants $c_1, c_2, c_3$.

Back-substituting,
$$
\begin{aligned}
  &\boldsymbol{x}(t) = Q \boldsymbol{y}(t) = 
  \begin{bmatrix}
    -1 & 0 & -1 \\
    0 & -1 & -2 \\
    1 & 1 & 1
  \end{bmatrix}
  \begin{bmatrix}
     c_1e^{2t}\\
     c_2e^{2t}\\
     c_3e^{4t}
  \end{bmatrix} \\
  =& 
  \begin{bmatrix}
   c_1e^{2t} + c_3e^{4t}\\
   -c_2e^{2t} - c_3e^{4t}\\
   c_1e^{2t}+c_2e^{2t}+c_3e^{4t}
  \end{bmatrix}. 
\end{aligned}
$$

Thus the general solution is
$$
\begin{aligned}
   \boldsymbol{x}(t) &= e^{2t} z_1 + e^{4t} z_2 \\
   &= e^{2t}\left[c_1
   \begin{bmatrix}
      -1\\
      0\\
      1
   \end{bmatrix} + c_2
   \begin{bmatrix}
      0\\
      -1\\
      1
   \end{bmatrix}
   \right] = e^{4t}\left[c_3
   \begin{bmatrix}
      -1\\
      -2\\
      1
   \end{bmatrix}
   \right].
\end{aligned}
$$

where $z_1 \in \mathsf{E}_{\lambda_1}$ and $z_2 \in \mathsf{E}_{\lambda_2}$, with $\lambda_1 = 2$ and $\lambda_2 = 4$.

This concludes the main part of the example.

Here is more generalized conclusion.

### Application for ODE

Let $n\times n$ matrix $A = (a_{ij})$ be the coefficient matrix of a system of differential equations
$$
x_i' = \sum_{j=1}^n a_{ij} x_j, \quad i = 1, \dots, n.
$$

Suppose $A$ is diagonalizable and the distinct eigenvalues of $A$ are $\lambda_1, \lambda_2, \dots, \lambda_k$.

Prove that a differentiable function $x : \mathbb{R} \to \mathbb{R}^n$ is a solution to the system if and only if
$$
x(t) = e^{\lambda_1 t} z_1 + e^{\lambda_2 t} z_2 + \cdots + e^{\lambda_k t} z_k,
$$

where $z_i \in \mathsf{E}_{\lambda_i}$ for $i = 1, \dots, k$. Use this result to prove that the set of solutions form an $n$-dimensional real vector space.

Following the step of the previous exercise, we may pick a matrix $Q$ whose column vectors consist of eigenvectors and $Q$ is invertible. Let $D$ be the diagonal matrix $Q^{-1} A Q$. And we also know that finally we'll have the solution $x=Q u$ for some vector $u$ whose $i$-th entry is $c_i e^\lambda$ if the $i$-th column of $Q$ is an eigenvector corresponding to $\lambda$. By denoting $\bar{D}$ to be the diagonal matrix with $\bar{D}_{i i}=e^{D_{i i}}$, we may write $x=Q \bar{D} y$. where the $i$-th entry of $y$ is $c_i$. So the solution must be of the form described in the exercise.

For the second statement, we should know first that the set
$$
\left\{e^{\lambda_1 t}, e^{\lambda_2 t}, \ldots e^{\lambda_k t}\right\}
$$

are linearly independent in the space of real functions. Since $Q$ invertible, we know that the solution set
$$
\left\{Q \bar{D} y: y \in \mathbb{R}^n\right\}
$$

is an $n$-dimensional real vector space.
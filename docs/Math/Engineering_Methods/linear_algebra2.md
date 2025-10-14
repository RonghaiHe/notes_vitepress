

# Functions and Linear Transformations and Matrices
## Addendic B: Functions
::: warning function
If $A$ and $B$ are sets, then a **function** $f$ from $A$ to $B$, written $f: A\to B$, is a rule that associates to each element $x$ in $A$ a unique element denoted $f(x)$ in $B$. The element $f(x)$ is called the **image** of $x$ (under $f$), and $x$ is called a **preimage** of $f(x)$ (under $f$). 

If $f: A\to B$, then $A$ is called the **domain** of $f$, $B$ is called the **codomain** of $f$, and the set $\{f(x): x \in A\}$ is called the **range** of f. Note that the range of $f$ is a subset of $B$. If $S\subseteq A$, we denote by $f(S)$ the set $\{f(x): x \in S\}$ of all images of elements of $S$. Likewise, if $T\subseteq B$, we denote by $f^{-1}(T)$ the set $\{x \in A: f(x)\in T\}$ of all preimages of elements in $T$. 

Finally, two functions $f: A\to B$ and $g: A\to B$ are **equal**, written $f = g$, if $f(x) = g(x)$ for all $x\in A$.
:::

#### Example B.1
Suppose that $A=[-10,10]$. Let $f: A\to R$ be the functio that assignss to each element $x$ in $A$ the element $x^2+1$ in $R$; that is, $f$ is defined by $f(x)=x^2+1$.

Then $A$ is the domain of $f$, $R$ is the codmain of $f$, and $[1,101]$ is the range of $f$. Since $f(2)=5$, the image of $2$ is $5$, and $2$ is a preimage of $5$. Notice that $-2$ is another preimage of $5$. Moreover, if $S=[1,2]$ and $T=[82,101]$, then $f(S)=[2,5]$ and $f^{-1}(T)=[-10,-9]\cup [9,10]$.

### one-to-one, onto

As example 1 shows, the preimage of an element in the range **need not be unique**. Functions s.t. each element of the range has **a unique preimage** are called **one-to-one** (injective); that is $f:A\to B$ is one-to-one if $f(x)=f(y)$ implies $x=y$ or, equivalently, if $x\neq y$ implies $f(x)\neq f(y)$.

If $f:A\to B$ is a function with range $B$, that is, if $f(A)=B$, then $f$ is called **onto** (surjective).So $f$ is onto iff the range of $f$ equals the codomain of $f$. [core]

one-to-one + onto = bijective

Let $A,B,C$ be sets and $f:A\to B$ and $g:B\to C$ be functios. By following $f$ with $g$, we obtain a function $g\circ f: A\to C$ called the **composite** of $g$ and $f$. Thus $(g\circ f)(x) = g(f(x)), \forall x\in A$. 

- For example, let $A=B=C=R, f(x)=\sin x$, and $g(x)=x^2+3$. Then $(g\circ f)(x)=(g(f(x))) = \sin^2 x + 3$, whereas $(f\circ g)(x) = f(g(x)) = f(g(x)) = \sin(x^2+3)$. Hence, $g\circ f\neq f\circ g$. 
- Functionalcomposition is associative, i.e. if $h:C\to D$ is another function, then $h\circ(g\circ f) = (h\circ g)\circ f$.

A function $f:A\to B$ is said to e **invertible** if there exists a function $g:B\to A$ s.t. $(f\circ g)(y)=y, \,\forall y\in B$ and $(g\circ f)(x) = x, \,\forall x\in A$. If such a function $g$ exists, then it's unique and is called the **inverse** of $f$. We denote the inverse of $f$ (when it exists) by $f^{-1}$. It can be shown that $f$ is invertible iff $f$ is **both one-to-one and onto**.

The following facts about invertible functions are easily proved:
1. If $f:A\to B$ is invertible, then $f^{-1}$ is invertible, and $(f^{-1})^{-1} = f$.
2. If $f:A\to B$ and $g:B\to C$ ar invertible, then $g\circ f$ is invertible, and $(g\circ f)^{-1} = f^{-1}\circ g^{-1}$.

## 2.1 Linear Transformations, Null Spaces, and Ranges
### Linear Transformation
Now it's natural to consider those functions defined on vector spaces that in some sense "preserve" the structure.

::: warning Definition: linear transformation
Let $\mathsf{V,W}$ be vector spaces (over $F$). We call a function $\mathsf{T}:\mathsf{V}\to\mathsf{W}$ a **linear transformation** from $\mathsf{V}$ to $\mathsf{W}$ if, $\forall x,y\in \mathsf{V}$ and $c\in F$, we have

- $\mathsf{T}(x+y)=\mathsf{T}(x) + \mathsf{T}(y)$ (additivity)
- $\mathsf{T}(cx) = c\mathsf{T}(x)$ (scaling)
:::

Often simply all $\mathsf{T}$ linear. Following are properties of a function: $\mathsf{T}:\mathsf{V}\to\mathsf{W}$:

::: tip Properties
1. If $\mathsf{T}$ is linear, then $\mathsf{T}(0)=0$;
2. $\mathsf{T}$ is linear iff $\mathsf{T}(cx+y)=c\mathsf{T}(x)+\mathsf{T}(y), \forall x,y\in\mathsf{V}$ and $c\in F$; (Generally used to prove that a given transformation is linear)[core]
3. If $\mathsf{T}$ is linear, then $\mathsf{T}(x-y)=\mathsf{T}(x) - \mathsf{T}(y), \forall x,y\in \mathsf{V}$;
4. $\mathsf{T}$ is linear iff for $x_1,x_2,\cdots,x_n\in\mathsf{V}$ and $a_1,a_2,\cdots,a_n\in F$, we have
  $$
    \mathsf{T}\left(\sum_{i=1}^n a_ix_i\right) = \sum_{i=1}^na_i \mathsf{T}(x_i).
  $$
:::

#### Example 1
Define
$$
  \mathsf{T}: \mathbb{R}^2 \rightarrow \mathbb{R}^2 \text { by } \mathsf{T}\left(a_1, a_2\right)=\left(2 a_1+a_2, a_1\right) .
$$

To show that $\mathsf{T}$ is linear, let $c \in R$ and $x, y \in \mathbb{R}^2$, where $x=\left(b_1, b_2\right)$ and $y=\left(d_1, d_2\right)$. Since

$$
  c x+y=\left(c b_1+d_1, c b_2+d_2\right)
$$

we have

$$
  \mathsf{T}(c x+y)=\left(2\left(c b_1+d_1\right)+c b_2+d_2, c b_1+d_1\right) .
$$

Also
$$
   \begin{aligned}
      c \top(x)+\top(y) & =c\left(2 b_1+b_2, b_1\right)+\left(2 d_1+d_2, d_1\right) \\
      & =\left(2 c b_1+c b_2+2 d_1+d_2, c b_1+d_1\right) \\
      & =\left(2\left(c b_1+d_1\right)+c b_2+d_2, c b_1+d_1\right) .
   \end{aligned}
$$

So $\mathsf{T}$ is linear.

#### Example 2: rotation
For any angle $\theta$, define $\mathsf{T}_\theta: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ by the rule: $\mathsf{T}_\theta\left(a_1, a_2\right)$ is the vector obtained by rotating $\left(a_1, a_2\right)$ counterclockwise by $\theta$ if $\left(a_1, a_2\right) \neq(0,0)$, and $\mathsf{T}_\theta(0,0)=(0,0)$. 

Then $\mathsf{T}_\theta: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ is a linear transformation that is called the **rotation** by $\theta$.

We determine an explicit formula for $\mathsf{T}_\theta$. Fix a nonzero vector $\left(a_1, a_2\right) \in \mathbb{R}^2$. Let $\alpha$ be the angle that $\left(a_1, a_2\right)$ makes with the positive $x$-axis, and let $r=\sqrt{a_1^2+a_2^2}$. Then $a_1=r \cos \alpha$ and $a_2=r \sin \alpha$. Also, $\mathsf{T}_\theta\left(a_1, a_2\right)$ has length $r$ and makes an angle $\alpha+\theta$ with the positive $x$-axis. It follows that

$$
   \begin{aligned}
      \mathsf{T}_\theta\left(a_1, a_2\right) & =(r \cos (\alpha+\theta), r \sin (\alpha+\theta)) \\
      & =(r \cos \alpha \cos \theta-r \sin \alpha \sin \theta, r \cos \alpha \sin \theta+r \sin \alpha \cos \theta) \\
      & =\left(a_1 \cos \theta-a_2 \sin \theta, a_1 \sin \theta+a_2 \cos \theta\right)
   \end{aligned}
$$

Finally, observe that this same formula is valid for $\left(a_1, a_2\right)=(0,0)$.
It is now easy to show, as in Example 1, that $\mathsf{T}_\theta$ is linear.

#### Example 3&4: Reflection
Define $\mathsf{T}:\mathbb{R}^2\to\mathbb{R}^2$ by $\mathsf{T}(a_1,a_2)=(a_1,-a_2)$. $\mathsf{T}$ is called the **reflection about the x-axis**

Define $\mathsf{T}:\mathbb{R}^2\to\mathbb{R}^2$ by $\mathsf{T}(a_1,a_2)=(-a_1,a_2)$. $\mathsf{T}$ is called the **reflection about the y-axis**

#### Example 5: Polynominal
Define $\mathsf{T}:\mathsf{P}_n(\mathbb{R})\to\mathsf{P}_{n-1}(\mathbb{R})$ by $\mathsf{T}(f(x)) = f'(x)$, where $f'(x)$ denotes the derivative of $f(x)$. To show that $\mathsf{T}$ is linear, let $g(x),h(x)\in\mathsf{P}_n(\mathbb{R})$ and $a\in\mathbb{R}$. Now

$$
  \mathsf{T}(ag(x)+h(x)) = (ag(x) + h(x))' = ag'(x) + h'(x) = a\mathsf{T}(g(x)) = \mathsf{T}(h(x)).
$$

So by property 2 above, $\mathsf{T}$ is linear.

#### Example 6: integration
Let $\mathsf{V}=\mathsf{C}(\mathbb{R})$, the vector space of continous real-valued functions on $\mathbb{R}$. Let $a,b\in\mathbb{R},a<b$. Define $\mathsf{T}:\mathsf{V}\to\mathbb{R}$ by

$$
  \mathsf{T}(f) = \int_a^b f(t)\mathrm{d}t.
$$

for all $f\in\mathsf{V}$. Then $\mathsf{T}$ is a linear transformation because the definte integral of a linear combination of functions is the same as the linear combination f he definite integrals of the fnctions.

### Special transformations
For vector spaces $\mathsf{V,W}$ (over $F$), we define the **identity transformation** $\mathsf{I}_{\mathsf{V}}:\mathsf{V}\to\mathsf{V}$ by $\mathsf{I}_{\mathsf{V}}(x)=x,\forall x\in\mathsf{V}$ and the **zero transformation** 
$T_0: \mathsf{V}\to \mathsf{W}$ by $\mathsf{T}_0(x) = 0$ for all $x \in \mathsf{V}$. It is clear that both of these transformations are linear. We often write $\mathsf{I}$ instead of $\mathsf{I}_{\mathsf{V}}$.

We now turn our attention to two very important sets associated with linear transformations: the *range* and *null space*. The determination of these sets allows us to examine more closely the intrinsic properties of a linear transformation.

::: warning Definitions: null space/kernel; range / image [core]
Let $\mathsf{V,W}$ be vector spaces, and let $\mathsf{T}:\mathsf{V}\to\mathsf{W}$ be linear. We define the **null space** (or **kernel**) $\mathsf{N(T)}$ of $\mathsf{T}$ to be the set of all vectors $x$ in $\mathsf{V}$ s.t. $\mathsf{T}(x) = 0$; i.e., $\mathsf{N(T)} = \{x\in\mathsf{V}: \mathsf{T}(x) = 0\}$.

We define the **range** (or **image**) $\mathsf{R(T)}$ of $\mathsf{T}$ to be the subset of $\mathsf{W}$ consisting of all images (under $\mathsf{T}$) of vectors in $\mathsf{V}$; i.e., $\mathsf{R(T)} = \{\mathsf{T}(x): x \in \mathsf{V}\}$.
:::

#### Example 7: identity and zero transformation
Let $\mathsf{V,W}$ be vector spaces, and let $\mathsf{I}:\mathsf{V}\to\mathsf{V}$ and $\mathsf{T}_0:\mathsf{V}\to\mathsf{W}$ be the identity and zero transformation, respectively. Then $\mathsf{N(I)} = \{0\}, \mathsf{R(I) = V}, \mathsf{N}(\mathsf{T}_0) = \mathsf{V}, \mathsf{R}(\mathsf{T}_0) = \{0\}$

#### Example 8
Let $\mathsf{T}: \mathbb{R}^3 \to \mathbb{R}^2$ be the linear transformation defined by

$$
  \mathsf{T}(a_1,a_2,a_3) = (a_1-a_2,2a_3).
$$

It's easy to verify that:

$$
  \mathsf{N(T)} = \{(a,a,0): a\in\mathbb{R}\}, \text{ and } \mathsf{R(T)} = \mathbb{R}^2.
$$

::: danger Theorem 2.1
Let $\mathsf{V,W}$ be vector spaces and $\mathsf{T:V}\to\mathsf{W}$ be linear. Then $\mathsf{N(T)}$ and $\mathsf{R(T)}$ are **subspaces** of $\mathsf{V,W}$, respectively.
:::

::: danger Theorem 2.2
Let $\mathsf{V,W}$ be vector spaces and $\mathsf{T:V}\to\mathsf{W}$ be linear. If $\beta=\{v_1,v_2\cdots,v_n\}$ is a basis for $\mathsf{V}$, then

$$
  \mathsf{R(T)} = \operatorname{span}(\mathsf{T}(\beta)) = \operatorname{span}(\{\mathsf{T}(v_1), \mathsf{T}(v_2), \cdots, \mathsf{T}(v_n)\}).
$$

:::

Recall Theorem 1.5 in [§1](./linear_algebra1#1-4-linear-combination-and-systems-of-linear-equations) that the relation between subspace and span.

#### Example 9
Define the linear transformation $\mathsf{T}: \mathsf{P}_2(\mathbb{R}) \to \mathsf{M}_{2 \times 2}(\mathbb{R})$ by

$$ 
  \mathsf{T}(f(x)) =
    \begin{pmatrix} 
      f(1) - f(2) & 0 \\ 
      0 & f(0) 
    \end{pmatrix}
$$

Since $\beta = \{1, x, x^2\}$ is a basis for $\mathsf{P}_2(\mathbb{R})$, we have

$$
  \begin{aligned}
     \mathsf{R}(\mathsf{T}) &= \operatorname{span}(\mathsf{T}(\beta)) = \operatorname{span}(\{\mathsf{T}(1), \mathsf{T}(x), \mathsf{T}(x^2)\}) \\
     &= \operatorname{span}\left(\left\{
      \begin{pmatrix}
        0 & 0 \\
        0 & 1
      \end{pmatrix}, 
      \begin{pmatrix}
        -1 & 0 \\
        0 & 0
      \end{pmatrix}, 
      \begin{pmatrix}
        -3 & 0 \\
        0 & 0
      \end{pmatrix}
     \right\}\right) \\
     &= \operatorname{span}\left(\left\{
      \begin{pmatrix}
        0 & 0 \\
        0 & 1
      \end{pmatrix}, 
      \begin{pmatrix}
        -1 & 0 \\
        0 & 0
      \end{pmatrix}
     \right\}\right)
  \end{aligned}
$$

Thus, we have found a basis for $\mathsf{R(T)}$, so $\dim(\mathsf{R(T)}) = 2$.

#### Definition and Theorem

As in [§1.6](./linear_algebra1#1-6-bases-and-dimension "bases and dimension"), we measure the "size" of a subspace by its dimension. The null space and range are so important that we attach special names to their respective dimensions.

::: warning Definition: nulity; rank [core]
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces, and let $T: \mathsf{V} \to \mathsf{W}$ be linear. If $\mathsf{N(T)}$ and $\mathsf{R(T)}$ are **finite-dimensional**, then we define:

- **Nullity** of $\mathsf{T}$, denoted $\operatorname{nullity}(\mathsf{T})$, as the **dimension** of $\mathsf{N(T)}$.
- **Rank** of $\mathsf{T}$, denoted $\operatorname{rank}(\mathsf{T})$, as the **dimension** of $\mathsf{R(T)}$.
:::

::: danger Theorem 2.3: Dimension Theorem [core]
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces, and $\mathsf{T}: \mathsf{V} \to \mathsf{W}$ linear. If $\mathsf{V}$ is finite-dimensional, then

$$ \operatorname{nullity}(\mathsf{T}) + \operatorname{rank}(\mathsf{T}) = \dim(\mathsf{V}) $$
:::

::: danger Theorem 2.4: Null Space and One-to-one [core]
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces, and $\mathsf{T}: \mathsf{V} \to \mathsf{W}$ linear. Then $\mathsf{T}$ is **one-to-one iff**

$$ \mathsf{N(T)} = \{0\} $$
:::

::: danger Theorem 2.5 [core]
Let $\mathsf{V}$ and $\mathsf{W}$ be finite-dimensional vector spaces of **equal** and finite dimension, and $\mathsf{T}: \mathsf{V} \to \mathsf{W}$ linear. The following are equivalent:

- $\mathsf{T}$ is one-to-one.
- $\mathsf{T}$ is onto.
- $\operatorname{rank}(\mathsf{T}) = \dim(\mathsf{V})$.
:::

#### Example 10
Let $\mathsf{T}: \mathsf{P}_2(\mathbb{R}) \to \mathsf{P}_3(\mathbb{R})$ be the linear transformation defined by

$$ \mathsf{T}(f(x)) = 2 f'(x) + \int_0^x 3 f(t) \mathrm{d}t $$

Now

$$
  \begin{aligned}
    \mathsf{R(T)} &= \operatorname{span}(\{\mathsf{T}(1), \mathsf{T}(x), \mathsf{T}(x^2)\}) \\
    &= \operatorname{span}\left(\left\{3x, 2+\frac{3}{2}x^2, 4x+x^3\right\}\right).
  \end{aligned}
$$

- Since $\operatorname{span}\left(\left\{3x, 2+\frac{3}{2}x^2, 4x+x^3\right\}\right)$ is linear independent,  The rank is $3$;
- Since $\dim(\mathsf{P}_3(\mathbb{R}))=4,\mathsf{T}$ is not onto;
- From the dimension theorem, $\operatorname{nullity}(\mathsf{T}) + 3=3$, so nullity is $0$, and therefore $\mathsf{N(T)}=\{0\}$.

So $\mathsf{T}$ is one-to-one but not onto.

#### Example 11
Let $\mathsf{T}: \mathsf{F}^2 \to \mathsf{F}^2$ be the linear transformation defined by

$$ \mathsf{T}(a_1, a_2) = (a_1 + a_2, a_1) $$

It's easy to see that $\mathsf{N(T)}=\{0\}$; so $\mathsf{T}$ is one-to-one. And Theorem 2.5 tells us that $\mathsf{T}$ must be onto.

#### Example 12
Let $\mathsf{T}: \mathsf{P}_2(\mathbb{R}) \to \mathbb{R}^3$ be the linear transformation defined by

$$ \mathsf{T}(a_0 + a_1 x + a_2 x^2) = (a_0, a_1, a_2) $$

Clearly $\mathsf{T}$ is linear and one-to-one. Let $S=\{1-x+3x^2, x+x^2, 1-2x^2\}$. Then $S$ is linearly independent in $\mathsf{P}_2(\mathbb{R})$ because

$$
  \mathsf{T}(S) = \{(2,-1,3),(0,1,1),(1,0,-2)\}
$$

is linearly independent in $\mathbb{R}^3$.

#### Theorem 2.6
::: danger Theorem 2.6
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces over $F$, and suppose that $\{v_1,v_2,\cdots,v_n\}$ is a basis for $\mathsf{V}$. For $w_1,w_2,\cdots,w_n$ in $\mathsf{W}$, there exists **exactly one linear transformation**: $\mathsf{T:V}\to\mathsf{W}$ s.t. $\mathsf{T}(v_i)=w_i$,for $i=1,2,\cdots,n$.
:::

::: tip Corollary
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces, and suppose that $\mathsf{V}$ has a finite basis $\{v_1,v_2,\cdots,v_n\}$. If $\mathsf{U,T:V}\to\mathsf{W}$ are linear and $\mathsf{U}(v_i)=\mathsf{T}(v_i)$ for $i=1,2,\cdots,n$, then $\mathsf{U=T}$.
:::

#### Example 13
Let $\mathsf{T}:\mathbb{R}^2\to \mathbb{R}^2$ be the linear transformation defined by

$$
  \mathsf{T}(a_1,a_2) = (2a_2-a_1, 3a_1).
$$

and suppose that $\mathsf{U}:\mathbb{R}^2\to \mathbb{R}^2$ is linear. If we know that $\mathsf{U}(1,2)=(3,3)$ and $\mathsf{U}(1,1)=(1,3)$, then $\mathsf{U=T}$. This follows from the corollary and from the fact that $\{(1,2),(1,1)\}$ is the basis for $\mathbb{R}^2$.

## 2.2 The Matrix Representation of a Linear Transformations
### coordinate vector
::: warning Definition: ordered basis
Let $\mathsf{V}$ be a finite-dimensional vector space. An **ordered basis** for $\mathsf{V}$ is a basis for $\mathsf{V}$ endowed with a specific order; that is, an ordered basis for $\mathsf{V}$ is a finite sequence of linearly independent vectors in $\mathsf{V}$ that generates $\mathsf{V}$.
:::

#### Example 2.2.1

In $\mathsf{F}^3, \beta=\{e_1,e_2,e_3\}$ can be considered as ordered basis. Also $\gamma=\{e_2,e_1,e_3\}$ is an ordered basis, but $\beta\neq\gamma$ as ordered bases

For the vector space $\mathsf{F}^n$, we call $\{e_1,e_2,\cdots,e_n\}$ the **standard ordered basis** for $\mathsf{F}^n$. Similarly, for the vector space $\mathsf{P}_n(F)$, we call $\{1,x,\cdots,x^n\}$ the **standard ordered basis** for $\mathsf{P}_n(F)$.

::: warning Definition: coordinate vector [core]
Let $\beta = \{v_1, v_2, ···, v_n\}$ be an ordered basis for a finite-dimensional vector space $\mathsf{V}$. For $x\in\mathsf{V}$, let $a_1,a_2,\cdots,a_n$ be the unique scalars s.t.

$$
  x = \sum_{i=1}^na_iu_i
$$

We define the **coordinate vecotr** of $x$ relative to $\beta$, denoted $[x]_\beta$. by

$$
  [x]_\beta = (a_1,a_2,\cdots,a_n)^\top.
$$
:::

#### Example 2.2.2: coordinate vector for polynominal
Let $\mathsf{V}=\mathsf{P}_2(\mathbb{R})$, an let $\beta=\{1,x,x^2\}$ be the standard ordered basis for $\mathsf{V}$. If $f(x)=4+6x-7x^2$, then

$$
  [f]_\beta = (4,6,-7)^\top.
$$

### matrix representation
::: warning Definition: matrix representation [core]
Using the notation above, we call the $m\times n$ matrix $A$ defined by $A_{ij}=a_{ij}$ the matrix representation of $\mathsf{T}$ in the ordered bases $\beta$ and $\gamma$ and write $A=[\mathsf{T}]_\beta^\gamma$ . 

If $\mathsf{V=W}$ and $\beta=\gamma$, then we write $A=[\mathsf
T]_\beta$.
:::

Notice that the jth column of $A$ is simply $[\mathsf{T}(v_j)]_\gamma$. Also observe that if $\mathsf{U:V}\to\mathsf{W}$ is a linear transformation s.t. $[\mathsf{U}]_\beta^\gamma = [\mathsf{T}]_\beta^\gamma$, then $\mathsf{U=T}$ by the corollary to [theorem 2.6](#theorem-2-6).

#### Example 2.2.3: matrix representation for tuples

Let $\mathsf{T}: \mathbb{R}^2 \to \mathbb{R}^3$ be defined by

$$ \mathsf{T}(a_1, a_2) = (a_1 + 3 a_2, 0, 2 a_1 - 4 a_2) $$

Let $\beta,\gamma$  be the standard ordered bases for $\mathbb{R}^2$ and $\mathbb{R}^3$, respectively. Now

$$
  \mathsf{T}(1,0) = (1,0,2) = 1e_1+0e_2+2e_3.
$$

and

$$
  \mathsf{T}(0,1) = (3,0,-4) = 3e_1+0e_2+-4e_3.
$$

Hence

$$
[\mathsf{T}]_\beta^\gamma = \begin{pmatrix} 1 & 3 \\ 0 & 0 \\ 2 & -4 \end{pmatrix}
$$

If we let $\gamma'=\{e_3,e_2,e_1\}$, then

$$
  [\mathsf{T}]_\beta^{\gamma'} = 
  \begin{pmatrix} 2 & -4 \\ 0 & 0 \\ 1 & 3 \end{pmatrix}
$$

#### Example 2.2.4: matrix representation for polynominal
Let $\mathsf{T:P}_3(\mathbb{R})\to\mathsf{P}_2(\mathbb{R})$ be the linear transformation defined by $\mathsf{T}(f(x)) = f'(x)$.Let $\beta,\gamma$ be the standard ordered bases for $\mathsf{P}_3(\mathbb{R})$ and $\mathsf{P}_2(\mathbb{R})$, respectively. Then

$$
  \begin{aligned}
    \mathsf{T}(1) &= 0\cdot 1 + 0\cdot x + 0\cdot x^2 \\
    \mathsf{T}(x) &= 1\cdot 1 + 0\cdot x + 0\cdot x^2 \\
    \mathsf{T}(x^2) &= 0\cdot 1 + 2\cdot x + 0\cdot x^2 \\
    \mathsf{T}(x^3) &= 0\cdot 1 + 0\cdot x +3\cdot x^2
  \end{aligned}
$$

So

$$
  \left[\frac{\mathrm{d}}{\mathrm{d}x}\right] = [\mathsf{T}]_\beta^\gamma = 
  \begin{pmatrix}
    0 & 1 & 0 & 0 \\
    0 & 0 & 2 & 0 \\
    0 & 0 & 0 & 3
  \end{pmatrix}
$$

i.e.

$$
  \begin{gather*}
    f(x) = a+bx+cx^2+dx^3 \\
    \mathsf{T}(f(x)) = f'(x) = b+2cx+3dx^2 \\
    \begin{bmatrix}
      b \\
      2c \\
      3d \\
    \end{bmatrix} = 
    \begin{bmatrix}
    0 & 1 & 0 & 0 \\
    0 & 0 & 2 & 0 \\
    0 & 0 & 0 & 3
  \end{bmatrix}
  \begin{bmatrix}
      a \\
      b \\
      c \\
      d \\
    \end{bmatrix}
  \end{gather*}
$$

Note that when $\mathsf{T}(x^j)$ is written as a linear combination of the vectors of $\gamma$, its coefficients gives the entries of the jth column of $[\mathsf{T}]_\beta^\gamma$.

### operations on linear transformation

::: warning Definition
Let $\mathsf{T,U:V}\to\mathsf{W}$ be arbitary functions, where $\mathsf{V,W}$ are vector spaces over $F$, and let $a\in F$. We define:

- $\mathsf{T+U:V}\to\mathsf{W}$ by $\mathsf{(T+U)}(x) = \mathsf{T}(x) + \mathsf{U}(x)$ for all $x\in\mathsf{V}$;
- $a\mathsf{T:V}\to\mathsf{W}$ by $(a\mathsf{T})(x) = a\mathsf{T}(x)$ for all $x\in\mathsf{V}$;
:::

::: danger Theorem 2.7
Let $\mathsf{V,W}$ be vector spaces over a field $F$, and let $\mathsf{T,U:V}\to\mathsf{W}$ be linear.

- For all $a\in F, a\mathsf{T+U}$ is linear.
- Using the operations of addition andscalar multiplication in the precedingg definition, **the collection of all linear transformation** from $\mathsf{V}$ to $\mathsf{W}$ is a **vector space** over $F$.
:::

::: warning Definition
Let $\mathsf{V,W}$ be vector spaces over $F$. We denote the **vector space of all linear transformation** from $\mathsf{V}$ to $\mathsf{W}$ by $\mathcal{L}(\mathsf{V,W})$. In the case that $\mathsf{V=W}$, we write $\mathcal{L}(\mathsf{V})$ instead of $\mathcal{L}(\mathsf{V,W})$.
:::

::: danger Theorem 2.8
Let $\mathsf{V,W}$ be finite-dimensional vector spaces with ordered bases $\beta,\gamma$, respectively, and let $\mathsf{T,U:V\to W}$ be linear transformations. Then

- $[\mathsf{T+U}]_\beta^\gamma = [\mathsf{T}]_\beta^\gamma + [\mathsf{U}]_\beta^\gamma$
- $[a\mathsf{T}]_\beta^\gamma = a[\mathsf{T}]_\beta^\gamma$ for all scalars $a$.
:::

#### Example 2.2.5
Let $\mathsf{T}:\mathbb{R}^2\to\mathbb{R}^3$ and $\mathsf{U}:\mathbb{R}^2\to\mathbb{R}^3$ be the linear transformations respectively defined by

$$
  \begin{aligned}
    \mathsf{T}(a_1,a_2) &= (a_1+3a_2,0,2a_1-4a_2)\\
    \mathsf{U}(a_1,a_2) &= (a_1-a_2,2a_1,3a_1+2a_2)
  \end{aligned}
$$

Let $\beta,\gamma$ be the standard ordered bases of $\mathbb{R}^2\,\mathbb{R}^3$, respectively. Then

$$
  [\mathsf{T}]_\beta^\gamma = 
  \begin{pmatrix}
    1 & 3\\
    0 & 0\\
    2 & -4
  \end{pmatrix}
$$

(as completed in [Example 2.2.3](#example-2-2-3-matrix-representation-for-tuples)), and

$$
  [\mathsf{U}]_\beta^\gamma = 
  \begin{pmatrix}
    1 & -1\\
    2 & 0\\
    3 & 2
  \end{pmatrix}
$$

If we compute $\mathsf{T+U}$ usingthe proceding definitions, we obtain

$$
  (\mathsf{T+U})(a_1,a_2) = (2a_1+2a_2,2a_1,5a_1-2a_2).
$$

So

$$
  [\mathsf{T+U}]_\beta^\gamma = 
  \begin{pmatrix}
    2 & 2\\
    2 & 0\\
    5 & -2
  \end{pmatrix}
$$

which is simply $[\mathsf{T}]_\beta^\gamma + [\mathsf{U}]_\beta^\gamma$, illustrated Theorem 2.8

## 2.3 Composition of Linear Transformations and Matrix Multiplication
### matrix product
::: danger Theorem 2.9
Let $\mathsf{V,W,Z}$ be vector spaces over the same field $F$, and let $\mathsf{T: V \to W}$ and $\mathsf{U: W \to Z}$ be linear, then $\mathsf{U T : V \to Z}$ is linear.
:::

::: danger Theorem 2.10
Let $\mathsf{V}$ be a vector space. Let $\mathsf{T,U}_1,\mathsf{U}_2\in\mathcal{L}(\mathsf{V})$. Then

- $\mathsf{T}(\mathsf{U}_1 + \mathsf{U}_2) = \mathsf{TU}_1 + \mathsf{TU}_2$ and $(\mathsf{U}_1 + \mathsf{U}_2)\mathsf{T} = \mathsf{U}_1\mathsf{T} + \mathsf{U}_2\mathsf{T}$
- $\mathsf{T}(\mathsf{U}_1 \mathsf{U}_2) = (\mathsf{T}\mathsf{U}_1) \mathsf{U}_2$
- $\mathsf{TI=IT=T}$
- $a(\mathsf{U}_1 \mathsf{U}_2) = (a\mathsf{U}_1) \mathsf{U}_2 = \mathsf{U}_1 (a\mathsf{U}_2)$ for all scalars $a$.
:::

A more general result holds for linear transformations that have domains unequal to their codomains.

::: warning Definition: product
Let $\mathsf{T}: \mathsf{V} \rightarrow \mathsf{W}$ and $\mathsf{U}: \mathsf{W} \rightarrow \mathsf{Z}$ be linear transformations, and let $A=[\mathsf{U}]_\beta^\gamma$ and $B=[\mathsf{T}]_\alpha^\beta$, where $\alpha=\left\{v_1, v_2, \ldots, v_n\right\}, \beta=\left\{w_1, w_2, \ldots, w_m\right\}$, and $\gamma= \left\{z_1, z_2, \ldots, z_p\right\}$ are ordered bases for $\mathsf{V}, \mathsf{W}$, and $\mathsf{Z}$ , respectively. We would like to define the **product** $A B$ of two matrices so that $A B=[\mathsf{UT}]_\alpha^\gamma$. Consider the matrix $[\mathsf{UT}]_\alpha^\gamma$. For $1 \leq j \leq n$, we have

$$
\begin{aligned}
(\mathsf{UT})\left(v_j\right) & =\mathsf{U}\left(\mathsf{~T}\left(v_j\right)\right)=\mathsf{U}\left(\sum_{k=1}^m B_{k j} w_k\right)=\sum_{k=1}^m B_{k j} \mathsf{U}\left(w_k\right) \\
& =\sum_{k=1}^m B_{k j}\left(\sum_{i=1}^p A_{i k} z_i\right)=\sum_{i=1}^p\left(\sum_{k=1}^m A_{i k} B_{k j}\right) z_i \\
& =\sum_{i=1}^p C_{i j} z_i
\end{aligned}
$$

where

$$
C_{i j}=\sum_{k=1}^m A_{i k} B_{k j} .
$$
:::

This computation motivates the following definition of matrix multiplication.

why matrix multiplication is defined this way - it perfectly describes the **composition of basis transformations**. It's not an arbitrary definition, but rather a natural consequence of how basis transformations compose.

::: warning Definition: product of Matrix
Let $A$ be an  $m \times n$ matrix  and $B$ be an $n \times p$ matrix. We define the **product** of $A$ and $B$, denoted $AB$, to be the $m\times p$ matrix s.t.

$$ (AB)_{ij} = \sum_{k=1}^n A_{ik} B_{kj} \quad \text{for }1\le i\le m, \quad 1\le j\le p$$
:::

#### Example 2.3.1
We have 

$$
  \begin{pmatrix}
    1 & 2 & 1\\
    0 & 4 & -1
  \end{pmatrix}
  \begin{pmatrix}
    4\\
    2\\
    5
  \end{pmatrix} = 
  \begin{pmatrix}
    1\cdot 4+2\cdot 2 + 1\cdot 5\\
    0\cdot 4+4\cdot 2 + (-1)\cdot 5
  \end{pmatrix} = 
  \begin{pmatrix}
    13\\
    3
  \end{pmatrix}
$$

Notice again the symbolic relationship $(2\times 3)\cdot(3\times 1)=2\times 1$.

As in the case with composition of functions, we have the matrix multiplication is **not commutative**. It need not be true that $AB=BA$.

#### transpose
The **transpose** $A^t$ of an $m \times n$ matrix $A$ is the $n \times m$ matrix obtained from $A$ by interchanging the rows with the columns; that is, $\left(A^t\right)_{i j}=A_{j i}$. For example,

$$
\left(\begin{array}{rrr}
1 & -2 & 3 \\
0 & 5 & -1
\end{array}\right)^t=\left(\begin{array}{rr}
1 & 0 \\
-2 & 5 \\
3 & -1
\end{array}\right) \quad \text { and } \quad\left(\begin{array}{ll}
1 & 2 \\
2 & 3
\end{array}\right)^t=\left(\begin{array}{ll}
1 & 2 \\
2 & 3
\end{array}\right)
$$

show that if $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix, then $(A B)^t=B^t A^t$. Since

$$
(A B)_{i j}^t=(A B)_{j i}=\sum_{k=1}^n A_{j k} B_{k i}
$$

and

$$
\left(B^t A^t\right)_{i j}=\sum_{k=1}^n\left(B^t\right)_{i k}\left(A^t\right)_{k j}=\sum_{k=1}^n B_{k i} A_{j k},
$$

Therefore the transpose of a product is the product of the transposes in the opposite order.

Immediate consequence of our definition of matrix multiplication:

::: danger Theorem 2.11 [core]
Let $\mathsf{V}, \mathsf{W}$, and $\mathsf{Z}$ be finite-dimensional vector spaces with ordered bases $\alpha, \beta$, and $\gamma$, respectively. Let $\mathsf{T}: \mathsf{V} \rightarrow \mathsf{W}$ and $\mathsf{U}: \mathsf{W} \rightarrow \mathsf{Z}$ be linear transformations. Then

$$
[\mathsf{UT}]_\alpha^\gamma=[\mathsf{U}]_\beta^\gamma[\mathsf{T}]_\alpha^\beta .
$$
:::

::: tip Corollary
Let $\mathsf{V}$ be a finite-dimensional vector space with an ordered basis $\beta$. Let $\mathsf{T,U}\in\mathcal{L}(\mathsf{V})$. The $[\mathsf{UT}]_\beta = [\mathsf{U}]_\beta [\mathsf{T}]_\beta$
:::

#### Example 2.3.2 [core]
Let $\mathsf{U}: \mathsf{P}_3(\mathbb{R}) \rightarrow \mathsf{P}_2(\mathbb{R})$ and $\mathsf{T}: \mathsf{P}_2(\mathbb{R}) \rightarrow \mathsf{P}_3(\mathbb{R})$ be the linear transformations respectively defined by

$$
\mathsf{U}(f(x))=f^{\prime}(x) \quad \text { and } \quad \mathsf{T}(f(x))=\int_0^x f(t) d t
$$

Let $\alpha$ and $\beta$ be the standard ordered bases of $\mathsf{P}_3(\mathbb{R})$ and $\mathsf{P}_2(\mathbb{R})$, respectively. From calculus, it follows that $\mathsf{UT}=I$, the identity transformation on $\mathsf{P}_2(\mathbb{R})$. To illustrate Theorem 2.11, observe that

$$
  \begin{aligned}
    [\mathsf{UT}]_\beta &=[\mathsf{U}]_\alpha^\beta[\mathsf{T}]_\beta^\alpha=\left(\begin{array}{cccc}
  0 & 1 & 0 & 0 \\
  0 & 0 & 2 & 0 \\
  0 & 0 & 0 & 3
  \end{array}\right)\left(\begin{array}{ccc}
  0 & 0 & 0 \\
  1 & 0 & 0 \\
  0 & \frac{1}{2} & 0 \\
  0 & 0 & \frac{1}{3}
  \end{array}\right)\\
  &=\left(\begin{array}{ccc}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{array}\right)=[\mathsf{I}]_\beta
  \end{aligned}
$$

The preceding $3 \times 3$ diagonal matrix is called an **identity matrix** and is defined next, along with a very useful notation, the **Kronecker delta**.

#### Definition and theorem
::: warning Definition: identity matrix
We define the **Kronecker delta** $\delta_{ij}$ by $\delta_{ij}=1$ if $i=j$ and $\delta_{ij}=0$ if $i\neq j$.then $n\times n$ **identity matrix** $I_n$ is defined by $(I_n)_{ij}=\delta_{ij}$.
:::

::: danger Theorem 2.12. 
Let $A$ be an $m \times n$ matrix, $B$ and $C$ be $n \times p$ matrices, and $D$ and $E$ be $q \times m$ matrices. Then

- $A(B+C)=A B+A C$ and $(D+E) A=D A+E A$.
- $a(A B)=(a A) B=A(a B)$ for any scalar $a$.
- $I_m A=A=A I_n$.
- If $\mathsf{V}$ is an $n$-dimensional vector space with an ordered basis $\beta$, then $[\mathsf{I_V}]_\beta=I_n$.
:::

::: tip Corollary. 
Let $A$ be an $m \times n$ matrix, $B_1, B_2, \ldots, B_k$ be $n \times p$ matrices, $C_1, C_2, \ldots, C_k$ be $q \times m$ matrices, and $a_1, a_2, \ldots, a_k$ be scalars. Then

$$
A\left(\sum_{i=1}^k a_i B_i\right)=\sum_{i=1}^k a_i A B_i
$$

and

$$
\left(\sum_{i=1}^k a_i C_i\right) A=\sum_{i=1}^k a_i C_i A
$$
:::

For an $n \times n$ matrix $A$, we define $A^1=A, A^2=A A, A^3=A^2 A$, and, in general, $A^k=A^{k-1} A$ for $k=2,3, \ldots$. We define $A^0=I_n$.

With this notation, we see that if

$$
A=\left(\begin{array}{ll}
0 & 0 \\
1 & 0
\end{array}\right)
$$

then $A^2=O$ (the zero matrix) even though $A \neq O$. Thus the cancellation property for multiplication in fields is not valid for matrices. To see why, assume that the cancellation law is valid. Then, from $A \cdot A=A^2=O=A \cdot O$, we would conclude that $A=O$, which is false.

::: danger Theorem 2.13
Let $A$ be an $m \times n$ matrix and $B$ be an $n \times p$ matrix. For each $j(1 \leq j \leq p)$ let $u_j$ and $v_j$ denote the $j$ th columns of $A B$ and $B$, respectively. Then

- $u_j=Av_j$
- $v_j=Be_j$, where $e_j$ is the jth standard vector over $\mathsf{F}^p$.
:::

::: danger Theorem 2.14 [core]
Let $\mathsf{V}$ and $\mathsf{W}$ be finite-dimensional vector spaces having ordered bases $\beta$ and $\gamma$, respectively, and let $\mathsf{T}: \mathsf{V} \rightarrow \mathsf{W}$ be linear. Then, for each $u \in \mathsf{~V}$, we have

$$
[\mathsf{T}(u)]_\gamma=[\mathsf{T}]_\beta^\gamma[u]_\beta .
$$
:::

#### Example 2.3.3
Let $\mathrm{T}: \mathrm{P}_3(\mathbb{R}) \rightarrow \mathrm{P}_2(\mathbb{R})$ be the linear transformation defined by $\mathrm{T}(f(x))= f^{\prime}(x)$, and let $\beta$ and $\gamma$ be the standard ordered bases for $\mathrm{P}_3(\mathbb{R})$ and $\mathrm{P}_2(\mathbb{R})$, respectively. If $A=[\mathrm{T}]_\beta^\gamma$, then, from [Example 2.2.4](#example-2-2-4-matrix-representation-for-polynominal), we have

$$
A=\left(\begin{array}{llll}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3
\end{array}\right)
$$

We illustrate Theorem 2.14 by verifying that $[\mathrm{T}(p(x))]_\gamma=[\mathrm{T}]_\beta^\gamma[p(x)]_\beta$, where $p(x) \in \mathrm{P}_3(\mathbb{R})$ is the polynomial $p(x)=2-4 x+x^2+3 x^3$. Let $q(x)=\mathrm{T}(p(x))$; then $q(x)=p^{\prime}(x)=-4+2 x+9 x^2$. Hence
$$
[\mathrm{T}(p(x))]_\gamma=[q(x)]_\gamma=\left(\begin{array}{r}
-4 \\
2 \\
9
\end{array}\right)
$$

but also

$$
  \begin{aligned}
    &[\mathrm{T}]_\beta^\gamma[p(x)]_\beta=A[p(x)]_\beta\\
    =&\left(\begin{array}{llll}
    0 & 1 & 0 & 0 \\
    0 & 0 & 2 & 0 \\
    0 & 0 & 0 & 3
    \end{array}\right)\left(\begin{array}{r}
    2 \\
    -4 \\
    1 \\
    3
    \end{array}\right)
    =\left(\begin{array}{r}
    -4 \\
    2 \\
    9
    \end{array}\right) .
  \end{aligned}
$$

#### left-multiplication transformation
::: warning Definition: left-multiplication transformation
Let $A$ be an $m \times n$ matrix with entries from a field $F$. We denote by $\mathsf{L}_a$ the mapping $\mathsf{L}_A: \mathsf{F}^n \to \mathsf{F}^m$ defined by $\mathsf{L}_A(x) = Ax$ (the matrix product of $A$ and $x$) for each column vector $x \in \mathsf{F}^n$. We call $\mathsf{L}_A$ a **left-multiplication transformation**.
:::

#### Example 2.3.4  
Let  
$$A =  
\begin{pmatrix}
1 & 2 & 1 \\
0 & 1 & 2 \\
\end{pmatrix}
$$  

Then $A \in \mathsf{M}_{2\times 3}(\mathbb{R})$ and $\mathsf{L}_A : \mathbb{R}^3 \to \mathbb{R}^2$. If  

$$
x = \begin{pmatrix} 1 \\ 3 \\ -1 \end{pmatrix}
$$  

then  

$$
\mathsf{L}_A(x) = Ax =  
\begin{pmatrix}
1 & 2 & 1 \\
0 & 1 & 2 \\
\end{pmatrix}
\begin{pmatrix}
1 \\
3 \\
-1 \\
\end{pmatrix} =
\begin{pmatrix}
6 \\
1 \\
\end{pmatrix}
$$

::: danger Theorem 2.15
Let $A$ be an $m \times n$ matrix with entries from F. Then the left-multiplication transformation $\mathsf{L}_A: \mathsf{F}^n \to \mathsf{F}^m$ is linear. Furthermore, if $B$ is any other $m \times n$ matrix (with entries from $F$) and $\beta$ and $\gamma$ are the standard ordered bases for $\mathsf{F}^n$ and $\mathsf{F}^m$, respectively, then we have the following properties.

- $[\mathsf{L}_A]_\beta^\gamma = A$.  
- $\mathsf{L}_A = \mathsf{L}_B$ if and only if $A = B$.  
- $\mathsf{L}_{A+B} = \mathsf{L}_A + \mathsf{L}_B$ and $\mathsf{L}_{aA} = a\mathsf{L}_A$ for all $a \in F$.  
- If $\mathsf{T}: \mathsf{F}^n \to \mathsf{F}^m$ is linear, then there exists a unique $m \times n$ matrix $C$ such that $\mathsf{T} = \mathsf{L}_c$. In fact, $C = [\mathsf{T}]_\beta^\gamma$.  
- If $E$ is an $n \times p$ matrix, then $\mathsf{L}_{AE} = \mathsf{L}_{A}\mathsf{L}_{E}$.  
- If $m = n$, then $\mathsf{L}_{I_n} = \mathsf{I}_{\mathsf{F}^n}$.
:::

::: danger Theorem 2.16: Associative in Matrix Multiplication
Let $A, B$, and $C$ be matrices such that $A(BC)$ is defined. Then $(AB)C$ is also defined and $A(BC) = (AB)C$; that is, matrix multiplication is **associative**.
:::

## 2.4 Invertibility and Isomorphisms
### inverse
::: warning Definition: inverse
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces, and let $\mathsf{T: V \to W}$ be linear. A function $\mathsf{U: W \to V}$ is said to be an **inverse** of $\mathsf{T}$ if $\mathsf{TU = I_W}$ and $\mathsf{UT = I_V}$. If $\mathsf{T}$ has an inverse, then $\mathsf{T}$ is said to be invertible. The inverse of $\mathsf{T}$ is unique and is denoted by $\mathsf{T}^{-1}$.  
The following facts hold for invertible functions $\mathsf{T}$ and $\mathsf{U}$:  
1. $(\mathsf{TU})^{-1} = \mathsf{U}^{-1}\mathsf{T}^{-1}$.  
2. $(\mathsf{T}^{-1})^{-1} = \mathsf{T}$; in particular, $\mathsf{T}^{-1}$ is **invertible**. 
 
We often use the fact that a function is **invertible if and only if it is both one-to-one and onto**. We can therefore restate Theorem 2.5 as follows.  

3. Let $\mathsf{T: V \to W}$ be a linear transformation, where $\mathsf{V}$ and $\mathsf{W}$ are finite-dimensional spaces of **equal dimension**. Then $\mathsf{T}$ is invertible if and only if $\operatorname{rank}(\mathsf{T}) = \dim(\mathsf{V})$.
:::

#### Example 2.4.1  
Let $\mathsf{T}: \mathsf{P}_1(\mathbb{R}) \to \mathbb{R}^2$ be the linear transformation defined by $\mathsf{T}(a + bx) = (a, a + b)$. The reader can verify directly that $\mathsf{T}^{-1}: \mathbb{R}^2 \to \mathsf{P}_1(\mathbb{R})$ is defined by $\mathsf{T}^{-1}(c, d) = c + (d – c)x$. Observe that $\mathsf{T}^{-1}$ is also linear. As Theorem 2.17 demonstrates, this is true in general.

### Theorem
::: danger Theorem 2.17
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces, and let $\mathsf{T}: V \to W$ be linear and invertible. Then $\mathsf{T}^{-1}: W \to V$ is linear.
:::

::: warning Definition: invertible
Let $A$ be an $n \times n$ matrix. Then $A$ is invertible if there exists an $n \times n$ matrix $B$ such that $AB = BA = I$. 
:::

If A is invertible, then the matrix B such that $AB = BA = I$ is **unique**. The matrix $B$ is called the inverse of $A$ and is denoted by $A^{-1}$.

#### Example 2.4.2  
The reader should verify that the inverse of 

$$
\begin{pmatrix}
3 & -7 \\
5 & 7 \\
\end{pmatrix}
\text{ is }  
\begin{pmatrix}
3 & 3 \\
2 & -1 \\
\end{pmatrix}
$$

### dimension
::: tip Lemma
Let $\mathsf{T}$ be an invertible linear transformation from $\mathsf{V}$ to $\mathsf{W}$. Then $\mathsf{V}$ is finite-dimensional if and only if $\mathsf{W}$ is finite-dimensional. In this case, $\dim(\mathsf{V}) = \dim(\mathsf{W})$.
:::

::: danger Theorem 2.18: Judgement if invertible [core]
Let $\mathsf{V}$ and $\mathsf{W}$ be finite-dimensional vector spaces with ordered bases $\beta$ and $\gamma$, respectively. Let $\mathsf{T:V\to W}$ be linear. Then $\mathsf{T}$ is invertible **if and only if** $[\mathsf{T}]$ is invertible. Furthermore, $[\mathsf{T}^{-1}]^\beta_\gamma = ([\mathsf{T}]_\beta^\gamma)^{-1}$.
:::

#### Example 2.4.3
Let $\beta$ and $\gamma$ be the standard ordered bases of $\mathsf{P}_1(\mathbb{R})$ and $\mathbb{R}^2$, respectively.

$$
\begin{aligned}
  \mathsf{T}&: \mathsf{P}_1(\mathbb{R}) \to \mathbb{R}^2 &\quad \mathsf{T}(a + bx) &= (a, a + b)  \\
   \mathsf{T}^{-1}&: \mathbb{R}^2 \to \mathsf{P}_1(\mathbb{R}) &\quad \mathsf{T}^{-1}(c, d) &= c + (d – c)x  
\end{aligned}
$$

For $\mathsf{T}$ as in [Example 2.4.1](#example-2-4-1), we have  

$$
[\mathsf{T}]_{\beta}^{\gamma} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}, \quad [\mathsf{T}^{-1}]^{\beta}_{\gamma} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}
$$  

It can be verified by matrix multiplication that each matrix is the inverse of the other.

::: tip Corollary 1
Let $\mathsf{V}$ be a finite-dimensional vector space with an ordered basis $\beta$, and let $\mathsf{T}: \mathsf{V} \to \mathsf{V}$ be linear. Then $\mathsf{T}$ is invertible if and only if $[\mathsf{T}]_\beta$ is invertible. Furthermore, $[\mathsf{T}^{-1}]_\beta = ([\mathsf{T}]_\beta)^{-1}$.
:::

::: tip Corollary 2
Let $A$ be an $n\times n$ matrix. Then $A$ is invertible if and only if $\mathcal{L}_A$ is invertible. Furthermore, $(\mathcal{L}_A)^{-1} = \mathcal{L}_{A^{-1}}$.
:::

### isomorphism
::: warning Definitions: isomorphism
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces. We say that $\mathsf{V}$ is isomorphic to $\mathsf{W}$ if there exists a linear transformation $\mathsf{T}: \mathsf{V} \to \mathsf{W}$ that is **invertible**. Such a linear transformation is called an isomorphism from $\mathsf{V}$ onto $\mathsf{W}$.
:::

#### Example 2.4.4
Define $\mathsf{T}: \mathsf{F}^2 \to \mathsf{P}_1(F)$ by $\mathsf{T}(a_1, a_2) = a_1 + a_2x$. It is easily checked that $\mathsf{T}$ is an isomorphism; so $\mathsf{F}^2$ is isomorphic to $\mathsf{P}_1(F)$.

#### Example 2.4.5  
Define  

$$
  \mathsf{T}: \mathsf{P}_3(\mathbb{R}) \to M_{2\times 2}(\mathbb{R}) \text{ by } 
   \mathsf{T}(f) = \begin{pmatrix}
   f(1) & f(2) \\
   f(3) & f(4) \\
   \end{pmatrix}
$$  

It is easily verified that $\mathsf{T}$ is linear. By the Lagrange interpolation formula (Section 1.6), $\mathsf{T}(f) = O$ only when $f$ is the **zero polynomial**. Thus, $\mathsf{T}$ is one-to-one. 

Moreover, since $\dim(\mathsf{P}_3(\mathbb{R})) = \dim(\mathsf{M}_{2\times 2}(\mathbb{R}))$, it follows that $\mathsf{T}$ is invertible. We conclude that $\mathsf{P}_3(\mathbb{R})$ is isomorphic to $\mathsf{M}_{2\times 2}(\mathbb{R})$.

#### *orphism
a homomorphism preserves the structure, and some
types of homomorphisms are:

- **Epimorphism**: a homomorphism that is surjectiv (AKA onto)
- **Monomorphism**: a homomorphism that is injective (AKA one-to-one, 1-1, or univalent)
- **Isomorphism**: a homomorphism that is bijective (AKA 1-1 and onto); isomorphic objects are
equivalent, but perhaps defined in different ways
- **Endomorphism**: a homomorphism from an object to itself
- **Automorphism**: a bijective endomorphism (an isomorphism from an object onto itself, essentially just a re-labeling of elements)

#### Theorem about isomorphism
::: danger Theorem 2.19
Let $\mathsf{V}$ and $\mathsf{W}$ be finite-dimensional vector spaces (over the same field). Then $\mathsf{V}$ is **isomorphic** to $\mathsf{W}$ **iff** $\dim(\mathsf{V}) = \dim(\mathsf{W})$.
:::

::: tip Corollary
Let $\mathsf{V}$ be vector space over $F$. Then $\mathsf{V}$ is isomorphic to $\mathsf{F}^n$ iff $\dim(\mathsf{V}) = n$.
:::

::: danger Theorem 2.20
Let $\mathsf{V}$ and $\mathsf{W}$ be finite-dimensional vector spaces of dimensions $n$ and $m$, respectively, with ordered bases $\beta$ and $\gamma$. Then the function $\Phi: \mathcal{L}(\mathsf{V}, \mathsf{W}) \to \mathsf{M}_{m\times n}(F)$, defined by $\Phi(\mathsf{T}) = [\mathsf{T}]_\beta^\gamma$ for $\mathsf{T}\in\mathcal{L}(\mathsf{V,W})$, is an isomorphism.
:::

::: tip Corollary
$\mathcal{L}(\mathsf{V}, \mathsf{W})$ is finite-dimensional with dimension $mn$.
:::

::: warning Definition: standard representation
Let $\beta$ be an ordered basis for an n-dimensional vector space $\mathsf{V}$ over field $F$. The **standard representation** of $\mathsf{V}$ w.r.t. $\beta$ is the function $\phi_\beta: \mathsf{V} \to \mathsf{F}^n$ defined by $\phi_\beta(x) = [x]_\beta$ for each $x\in\mathsf{V}$.
:::

#### Example 2.4.6  
Let $\beta = \{(1, 0), (0, 1)\}$ and $\gamma = \{(1, 2), (3, 4)\}$ . It's easily observed that both are ordered bases for $\mathbb{R}^2$. For $x = (1, -2)$, we have

$$
\phi_\beta(x) = \begin{pmatrix} 1 \\ -2 \end{pmatrix}, \quad \phi_\gamma(x) = \begin{pmatrix} -5 \\ 2 \end{pmatrix} \quad \text{i.e.} -5(1, 2) + 2(3, 4) = (1, -2)
$$

We observed arlier that $\phi_\beta$ is a linear transformation. the next theorem tells us much more.

::: danger Theorem 2.21
For any finite-dimensional vector space $\mathsf{V}$ with ordered basis $\beta, \phi_\beta$ is an isomorphism.
:::

#### Relationship
Let $\mathsf{V}$ and $\mathsf{W}$ be vector spaces of dimension $n$ and $m$, respectively, and let $\mathsf{T}: \mathsf{V} \to \mathsf{W}$ be a linear transformation. Define $A = [\mathsf{T}]_\beta^\gamma$, where $\beta$ and $\gamma$ are arbitrary ordered bases of $\mathsf{V}$ and $\mathsf{W}$, respectively. We are now able to use $\phi_\beta$ and $\phi_\gamma$ to study the relationship between the linear transformations $\mathsf{T}$ and $\mathsf{L}_A: \mathsf{F}^n \to \mathsf{F}^m$.

Consider the following two composites of linear transformations that map $\mathsf{V}$ into $\mathsf{F}^m$:

1. Map $\mathsf{V}$ into $\mathsf{F}^n$ with $\phi_\beta$ and follow this transformation with $\mathsf{L}_A$; this yields the composite $\mathsf{L}_A \phi_\beta$.

2. Map $\mathsf{V}$ into $\mathsf{W}$ with $\mathsf{T}$ and follow it by $\phi_\gamma$ to obtain the composite $\phi_\gamma \mathsf{T}$.

<img src="/math_em_2_1_diagram.png" alt="diagram" width="100%" align="middle">

These 2 composites are depictedby the dashed arrows in the diagram. By a simple reformulation of Theorem 2.14, we may conclude that 

$$
  \mathsf{L}_A \phi_\beta = \phi_\gamma \mathsf{T}
$$  

($[\mathsf{T}(u)]_\gamma = [\mathsf{T}][u]_\beta$)

That is, the diagram "commutes." Heuristically, this relationship indicates that after $\mathsf{V}$ and $\mathsf{W}$ are identified with $\mathsf{F}^n$ and $\mathsf{F}^m$ via $\phi_\beta$ and $\phi_\gamma$, respectively, we may "identify" $\mathsf{T}$ with $\mathsf{L}_A$. This diagram allows us to transfer operations on abstract vector spaces to ones on $\mathsf{F}^n$ and $\mathsf{F}^m$.

#### Example 2.4.7

Recall the linear transformation $\mathsf{T}: \mathsf{P}_3(\mathbb{R}) \to \mathsf{P}_2(\mathbb{R})$ defined by $\mathsf{T}(f(x)) = f'(x)$. Let $\beta$ and $\gamma$ be the standard ordered bases for $\mathsf{P}_3(\mathbb{R})$ and $\mathsf{P}_2(\mathbb{R})$, respectively, and let $\phi_\beta: \mathsf{P}_3(\mathbb{R}) \to \mathbb{R}^4$ and $\phi_\gamma: \mathsf{P}_2(\mathbb{R}) \to \mathbb{R}^3$ be the corresponding standard representations.

If $A = [\mathsf{T}]$, then  
$$
A = \begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3 \\
\end{pmatrix}
$$

Consider the polynomial $p(x) = 2 + x - 3x^2 + 5x^3$. We show that

$$
  \mathsf{L}_A \phi_\beta(p(x)) = 
  \begin{pmatrix}
   0 & 1 & 0 & 0 \\
   0 & 0 & 2 & 0 \\
   0 & 0 & 0 & 3 \\
   \end{pmatrix}
  \begin{pmatrix}
   2 \\
   1 \\
   -3 \\
   5
  \end{pmatrix} = 
  \begin{pmatrix}
   1 \\
   -6 \\
   15
  \end{pmatrix}
$$ 

But since $\mathsf{T}(p(x)) = p'(x) = 1-6x+15x^2$, we have

$$
  \phi_\gamma \mathsf{T}(p(x)) = 
  \begin{pmatrix}
   1 \\
   -6 \\
   15
  \end{pmatrix}
$$ 

So

$$
\mathsf{L}_A \phi_\beta(p(x)) = \phi_\gamma \mathsf{T}(p(x))
$$

<img src="/math_em_2_2_diagram_example.png" alt="diagram" width="100%" align="middle">

## 2.5 The Change of Coordinate Matrix

::: danger Theorem 2.22
Let $\beta$ and $\beta'$ be two ordered bases for a finite-dimensional vector space $\mathsf{V}$, and let $Q = [\mathsf{I_V}]_\beta^{\beta'}$. Then  

- $Q$ is invertible.  
- For any $v \in \mathsf{V}, [v]_\beta = Q [v]_{\beta'}$
:::

The matrix $Q = [\mathsf{I_V}]_\beta^{\beta'}$ is called a **change of coordinate matrix**. Because of part (b) of the theorem, we say that **$Q$ changes $\beta'$-coordinates into $\beta$-coordinates**. Observe that if $\beta = {x_1, x_2, ..., x_n}$ and $\beta' = {x_1', x_2', ..., x_n'}$, then  
$$
x'_j = \sum_{i=1}^n Q_{ij} x_i
$$  
for $j = 1, 2, \cdots, n$; that is, the jth column of $Q$ is $[x'_j]_\beta$.

#### Example 2.5.1

In $\mathbb{R}^2$, and let

$$
\beta = \{(1, 1), (1, -1)\}, \quad \beta' = \{(2, 4), (3, 1)\}
$$

Since

$$
(2, 4) = 3(1, 1) - 1(1, -1), \quad (3, 1) = 2(1, 1) + 1(1, -1)
$$

the change of coordinate matrix $Q$ changing $\beta'$-coordinates into $\beta$-coordinates is  

$$
Q = \begin{pmatrix} 3 & 2 \\ -1 & 1 \end{pmatrix}
$$

For instance,  

$$
[(2, 4)]_\beta = Q [(2, 4)]_{\beta'} = Q \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}
$$

For the remainder of this section, we consider only linear transformations that map a vector space $\mathsf{V}$ into itself. Such a linear transformation is called a linear operator on $\mathsf{V}$

### Theorem 2.23 [core]
:::danger Theorem 2.23
Let $\mathsf{T}$ be a linear operator on a finite-dimensional vector space $\mathsf{V}$, and let $\beta$ and $\beta'$ be ordered bases for $\mathsf{V}$. Suppose $Q$ is the change of coordinate matrix that changes $\beta'$-coordinates into $\beta$-coordinates. Then  

$$
  [\mathsf{T}]_{\beta'} = {Q_{\beta'}^{\beta}}^{-1} [\mathsf{T}]_\beta Q_{\beta}^{\beta'}
$$
:::

Proof:

$$
  Q[\mathsf{T}]_{\beta'} = [\mathsf{I}]_{\beta'}^\beta = [\mathsf{T}]_{\beta'}^{\beta'} = [\mathsf{IT}]_{\beta'}^\beta = [\mathsf{TI}]_{\beta'}^\beta = [\mathsf{T}]_{\beta}^\beta[\mathsf{I}]_{\beta'}^\beta = [\mathsf{I}]_{\beta}Q.
$$

#### Example 2.5.2: Calculation about coordination change

Let $\mathsf{T}$ be the linear operator on $\mathbb{R}^2$ defined by  

$$
  \mathsf{T}\begin{pmatrix}a \\ b\end{pmatrix} = \begin{pmatrix}3a - b \\ a + 3b\end{pmatrix}
$$

Let  
$$
\beta = \{(1, 1), (1, -1)\}, \quad \beta' = \{(2, 4), (3, 1)\}
$$

be the ordered bases. It can be known that

$$
  [\mathsf{T}]_\beta =
  \begin{pmatrix}
    3 & 1\\
    -1 & 3
  \end{pmatrix}
$$

(Here gives details about the result above)

Given that $[\mathsf{T}]_\beta = Q'^{-1}[\mathsf{T}]_\gamma Q'$, where $\gamma$ is **standard ordered basis**, thus

$$
  [\mathsf{T}]_\gamma = 
  \begin{pmatrix}
    3 & -1\\
    1 & 3
  \end{pmatrix}
$$

And

$$
  Q' = 
  \begin{pmatrix}
    1 & 1\\
    1 & -1
  \end{pmatrix}, \quad
  Q'^{-1} = \frac12
  \begin{pmatrix}
    1 & 1\\
    1 & -1
  \end{pmatrix}.
$$

So

$$
    [\mathsf{T}]_\beta &= 
    \frac12 
    \begin{pmatrix}
      1 & 1\\
      1 & -1
    \end{pmatrix}
    \begin{pmatrix}
      3 & -1\\
      1 & 3
    \end{pmatrix}
    \begin{pmatrix}
      1 & 1\\
      1 & -1
    \end{pmatrix}
    = \begin{pmatrix}
      3 & 1\\
      -1 & 3
    \end{pmatrix}
$$

The change of coordinate matrix that changes $\beta'$-coordinate into $\beta$-coordinate is  

$$
  Q = \begin{pmatrix}3 & 2 \\ -1 & 1\end{pmatrix}
$$

and

$$
  Q^{-1} = \frac15
  \begin{pmatrix}
    1 & -2\\
    1 & 3
  \end{pmatrix}
$$

hence, by theorem 2.23:

$$
  [\mathsf{T}]_{\beta'} = Q^{-1} [\mathsf{T}]_\beta Q = 
  \begin{pmatrix}
    4 & 1\\
    -2 & 2
  \end{pmatrix}
$$

To show that this's the correct matrix, we can verify that the image under $\mathsf{T}$ of each vector of $\beta'$ is the linear combination of the vectors of $\beta'$ with the entries of thecorresponding column as its coefficients. For example, the image of the 2nd vector in $\beta'$ is 

$$
  \mathsf{T}
  \begin{pmatrix}
    3 \\
    1
  \end{pmatrix} = 
  \begin{pmatrix}
    8 \\
    6
  \end{pmatrix} = 1
  \begin{pmatrix}
    2 \\
    4
  \end{pmatrix} + 2
  \begin{pmatrix}
    3 \\
    1
  \end{pmatrix}
$$

Note that the coeffficients of the linear combination are the entries of the 2nd column of $[\mathsf{T}]_{\beta'}$

#### Example 2.5.3： Application about coordination change [core]

Recall the reflection about the x-axis in Example 3 in Section 2.1. The rule $(x,y)\to(x,-y)$ is easy to obtain. Let $\mathsf{T}$ be the reflection about the line $y = 2x$. We wish to find an expression for $\mathsf{T}(a,b)$ for any $(a,b)\in\mathbb{R}^2$. Since $\mathsf{T}$ is linear, it is determined by its values on a basis for $\mathbb{R}^2$. For basis vectors,  

$$
\mathsf{T}(1, 2) = (1, 2), \quad \mathsf{T}(-2, 1) = (2, -1) = -1\times(-2, 1)
$$

Therefore if we let

$$
  \beta' = 
  \left\{
    \begin{pmatrix}
      1 \\
      2
    \end{pmatrix}, 
    \begin{pmatrix}
      -2 \\
      1
    \end{pmatrix}
  \right\}
$$

Then the matrix representing $\mathsf{T}$ in the basis $\beta' = \{(1, 2), (-2, 1)\}$ is 

$$
\begin{gather*}
  [\mathsf{T}]_{\beta'} = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix} \\
  (1,0)^\top \text{ for } \mathsf{T}(1,2)=(1,2)=1\times (1,2) + 0\times(2,-1)\\
  (0,-1)^\top \text{ for } \mathsf{T}(-2,1)=(2,-1)=0\times (1,2) + -1\times (2,-1)
\end{gather*}
$$



Let $\beta$ be the standard ordered basis for $\mathbb{R}^2$, and let $Q$ be the matrix that changes $\beta'$-coordinates into $\beta$-coordinates. Then

$$
  Q_{\beta'}^{\beta} = 
  \begin{pmatrix}
    1 & -2\\
    2 & 1
  \end{pmatrix}
$$

and $Q^{-1} [\mathsf{T}]_\beta Q = [\mathsf{T}]_{\beta'}$. We can solve this equation for $[\mathsf{T}]_\beta$ to obtain that $[\mathsf{T}]_\beta = Q [\mathsf{T}]_{\beta'} Q^{-1}$. Because

$$
  {Q_{\beta'}^{\beta}}^{-1} = \frac15
  \begin{pmatrix}
    1 & 2\\
    -2 & 1
  \end{pmatrix}
$$

Then it can be verified that

$$
  [\mathsf{T}]_\beta = {Q_{\beta}^{\beta'}}^{-1}[\mathsf{T}]_{\beta}{Q_{\beta}^{\beta'}} = {Q_{\beta'}^{\beta}}[\mathsf{T}]_{\beta'}{Q_{\beta'}^{\beta}}^{-1} = \frac15
  \begin{pmatrix}
    -3 & 4\\
    4 & 3
  \end{pmatrix}
$$

Since $\beta$ is the standard ordered basis, it follows that $\mathsf{T}$ is left-multiplication by $[\mathsf{T}]_\beta$. Thus for any $(a,b)\in\mathbb{R}^2$, we have

$$
  \mathsf{T}
  \begin{pmatrix}
    a \\
    b
  \end{pmatrix} = \frac15
  \begin{pmatrix}
    -3 & 4\\
    4 & 3
  \end{pmatrix}
  \begin{pmatrix}
    a \\
    b
  \end{pmatrix} = \frac15
  \begin{pmatrix}
    -3a + 4b\\
    4a + 3b
  \end{pmatrix}
$$

### Corollary of Theorem 2.23
::: tip Corollary
Let $A \in \mathsf{M}_{n\times n}(F)$, and let $\gamma$ be an ordered basis for $\mathsf{F}^n$. Then  

$$
  [\mathsf{L}_A]_\gamma = Q^{-1} A Q
$$

where $Q$ is the $n \times n$ matrix whose jth column is the jth vector of $\gamma$.
:::

#### Example 2.5.4

Let

$$
  A = \begin{pmatrix}2 & 1 & 0 \\ 1 & 1 & 3 \\ 0 & -1 & 0\end{pmatrix}
$$

and let

$$
  \gamma = \left\{ \begin{pmatrix} -1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \right\}
$$

which is an ordered basis for $\mathbb{R}^3$. Let $Q$ be the $3\times 3$ matrix whose jth column is the jth vector of $\gamma$. Then

$$
  Q = 
  \begin{pmatrix}
    -1 & 2 & 1\\
    0 & 1 & 1\\
    0 & 0 & 1
  \end{pmatrix} \text{ and }
  Q^{-1} = 
  \begin{pmatrix}
    -1 & 2 & -1\\
    0 & 1 & -1\\
    0 & 0 & 1
  \end{pmatrix}
$$

So by the preceding corollary,

$$
  [\mathsf{L}_A]_\gamma = Q^{-1} A Q = 
  \begin{pmatrix}
    0 & 2 & 8\\
    -1 & 4 & 6\\
    0 & -1 & -1 
  \end{pmatrix}
$$

::: warning Definition

Let $A, B$ be matrices in $\mathsf{M}_{n\times n}(F)$. We say $B$ is **similar** to $A$ if there exists an invertible matrix $Q$ such that  

$$
B = Q^{-1} A Q
$$
:::
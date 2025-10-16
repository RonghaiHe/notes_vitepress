

<!-- # 6 Optimal Control Solutions

This note comes from various notes online.

## 6.1 Usual Solutions

> [3-Direct method (Single/Multiple shooting, collocation method) - Zhuanlan in Zhihu](https://zhuanlan.zhihu.com/p/396056002) to introduce some resources, 
> including [Numerical Optimal Control](https://www.syscop.de/files/2024ws/NOC/book-NOCSE.pdf) by Moritz Diehl and Sebastien Gros, which is the reference e-book in this chapter.

There are 3 ways solving the optimal control problems:
1. Hamilton-Jacobian-Bellman (`HJB`) Equation(continuous) and `Dynamic Programming` (discrete);
   - Tabulation in State Space
2. Indirect Methods: Pontryagin Maximum Principle (`PMP`);
   - Solve Boundary Value Problem
3. Direct Methods: 
   - Transform into NonLinear Program (NLP)
   1. Single Shooting
   2. Multiple Shooting
   3. Collocation -->

# 6 Discrete Optimal Control
> Reference: Chapter 7 in [Numerical Optimal Control](https://www.syscop.de/files/2024ws/NOC/book-NOCSE.pdf) by Moritz Diehl and Sebastien Gros with own notations

In [§1.1](./1introduction#1-1-basic-problem), the dynamic system model is

$$
   \left\{\begin{aligned} \dot{\boldsymbol{x}}(t) & =\boldsymbol{f}(\boldsymbol{x}(t), \boldsymbol{\alpha}(t)) \quad(t>0) \\ \boldsymbol{x}(0) & =x^0\end{aligned}\right.
$$

For discrete problem, the dynamic system equation (time-invariant) is

$$
  \boldsymbol{x}_{k+1} = \boldsymbol{f}(\boldsymbol{x}_k, \boldsymbol{\alpha}_k), \quad k=0,\cdots,N-1.
$$

with $\boldsymbol{x}_k\in\mathbb{R}^n, \boldsymbol{\alpha}_k\in\mathbb{R}^m$.

if we know the initial state $\boldsymbol{x}_0$ and the controls $\boldsymbol{\alpha}_0,\cdots , \boldsymbol{\alpha}_{N−1}$, we could **simulate** the system to **obtain all other states**. 

But in optimization, we might have different requirements than just a fixed initial state. We might, for example, have both **a fixed initial state and a fixed terminal state** that we want to reach. Or we might just look for **periodic sequences** with $\boldsymbol{x}_0 = \boldsymbol{x}_N$. All these desires on the initial and the terminal state can be expressed by a **boundary constraint function**

$$
   s(\boldsymbol{x}_0, \boldsymbol{x}_N) = 0.
$$

For the case of fixed initial value, this function would just be

$$
  s(\boldsymbol{x}_0, \boldsymbol{x}_N) = \boldsymbol{x}_0 - x^0
$$

where $x^0$ is the fixed initial value and not an optimization variable. 

Another example would be to have both ends fixed, resulting in a function r of double the state dimension, namely:

$$
  \boldsymbol{s}(\boldsymbol{x}_0, \boldsymbol{x}_N) = 
  \begin{bmatrix}
      \boldsymbol{x}_0 - x^0 \\
      \boldsymbol{x}_N - x^N
  \end{bmatrix}.
$$

Finally, periodic boundary conditions can be imposed by setting

$$
  s(\boldsymbol{x}_0, \boldsymbol{x}_N) = x_0 - x_N
$$

Other constraints that are usually present are **path constraint inequalities** of the form

$$
  b(\boldsymbol{x}_k, \boldsymbol{\alpha}_k)\le 0, \quad k=0,\cdots,N-1.
$$

In the case of upper and lower bounds on the controls, $\boldsymbol{\alpha}_{\min}\le \boldsymbol{\alpha}_k\le\boldsymbol{\alpha}_{\max}$, the function $b$ would just be

$$
  \boldsymbol{b}(\boldsymbol{x},\boldsymbol{\alpha}) = 
  \begin{bmatrix}
   \boldsymbol{\alpha} - \boldsymbol{\alpha}_{\max} \\
   \boldsymbol{\alpha}_{\min} - \boldsymbol{\alpha}
  \end{bmatrix}.
$$

## 6.1 Optimal Control Problem (OCP) Formulations

Two major approaches can be distinguished to formulate and numerically solve a discrete time optimal control problem: **the simultaneous and the sequential approach**, which we will outline after having formulated the optimal control problem in its standard form.

### 6.1.1 Original Problem Formulation

Given the system model and constraints, a quite generic discrete time optimal control problem can be formulated as the following constrained NonLinear Programming (**NLP**):

$$
\begin{align*}
\min\limits_{{\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}, \boldsymbol{x}_{1}, \ldots, \boldsymbol{\alpha}_{N-1}, \boldsymbol{x}_{N}}} \quad &\sum\limits_{k=0}^{N-1} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+g\left(\boldsymbol{x}_{N}\right) \tag{7.1a}\\
\text { subject to } \quad & \boldsymbol{x}_{k+1}-\boldsymbol{f}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)=0, \quad k=0, \ldots, N-1, \tag{7.1b}\\
& \boldsymbol{b}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right) \leq 0, \quad k=0, \ldots, N-1, \tag{7.1c}\\
& \boldsymbol{s}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)=0 . \tag{7.1d}
\end{align*}
$$

We remark that other optimization variables could be present as well, such as a **free parameter** $p$ that can be chosen but is constant over time, like e.g. the size of a vessel in a chemical reactor or the length of a robot arm. Such parameters could be added to the optimisation formulation above by defining **dummy states** $\left\{p_{k}\right\}_{k=1}^{N}$ that satisfy the **dummy dynamic model equations**

$$
  p_{k+1}=p_{k}, \quad k=0, \ldots, N-1.
$$

Note that the initial value of $p_{0}$ is not fixed by these constraints and thus we would have obtained our aim of having a time constant parameter vector that is free for optimization.

### 6.1.2 The Simultaneous Approach

The nonlinear program (7.1) is large and structured and can thus in principle be solved by any **NLP solver**. This is called the **simultaneous approach** to optimal control and requires the use of a structure exploiting NLP solver in order to be efficient. 

Note that in this approach, all original variables, i.e., $\boldsymbol{\alpha}_{k}$ and $\boldsymbol{x}_{k}$, remain optimization variables of the NLP. Its name stems from the fact that the NLP solver has to **simultaneously solve both**, the simulation and the optimization problem. It is interesting to remark that the model equations (7.1b) will for most NLP solvers only be satisfied once the NLP iterations are **converged**. The simultaneous approach is therefore sometimes referred to as an **infeasible path approach**. The methods **direct multiple shooting** and **direct collocation** that we explain in the third part of this script are simultaneous approaches.

### 6.1.3 The Reduced Formulation and the Sequential Approach

On the other hand, we know that we could eliminate nearly all states by a **forward simulation**, and in this way we could reduce the variable space of the NLP. The idea is to keep only $\boldsymbol{x}_{0}$ and $\boldsymbol{\Alpha}=\left[\boldsymbol{\alpha}_{0}^{\top}, \ldots, \boldsymbol{\alpha}_{N-1}^{\top}\right]^{\top}$ as variables. The states $\boldsymbol{x}_{1}, \ldots, \boldsymbol{x}_{N}$ are eleminated **recursively** by

$$
\begin{align*}
{\boldsymbol{x}}^{0}\left(\boldsymbol{x}_{0}, \boldsymbol{\Alpha}\right) & =\boldsymbol{x}_{0} \\
{\boldsymbol{x}}^{k+1}\left(\boldsymbol{x}_{0}, \boldsymbol{\Alpha}\right) & =\boldsymbol{f}\left({\boldsymbol{x}}^{k}\left(\boldsymbol{x}_{0}, \boldsymbol{\Alpha}\right), \boldsymbol{\alpha}_{k}\right), \quad k=0, \ldots, N-1 . \tag{7.2}
\end{align*}
$$

Then the optimal control problem is equivalent to a reduced problem with much less variables, namely the following nonlinear program:

$$
\begin{align*}
\underset{\boldsymbol{x}_{0}, \boldsymbol{\Alpha}}{\operatorname{min}} \quad & \sum\limits_{k=0}^{N-1} r\left({\boldsymbol{x}}^{k}\left(\boldsymbol{x}_{0}, \boldsymbol{\Alpha}\right), \boldsymbol{\alpha}_{k}\right)+g\left({\boldsymbol{x}}^{k}\left(\boldsymbol{x}_{0}, \boldsymbol{\Alpha}\right)\right) \tag{7.3a}\\
\text { subject to } \quad & \boldsymbol{s}\left(\boldsymbol{x}_{0}, {\boldsymbol{x}}^{N}\left(\boldsymbol{x}_{0}, \Alpha\right)\right)=0, \tag{7.3b}\\
& \boldsymbol{b}\left({\boldsymbol{x}}^{k}\left(\boldsymbol{x}_{0}, \boldsymbol{\Alpha}\right), \boldsymbol{\alpha}_{k}\right) \leq 0, \quad k=0, \ldots, N-1 . \tag{7.3c}
\end{align*}
$$

Note that the model Equation (7.2) is implicitly satisfied by definition, but is not anymore a constraint of the optimization problem. This reduced problem can now be addressed again by **Newton-type methods**, but the **exploitation of sparsity in the problem is less important**. 

This is called the **sequential approach**, because the simulation problem and optimization problem are solved sequentially, one after the other. Note that the user can observe during all iterations of the optimization procedure what is the resulting state trajectory for the current iterate, as the model equations are satisfied by definition.

If the initial value is fixed, i.e. if $\boldsymbol{s}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)=\boldsymbol{x}_{0}-\boldsymbol{x}^{0}$, one can also eliminate $\boldsymbol{x}_{0} \equiv {\boldsymbol{x}}^{0}$, which reduces the variables of the NLP further.

## 6.2 Analysis of a Simplified Optimal Control Problem

In order to learn more about the structure of optimal control problems and the relation between the simultaneous and the sequential approach, we regard in this section a **simplified optimal control problem** in discrete time:

$$
\begin{align*}
\min\limits_{\substack{\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}, \boldsymbol{x}_{1}, \ldots,, \boldsymbol{\alpha}_{N-1}, \boldsymbol{x}_{N}}} \quad & \sum_{k=0}^{N-1} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+g\left(\boldsymbol{x}_{N}\right) \tag{7.4a}\\
\text { subject to } \quad & \boldsymbol{x}_{k+1}-\boldsymbol{f}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)=0, \quad k=0, \ldots, N-1, \tag{7.4b} \\
& \boldsymbol{s}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)=0 . \tag{7.4c}
\end{align*}
$$

### 6.2.1 KKT Conditions of the Simplified Problem

We first summarize the variables as $\boldsymbol{w}=\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}, \boldsymbol{x}_{1}, \boldsymbol{\alpha}_{1}, \ldots, \boldsymbol{\alpha}_{N-1}, \boldsymbol{x}_{N}\right)$ and summarize the multipliers as $\boldsymbol{\lambda}=\left(\boldsymbol{\lambda}_{1}, \ldots, \boldsymbol{\lambda}_{N}, \boldsymbol{\lambda}_{s}\right)$. Then the above optimal control problem can be summarized as

$$
\begin{array}{cl}
\underset{\boldsymbol{w}}{\operatorname{min}} & \boldsymbol{F}(\boldsymbol{w}) \\
\text { subject to } & \boldsymbol{S}(\boldsymbol{w})=0
\end{array}
$$

Here, the objective $\boldsymbol{F}(\boldsymbol{w})$ is just copied from (7.4a) while $\boldsymbol{S}(\boldsymbol{w})$ collects all constraints:

$$
\boldsymbol{S}(\boldsymbol{w})=\left[\begin{array}{c}
f\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right)-\boldsymbol{x}_{1} \\
f\left(\boldsymbol{x}_{1}, \boldsymbol{\alpha}_{1}\right)-\boldsymbol{x}_{2} \\
\vdots \\
f\left(\boldsymbol{x}_{N-1}, \boldsymbol{\alpha}_{N-1}\right)-\boldsymbol{x}_{N} \\
\boldsymbol{s}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)
\end{array}\right]
$$

The Lagrangian function has the form

$$
\begin{aligned}
\mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda}) =&\boldsymbol{F}(\boldsymbol{w})+\boldsymbol{\lambda}^{\top} \boldsymbol{S}(\boldsymbol{w}) \\
 =&\sum_{k=0}^{N-1} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+g\left(\boldsymbol{x}_{N}\right)+\sum_{k=0}^{N-1} \boldsymbol{\lambda}_{k+1}^{\top}\left(\boldsymbol{f}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)-\boldsymbol{x}_{k+1}\right) \\
& +\boldsymbol{\lambda}_{s}^{\top} \boldsymbol{s}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)
\end{aligned}
$$

and the summarized KKT-conditions of the problem are

$$
\begin{align*}
\nabla_{\boldsymbol{w}} \mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda}) & =0  \tag{7.5a}\\
\boldsymbol{S}(\boldsymbol{w}) & =0 . \tag{7.5b}
\end{align*}
$$

But let us look at these KKT-conditions in more detail. 

1. we evaluate the derivative of $\mathcal{L}$ with respect to all state variables $\boldsymbol{x}_{k}$, one after the other. We have to treat $k=0$ and $k=N$ as special cases. 
   
   1. For $k=0$ we obtain:

   $$
   \begin{align*}
   &\nabla_{\boldsymbol{x}_{0}} \mathcal{L}(w, \lambda)\\
   =&\nabla_{\boldsymbol{x}_{0}} r\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right)+\frac{\partial \boldsymbol{f}}{\partial \boldsymbol{x}_{0}}\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right)^{\top} \boldsymbol{\lambda}_{1}+\frac{\partial \boldsymbol{r}}{\partial \boldsymbol{x}_{0}}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)^{\top} \boldsymbol{\lambda}_{r}=0 . \tag{7.6a}
   \end{align*}
   $$

   2. Then the case for $k=1, \ldots, N-1$ is treated

   $$
   \begin{align*}
   &\nabla_{\boldsymbol{x}_{k}} \mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda})\\
   =&\nabla_{\boldsymbol{x}_{k}} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)-\boldsymbol{\lambda}_{k}+\frac{\partial \boldsymbol{f}}{\partial \boldsymbol{x}_{k}}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)^{\top} \boldsymbol{\lambda}_{k+1}=0 \tag{7.6b}
   \end{align*}
   $$

   3. Last, the special case $k=N$

   $$
   \begin{align*}
   &\nabla_{\boldsymbol{x}_{N}} \mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda})\\
   =&\nabla_{\boldsymbol{x}_{N}} r\left(\boldsymbol{x}_{N}\right)-\boldsymbol{\lambda}_{N}+\frac{\partial \boldsymbol{s}}{\partial \boldsymbol{x}_{N}}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)^{\top} \boldsymbol{\lambda}_{r}=0 . \tag{7.6c}
   \end{align*}
   $$

2. let us calculate the derivative of the Lagrangian with respect to all controls $\boldsymbol{\alpha}_{k}$, for $k=0, \ldots, N-1$. Here, no special cases need to be considered, and we obtain the general formula

$$
\begin{equation*}
\nabla_{\boldsymbol{\alpha}_{k}} \mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda})=\nabla_{\boldsymbol{\alpha}_{k}} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+\frac{\partial \boldsymbol{f}}{\partial \boldsymbol{\alpha}_{k}}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)^{\top} \boldsymbol{\lambda}_{k+1}=0 . \tag{7.6d}
\end{equation*}
$$

Until now, we have computed in detail the components of the first part of the KKT-condition (7.5a), i.e., $\nabla_{\boldsymbol{w}} \mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda})=0$. The other part of the KKT-condition, $\boldsymbol{S}(\boldsymbol{w})=0$, is trivially given by

$$
\begin{align*}
\boldsymbol{f}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)-\boldsymbol{x}_{k+1} & =0, \quad k=0, \ldots, N-1  \tag{7.6e}\\
\boldsymbol{s}\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right) & =0 . \tag{7.6f}
\end{align*}
$$

Thus, collecting all equations (7.6a) to (7.6f), we have stated the KKT-conditions of the OCP. They can be treated by Newton-type methods in different ways. 

- The **simultaneous** approach addresses equations (7.6a) to (7.6f) directly by a Newton-type method in the space of all variables ( $w, \lambda$ ). 
- The **sequential** approach approach eliminates all the states $\boldsymbol{x}_{1}, \ldots, \boldsymbol{x}_{N}$ in (7.6e) by a forward simulation, and if it is implemented efficiently, it also uses Eqs. (7.6c) and (7.6b) to eliminate all multipliers $\boldsymbol{\lambda}_{N}, \ldots, \boldsymbol{\lambda}_{1}$ in a backward simulation, as discussed in the following subsection.

### 6.2.2 Computing Gradients in the Sequential Approach

A naive implementation of the sequential approach would start by coding routines that evaluate the objective and constraint functions, and then passing these routines as black-box codes to a generic NLP solver, like fmincon in `MATLAB`. 

But this would not be the most efficient way to implement the sequential approach. The reason is the generation of derivatives, which a generic NLP solver will compute by finite differences. On the other hand, many generic NLP solvers allow the user to deliver **explicit functions** for the derivatives as well. This allows us to compute the derivatives of the reduced problem functions more efficiently. The key technology here is algorithmic differentiation in the backward mode, as explained in Chapter 5(In e-book).

To see how this relates to the optimality conditions (7.6a) to (7.6f) of the optimal control problem, let us simplify the setting even more by assuming a **fixed initial value** and **no constraint** on the terminal state, i.e., $s\left(\boldsymbol{x}_{0}, \boldsymbol{x}_{N}\right)={x}^{0}-\boldsymbol{x}_{0}$.

In this case, the KKT conditions simplify to the following set of equations, which we bring already into a specific order:

$$
\begin{align*}
\boldsymbol{x}_{0} & ={x}^{0} & &  \tag{7.7a}\\
\boldsymbol{x}_{k+1} & =\boldsymbol{f}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right), & & k=0, \ldots, N-1,  \tag{7.7b}\\
\boldsymbol{\lambda}_{N} & =\nabla_{\boldsymbol{x}_{N}} g\left(\boldsymbol{x}_{N}\right) & &  \tag{7.7c}\\
\boldsymbol{\lambda}_{k} & =\nabla_{\boldsymbol{x}_{k}} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+\frac{\partial \boldsymbol{f}}{\partial \boldsymbol{x}_{k}}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)^{\top} \boldsymbol{\lambda}_{k+1}, & & k=N-1, \ldots, 1,  \tag{7.7d}\\
0 & =\nabla_{\boldsymbol{\alpha}_{k}} r\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+\frac{\partial \boldsymbol{f}}{\partial \boldsymbol{\alpha}_{k}}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)^{\top} \boldsymbol{\lambda}_{k+1}, & & k=0, \ldots, N-1 . \tag{7.7e}
\end{align*}
$$

It can easily be seen that the first four equations can trivially be satisfied, by a **forward sweep** to obtain all $\boldsymbol{x}_{k}$ and a **backward sweep** to obtain all $\boldsymbol{\lambda}_{k}$. 

Thus, $\boldsymbol{x}_{k}$ and $\boldsymbol{\lambda}_{k}$ can be made explicit functions of $\boldsymbol{\alpha}_{0}, \ldots, \boldsymbol{\alpha}_{N-1}$. The only equation that is non-trivial to satisfy is the last one, the partial derivatives of the Lagrangian w.r.t. the controls $\boldsymbol{\alpha}_{0}, \ldots, \boldsymbol{\alpha}_{N-1}$. 

Thus we could decide to eliminate $\boldsymbol{x}_{k}$ and $\boldsymbol{\lambda}_{k}$ and only search with a Newton-type scheme for the variables $\boldsymbol{\Alpha}=\left(\boldsymbol{\alpha}_{0}, \ldots, \boldsymbol{\alpha}_{N-1}\right)$ such that these last equations are satisfied. It turns out that the left hand side residuals (7.7e) are nothing else than the derivative of the reduced problem's objective (7.3a), and the forward-backward sweep algorithm described above is nothing else than the reverse mode of algorithmic differentiation. It is much more efficient than the computation of the gradient by finite differences.

The **forward-backward sweep** is well known in the optimal control literature and often introduced without reference to the reverse mode of Algorithmic Differentiation (AD). On the other hand, it is good to know the general principles of AD in forward or backward mode, because AD can also be beneficial in other contexts, e.g. for the evaluation of derivatives of the other problem functions in (7.3a)-(7.3b). Also, when second order derivatives are needed, AD can be used and more structure can be exploited, but this is most easily derived in the context of the simultaneous approach, which we do in the following section.

## 6.3 Sparsity Structure of the Optimal Control Problem

Let us in this section regard a very general optimal control problem in the original formulation, i.e., the NLP that would be treated by the simultaneous approach.

$$
\begin{align*}
\underset{\substack{\boldsymbol{x}_{0}, \alpha_{0}, \boldsymbol{x}_{1}, \ldots, \boldsymbol{\alpha}_{N-1}, \boldsymbol{x}_{N}}}{\operatorname{min}} \quad & \sum_{k=0}^{N-1} r_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+g\left(\boldsymbol{x}_{N}\right) \tag{7.8a}\\
\text { subject to } \quad & f_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)-\boldsymbol{x}_{k+1}=0, k=0, \ldots, N-1, \tag{7.8b}\\
&\sum_{k=0}^{N-1} s_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+s_{N}\left(\boldsymbol{x}_{N}\right) =0, \tag{7.8c}\\
& b_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right) \leq 0, \quad k=0, \ldots, N-1, \tag{7.8d}\\
& b_{N}\left(\boldsymbol{x}_{N}\right) \leq 0 .\tag{7.8e}
\end{align*}
$$

Compared to the OCP (7.1) in the previous sections, we now allow indices on all problem functions making the system time dependent; also, we added **terminal inequality constraints** (7.8e), and as boundary conditions we now allow now very general **coupled multipoint constraints** (7.8c) that include the cases of fixed initial or terminal values or periodicity, but are much more general. Note that in these boundary constraints, terms arising from different time points are only coupled by **addition**, because this allows us to maintain the sparsity structure we want to exploit in this section.

Collecting all variables in a vector $\boldsymbol{w}$, the objective in a function $\boldsymbol{F}(\boldsymbol{w})$, all **equalities** in a function $\boldsymbol{S}(\boldsymbol{w})$ and all **inequalities** in a function $\boldsymbol{B}(\boldsymbol{w})$, the optimal control problem could be summarized as

$$
\begin{array}{cl}
\underset{\boldsymbol{w}}{\operatorname{min}} & \boldsymbol{F}(\boldsymbol{w}) \\
\text { subject to } & \boldsymbol{S}(\boldsymbol{w})=0, \\
& \boldsymbol{H}(\boldsymbol{w}) \leq 0 .
\end{array}
$$

Its Lagrangian function is given by

$$
\mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda}, \boldsymbol{\mu})=\boldsymbol{F}(\boldsymbol{w})+\boldsymbol{\lambda}^{\top} \boldsymbol{S}(\boldsymbol{w})+\boldsymbol{\mu}^{\top} \boldsymbol{B}(\boldsymbol{w}) .
$$

But this summarized form does not reveal any of the structure that is present in the problem.

### 6.3.1 Partial Separability of the Lagrangian

In fact, the above optimal control problem is a very **sparse** problem because each of its functions depends only on **very few of its variables**. This means for example that the **Jacobian** matrix of the equality constraints has **many zero entries**. But not only first order derivatives are sparse, also the second order derivative that we need in Newton-type optimization algorithms, namely the Hessian of the Lagrangian, is a very **sparse** matrix. This is due to the fact that the Lagrangian is a partially separable function.

::: warning Definition: Partial Separability
A function $f: \mathbb{R}^{n} \rightarrow \mathbb{R}$ is called **partially separable** if it can be decomposed as a sum of $m$ functions $f_{j}: \mathbb{R}^{n_{j}} \rightarrow \mathbb{R}$ with $n_{j}<n$ for all $j=1, \ldots, m$. This means that for each $j$ exists a subset $I_{j}$ of indices from $\{1, \ldots, n\}$ and subvectors $x_{I_{j}}$ of $x$ such that

$$
f(x)=\sum_{j=1}^{m} f_{j}\left(x_{I_{j}}\right) .
$$

:::

The Lagrangian function of the above optimization problem can explicitly be decomposed into subfunctions that each depend on some of the multipliers and only on the variables ( $\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}$ ) with the same index $k$. Let us collect again all variables in a vector $\boldsymbol{w}$ but decompose it as $ \boldsymbol{w}=\left(\boldsymbol{w}_{1}, \ldots, \boldsymbol{w}_{N}\right)$ with $\boldsymbol{w}_{k}= \left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)$ for $k=0, \ldots, N-1$ and $\boldsymbol{w}_{N}=\boldsymbol{x}_{N}$. Collecting all equality multipliers in a vector $\boldsymbol{\lambda}=\left(\boldsymbol{\lambda}_{1}, \ldots, \boldsymbol{\lambda}_{N}, \boldsymbol{\lambda}_{s}\right)$ and the inequality multipliers in a vector $\boldsymbol{\mu}=$ ( $\boldsymbol{\mu}_{0}, \ldots, \boldsymbol{\mu}_{N}$ ) we obtain for the Lagrangian

$$
\mathcal{L}(\boldsymbol{w}, \boldsymbol{\lambda}, \boldsymbol{\mu})=\sum_{k=0}^{N} \mathcal{L}_{k}\left(\boldsymbol{w}_{k}, \boldsymbol{\lambda}, \boldsymbol{\mu}\right)
$$

with the local Lagrangian subfunctions defined as follows. The first subfunction is given as

$$
\begin{aligned}
  &\mathcal{L}_{0}\left(\boldsymbol{w}_{0}, \boldsymbol{\lambda}, \boldsymbol{\mu}\right)\\
  =&r_{0}\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right)+\lambda_{1}^{\top} f_{0}\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right)+\boldsymbol{\mu}_{0}^{\top} b_{0}\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right)+\boldsymbol{\lambda}_{s}^{\top} s_{0}\left(\boldsymbol{x}_{0}, \boldsymbol{\alpha}_{0}\right).
\end{aligned}
$$

and for $k=1, \ldots, N-1$ we have the subfunctions

$$
\begin{align*}
  &\mathcal{L}_{k}\left(\boldsymbol{w}_{k}, \boldsymbol{\lambda}, \boldsymbol{\mu}\right)\\
  =&r_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+\boldsymbol{\lambda}_{k+1}^{\top} f_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)-\boldsymbol{\lambda}_{k}^{\top} \boldsymbol{x}_{k}+\boldsymbol{\mu}_{k}^{\top} b_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)+\boldsymbol{\lambda}_{s}^{\top} s_{k}\left(\boldsymbol{x}_{k}, \boldsymbol{\alpha}_{k}\right)
\end{align*}
$$

while the last subfunction is given as

$$
\mathcal{L}_{N}\left(\boldsymbol{w}_{N}, \boldsymbol{\lambda}, \boldsymbol{\mu}\right)=g\left(\boldsymbol{x}_{N}\right)-\boldsymbol{\lambda}_{N}^{\top} \boldsymbol{x}_{N}+\boldsymbol{\mu}_{N}^{\top} b_{N}\left(\boldsymbol{x}_{N}\right)+\boldsymbol{\lambda}_{s}^{\top} s_{N}\left(\boldsymbol{x}_{N}\right) .
$$

In fact, while each of the equality multipliers appears in several ( $\boldsymbol{\lambda}_{1}, \ldots, \boldsymbol{\lambda}_{N}$ ) or even all problem functions $\left(\boldsymbol{\lambda}_{r}\right)$, the primal variables of the problem do not have any overlap in the subfunctions. This leads to the remarkable observation that the Hessian matrix $\nabla_{\boldsymbol{w}}^{2} \mathcal{L}$ is **block diagonal**, i.e. it consists only of small symmetric matrices that are located on its diagonal. All other second derivatives are zero, i.e.

$$
\frac{\partial^{2} \mathcal{L}}{\partial \boldsymbol{w}_{i} \partial \boldsymbol{w}_{j}}(\boldsymbol{w}, \boldsymbol{\lambda}, \boldsymbol{\mu})=0, \quad \text { for any } \quad i \neq j .
$$

${ }^{1}$ Note that for notational beauty we omit here and in many other occasions the transpose signs that would be necessary to make sure that the collection of column vectors is again a column vector, when this is clear from the context.

This block diagonality of the Hessian leads to several very favourable facts, namely that 

- the Hessian can be approximated by high-rank or block updates within a Broyden-Fletcher-Goldfarb-Shanno (BFGS) method, and 
- the quadratic pogram (QP) subproblem in all Newton-type methods has the **same decomposable objective function** as the original optimal control problem itself.

### 6.3.2 The Sparse QP Subproblem
TBC
<!--
In order to analyse the sparsity structure of the optimal control problem, let us regard the quadratic subproblem that needs to be solved in one iteration of an exact Hessian SQP method. In order not to get lost in too many indices, we disregard the SQP iteration index completely. We regard the QP that is formulated at a current iterate ( $x, \lambda, \mu$ ) and use the SQP step $\Delta w=\left(\Delta x_{0}, \Delta \boldsymbol{\alpha}_{0}, \ldots, \Delta x_{N}\right)$ as the QP variable. This means that in the summarized formulation we would have the QP subproblem

$$
\begin{array}{cl}
\underset{\Delta w}{\operatorname{minimize}} & \nabla F(w)^{\top} \Delta w+\frac{1}{2} \Delta w^{\top} \nabla_{w}^{2} \mathcal{L}(w, \lambda, \mu) \Delta w \\
\text { subject to } & S(w)+\nabla S(w)^{\top} \Delta w=0 \\
& H(w)+\nabla H(w)^{\top} \Delta w \leq 0
\end{array}
$$

Let us now look at this QP subproblem in the detailed formulation. It is remarkably similar to the original OCP. To reduce notational overhead, let us define a few abbreviations: first, the diagonal blocks of the Hessian of the Lagrangian

$$
Q_{k}=\nabla_{w_{k}}^{2} \mathcal{L}(w, \lambda, \mu), \quad k=0, \ldots, N,
$$

second, the objective gradients

$$
g_{k}=\nabla_{(x, \alpha)} L\left(x_{k}, \boldsymbol{\alpha}_{k}\right), \quad k=0, \ldots, N-1, \quad \text { and } \quad g_{N}=\nabla_{x} E\left(x_{N}\right),
$$

third the system discontinuities (that can be non-zero in the simultaneous approach)

$$
a_{k}=f_{k}\left(x_{k}, \boldsymbol{\alpha}_{k}\right)-x_{k+1}, \quad k=0, \ldots, N-1,
$$

and fourth the transition matrices

$$
A_{k}=\frac{\partial f_{k}}{\partial x_{k}}\left(x_{k}, \boldsymbol{\alpha}_{k}\right), \quad B_{k}=\frac{\partial f_{k}}{\partial \boldsymbol{\alpha}_{k}}\left(x_{k}, \boldsymbol{\alpha}_{k}\right), \quad k=0, \ldots, N-1,
$$

fifth the residual of the coupled constraints

$$
r=\sum_{k=0}^{N-1} r_{k}\left(x_{k}, \boldsymbol{\alpha}_{k}\right)+r_{N}\left(x_{N}\right),
$$

as well as its derivatives

$$
R_{k}=\frac{\partial r_{k}}{\partial\left(x_{k}, \boldsymbol{\alpha}_{k}\right)}\left(x_{k}, \boldsymbol{\alpha}_{k}\right), \quad k=0, \ldots, N-1, \quad \text { and } \quad R_{N}=\frac{\partial r_{N}}{\partial x}\left(x_{N}\right),
$$

and last the inequality constraint residuals and their derivatives
$b_{k}=b_{k}\left(x_{k}, \boldsymbol{\alpha}_{k}\right), \quad H_{k}=\frac{\partial b_{k}}{\partial\left(x_{k}, \boldsymbol{\alpha}_{k}\right)}\left(x_{k}, \boldsymbol{\alpha}_{k}\right) \quad$ and $\quad b_{N}=b_{N}\left(x_{N}\right), \quad H_{N}=\frac{\partial b_{N}}{\partial x}\left(x_{N}\right)$.
With all the above abbreviations, the detailed form of the QP subproblem is finally given as follows.

$$
\begin{align*}
& \underset{\substack{\Delta x_{0}, \Delta \boldsymbol{\alpha}_{0}, \ldots, \Delta x_{N}}}{\operatorname{minimize}} \frac{1}{2} \sum_{k=0}^{N-1}\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right]^{\top} Q_{k}\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right]+\frac{1}{2} \Delta x_{N}^{\top} Q_{N} \Delta x_{N}+\sum_{k=0}^{N}\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right]^{\top} g_{k}+\Delta x_{N}^{\top} g_{N}  \tag{7.9a}\\
& \text { subject to } a_{k}+A_{k} \Delta x_{k}+B_{k} \Delta \boldsymbol{\alpha}_{k}-\Delta x_{k+1}=0, \quad k=0, \ldots, N-1,  \tag{7.9b}\\
& r+\sum_{k=0}^{N-1} R_{k}\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right]+R_{N} \Delta x_{N}=0,  \tag{7.9c}\\
& b_{k}+H_{k}\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right] \leq 0, \quad k=0, \ldots, N-1,  \tag{7.9d}\\
& b_{N}+H_{N} \Delta x_{N} \leq 0 . \tag{7.9e}
\end{align*}
$$

This is again an optimal control problem, but a linear-quadratic one. It is a convex QP if the Hessian blocks $Q_{k}$ are positive semidefinite, and can be solved by a variety of sparsity exploiting QP solvers.

#### Sparsity Exploitation in QP Solvers

When regarding the QP (7.9) one way would be to apply a sparse interior point QP solver like OOQP to it, or a sparse active set method. This can be very efficient. Another way would be to first reduce, or condense, the variable space of the QP, and then apply a standard dense QP solver to the reduced problem. Let us treat this way first.

## Condensing

When we regard the linearized dynamic system equations (7.9b) they correspond to an affine time variant system in the steps $\Delta x_{k}$, namely

$$
\begin{equation*}
\Delta x_{k+1}=a_{k}+A_{k} \Delta x_{k}+B_{k} \Delta \boldsymbol{\alpha}_{k} . \tag{7.10}
\end{equation*}
$$

If the values for $\Delta x_{0}$ as well as for all $\left\{\Delta \boldsymbol{\alpha}_{k}\right\}_{k=0}^{N-1}$ would be known, then also the values for $\left\{\Delta x_{k}\right\}_{k=1}^{N}$ can be obtained by a forward simulation of this linear system. Due to its linearity, the resulting map will be linear, i.e., we can write

$$
\begin{aligned}
{\left[\begin{array}{c}
\Delta x_{1} \\
\vdots \\
\Delta x_{N}
\end{array}\right] } & =v+M\left[\begin{array}{c}
\Delta x_{0} \\
\Delta \boldsymbol{\alpha}_{0} \\
\vdots \\
\Delta \boldsymbol{\alpha}_{N-1}
\end{array}\right] \\
& \Leftrightarrow \\
\Delta w_{\mathrm{dep}} & =v+M \Delta w_{\mathrm{ind}}
\end{aligned}
$$

with a vector $v \in \mathbb{R}^{N \cdot n_{x}}$ and a matrix $M \in \mathbb{R}^{\left(N \cdot n_{x}\right) \times\left(n_{x}+N \cdot n_{\alpha}\right)}$, and dividing the variables into a dependent and an independent part, $\Delta w=\left(\Delta w_{\text {dep }}, \Delta w_{\text {ind }}\right)$.

The vector $\nu$ can be generated recursively by simulating the affine dynamic system (7.10) with all inputs set to zero, i.e., $\Delta w_{\text {ind }}=0$. This yields the forward recursion

$$
v_{1}=a_{0}, \quad v_{k+1}=a_{k}+A_{k} v_{k}, \quad k=1, \ldots, N-1
$$

for the components of the vector $v=\left(v_{1}, \ldots, v_{N}\right)$. The subblocks of the matrix $M$ can be obtained recursively as well in a straightforward way. Note that the matrix is lower triangular because the states $\Delta x_{j}$ do not depend on $\Delta \boldsymbol{\alpha}_{k}$ if $k \geq j$. On the other hand, if $k<j$, the corresponding matrix blocks are $A_{j-1} \cdots A_{k+1} B_{k}$. Finally, the dependence of $\Delta x_{j}$ on $\Delta x_{0}$ is $A_{j-1} \cdots A_{0}$. In this way, all blocks of the matrix $M$ are defined.

To get a notationally different, but equivalent view on condensing, note that the linear dynamic system equations (7.9b) are nothing else than the linear system

$$
\left[\begin{array}{llllllll}
A_{0} & B_{0} & -\mathbb{I} & & & & & \\
& & A_{1} & B_{1} & -\mathbb{I} & & & \\
& & & & \ddots & & & \\
& & & & & A_{N-1} & B_{N-1} & -\mathbb{I}
\end{array}\right]\left[\begin{array}{c}
\Delta x_{0} \\
\Delta \boldsymbol{\alpha}_{0} \\
\Delta x_{1} \\
\Delta \boldsymbol{\alpha}_{1} \\
\Delta x_{2} \\
\vdots \\
\Delta x_{N-1} \\
\Delta \boldsymbol{\alpha}_{N-1} \\
\Delta x_{N}
\end{array}\right]=-\left[\begin{array}{c}
a_{0} \\
a_{1} \\
\vdots \\
a_{N}
\end{array}\right] .
$$

After reordering the variables into dependent and independent ones, this sys-
tem can be written as

$$
\left[\begin{array}{lllll|ccll}
A_{0} & B_{0} & & & & -\mathbb{I} & & & \\
& & B_{1} & & & A_{1} & -\mathbb{I} & & \\
& & & \ddots & & & \ddots & \ddots & \\
& & & & B_{N-1} & & & A_{N-1} & -\mathbb{I}
\end{array}\right]\left[\begin{array}{c}
\Delta x_{0} \\
\Delta \boldsymbol{\alpha}_{0} \\
\vdots \\
\Delta \boldsymbol{\alpha}_{N-1} \\
\Delta x_{1} \\
\vdots \\
\Delta x_{N}
\end{array}\right]=-\left[\begin{array}{c}
a_{0} \\
a_{1} \\
\vdots \\
a_{N}
\end{array}\right]
$$

which we can summarize as

$$
[X \mid Y]\left[\begin{array}{l}
\Delta w_{\mathrm{ind}} \\
\Delta w_{\mathrm{dep}}
\end{array}\right]=-a
$$

so that we get the explicit solution

$$
\Delta w_{\mathrm{dep}}=\underbrace{\left(-Y^{-1} a\right)}_{=v}+\underbrace{\left(-Y^{-1} X\right)}_{=M} \Delta w_{\mathrm{ind}}
$$

Note that the submatrix $Y$ is always invertible due the fact that it is lower triangular and has (negative) unit matrices on its diagonal.

Once the vector $v$ and matrix $M$ are computed, we can formulate a condensed $Q P$ which has only the independent variables $\Delta w_{\text {ind }}$ as degrees of freedom. This condensed QP can be solved by a dense QP solver, and the resulting solution $\Delta w_{\text {ind }}^{*}$ can be expanded again to yield also the QP solution for $w_{\text {dep }}^{*}=v+M \Delta w_{\text {ind }}^{*}$. The QP multipliers $\lambda_{\text {dep }}=\left(\lambda_{1}, \ldots, \lambda_{N}\right)$ for the constraints (7.9b) can be obtained from the dense QP solution in a slightly more complex way. The trick is to regard the Lagrangian of the original QP (7.9b), $\mathcal{L}^{\mathrm{QP}}\left(\Delta w_{\text {ind }}, \Delta w_{\text {dep }}, \lambda_{\text {dep }}, \lambda_{r}, \mu\right)$ and note that the condensed QP yields also the multipliers $\lambda_{r}^{*}, \mu^{*}$, which turn out to be the correct multipliers also for the uncondensed QP. Thus, the only missing quantity is $\lambda_{\text {dep }}^{*}$. It can be obtained by using the follwing two observations: first, for the true QP solution must hold that the Lagrange gradient is zero, also with respect to $\Delta w_{\text {dep }}$. Second, this Lagrange gradient depends linearly on the unknown multipliers $\lambda_{\text {dep }}$ which contribute to it via the term $Y^{\top} \lambda_{\text {dep }}$, i.e. we have

$$
\begin{aligned}
0 & =\nabla_{\Delta w_{\mathrm{dep}}} \mathcal{L}^{\mathrm{QP}}\left(\Delta w_{\mathrm{ind}}^{*}, \Delta w_{\mathrm{dep}}^{*}, \lambda_{\mathrm{dep}}^{*}, \lambda_{r}^{*}, \mu^{*}\right) \\
& =\nabla_{\Delta w_{\mathrm{dep}}} \mathcal{L}^{\mathrm{QP}}\left(\Delta w_{\mathrm{ind}}^{*}, \Delta w_{\mathrm{dep}}^{*}, 0, \lambda_{r}^{*}, \mu^{*}\right)+Y^{\top} \lambda_{\mathrm{dep}}^{*} .
\end{aligned}
$$

It is a favourable fact that the Lagrange gradient depends on the missing multipliers via the matrix $Y^{\top}$, because this matrix is invertible. Thus, we obtain an
explicit equation for obtaining the missing multipliers, namely

$$
\lambda_{\mathrm{dep}}^{*}=-Y^{-T} \nabla_{\Delta w_{\mathrm{dep}}} \mathcal{L}^{\mathrm{QP}}\left(\Delta w_{\mathrm{ind}}^{*}, \Delta w_{\mathrm{dep}}^{*}, 0, \lambda_{r}^{*}, \mu^{*}\right)
$$

Note that the multipliers would not be needed within a Gauss-Newton method.
Summarizing, condensing reduces the original QP to a QP that has the size of the QP in the sequential approach. Nearly all sparsity is lost, but the dimension of the QP is much reduced. Condensing is favourable if the horizon length $N$ and the control dimension $n_{\alpha}$ are relatively small compared to the state dimension $n_{x}$. If the initial value is fixed, then also $\Delta x_{0}$ can be eliminated from the condensed QP before passing it to a dense QP solver, further reducing the dimension.

On the other hand, if the state dimension $n_{x}$ is very small compared to $N \cdot n_{\alpha}$, condensing is not favourable due to the fact that it destroys sparsity. This is most easily seen in the Hessian. In the original sparse QP , the block sparse Hessian has $N\left(n_{x}+n_{\alpha}\right)^{2}+n_{x}^{2}$ nonzero elements. This is linear in $N$. In contrast to this, the condensed Hessian is dense and has $\left(n_{x}+N n_{\alpha}\right)^{2}$ elements, which is quadratic in $N$. Thus, if $N$ is large, not only might the condensed Hessian need more (!) storage than the original one, also the solution time of the QP becomes cubic in $N$ (factorization costs of the Hessian).

## Sparse KKT System

A different way to exploit the sparsity present in the QP (7.9) is to keep all variables in the problem and use within the QP solver linear algebra routines that exploit sparsity of matrices. This can be realized within both, interior point (IP) methods as well as in active set methods, but is much easier to illustrate at the example of IP methods. For illustration, let us assume a problem without coupled constraints (7.9c) and assume that all inequalities have been transformed into primal barrier terms that are added to the objective. Then, in each interior point iteration, an equality constrained QP of the following simple form needs to be solved.

$$
\begin{array}{r}
\underset{\substack{\Delta x_{0}, \Delta \boldsymbol{\alpha}_{0}, \ldots, \Delta x_{N}}}{\operatorname{minimize}} \quad \frac{1}{2} \sum_{k=0}^{N-1}\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right]^{\top}\left[\begin{array}{cc}
Q_{k}^{x} & Q_{k}^{x \alpha} \\
\left(Q_{k}^{x \alpha}\right)^{\top} & Q_{k}^{\alpha}
\end{array}\right]\left[\begin{array}{l}
\Delta x_{k} \\
\Delta \boldsymbol{\alpha}_{k}
\end{array}\right]+\frac{1}{2} \Delta x_{N}^{\top} Q_{N} \Delta x_{N} \\
+\sum_{k=0}^{N}\left[\begin{array}{l}
\Delta x_{N} \\
\Delta \boldsymbol{\alpha}_{N}
\end{array}\right]_{g k}^{\top}+\Delta x_{N}^{\top} g_{N} \tag{7.11}
\end{array}
$$

subject to $\quad a_{k}+A_{k} \Delta x_{k}+B_{k} \Delta \boldsymbol{\alpha}_{k}-\Delta x_{k+1}=0, \quad k=0, \ldots, N-1$.
Formulating the Lagrangian of this QP and differentiating it with respect to all its primal and dual variables $y=\left(\Delta x_{0}, \Delta \boldsymbol{\alpha}_{0}, \lambda_{1}, \Delta x_{1}, \Delta \boldsymbol{\alpha}_{1}, \ldots \lambda_{N}, \Delta x_{N}\right)$ in this order we obtain a linear system of the following block tridiagonal from

$$
\left[\begin{array}{cccccccccc}
Q_{0}^{x} & Q_{0}^{x \alpha} & A_{0}^{\top} & & & & & & & \\
\left(Q_{0}^{x \alpha}\right)^{\top} & Q_{0}^{\alpha} & B_{0}^{\top} & & & & & & & \\
A_{0} & B_{0} & 0 & -\mathbb{I} & & & & & & \\
& & -\mathbb{I} & Q_{1}^{x} & Q_{1}^{x \alpha} & A_{1}^{\top} & & & & \\
& & & \left(Q_{1}^{x \alpha}\right)^{\top} & Q_{1}^{\alpha} & B_{1}^{\top} & & & & \\
& & & A_{1} & B_{1} & 0 & -\mathbb{I} & & & \\
& & & & & -\mathbb{I} & & & & \\
& & & & & & \ddots & \ddots & & \\
& & & & & & A_{N-1} & B_{N-1} & 0 & -\mathbb{I} \\
& & & & & & & & -\mathbb{I} & Q_{N}
\end{array}\right]\left[\begin{array}{c}
\Delta x_{0} \\
\Delta \boldsymbol{\alpha}_{0} \\
\lambda_{1} \\
\Delta x_{1} \\
\Delta \boldsymbol{\alpha}_{1} \\
\lambda_{2} \\
\vdots \\
\lambda_{N} \\
\Delta x_{N}
\end{array}\right]=\left[\begin{array}{c}
* \\
* \\
* \\
* \\
* \\
* \\
* \\
* \\
*
\end{array}\right]
$$

This linear system can be solved with a banded direct factorization routine, whose runtime is proportional to $N\left(2 n_{x}+n_{\alpha}\right)^{3}$. We will see in the next chapter that a particularly efficient way to solve the above linear system can be obtained by applying the principle of dynamic programming to the equality constrained quadratic subproblem (7.11).

Summarizing, the approach to directly solve the sparse QP without condensing is advantageous if $N n_{\alpha}$ is large compared to $n_{x}$. It needs, however, sparse linear algebra routines within the QP solver. This is easier to implement in the case of IP methods than for active set methods. -->
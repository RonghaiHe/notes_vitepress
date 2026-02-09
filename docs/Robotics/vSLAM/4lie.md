# 4 李群和李代数

在SLAM中，除了表示外，还需要对其进行估计和优化。因为在SLAM中位姿是未知的，需要解决什么样的相机位姿最符合当前观测数据这样的问题。一种典型的方式是构建成一个优化问题，求解最优的$\mathbf{R}, \mathbf{T}$，使得误差最小化。

旋转矩阵自身带有约束（正交且行列式为1），作为优化变量时会引入额外的约束，使优化变得困难。通过李群-李代数间的转换关系，希望把位姿估计变成无约束的优化问题，简化求解方式。

## 4.1 李群和李代数基础

特殊正交群：

$$\mathrm{SO}(n) = \{\mathbf{R} \in \mathbb{R}^{n \times n}| \mathbf{R}\mathbf{R}^\top = \mathbf{I}, \mathrm{det}(\mathbf{R}) = 1\}$$

特殊欧氏群：

$$\mathrm{SE}(3) = \{\mathbf{T} = \left[
\begin{matrix}
  \mathbf{R} & \mathbf{T} \\
  \boldsymbol{0}^\top & 1\\
\end{matrix}\right] \in \mathbb{R}^{4\times 4}|\mathbf{R}\in \mathrm{SO}(3), \mathbf{T} \in \mathbb{R}^3\}$$

旋转矩阵和变换矩阵对于加法不封闭，但是对于乘法封闭。乘法对应着旋转或变换的复合。

### 4.1.1 群

群是一种集合加上一种运算的代数结构，满足：
- 封闭性
- 结合律
- 幺元
- 逆

旋转矩阵集合和矩阵乘法构成群，变换矩阵和矩阵乘法也构成群。

矩阵中常见的群：
- 一般线性群 $\mathrm{GL(n)}$ $n \times n$的可逆矩阵
- 特殊正交群
- 特殊欧氏群

李群是指具有连续（光滑）性质的群，像整数群那样离散的群没有连续性质，不是李群。特殊正交群和特殊欧氏群在实数空间上是连续的，都是李群。能够直观想象一个刚体连续在空间中运动。

### 4.1.2 李代数的引出

考虑任意旋转矩阵 $\mathbf{R}$ 满足：

$$\mathbf{R}\mathbf{R}^\top = \mathbf{I}$$

$\mathbf{R}$ 是某个相机的旋转，随时间连续变化，即为时间的函数 $\mathbf{R}(t)$：

$$\mathbf{R}(t)\mathbf{R}(t)^\top = \mathbf{I}$$

两边对时间求导，得到：

$$\dot{\mathbf{R}}(t)\mathbf{R}(t)^\top + \mathbf{R}(t)\dot{\mathbf{R}}(t)^\top= 0$$

$$\dot{\mathbf{R}}(t)\mathbf{R}(t)^\top = -\left[\dot{\mathbf{R}}(t)\mathbf{R}(t)^\top\right]^\top$$

可以看出， $\dot{\mathbf{R}}(t){\mathbf{R}}(t)^\top$ 是一个反对称矩阵。同理，对于任意反对称矩阵，也可以找到与之对应的向量，用 $^\vee$ 表示：

$$\dot{\mathbf{R}}(t)\mathbf{R}(t)^\top = \phi(t)^\wedge$$

$$\dot{\mathbf{R}}(t) = \phi(t)^\wedge \mathbf{R}(t)$$

设 $t_0 = 0$ ，并设此时旋转矩阵为 $\mathbf{R}(0) = \mathbf{I}$ 。按照导数定义，可以把 $\mathbf{R}(t)$ 在0附近进行一阶泰勒展开：

$$\mathbf{R}(t) \approx \mathbf{R}(t_0) + \dot{\mathbf{R}}(t_0)(t-t_0) = \mathbf{I} + \phi(t_0)^\wedge t$$

$\phi$ 反映了 $\mathbf{R}$ 的导数性质，称它在 $\mathrm{SO}(3)$ 原点附近的正切空间。同时在 $t_0$ 附近，设 $\phi$ 保持为常数 $\phi(t_0) = \phi_0$ ，有：

$$\dot{\mathbf{R}}(t) = \phi(t_0)^\wedge \mathbf{R}(t) = \phi_0^\wedge \mathbf{R}(t)$$

上式是一个关于 $\mathbf{R}$ 的微分方程，且知道初始值 $\mathbf{R}(0) = \mathbf{I}$ ，解得：

$$\mathbf{R}(t) = \exp(\phi_0^\wedge t)$$

不过，由于做了一定的假设，故只在 $t = 0$ 附近有效。旋转矩阵通过指数关系与另一个反对称矩阵发生了联系。

### 4.1.3 李代数的定义

每个李群都有与之对应的李代数。李代数描述了李群的局部性质。通用的李代数的定义如下：

李代数由一个集合 $\mathbb{V}$ ，一个数域 $\mathbb{F}$ 和一个二元运算（李括号） $[,]$  。若满足：

- 封闭性：$\forall \boldsymbol{X, Y} \in \mathbb{V}, [\boldsymbol{X, Y}] \in \mathbb{V}$

- 双线性：$\forall \boldsymbol{X, Y, Z} \in \mathbb{V}, a,b \in \mathbb{F},$
  $$[a\boldsymbol{X}+b\boldsymbol{Y}, \boldsymbol{Z}] = a[\boldsymbol{X}, \boldsymbol{Z}] + b[\boldsymbol{Y}, \boldsymbol{Z}], [\boldsymbol{Z},a\boldsymbol{X}+b\boldsymbol{Y}] = a[\boldsymbol{Z}, \boldsymbol{X}] + b[\boldsymbol{Z}, \boldsymbol{Y}]$$

- **自反性**：$\forall \boldsymbol{X} \in \mathbb{V}, [\boldsymbol{X}, \boldsymbol{X}] = \boldsymbol{0}$

- Jacobi等价：$\forall \boldsymbol{X, Y, Z} \in \mathbb{V},$

  $$[\boldsymbol{X}, [\boldsymbol{Y}, \boldsymbol{Z}]] + [\boldsymbol{Z}, [\boldsymbol{X}, \boldsymbol{Y}]] + [\boldsymbol{Y}, [\boldsymbol{Z}, \boldsymbol{X}]] = \boldsymbol{0}$$

李括号表达了两个元素的差异。它不要求结合律，而要求元素和自己做李括号之后为零的性质。

三维空间中定义的叉积是一种李括号， $\mathfrak{g} = (\mathbb{R}^3, \mathbb{R}, \times)$ 构成一个李代数。

### 4.1.4 李代数 $\mathfrak{so}(3)$

之前提到的 $\phi$ ，事实上是一种李代数。$\mathrm{SO}(3)$ 对应的李代数是定义在 $\mathbb{R}^3$ 上的向量，记作 $\phi$ 。每个 $\phi$ 都可以生成一个反对称矩阵 $\Phi$ 。

在此定义下，两个向量 $\phi_1, \phi_2$ 的李括号为：

$$[\phi_1, \phi_2] = (\boldsymbol{\Phi}_1\boldsymbol{\Phi}_2-\boldsymbol{\Phi}_2\boldsymbol{\Phi}_1)^\vee $$

$\mathfrak{so}(3)$的元素是3维向量或者3维反对称矩阵：

$$\mathfrak{so}(3) = \{\phi \in \mathbb{R}^3, \Phi = \phi^\wedge \in \mathbb{R}^{3\times 3}\}$$

$\mathfrak{so}(3)$是一个由三维向量组成的集合，每个向量对应到一个反对称矩阵，可以表达**旋转矩阵的导数**。它与 $\mathrm{SO}(3)$的关系由指数映射给定：

$$\mathbf{R} = \exp(\phi^\wedge)$$

### 4.1.5 李代数 $\mathfrak{se}(3)$

对于 $\mathrm{SE}(3)$ ，也有相应的李代数 $\mathfrak{se}(3)$ ，是一个6维向量：前3维为平移，后3维为旋转。

$$\mathfrak{se}(3) = \{\boldsymbol{\xi} = \left[\begin{matrix}
  \boldsymbol{\rho} \\
  \boldsymbol{\phi} \\
\end{matrix}\right] \in \mathbb{R}^6, \boldsymbol{\rho} \in \mathbb{R}^3, \boldsymbol{\phi} \in \mathfrak{so}(3), \boldsymbol{\xi}^\wedge = \left[\begin{matrix}
  \boldsymbol{\phi}^\wedge & \boldsymbol{\rho} \\
  \boldsymbol{0}^\top & 0 \\
\end{matrix}\right] \in \mathbb{R}^{4 \times 4}\}$$

此处拓展了^的含义。

李代数 $\mathfrak{se}(3)$ 也有类似的李括号：

$$[\boldsymbol{\xi}_1, \boldsymbol{\xi}_2] = (\boldsymbol{\xi}_1^\wedge\boldsymbol{\xi}_2^\wedge-\boldsymbol{\xi}_2^\wedge\boldsymbol{\xi}_1^\wedge)^\vee $$

## 4.2 指数与对数映射
### 4.2.1 $\mathrm{SO}(3)$上的指数映射

计算$\exp(\phi ^\wedge)$

通过泰勒展开写出，即：

$$\exp(\phi^\wedge) = \sum_{n=0}^\infty \frac{1}{n!}(\phi^\wedge)^n$$

令$\phi = \theta \boldsymbol{a}$，这里$\boldsymbol{a}$为长度为1的方向向量。有以下两条性质：

- $$\boldsymbol{a}^\wedge\boldsymbol{a}^\wedge = \boldsymbol{a}\boldsymbol{a}^\top-\mathbf{I}$$

- $$\boldsymbol{a}^\wedge\boldsymbol{a}^\wedge\boldsymbol{a}^\wedge = -\boldsymbol{a}^\wedge$$

推导得到：

$$\exp(\phi^\wedge) = \cos\theta\mathbf{I}+(1-\cos\theta)\boldsymbol{a}\boldsymbol{a}^\top+\sin\theta\boldsymbol{a}^\wedge$$

此公式和罗德里格斯公式如出一辙。这表明，$\mathfrak{so}(3)$ 实际上就是由所谓的**旋转向量**组成的空间

定义对数映射，也可以把 $\mathrm{SO}(3)$ 中的元素对应到 $\mathfrak{so}(3)$ 中

指数映射只是一个**满射**，可能存在多个 $\mathfrak{so}(3)$ 中的元素对应到同一个 $\mathrm{SO}(3)$。至少对于旋转角 $\theta$，多转一圈和没有多转对于旋转矩阵是没有区别的。如果把旋转角度固定在 $\pm \pi$，李群和李代数是一一对应的。

### 4.2.2 $\mathrm{SE}(3)$上的指数映射

$$
  \exp(\boldsymbol{\xi}^\wedge) = \left[
  \begin{matrix}
    \sum\limits_{n=0}^\infty\frac{1}{n!}(\boldsymbol{\phi}^\wedge)^n & \sum\limits_{n=0}^\infty\frac{1}{(n+1)!}(\boldsymbol{\phi}^\wedge)^n \boldsymbol{\rho} \\
    \boldsymbol{0}^\top & 1 \\
  \end{matrix}
  \right]
  =\left[\begin{matrix}
  \mathbf{R} & \boldsymbol{J\rho} \\
  \boldsymbol{0}^\top & 1 \\
\end{matrix}\right] = \mathbf{T}$$

其中，

$$\boldsymbol{J} = \frac{\sin\theta}{\theta}\mathbf{I}+(1-\frac{\sin\theta}{\theta})\boldsymbol{a}\boldsymbol{a}^\top+\frac{1-\cos\theta}{\theta}\boldsymbol{a}^\wedge$$

附：$\boldsymbol{J}\to\mathbf{R}$

$$
\begin{aligned}
  \mathbf{R} &= \sum_{n=0}^\infty\frac{1}{n!}(\boldsymbol{\phi}^\wedge)^n = \sum_{n=1}^\infty\frac{1}{n!}(\boldsymbol{\phi}^\wedge)^n + \mathbf{I} \\
  &= \sum_{n=0}^\infty\frac{1}{(n+1)!}(\boldsymbol{\phi}^\wedge)^{n+1} + \mathbf{I} \\
  &= \boldsymbol{\phi}^\wedge\sum_{n=0}^\infty\frac{1}{(n+1)!}(\boldsymbol{\phi}^\wedge)^{n} + \mathbf{I} \\
  &= \boldsymbol{\phi}^\wedge\boldsymbol{J}+\mathbf{I}\\
  &= \sin\theta\boldsymbol{a}^\wedge + (1-\cos\theta)\boldsymbol{a}^\wedge\boldsymbol{a}^\wedge
\end{aligned}
$$

由于 $\boldsymbol{\phi}^\wedge$ 不是满秩矩阵，所以反过来不行

<figure>
   <img src="/Robotics/vSLAM/lie_group_algebra-4-2-1.jpg" alt="Motion of rigid body" width="100%" align="center">
   <figcaption> Figure 1: 李群和李代数的关系.</figcaption>
</figure>

## 4.3 BCH公式与扰动模型
### 4.3.1 BCH公式与近似形式

BCH公式：

$$\ln(\exp(\boldsymbol{A})\exp(\boldsymbol{B})) = \boldsymbol{A}+\boldsymbol{B}+\frac{1}{2}[\boldsymbol{A}, \boldsymbol{B}]+\frac{1}{12}[\boldsymbol{A}, [\boldsymbol{A}, \boldsymbol{B}]]-\frac{1}{12}[\boldsymbol{B}, [\boldsymbol{A}, \boldsymbol{B}]]+...$$

当处理2个矩阵指数之积时，产生一些由李括号组成的余项。当$\phi_1$或$\phi_2$为小量时，二次以上的项都可以被忽略掉。BCH有线性近似表达：

$$\ln(\exp(\phi_1^\wedge)\exp(\phi_2^\wedge))^\vee  \approx \left\{
  \begin{matrix}
    \boldsymbol{J}_l(\phi_2)^{-1}\phi_1+\phi_2 & \phi_1 \approx 0 \\
    \boldsymbol{J}_r(\phi_1)^{-1}\phi_2+\phi_1 & \phi_2 \approx 0 \\
  \end{matrix} \right.$$

对一个旋转矩阵左乘一个微小旋转矩阵，**可以近似看作在原有的李代数加上一项**。注意左乘近似和右乘近似。

$$
\begin{aligned}
  &\boldsymbol{J}_l = \boldsymbol{J} = \frac{\sin\theta}{\theta}\mathbf{I}+(1-\frac{\sin\theta}{\theta})\boldsymbol{a}\boldsymbol{a}^\top+\frac{1-\cos\theta}{\theta}\boldsymbol{a}^\wedge \\
  &\boldsymbol{J}_l^{-1} = \frac{\theta}{2}\cot\frac{\theta}{2}\mathbf{I}+(1-\frac{\theta}{2}\cot\frac{\theta}{2})\boldsymbol{a}\boldsymbol{a}^\top-\frac{\theta}{2}\boldsymbol{a}^\wedge\\
  &\boldsymbol{J}_r(\phi) = \boldsymbol{J}_l(-\phi)  
\end{aligned}
$$

BCH近似的意义：

$$
\begin{aligned}
  &\exp(\Delta \phi^\wedge)\exp(\phi^\wedge) = \exp((\boldsymbol{J}_l^{-1}(\phi)\Delta \phi+\phi)^\wedge) \\
  &\exp((\phi+\Delta \phi)^\wedge) = \exp((\boldsymbol{J}_l\Delta \phi)^\wedge)\exp(\phi^\wedge) =  \exp(\phi^\wedge)\exp((\boldsymbol{J}_r\Delta \phi)^\wedge)
\end{aligned}
$$


对于 $\mathrm{SE}(3)$，有类似的公式，其中近似雅可比不同。

$\mathcal{J}$

### 4.3.2 $\mathrm{SO}(3)$李代数上的求导

对于李代数求导有很强的实际背景。不妨设小robot在某个时刻的位姿为 $\mathbf{T}$，它观察到了一个世界坐标位于 $\boldsymbol{p}$ 的点，产生了一个观测数据 $\boldsymbol{z}$。由坐标变换关系：

$$\boldsymbol{z} = \mathbf{T}\boldsymbol{p}+\boldsymbol{w}$$

由于观测噪声 $\boldsymbol{w}$ 的存在，$\boldsymbol{z}$ 不可能精确满足 $\boldsymbol{z} = \mathbf{T}\boldsymbol{p}$ 的关系。通常会计算立项的观测与实际数据的误差：

$$\boldsymbol{e} = \boldsymbol{z}-\mathbf{T}\boldsymbol{p}$$

假设一共有 $N$ 个这样的路标点和观测，就有 $N$ 个上式。对小robot的位姿估计，相当于寻找一个最优的 $\mathbf{T}$，使得整体误差最小化：

$$\min_{\mathbf{T}}J(\mathbf{T}) = \sum_{i=1}^N ||\boldsymbol{z}_i-\mathbf{T}\boldsymbol{p}_i||^2$$

求解此问题需要计算目标函数 $J$ 关于变换矩阵 $\mathbf{T}$ 的导数。我们经常会构建并讨论与位姿有关的函数，以调整当前的估计值。

使用李代数解决求导问题的思路恩分为2种：

1. 用李代数表示姿态，根据李代数加法对李代数求导
2. 对李群左乘或右乘微小扰动，对该扰动求导

### 4.3.3 李代数求导

考虑一个空间点 $\boldsymbol{p}$，对其进行旋转

$$\begin{aligned}
  \frac{\partial (\exp(\phi^\wedge)\boldsymbol{p})}{\partial \phi} &= \lim_{\delta \phi \rightarrow 0} \frac{\exp((\phi+\delta \phi)^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\delta \phi} \\
  &= \lim_{\delta \phi \rightarrow 0} \frac{\exp((\boldsymbol{J}_l\delta \phi)^\wedge)\exp(\phi^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\delta \phi} \\
  &\approx \lim_{\delta \phi \rightarrow 0} \frac{(\mathbf{I}+(\boldsymbol{J}_l\delta \phi)^\wedge)\exp(\phi^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\delta \phi} \\
  &= \lim_{\delta \phi \rightarrow 0} \frac{(\boldsymbol{J}_l\delta \phi)^\wedge\exp(\phi^\wedge)\boldsymbol{p}}{\delta \phi} \\
  &= \lim_{\delta \phi \rightarrow 0} \frac{-(\exp(\phi^\wedge)\boldsymbol{p})^\wedge\boldsymbol{J}_l\delta \phi^\wedge}{\delta \phi} = -(\mathbf{R}\boldsymbol{p})^\wedge\boldsymbol{J}_l
\end{aligned}$$

其中第2行 BCH 线性近似，第3行泰勒展开舍去高阶项后的近似，第4-第5行将反对称符号看作叉积，交换之后变号。

### 4.3.4 扰动模型

另一种求导方式是对 $\mathbf{R}$ 进行一次扰动 $\Delta \mathbf{R}$，可左乘也可以右乘。以**左扰动**为例，设左扰动 $\Delta \mathbf{R}$ 对应的李代数为 $\varphi$。对 $\varphi$ 求导：

$$
\begin{aligned}
  \frac{\partial \mathbf{R}\boldsymbol{p}}{\partial \varphi} &= \lim_{\varphi \rightarrow 0} \frac{\exp(\varphi^\wedge)\exp(\phi^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\varphi} \\
  &\approx \lim_{\varphi \rightarrow 0} \frac{(\mathbf{I}+\varphi^\wedge)\exp(\phi^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\varphi} \\
  &= \lim_{\varphi \rightarrow 0} \frac{\varphi^\wedge\mathbf{R}\boldsymbol{p}}{\varphi} = \lim_{\varphi \rightarrow 0} \frac{-(\mathbf{R}\boldsymbol{p})^\wedge\varphi}{\varphi} = -(\mathbf{R}\boldsymbol{p})^\wedge
\end{aligned}
$$

设右扰动 $\Delta \mathbf{R}$ 对应的李代数为 $\varphi$：

$$
\begin{aligned}
  \frac{\partial \boldsymbol{Rp}}{\partial \varphi} &= \lim_{\varphi \rightarrow 0} \frac{\exp(\phi^\wedge)\exp(\varphi^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\varphi} \\
  &\approx \lim_{\varphi \rightarrow 0} \frac{\exp(\phi^\wedge)(\mathbf{I}+\varphi^\wedge)\boldsymbol{p}-\exp(\phi^\wedge)\boldsymbol{p}}{\varphi} \\
  &= \lim_{\varphi \rightarrow 0} \frac{\mathbf{R}\varphi^\wedge\boldsymbol{p}}{\varphi} = \lim_{\varphi \rightarrow 0} \frac{-\boldsymbol{Rp}^\wedge\varphi}{\varphi} = -\boldsymbol{Rp}^\wedge
\end{aligned}
$$

### 4.3.5 SE(3) 上的李代数求导
假设某空间点 $\boldsymbol{p}$ 经过一次变换 $\mathbf{T}$ （对应李代数为 $\boldsymbol{\xi}$），得到 $\mathbf{T}\boldsymbol{p}$ （空间点是齐次坐标的形式）。现在给 $\mathbf{T}$ 一个左乘扰动，$\Delta \mathbf{T} = \exp(\delta \boldsymbol{\xi}^\wedge)$ ，设扰动项的李代数为 $\delta\boldsymbol{\xi}=[\delta\boldsymbol{\rho}, \, \delta\boldsymbol{\phi}]^\top$ ，则：

$$
\begin{aligned}
  \frac{\partial \boldsymbol{Tp}}{\partial \delta\boldsymbol{\xi}} &= \lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{\exp\left(\delta\boldsymbol{\xi}^{\wedge}\right)\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}-\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}}{\delta\boldsymbol{\xi}}\\
   & =\lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{\left(\mathbf{I}+\delta\boldsymbol{\xi}^{\wedge}\right)\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}-\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}}{\delta\boldsymbol{\xi}} \\
 & =\lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{\delta\boldsymbol{\xi}^{\wedge}\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}}{\delta\boldsymbol{\xi}} \\
 & =\lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{
\begin{bmatrix}
\delta\boldsymbol{\phi}^\wedge & \delta\boldsymbol{\rho} \\
 \\
\mathbf{0}^\mathrm{T} & 0
\end{bmatrix}
\begin{bmatrix}
\mathbf{R}\boldsymbol{p}+\mathbf{T} \\
 \\
1
\end{bmatrix}}{\delta\boldsymbol{\xi}} \\
 & =\lim_{\delta\boldsymbol{\xi}\to\boldsymbol{0}}\frac{
\begin{bmatrix}
\delta\boldsymbol{\phi}^\wedge\left(\mathbf{R}\boldsymbol{p}+\mathbf{T}\right)+\delta\boldsymbol{\rho} \\
 \\
\mathbf{0}^\mathrm{T}
\end{bmatrix}}{[\delta\boldsymbol{\rho},\delta\boldsymbol{\phi}]^\mathrm{T}}=
\begin{bmatrix}
\mathbf{I} & -\left(\mathbf{R}\boldsymbol{p}+\mathbf{T}\right)^\wedge \\
 \\
\boldsymbol{0}^\mathrm{T} & \boldsymbol{0}^\mathrm{T}
\end{bmatrix}\overset{\mathrm{def}}{\operatorname*{=}}\left(\mathbf{T}\boldsymbol{p}\right)^\odot.
\end{aligned}
$$

将最后的结果定义成算符 $\odot$：将一个齐次的空间坐标点变换成一个 4x6 的矩阵，需要解释下矩阵求导的规则：

$$\frac{\mathrm{d}
\begin{bmatrix}
\boldsymbol{a} \\ \boldsymbol{b}
\end{bmatrix}}{\mathrm{d}
\begin{bmatrix}
\boldsymbol{x} \\ \boldsymbol{y}
\end{bmatrix}}=\left(\frac{\mathrm{d}[\boldsymbol{a},\boldsymbol{b}]^\mathrm{T}}{\mathrm{d}
\begin{bmatrix}
\boldsymbol{x} \\ \boldsymbol{y}
\end{bmatrix}}\right)^\mathrm{T}= 
\begin{bmatrix}
\frac{\mathrm{d}\boldsymbol{a}}{\mathrm{d}\boldsymbol{x}} & \frac{\mathrm{d}\boldsymbol{b}}{\mathrm{d}\boldsymbol{x}} \\ 
\frac{\mathrm{d}\boldsymbol{a}}{\mathrm{d}\boldsymbol{y}} & \frac{\mathrm{d}\boldsymbol{b}}{\mathrm{d}\boldsymbol{y}}
\end{bmatrix}^\mathrm{T}$$

右扰动如下：
$$
\begin{aligned}
  \frac{\partial \boldsymbol{Tp}}{\partial \delta\boldsymbol{\xi}} &= \lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{\exp\left(\boldsymbol{\xi}^{\wedge}\right)\exp\left(\delta\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}-\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}}{\delta\boldsymbol{\xi}}\\
   & =\lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{\exp\left(\boldsymbol{\xi}^{\wedge}\right)\left(\mathbf{I}+\delta\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}-\exp\left(\boldsymbol{\xi}^{\wedge}\right)\boldsymbol{p}}{\delta\boldsymbol{\xi}} \\
 & =\lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{\exp\left(\boldsymbol{\xi}^{\wedge}\right)\delta\boldsymbol{\xi}^{\wedge}\boldsymbol{p}}{\delta\boldsymbol{\xi}} \\
 & =\lim_{\delta\boldsymbol{\xi}\to\mathbf{0}}\frac{
\begin{bmatrix}
\mathbf{R} & \mathbf{T} \\
 \\
\mathbf{0}^\mathrm{T} & 1
\end{bmatrix}
\begin{bmatrix}
\delta\boldsymbol{\phi}^\wedge & \delta\boldsymbol{\rho} \\
 \\
\mathbf{0}^\mathrm{T} & 0
\end{bmatrix}\boldsymbol{p}}{\delta\boldsymbol{\xi}} \\
 & =\lim_{\delta\boldsymbol{\xi}\to\boldsymbol{0}}\frac{
\begin{bmatrix}
\mathbf{R}\delta\boldsymbol{\phi}^\wedge\boldsymbol{p}_{(0:3)} + \mathbf{R}\delta\boldsymbol{\rho} \\
\mathbf{0}^\mathrm{T}
\end{bmatrix}}{[\delta\boldsymbol{\rho},\delta\boldsymbol{\phi}]^\mathrm{T}}=
\begin{bmatrix}
\mathbf{R} & -\mathbf{R}\boldsymbol{p}_{(0:3)}^\wedge \\
 \\
\boldsymbol{0}^\mathrm{T} & \boldsymbol{0}^\mathrm{T}
\end{bmatrix}.
\end{aligned}
$$

### 4.4.2 评估轨迹的误差

实际工程中经常需要评估一个算法的估计轨迹与真实轨迹的差异来评价算法的精度。真实轨迹往往通过某些更高精度的系统获得，而估计的轨迹则是由待评价的算法计算得到的。

误差指标可以有很多种，常见的有绝对轨迹误差 $\mathrm{ATE}$：

$$\mathrm{ATE}_{all} = \sqrt{\frac{1}{N}\sum_{i=1}^N ||\log (\mathbf{T}_{gt, i}^{-1}\mathbf{T}_{esti, i})^\vee||_2^2}$$

这实际上是每个位姿李代数的均方根误差 RMSE 。这种误差可以刻画两条轨迹的旋转和平移误差。

也有文献仅考虑平移误差，因为从整条轨迹上看，旋转出现误差后，随后的轨迹在平移上也会出现误差。定义绝对平移误差：

$$\mathrm{ATE}_{trans} = \sqrt{\frac{1}{N}\sum_{i=1}^N ||trans (\mathbf{T}_{gt, i}^{-1}\mathbf{T}_{esti, i})||_2^2}$$

除此，也可以定义相对的误差。例如，考虑 $i$ 时刻到 $i+\Delta t$ 时刻的运动，那相对位姿误差 $\mathrm{RPE}$ 可定义为：

$$\mathrm{RPE}_{all} = \sqrt{\frac{1}{N - \Delta t}\sum_{i=1}^{N - \Delta t} ||\log ((\mathbf{T}_{gt, i}^{-1} \mathbf{T}_{gt, i + \Delta t})^{-1}(\mathbf{T}_{esti, i}^{-1}\mathbf{T}_{esti, i + \Delta t}))^\vee||_2^2}$$

同样的，也可以只取平移部分。

$$\mathrm{RPE}_{trans} = \sqrt{\frac{1}{N - \Delta t}\sum_{i=1}^{N - \Delta t} ||trans((\mathbf{T}_{gt, i}^{-1} \mathbf{T}_{gt, i + \Delta t})^{-1}(\mathbf{T}_{esti, i}^{-1}\mathbf{T}_{esti, i + \Delta t}))||_2^2}$$

## 4.5* 相似变换群与李代数

在单目视觉中使用相似变换群 $\mathrm{Sim}(3)$，以及对应的李代数
$\mathfrak{sim}(3)$ 。如果你只对双目 SLAM 或 RGBD-SLAM 感兴趣,可以跳过本节。

单目具有尺度不确定性，如果在单目 SLAM 中使用 $SE(3)$ 表示位姿,那
么由于尺度不确定性与尺度漂移,整个 SLAM 过程中的尺度会发生变化,这在  $SE(3)$ 中未能体现出来。因此,在单目情况下我们一般会显式地把尺度因子表达出来。用数学语言来说,对于位于空间的点 $\boldsymbol{p}$ ,在相机坐标系下要经过一个**相似变换**,而非欧氏变换:

$$\boldsymbol{p}' = \begin{bmatrix*}
    s\mathbf{R} & \mathbf{T} \\
    \boldsymbol{0}^\top & 1 \\
\end{bmatrix*} \boldsymbol{p} = s\mathbf{R}\boldsymbol{p} + \mathbf{T}$$

在相似变换中,我们把尺度 $s$ 表达了出来。它同时作用在 $\boldsymbol{p}$ 的三个坐标之上,对 $\boldsymbol{p}$ 进行了一次缩放。与 $\mathrm{SO}(3)$ 、$\mathrm{SE}(3)$ 相似,相似变换亦对矩阵乘法构成群,称为相似变换群 $\mathrm{Sim}(3)$ ：

$$\mathrm{Sim}(3) = \left\{\mathbf{S} = \begin{bmatrix*}
    s\mathbf{R} & \mathbf{T} \\
    \boldsymbol{0}^\top & 1 \\
\end{bmatrix*} \in \mathbb{R}^{4 \times 4} \right\}$$

同样地, $\mathrm{Sim}(3)$ 也有对应的李代数、指数映射、对数映射等等。李代数 $\mathfrak{sim}(3)$ 元素是一个七维向量 $\boldsymbol{\zeta}$ 。它的前六维与 $\mathfrak{se}(3)$ 相同,最后多了一项 $\sigma$。

$$\mathfrak{sim}(3) = \left\{\boldsymbol{\zeta}| \boldsymbol{\zeta} = \begin{bmatrix*}
    \boldsymbol{\rho} \\
    \boldsymbol{\phi} \\
    \sigma \\
\end{bmatrix*} \in \mathbb{R}^{7},  \boldsymbol{\zeta}^\wedge = \begin{bmatrix*}
    \sigma \mathbf{I} + \boldsymbol{\phi}^\wedge & \boldsymbol{\rho} \\
    \boldsymbol{0}^\top & 0 \\
\end{bmatrix*} \in \mathbb{R}^{4 \times 4} \right\}$$

它比 $\mathfrak{se}(3)$ 多了一项 $\sigma$ 。关联 $Sim(3)$ 和 $\mathfrak{sim}(3)$ 的仍是指数映射和对数映射。指数映射为:

$$\exp (\boldsymbol{\zeta}^\wedge) = \begin{bmatrix*}
    e^\sigma \exp(\boldsymbol{\phi}^\wedge) & \boldsymbol{J}_s \boldsymbol{\rho} \\
    \boldsymbol{0}^\top & 1 \\
\end{bmatrix*}$$

$$\boldsymbol{J}_s = \frac{e^\sigma - 1}{\sigma} \mathbf{I} + \frac{\sigma e^\sigma \sin\theta + (1-e^\sigma \cos\theta)\theta}{\sigma^2 + \theta^2}\boldsymbol{a}^\wedge + (\frac{(e^\sigma \cos\theta - 1)\sigma + (e^\sigma \sin\theta)\theta}{\sigma^2 + \theta^2})\boldsymbol{a}^\wedge \boldsymbol{a}^\wedge$$

通过指数映射,我们能够找到李代数与李群的关系。对于李代数元素 $\boldsymbol{\zeta}$ ,它与李群的对应关系为:

$$s = e^\sigma, \mathbf{R} = \exp(\boldsymbol{\phi}^\wedge), \mathbf{T} = \boldsymbol{J}_s \boldsymbol{\rho}$$

旋转部分和 $\mathrm{SO}(3)$ 是一致的。平移部分，在 $\mathfrak{se}(3)$ 中需要乘一个雅可比，而相似变换的雅可比更复杂一些。对于尺度因子，可以看到李群中的 $s$ 即为李代数中 $\sigma$ 的指数函数。

$\mathrm{Sim}(3)$ 的 BCH 近似与 $\mathrm{SE}(3)$ 是类似的。我们可以讨论一个点 $\boldsymbol{p}$ 经过相似变换 $\mathbf{S}\boldsymbol{p}$ 后,相对于  $\mathbf{S}$ 的导数。同样的,存在微分模型和扰动模型两种方式,而扰动模型较为简单。我们省略推导过程,直接给出扰动模型的结果。设给予 $\mathbf{S}\boldsymbol{p}$ 左侧一个小扰动 $\exp (\boldsymbol{\zeta}^\wedge)$ ,并求 $\mathbf{S}\boldsymbol{p}$ 对于扰动的导数。因为 $\mathbf{S}\boldsymbol{p}$ 四维的齐次坐标， $\boldsymbol{\zeta}$ 是七维向量,该导数应该是 $4 \times 7$ 的雅可比。为了方便起见,记 $\mathbf{S}\boldsymbol{p}$ 的前三维组成向量 $\boldsymbol{q}$ ，那么:

$$\frac{\partial \mathbf{S}\boldsymbol{p}}{\partial \boldsymbol{\zeta}} = \begin{bmatrix*}
    \mathbf{I} & -\boldsymbol{q}^\wedge & \boldsymbol{q} \\
    \boldsymbol{0}^\top & \boldsymbol{0}^\top & 0 \\
\end{bmatrix*}$$

## 4.6 习题

5. 证明

$$\mathbf{R}\boldsymbol{p}^\wedge\mathbf{R}^\top = (\mathbf{R}\boldsymbol{p})^\wedge$$

pf: 
$$\begin{aligned}
  &\mathbf{R}\boldsymbol{p}^\wedge\mathbf{R}^\top  = (\boldsymbol{Rp})^\wedge\\
  \iff& \mathbf{R}\boldsymbol{p}^\wedge  = (\boldsymbol{Rp})^\wedge\mathbf{R} \\
  \iff& \forall \boldsymbol{u} \in \mathbb{R}^3, \mathbf{R}\boldsymbol{p}^\wedge \boldsymbol{u} = (\boldsymbol{Rp})^\wedge\mathbf{R}\boldsymbol{u}\\
  \iff& \forall \boldsymbol{u} \in \mathbb{R}^3, \mathbf{R}(\boldsymbol{p} \times \boldsymbol{u}) = (\boldsymbol{Rp})\times(\mathbf{R}\boldsymbol{u}) \\
\end{aligned}$$ 

根据向量叉乘的旋转变换不变性，可知上式成立。

⼏何角度来理解：两个向量 $\boldsymbol{v},\boldsymbol{u}$，其叉乘得到⼀个与 $\boldsymbol{v},\boldsymbol{u}$ 两者垂直的三维向量 $(\boldsymbol{v} \times \boldsymbol{u})$，将这三个向量都经过同⼀个旋转，它们的相对位姿和模长都不会改变。

6. 证明

$$\mathbf{R}\exp(\boldsymbol{p}^\wedge)\mathbf{R}^\top = \exp\left[(\mathbf{R}\boldsymbol{p})^\wedge\right]$$

该式称为 $\mathrm{SO}(3)$ 上的伴随性质。

$$pf: \begin{aligned}
  & \mathbf{R}\exp(\boldsymbol{p}^\wedge)\mathbf{R}^\top \\
  =& \mathbf{R}(\mathbf{I} + \delta\boldsymbol{p}^\wedge + \frac{1}{2!}(\delta\boldsymbol{p}^\wedge)^2 + ...)\mathbf{R}^\top \\
  =& \mathbf{I} + \mathbf{R}\delta\boldsymbol{p}^\wedge\mathbf{R}^\top + \frac{1}{2!}\mathbf{R}(\delta\boldsymbol{p}^\wedge)^2\mathbf{R}^\top + ... \\
  =& \mathbf{I} + (\mathbf{R}\delta\boldsymbol{p})^\wedge + \frac{1}{2!}[\mathbf{R}(\delta\boldsymbol{p}^\wedge)\mathbf{R}^\top](\mathbf{R}(\delta\boldsymbol{p}^\wedge)\mathbf{R}^\top) + ... \\
  =& \exp[(\boldsymbol{Rp})^\wedge]
\end{aligned}$$ 

因此，有如下公式，在预积分中大放异彩（流形的交换律）：

$$\exp(\vec{\phi})\mathbf{R} = \mathbf{R} \exp(\mathbf{R}^\top\vec{\phi})$$

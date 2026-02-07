# 第3讲 三维空间刚体运动
## 3.1 旋转矩阵
### 3.1.1 点和向量，坐标系

点和点之间可以组成向量。点本身可以由原点指向它的向量来描述。和坐标不同，是空间中的一样东西。

坐标是向量在坐标系下的表示

向量：
$$\boldsymbol{a} = [\boldsymbol{e}_1, \boldsymbol{e}_2, \boldsymbol{e}_3]\left[
\begin{matrix}
  a_1 \\
  a_2 \\
  a_3 \\
\end{matrix}\right] = a_1\boldsymbol{e}_1+a_2\boldsymbol{e}_2+a_3\boldsymbol{e}_3$$

坐标系：由3个正交的轴组成，构成线性空间的一组基。

通过叉乘来确定z轴：左手系（`Unity`、`Direct3D`）和右手系（大部分3D程序，如：`OpenGL`、`3D Max`）

内积：$\boldsymbol{a}\cdot \boldsymbol{b} = \boldsymbol{a}^\top\boldsymbol{b}$ 。另外，内积的结果与坐标系的选取无关

外积：
$\boldsymbol{a}\times \boldsymbol{b} = \left|\begin{matrix}
  \boldsymbol{e}_1 & \boldsymbol{e}_2 & \boldsymbol{e}_3 \\
  a_1 & a_2 & a_3 \\
  b_1 & b_2 & b_3 \\
\end{matrix}\right| = \left[\begin{matrix}
  0 & -a_3 & a_2 \\
  a_3 & 0 & -a_1 \\
  -a_2 & a_1 & 0 \\
\end{matrix} \right] \boldsymbol{b} = \boldsymbol{a}^\wedge\boldsymbol{b}$

引入 $\wedge$ 记号，表示向量所对应的反对称矩阵 $b_{ij}$放的下标为k，下三角为正，上三角看$(-1)^{i+j}$

外积还可以用于旋转（方向）

$\wedge$ 记号的性质：
- $\boldsymbol{a}^\wedge\boldsymbol{b} = -\boldsymbol{b}^\wedge\boldsymbol{a}$ （叉乘交换顺序，方向为负）
- $\boldsymbol{a}^\wedge \mathbf{I}{\boldsymbol{a}^\wedge}^\top = \mathbf{I} - \boldsymbol{aa}^\top.$
- 

### 3.1.2 坐标系间的坐标变换

如何计算同一个向量在不同坐标系里的坐标？

SLAM中，由固定的世界坐标系和移动的机器人坐标系。机器人坐标系随着机器人运动而改变，每个时刻都有新的坐标系

变换：原点间的平移以及三个轴的旋转（刚体是只有这些）

欧氏变换：同一个向量在各个坐标系下的长度和夹角都不会发生变化。

假设单位正交基从$(\boldsymbol{e}_1, \boldsymbol{e}_2, \boldsymbol{e}_3)$经过一次旋转变成了$(\boldsymbol{e}'_1, \boldsymbol{e}'_2, \boldsymbol{e}'_3)$，对于同一个向量是没有运动的，其坐标为：

$$\boldsymbol{a} = [\boldsymbol{e}_1, \boldsymbol{e}_2, \boldsymbol{e}_3]\left[
\begin{matrix}
  a_1 \\
  a_2 \\
  a_3 \\
\end{matrix}\right] = [\boldsymbol{e}'_1, \boldsymbol{e}'_2, \boldsymbol{e}'_3]\left[
\begin{matrix}
  a'_1 \\
  a'_2 \\
  a'_3 \\
\end{matrix}\right]$$

左右两边同时左乘：$\left[
\begin{matrix}
  \boldsymbol{e}^\top_1 \\
  \boldsymbol{e}^\top_2 \\
  \boldsymbol{e}^\top_3 \\
\end{matrix}\right]$，得：

$$\left[
\begin{matrix}
  a_1 \\
  a_2 \\
  a_3 \\
\end{matrix}\right] = \left[\begin{matrix}
  \boldsymbol{e}^\top_1\boldsymbol{e}'_1 & \boldsymbol{e}^\top_1\boldsymbol{e}'_2 & \boldsymbol{e}^\top_1\boldsymbol{e}'_3 \\
  \boldsymbol{e}^\top_2\boldsymbol{e}'_1 & \boldsymbol{e}^\top_2\boldsymbol{e}'_2 & \boldsymbol{e}^\top_2\boldsymbol{e}'_3 \\
  \boldsymbol{e}^\top_3\boldsymbol{e}'_1 & \boldsymbol{e}^\top_3\boldsymbol{e}'_2 & \boldsymbol{e}^\top_3\boldsymbol{e}'_3 \\
\end{matrix} \right]\left[
\begin{matrix}
  a'_1 \\
  a'_2 \\
  a'_3 \\
\end{matrix}\right] = \mathbf{R}\boldsymbol{a}'$$

$\mathbf{R}$称为旋转矩阵，是一个行列式为1的正交矩阵。

定义特殊正交群$\mathrm{SO}(n)$来作为旋转矩阵的集合：

$$\mathrm{SO}(n) = \{\mathbf{R} \in \mathbb{R}^{n \times n}| \mathbf{R}\mathbf{R}^\top = \mathbf{I}, \mathrm{det}(\mathbf{R}) = 1\}$$

旋转矩阵可以描述相机的旋转

其逆（即转置$\mathbf{R}^\top$）描述了一个相反的旋转

$$\boldsymbol{a}_1 = \mathbf{R}_{12}\boldsymbol{a}_2$$

将旋转和平移合在一起有：

$$\boldsymbol{a}' = \mathbf{R}\boldsymbol{a}+\boldsymbol{t}$$

注：
- 在《ROS机器人编程》中，对旋转矩阵的解释为：坐标轴各分量在另一坐标轴上的分量。
- 对于平移向量的理解：转换后坐标系的原点，指向转换前坐标系的原点，得到的向量，在转换后坐标系下的表示

### 3.1.3 变换矩阵与齐次坐标

做2次变换：

$$\boldsymbol{b} = \mathbf{R}_1\boldsymbol{a}+\boldsymbol{t}_1, \boldsymbol{c} = \mathbf{R}_2\boldsymbol{b}+\boldsymbol{t}_2, \boldsymbol{c} = \mathbf{R}_2(\mathbf{R}_1\boldsymbol{a}+\boldsymbol{t}_1)+\boldsymbol{t}_2$$

多次变换过于复杂，引入齐次坐标和变换矩阵：

$$\left[
\begin{matrix}
  \boldsymbol{a}' \\
  1 \\
\end{matrix}\right] = \left[
\begin{matrix}
  \mathbf{R} & \boldsymbol{t} \\
  \boldsymbol{0}^\top & 1\\
\end{matrix}\right]\left[\begin{matrix}
  \boldsymbol{a} \\
  1 \\
\end{matrix}\right] = \boldsymbol{T}\left[\begin{matrix}
  \boldsymbol{a} \\
  1 \\
\end{matrix}\right]$$

将三维向量的末尾添加1，变成四维向量，成为齐次坐标。$\boldsymbol{T}$称为变换矩阵。

齐次坐标是射影几何的概念，多了一个自由度，但是允许将变换写成线性的形式。将某个点的每个分量同乘一个非 0 常数 $k$ 后仍然表示同一个点。因此，一个点的具体坐标值不是唯一的。强制最后一项为 1，从而得到一个点的唯一坐标表示。

定义特殊欧氏群：

$$\mathrm{SE}(3) = \left\{\boldsymbol{T} = \left[
\begin{matrix}
  \mathbf{R} & \boldsymbol{t} \\
  \boldsymbol{0}^\top & 1\\
\end{matrix}\right] \in \mathbb{R}^{4\times 4}|\mathbf{R}\in \mathrm{SO}(3), \boldsymbol{t} \in \mathbb{R}^3\right\}$$

反向的变换：

$$\boldsymbol{T}^{-1} = \left[
\begin{matrix}
  \mathbf{R}^\top & -\mathbf{R}^\top\boldsymbol{t} \\
  \boldsymbol{0}^\top & 1\\
\end{matrix}\right]$$

$\boldsymbol{T}_{WR}$的是机器人坐标系到世界坐标系的转换，平移部分描述机器人坐标系在世界坐标系下的平移

例1：世界坐标系的一个点 $\boldsymbol{p}$，在相机坐标系下的坐标为 $\mathbf{R}_{cb}\boldsymbol{p} + \boldsymbol{t}_{cb}$。由于相机会随着机器人移动，所以世界坐标系到相机坐标系的转换随着机器人移动而变化，是定位所需要求解的。

在 $k$ 时刻有 $\mathbf{R}_{cb}^k, \boldsymbol{t}_{cb}^k$，又有在相机坐标系下 $k$ 时刻到 $k+1$ 时刻的变换 ${}^{k+1}\mathbf{R}_c^k, {}^{k+1}\boldsymbol{t}_{c}^k$，则 $k+1$ 时刻世界坐标系到相机坐标系的转换为：

$$
\mathbf{R}_{cb}^{k+1}={}^{k+1}\mathbf{R}_c^k\mathbf{R}_{cb}^k, \, \boldsymbol{t}_{cb}^{k+1} = {}^{k+1}\mathbf{R}_c^k\boldsymbol{t}_{cb}^k + {}^{k+1}\boldsymbol{t}_c^k
$$

世界坐标系下 $k$ 时刻到 $k+1$ 时刻的变换为：

$$
{}^{k+1}\mathbf{R}_b^k = \mathbf{R}_{bc}^{k+1}{}^{k+1}\mathbf{R}_c^k\mathbf{R}_{cb}^k = \mathbf{R}_{bc}^{k+1}\mathbf{R}_c^{k+1}\mathbf{R}_c^{k^{-1}}\mathbf{R}_{bc}^{k^{-1}}
$$

$${}^{k+1}\boldsymbol{t}_b^k = \left({}^{k+1}\mathbf{R}_c^k\mathbf{R}_{cb}^k\right)^\top {}^{k+1}\boldsymbol{t}_c^k = \mathbf{R}_{bc}^{k+1}{}^{k+1}\boldsymbol{t}_c^k
$$

例2：两个世界坐标系下的pose $\mathbf{R}_1, \boldsymbol{t}_1; \mathbf{R}_2, \boldsymbol{t}_2$，求它们的相对pose

考虑坐标系的2个点 $\boldsymbol{t}_1,\boldsymbol{t}_2$ 作为2个pose，则相对旋转为 $\mathbf{R}_2\mathbf{R}_1^{-1}$，相对平移为 $\boldsymbol{t}_2 - \boldsymbol{t}_1$ （因为这个可以表示成世界坐标系下的坐标，在同一个坐标系下，就不需要带旋转了，直接向量相减）

## 3.3 旋转向量和欧拉角
### 3.3.1旋转向量

- $\mathrm{SO}(3)$的旋转矩阵有9个量，但一次旋转只有3个自由度。同理，变换矩阵用16个量表达了6自由度的变换

- 旋转矩阵自身带有约束，必须是正交矩阵，且行列式为1

任意旋转都可以用一个旋转轴和一个旋转角来刻画。旋转轴可以使用一个向量表示，长度等于旋转角。这种向量称为旋转向量（或轴角 Axis-Angle）。只需一个三维向量可以描述旋转。（李代数）

对于变换矩阵，使用一个旋转向量和一个平移向量即可表达一个变换。

假设有一个旋转轴为$\boldsymbol{n}$，角度为$\theta$的旋转，对应的旋转向量为$\theta\boldsymbol{n}$。通过**罗德里格斯公式**(Rodrigues's formula)实现旋转向量到旋转矩阵的转换。

$$\mathbf{R} = \cos\theta \mathbf{I}+(1-\cos\theta)\boldsymbol{n}\boldsymbol{n}^\top+\sin\theta \boldsymbol{n}^\wedge$$

Rodrigues公式在`ORB-SLAM3`的表述如下：

$$\mathbf{R} = \mathbf{I}+(1-\cos\theta)(\boldsymbol{n}^\wedge)^2+\sin\theta \boldsymbol{n}^\wedge$$

这是因为有如下等式：

$$\boldsymbol{n}\boldsymbol{n}^\top - (\boldsymbol{n}^\wedge)^2 = \mathbf{I}$$


$$\begin{aligned}
  \mathrm{tr}(\mathbf{R}) &= \cos\theta \mathrm{tr}(\mathbf{I})+(1-\cos\theta)\mathrm{tr}(\boldsymbol{nn}^\top)+\sin\theta\mathrm{tr}(\boldsymbol{n}^\wedge) \\
  &= 3\cos\theta+(1-\cos\theta) \\
  &= 1+2\cos\theta
\end{aligned} $$

$$\theta = \arccos\left[\frac{\mathrm{tr}(\mathbf{R}-1)}{2}\right]$$

由于旋转轴上的向量在旋转后不发生改变，说明：

$$\boldsymbol{Rn }= \boldsymbol{n}$$

转轴$\boldsymbol{n}$是矩阵$\mathbf{R}$特征值1对应的特征向量。

两个转换公式正是$\mathrm{SO}(3)$上李群和李代数的对应关系

### 3.3.2 欧拉角

因为旋转矩阵、旋转向量不直观，所以使用3个分离的转角把一个旋转分解成3次绕不同轴的旋转。还需要区分每次是绕**固定轴**旋转还是绕**旋转之后的轴**旋转的。

偏航-俯仰-滚转(yaw-pitch-roll) $ZYX$ 轴的旋转，旋转之后的轴

rpy 角比较常用，使用 $[r,p,y]^\top$ 表示三维向量的任意旋转

使用欧拉角会出现一个著名的万向锁(Gimbal lock)问题：俯仰角为 $\pm 90^\circ$ 时，第一次旋转与第三次旋转将使用同一个轴，使得系统丢失了一个自由度（3次旋转变为2次旋转）。这称为奇异性问题。

理论上，只要想用3个实数表达三维旋转，都会不可避免碰到奇异性问题。因此，欧拉角不适用于插值和迭代，往往只用于人机交互中。也很少在 SLAM 中直接使用欧拉角表达姿态，同样不会在滤波或优化中使用欧拉角表达旋转。

（补充）

- 内旋：每一次旋转都会改变下一次旋转的轴（物体空间的轴）
- 外旋：轴固定（惯性系的轴）

内在旋转与外在旋转的转换关系：互换第一次和第三次旋转的位置则两者结果相同。例如 $Z-Y-X$ 旋转的内部旋转和 $X-Y-Z$ 旋转的外部旋转的旋转矩阵相同。

- **外旋**：B 绕 A 的 $X$ 轴旋转 $\gamma$ 角，再绕 A 的 $Y$ 轴旋转 $\beta$ 角，最后绕 A 的 $Z$ 轴旋转 $\alpha$ 角，完成旋转。整个过程，A 不动 B 动。
  - 旋转矩阵的计算方法如下：$\mathbf{R} = \mathbf{R}_z  \mathbf{R}_y  \mathbf{R}_x$，乘法顺序：从右向左，依次旋转X轴Y轴Z轴。常用的右前上坐标系 yaw(z)-pitch(x)-roll(y) 就是 $\mathbf{R} = \mathbf{R}_y  \mathbf{R}_x \mathbf{R}_z$
- **内旋**：B 绕 B 的 $Z$ 轴旋转 $\alpha$ 角，再绕 B 的 $Y$ 轴旋转 $\beta$ 角，最后绕 B 的 $X$ 轴旋转 $\gamma$ 角，完成旋转。整个过程，A 不动 B 动。
  - 旋转矩阵的计算方法如下：$\mathbf{R} = \mathbf{R}_z  \mathbf{R}_y \mathbf{R}_x$。乘法顺序：从左向右



## 3.4 四元数
### 3.4.1 四元数的定义

- 旋转矩阵带有冗余性
- 欧拉角和旋转向量具有奇异性
  - 类似于用两个坐标表示地球表面（经度和纬度），必定存在奇异性（纬度为$\pm 90^\circ$经度无意义）

四元数是一种扩展的复数，既紧凑也没有奇异性。缺点是不直观，运算稍复杂

一个四元数拥有一个实部和3个虚部：

$$\boldsymbol{q} = q_0+q_1i+q_2j+q_3k$$

满足：

$$i^2 = j^2 = k^2 = -1$$

$$ij = k, ji = -k$$

$$jk = i, kj = -i$$

$$ki = j, ik = -j$$

有时也用一个标量和一个向量表示：$\boldsymbol{q} = [s,\boldsymbol{v}]$，分别称为实部和虚部

类似于模长为1的复数表示复平面上的纯旋转，用单位四元数表示三维空间上的任意旋转。乘$i$对应着旋转$180^\circ$，$i^2 = -1$表示绕 $i$ 轴旋转$360^\circ$得到一个相反的东西

先看旋转向量：假设某个旋转是绕旋转向量 $\boldsymbol{n} = [n_x, n_y, n_z]$ 进行了角度为 $\theta$ 的旋转，则四元数形式为：

$$\boldsymbol{q} = \left[\cos\frac{\theta}{2}, n_x\sin\frac{\theta}{2}, n_y\sin\frac{\theta}{2}, n_z\sin\frac{\theta}{2}\right]$$

给 $\theta$ 加上 $2\pi$ ，得到相同的旋转，但是对应的四元数变成了 $-\boldsymbol{q}$。因此，在四元数中，任意的旋转可以由2个互为相反数的四元数表示

### 3.4.2 四元数的运算

现有2个四元数 $\boldsymbol{q}_a, \boldsymbol{q}_b$ ，向量表示为 $[s_a, \boldsymbol{v}_a], [s_b, \boldsymbol{v}_b]$ 

1. 加法和减法
    $$\boldsymbol{q}_a \pm \boldsymbol{q}_b = [s_a \pm s_b, \boldsymbol{v}_a \pm \boldsymbol{v}_b]$$

2. 乘法
    $$\boldsymbol{q}_a\boldsymbol{q}_b = [s_as_b-\boldsymbol{v}_a^\top\boldsymbol{v}_b, s_a\boldsymbol{v}_b+s_b\boldsymbol{v}_a+\boldsymbol{v}_a \times \boldsymbol{v}_b]$$

  2个实的四元数相乘也是实的，由于最后一项外积的存在，四元数乘法通常不可交换

3. 共轭 $\boldsymbol{q}^*$
    实部不变，虚部取相反数。

  $$\boldsymbol{q}^*\boldsymbol{q} = \boldsymbol{q}\boldsymbol{q}^* = [s_a^2+\boldsymbol{v}_a^\top\boldsymbol{v}_a, \boldsymbol{0}]$$

4. 模长
    $$||\boldsymbol{q}_a|| = \sqrt{s_a^2+x_a^2+y_a^2+z_a^2}$$

  $$||\boldsymbol{q}_a\boldsymbol{q}_b|| = ||\boldsymbol{q}_a|| ||\boldsymbol{q}_b||$$

5. 逆
    $$\boldsymbol{q}^{-1} = \boldsymbol{q}^*/||\boldsymbol{q}||^2$$

  $$\boldsymbol{q}\boldsymbol{q}^{-1} = \boldsymbol{q}^{-1}\boldsymbol{q} = \boldsymbol{1}$$

6. 数乘和点乘 和向量一样

### 3.4.3 用四元数表示旋转

1. 将三维空间点用一个虚四元数描述：

  $$\boldsymbol{p} = [0,x,y,z] = [0, \boldsymbol{v}]$$

2. 用四元数 $\boldsymbol{q}$ 表示这个旋转：
    $$\boldsymbol{q} = \left[\cos\frac{\theta}{2}, \boldsymbol{n}\sin\frac{\theta}{2}\right]$$

  旋转后的点$\boldsymbol{p}'$即可表示为这样的乘积：

  $$\boldsymbol{p}' = \boldsymbol{qpq}^{-1}$$

  计算结果实部为0，虚部的3个坐标即为旋转后的点的坐标

### 3.4.4 四元数到旋转矩阵的转换

这里直接给出四元数 $[q_0, q_1i, q_2j, q_3k]$ 到旋转矩阵的转换方式：

$$\mathbf{R} = \left[\begin{matrix}
  1-2q_2^2-2q_3^2 & 2q_1q_2-2q_0q_3 & 2q_1q_3+2q_0q_2 \\
  2q_1q_2+2q_0q_3 & 1-2q_1^2-2q_3^2 & 2q_2q_3-2q_0q_1 \\
  2q_1q_3-2q_0q_2 & 2q_2q_3+2q_0q_1 & 1-2q_1^2-2q_2^2 \\
\end{matrix}\right]$$

假设旋转矩阵$\mathbf{R} = \{m_{ij}\}, i,j \in [1,2,3]$，则对应的四元数$\boldsymbol{q}$由下式给出：

$$q_0 = \frac{\mathrm{tr}(\mathbf{R})+1}{2}$$

$$q_1 = \frac{m_{23}-m_{32}}{4q_0}$$

$$q_2 = \frac{m_{31}-m_{13}}{4q_0}$$

$$q_3 = \frac{m_{12}-m_{21}}{4q_0}$$

- 由于 $\boldsymbol{q}$ 和 $-\boldsymbol{q}$ 表示同一个旋转，一个 $\mathbf{R}$ 对应的四元数表示并不是唯一的
- 除此还存在其他几种计算方法
- 当$q_0$接近0，其余3个分量非常大

## 3.5 相似、仿射、射影变换

1. 相似变换:比欧氏变换多了一个自由度，允许物体进行均匀缩放
2. 仿射变换：只要求$\mathbf{A}$ 是可逆矩阵。变换后立方体不再是方形，各个面仍然是平行四边形
3. 射影变换：
   - $\mathbf{A}$ 是可逆矩阵，$\boldsymbol{t}$ 是平移矩阵，左下角缩放 $\boldsymbol{a}^\top$ 。 $v \neq 0$ 可以对整个矩阵 $v$ 得到一个右下角为 1 的矩阵。
   - 2D 的射影变换一共有8个自由度，3D 的射影变换一共有15个自由度。
   - 真实世界到相机照片的变换可以看成一个射影变换

| 变换名称 | 矩阵形式 | 自由度 | 不变性质 |
| :--- | :--- | :--- | :--- |
| 欧氏变换 | $\left[\begin{array}{cc}\mathbf{R} & \boldsymbol{t} \\ \mathbf{0}^{\mathrm{T}} & 1\end{array}\right]$ | 6 | 长度、夹角、体积 |
| 相似变换 | $\left[\begin{array}{cc}s \mathbf{R} & \boldsymbol{t} \\ \mathbf{0}^{\mathrm{T}} & 1\end{array}\right]$ | 7 | 体积比 |
| 仿射变换 | $\left[\begin{array}{cc}\mathbf{A} & \boldsymbol{t} \\ \mathbf{0}^{\mathrm{T}} & 1\end{array}\right]$ | 12 | 平行性、体积比 |
| 射影变换 | $\left[\begin{array}{cc}\mathbf{A} & \boldsymbol{t} \\ \boldsymbol{a}^{\mathrm{T}} & v\end{array}\right]$ | 15 | 接触平面的相交和相切 |

## 3.6（补充）三维旋转转换

> 参考资料：[三维旋转：欧拉角、四元数、旋转矩阵、轴角之间的转换-知乎](https://zhuanlan.zhihu.com/p/45404840)

### 欧拉角转旋转矩阵

欧拉角声明：
1. 采用ZXY顺规（Roll $(\gamma)$ -Pitch $(\beta)$ -Yaw $(\alpha)$）
2. 列主向量
3. 外旋

$$
\begin{aligned}
&\mathbf{R}(\alpha,\beta,\gamma)=\mathbf{R}_y(\alpha)\mathbf{R}_x(\beta)\mathbf{R}_z(\gamma)  \\
=&\,\begin{bmatrix}\cos\alpha&0&\sin\alpha\\0&1&0\\-\sin\alpha&0&\cos\alpha\end{bmatrix}\begin{bmatrix}1&0&0\\0&\cos\beta&-\sin\beta\\0&\sin\beta&\cos\beta\end{bmatrix}\begin{bmatrix}\cos\gamma&-\sin\gamma&0\\\sin\gamma&\cos\gamma&0\\0&0&1\end{bmatrix} \\
=&\,\left[\begin{array}{ccc}c_1&0&s_1\\0&1&0\\-s_1&0&c_1\end{array}\right]\begin{bmatrix}1&0&0\\0&c_2&-s_2\\0&s_2&c_2\end{bmatrix}\begin{bmatrix}c_3&-s_3&0\\s_3&c_3&0\\0&0&1\end{bmatrix} \\
=&\,\begin{bmatrix}c_1&s_1s_2&s_1c_2\\0&c_2&-s_2\\-s_1&c_1s_2&c_1c_2\end{bmatrix}\begin{bmatrix}c_3&-s_3&0\\s_3&c_3&0\\0&0&1\end{bmatrix} \\
=&\,\begin{bmatrix}c_1c_3+s_1s_2s_3&c_3s_1s_2-c_1s_3&c_2s_1\\c_2s_3&c_2c_3&-s_2\\c_1s_2s_3-s_1c_3&s_1s_3+c_1c_3s_2&c_1c_2\end{bmatrix}
\end{aligned}
$$

### 欧拉角转四元数

欧拉角声明：
1. 采用ZXY顺规（Roll $(\gamma)$ -Pitch $(\beta)$ -Yaw $(\alpha)$）
2. 列主向量
3. 外旋

$$\begin{aligned}
&q(\alpha,\beta,\gamma)=q_y(\alpha)q_x(\beta)q_z(\gamma)  \\
=&\,\begin{bmatrix}0\\\sin\alpha/2\\0\\\cos\alpha/2\end{bmatrix}\begin{bmatrix}sin\beta/2\\0\\0\\\cos\beta/2\end{bmatrix}\begin{bmatrix}0\\0\\\sin\gamma/2\\\cos\gamma/2\end{bmatrix} \\
=&\,\left[\begin{array}{c}\cos(\alpha/2)\sin(\beta/2)\\\sin(\alpha/2)\cos(\beta/2)\\-\sin(\alpha/2)\sin(\beta/2)\\\cos(\alpha/2)\cos(\beta/2)\end{array}\right]\begin{bmatrix}0\\0\\\sin\gamma/2\\\cos\gamma/2\end{bmatrix} \\
=&\,\left[\begin{array}{l}\cos(\alpha/2)\sin(\beta/2)\cos(\gamma/2)+\sin(\alpha/2)\cos(\beta/2)\sin(\gamma/2)\\\sin(\alpha/2)\cos(\beta/2)\cos(\gamma/2)-\cos(\alpha/2)\sin(\beta/2)\sin(\gamma/2)\\-\sin(\alpha/2)\sin(\beta/2)\cos(\gamma/2)+\cos(\alpha/2)\cos(\beta/2)\sin(\gamma/2)\\\cos(\alpha/2)\cos(\beta/2)\cos(\gamma/2)+\sin(\alpha/2)\sin(\beta/2)\sin(\gamma/2)\end{array}\right]
\end{aligned}$$

如果欧拉角带有不确定性，并使用协方差 $\mathbf{P} = \mathrm{diag}(\sigma_\alpha, \sigma_\beta, \sigma_\gamma)$ 表示，则以四元数表示，其协方差为：
$$
\mathbf{P}^\prime = \mathbf{HPH}^\top
$$

其中 $\mathbf{H}$ 为Jacobian矩阵：
$$
\mathbf{H} = \frac12
\begin{bmatrix}
-\sin(\alpha/2)\sin(\beta/2)\cos(\gamma/2)+\cos(\alpha/2)\cos(\beta/2)\sin(\gamma/2) & \cos(\alpha/2)\cos(\beta/2)\cos(\gamma/2)-\sin(\alpha/2)\sin(\beta/2)\sin(\gamma/2) & -\cos(\alpha/2)\sin(\beta/2)\sin(\gamma/2)+\sin(\alpha/2)\cos(\beta/2)\cos(\gamma/2)\\
\cos(\alpha/2)\cos(\beta/2)\cos(\gamma/2)+\sin(\alpha/2)\sin(\beta/2)\sin(\gamma/2) & -\sin(\alpha/2)\sin(\beta/2)\cos(\gamma/2)-\cos(\alpha/2)\cos(\beta/2)\sin(\gamma/2) & -\sin(\alpha/2)\cos(\beta/2)\sin(\gamma/2)-\cos(\alpha/2)\sin(\beta/2)\cos(\gamma/2)\\
-\cos(\alpha/2)\sin(\beta/2)\cos(\gamma/2)-\sin(\alpha/2)\cos(\beta/2)\sin(\gamma/2) & -\sin(\alpha/2)\cos(\beta/2)\cos(\gamma/2)-\cos(\alpha/2)\sin(\beta/2)\sin(\gamma/2) & \sin(\alpha/2)\sin(\beta/2)\sin(\gamma/2)+\cos(\alpha/2)\cos(\beta/2)\cos(\gamma/2)\\
-\sin(\alpha/2)\cos(\beta/2)\cos(\gamma/2)+\cos(\alpha/2)\sin(\beta/2)\sin(\gamma/2) & -\cos(\alpha/2)\sin(\beta/2)\cos(\gamma/2)+\sin(\alpha/2)\cos(\beta/2)\sin(\gamma/2) & -\cos(\alpha/2)\cos(\beta/2)\sin(\gamma/2)+\sin(\alpha/2)\sin(\beta/2)\cos(\gamma/2)
\end{bmatrix}
$$

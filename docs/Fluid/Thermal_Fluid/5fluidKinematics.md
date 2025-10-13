# Fluid Kinematics

- Statics: $\sum F=0$
- Dynamics: $\sum F = ma$
- Kinematics:
  $$\begin{gather*}
    v = u+at\\
    S=ut+\frac12at^2\\
    v^2-u^2=2aS
  \end{gather*}$$

1. **Kinematics**: The study of motion
2. **Fluid Kinematics**: The study of how fluids flow and how to describe fluid motion.
3. **Fluid particle**: When we speak of a fluid particle or fluid element we are not referring to a single molecule. Rather, we mean some volume of fluid that is **small** by macroscopic standards, but nonetheless contains **many molecules**. The properties of such a fluid particle are insensitive to the behavior of any one molecule.

## Lagrangian and Eulerian Description

<img src="/fluid_tf5_1_descriptions.JPG" alt="Figure for 2 descriptions" width="100%" align="center">

<img src="/fluid_tf5_2_descriptions.JPG" alt="Figure for 2 descriptions" width="100%" align="center">

- The Lagrangian Description is one in which individual fluid particles are tracked
- The Eulerian Description is one in which a control volume is defined, within which fluid flow properties of interest are expressed as field

### Two distinct ways to describe motion

**Lagrangian description**: 
- With a small number of objects, such as billiard balls on a pool table, individual objects can be tracked
- In the Lagrangian description, one must keep track of the position and velocity of **individual particles**.

**Eulerian description**: Use the concept of **field variables**, e.g.,
$$
  \begin{aligned}
    &\text{Pressure field}: \quad && P=P(x,y,z,t)\\
    &\text{Velocity field}: \quad && \vec{V}=\vec{V}(x,y,z,t)\\
    &\text{Acceleration field}: \quad && \vec{a}=\vec{a}(x,y,z,t)
  \end{aligned}
$$

- The pressure field is a **scalar** field variable, while the velocity and acceleration are **vector** variables.
- The field variable at a **particular location** at a **particular time** is the value of the variable for whichever **fluid particle happens to occupy that location at that time**. 

For example, the pressure field is a scalar field variable. We define the velocity field as a vector field variable. In the Eulerian description of fluid flow, a finite volume called a **flow domain** or **control volume** is defined, through which fluid flows in and out.

Instead of tracking individual fluid particles, we define field variables, functions of space and time, within the control volume.

<img src="/fluid_tf5_3_euler.JPG" alt="Figure for euler description" width="100%" align="center">

**Experimental measurements** are generally more suited to the **Eulerian description**. Collectively, field variables define the **flow field**.

For example, a steady two-dimensional velocity field,

$$
  \vec{V} = (u,v) = (0.5+0.8x)\vec{\imath} + (1.5-0.8y)\vec{\jmath}.
$$

A stagnation point of **zero velocity** at (-0.625, 1.875).

### Acceleration field

The acceleration of a fluid particle passing a position $(x, y, z)$ is

$$
  \vec{a} = \frac{\mathrm{d}\vec{V}}{\mathrm{d}t}
$$

The velocity variable is a function of space and time: $\vec{V}=f(x,y,z,t)$

Thus, the full differential expression of the acceleration is,

$$
  \vec{a} = \frac{\mathrm{d}\vec{V}}{\mathrm{d}t} = \frac{\partial \vec{V}}{\partial t}\frac{\mathrm{d}t}{\mathrm{d}t} + 
  \frac{\partial \vec{V}}{\partial x}\frac{\mathrm{d}x}{\mathrm{d}t} + 
  \frac{\partial \vec{V}}{\partial y}\frac{\mathrm{d}y}{\mathrm{d}t} + 
  \frac{\partial \vec{V}}{\partial z}\frac{\mathrm{d}z}{\mathrm{d}t}
$$

Put $u, v, w$ are the velocity components in the $x, y, z$ directions as:
$$
  u = \frac{\mathrm{d}x}{\mathrm{d}t}, \quad v = \frac{\mathrm{d}y}{\mathrm{d}t}, \quad w = \frac{\mathrm{d}z}{\mathrm{d}t}
$$

and
$$
\begin{aligned}
  \vec{a} &= \frac{\mathrm{d}\vec{V}}{\mathrm{d}t} = \frac{\partial \vec{V}}{\partial t} + 
  u\frac{\partial \vec{V}}{\partial x} + 
  v\frac{\partial \vec{V}}{\partial y} + 
  w\frac{\partial \vec{V}}{\partial z} \\
  &= \frac{\partial \vec{V}}{\partial t} + (\vec{V}\cdot\vec{\nabla})\vec{V}
\end{aligned}
$$

where
$$
  \vec{\nabla} = \left(\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right) = \vec{\imath}\frac{\partial}{\partial x}+\vec{\jmath}\frac{\partial}{\partial y}+\vec{k}\frac{\partial}{\partial z}
$$

In Cartesian coordinates:
$$
\begin{aligned}
  {a}_x &= \frac{\partial u}{\partial t} + 
  u\frac{\partial u}{\partial x} + 
  v\frac{\partial u}{\partial y} + 
  w\frac{\partial u}{\partial z} \\
  {a}_y &= \frac{\partial v}{\partial t} + 
  u\frac{\partial v}{\partial x} + 
  v\frac{\partial v}{\partial y} + 
  w\frac{\partial v}{\partial z}\\
  {a}_z &= \frac{\partial w}{\partial t} + 
  u\frac{\partial w}{\partial x} + 
  v\frac{\partial w}{\partial y} + 
  w\frac{\partial w}{\partial z}
\end{aligned}
$$

It can be divided as [core]
- **local acceleration** $(\partial * / \partial t)$: it's the change in velocity w.r.t. time in a fluid flow
  - Local acceleration results when the flow is **unsteady**, because it is associated with temporal gradients of velocity in the flow field.

- **advective / convective acceleration** (others): it's the velocity at a point multiplied with the velocity gradient at that point within the fluid flow
  - The acceleration variable can be **nonzero** even for **steady flows** due to the **advective term**.
  - Convective acceleration results when the flow is **non-uniform**, that is, if the velocity changes along a streamline.

#### Example1 [core]
A girl is washing her car using a nozzle, which is $9.91 \mathrm{~cm}$ long, with an inlet diameter of $1.07 \mathrm{~cm}$ and an outlet diameter of $0.460 \mathrm{~cm}$. The volume flow rate $\dot{V}$ through the garden hose (and through the nozzle) is $0.0530 \mathrm{~L/s}$, and the flow is steady. 

Estimate the magnitude of the acceleration of the water jet at the outlet of the nozzle.

<img src="/fluid_tf5_4_example1.JPG" alt="Figure for example1" width="100%" align="center">

**Soultion**: Given 
$$
\begin{aligned}
  \dot{V} &= 0.053 \mathrm{~L/s}=5.3\times 10^{-5} \mathrm{~m^3/s}\\
  d_1 &= 0.0107 \mathrm{~m}\\
  d_2 &= 0.0046 \mathrm{~m}\\
  l &= 0.0991 \mathrm{~m}
\end{aligned}
$$

Then
$$
  A_1 = \frac{\pi d_1^2}{4} = 8.992\times 10^{-5}\mathrm{~m^2}; \quad A_2 = 1.662\mathrm{~m^2}
$$

Since
$$
  \dot{V} = A_1V_1 = A_2V_2
$$

Thus
$$
\begin{aligned}
  V_1 &= \frac{\dot{V}}{A_1} = 0.5894 \mathrm{~m/s}\\
  V_2 &= 3.189\mathrm{~m/s}
\end{aligned}
$$

Since
$$
  {a}_x = \not\frac{\partial u}{\partial t} + 
  u\frac{\partial u}{\partial x} + 
  \not v\frac{\partial u}{\partial y} + 
  \not w\frac{\partial u}{\partial z}
$$

By approximation
$$
\begin{aligned}
    a_x &= u_{\mathrm{avg}}\left(\frac{u_2 - u_1}{l}\right) = \left(\frac{u_2 + u_1}{2}\right)\left(\frac{u_2 - u_1}{l}\right)\\
    &= \frac{u_2^2 - u_1^2}{2l} = \frac{3.189^2 - 0.5894^2}{2(0.0991)} = 49.6\mathrm{~m/s^2}
\end{aligned}
$$

### Material derivative

Material derivation is also known as **substantial derivative**. It is denoted as $\mathrm{D}/\mathrm{D}t$, and illustrates the total derivative operator $\mathrm{d}/\mathrm{d}t$ such that

$$
  \frac{\mathrm{D}}{\mathrm{D}t} = \frac{\mathrm{d}}{\mathrm{d}t} = \frac{\partial }{\partial t} + (\vec{V}\cdot\vec{\nabla})
$$

Thus the material acceleration is:
$$
  \vec{a}(x,y,z,t) = \frac{\mathrm{D}\vec{V}}{\mathrm{D}t} = \frac{\mathrm{d}\vec{V}}{\mathrm{d}t} = \frac{\partial \vec{V}}{\partial t} + (\vec{V}\cdot\vec{\nabla})\vec{V}
$$

and the material derivative of pressure is:
$$
  \frac{\mathrm{D}P}{\mathrm{D}t} = \frac{\mathrm{d}P}{\mathrm{d}t} = \frac{\partial P}{\partial t} + (\vec{V}\cdot\vec{\nabla})P
$$

The Material Derivative, in engineering, is a **derivative taken along a path moving with velocity field**. It measures the **rate of change** experienced by a physical quantity, like temperature or velocity, associated with **the motion of the material** within a flow field. 

The material derivative describes the time rate of change of some physical quantity (e.g heat) of a material element that is subjected to a space-and-time-dependent macroscopic velocity field. The material derivative can serve as a link between Eulerian and Lagrangian descriptions of continuum deformation.

e.g. The material acceleration of a steady velocity field,

$$
\vec{V}=(u, v)=(0.5+0.8 x) \vec{\imath}+(1.5-0.8 y) \vec{\jmath}
$$

$$
\begin{aligned}
a_x & =\frac{\partial u}{\partial t}+u \frac{\partial u}{\partial x}&&+v \frac{\partial u}{\partial y}&&+w \frac{\partial u}{\partial z} \\
a_x & =0+\overbrace{(0.5+0.8 x)(0.8)}&&+\overbrace{(1.5-0.8 y)(0)}&&+0=(0.4+0.64 x) \mathrm{m} / \mathrm{s}^2
\end{aligned}
$$ 

$$
\begin{aligned}
& a_y=\frac{\partial v}{\partial t}+u \frac{\partial v}{\partial x}&&+v \frac{\partial v}{\partial y}&&+w \frac{\partial v}{\partial z} \\
& a_y=0+\overbrace{(0.5+0.8 x)(0)}&&+\overbrace{(1.5-0.8 y)(-0.8)}&&+0=(-1.2+0.64 y) \mathrm{m} / \mathrm{s}^2
\end{aligned}
$$ 


Say at point $(2,3)$. The acceleration: $a_x=1.68 \mathrm{~m} / \mathrm{s}^2$ and $a_y=1.720 \mathrm{~m} / \mathrm{s}^2$.

The steady flow field:

<img src="/fluid_tf5_5_field.JPG" alt="Figure for velocity and acceleration field" width="100%" align="center">

#### Example2
A steady, incompressible, two-dimensional velocity field is,
$$
  \vec{V} = (u,v) = (1.9+2.1x+0.66y)\vec{\imath} + (0.75 - 2.2x-2.1y)\vec{\jmath}
$$

Calculate the acceleration field ($a_x$ and $a_y$), and calculate the acceleration at the point $(x, y) = (−1, 3)$ .

**Solution**: 
$$
\begin{aligned}
    u &= 1.9+2.1x+0.66y\\
    v &= 0.75 - 2.2x-2.1y \\
\end{aligned}
$$

Then
$$
\begin{aligned}
    \frac{\partial u}{\partial x} &= 2.1, \quad &\frac{\partial u}{\partial y} &= 0.66\\
    \frac{\partial v}{\partial x} &= -2.2, \quad &\frac{\partial v}{\partial y} &= -2.1
\end{aligned}
$$

Thus
$$
\begin{aligned}
    a_x =& \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} \\
    =& 0 + (1.9+2.1x+0.66y)(2.1) \\
    &+(0.75-2.2x-2.1y)(0.66)\\
    =& 4.49+2.96x
\end{aligned}
$$

$$
\begin{aligned}
    a_y =& \frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} \\
    =& 0 + (1.9+2.1x+0.66y)(-2.2) \\
    &+(0.75-2.2x-2.1y)(-2.1)\\
    =& -5.76+2.96y
\end{aligned}
$$

Thus, at $(-1,3)$:
$$
\begin{aligned}
  a_x &= 4.49 + 2.96(-1) = 1.5\\
  a_y &= -5.76+2.96(3) = 3.1
\end{aligned}
$$

## Flow Patterns and Flow Visualization
::: warning  Definition: Flow Visualization
The visual examination of flow field features
:::

Quantitative study of fluid dynamics requires advanced mathematics and in fact, much can be learned from flow visualization.

Flow visualization is useful not only in physical experiments but in **numerical** solutions as well computational fluid dynamics (`CFD`).

In fact, the very first thing an engineer using CFD does after obtaining a numerical solution is to **simulate** some form of flow visualization.

<img src="/fluid_tf5_6_flow_visualization.png" alt="Figure for flow visualization" width="100%" align="center">

The figure above is that NASA Simulates a Smooth Ride to Stabilize Air Taxis.

### Streamlines and streamtubes
::: warning Definition: streamline
Streamline: A curve that
- all the particles at **any point** have the **same speed** at any particular instant; and
- has tangent at all points to be in the same direction of the instantaneous local velocity vector.
:::

- Streamlines are useful as indicators of the instantaneous direction of fluid motion throughout the flow field.
- Streamlines can only be **observed experimentally** in **steady flow fields**, but not in unsteady flow fields.
- Streamlines are a family of curves whose tangent vectors constitute the velocity vector field of the flow. These show the direction in which a massless fluid element will travel at any point in time

<img src="/fluid_tf5_7_streamline.png" alt="Figure for streamline" width="100%" align="center">

Consider an infinitesimal arc length, $\mathrm{d}\vec{r}$ approaches to the direction of $\vec{V}$,
$$
  \frac{\mathrm{d}r}{V} = \frac{\mathrm{d}x}{u} = \frac{\mathrm{d}y}{v}
$$

Thus the equation for a streamline:
$$
  \frac{\mathrm{d}x}{u} = \frac{\mathrm{d}y}{v} = \frac{\mathrm{d}z}{w}
$$

#### Example3
A steady, incompressible, two-dimensional velocity field,
$$
\vec{V}=(u, v)=(0.5+0.8 x) \vec{\imath}+(1.5-0.8 y) \vec{\jmath}
$$

Obtain the equation of the streamlines and plot the streamlines from $x > 0$.

**Solution**: For the **streamline equation**:
$$
\begin{align*}
    \frac{\mathrm{d}x}{u} &= \frac{\mathrm{d}y}{v} \\
    \implies \frac{\mathrm{d}x}{0.5+0.8 x} &= \frac{\mathrm{d}y}{1.5-0.8 y} \\
    \implies \int\frac{\mathrm{d}x}{0.5+0.8 x} &= \int\frac{\mathrm{d}y}{1.5-0.8 y} \\
    \implies \frac{1}{0.8}\int\frac{\mathrm{d}(0.5+0.8 x)}{0.5+0.8 x} &= \frac{1}{-0.8}\int\frac{\mathrm{d}(1.5-0.8 y)}{1.5-0.8 y} \\
    \implies \frac{1}{0.8}\ln(0.5+0.8 x) &= \frac{1}{-0.8}\ln(1.5-0.8 y) + C \\
\end{align*}
$$

$$
\begin{align*}
    &\frac{\ln(0.5+0.8 x) + \ln(1.5-0.8 y)}{0.8} = C\\
    \implies& \ln[(0.5+0.8 x)(1.5-0.8 y)] = C_1\\
    \implies& (0.5+0.8 x)(1.5-0.8 y) = C_2 \\
    \implies& 1.5-0.8 y = \frac{C_2}{0.5+0.8 x} \\
    \implies& y = \frac{C_3}{0.8(0.5+0.8x)} + 1.875
\end{align*}
$$

$C_3$ is a constant that can be set to various values.

<img src="/fluid_tf5_8_example3.png" alt="Figure for streamline about example3" width="100%" align="center">

---
Above is the edge of the mid-term test 
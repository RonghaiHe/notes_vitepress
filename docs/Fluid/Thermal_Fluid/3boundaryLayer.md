

# 3 External Flows and Boundary Layers
## Introduction
<img src="/fluid_tf3_1_boundary_layer.png" alt="control" width="100%" align="center">

::: warning Definition: Velocity boundary layer
The **region** of the flow above the plate bounded by $\delta$ in which the effects of the viscous shearing forces caused by fluid viscosity are felt.

The **boundary layer thickness** $\delta$ is typically defined as the distance $y$ from the surface at which $u = 0.99V$. The hypothetical curve of $u = 0.99V$ divides the flow into two regions:

- **Boundary layer region**: The **viscous effects and the velocity changes** are significant (**rotational flow region**).
- **Irrotational flow region**: The frictional effects are negligible and the velocity remains essentially **constant**.
:::

Boundary layer determines separation point

<img src="/fluid_tf3_2_boundary_layer.png" alt="control" width="100%" align="center">

::: details **Quiz**: For flow over a smooth flat plate. The transition from laminar to turbulent flow occurs when the Reynolds number is about:
500,000
:::

::: details **Quiz**: Define the friction coefficient
$$
  C_{f,x} = \frac{Fd}{\frac12 \rho V^2A} = \frac{\tau_x}{\frac12\rho V^2}.
$$
:::

::: details **Quiz**: Define the Reynolds number for flow over a flat plate
$$
  \mathrm{Re}_x = \frac{\rho Vx}{\mu}.
$$
:::

The **turbulent** boundary layer can be considered to consist of four regions, characterized by the distance from the wall:
- viscous sublayer
- buffer layer
- overlap layer
- **turbulent layer**

The development of a boundary layer on a surface is due to the no-slip condition and friction

The transition **from laminar to turbulent flow** depends on the surface geometry, surface roughness, upstream velocity, surface temperature, and the type of fluid, among other things, and is best characterized by the **Reynolds number**.

The Reynolds number at a distance $x$ from the leading edge of a flat plate is expressed as

$$
  \mathrm{Re}_x = \frac{\rho Vx}{\mu}.
$$

- $x$: length of plate in the flow direction
- For flow over a smooth flat plate, transition from laminar to turbulent begins at about $1\times 10^5$, but does not become fully turbulent before the Reynolds number reaches much higher values, typically around $3\times 10^6$.
  - depending on the surface roughness, the turbulence level, and the variation of pressure along the surface
- In engineering analysis, a generally accepted value for the critical Reynolds number is $5\times 10^5$.

::: details **Quiz**: What is the criteria for the boundary layer thickness?
$$
  u_{y=\delta} = 0.99V.
$$
:::

::: details **Quiz**: The flow inside the boundary layer region is rotational (T/F?)
True
:::

::: details **Quiz**: The flow outside the boundary layer region is rotational (T/F?)
False
:::

Friction Coefficient:
- The friction coefficient for **laminar** flow over a flat plate can be determined **theoretically** by solving the conservation of mass and momentum equations numerically.
- For **turbulent** flow, it must be determined **experimentally** and expressed by empirical correlations.

<img src="/fluid_tf3_3_coefficient.png" alt="control" width="100%" align="center">

The variation of the local friction coefficient for flow over a flat plate. Note that the vertical scale of the boundary layer is greatly exaggerated in this sketch.

- Laminar:
  $$
      \delta = \frac{4.91x}{\mathrm{Re}_x^{1/2}} \quad C_{f,x} = \frac{0.664}{\mathrm{Re}_x^{1/2}}, \quad \mathrm{Re}_x < 5\times 10^5
  $$

  $$
  \begin{aligned}
  C_f & =\frac{1}{L} \int_0^L C_{f, x} \mathrm{~d} x =\frac{1}{L} \int_0^L \frac{0.664}{\operatorname{Re}_x^{1 / 2}} \mathrm{~d} x \\ & =\frac{0.664}{L} \int_0^L\left(\frac{V x}{\nu}\right)^{-1 / 2} \mathrm{~d} x \\ & =\left.\frac{0.664}{L}\left(\frac{V}{\nu}\right)^{-1 / 2} \frac{x^{1 / 2}}{\frac{1}{2}}\right|_0 ^L \\ & =\frac{2 \times 0.664}{L}\left(\frac{V}{\nu L}\right)^{-1 / 2} = \frac{1.328}{\operatorname{Re}_L^{1 / 2}}
  \end{aligned}
  $$

- turbulent:
  $$
      \delta = \frac{0.38x}{\mathrm{Re}_x^{1/5}} \quad C_{f,x} = \frac{0.059}{\mathrm{Re}_x^{1/5}}, \quad 5\times 10^5 \le \mathrm{Re}_x \le 10^7
  $$

- Laminar (Theory):
  $$
      C_{f} = \frac{1.33}{\mathrm{Re}_L^{1/2}}, \quad \mathrm{Re}_x < 5\times 10^5
  $$
- turbulent (Empirical):
  $$
      C_{f} = \frac{0.074}{\mathrm{Re}_L^{1/5}}, \quad 5\times 10^5 \le \mathrm{Re}_x \le 10^7
  $$

**Quiz**: For laminar flow over flat plate, if the fluid-stream velocity is doubled (while the flow remains **laminar**) calculate the change in the viscous drag force on the plate.

$$
  \mathrm{Re} = \frac{\rho VL}{\mu}
$$

Calculate the viscous drag force:

$$
  \frac{F_{D2}}{F_{D1}} =  \frac{C_{f2}\times L\times W\times \frac12\rho V_2^2}{C_{f1}\times L\times W\times \frac12\rho V_1^2} = \frac{C_{f2}V_2^2}{C_{f1}V_1^2} = \left(\frac{V_2}{V_1}\right)^{3/2} = 2.83.
$$

<img src="/fluid_tf3_4_quiz.png" alt="control" width="100%" align="center">

## Flow Over Cylinders and Spheres

- Flow over cylinders and spheres is frequently encountered in practice.
- The tubes in a shell-and-tube heat exchanger involve both **internal flow** through the tubes and **external flow** over the tubes. 
- Many sports such as soccer, tennis, and golf involve flow over spherical balls.

<img src="/fluid_tf3_5_flow_ball.png" alt="control" width="100%" align="center">

<img src="/fluid_tf3_6_flow_ball_Re.png" alt="control" width="100%" align="center">

### Impact of Roughness on drag
- For **laminar flow**, the friction coefficient depends only on the Reynolds number, and the surface roughness **has no effect**.
- For **turbulent flow**, surface roughness causes the friction coefficient to increase severalfold, to the point that in the fully rough turbulent regime the friction coefficient is a function of surface roughness alone and is independent of the Reynolds number.

<img src="/fluid_tf3_7_roughness.JPG" alt="control" width="100%" align="center">

- **Surface roughness**, in general, increases the **drag coefficient** in **turbulent flow**. This is especially the case for **streamlined bodies**.
- For **blunt bodies** such as a circular cylinder or sphere, however, an increase in the surface roughness may increase or decrease the drag coefficient depending on **Reynolds number**.

<img src="/fluid_tf3_8_rough_curve.png" alt="roughness curve" width="100%" align="center">

The effect of surface roughness on the drag coefficient of a **sphere**

<img src="/fluid_tf3_9_rough_Cd.png" alt="roughness curve" width="100%" align="center">

Surface roughness may increase or decrease the drag coefficient of a spherical object, depending on the value of the **Reynolds number**

Roughening the surface can be used to great **advantage** in reducing drag.

Golf balls are intentionally roughened to induce **turbulence** at a **lower Reynolds number** to take advantage of the **sharp drop in the drag coefficient** at the onset of turbulence in the boundary layer (the typical velocity range of golf balls is 15 to 150 m/s, and the Reynolds number is less than $4\times 10^5$). The occurrence of turbulent flow at this Reynolds number reduces the drag coefficient of a golf ball by about **half**. For a given hit, this means a longer distance for the ball.

For a table tennis ball, however, **the speeds are slower and the ball is smaller**—it never reaches speeds in the turbulent range. Therefore, the surfaces of table tennis balls are made smooth.

::: details **Quiz**: What is the purpose of dimpling on golf balls?
**Increase** the air pressure on the **back**-side of the ball
:::

::: details **Quiz**: Why aren’t dimples on surfaces of planes, cars or trucks?
Better to increase streamlining of planes, cars and trucks
:::

<img src="/fluid_tf3_10_quiz2.png" alt="roughness curve" width="100%" align="center">

## Lift

::: warning Definition: Lift
The component of the net force (due to viscous and pressure forces) that is **perpendicular** to the flow direction.
:::

For an aircraft, the wingspan is the total distance between the tips of the two wings, which includes the width of the fuselage between the wings.

The average lift per unit planform area $F_L/A$ is called the **wing loading**, which is simply the ratio of the weight of the aircraft to the planform area of the wings (since lift equals the weight during flying at constant altitude).

- No air, no lift
- No motion, no lift

<img src="/fluid_tf3_11_lift.png" alt="lift" width="100%" align="center">

**Angle of attack** is the angle between a reference line on a body (often the chord line of an airfoil) and the vector representing the relative motion between the body and the fluid through which it is moving (wind v.s. airfoil)

<img src="/fluid_tf3_12_lift_ball.png" alt="lift_ball" width="100%" align="center">

::: details **Quiz**: Pressure is at locations where the flow velocity is high , and pressure is high at locations where the flow velocity is low. (T/F?)
True
:::

::: details **Quiz**: At zero angle of attack, the lift produced by a symmetrical airfoil is zero
True
:::

- Lift in practice can be taken to be due entirely to the **pressure distribution** on the surfaces of the body, and thus the **shape of the body** has the primary influence on lift.
  - Then the primary consideration in the design of airfoils is **minimizing the average pressure at the upper surface** while **maximizing it at the lower surface**.
- For airfoils, the contribution of **viscous effects** to **lift** is usually **negligible** since wall shear is parallel to the surfaces and thus nearly normal to the direction of lift.

It is desirable for airfoils to generate the most lift while producing the least drag. Therefore, a measure of performance for airfoils is the **lift-to-drag ratio**, which is equivalent to the ratio of the lift-to-drag coefficients $C_L/C_D$.

<img src="/fluid_tf3_13_lift_drag.png" alt="lift_drag" width="100%" align="center">

The $C_L/C_D$ ratio increases with the angle of attack until the airfoil **stalls**, and the value of the lift-to-drag ratio can be of the order of 100 for a two dimensional airfoil.

<img src="/fluid_tf3_14_lift_angle.png" alt="lift_angle" width="100%" align="center">

The drag coefficient increases with the angle of attack, often **exponentially**.

Therefore, **large angles of attack** should be used sparingly for short periods of time for fuel efficiency.

- One way to change the lift and drag characteristics of an airfoil is to **change the angle of attack**.
  - On an airplane, the entire plane is pitched up to increase lift, since the wings are fixed relative to the fuselage.
- Another approach is to change the shape of the airfoil by the use of **movable leading edge and trailing edge flaps**.

The minimum flight velocity can be determined from the requirement that the total weight $W$ of the aircraft be equal to lift and $C_L=C_{L,\max}$

$$
  W=F_L = \frac12 C_{L,\max}\rho V_{\min}^2A \to V_{\min} = \sqrt{\frac{2W}{\rho C_{L,\max}A}}
$$

For a given weight, the landing or takeoff speed can be minimized by maximizing the product of the lift coefficient and the wing area $C_{L,\max}A$

<img src="/fluid_tf3_15_CL_angle.png" alt="C_L_angle" width="100%" align="center">

The variation of the lift coefficient with the angle of attack for a **symmetrical** and a **nonsymmetrical** airfoil.

- $C_L$ increases almost linearly with the angle of attack $\alpha$, reaches a maximum at about $\alpha=16^\circ$ , and then starts to decrease sharply. The lift coefficient can be increased severalfold by adjusting the angle of attack
- At zero angle of attack ($\alpha = 0^\circ$ ), the lift coefficient is zero for symmetrical airfoils but nonzero for nonsymmetrical ones with greater curvature at the top surface.
  - Therefore, planes with symmetrical wing sections must fly with their wings at **higher angles of attack** in order to produce the same lift.

This decrease of lift with further increase in the angle of attack is called **stall**, and it is caused by flow separation and the formation of a wide wake region over the top surface of the airfoil. Stall is highly **undesirable** since it also increases drag.

#### Example Problem
GIVEN: Tennis ball in flight, with $m=57 \mathrm{~g}$ and $D=64 \mathrm{~mm}$, hit with $V=25 \mathrm{~m} / \mathrm{s}$ and topspin of 7500 rpm .

<img src="/fluid_tf3_16_example_ball.png" alt="example_ball" width="100%" align="center">

FIND: 
(a) Aerodynamic lift acting on ball.
(b) Radius of curvature of path in vertical plane.
(c) Comnarison with radius for no soin.

SOLUTION:

Assume ball is smooth.
Use data from Fig. 9.27 to find lift: $\quad C_L=f\left(\frac{\omega D}{2 V}, R e_D\right)$.
From given data (for standard air, $\boldsymbol{\nu}=1.46 \times 10^{-5} \mathrm{~m}^2 / \mathrm{s}$ ).
$$
\begin{aligned}
& \frac{\omega D}{2 V}=\frac{1}{2} \times 7500 \frac{\mathrm{rev}}{\mathrm{~min}} \times 0.064 \mathrm{~m} \times \frac{\mathrm{s}}{25 \mathrm{~m}} \times 2 \pi \frac{\mathrm{rad}}{\mathrm{rev}} \times \frac{\mathrm{min}}{60 \mathrm{~s}}=1.01 \\
& R e_D=\frac{V D}{\nu}=25 \frac{\mathrm{~m}}{\mathrm{~s}} \times 0.064 \mathrm{~m} \times \frac{\mathrm{s}}{1.46 \times 10^{-5} \mathrm{~m}^2}=1.10 \times 10^5
\end{aligned}
$$

From Fig. 9.27, $C_L \approx 0.3$, so
$$
\begin{aligned}
F_L & =C_L A \frac{1}{2} \rho V^2 =C_L \frac{\pi D^2}{4} \frac{1}{2} \rho V^2=\frac{\pi}{8} C_L D^2 \rho V^2 \\
& =\frac{\pi}{8} \times 0.3 \times(0.064)^2 \mathrm{~m}^2 \times 1.23 \frac{\mathrm{~kg}}{\mathrm{~m}^3} \times(25)^2 \frac{\mathrm{~m}^2}{\mathrm{~s}^2} \times \frac{\mathrm{N} \cdot \mathrm{~s}^2}{\mathrm{~kg} \cdot \mathrm{~m}}=0.371 \mathrm{~N}
\end{aligned}
$$

Because the ball is hit with topspin, this force acts downward. Use Newton's second law to evaluate curvature of path. In the vertical plane,
$$
\begin{aligned}
& \Sigma F_z=-F_L-m g=m a_z=-m \frac{V^2}{R} \quad \text { or } \quad R=\frac{V^2}{g+F_L / m} \\
& R=(25)^2 \frac{\mathrm{~m}^2}{\mathrm{~s}^2}\left[\frac{1}{9.81 \mathrm{~m}}+0.371 \mathrm{~N} \times \frac{1}{\mathrm{~s}^2} \times \frac{\mathrm{kg} \cdot \mathrm{~m}}{\mathrm{~N} \cdot \mathrm{~s}^2}\right] \\
& R=38.3 \mathrm{~m}(\text { with spin })  \\
& R=(25)^2 \frac{\mathrm{~m}^2}{\mathrm{~s}^2} \times \frac{\mathrm{s}^2}{9.81 \mathrm{~m}}=63.7 \mathrm{~m} \text { (without spin) } 
\end{aligned}
$$

Thus topspin has a significant effect on trajectory of the shot!
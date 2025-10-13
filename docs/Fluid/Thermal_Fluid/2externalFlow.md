

# 2 External Flow
## Objectives
- Have an understanding of the various physical phenomena associated with external flow such as **drag, friction and pressure drag, drag reduction, and lift**
- Calculate the drag force associated with flow over common geometries
- Understand the effects of flow regime on the drag associated with flow over **cylinders** and **spheres**
- Understand the fundamentals of flow over airfoils, and calculate the drag and lift forces acting on airfoils

## Introduction
::: warning Definition: External Flow
A fluid moving over a **stationary body** (such as the wind blowing over a building), and a body moving through a quiescent fluid (such as a car moving through air) are referred to as **flow over bodies** or **external flow**.
:::

(relatively movement)

::: details **Quiz**[core]: The velocity of the fluid approaching a body is called
Free-stream velocity
:::

## Drag and lift
### Drag
::: warning Definition: drag
Drag: The force a flowing fluid exerts on a body **in the flow direction**.
:::

- The drag force can be **measured directly** by simply attaching the body subjected to fluid flow to a calibrated spring and measuring the displacement in the flow direction.
- Drag is usually an **undesirable effect**, like friction, and we do our best to minimize it.
- But in some cases drag produces a very beneficial effect and we try to maximize it (e.g., automobile brakes).

Drag force:
- skin **friction** drag
- **pressure** drag (form drag)

Different body:
- **Streamlined** body: If a conscious effort is made to **align its shape with the anticipated streamlines** in the flow.
  - Streamlined bodies such as race cars and airplanes appear to be contoured and sleek.
- **Bluff** or **blunt** body: If a body (such as a building) tends to **block the flow**.

Usually it is much easier to force a streamlined body through a fluid.

#### Friction and Pressure Drag
- The drag force is the net force exerted by a fluid on a body in the direction of flow due to the combined effects of wall shear and pressure forces.
  - The part of drag that is due directly to **wall shear stress** is called the **skin friction drag** (or just friction drag) since it is caused by frictional effects,
  - The part that is due directly to **pressure** is called the **pressure drag** (also called the form drag because of its strong dependence on the form or shape of the body).

$$
  \begin{gather*}
    C_{D,\mathrm{friction}} = \frac{F_{D,\mathrm{friction}}}{\frac12\rho V^2A}, \quad C_{D,\mathrm{pressure}} = \frac{F_{D,\mathrm{pressure}}}{\frac12\rho V^2A} \\
    C_D = C_{D,\mathrm{friction}} + C_{D,\mathrm{pressure}}, \quad F_D = F_{D,\mathrm{friction}} + F_{D,\mathrm{pressure}}.
  \end{gather*}
$$

For friction drag:
- The friction drag is the component of the wall shear force in the direction of flow, and thus it depends on the orientation of the body as well as the magnitude of the wall shear stress.
- For **parallel flow over a flat surface**, the drag coefficient is **equal** to the friction drag coefficient.
- Friction drag is a strong function of viscosity, and increases with increasing viscosity

<img src="/fluid_tf2_5_coefficient0.png" alt="coefficient0" width="100%" align="center">

Some examples:

- Flow over a Flat Plane Parallel to the Flow: **Friction** Drag
  - laminar or turbulent, thus several different coefficients
  $$
    F_D = \int_{\text{plate surface}} \tau_w\mathrm{~d}A
  $$
- Flow over a Flat Plane Perpendicular to the Flow: **Pressure** Drag
  - usually obtain coefficient empirically
  $$
    F_D = \int_{\mathrm{surface}} p\mathrm{~d}A
  $$

#### Drag Coefficient of Common Geometries
The drag and lift forces depend on the density of the fluid, the upstream velocity, and the size, shape, and orientation of the body.

It is more convenient to work with appropriate dimensionless numbers that represent the **drag and lift** characteristics of the body.

$$
  \begin{gather*}
    C_D = \frac{F_D}{\frac12\rho V^2A} = \frac{1}{L}\int_0^L C_{D,x}\mathrm{~d}x \quad \text{Drag Coefficient} \\
    C_L = \frac{F_L}{\frac12\rho V^2A} = \frac{1}{L}\int_0^L C_{L,x}\mathrm{~d}x \quad \text{Lift Coefficient} \\
  \end{gather*}
$$

::: warning Definition: Flow Separation
At sufficiently high velocities, the fluid stream detaches itself from the surface of the body.
:::

The location of the **separation point** depends on several factors such as **the Reynolds number**, **the surface roughness**, and **the level of fluctuations in the free stream**, and it is usually difficult to predict exactly where separation will occur.

<img src="/fluid_tf2_1_separation.JPG" alt="separation" width="100%" align="center">

::: warning Definition: Separation Region
When a fluid separates from a body, it forms a **separated region** between the body and the fluid stream.
:::

- a **low-pressure** region behind the body where recirculating and backflows occur
- The larger the separated region, the larger the pressure drag
- The **effects** of flow separation are felt **far downstream** in the form of **reduced velocity** (relative to the upstream velocity)
- **Wake**: The region of flow trailing the body where the effects of the body on velocity are felt. (separated region?)
- **Viscous and rotational effects** are the most significant in the boundary layer, the separated region, and the wake.

<img src="/fluid_tf2_2_wake.png" alt="wake" width="100%" align="center">

Some examples:
<img src="/fluid_tf2_3_example.png" alt="examples_drag" width="100%" align="center">

Drag and Reynolds number(**Core**):
- Low Re: $C_D= \mathrm{constant / Re}$
- intermediate Re: $f(\mathrm{Re})$
- High Re: constant

::: details **Quiz**: At high Reynolds number flow over common geometries, the drag coefficient is a constant (T/F)
True
:::

::: details **Quiz**: For **high Reynolds number** flow over common geometries
The **drag coefficient** is a constant that does not depend on the Reynolds number
:::

::: details **Quiz**: For **high Reynolds number** over common geometries
The **drag force** is proportional to the flow velocity squared, i.e. $V^2$
:::

The drag coefficients of vehicles range from about 1.0 for large semitrailers to 0.4 for minivans, 0.3 for passenger cars, and 0.2 for race cars. The theoretical lower limit is about 0.1.
- In general, the **more blunt** the vehicle, the **higher** the drag coefficient.
- Installing a fairing reduces the drag coefficient of tractor-trailer rigs by about 20% by making the frontal surface more streamlined.
- Streamlining decreases pressure drag by **delaying boundary layer separation** and thus **reducing the pressure difference** between the front and back of the body but **increases the friction drag** by **increasing the surface area**. The end result depends on which effect dominates.

::: details **Quiz**: Drag is caused by two different effects:
Pressure and friction
:::

### Lift
::: warning Definition: Lift
The components of the pressure and wall shear forces in the direction **normal to the flow** tend to move the body in that direction, and their **sum** is called **lift**.
:::

<img src="/fluid_tf2_4_lift.JPG" alt="lift" width="100%" align="center">

- The drag and lift forces depend on the density of the fluid, the upstream velocity, and the size, shape, and orientation of the body.
- It is also more convenient to work with appropriate **dimensionless numbers** that represent the drag and lift characteristics of the body.
  These numbers are the drag coefficient $C_D$, and the lift coefficient $C_L$.
- In lift and drag calculations of some thin bodies, such as airfoils, $A$ is taken to be the **platform area**, which is the area seen by a person looking at the body from above in a direction normal to the body.

::: details **Quiz**: The _____ force is the force a flowing fluid exerts on a body **in the flow direction**
Drag
:::

::: details **Quiz**: The _____ force is the force a flowing fluid exerts on a body **perpendicular to the flow direction**
Lift
:::

::: details **Quiz**: The drag coefficient is defined in terms of the frontal area for bluff bodies (T/F?)
True (pressure)
:::

::: details **Quiz**: The drag coefficient is defined in terms of the planform area for slim bodies such as airfoils (T/F?)
True (friction)
:::

::: details **Quiz**: The friction drag is strong function of viscosity, and increases with increasing viscosity (T/F?)
True
:::

### Coefficient
Drag Coefficients of Common Geometries

- Usually the total (friction+pressure) drag coefficient is reported.
- The drag coefficient exhibits different behavior in the low (creeping), moderate (laminar), and high (turbulent) regions of the **Reynolds number**.
- The inertia effects are negligible in low Reynolds number flows ($\operatorname{Re} < 1$), called **creeping flows**, and the fluid wraps around the body smoothly
  - $C_D=\frac{24}{\operatorname{Re}}\quad (\operatorname{Re}\le 1)$
  - $F_D=C_DA\frac{\rho V^2}{2}=\frac{24}{\rho VD/\mu}\frac{\pi D^2}{4}\frac{\rho V^2}{2}=3\pi\mu VD$: Stokes Law, often applicable to dust particles in the air and suspended solid particles in water.

<img src="/fluid_tf2_5_coefficient1.png" alt="coefficient1" width="100%" align="center">
<img src="/fluid_tf2_5_coefficient2.png" alt="coefficient2" width="100%" align="center">
<img src="/fluid_tf2_5_coefficient3.png" alt="coefficient3" width="100%" align="center">
<img src="/fluid_tf2_5_coefficient4.png" alt="coefficient4" width="100%" align="center">
<img src="/fluid_tf2_5_coefficient5.png" alt="coefficient5" width="100%" align="center">

Observations from the drag coefficient tables:
- The **orientation** of the body relative to the direction of flow has a **major** influence on the drag coefficient.
- For blunt bodies with sharp corners, such as flow over a rectangular block or a flat plate normal to flow, separation occurs at the edges of the front and back surfaces, with no significant change in the character of flow.
  - Therefore, the drag coefficient of such bodies is nearly **independent** of the Reynolds number
  - The drag coefficient of a long rectangular rod can be reduced almost by half from 2.2 to 1.2 by **rounding the corners**.

The aerodynamic drag is **negligible at low speeds**, but becomes significant at speeds above about 50 km/h.
- At highway speeds, a driver can often save fuel in hot weather by running the air conditioner instead of driving with the windows rolled down.
- The turbulence and additional drag generated by open windows consume more fuel than does the air conditioner.

::: details **Quiz**: To improve fuel economy of a low-drag automobile, it is better to turn the air-conditioner off and drive with the windows open (T/F?)
False
:::

::: details **Quiz**: Aerodynamic drag on automobiles is negligible at low speeds (less than 30mph) (T/F?)
True
:::

::: details **Quiz**[core]: For a car moving on a flat road at high speed (60mph) the **power** developed by the engine to overcome aerodynamic drag is
Proportional the vehicle speed cubed, ie. $V^3$ [$\mathrm{Power}\propto FV\propto V^3$]
:::

### Example: Effect of Frontal Area on Fuel Efficiency of a Car
Two common methods of improving fuel efficiency of a vehicle are:
1. reduce the drag coefficient
2. reduce the frontal area of the vehicle. 

Consider a car whose width ($W$) and height ($H$) are $1.85 \mathrm{~m}$ and $1.70 \mathrm{~m}$, respectively, with a drag coefficient of $0.30$. Determine **the amount of fuel and money saved per year** as a result of **reducing the car height** to $1.55 \mathrm{~m}$ while keeping its width the **same**. 

Assume the car is driven $18,000 \mathrm{~km}$ a year at an average **speed** of $95 \mathrm{~km/h}$. Take the **density and price of gasoline** to be $0.74 \mathrm{~kg/L}$ and $\$0.95\mathrm{~/L}$, respectively. Also take the **density of air** to be $1.20 \mathrm{~kg/m^3}$, the heating value of gasoline to be $44,000 \mathrm{~kJ/kg}$, and the overall efficiency of the car's drive train to be 30 percent.

**Analysis**:
1. The drag force acting on a body is
  $$
    F_D = C_D A\frac{\rho V^2}{2}.
  $$
  where $A$ is the frontal area of the body. So:
  $$
    F_D = 0.3(1.85\times 1.70 \mathrm{~m}^2)\frac{(1.20\mathrm{~kg/m}^3)(95\mathrm{~km/h})^2}{2}\left(\frac{1\mathrm{~m/s}}{3.6\mathrm{~km/h}}\right)^2\left(\frac{1\mathrm{~N}}{1\mathrm{~kg}\cdot\mathrm{~m/s}^2}\right) = 394\mathrm{~N}.
  $$

2. Noting that work is force times distance, the amount of work done to overcome this drag force and the required energy input for a distance of $18,000 \mathrm{~km}$ are
  $$
    \begin{gather*}
    \begin{aligned}
      W_{\mathrm{drag}} &= F_DL \\
      &= (394\mathrm{~N})(18,000\mathrm{~km/year})\left(\frac{1000\mathrm{~m}}{1\mathrm{~km}}\right)\left(\frac{1\mathrm{~kJ}}{1000\mathrm{~N\cdot m}}\right) = 7.092\times 10^6 \mathrm{~kJ/year}
    \end{aligned}. \\
        E_{\mathrm{~in}} = \frac{W_{\mathrm{~drag}}}{\eta_{\mathrm{~car}}} = \frac{7.092\times 10^6 \mathrm{~kJ/year}}{0.30} = 2.364\times 10^7 \mathrm{~kJ/year}
    \end{gather*}
  $$

3. The amount of the cost of the fuel that supplies this much energy are:
  $$
    \begin{gather*}
    \begin{aligned}
      \text{Amount of fuel} &= \frac{m_{\mathrm{fuel}}}{\rho_{\mathrm{fuel}}} = \frac{E_{\mathrm{~in}}/HV}{\rho_{\mathrm{fuel}}} \\
      &= \frac{(2.364\times 10^7 \mathrm{~kJ/year})(44,000\mathrm{~kJ/year})}{0.74 \mathrm{~kg/L}} = 726 \mathrm{L/year}
    \end{aligned}. \\
    \begin{aligned}
      \text{Cost} &= \text{(Amount of fuel)(Unit cost)} \\
      &= (726 \mathrm{~L/year})(\$ 0.95\mathrm{~/L}) = \$ 690\mathrm{~/year}.
    \end{aligned}
    \end{gather*}
  $$

4. Reduction ratio: $0.0882$
5. Amount reduction: $64\mathrm{~L/year}$
6. Cost reduction: $\$61\mathrm{~/year}$

Drawbacks: constant drag coefficient
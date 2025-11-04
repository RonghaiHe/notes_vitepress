# Two Phase Flow: Introduction
Fundamental technical terms
- Flow regime map
- Void fraction
- Interfacial area concentration
- Frictional pressure drop

## Review of Single-phase Fluid Mechanics
<img src="/fluid_tf6_1_review.png" alt="review single phase" width="100%" align="center">

Basic equations in integral form for a control volume:
- **Conservation of Mass**:
    $$
        \frac{\partial}{\partial t}\int_{\mathrm{CV}}\rho\mathrm{~d}V + \int_{\mathrm{CS}}\rho\vec{V}\cdot\mathrm{~d}\vec{A} = 0
    $$
- **Momentum Equation** for Inertial Control Volume (External force = Surface force + Volume force):
    $$
        \vec{F} = \vec{F}_S + \vec{F}_B = \frac{\partial}{\partial t}\int_{\mathrm{CV}}\rho\mathrm{~d}V + \int_{\mathrm{CS}}\rho\vec{V}\cdot\mathrm{~d}\vec{A}
    $$
    
    For steady flow with no friction, flow along a streamline and incompressible flow (Bernoulli’s equation):
    $$
        \frac{p}{\rho} + \frac{V_s^2}{2} + gz = \mathrm{constant}.
    $$
- The First and Second Laws of Thermodynamics:
    $$
        \dot{Q} - \dot{W} = \frac{\partial}{\partial t}\int_{\mathrm{CV}}e\rho\mathrm{~d}V + \int_{\mathrm{CS}}e\rho\vec{V}\cdot\mathrm{~d}\vec{A} \\
        \dot{W} = \dot{W}_s + \dot{W}_{\mathrm{normal}} + \dot{W}_{\mathrm{shear}} + \dot{W}_{\mathrm{other}} \\
        \dot{Q} - \dot{W}_s - \dot{W}_{\mathrm{shear}} - \dot{W}_{\mathrm{other}} = \frac{\partial}{\partial t}\int_{\mathrm{CV}}e\rho\mathrm{~d}V + \int_{\mathrm{CS}}\left(u+pv+\frac{V^2}{2}+gz\right)\rho\vec{V}\cdot\mathrm{~d}\vec{A}
    $$

    Energy = Heat + Work

Inflow + Local change + External source = Outflow

### Derivation of Bernoulli’s equation
1. From the continuous equation:
$$
    \frac{\partial}{\partial t}\int_{\mathrm{CV}}\rho\mathrm{~d}V + \int_{\mathrm{CS}}\rho\vec{V}\cdot\mathrm{~d}\vec{A} = 0
$$

with conditions:
1. Steady flow $\to \frac{\partial}{\partial t}* = 0$
2. No flow across bounding streamlines
3. Incompressible flow $\to \rho=\mathrm{constant}$

$$
\begin{align*}
    &\int_{\mathrm{CS}}\rho\vec{V}\cdot\mathrm{~d}\vec{A} = 0\\
    \implies& (-\rho V_sA)+[\rho(Vs+\mathrm{~d}V_s)(A+\mathrm{~d}A)] = 0\\
    \implies& \rho(Vs+\mathrm{~d}V_s)(A+\mathrm{~d}A) = \rho V_sA\\
    \implies& V_s\mathrm{~d}A + A\mathrm{~d}V_s + \mathrm{~d}A\mathrm{~d}V_s = 0\\
    \implies&
    V_s\mathrm{~d}A + A\mathrm{~d}V_s = 0
\end{align*}
$$

2. For Momentum equation:
$$
    \vec{F}_{S_S} + \vec{F}_{B_S} = \not{\frac{\partial}{\partial t}}\int_{\mathrm{CV}}\rho\mathrm{~d}V + \int_{\mathrm{CS}}\rho\vec{V}\cdot\mathrm{~d}\vec{A}
$$

with condition: No friction, so $F_{S_b}$ is due to **pressure force only** and the surface force $F_{S_s}$ will have 3 terms:
$$
    F_{S_S} = pA - (p+\mathrm{~d}p)(A+\mathrm{~d}A) + \left(p+\frac{\mathrm{~d}p}{2}\right)\mathrm{~d}A
$$

The 1st and 2nd terms are pressure forces on the end faces of the control surface. The 3rd term is $F_{S_b}$, the pressure force acting in the $s$ direction on the bounding stream surface of the control volume: average pressure acting on the stream surface, times the area component of the stream surface in the $s$ direction, hen simplified to:

$$
    F_{S_b} = -A\mathrm{~d}p - \frac12\mathrm{~d}p\mathrm{~d}A.
$$

The body force component in the $s$ direction is
$$
    F_{B_S} = \rho g_s\mathrm{~d}V = \rho(-g\sin\theta)\left(A+\frac{\mathrm{~d}A}{2}\right)\mathrm{~d}s
$$

But $\sin\theta\mathrm{~d}s = \mathrm{~d}z$, s.t.
$$
F_{B_s}=-\rho g\left(A+\frac{\mathrm{~d} A}{2}\right) \mathrm{~d} z
$$

The momentum flux will be
$$
\int_{\mathrm{CS}} u_{\mathrm{s}} \rho \vec{V} \cdot \mathrm{~d} \vec{A}=V_s\left(-\rho V_s A\right)+\left(V_s+\mathrm{~d} V_s\right)\left\{\rho\left(V_s+\mathrm{~d} V_s\right)(A+\mathrm{~d} A)\right\}
$$
since there is no mass flux across the bounding stream surfaces. The mass flux factors in parentheses and braces are equal from continuity, so
$$
\int_{\mathrm{CS}} u_{\mathrm{s}} \rho \vec{V} \cdot \mathrm{~d} \vec{A}=V_s\left(-\rho V_{\mathrm{s}} A\right)+\left(V_s+\mathrm{~d} V_{\mathrm{s}}\right)\left(\rho V_s A\right)=\rho V_s A \mathrm{~d} V_{\mathrm{s}}
$$

Substituting Equations into the momentum equation gives
$$
-A \mathrm{~d} p-\frac{1}{2} \mathrm{~d} p \mathrm{~d} A-\rho g A \mathrm{~d} z-\frac{1}{2} \rho g \mathrm{~d} A \mathrm{~d} z=\rho V_s A \mathrm{~d} V_{\mathrm{s}}
$$

Dividing by $\rho A$ and noting that products of differentials are negligible compared with the remaining terms, we obtain
$$
-\frac{\mathrm{~d} p}{\rho}-g \mathrm{~d} z=V s \mathrm{~d} V_s=\mathrm{~d}\left(\frac{V_s^2}{2}\right)
$$
or
$$
\frac{\mathrm{~d} p}{\rho}+\mathrm{~d}\left(\frac{V_s^2}{2}\right)+g \mathrm{~d} z=0
$$

### Introduction to differential analysis of fluid motion
Conservation of Mass:
$$
\nabla \cdot \rho \vec{V}+\frac{\partial \rho}{\partial t}=0, \quad \frac{\partial \rho u}{\partial x}+\frac{\partial \rho v}{\partial y}+\frac{\partial \rho w}{\partial z}+\frac{\partial \rho}{\partial t}=0
$$

Momentum Equation: (Navier-Stokes equations)
$$
\begin{aligned}
\rho \frac{D u}{D t}= & \rho g_x-\frac{\partial p}{\partial x}+\frac{\partial}{\partial x}\left[\mu\left(2 \frac{\partial u}{\partial x}-\frac{2}{3} \nabla \cdot \vec{V}\right)\right]+\frac{\partial}{\partial y}\left[\mu\left(\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}\right)\right] \\
& +\frac{\partial}{\partial z}\left[\mu\left(\frac{\partial w}{\partial x}+\frac{\partial u}{\partial z}\right)\right]\\
\rho \frac{D w}{D t}= & \rho g_z-\frac{\partial p}{\partial z}+\frac{\partial}{\partial x}\left[\mu\left(\frac{\partial w}{\partial x}+\frac{\partial u}{\partial z}\right)\right]+\frac{\partial}{\partial y}\left[\mu\left(\frac{\partial w}{\partial z}+\frac{\partial w}{\partial y}\right)\right] \\
& +\frac{\partial}{\partial z}\left[\mu\left(2 \frac{\partial w}{\partial z}-\frac{2}{3} \nabla \cdot \vec{V}\right)\right]\\
\rho \frac{D v}{D t}= & \rho g_y-\frac{\partial p}{\partial y}+\frac{\partial}{\partial x}\left[\mu\left(\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}\right)\right]+\frac{\partial}{\partial y}\left[\mu\left(2 \frac{\partial v}{\partial y}-\frac{2}{3} \nabla \cdot \vec{V}\right)\right] \\
& +\frac{\partial}{\partial z}\left[\mu\left(\frac{\partial v}{\partial z}+\frac{\partial w}{\partial y}\right)\right]
\end{aligned}
$$

For **incompressible flow** with **constant viscosity**. (Gravity + Pressure force + Shear stress)
$$
\begin{aligned}
\rho\left(\frac{\partial u}{\partial t}+u \frac{\partial u}{\partial x}+v \frac{\partial u}{\partial y}+w \frac{\partial u}{\partial z}\right)&=\rho g_x-\frac{\partial p}{\partial x}+\mu\left(\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}+\frac{\partial^2 u}{\partial z^2}\right) \\
\rho\left(\frac{\partial v}{\partial t}+u \frac{\partial v}{\partial x}+v \frac{\partial v}{\partial y}+w \frac{\partial v}{\partial z}\right)&=\rho g_y-\frac{\partial p}{\partial y}+\mu\left(\frac{\partial^2 v}{\partial x^2}+\frac{\partial^2 v}{\partial y^2}+\frac{\partial^2 v}{\partial z^2}\right) \\
\rho\left(\frac{\partial w}{\partial t}+u \frac{\partial w}{\partial x}+v \frac{\partial w}{\partial y}+w \frac{\partial w}{\partial z}\right)&=\rho g_z-\frac{\partial p}{\partial z}+\mu\left(\frac{\partial^2 w}{\partial x^2}+\frac{\partial^2 w}{\partial y^2}+\frac{\partial^2 w}{\partial z^2}\right)\\
\implies m\vec{a} &= \vec{F}
\end{aligned}
$$

### Dimensional analysis and similitude
Conservation Eqs., Momentum Eqs.:
$$
  \frac{\partial u}{\partial x} + \frac{\partial u}{\partial y} = 0\\
  \rho\left(u \frac{\partial u}{\partial x}+v \frac{\partial u}{\partial y}\right)=-\frac{\partial p}{\partial x}+\mu\left(\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}\right)\\
  \rho\left(u \frac{\partial v}{\partial x}+v \frac{\partial v}{\partial y}\right)=-\rho g-\frac{\partial p}{\partial y}+\mu\left(\frac{\partial^2 v}{\partial x^2}+\frac{\partial^2 v}{\partial y^2}\right)
$$

If using dimensionless variables:
$$
  x^*=\frac{x}{L}, \quad y^*=\frac{y}{L}, \quad u^*=\frac{u}{V_{\infty}}, \quad v^*=\frac{v}{V_{\infty}}, \quad p^*=\frac{p}{\rho V_{\infty}^2}
$$

Then
$$
  \frac{\partial u^*}{\partial x^*} + \frac{\partial u^*}{\partial y^*} = 0\\
  u^* \frac{\partial u^*}{\partial x^*}+v^* \frac{\partial u^*}{\partial y^*}=-\frac{\partial p^*}{\partial x^*}+\frac{\mu}{\rho V_{\infty} L}\left(\frac{\partial^2 u^*}{\partial x^{* 2}}+\frac{\partial^2 u^*}{\partial y^{* 2}}\right)\\
  u^* \frac{\partial v^*}{\partial x^*}+v^* \frac{\partial v^*}{\partial y^*}=-\frac{g L}{V_{\infty}^2}-\frac{\partial p^*}{\partial y^*}+\frac{\mu}{\rho V_{\infty} L}\left(\frac{\partial^2 v^*}{\partial x^{* 2}}+\frac{\partial^2 v^*}{\partial y^{* 2}}\right)
$$

| Dimensionless Number in Fluid Mechanics | Value |
| :--- | :--- |
| Reynolds number (inertia to viscous): | $R e=\frac{\rho V L}{\mu}=\frac{V L}{\mathrm{v}}$ |
| Prandtl number (Kimematic viscosity to thermal diffusivity) | $Pr = \frac{\nu}{\alpha}$ |
| Euler number (pressure to inertia): | $E u=\frac{\Delta p}{\frac{1}{2} \rho V^2}$ |
| Drag coefficient | $C_D=\frac{F_D}{\frac{1}{2} \rho V^2 L^2}$ |
| Lift coefficient | $C_L=\frac{F_L}{\frac{1}{2} \rho V^2 L^2}$ |
| Cavitation number: | $C a=\frac{p-p_v}{\frac{1}{2} \rho V^2}$ |
| Froude number (inertia to gravity): | $F r=\frac{V}{\sqrt{g L}}$ |
| Weber number (inertia to surface tension): | $W e=\frac{\rho V^2 L}{\sigma}$ |
| Mach number (inertia to compressibility): | $M=\frac{V}{c}$ |
| Centrifugal pump specific speed (in terms of head $h$ ): | $N_s=\frac{\omega Q^{1 / 2}}{h^{3 / 4}}$ |
| Centrifugal pump specific speed (in terms of head $H$ ): | $N_{s_{c u}}=\frac{\omega Q^{1 / 2}}{H^{3 / 4}}$ |

### Internal incompressible viscous flow
Flow in the entrance region of a pipe:
$$
\frac{L}{D} \simeq 0.06 \frac{\rho \bar{V} D}{\mu}
$$

Fully Developed Laminar Flow in a Pipe, see [Internal Flow](./4internalFlow#laminar-and-turbulent-flows) for more details
$$
\begin{aligned}
u & =-\frac{R^2}{4 \mu}\left(\frac{\mathrm{~d} p}{\mathrm{~d} x}\right)\left[1-\left(\frac{r}{R}\right)^2\right], \quad&& \frac{u}{U}=1-\left(\frac{r}{R}\right)^2 \\
u &= u_{\max} = U = -\frac{R^2}{4\mu}\left(\frac{\mathrm{~d} p}{\mathrm{~d} x}\right) = 2\overline{V} , \quad&& \tau_{r x}  =\mu \frac{\mathrm{~d} u}{\mathrm{~d} r}=\frac{r}{2}\left(\frac{\mathrm{~d} p}{\mathrm{~d} x}\right)
\end{aligned}
$$

laminar vs. turbulent
<img src="/fluid_tf6_2_lami_vs_turb.png" alt="laminar vs. turbulent" width="100%" align="center">

$$
  \tau = \tau_{\mathrm{lam}} + \tau_{\mathrm{tur}} = \mu\frac{\mathrm{~d} \bar{u}}{\mathrm{~d} y} - \rho \overline{u'v'}
$$

### Time-averaged momentum equation for incompressible fluids
<img src="/fluid_tf6_3_velocity_turb.png" alt="velocity in turbulent" width="100%" align="center">

$$
  v_z=\bar{v}_z+v_z^{\prime} \quad \text{(Reynolds decomposition), where}\\
  \bar{v}_z=\frac{1}{t_0} \int_{t-\frac{1}{2} t_0}^{t+\frac{1}{2} t_0} v_z(s) \mathrm{~d} s
$$

Know that
$$
  \overline{v'_z} = 0, \quad \overline{\bar{v}_z} = \bar{v}_z, \quad \overline{\bar{v}_zv'_z}=0, \quad \overline{\frac{\partial}{\partial x}v_z} = \frac{\partial}{\partial x}\bar{v}_z, \quad \overline{\frac{\partial}{\partial t}v_z} = \frac{\partial}{\partial t}\bar{v}_z
$$

Then for **Mass conservation eq.**:
$$
  \frac{\partial}{\partial x}\left(\bar{v}_x+v_x^{\prime}\right)+\frac{\partial}{\partial y}\left(\bar{v}_y+v_y^{\prime}\right)+\frac{\partial}{\partial z}\left(\bar{v}_z+v_z^{\prime}\right)=0
$$

For **Momentum conservation eq.** ($x$-direction):

$$
\begin{align*}
  \frac{\partial}{\partial t} \rho\left(\bar{v}_x+v_x^{\prime}\right)=&-\frac{\partial}{\partial x}\left(\bar{p}+p^{\prime}\right)-\left(\frac{\partial}{\partial x} \rho\left(\bar{v}_x+v_x^{\prime}\right)\left(\bar{v}_x+v_x^{\prime}\right)+\frac{\partial}{\partial y} \rho\left(\bar{v}_y+v_y^{\prime}\right)\left(\bar{v}_x+v_x^{\prime}\right)\right.\\
  &\left.+\frac{\partial}{\partial z} \rho\left(\bar{v}_z+v_z^{\prime}\right)\left(\bar{v}_x+v_x^{\prime}\right)\right)+\mu \nabla^2\left(\bar{v}_x+v_x^{\prime}\right)+\rho g_x
\end{align*}
$$

With time averaging:
$$
\begin{align*}
  \frac{\partial}{\partial x} \bar{v}_x+&\frac{\partial}{\partial y} \bar{v}_y+\frac{\partial}{\partial z} \bar{v}_z=0\\
  \frac{\partial}{\partial t} \rho \bar{v}_x= & -\frac{\partial}{\partial x} \bar{p}-\left(\frac{\partial}{\partial x} \rho \bar{v}_x \bar{v}_x+\frac{\partial}{\partial y} \rho \bar{v}_y \bar{v}_x+\frac{\partial}{\partial z} \rho \bar{v}_z \bar{v}_x\right) \\ & -\left(\frac{\partial}{\partial x} \rho \overline{v_x^{\prime} v_x^{\prime}}+\frac{\partial}{\partial y} \rho \overline{v_y^{\prime} v_x^{\prime}}+\frac{\partial}{\partial z} \rho \overline{v_z^{\prime} v_x^{\prime}}\right)+\mu \nabla^2 \bar{v}_x+\rho g_x
\end{align*}
$$

Know that **Stress = Viscous Stress + Turbulent Stress** (Reynolds Stress):
$$
  \frac{\tau}{\rho}=\nu \frac{\mathrm{~d} u}{\mathrm{~d} y}+\overline{u^{\prime} v^{\prime}}
$$

let:
$$
\begin{aligned} & \bar{\tau}_{x x}^{(t)}=\rho \overline{v_x^{\prime} v_x^{\prime}} \quad \bar{\tau}_{x y}^{(t)}=\rho \overline{v_x^{\prime} v_y^{\prime}} \quad \bar{\tau}_{x z}^{(t)}=\rho \overline{v_x^{\prime} v_z^{\prime}} \text { and so on, then} \\ & \frac{\partial}{\partial t} \rho \overline{\boldsymbol{v}}=-\boldsymbol{\nabla} \bar{p}-[\boldsymbol{\nabla} \cdot \rho \bar{\boldsymbol{v}} \bar{\boldsymbol{v}}]-\left[\boldsymbol{\nabla} \cdot\left(\overline{\boldsymbol{\tau}}^{(v)}+{\overline{\boldsymbol{\tau}}}^{(t)}\right)\right]+\rho \boldsymbol{g}\end{aligned}
$$

### Turbulent velocity profiles in fully developed pipe flow

Prandtl proposed a model for the turbulent viscosity based on mixing in the flow. He hypothesized that the turbulent fluctuations in the mean velocity $\bar{u}$ are a result of a small element of fluid moving upward a small distance $\ell$ into a region of higher velocity. The **fluctuating velocity** $u^ \prime$ is then negative and given by
$$
u^{\prime}=-\ell \frac{d \bar{u}}{d y}
$$

The quantity $\ell$ is called the **mixing length**. He reasoned that the fluctuation upward of the small element of fluid is caused by a vertical fluctuation in the $v$-component of velocity, and thus
$$
v^ \prime=\ell \frac{d \bar{v}}{d x}
$$

In **homogeneous turbulence**, the fluctuations $u ^\prime$ and $v^ \prime$ are equal and thus the $v$-component of the fluctuation $v^{\prime}$ is the same as the $u$-component, or
$$
v ^\prime=u ^\prime=\ell \frac{d \bar{u}}{d y}
$$

The **turbulent shear stress** is then approximated as
$$
\frac{\tau_{\text {turb }}}{\rho}=\ell^2\left(\frac{\mathrm{~d} \bar{u}}{\mathrm{~d} y}\right)^2
$$

Further, Prandtl hypothesized that the mixing length $\ell$ increases in proportion to the distance from the wall.
$$
\ell=k y
$$

Although this is all very approximate and intended mainly to provide some insight into the mechanisms that transfer momentum in a turbulent flow, it has proved very useful in understanding and modeling turbulent flows.

The total shear stress is the sum of the laminar and turbulent shear stresses. Very near the wall the laminar contribution dominates. Further, very near the wall, the shear stress is essentially equal to the value at the wall. In this wall layer, the shear stress is then given by
$$
\frac{\tau}{\rho} \approx \frac{\tau_w}{\rho}=\nu \frac{\mathrm{~d} \bar{u}}{\mathrm{~d} y}
$$

It is convenient to introduce the **friction velocity**, $u_*$, which is the square root of the wall shear stress divided by the density, and defined as
$$
u_*=\sqrt{\frac{\tau_w}{\rho}}
$$

Further, it is convenient to work with wall coordinates $u^{+}$and $y^{+}$defined as

$$
  u^{+}=\frac{\bar{u}}{u_*} \text { and } y^{+}=\frac{y u_*}{\nu}
$$

The relation for shear stress near the wall can then be written as
$$
  1=\frac{\mathrm{~d} u^{+}}{\mathrm{~d} y^{+}}
$$

where
$$
  u_*^2=\frac{\tau_w}{\rho} = \nu \frac{\mathrm{~d} \bar{u}}{\mathrm{~d} y} = \nu \frac{\mathrm{~d} (u_*u^+)}{\mathrm{~d} (\nu y^+ / u_*)} = u_*^2\frac{\mathrm{~d} u^{+}}{\mathrm{~d} y^{+}}
$$

This is readily integrated to yield a linear velocity profile
$$
u^{+}=y^{+} \tag{1}
$$

In the flow farther from the wall, but still near enough the wall that the total shear stress equals the wall value, **the laminar stress is much smaller than the turbulent stress**. Neglecting the laminar contribution gives the relation
$$
\frac{\tau}{\rho} \approx \frac{\tau_w}{\rho}=k^2 y^2\left(\frac{\mathrm{~d} \bar{u}}{\mathrm{~d} y}\right)^2
$$

In wall coordinates $u^{+}$and $y^{+}$, and taking the square root of both sides, the relation becomes
$$
1=k y^{+} \frac{\mathrm{~d} u^{+}}{\mathrm{~d} y^{+}}
$$

where
$$
u_*^2=k^2\left(\frac{y^{+} \nu}{u_*}\right)^2\left\{\frac{\mathrm{~d}\left(u_* u^{+}\right)}{\mathrm{~d}\left(y^{+} \nu / u_*\right)}\right\}^2
$$

This relationis integrated to yield
$$
u^{+}=\frac{1}{k} \ln y^{+}+C
$$

Using experimental data, the constant $k$, which is called Karman's constant, has been evaluated as 0.4 and the constant $C$ as 5.0 . In this region the velocity profile is given as
$$
u^{+}=\frac{\bar{u}}{u_*}=2.5 \ln \frac{y u_*}{\nu}+5.0, \quad \mathrm{Or} \quad u^{+}=2.5 \ln y^{+}+5.0 \tag{2}
$$

<img src="/fluid_tf6_4_u-y.png" alt="u-y curve" width="100%" align="center">

The velocity profile data for turbulent pipe flow from a large number of investigators is plotted in Fig. 8.9 on semi-logarithmic coordinates. In the region very close to the wall where viscous shear is dominant, called the viscous sublayer, the mean velocity profile follows the linear relation given by Eq .1 up to about $y^{+}=5$. This region is called the viscous sublayer and the turbulent friction is negligible compared to the viscous friction. In the region where the viscous effects are negligible, Eq. 2 is valid from about $y^{+}=30$ out to the region where the shear stress is no longer constant with distance from the wall. This region is called the logarithmic layer. Between $y^{+}=5$ and $y^{+}=30$ is the buffer layer where both viscosity and turbulence contribute to the shear stress. 

Surprisingly, the model proposed by Prandtl nearly 100 years ago has proved valuable in understanding and analyzing turbulent flows.
If Eq. 2 is evaluated at the centerline ( $y=R$ and $u=U$ ) and the general expression of Eq. 2 is subtracted from the equation evaluated at the centerline, we obtain
$$
\frac{U-\bar{u}}{u_*}=2.5 \ln \frac{R}{y} \tag{3}
$$

where $U$ is the centerline velocity. Equation 3 , referred to as the **defect law**, shows that the velocity defect is a function of the distance ratio only and does not depend on the viscosity of the fluid.

### Internal incompressible viscous flow
$$
  \left(\frac{p_1}{\rho}+\alpha_1 \frac{\bar{V}_1^2}{2}+g z_1\right)-\left(\frac{p_2}{\rho}+\alpha_2 \frac{\bar{V}_2^2}{2}+g z_2\right)=h_{l_T}
$$

where
$$
\int_A \frac{V^2}{2} \rho V d A=\alpha \int_A \frac{\bar{V}^2}{2} \rho V d A=\alpha \dot{m} \frac{\bar{V}^2}{2}, \quad \alpha=\frac{\int_A \rho V^3 d A}{\dot{m} \bar{V}^2}
$$

is a Kinetic Energy Coefficient. Then the **Major Losses**: Friction Factor
- In Laminar Flow
$$
h_l=32 \frac{L}{D} \frac{\mu \bar{V}}{\rho D}=\frac{L}{D} \frac{\bar{V}^2}{2}\left(64 \frac{\mu}{\rho \bar{V} D}\right)=\left(\frac{64}{R e}\right) \frac{L}{D} \frac{\bar{V}^2}{2}
$$

- Turbulent Flow
$$
\frac{h_l}{\frac{1}{2} \bar{V}^2}=\frac{L}{D} \rho_2\left(R e, \frac{e}{D}\right) \quad f \equiv \rho_2\left(R e, \frac{e}{D}\right)
$$

where $\rho_2$ is Undetermined function

Thus:
$$
h_l=f \frac{L}{D} \frac{\bar{V}^2}{2}
$$

where
$$
f_{\text {laminar }}=\frac{64}{R e}
$$

And Colebrook
$$
\frac{1}{\sqrt{f}}=-2.0 \log \left(\frac{e / D}{3.7}+\frac{2.51}{\operatorname{Re} \sqrt{f}}\right)
$$
$$
f=\frac{0.316}{R e^{0.25}} \quad R e \leq 10^5: \quad f=\frac{0.184}{R e^{0.2}} \cdot R e>10^5
$$

Minor Losses:
$$\quad h_{l_m}=K \frac{\bar{V}^2}{2}$$

See [Internal Flow](./4internalFlow) about laminar and turbulent flows in pipes as well as minor losses, for more details.

### External incompressible viscous flow
**Drag**: 
$$
  C_D = \frac{F_D}{\frac12\rho V^2A}, \quad C_D = f(Re)
$$

- Pure **Friction** Drag: Flow over a Flat Plate **Parallel** to the Flow 
- Pure **Pressure** Drag: Flow over a Flat Plate **Normal** to the Flow 

**Lift**:
$$
  C_L = \frac{F_L}{\frac12\rho V^2A_p}
$$

where $A_p$ is the platform area

### Example: Pipe flow into a reservoir
<img src="/fluid_tf6_5_example.png" alt="example" width="100%" align="center">

A 100-m length of smooth horizontal pipe is attached to a large reservoir. A pump is attached to the end of the pipe to pump water into the reservoir at a volume flow rate of $0.01 \mathrm{~m}^3 / \mathrm{s}$. What pressure must the pump produce at the pipe to generate this flow rate? The inside diameter of the smooth pipe is 75 mm .

- **Given**:
Water is pumped at $0.01 \mathrm{~m}^3 / \mathrm{s}$ through a $75-\mathrm{mm}$-diameter smooth pipe, with $L=100 \mathrm{~m}$, into a constant-level reservoir of depth $d=10 \mathrm{~m}$.

- **Find**:
**Pump pressure**, $p_1$, required to maintain the flow.

- **Solution**:
Governing equations:

$$
\left(\frac{p_1}{\rho}+\alpha_1 \frac{\bar{V}_1^2}{2}+g z_1\right)-\left(\frac{p_2}{\rho}+\alpha_2 \frac{\bar{V}_2^2}{2}+g z_2\right)=h_{l_T}=h_l+h_{l_m}
$$

where
$$
h_l=f \frac{L}{D} \frac{\bar{V}^2}{2}
$$

and
$$
h_{l_m}=K \frac{\bar{V}^2}{2}
$$

For the given problem, $p_1=p_{\text {pump }}$ and $p_2=0$ (gage), so $\Delta p=p_1-p_2=p_{\text {pump }}, \bar{V}_1=\bar{V}, \bar{V}_2 \approx 0, K($ exit loss $)=1.0$, and $\alpha_1 \approx 1.0$. If we set $z_1=0$, then $z_2=d$. Simplifying Equation gives
$$
\frac{\Delta p}{\rho}+\frac{\bar{V}^2}{2}-g d=f \frac{L}{D} \frac{\bar{V}^2}{2}+\frac{\bar{V}^2}{2}
$$

The left side of the equation is the loss of mechanical energy between points (1) and (2); the right side is the major and minor losses that contributed to the loss. Solving for the pressure drop, $\Delta p=p_{\text {pump }}$,
$$
p_{\text {pump }}=\Delta p=\rho\left(g d+f \frac{L}{D} \frac{\bar{V}^2}{2}\right)
$$

Everything on the right side of the equation is known or can be readily computed. The flow rate $Q$ leads to $\bar{V}$,
$$
\bar{V}=\frac{Q}{A}=\frac{4 Q}{\pi D^2}=\frac{4}{\pi} \times 0.01 \frac{\mathrm{~m}^3}{\mathrm{~s}} \times \frac{1}{(0.075)^2 \mathrm{~m}^2}=2.26 \mathrm{~m} / \mathrm{s}
$$

This in turn [assuming water at $20^{\circ} \mathrm{C}, \rho=999 \mathrm{~kg} / \mathrm{m}^3$, and $\mu=1.0 \times 10^{-3} \mathrm{~kg} /(\mathrm{m} \cdot \mathrm{s})$ ] leads to the Reynolds number
$$
Re=\frac{\rho \bar{V} D}{\mu}=999 \frac{\mathrm{~kg}}{\mathrm{~m}^3} \times 2.26 \frac{\mathrm{~m}}{\mathrm{~s}} \times 0.075 \mathrm{~m} \times \frac{\mathrm{m} \cdot \mathrm{~s}}{1.0 \times 10^{-3} \mathrm{~kg}}=1.70 \times 10^5
$$

For **turbulent flow** in a smooth pipe ( $e=0$ ), from Colebrook equation, $f=0.0162$. Then
$$
\begin{aligned}
p_{\text {pump }} & =\Delta p=\rho\left(g d+f \frac{L}{D} \frac{V^2}{2}\right) \\
& =999 \frac{\mathrm{~kg}}{\mathrm{~m}^3}\left(9.81 \frac{\mathrm{~m}}{\mathrm{~s}^2} \times 10 \mathrm{~m}+(0.0162) \times \frac{100 \mathrm{~m}}{0.075 \mathrm{~m}} \times \frac{(2.26)^2 \mathrm{~m}^2}{2 \mathrm{~s}^2}\right) \times \frac{\mathrm{N} \cdot \mathrm{~s}^2}{\mathrm{~kg} \cdot \mathrm{~m}} \\
p_{\text {pump }} & =1.53 \times 10^5 \mathrm{~N} / \mathrm{m}^2 \text { (gage) }
\end{aligned}
$$

Hence,
$$
p_{\text {pump }}=153 \mathrm{kPa} \text { (gage) }
$$

## Basic Concept about Two Phase Flow
### Nature of multiphase flows
Two-phase flows
- Gas-liquid
- Gas-solid
- Solid-liquid
- Liquid-liquid

**Phase change**
- Adiabatic: flashing (vaporization due to pressure changes)
- Diabatic: vaporization (boiling) or condensation

<img src="/fluid_tf6_6_bubble.png" alt="bubble" width="100%" align="center">

**Orientation**
- Vertical
- Horizontal
- Inclined

**Flow direction**
- Parallel or co-current flow
- Counter-current flow (e.g. falling liquid and rising gas)

### Phenomena unique to multiphase flow:
- Critical heat flux
- Flow excursion
  - Ledinegg instabilities
- Pressure drop
  - Single-phase flow straightforward
  - Two-phase flow: much more complicated
- Critical flows
  - Single-phase flow: chocked at sonic velocity
  - Two-phase flow: non-equilibrium

Application: air conditioner, nuclear reactor, thermal management, ...

The **boiling curve**:[core]

<img src="/fluid_tf6_7_boiling.png" alt="boiling" width="100%" align="center">

First slope(single phase flow, Newton laws of cooling): $q'' = h\Delta T$, where $\Delta T = T_w - T_{\mathrm{sat}}$ and $T_{\mathrm{sat}}=100^\circ C$ for water at $P=0.1\mathrm{~MPa}$, $T_w$ is temperatur of water.

### Nature of multiphase flows and basic concepts

> *Introduction to Multiphase Flow*

::: warning Definition: Phase
A **phase** is a thermodynamic definition for the state of the matter, which can be either solid, liquid or gas; these can co-exist in a conduit. Examples of multiphase flows are abundant, e.g. when oil is produced, one normally gets oil, water, gas and sand flowing in the pipelines (three-phase flow).
:::

::: warning Definition: mixture
The term **mixture** is most of the time used to denote the two (or more) phases flowing together and does not necessarily imply that these are intimately mixed. For example, in the case of annular flow that we will introduce below, we may still refer to the flow as the **two-phase mixture** in spite of the fact that the liquid film on the wall and the gaseous core are not at all “mixed”. The term “**separated flow”** is often
used loosely to denote two-phase flows where the two phases have **different average velocities**. This distinguishes such flows from the **homogeneous** ones, where the phases have the **same average velocity**; again, such flows may strictly speaking not be homogeneous at all. For example, bubbly flow with fairly large bubbles can be considered as homogeneous.
:::

::: warning Definition: component
A **component**, is a chemical species. So, the term two-component is used to describe the flow of **two chemical species**. A water–steam mixture is **two-phase, one-component**, while a **water–air** mixture is **two-phase, two-component flow**; a water–oil mixture is one-phase, two-component, etc. The approach in modelling of the two alternative two-phase configurations—with one or two components—is often the same or very similar, though the physical behaviour of different mixtures
may be quite different.
:::

::: warning Definition: field
The term **field** is used to denote a topologically distinct or clearly identifiable fraction of a phase. For example, in the so-called annular flow, the liquid can be present as either a film on the wall or as droplets in the core where the gas flows; the droplets and the film can be considered as different fields. In a closed vessel such as a pressure cooker containing boiling water, we may define a field of steam bubbles in the liquid and a field of steam in the space above the liquid surface as separate fields.
:::

**Averaging** in two-phase flow
- Local instantaneous quantity
- Local time-averaged quantity
- Instantaneous space-averaged quantity
- Time and space-averaged quantity
- Space averaging: Line, area, and volume-averaging

### Key parameters in two-phase flow [core]
#### Void fraction
- Local instantaneous void fraction (0 or 1)
- Instantaneous (volume, area, or line)-averaged void fraction (0-to-1)
  $$
    \langle \alpha\rangle = \frac{1}{A}\int_A \alpha\mathrm{\mathrm{~d}}A
  $$
- Time-averaged local void fraction (0-to-1)
  $$
    \bar{\alpha}^t = \frac{1}{\Delta t}\int_{\Delta t}\alpha\mathrm{~d}t
  $$
- Time and (volume, area, or line)-averaged void fraction (0-to-1)
  $$
    \langle \bar{\alpha}^t\rangle = \frac{1}{A}\int_A \bar{\alpha}^t \mathrm{~d}A
  $$

#### Phase velocity
- Instantaneous local gas (or liquid) velocity
- Phase-averaged local gas (or liquid) velocity
- Phase fraction weighted mean gas or liquid velocity
- Superficial gas or liquid velocity

**Void fraction weighted mean** (time-averaged) actual gas velocity:
$$
    \langle\langle v_g\rangle\rangle \equiv \frac{\langle \alpha v_g\rangle}{\langle \alpha\rangle} = \frac{\langle j_g\rangle}{\langle \alpha\rangle} = \frac{Q_g}{A_g}
$$

Area (and time)-averaged **superficial gas velocity** (volume center velocity):
$$
    \langle j_g\rangle \equiv \langle \alpha v_g\rangle = \frac{Q_g}{A}
$$

where $A$ is the flow channel area, $A_g$ is the gas flow area.
> $$v_g \ge j_g$$

<img src="/fluid_tf6_8_phase_velocity.png" alt="phase velocity" width="100%" align="center">

#### Flow quality
- Mass velocity (or mass flux) of $k$-phase, $G_k\left[\mathrm{~kg} /\left(\mathrm{m}^2 \cdot \mathrm{~s}\right)\right]$ (Mass flow rate, $W_k$ [kg/s])
$$
G_g \equiv \frac{W_g}{A}, \quad G_f \equiv \frac{W_f}{A} \\
G = \rho_g\langle j_g\rangle + \rho_f\langle j_f\rangle = \rho_g\langle j_g\rangle + \rho_f\langle j_f\rangle = \rho_g\langle\alpha\rangle \langle  \langle v_g\rangle \rangle + \rho_f(1-\langle\alpha\rangle) \langle  \langle v_f\rangle \rangle
$$
- Mass flowrate quality (or quality), $\langle x\rangle$ [-]
$$
\begin{gathered}
\langle x\rangle=\frac{G_g}{G} = \frac{\rho_g\langle j_g\rangle}{G} = \frac{\text{Gas mass flow}}{\text{Two-phase mixture mass flow}}\\
1-\langle x\rangle=\frac{G_f}{G},\quad  G \equiv G_g+G_f
\end{gathered}
$$
- Superficial gas velocity, $\left\langle j_{{g}}\right\rangle[\mathrm{m} / \mathrm{s}]$
$$
\left\langle j_g\right\rangle=\frac{G_g}{\rho_g}=\frac{G\langle x\rangle}{\rho_g},\quad\left\langle j_f\right\rangle=\frac{G_f}{\rho_f}=\frac{G(1-\langle x\rangle)}{\rho_f}, \quad \langle j\rangle = \langle j_g\rangle + \langle j_f\rangle
$$

and
$$
\begin{align*}
  \left\langle j_g\right\rangle=\frac{Q_g}{A} = \frac{W_g}{A}\frac{1}{\rho_g} = \frac{G_g}{\rho_g}=\frac{G\langle x\rangle}{\rho_g}
\end{align*}
$$
- Volume flowrate quality, $\beta[-]$ (Mixture volumetric flux, $\langle j\rangle$ [m/s])
$$
\langle\beta\rangle \equiv \frac{\left\langle j_g\right\rangle}{\left\langle j_g\right\rangle+\left\langle j_f\right\rangle}=\frac{\left\langle j_g\right\rangle}{\langle j\rangle}
$$

When **HEM**(homogeneous) is assumed, $\rho = \rho_m, \quad \langle\beta\rangle = \langle\alpha\rangle$

#### Mixture density
- Assumption: Perfectly mixed gas and liquid phases with the same velocity (**homogeneous** flow), $v_m$ ($\nu$: specific volume, $\rho$: density)
$$
  v_m = G\nu_m = \frac{G}{\rho_m} = j = v_g = v_f
$$
- Specific volume of mixture $[\mathrm{m}^3/\mathrm{kg}]$
$$
  \nu = \langle x\rangle\nu_g + (1-\langle x\rangle)\nu_f = \frac{\langle x\rangle}{\rho_g} + \frac{1-\langle x\rangle}{\rho_f}
$$
- Mixture density $[\mathrm{kg} / \mathrm{m}^3]$
$$
  \rho_m = \frac{1}{\frac{\langle x\rangle}{\rho_g} + \frac{1-\langle x\rangle}{\rho_f}}
$$

> With different velocity:
> $$
  \langle\langle v_g\rangle\rangle = \frac{G\langle x\rangle}{\rho_g\langle\alpha\rangle}, \quad \langle\langle v_f\rangle\rangle = \frac{G(1-\langle x\rangle)}{\rho_f(1-\langle\alpha\rangle)} 
$$
> 
> - Mixture density:
> $$
  \rho_m = \langle \alpha\rangle\rho_g + (1-\langle \alpha\rangle)\rho_f
> $$
>
> - Mixture velocity (Mass center velocity)
> $$
> v_m = \frac{G}{\rho_m} = \frac{\rho_g\langle\alpha\rangle \langle  \langle v_g\rangle \rangle + \rho_f(1-\langle\alpha\rangle) \langle  \langle v_f\rangle \rangle}{\langle \alpha\rangle\rho_g + (1-\langle \alpha\rangle)\rho_f}
> $$
> 

#### Summary
- Void fraction
$$
\alpha[-]=\frac{\text { Total volume of dispersed phase }}{\text { Total volume }} = \frac{A_g}{A}.
$$

- Interfacial area concentration
$$
a_i\left[\mathrm{~m}^{-1}\right]=\frac{\text { Total interfacial area of dispersed phase }}{\text { Total volume }}
$$

$$
\begin{aligned}
& \alpha=n \frac{1}{6} \pi D_b^3, a_i=\frac{6 \alpha}{D_b} \\
& n=\frac{1}{36 \pi}\left(\frac{a_i^3}{\alpha^2}\right) = \frac{N}{V_c}
\end{aligned}
$$

- Bubble number density
$$
n\left[\mathrm{~m}^{-3}\right]=\frac{\text { Total number of fluid particle }}{\text { Total volume }}
$$

- Energy dissipation rate per unit mass
$$
\begin{align*}
  \varepsilon\left[\mathrm{m}^2 / \mathrm{s}^3\right]=& \text{Dissipation rate of turbulent energy in flow per unit mass} \\
  =& \text{Energy production rate per unit mass}
\end{align*}$$

- Superficial $k$-phase velocity
$$j_k[\mathrm{~m} / \mathrm{s}]=\frac{\text { Volume flow rate }}{\text { Channel cross-sectional area }}=\frac{Q_k}{A}$$
- Reynolds number
$$
R e=\frac{\text{Inertia force}}{\text{Viscous force}} = \frac{\rho_f v_f D}{\mu_f}
$$

- Bubble Reynolds number
$$
R e_b=\frac{\rho_m v_r D_b}{\mu_m}
$$

- Quality
$$
x=\frac{G_g}{G}=\frac{\text { Mass flux of gas phase }}{\text { Total mass flux }}
$$

- $k$-phase velocity
$$
v_k[\mathrm{~m} / \mathrm{s}]=\frac{\text { Volume flow rate }}{k \text {-phase cross-sectional area }}=\frac{Q_k}{A_k} = \frac{j_k}{\alpha_k}
$$

### Fundamental equations for separated two-phase flow

<img src="/fluid_tf6_9_2phase.png" alt="2 phase" width="100%" align="center">

**Objective**: Derive area-averaged (1D) mass and momentum balance equations

**Assumptions**: Constant flow area, heated wall, two phases flowing separately
- Mass flow rates $[\mathrm{kg/s}]\to$ phase velocity $[\mathrm{m/s}]$ x Density $[\mathrm{kg/m^3}]$ x Flow area $[\mathrm{m^2}]$
$$
W_g=A_g \rho_g u_g, \quad W_l=A_l \rho_l u_l
$$
- 1D Mass conservation equation (Continuity equation)
  - Physical meaning: Phase change may change $W_g,W_l$. However, total mass flow ratte at the elevation is **unchanged** by the phase change
$$
W_g+W_l=W=\mathrm{const} \quad \mathrm{~d} W_g+\mathrm{~d} W_l=0
$$
- 1D Momentum $[N]$ conservation equation

  - For gas phase
$$
\mathrm{~d} M_g-\underbrace{u_{l} \mathrm{~d} W_g}_{\text{Phase change}}=-\underbrace{A_{g} \mathrm{~d} p}_{\text{Pressure}}-\underbrace{\rho_{g} g A_{g} \mathrm{~d} z}_{\text{Gravity}}-\underbrace{2 \pi r_{l} \tau_{l} \mathrm{~d} z}_{\text{Shear b/w gas \& liquid}}
$$
  - For liquid phase
$$
\mathrm{~d} M_l+u_l \mathrm{~d} W_g=-A_l \mathrm{~d} p-\rho_l g A_l \mathrm{~d} z-2 \pi r_w \tau_w \mathrm{~d} z+\underbrace{2 \pi r_{l} \tau_{l} \mathrm{~d} z}_{\text{Wall shear}}
$$

$$
\implies -\left(\frac{\mathrm{~d} p}{\mathrm{~d} z}\right)=\underbrace{\left[\alpha \rho_g+(1-\alpha) \rho_l\right] g}_{\text{Hydrostatic pressure loss}}+\underbrace{\frac{2 \pi r_w}{A} \tau_w}_{\text{Frictional pressure loss}}+\underbrace{\frac{1}{A} \frac{\mathrm{~d}}{\mathrm{~d} z}\left(M_g+M_l\right)}_{\text{Acceleration loss}}
$$

**Further assumption**: Uniform gas and liquid velocities over flow channel
$$
\begin{aligned}
& M=\int \rho u^2 \mathrm{~d} A \\
& M_g=\rho_g u_g{ }^2 A_g=W_g u_g, \quad M_l=\rho_lu_l{ }^2 A_l=W_l u_l \\
& W_g u_g+W_l u_l=\frac{W^2}{A}\left[\frac{x^2}{\alpha \rho_g}+\frac{(1-x)^2}{(1-\alpha) \rho_l}\right], \quad x=W_g / W
\end{aligned}
$$

$$
\begin{aligned}
  \frac{1}{A}\frac{\mathrm{d}}{\mathrm{d}z}(M_g+M_l) =& \frac{1}{A}\frac{\mathrm{d}}{\mathrm{d}z}\left\{\frac{W^2}{A}\left[\frac{x^2}{\alpha \rho_g}+\frac{(1-x)^2}{(1-\alpha) \rho_l}\right]\right\}\\
  =& G^2 \frac{\mathrm{d}}{\mathrm{d}z}\left[\frac{x^2}{\alpha \rho_g}+\frac{(1-x)^2}{(1-\alpha) \rho_l}\right].
\end{aligned}
$$

Thus, Pressure change for total length $L$ (Initial condition, $\alpha=0$ at $x=0$ )

$$
-\left(\frac{\mathrm{~d} p}{\mathrm{~d} z}\right)=\left[\alpha \rho_g+(1-\alpha) \rho_l\right] g+2 \frac{\tau_w}{r_w}+G^2 \frac{\mathrm{~d}}{\mathrm{~d} z}\left[\frac{x^2}{\alpha \rho_g}+\frac{(1-x)^2}{(1-\alpha) \rho_l}\right]
$$

$$
\begin{aligned}
-\Delta p=&\int_0^L\left[\alpha \rho_g+(1-\alpha) \rho_l\right] g \mathrm{~d} z+\frac{2}{r_w} \int_0^L \tau_w \mathrm{~d} z \quad \begin{aligned}
& \alpha_{\mathrm{e}}: \text { exit void fraction } \\
& x_{\mathrm{e}}: \text { exit quality }
\end{aligned}  \\
&+\frac{G^2}{\rho_l}\left[\frac{x_e^2}{\alpha_e}\left(\frac{\rho_l}{\rho_g}\right)+\frac{(1-x_e)^2}{1-\alpha_e}-1\right]\\
\implies& -\frac{\mathrm{~d}p}{\mathrm{~d}z} = \underbrace{\mathrm{HP}}_{\alpha} + \underbrace{\mathrm{FP}}_{\Phi_f^2} + \underbrace{\mathrm{AL}}_{=0}.
\end{aligned}
$$

Axial changes of void fraction and wall shear stress should be known to calculate the total pressure loss.

### Key components of one-dimensional two-phase flow analysis
- **Key two-phase flow parameters**
  - Void fraction
  - Quality
  - Phase velocity
  - Superficial velocity
  - Mixture density
  - Mixture viscosity
- **Key conservation equations**
  - Mass conservation equation (or continuity equation)
  - Momentum conservation equation
  - Energy conservation equation
- **Key constitutive equations**
  - Flow regime map (or flow regime transition criteria)
  - Void fraction
  - Two-phase frictional pressure drop
  - Heat transfer coefficient
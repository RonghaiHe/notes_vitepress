# Introduction to Thermo-fluid Dynamics of Two-phase Flow

- Fundamentals of two-phase flow
  - Two-phase flow definition
- Fundamentals of computational simulation code for two-phase flow
- Fundamentals of mass, momentum, and energy conservation equations for two-phase flow
  - Homogeneous flow model, drift-flux model, two-fluid model
- Fundamentals of several constitutive equations
  - Flow regime map
  - Void fraction
  - Interfacial area concentration
  - Frictional pressure drop
  - Interfacial force
- Two-phase flow modeling

## Fundamentals of two-phase flow
### What is two-phase flow
Two-phase flow is composed of two immiscible mediums.
- Gas-liquid two-phase flow
- Solid-gas two-phase flow
- Solid-liquid two-phase flow
- Liquid-liquid two-phase flow

<img src="/fluid_tf7_1_gas_liquid.jpg" alt="gas-liquid flow" width="100%" align="center">

| Class | Typical regimes | Geometry | Configuration | Examples |
| :--- | :--- | :--- | :--- | :--- |
|Separated flows|Film flow|<img src="/fluid_tf7_2_table1.png" alt="table of two-phase flow1" width="100%" align="center">|Liquid film in gas; Gas film in liquid|Film condensation; Film boiling|
||Annular flow|<img src="/fluid_tf7_2_table2.png" alt="table of two-phase flow2" width="100%" align="center">|Liquid core and gas film; Gas core and liquid film|Film boiling; Boilers|
||Jet flow|<img src="/fluid_tf7_2_table3.png" alt="table of two-phase flow3" width="100%" align="center">|Liquid jet in gas; Gas jet in liquid|Atomization; Jet condenser|
|Mix or Transactional flows|Cap, Slug or Churn-turbulent flow|<img src="/fluid_tf7_3_table1.png" alt="table2 of two-phase flow1" width="100%" align="center">|Gas pocket in liquid|Sodium boiling in forced convection|
|Mix or Transactional flows|Bubbly annular flow|<img src="/fluid_tf7_3_table2.png" alt="table2 of two-phase flow2" width="100%" align="center">|Gas bubbles in liquid film with gas core|Evaporators with wall nucleation|
|Mix or Transactional flows|Droplet annular flow|<img src="/fluid_tf7_3_table3.png" alt="table2 of two-phase flow3" width="100%" align="center">|Gas core with droplets and liquid film|Steam generator|
|Mix or Transactional flows|Bubbly droplet annular flow|<img src="/fluid_tf7_3_table4.png" alt="table2 of two-phase flow4" width="100%" align="center">|Gas core with droplets and liquid film with gas bubbles|Boiling nuclear reactor channel|
|Dispersed flows|Bubbly flow|<img src="/fluid_tf7_4_table1.png" alt="table3 of two-phase flow1" width="100%" align="center">|Gas bubbles in liquid|Chemical reactors|
|Dispersed flows|Droplet flow|<img src="/fluid_tf7_4_table2.png" alt="table3 of two-phase flow2" width="100%" align="center">|Liquid droplets in gas|Spray cooling|
|Dispersed flows|Particulate flow|<img src="/fluid_tf7_4_table3.png" alt="table3 of two-phase flow3" width="100%" align="center">|Solid particles in gas or liquid|Transportaion of powder|

<img src="/fluid_tf7_0_regime.png" alt="flow regime" width="100%" align="center">

<img src="/fluid_tf7_12_regime_map.png" alt="Mishima-Ishii regime map" width="100%" align="center">

- Bubbly-to-Slug: $\langle\alpha\rangle\to 0.3$

### Why is two-phase flow so difficult
**Different Density**:

<img src="/fluid_tf7_5_density.png" alt="density of two-phase flow" width="100%" align="center"> 

### Peculiar characteristics of two-phase flow dynamics
Thermal and Kinematic Non-Equilibrium
- **Driving Mechanism**: Natural circulation flow, forced convective flow (laminar or turbulent flow)
- **Flow Regime**: Dispersed (bubbly, slug, churn flow), separated (annular or stratified flow)
- **Flow Orientation**: Upward, downward, inclined, counter current, elbow, sudden expansion & contraction
- **Flow Channel Scale**: Micro, mini, conventional (or medium-size), large
- **Phase Change**: Wall nucleation & condensation, interfacial heat transfer, non-condensable gas effect
- **Wall Heat Transfer**: One-component with phase change, two-component without phase change
- **Wall Effect**: CHF, bubble nucleation, hydrophilic or hydrophobic
- **Characteristic Length Scale**: Kolmogorov scale, bubble size, sub-channel size, flow channel size
- **Pressure and Temperature**: Room temperature-to-nuclear reactor core temperature
- Gravity: Microgravity-to-elevated gravity
- **Flow Instability**: Geysering, chugging, density-wave oscillation
- **Pressure Wave and Shock Wave**: Water hammer, steam explosion
- **Critical Flow**: Choking flow
- **Flow Structure**: Internal flow, external flow
- **Coupling between Two-Phase Flow & Structure**: Flow induced vibration

## Fundamentals of computational simulation code for two-phase flow
### Key parameters in two-phase flow analysis
- Mass conservation eq.
- Momentum conservation eq.
- Energy conservation eq.

### Simplified computational code structure
<img src="/fluid_tf7_6_procedure.png" alt="procedure of solving two-phase flow" width="100%" align="center"> 

No. of balance eq.
Single-phase flow: 3
Two-phase flow: 3(mixture model), 6 (=3×2), or others?
Assumptions
- Relative velocity b/w gas & liquid phases
- Temperature difference b/w gas & liquid phases
Two-phase flow model
- Homogeneous flow model
- Mixture model
- Two-fluid model
Pros. & Cons.
- Numerical instability
- Available constitutive eqs.

### Averaging methods
- Time domain
  - **Instantaneous**
  - Time average
- Space domain
  - **Local**
  - Control volume (or surface) average
  - 1D (Nuclear system analysis)
  - Porous (Steam generator analysis)
  - Sub-channel (Sub-channel analysis)
  - 3D (Detailed analysis of flow field)

## Fundamentals of mass, momentum, and energy conservation equations for two-phase flow
### Instantaneous single-phase flow
Reynolds number: (inertia force / viscous force)

N-S equation (Instantaneous formulation):
$$
\begin{aligned}
  \rho \frac{D \boldsymbol{v}}{D t}=&-\nabla p-\nabla \cdot \mathfrak{C}^\mu+\rho \boldsymbol{g}\\
    m\boldsymbol{a} =& \boldsymbol{F}
\end{aligned}
$$

$\boldsymbol{F}$ = (Surface force) + (Volumetric force)
- (Surface force) = (Pressure)+(Shear stress)
- (Volumetric force) = (Gravity)

$\boldsymbol{a}$ = (Local acceleration) + (Convective acceleration)

### Time-averaged single-phase flow
> $$
    \overline{A\times B}\neq \bar{A}\times \bar{B}\\
    \overline{A\times B}= \bar{A}\times \bar{B} + \alpha
> $$


N-S equation (Time-averaged formulation):
$$
    \rho \frac{D \bar{\boldsymbol{v}}}{D t}=-\nabla \bar{p}-\nabla \cdot \left(\overline{\mathfrak{C}^\mu} + \underbrace{\overline{\mathfrak{C}^T}}_{\text{Reynolds stress}}\right)+\rho \boldsymbol{g}.
$$

Reynolds stress: **Momentum transfer** due to turbulence

Turbulence models
- Mixing length model
- $k-\varepsilon$ model

### Time-averaged two-phase flow
Two-phase flow
  - Instantaneous formulation of gas and liquid phases
  $$
    \rho \frac{D \boldsymbol{v}}{D t}=-\nabla p-\nabla \cdot \mathfrak{C}^\mu+\rho \boldsymbol{g}
  $$
  - Time-averaged formulation
    - Kinematic condition (**Relative velocity**)
      - Homogeneous model
      - Mixture model (1 mixture momentum eq.)
        - Slip model
        - Drift-flux model
    - Two-fluid model (2 momentum eq.)
  - Thermal condition (**Temperature difference**)
    - Thermal equilibrium (1 mixture energy eq.)
    - Thermal non-equilibrium (2 energy eq.)

> - Evaporation ($T_g>T_f$)
> - Condensation ($T_g<T_f$)

### Drift-flux model
4 equations:
- Mixture continuitv equation
$$
\frac{\partial \rho_m}{\partial t}+\nabla \cdot\left(\rho_m \boldsymbol{v}_m\right)=0
$$

- Continuity equation for phase 2
$$
\frac{\partial \alpha_2 \overline{\overline{\rho_2}}}{\partial t}+\nabla \cdot\left(\alpha_2 \overline{\overline{\rho_2}} \boldsymbol{v}_m\right)=\Gamma_2-\nabla \cdot\left(\alpha_2 \overline{\overline{\rho_2}} \boldsymbol{V}_{2 m}\right)
$$

- Mixture momentum equation
$$
\frac{\partial \rho_m \boldsymbol{v}_m}{\partial t}+\nabla \cdot\left(\rho_m \boldsymbol{v}_m \boldsymbol{v}_m\right)=-\nabla p_m +\nabla \cdot\left[\overline{\mathfrak{C}}+\widetilde{\mathfrak{C}}^T+\widetilde{\mathfrak{C}}^D\right]+\rho_m \boldsymbol{g}_m+\boldsymbol{M}_m
$$

where
$$
\begin{aligned} & \mathfrak{C}^D \equiv-\sum_{k=1}^2 \alpha_k \rho_k \boldsymbol{V}_{k m} \boldsymbol{V}_{k m}, \quad \boldsymbol{V}_{k m} \equiv \boldsymbol{v}_k-\boldsymbol{v}_m \\ & \boldsymbol{v}_m \equiv \frac{\sum\limits_{k=1}^2 \alpha_k \rho_k \boldsymbol{v}_k}{\rho_m}, \quad \rho_m \equiv \sum_{k=1}^2 \alpha_k \rho_k\end{aligned}
$$

- Mixture Energy equation
$$
\begin{aligned}
& \boldsymbol{V}_{k j} \equiv \boldsymbol{v}_k-\boldsymbol{j} \\
& \boldsymbol{j}=\sum_{k=1}^2 \alpha_k \boldsymbol{v}_k
\end{aligned}
$$

Total number of unknown variables: 27: Flow regime
$$
\overline{\overline{\rho_k}}, \bar{\bar{p}}_k, \bar{\bar{T}}_k, \hat{i}_k, \overline{\overline{T_i}}, \overline{\overline{\sigma}}, \rho_m, \boldsymbol{v}_m, p_m, \boldsymbol{V}_{k m}, \overline{\mathfrak{C}}, {\mathfrak{C}}^T, \boldsymbol{M}_m, \alpha_k, i_m, \overline{\boldsymbol{q}}, \boldsymbol{q}^T, \Phi_m^\mu, \Phi_m^\sigma, \Phi_m^i, \Gamma_2
$$

### Two-fluid model [core]
Totally 6 equations:
- Continuity equation
$$
\frac{\partial \alpha_k \overline{\overline{\rho_k}}}{\partial t}+\nabla \cdot\left(\alpha_k \overline{\overline{\rho_k}} \widehat{\boldsymbol{v}_k}\right)=\Gamma_k
$$
- Momentum equation
$$
\begin{aligned}
& \frac{\partial \alpha_k \overline{\overline{\rho_k}} \widehat{\boldsymbol{v}_k}}{\partial t}+\nabla \cdot\left(\alpha_k \overline{\overline{\rho_k}} \widehat{\boldsymbol{v}_k} \widehat{\boldsymbol{v}_k}\right) \\
=&-\nabla\left(\alpha_k \overline{\overline{p_k}}\right)+\nabla \cdot\left[\alpha_k\left(\overline{\overline{\boldsymbol{\mathfrak { C }}}}_k+{\mathfrak{C}}_k^T\right)\right]+\alpha_k \overline{\overline{\rho_k}} \widehat{\boldsymbol{g}}_k+\boldsymbol{M}_k
\end{aligned}
$$
- Energy equation
- 3 jump conditions
$$
\sum_{k=1}^2 \Gamma_k=0 \text {. }
$$

<img src="/fluid_tf7_7_jump.png" alt="gas-liquid interface" width="100%" align="center">

Total number of unknown variables: 36: Flow regime

$$\alpha_k, \overline{\overline{\rho_k}}, \widehat{\boldsymbol{v}_k}, \Gamma_k, \overline{\overline{p_k}} \overline{\overline{\boldsymbol{\mathfrak { C }}_k}}, \boldsymbol{\mathcal { T }}_k^T, \overline{\overline{\boldsymbol{\mathfrak { C }}_{k i}}}, \boldsymbol{M}_{i k}, \boldsymbol{M}_m^H, \overline{\overline{p_{k i}}}, \hat{i_k}, \overline{\overline{\boldsymbol{q}_k}}, \boldsymbol{q}_k^T, a_i \overline{\overline{q_k^{\prime \prime}}} \overline{\overline{T_k}}, \overline{\overline{T_i}}, \overline{\overline{H_{21}}}, \bar{\bar{\sigma}}, a_i, p^{\mathrm{s a t}}$$

With HEM, it becomes 3 equations

### Summary of two-phase flow formulation
<img src="/fluid_tf7_8_diagram.png" alt="2-field diagram" width="100%" align="center">

## Fundamentals of several constitutive equations
### One-dimensional computational code structure
<img src="/fluid_tf7_9_diagram.png" alt="1D diagram" width="100%" align="center">

### Important parameters in two-phase flow analysis [core]
- Flow regime map
  - Basic idea of flow regime transition criteria
- Void fraction
  - Basic idea of drift-flux model
- Interfacial area concentration
  - Significance of interfacial transfer terms
- Frictional pressure drop
- Interfacial force
  - Drag force
  - Non-drag force (Lift force, wall lubrication force etc.)

> - scaling design
> - mechanistic modeling
> - instrumentation development
> - experiment
> - computational calculation

#### Flow regime map
<img src="/fluid_tf7_10_regime.png" alt="1D diagram" width="100%" align="center">

The flow regime depends on the void fraction

#### Void fraction
Drift velocity, which is generated by the force balance b/w buoyancy force and drag force:
$$
    v_{gj} = v_g - j = (1-\alpha)v_r
$$

> $$
    \begin{aligned}
        v_{gj} =& v_g - j = v_g - (j_g+j_f)\\
            =& v_g - [\alpha v_g + (1-\alpha)v_f]\\
            =& (1-\alpha)(v_g - v_f) = (1-\alpha)v_r
    \end{aligned}
> $$

- $\langle\cdot\rangle$:  × (void fraction)
- $\langle\langle\cdot\rangle\rangle$: Area-averaging

One-dimensional (or area-averaged) drift-flux model:
$$
\left\langle\left\langle v_g\right\rangle\right\rangle \equiv \frac{\left\langle j_g\right\rangle}{\langle\alpha\rangle}=C_0\langle j\rangle+\left\langle\left\langle v_{g j}\right\rangle\right\rangle
$$

where $C_0$ is **distribution parameter** and $\left\langle\left\langle v_{g j}\right\rangle\right\rangle$ is the drift velocity:
$$
C_0 \equiv \frac{\langle\alpha j\rangle}{\langle\alpha\rangle\langle j\rangle}, \quad\left\langle\left\langle v_{g j}\right\rangle\right\rangle \equiv \frac{\left\langle\alpha v_{g j}\right\rangle}{\langle\alpha\rangle}
$$

> $$
\begin{aligned}
& v_{g j}=v_g-j \Rightarrow \alpha v_{g j}=\alpha v_g-\alpha j \\
\Rightarrow&\left\langle\alpha v_{g j}\right\rangle=\left\langle\alpha v_g\right\rangle-\langle\alpha j\rangle \\
\Rightarrow&\left\langle\alpha v_g\right\rangle=\langle\alpha j\rangle+\left\langle\alpha v_{g j}\right\rangle \\
\Rightarrow& \frac{\left\langle\alpha v_g\right\rangle}{\langle\alpha\rangle}=\frac{\langle\alpha j\rangle}{\langle\alpha\rangle}+\frac{\left\langle\alpha v_{g j}\right\rangle}{\langle\alpha\rangle} \\
\Rightarrow& \frac{\left\langle\alpha v_g\right\rangle}{\langle\alpha\rangle}=\frac{\langle\alpha j\rangle}{\langle\alpha\rangle\langle j\rangle}\langle j\rangle+\frac{\left\langle\alpha v_{g j}\right\rangle}{\langle\alpha\rangle}
\end{aligned}
> $$

In Homogeneous flow (Uniform gas distribution, $C_0=1$, \& no relative velocity, $\langle\langle v_{gj}\rangle\rangle=0 \mathrm{~m} / \mathrm{s}$ )
**Gas velocity**:
$$
\left\langle\left\langle v_g\right\rangle\right\rangle \equiv \frac{\left\langle j_g\right\rangle}{\langle\alpha\rangle}=\langle j\rangle
$$

Mixture volumetric flux Center of volumetric velocity

$$
\langle\alpha\rangle=\frac{\left\langle j_g\right\rangle}{C_0\langle j\rangle+\left\langle\left\langle v_{g j}\right\rangle\right\rangle}=\frac{\left\langle j_g\right\rangle /\langle j\rangle}{C_0+\left\langle\left\langle v_{g j}\right\rangle\right\rangle /\langle j\rangle}
$$

In HEM: $\left\langle\left\langle v_{g j}\right\rangle\right\rangle = 0, C_0 = 1$

> $$
  \begin{aligned}
    C_0 =& \frac{\langle \alpha j\rangle}{\langle \alpha \rangle\langle j \rangle}\\
    =& \frac{\frac{1}{A}\int \alpha j\mathrm{~d}A}{\frac{1}{A}\int \alpha \mathrm{~d}A \frac{1}{A}\int j \mathrm{~d}A} \\
    =& 1 (\text{If }\alpha \text{ is constant})
  \end{aligned}
> $$

Distribution parameter $C_0$:
$$
\begin{cases}
  {}= 1 & \text{flat surface / uniform }\alpha \\
  {}> 1 & \text{with surface tension}\\
  {}< 1 & \text{wall peaking}
\end{cases}
$$

**Dix model** for $C_0$:
$$
  C_0 = \beta\left[1+\left(\frac{1}{\beta}-1\right)^b\right]
$$

where
$$
b = \left(\frac{\rho_g}{\rho_l}\right)^{0.1}
$$

> $$
\beta = \left.\left(\frac{Gx}{\rho_g}\right)\right/\left(\frac{Gx}{\rho_g} + \frac{G(1-x)}{\rho_f}\right)
> $$

- For regular pipe:
$$
C_0 = 1.2 - 0.2\left(\frac{\rho_g}{\rho_f}\right)^{0.5}.
$$
- For rectangular channel / duct:
$$
C_0 = 1.35 - 0.35\left(\frac{\rho_g}{\rho_f}\right)^{0.5}.
$$
- For rod bundle:
$$
C_0 = 1.10 - 0.10\left(\frac{\rho_g}{\rho_f}\right)^{0.5}.
$$
- For Subcooled boiling flow:
$$
C_0 = 1.2 - 0.2\left(\frac{\rho_g}{\rho_f}\right)^{0.5}\left(1-e^{-18\langle\alpha\rangle}\right)\implies C_0=1.2 \text{ If }\langle\alpha\rangle=0.
$$

$C_0$: **Channel geometry** dependent

Drift velocity $\left\langle\left\langle v_{g j}\right\rangle\right\rangle$:

Suggested by Lahey \& Moody:
$$
v_{gj} = 2.9\left[\left(\frac{\rho_f - \rho_g}{\rho_f^2}\right)\sigma g\right]^{0.25}
$$

- Bubbly: 
$$
\left\langle\left\langle v_{g j}\right\rangle\right\rangle = \sqrt{2}\left(\frac{\Delta\rho g\sigma}{\rho_f^2}\right)^{1/4}(1-\langle\alpha\rangle)^{1.75}
$$
- Slug: 
$$
\left\langle\left\langle v_{g j}\right\rangle\right\rangle = 0.35\left(\frac{\Delta\rho g\sigma}{\rho_f^2}\right)^{0.5}
$$
- Churn: 
$$
\left\langle\left\langle v_{g j}\right\rangle\right\rangle = \sqrt{2}\left(\frac{\Delta\rho g\sigma}{\rho_f^2}\right)^{1/4}
$$

> Development of void fraction model
> 1. HEM, and 20\% overprediction
> 2. Slip model: Slip ratio $s=$
> $$s = \frac{v_g}{v_f} = \frac{j_g/\alpha}{j_f/(1-\alpha)} = \frac{(1-\alpha)j_g}{\alpha j_f} \to s\frac{j_f}{j_g} = \frac{1}{\alpha}-1\to \alpha = \frac{1}{1+s\frac{j_f}{j_g}}$$
> 3. Drift-flux model

#### Interfacial area concentration
- Mass equation
$$
\frac{\partial \alpha_k \rho_k}{\partial t}+\nabla \cdot\left(\alpha_k \rho_k \boldsymbol{v}_k\right)=
\bar{\Gamma}_k=a_i m_k
$$

- Momentum equation
$$
\begin{aligned}
& \frac{\partial \alpha_k \rho_k \boldsymbol{v}_k}{\partial t}+\nabla \cdot\left(\alpha_k \rho_k \boldsymbol{v}_k \boldsymbol{v}_k\right)=-\alpha_k \nabla p_k+\nabla \cdot \alpha_k\left(\mathfrak{C}_k^\mu+\mathfrak{C}_k^T\right) \\
& +\alpha_k \rho_k \boldsymbol{g}+\boldsymbol{v}_{k i} \Gamma_k+{\boldsymbol{M}}_{j k}-\nabla \alpha_k \cdot \mathfrak{C}_i
\end{aligned}
$$

Energy equation
$$
\begin{aligned}
& \frac{\partial \alpha_k \rho_k H_k}{\partial t}+\nabla \cdot\left(\alpha_k \rho_k H_k \boldsymbol{v}_k\right)=-\nabla \cdot \alpha_k\left(\overline{\overline{q}}_k+q_k^T\right)+\alpha_k \frac{D_k}{D t} p_k \\
& +H_{k i} \Gamma_k+a_i q_{i k}^{-1}+\Phi_k
\end{aligned}
$$

(Interfacial transfer term)=( Interfacial area concentration ) x ( Driving potential )

$$
a_i = \frac{6\alpha}{D_{\mathrm{sm}}}
$$

#### Frictional pressure drop
Lockhart-Martinelli method:
$$
\left(-\frac{\Delta p}{\Delta z}\right)_{2\phi, \text {fric }}=\Phi_f^2\left(-\frac{\Delta p}{\Delta z}\right)_{1\phi, \mathrm{fric},f} \quad \text { Darcy friction factor }
$$

where (single phase)
$$
\left(-\frac{\Delta p}{\Delta z}\right)_{1\phi, \mathrm{fric},f}=\lambda \frac{1}{D} \frac{\rho_f j_f^2}{2},\quad \lambda=\left\{\begin{array}{ll}
64 / R e_f &\text { for laminar flow } \\
0.316 / R e_f^{0.25} &\text { for turbulent flow }
\end{array}\right.
$$

and $\lambda$ is Dancy friction factor; and Reynolds number:
$$
R e_f \equiv \frac{\rho_f j_f D}{\mu_f}
$$

For **Two-phase multiplier**, here's the Chiskolm equation:
$$
\Phi_f^2=1+\frac{C}{X}+\frac{1}{X^2}, \quad C=20 \quad \text{for gas \& liquid turbulent flows}
$$

and
$$
X \equiv \sqrt{\frac{\left(-\frac{\Delta p}{\Delta z}\right)_{1\phi, \mathrm{fric},f}}{\left(-\frac{\Delta p}{\Delta z}\right)_{1\phi, \mathrm{fric},g}}} \quad \text{is Martinelli parameter}
$$

<img src="/fluid_tf7_11_pressure_drop.png" alt="pressure drop for cylinder" width="100%" align="center">

$$
\begin{aligned}
& \pi \frac{D^2}{4} p_1=\pi \frac{D^2}{4} p_2+\pi D \Delta z \tau_w \\
 \Rightarrow&-\frac{p_2-p_1}{\Delta z}=\frac{4}{D} \tau_w \Rightarrow-\frac{\Delta p}{\Delta z}=\frac{4}{D} \tau_w
\end{aligned}
$$

|Gas|Liquid|$C$: Chisholm coefficient|
|----|----|----|
|Turbulent|Turbulent|20|
|Turbulent|Laminar|12|
|Laminar|Turbulent|10|
|Laminar|Laminar|5|

$$
Re_k
\begin{cases}
  < 1000, & \text{Laminar}\\  
  \ge 2000, & \text{Turbulent}\\  
\end{cases}, \quad k=g \text{ or }f
$$

#### Quiz - Void fraction
**Superficial gas velocity** $=0.50 \mathrm{~m} / \mathrm{s}$, **Superficial liquid velocity** $=0.30 \mathrm{~m} / \mathrm{s}$ : What is the **void fraction** for **air-water flow** in a vertical $7 \mathrm{~cm}$ pipe under **atmospheric pressure**? Assume **churn flow** regime.

- Flow regime
- Flow direction
- Flow channel geometry
- Channel diameter

$$\frac{\left\langle j_g\right\rangle}{\langle\alpha\rangle}=C_0\langle j\rangle+\left\langle\left\langle v_{g j}\right\rangle\right\rangle
$$

where
$$
C_0=1.2-0.2 \sqrt{\frac{\rho_g}{\rho_f}}=1.2
$$

and
$$
\left\langle\left\langle v_{g j}\right\rangle\right\rangle=\sqrt{2}\left(\frac{\Delta \rho g \sigma}{\rho_f^2}\right)^{0.25}=0.23 \mathrm{~m} / \mathrm{s}
$$

Thus
$$
\begin{aligned}
\langle\alpha\rangle&=\frac{\left\langle j_g\right\rangle}{C_0\langle j\rangle+\left\langle\left\langle v_{g j}\right\rangle\right\rangle}=\frac{0.50}{1.2(0.50+0.30)+0.231}=0.42\\
\left\langle\left\langle v_g\right\rangle\right\rangle&=\frac{\left\langle j_g\right\rangle}{\langle\alpha\rangle}=\frac{0.50}{0.42}=1.2 \mathrm{~m} / \mathrm{s}
\end{aligned}
$$

#### Quiz - Flow regime transition
Consider **air-water flow** in a vertical $7 \mathrm{~cm}$ pipe under **atmospheric pressure**. Derive **bubbly-to-slug flow** transition condition with critical void fraction of $0.30$ .

- Flow direction
- Flow channel geometry
- Channel diameter

$$
\frac{\left\langle j_g\right\rangle}{\langle\alpha\rangle}=C_0\langle j\rangle+\left\langle\left\langle v_{g j}\right\rangle\right\rangle
$$

where
$$
\begin{aligned}
& C_0=1.2-0.2 \sqrt{\frac{\rho_g}{\rho_f}}=1.2 \\
& \left\langle\left\langle v_{g j}\right\rangle\right\rangle=\sqrt{2}\left(\frac{\Delta \rho g \sigma}{\rho_f^2}\right)^{0.25}(1-\langle\alpha\rangle)^{1.75}
\end{aligned}
$$

and
$$
\left\langle j_f\right\rangle=\frac{1-C_0\langle\alpha\rangle_{\text {crit }}}{C_0\langle\alpha\rangle_{\text {crit }}}\left\langle j_g\right\rangle-\frac{\left\langle\left\langle v_{g j}\right\rangle\right\rangle}{C_0}
$$

$$
\left\langle j_f\right\rangle=\frac{1-\left(1.2-0.2 \sqrt{\rho_g / \rho_f}\right)\langle\alpha\rangle_{\text {crit }}}{\left(1.2-0.2 \sqrt{\rho_g / \rho_f}\right)\langle\alpha\rangle_{\text {crit }}}\left\langle j_g\right\rangle-\frac{\sqrt{2}\left(\frac{\Delta \rho g \sigma}{\rho_f^2}\right)^{0.25}(1-\langle\alpha\rangle)^{1.75}}{\left(1.2-0.2 \sqrt{\rho_g / \rho_f}\right)}
$$

where
$$
\langle\alpha\rangle_{\text {crit }}=0.3.
$$

#### Quiz - Interfacial area concentration
Consider **air-water flow** in a vertical $7 \mathrm{~cm}$ pipe under **atmospheric pressure**. Assume **the bubble size** given by **twice** the size of Laplace length scale. Assume **uniformly distributed spherical bubbles**. Calculate the interfacial area concentration for bubbly flow with the void fraction of $0.20$.

$$
\begin{aligned} & L a=\sqrt{\frac{\sigma}{\Delta \rho g}}=0.0027 \mathrm{~m} \\ & \left\langle D_b\right\rangle=2 L a=2 \times 0.0027=0.0055 \mathrm{~m} \\ & \langle\alpha\rangle=\frac{1}{6} \pi\left\langle D_b\right\rangle^3 n
\end{aligned}
$$

Thus
$$
\begin{aligned} 
\left\langle a_i\right\rangle&=\pi\left\langle D_b\right\rangle^2 n \\ 
&=\frac{6\langle\alpha\rangle}{\left\langle D_b\right\rangle}=\frac{6 \times 0.20}{0.0055}=220 \mathrm{~m}^{-1}\end{aligned}
$$

<!-- ### Interfacial forces
$$
\begin{aligned}\boldsymbol{M}_{i d}=&\frac{\alpha_d}{B_d}\left(\boldsymbol{F}_d^D+\boldsymbol{F}_d^V+\boldsymbol{F}_d^B+\boldsymbol{F}_d^L+\boldsymbol{F}_d^W+\boldsymbol{F}_d^T\right) \\ =&\boldsymbol{M}_d^D+\boldsymbol{M}_d^V+\boldsymbol{M}_d^B+\boldsymbol{M}_d^L+\boldsymbol{M}_d^W+\boldsymbol{M}_d^T 
\end{aligned}
$$

For **drag force**:
$$
\begin{aligned}
  \boldsymbol{F}_d^D=&-\frac{1}{2} C_D \rho_c \boldsymbol{v}_r\left|v_r\right| A_d \\ 
  =&\frac{B_d \boldsymbol{M}_d^D}{\alpha_d} \quad B_d: \text { Bubble volume }
\end{aligned} \\ 
\boldsymbol{M}_{id} = \frac{\alpha_d \boldsymbol{F}_d^D}{B_d}=-\left(\alpha_d \frac{A_d}{B_d}\right) \frac{C_D}{2} \rho_c \boldsymbol{v}_r\left|v_r\right|
$$


## Two-phase flow modeling -->

## Quiz2
A saturated steam-water mixture at $290^{\circ} \mathrm{C}$ vertically flows in a rectangular channel with a width of $40 \mathrm{~mm}$ and a gap length of $2.4 \mathrm{~mm}$ . The **volumetric gas and liquid flow rates** are $5.0 \times 10^{-5} \mathrm{~m}^3 / \mathrm{s}$ and $3.0 \times 10^{-5} \mathrm{~m}^3 / \mathrm{s}$, respectively. The **distribution parameter** is calculated by $C_0=1.35-0.35\left(\rho_g / \rho_f\right)^{0.5}$, whereas the **drift velocity** is calculated by $\left\langle\left\langle v_{g j}\right\rangle\right\rangle=0.35\left[\frac{\left(\rho_f-\rho_g\right) g D_h}{\rho_f}\right]^{0.5}$. The **bubble Sauter mean diameter** is calculated by $\left\langle D_{S m}\right\rangle=2 L a$. Laplace length $L a$ is given by $\left[\frac{\sigma}{\left(\rho_f-\rho_g\right) g}\right]^{0.5}$.

Here, $\rho_g\left(=39.2 \mathrm{~kg} / \mathrm{m}^3\right)$ and $\rho_f\left(=732 \mathrm{~kg} / \mathrm{m}^3\right)$ are the densities of gas and liquid, respectively. $g\left(=9.8 \mathrm{~m} / \mathrm{s}^2\right)$ is the gravitational acceleration. $D_h$ is the hydraulic equivalent diameter. $\sigma(0.0167 \mathrm{~N} / \mathrm{m})$ is the surface tension. Use three digits for significant digits.

1. What is the value of the **distribution parameter**?
$$
C_0 = 1.35 - 0.35\left(\frac{\rho_g}{\rho_f}\right)^{0.5} = 1.27.
$$

2. What is the value of the **drift velocity** in $\mathrm{~m/s}$?
$$
\begin{gathered}
D_h= \frac{4A}{p} = \frac{2\times 0.04\times 0.0024}{0.04+0.0024}\mathrm{~m} \approx 0.00453\mathrm{~m}\\
\left\langle\left\langle v_{g j}\right\rangle\right\rangle=0.35\left[\frac{\left(\rho_f-\rho_g\right) g D_h}{\rho_f}\right]^{0.5}\approx 0.0717\mathrm{~m/s}.
\end{gathered}
$$

3. What is the value of **superficial gas velocity** in $\mathrm{~m/s}$?
$$
\langle j_g\rangle = \frac{Q_g}{A} = \frac{5.0\times 10^{-5}}{0.04\times 0.0024}\mathrm{~m/s} = 0.521\mathrm{~m/s}.
$$
4. What is the value of **gas velocity** in $\mathrm{~m/s}$?
$$
\begin{gathered}
  \langle j_f\rangle = \frac{Q_f}{A} = \frac{3.0\times 10^{-5}}{0.04\times 0.0024}\mathrm{~m/s} = 0.3125\mathrm{~m/s} \\
   \begin{aligned}
   \langle\langle v_g \rangle\rangle =& C_0\langle j\rangle + \left\langle\left\langle v_{g j}\right\rangle\right\rangle = C_0(\langle j_g\rangle + \langle j_f\rangle) + \left\langle\left\langle v_{g j}\right\rangle\right\rangle \\
   \approx& 1.27\times(0.521+0.3125)+0.0717\approx 1.13\mathrm{~m/s}.
   \end{aligned}
\end{gathered}
$$
5. What is the value of the **void fraction**?
$$
\langle\alpha\rangle = \frac{\langle j_g\rangle}{\langle\langle v_g\rangle\rangle} \approx \frac{0.521}{1.13}\approx 0.461.
$$
6. What is the value of the **bubble Sauter mean diameter** in $\mathrm{~m}$?
$$
\begin{aligned}
  \left\langle D_{S m}\right\rangle=&2 L a = 2\left[\frac{\sigma}{\left(\rho_f-\rho_g\right) g}\right]^{0.5}\\
  =& 2\times \sqrt{\frac{0.0167}{(732-39.2)\times 9.8}}\mathrm{~m}\approx 0.00314\mathrm{~m}.
\end{aligned}
$$
7. What is the value of the **interfacial area concentration** in $1/\mathrm{m}$?
$$
a_i = \frac{6\langle\alpha\rangle}{D_{Sm}}\approx 882\mathrm{~m^{-1}}.
$$
8. What is the value of the **two-phase mixture density** in $\mathrm{~kg/m}^3$?
$$
\begin{aligned}
  \rho_m =& \langle\alpha\rangle \rho_g + (1-\langle\alpha\rangle) \rho_f \\
  =& 0.461\times 39.2 + (1-0.461)\times 732 \mathrm{~kg/m^3} \approx 412\mathrm{~kg/m^3}.
\end{aligned}
$$
9.  What is the value of the **two-phase mass flux** in $\mathrm{~kg/m^2s}$?
$$
G = \rho_g\langle j_g\rangle + \rho_f\langle j_f\rangle \approx 39.2\times 0.521 + 732\times 0.3125\approx 249\mathrm{~kg/m^2s}.
$$
10.  What is the value of the **flow quality**?
$$
\langle x\rangle = \frac{G_g}{G} = \frac{\rho_g\langle j_g\rangle}{G}\approx \frac{39.2\times 0.521}{249}\approx 0.0819.
$$
# Test in the class
## Hints for Final Exam
1. Master HW & Exercise Problem & Class note
2. Understand [flow parameter definition](./6twoPhase#key-parameters-in-two-phase-flow-core)
   - e.g. $\langle j_g\rangle = \frac{G x_f}{\rho_g}, \quad \langle j_f\rangle = \frac{G (1-x_f)}{\rho_f}, \quad \text{etc. } \rho_m=\rho_g\alpha+\rho_f(1-\alpha).$
3. Understand the assumption for [HEM](./6twoPhase#nature-of-multiphase-flows-and-basic-concepts)
4. Understand the [drift-flux model](./7thermoFluid#void-fraction)
   - $v_{gj}=v_g-j$, after area-averaging: $\langle\langle v_{g}\rangle\rangle = C_0\langle j\rangle + \langle\langle v_{gj}\rangle\rangle, \quad \langle\langle v_{g}\rangle\rangle = \frac{\langle j\rangle}{\langle\alpha\rangle}\implies \langle\alpha\rangle=C_0\langle j\rangle + \langle\langle v_{gj}\rangle\rangle$ where $C_0 = \frac{\langle\alpha j\rangle}{\langle\alpha\rangle\langle j\rangle}. C_0=1$ when HEM
5. Understand [Lockhart-Martinelli method](./7thermoFluid#frictional-pressure-drop)
   - $1\phi: \Delta p = f\frac{L}{D}\frac12 \rho v^2, \quad \left(-\frac{\mathrm{d}p}{\mathrm{d}z}\right)_{2\phi} = \Phi^2_f\left(-\frac{\mathrm{d}p}{\mathrm{d}z}\right)_{1\phi}$
6. Understand [boiling curve](./6twoPhase#boiling-curve-core)
7. Understand [thermal-equilibrium quality](./8twoPhaseHeatTransfer#flow-boiling)

$$
a_i = \frac{\sum A_i}{V} \quad [1/\mathrm{m}]
$$

where $A_i$ is the intersectional area of each bubble

$$
x_f = \frac{\text{vapor mass velocity}}{\text{total mixture mass velocity}} = \frac{G_g}{G_g+G_f}
$$

- vaporization due to phase change: boiling(liquid become gas)
- different flow: churn, annular
- assumption about drift-flux model:
  - Continuum Assumption (continua rather than discrete particles)
  - Mixture Momentum Equation (does not solve separate momentum conservation equations)
  - Existence of Interfacial Slip (Relative Velocity)
  - Thermodynamic Equilibrium Assumption (share the same pressure and temperature)
  - Steam and water fluid compressibility is negligible.
  - Void fraction change along the flow direction is negligible.
- neglect which pressure drop: **Acceleration loss**
- Chemical reactor utilize **bubbly flow**. Reason is mass transfer is important. $a_i$ is high at around $\alpha=0.3$:
  - $N_A=k_fa_i\Delta C$
- How many equations HEM consider: 3 equations (combine gas and liquid)
- $a_i=\frac{6\alpha}{D_\text{sm}}, \quad \alpha = n\frac16 \pi D_b^3$ same diameter, where $n$ is the bubble number density
- disadvantages about slip model comparing to drift-flux model: 
  - Definition: $s=v_g/v_f, \quad v_f$ may be zero or negative, not appropriate: counter-current flow, lead to sigularities
  - highly flow-regime **specific**
  - Often exhibits **discontinuities** or **unrealistic** predictions at the **boundaries** of its intended use
  - Often a purely empirical curve-fit with limited connection to first principles. It generally does not scale well with system parameters

Problem2: Drift-flux model

$$
\langle\langle v_{g}\rangle\rangle = \frac{\langle j\rangle}{\langle\alpha\rangle}=C_0\langle j\rangle + \langle\langle v_{gj}\rangle\rangle
$$

Use data to **fit the line** to obtain $C_0, \langle\langle v_{gj}\rangle\rangle$, then
$$
\langle\alpha\rangle = \frac{\langle j_g\rangle}{C_0\langle j\rangle + \langle\langle v_{gj}\rangle\rangle}
$$

and with certain $(\langle j_g\rangle, \langle j\rangle)$, we can obtain $\langle \alpha\rangle$ 

Problem 3: L-M Method

## Test1: Flow Loop Design
It has been decided to conduct a two-phase flow experiment at the given void fraction and mass flux. During the experiment, there will be a pressure drop in the system due to the liquid single-phase flow and two-phase flow. Estimation of the pressure drop is essential to select right equipment such as pump. To select the pump, liquid flow rate and total head loss are required. In the current simplified example, the procedure for pump selection is reviewed.

Given Key Information

- Void fraction：$\langle\alpha\rangle=0.75$
- Mass flux $\left.G=1000 \mathrm{~kg} /(\mathrm{m\cdot s}\right)$
- Pressure condition： ${P}=0.1 \mathrm{MPa}$
- Temperature condition：$T=20^{\circ} \mathrm{C}$
- Diameter of the vertical pipe test section：$D_h=0.05 \mathrm{~m}$
- Height of the vertical pipe test section：$H=5.0 \mathrm{~m}$
- Diameter of the horizontal water piping system：$D=0.10\mathrm{~m}$
- Length of the horizontal water piping system：$L=10 \mathrm{~m}$
- Liquid density：$\rho_f=998 \mathrm{~kg} / \mathrm{m}^3$
- Gas density：$\rho_{{g}}=1.17 \mathrm{~kg} / \mathrm{m}^3$
- Liquid dynamic viscosity $\mu_f=1.00 \times 10^{-3} \mathrm{~Pa\cdot s}$
- Gas dynamic viscosity：$\mu_g=1.81 \times 10^{-5} \mathrm{~Pa\cdot s}$
- Gravity acceleration：$g=9.8 \mathrm{~m} / \mathrm{s}^2$
- Air－water surface tension：$\sigma=0.0727 \mathrm{~N} / \mathrm{m}$

### Design Procedure
Step
1. Boundary conditions: $\alpha = 0.75, G = 1000 \mathrm{~kg/(m^2\cdot s)}, P = 1.0 \mathrm{~MPa}$, Fluid system: Steam-water
2. Identify key flow parameters: $\langle j_g\rangle$ and $\langle j_f\rangle$
3. Total pressure drop in two-phase flow test section
   - Hydrostatic Pressure Drop: $\Delta P_\text{hydro}$.
   - Frictional Pressure Drop: $\Delta P_{\text{fric},2\Phi}$
4. Total pressure drop in single-phase flow piping section
   - Frictional Pressure Drop: $\Delta P_{\text{fric},1\Phi}$
   - Valve Head Loss: $\Delta P_\text{valve}=1\mathrm{~m}$
5. Total pressure drop in flow loop & Find an appropriate pump in terms of pump head and pump flow rate

Assumptions
- Ignore the pressure loss in two-phase mixing section
- Ignore the pressure loss at the inlet and outlet sections
- Steam and water fluid compressibility is negligible.
- Void fraction change along the flow direction is negligible.

### Q1-1
Write down the superficial gas and liquid velocity $\langle j_g\rangle,\langle j_f\rangle$ as function of mass flux $G$ , quality $\langle x\rangle$ and phase densities $\rho_g,\rho_f$

**Answer**:
$$
\begin{aligned}
  &\langle j_g\rangle = \frac{G\langle x\rangle}{\rho_g} \\
  &\langle j_f\rangle = \frac{G(1-\langle x\rangle)}{\rho_f}
\end{aligned}
$$

### Q1-2
Express the void fraction $\langle \alpha\rangle$, as a function of superficial gas $\langle j_g\rangle$, velocity mixture volumetric flux $\langle j\rangle$, distribution parameter $C_0$ and drift velocity $\langle \langle v_{gj}\rangle\rangle$ (drift-flux model)

**Answer**:
$$
\langle \alpha\rangle = \frac{\langle j_g\rangle}{C_0\langle j\rangle + \langle \langle v_{gj}\rangle\rangle}
$$

### Q1-3
Use results of question 1 and drift-flux model to write the quality $\langle x\rangle$ as an explicit function of distribution parameter $C_0$, drift velocity $\langle \langle v_{gj}\rangle\rangle$, void fraction $\langle \alpha\rangle$, mass flux $G$ and phase densities $\rho_g,\rho_f$.

**Answer**:
::: details **not right**
$$
\langle x\rangle = \frac{\rho_g \langle \alpha\rangle}{G}(C_0\langle j\rangle + \langle \langle v_{gj}\rangle\rangle)
$$

:::

$$
\begin{aligned}
  &\langle j\rangle = \langle j_g\rangle + \langle j_f\rangle= \frac{G\langle x\rangle}{\rho_g}  + \frac{G(1-\langle x\rangle)}{\rho_f} \\
  \implies& \langle x\rangle = \frac{\frac{C_0}{\rho_f} + \frac{\langle\langle v_{gj}\rangle\rangle}{G}}{\frac{1}{\langle \alpha\rangle\rho_g} - \frac{C_0}{\rho_g} + \frac{C_0}{\rho_f}}  
\end{aligned}
$$


### Q1-4
Consider dispersed gas-liquid two-phase flows in a vertical pipe of radius $R$. Assume that the flow is symmetric to the pipe center line and assume the following distribution profiles for void fraction and mixture volumetric flux along the radial direction:
$$
\begin{align*}
& \alpha(r)=\alpha_0\left(1-\left(\frac{r}{R}\right)^n\right) \tag{1}\\
& j(r)=j_0\left(1-\left(\frac{r}{R}\right)^m\right) \tag{2}
\end{align*}
$$

where $\alpha_0$ and $j_0$ are peak void fraction and peak mixture volumetric flux at the pipe center, respectively; $r$ and $R$ are coordinates along radial direction and pipe radius, respectively.
(1) Calculate $\langle\alpha\rangle$ and $\langle j\rangle$ by integrating Eqs. (1) and (2) over the flow area.
(2) Calculate $C_0$ through its definition.
$$
C_0 \equiv \frac{\langle\alpha j\rangle}{\langle\alpha\rangle\langle j\rangle} .
$$
(3) Calculate the distribution parameter using ${m}={n}=4$.

**Answer**:
   1. Here
   > $$
   \begin{aligned}
     \langle \alpha\rangle &= \frac{1}{A}\int_A \alpha(r)\mathrm{~d}A = \frac{1}{\pi R^2}\int_0^R \alpha(r)\mathrm{~d}(\pi r^2) \\
     &= \frac{2}{R^2} \alpha_0\int_0^R \left(r - \frac{r^{n+1}}{R^n}\right)\mathrm{~d}r = \frac{2}{R^2} \alpha_0 \left(\frac{R^2}{2} - \frac{R^{2}}{n+2}\right) \\
     &= \frac{n\alpha_0}{n+2}. \\
   \langle j\rangle &= \frac{1}{A}\int_A j(r)\mathrm{~d}A = \frac{1}{\pi R^2}\int_0^R j(r)\mathrm{~d}(\pi r^2) \\
     &= \frac{2}{R^2} j_0\int_0^R \left(r - \frac{r^{m+1}}{R^m}\right)\mathrm{~d}r = \frac{2}{R^2} j_0 \left(\frac{R^2}{2} - \frac{R^{2}}{(m+2)}\right)\\
     &= \frac{mj_0}{m+2}. \\
   \end{aligned}
   > $$

   $$
   \begin{aligned}
     \langle \alpha\rangle &= \frac{1}{A}\int_A \alpha(r)\mathrm{~d}A = \frac{1}{\pi R^2}\int_0^{2\pi}\int_0^R \alpha(r)r\mathrm{~d}r\mathrm{~d}\theta = \frac{n\alpha_0}{n+2}. \\
   \langle j\rangle &= \frac{1}{A}\int_A j(r)\mathrm{~d}A = \frac{1}{\pi R^2}\int_0^{2\pi}\int_0^R j(r)r\mathrm{~d}r\mathrm{~d}\theta = \frac{mj_0}{m+2}. \\
   \end{aligned}
   $$

   2. Here:
   > $$
   C_0\equiv \frac{\langle\alpha j\rangle}{\langle\alpha \rangle\langle j\rangle} = \frac{1}{\langle\alpha \rangle\langle j\rangle A}\int_A \alpha(r)j(r)\mathrm{~d}(\pi r^2)
   > $$
   
   $$
   \begin{aligned}
    C_0&\equiv \frac{\langle\alpha j\rangle}{\langle\alpha \rangle\langle j\rangle} = \frac{1}{\langle\alpha \rangle\langle j\rangle A}\int_A \alpha(r)j(r)\mathrm{~d}A \\
    &= \frac{1}{\langle\alpha \rangle\langle j\rangle A}\int_0^{2\pi}\int_0^R \alpha(r)j(r)r\mathrm{~d}r\mathrm{~d}\theta\\
    &= \frac{2\alpha_0j_0}{\langle\alpha \rangle\langle j\rangle R^2}\int_0^R \left(r - \frac{r^{n+1}}{R^n}\right)\left(1 - \frac{r^{m}}{R^m}\right)\mathrm{~d}r \\
    &= \frac{2\alpha_0j_0}{\langle\alpha \rangle\langle j\rangle R^2}\int_0^R r - \frac{r^{n+1}}{R^n} - \frac{r^{m+1}}{R^m} + \frac{r^{m+1+n}}{R^{n+m}} \mathrm{~d}r \\
    &= \frac{2\alpha_0j_0}{\langle\alpha \rangle\langle j\rangle R^2}\left(\frac{R^2}{2} - \frac{R^{2}}{n+2} - \frac{R^{2}}{m+2} + \frac{R^{2}}{m+n+2} \right) \\
    &= \frac{2\alpha_0j_0}{\langle\alpha \rangle\langle j\rangle}\left(\frac{1}{2} - \frac{1}{n+2} - \frac{1}{m+2} + \frac{1}{m+n+2} \right) \\
    &= \frac{2(m+2)(n+2)}{mn}\left(\frac{1}{2} - \frac{1}{n+2} - \frac{1}{m+2} + \frac{1}{m+n+2} \right) \\
    &=\frac{m+n+4}{m+n+2}
   \end{aligned}
   $$

   4. Thus
   $$
   m=n=4\implies C_0 = 1.2
   $$

### Q1-5
Calculate the chum drift velocity value given by
$$
\left\langle\left\langle v_{{gj}}\right\rangle\right\rangle=\sqrt{2}\left(\frac{\Delta \rho g \sigma}{\rho_{{f}}^2}\right)^{0.25} .
$$
at the atmospheric flow condition. Fluid properties at the atmospheric condition: air and water densities are $1.17 \mathrm{~kg} / \mathrm{m}^3$ and $998 \mathrm{~kg} / \mathrm{m}^3$, and the surface tension and gravity acceleration are $0.0727 \mathrm{~N} / \mathrm{m}$ and $9.8 \mathrm{~m} / \mathrm{s}^2$.

**Answer**:
$$
\langle\langle v_{gj}\rangle\rangle = \sqrt{2}\left(\frac{\Delta \rho g\sigma}{\rho_f^2}\right)^{0.25} \approx 0.231 \mathrm{~m/s}.
$$

### Q1-6
Calculate the quality for air water flow at void fraction of $0.75(\langle\alpha\rangle=0.75)$ atmospheric condition. Mass flux is $1000 \mathrm{~kg} /\left(\mathrm{m}^2 \cdot \mathrm{s}\right)$. Use the values of drift velocity and distribution parameter in Questions 4 and 5.
Fluid properties at the atmospheric condition: air and water densities are $1.17 \mathrm{~kg} / \mathrm{m}^3$ and $998 \mathrm{~kg} / \mathrm{m}^3$. Use the following equation.
$$
\langle x\rangle=\frac{\frac{C_0}{\rho_{{f}}}+\frac{\left\langle\left(v_{\mathrm{gi}}\right)\right\rangle}{G}}{\frac{1}{\langle\alpha\rangle \rho_{{g}}}-\frac{C_0}{\rho_{{g}}}+\frac{C_0}{\rho_{{f}}}}
$$

**Answer**:
$$
\langle x\rangle = \frac{\frac{C_0}{\rho_f} + \frac{\langle\langle v_{gj}\rangle\rangle}{G}}{\frac{1}{\langle \alpha\rangle\rho_g} - \frac{C_0}{\rho_g} + \frac{C_0}{\rho_f}}\approx 0.0124
$$

### Q1-7
Use the calculated quality $\langle x\rangle=0.0124$ to obtain gas and liquid superficial velocity at mass flux of $1000\mathrm{~kg/(m^2s)}$. The equations on question1 can be used.

**Answer**:
$$
\begin{aligned}
  &\langle j_g\rangle = \frac{G\langle x\rangle}{\rho_g} \approx 10.6\mathrm{~m/s}\\
  &\langle j_f\rangle = \frac{G(1-\langle x\rangle)}{\rho_f}\approx 0.990\mathrm{~m/s}.
\end{aligned}
$$

### Q1-8
<img src="/fluid_tf9_1_test.png" alt="two-phase flow experiment" width="100%" align="center">

The figure shows the flow loop for the two-phase flow experiment in pipes. Water is driven by a pump and air is driven by an air compressor. They are mixed in the air-water injector, and then injected into the vertical pipe test section.

Assume that two phases flow in the vertical pipe with a **diameter** $\left(D_{{h}}\right)$ of $0.05 \mathrm{~m}$ at **mass flux** $(G)$ of $1000 \mathrm{~kg}/\left(\mathrm{~m}^2\cdot\mathrm{s}\right)$ and **void fraction** $(\langle\alpha\rangle)$ of $0.75$ at the atmospheric condition. Calculate the hydrostatic pressure gradient. If the **total height of the pipe section** $({H})$ is $5 \mathrm{~m}$ , then what is the hydrostatic pressure loss? For simplicity, assume that the air and water fluid compressibility is negligible at the flow condition.

Assume that the void fraction change along the flow direction is negligible.

Fluid properties are given by:
$$
\begin{aligned}
& \rho_{{f}}=998 \mathrm{~kg} / \mathrm{m}^3, \rho_{{g}}=1.17 \mathrm{~kg} / \mathrm{m}^3 \\
& \mu_{{f}}=1 \times 10^{-3} \mathrm{~Pa} \cdot \mathrm{~s}, \mu_{{g}}=1.81 \times 10^{-5} \mathrm{~Pa} \cdot \mathrm{~s} \\
& g=9.8 \mathrm{~m} / \mathrm{s}^2
\end{aligned}
$$

**Answer**:
The two-phase hydrostatic pressure gradient is given by:
$$
\left(\frac{\mathrm{d}P}{\mathrm{d}x}\right)_\text{hydro} = \rho_mg = [\langle\alpha\rangle\rho_g + (1-\langle\alpha\rangle)\rho_f]g.
$$

If the pipe height is $5\mathrm{~m}$, then:
$$
\Delta P_{\mathrm{hyd}} = \left(\frac{\mathrm{d}P}{\mathrm{d}x}\right)_\text{hydro}H = \rho_m gH = [\langle\alpha\rangle\rho_g + (1-\langle\alpha\rangle)\rho_f]gH \approx 12268\mathrm{~Pa}.
$$

### Q1-9
Following Question 4, calculate the two-phase frictional pressure gradient using the Lockhart-Martinelli method. What is the two-phase frictional pressure loss in the vertical pipe if the pipe length is $5 \mathrm{~m}$ ?
The following friction factors can be used:
- Laminar flow:
$$
{f}_{\text {fric }}=\frac{64}{\operatorname{R e}} .
$$

- Turbulent flow:
$$
{f}_{\text {fric }}=\frac{0.316}{\operatorname{R e}^{0.25}}
$$

Two-phase multiplier is given by:
$$
\Phi_{{f}}^{2}=1+\frac{C}{X}+\frac{1}{X^{2}} .
$$

where

| Liquid | Gas | C |
| :---: | :---: | :---: |
| Turbulent $(\operatorname{Re}_f>2000)$ | Turbulent $(\operatorname{Re}_g>2000)$ | 20 |
| Laminar $(\operatorname{Re}_f<1000)$ | Turbulent $(\operatorname{Re}_g>2000)$ | 12 |
| Turbulent $(\operatorname{Re}_f>2000)$ | Laminar $(\operatorname{Re}_g<1000)$ | 10 |
| Laminar $(\operatorname{Re}_f<1000)$ | Laminar $(\operatorname{Re}_g<1000)$ | 5 |

The answer should be given using $\mathrm{Pa}$.

**Answer**: The relevant formulas:
$$
\begin{gathered}
  \left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},2\Phi} = \Phi_f^2\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}, \text{ where } \left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f} = \frac{f}{D}\frac{\rho_f \langle j_f\rangle^2}{2} \\
  X = \sqrt{\frac{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}}{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},g}}}\quad \text{(Lockhart-Martinelli coefficient)}
\end{gathered}
$$

The reynolds number about the liquid and gas are calculated by:
$$
\begin{aligned}
  &\operatorname{Re}_f = \frac{\rho_f\langle j_f\rangle D_h}{\mu_f} \approx 4.94\times 10^4\\ 
  &\operatorname{Re}_g = \frac{\rho_g\langle j_g\rangle D_h}{\mu_g} \approx 3.44\times 10^4 
\end{aligned}
$$

Both gas and liquid flows are **turbulent**. Thus, liquid and gas friction factors are calculated by:
$$
\begin{aligned}
  &f_{\mathrm{fric},f} = \frac{0.316}{\operatorname{Re}_f^{0.25}} \approx 0.0212 \\
  &f_{\mathrm{fric},g} = \frac{0.316}{\operatorname{Re}_g^{0.25}} \approx 0.0232
\end{aligned}
$$

Then, liuquid and gas pressure gradients are calculated by:
$$
\begin{aligned}
  &\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f} = \frac{f_{\mathrm{fric},f}}{D_h}\frac{\rho_f \langle j_f\rangle^2}{2}\approx 207\mathrm{~Pa/m}\\
  &\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},g} = \frac{f_{\mathrm{fric},g}}{D_h}\frac{\rho_g \langle j_g\rangle^2}{2}\approx 30.7\mathrm{~Pa/m}.
\end{aligned}
$$

Then, the Lockhart-Martinelli coefficient is given by:
$$
X = \sqrt{\frac{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}}{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},g}}}\approx 2.60.
$$

$C=20$ for both gas and liquid are turbulent. The two-phase multiplier is calculated by:
$$
\Phi_{{f}}^{2}=1+\frac{C}{X}+\frac{1}{X^{2}} \approx 8.85.
$$

Eventually, we have
$$
\begin{aligned}
  &\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},2\Phi} = \Phi_f^2\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}\approx 1834\mathrm{~Pa/m} \\
  \implies& \Delta P_{\mathrm{fric},2\Phi} = \left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},2\Phi}H \approx 9168\mathrm{~Pa}.
\end{aligned}
$$

### Q1-10
Assume that pipes for transporting water has the **diameter** ($D$) of $0.1 \mathrm{~m}$. Calculate the **liquid velocity** in the water pipe if the liquid compressibility is negligible. What is the **frictional pressure gradient** in water pipe? If the water pipe has the length of $10 \mathrm{~m}$. what is the **frictional pressure loss** of water?
The answer should be given using $\mathrm{Pa}$.

**Answer**: 

According to Question 7, the liquid velocity in the **pipe test section** is:
$$
\left\langle j_{{f}}\right\rangle\approx 0.990 \mathrm{~m} / \mathrm{s} .
$$

Then, the liquid volumetric flow rate is:
$$
Q_f=\frac{\langle j_f\rangle \pi D_h^2}{4}\approx 0.990 \times \frac{\pi}{4} \times 0.05^2=0.00194 \mathrm{~m}^3 / \mathrm{s} .
$$

Then, the liquid velocity in the **water pipe** is:
$$
\left\langle j_{f, 1 \Phi}\right\rangle=\frac{4 Q_f}{\pi D^2}\approx \frac{4 \times 0.00194}{\pi \times 0.1^2}=0.247 \mathrm{~m} / \mathrm{s} .
$$

Then, the liquid single-phase Reynolds number is:
$$
\operatorname{R e}_{{f}, 1 \Phi}=\frac{\rho_{{f}}\langle j_{{f}, 1 \Phi}\rangle D}{\mu_{{f}}}\approx\frac{998 \times 0.247 \times 0.1}{1 \times 10^{-3}}\approx 24689.
$$

The liquid single-phase flow is **turbulent**. Thus, the single-phase friction factor is:
$$
f_{\mathrm{fric}, 1 \Phi}=\frac{0.316}{\operatorname{R e}_{f, 1 \Phi}^{0.25}}\approx\frac{0.316}{24689^{0.25}}=0.0252
$$

Then, the liquid single-phase frictional pressure gradient is:
$$
\begin{aligned}
& \left(-\frac{\mathrm{d} p}{\mathrm{d} x}\right)_{\mathrm{fric}, 1 \Phi}=\frac{f_{\mathrm{fric}, 1 \Phi}}{D}\frac{\rho_f \langle j_{f, 1 \Phi}\rangle^2}{2} \\
\approx&\frac{0.0252 \times 998 \times 0.247^2}{0.1 \times 2}\approx 7.70 \mathrm{~Pa} / \mathrm{m}
\end{aligned}
$$

Then, the liquid single-phase frictional pressure loss is:
$$
\Delta P_{\text {fric }, 1 \Phi}=\left(-\frac{\mathrm{d} p}{\mathrm{d} x}\right)_{\mathrm{fric}, 1 \Phi} L\approx 7.70 \times 10\approx 77.0 \mathrm{~Pa}.
$$

### Q1-11

<img src="/fluid_tf9_2_pump.png" alt="How to pick pump" width="100%" align="center">

> https://sppump.com/files/Superpower_In-Line_Pump_SPI_Series_.pdf#page=4.00

Assume that the total pressure loss from pump to the top of the test section consists of a pressure loss due to the **horizontal single-phase liquid flow** and a pressure loss due to **the upward two-phase flow in the vertical test section**. Use the values calculated in Questions 4 to 6 to obtain a total pressure loss. Then use the below chart to select a suitable pump. Hint: For pump selection, it is preferable to multiply the total estimated pressure loss by a factor $1.2$ can be used as a typical factor.
The answer should be given using $\mathrm{Pa}$.

**Answer**:

The total pressure loss is equal to:
$$
\begin{aligned}
  \Delta P_{\text {total}}&=\Delta P_{\text {fric}, 1 \Phi}+\Delta P_{\text {fric}, 2 \Phi}+\Delta P_{\text{hydro}}\\
  &\approx 77.0+9168+12268\approx 21514 \mathrm{~Pa}
\end{aligned}
$$

Required head loss is equal to:
$$
\Delta P_{\text {pump}}=1.2 \times \Delta P_{\text {total}}\approx 25816 \mathrm{~Pa}\approx 2.64 \mathrm{~m}
$$

> pressure is converted to head (水头, height of liquid column in meters) using the formula $H=\Delta P / \rho_f g$.

Required liquid flow rate is equal to:
$$
Q_f=0.00194 \frac{\mathrm{~m}^3}{\mathrm{~s}}=6.99 \frac{\mathrm{m}^3}{\mathrm{hr}}
$$

Thus, the `SPI 40-3213` is selected.

## Test2: heat transfer
Liquid water with the **mass flux** $(G)$ of $1000 \mathrm{~kg} / \mathrm{m}^2 / \mathrm{s}$ is injected into a **uniformly** heated vertical **pipe** at pressure ( $P$ ) condition of $7.0 \mathrm{~MPa}$ and **inlet** temperature ( $T$ ) of $250^{\circ} \mathrm{C}$. The pipe has the **diameter** $\left(D_h\right)$ of $0.06 \mathrm{~m}$ and height of $10 \mathrm{~m}$ . It is heated by the heat source through the outside wall with a **heat flux** $\left(q_w^{\prime \prime}\right)$ of $5 \times 10^5 \mathrm{~W} / \mathrm{m}^2$.

- Mass flux: $G=1000 \mathrm{~kg}\left(m^2 \cdot \mathrm{~s}\right)$
- Pressure condition: $P=7.0 \mathrm{~MPa}$
- Inlet temperature condition: $T_{\text {in}}=250^{\circ} \mathrm{C}$
- Saturation temperature: $T_{\text {sat}}=286^{\circ} \mathrm{C}$
- Diameter of the vertical pipe test section: $D_h=0.06 \mathrm{~m}$
- Height of the vertical pipe test section $H=10 \mathrm{~m}$
- Gravity acceleration: $g=9.8 \mathrm{~m} / \mathrm{s}^2$

Enthalpy of liquid water and steam:
- liquid enthalpy at inlet: $h_{\text {in }}=1086 \mathrm{~kJ} / \mathrm{kg}$
- Saturated liquid enthalpy: $h_{\text{sat},f}=1263 \mathrm{~kJ} / \mathrm{kg}$
- Saturated gas enthalpy: $h_{\text{sat},g}=2774 \mathrm{~kJ} / \mathrm{kg}$
- Latent heat: $h_{fg}=1511 \mathrm{~kJ} / \mathrm{kg}$

Properties of saturatod water and steam:
- Saturated liquid density: $\rho_f=741 \mathrm{~kg} / \mathrm{m}^3$
- Saturated liquid dynamic viscosity : $\mu_{f}=9.16 \times 10^{-5}\mathrm{~Pa\cdot s}$
- Saturated liquad thermal conductivity: $k_f=0.570 \mathrm{~W} / \mathrm{m} / \mathrm{K}$
- Saturated liquid isobaric heat capacity: $C_{p f}=5.38 \mathrm{~kJ} / \mathrm{kg} / \mathrm{K}$
- Saturated gas density: $\rho_g=36.5 \mathrm{~kg/m^3}$.
- Saturated gas dynamic viscosity: $\mu_g=1.90 \times 10^{-5}\mathrm{~Pa}$
- Steam-water surface tension $\sigma=0.0178 \mathrm{~N} / \mathrm{m}$
- Steel-water contact angles ${\phi}_s=38^{\circ}$

### Typical boiling regime analysis
Step
1. Flow boundary conditions: liquid water injected, $G = 1000 \mathrm{~kg/(m^2\cdot s)}, P = 7.0 \mathrm{~MPa}$.
Thermal boundary conditions: fixed heat flux or fixed wall temperature.
Fluid system: steam-water.
2. Single-phase convection regime
3. Subcooled nucleate boiling regime
   - Onset of nucleate boiling (ONB)
   - Onset of significant void (OSV)
4. Saturated boiling regime
   - Convective boiling heat transfer
   - Nucleate boiling heat transfer
5. Critical heat flux

Assumptions
- Ignore the pressure loss in two-phase mixing section
- Air and water fluid compressibility is negligible.
- Water properties change with temperature is negligible.

### Q2-1
Assume that water properties do not vary significantly in single－phase flow section，what are the Reynolds number and Prandtl number for liquid water using the average properties of under－saturated water？Calculate the **Nussel nermber** and **liquid convective heat transfer coefficient** using the Dittus－Boelet equation
$$
\begin{gathered}
\operatorname{N u}_f=0.023 \operatorname{R e}_f^{0.8} \operatorname{P r}_f^{0.4} \\
\operatorname{R e}_f=\frac{G D_h}{\mu_f} \\
\operatorname{P r}_f=\frac{C_{p f} \mu_f}{k_f} \\
\operatorname{N u}_f=\frac{h_f D_h}{k_f}
\end{gathered}
$$

**Answer**:
Liquid Reynolds number
$$
\operatorname{R e}_{{f}}=\frac{G D_{{h}}}{\mu_{{f}}}=\frac{1000 \times 0.06}{9.16 \times 10^{-5}}\approx 6.55 \times 10^5.
$$

Liquid Prandtl number
$$
\operatorname{Pr}_{f}=\frac{C_{p f} \mu_f}{k_f}=\frac{5.38 \times 10^3 \times 9.16 \times 10^{-5}}{0.570}\approx 0.865.
$$

Liquid Nusselt number
$$
\operatorname{N u}_{{f}}=0.023 \operatorname{R e}_{{f}}^{0.8} \operatorname{P r}_{{f}}^{0.4}\approx 976.
$$

Liquid convective heat transfer coefficient
$$
h_{{f}}=\frac{\operatorname{N u}_{{f}} k_{{f}}}{D_{{h}}}=9272 \mathrm{~W} / \mathrm{m}^2 / \mathrm{K}
$$

### Q2-2
What is the **temperature difference** between the wall temperature and mean bulk liquid temperature (wall super heat [$^{\circ} \mathrm{C}$])?
$$
q_w'' = h\Delta T.
$$

**Answer**: The temperature difference between the wall and the fluid is calculated by the heat flux:
$$
q'' = h_f\Delta T\implies \Delta T = \frac{q''_w}{h_f}\approx \frac{5\times 10^5}{9272}{}^{\circ}\mathrm{C}\approx 53.9^{\circ} \mathrm{C}.
$$

### Q2-3
Determine the temperature for the onset of nucleate boiling, $T_\text{ONB}$, using Basu et al. (2004) correlation
$$
\Delta T_\text{ONB}=\frac{\sqrt{2}}{F\left(\phi_S\right)}\left(\frac{\sigma T_\text{sat} q_w''}{\rho_g h_{f g}k_f}\right)^{0.5}
$$

where
$$
\begin{gathered}
  F\left(\phi_s\right)=1-\exp \left[-\left(\frac{\pi \phi_s}{180}\right)^3-0.5\left(\frac{\pi \phi_s}{180}\right)\right] \\
  \phi_{\mathrm{s}}=38^{\circ}.
\end{gathered}
$$

**Answer**:

Contact angle, $\phi_s=38^{\circ}$, thus:
$$
F\left(\phi_S=38^{\circ}\right)=1-\exp \left[-\left(\frac{\pi \times 38}{180}\right)^3-0.5\left(\frac{\pi \times 38}{180}\right)\right]\approx 0.464.
$$

Then:
$$
\begin{aligned}
  \Delta T_\text{ONB}&=\frac{\sqrt{2}}{F\left(\phi_S\right)}\left(\frac{\sigma T_\text{sat} q_w''}{\rho_g h_{f g} k_f}\right)^{0.5} \\
  &\approx\frac{\sqrt{2}}{0.464}\left(\frac{0.0178 \times 559.15 \times 5 \times 10^5}{36.5 \times 1511000 \times 0.570}\right)^{0.5}\approx 1.21^{\circ} \mathrm{C}
\end{aligned}
$$

Therefore
$$
T_{O N B}=\Delta T_{O N B}+T_{s a t}\approx 1.21+559\mathrm{~K}=560 \mathrm{~K}\approx 287^{\circ} \mathrm{C}
$$


### Q2-4
Calculate the temperature and length for the onset of significant void, $T_{ONB}$
$$
\begin{aligned}
& \operatorname{P e}=\frac{G D_h C_{p f}}{k_f} \\
\text{For }\quad & \operatorname{P e}<7 \times 10^4: \\
& \quad T_{\text {sat }}-T_D=0.0022\left(\frac{q_w'' D_h}{R_f}\right) \\
\text{For }\quad & \operatorname{P e}>7 \times 10^4: \\
& \quad T_{\text {sat }}-T_D=154\left(\frac{q_{w}''}{G C_{p f}}\right) \\
& Z_D=\frac{\frac{\pi D_h^2}{4} G C_{p f}\left(T_D-T_{i n}\right)}{\pi D_{h} q''} .
\end{aligned}
$$

**Answer**:
$$
\begin{gathered}
  \operatorname{Pe}=\frac{1000 \times 0.06 \times 5380}{0.570}\approx 5.66 \times 10^5 >7 \times 10^4: \\
  T_\text{sat}-T_{{D}}=154\left(\frac{5 \times 10^5}{1000 \times 5380}\right)\approx 14.3^{\circ} \mathrm{C}.
\end{gathered}
$$

Hence:
$$
T_{\mathrm{D}}\approx T_{\text{sat}}-14.3\approx 559-14.3\approx 545 \mathrm{~K}\approx 272^{\circ} \mathrm{C}.
$$

Using energy balance equation:
$$
\begin{aligned}
  Z_D&=\frac{\frac{\pi D_h^2}{4} G C_{p f}\left(T_D-T_\text{in}\right)}{\pi D_{h}q''}\\
  &\approx \frac{0.06 \times 1000 \times 5380 \times(545-523)}{4 \times 5 \times 10^5}\approx 3.50 \mathrm{~m}.
\end{aligned}
$$

### Q2-5
In another scenario, assume that the **heat flux** is **unknown** and the **wall temperature is fixed** at $326^{\circ} \mathrm{C}$. **Chen's correlation** is used to calculate two-phase heat transfer coefficient and heat flux at $x =0.1$. Saturation pressure at $326^{\circ} \mathrm{C}$ is $12.2 \mathrm{~MPa}$ . 
<!-- Calculate the **nucleate boiling heat transfer coefficient** in Chen's correlation $h_{N B}$. -->
$$
\begin{aligned}
  &q'' = h_{2\Phi}(T_w - T_\text{sat}), \quad h_{2\Phi} = h_\text{NB} + h_c\\
  &h_c = 0.023\operatorname{Re}_f^{0.8}\operatorname{Pr}_f^{0.4}\frac{k_f}{D_h}F\\
  &h_\text{NB}=S \times 0.00122\left[\frac{\left(k^{0.79} C_p^{0.45} \rho^{0.49}\right)_f}{\sigma^{0.5} \mu_f^{0.29} h_{f g}^{0.24} \rho_g^{0.24}}\right] \Delta T_\mathrm{s a t}^{0.24} \Delta P^{0.75}
\end{aligned}
$$

where

$$
\begin{aligned}
& S=\frac{1}{1+2.53 \times 10^{-6} \mathrm{R e}^{1.17}} \\
& \mathrm{R e}=\mathrm{R e}_f F^{1.25} \\
& \mathrm{R e}_f=\frac{G(1-x) D_h}{\mu_f} \\
& F=\left\{
\begin{aligned}
  &1 \quad &&\text{for }\frac{1}{X_{t t}}<0.1 \\
  &2.35\left(0.213+\frac{1}{X_{t t}}\right)^{0.736} \quad  &&\text{for } \frac{1}{X_{t t}}>0.1
\end{aligned}\right.\\
& X_{t t}=\left(\frac{1-x}{x}\right)^{0.9}\left(\frac{\rho_g}{\rho_f}\right)^{0.5}\left(\frac{\mu_f}{\mu_g}\right)^{0.1} \\
& \Delta T_\mathrm{s a t}=T_w-T_\mathrm{s a t} \\
& \Delta P=P\left(T_w\right)-P\left(T_\mathrm{s a t}\right)
\end{aligned}
$$

The answer of $h_\text{NB}$ should be given in $\mathrm{W} /\left(\mathrm{m}^2 \mathrm{~K}\right)$.

**Answer**:

$$
\begin{aligned}
\operatorname{Re}_{{f}}=&\frac{G(1-x) D_{{h}}}{\mu_{{f}}}=\frac{1000(1-0.1) \times 0.06}{9.16 \times 10^{-5}}=5.90 \times 10^5 \\
\operatorname{Pr}_{{f}}=&\frac{\mu_{{f}} C_{{pf}}}{k_{{f}}}=\frac{9.16 \times 10^{-5} \times 5380}{0.570}=0.865 \\
X_{{tt}}=&\left(\frac{1-x}{x}\right)^{0.9}\left(\frac{\rho_{{g}}}{\rho_{{f}}}\right)^{0.5}\left(\frac{\mu_{{f}}}{\mu_{{g}}}\right)^{0.1}\\
=&\left(\frac{1-0.1}{0.1}\right)^{0.9}\left(\frac{36.5}{741}\right)^{0.5}\left(\frac{9.16 \times 10^{-5}}{1.9 \times 10^{-5}}\right)^{0.1}\approx 1.88.
\end{aligned}
$$

Since $\frac{1}{X_{t t}}\approx 0.533>0.1$,
$$
\begin{aligned}
F&=2.35\left(0.213+\frac{1}{X_{\mathrm{tt}}}\right)^{0.736}\approx 1.89 \\
h_c&=0.023 \operatorname{Re}_f^{0.8} \operatorname{Pr}_f^{0.4} \frac{k_f}{D_{h}} F\\
&\approx 0.023\left(5.90 \times 10^5\right)^{0.8}(0.865)^{0.4}\left(\frac{0.570}{0.06}\right) 1.89\\
&\approx 1.61 \times 10^4 \mathrm{~W} /\left(\mathrm{m}^2 \mathrm{~K}\right)
\end{aligned}
$$

On the other hand:
$$
\begin{aligned}
  &\Delta T_\mathrm{s a t}=T_w-T_\mathrm{s a t} = (326 - 286)^\circ\mathrm{C} = 40^\circ\mathrm{C}\\
  &\Delta P=P\left(T_w\right)-P(T_\mathrm{s a t}) = (12.2 - 7)\mathrm{~MPa} = 5.2\times 10^6\mathrm{~Pa}\\
  \implies &\operatorname{Re} = \operatorname{Re}_fF^{1.25}\approx 1.31\times 10^6\\
  \implies & S=\frac{1}{1+2.53 \times 10^{-6} \mathrm{R e}^{1.17}}\approx 0.0268\\
  \implies & h_{NB} = S\times 0.00122\left[\frac{\left(k^{0.79} C_p^{0.45} \rho^{0.49}\right)_f}{\sigma^{0.5} \mu_f^{0.29} h_{f g}^{0.24} \rho_g^{0.24}}\right] \Delta T_\mathrm{s a t}^{0.24} \Delta P^{0.75}\approx 1.04\times 10^4 \mathrm{~W} /\left(\mathrm{m}^2 \cdot\mathrm{K}\right).
\end{aligned}
$$

Thus,
$$
\begin{aligned}
  &h_{2\Phi} = h_\text{NB}+h_c \approx 2.65\times 10^4 \mathrm{~W} /\left(\mathrm{m}^2 \cdot\mathrm{K}\right) \\
  \implies& q'' = h_{2\Phi}(T_w - T_\text{sat})\approx 1.06\times 10^6\mathrm{~W/m^2}.
\end{aligned}
$$

### Q2-6
Assume that the liquid velocity is zero (pool conditions), calculate the critical heat flux using Zuber's correlation:
$$
q_\text{cr}^{\prime \prime}=\rho_g j_g h_{f g}
$$

where the vapor velocity leading to the onset of fluidization $j_g$ is given by:
$$
j_g=0.13\left[\frac{\sigma\left(\rho_f-\rho_g\right) g}{\rho_g^2}\right]^{1 / 4}
$$

The answer of $q_\text{cr}^{\prime \prime}$ should be given in $\mathrm{W} / \mathrm{m}^2$.


**Answer**:
$$
\begin{aligned}
  &j_g=0.13\left[\frac{\sigma\left(\rho_f-\rho_g\right) g}{\rho_g^2}\right]^{1 / 4}\approx 0.0176\mathrm{~m/s} \\
  \implies & q_\text{cr}^{\prime \prime}=\rho_g j_g h_{f g}\approx 3.95\times 10^6 \mathrm{~W} / \mathrm{m}^2.
\end{aligned}
$$

## Quiz5
It has been decided to conduct a two-phase flow experiment at the given void fraction and mass flux. During the experiment, there will be a pressure drop in the system due to the liquid single-phase flow and two-phase flow. Estimation of the pressure drop is essential to select right equipment such as pump. To select the pump, liquid flow rate and total head loss are required. In the current simplified example, the procedure for pump selection is reviewed.

Given Key Information

- Void fraction：$\langle\alpha\rangle=0.70$
- Mass flux $\left.G=900 \mathrm{~kg} /(\mathrm{m\cdot s}\right)$
- Pressure condition： ${P}=0.1 \mathrm{MPa}$
- Temperature condition：$T=T_\text{sat}=180^{\circ} \mathrm{C}$
- Diameter of the vertical pipe test section：$D_h=0.06 \mathrm{~m}$
- Height of the vertical pipe test section：$H=4.0 \mathrm{~m}$
- Diameter of the horizontal water piping system：$D=0.12\mathrm{~m}$
- Length of the horizontal water piping system：$L=12 \mathrm{~m}$
- Liquid density：$\rho_f=887 \mathrm{~kg} / \mathrm{m}^3$
- Gas density：$\rho_{{g}}=5.16 \mathrm{~kg} / \mathrm{m}^3$
- Liquid dynamic viscosity $\mu_f=1.50 \times 10^{-4} \mathrm{~Pa\cdot s}$
- Gas dynamic viscosity：$\mu_g=1.50 \times 10^{-5} \mathrm{~Pa\cdot s}$
- Gravity acceleration：$g=9.8 \mathrm{~m} / \mathrm{s}^2$
- Air－water surface tension：$\sigma=0.0422 \mathrm{~N} / \mathrm{m}$

### Q5-1
Calculate the chum drift velocity value given by
$$
\left\langle\left\langle v_{{gj}}\right\rangle\right\rangle=\sqrt{2}\left(\frac{\Delta \rho g \sigma}{\rho_{{f}}^2}\right)^{0.25} .
$$
at the atmospheric flow condition. Fluid properties at the atmospheric condition: air and water densities are $1.17 \mathrm{~kg} / \mathrm{m}^3$ and $998 \mathrm{~kg} / \mathrm{m}^3$, and the surface tension and gravity acceleration are $0.0727 \mathrm{~N} / \mathrm{m}$ and $9.8 \mathrm{~m} / \mathrm{s}^2$.

**Answer**:
$$
\langle\langle v_{gj}\rangle\rangle = \sqrt{2}\left(\frac{\Delta \rho g\sigma}{\rho_f^2}\right)^{0.25} \approx 0.208 \mathrm{~m/s}.
$$

> $0.198-0.218$

### Q5-2
Calculate the quality for steam-water flow at void fraction of $0.70(\langle\alpha\rangle=0.70)$ at $1.0\mathrm{~MPa}$. Mass flux is $900 \mathrm{~kg} /\left(\mathrm{m}^2 \cdot \mathrm{s}\right)$. Use the values of drift velocity and distribution parameter($=1.2$) in Questions 1.
Fluid properties at the $1.0\mathrm{~MPa}$: steam and water densities are $5.16 \mathrm{~kg} / \mathrm{m}^3$ and $887 \mathrm{~kg} / \mathrm{m}^3$. Use the following equation.
$$
\langle x\rangle=\frac{\frac{C_0}{\rho_{{f}}}+\frac{\left\langle\left(v_{\mathrm{gi}}\right)\right\rangle}{G}}{\frac{1}{\langle\alpha\rangle \rho_{{g}}}-\frac{C_0}{\rho_{{g}}}+\frac{C_0}{\rho_{{f}}}}
$$

**Answer**:
$$
\langle x\rangle = \frac{\frac{C_0}{\rho_f} + \frac{\langle\langle v_{gj}\rangle\rangle}{G}}{\frac{1}{\langle \alpha\rangle\rho_g} - \frac{C_0}{\rho_g} + \frac{C_0}{\rho_f}}\approx 0.0347.
$$

> $0.033-0.0364$

### Q5-3
Use the calculated quality ($\langle x\rangle=0.0347$) to obtain the mixture volumetric flux at mass flux of $900 \mathrm{kg/(m^2\cdot s)}$.
The answer should be given using $\mathrm{m/s}$.

**Answer**:
$$
\begin{aligned}
  &\langle j_g\rangle = \frac{G\langle x\rangle}{\rho_g} \approx 6.05\mathrm{~m/s}\\
  &\langle j_f\rangle = \frac{G(1-\langle x\rangle)}{\rho_f}\approx 0.979\mathrm{~m/s}\\
  \implies& \langle j\rangle = \langle j_g\rangle + \langle j_f\rangle\approx 7.03\mathrm{~m/s}
\end{aligned}
$$

> $6.68-7.38$

### Q5-4
<img src="/fluid_tf9_3_quiz.png" alt="two-phase flow experiment" width="100%" align="center">

The figure shows the flow loop for the two-phase flow experiment in pipes. Water is driven by a pump and air is driven by an air compressor. They are mixed in the air-water injector, and then injected into the vertical pipe test section.

Assume that two phases flow in the vertical pipe with a **diameter** $\left(D_{{h}}\right)$ of $0.06 \mathrm{~m}$ at **mass flux** $(G)$ of $900 \mathrm{~kg}/\left(\mathrm{~m}^2\cdot\mathrm{s}\right)$ and **void fraction** $(\langle\alpha\rangle)$ of $0.70$ at the atmospheric condition. Calculate the hydrostatic pressure gradient. If the **total height of the pipe section** $({H})$ is $4 \mathrm{~m}$ , then what is the hydrostatic pressure loss? For simplicity, assume that the air and water fluid compressibility is negligible at the flow condition.
The valve head loss in the horizontal pipe is $1 \mathrm{~m}$.

Assume that the void fraction change along the flow direction is negligible.

Fluid properties are given by:
$$
\begin{aligned}
& \rho_{{f}}=887 \mathrm{~kg} / \mathrm{m}^3, \rho_{{g}}=5.16 \mathrm{~kg} / \mathrm{m}^3 \\
& \mu_{{f}}=1.50 \times 10^{-4} \mathrm{~Pa} \cdot \mathrm{~s}, \mu_{{g}}=1.50 \times 10^{-5} \mathrm{~Pa} \cdot \mathrm{~s} \\
& g=9.8 \mathrm{~m} / \mathrm{s}^2
\end{aligned}
$$

The answer should be given using $\mathrm{Pa}$.

**Answer**:
The two-phase hydrostatic pressure gradient is given by:
$$
\left(\frac{\mathrm{d}P}{\mathrm{d}x}\right)_\text{hydro} = \rho_mg = [\langle\alpha\rangle\rho_g + (1-\langle\alpha\rangle)\rho_f]g.
$$

If the pipe height is $5\mathrm{~m}$, then:
$$
\Delta P_{\mathrm{hyd}} = \left(\frac{\mathrm{d}P}{\mathrm{d}x}\right)_\text{hydro}H = \rho_m gH = [\langle\alpha\rangle\rho_g + (1-\langle\alpha\rangle)\rho_f]gH \approx 10573\mathrm{~Pa}.
$$

> $10043-11101$

### Q5-5
Following Question 4, calculate the two-phase frictional pressure gradient using the Lockhart-Martinelli method. What is the two-phase frictional pressure loss in the vertical pipe if the pipe length is $4 \mathrm{~m}$ ?
The following friction factors can be used:
- Laminar flow:
$$
{f}_{\text {fric }}=\frac{64}{\operatorname{R e}} .
$$

- Turbulent flow:
$$
{f}_{\text {fric }}=\frac{0.316}{\operatorname{R e}^{0.25}}
$$

Two-phase multiplier is given by:
$$
\Phi_{{f}}^{2}=1+\frac{C}{X}+\frac{1}{X^{2}} .
$$

where

| Liquid | Gas | C |
| :---: | :---: | :---: |
| Turbulent  | Turbulent  | 20 |
| Laminar  | Turbulent  | 12 |
| Turbulent  | Laminar  | 10 |
| Laminar  | Laminar  | 5 |

The answer should be given using $\mathrm{Pa}$.

**Answer**: The relevant formulas:
$$
\begin{gathered}
  \left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},2\Phi} = \Phi_f^2\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}, \text{ where } \left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f} = \frac{f}{D}\frac{\rho_f \langle j_f\rangle^2}{2} \\
  X = \sqrt{\frac{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}}{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},g}}}\quad \text{(Lockhart-Martinelli coefficient)}
\end{gathered}
$$

The reynolds number about the liquid and gas are calculated by:
$$
\begin{aligned}
  &\operatorname{Re}_f = \frac{\rho_f\langle j_f\rangle D_h}{\mu_f} = 347508\\ 
  &\operatorname{Re}_g = \frac{\rho_g\langle j_g\rangle D_h}{\mu_g} = 124920.
\end{aligned}
$$

Both gas and liquid flows are **turbulent**. Thus, liquid and gas friction factors are calculated by:
$$
\begin{aligned}
  &f_{\mathrm{fric},f} = \frac{0.316}{\operatorname{Re}_f^{0.25}} \approx 0.0130 \\
  &f_{\mathrm{fric},g} = \frac{0.316}{\operatorname{Re}_g^{0.25}} \approx 0.0168
\end{aligned}
$$

Then, liuquid and gas pressure gradients are calculated by:
$$
\begin{aligned}
  &\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f} = \frac{f_{\mathrm{fric},f}}{D_h}\frac{\rho_f \langle j_f\rangle^2}{2}\approx 92.3\mathrm{~Pa/m}\\
  &\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},g} = \frac{f_{\mathrm{fric},g}}{D_h}\frac{\rho_g \langle j_g\rangle^2}{2}\approx 26.5\mathrm{~Pa/m}.
\end{aligned}
$$

Then, the Lockhart-Martinelli coefficient is given by:
$$
X = \sqrt{\frac{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}}{\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},g}}}\approx 1.87.
$$

$C=20$ for both gas and liquid are turbulent. The two-phase multiplier is calculated by:
$$
\Phi_{{f}}^{2}=1+\frac{C}{X}+\frac{1}{X^{2}} \approx 12.0.
$$

Eventually, we have
$$
\begin{aligned}
  &\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},2\Phi} = \Phi_f^2\left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},f}\approx 1107\mathrm{~Pa/m} \\
  \implies& \Delta P_{\mathrm{fric},2\Phi} = \left(-\frac{\mathrm{d}P}{\mathrm{d}z}\right)_{\mathrm{fric},2\Phi}H \approx 4430\mathrm{~Pa}.
\end{aligned}
$$

> $4199-4641$

### Q5-6
Assume that pipes for transporting water has the **diameter** ($D$) of $0.12 \mathrm{~m}$. Calculate the **liquid velocity** in the water pipe if the liquid compressibility is negligible. What is the **frictional pressure gradient** in water pipe? If the water pipe has the length of $12 \mathrm{~m}$. what is the **frictional pressure loss** of water?
The answer should be given using $\mathrm{Pa}$.

**Answer**: 

According to Question 7, the liquid velocity in the **pipe test section** is:
$$
\left\langle j_{{f}}\right\rangle\approx 0.979 \mathrm{~m} / \mathrm{s} .
$$

Then, the liquid volumetric flow rate is:
$$
Q_f=\frac{\langle j_f\rangle \pi D_h^2}{4}\approx 0.979 \times \frac{\pi}{4} \times 0.06^2=0.00277 \mathrm{~m}^3 / \mathrm{s} .
$$

Then, the liquid velocity in the **water pipe** is:
$$
\left\langle j_{f, 1 \Phi}\right\rangle=\frac{4 Q_f}{\pi D^2}\approx \frac{4 \times 0.00277}{\pi \times 0.12^2}=0.245 \mathrm{~m} / \mathrm{s} .
$$

Then, the liquid single-phase Reynolds number is:
$$
\operatorname{R e}_{{f}, 1 \Phi}=\frac{\rho_{{f}}\langle j_{{f}, 1 \Phi}\rangle D}{\mu_{{f}}}\approx\frac{887 \times 0.245 \times 0.12}{1.50 \times 10^{-4}}=173754.
$$

The liquid single-phase flow is **turbulent**. Thus, the single-phase friction factor is:
$$
f_{\mathrm{fric}, 1 \Phi}=\frac{0.316}{\operatorname{R e}_{f, 1 \Phi}^{0.25}}\approx\frac{0.316}{24689^{0.25}}=0.0155
$$

Then, the liquid single-phase frictional pressure gradient is:
$$
\begin{aligned}
& \left(-\frac{\mathrm{d} p}{\mathrm{d} x}\right)_{\mathrm{fric}, 1 \Phi}=\frac{f_{\mathrm{fric}, 1 \Phi}}{D}\frac{\rho_f \langle j_{f, 1 \Phi}\rangle^2}{2} \\
\approx&\frac{0.0155 \times 887 \times 0.245^2}{0.12 \times 2}\approx 3.43 \mathrm{~Pa} / \mathrm{m}
\end{aligned}
$$

Then, the liquid single-phase frictional pressure loss is:
$$
\Delta P_{\text {fric }, 1 \Phi}=\left(-\frac{\mathrm{d} p}{\mathrm{d} x}\right)_{\mathrm{fric}, 1 \Phi} L\approx 3.43 \times 12\approx 41.2 \mathrm{~Pa}.
$$

> $39.2-43.4$

### Q5-7
Assume that the total pressure loss from pump to the top of the test section consists of a pressure loss due to the **horizontal single-phase liquid flow** and a pressure loss due to **the upward two-phase flow in the vertical test section**. Use the values calculated in Questions 4 to 6 to obtain a total pressure loss. 
The answer should be given using $\mathrm{Pa}$.

**Answer**:

The total pressure loss is equal to:
$$
\begin{aligned}
  \Delta P_{\text {total}}&=\Delta P_{\text {fric}, 1 \Phi}+\Delta P_{\text {fric}, 2 \Phi}+\Delta P_{\text{hydro}} + \Delta P_\text{valve}\\
  &\approx 41.2+4430+10573 + 1\times 887\times 9.8\approx 23736 \mathrm{~Pa}
\end{aligned}
$$

> $22540-24912$
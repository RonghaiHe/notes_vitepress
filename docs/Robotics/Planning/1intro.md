# Introduction
> Default Source：[*Motion Planning for Mobile Robots* from Shenlan Course by Fei Gao uploaded in Github](https://github.com/liuxinren456852/Motion-plan) before 2019

## Definition
### Autonomous Robot
An autonomous robot is a robot that performs behaviors or tasks with a high degree of autonomy (without external influence).

Sensing-Localization & Mapping-Planning-Control action loop

- **Estimation**:
  - Low latency
  - High accuracy & consistency
- **Perception**:
  - 3D sensing & dense perception
  - Map fusion & integration for planning
- **Planning**:
  - Complex & unknown environments
  - Safety & dynamical feasibility
  - Limited sensing & computation
- **Control**:
  - Aggressive maneuvers
  - Smooth trajectory tracking

### Motion Planning
- Basic requirements:
  - Safety: collision avoidance
  - Smoothness: energy saving, comfort
  - Kinodynamic feasibility: executable, controllable
- Old-school pipeline:
  - Front-end path finding:
    - Search for an initial safety path
    - Low dimensional
    - Discrete space
  - Back-end trajectory generation:
    - Search for an executable trajectory
    - High dimensional
    - Continuous space

## Outline of motion planning
Front-end: **Path finding**
- SEARCH-BASED PATH FINDING
  - Graph Search Basis
  - Dijkstra and A*
  - Jump Point Search
- SAMPLING-BASED PATH FINDING
  - Probabilistic Road Map
  - Rapidly-exploring Random Tree (RRT)
  - Optimal Sampling-based Methods
  - Advanced Sampling-based Methods
- KINODYNAMIC PATH FINDING
  - Introduction
  - State-state Boundary Value Optimal Control Problem
  - State Lattice Search
  - Kinodynamic RRT*
  - Hybrid A*

Back-end: Trajectory Generation
- MINIMUM SNAP TRAJECTORY GENERATION
  - Differential Flatness
  - Minimum Snap Optimization
  - Closed-form Solution to Minimum Snap
  - Time Allocation
  - Implementation in Practice
- SOFT AND HARD CONSTRAINED TRAJECTORY OPTIMIZATION
  - Soft Constrained Trajectory Optimization
  - Hard Constrained Trajectory Optimization

MDP & MPC
- MARKOV DECISION PROCESS-BASED PLANNING
  - Uncertainties in Planning and MDP
  - Minimax Cost Planning and Expected Cost Minimal Planning
  - Value Iteration and Real-Time Dynamic Programming
- MODEL PREDICTIVE CONTROL FOR ROBOTICS PLANNING
  - Introduction
  - Linear MPC
  - Non-linear MPC

## map Representation
Consists of two parts: **Data Structure** and **Fusion Method**.

- Occupancy Grid Map
  - Most dense
  - Structural
  - Direct Index Query
- Octo-map
  - Sparse
  - Structural
  - Indirect Index Query
- Voxel hashing
  - Most Sparse
  - Structural
  - Indirect Index Query
- Point Cloud Map
  - Un-ordered
  - No Index Query
- TSDF (Truncated Signed Distance Functions) map
- ESDF (Euclidean Signed Distance Functions) map
  - Incremental update, global map
  - Batch update, local map
- More:
  - Free-space roadmap
  - Voronoi diagram map
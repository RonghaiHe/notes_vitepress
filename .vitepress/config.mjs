import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base 设置成你的github仓库名
  base: '/notes_vitepress/',
  title: "Notes of RonghaiHe",
  description: "Notes shown in the website powered by VitePress & Github Actions+Pages",
  
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    logo: {src: '/book.svg', width: 24, height: 24},
    nav: [
      { text: 'Home', link: 'https://ronghaihe.github.io' },
      { text: 'Notes List', link: '/' },
      {
        text: 'Math',
        items: [
          {
            text: 'Engineering Methods',
            items: [
              { text: 'Vector Space', link: '/docs/Math/Engineering_Methods/linear_algebra1' },
              { text: 'Linear Transformation', link: '/docs/Math/Engineering_Methods/linear_algebra2' },
              { text: 'Linear Equation', link: '/docs/Math/Engineering_Methods/linear_algebra3' },
              { text: 'Determinant', link: '/docs/Math/Engineering_Methods/linear_algebra4' },
              { text: 'Eigen-values&vectors', link: '/docs/Math/Engineering_Methods/linear_algebra5' },
              { text: 'Inner Product', link: '/docs/Math/Engineering_Methods/linear_algebra6' },
              { text: 'Linear ODE', link: '/docs/Math/Engineering_Methods/linear_ODE' },
              { text: 'Laplace Transform', link: '/docs/Math/Engineering_Methods/laplace_transform' },
              { text: 'Numerical Methods for ODE', link: '/docs/Math/Engineering_Methods/numerical_methods_ODE' },
            ]
          }
        ]
      },
      {
        text: 'Control',
        items: [
          {
            text: 'Optimal Control',
            items: [
              { text: 'Introduction', link: '/docs/Control/Optimal_Control/1introduction' },
              { text: 'Control Theory', link: '/docs/Control/Optimal_Control/2controlTheory'},
              { text: 'Linear Time-Optimal Control', link: '/docs/Control/Optimal_Control/3linearTimeOptimalControl'},
              { text: 'Pontryagin Maximum Principle', link: '/docs/Control/Optimal_Control/4pontryagin'},
              { text: 'Dynamic Programming', link: '/docs/Control/Optimal_Control/5dynamicProgramming'},
              { text: 'Direct Methods', link: '/docs/Control/Optimal_Control/7DirectMethods'},
              { text: 'DAE', link: '/docs/Control/Optimal_Control/8DAE'},
            ]
          }
        ]
      },
      {
        text: 'Fluid',
        items: [
          {
            text: 'Thermal Fluid',
            items: [
              { text: 'External Flow', link: '/docs/Fluid/Thermal_Fluid/2externalFlow'},
              { text: 'Boundary Layer', link: '/docs/Fluid/Thermal_Fluid/3boundaryLayer'},
              { text: 'Internal Flow', link: '/docs/Fluid/Thermal_Fluid/4internalFlow'},
              { text: 'Kinematics', link: '/docs/Fluid/Thermal_Fluid/5fluidKinematics'},
              { text: 'Two Phase Flow: Intro', link: '/docs/Fluid/Thermal_Fluid/6twoPhase'},
              { text: 'Two Phase Flow: thermo-fluid', link: '/docs/Fluid/Thermal_Fluid/7thermoFluid'},
            ]
          }
        ]
      },
    ],

    sidebar: {
      '/docs/Math/Engineering_Methods/': [
        {
          text: 'Engineering Methods',
              items: [
                { text: 'Vector Space', link: '/docs/Math/Engineering_Methods/linear_algebra1' },
                { text: 'Linear Transformation', link: '/docs/Math/Engineering_Methods/linear_algebra2' },
                { text: 'Linear Equation', link: '/docs/Math/Engineering_Methods/linear_algebra3' },
                { text: 'Determinant', link: '/docs/Math/Engineering_Methods/linear_algebra4' },
                { text: 'Eigen-values&vectors', link: '/docs/Math/Engineering_Methods/linear_algebra5' },
                { text: 'Inner Product', link: '/docs/Math/Engineering_Methods/linear_algebra6' },
                { text: 'Linear ODE', link: '/docs/Math/Engineering_Methods/linear_ODE' },
                { text: 'Laplace Transform', link: '/docs/Math/Engineering_Methods/laplace_transform' },
                { text: 'Numerical Methods for ODE', link: '/docs/Math/Engineering_Methods/numerical_methods_ODE' },
              ]
        }
      ],

      '/docs/Control/Optimal_Control/': [
        {
          text: 'Optimal Control',
            items: [
              { text: 'Introduction', link: '/docs/Control/Optimal_Control/1introduction' },
              { text: 'Control Theory', link: '/docs/Control/Optimal_Control/2controlTheory'},
              { text: 'Linear Time-Optimal Control', link: '/docs/Control/Optimal_Control/3linearTimeOptimalControl'},
              { text: 'Pontryagin Maximum Principle', link: '/docs/Control/Optimal_Control/4pontryagin'},
              { text: 'Dynamic Programming', link: '/docs/Control/Optimal_Control/5dynamicProgramming'},
              { text: 'Direct Methods', link: '/docs/Control/Optimal_Control/7DirectMethods'},
              { text: 'DAE', link: '/docs/Control/Optimal_Control/8DAE'},
            ]
        }
      ],

      '/docs/Fluid/Thermal_Fluid/': [
        {
          text: 'Thermal Fluid',
            items: [
              { text: 'External Flow', link: '/docs/Fluid/Thermal_Fluid/2externalFlow' },
              { text: 'Boundary Layer', link: '/docs/Fluid/Thermal_Fluid/3boundaryLayer'},
              { text: 'Internal Flow', link: '/docs/Fluid/Thermal_Fluid/4internalFlow'},
              { text: 'Kinematics', link: '/docs/Fluid/Thermal_Fluid/5fluidKinematics'},
              { text: 'Two Phase Flow: Intro', link: '/docs/Fluid/Thermal_Fluid/6twoPhase'},
              { text: 'Two Phase Flow: thermo-fluid', link: '/docs/Fluid/Thermal_Fluid/7thermoFluid'},
            ]
        }
      ],
    },

    outline: {
      level: 'deep'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/RonghaiHe/notes_vitepress/issues/new',
      text: 'Report mistakes on Github Issues'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RonghaiHe' },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
        },
        link: "mailto:hrhkjys@gmail.com",
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Ronghai He'
    },

    lastUpdated: true
  }
})

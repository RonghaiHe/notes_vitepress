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
      { text: 'Notes', link: '/' },
      { text: 'Archive', link: 'https://ronghaihe.github.io/notes_vitepress_archive' },
      {
        text: 'Basic Math',
        items: [
          { text: 'Linear Algebra', link: '/docs/Math/LA/1intro' },
          { text: 'ODE', link: '/docs/Math/ODE/1linear_ODE' },
          { text: 'PDE', link: '/docs/Math/PDE/1linear_PDE' },
        ]
      },
      {
        text: 'Control',
        items: [
          { text: 'Optimal Control', link: '/docs/Control/OCP/1introduction' },
        ]
      },
    ],

    sidebar: {
      '/docs/Math/LA/': [
        {
          text: 'Linear Algebra',
              items: [
                { text: 'Vector Space', link: '/docs/Math/LA/1intro' },
                { text: 'Linear Transformation', link: '/docs/Math/LA/2linear_transformation' },
                { text: 'Linear Equation', link: '/docs/Math/LA/3matrix-linear_equation' },
                { text: 'Determinant', link: '/docs/Math/LA/4determinant' },
                { text: 'Eigen-values&vectors', link: '/docs/Math/LA/5eigenvalue' },
                { text: 'Inner Product', link: '/docs/Math/LA/6inner_product' },              ]
        }
      ],
      '/docs/Math/ODE/': [
        {
          text: 'ODE',
              items: [
                { text: 'Linear ODE', link: '/docs/Math/ODE/1linear_ODE' },
                { text: 'Laplace Transform', link: '/docs/Math/ODE/2laplace_transform' },
                { text: 'Numerical Methods for ODE', link: '/docs/Math/ODE/3numerical_methods_ODE' },
                { text: 'Series solutions for ODE', link: '/docs/Math/ODE/4series_solutions' },
                { text: 'Boundary Value Problems', link: '/docs/Math/ODE/5BVP' },
              ]
        },
        {
          text: 'PDE',
              items: [
                { text: 'Linear PDE', link: '/docs/Math/PDE/1linear_PDE' },
              ]
        }
      ],
      '/docs/Math/PDE/': [
        {
          text: 'ODE',
              items: [
                { text: 'Linear ODE', link: '/docs/Math/ODE/1linear_ODE' },
                { text: 'Laplace Transform', link: '/docs/Math/ODE/2laplace_transform' },
                { text: 'Numerical Methods for ODE', link: '/docs/Math/ODE/3numerical_methods_ODE' },
                { text: 'Series solutions for ODE', link: '/docs/Math/ODE/4series_solutions' },
                { text: 'Boundary Value Problems', link: '/docs/Math/ODE/5BVP' },
              ]
        },
        {
          text: 'PDE',
              items: [
                { text: 'Linear PDE', link: '/docs/Math/PDE/1linear_PDE' },
              ]
        }
      ],
      '/docs/Control/OCP/': [
        {
          text: 'Optimal Control',
            items: [
              { text: 'Introduction', link: '/docs/Control/OCP/1introduction' },
              { text: 'Control Theory', link: '/docs/Control/OCP/2controlTheory'},
              { text: 'Linear Time-Optimal Control', link: '/docs/Control/OCP/3linearTimeOptimalControl'},
              { text: 'Pontryagin Maximum Principle', link: '/docs/Control/OCP/4pontryagin'},
              { text: 'Dynamic Programming', link: '/docs/Control/OCP/5dynamicProgramming'},
              { text: 'Direct Methods', link: '/docs/Control/OCP/7DirectMethods'},
              { text: 'DAE', link: '/docs/Control/OCP/8DAE'},
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

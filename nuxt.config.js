
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
<<<<<<< HEAD
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
=======
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
>>>>>>> origin/create-showbooks
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
<<<<<<< HEAD
=======
  dev: (process.env.NODE_ENV !== 'production'),
>>>>>>> origin/create-showbooks
  /*
  ** Nuxt.js modules
  */
  modules: [
<<<<<<< HEAD
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
=======
    [
      '@nuxtjs/axios',
      '@nuxtjs/proxy',
      'storyblok-nuxt',
      {
        accessToken: 'FsriFeBySE2IiLllzIqaWAtt',
        cacheProvider: 'memory'
      }
    ]
>>>>>>> origin/create-showbooks
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
<<<<<<< HEAD
  }
=======
  },
  proxy: {
    '/api': (this.dev) ? 'http://localhost:8000' : 'https://production-url'
  },
  axios: {
  },
>>>>>>> origin/create-showbooks
}

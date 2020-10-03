require('dotenv').config()
const { API_KEY, BASE_URL } = process.env

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      // },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' }    
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
    { src: '@/plugins/axios/index'},
    { src: '~/plugins/vue-awesome-swiper'}
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
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/axios',
      '@nuxtjs/proxy',
      'storyblok-nuxt',
      'bootstrap-vue/nuxt',
      {
        accessToken: 'FsriFeBySE2IiLllzIqaWAtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vendor: [
      'vue-awesome-swiper'
    ]
  },
  proxy: {
    '/api': (this.dev) ? 'http://localhost:8000' : 'https://production-url'
  },
  axios: {
  },
  fontawesome: {
    component: 'fa'
  },
  env: {
    API_KEY,
    BASE_URL,
  }
}

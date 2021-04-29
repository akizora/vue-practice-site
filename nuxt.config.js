require("dotenv").config()
const { API_KEY, BASE_URL, NODE_ENV } = process.env

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      // },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/axios/index" },
    { src: "~/plugins/vue-awesome-swiper" },
    { src: "~plugins/ga.js", mode: "client" },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  dev: process.env.NODE_ENV !== "production",
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/axios",
      // '@nuxtjs/proxy',
      "storyblok-nuxt",
      "bootstrap-vue/nuxt",
      {
        accessToken: "FsriFeBySE2IiLllzIqaWAtt",
        cacheProvider: "memory",
      },
    ],
    ["@nuxtjs/sitemap"],
    ["@nuxtjs/robots"],
    ["@nuxtjs/google-analytics"],
  ],
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://fastbook.work",
    generate: true,
    // 例えば、管理画面があるような場合は下記のように除外するのがベター（内容は仮です）
    // exclude: ['/admin', '/user'],
    // ルートを設定
    // ルートが固定ならば、下記のように配列で定義すればよいです
    // routes: ['/about', '/contact'],
    // 動的なルートが存在する場合は、APIで記事データを取得してパスを設定する方法を採りましょう
  },
  robots: {
    UserAgent: "*",
    // クローリングしないパスを記述
    // Disallow: '/preview',
    // sitemap.xmlのURLを記述
    Sitemap: "https://fastbook.work/sitemap.xml",
  },
  googleAnalytics: {
    id: "G-7XFE3TJPNM",
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    vendor: ["vue-awesome-swiper"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  proxy: {
    "/api": this.dev ? "http://localhost:8000" : "https://production-url",
  },
  axios: {},
  fontawesome: {
    component: "fa",
  },
  env: {
    API_KEY,
    BASE_URL,
    NODE_ENV,
  },
  // netlify対応 SPAだとpage not foundになる
  generate: {
    fallback: true,
  },
}

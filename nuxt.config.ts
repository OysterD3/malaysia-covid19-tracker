export default {
  server: {
    port: 8080,
    host: "local.covid19.com.my",
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Malaysia Covid-19 Tracker by Oyster Lee",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A Covid-19 Tracker for Malaysia which was developed by Oyster Lee. Data was provided by disease.sh and MoH Malaysia",
      },
      { name: "og:title", content: "Malaysia Covid-19 Tracker by Oyster Lee" },
      {
        name: "og:description",
        content:
          "A Covid-19 Tracker for Malaysia which was developed by Oyster Lee. Data was provided by disease.sh and MoH Malaysia",
      },
      {
        name: "og:site_name",
        content: "Malaysia Covid-19 Tracker",
      },
      {
        name: "og:image",
        content: "/og.png",
      },
      {
        name: "og:url",
        content: "https://covid19.oysterlee.dev",
      },
      {
        name: "twitter:title",
        content: "Malaysia Covid-19 Tracker by Oyster Lee",
      },
      {
        name: "twitter:description",
        content:
          "A Covid-19 Tracker for Malaysia which was developed by Oyster Lee. Data was provided by disease.sh and MoH Malaysia",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:image",
        content: "/og.png",
      },
      {
        name: "twitter:url",
        content: "https://covid19.oysterlee.dev",
      },
      {
        name: "theme-color",
        content: "#1c2734",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api",
    "~/plugins/echarts",
    { src: "~/plugins/gtag", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "nuxt-vite",
    "nuxt-windicss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Malaysia Covid-19 Tracker",
      short_name: "MY Covid19 Tracker",
    },
  },

  typescript: {
    typeCheck: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

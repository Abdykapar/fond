import messages from './lang/messages'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ыйман - руханий маданиятты онуктуруу фонду',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', '@/static/style/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/filters', '@/plugins/vue-agile'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-leaflet', { attributionControl: false }],
    'nuxt-svg-loader',
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
  },

  axios: {
    baseURL: 'https://api.iyman.kg/api', // Used as fallback if no runtime config is provided
  },

  i18n: {
    locales: ['ky', 'ru', 'en'],
    defaultLocale: 'ky',
    vueI18n: {
      fallbackLocale: 'ky',
      messages,
    },
  },
}

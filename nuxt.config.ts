// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        // "data-bs-theme": "dark",
      },
    },
  },
  components: ["~/components/layout", "~/components"],
  css: ["~/assets/css/main.less", "~/assets/css/bootstrap.scss"],
  devServer: {
    host: "localhost",
    port: 80,
  },
  devtools: { enabled: true },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  modules: ["@nuxtjs/eslint-module", "@nuxt/image"],
});

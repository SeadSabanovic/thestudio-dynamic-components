// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/fonts', 'nuxt-icons'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  typescript: {
    typeCheck: true,
    strict: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      {
        name: 'Figtree',
        weights: [400, 500, 600, 700],
      },
      {
        name: 'Montserrat',
        weights: [400, 500, 600, 700],
      },
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
    },
  },
})

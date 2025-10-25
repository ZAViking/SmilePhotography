export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    // You can add specific sources if needed
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    }
  }
})
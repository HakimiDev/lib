// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    { src: "@/plugins/aos.client.ts", ssr: false, mode: "client" },
],
  app: {
    head: {
      title: "Hakimi",
      meta: [{ name: "description", content: "Everything about Hakimi" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        },
      ],
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

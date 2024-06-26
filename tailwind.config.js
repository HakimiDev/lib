/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue"
    ],  theme: {
      extend: {
        screens: {
          xs: '300px'
        },
        colors: {
          primary: {
            50: "#fff",
            100: "#fff",
            200: "#666"
          }
        }
      },
    },
    plugins: [],
  }
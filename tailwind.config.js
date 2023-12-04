/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header_index: "url('/src/assets/images/header_index.png')",
        subs_cta_bg: "url('/src/assets/images/background_cta_subscribe.png')",
      },
      colors: {
        pink: "#ea5376"
      },
      fontFamily: {
        montse: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
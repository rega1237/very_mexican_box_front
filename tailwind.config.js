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
        sign_in_bg: "url('/src/assets/images/sign_in_bg.png')",
        sign_up_bg: "url('/src/assets/images/sign_up_bg.png')",
        subscription_bg: "url('/src/assets/images/subscription_bg.png')",
      },
      colors: {
        pink: "#ea5376",
        backgroundCard: "rgba(72, 72, 72, 0.8)"
      },
      fontFamily: {
        montse: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
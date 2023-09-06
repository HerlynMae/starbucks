/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: "Poppins",
      }
    },
    colors:{
      dark: "1e3932",
      darkgray: "#5d615f",
      gray: "#b9bdbb",
      light: "#ffffff",
      darkgreen: "#1e3932",
      green: "#006340",
      lightgreen: "#d4e9e2",
      yellow: "#d2a04b",
      transparent: "transparent",
    },
    backgroundImage: {
      bannerdesktop: 'url(/img/rewards/xl-hero-desktop_2021.png)',
    }
  },
  plugins: [],
}


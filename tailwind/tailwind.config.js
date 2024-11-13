/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "source/plant/{index.html,app.js}"
  ],
  theme: {
    extend: {},

    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },

    container:{
      center: true,
      padding:{
        DEFAULT: "12px",
        md: "32px"
      }
    },

    fontFamily:{
      jost: ["Jost","sans-serif"],
      lobster: ["Lobster","sans-serif"],
    },

    keyframes: {
      move: {
        "50%": {transform: "TranslateY(-1rem)"},
      },
      rotate:{
        "0%" : {transform: "rotate(0deg)"},
        "100%" : {transform: "rotate(360deg)"},
      },
      scale:{
        "0%" : {transform: "scale(.8)"},
        "50%" : {transform: "scale(1.2)"},
        "100%" : {transform: "scale(.8)"},
      }

    },
    animation: {
      moveY : "move 3s linear infinite",
      rotate: "rotate 10s linear infinite",
      scale: "scale 6s linear infinite",
    },

    dropShadow: { 
      'yellow': '0 2rem 2rem rgba(134, 179, 8, 0.4)'
    }
  },
  plugins: [],
}


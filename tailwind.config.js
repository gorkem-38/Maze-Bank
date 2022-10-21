/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Pricedown: ["Pricedown"]
      },
      backgroundImage: {
        'mazebank': "url('../img/maze-bank-tower.jpg')",
      }
    },
  },
  plugins: [],
}; 
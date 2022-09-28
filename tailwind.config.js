/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Pricedown: ["Pricedown", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'mazebank': "url('../img/maze-bank-tower.jpg')",
      }
    },
  },
  plugins: [],
}; 
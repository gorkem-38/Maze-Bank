/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mazebank': "url('../img/maze-bank.jpg')",
      }
    },
  },
  plugins: [],
}; 
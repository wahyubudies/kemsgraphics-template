/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        white : {
          10 : '#E4E4E5'
        }
      }
    },
  },
  plugins: [],
}

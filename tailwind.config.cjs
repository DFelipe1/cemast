/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        textColor: '#252B42',
        bgBackground: '#FFF2F3'
      }
    },
  },
  plugins: [],
}

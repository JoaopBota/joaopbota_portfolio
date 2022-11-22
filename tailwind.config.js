/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Varela: 'varela',
      },
      backgroundImage: {
        'origins': "url(../public/background2.png)"
      }
    },
  },
  plugins: [],
}
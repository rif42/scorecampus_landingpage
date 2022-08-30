/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
    },
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      inter: ["inter", "sans-serif"],
    },
    extend: {
      backgroundImage:{
        'scorecampuslogo': "url('./assets/images/scorecampuslogo.png')",
      },
      colors:{
        'scorecampusdarkblue': '#1A1D26',
        'gradientred': 'linear-gradient(90deg, #ea580c 0%, #dc2626 100%)',
      }
    },
  },
  plugins: [],
}

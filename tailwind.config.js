/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        WHITE: '#FFFFFF',
    
        "GREEN-700": '#00875F',
        "GREEN-500": '#00B37E',
    
        "RED": '#F75A68',
        "RED-DARK": '#AA2834',
        "GRAY-700": '#121214',
        "GRAY-600": '#202024',
        "GRAY-500": '#29292E',
        "GRAY-400": '#323238',
        "GRAY-300": '#7C7C8A',
        "GRAY-200": '#C4C4CC',
        "GRAY-100": '#E1E1E6'
      },
      fontFamily: {
        regular: 'Roboto_400Regular',
        bold: 'Roboto_700Bold'
      },
      fontSize: {
        sm: 14,
        md: 16,
        lg: 18,
        xl: 24
      }
    },
  },
  plugins: [],
}


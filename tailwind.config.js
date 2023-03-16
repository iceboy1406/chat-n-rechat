const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
        'inter': ['Inter'],
        'sourceSansPro': ['Source Sans Pro']
      },
      colors: {
        primary: '#4A72FF',
        dark: '#0C1B4D',
        light: '#F4F7FF'
      },
      backgroundImage: {
        radiantGradient: 'radial-gradient(50% 50% at 50% 50%, #E2EAFF 0%, #F4F7FF 100%);'
      }
    },
  },
  plugins: [],
}

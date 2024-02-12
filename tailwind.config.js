/** @type {import('tailwindcss').Config} */
const theme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...theme.fontFamily.sans],
      },
      colors: {
        primary: colors.neutral,
        accent: colors.emerald,
      },
      boxShadow: {
        inner: 'inset 0 2px 8px 3px',
      },
      dropShadow: {
        xs: '0 4px 3px rgba(255, 255, 255, 1)',
        sm: '0 0 2px rgba(0, 0, 0, 0.75)',
        lg: '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      zIndex: {
        1: '1',
      },
      willChange: {
        opacity: 'opacity',
      },
      screens: {
        md: '850px',
      },
    },
  },
  plugins: [],
}


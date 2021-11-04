const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./{pages,components}/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

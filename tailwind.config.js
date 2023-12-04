/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


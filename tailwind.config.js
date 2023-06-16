/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        'purple': '#9c27b0',
        'light-purple': '#c786d3',
        'very-light-purple': '#f1e1f4',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/banner.jpg')",
      })
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components',
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  fontFamily: {
    Roboto: ["Roboto, san-serif"]
  },
  container: {
    padding: "2rem",
    center: true,
  },
  screens: {
    sm: "648px",
    md: "768px",
  }
}


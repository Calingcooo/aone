/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#bba14f',
        'light-yellow': '#FFFFCC'
      },
      fontSize: {
        'xxs': '8px',
        '3xs': '5px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

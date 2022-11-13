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
        'light-yellow': '#FFFFCC',
        'beige': '#f4f1ec'
      },
      fontSize: {
        'xxs': '8px',
        '3xs': '5px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

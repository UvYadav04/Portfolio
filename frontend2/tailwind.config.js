/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        boxShadow: {
          'custom-light': '0 4px 6px white',
          'custom-dark': '0 4px 10px rgba(0, 0, 0, 0.3)',
        }
      }
    },
  },
  plugins: [],
}
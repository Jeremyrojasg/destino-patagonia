/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0B3D2E',
        'light-green': '#B9E5B1',
      },
    },
  },
  plugins: [],
};
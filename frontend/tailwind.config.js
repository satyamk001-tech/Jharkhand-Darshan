/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jharkhand: {
          dark: '#1c1917',
          russet: '#7c2d12',
          amber: '#d97706',
          gold: '#f59e0b',
          forest: '#14532d',
          sand: '#fef3c7'
        }
      }
    },
  },
  plugins: [],
}

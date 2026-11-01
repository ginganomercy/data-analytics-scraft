/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4f5',
          100: '#fbe8eb',
          200: '#f7d5d9',
          300: '#f0b3bb',
          400: '#e58593',
          500: '#d45669',
          600: '#be394f',
          700: '#9f2c3f',
          800: '#852737',
          900: '#712432',
          950: '#3e0f17',
        }
      }
    },
  },
  plugins: [],
}


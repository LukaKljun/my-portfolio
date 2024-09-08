/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#002244',
        accent: '#FF6600',
        background: '#001F3F',
        text: '#E0E0E0',
      },
    },
  },
  plugins: [],
}

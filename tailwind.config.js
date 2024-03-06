/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ui-sans-serif' : ['ui-sans-serif', 'sans-serif', 'system-ui', 'Roboto', 'Arial', 'Helvetica'],
    },
    extend: {},
  },
  plugins: [],
}
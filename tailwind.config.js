/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
          palanquin: ['Palanquin', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        colors: {
          coral_red: '#ff6254'
        }
      },
  },
  plugins: [],
}

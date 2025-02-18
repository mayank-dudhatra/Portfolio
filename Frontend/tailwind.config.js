/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739889585/bkqz5lacwtir0dtytkab.png')",
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
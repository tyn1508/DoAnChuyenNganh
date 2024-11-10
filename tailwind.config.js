/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'baner': 'url(/Banner-Joker-2.png)'
      }
    },
  },
  plugins: [],
}


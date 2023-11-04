/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berkshire_font: `'Berkshire Swash', serif`, // Adds a new `font-display` class
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans:  ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

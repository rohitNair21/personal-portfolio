/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fade: 'fadeOut 5s ease-in-out',
      },
      fontFamily:{
        Roboto: "Roboto",
        Lobster: "Lobster",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: "#272727",
        primary: "#0b1320",
        secondary: "#f3f6fa",
        tertiary: "#afc1d0",
        imp: "#1c3f60",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#9EC5E9',
        secondary: '#1DA868',
        tertiary: '#FADE71',
        imp: '#1c3f60',
        impEx: '#88B13E',
        extra: '#F3D55F',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-dark': '#101054',
        blue: '#1E41B0',
        'blue-light': '#00B4D8',
        'blue-lighter': '#8ACEF1',
        'blue-lightest': '#CAF0F8',
      },
    },
  },
  plugins: [require('daisyui')],
};

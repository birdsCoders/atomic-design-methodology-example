/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#65e4a3',
        secondary: '#0a2640',
        border: '#d3d3d3',
        main: '#111',
        light: '#777',
      },
      borderRadius: {
        base: '1.8rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('first', '&:first-child');
      addVariant('onlyChild', '&:only-child');
    },
  ],
};

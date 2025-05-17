/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/**/*.css"
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#FAF8F3',
        'secondary': '#D2D0A0',
        'VertSauge': '#537D5D',
        'VertSaugePale': '#73946B',
        'BrunTerre':'#5C3D2E',
        'TexteGris':'#4F4F4F',       
      },
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: []
} 
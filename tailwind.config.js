/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  './public/**/*.{html,js}',],
  theme: {
    extend: {
      maxWidth:{
        '16':'16rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}


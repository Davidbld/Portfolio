/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      padding: {
        '1/3' : '33.33333%',
        '2/3' : '66.66667%',
      },
    },
    daisyui: {
      themes: ["light", "dark"],
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


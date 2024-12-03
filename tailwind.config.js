/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./public/pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      padding: {
        '1/3' : '33.33333%',
        '2/3' : '66.66667%',
      },
      width: {
        '2/4' : '50%',
        '3/4' : '75%',
      }
    },
    daisyui: {
      themes: ["light", "dark"],
    },
  },
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
    },
    daisyui: {
      themes: ["light", "dark"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


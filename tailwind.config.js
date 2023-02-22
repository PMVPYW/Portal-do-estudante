/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.{html,js}"],
  theme: {
    extend: {
      size : {
        'h-user-img' : '135px',
        'w-user-img' : '108px'
      }
    },
  },
  plugins: [],
}

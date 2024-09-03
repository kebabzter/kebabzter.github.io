/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/pages/*.{html,js}"],
  safelist:[
    "underline",
    "decoration-2",
    "underline-offset-8"
  ],
  theme: {
    extend: {
        fontFamily:{
            rubik: ['Rubik', 'sans-serif']
        },
        fontSize:{
            "10xl": "10rem",
            "11xl": "12rem",
            "gigaxl": "30rem"
        },
        animation:{
            'spin-slow': 'spin 5s linear infinite',
            'spin-slower': 'spin 10s linear infinite',
            'spin-slowerer': 'spin 15s linear infinite',
        }
    },
  },
  plugins: [],
}


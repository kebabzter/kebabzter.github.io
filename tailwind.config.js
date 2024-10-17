/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./src/pages/*.{html,js}", "./src/pages/blog-posts/*.{html,js}"],
    safelist: ["underline", "decoration-2", "underline-offset-8"],
    theme: {
        extend: {
            colors:{
                "pastel-peach": {
                    300: '#ffd3b6',
                    600: '#ff8433',
                    900: '#af4500'
                },
                "pastel-purple": {
                    300: '#c392d2',
                    600: '#a4d05d',
                    900: '#572a65'
                },
                "pastel-rose":{
                    300: '#ff8b94',
                    600: '#ff1527',
                    900: '#9e000c'
                },
                "pastel-sunset":{
                    300: '#ffaaa5',
                    600: '#ff3327',
                    900: '#a80900'
                },
                "pastel-sand":{
                    300: '#f3db8d',
                    600: '#ebc240',
                    900: '#745b0c'
                },
                "pastel-baby":{
                    300: '#8eceff',
                    500: '#36a7ff',
                    600: '#0a94ff',
                    900: '#004b84'
                }
                
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            fontSize: {
                "10xl": "10rem",
                "11xl": "12rem",
                megaxl: "15rem",
                gigaxl: "30rem",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                "spin-slow": "spin 5s linear infinite",
                "spin-slower": "spin 10s linear infinite",
                "spin-slowerer": "spin 15s linear infinite",
                "bounce-slow": "bounce 5s infinite",
                wiggle: "wiggle 1s ease-in-out infinite",
                "wiggle-slow": "wiggle 3s ease-in-out infinite",
            },
            backgroundImage: {
                'diagonal-dash': 'repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.2) 1px, transparent 2px, transparent 10px)',
              },
        },
    },
    plugins: [],
};

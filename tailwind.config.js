/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./src/pages/*.{html,js}"],
    safelist: ["underline", "decoration-2", "underline-offset-8"],
    theme: {
        extend: {
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
            },
        },
    },
    plugins: [],
};

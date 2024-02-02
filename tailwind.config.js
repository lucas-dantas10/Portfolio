/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            keyframes: {
                "fade-in-down": {
                    from: {
                        transform: "translateY(-0.75rem)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0rem)",
                        opacity: "1",
                    },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },

            animation: {
                "fade-in-down": "fade-in-down .2s ease-in-out both",
                'slide-in-right': 'slide-in-right 1.5s ease',
                'slide-in-left': 'slide-in-left 1.5s ease',
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};

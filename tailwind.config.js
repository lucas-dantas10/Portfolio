/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
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
          },
    
          animation: {
            'fade-in-down': 'fade-in-down .2s ease-in-out both',
          },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}


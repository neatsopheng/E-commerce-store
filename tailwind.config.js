/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        scrollWidth: "calc(250px * 14)"
      },
      animation: {
        autoScroll: "autoScroll 40s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        autoScroll: {
          "0%": {
            transfrom : "translateX(0)",
          },
          "100%": {
            transform : "translateX(calc(-250px * 7))"
          }
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
      }
    },
  },
  plugins: [],
}


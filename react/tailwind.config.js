/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        white : "#F0EFEF",
        grey : "#CDCDCD",
        lightgrey : "#EAEAEA",
        black : "#2C2C2C",
        primary : "#010038",
        secondary : "#293A80",
        tertiary : "#537EC5",
      }
    },
  },
  plugins: [],
}


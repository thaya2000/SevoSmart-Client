/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    height: {
      "10v": "10vh",
      "20v": "20vh",
      "30v": "30vh",
      "40v": "40vh",
      "50v": "50vh",
      "60v": "60vh",
      "70v": "70vh",
      "80v": "80vh",
      "90v": "90vh",
      "100v": "100vh",

      "9/10": "90%",
      "1/10": "10%",
      "4/5": "80%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      full: "100%",
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [nextui()],
};

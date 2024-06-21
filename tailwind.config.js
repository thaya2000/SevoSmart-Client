/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#040e42",
        secondary: "#ffd700",
      },
      textColor: {
        secondary: "#ffd700",
      },
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

        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      width: {
        160: "40rem",
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",

        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
      },
      keyframes: {
        "blink-scale": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        spin3D: {
          "0%": { transform: "rotate3d(0.5, 0.5, 0.5, 0deg)" },
          "100%": { transform: "rotate3d(0.5, 0.5, 0.5, 360deg)" },
        },
      },
      animation: {
        "blink-scale": "blink-scale 2s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        spin3D: "spin3D 3s linear infinite",
      },
    },
  },
};

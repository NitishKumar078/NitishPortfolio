/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glitch1: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-3px, -3px)" },
          "40%": { transform: "translate(3px, 3px)" },
          "60%": { transform: "translate(-3px, -3px)" },
          "80%": { transform: "translate(3px, 3px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        glitch2: {
          "0%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(-2px, -2px)", opacity: 0.5 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
      },
      animation: {
        glitch1: "glitch1 1s infinite linear alternate",
        glitch2: "glitch2 1.5s infinite linear alternate",
      },
      fontFamily: {
        Chakra_Petch: ["Chakra Petch", "sans-serif"], // Added fallback font
        Permanent_Marker: ["Permanent Marker", "cursive"], // Added fallback font
        Protest_Revolution: ["Protest Revolution", "sans-serif"], // Added fallback font
        Rubik_Marker_Hatch: ["Rubik Marker Hatch", "sans-serif"], // Added fallback font
        Righteous: ["Righteous", "cursive"], // Added fallback font
      },
    },
  },
  plugins: [],
};

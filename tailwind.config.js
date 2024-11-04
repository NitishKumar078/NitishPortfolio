/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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

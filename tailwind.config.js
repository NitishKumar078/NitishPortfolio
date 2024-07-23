import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
const addVariablesForColors = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  
  // Define the type for newVars explicitly
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val ])
  );

  addBase({
    ":root": newVars,
  });
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Chakra_Petch:["Chakra Petch"],
        Permanent_Marker:["Permanent Marker"],
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

export { addVariablesForColors };

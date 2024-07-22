import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import { PluginCreator } from 'tailwindcss/types/config';

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
const addVariablesForColors: PluginCreator = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  
  // Define the type for newVars explicitly
  const newVars: { [key: string]: string } = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val as string])
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
        primaryPetch:["Chakra Petch"]
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

export { addVariablesForColors };

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glitch1: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "20%": {
            transform: "translate(-3px, -3px)",
          },
          "40%": {
            transform: "translate(3px, 3px)",
          },
          "60%": {
            transform: "translate(-3px, -3px)",
          },
          "80%": {
            transform: "translate(3px, 3px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        glitch2: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
          "50%": {
            transform: "translate(-2px, -2px)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        glitch1: "glitch1 1s infinite linear alternate",
        glitch2: "glitch2 1.5s infinite linear alternate",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      fontFamily: {
        Chakra_Petch: ["Chakra Petch", "sans-serif"],
        Permanent_Marker: ["Permanent Marker", "cursive"],
        Protest_Revolution: ["Protest Revolution", "sans-serif"],
        Rubik_Marker_Hatch: ["Rubik Marker Hatch", "sans-serif"],
        Righteous: ["Righteous", "cursive"],
      },
      backgroundImage: {
        'dotted-pattern': "radial-gradient(#333 1px, transparent 1px)",
        'dotted-pattern-light': "radial-gradient(#ddd 1px, transparent 1px)",
      },
      backgroundSize: {
        '15': '15px 15px',
      },
      colors: {
        light: '#f9f9f9',
        dark: '#121212',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
};
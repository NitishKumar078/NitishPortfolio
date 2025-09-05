/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 2px 0 rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.12)",
        elevated:
          "0 2px 6px rgba(0,0,0,0.06), 0 16px 32px -12px rgba(0,0,0,0.18)",
      },
      keyframes: {
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
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
        slideIn: "slideIn 1.5s ease-out forwards",
        slideUp: "slideUp 1.5s ease-out forwards",
        bounce: "bounce 2s infinite",
        float: "float 4s ease-in-out infinite",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        heading: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui"],
        Chakra_Petch: ["Chakra Petch", "sans-serif"],
        Permanent_Marker: ["Permanent Marker", "cursive"],
        Protest_Revolution: ["Protest Revolution", "sans-serif"],
        Rubik_Marker_Hatch: ["Rubik Marker Hatch", "sans-serif"],
        Righteous: ["Righteous", "cursive"],
      },
      backgroundImage: {
        "dotted-pattern":
          "radial-gradient(var(--dot-color) 1px, transparent 1px)",
        "dotted-pattern-light":
          "radial-gradient(var(--dot-color-light) 1px, transparent 1px)",
      },
      backgroundSize: {
        15: "15px 15px",
      },
      colors: {
        light: "#f9f9f9",
        dark: "#121212",
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

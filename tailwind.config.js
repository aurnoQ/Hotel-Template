/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso:    "#241A17",
        cream:       "#F7F1E8",
        sand:        "#DCCDBB",
        terracotta:  "#A85C3A",
        olive:       "#68705A",
        charcoal:    "#302C29",
        warmwhite:   "#FFFDF9",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:    ["'Manrope'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.688rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

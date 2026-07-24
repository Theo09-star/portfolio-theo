/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', // ⭐ Active le dark mode via classe
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#0d0d0d",
        accent: "#FFD700",
        accentBlue: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
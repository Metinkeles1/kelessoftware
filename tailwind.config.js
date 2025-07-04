/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1", // indigo-500
          dark: "#4F46E5", // indigo-700
          light: "#A5B4FC", // indigo-300
        },
        secondary: {
          DEFAULT: "#A21CAF", // purple-700
          light: "#F3E8FF", // purple-100
        },
        accent: {
          DEFAULT: "#06B6D4", // cyan-500
        },
        background: "#F9FAFB",
        foreground: "#171717",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Menlo", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
        },
      },
    },
  },
  plugins: [],
};

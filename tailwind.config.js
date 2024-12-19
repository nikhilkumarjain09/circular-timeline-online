/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: "#FF3366", // Pinkish
        secondary: "#6E7BF3", // Blue
        dark: "#121212", // Dark background
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};


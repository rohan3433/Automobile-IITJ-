/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all your files
  ],
  theme: {
    extend: {}, // You can add custom styles here
  },
  plugins: [],
};

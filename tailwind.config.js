/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bef264", // අර ලස්සන Neon Green පාට
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "15px", // For small screens (e.g., mobile)
      md: "18px", // For medium screens (e.g., tablets)
      // You can add more breakpoints if needed
    },
    extend: {},
  },
  plugins: [],
};

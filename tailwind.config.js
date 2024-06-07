/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "max-768": { max: "768px" },
        "min-769": { min: "769px" },
        "max-1200": { max: "1200px" },
        "min-1201": { min: "100px" },
      },
      colors: {
        "text-primary": {
          color: "#6A61FF",
        },
      },
    },
  },
  plugins: [],
};

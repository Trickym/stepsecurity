/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "max-900": { max: "900px" },
        "min-901": { min: "100px" },
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

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        circularWeb: ["circular-web", "sans-serif"],
        robertMedium: ["robert-medium", "sans-serif"],
        robertRegular: ["robert-regular", "sans-serif"],
      },
      screens: {
        xs: "375px", // si tú creaste este breakpoint personalizado
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

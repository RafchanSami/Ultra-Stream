/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#e50914",
          dark: "#b20710",
        },
      },
      boxShadow: {
        glow: "0 10px 30px rgba(229,9,20,0.35)",
      },
      backgroundImage: {
        "gradient-overlay": "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
      },
    },
  },
  plugins: [],
};

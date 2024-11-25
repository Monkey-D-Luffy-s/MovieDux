/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" },
          "50%": { textShadow: "0 0 20px rgba(255, 255, 255, 1)" },
        },
      },
      animation: {
        glow: "glow 2s infinite",
      },
    },
  },
  plugins: [],
};

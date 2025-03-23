/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 10px rgba(255, 105, 180, 0.8)",
      },
    },
  },
  plugins: [],
};

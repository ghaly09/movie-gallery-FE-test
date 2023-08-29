/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;

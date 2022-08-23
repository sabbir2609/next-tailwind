/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  daisyui: {
    base: false,
    themes: ["garden"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

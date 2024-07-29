/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"], // Include all HTML files in the root directory
  theme: {
    extend: {
      colors: {
        primary: "#FFEEC3",
        textHover: "#2C5DDA",
      },
    },
  },
  plugins: [],
};

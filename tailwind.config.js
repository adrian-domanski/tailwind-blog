module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Montserrat", "Arial", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ["responsive", "important"],
      padding: ["responsive", "important"],
    },
  },
  plugins: [require("@neojp/tailwindcss-important-variant")],
};

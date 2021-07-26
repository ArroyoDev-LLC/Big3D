// Example `tailwind.config.js` file
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      big3dGray: "#ECECEC",
      yellow: "#FFFF00",
      gold: "#FBBF24",
      white: "#ffffff",
      black: "#000000",
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      outline: {
        black: "2px solid #000000",
        white: "2px solid #ffffff",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};

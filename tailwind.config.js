const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    extend: {
      strokeWidth: {
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
      },
      colors: {
        primary: {
          light: "#0d1bf0",
          DEFAULT: "#0d1bf0",
          dark: "#5686f7",
        },
      },
    },

    fontFamily: {
      ...defaultTheme.fontFamily,
      body: ["Georgia", "serif"],
      display: [
        "Didot",
        '"Didot LT STD"',
        '"Hoefler Text"',
        "Garamond",
        '"Calisto MT"',
        '"Times New Roman"',
        "serif",
      ],
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

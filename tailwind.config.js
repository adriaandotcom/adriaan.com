const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      display: ["Georgia", "serif"],
      body: [
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

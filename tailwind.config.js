const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: { 100: "#1B2F91", 200: "#121F60", 300: "#0070DC", 400: "#3f51b5" },
      background: "#111",
      purple: "#7e5bef",
      green: "#105d2d",
      red: "#DD2F0B"
    },
  },

  plugins: [],
};

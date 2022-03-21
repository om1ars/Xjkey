const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
    colors: {
      mainBg: "#01182E",
      whiteBg: "#F6F9FC",
      textColor: "#445D6E",
      textBold: "#02203C",
      white: "#FFFFFF",
      darkCard: "#15314B",
      darkMainBg: "#02203C",
      successColor: "#EBF7EE",
      dangerColor: "#FFE5E5",
      gray: "#EEEEEE",
      text: "#617685",
      successText: "#3AB357",
      dangerColor: "#FFE5E5",
      dangerText: "#FF0E0E",
      beColor:"#890023",
      fColor: "#11967E",
      seColor: "#F37F1B"
    },
  },
  plugins: [
    require('flowbite/plugin')
]};

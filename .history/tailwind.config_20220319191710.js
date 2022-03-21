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
      textColor: "#626EE3",
      textBold: "#535DC5",
      white: "#FFFFF"
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

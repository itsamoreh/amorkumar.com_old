import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"

const config = {
  baseFontSize: `18px`,
  googleFonts: [
    {
      name: "Francois One",
      styles: ["700"],
    },
    {
      name: "Lato",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Francois One", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
}

const typography = new Typography(config)

export const { scale, rhythm, options } = typography
export default typography

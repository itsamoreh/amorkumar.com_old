import Typography from "typography"

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
  overrideStyles: (options, styles) => ({
    // p: {
    //   fontSize: "20px",
    // },
  }),
}

const typography = new Typography(config)

export const { scale, rhythm, options } = typography
export default typography

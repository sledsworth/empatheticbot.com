import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import "./global.css"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.33,
  scaleRatio: 2.33,
  headerFontFamily: [
    "Rubik Mono One",
    "Merriweather Sans",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  headerWeight: "400",
  googleFonts: [
    {
      name: "Merriweather Sans",
      styles: ["700"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Rubik",
      styles: ["400", "400i", "500", "900"],
    },
    {
      name: "Rubik Mono One",
      styles: ["400"],
    },
  ],
  bodyFontFamily: ["Rubik", "Merriweather", "Georgia", "serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

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
  baseLineHeight: 1.666,
  scaleRatio: 2.33,
  headerFontFamily: [
    "Merriweather Sans",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  headerWeight: "700",
  googleFonts: [
    {
      name: "Merriweather Sans",
      styles: ["700"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700"],
    },
  ],
  bodyFontFamily: ["Merriweather", "Georgia", "serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

import React from "react"
import DarkModeSwitch from "./dark-mode-switch"

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Empatheticbot LLC. <DarkModeSwitch />
    </footer>
  )
}

export default Footer

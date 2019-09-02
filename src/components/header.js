import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/bot.svg"

function Header({ title }) {
  return (
    <header>
      <Link to={`/`}>
        <Logo alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot." />
        <h1>{title}</h1>
      </Link>
    </header>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/bot.svg"

function Header({ title }) {
  return (
    <header>
      <Link to={`/`} className="logo-link">
        <Logo alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot." />
      </Link>
      <nav>
        <Link>home</Link>
        <Link>about</Link>
        <Link>archives</Link>
      </nav>
    </header>
  )
}

export default Header

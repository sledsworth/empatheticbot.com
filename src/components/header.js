import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/bot.svg"

function Header({ title }) {
  return (
    <header className="global-header">
      <Link to={`/`} className="logo-link">
        <Logo alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot." />
      </Link>
      <nav>
        <Link to="/" activeClassName="active-path">
          home
        </Link>
        <Link to="/about" activeClassName="active-path">
          about
        </Link>
        <Link to="/archive" activeClassName="active-path">
          archive
        </Link>
      </nav>
    </header>
  )
}

export default Header

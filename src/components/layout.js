import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/bot.svg"
import "../utils/global.css"

class Layout extends React.Component {
  render() {
    const { location, title, children, data } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <Link to={`/`}>
          <Logo
            style={{ marginRight: "1rem" }}
            alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot."
          />
          <h1>{title}</h1>
        </Link>
      )
    } else {
      header = (
        <header>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Logo
              style={{ marginRight: "1rem" }}
              alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot."
            />
            <h1>{title}</h1>
          </Link>
        </header>
      )
    }
    return (
      <div>
        {header}
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Empatheticbot LLC.</footer>
      </div>
    )
  }
}

export default Layout

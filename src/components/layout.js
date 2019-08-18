import React from "react"
import { Link } from "gatsby"
import Logo from "../../content/assets/logo.svg"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children, data } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    console.log(data)
    if (location.pathname === rootPath) {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <h1
            style={{
              ...scale(0.66),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              lineHeight: "3rem",
              display: "flex",
            }}
          >
            <Logo
              style={{ marginRight: "1rem" }}
              alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot."
            />
            {title}
          </h1>
        </Link>
      )
    } else {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <h1
            style={{
              ...scale(0.66),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              lineHeight: "3rem",
              display: "flex",
            }}
          >
            <Logo
              style={{ marginRight: "1rem" }}
              alt="Cute robot face icon where the antenna has a beating heart at the tip. Logo for Empatheticbot."
            />
          </h1>
        </Link>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Empatheticbot LLC.</footer>
      </div>
    )
  }
}

export default Layout

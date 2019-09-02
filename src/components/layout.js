import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../utils/global.css"

class Layout extends React.Component {
  render() {
    const { location, title, children, data } = this.props
    const rootPath = `${__PATH_PREFIX__}`
    return (
      <div>
        <Header root={location.pathname === rootPath} title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout

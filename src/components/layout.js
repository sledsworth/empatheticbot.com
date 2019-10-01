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
        <a id="top" />
        <Header path={location.path} title={title} />
        <main>{children}</main>
        {false && (
          <a href="#top" className="scroll-to-top">
            Scroll to top
          </a>
        )}
        <Footer />
      </div>
    )
  }
}

export default Layout

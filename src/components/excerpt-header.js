import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ExcerptHeader({ frontmatter, timeToRead, children, excerpt }) {
  return (
    <header className={`${excerpt ? "excerpt-header" : "excerpt-header"}`}>
      <div className="card-icon-wrapper">
        <Icon type={frontmatter.type} />
      </div>
      <div>
        <aside className="card-metadata" style={{ lineHeight: "2rem" }}>
          <small className="type-tag">{frontmatter.type || "Article"}</small>
          &bull;
          <small>{frontmatter.date}</small>
          &bull;
          <small>{timeToRead} minute read</small>
        </aside>
        {children}
      </div>
    </header>
  )
}

ExcerptHeader.propTypes = {}

export default ExcerptHeader

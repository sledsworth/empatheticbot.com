import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ExcerptHeader({ frontmatter, timeToRead, children, excerpt }) {
  return (
    <header className="excerpt--header">
      <div className="excerpt--icon">
        <Icon type={frontmatter.type} />
      </div>
      <div>
        <aside className="excerpt--metadata">
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

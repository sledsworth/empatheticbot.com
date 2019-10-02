import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ExcerptHeader({ frontmatter, timeToRead, children }) {
  return (
    <header className="excerpt-card-header">
      <div className="excerpt-card-header--icon">
        <Icon type={frontmatter.type} />
      </div>
      <h3 className="excerpt-card-header--heading">{children}</h3>{" "}
      <small className="excerpt-card-header--metadata">
        {frontmatter.date}
      </small>
    </header>
  )
}

ExcerptHeader.propTypes = {}

export default ExcerptHeader

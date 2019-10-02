import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ArticleHeader({ frontmatter, timeToRead, children, excerpt }) {
  return (
    <header className="excerpt-card-header">
      <div className="excerpt-card-header--icon">
        <Icon type={frontmatter.type} />
      </div>
      <h1 className="excerpt-card-header--heading">{children}</h1>{" "}
      <small className="excerpt-card-header--metadata">
        {frontmatter.date}
      </small>
    </header>
  )
}

ArticleHeader.propTypes = {}

export default ArticleHeader

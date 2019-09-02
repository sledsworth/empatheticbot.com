import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ArticleHeader({ frontmatter, timeToRead, children, excerpt }) {
  return (
    <header className="article--header">
      <div className="article--icon">
        <Icon type={frontmatter.type} />
      </div>
      <aside className="article--metadata">
        <small className="article--metadata-item__bold">
          {frontmatter.type || "Article"}
        </small>
        &bull;
        <small className="article--metadata-item">{frontmatter.date}</small>
        &bull;
        <small className="article--metadata-item">
          {timeToRead} minute read
        </small>
      </aside>
      {children}
    </header>
  )
}

ArticleHeader.propTypes = {}

export default ArticleHeader

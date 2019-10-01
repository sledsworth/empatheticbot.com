import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ExcerptHeader({ frontmatter, timeToRead, children, isExcerpt }) {
  const header = isExcerpt ? (
    <h3 className="excerpt--header-title">{children}</h3>
  ) : (
    <h1 className="excerpt--header-title">{children}</h1>
  )
  return (
    <header className="excerpt--header">
      {isExcerpt && (
        <div className="excerpt--header-icon">
          <Icon className="excerpt--header-icon" type={frontmatter.type} />
        </div>
      )}
      {header}
      <aside className="excerpt--header-metadata">
        <small className="except--header-metadata-fragment  except--header-metadata-fragment__bold">
          {frontmatter.type || "Article"}
        </small>
        &bull;
        <small className="except--header-metadata-fragment">
          {frontmatter.date}
        </small>
        &bull;
        <small className="except--header-metadata-fragment">
          {timeToRead} minute read
        </small>
      </aside>
    </header>
  )
}

ExcerptHeader.propTypes = {}

export default ExcerptHeader

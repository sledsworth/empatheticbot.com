import React from "react"
import PropTypes from "prop-types"
import Icon from "./icon"

function ExcerptHeader({ frontmatter, timeToRead, children, excerpt }) {
  return (
    <header className="excerpt--header">
      <div className="excerpt--header-icon">
        <Icon className="excerpt--header-icon" type={frontmatter.type} />
      </div>
      <h3 className="excerpt--header-title">{children}</h3>
      <aside className="excerpt--header-metadata">
        <small className="except--header-metadata-fragment  except--header-metadata-fragment__bold">
          {frontmatter.type || "Article"}
        </small>
        &bull;
        <small className="except--header-metadata-fragment">
          {frontmatter.date}
        </small>
        {/* &bull;
        <small className="except--header-metadata-fragment">
          {timeToRead} minute read
        </small> */}
      </aside>
    </header>
  )
}

ExcerptHeader.propTypes = {}

export default ExcerptHeader

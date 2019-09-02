import React from "react"
import { Link } from "gatsby"
import ExcerptHeader from "./excerpt-header"

const Excerpt = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className="excerpt">
      <ExcerptHeader
        timeToRead={node.timeToRead}
        frontmatter={node.frontmatter}
      >
        <h3 className="excerpt--heading">
          <Link to={node.fields.slug}>{title}</Link>
        </h3>
      </ExcerptHeader>
      <p
        className="excerpt--description"
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
      <Link className="excerpt--read-more" to={node.fields.slug}>
        Read more...
      </Link>
    </article>
  )
}

export default Excerpt

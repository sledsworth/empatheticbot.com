import React from "react"
import { Link } from "gatsby"
import ExcerptHeader from "./excerpt-header"

const Excerpt = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className="excerpt">
      <ExcerptHeader
        excerpt
        timeToRead={node.timeToRead}
        frontmatter={node.frontmatter}
      >
        <h3>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
      </ExcerptHeader>
      <p
        style={{
          marginBottom: ".5rem",
        }}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
      <small className="read-more">
        <Link to={node.fields.slug}>Read more...</Link>
      </small>
    </article>
  )
}

export default Excerpt

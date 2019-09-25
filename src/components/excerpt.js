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
        <Link to={node.fields.slug}>{title}</Link>
      </ExcerptHeader>
      <section className="excerpt--body">
        <p
          className="excerpt--body-description"
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
        <div className="excerpt--body-actions">
          <Link to={node.fields.slug}>Read more...</Link>
        </div>
      </section>
    </article>
  )
}

export default Excerpt

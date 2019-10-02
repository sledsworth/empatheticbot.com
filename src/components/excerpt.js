import React from "react"
import { Link } from "gatsby"
import ExcerptHeader from "./excerpt-header"

const Excerpt = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className="excerpt-card">
      <ExcerptHeader
        timeToRead={node.timeToRead}
        frontmatter={node.frontmatter}
        isExcerpt
      >
        <Link to={node.fields.slug}>{title}</Link>
      </ExcerptHeader>
      <section className="excerpt-card--body">
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
        <div className="excerpt-card--actions">
          <Link to={node.fields.slug}>Read more →</Link>
        </div>
      </section>
    </article>
  )
}

export default Excerpt

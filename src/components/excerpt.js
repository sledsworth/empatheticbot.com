import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const Excerpt = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article>
      <header>
        <aside>
          <small>{node.frontmatter.type}</small>
          <small>{node.frontmatter.date}</small>
          <small>{node.timeToRead} minute read</small>
        </aside>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
      </header>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
      <Link to={node.fields.slug}>Read more...</Link>
    </article>
  )
}

export default Excerpt

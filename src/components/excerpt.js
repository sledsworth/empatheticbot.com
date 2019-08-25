import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import ArticleHeader from "./article-header"

const Excerpt = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className="excerpt">
      <ArticleHeader
        excerpt
        timeToRead={node.timeToRead}
        frontmatter={node.frontmatter}
      >
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
      </ArticleHeader>
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

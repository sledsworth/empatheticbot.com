import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import Icon from "./icon"

const Excerpt = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className="excerpt">
      <header className="excerpt-header">
        <div className="card-icon-wrapper">
          <Icon type={node.frontmatter.type} />
        </div>
        <div>
          <aside style={{ lineHeight: "2rem" }}>
            <small className="type-tag">
              {node.frontmatter.type || "Article"}
            </small>
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
        </div>
      </header>
      <p
        style={{
          marginBottom: ".5rem",
        }}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
      <small className="read-more">
        <Link to={node.fields.slug}>{node.timeToRead} Minute Read...</Link>
      </small>
    </article>
  )
}

export default Excerpt

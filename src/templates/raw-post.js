import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

class RawPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <table>
          <thead>
            <th>Frontmatter</th>
          </thead>
          <tbody>
            {Object.keys(post.frontmatter).map(key => (
              <tr>
                <td>{key}</td>
                <td>{post.frontmatter[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{post.rawMarkdownBody}</p>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default RawPostTemplate

export const pageQuery = graphql`
  query RawPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      rawMarkdownBody
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        link
      }
    }
  }
`

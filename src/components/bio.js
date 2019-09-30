/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 72, height: 72) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="global--callout__vibrant bio">
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <p>
        Written by{" "}
        <strong>
          <a href={`https://twitter.com/${social.twitter}`}>{author}</a>
        </strong>
        &mdash;a developer trying to make software more scrutable to humans.
      </p>
    </div>
  )
}

export default Bio

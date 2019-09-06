import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Styles extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="styles | empatheticbot" />
        <h1>Styles</h1>
        <h2>Headings</h2>
        <h1>Test</h1>
        <h2>Test</h2>
        <h3>Test</h3>
        <h4>Test</h4>
        <h5>Test</h5>
        <h6>Test</h6>
        <h2>Paragraphs</h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <h2>Lists</h2>
        <ol>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ol>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <li>Test</li>
        </ul>
        <h2>Quotes</h2>
        <blockquote>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </blockquote>
        <h2>Tables</h2>
        <table>
          <thead>
            <tr>
              <th>Something</th>
              <th>Test</th>
              <th>Again</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Something</td>
              <td>Test</td>
              <td>Again</td>
            </tr>
            <tr>
              <td>Something</td>
              <td>Test</td>
              <td>Again</td>
            </tr>
            <tr>
              <td>Something</td>
              <td>Test</td>
              <td>Again</td>
            </tr>
            <tr>
              <td>Something</td>
              <td>Test</td>
              <td>Again</td>
            </tr>
          </tbody>
        </table>
        <h2>Code</h2>
        <div className="gatsby-highlight" data-language="js">
          <pre className="language-js">
            <code className="language-js">
              some<span className="token punctuation">.</span>
              <span className="token function">code</span>
              <span className="token punctuation">(</span>
              <span className="token punctuation">)</span>
            </code>
          </pre>
        </div>
        <h2>Image</h2>
        <img
          src="https://f001.backblazeb2.com/file/empatheticbot/about.jpg"
          alt="Steve Ledsworth"
          loading="lazy"
        ></img>
        <h2>Links & Decorations</h2>
        <a>Link</a>
        <strong>Bold</strong>
        <em>Italic</em>
      </Layout>
    )
  }
}

Styles.propTypes = {}

export default Styles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

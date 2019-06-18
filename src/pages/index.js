import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Img from "gatsby-image"

import "../utils/card.css"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link key={node.fields.slug} class="card" to={node.fields.slug}>
              <h2
                style={{
                  marginBottom: rhythm(1 / 2), marginTop: rhythm(-1/2), textAlign: `left`
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <Link to={node.fields.slug}>
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} style={{maxWidth:`100%`,display:`center`,marginLeft:`auto`,marginRight:`auto`}} />

              </Link>
              <small>{node.frontmatter.date}</small>
              
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              
            </Link>
           
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage  {
              publicURL
              childImageSharp {
                sizes(maxWidth: 640) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

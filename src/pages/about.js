import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../../images/democracy.jpg"

class About extends React.Component {
  render() {
    
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="แนะนำตัวเอง : 😎" />
        <img src={image}></img>
   
        
        <h3 style={{textAlign:"center"}}>ดูเหมือนหน้านี้จะหายไปนะ หรือบางทีเอเลี่ยนเอาหน้านี้ไปกันนะ</h3>
       
        <p style={{textAlign:"center"}}>ลองกด F5 ใหม่อีกครั้งบางทีอาจจะกลับมาก็ได้นะ</p>
      
   
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    imageSharp(children: {})
    {
      id
    }
  }
`

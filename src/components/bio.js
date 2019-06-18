/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Facebook = `sunatpraphanwong`
const Instagram = 'pok.sunat'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              เริ่มจาก <strong>{author}</strong> มันว่าง🙄🙄.<br></br> ประกอบกับอยากจะทำให้เว็บเก่าเร็วขึ้นด้วยเลยไปหาอ่านแล้วทำเลย <br></br>หน้าตาเว็บก็ออกมางี้แหละ
              {` `} <br></br>
              <a href={`https://twitter.com/${social.twitter}`}>
                ทวิตเตอร์ผมเอง
              </a> {' '}
              <a href={`https://www.facebook.com/${Facebook}`}>
                เฟสบุ๊คผมก็เล่นนะ
              </a> {' '}
              <a href={`https://www.instagram.com/${Instagram}`}>
                นี่ไอจีผมเอง
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
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
`

export default Bio

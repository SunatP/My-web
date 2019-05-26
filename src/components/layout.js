import React from "react"
import { Link } from "gatsby"
import styles from "../utils/styles.css"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        
        <h1
          style={{
            ...scale(1.25),
            marginBottom: rhythm(1.5),
            marginTop: 0,fontFamily: `Kanit, sans-serif`
          }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,fontFamily: `Kanit, sans-serif`
            }}
            to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Kanit, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,fontFamily: `Kanit, sans-serif`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,fontFamily: `Kanit, sans-serif`
        }}
      >
       
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with ❤ 
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}and React
        </footer>
      </div>
    )
  }
}

export default Layout

import { Link } from "gatsby"
import PropTypes from "prop-types"

import React from "react"
import "../utils/styles.css"
const Header = ({ siteTitle }) => (
    
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
      animationName: `colorChange`,
    animationDuration: `15s`,
    animationIterationCount: `infinite`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
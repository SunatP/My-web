import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "./header"
import Bio from "../components/bio"
import "../utils/styles.module.css"
import "../utils/styles.css"
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let footer
    
    if (location.pathname === rootPath) {
      header = (
        <>
        <h4  style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 20,
            marginLeft: `auto` , textAlign: "left",
          }}>
          <ul>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: `24px`, 
            }}
            to={`/`}
          >
          {`SUNAT.P`}
          
            
          </Link>
         
          <Link  style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: `24px`
            }}
            to={`about`}
            > {`แนะนำตัวเอง`}
              
          </Link>
        
          <Link  style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: `24px`
            }}
            to={`aboutme`}
            > {`หน้าเปล่า?`}
              
          </Link>
          </ul>
      
        </h4>
         </>
      )
      // footer = (
      //   // <footer>
      //   // เริ่มทำในปี {new Date().getFullYear()}, ทำด้วย <b style={{color:`Red`}}>❤</b> ใช้
      //   //   {` `}
      //   //   <a href="https://www.gatsbyjs.org">Gatsby</a>
      //   //   {` `}& <a href="https://reactjs.org/">React</a>
      //   // </footer>
      // )
    } else {
      header = (
        <h4
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 20, textAlign: "left",
            
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: `24px`
            }}
            to={`/`}
          >
            {`หน้าหลัก 🏠`}
          </Link>
          <Link  style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: `24px`
            }}
            to={`about`}
            > {`แนะนำตัวเอง`}
              
          </Link>
        
          <Link  style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontSize: `24px`
            }}
            to={`aboutme`}
            > {`หน้าเปล่า?`}
              
          </Link>
        </h4>
        
      )
  
    }
    return (
      <>
      <Header siteTitle={header} />
      
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30), // Card size
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      > 
        <main>{children}</main>
       
       <Bio/>
       <footer>
        เริ่มทำในปี {new Date().getFullYear()}, ทำด้วย <b style={{color:`Red`}}>❤</b> ใช้
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}& <a href="https://reactjs.org/">React</a>
        </footer>
       <footer>{footer}</footer>
      </div>
      </>
    )
  }
}

export default Layout

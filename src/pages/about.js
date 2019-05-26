import React from "react"
import Header from "../components/header"
import Button from "../components/Button"
export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
    <Header headerText="Awesome" /> 
    <Button/>
    <p>Such wow. Very React.</p>
  </div>
)

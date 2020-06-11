import React from "react"  
import PropTypes from "prop-types"

import "../assets/css/default.css"

import Seo from "./seo"

const Layout = ({ children }) => {  
  return (
    <>
      <Seo />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout
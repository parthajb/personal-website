import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <div className="background">
          <div className="container">
            <div className="columns">
              <div className="column is-1"></div>
              <div className="column is-1"></div>
              <div className="column is-1"></div>
              <div className="column is-1"></div>
            </div>
          </div>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

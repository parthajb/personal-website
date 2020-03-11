import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <div className="logo"><Link to="/" >{siteTitle}</Link></div>
          <div className="nav">
            <Link to="/resume" >Resume</Link>
          </div>
        </div>
      </div>
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

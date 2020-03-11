import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <div className="copyright">&copy; 2015-{new Date().getFullYear()} <Link to="/" >Partha Jyoti Borah</Link></div>
          <div className="social">
            <Link to="/" >LinkedIn</Link>
            <Link to="/" >Dribbble</Link>
            <Link to="/" >GitHub</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
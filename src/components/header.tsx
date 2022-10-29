import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Box from '@mui/material/Box';
import TopNavigation from "./topNavigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
  <TopNavigation/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/team" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/about" className="navigation-links-navlink2">
        {props.text2}
      </Link>
      <a
        href="mailto:dclawclub@gmail.com?subject="
        className="navigation-links-link"
      >
        {props.text3}
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScreKRdzOAeDaezgDWrkc1sBkGZwJJRqC6agXsZ8AJNVf6dzw/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1"
      >
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Team',
  text: 'Home',
  text2: 'About',
  rootClassName: '',
  text3: 'Contact',
  text4: 'Join',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks

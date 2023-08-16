import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links2-navlink">
        {props.text}
      </Link>
      <Link to="/events" className="navigation-links2-navlink1">
        {props.text1}
      </Link>
      <Link to="/about" className="navigation-links2-navlink2">
        {props.text2}
      </Link>
      <a
        href="mailto:dclawclub@gmail.com?subject="
        className="navigation-links2-link"
      >
        {props.text3}
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScreKRdzOAeDaezgDWrkc1sBkGZwJJRqC6agXsZ8AJNVf6dzw/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links2-link1"
      >
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  rootClassName: '',
  text4: 'Join',
  text3: 'Contact',
  text: 'Home',
  text2: 'About',
  text1: 'Events',
}

NavigationLinks2.propTypes = {
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks2

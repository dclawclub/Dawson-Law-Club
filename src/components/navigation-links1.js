import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/events" className="navigation-links1-navlink1">
        {props.text1}
      </Link>
      <Link to="/team" className="navigation-links1-navlink2">
        {props.text2}
      </Link>
      <a
        href="mailto:dclawclub@gmail.com?subject="
        className="navigation-links1-link"
      >
        {props.text3}
      </a>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Events',
  text2: 'Team',
  text: 'Home',
  text3: 'Contact',
  rootClassName: '',
  text4: 'Join',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks1

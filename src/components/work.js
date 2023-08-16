import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import './work.css'

const Work = (props) => {
  return (
    <div className={`work-work ${props.rootClassName} `}>
      <img
        alt='&lt;a href="https://www.freepik.com/free-vector/coming-soon-banner-with-focus-lights_18505062.htm#query=website%20coming%20soon&amp;position=26&amp;from_view=keyword&amp;track=ais"&gt;Image by starline&lt;/a&gt; on Freepik'
        src={props.Image}
        className="work-image"
      />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text">{props.Coming}</span>
            <Link className=""></Link>
          </div>
          <span className="work-text1">{props.Description}</span>
        </div>
        <div className="work-tags"></div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  Image:
    'https://images.unsplash.com/photo-1513111168953-34fc252c9279?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxjdXJ0YWluc3xlbnwwfHx8fDE2OTE2MjA1NTF8MA&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  Description: 'Future events here',
  Coming: 'Coming soon',
}

Work.propTypes = {
  Image: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
  Coming: PropTypes.string,
}

export default Work

import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card21.css'

const BlogPostCard21 = (props) => {
  return (
    <div className={`blog-post-card21-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card21-image"
      />
      <div className="blog-post-card21-container">
        <div className="blog-post-card21-container1">
          <span className="blog-post-card21-text">{props.label}</span>
          <span className="blog-post-card21-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card21-text2">{props.title}</h1>
        <span className="blog-post-card21-text3">{props.description}</span>
        <div className="blog-post-card21-container2">
          <div className="blog-post-card21-profile"></div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard21.defaultProps = {
  image_alt: 'image',
  profile_alt: 'profile',
  when: '3 days ago',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&ixlib=rb-4.0.3&w=1500',
  title: 'Event Topic',
  author: 'Jane Doe',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  description: 'Event description',
  label: 'Event Title',
}

BlogPostCard21.propTypes = {
  image_alt: PropTypes.string,
  profile_alt: PropTypes.string,
  when: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profile_src: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard21

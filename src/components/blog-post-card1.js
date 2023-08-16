import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.title}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  description: 'Description',
  title: 'About: ...',
  rootClassName: '',
  label: 'Event',
  image_alt: 'image',
  author: 'Jon Doe',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  profile_alt: 'profile',
  image_src:
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&ixlib=rb-4.0.3&w=1500',
  time: '5 min read',
}

BlogPostCard1.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
  profile_src: PropTypes.string,
  profile_alt: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
}

export default BlogPostCard1

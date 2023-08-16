import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dawson Law Club</title>
        <meta property="og:title" content="Dawson Law Club" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img
              alt="image"
              src="/external/bcsuzr01.svg"
              className="home-image"
            />
            <span className="home-company">Dawson Law Club</span>
          </div>
          <div className="home-items">
            <div className="home-links">
              <Link to="/events" className="home-navlink nav-link">
                Events
              </Link>
              <Link to="/team" className="home-navlink01 nav-link">
                Team
              </Link>
              <Link to="/about" className="home-navlink02 nav-link">
                About
              </Link>
              <a
                href="mailto:dclawclub@gmail.com?subject="
                className="home-link nav-link"
              >
                Contact
              </a>
            </div>
            <button className="home-button start-button button">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScreKRdzOAeDaezgDWrkc1sBkGZwJJRqC6agXsZ8AJNVf6dzw/viewform"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                Join
              </a>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button1 button">
              <img alt="image" src="/hamburger.svg" className="home-image1" />
              <span className="home-text">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1"></div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <Link to="/events" className="home-navlink03 nav-link">
                    Events
                  </Link>
                  <Link to="/team" className="home-navlink04 nav-link">
                    Team
                  </Link>
                  <Link to="/about" className="home-navlink05 nav-link">
                    About
                  </Link>
                  <a
                    href="mailto:dclawclub@gmail.com?subject="
                    className="home-link2 nav-link"
                  >
                    Contact
                  </a>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScreKRdzOAeDaezgDWrkc1sBkGZwJJRqC6agXsZ8AJNVf6dzw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3 start-button button"
                >
                  <span className="home-text01">Become a Member</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title">Welcome to the Law club!</h1>
          <p className="home-description">
            A club for all Dawson students, in all programs. Join us as we dive
            into a world of endless possibilities and learning! 
          </p>
        </div>
      </header>
      <div className="home-about">
        <div className="home-header1">
          <h2 className="home-company1">Weekly Bulletin</h2>
        </div>
        <div className="home-statistics">
          <button className="home-button2 start-button button">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRtxpYTOXUUPqh9sRNriPeG5JhIB-izbNJIjptNoV1Zt-Owte0Wssv45RjwN4HzaLUduzyyOPu-Bpuq/pub"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              Open Bulletin
            </a>
          </button>
          <div className="home-statistic-list"></div>
        </div>
        <div className="home-client-list"></div>
      </div>
      <div className="home-video"></div>
      <h2 className="home-title1 heading">
        <br></br>
        <span> events</span>
      </h2>
      <div className="home-container01">
        <div className="home-blog">
          <div className="home-container02">
            <div className="home-blog-post-card">
              <Link to="/events" className="home-navlink06">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                  className="home-image2"
                />
              </Link>
              <div className="home-container03">
                <span className="home-text04">Event</span>
                <span className="home-text05">About: ...</span>
                <span className="home-text06">Description</span>
              </div>
            </div>
            <div className="home-blog-post-card1">
              <Link to="/events" className="home-navlink07">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                  className="home-image3"
                />
              </Link>
              <div className="home-container04">
                <span className="home-text07">Event</span>
                <span className="home-text08">About: ...</span>
                <span className="home-text09">Description</span>
              </div>
            </div>
            <div className="home-blog-post-card2">
              <Link to="/events" className="home-navlink08">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                  className="home-image4"
                />
              </Link>
              <div className="home-container05">
                <span className="home-text10">Event</span>
                <span className="home-text11">About: ...</span>
                <span className="home-text12">Description</span>
              </div>
            </div>
          </div>
          <div className="home-container06"></div>
          <div className="home-container07"></div>
        </div>
      </div>
      <div className="home-container08">
        <div className="home-client">
          <p className="home-text13">
            Want to learn more about the team? Click here!
          </p>
          <Link to="/team" className="home-navlink09 start-button button">
            <span className="home-text14">Team</span>
          </Link>
        </div>
      </div>
      <h2 className="home-title2 heading">Club calendar</h2>
      <div className="home-container09">
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;showTz=0&amp;showTitle=0&amp;src=ZGNsYXdjbHViQGdtYWlsLmNvbQ&amp;color=%23039BE5" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"'
          className="home-iframe"
        ></iframe>
        <div className="home-container10"></div>
      </div>
      <div className="home-client1">
        <p className="home-text15">
          The calendar changes the moment we add information into it!
        </p>
      </div>
      <footer className="home-footer">
        <div className="home-information">
          <div className="home-details">
            <div className="home-header2">
              <div className="home-branding2">
                <span className="home-company2">Dawson Law club</span>
              </div>
              <div className="home-location">
                <span className="home-value">Contact us to learn more!</span>
              </div>
            </div>
            <div className="home-location1">
              <span className="home-caption">Gmail</span>
              <span className="home-value1">Dclawclub@gmail.com</span>
            </div>
            <a
              href="mailto:dclawclub@gmail.com?subject="
              className="home-link5 start-button button"
            >
              <span className="home-text16">Contact</span>
            </a>
          </div>
          <div className="home-links2">
            <a
              href="https://www.instagram.com/dclawclub/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social social"
            >
              Instagram
            </a>
            <a
              href="https://linktr.ee/dclawclub"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social1 social"
            >
              LinkTree
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGxhd3xlbnwwfHx8fDE2OTE2MTg4NzV8MA&amp;ixlib=rb-4.0.3&amp;w=500"
          className="home-image5"
        />
      </footer>
      <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle"
            >
              <span className="home-text17">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle1"
            >
              <span className="home-text18">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle2"
            >
              <span className="home-text19">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home

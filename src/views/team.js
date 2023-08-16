import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks2 from '../components/navigation-links2'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - Dawson Law Club</title>
        <meta property="og:title" content="Team - Dawson Law Club" />
      </Helmet>
      <Link to="/" className="team-navlink">
        <img
          alt="image"
          src="/external/8e92c33c-6a5c-44ac-b438-6eb270fb05cb-200h.jpg"
          className="team-image"
        />
      </Link>
      <header data-role="Accordion" className="team-header">
        <div className="team-separator"></div>
        <nav className="team-nav">
          <NavigationLinks2 rootClassName="rootClassName19"></NavigationLinks2>
        </nav>
        <div data-role="AccordionContent" className="team-accordion-content">
          <div className="team-nav1">
            <NavigationLinks2 rootClassName="rootClassName20"></NavigationLinks2>
          </div>
        </div>
      </header>
      <div className="team-container1">
        <h1 className="team-text">
          <span>OUR TEAM</span>
          <br></br>
        </h1>
        <span className="team-text03">New year, new team!</span>
        <div className="team-container2">
          <div className="team-testimonial-card">
            <svg viewBox="0 0 950.8571428571428 1024" className="team-icon">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
            <div className="team-testimonial">
              <span className="team-text04">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <span className="team-text05">
                <span>
                  Morgan Bethany
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Greenberg-Capes</span>
              </span>
              <span className="team-text09">PRESIDENT</span>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1633431420170-acb0bb78c6f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbnN0cnVjdGlvbiUyMGNvbmV8ZW58MHx8fHwxNjkyMTczODUwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="team-image1"
              />
            </div>
          </div>
          <div className="team-testimonial-card1">
            <svg viewBox="0 0 950.8571428571428 1024" className="team-icon02">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
            <div className="team-testimonial1">
              <span className="team-text10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <span className="team-text11">Brianna Manganiello</span>
              <span className="team-text12">SECRETARY</span>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1633431420170-acb0bb78c6f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbnN0cnVjdGlvbiUyMGNvbmV8ZW58MHx8fHwxNjkyMTczODUwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="team-image2"
              />
            </div>
          </div>
          <div className="team-testimonial-card2">
            <svg viewBox="0 0 950.8571428571428 1024" className="team-icon04">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
            <div className="team-testimonial2">
              <span className="team-text13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <span className="team-text14">Doha Yousaf</span>
              <span className="team-text15">
                <span>
                  Communications
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Representative &amp; MEDIA
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>MANAGER </span>
              </span>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1633431420170-acb0bb78c6f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbnN0cnVjdGlvbiUyMGNvbmV8ZW58MHx8fHwxNjkyMTczODUwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="team-image3"
              />
            </div>
          </div>
        </div>
        <div className="team-container3">
          <div className="team-container4">
            <div className="team-container5">
              <div className="team-testimonial-card3">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="team-icon06"
                >
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
                <div className="team-testimonial3">
                  <span className="team-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="team-text22">Emma Wong</span>
                  <span className="team-text23">
                    <span>Events Coordinator</span>
                    <br></br>
                  </span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1633431420170-acb0bb78c6f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbnN0cnVjdGlvbiUyMGNvbmV8ZW58MHx8fHwxNjkyMTczODUwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="team-image4"
                  />
                </div>
              </div>
              <div className="team-testimonial-card4">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="team-icon08"
                >
                  <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
                </svg>
                <div className="team-testimonial4">
                  <span className="team-text26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="team-text27">Amanda Liu</span>
                  <span className="team-text28">Treasurer</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1633431420170-acb0bb78c6f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbnN0cnVjdGlvbiUyMGNvbmV8ZW58MHx8fHwxNjkyMTczODUwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="team-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="team-footer">
        <span className="team-text29">© 2023 DLC, All Rights Reserved.</span>
        <div className="team-icon-group">
          <a
            href="https://www.instagram.com/dclawclub/"
            target="_blank"
            rel="noreferrer noopener"
            className="team-link"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="team-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Team

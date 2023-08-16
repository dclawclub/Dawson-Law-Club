import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Team from './views/team'
import Events from './views/events'
import Home from './views/home'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Team} exact path="/team" />
        <Route component={Events} exact path="/events" />
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

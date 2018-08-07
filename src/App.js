import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={'/'}>
            <h1 className="App-title">Fantasy Stats</h1>
          </Link>
        </header>
        <p className="App-intro">
          A collection of statistics based on the Barclays Fantasty Football site
        </p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App

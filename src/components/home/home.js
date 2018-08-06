import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render () {
    return (
      <div>
        <h1>This is the Home Page</h1>
        <Link to={'/league'}>
          <button>
            View League
          </button>
        </Link>
      </div>
    )
  }
}

export default Home

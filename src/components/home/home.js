import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {code: this.props.code}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({code: event.target.value})
  }

  render () {
    return (
      <div>
        <h1>This is the Home Page</h1>
        <input type="text" value={this.state.code} onChange={this.handleChange} />
        <Link to={'/league/' + this.state.code}>
          <button>
            View League
          </button>
        </Link>
      </div>
    )
  }
}

Home.propTypes = {
  code: PropTypes.string
}

export default Home

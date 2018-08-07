import React, { Component } from 'react'
import PropTypes from 'prop-types'

class League extends Component {
  constructor (props) {
    super(props)
    this.state = {code: this.props.match.params.code}
  }

  render () {
    return (
      <div>
        <h1>This is League {this.state.code}</h1>
      </div>
    )
  }
}

League.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string
    })
  }).isRequired
}

export default League

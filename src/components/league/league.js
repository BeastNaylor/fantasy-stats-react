import React, { Component } from 'react'
import request from '../../api/request'
import PropTypes from 'prop-types'

class League extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: this.props.match.params.code,
      isLoading: true,
      err: null
    }
  }

  componentDidMount () {
    request('league.json')
      .then(r => {
        this.setState({ isLoading: false })
      })
      .catch(err => this.setState({ err }))
  }

  render () {
    return (
      <div>
        <h1>This is League {this.state.code}</h1>
        {this.state.err && <div>{JSON.stringify(this.state.err, null, 2)}</div>}
        {this.state.isLoading && <div>Loading</div>}
        {!this.state.isLoading && <div>Loaded</div>}
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

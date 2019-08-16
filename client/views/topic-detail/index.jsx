import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types'
import AppState from '../../store/app-state'

@inject('appState') @observer
class Detail extends Component {
  componentDidMount() {

  }

  changeName = (event) => {
    const { appState } = this.props
    appState.changeName(event.target.value)
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <h3>topic detail</h3>
        <input onChange={this.changeName} />
        <div>{appState.msg}</div>
      </div>
    )
  }
}

Detail.propTypes = {
  appState: PropTypes.instanceOf(AppState.default),
}

export default Detail

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routes from '../router'

export default class App extends Component {
  componentDidMount() {}

  render() {
    return [
      <div key="banner">
        <Link to="/">首页</Link>
        <Link to="/detail">详情</Link>
        <Link to="/test">测试api</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}

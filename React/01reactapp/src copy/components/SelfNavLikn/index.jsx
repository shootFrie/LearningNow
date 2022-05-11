import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// 二次封装NavLink
export default class SelfNavLink extends Component {
  render() {
    // const {to, title} = this.props
    return (
      <NavLink activeClassName="active" className="list-group-item" {...this.props} /> 
    )
  }
}

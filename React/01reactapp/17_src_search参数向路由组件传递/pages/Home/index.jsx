import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SelfNavLink from '../../components/SelfNavLikn'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <SelfNavLink to="/home/news">News</SelfNavLink>
            </li>
            <li>
              <SelfNavLink to="/home/message">Message</SelfNavLink>
            </li>
          </ul>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Switch>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/message" component={Message}></Route>
                <Redirect to="/home/news"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

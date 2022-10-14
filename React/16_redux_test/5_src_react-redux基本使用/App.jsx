import React, { Component } from 'react'
import Count from './containers/Count'
// 引入redux （就是引用store）
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    )
  }
}


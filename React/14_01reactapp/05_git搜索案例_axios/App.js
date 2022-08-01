import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    users: [], //初始化数组
    isFirst: true, // 是否第一次打开页面
    isLording: false, // 标识是否处在加载中
    err: '' // 存储错误信息
  }
  // 更改状态
  UpdataAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search UpdataAppState={this.UpdataAppState} />
        <List {...this.state} />
      </div>
    )
  }
}

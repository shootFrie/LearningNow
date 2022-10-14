import React, { Component } from 'react'
import store from '../../redux/store' // 引入store，用于获取redux中
// 引入createIncrementAction
import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
  state = {as: 0}

  // componentDidMount() {
  //   // 检测redux中状态中的变化，只要变化就调用render
  //   store.subscribe(() => {
  //     this.setState({}) // 有效率问题
  //   })
  // }
  

  // 加法
  increase = () => {
    const { value } = this.selectNumber
    // 通知reduce执行加法
    store.dispatch(createIncrementAction(value*1))
  }
  // 减法
  decrease = () => {
    const { value } = this.selectNumber
    // 通知reduce执行减法
    store.dispatch(createDecrementAction(value*1))
  }
  // 当前求和为奇数再加
  increaseIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if((count % 2) !== 0) {
      store.dispatch(createIncrementAction(value*1))
    }
  }

  increaseIfAsync = () => {
    const { value } = this.selectNumber 
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1))
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为: {store.getState()}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increase}>+</button>&nbsp;
        <button onClick={this.decrease}>-</button>&nbsp;
        <button onClick={this.increaseIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.increaseIfAsync}>异步加</button>
      </div>
    )
  }
}

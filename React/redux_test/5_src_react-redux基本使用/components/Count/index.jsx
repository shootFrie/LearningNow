import React, { Component } from 'react'

// import store from '../../redux/store' // 引入store，用于获取redux中
// 引入createIncrementAction // UI组件不需要 放容器组件里面
// import {
//     createIncrementAction, 
//     createDecrementAction, 
//     createIncrementAsyncAction
// } from '../../redux/count_action'

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
    this.props.incre(value*1)
    // UI组件不需要
    // 通知reduce执行加法
    // store.dispatch(createIncrementAction(value*1))
  }
  // 减法
  decrease = () => {
    const { value } = this.selectNumber
    this.props.decre(value*1)
    // 通知reduce执行减法
    // store.dispatch(createDecrementAction(value*1))
  }
  // 当前求和为奇数再加
  increaseIfOdd = () => {
    const { value } = this.selectNumber
    if((this.props.count % 2) !== 0) {
      this.props.incre(value*1)
    }
    
    // const count = store.getState()
    // if((count % 2) !== 0) {
    //   store.dispatch(createIncrementAction(value*1))
    // }
  }

  increaseIfAsync = () => {
    const { value } = this.selectNumber 
    this.props.asyncIncre(value*1)
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value*1)) 
    // 这里不用dispatch 会造成无法延迟
      // store.dispatch(createIncrementAsyncAction((value*1), 500)) // 异步action
    // }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为: {this.props.count}</h2>
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

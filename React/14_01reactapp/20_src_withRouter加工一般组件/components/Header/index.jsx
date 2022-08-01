import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
   // 回退
   back = () => {
    this.props.history.goBack()
  }

  // 前进
  forward = () => {
    this.props.history.goForward()
  }

  // 前进n位
  go = () => {
    this.props.history.go(1)
    // this.props.history.go(-1)
  }
  render() {
    return (
      <div className="page-header"><h2>React Router Demo</h2>
         <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>前进或后退n步</button>
      </div>
    )
  }
}

export default withRouter(Header) 
// withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件

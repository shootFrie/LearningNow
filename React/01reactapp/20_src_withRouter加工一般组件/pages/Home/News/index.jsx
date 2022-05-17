import React, { Component } from 'react'

export default class New extends Component {
  // 几秒路由跳转
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.props.history.push("/home/message")
  //   }, 1000)
  // }
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/news1">news001</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/news2">news002</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/news/3">news003</a>&nbsp;&nbsp;
          </li>
        </ul>
      </div>
    )
  }
}

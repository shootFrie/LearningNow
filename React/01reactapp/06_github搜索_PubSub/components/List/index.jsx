import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {
    users: [], //初始化数组
    isFirst: true, // 是否第一次打开页面
    isLording: false, // 标识是否处在加载中
    err: '' // 存储错误信息
  }
  componentDidMount() { 
    // 订阅信息
    PubSub.subscribe("upData", (_, stateObj) => {
      this.token = console.log("List收到消息", stateObj)
      this.setState(stateObj)
    });
  }
  componentWillUnmount () {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users, isFirst, isLording, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <div>欢迎使用，输入关键词，Enter键搜索</div> : isLording ? <h3>Lording...</h3> :
          err ? <h2 style={{color: 'red'}}> {err} </h2> :
          users.map((item)=>{
            return (
              <div className="card" key={item.id}>
              <a ref="noreferrer" href={item.html_url} target="_blank" rel="noreferrer" >
                <img src={item.avatar_url} alt="head_portrait" style={{'width': '100px'}}/>
              </a>
            </div>
            )
          })
        }
      </div>
    )
  }
}

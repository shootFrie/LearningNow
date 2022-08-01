import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom' 
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      {id: "01", title:"Message001"},
      {id: "02", title:"Message002"},
      {id: "03", title:"Message003"},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(msgObj => {
              return (
              <li key={msgObj.id}>
                {/* 无高亮效果的Link ; 向路由传递params参数*/}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                
                {/*向路由传递search参数  */}
                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                
                {/* 向路由组件声明state参数； 地址栏路径无参数*/}
                <Link to={{pathname: "/home/message/detail", state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
        
        {/* search 、 state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>

      </div>
    )
  }
}

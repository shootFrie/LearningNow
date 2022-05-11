import React, { Component } from 'react'
// import qs from 'querystring'
const DetailContent = [
  {id: "01", content:"消息1"},
  {id: "02", content:"消息2"},
  {id: "03", content:"消息3"}
]
export default class Detail extends Component {
  render() {
    // 接收params参数
    const {id, title} = this.props.match.params;

    // 接收 search 参数
    // const {search} = this.props.location; // ?id=01&title=Message001
    // const {id, title} = qs.parse(search.slice(1));

    // 接收 state 参数
    // const {id, title} = this.props.location.state || {} // history对象记住了location,如果清掉缓存会报错

    const findResult = DetailContent.find((detailobj) =>{
      return detailobj.id === id
    }) || {}
    console.log(this.props)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}

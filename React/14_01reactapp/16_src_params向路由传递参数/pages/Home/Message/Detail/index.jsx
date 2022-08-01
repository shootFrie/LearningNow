import React, { Component } from 'react'
const DetailContent = [
  {id: "01", content:"消息1"},
  {id: "02", content:"消息2"},
  {id: "03", content:"消息3"}
]
export default class Detail extends Component {
  render() {
    // 接收param参数
    const {id, title} = this.props.match.params;
    const findResult = DetailContent.find((detailobj) =>{
      return detailobj.id === id
    }) 
    // console.log(this.props)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}

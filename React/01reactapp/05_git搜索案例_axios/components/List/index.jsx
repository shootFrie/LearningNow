import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users, isFirst, isLording, err} = this.props
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

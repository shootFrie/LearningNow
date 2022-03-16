import React, { Component } from 'react'
import "../index.css"

export default class Item extends Component {
  state = {
    mouse: false
  }
  handleOnMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }
  handleChange = (id) => {
    return (event) => {
      // console.log(id, event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    }
  }
  // 删除
  deleteTodo = (id) => {
    if(window.confirm("是否删除")){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <div className='todo_item' style={{backgroundColor: mouse?"#ddd":"#fff"}} onMouseEnter={this.handleOnMouse(true)} onMouseLeave={this.handleOnMouse(false)}>
        <label htmlFor="">
          <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
          <span>{name}</span>
        </label>
        <button style={{display: mouse?"block":"none"}} onClick={() => this.deleteTodo(id)}>删除</button>
    </div>
    )
  }
}


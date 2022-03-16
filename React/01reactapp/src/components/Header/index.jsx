import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

export default class Header extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    add: PropTypes.func.isRequired,

  }
  handleKeyUp = (event) => {
    const {keyCode, target} = event
    if(keyCode !== 13) return
    console.log(target.value)
    if(target.value.trim() === "") {
      alert("输入不能为空")
      return
    }
    // 将todo添加的传递给App
    this.props.add({
      name:target.value,
      id: nanoid(),
      done: false
    })
    target.value = ""
  }
  render() { 
    return (
      <div className='Todo_header'>
        <input className='Todo_header_input' type="text" placeholder='请输入你的任务名称，按回车键确认' onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}



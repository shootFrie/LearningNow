import React from 'react'

export default function Footer(props) {
  const {todos,cleanAllTodo} = props
  let doneCount = todos.reduce((pre, curr) => {
   return pre + (curr.done? 1: 0)
  }, 0);
  // 删除全部
  let cleanAll = () => {
    console.log(props,cleanAllTodo)
    cleanAllTodo()
  }

  // 全选
  let handleCheckAll = (event) => {
    props.handleCheckAll(event.target.checked)
    
  }
  
  return (
    <div className='todo_foot'>
      <label htmlFor="">
        <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0 ? true : false} onChange={handleCheckAll}/> 
        <span>已完成{doneCount} / 全部{todos.length}</span></label>
      <button className='todo_foot_btn' onClick={cleanAll}>清除已完成任务</button>
    </div>
  )
}

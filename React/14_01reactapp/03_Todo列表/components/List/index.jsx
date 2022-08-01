import React, { Component } from 'react'
import Item from "../Item"
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }
  render() {
    const {todos, updateTodo, deleteTodo} = this.props
    return (
      <div className='todo_list'>
        {
          todos.map((todo, index) => {
            return <Item  key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
        
      </div>
    )
  }
}

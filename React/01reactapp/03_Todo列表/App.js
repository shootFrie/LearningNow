// 创建“外壳”组件App
import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
// 创建并暴露App组件
export default class App extends Component {
  state = {
    todos: [
      {id: 123, name:"吃饭", done: true},
      {id: 111, name: "睡觉", done: false},
      {id: 211, name: "打代码", done: true}
    ]
  }
  // 添加
  add = (todoObj) => {
    console.log(todoObj);
    // 原todos
    const {todos} = this.state
    // 追加状态
    let newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  // 更新
  updateTodo = (id, done) => {
    const {todos} = this.state
    /**var s = {a: 1, b:2}
     * var c = {...s, b:3}
     * c = {a:1, b:3}
    */
    // 更新状态 
    let newTodo = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos:  newTodo})
  }
  // 删除
  deleteTodo = (id) => {
    const {todos} = this.state;
    // 新列表
    let newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    // 更新状态
    this.setState({todos: newTodos})
  }

  // 清除所有已完成项
  cleanAllTodo = () => {
    const {todos} = this.state;
    let newTodos = todos.filter( todo => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }

  // 全选
  handleCheckAll = (checked) => {
    const {todos} = this.state
    let newTodos = todos.map(todoObj => {
      return {...todoObj, done: checked}
    })
    this.setState({todos: newTodos})
  }

  render(){
    const {todos} = this.state
    return (
      <div className='Todos_box'>
        <Header add={this.add}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} cleanAllTodo={this.cleanAllTodo} handleCheckAll={this.handleCheckAll}/>
      </div>
    )
  }
}




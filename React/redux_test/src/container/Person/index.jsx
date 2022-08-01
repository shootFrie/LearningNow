import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPerson} from '../../redux/action/person'
import {nanoid} from 'nanoid'
class Person extends Component {
  // state = {
  //   userList:[
  //     {id: "1", name: "名字1", age: "年龄1"},
  //     {id: "2", name: "名字2", age: "年龄2"},
  //     {id: "3", name: "名字3", age: "年龄3"}
  //   ]
  // }
  add = () => { // 这里不用箭头函数用add() 的话，this.nameNode 会报undefined
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const person = {
      id:nanoid(),
      name,
      age
    }
    console.log(person);
    this.props.createAddPerson(person);
  }
  render() {
    return (
      <div>
        <h2>我是Person组件, 上方求和为{this.props.count}</h2>
        <input type="text" placeholder='name' ref={c=> this.nameNode = c}/>
        <input type="text" placeholder='age' ref={c=> this.ageNode = c}/>
        <button onClick={this.add}>添加</button>

        <ul>
          {
            this.props.userList.map((item, index) => {
              return (
                <li key={item.id}>
                  {item.name} --{item.age}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({userList: state.personAdd, count: state.sum}), // 这里多个reducer要拿出单独的属性
  {
    createAddPerson
  }
)(Person)

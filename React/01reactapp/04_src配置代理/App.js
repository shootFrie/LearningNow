import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
   axios.get('api1/students').then(
     response => {console.log("成功了", response.data);},
     error => {console.log("失败了", error);}
   )
  }
  getCartData = () => {
    axios.get('api2/cars').then(
      response => {console.log("成功了", response.data);},
      error => {console.log("失败了", error);}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生实例</button>
        <button onClick={this.getCartData}>点我获取汽车实例</button>
      </div>
    )
  }
}

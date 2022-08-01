// 创建“外壳”组件App
import React, {Component} from 'react'
import Hello from './components/Hello/Hello'
import Second from './components/Second/Second'
// 创建并暴露App组件
export default class App extends Component {
  render(){
    return (
      <div>
        你好，react组件
        <Hello />
        第二个组件的重复className样式覆盖了上面
        <Second />
      </div> 
    )
  }
}




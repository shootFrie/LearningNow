import React 
// ,{ Component } 
from 'react'
import root from '../index'

// export default class UseStateDemo extends Component {
//   state = {count : 0}

//   myRef = React.createRef()

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState(state => ({count: state.count+1}))
//     }, 1000)
//   }
//   // 卸载组件
//   unmout = () => { 
//     console.log(root)
//     root.unmount()
//     //  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }
//   add(){
//     this.setState(state => ({count: state.count + 1}))
//   }
//   show = () => {
//     alert(this.myRef.current.value)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <button onClick={this.show}>点击展示数据</button>
//         <h3>总数{this.state.count}</h3>
//        <button onClick={this.add}>点我+1</button>
//        <button onClick={this.unmout}>卸载组件</button>
      
//       </div>
//     )
//   }
// }


export default function UseStateDemo() {
  const [count, setCount] = React.useState(0); //[状态，更新状态的方法] 
  
  React.useEffect(() => {
    console.log("@")
    let timer = setInterval(() => {
      setCount(count => count+1)
    },1000)
    return () => {
      console.log('卸载组件前出现');
      clearInterval(timer)
    }
  }, []) // 后面有[]只会执行一次
  
  // Hook Ref
  const myRef = React.useRef()

  function add (){
    // setCount(count + 1) // 第一种写法
    console.log(count)
    setCount(count => count + 1)
  } 
  function unmout() {
    root.unmount()
  }
  // 提示
  function show (){
    alert(myRef.current.value)
  }
  return (
    <div>
       <input type="text" ref={myRef}/>
        <button onClick={show}>点击展示数据</button>
        <h3>总数{count}</h3>
      <button onClick={add}>点我+1</button>
      <button onClick={unmout}>卸载组件</button>
    </div>
  )
}

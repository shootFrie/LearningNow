import React, { Component } from 'react'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
class ContextDemo extends Component {
  state = { va: "pk" }
  render() {
    return (
      <div>
        <Provider value={this.state}>
          <A />
        </Provider>
      </div>
    )
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <h2>这是A组件</h2>
        <B />
      </div>
    )
  }
}

// class B extends Component {
//   static contextType = MyContext
//   render() {
//     return (
//       <div>
//         <h2>这是B组件</h2> 
//         {this.context.va}
//       </div>
//     )
//   }
// }

function B() {
  return (
    <div>
      <h2>这是B组件</h2>
      <Consumer>
        {
          value => {
            return value.va
          }
        }
      </Consumer>
      
    </div>
  )
}

export default ContextDemo

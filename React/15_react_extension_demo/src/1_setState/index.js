import React, { Component } from 'react'

export default class StateDemo extends Component {
  state = {
    title: 'setState改变'
  }
  setStateEvent = ()=>{
    this.setState((state,props)=> {return {title: state.title + '改变'}}, ()=>{console.log("这是同步setState")})
    console.log("异步。setState");
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <button onClick={this.setStateEvent}>点击改变setState</button>
      </div>
    )
  }
}


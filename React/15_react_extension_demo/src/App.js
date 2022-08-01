import React, { Component } from 'react'
import LazyLoadDemo from './2_lazyLoad'
import StateDemo from './1_setState'
import UseStateDemo from './3_Hook'
import FragmentDemo from './4_Fragment'
import ContextDemo from './5_ContextDemo'

export default class App extends Component {
  render() {
    return (
      <div>
        <ContextDemo />
        <hr />
        <FragmentDemo />
        <hr />
        <UseStateDemo />
        <hr/>
        <LazyLoadDemo />
        <hr />
        <StateDemo />
      </div>
    )
  }
}

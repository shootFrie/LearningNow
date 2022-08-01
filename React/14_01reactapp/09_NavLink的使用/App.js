import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
// 一般组件
import Header from "./components/Header"
// 路由组件; 页面
import Home from './pages/Home'
import About from './pages/About'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div> 
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同页面 */}
              {/* <a class="list-group-item active" href="./about.html">About</a>
              <a class="list-group-item" href="./home.html">Home</a> */}

              {/* react中路由链接切换组件 */} 
              <NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink> 
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由,编写路由变化 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

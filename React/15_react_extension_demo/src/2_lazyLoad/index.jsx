import React, { Component, Suspense, lazy } from 'react'
import { Route, NavLink, Routes } from 'react-router-dom'
import Loading from './Loading'
// import About from './About'
// import Home from './Home'
const About = lazy(() => import('./About'))
const Home = lazy(() =>import('./Home'))

export default class LazyLoadDemo extends Component {
  render() {
    return (
      <div> 
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同页面 */}
              {/* <a class="list-group-item active" href="./about.html">About</a>
              <a class="list-group-item" href="./home.html">Home</a> */}

              {/* react中路由链接切换组件 */}
              <NavLink activeclassname="active" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeclassname="active" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
              <Suspense fallback={<Loading/>}> 
                <Routes>{/* Routes代替了switch */}
                    {/* 注册路由,编写路由变化 */}
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element= {<Home />} /> 
                </Routes> 
                </Suspense> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

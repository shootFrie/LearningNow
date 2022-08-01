import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'

import { createRoot } from 'react-dom/client';
// Provider 组件可以将store传入，不用再重复写入
import {Provider} from 'react-redux'


import store from './redux/store'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
// React 18 不支持
// ReactDOM.render(<App />, document.getElementById('root'))
// 检测redux中状态的改变，如redux的状态发生改变，那么会重新渲染App组件
// store.subscribe(() => {
//   root.render(<App />)
// })

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Provider 是可以总的将store传入,之后在组件里面不用再store={store}
import {Provider} from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <App  />
  </Provider>
)

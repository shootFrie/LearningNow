import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'

import { createRoot } from 'react-dom/client';
// ReactDOM.render(<App />, document.getElementById('root'))
import store from './redux/store'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
// React 18 不支持
// ReactDOM.render(<App />, document.getElementById('root'))

store.subscribe(() => {
  root.render(<App />)
})

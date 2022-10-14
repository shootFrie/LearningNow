/**
 * 该文件专门为Count组件生成action对象
*/
// function createIncrementAction (data) {
//   return {type: 'increate', data}
// }
// function createDecrementAction (data) {
//   return {type: 'decreate', data}
// }

import {INCREASE,DECREASE } from './constant'
import store from './store'
// 同步action {} 【同步action action值为Object类型的一般对象】
export const createIncrementAction = data => ({type: INCREASE, data})
export const createDecrementAction = data => ({type: DECREASE, data})

// 异步action 返回function【异步action 指action的值为函数】
export const createIncrementAsyncAction = (data, time) => {
  return () => { // 无法处理需要使用中间件 redux-thunk
    setTimeout(() => {
      store.dispatch(createIncrementAction(data))
    }, time)
  }
}

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
export const createIncrementAction = data => ({type: INCREASE, data})
export const createDecrementAction = data => ({type: DECREASE, data})


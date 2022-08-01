/**
 * 1. 该文件用于创建一个为Count组件服务的reducer, reducer的本质是一个函数
 * 2. reducer函数会接到两参数，分别为之前的状态（preState），动作对象（action）
*/
import {INCREASE,DECREASE } from './constant'
const initState = 0
export default function countReducer (preState = initState, action) {
  // if(preState === undefined) preState = 0 //初始化时为0 直接在参数部分赋初始值更好
  console.log(preState, action, typeof preState) // type undefined, 初始化了为0   | data@@init
  // 从action对象中获取： type、data
  const {type, data} = action 
  // 根据type决定如何加工
  switch(type) {
    // case 'increase': // 如果是加INCREASE
    case INCREASE: 
      return preState + data
    // case 'decrease': // 如果是减
    case DECREASE: // 如果是减
      return preState - data
    default:  // 初始化时
      return preState
  }
}

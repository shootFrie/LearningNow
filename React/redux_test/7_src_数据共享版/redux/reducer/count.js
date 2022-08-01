/**
 * Count组件的reducer,本质是函数
 * 接收两个状态,之前状态和 动作对象action 有两个{type, data}
 * */ 
import {ADD, SUBSTRACT} from '../constant'
const initState = 0
export default function CountReducer (preState = initState, action) {
  console.log(preState, action)
  const {type, data} = action;
  switch(type) {
    case ADD:
      return preState + data
    case SUBSTRACT:
      return preState - data
    default :
      return preState
  }
}

/**
 * 为Count组件生成 action 对象, store数据的唯一来源
 * Action创建函数就是生成action的方法
*/
import store from '../../redux/store'
import {ADD, SUBSTRACT} from '../constant'
export const createAdd = data => ({type:ADD, data})
export const createSubstract = data => ({type:SUBSTRACT, data})

/**
 * 延迟动作不交给组件自身，交给action
 * 需要使用中间件 redux-thunk
*/
export const createAsyceAdd = (value, time) => {
  return () => { // 这里返回的是个函数
    setTimeout(() => { 
      store.dispatch(createAdd(value * 1)) // 过一段时间再调用action的的createAdd
    },time)
  }
}

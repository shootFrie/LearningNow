// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux' 

import {
    createIncrementAction, 
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'
// 返回值作为状态传递UI组件,
//--状态
/**
 * 1. 函数返回的是一个对象
 * 2. 返回的对象中key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3. 用于传递状态 
 * 
*/
function countState(state){
  return {count: state}
}
// 
// --操作状态的方法
/**
 * 1.函数返回的是对象
 * 2.返回值作为状态传递UI组件,返回的对象中key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * 3，用于传递状态
*/

function countMethod(dispatch){
  return {decre : (value) => {
    // 减法
    dispatch(createDecrementAction(value))
  },
  //加法
  incre: (value) => {
    dispatch(createIncrementAction(value))
    },
    asyncIncre: (value)=> {
      dispatch(createIncrementAsyncAction((value), 500)) // 异步action
    }
  }
  
}

// 使用connect()()创建并暴露一个Count
export default connect(countState, countMethod)(CountUI)

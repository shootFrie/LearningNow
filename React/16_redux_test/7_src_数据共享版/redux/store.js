/**
 *  唯一暴露的store applyMiddleware
 * createStore 被建议用 configureStore ,这个是用来配置store的,暂时不考虑
*/
import {createStore, applyMiddleware, combineReducers} from 'redux'
import CountReducer from './reducer/count'
// 中间件 异步action调用
import thunk from 'redux-thunk'
import PersonReducer from './reducer/person'

const allRedecer = combineReducers({
  sum: CountReducer,
  personAdd: PersonReducer
})
export default createStore(allRedecer, applyMiddleware(thunk))

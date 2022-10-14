/**
 *  唯一暴露的store applyMiddleware
 * createStore 被建议用 configureStore ,这个是用来配置store的,暂时不考虑
*/
import {createStore, applyMiddleware, combineReducers} from 'redux'
import CountReducer from './reducer/count'
// 中间件 异步action调用
import thunk from 'redux-thunk'
import PersonReducer from './reducer/person'
import {composeWithDevTools} from 'redux-devtools-extension'

const allRedecer = combineReducers({
  sum: CountReducer,
  personAdd: PersonReducer
})
// 不要异步的话可以不要 applyMiddleware中间件传入并加thunk composeWithDevTools 开发工具
export default createStore(allRedecer, composeWithDevTools(applyMiddleware(thunk)))

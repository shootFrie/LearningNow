import React, {Component} from 'react'
import {connect} from "react-redux"
import {createAdd, createSubstract, createAsyceAdd} from '../../redux/action/count'

class Count extends Component {
  increase = () => {
    const { value } = this.selectNum
    this.props.add(value*1)
  }
  decrease = () => {
    const { value } = this.selectNum
    this.props.substract(value*1)
  }
  oddAdd = () => {
    const { value } = this.selectNum
    if(this.props.count % 2 !== 0) {
      this.props.add(value*1)
    }
  }
  asyncAdd = () => {
    const {value} = this.selectNum
    this.props.asyncADD(value*1, 1000)
  }
  render(){
    return (
      <div>
        <h2>这是Count组件</h2>
        <h3>获取总值为: {this.props.count}, 下方总人数为：{this.props.personSum}</h3>
        <select ref={c=> this.selectNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increase}>加+</button>
        <button onClick={this.decrease}>减-</button>
        <button onClick={this.oddAdd}>奇数加</button>
        <button onClick={this.asyncAdd}>异步加</button>
      </div>
    )
  }
}

// connect 有检测reduce的能力可以dispatch和subscribe
export default connect(
  state => ({count: state.sum, personSum: state.personAdd.length}), // 这里不能写定值,要写state传入对象,不然会导致无法检测state状态
  {
    add:createAdd,
    substract:createSubstract,
    asyncADD: createAsyceAdd
  }
)(Count)

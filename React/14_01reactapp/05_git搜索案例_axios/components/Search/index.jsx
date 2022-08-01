import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户的输入 (连续解构赋值+重命名)
    const {keyWordElement:{value : keyword}} = this
    console.log(keyword)
    // console.log(this.keyWordElement.value);
    // 发送请求前通知App更新状态
    this.props.UpdataAppState({isFirst: false, isLording: true});
    // 发送网络请求
    axios.get('/api/search/users?q='+ keyword).then(
      response => {
        console.log('获取数据成功', response.data);
        // 请求成功后通知App更新列表
        this.props.UpdataAppState({isLording: false, users: response.data.items});
      },
      error => {
        // 请求失败后通知App更新状态
        this.props.UpdataAppState({isLording: false, err: error.message})
      }
    )
  }
  
  render() {
    return (
      <section className="search">
        <h3>Seach Github Users</h3>
        <div>
          <input type="text" placeholder="输入关键词点击搜索" ref={c => this.keyWordElement = c}/>
          <button onClick={this.search}>搜索Github用户</button>
        </div>
      </section>
    )
  }
}

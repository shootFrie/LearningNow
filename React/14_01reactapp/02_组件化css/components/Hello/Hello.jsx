import React from 'react'
import hello from "./Hello.module.css"
// 组件化css，用样式嵌套比较多
export default function Hello() {
  return (
    <div>
      <h1 className={hello.title}>Hello,title颜色红色</h1>
    </div>
  )
}

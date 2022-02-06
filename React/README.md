<!-- toc -->
- [React笔记](#react笔记)
  - [简介及入门](#简介及入门)
    - [入门基础](#入门基础)
  - [组件](#组件)
    - [组件的定义](#组件的定义)
    - [组件三大核心属性](#组件三大核心属性)
    - [React 元素渲染（JSX）](#react-元素渲染jsx)
      - [JSX](#jsx)
  - [事件处理](#事件处理)
  - [生命周期](#生命周期)
  - [JSX_style 样式](#jsx_style-样式)
- [创建项目](#创建项目)
# React笔记
## 简介及入门
  React 是构建用户界面的 Javascript 库，小巧而复杂，主要用于构建 UI 界面。Facebook研发的，后来用于Instagram，2013年开源。  
  开源文档：[https://react.docschina.org/](https://react.docschina.org/)  
  **特点：**  
  1.	声明式的设计
  2.	高效，采用虚拟DOM 来实现 DOM 的渲染，最大限度的减少 DOM 的操作
  3.	灵活，跟其它库灵活搭配起来
  4.	JSX：俗称JS里面写 HTML ，Javascript 语法的扩展
  5.	组件化，模块化。代码容易复用，大型项目非常喜欢react（据说是在2016年之前）
  6.	单向的数据流，没有实现数据的双向绑定，要自己修改数据。数据 -> 视图 -> 事件 -> 数据  

  **为什么学？**  
   - 使用JavaScript直接操作DOM，浏览器会大量重绘重排；
   - 原生Javascript代码复用率低
### 入门基础
  1. HelloWorld
   ```
    <body>
      <!-- 容器 -->
      <div id="app"></div>
      <!-- 引入React核心库 -->
      <script src="../js/react.development.js"></script>
      <!-- react-dom 支持react操作DOM -->
      <script src="../js/react-dom.development.js"></script>
      <!-- 引入将jsx转换为js的babel -->
      <script src="../js/babel.min.js"></script>

      <script type="text/babel"> // 说明这部分下的是jsx，需要用babel转换
        // 创建虚拟DOM
        var VDOM = <h1>Hi,React</h1>
        // ReactDOM.render(虚拟DOM, 容器);
        // 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById("app"));
      </script>
    </body>
   ```
  2. 虚拟DOM的两种创建方式
  3. jsx
   
## 组件
### 组件的定义
	- 函数式组件
	- 类式组件
### 组件三大核心属性
	- state-组件内变量
  	- 基本使用
	- props-父传子
  	- 基本使用和传值限制
	- refs与事件处理
  	- 字符串形式（不被推荐但能用-效能不高）
  	- 回调函数形式 （内联函数更新时会调用两次，可忽略）
  	- createRef （最推荐）

### React 元素渲染（JSX）
  #### JSX
  index.js 中 jsx 语法 
  <App /> 是 js 的普通对象
  
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  // 在ReactDOM.render 的方法中渲染 <App /> 到 root里面
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```
  ReactDOM.render 里面的 是等价于
  ```javascript
  let app = <App />; //组件对象参数
  let root = document.getElementById('root') // 要渲染的地方
  ReactDOM.render(app, root)
  /**
   * StrictMode 是一个用以标记出应用中潜在问题的工具。
   * 不会渲染任何真实的UI，它为其后代元素触发额外的检查
   * */
	// 使用 JSX 的写法，可以创建 js 元素对象
	let h1 = <h1>helloworld</h1>
	/**
	 * 这里的JSX 元素对象，或组件对象（<App />）, 必须只有一个根元素（根节点）
	 * */
  ```
  
  例子：实现页面时刻显示
  ```javascript
  function clock() {
	  let time = new Date().toLocaleTimeString()
	  let element = <h1>现在时间是 {time}</h1>
	  let root = document.querySelector('#root')
	  ReactDOM.render(element, root)
  }
  
  clock()
  // 动起来
  setInterval(clock, 1000)
  ```


函数式组件渲染
```javascript
// 对象; react 函数式式组件 父子组件传值
function Clock(props) {
	return (
		<div>
			<h1>现在的时间{props.date.toLocaleTimeString()}</h1>
			<h2>这是副标题</h2>
		</div>
	)
}
// 注：这里的toLocaleTimeString()方法式把 Date 对象的时间部分转换成字符串
function run()
{
	ReactDOM.render(
		<Clock date={new Date()} />,
		document.querySelector('#root')
	)
}

setInterval(run, 1000)
```

## 事件处理
## 生命周期
## JSX_style 样式
- 不能重复写，比如同一标签不能有两个style
- 不能是语句，比如 style 中是变量，不能直接 height:40px;
- 表达式可以放数组，可以加空格

```javascript
// 样式，style 是驼峰法命名，或双引号
let expampleStyle = {
	background: 'skyblue',
	borderBottom: "1px solid red",
	'background-imag': "url('')"
}
// 写法一：style,只有一个样式
let element = (
	<div>
		<h1 style={expampleStyle}>helloworld</h1>
	</div>
)

// 写法二： className
let classStr = "redBg"  //样式名
//写法三： 数组
let classStr1 = ["redBg", "active"].join(" ") //redBg active

let element2 = (
	<div>
		{/** 这里写注释*/}
		<h1 class={classStr}>this is a new class</h1>
		<h1 class={"abc "+classStr}>再加一个样式，加个空格</h1>
		<h1 class={classStr1}>this is a new class</h1>
	</div>
)

```


# 创建项目
 1.	通过 script 引入使用，仅用于学习调试
   
   ```javascript
   <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
   ```
 2.	通过 react 脚手架，创建项目进行开发，部署  
 官方文档：[https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app](https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app)
   
	```javascrpt
	1. 安装脚手架 create react app
	
	cnpm install -g create-react-app
	如果能翻墙就用 npm
	注：cnpm没有就先
	npm install -g cnpm --registry=https://registry.npm.taobao.org
	cnpm -v 检查
	报错就将cnpm 放入 path 环境变量中
	
	2. 创建项目
	
	create-react-app 01reactapp(项目名称)
	// 创建时间较长
	
	//运行
	npm start
	```

	**目录结构**
	- public  
		- index.html id="root"  渲染在页面
		- manifest.json pwa 渐进式框架，只有部分谷歌能实现这样的功能
		  - pwa 渐进式web应用，可以生成桌面小图标，不需要打开浏览器
		  - 通过网络缓存提升页面访问速度，达到渐进式的页面甚至离线访问，提升用户体验
		  - 实现类似app的推送功能，生成系统通知推送给用户
		- robots.txt 给爬虫一个信息，是否给爬虫以及爬虫内容
	- .gitignore  git的自动忽视那些文件
	- package-lock.json 原生目录依赖哪些内容
	- package.json 命令， start 开发，build 编译， test，eject 检查
	- src 
	  - index.js 入口文件 
	```javascript
	// 通过react-dom 渲染什么样的页面
	import ReactDOM from 'react-dom'
	// JSX 语法 不用引号
	ReactDOM.render(
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
	// 缓存web信息, 非必须  
	serviceWorker.unregister();
	// 报告web重要信息，非必须  
	reportWebVitals();
	```
	
	  - App.css 全局css 在 App.js 中导入, 函数式组件 function App(){}
	  - App.test.js 单元对于组件的测试（较少使用，测试方便下次高效使用）
	  - setupTests.js 对于index的测试  

<!-- toc -->
- [React笔记](#react笔记)
  - [简介及入门](#简介及入门)
    - [入门基础](#入门基础)
    - [jsx](#jsx)
    - [JSX_style 样式](#jsx_style-样式)
  - [组件](#组件)
    - [组件的定义](#组件的定义)
    - [组件三大核心属性](#组件三大核心属性)
      - [state-组件内变量](#state-组件内变量)
      - [props-父传子](#props-父传子)
      - [refs与事件处理](#refs与事件处理)
  - [事件处理](#事件处理)
  - [收集表单数据](#收集表单数据)
  - [生命周期](#生命周期)
- [创建项目](#创建项目)
  - [安装脚手架](#安装脚手架)
    - [目录结构](#目录结构)
    - [React 元素渲染（JSX）](#react-元素渲染jsx)
      - [JSX](#jsx-1)
    - [样式模块化](#样式模块化)
  - [暴露属性和解构赋值](#暴露属性和解构赋值)
  - [代码片段生成组件](#代码片段生成组件)
  - [Todo list](#todo-list)
    - [props 传值限制](#props-传值限制)
    - [底部全选](#底部全选)
  - [react 内的ajax](#react-内的ajax)
  - [github搜索案例](#github搜索案例)
- [React 路由](#react-路由)
  - [SPA](#spa)
  - [路由](#路由)
    - [react-router](#react-router)
    - [一般组件和路由组件](#一般组件和路由组件)
    - [NavLink导航](#navlink导航)
    - [Switch组件](#switch组件)
    - [样式丢失、路由模糊和严格匹配](#样式丢失路由模糊和严格匹配)
    - [路由模糊匹配与严格匹配](#路由模糊匹配与严格匹配)
    - [Redirect 路由重定向](#redirect-路由重定向)
    - [嵌套路由](#嵌套路由)
    - [向路由组件传递参数](#向路由组件传递参数)
    - [replace 与 push](#replace-与-push)
    - [编程式路由导航](#编程式路由导航)
      - [withRouter](#withrouter)
    - [BrowerRouter 与 HashRouter的区别](#browerrouter-与-hashrouter的区别)
  - [antd 按需引入](#antd-按需引入)
- [Redux](#redux)
  - [Redux 三个核心概念](#redux-三个核心概念)
    - [action](#action)
    - [reducer](#reducer)
    - [store](#store)
    - [求和例子](#求和例子)
      - [1.求和简化版](#1求和简化版)
      - [2.求和完整版](#2求和完整版)
      - [3.求和异步action](#3求和异步action)
      - [4.求和_react_redux基本使用](#4求和_react_redux基本使用)
      - [5.求和_求和优化](#5求和_求和优化)
      - [6.求和_react_redux数据共享](#6求和_react_redux数据共享)
    - [redux开发者工具](#redux开发者工具)
  - [高阶函数和纯函数](#高阶函数和纯函数)
    - [纯函数](#纯函数)
    - [高阶函数](#高阶函数)
- [扩展](#扩展)
  - [setState更新状态的2种写法](#setstate更新状态的2种写法)
  - [2. lazyLoad](#2-lazyload)
  - [注意： lazy(() => import('./About')) 别加东西，加了个大括号报错找了半天问题](#注意-lazy--importabout-别加东西加了个大括号报错找了半天问题)
  - [3. Hooks](#3-hooks)
    - [1. React Hook/Hooks是什么?](#1-react-hookhooks是什么)
    - [2. 三个常用的Hook](#2-三个常用的hook)
    - [3. State Hook](#3-state-hook)
    - [4. Effect Hook](#4-effect-hook)
      - [5. Ref Hook](#5-ref-hook)
  - [4. Fragment](#4-fragment)
    - [使用](#使用)
  - [5. Context](#5-context)
    - [理解](#理解)
    - [使用](#使用-1)
    - [注意](#注意)
- [打包](#打包)
- [报错](#报错)
  - [You are running `create-react-app` 5.0.0, which is behind the latest release (5.0.1).](#you-are-running-create-react-app-500-which-is-behind-the-latest-release-501)
  - [ReactDOM.render is no longer supported in React 18.](#reactdomrender-is-no-longer-supported-in-react-18)
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
  - jsx - 虚拟DOM直接标签输出
```  
	<script type="text/babel"> // 此处一定要写babel  
		// 1.创建虚拟DOM; jsx创建
		const VDOM = <h1 id="show">这里不能写引号</h1>;
		// 2渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById("contain"));
	</script>
```
  - js - React创建标签
```
	<script type="text/javascript">
		// 1. 创建虚拟DOM 
		// const VDOM = React.createElement(标签名, 标签属性, 标签内容);
		const VDOM = React.createElement("h1", {id: 'title', class: "clName"}, "你好");
		// 2.渲染到页面
		ReactDOM.render(VDOM, document.getElementById("app"));
	</script>
```
3.虚拟DOM和真实DOM区别
```
<body>
	<div id="app"></div>
	<div id="demo">真实DOM</div>

	<script src="../js/react.development.js"></script>
	<script src="../js/react-dom.development.js"></script>

	<script type="text/javascript">
		// 1. 创建虚拟DOM 
		// const VDOM = React.createElement(标签名, 标签属性, 标签内容);
		const VDOM = React.createElement("h1", {id: 'title', className: "clName"}, "你好");
		// 2.渲染到页面
		ReactDOM.render(VDOM, document.getElementById("app"));

		const TDOM = document.getElementById("demo");
		console.log("虚拟DOM", VDOM); // Object
		console.log("真实DOM", TDOM); // 输出标签
		debugger; // 断点可以看到属性
		console.log("typeof VDOM", typeof VDOM); // Object
		console.log("VDOM instanceof Object", VDOM instanceof Object); // true

		/**
		* 关于虚拟DOM：
		* 1. 本质是Object类型的对象（一般对象）
		* 2. 虚拟DOM比较“轻”（属性少）；真实DOM比较“重”； 因为虚拟DOM是React的内部在用，无需真实DOM上那么多属性
		* 3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上
		*/
	</script>
</body>
```
### jsx
**jsx语法规则：**
  1. 定义虚拟DOM时不要写引号
  2. **标签中混入js表达式**时，要用花括号{};不要有双引号
  3. 样式类名指定要用className
  4. 内联样式双花括号{{}}的形式，对象形式； 要用style={{key:value}}的形式写
  5. 只有一个根节点
  6. 标签必须闭合
  7. 标签首字母
   - 若小写字母开头，则改标签转为html中同名标签，若html中无该标签对于的同名元素，则报错
   - 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错
```
const atId = "ATGUIgu";
const spanId = "spanUU";
// 1. 创建虚拟DOM
const VDOM = (
	<div>
		<h2 id={atId.toLowerCase()} className="titlebg">
			<span style={{fontSize: '20px'}}>hello {spanId.toUpperCase()}</span>  
		</h2>
		<input type="text" />
		<Good>1234</Good>
	</div>
);
// 2.渲染虚拟DOM到页面
ReactDOM.render(VDOM, document.getElementById("app"));
```
**注：js表达式与js语句**
- 表达式会返回值，语句为了进行某项操作，不返回值
* JS语句和JS表达式的区别
     *  JS表达式 返回结果，例如
     *    1. a  // 变量，返回undefined
     *    2. a+b
     *    3. a.map() 返回数组
     *    4. function test() {}
     * 
     *  JS语句 (代码)       
     *    1. if(){}
     *    2. for(){}
     *    3. switch(){} 

react 循环默认循环数组，不能循环object
```
var data = ["Angular","React", "Vue"]; // JS语句
var data2 = [<li>Angular</li>, <li>React</li>, <li>Vue</li>];
var obj = {name1: "", name2: "", name3: ""};
const VDOM = (
	<div>
		<h2>前端js框架列表</h2>
		<p>数组形式： {data}</p>
		<p>数组中增加框架形式：</p>
		<ul>
			{data2}  
		</ul>
		<p> obj 对象直接报错 Objects are not valid as a React child  </p>
		<ul>
			{
				// 这里写JS表达式
				data.map((item, index) => {
					return <li key={index}>{item}</li>
				})
			}
		</ul>
	</div>
)

ReactDOM.render(VDOM, document.getElementById("app"));

```

### JSX_style 样式
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

   
## 组件
### 组件的定义
- 函数式组件
```
<script type="text/babel">
	function Demo(){
		return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2>
	}
	// 若小写字母开头，则改标签转为html中同名标签，若html中无该标签对于的同名元素，则报错
	ReactDOM.render(<Demo />,  document.getElementById('contain'));
</script>
```
- 类式组件
```
<script type="text/babel">
    // 1. 创建类式组件
    // 继承父类；render； 返回值
    class MyComponent extends React.Component{
      render(){
        // render 是放在 MyComponent 的实例对象上
        // render中 的this是  MyComponent 的实例对象；（关注props，refs，state）；又叫 MyComponent 组件实例对象
        console.log("render的this对象",this);
        return <h2>我是类定义的组件（适用于【复杂组件】的定义）</h2>
      }
    }
    // 2.渲染组件到页面
    ReactDOM.render(<MyComponent />, document.getElementById("contain"));
  </script>
```
执行  ReactDOM.render(<Demo />,  document.getElementById('contain')); 之后发生了什么
1 React解析组件标签，找到Demo组件。
2 发现组件时使用函数定义的，随后new出来该类的实例，并通过实例调用到原型上的render方法
3 将返回的虚拟DOM转为真实DOM,随后呈现在页面中
### 组件三大核心属性
#### state-组件内变量
- 基本使用
```
 <script type="text/babel">
    // 1.创建组件
    class Weather extends React.Component {
      // 构造器调用几次？ -1次
      constructor(props) {
        super(props);
        // 初始化状态
        this.state = {isHot: true};
        // this.changeWeather = this.changeWeather.bind(this);
        // 解决this指向问题
        this.demo = this.changeWeather.bind(this);
      }
      // render调用几次？ - 1+n次
      render() {
        // 读取状态
        const {isHot} = this.state;
        return (
          // <h2 onclick="demo()">今天天气{isHot? "炎热": "凉爽"}</h2> 错误
          // <h2 onclick={demo()}>今天天气{isHot? "炎热": "凉爽"}</h2> 这里一进去就执行
          <h2 onclick={this.demo}>今天天气{isHot? "炎热": "凉爽"}</h2>
        )
      }
      // 点击一次调用一次
      changeWeather(){
        // 这个方法是放在weather原型对象上 ，供实例使用
        // 通过实例调用，this是实例; 如果单独放没有声明绑定实例this，这里this就是undefined
        // 类中方法默认开启了局部严格模式，
        console.log(this); //  undefined
        // 状态不能随意更改，用内置api修改
        // this.state.isHot = !this.state.isHot; 
        // 用react的api修改； 更新是一种合并，不是替换
        this.setState({isHot: !isHot})
      }
    }
    ReactDOM.render(<Weather />, document.getElementById("container"));
    function demo () {
      console.log("被点击了");
    }
  </script>
```
简写：
```
<script type="text/babel">
    class Weather extends React.Component{
      state = {
        isHot: true
      }

      // 箭头函数，this指向 = 上层this指向
      change = () => {
        this.setState({isHot : !isHot});
      }

      render(){
        const {isHot} = this.state;
        return <h2 onClick={this.change}>今天天气{isHot? "炎热": "凉爽"}</h2>
      }
    }

    ReactDOM.render(<Weather />, document.getElementById("contain"));

  </script>
```
#### props-父传子
	- 基本使用
```
class Person extends React.Component {
	render(){
		const {name,age,sex} = this.props
		return (
			<ul>
				<li>姓名： {name}</li>
				<li>年龄： {age + 1}</li>
				<li>性别： {sex}</li>
			</ul>
		)
	}
}
ReactDOM.render(<Person name="shaw" age="34" sex="female"/>, document.getElementById("contain"));
```
- 传值限制
  	- 类名.propTypes ={} 对标签属性进行限制 
  	- 类名.defaultProps ={} 对传入props值进行默认值显示
```
// 类组件
class Person extends React.Component {
	// 构造器
	constructor(props){
		// 不传入props，无法在构造器中访问this
		// 这里props可以不拿,但是有些版本会变成undefined
		super(props);
		console.log("constructor",this.props); //{name:xx}
	}
	/* 简写模式
		/**类相当于实例的原型, 所有在类中定义的方法, 都会被实例继承。
		* 如果在一个方法前,加上Static关键字,
		* 就表示该方法不会被继承,而是直接通过类来调用,这被称为 “静态方法”
		* */
		static propTypes = {
			name: PropTypes.string.isRequired,
			age: PropTypes.number,
			sex: PropTypes.string
		}

		static defaultProps = {
			sex: "男"
		}

	*/

	render () {
		const {name, age, sex} = this.props;
		return (
			<ul>
				<li>name : {name} </li>
				<li>age: {age + 1}</li>
				<li>sex: {sex}</li>
			</ul>
		)
	}

}
// 简写模式可以注释
// 对标签属性进行类型、必要性限制
Person.propTypes = {
	name: PropTypes.string.isRequired, // 限制name必传，为string
	age: PropTypes.number, // 限制age为数字
	sex: PropTypes.string,
	speak: PropTypes.func // 函数
}
// 指定默认标签属性值
Person.defaultProps = {
	sex: "男" // 默认值
}
// 简写模式可以注释end
// 渲染组件到页面
ReactDOM.render(<Person name="John" age={13} speak = {speak}/>, document.getElementById('contain'));

function speak(){
	console.log("say hi");
}
```
函数式组件使用props
```
<script type="text/babel">
	function Person(props){
		const {name, age, sex} = props;
		
		return (
			<ul>
				<li>name: {name}</li>
				<li>age: {age + 1}</li>
				<li>sex: {sex}</li>
			</ul>
		)
	}

	// 函数式组件没有static可以放在函数内部
	Person.propTypes = {
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
		sex: PropTypes.string
	}

	Person.defaultProps = {
		sex: "女"
	}

	ReactDOM.render(<Person name="Shaw" age={45} />, document.getElementById("contain"));
</script> 
```

#### refs与事件处理
ref 被用来给元素或子组件注册引用信息
- 字符串形式（不被推荐但能用-效能不高）
- 回调函数形式 （内联函数更新时会调用两次，可忽略）回调形式的ref将在组件挂载或组件卸载时调用
- createRef （最推荐）
```
class Demo extends React.Component {
      inpClick = () => {
        console.log("第一个输入框的值：",this.refs.input1.value);
      }
			/**
     * 回调函数的条件：别人调用的函数
     * 1.你定义的函数
     * 2.你没调用
     * 3.函数最终执行了
    */
      inpBlur = () => {
	// 回调函数形式
        const {input2} = this
        console.log("失焦后值：", this.input2.value)
      }

			 
     state = { isHot : true, isShow: false} 

     showInfo = () => {
        const { inp1 } = this
        console.log(inp1);
     }
     changeWeather = () => {
      this.setState({isHot : !isHot})
     }
     saveInput = (c) => {
       this.inp1 = c
     }
		/**
       * React.createRef 调用后可以返回一个容器，该容器可以存储被ref所标识的节点
       * 容器“专人专用”，一个容器只能存一个
      */
     myRef = React.createRef()
     myRef2 = React.createRef()
     // state = {isShow: false}
     showData = () => {
       const {isShow} = this.state
       console.log("createRef拿到的 {current}", this.myRef.current);
       this.setState({isShow : !isShow})
     }

     BlurShow = () => {
       alert(this.myRef2.current.value);
     }

      render(){
				const {isHot} = this.state
        return (
          <div>
            <input ref="input1" type="text"  placeholder="点击后执行"/>
            <button onClick={this.inpClick}>点击</button>
            <input ref={c => this.input2 = c} onBlur={this.inpBlur} type="text" placeholder="失焦后执行" />
						<!--ref 回调的另一种-->
						<h4>今天天气{isHot? "凉爽" : "炎热"}</h4>
            {/* ref内联函数更新时会获取到两次，第一次获取到null
            <input ref={c => {this.inp1 = c; console.log(`@`, c);} } type="text" /> 
              写成class的绑定函数;这两个可忽略
          */}
            <input type="text" ref={this.saveInput} />
            <button onClick={this.showInfo}>点我提示输入的数据</button>
            <button onClick={this.changeWeather}>点我改变天气</button>

						 <div>
							<input type="text" ref={this.myRef} placeholder="点右边按钮显示"/> 
							<button onClick={this.showData}>点我显示左侧的数据</button>
							<span>{this.state.isShow ? this.myRef.current.value : ""}</span>
							<input placeholder="失焦显示" type="text" ref={this.myRef2} onBlur={this.BlurShow}/>
						</div>
          </div>
         
        )
      }
    }

    ReactDOM.render(<Demo />, document.getElementById("contain"))
```


## 事件处理
- onClick ; onXxxx
```
<script type="text/babel">
    /**
     * (1).通过onXxxx属性指定事件处理函数（注意大小写）
     *   a. React 使用自定义事件，而不是原生DOM事件 --- 兼容性
     *   b. React中的事件是通过事件委托方式处理的（委托给最外层的元素）事件冒泡
     * (2).通过event.target得到发生事件的DOM元素对象
     * */ 
    // 类组件
    class Demo extends React.Component {
      // ref容器创建
      myRef = React.createRef
      showDate = () => {
        alert(this.myRef.current.value)
      }
      BlurShow = (event) => {
        // 不要过度使用ref
        alert(event.target.value)
      }
      render () {
        return (
          <div>
            <input ref={myRef} type="text" placeholder="点击右边按钮获取值"/>
            <button onClick={this.showDate}>点击左侧值显示</button>
            <input type="text" onBlur={this.BlurShow} />
          </div>
        )
      }
    }

    ReactDOM.render(<Demo />, document.getElementById("contain"));
  </script>
```

## 收集表单数据
- 受控组件
- 非受控组件
## 生命周期
- 旧 
  - 挂载时componentWillMount
  - 挂载时render
  - 挂载时componentDidMount
  - 父组件更新子组件 componentWillRecevieProp
  - shouldComponentUpdate [setState]
  - componentWillUpdate [foreceUpdate()]
  - 父组件更新子组件 render
  - componentDidUpdate
  - ReactDOM.unmountComponentAtNode(document.getElementById()) 卸载
  - componentWillUnmout
- 新
  - 不建议用的钩子,前面加UNSAFE_
    - UNSAFE_componentWillUpdate
    - UNSAFE_componentWillReceiveProps
    - UNSAFE_componentWillUpdate
  - getSnapshotBeforeUpdate

# 创建项目
 1.	通过 script 引入使用，仅用于学习调试
   
   ```javascript
   <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
   ```
 2.	通过 react 脚手架，创建项目进行开发，部署  
 官方文档：[https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app](https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app)
## 安装脚手架   
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
// 创建时间较长 报错不是内部命令改为
npx create-react-app 01reactapp 没用

//运行
npm start
```
**遇到坑**  
```
1.npm 报错 
Error: GET https://r.npm.taobao.org/create-reate-app response 404 status
输入
> npm config set registry https://registry.npmjs.org/

2. node 版本不高报错
Create React App requires Node 14 or higher.
在官网下最新版覆盖，不知道为什么无法下载window版本

查了下 node node有一个模块叫n，是专门用来管理node.js的版本的。
> npm install -g n

报错
Unsupported platform for n@8.0.2: wanted {"os":"!win32","arch":"any"} (current: {"os":"win32","arch":"x64"})
加个 --force
> npm install -g n 

```
感觉我node版本更低了，原先14，现在12  
查了下 windows不支持 n； 还是要去官网找最新版  
用迅雷下载成功了。浏览器下载问题，手机可以顺利下载；  
查了下有个回帖说原来是迅雷干的，难怪它可以下载。  
迅雷没有通过正常途径卸载，造成迅雷卸载不干净，把迅雷XLServicePlatform服务留下了，直接把下载的http请求截获了，但是迅雷已经没了，所以迅雷没办法下，但浏览器又拿不到请求，就造成在浏览器中点击下载链接没反应的情况。  
[如何解决谷歌浏览器在下载文件时，点击了下载链接却没反应的问题](https://www.jianshu.com/p/2939dca220a4)
因为对部分资源有拦截所以没发现，我禁用掉node的迅雷插件后也能成功下载 
安装好后eslint又报错：
```
'plugins' doesn't add plugins to configuration to load. Please use the 'overrideConfig.plugins' option instead.
```
查完发现是vs code 的问题，打开设置
添加
```
"eslint.options": {
    "overrideConfig": {
      "env": {
        "browser": true,
        "es6": true
      },
      "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "rules": {
        "no-debugger": "off"
      }
    }
  },
```
成功不报错。

### 目录结构
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
	- App.js 组件文件
	- App.test.js 测试文件
	- index.js 入口文件 
- manifest.json 应用加壳的配置文件
- robots.txt 爬虫文件，爬虫规矩，什么能爬什么不能
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
React18 index.js有新改变
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
```

	
	  - App.css 全局css 在 App.js 中导入, 函数式组件 function App(){}
	  - App.test.js 单元对于组件的测试（较少使用，测试方便下次高效使用）
	  - setupTests.js 对于index的测试  
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

### 样式模块化
为了防止模块中样式命名重复，后引用的组件样式覆盖之前组件样式，可以在css里面进行嵌套
```
index.css 组件独特 className下写
.index {
  .title {

  }
}
```
css文件中命名加入module,比如index.module.css, 引入； 用得没上面多
```
import hello from './index.module.css'

<h1 className={hello.title}> </h1>
```
## 暴露属性和解构赋值
在App.js 引入中
```
import React, {Component} from 'react'
```
这里的React, {Component} 能同时引入是因为在暴露文件中用分别暴露的形式暴露了Component
```
export class Component = {}
React.Component = Component
export default React
```
如果暴露文件是这样
```
class Component = {}
React.Component = Component
export default React
```
那Component只能用React获取
```
import React from "react"
const {Component} = React
```
## 代码片段生成组件
vs code 安装react插件
vs code 输入 rcc ，按tab键生成类式组件
```
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
```
vs code 输入 rfc ，按tab键生成函数式组件
```
import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
```

## Todo list
属性用{...todo} 把对象里面属性都传过去
```
 {
    todos.map((todo, index) => {
      return <Item  key={todo.id} {...todo}/>
    })
  }
```
onKeyUp 键盘抬起事件
```
npm i nanoid 生成uuid
```
子传父： 父组件回调函数传给子组件，子组件调用

### props 传值限制
1. 引入 propTypes 在 prop-types
```
npm i prop-types
```
2. static PropTypes = {}

### 底部全选
1. 使用checked； defaultChecked只能初始赋值一次；Footer动态变化的checked事件传值event.target.checked给App.js


## react 内的ajax
1. 用集成或自己封装
集成 /安装axios
```
npm i axios
或
yarn add axios
```
练习axios使用  

配置代理 - 【跨域，客户端发出的数据，服务器接收后，返回的数据被客户端ajax引擎拒绝接收，代理就是一个中间间，开一个微小的服务器，代理和客户端同源，没有ajax引擎不会拦截服务器的数据】  
客户端 localhost:3000  
服务端 localhost:5000
```
在package.json配置全局代理
发起3000的请求，都转到5000
"proxy": "http://localhost:5000"

axios
axios.get('http://localhost:3000/students').then(
     response => {console.log("成功了", response.data);},
     error => {console.log("失败了", error);}
   )
```
3000代理会把没有的找5000要  
假设有多个服务器，一个全局代理就无法满足条件,可以建立一个setupProxy.js;  
setupProxy.js 文件会被加到webpack配置里面，所以里面是node语法，CJS[CommonJS]
```
setupProxy.js
// 内置模块; react内已有
const proxy = require('http-proxy-middleware')
// 暴露个对象
module.exports = function(app) {
  app.use(
    // 前缀请求， 转发的对象
    proxy('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {'^/api1': ''} //替换掉写了的
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {"^/api2": ""}
    })
  )
}

```
运行显示无法访问；上面是低版本配置，更换配置
```


App.js

getStudentData = () => {
   axios.get('/api1/students').then(
     response => {console.log("成功了", response.data);},
     error => {console.log("失败了", error);}
   )
  }
  getCartData = () => {
    axios.get('/api2/cars').then(
      response => {console.log("成功了", response.data);},
      error => {console.log("失败了", error);}
    )
  }
```

## github搜索案例
a 的href 需要有ref="noreferrer" 

1. 静态页面编写
2. search模块编写axios获取值，设置代理。http://localhost:5000 作为中间服务器，对没有频繁请求导致没有请求的数据返回默认数据
3. 创建一个改变状态的函数放父组件，子组件用函数修改状态
前端请求后端数据
**axios**  


**兄弟组件互通信息 -- 订阅-发布机制** 
消息订阅-发布机制  
- 先订阅，再发布
- 适用于任何组件间通信
- 要在组件的componentWillUnmount中取消订阅
1.工具PubSubJS 安装
```
yarn add pubsub-js
```

```
// 引入
import PubSub from 'pubsub-js'

// 订阅 在componentDidMount
this.token = PubSub.subscribe('订阅事件名', (_, data) => {
  console.log("收到发布的信息：", data);
}) 

// 取消订阅 在componentWillUnmount
PubSub.unsubscribe(this.token)

// 发布信息
PubSub.publish('订阅事件名', {xxx: xxx});
```

**fetch 请求**
-	fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
- 老版本浏览器可能不支持
发送请求（关注分离化思想）  
```JavaScript
try {
    const response = await fetch('/api/search/users2?q=' + keyword) // 检查是否能连接服务器
    const data = await response.json()
    // 请求成功后通知List更新列表， 状态 
    PubSub.publish('upData', { isLording: false, users: data.items })
} catch (error) {
    PubSub.publish('upData', { isLording: false,  err: error })
  }
```
# React 路由
## SPA
- 单页 web 应用
- 整个应用只有一个完整页面
- 点击页面中的链接不会刷新页面，只会做页面局部更新
## 路由
**工作原理**  
路由匹配靠浏览器地址路径
```Javascript
// 先引用history.js 的cdn
let history = History.createBrowserHistory(); // 方法一： 直接使用H5推出的history里的API，有的旧的浏览器可能不支持
let history = History.createHashHistory(); // 方法二：hash值，（锚点，会多个#），不会引起页面刷新，但是地址会改变
history.push(path); // 地址存放栈
history.replace(path); // 地址存放栈 替换掉最上层的路径
```
### react-router
用的地方
- web react-router-dom
  - 插件库，专门实现SPA应用
- native 用react做原生开发
- any
<印记中文>  
安装5版本router
```
 npm i react-router-dom@5
```
- BrowserRouter
- HashRouter
跳转页面, BrowserRouter是history的router  
```Javascript
<BrowserRouter>
  <Link className="list-group-item" to="/about"></Link>
  <Link className="list-group-item" to="/home"></Link>
</BrowserRouter>
  // Link 没有高亮效果,NavLink 有高亮效果,会追加activeClassName
  <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink> 
 {/* 注册路由,编写路由变化, 这里两个BrowserRouter就是两个路由实例,互相不相通 */}
<BrowserRouter>
  <Route path="/about" component={About} />
  <Route path="/home" component={Home} />
</BrowserRouter>
```
to 不识别大小写，路由版本部分大写会有问题
BrowserRouter  直接在包住<App /> 可以实现一个路由实例.  

### 一般组件和路由组件
1. 写法不同一般组件:
   1. 一般组件: <Header /> 
   2. 路由组件: <Route path="/demo" component={Demo} />
2. 存放位置不同: 
   1. 一般组件 components
   2. 路由组件 pages
3. 接收到的props不同
   1. 使用props获取标签传递属性
   2. 路由组件 会收到路由返回的history, location, match
      history:
        action: "PUSH"
        block: ƒ block(prompt)
        createHref: ƒ createHref(location)
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        length: 4
        listen: ƒ listen(listener)
        location: {pathname: '/about', search: '', hash: '', state: undefined, key: 'xbzwbq'}
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
 
      location:
        hash: ""
        key: "xbzwbq"
        pathname: "/about"
        search: ""
        state: undefined

      match:
        isExact: true
        params: {}
        path: "/about"
        url: "/about"

### NavLink导航
activeClassName 自定义选中样式
```
<NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
<NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink> 
```
封装:  
传递标签体内容<标签>标签体<\/标签>this.props.children拿到
```
传入
<SelfNavLink to="/about" >About</SelfNavLink>
也可以是
<SelfNavLink to="/about" children="About"/>

封装结构
<NavLink activeClassName="active" className="list-group-item" {...this.props} /> 
```
- NavLink 可以实现路由链接高亮，通过activeClassName指定样式类名
- 标签体内容是一个特殊的标签属性
- 通过this.props.children可以获取标签题内容

### Switch组件
一般path和component是一一对应的
让path匹配到了之后不再往下匹配；
```
没有switch的，两个组件都显示
<Route path="/about" component={About} />
<Route path="/about" component={Home} />

有switch的,匹配到了就不再往下匹配；Home不显示
<Switch> 
<Route path="/about" component={About} />
<Route path="/about" component={Home} />
</Switch> 
```

### 样式丢失、路由模糊和严格匹配
未知路由刷新找不到页面会直接到public/index.html
原因public的css路径是相对路径
或使用HashRouter
1. public/index.html中引入样式时不写 ./ 写 /（常用）
2. public/index.html中引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
3. 使用HashRouter

yarn和npm混着用容易丢失包

### 路由模糊匹配与严格匹配
默认模糊匹配：【输入的路径】必须包含【匹配的路径】；  
最左前缀匹配原则:从最左边开始依次匹配，匹配到可以显示，有不同就不能显示,如下面About能显示，Home不能；
```
{/* react中路由链接切换组件 */} 
<SelfNavLink to="/about/ab" >About</SelfNavLink>
<SelfNavLink to="/ab/home" >Home</SelfNavLink>

{/* 注册路由,编写路由变化 */}
<Switch> 
  <Route path="/about" component={About} />
  <Route path="/home" component={Home} />
</Switch>
```
精准匹配, exact; 两种都开启了，如下面Home能显示，About不能
```
{/* react中路由链接切换组件 */} 
<SelfNavLink to="/about/ab" >About</SelfNavLink>
<SelfNavLink to="/home" >Home</SelfNavLink>

{/* 注册路由,编写路由变化 */}
<Switch> 
  <Route exact = {true} path="/about" component={About} />
  <Route exact  path="/home" component={Home} />
</Switch>
```
严格匹配不能随便开启，有时会导致无法继续匹配二级路由；

### Redirect 路由重定向
Redirect一般写在路由的最下方
```
 {/* 注册路由,编写路由变化 */}
<Switch> 
  <Route path="/about" component={About} />
  <Route exact path="/home" component={Home} />
  <Redirect to="/about/"></Redirect>
</Switch>
```

### 嵌套路由
前面路由需要保留
- 注册子路由要写上父路由的path值
- 路由的匹配是按照注册路由的顺序进行的

### 向路由组件传递参数
1. params参数 
  - 路由链接 Link/NavLink携带参数 <Link to={`/home/message/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
  - Route注册路由声明接收：<Route path="/home/message/:id/:title" component={Detail}></Route>
  - 子页面接收参数： const {id, title} = this.props.match.params;
2. search 参数 
  - 路由链接 Link/NavLink携带参数 <Link to={`/home/message/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
  - Route注册路由 无需声明接收 <Route path="/home/message/detail" component={Detail}></Route>
  - 接收参数： this.props.location.search
  - 注：获取到的search是urlencoded编码字符串，需要借助querystring

```
取出来：
import qs from "querystring" // react 内置
"key=value&key=value" // urlencoded编码
qs.Stringfy({a:1, b:2}); // a=1&b=2
qs.parse("a=1&b=2"); // {a:1, b:2}
```

**报错信息：Uncaught Error: Objects are not valid as a React child**  
原因是在render的return里面{}内的数据是个对象，不是个字符串

3. state 参数 地址栏不会有参数
  - 路由链接 Link/NavLink携带参数 <Link to={{pathname: "/home/message/detail", state:{id: "01", title:"title"}}}>{"title"}</Link>
  - Route注册路由 无需声明接收 <Route path="/home/message/detail" component={Detail}></Route>
  - 接收参数： this.props.location.state

### replace 与 push 
默认开启的是push模式，可以后退上一步；开启replace，直接在link路由链接上加replace
```
<Link replace to={{pathname: "/home/message/detail", state:{id: "01", title:"title"}}}>{"title"}</Link>
```

### 编程式路由导航
this.props.history =
- action: "PUSH"
- block: ƒ block(prompt)
- createHref: ƒ createHref(location)
- go: ƒ go(n) -1后退1，2前进2
- goBack: ƒ goBack()
- goForward: ƒ goForward()
- length: 35
- listen: ƒ listen(listener)
- location: {pathname: '/home/message/detail', search: '', hash: '', - - - - state: {…}, key: 'py0fok'}
- push: ƒ push(path, state)
- replace: ƒ replace(path, state)

#### withRouter
**只有路由组件才有history**
withRouter可以把一般组件包装就有路由组件的api; 
withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
withRouter的返回值是一个新组件
```
import {withRouter} from 'react-router-dom'
class Header extends Component {}
export default withRouter(Header) 
```
### BrowerRouter 与 HashRouter的区别
1. 底层原理不一样
   1. BrowserRouter 使用的是H5的history API，不兼容IE9以下版本
   2. HashRouter 使用的是URL的哈希值
2. path表现形式不一样
   1. BrowserRouter 的路径没有#，HashRouter有， localhost:3000/#/demo
3. 刷新后路由对state参数的影响
   1. BrowserRouter没有任何影响，因为state保存在history对象中
   2. HashRouter刷新后会倒是路由state参数的丢失
4. 注：HashRouter可以用于解决一些路径错误问题
   
## antd 按需引入
ant design of React 安装
```
yarn add antd
```
eject 可以暴露配置
```
yarn eject
```
为了改webpack.config.js 不建议暴露react脚手架配置；
可以 引入 react-app-rewired并修改package.json的启动配置，再新建个文件config-overrides.js修改默认配置。再使用customize-cra 库去执行修改
```
yarn add react-app-rewired customize-cra
```
[参考, ant Design React 在 create-react-app 中使用](https://3x.ant.design/docs/react/use-with-create-react-app-cn#header)

***babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件***

antd 修改样式、自定义主题，安装less，修改config-overrides.js; 如果不成功，试着修改less版本到文档相对的版本
# Redux
redux_test 文件夹中
- $\color{red}{状态管理}$ 的 JS库
- 可以用在react,angular,vue等项目中,但基本与react配合使用
- 作用：集中式管理react应用中多个组件共享的状态
- 使用情况：
  - 互通组件状态
  - 改变组件状态

redux 可以有react-redux和redux
react-redux 模型
  1. 所有UI组件都应该包裹一个容器组件，因为它们是父子关系
  2. 容器组件是真正和redux打交道的，里面可以随意的使用redux的api
  3. UI组件不能使用任何redux的api
  4. 容器组件会传给UI组件： 
     1. redux中所保存的状态
     2. 用于操作状态的方法
  5. 备注：容器给UI床底：状态、操作状态的方法，均通过props传递。

## Redux 三个核心概念
### action 
1. 动作的对象
2. 包含两个属性
   1. type ： 标识属性，值为字符串，唯一，必要属性
   2. data : 数据属性，值类型任意，可选属性

捕获的action
- Object类型的一般对象 - 同步
- 函数 - 异步

store.dispatch() 是View 发出 Action 的唯一办法

### reducer
1. 用于初始化状态、加工状态
2. 加工时，根据旧的state和action，产生新的state的纯函数。

### store
1. 将state、action、reducer联系在一起的对象
2. 
```
// 引入createStore 专门用于创建redux中最为核心的store对象
import { creactStore } from 'redux'

creactStore()
创建store就已经制定了redux
```

### 求和例子
可选择加数
安装redux
```
yarn add redux
```
reducers 只能修改状态但是不能刷新页面，
```
// 单个文件
 componentDidMount() {
    // 检测redux中状态中的变化，只要变化就调用render
    store.subscribe(() => {
      this.setState({}) // 有效率问题
    })
  }

  // 或直接在index.js里面
import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))
// 整个app重加载
import { createRoot } from 'react-dom/client';
// ReactDOM.render(<App />, document.getElementById('root'))
import store from './redux/store'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
// React 18 不支持
// ReactDOM.render(<App />, document.getElementById('root'))

store.subscribe(() => {
  root.render(<App />)
})

```

#### 1.求和简化版
1. 去除Count组件自身状态
2. 创建store，reduce文件  
    - src
      - store.js
      - count_reducer.js
3. store.js 
   1. 引入redux中createStore函数，创建一个store
   2. createStore调用时传入一个为其服务的reducer
   3. 暴露store对象
4. count_reducer.js
   1. reducer本质是一个函数，接收preState, action,返回加工后的状态，
   2. reducer的两个作用：初始化状态，加工状态
   3. reducer第一次调用时，是store自动触发，
      1. 传递的是preState是undefined
      2. 传递的action是{type: '@@REDUX/INIT_a.2.b.4'}
5. 在index.js 中检测store中状态的改变，一旦发生改变重新渲染<App/>
   1. reducer只负责管理状态，至于状态的改变驱动着页面展示需要自己写
```
store.subscribe(() => {
  root.render(<App />) 
})
```

#### 2.求和完整版
新增：
1. count_action.js 创建action对象
2. constant.js 放置常量

#### 3.求和异步action
1. 目的：延迟动作不交给组件自身，交给action
2. 何时需要异步action： 想要对状态精心操作，但是具体的数据需要靠异步任务返回
3. 具体
   1. 中间件 yarn add redux-thunk， 并配置store中
   2. 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
   3. 异步任务有结果后，分发一个同步的action去真正操作数据
   4. 异步action不是必须要写，可以自己等待异步任务的结果了再去分发同步action


#### 4.求和_react_redux基本使用
1. 明确两概念
   1. UI组件不能使用任何redux的api，只负责页面呈现、交互等
   2. 容器组件负责redux通信，将结果交给UI组件
2. 如何创建一个容器 -- 靠react-redux的connect函数
   1. connect(mapStateToProps,mapDispatchToProps)(UI组件)
      1. mapStateToProps 映射状态，返回值是一个对象
      2. mapDispatchToProps 映射操作状态的方法，返回值是一个函数
3. 注：容器中的store是靠props传进去的，而不是在容器组件直接引入
4. 注：mapDispatchToProps也能是一个对象，传入store事件函数

#### 5.求和_求和优化
1. 容器组件和UI组件整合成一个文件
2. 无需自己给容器组件传递store,给<App />包裹一个<Provider store={store}>即可
3. 使用了react-redux后也不用自己检测redux中状态的改变了,容器组件可以自动完成这工作
4. mapDispatchToProps也可以简单写成一个对象
5. 一个组件要和redux"打交道"要经历哪几步
   1. 定义好UI组件 -- 不暴露
   2. 引入connect生成一个容器组件,并暴露,写法如下
   ```
    connect(
      state => ({key: value})
      {key: xxxxAction}
    )(UI组件)
   ```
   3. 在UI组件中通过this.props.xxxx读取和操作状态
   4. 
provider组件是为了不用写store，直接在index.js 里面引入Provider包住<App/>  
为了解决容器组件包住UI组件，多个UI组件则需要写的组件成倍增长问题，整合UI组件和容器组件  
可以一个js文件写两个类.

#### 6.求和_react_redux数据共享
1. 定义一个Person组件，和Count组件数据共享
2. 为Person组件编写：reducer，action，配置constant常量
3. 重点：Person的reducer和Count的Reducer要使用combinReducer进行合并，合并后的总状态试是一个对象
4. 交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”
reducer 中return出去的数据必须有代码面上的改变，不能同一个preState赋值新的return出去，store会觉得没有改变从而不更新
```
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

```
### redux开发者工具
1. 浏览器扩展安装 Redux DevTools
2. 项目安装 yarn add redux-devtools-extension
3. 在store引入
```
import {composeWithDevTools} from 'redux-devtools-extension'

const allRedecer = combineReducers({
  sum: CountReducer,
  personAdd: PersonReducer
})
// 不要异步的话可以不要 
export default createStore(allRedecer, composeWithDevTools(applyMiddleware(thunk)))

```

## 高阶函数和纯函数
### 纯函数
纯函数： 一类特别的函数，返回结果只依赖其参数。只要是同样的输入（实参），必定会得到同样的输出（返回）
**约束：**  
- 不能改写参数数据
- 不会有任何副作用，例如网络请求，输入和输出设备
- 不能调用Date.now()或者Math.random()等不纯的方法
**redux的reducer函数必须是个纯函数**
### 高阶函数
高阶函数: 满足下列任一规范，这个就是个高阶函数
1. 若A函数接收的参数是个函数，那么A可以称为高阶函数
2. 若A函数返回的返回值是一个函数，那么A可以称为高阶函数
  - 常见的有：Promise， setTimeout， setInterval， Array.map
  - 函数柯里化： 通过函数调用返回函数，实现多次接收参数最后统一处理的函数编码形式。

# 扩展
## setState更新状态的2种写法

```
	(1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取
this.setState((state, props) => {
  return {title: state.title + '1'}
}, ()=> {console.log('改变后更新显示')})
```
------

## 2. lazyLoad
路由组件的lazyLoad
1.8
```js
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	import Loading from './Loading' // suspense 的loaing
	const About = lazy(() => import('./About')) 
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Route>
            <Route path="/xxx" element={<About />}/>
            <Redirect to="/login"/>
        </Route>
    </Suspense>
```
注意： lazy(() => import('./About')) 别加东西，加了个大括号报错找了半天问题
---------------

## 3. Hooks

### 1. React Hook/Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

### 2. 三个常用的Hook

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

### 3. State Hook

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
  参数: 第一次初始化指定的值在内部作缓存
  返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
   setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
   setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

```

### 4. Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 

1.8 的销毁是
index.js 暴露root
组件中用root.unmount()销毁组件
```

#### 5. Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```
------
## 4. Fragment

### 使用

	<Fragment key={}><Fragment>
	<></>
  key 参与遍历需要
包一层隐藏

## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```js
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	static contextType = xxxContext  // 声明接收context
	this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 注意

	在应用开发中一般不用context, 一般都用它的封装react插件

<hr/>














# 打包
```
npm run  build
```

# 报错
## You are running `create-react-app` 5.0.0, which is behind the latest release (5.0.1).
版本过低，升级;或按报错解决方案
```
npm uninstall -g create-react-app

npx create-react-app xxx文件名
```
## ReactDOM.render is no longer supported in React 18.
React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，由于React 18 不再支持 ReactDOM.render。在index.js入口文件中改用 createRoot即可消除警告
```
import React from 'react'
// import ReactDOM from 'react-dom' // 旧代码
import App from './App'

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
// ReactDOM.render(<App />, document.getElementById('root'))// 旧代码

```

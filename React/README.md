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
- 字符串形式（不被推荐但能用-效能不高）
- 回调函数形式 （内联函数更新时会调用两次，可忽略）
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
// 创建时间较长

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
css文件中命名加入module,比如index.module.css, 引入
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

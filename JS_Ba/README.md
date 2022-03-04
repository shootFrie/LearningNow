
- [笔记](#笔记)
  - [数据类型判断](#数据类型判断)
  - [事件总线（发布订阅模式）](#事件总线发布订阅模式)
  - [字符串模板](#字符串模板)
    - [部分知识点](#部分知识点)
# 笔记
## 数据类型判断
```
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

typeOf({}); // object
typeOf([]); // array
```
**原理**
- call() 更改this指向， 第一个参数是 this 的指向对象，后面有的都是传入的参数。
```
var name = '小王', age=100;
var obj = {
  name:'张三',
  Age: this.age,
  myFun: function (param, p) {
    console.log(this.name, this.age);
    console.log(param, p, this.Age);
  }
}
var db = {
  age: 98,
  name: '六七'
}
obj.myFun.call(db); 
/* db里面没有Age所以是undefined
  六七 98
  undefined, undefined,undefined
* /

obj.myFun.call(db, 12, "传入参数");
/*
  六七 98
  12 '传入参数' undefined
*/
```
- Object.prototype.toString() 每个对象都有一个toString()方法，返回[Object type]
[Object.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- String.prototype.slice(开始index, 结束index)
  - slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
  - 使用负值作为索引是从后数

## 事件总线（发布订阅模式）
```
class Emitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if(this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    let tasks = this.cache[name]
    if(tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name,once=false, ...args) {
    if(this.cache[name]) {
      let tasks = this.cache[name].slice() //浅拷贝
      for (let fn of tasks) {
        fn(...args)
      }
      if(once) {
        delete this.cache[name]
      }
    }
  }
}

let eventBus = new Emitter() 
let fn1 = function (name, age) {
  console.log(`hello, ${name}, ${age}`)
}
let fn2 = function (name, age) {
  console.log(`hello, ${name}, ${age}`)
}

eventBus.on('aaa', fn1)
eventBus.on("aaa", fn2)
eventBus.emit("aaa", false, "布兰", 12)

```
**原理**
- 发布订阅模式是一种设计模式，可以解决“回调地狱”
![avatar](/JS_Ba/images/发布订阅模式.jpg)
constructor 是每个实例对象都会拥有的一个属性，而且这个属性的实在意义在于一个指针，它指向了创建当前这个实例对象的类。
> 发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。
订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。

> 调度中心为了解耦订阅者和发布者
> 发布订阅者模式是一对多关系
> 发布订阅模式基本会有 消息队列 【前端用 Array】
> 需要的订阅对象去订阅 on
> 订阅对象不再主动触发，被动接收 （发布对象 emit，订阅对象就接收）
这里有一个订阅者、发布者 两个对象，调度中心 一个类
个人理解，前端的发布订阅模式，on是设置多个事件，emit是连续触发多个事件
比如一个按钮绑定了A事件又绑定了B事件，点击后就连续触发AB事件
- find()
该方法主要应用于查找第一个符合条件的数组元素。它的参数是一个回调函数。在回调函数中可以写你要查找元素的条件，当条件成立为true时，返回该元素。如果没有符合条件的元素，返回值为undefined。
- findIndex()
findIndex()与find()的使用方法相同，只是当条件为true时findIndex()返回的是索引值，而find()返回的是元素。如果没有符合条件元素时findIndex()返回的是-1，而find()返回的是undefined。findIndex()当中的回调函数也是接收三个参数，与find()相同。
```
var arr = [1,2,3]
arr.findIndex(function (item) {
  return item > 1
})
// 1
```
- slice
  slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝
  - 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
  - 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
如果向两个数组任一中添加了新元素，则另一个不会受到影响。
- splice()
splice() 方法向/从数组添加/删除项目，并返回删除的项目。
注：splice() 方法会改变原始数组。
1. 创建一个 EventEmitter 类
2. 在该类上创建一个事件中心（Map）
3. on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
4. emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
5. off 方法可以根据 event 值取消订阅（取消订阅）
6. once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
7. 注册一个 newListener 用于监听新的事件订阅


## 字符串模板
```
function render (template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) { // 判断字符串里面是否有模板字符串
    const name = reg.exec(template)[1]; // 查找第一个
    template = template.replace(reg, data[name]); // 替换
    return render(template, data); // 递归的渲染并返回
  }
  return template; 
}
render('你好，{{a}}, {{b}}', {a: 12, b: "笑死"})
```

### 部分知识点
- reg.exec(str) 返回数组
  - ['匹配字符串', index: 第一次出现下标, input: '输入的str', group: ]
- reg.test(str) 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
- str.replace(regexp|substr, newSubStr | function) 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
  - [replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

- \w ,匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]。
- 匹配前面一个表达式 1 次或者多次。等价于 {1,}。
- \w+ 匹配多个
- 注: (\w+) 要单独打括号否则 只会匹配出一个 '{{a}}'

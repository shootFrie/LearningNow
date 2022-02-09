

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
      if (index >= 0) {}
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

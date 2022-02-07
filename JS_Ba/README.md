

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
  constructor
}
```
**原理**
- 发布订阅模式是一种设计模式，可以解决“回调地狱”
![avatar](/JS_Ba/images/发布订阅模式.jpg)
 -  

1. 请说明let、var、const的区别

2. 操作符:“==”与“===”的区别?

3.js对象的原型属性、函数的原型属性分别是什么?

4.浅拷贝与深拷贝的区别?写出一个深拷贝方法

5. Es5跟es6分别如何实现继承

6.以下正则表达式的作用是什么?写出一种匹配该正则的字符串

const reg = /^\d{4}-\d{2}-\d{2}$/


7.ajax请求的时候get和post方式的区别

8. vue中watch、computed 和methods的区别

9. vue组件中的data 为什么是一个函数

10.vue中for循环中不推荐使用index索引作为key值的原因是什么?

11.v-if和v-show的区别

12.虚拟DOM 原理，使用虚拟DOM的好处是什么?

13.如何实现v-model效果，简单的写一下代码实现

14.v-model 跟sync区别

15.如何定义Vue-router的动态路由?

16.vue-router有哪几种导航钩子?

17.写出Vuejs的生命周期

18.export和export default的区别

19.vue-route中history模式跟hash模式的区别?nginx部署时如何配置

20.babel-polyfill主要是用来做什么的?

21.vue要做权限管理该怎么做?如果控制到按钮级别的权限怎么做?

popup:
22.请写出以下程序输出结果

console.log(1)
new Promise(function(resolve)( console.log(2) resolve()
console.log(3)}).then(() =>
{ console.log(4)})
console.log(5)
window.setTimeout(function() { console.log(6)})
console.log(7)
7
23.以下代码输出结果

window.name='window! const obj = {
1. name: 'obj', fun1:function() {
console.log(this.name)}，
fun2;() =>
{ console.log(this.name)
}
}
obj.fun1() obj.fun2()

popup:
以下代码输出结果
function checkAge(data) i if (data w-- ( age:18 1)
(console.log("你的年龄是18"); lelse if (data -- { age: 18 )){ console.log("你的年龄是18吗?");
) else 1
console.log("你的年龄是多少?");

checkAge({ age: 18 });
25.以下代码输出结果

function Person(name, age)
( this.name = name; this.age = age;
this.say = function() {
console.log(`Hi, My age is ${age}')}

Person.prototype.say-function()
{ console.log( Hi, My name is $(this.name!")
const Tom = new Person('Tom', 18) Tom.say()
console.log(Person.prototype e Tom. proto_)

const obj-( fun:
function()
{ console.log(1)

obj._proto_.fun = function(){console.log(2)
)
obj.fun()
delete obj.fun obj.fun()

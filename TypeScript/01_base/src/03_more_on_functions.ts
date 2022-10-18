// 构造函数
type DesctriptFuntion = {
  description: string
  (arg : number) : boolean
}

function doSomething (fn: DesctriptFuntion) {
  console.log(fn.description, fn(3))
  function hi(){}
}

function fn1 (n: number) {
  return !n;
}
fn1.description = 'hi' 
doSomething(fn1) // hi false

const add : (num1:number, num2: number) => void = (num1, num2) => {
// const add : (num1:number, num2: number) : void = (num1, num2) => {
  console.log(num1 + num2)
}

function greeting(fn:(s:string)=>void ) {
  fn('hi')
}
function fn(s:string) {
  console.log(s)
}
greeting(fn)
add(1,2)

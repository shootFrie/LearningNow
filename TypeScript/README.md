- [TypeScript](#typescript)
- [基础概念](#基础概念)
  - [安装](#安装)
  - [入门](#入门)
    - [优化编译](#优化编译)
    - [降级编译](#降级编译)
    - [严格模式](#严格模式)
    - [配置](#配置)
    - [类型](#类型)
      - [枚举 enum](#枚举-enum)
    - [类型谓词 ？？？](#类型谓词-)
# TypeScript
- 视频学习： [TypeScript入门](https://www.bilibili.com/video/BV1H44y157gq?p=3&vd_source=e445d533ca5a2ed3bd70b541b6b2dcf8)


# 基础概念
- 什么是 ECMA
 微软网景等几个公司联合ECMA（European Computer Manufacturers Association）（欧洲计算机制造商协会）组织制定了JavaScript 语言的标准，被称为ECMAScript标准，一年发布一个版本
- 什么是 TypeScript
- JavaScript的静态类型检查器（在代码运行之前运行的工具，又叫静态编译； 能确保程序的类型正确或叫 类型检查）
- 能进行静态类型检查，非异常故障（比如未定义就调用）

## 安装
先安装node, 再安装TypeScript编译器
```
npm install -g typescript
```
试运行，写一个ts文件，运行
```
tsc 01_base.ts
```
运行报错：未对文件 C:\Users\pyw\AppData\Roaming\npm\tsc.ps1 进行数字签名。无法在当前系统上运行该
脚本。  
解决方法:
第一步: get-executionpolicy
第二步: Set-ExecutionPolicy -Scope CurrentUser
第三步: 输入RemoteSigned
成功运行后会生成js文件，再用 node 01_base.js 运行js文件

## 入门
### 优化编译
1. 解决TS和JS冲突问题 (ts文件生成js文件后，ts文件中函数会报 函数实现重复 的错误)
   tsc --init  # 生成配置文件tsconfig.json
2. 自动编译
   tsc --watch
3. 发出错误 (如果ts有错误，是能正常编译成js的。等运行js时才会报错。这里是解决 当ts有错误时，不会编译成js文件)
   oooooooo
   tsc -noEmitOnError --watch # 自动编译并当ts有错误时不会编译成js文件
   tsc -noEmitOnError xx.ts
### 降级编译
在 tsconfig.json 里面可以修改target的值来生成想要输出的js代码版本，比如es2015 是es6
### 严格模式
tsconfig.json 内校验代码
- strict
- noImplicitAny 类型校验，没有显式声明变量，默认推断变量应用了 any 类型。会报错
- strictNullcheck 赋值null校验，给变量赋值null会报错
### 配置 
```json
{
  "compilerOptions": {
      /* Language and Environment */
      "target": "es2022", // 编译生成目标
      /* Modules */
      "rootDir": "./src", // 编译源文件
      /* Emit */
      "outDir": "./dist", // 编译后生成文件
      /* Type Checking */
      "strict": true, // 严格模式
    }
}
```
### 类型
- 基元类型 名称与 typeof 返回的类型的名称相同(undefined, null)
  - number
  - string
  - boolean
- Array
  - 类型[]
  - Array<基元类型>
- any 使用any将禁用所有进一步的类型检查 【不推荐使用】
- 函数 
  - function 函数名(参数名 : 参数类型注释) : 返回值类型注释 {} （返回void就没有return， 可以不写，ts会根据return语句推断函数的返回类型）
    function getName(name: string) : string {return name}
  - 匿名函数会自动指定类型，当一个函数出现在 TypeScript 可以确定它将如何被调用的地方时,函数通过上下文推断传参的类型 这个过程称为上下文类型
    arr.forEach(function(s) {})
  - void 空类型 无返回值
- 对象类型
  - 可选属性 变量后面加个 ?
- 联合类型 |
- 类型别名 type 类型名 = 类型 可以设置类型名
- 接口 interface 命名对象类型 扩展用extends ,用声明同名接口的方式 
  - 类型创建后不可更改，类型扩展用 &
- 类型推论： 没有明确指出类型的地方，ts的类型推论机制会提供类型，可以省略不写类型注解
  - 常见场景：
    - 声明变量并初始化的时候
    - 决定函数返回值的时候
  - 技巧：鼠标放变量上，利用vscode提示查看类型
- 类型断言 可以用来 给值 指定更具体的类型
  - const x = '1' as string
  - const x = <string> '1'
- 文字类型 指定变量使用的文字
  - 数字、字符串、布尔文字类型 可以使用联合类型指定值

- bigint 大的整数 es2020以上才能用
- Symbol() 全局唯一引用
- 元组 Tuple 另一种类型的数组，确切知道包含多少个元素，以及特定索引对应的类型 
  let 变量: [类型名，类型名,...] = [值,值,...]

**函数**  
函数类型实际上指的是： 函数参数 和 返回值 的类型。  
为函数指定类型的两种方式： 
1. 单独指定参数，返回值的类型
```typescript
function getName(name: string) : string {
  return name
}
```
2. 同时指定参数、返回值的类型 [注意：这种形式只适用于函数表达式]
```typescript
//const add : (num1:number, num2: number) : void = (num1, num2) => {
const add: (num:number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
}
function greeter(fn: (a:string) => void) {
  fn("hi")
}
function printConsoleLog(s:string){
  console.log(s)
}
greeter(printConsoleLog)
add(1,2)
```

**接口interface和类型别名type的对比**  
- 相同点： 都可以给对象指定类型
- 不同点： 
  - 接口：只能为对象指定类型
  - 类型别名： 不仅可以为对象指定类型，实际上可以为任意类型指定别名

- 字面量类型
  - 使用模式： 配合联合类型一起使用，表示一组明确的可选值列表
```typescript
let str1 = 'Hello TS'
const str2 = 'Hello TS'
function changeDirection(direaction: 'up' | 'down' | 'left'| 'right') {
  console.log(direction)
}
```
str1 类型是string  
str2 类型是Hello TS  
因为str2 是一个常量，值不能变化，所以类型为： 'Hello TS'  
除字符串外，任意JS字面量（例如 对象 数字等）都可以作为类型使用  
优势： 相比于 string 类型，使用字面量类型更加精确严谨

#### 枚举 enum 
  - 枚举是ts扩展的特性，枚举不仅用作类型，还提供值，其他类型会在编译时被删除，但枚举类型会被编译为JS代码
  - 枚举成员是有值的，默认为： 从0开始自增的值
```Typescript
enum Direction {Up, Down, Left, Right }
function enConsole (dir: Direction) {
  console.log(dir)
}
console.log(enConsole(Direction.Up)) // 0
```
  - 数字枚举 ：枚举成员的值为数字的枚举
```Typescript
enum Direction {Up=2, Down=4, Left=1, Right=3 }
enum CC {Up=2, Down, Left, Right }
```
  - 字符串枚举： 枚举成员为字符串的枚举 [字符串枚举没有自增长行为，字符串枚举的每个成员必须有初始值]
```Typescript
enum Direction {Up='2', Down='4', Left='1', Right='3' }
```

### 类型谓词 ？？？
```TypeScript
function isFish(pet: Fish | Bird) : pet is Fish {}
```
返回类型是一个类型谓词，true或者false




- [TypeScript](#typescript)
- [基础概念](#基础概念)
  - [安装](#安装)
  - [入门](#入门)
    - [优化编译](#优化编译)
    - [降级编译](#降级编译)
    - [严格模式](#严格模式)
    - [配置](#配置)
    - [类型](#类型)
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
   tsc -noEmitOnError xx.ts
   tsc -noEmitOnError --watch # 自动编译并当ts有错误时不会编译成js文件

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
      "target": "es6", // 编译生成目标
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
- 基元类型 名称与 typeof 返回的类型的名称相同
  - number
  - string
  - boolean
- Array
  - 基元类型[]
  - Array<基元类型>
- any 使用any将禁用所有进一步的类型检查
- 函数 
  - function 函数名(参数名 : 参数类型注释) : 返回值类型注释 {} （返回void就没有return， 可以不写，ts会根据return语句推断函数的返回类型）
    function getName(name: string) : string {return name}
  - 匿名函数会自动指定类型，当一个函数出现在 TypeScript 可以确定它将如何被调用的地方时,函数通过上下文推断传参的类型 这个过程称为上下文类型
    arr.forEach(function(s) {})
- 对象类型
  - 可选属性 参数后面加个 ?
- 联合类型 |



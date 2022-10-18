// 类型测试代码
// let num : number = 1;
// let str : string = 'str';
// let bool : boolean = true;

// let arr1 : number[] = [1,2,3];
// let arr2 : Array<string> = ['1','2','3'];

// let obj : any = 's';
// obj = {x:1}

// function getName(name: string) : string {
//   return name;
// }
// console.log(getName('名字'));

// arr1.forEach(function(n) {
//   console.log(n)
// })


// interface 和 type的区别
// interface Animal {
//   name: string
// }
// // 继承
// interface Bear extends Animal {
//   honey : boolean
// }
// const bear : Bear = {
//   name: 'winnie',
//   honey: true
// }
// bear.name
// bear.honey

// type Animal = {
//   name: string 
// }
// type Bear = Animal & {
//   honey: boolean
// }
// const bear : Bear = {
//   name: 'winner',
//   honey: true
// }
// console.log(bear.name,bear.honey)

// 类型断言
// const x = ('hello' as any) as number

// // 类型谓词
// type Fish = {
//   name : string,
//   swim : () => void // 函数
// }

// type Bird = {
//   name : string,
//   fly : () => void
// }

// function isFish(pet: Fish | Bird) : pet is Fish { // 返回类型是boolean，true的话是Fish，false的话是Bird
//   return (pet as Fish).swim !== undefined // as 只是为了让编译通过，再检查是否有swim这个属性
// }
// let bird : Bird = {
//   name: 'acc',
//   fly: () => {console.log(111)}
// }

// console.log(isFish(bird));
// console.log(bird!.name)


// 枚举
enum Direction {Up, Down, Left, Right }
function enConsole (dir: Direction) {
  console.log(dir)
}
console.log(enConsole(Direction.Up)) // 0

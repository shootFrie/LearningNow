// 类型测试代码
let num : number = 1;
let str : string = 'str';
let bool : boolean = true;

let arr1 : number[] = [1,2,3];
let arr2 : Array<string> = ['1','2','3'];

let obj : any = 's';
obj = {x:1}

function getName(name: string) : string {
  return name;
}
console.log(getName('名字'));

arr1.forEach(function(n) {
  console.log(n)
})

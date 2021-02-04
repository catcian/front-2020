let str = 'str'

str = 123

// any 不推荐使用
// 范围没有广泛，运行一部分
// union types 联合类型
let numberOrString: number| string

// 当 ts 不确定联合类型的变量到底是那个类型？
// 此时只能访问联合类型所有类型共有的方法和属性
numberOrString.length
numberOrString.toString()

numberOrString = 'abc'

numberOrString = 123

// 类型断言 主动定义类型 as
function getLength(input: string| number): number {
  const str = input as string 
  if(str.length){
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

// type guard 类型守护
// typeof instanceof
function getLength2(input: string| number): number {
  if(typeof input === 'string'){
    return input.length
  } else {
    return input.toString().length
  }
}
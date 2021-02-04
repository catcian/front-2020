// type alias
let sum: (x: number, y: number) => number
const res = sum(1,2)

// 注意 函数类型 一串不方便
type PlusType = (x: number, y: number) => number

let sum2: PlusType
const res2 = sum2(2, 3)

// 类型即是数字、也可以是字符串
type StrOrNumber = string | number
let res3: StrOrNumber = 3
res3 = 123
res3 = true

// 类型 字符串字面量
const strT : 'name' = 'name2'
const numT : 1 = 1
type DireactionsT = 'Up' | 'Down' | 'Left' | 'Right'// 联合类型 或
let toWhere: DireactionsT = 'Down'

// 交叉类型 合并
interface IName {
  name:string
}
type IPersonT = IName & {age: number}
let personT : IPersonT = { name: '123', age: 123}

/*
  type 类型别名 灵活宽泛，本身不是一种特殊的类型，类似快捷方式
  当使用交叉、组合类型时候，考虑用到类型别名
  interface Duck Typing 的实现方式 是一种独特的类型
*/
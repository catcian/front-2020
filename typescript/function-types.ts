function add(x: number, y: number, z?: number): number{
  if(typeof z === 'number') return x + y + z
  return x + y
}


let result = add(1,2)

const add1 = (x:number, y: number, z?:number): number => {
  if(typeof z === 'number') return x + y + z
  return x + y
}

let add2: (x: number, y: number, z?: number) => number = add1

// interface 可以描述各种类型 描述函数类型
interface ISum {
  (x: number, y: number, z?: number): number
}
let add3: ISum = add1
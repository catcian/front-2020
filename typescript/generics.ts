function echo(arg: any): any{
  return arg
}

// 在函数使用时候，函数的类型推断不会，不会流入到函数体内所以使用表达式没法明确建立类型的绑定，因此用泛型可以打破这个问题
// 传入类型和传出类型无法做到统一，丧失类型
// 同时出现 bug
const result: string = echo(123)
// 泛型：定义函数、接口、类时候，不预先指定具体类型，
// 而是在使用的时候指定类型的一种特征


function echo2<T>(arg: T): T {
  return arg
}

const str: string = '123'
const result2 = echo2(str)

// 类型推论
const reuslt3: string = echo2(true)


function swap<T, U>(tuple: [T, U]): [U, T]{
  return [tuple[1], tuple[0]]
}

const result4 = swap(['string', 123])
result4[0]

// 约束泛型 extends
// 怎么样出现？解决什么问题？
// 泛型 可以看作是一个占位符，在使用的时候，才动态填入确定的类型值
// demo1
function echoWithArr<T>(arg: T): T{

  console.log(arg.length);
  // error 因为在函数内部使用泛型变量时候，由于事先不知道它是那种类型
  // 所以不能随意操作它的属性和方法
  // 泛型 T 不一定包含 length 属性，可以传递任意类型，当然有些不包括length 属性
  // 所以编译报错
  // 决定函数作用给 T 类型的 Arrary
  return arg
  
}

/*
// 但是解决方案不是完美的，
// 只能传入数组，但是可能对象、简单类型的 string 都又 length 属性
*/
function echoWithArr2<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr2([1,2,3])
const arrs2 = echoWithArr2('str')

// 所以需要一个新的解决方案，可以对泛型进行约束约束
// 只运行这个函数包含length属性的变量 这就是约束泛型

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T{
  console.log(arg.length);
  return arg
}

const strL = echoWithLength('str')
const objL = echoWithLength({length: 10, width: 10})
const arrL = echoWithLength([1,2,3])
echoWithLength(123)


// 泛型 在 class 中应用
class Queue {
  private data = []
  push(item){
    return this.data.push(item)
  }
  pop(){
    return this.data.shift()
  }
}
const queue = new Queue()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());// TypeError: queue.pop(...).toFixed is not a function
// 首先允许向队列加入任意类型数据
// 当然数据被弹出队列也可以是任意类型
// 在使用的的时候，会发生无法捕捉的错误
// 弹出第2个类型是 string ，但是调用的只有数字才拥有的方法
// 实际该用法只有 number 类型才加入队列里
// 方法1 直接push 时候增加 number 类型 
//存在问题，想要创建字符串的队列时候，不得不修改相当类型的代码
/*
  class Queue {
  private data = []
  push(item: number){
    return this.data.push(item)
  }
  pop(){
    return this.data.shift()
  }
}
*/

// 方法：无论什么类型被推入队列，被推出类型的和推入类型是一样的
// 泛型类
class Queue2<T>{
  private data = []
  push(item: T){
    return this.data.push(item)
  }
  pop():T{
    return this.data.shift()
  }
}
const queue2 = new Queue2<number>()
queue2.push(1)
queue2.push('str')
console.log(queue2.pop().toFixed());
console.log(queue2.pop().toFixed());

// interface 
interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = {
  key: 1,
  value: "string"
}

let kp2: KeyPair<string, number> = {
  key: 'str',
  value: 2
}

let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3, 'str']
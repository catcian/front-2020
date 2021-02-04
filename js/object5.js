console.log('object5.js');
// 构造函数 操作符 new

// 构造函数 为什么会出现？ 解决什么样的问题？
// 常规的创建对象 字面量形式 {...} 语法创建一个对象
// 但是经常需要创建许多类似的对象，比如多个用户，菜单项
// 实现可复用对象创建代码

// 构造函数 本质上就是普通函数
// 约定：
// 1. 命名以大写字母开头
// 1. 只能由 new 操作符来执行

function User (name) {
  this.name = name
  this.isAdmin = false
}

let user = new User('Jack')

console.log(user.name);// Jack

// 过程
/*
  function User(name){
    // this = {} (1. 隐式创建)

    // 2. 添加属性到 this
    this.name = name
    this.isAdmin = false

    // return this (3. 隐式返回 )
  }

  1. 一个新的空对象被创建分配给 this
  1. 函数体执行，通常会修改 this 为其添加新的属性
  1. 返回 this 值

  =》 new User('Jack') 类型

  let user = {
    name: 'Jack',
    isAdmin: false,
  }
*/

let user2 = new function () {
  this.name = 'John'
  this.isAdmin = false

  // 创建用户其他代码
  // ...
}

// 构造器模式测试 new.target
// 在函数内部，通过 new.target 属性检查它是否被 new 进行调用
// 常规函数调用 返回undefined ，对于使用 new 调用返回该函数
function User3 () {
  console.log(new.target)
}

// 不带 new
User3()// undefined

// new
new User3()// function User3(){...} 等于该函数

/*
  new 调用和常规函数调用相同工作
  function User4 (name) {
    if (!new.target) {
      return new User4(name)
    }
    this.name = name
  }

  let john = User4('John')
  console.log(john.name)// John

*/


// 构造函数 return
// 默认构造函数内没有 return 隐式返回 this
// 如果存在 return 
// 1. return 对象（数组、函数），则会返回这个对象（数组、函数）
// 2 return 原始类型 ，则会忽略

function BigUser () {
  this.name = 'John'
  return { name: 'Godzilla' }
  // return function test () { }
}

let bigUser = new BigUser() // {name: 'Godzilla'}

// 简写
let user5 = new User // 省略括号

// 等同于
// let user5 = new User()

// subject 1
// new A() === new B()
let extelnal = { name: 'catcian' }
function A () {
  return extelnal
}

function B () {
  return extelnal
}

console.log(new A() === new B());// true

// subject 2
/*
创建一个构造函数 Calculator，它创建的对象中有三个方法：
read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
sum() 返回这些属性的总和。
mul() 返回这些属性的乘积。
*/

function Calculator () {
  this.read = function (num1, num2) {
    this.num1 = num1
    this.num2 = num2
  }
  this.sum = function () {
    return this.num1 + this.num2
  }
  this.mul = function () {
    return this.num1 * this.num2
  }
}

let calulate = new Calculator()
calulate.read(1, 10)
console.log(calulate.sum())// 11
console.log(calulate.mul());// 10


// subject 3
/*
创建一个构造函数 Accumulator(startingValue)。
它创建的对象应该：
将“当前 value”存储在属性 value 中。起始值被设置到构造器 startingValue 的参数。
read() 方法应该使用 prompt 来读取一个新的数字，并将其添加到 value 中。
换句话说，value 属性是所有用户输入值与初始值 startingValue 的总和。
*/

function Accumulator (startingValue) {
  this.value = startingValue
  this.read = function (num) {
    this.value += num
  }
}

let accumulator = new Accumulator(10)
accumulator.read(22)
accumulator.read(1)
console.log(accumulator.value)// 33
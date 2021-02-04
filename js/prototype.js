console.log('prototype.js')
// prototype 在javascript 中，函数是可以拥有属性的，并且都有一个特殊属性叫做 prototype
// 原型链 每个对象拥有一个原型对象，对象以原型对象为模板，从原型继承方法和属性。同时原型对象也可能拥有原型，并冲中继承方法和属性，
// 依次，这个关系称为原型链

// 继承
// function Product (name, price) {
//   this.name = name
//   this.price = price
// }

// function Food (name, price) {
//   Product.call(this, name, price)
//   this.category = 'food'
// }

// let cheese = new Food('cheess', 123)
// console.dir(cheese)

function doSomething () { }
doSomething.prototype.foo = 'bar'
console.dir(doSomething)
const doSomethingInstancing = new doSomething()
console.dir(doSomethingInstancing)
// 实例 proto 属性 等于 其构造函数的 prototype 属性
// console.log(doSomethingInstancing.__proto__ === doSomething.prototype)// true
doSomethingInstancing.prop = 'some value'
console.dir(doSomethingInstancing)

// 当访问doSomethingInstancing 的一个属性，浏览器首先会在doSomethinInstancing 上查找，如果没有，
// 浏览器会在doSomethingInstancing.__proto__（也是doSomething.prototype）查找，如果doSomethingInstancing.__proto__存在则会被使用，
// 如果不存在浏览器会去查找doSomethingInstancing.__proto__.__proto__ 继续查找
// 默认所有函数的原型属性__proto__ 就是Object.prototype, 如果上面也没有这个属性，返回undefined
// console.log(doSomething.prototype.__proto__ === Object.prototype)


// constructor
// function A () { }
// console.dir(A)
// var a = new A()
// console.dir(a)
// console.log(a.constructor === A) // true

// 结论：实例对象从原型上继承的constructor，指向用于构造此实例对象的构造函数的


// subject 0
// var F = function () { }
// Object.prototype.a = function () {
//   console.log('a');
// }
// Function.prototype.b = function () {
//   console.log('b');
// }
// var f = new F()
// // f.a()// a
// // f.b()// Uncaught TypeError: f.b is not a function

// F.a()// a
// F.b()// b




// subject 1
// var A = function A () { }
// A.prototype.n = 1
// var b = new A()
// A.prototype = {
//   n: 2,
//   m: 3,
// }
// var c = new A()
// console.log(b.n)// 1
// console.log(b.m)// undefined

// console.log(c.n)// 2
// console.log(c.m);// 3

// TODO 为什么 A.prototype 更换指针，指向{n:2, m:3} 根据js执行过程打印为更换指针时候，显示也是更换指针后的结构 console 存了一个快照

// subject 2

var F = function () { }
console.dir(F)
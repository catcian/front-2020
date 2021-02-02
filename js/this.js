console.log('this.js')
// 原型对象中 this

// 现象
// var story = {
//   process: "unknown",
//   start: function () {
//     this.process = "start"
//   }
// }

// story.start()
// console.log(story.process) // "start"

// var story = {
//   process: 'unknown',
//   start: function () {
//     story.process = 'start'
//   }
// }

// story.start()
// // console.log(story.process)// "start"
// console.dir(story)

// 实际 this 不能完全理解为 story 
// 比如下面情况
// var story = {
//   process: "unknown",
//   start: function () {
//     this.process = "start"
//   }
// }

// var start = story.start
// start()
// console.log(story.process)// "unknown"
// console.log(window.process)// "start"


// 原理
// var Story = function () { }
// console.log('Story: ');
// console.dir(Story)
// console.log('Story.prototype.constructor: ')
// console.dir(Story.prototype.constructor)
// console.log('Stry === Story.prototype.construtor ', Story === Story.prototype.constructor)

// Story.prototype = {
//   process: 'unknwon',
//   start: function () {
//     this.process = 'doing'
//   },
//   end: function () {
//     return this
//   }
// }
// // console.dir(Story)
// var myStory = new Story()
// myStory.start()
// console.log(myStory.process)
// console.log(myStory.hasOwnProperty('process'));// true
// console.log(myStory.hasOwnProperty('start'))// fasle
// console.log(myStory.end())// 返回 myStory


// 结论：原型中的this不是指的原型对象，而是调用的对象

// jQuery
// jQuery.fn = jQuery.prototype = {
//   init: function (selector, context) {
//     var match, elem, ret, doc
//     // Hanlde $(""), $(null), $(undefined), $(false)
//     if (!selector) {
//       return this
//     }
//     // ...
//   }
// }

// Function.prototype.call()
// 通过调用父构造函数的call实现继承，
function Product (name, price) {
  this.name = name
  this.price = price
}

console.dir(Product)

function Food (name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

const cheese = new Food('cheese', 123)
console.dir(cheese)

// Array.prototype.slice()
// 返回一个新的数组对象， 由begin、end决定的原数组的前拷贝，包括begin，不包括end, 原数组不会改变
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// const ani1 = Array.prototype.slice.call(animals, 2)
// const ani2 = animals.slice(2, 4)
// console.log(ani1)// ["camel", "duck", "elephant"]
// console.log(ani2)// ["camel", "duck"]

// Array.prototype.slice.call()
// 通过对象Array转换成新数组
// Array.prototype.slice.call(arguments)
// 将arguments 转换为 数组返回



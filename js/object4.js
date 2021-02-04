// 'use strict'
console.log('object4.js');
// 对象方法 this
// let user = {
//   name: 'John',
//   age: 30,
// }

// user.sayHi = function () {
//   console.log('Hello')
// }

// 简写
// let user1 = {
//   name: 'user1',
//   age: 30,
//   sayHi: function () {
//     console.log('Hello');
//   }
// }

// let user2 = {
//   name: 'user2',
//   age: 30,
//   sayHi () {
//     console.log('Hello');
//   }
// }

// 对象方法 中 this
// let user3 = {
//   name: 'user3',
//   age: 30,
//   sayHi () {
//     console.log(user3.name)// admin3.sayHi() Cannot read property 'name' of null
//   }
// }

// let admin3 = user3
// user3 = null

// 没有对象的情况下调用
// function sayHi () {
//   'use strict'
//   console.log(this == undefined);
// }

// sayHi()
// 非严格模式下 函数内部没有对象调用下 this == window
// 严格模式 this == undefined

// 箭头函数没有自己 'this' 在箭头函数内部访问到的 this 都是从外部获取的
// let user4 = {
//   name: 'user4',
//   age: 30,
//   sayHi () {
//     let arrow = () => console.log(this.name)
//     arrow()
//   }
// }

// subject 1
function makeUser () {
  // 'use strict'
  return {
    name1: 'John',
    ref: this,
  }
}

let sub1 = makeUser()
console.log(sub1.ref.name1)// undefined


function makeUser1 () {
  'use strict'
  return this
}

// console.log(makeUser1().name) // 非严格模式 window.name undefined 严格模式 undefined.name Error: Cannot read property 'name' of undefined

function makeUser2 () {
  return {
    name2: 'John',
    age: 30,
    ref () {
      return this
    }
  }
}
console.log(makeUser2().ref().name2)// Jonh

// subject 2
// read() 提示输入两个值，并将其保存为对象属性
// sum() 返回保存的值的和。
// mul() 将保存的值相乘并返回计算结果。
let calulator = {
  read (num1, num2) {
    this.num1 = num1
    this.num2 = num2
  },
  sum () {
    return this.num1 + this.num2
  },
  mul () {
    return this.num1 * this.num2
  }
}

// subject 3 链式调用
let demo = {
  step: 0,
  up () {
    this.step++
  },
  down () {
    this.step--
  },
  showStep () {
    console.log(this.step)
  }
}

let ladder = {
  step: 0,
  up () {
    this.step++
    return this
  },
  down () {
    this.step--
    return this
  },
  showStep () {
    console.log(this.step);
    return this
  }
}

ladder.up().up().down().showStep()// 1
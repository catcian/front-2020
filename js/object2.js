console.log('object2.js');
// 对象引用 和 复制

// let user = {
//   name: 'John'
// }
// console.log(user)// John console.log 打印的是对象当时的快照，展开对象时，它其实是重新去内存中读取对象的属性值。
// let admin = user // 当对象变量被复制，实际为引用被复制
// // 两个变量，保存的都是同一个对象的引用
// 赋值对象的变量存储的不是对象本身，而是该对象在内存中的地址，也就是存储该对象的引用 

// admin.name = 'Pete' // 通过 admin 引用来修改 对象属性
// console.log(admin)

// // 通过引用来比较
// let a = {}
// let b = a
// console.log(a == b)// true 引用同一对象
// console.log(a === b)// true   

// let a1 = {}
// let b1 = {}// 两个独立的对象
// console.log(a1 == b1)// false

// 克隆 合并
// let user1 = {
//   name: 'John',
//   age: 30,
// }

// method 1
// let clone = {}

// for (const key in user1) {
//   if (Object.hasOwnProperty.call(user1, key)) {
//     clone[key] = user1[key];
//   }
// }

// method 2
// Object.assign
// let clone1 = Object.assign({}, user1)

// 深拷贝
let user2 = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
  eat: function () { }
}

function DeepClone (source) {
  var dest = source instanceof Array ? [] : {}
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      dest[key] = typeof source[key] === 'object' ? this.DeepClone(source[key]) : source[key]
    }
  }
  return dest
}

// JSON.parse(JSON.stringify(source)) 循环引用问题 JSON.stringify(a)
let a = {}
let b = {}
a.b = b
b.a = a

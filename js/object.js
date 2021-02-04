console.log('object.js')
// create
// 构造函数形式
let users = new Object()

// 字面量形式
let user = {
  name: 'John',
  age: 30,
}

// access property
console.log(user.name);

// optertor property
user.isAdmin = true
delete user.age

// 多次属性名
user = {
  name: 'John',
  age: 30,
  "likes birds": true,
}

// 多次属性名 访问
user['likes birds']

// ... delete
delete user['likes birds']

// 字面量 使用方括号 称作计算属性
let fruit = 'apple'
let bag = {
  [fruit]: 5
}

// 属性值简写
function makeUser (name, age) {
  let user = {
    name,
    age,
    category: 'pepole',
  }
}

// 属性名称的限制
// 属性名称不受限制
let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: 'test',// “0”: "test"
}

obj.__proto__ = 5 // 
// 当数字 0 被用做属性名，会转换为字符串
// proto 不能设置为一个非对象的值，否则会被忽略

// 属性存在性检测 in
// javascript 访问任何一个属性，即使属性不存在也不会报错，只会返回undefined，因此如何判断属性是否存在呢？
// console.log('name' in user)// true
// console.log('__proto__' in user);// true
// console.log('hasOwnProperty' in user);// true

// 那么判断属性值为 undefined 不就可以了吗？ 为什么还需要 in？
let o = {
  test: undefined
}
o.test // undefined 
"test" in o // true 属性存在

// Object.prototype.type = 'pepole'
// for in 循环
for (const key in user) {
  console.log(Object.hasOwnProperty.call(user, key), key)
  // if (Object.hasOwnProperty.call(user, key)) {
  //   const element = user[key];

  // }
}

// for in 循环 像对象一样排序
// 整数属性名 转换为整数后，在转化为字符串，还是一样。 “49”

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA",
}

codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",

}
for (const key in codes) {
  if (Object.hasOwnProperty.call(codes, key)) {
    console.log(+key);
  }
}

// 检查空对象
// 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false
function isEmpty (obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      return false
    } else {
      return true
    }
  }
  return true
}

let schedule = {}
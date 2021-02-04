// global objects
const a: Array<number> = [1,2,3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

/*
  右键 Go to Type Definition
 */

// build-in object 内置对象
Math.pow(2,2)

// DOM and BOM
let body = document.body

let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', e => {
  e.preventDefault()
})

// Utility Types 功能型类型
// Partial<T>

interface ICPerson {
  name: string,
  age: number
}

let cat : ICPerson = {name: 'catcian', age: 30}

type IPartial = Partial<ICPerson>
let cat2: IPartial = {}

type IOmit = Omit<ICPerson, 'age'>
let cat3: IOmit = {age: 30}
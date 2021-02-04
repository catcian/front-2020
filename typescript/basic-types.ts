let isDone: boolean = false

let age: number = 10

let firstName: string = 'catcian'

let message:string = `Hello, ${firstName}`

let u: undefined = undefined

let n: null = null

// undefined null 是所有类型的子类型 
let num: number = undefined

// 输入无法确定类型 any
let notSture: any = 4

isDone = 123
notSture = 'maybe a string'
notSture = true

notSture.myName
notSture.getName()
// 数字枚举 [0, ...]
enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}

// 字符串枚举
enum PrimaryColor {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

// 常量枚举 提升性能，不会把枚举编译javascript代码
const enum Direction2 {
  Up,
  Down,
  Left,
  Rigth,
}

console.log(Direction['Up']);// 0

// 枚举反向映射
console.log(Direction[0]);// Up

// javascript 赋值运算符 返回的值是被赋于的值

// 简单字符串比较
const value: string = 'Red'
if(value === PrimaryColor.Red){
  console.log('show Red');
  
}
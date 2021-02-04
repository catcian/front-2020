// 数字枚举 [0, ...]
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
// 字符串枚举
var PrimaryColor;
(function (PrimaryColor) {
    PrimaryColor["Red"] = "Red";
    PrimaryColor["Green"] = "Green";
    PrimaryColor["Blue"] = "Blue";
})(PrimaryColor || (PrimaryColor = {}));
console.log(Direction['Up']); // 0
// 枚举反向映射
console.log(Direction[0]); // Up
// javascript 赋值运算符 返回的值是被赋于的值
// 简单字符串比较
var value = 'Red';
if (value === PrimaryColor.Red) {
    console.log('show Red');
}

interface IPerson {
  readonly id: number;// 只读属性
  name: string;
  age?: number;// ? 可选属性 该属性可以不存在
}

let catcian: IPerson = {
  name: 'catcian',
  // age: 30,
  id: 1,
}

catcian.id = 9527
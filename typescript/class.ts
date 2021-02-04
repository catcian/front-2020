// // 封装
class Animal {
  readonly name: string
  constructor(name) {
    this.name = name
  }
  protected run () {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
snake.name = '123'
console.log(snake.run());

// 继承
class Dog extends Animal {
  bark () {
    return `${this.name} is barking`
  }
}

const xiaogou = new Dog('xiaogou')
console.log(xiaogou.run());
console.log(xiaogou.bark());

// 多态
class Cat extends Animal {
  static categories = ['mammal']
  constructor(name) {
    super(name)
    console.log(this.name);
  }
  run () {
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run());
console.log(Cat.categories);
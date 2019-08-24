//父类
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //this 如果是在子类构造器中调用的父类构造器，父类构造器中的this指向的是子类的实例对象
        // console.log(this); //Dog { name: 'yoo', age: 3 }
    }
    sayName() {
        console.log('Animal中的实例方法', this.name);
    }
    static animalSay() {
        console.log('Animal中的静态方法');
    }
}
Animal.animalAttr = 'Animal中的静态属性';

//继承
class Dog extends Animal {
    constructor(name, age, color) {
        //在子类构造器中调用父类构造器   
        super(name, age);
        //在super底下用this
        this.color = color;
    }
}
let dog = new Dog('yoo', 3, '玫瑰色');
console.log(dog); //Dog { name: 'yoo', age: 3, color: '玫瑰色' }

//原型继承
dog.sayName(); //Animal中的实例方法 yoo

//类继承
Dog.animalSay(); //Animal中的静态方法
console.log(Dog.animalAttr); //Animal中的静态属性

//静态属性和方法的继承
//子类继承父类
console.log(Dog.__proto__ === Animal); //true

//实例属性和方法的继承
//子类的原型对象继承自父类的原型对象
console.log(Dog.prototype.__proto__ === Animal.prototype); //true
//Animal类
class Animal {
    //构造器
    constructor(name, age, color) {
        //this指向新构建出来的实例
        //实例属性
        this.name = name;
        this.age = age;
        this.color = color
    }

    //实例方法
    sayName() {
        console.log('sayName', this.name);
    }

    //静态方法
    static say() {
        console.log('静态方法');
    }
}

//静态属性
Animal.staticAttr = '静态属性';

//创建实例
let animal = new Animal('jack', 1, 'golden');

console.log(animal); //Animal { name: 'jack', age: 1, color: 'golden' }
//访问实例属性和方法
console.log(animal.name); //jack
console.log(animal.age); //1
console.log(animal.color); //golden
animal.sayName(); //sayName jack
Animal.say(); //静态方法
console.log(Animal.staticAttr); //静态属性
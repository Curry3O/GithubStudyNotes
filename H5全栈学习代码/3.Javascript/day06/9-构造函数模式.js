//构造函数模式(自定义构造函数)
function Person(name,age,gender){
	//new Person()
	//this ==> new关键字创建的新实例
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.sayName = function(){
		console.log(this.name);
	}
	//return p;
}
var p1 = new Person('hb',22,'男');
var p2 = new Person('lm',21,'女');
console.log(p1.constructor);
console.log(p1);

function Dog(name,age,color){
	this.name = name;
	this.age = age;
	this.color = color;
}
var dog = new Dog('mm',3,'yellow');
console.log(dog.constructor);
console.log(dog);


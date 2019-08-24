//每个实例自有的属性或方法放在构造函数中，实例共享放到原型对象中
function Person(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.friends = [];
}
Person.prototype = {
	constructor:Person,
	sayName:function(){
		console.log(this.name);
	}
};
var p1 = new Person('hb',22,'男');
console.log(p1);   //Person { name: 'hb', age: 22, gender: '男', friends: [] }
console.log(p1.constructor);   //[Function: Person]
var p2 = new Person('lm',21,'女');
p2.friends.push('yoyo');
console.log(p2);    //Person { name: 'lm', age: 21, gender: '女', friends: [ 'yoyo' ] }
console.log(p2.constructor);   //[Function: Person]
console.log(p1.friends);   //[]
console.log(p2.friends);  //[ 'yoyo' ]
console.log(Person('lili')); //undefined

//使用工厂模式创建对象(批量)
var obj = {
	name:'hb',
	age:22,
	gender:'男'
};
var obj2 = {
	name:'lm',
	age:21,
	gender:'女'
};
function sayName(){
	console.log(this.name);
}

function createObject(name,age,gender){
	var obj = {
		name:name,
		age:age,
		gender:gender,
		sayName:sayName,
	};
	return obj;
}
var o1 = createObject('hb',22,'男');
var o2 = createObject('lm',21,'女');
var dog = createObject('yo',3,'雌');
console.log(o1,o2,dog);
//通过实例找构造函数   实例上调用的原型对象中的constructor属性
console.log(o1.constructor);   //Object
console.log(o1.sayName === o2.sayName); //true

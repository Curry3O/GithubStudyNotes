//每一个构造函数都有一个原型对象
//实例可以调用对应的构造函数中的原型对象的属性和方法
//Object的原型对象
console.log(Object.prototype);  //{}
console.log(Object.prototype.constructor ===Object);  //true
var obj ={
	name:'zhangsan',
	age:22
};
//实例中没有的属性和方法，实际上使用的是原型对象中的属性和方法
console.log(obj.toString()); //[object Object]
console.log(obj.toString === Object.prototype.toString);  //true

//通过实例找构造函
console.log('----');
console.log(obj.constructor);  //[Function:Object]

//in 是否为自有属性或继承属性，是就返回true
console.log('name' in obj);  //true
console.log('toString' in obj);  //true
console.log('aaa' in obj);  //false

//hasOwnProperty() 判断自有属性
console.log(obj.hasOwnProperty('name'));  //true
console.log(obj.hasOwnProperty('toString'));  //false
obj.toString=function(){}; // 如果自己重写了toString属性，返回为true

//是否为自有属性并且可枚举  propertypeIsEnumerable()
console.log(obj.propertyIsEnumerable('name'));
console.log(obj.propertyIsEnumerable('toString'));
for(var key in obj){
	console.log(key);
}    //name age toString

//判断Object.prototype是不是obj的原型对象
console.log(Object.prototype.isPrototypeOf(obj));  //true

//获取当前时间对象
var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());

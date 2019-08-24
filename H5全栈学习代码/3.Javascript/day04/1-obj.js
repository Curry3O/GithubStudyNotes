//构造函数创建对象
var obj = new Object();
//console.log(obj);  //{}
//往对象中添加属性或方法
obj.name = '张三';
obj.age = 12;
obj.sayHi = function(){};
console.log(obj);   //{name:'张三',age:12,sayHi:[function]}

//使用对象字面量声明对象
var obj2 = {
	name:'lili',
	age:22,
	sayHi:function(){}
};
console.log(obj2);

var obj3 = {
	name:'lili',
	age:22,
	sayHi:function(){
		console.log('sayHi');
	}
};
console.log(obj3);
console.log('----');
//通过 . 访问对象中的属性或方法
console.log(obj3.name);  //lili
//如果属性在对象中不存在，不报错，输出undefined
console.log(obj3.gender);  //undefined
console.log(obj3.sayHi);  //[function]
obj3.sayHi();   //运行函数，输出 sayHi
function test(){
	console.log('***');
}
console.log(test);  //[function]
test();  //输出 ***


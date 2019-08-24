let name = 'hb';
let age = 22;
let gender = '男';
let obj = {
	name,
	age,
	gender,
	sayName(){
		console.log('hello');
	},
	sayBye:()=>{
		console.log('bye');
	}
};
//等同于 let obj = {name:name,age:age,gender:gender,sayName:function(){}};  对象内的方法的
console.log(obj); //{ name: 'hb', age: 22, gender: '男',sayName: [Function: sayName], sayBye: [Function: sayBye]}
obj.sayName();  //hello
obj.sayBye();   	//bye
console.log(obj.sayBye.name);  //sayBye
function test(){}
console.log(typeof test.name);  //string


//属性名可以用表达式
//给对象中添加10个属性，以name为前缀，以index为后缀
let obj1 = {};
for(let i=0;i<11;i++){
	obj1['name'+i] = i;
}
console.log(obj1);

let obj2 = {
	['name'+name]:'hello'
};
console.log(obj2);  //{ namehb: 'hello' }
//用上面的name变量值作为属性名
let obj3 = {
	[name]:'hello'
}
console.log(obj3);  //{ hb: 'hello' }
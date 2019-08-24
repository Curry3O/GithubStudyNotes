//值传递
var a = 1;
var b = a;
console.log(a,b);  // 1 1
b = 3;
console.log(a,b); //1 3


//引用传递（址传递)
var obj = {
	name:'hb',
	age:22
};
var obj2 = obj;
console.log(obj,obj2);  //{ name: 'hb', age: 22 } { name: 'hb', age: 22 }
obj2.gender = '男';
console.log(obj,obj2);  //{ name: 'hb', age: 22, gender: '男' } { name: 'hb', age: 22, gender: '男' }

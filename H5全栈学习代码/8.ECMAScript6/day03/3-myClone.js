let obj = {};
let obj1 = {
	name:'hb',
	age:'22',
	friends:[1,2,3]
};
let obj2 = {
	name:'lm',
	gender:'woman',
	sayName:function(){},
	count:{
		time:'2019-8-14'
	}
};
let obj3 = {
	color:'pink',
	weight:100
};

function myClone(target,...tail){
	//tail是一个数组，里面是对象
	tail.forEach(function(item){
		//item 是一个一个的对象
		for(let key in item){
			//处理数组或对象
			if ((Array.isArray(item[key]))||((item[key].constructor)===Object)) {
				target[key] = JSON.parse(JSON.stringify(item[key]));
			}else {
				target[key] = item[key];
			}
		}
	});
	return target;
}
myClone(obj,obj1,obj2);
/*
{ name: 'lm',
  age: '22',
  friends: [ 1, 2, 3 ],
  gender: 'woman',
  sayName: [Function: sayName],
  count: { time: '2019-8-14' } }
*/
console.log(obj);
console.log(obj.sayName === obj2.sayName); //true
console.log(obj.friends === obj2.friends); //false
console.log(obj.count === obj2.count); //false

//测试
let arr = [];
console.log(arr instanceof Object); //true
let fun = function(){}
console.log(arr instanceof Object); //true
let o = {};
console.log(arr instanceof Object); //true

console.log(arr.constructor); //[Function: Array]
console.log(fun.constructor); //[Function: Function]
console.log(o.constructor);  //[Function: Object]
console.log(o.constructor === Object); //true

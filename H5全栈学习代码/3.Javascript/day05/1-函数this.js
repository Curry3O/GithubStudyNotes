//更改this指向，执行函数
function test(a,b){
	console.log(this,a,b);
}
test();  //globai对象    undefined undefined

//更改test内部的this指向为obj
var obj = {name:'hb'};
test.call(obj,3,4);  //obj 3 4
test.apply(obj,[3,4]);  // obj 3 4
console.log('-----');
test.bind(obj); //不执行test函数，只更改this指向,返回了更改了this指向的test函数
test.bind(obj)(5,6);  //执行更改了this之后的test，并且传递了参数5,6
test.bind(obj,7,8)();

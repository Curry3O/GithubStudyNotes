//函数声明
function test(){
	//函数体
	console.log('test');
	//return 后面的语句不会再执行
	return 1;
	console.log('---');
}
test(); // 没有返回值时
//var result = test();
//console.log(result);  //1

//函数表达式声明  匿名函数
var test1 = function(){
	console.log(123);
}
test1();

//匿名函数使用 IIFE立即执行函数 只执行一次
(function(){
	console.log(111);
})();

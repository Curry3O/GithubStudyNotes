function test(a,b){
	return 1;
}
console.log(test.length);  // 2  形参个数
test();

//打印test()运行之后的返回值
console.log(test());  //没有手动写return返回值，就是undefined    这里是返回 1


//函数作为参数
function handle(fun){
	var msg = 'hello';
	fun(msg);
}
handle(function(m){
	console.log(m);
});  //hello

//函数作为返回值
function handle2(){
	return function(){
		console.log(123);
	}
}
handle2()();  //123
//handle2(); 
console.log(handle2());  //[function] 

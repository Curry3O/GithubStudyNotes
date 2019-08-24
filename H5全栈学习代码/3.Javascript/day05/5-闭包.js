//闭包 函数访问上下文中的变量
var arr = [];
for(var i=0;i<5;i++){
	arr[i] = function(){
		console.log(i);
	}
}
arr[0]();    //5
arr[1]();    //5
arr[2]();    //5
arr[3]();    //5
arr[4]();    //5
console.log('-----');
//闭包的解决方案
var arr = [];
for(var i=0;i<5;i++){
	arr[i] = (function(num){
		return function(){
			console.log(num);
		};
	})(i);
}
arr[0]();    //1
arr[1]();    //2
arr[2]();    //3
arr[3]();    //4
arr[4]();    //5

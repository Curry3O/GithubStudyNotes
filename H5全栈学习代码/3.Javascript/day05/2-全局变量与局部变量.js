//在函数内部使用var修饰的变量是局部变量，局部变量在函数外部是访问不到的
//在函数外部声明的变量是当前js文件的全局变量
//在函数内部可以访问全局变量和自己的局部变量
//在函数外部不可以访问局部变量
//在函数内部不使用var修饰的就是全局变量
var a = 1;    //(全局变量)
function test(){
	console.log(a);  // 1
	var b = 2;      //(局部变量)
	c = 3;  //（全局变量)
	console.log(b);   //2
}
test();
console.log(a);    // 1
//console.log(b);   //报错
console.log(c);   //3


var g = 100;
function test1 (){
	console.log(g);
	var g = 200;
	console.log(g);
}
test1();
console.log(g);
//(变量声明提前)上面的代码相当于下面代码:
var g = 100;
function test1 (){
	var g;
	console.log(g);   //undefined
	g = 200;
	console.log(g);    //200
}
test1();
console.log(g);    //100

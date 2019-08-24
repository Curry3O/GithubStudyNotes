//函数声明提升 会提升到代码的最前面
test();  //1
function test(){
	console.log(1);
}
//函数声明提升和变量声明提升
console.log(a);  //undefined
var a = 1;

//先变量声明提升，再函数声明提升
console.log(one);  //[function:one]
function one(){
	console.log('one');
}
var one = 123;
console.log(one); //123

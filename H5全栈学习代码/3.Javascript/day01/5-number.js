var a = 1;
var b = 2.234;
console.log(a,b);
console.log(typeof a);
//八进制
var b = 011;
console.log(b);
//十六进制
var c =0x12;
console.log(c);
var d = 1.2e8
console.log(d);
console.log(5e-5);
//NaN不是一个数值，但属于number类型
var e = NaN;
console.log('--------');
console.log(e);
console.log(typeof e);  //number
var f = 10 /'a' ;
console.log(f);
//两个NaN是否相等,判断一个值是否等于NaN不能使用"=="去判断
console.log(e == f);
console.log(NaN == NaN);   //false ,两个NaN不相等
//用isNaN()函数去判断，括号里填参数。如果是数字(不是NaN,也就是number类型)则返回false，如果不是数字(也就是NaN)则就返回true。
console.log(isNaN(e));
console.log(isNaN(1));
//number的范围
console.log(9/0);               //Infinity(number类型)
console.log(0/10);              //0
console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //5e-324
console.log(3e333);
console.log(typeof Infinity);
console.log(-3e333);
console.log(typeof -Infinity);
console.log(2e-333);
console.log(5e-323);

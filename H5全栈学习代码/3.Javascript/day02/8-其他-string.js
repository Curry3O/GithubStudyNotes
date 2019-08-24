var num = 12;
//转成十进制的字符串
console.log(num.toString());  //12
//转换成2进制
console.log(num.toString(2));  //1100
//转换成8进制
console.log(num.toString(8));  //14
//转换成16进制
console.log(num.toString(16));  //c

var bool = true;
console.log(bool.toString());   //'true'
console.log(false.toString());  //false
//不可直接使用number类型,null类型，undefined类型的值调用toString()
var a = 3;
console.log(a.toString()); //3
//+Number()   数字 加了括号可以调用
console.log((3).toString()); //3
console.log(String(123));  //123
console.log(String(null));  //'null'
console.log(String(undefined));  //'undefined'
console.log(String(true));  //'true'
console.log(typeof String(true));  //string
//将其他基本数据类型使用拼接字符串的形式转换
console.log(123+'');
console.log(true+'');

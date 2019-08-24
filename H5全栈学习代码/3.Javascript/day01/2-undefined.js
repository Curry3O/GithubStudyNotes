var a;
console.log(a);
//typeof进行数据类型的判断
console.log(typeof a);
console.log(typeof undefined);
//undefined类型只有一个值，就是undefined值。
var b = undefined;
console.log('b的值:',b);
console.log('b的数据类型:'+typeof b);
//使用未声明的变量会报错
//变量声明提升
console.log(c); //undefined(相当于 var c )
var c=1;  // 不会报错。
//变量声明提升到代码的第一行，然后在解析执行代码。
console.log(c);  //number(相当于 c=1 )


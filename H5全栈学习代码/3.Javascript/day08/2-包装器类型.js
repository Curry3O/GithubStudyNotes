var n = new Number(123);   //Number实例
console.log(n);   //[Number:123]
console.log(typeof n);  //object
console.log(n instanceof Number);  //true
console.log(n instanceof Object);	//true
var m = 123; //基本数据类型number
console.log(m);  //123
console.log(typeof m);  //number
console.log(m instanceof Number);  //false
console.log(m instanceof Object);	//fales

var o = new Object(123);
console.log(o);   //[Number:123]
console.log(typeof o);  //object
console.log(o instanceof Number);  //true
console.log(o instanceof Object);	//true

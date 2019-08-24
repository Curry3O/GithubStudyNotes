var a = 123;
var b = undefined;
var c ='hello';
var d ='';
var e = 0;
//逻辑与  短路运算符（假：假性值，转换成Boolean类型为false，比如：null，undefined,false,NaN,0,''。
//有假则假，如果遇到假，立即跳出该假；如果没有遇到假，跳出最后一个数；
console.log(a&&b);  //undefined
console.log(d&&e);  //''
console.log(b&&c);  //undefined
console.log(a&&c); //hello
console.log(b&&d); //undefined


//逻辑或，短路运算符
//有真则真，如果遇到真，立即跳出该真；如果没有遇到真，跳出最后一个数。
console.log(a||b); //123
console.log(d||e); //0
console.log(b||c); //hello
console.log(a||c);  //123
console.log(b||d);  //''
console.log(d||e); //0

//逻辑非
// ！将后边的变量或者值转换成boolean类型，然后再取反；
// ！！取反之后再取反，相当于没有取反，只做了boolean类型的转换。
//!!a ==> Boolean(a)
console.log(!!'hello');  //true
console.log(!!''); //false
console.log(!'hello');  //false
console.log(!'');  //true
console.log(!NaN); //true

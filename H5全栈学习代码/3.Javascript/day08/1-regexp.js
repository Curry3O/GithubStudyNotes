var str  = 'hello123world567ae';
var pattern = /[abe]/ig;    //a,b,e任意存在其中一个都行
var pattern1 = /[abe][abe]/ig;    
var pattern2 = /[abe]{2,}/ig;    
var pattern3 = /[^abe]/ig;    //不含a,b,e任意字符串
console.log(str.match(pattern));  //['e','a','e']
console.log(str.match(pattern1));  //['ae']
console.log(str.match(pattern2));  //['ae']
console.log(str.match(pattern3));  //[ 'h', 'l', 'l', 'o', '1', '2', '3', 'w', 'o', 'r', 'l', 'd', '5', '6', '7' ]

var str1 = 'a5d6fd59';
//以字母开头，数字结尾
var pat = /^[a-z].*\d$/g;
console.log(str1.match(pat));
//电话
var pat1 = /^\d{11}$/;
//邮箱
var pat2 = /^([a-z]|[0-9]){3,12}@([a-z]|[0-9]){4,10}\.[a-z]{3,5}$/ig;
var str2 = '1461074099@qq.com';
console.log(str2.match(pat2));

var str = 'aabbaa';
var pattern = /(a){2}..\1{2}/g;
console.log(str.match(pattern));  //['aabbaa']

var str = 'ababa';
var str1 = 'abbaa';
var pat = /([a-z]){2}.\1/;
var pat1 = /([a-z])([a-z]).\1/g;
console.log(str.match(pat));  //['abab']
console.log(str1.match(pat1));  //['abba']
//如果圆括号后边有次数，在使用\n引用的时候，用的是第n个括号最后一次匹配的结果，可以在不加g修饰的match()中的数组中处理第一个之外的其他元素中拿到的

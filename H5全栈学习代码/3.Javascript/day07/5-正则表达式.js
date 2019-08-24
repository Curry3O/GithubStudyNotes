var str = 'HELLO world Hello hello';
var pattern = /hello/ig;
/*
console.log(pattern.test(str));   //false
console.log(pattern.lastIndex);   //0
console.log(pattern.exec(str));   //null
*/

//将匹配到的所有的字符串拿出来放到一个数组中
var arr = [];
while(res = pattern.exec(str)){
	//console.log(res);
	//arr.push(res[0]);
	arr = arr.concat(res);  
}
console.log(arr);   //[ 'HELLO', 'Hello', 'hello' ]

//String类型提供的正则表达式方法match(),返回所有复合条件的元素组成的数组
var result = str.match(pattern);
console.log(result);   //[ 'HELLO', 'Hello', 'hello' ]

//var pattern = /hello/i;
//var pattern = /(hello)/i;
//var result = str.match(pattern);
//console.log(result); 

console.log(str.search(pattern));  //0

var str = 'hello hello hello world';
//将所有的hello字符串替换成js字符串
//replace() 不改变原字符串。返回更改后的字符串
var result = str.replace(/hello/ig,'JavaScript');   //不加g只改变第一个hello
console.log(result,str);

//split返回数组
var str = '12&34&45';
console.log(str.split('&'));   //[ '12', '34', '45' ]
console.log(str.split(/&/));   //[ '12', '34', '45' ]
console.log(str.split(''));    //[ '1', '2', '&', '3', '4', '&', '4', '5' ]

//清除字符串前后的空格
function trim(str) {
	str = str.replace(/^(\s|\u00A0)+/, '');
	for (var i = str.length - 1; i >= 0; i--) {
		if (/\S/.test(str.charAt(i))) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return str;
}
console.log(trim('  236 '));


String.prototype.myTrim = function () {

	return this.replace(/^\s+/, "").replace(/\s+$/, "");

}
var str = '  111 ';
console.log(str.myTrim());





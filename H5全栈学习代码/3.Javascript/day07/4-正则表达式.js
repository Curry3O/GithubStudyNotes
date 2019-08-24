//进行字符串的匹配
var str  = 'HELLOworld hElloword helloworld';
//找hello字符串，如果有返回true，如果没有返回false
var pattern = /hello/ig;
//进行模式匹配
console.log(pattern.lastIndex);  //0
var res = pattern.test(str);
console.log(res);  //true
console.log(pattern.lastIndex);  //5

//exec() 获取匹配到的字符串如果找到返回包含该字符串的数组   如果没有找到返回null
var result = pattern.exec(str);
console.log(result);   // [ 'hello', index: 11, input: 'HELLOworld hElloword helloworld' ]
console.log(result.length);   //1  ['hello']
console.log(result.index);    //11 查找到的字符串开始的位置
console.log(result.input);  //world hElloword helloworld   str字符串



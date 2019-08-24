function test(a,b='2',c,d='1'){}
console.log(test.name);  //test
//形参个数,遇到默认值直接停止,返回长度
console.log(test.length); //1
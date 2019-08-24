var str = 'helloworld javascript';
//贪婪模式(默认)
var pattern = /\w{3,8}/i;
console.log(pattern.exec(str));     //[ 'hellowor', index: 0, input: 'helloworld javascript' ]
//非贪婪模式(懒惰模式)
var pattern = /\w{3,8}?/i;
console.log(pattern.exec(str));    //[ 'hel', index: 0, input: 'helloworld javascript' ]


//   \d?  出现0-1次
//   \d?? 出现0-1次，并改为懒惰模式   \d{2,5}?

//验证电话号码
var str = '123456123456';
var str1 = '18279020810';
var pattern = /^\d{11}$/;  //以十一个数字开始，以十一个数字结束
console.log(pattern.test(str));   //false
console.log(pattern.test(str1));   //true

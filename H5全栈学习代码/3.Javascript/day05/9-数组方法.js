//栈、队列方法
var arr = [1,2,3,4,5,6];
console.log(arr); //[1,2,3,4,5,6]
console.log(arr.push(8)); 7
console.log(arr); //[1,2,3,4,5,6,8]
console.log(arr.pop());  //8
console.log(arr); //[1,2,3,4,5,6]


console.log('数组的长度:',arr.unshift('hello'));  //7
console.log(arr); //[ 'hello', 1, 2, 3, 4, 5, 6 ]
console.log('取出的元素:',arr.shift());  //hello
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]


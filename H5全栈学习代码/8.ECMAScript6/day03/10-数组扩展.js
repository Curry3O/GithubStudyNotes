//Array.from()用于将两类对象转为真正的数组
//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
let temp = {'0':'hi','1':'ni','2':'hao',length:3};
console.log(Array.from(temp));  //[ 'hi', 'ni', 'hao' ]

//Array.of()用于将一组值，转换为数组
let a = Array.of(10);
console.log(a);  //[ 10 ]
let b = Array.of(10,11,12);
console.log(b);  //[ 10, 11, 12 ]

let c = new Array(10);
console.log(c); //[ <10 empty items> ]
let d = new Array(10,11,12);
console.log(d); //[ 10, 11, 12 ]

//去重
let arr = [1,2,3,4,5,6,2,1];
let set = new Set(arr);
console.log(set);  //Set { 1, 2, 3, 4, 5, 6 }
//转成数组
console.log(Array.from(set));  //[ 1, 2, 3, 4, 5, 6 ]
console.log([...set]);  //[ 1, 2, 3, 4, 5, 6 ]
//数组去重  合起来 
console.log([...new Set(arr)]);	//[ 1, 2, 3, 4, 5, 6 ]


//find  findIndex 迭代方法
//返回第一个符合条件的元素或undefined
let res = arr.find((item)=>{
	return item>3;
});
console.log(res);  //4

//findIndex
//返回第一个符合条件的元素的索引或-1
let res1 = arr.findIndex((item)=>{
	return item>3;
});
console.log(res1);  //3
//slice 数组切割，不改变原数组
//参数为一个从开始位置截取到末尾。两个参数从开始到结束位，不包括结束位。
//返回值：截取出来的元素组成的元素
var arr = [123,34,5,67,3,6,8];
var result = arr.slice(2);
var result1 = arr.slice(2,4);
console.log(result);  //[ 5, 67, 3, 6, 8 ]
console.log(result1);  //[5,67]
console.log(arr);    //[ 123, 34, 5, 67, 3, 6, 8 ]


//splice  可以进行删除、插入、替换  
//两个参数：splice（开始位置，删除项数）
//三个参数：splice（开始位置，删除项数，添加的元素）
//返回值：删除的元素组成的数组
//改变原数组
var arr1 = [32,4,9,3,0];
//删除
var res = arr1.splice(1,3);
console.log(res);  //[ 4, 9, 3 ]
console.log(arr1);  //[ 32, 0 ]

//插入
arr1.splice(1,0,'hello','ss');
console.log(arr1);  //[ 32, 'hello', 'ss', 0 ]

//替换
arr1.splice(1,2,1,2);  
console.log(arr1);  //[ 32, 1, 2, 0 ]

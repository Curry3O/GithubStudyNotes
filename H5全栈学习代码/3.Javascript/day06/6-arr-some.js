var arr = [{
	name:'hb',
	age:20
},{
	name:'lm',
	age:12
},{
	name:'xbb',
	age:13
}];
console.log(arr);
//都是成年人返回true
var res = !(arr.some(function (item,index,arr){
	return item.age<18;
}));
console.log(res);  //false
//是否有未成年人，有返回true
var result = arr.some(function(item,index,arr){
	return item.age<18;
});
console.log(result);  //true


//filter  不会改变原来的数组
//过滤所以成年人和未成年人
var res1 = arr.filter(function(item,index,arr){
	return item.age>=18;
});
console.log(res1);

var res2 = arr.filter(function(item,index,arr){
	return item.age<18;
});
console.log(res2);

//map 查找出所有人的名字
var res3 = arr.map(function(item,index,arr){
	return item.name;
});
console.log(res3);
//所有人年龄乘以2
var res4 = arr.map(function(item,index,arr){
	return item.age*2;
});
console.log(res4);

//查找所有未成年人的名字
var res5 = arr.filter(function(item,index,arr){
	return item.age<18;
}).map(function(item,index,arr){
	return item.name;
});
console.log(res5);

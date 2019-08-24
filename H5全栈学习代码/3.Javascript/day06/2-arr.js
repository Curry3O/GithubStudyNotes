//concat  数组的拼接  不改变原数组，创建副本。如果参数是数组，展开放进去。如果参数是其他类型，直接放到末尾，返回副本。
var arr = [3,4,5,2,4];
var arr2 = [1,2,3,4,5];
//arr.push(arr2);
//console.log(arr);  //[ 3, 4, 5, 2, 4, [ 1, 2, 3, 4, 5 ] ]
/*
if(Array.isArray(arr2)){
	for(var i=0;i<arr2.length;i++){
		arr.push(arr2[i]);
	}
}
console.log(arr);
*/
//不改变原数组
var result = arr.concat(arr2);
console.log(result);
var result2 = arr.concat('hello');
console.log(result2);

Array.prototype.myConcat = function(param){
	//	创建副本
	var temp = [];
	for(var i=0;i<this.length;i++){
		temp.push(this[i]);
	}
	//判断参数数据类型
	if(Array.isArray(param)){
		for(var j=0;j<param.length;j++){
			temp.push(param[j]);
		}
	}else{
		temp.push(param);
	}
	return temp;
}
console.log('---');
var res = arr.myConcat([6,7,8,9]);
var res1 = arr.myConcat('hello');
console.log(res);
console.log(res1);
console.log(arr);
//slice  数组的截取
//splice  数组元素的删除、插入、替换

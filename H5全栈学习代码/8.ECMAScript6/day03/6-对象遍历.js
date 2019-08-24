let obj = {
	name:'hb',
	age:22
};
//for-in遍历对象
//返回属性名组成的数组
let keys = Object.keys(obj);
console.log(keys);  //[ 'name', 'age' ]
let values = Object.values(obj);
console.log(values);//[ 'hb', 22 ]
//返回key-values键值对组成的数组
let entries = Object.entries(obj);
console.log(entries);//[ [ 'name', 'hb' ], [ 'age', 22 ] ]
//for-of遍历 可以遍历数组、entries等 不能直接遍历对象，遍历对象用for-in或for-of遍历entries
for(let [key,value] of entries){
	console.log(key,value);
}
//name hb
//age 22

//遍历数组
let arr = [1,2,3,4,5];
for(let item of arr){
	console.log(item);
}
//1 2 3 4 5

//遍历entries
for(let [key,valuse] of Object.entries(obj)){
	console.log(key,value);
}
//name hb
//age 22

//遍历类数组
function test(){
	for(let item of arguments){
		console.log(item);
	}
}
test(1,2,3);
//1 2 3


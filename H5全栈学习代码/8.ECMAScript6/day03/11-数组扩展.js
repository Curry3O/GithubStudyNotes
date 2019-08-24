let arr = [1,2,3];
//数组填充
/*console.log(arr.fill(9)); */ //[ 9, 9, 9 ]
console.log(arr);  //[ 9, 9, 9 ]

//是否包含某个元素,返回true/false
console.log(arr.includes(2));  //true

//数组实例的遍历  keys valuse entries
/*let keys = arr.keys();
console.log(keys); //Object [Array Iterator] {}  返回迭代器对象

let values = arr.values();  
console.log(values);  //Object [Array Iterator] {}

let entries = arr.entries();
console.log(entries); //Object [Array Iterator] {}*/


let keys = arr.keys();
console.log(keys); 
for(let key of keys){
	console.log(key);
}
//0
//1
//2

let values = arr.values();  
console.log(values); 
for(let key of values){
	console.log(key);
} 
//1
//2
//3

let entries = arr.entries();
console.log(entries);
for(let [key,value] of entries){
	console.log(key,value);
} 
//0 1
//1 2
//2 3
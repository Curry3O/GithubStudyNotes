/*let {a,b} = {a:1,b:2};
console.log(a,b); //1 2*/

let {name,age} = {
	name:'hb',
	sex:'男',
	age:22,
};
console.log(name,age); //hb 22

let {name:myName,age:myAge,address:myAddress='江苏'} = {
	name:'hb',
	sex:'男',
	age:22,
};
console.log(myName,myAge,myAddress); //hb 22 江苏

let {toString: s} = true;
console.log(s);	//[Function: toString]

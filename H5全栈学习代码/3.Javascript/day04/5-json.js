//对象序列化
var obj = {
	name:'hb',
	age:'22'
};
console.log(obj);
console.log(JSON.stringify(obj));
//反序列化
var str = '{"name":"hb","age":"22"}';
console.log(JSON.parse(str));

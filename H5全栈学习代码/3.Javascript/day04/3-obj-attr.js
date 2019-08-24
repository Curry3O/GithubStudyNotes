var obj = {
	name:'hb',
	age:12
};
//通过 . 访问对象的属性
console.log(obj.name);
//通过[]访问对象的属性
//中括号中没有使用引号包裹的当做变量处理
console.log(obj['name']);
//console.log(obj[age]);  会报错,改进方法如下：
var age = 'age';
console.log(obj[age]);
//遍历对象  for-in循环
for(var key in obj){
	//key-->属性名-->变量
	//obj.key 访问的是obj中key属性的值。 undefined
	console.log(key,'---',obj[key]);
}


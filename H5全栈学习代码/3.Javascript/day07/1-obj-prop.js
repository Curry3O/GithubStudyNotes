//对象的属性的特征
var obj = {
	name:'hb',
	age:22
};
console.log(obj);  //{name:'hb',age:22}  键值对 key-value 属性-属性值
//获取属性的描述信息
console.log(Object.getOwnPropertyDescriptor(obj,'name'));

//修改属性的描述信息 ，修改属性的默认特性
//Object.defineProperty(obj,'name',{enumerable:false}); //设置枚举属性，设置obj的name属性的可枚举属性设置成不可枚举
//设置是否可修改值
//Object.defineProperty(obj,'name',{writable:false}); //name的属性值改不了
Object.defineProperty(obj,'name',{writable:true}); 
obj.name = 'lm';   //修改失败
//重新修改值
//Object.defineProperty(obj,'name',{value:'lm'});   //将name属性值设置成 lm
//设置是否可使用delete删除，是否可重新定义，是否可配置
//Object.defineProperty(obj,'name',{configurable:false});   //不可删除
Object.defineProperty(obj,'name',{configurable:true});   
//delete obj.name; //删除名字，但操作失败
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'name'));


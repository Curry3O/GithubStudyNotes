//访问器属性没有值，有get和set方法
var obj = {
	name:'hb',
	age:22,
	_weight:100,
};
Object.defineProperty(obj,'weight',{
	get:function(){
		//获取值
		return this._weight-5;
	},
	set:function(param){
		//设置值
		this._weight = param;
	},
	configurable:true
	//enumerable:true
});
//Object.defineProperty(obj,'_weight',{enumerable:false});
Object.defineProperties(obj,{weight:{enumerable:true},_weight:{enumerable:false}});
console.log(obj.weight);   //95
obj.weight = 130;
console.log(obj.weight);   //125
console.log(obj._weight);   //130
console.log(obj);
//查看weight和_weight的描述器信息
console.log(Object.getOwnPropertyDescriptor(obj,'weight'));
console.log(Object.getOwnPropertyDescriptor(obj,'_weight'));

//this指向当前函数的作用域
function test(){
	console.log(this);  //global 全局对象(凌驾于所以对象之上）
	//如果测试环境是浏览器，指向的是window对象
}
test();

var obj ={
	name:'hb',
	age:22,
	sayName:function(){
		console.log(this); //obj
		console.log(this.name);
	}
};
obj.sayName();

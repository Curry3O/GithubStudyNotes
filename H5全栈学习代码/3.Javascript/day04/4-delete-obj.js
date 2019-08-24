var obj = {
	id:1001,
	name:'zhangsan',
	age:12,
	gender:'男',
	info:'',
	hibby:null,
	address:''
};
console.log(obj);
//删除对象中的属性
delete obj.address;
console.log(obj);
for(var key in obj){
//如果obj[key]转换成boolean为false
	if(!obj[key]){
		delete obj[key];
	}
}
console.log(obj);

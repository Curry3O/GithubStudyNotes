//every
var arr = [23,45,1,4,3,45,7];
var res = arr.every(function(item,index,arr){
	console.log(this);  //{}
	return item>20;
},{});
console.log(res);   //false


Array.prototype.myEvery = function(fun,funThis){
	//this ---> arr
	var result;
	for(i=0;i<this.length;i++){
		var result = fun.call(funThis,this[i],i,this);
			if(!result){
				break;
			}
	}
	return result;
}
var res = arr.myEvery(function(item,index,arr){
	console.log(this);  //{}
	return item>0;
},{});
console.log(res);   //true

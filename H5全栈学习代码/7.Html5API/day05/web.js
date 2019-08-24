//后台线程
onmessage = function(event){
	//主线程给后台线程的参数
	var num = event.data;
	var total = 0;
	for(var i=0;i<num;i++){
		total += i;
	}
	//将运算结果返回给主线程
	postMessage(total);
	
}
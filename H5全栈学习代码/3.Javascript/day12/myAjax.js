function myAjax(method,url,param,handle,handle2){
	//后台服务器的地址和后台代码的端口号
	var baseURL = 'http://134.175.154.93:8099';
	//param是前端传递给后台的参数
	//handle当内部的异步执行成功的回调函数，在这个回调函数里需要将后台返回的数据给handle(成功回调函数)
	//handle2失败回调函数
	var http = new XMLHttpRequest();
	//处理get有参的情况
	if (method ==='GET'&&param) {
		url += '?' + encodeFormData(param);
	}
	http.open(method,baseURL+url);
	http.onreadystatechange = function(){
		if (http.status === 200&&http.readyState === 4) {
			console.log('访问成功');
			handle(JSON.parse(http.responseText));
		}if(http.status !== 200){
			console.log()
		}
	}
	//处理post有参情况
	if (method ==='POST'&&param) {
		//设置Content-Type为表单形式
		http.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		//发送表单格式的数据
		http.send(encodeFormData(param));
	}else {
		http.send();
	}
}
function encodeFormData(data){
	if(!data){
		return "";
	}
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name)){
			continue;
		}
		if(typeof data[name] == "function"){
			continue;
		}
		var value = data[name].toString();
		name = encodeURIComponent(name.replace("%20","+"));//编码名字
		value = encodeURIComponent(value.replace("%20","+"));//编码值
		pairs.push(name+"="+value);
	}
	return pairs.join('&');
}
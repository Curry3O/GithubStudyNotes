var arr = [30,11,35,9,23,34,6];
for(var i=0;i<arr.length-1;i++){
	for(var j=0;j<arr.length-1-i;j++){
		if(arr[j]>arr[j+1]){
			temp = arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;
		}
	}
	
	console.log('第'+(i+1)+'轮的排序结果：'+arr);
}
console.log(arr);


var array=[23,4,56,232,9,100];
for(var i=0;i<array.length;i++){
	for(var j=0;j<array.length-1;j++){
		if(array[j]>array[j+1]){
			var temp = array[j];
			array[j]=array[j+1];
			array[j+1]=temp;
		}
	}
	console.log('第'+(i+1)+'轮的排序结果：'+array);
}
console.log(array);

//初始化条件执行了1次
//结束条件判断了11次
//迭代条件执行了10次
for (var i=1;i<=10;i++){
	console.log(i);
}
console.log(i);

var j = 1;
for(;j<11;){
	console.log(j);
	j++;
}

//死循环
var count = 0;
fun:for(;;){
	console.log(count);
	count++;
	if(count==5){
		continue fun;
	}
	console.log('---------');
	if(count==20){
		break fun;
	}
}
console.log('count值是:'+count);

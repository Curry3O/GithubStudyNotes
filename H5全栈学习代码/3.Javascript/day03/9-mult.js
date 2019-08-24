var num = 5;
var mult = 1;
var str = '';
for(var i=num;i>0;i--){
	mult*=i;
	if(i==1){
		str +=i;
	}else{
		str +=i+'*';
	}
}
console.log(str+'='+mult);

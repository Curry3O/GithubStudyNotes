var result = 5>3?2:0;
console.log(result); //2

var result;
if(5>3){
	result = 2;
}else{
	result = 0;
}	
console.log(result);

var a = 'hello';
a?console.log('123'):console.log('345');  //123
0?console.log('123'):console.log('345');  //345



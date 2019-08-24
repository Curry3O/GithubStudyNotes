var grade = '93';
var result = '';
grade = (!isNaN(grade)?grade:NaN)
console.log(grade);
if((grade>=0)&&(grade<=100)){
	if(grade<60){
		result = '不及格';	
	}else if(grade>=60&&grade<=70){
		result = '中';
	}else if(grade>=70&&grade<=90){
		result = '良';
	}else{
		result = '优';
	}		
}else{
	console.log('成绩出错，请更改!');
}
console.log(result);

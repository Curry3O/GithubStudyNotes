var arr = [23,454,12,33,12,56,90];
//反转方法(反转后数组改变)
console.log(arr); // [23,454,12,33,12,56,90]
/*
console.log(arr.reverse());  //[ 90, 56, 12, 33, 12, 454, 23 ]
console.log(arr);  //[ 90, 56, 12, 33, 12, 454, 23 ]
*/

//排序(排序完数组改变)

console.log(arr.sort());
console.log(arr);  //[ 12, 12, 23, 33, 454, 56, 90 ]
console.log(arr.sort(com));
console.log(arr);  


function com(a,b){
	//升序
	//return a - b;  //a-b<0  a-b负数  说明a<b   不交换位置    a-b>0  说明a>b  a-b正数  交换位置 ----> 升序排列
	/*if(a<b){
		return -1;   //负数不交换位置
	}
	return 1;*/

  //降序
	//return b - a;
	if(a>b){
		return -1;
	}
	return 1;
}


var stus = [{name:'hb',age:22},{name:'lm',age:21}];
//按照name排序
//按照age排序
//万能比较排序

console.log(stus);
//stus.sort(compare('name','升序'));
stus.sort(compare('age','升序'));
console.log(stus);

function compare(attr,rules){
	return function(o1,o2){
		if(rules==='升序'){
			if(o1[attr]<o2[attr]){
				return -1;
			}
			return 1;
		}else{
			if(o1[attr]>o2[attr]){
				return -1;
			}
			return 1;

		}
	}
}

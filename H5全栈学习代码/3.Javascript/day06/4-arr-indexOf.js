//indexOf() 从数组开头开始查找，找打元素返回索引，找不到返回-1
//第一个参数表示查找的元素，第二个参数表示开始查找的位置
var arr = [2,5,67,'2',3,2,45];
console.log(arr.indexOf(2));  //0
console.log(arr.indexOf(22));  //-1
console.log(arr.indexOf(2,1));  //5
/*
如果数组中有什么将.....
if(arr.indexOf(n)!=-1){}
*/

//lasyindexOf()  从数组尾向前查找
console.log(arr.lastIndexOf(2));  //5
console.log(arr.lastIndexOf(2,3));  //0


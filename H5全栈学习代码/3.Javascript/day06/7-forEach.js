//forEach  数组遍历
var arr = [{
name:'hb'
},{
name:'lm'
},{
name:'mm'
}];
var ageInit = 10;
arr.forEach(function(item,index,arr){
//console.log(item,index,arr);
item.age = ageInit++;
});
console.log(arr);

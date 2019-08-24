var num = 12.3;
//向上取
console.log(Math.ceil(num));   //13
//向下取  parseInt
console.log(Math.floor(num));  //12
//四舍五入
console.log(Math.round(13.6));  //14
console.log(Math.round(13.2));  //13

//随机数
console.log(Math.random());  //[0,1)
//前世今生
var arr = ['李白','貂蝉','西施','杨玉环','妲己','虞姬','孙悟空','司马懿','张良','凯'];
//随机数  --> 数组的下标  [0,1)  [0,10)
var index = Math.floor(Math.random()*arr.length);
console.log(arr[index]);
//ES5
//最小值
console.log(Math.min(23,45,23,52,6));
//最大值
console.log(Math.max(23,45,23,52,6));
//ES6  解构   babel
//console.log(Math.max(...[23,45,23,52,6]));


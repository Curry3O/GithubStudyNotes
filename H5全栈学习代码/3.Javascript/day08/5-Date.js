//日期对象 Date
//没有参数当前时间的日期对象   有时间戳参数将时间戳转换成js的Date类型
var date = new Date(1563355259000);
console.log(date);

//获取年份 月  日  时  分  秒
//时间戳   秒时间戳   毫秒时间戳    两者相差1000
//将时间戳转换成js的Date对象，获取年月日时分秒展现出来
//2019-07-17 17:19:30
console.log(date.getFullYear());  //2019
console.log(date.getMonth()+1);  //7
console.log(date.getDate());  //17
console.log(date.getHours());  
console.log(date.getMinutes());  
console.log(date.getSeconds()); 

var month = date.getMonth()+1;
month = month<10?'0'+month:month;
var day = date.getDate();
day =day <10?'0'+day:day;
var month = date.getMonth()+1;
month = month<10?'0'+month:month;
var month = date.getMonth()+1;
month = month<10?'0'+month:month;

//一天86400秒
//将js的date转成时间戳，要传递给后天
console.log((new Date()).getTime());

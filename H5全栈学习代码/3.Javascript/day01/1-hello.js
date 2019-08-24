var a = 'hello world';
var b = "Hello World";
console.log(a);
if (NaN === NaN) {
    console.log(1);
} else {
    console.log(2);
}

var a = 100;

function test() {
    console.log(a); //100
    a = 10; //去掉了var 就变成定义了全局变量了
    console.log(a); //10
}
test();
console.log(a); //10

//冒泡
var array = [5, 4, 3, 2, 1];
var temp = 0;
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);









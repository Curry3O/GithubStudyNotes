//普通函数
function test() {
    console.log(this);
}

/*test(); //Object [global]
console.log(this);  //module.exports 模块倒出对象,它默认是一个空对象  {}
console.log(this === module.exports); //true*/

//箭头函数
//箭头函数内部没有自己this,this指向箭头函数声明时父作用域中的this
let test2 = () => {
    console.log(this);
}

// test2();  //{}

let obj = {
    test,
    test2
};
obj.test(); //obj   { test: [Function: test], test2: [Function: test2] }
obj.test2(); //{}

//箭头函数内部的arguments不保存实参
/*let test3 = ()=>{
	console.log(arguments);
}
test3(1,2,3); //[Arguments]*/

let test4 = function() {
    console.log(arguments);
}
test4(1, 2, 3, 4); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

let test5 = () => {
    console.log(arguments);
}
test5(1, 2, 3, 4); //[Arguments]
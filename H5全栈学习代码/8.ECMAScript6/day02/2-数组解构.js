/*let [a,b,c] = [1,2,3,4,5];
console.log(a,b,c); //1 2 3  */

/*let [a,[b],c] = [1,[2,3,4],5];
console.log(a,b,c);  //1 2 5*/

//保存数组剩余的值  使用扩展运算符...
/*let [a,b,c,...d] = [1,2,3,4,5,6,7];
console.log(a,b,c,d);  //1 2 3 [ 4, 5, 6, 7 ]*/

//扩展运算符可以将数据展开
/*let res = Math.max(2,4,7,92,6);
console.log(res);  //92
let result = Math.max(...[1,2,3,4,5,6,7]);
console.log(result);  //7
console.log(...[1,2,3,4,5,6,7]); //1 2 3 4 5 6 7*/
//不要单独去使用扩展运算符展开数组，可以在参数那里使用
//将参数数组转成参数列表 如果扩展运算符后边跟的是变量，
//那么接受多余的数据放置数组中
//rest参数--->不再推荐使用arguments
/*function test(...tail){
	//获取所有的实参，然后累加
	//tail = [1,2,3,4,5];  rest参数
}
test(1,2,3,4,5);*/

//默认值解释
/*let [a,b] = [];
console.log(a,b); //undefined undefined
let [c=1,d=2] = [];
console.log(c,d);  //1 2
//当解构完成之后变量严格等于undefined时默认生效
let [e=1,f=2] = [3,4];
console.log(e,f);  //3 4*/

function test() {
    console.log('test');
    return 2;
}
//默认值赋值的时机
//先去判断解构的值有没有  如果有进行赋值，如果没有进行默认值的赋值
let [g = test] = []; //[Function: test]
console.log(g);
let [h = test] = [1]; //1
console.log(h);
let [i = test()] = [1];
console.log(i); //1
let [j = test()] = [];
console.log(j); //2
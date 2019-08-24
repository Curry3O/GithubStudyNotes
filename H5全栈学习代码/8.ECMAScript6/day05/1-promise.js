const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);
// console.log($.ajax); //[Function: ajax]

let p = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(error) {
            reject(error);
        }
    });
});
//1.如果传递的参数是promise对象不做任何操作原样返回
let p1 = Promise.resolve(p);
/* p1.then((res) => {
    console.log(res, '+++');
}).catch((error) => {
    console.log(error, '---');
}).finally(() => {
    //无论异步操作结果是什么都会执行
    console.log('ending');
}); */


//2.参数不是thenable对象

//thenable对象：内部有then方法的对象
/* let obj = {
    a:1,
    then(){}
} */
//非thenable对象：内部没有then方法的对象
//如果参数是非thenable对象，那么返回resolve状态的promise对象
//既然返回的是resolve状态的promise对象，那么内部执行了resolve函数
//因为在执行了resolve函数之后，promise对象的状态才由pending->resolve
let p2 = Promise.resolve('hello');
/* p2.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
}); */
//resolve



//3.参数是thenable对象

/* let obj = {
    name: 'hb',
    then() {
        console.log('obj的then方法');
    }
};
let p3 = Promise.resolve(obj); */
//obj的then方法



//4.参数为空

/* let p4 = Promise.resolve();
p4.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
}); */
//resolve


//reject
let p5 = Promise.reject('hello');
p5.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
});
//reject
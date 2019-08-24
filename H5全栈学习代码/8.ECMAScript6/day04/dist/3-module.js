'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('default');
};

//需要导出内容让其他模块使用
var a = 1;
var b = 2;
var test = function test() {
    console.log('test');
};
console.log('3-module...');

//导出
/* export { a, b, test };
export let m = 10;
export function say() {
    console.log('say');
} */

//默认导出  一个文件中只能存在一个export default  可以与export{}共存
/* export default function() {
    console.log('default');
}; */
//导出对象
/* export default {
    name: 'hb',
    age: 22
}; */

/* let m = 100;
export default m; */
;
var n = exports.n = 10;
var c = exports.c = 11;
var d = exports.d = 1;
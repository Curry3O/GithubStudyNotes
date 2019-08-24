//需要导出内容让其他模块使用
let a = 1;
let b = 2;
let test = () => {
    console.log('test');
}
console.log('3-module...');

//导出
//在一个模块中，export可以调用多次
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
export default function() {
    console.log('default');
};
export let n = 10;
export let c = 11;
export let d = 1;
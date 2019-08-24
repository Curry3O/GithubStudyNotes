//Set集合
let set = new Set();
console.log(set); //Set {}

//size属性返回个数
console.log(set.size); //0

//添加数据
set.add(1);
set.add(1);
set.add(2);
set.add('hello');
console.log(set); //Set { 1, 2, 'hello' }
console.log(set.size); //3

//删除
// set.delete(1);
// console.log(set); //Set { 2, 'hello' }

//清空
// set.clear();
// console.log(set); //Set {}

//遍历
let keys = set.keys();
console.log(keys); //[Set Iterator] { 1, 2, 'hello' }    迭代器对象
let values = set.values();
console.log(values); //[Set Iterator] { 1, 2, 'hello' }  迭代器对象
//遍历values
// for (let value of values) {
//     console.log(value); //1  2  hello
// }
/*
console.log(values.next()); //{ value: 1, done: false }
console.log(values.next()); //{ value: 2, done: false }
console.log(values.next()); //{ value: 'hello', done: false }
*/

//遍历迭代器对象
//Iterator对象可以使用for-of遍历，自己写代码遍历
while (true) {
    let res = values.next();
    if (res.done) {
        break;
    } else {
        console.log(res.value); //1  2  hello
    }
}

let entries = set.entries();
console.log(entries); //[Set Iterator] { 1, 2, 'hello' }  迭代器对象

set.forEach(function(value, key, set) {
    console.log(value, key, set);
});
//1 1 Set { 1, 2, 'hello' }
//2 2 Set { 1, 2, 'hello' }
//hello hello Set { 1, 2, 'hello' }
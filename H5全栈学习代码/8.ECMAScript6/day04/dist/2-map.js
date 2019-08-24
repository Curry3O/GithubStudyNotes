'use strict';

//Map集合
var map = new Map();
console.log(map); //Map {}
console.log(map.size); //0

//添加数据
map.set('name', 'hb');
map.set('age', 12);
map.set('name', 'lm');
map.set({}, 'yoo');
console.log(map); //Map { 'name' => 'lm', 'age' => 12, {} => 'yoo' }
console.log(map.size); //3

//通过key值获取value
console.log(map.get('name')); //lm

/*
//删除
console.log(map.delete('name')); //true
console.log(map); //Map { 'age' => 12, {} => 'yoo' }

//清空  无返回值
console.log(map.clear()); //undefined
console.log(map); //Map {}
*/

//遍历  返回迭代器镀锡,可用for-of遍历
var keys = map.keys();
console.log(keys); //[Map Iterator] { 'name', 'age', {} }

var values = map.values();
console.log(values); //[Map Iterator] { 'lm', 12, 'yoo' }

var entries = map.entries();
console.log(entries); //[Map Iterator] { [ 'name', 'lm' ], [ 'age', 12 ], [ {}, 'yoo' ] }

map.forEach(function (value, key, set) {
    console.log(value, key, set);
});
//lm name Map { 'name' => 'lm', 'age' => 12, {} => 'yoo' }
//12 'age' Map { 'name' => 'lm', 'age' => 12, {} => 'yoo' }
//yoo {} Map { 'name' => 'lm', 'age' => 12, {} => 'yoo' }
//Object.assign() 对象的浅复制,对象的合并
let obj = {
    name: 'hb',
    friends: [],
    count: {}
};
//浅复制
let obj1 = obj;
let obj2 = Object.assign(obj);
console.log(obj1 === obj); //true
console.log(obj2 === obj); //true

//对象的合并

let obj3 = Object.assign({}, obj);
console.log(obj3); //{ name: 'hb', friends: [], count: {} }
console.log(obj3 === obj); //false
console.log(obj3.friends === obj.friends); //true
console.log(obj3.count === obj.count); //true

let obj4 = {};
let obj5 = {
    name: 'lm'
};
//存在相同属性时后面的属性值会覆盖前面的属性值
Object.assign(obj4, obj, obj5);
console.log(obj4); //{ name: 'lm', friends: [], count: {} }
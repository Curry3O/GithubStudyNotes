let obj = { name: 'hb' };
console.log(obj.valueOf());

console.log(obj.__proto__ === Object.prototype); //true
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true
let objPro = {
    toString() {
        return 'hello';
    }
};
//设置原型对象
Object.setPrototypeOf(obj, objPro);
console.log(Object.getPrototypeOf(obj) === objPro); //true
//obj可以调用原来的原型中的属性和方法
console.log(obj.valueOf()); //{ name: 'hb' }
console.log(obj.toString()); //hello
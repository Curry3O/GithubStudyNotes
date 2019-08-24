let str = 'hello';
let [a,b,c] = str;
console.log(a,b,c);  //h e l

let {length} = str;
console.log(length);  //5

let {toString} = 123;
console.log(toString===Number.prototype.toString);  //true
let {toString:s} = true;
console.log(s===Boolean.prototype.toString);  //true
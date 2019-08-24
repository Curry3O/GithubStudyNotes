function test() {
    console.log(this);
    (() => {
        console.log(this);
    })();
}
// test(); //两个都是 Object [global]

let obj = {
    name: 'hb',
    test
};
obj.test(); //两个都是 obj  { name: 'hb', test: [Function: test] }

function test1() {
    console.log(this, '----'); //global
    return () => {
        console.log(this, '++++'); //global
    }
}
let obj1 = {
    name: 'lm',
    say: test1(),
};
obj1.say(); //Object [global] 2次
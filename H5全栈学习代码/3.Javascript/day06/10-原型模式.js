function Person(){}
Person.prototype.name = 'hb';
Person.prototype.friends = [];
Person.prototype.sayName = function(){
	console.log(this.name);
};
var p1 = new Person();
console.log(p1.name);  //hb
var p2 = new Person();
console.log(p2.name);  //hb
p1.friends.push('yoyo');
console.log(p1.friends);	//['yoyo']
console.log(p2.friends);  //['yoyo']
console.log(p1.sayName === p2.sayName);  //true

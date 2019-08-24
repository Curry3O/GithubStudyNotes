console.log(3<2);
console.log(3>2);
console.log(3>=3);
console.log(3<=2);
console.log('-------');
console.log(true=='true');   //false
console.log(1=='1'); //true
console.log(true==='true'); //false
console.log(1==='1');  //false
console.log(1!=='1');  //true
console.log(1!='1');  //false
console.log(1==true); //true
console.log(2==true); //false
console.log(0 == null); //false
console.log(null == null);//true
console.log(undefined == 0); //false
console.log(undefined == undefined); //true
/*number 与string 比较，如果看起来一样，==比较就是true；
number 与boolean比较，如果Boolean转换成number，与number值， ==比较就是true；
string比boolean比较，即使看起来一样，==比较是false.
null和null比较为true，null与其他比较都是false；
undefined与undefined比较为true，undefined与其他比较都是false。
*/

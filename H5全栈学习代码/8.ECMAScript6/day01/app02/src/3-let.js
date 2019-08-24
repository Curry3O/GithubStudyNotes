//闭包
{
	let arr = [];
	for(var i=0;i<10;i++){
		arr[i] = function(){
			console.log(i);
		}
	}
	arr[5]();  //10
}
{
	let arr = [];
	for(let i=0;i<10;i++){
		arr[i] = function(){
			console.log(i);
		}
	}
	arr[5]();  //5
}
// console.log(arr);  //报错

//内部能访问外部的变量
{
	let a = 1;
	console.log(a); //1
	{
		let b = 2;
		console.log(a,b);  //1  2
		{
			console.log(a,b);  //1  2
		}
	}
}

//外部不能访问内部的变量
{
	{
		let m =3;
		console.log(m);  //3
	}
	// console.log(m);  //报错
}

//
{
	let a = 1;
	let a = 2;  //报错,已经声明过
}
let a = 3;
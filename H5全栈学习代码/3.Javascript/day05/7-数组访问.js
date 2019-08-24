var arr = [1,2,'li',3,'yoyo'];
console.log(arr[2]);   //li
console.log(arr[10]);  //undefined
//给index为10的位置设置为123，空余的位置补undefined
arr[10] = 123;
console.log(arr);   //[ 1, 2, 'li', 3, 'yoyo', , , , , , 123 ]
console.log(arr.length); //11
arr.length = 15;
console.log(arr); //[ 1, 2, 'li', 3, 'yoyo', , , , , , 123, , , ,  ]

arr.length = 2;
console.log(arr);  //[1,2]



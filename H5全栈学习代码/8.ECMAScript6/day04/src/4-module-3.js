//需要引入3-module.js中的一些变量
/* import { a, b, test } from './3-module.js';
import { m, say } from './3-module.js';
console.log(a, b, test, m, say); */

import test from './3-module.js';
import { n, c, d } from './3-module.js';
// console.log(test, n, c, d);
// test();

//export的导入  组成对象
import * as obj from './3-module.js';
// console.log(obj.default);
obj.default();
// console.log(obj);

export { n, c, d }
from './3-module.js';
//上面这句话相当于下面两句
//import {n,c,d} from './3-module.js';
//export {n,c,d};
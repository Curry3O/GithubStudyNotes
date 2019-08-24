//引入3、4模块
//引入三模块中default的导出
import test from './3-module.js';

//引入四模块的n、a的导出
import { n, c, d } from './4-module-3.js';

console.log(test, n, c, d);
'use strict';

var _module = require('./3-module.js');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./4-module-3.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入3、4模块
//引入三模块中default的导出
console.log(_module2.default, _module3.n, _module3.c, _module3.d);

//引入四模块的n、a的导出
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d = exports.c = exports.n = undefined;

var _module = require('./3-module.js');

Object.defineProperty(exports, 'n', {
  enumerable: true,
  get: function get() {
    return _module.n;
  }
});
Object.defineProperty(exports, 'c', {
  enumerable: true,
  get: function get() {
    return _module.c;
  }
});
Object.defineProperty(exports, 'd', {
  enumerable: true,
  get: function get() {
    return _module.d;
  }
});

var obj = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//需要引入3-module.js中的一些变量
/* import { a, b, test } from './3-module.js';
import { m, say } from './3-module.js';
console.log(a, b, test, m, say); */

console.log(obj.default, _module.n, _module.c, _module.d);
// test();

//export的导入  组成对象

console.log(obj.default);
obj.default();
console.log(obj);
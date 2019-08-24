//axios的使用
//引入axios
const axios = require('axios');
// console.log(axios); //[Function: wrap]
axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then(function(re) {
    //re是经过axios的封装的数据
    console.log(re.data); //后台给的数据
}).catch(function(error) {
    console.log(error);
});
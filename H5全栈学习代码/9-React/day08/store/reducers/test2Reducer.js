//Test2reducer  业务逻辑处理
import {CHANGE_TEST2,TO_GET_DATA} from '../actionTypes';
import axios from 'axios';
let test2State = {
    msg: 'test2',
    arr:[]
};
export default (state = test2State, action) => {
    if (action.type === CHANGE_TEST2) {
        return {
            ...state,
            msg: action.value
        };
    }
    if (action.type === TO_GET_DATA) {
       //获取后台数据更改store数据然后返回
       axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then((res) => {
           let arr = res.data.data;
           return {
               ...state,
               arr
           }
       }).catch((err)=>{
           console.log(err);
       });
    }
    return state;
}
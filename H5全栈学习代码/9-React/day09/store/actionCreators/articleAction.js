import {CHANGE_MSG,CHANGE_ARTICLES,GET_DATA_SA_ACTION,DELETE_DATA_SA_ACTION} from '../actionTypes';
import axios from 'axios';
export const changeMsg = (value) =>{
    return {
        type: CHANGE_MSG,
        value
    };
}
//redux-thunk actionCreator
/* export const getDataAxAction = (value)=>{
    return (dispatch)=>{
        axios.get('http://134.175.154.93:8099/manager/article/findArticle',{params:value}).then((res)=>{
            //res.data.data.list 需要获取的数组
            dispatch(changeArticles(res.data.data.list));
        }).catch((err)=>{
            console.log(err);
        });
    }
}

//更改store中的articleCreator
const changeArticles = (value)=>{
    return {
        type:CHANGE_ARTICLES,
        value
    }
} */

export const changeArticles = (value) => {
    return {
        type:CHANGE_ARTICLES,
        value
    }
}
//redux-saga的actionCreator
export const getDataSaAction = (value) =>{
    return {
        type:GET_DATA_SA_ACTION,
        value
    }
}

//删除数据
export const deleteDataSaAction = (value) =>{
    return {
        type:DELETE_DATA_SA_ACTION,
        value
    }
}
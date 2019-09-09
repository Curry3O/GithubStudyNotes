//处理业务逻辑
//如果发送action这里可以监听，然后异步处理
import {takeEvery,put} from 'redux-saga/effects';
import {GET_DATA_SA_ACTION,DELETE_DATA_SA_ACTION} from './actionTypes';
import {changeArticles,getDataSaAction} from './actionCreators/articleAction'
import axios from 'axios';
function* mySagas(params) {
    //takeEvery监听某个action，然后执行第二个参数的generator函数
    yield takeEvery(GET_DATA_SA_ACTION, getList);
    yield takeEvery(DELETE_DATA_SA_ACTION, deleteData);
}
//参数action就是对应的action对象
function* getList(action){
    //发送异步，异步成功之后分发action
    let res = yield axios.get('http://134.175.154.93:8099/manager/article/findArticle', {
        params: action.value
    });
    //put就是转发action,类似于dispatch
    yield put(changeArticles(res.data.data.list));
}
function* deleteData(action) {
    let res = yield axios.get('http://134.175.154.93:8099/manager/article/deleteArticleById', {
        params: action.value
    });
    //put就是转发action,类似于dispatch
    yield put(getDataSaAction({ page: 0, pageSize: 10 }));
}
export default mySagas;
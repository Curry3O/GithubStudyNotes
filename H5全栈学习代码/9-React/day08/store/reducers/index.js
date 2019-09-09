//整合所有reducer后导出大的reducer
import {combineReducers} from 'redux';
import test1Reducer from './test1Reducer';
import test2Reducer from './test2Reducer';
const reducer = combineReducers({
    //需要整合reducer
    test1: test1Reducer,
    test2: test2Reducer
})

export default reducer;

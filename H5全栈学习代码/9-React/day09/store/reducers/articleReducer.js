import {CHANGE_MSG,CHANGE_ARTICLES} from '../actionTypes';
let initState = {
    msg:'article',
    articles:[]
};
export default (state=initState,action)=>{
    if (action.type === CHANGE_MSG) {
        return {
            ...state,
            msg:action.value
        }
    }
    if (action.type === CHANGE_ARTICLES) {
        return {
            ...state,
            articles:action.value
        }
    }
    return state;
}
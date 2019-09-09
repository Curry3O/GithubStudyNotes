//合并
import {combineReducers} from 'redux';
import article from './articleReducer';
export default combineReducers({
    article: article
});
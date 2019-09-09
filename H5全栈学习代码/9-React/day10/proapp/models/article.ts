import { Effect } from 'dva';
import { Reducer } from 'redux';
import {getArticle,deleteById} from '../services/article'

export interface CurrentArticle {
    /* avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
        key: string;
        label: string;
    }[];
    Articleid?: string;
    unreadCount?: number; */
}

export interface ArticleModelState {
    // currentArticle?: CurrentArticle;
}

export interface ArticleModelType {
    namespace: 'article';
    state: ArticleModelState;
    effects: {
        getArticleData: Effect;
        deleteById: Effect;
    };
    reducers: {
        changeArticleData: Reducer<ArticleModelState>;
    };
}

const ArticleModel: ArticleModelType = {
    namespace: 'article',
    state: {
        msg:'hello',
        articleData: [],
    },

    effects: {
        *getArticleData(_, { call, put }) {
            let res = yield call(getArticle, _.payload);
            yield put({
                type: 'changeArticleData',
                payload: res.data.list
            });
        },
        *deleteById(_, { call, put }) {
            yield call(deleteById, _.payload);
            yield put({
                type: 'getArticleData',
                payload: {page:0,pageSize:10}
            });
        },
    },

    reducers: {
        changeArticleData(state, action) {
            return {
                ...state,
                articleData:action.payload
            };
        },
    },
};

export default ArticleModel;

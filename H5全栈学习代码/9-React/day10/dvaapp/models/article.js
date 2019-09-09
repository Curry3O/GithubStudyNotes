//article的model
import {findArticle} from '../services/article';
export default {

  namespace: 'article',

  state: {
      msg:'hello',
      articleData:[]
  },


  //异步action
  effects: {
    //payload: action.payload
    //call 调用service文件夹中的方法 service是异步请求
    //put: 转发action
    *getData1({ payload }, { call, put }){
      //call 第一个参数是service层的方法,第二个参数是service层方法需要的数据
      let res = yield call(findArticle, payload);
      yield put({type:'changeArticleData',payload:res.data.list})
    }
  },

  //同步action
  reducers: {
    //changeMsg就是action的type
    changeMsg1(state,action){
      return {
        ...state,
        msg:action.payload
      }
    },
    changeArticleData(state,action){
      return {
        ...state,
        articleData:action.payload
      }
    }
  },

};

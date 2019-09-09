//创建store
//引入中间件
//thunk
/* import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//DevTools正常使用方法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))

let store = createStore(reducer,enhancer);
//applyMiddleware(thunk)
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store; */


//saga
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mySagas from './mySagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

//创建saga中间件
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

let store = createStore(reducer,enhancer);
//使用mySagas
sagaMiddleware.run(mySagas);
export default store;
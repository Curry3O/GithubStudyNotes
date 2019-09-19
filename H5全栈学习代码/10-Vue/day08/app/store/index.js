import Vue from 'vue';
import Vuex from 'vuex';
import indexStore from './indexStore';
import categoryStore from './categoryStore';
import articleStore from './articleStore';
import userStore from './userStore';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        indexStore,
        categoryStore,
        articleStore,
        userStore,
    }
});
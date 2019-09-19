import axios from '../axios'
import qs from 'qs'
export default {
    state:{
        msg:'我是category数据',
        categories:[]
    },
    getters:{
        msg:state=>state.msg,
        categories: state => state.categories
    },
    mutations:{
        changeCategories(state,data){
            state.categories = data;
        }
    },
    actions:{
        findAllCategory(context){
            return new Promise(function(resolve,reject){
                axios.get('/manager/category/findAllCategory').then(({data})=>{
                    context.commit('changeCategories',data.data);
                    resolve(data.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        },
        saveOrUpdateCategory(context,obj){
            return new Promise(function(resolve,reject){
                axios.post('/manager/category/saveOrUpdateCategory',qs.stringify(obj)).then(({data})=>{
                    resolve(data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        },
        deleteCategoryById(context,id){
            return new Promise(function(resolve,reject){
                axios.get('/manager/category/deleteCategoryById',{params:{id:id}}).then(({data})=>{
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        batchesDeleteCategory(context,obj){
            return new Promise(function(resolve,reject){
                axios.post('/manager/category/batchDeleteCategory', qs.stringify(obj)).then(({
                      data
                    }) => {
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
            });
        }
    }
}
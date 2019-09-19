import axios from '../axios'
import qs from 'qs'
export default {
    state:{
        users:[],
    },
    getters:{
        users:state=>state.users,
    },
    mutations:{
        changeUser(state,data){
            state.users = data;
        }
    },
    actions:{
        findAllUser(context){
            return new Promise(function(resolve,reject){
                axios.get('/manager/user/findAllUser').then(({data})=>{
                    context.commit('changeUser',data.data);
                    resolve(data.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        },
        changeStatus(context,obj){
            return new Promise(function(resolve,reject){
                axios.post('/manager/user/changeStatus',qs.stringify(obj)).then(({data})=>{
                    resolve(data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        },
        saveOrUpdateUser(context,obj){
            return new Promise(function(resolve,reject){
                axios.post('/manager/user/saveOrUpdateUser',qs.stringify(obj)).then(({data})=>{
                    resolve(data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        },
        deleteUserById(context,obj){
            return new Promise(function(resolve,reject){
                axios.get('/manager/user/deleteUserById',{params:obj}).then(({data})=>{
                    resolve(data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        }
    }
}
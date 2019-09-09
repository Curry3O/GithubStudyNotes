import config from './config';
//axios的配置
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = config.baseURL;
//拦截器 响应回来后拦截处理
axios.interceptors.response.use((response)=>{
    // console.log(response);
    //封装返回的数据
    //response.data是服务器返回的数据
    let res = {
        ...response,
        data: response.data.data,
        status: response.data.status,
        statusText: response.data.message
    };
    return res;
},(error)=>{
    //响应失败后拦截
    return Promise.reject(error);
});

//post请求发送前拦截
axios.interceptors.request.use((config) => {
    //config.data是json格式的数据，再使用qs转成表单格式数据
    //请求发送前拦截处理
    // console.log(config);
    if (config.method === 'post')   {
        config.data = qs.stringify(config.data);
    }
    return config;
},(error)=>{
    //请求发送失败处理
    return Promise.reject(error);
});

export default axios;
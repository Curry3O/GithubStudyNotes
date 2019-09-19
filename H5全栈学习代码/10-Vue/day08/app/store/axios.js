import axios from 'axios'
axios.defaults.baseURL = "http://134.175.154.93:8099";
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";

export default axios;

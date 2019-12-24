/**
 * 开闭原则例子
 */
import axios from 'axios';
let instance = axios.create();
// http://localhost:3000
// result={headers,data} 如果状态码是不是200的的话直接 报错
instance.interceptors.request.use(config => {
    if (config.url!.startsWith('http')) {
        config.url = 'http://localhost:3000' + config.url;
    }
    return config;
});
instance.interceptors.response.use(response => {
    if (response.status != 200) {
        return Promise.reject(response);
    }
    return response.data;
});
instance({
    url: '/api/users'
}).then(result => {
    console.log(result);
});
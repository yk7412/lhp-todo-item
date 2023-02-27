import axios from 'axios';

// 创建一个独立的axios实例
const http = axios.create({ 
    // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
    // baseURL: 'http://192.168.31.197:9000/',
    baseURL: 'http://localhost:9000/',
    // 定义统一的请求头部
    headers: {
       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    // 配置请求超时时间
    timeout: 30000, 
    // // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
    // withCredentials: true
});
// 请求拦截
http.interceptors.request.use(config => {
    // 自定义header，可添加项目token
    // config.headers.token = 'token';
    config.headers = {
        // 'user-id': '20391',
        ...config.headers
    }
    return config;
});
// 返回拦截
http.interceptors.response.use((response)=>{
    // 获取接口返回结果
    const res = response.data;
    return res;
});
export default http;

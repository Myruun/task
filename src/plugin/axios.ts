import axios from 'axios'

// import HTTPURL from '../conf'

// axios默认配置
axios.defaults.timeout = 10000

// // 整理数据
// axios.defaults.transformRequest = (data: any) => {
//   data = JSON.stringify(data)
//   return data
// }

// 路由请求拦截
axios.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error.response)
})

// 路由响应拦截
axios.interceptors.response.use(
 (response: any) => {
    return response.data
  },
  (error: any) => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
})

export default axios

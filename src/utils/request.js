import axios from 'axios'
import Vue from 'vue'

let instance = axios.create({
  headers: {
    'plantform': 'PC'
  },
  baseURL: 'http://localhost:9999'
})

// 请求拦截
instance.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token') || ''
  console.log(config, '*/*/*/*/')
  return config
},
(err) => {
  return Promise.reject(err)
}
)

// 响应拦截
instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  } else {
    return '99'
  }
},
(err) => {
  return Promise.reject(err)
}
)

// 将instance方法添加到vue实例中(3个参数：要添加属性的对象，添加的属性，属性值【必须以value:值的格式】)
Object.defineProperty(Vue.prototype, '$http', {
  value: instance
})
// 抛出axios的实例instance
export default instance

// 封装一个login请求方法，引入instance  最后抛出promise，在调用时可以使用链式写法
export function loginRequest (formInfo) {
  return new Promise((resolve, reject) => {
    instance.post('/dsp-admin/user/login', formInfo).then(res => {
      resolve(res)
    })
  })
}

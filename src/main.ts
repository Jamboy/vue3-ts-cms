/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:04
 * @LastEditTime: 2021-12-06 11:16:40
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import jaRequest from './service'
jaRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('自定义单独拦截')
      return config
    },
    responseInterceptor: (config) => {
      console.log('自定义返回拦截')
      return config
    },
  },
})
// jaRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
// })

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')

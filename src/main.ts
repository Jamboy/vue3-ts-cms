/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:04
 * @LastEditTime: 2021-12-04 15:50:57
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import './service/axios_demo'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus)1
app.mount('#app')

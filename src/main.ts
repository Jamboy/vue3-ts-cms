/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:04
 * @LastEditTime: 2021-12-06 11:41:56
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import jaRequest from './service'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

jaRequest
  .get<DataType>({
    url: '/home/multidata',
  })
  .then((response) => {
    console.log('response: ', response)
  })
  .catch((err) => {
    console.log('err: ', err)
  })

/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:04
 * @LastEditTime: 2021-12-08 15:04:36
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons'
// import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from '@/store/index'

import App from './App.vue'
import router from './router'
import store from './store'

// TODO: 注册icon提取
const app = createApp(App)
for (const iconName in ElIcons) {
  app.component(iconName, (ElIcons as any)[iconName])
}
app.use(store)
app.use(router)
app.mount('#app')
setupStore()

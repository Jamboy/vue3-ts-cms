/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:04
 * @LastEditTime: 2021-12-10 14:39:51
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
import { globalRegister } from './global'

// TODO: 注册icon提取
const app = createApp(App)
for (const iconName in ElIcons) {
  app.component(iconName, (ElIcons as any)[iconName])
}
setupStore()
app.use(store)
app.use(router)
app.use(globalRegister)
app.mount('#app')

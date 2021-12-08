/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:05
 * @LastEditTime: 2021-12-08 10:04:13
 */
import { createStore } from 'vuex'
import login from './login/login'

import { IRootState } from './types'
export default createStore<IRootState>({
  state() {
    return { name: 'fff' }
  },
  mutations: {},
  actions: {},
  modules: { login },
})

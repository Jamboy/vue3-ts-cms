/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:05
 * @LastEditTime: 2021-12-08 15:01:50
 */
import { createStore } from 'vuex'
import login from './login/login'

import { IRootState } from './types'
const store = createStore<IRootState>({
  state() {
    return { name: 'fff' }
  },
  mutations: {},
  actions: {},
  modules: { login },
})

export function setupStore() {
  store.dispatch('login/loadLocalLoginAction')
}

export default store

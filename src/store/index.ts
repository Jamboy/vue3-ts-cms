/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:05
 * @LastEditTime: 2021-12-16 11:30:18
 */
import { Store } from 'element-plus/es/components/table/src/store'
import { createStore, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'

import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state() {
    return { name: 'fff' }
  },
  mutations: {},
  actions: {},
  modules: { login, system },
})

export function setupStore() {
  store.dispatch('login/loadLocalLoginAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

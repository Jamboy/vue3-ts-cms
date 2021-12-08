/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:05
 * @LastEditTime: 2021-12-08 17:41:42
 */
import { Store } from 'element-plus/es/components/table/src/store'
import { createStore, useStore as useVuexStore } from 'vuex'
import login from './login/login'

import { IRootState, IStoreType } from './types'
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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

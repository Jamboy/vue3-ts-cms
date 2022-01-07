/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:05
 * @LastEditTime: 2022-01-05 11:16:19
 */
import { getPageListRequest } from '@/service/main/system/system'
import { Store } from 'element-plus/es/components/table/src/store'
import { createStore, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'

import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'fff',
      entireDepartment: [],
      entireRoles: [],
      entireMenu: [],
    }
  },
  mutations: {
    changeDepartment(state, list) {
      state.entireDepartment = list
    },
    changeRole(state, list) {
      state.entireRoles = list
    },
    changeMenu(state, list) {
      state.entireMenu = list
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentRes = await getPageListRequest('/department/list', {
        offset: 0,
        size: 1000,
      })
      const { list: departmentList } = departmentRes.data
      commit('changeDepartment', departmentList)

      const roleRes = await getPageListRequest('/role/list', {
        offset: 0,
        size: 1000,
      })
      const { list: roleList } = roleRes.data
      commit('changeRole', roleList)

      const menuRes = await getPageListRequest('/menu/list', {})
      const { list: menuList } = menuRes.data
      commit('changeMenu', menuList)
    },
  },
  modules: { login, system },
})

export function setupStore() {
  store.dispatch('login/loadLocalLoginAction')
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

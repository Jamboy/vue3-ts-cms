/*
 * @Description: vuex-login
 * @Author: Jamboy
 * @Date: 2021-12-08 09:54:44
 * @LastEditTime: 2021-12-14 15:32:35
 */
import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import router from '@/router'
import localCache from '@/utils/cache'
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByRoleIdRequest,
} from '../../service/login/login'
import { IAccount } from '@/service/login/type'

import { mapMenusToRoutes } from '@/utils/map-menus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: [],
  },
  getters: {},
  mutations: {
    // 更改store中的token
    changeToken(state, token: string) {
      state.token = token
    },

    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },
  },
  actions: {
    // 登录操作
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginRes = await accountLoginRequest(payload)
      const { id, token } = loginRes.data
      console.log('loginRes: ', loginRes)
      /*
      要唤醒一个 mutation 处理函数，你需要以相应的 type 调用 store.commit 方法：
      ref: https://next.vuex.vuejs.org/zh/guide/mutations.html
      */
      // 获取到token后保存到vuex
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 获取userInfo
      const userInfoRes = await userInfoByIdRequest(id)
      const userInfo = userInfoRes.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      //用户菜单
      const userMenusRes = await userMenusByRoleIdRequest(userInfo.role.id)
      const userMenus = userMenusRes.data
      console.log('userMenus: ', userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      if (token) {
        router.push('/main')
      }
    },

    phoneLoginAction({ commit }, payload: any) {
      console.log('phoneLoginAction: ')
    },

    // 刷新时加载本地数据到store
    loadLocalLoginAction({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },
  },
}

export default loginModule

/*
 * @Description: vuex-login
 * @Author: Jamboy
 * @Date: 2021-12-08 09:54:44
 * @LastEditTime: 2021-12-08 11:56:28
 */
import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  userInfoByIdRequest,
} from '../../service/login/login'
import { IAccount } from '@/service/login/type'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
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
      // 获取userInfo
      const userInfoRes = await userInfoByIdRequest(id)
      commit('changeUserInfo', userInfoRes.data)
    },

    phoneLoginAction({ commit }, payload: any) {
      console.log('phoneLoginAction: ')
    },
  },
}

export default loginModule

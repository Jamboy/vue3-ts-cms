/*
 * @Description: 定义system store
 * @Author: Jamboy
 * @Date: 2021-12-14 14:54:53
 * @LastEditTime: 2021-12-16 14:10:15
 */

import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListRequest } from '../../../service/main/system/system'

interface IPageListRequest {
  pageName: string
  queryInfo: any
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
    }
  },

  getters: {
    pageListData: (state) => (pageName: string) => {
      switch (pageName) {
        case 'user':
          return state[`userList`]
        case 'role':
          return state[`roleList`]
      }
    },
  },

  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },

    changeUserCount(state, userCount) {
      state.userCount = userCount
    },

    changeRoleList(state, roleList) {
      state.roleList = roleList
    },

    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
  },

  actions: {
    async getPageListAction({ commit }, payload: IPageListRequest) {
      let pageUrl = ''
      switch (payload.pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }
      const pageRes = await getPageListRequest(pageUrl, payload.queryInfo)
      console.log('pageRes: ', pageRes)
      const { list, totalCount } = pageRes.data
      const COMMIT_LIST_NAME = `change${payload.pageName.replace(
        payload.pageName[0],
        payload.pageName[0].toUpperCase()
      )}List`
      const COMMIT_COUNT_NAME = `change${payload.pageName.replace(
        payload.pageName[0],
        payload.pageName[0].toUpperCase()
      )}Count`
      commit(COMMIT_LIST_NAME, list)
      commit(COMMIT_COUNT_NAME, totalCount)
    },
  },
}

export default systemModule

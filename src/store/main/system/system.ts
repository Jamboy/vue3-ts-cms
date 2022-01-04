/*
 * @Description: 定义system store
 * @Author: Jamboy
 * @Date: 2021-12-14 14:54:53
 * @LastEditTime: 2021-12-30 11:56:43
 */

import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import {
  deletePageData,
  getPageListRequest,
} from '../../../service/main/system/system'

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
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    }
  },

  getters: {
    pageListData: (state) => (pageName: string) => {
      // return (state as any)[`${pageName}List`]
      switch (pageName) {
        case 'user':
          return state[`userList`]
        case 'role':
          return state[`roleList`]
        case 'goods':
          return state[`goodsList`]
        case 'menu':
          return state[`menuList`]
      }
    },

    pageListCount: (state) => (pageName: string) => {
      return (state as any)[`${pageName}Count`]
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

    changeGoodsList(state, goodsList) {
      state.goodsList = goodsList
    },

    changeGoodsCount(state, goodsCount) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList) {
      state.menuList = menuList
    },

    changeMenuCount(state, menuCount) {
      state.menuCount = menuCount
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
        case 'goods':
          pageUrl = '/goods/list'
          break
        case 'menu':
          pageUrl = '/menu/list'
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

    // 根据id删除
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      await deletePageData(pageUrl)

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      })
    },
  },
}

export default systemModule

/*
 * @Description: 定义system store
 * @Author: Jamboy
 * @Date: 2021-12-14 14:54:53
 * @LastEditTime: 2021-12-14 15:34:05
 */

import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListRequest } from '../../../service/main/system/system'

interface IPageListRequest {
  pageUrl: string
  queryInfo: any
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },

  actions: {
    async getPageListAction({ commit }, payload: IPageListRequest) {
      console.log('payload: ', payload.pageUrl)
      console.log('payload: ', payload.queryInfo)
      const pageRes = await getPageListRequest(
        payload.pageUrl,
        payload.queryInfo
      )
      console.log('pageRes: ', pageRes)
      const { list, totalCount } = pageRes
    },
  },
}

export default systemModule

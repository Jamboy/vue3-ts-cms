/*
 * @Description: system 网络请求
 * @Author: Jamboy
 * @Date: 2021-12-14 15:17:11
 * @LastEditTime: 2021-12-30 11:01:59
 */

import { IDataType } from '@/service/types'
import JARequest from '../../index'

export function getPageListRequest(url: string, queryInfo: any) {
  return JARequest.post<IDataType>({
    url,
    data: queryInfo,
  })
}

export function deletePageData(url: string) {
  return JARequest.delete<IDataType>({
    url,
  })
}

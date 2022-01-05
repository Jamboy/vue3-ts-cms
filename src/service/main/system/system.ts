/*
 * @Description: system 网络请求
 * @Author: Jamboy
 * @Date: 2021-12-14 15:17:11
 * @LastEditTime: 2022-01-05 09:38:24
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

export function addPageData(url: string, newData: any) {
  return JARequest.post<IDataType>({
    url,
    data: newData,
  })
}
export function editPageData(url: string, editData: any) {
  return JARequest.patch<IDataType>({
    url,
    data: editData,
  })
}

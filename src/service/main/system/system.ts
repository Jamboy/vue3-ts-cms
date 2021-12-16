/*
 * @Description: system 网络请求
 * @Author: Jamboy
 * @Date: 2021-12-14 15:17:11
 * @LastEditTime: 2021-12-15 09:34:15
 */

import { IDataType } from '@/service/types'
import JARequest from '../../index'

export function getPageListRequest(url: string, queryInfo: any) {
  return JARequest.post<IDataType>({
    url,
    data: queryInfo,
  })
}

/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-20 14:06:36
 * @LastEditTime: 2021-12-20 14:08:44
 */

import { useStore } from '@/store'

export function usePermission(pageName: string, handlerName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handlerName}`
  return !!permissions.find((item: string) => item === verifyPermission)
}

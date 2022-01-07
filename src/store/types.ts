/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-08 10:01:27
 * @LastEditTime: 2022-01-05 11:16:12
 */
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
interface IRootState {
  name: string
  entireDepartment: any[]
  entireRoles: any[]
  entireMenu: any[]
}
interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }

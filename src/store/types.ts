/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-08 10:01:27
 * @LastEditTime: 2021-12-14 15:00:37
 */
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
interface IRootState {
  name: string
}
interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }

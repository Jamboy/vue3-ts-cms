/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-08 10:01:27
 * @LastEditTime: 2021-12-08 17:33:41
 */
import { ILoginState } from './login/types'
interface IRootState {
  name: string
}
interface IRootWithModule {
  login: ILoginState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }

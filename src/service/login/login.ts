/*
 * @Description: 登录
 * @Author: Jamboy
 * @Date: 2021-12-08 10:47:07
 * @LastEditTime: 2021-12-08 11:54:53
 */
import JARequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
}

export function accountLoginRequest(account: IAccount) {
  return JARequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  })
}

export function userInfoByIdRequest(id: number) {
  return JARequest.get<IDataType>({
    url: `LoginApi.LoginUserInfo${id}`,
  })
}

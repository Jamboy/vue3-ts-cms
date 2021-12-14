/*
 * @Description: 登录
 * @Author: Jamboy
 * @Date: 2021-12-08 10:47:07
 * @LastEditTime: 2021-12-14 15:37:45
 */
import JARequest from '../index'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/',
}

export function accountLoginRequest(account: IAccount) {
  return JARequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  })
}

export function userInfoByIdRequest(id: number) {
  return JARequest.get<IDataType>({
    url: `${LoginApi.LoginUserInfo}${id}`,
    showLoading: false,
  })
}

export function userMenusByRoleIdRequest(id: number) {
  return JARequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false,
  })
}

/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-08 10:50:49
 * @LastEditTime: 2021-12-14 15:37:21
 */
export interface IAccount {
  name: string
  password: string
}

// 登录返回数据类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

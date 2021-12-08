/*
 * @Description: 账号登录面板配置
 * @Author: Jamboy
 * @Date: 2021-12-07 13:55:57
 * @LastEditTime: 2021-12-07 13:55:58
 */

const accountRules = {
  name: [{ required: true, message: 'please input the name', trigger: 'blur' }],
  password: [
    { required: true, message: 'please input the password' },
    {
      min: 3,
      message: 'Length minimum 3',
      trigger: 'blur',
    },
  ],
}

export { accountRules }

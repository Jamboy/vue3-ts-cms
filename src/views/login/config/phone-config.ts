/*
 * @Description: 手机校验配置
 * @Author: Jamboy
 * @Date: 2021-12-07 13:59:53
 * @LastEditTime: 2021-12-07 14:08:42
 */

const phoneRules = {
  phone: [
    {
      required: true,
      pattern: /^1[3456789]\d{9}$/,
      message: 'please enter a valid phone number',
    },
  ],
  password: [
    { required: true, message: 'please input the password' },
    {
      min: 3,
      message: 'Length minimum 3',
      trigger: 'blur',
    },
  ],
}

export { phoneRules }

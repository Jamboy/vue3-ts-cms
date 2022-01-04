/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-01-04 09:57:35
 * @LastEditTime: 2022-01-04 10:31:06
 */
import type { IForm } from '@/base-ui/form/types/index'

export const modalConfig: IForm = {
  formItems: [
    {
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
      propName: 'name',
    },
    {
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input',
      propName: 'realName',
    },
    {
      label: '用户密码',
      placeholder: '请输入用户密码',
      type: 'input',
      propName: 'password',
    },
    {
      label: '电话号码',
      placeholder: '请再次输入电话号码',
      type: 'input',
      propName: 'cellphone',
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
}

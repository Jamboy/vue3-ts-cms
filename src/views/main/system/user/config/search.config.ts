/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-10 13:56:48
 * @LastEditTime: 2021-12-17 09:00:01
 */
import type { IForm } from '@/base-ui/form/types/index'
const formConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 10px',
  },
  formItems: [
    {
      label: 'id',
      placeholder: '请输入',
      type: 'input',
      propName: 'id',
    },
    {
      label: 'name',
      placeholder: '请输入222',
      type: 'input',
      propName: 'name',
    },
    {
      label: '真实姓名',
      propName: 'realname',
      placeholder: '请输入真实名字',
      type: 'input',
    },
    {
      label: '手机号',
      propName: 'cellphone',
      placeholder: '请输入手机号',
      type: 'datepicker',
      otherOptions: {
        placeholder: '选择日期',
        type: 'date',
      },
    },
  ],
  colLayout: {
    span: 8,
  },
}

export default formConfig

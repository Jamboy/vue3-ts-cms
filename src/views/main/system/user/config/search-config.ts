/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-10 13:56:48
 * @LastEditTime: 2021-12-10 14:07:03
 */
import type { IForm } from '@/base-ui/form/types/index'
const formConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 10px',
  },
  formItems: [
    {
      label: '测试',
      placeholder: '请输入',
      type: 'input',
      propName: 'user',
    },
    {
      label: '测试2',
      placeholder: '请输入222',
      type: 'input',
      propName: 'userTest2',
    },
    {
      propName: 'userTest3',
      label: '测试2',
      placeholder: '请输入测试2',
      type: 'select',
      options: [
        {
          title: 'select1',
          value: 0,
        },
        {
          title: 'select2',
          value: 1,
        },
      ],
    },
    {
      label: '测试2',
      propName: 'userTest4',
      placeholder: '请输入222',
      type: 'input',
    },
    {
      label: '测试3',
      propName: 'userTest6',
      placeholder: '请输入222',
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

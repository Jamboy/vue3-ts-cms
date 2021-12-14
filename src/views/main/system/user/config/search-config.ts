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
      propName: 'password',
      label: 'password',
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
      propName: 'sport',
      placeholder: '请输入222',
      type: 'input',
    },
    {
      label: '测试3',
      propName: 'createTime',
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

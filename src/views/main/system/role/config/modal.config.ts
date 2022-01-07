/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-01-04 09:57:35
 * @LastEditTime: 2022-01-05 10:26:54
 */
import type { IForm } from '@/base-ui/form/types/index'

const modalConfig: IForm = {
  formItems: [
    {
      label: '角色名',
      placeholder: '请输入角色名',
      type: 'input',
      propName: 'name',
    },
    {
      label: '角色介绍',
      placeholder: '请输入角色介绍',
      type: 'input',
      propName: 'intro',
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
}

export default modalConfig

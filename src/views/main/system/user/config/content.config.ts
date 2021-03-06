/*
 * @Description: tableConfig
 * @Author: Jamboy
 * @Date: 2021-12-16 09:29:25
 * @LastEditTime: 2021-12-30 10:07:21
 */

const contentTableConfig = {
  tableConfig: [
    {
      prop: 'id',
      label: 'id',
    },
    {
      prop: 'name',
      label: 'Name',
    },
    {
      prop: 'realname',
      label: '真实姓名',
    },
    {
      prop: 'cellphone',
      label: '手机号',
    },
    {
      prop: 'enable',
      label: '状态',
      slotName: 'status',
      isDynamicSlot: true,
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
    },
    {
      label: '操作',
      slotName: 'handler',
    },
  ],
  showIndex: true,
  showSelection: true,
}

export default contentTableConfig

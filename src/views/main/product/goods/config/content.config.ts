/*
 * @Description: tableConfig
 * @Author: Jamboy
 * @Date: 2021-12-16 09:29:25
 * @LastEditTime: 2021-12-20 10:34:37
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
      prop: 'imgUrl',
      label: '预览图',
      slotName: 'imgUrl',
      isDynamicSlot: true,
    },
    {
      prop: 'oldPrice',
      label: '折扣价',
      slotName: 'oldPrice',
      isDynamicSlot: true,
    },
    {
      prop: 'newPrice',
      label: '原价',
    },
    {
      prop: 'status',
      label: '状态',
      slotName: 'status',
      isDynamicSlot: true,
    },
    {
      prop: 'address',
      label: '地区',
      isFixedSlot: true,
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
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

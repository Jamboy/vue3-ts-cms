/*
 * @Description: role config
 * @Author: Jamboy
 * @Date: 2021-12-16 11:43:28
 * @LastEditTime: 2021-12-16 11:46:34
 */

/*
 * @Description: tableConfig
 * @Author: Jamboy
 * @Date: 2021-12-16 09:29:25
 * @LastEditTime: 2021-12-16 09:35:16
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
      prop: 'intro',
      label: '真实姓名',
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

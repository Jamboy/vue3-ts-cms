/*
 * @Description: role config
 * @Author: Jamboy
 * @Date: 2021-12-16 11:43:28
 * @LastEditTime: 2021-12-20 11:45:04
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
      prop: 'icon',
      label: 'icon',
    },
    {
      prop: 'url',
      label: 'url',
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
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children',
      hasChildren: true,
    },
  },
  showIndex: false,
  showSelection: false,
  title: '菜单列表',
}

export default contentTableConfig

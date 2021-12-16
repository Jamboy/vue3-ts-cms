<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-15 17:15:11
-->
<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
  </div>
  <JATable :listData="userList" :tableConfig="tableConfig">
    <template #title>
      <h2>用好222</h2>
    </template>
    <template #headerHandler>
      <el-button type="primary" size="mini">设置</el-button>
    </template>

    <template #status="{ row }">
      <el-button>{{ row.enable === '1' ? '启用' : '关闭' }}</el-button>
    </template>
    <template #createAt="{ row }">
      {{ $filters.formatTime(row.createAt) }}
    </template>
    <template #handler>
      <el-button type="text" size="mini">
        <el-icon>
          <edit></edit>
        </el-icon>
        编辑
      </el-button>
      <el-button type="text" size="mini">删除</el-button>
    </template>
  </JATable>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import searchFormConfig from './config/search-config'
import PageSearch from '@/components/page-search'
import JATable from '@/base-ui/table'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    JATable,
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: { offset: 0, size: 10 },
    })

    const tableConfig = [
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
    ]

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    console.log('userCount: ', userCount.value)
    console.log('userList: ', userList.value)
    return { searchFormConfig, userList, userCount, tableConfig }
  },
})
</script>

<style lang="less" scoped></style>

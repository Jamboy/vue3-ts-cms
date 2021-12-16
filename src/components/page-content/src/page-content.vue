<!--
 * @Description: page content
 * @Author: Jamboy
 * @Date: 2021-12-16 09:46:56
 * @LastEditTime: 2021-12-16 09:50:54
-->
<template>
  <div class="page-content">
    <JATable :listData="userList" v-bind="contentTableConfig">
      <template #title>
        <h2>用好222</h2>
      </template>
      <template #headerHandler>
        <el-button type="primary" size="mini">设置</el-button>
      </template>

      <template #status="{ row }">
        <el-button type="success" size="mini" plain>{{
          row.enable === '1' ? '启用' : '关闭'
        }}</el-button>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import JATable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    JATable,
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: { offset: 0, size: 10 },
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    console.log('userCount: ', userCount.value)
    console.log('userList: ', userList.value)
    return { userList, userCount }
  },
})
</script>

<style scoped></style>

<!--
 * @Description: page content
 * @Author: Jamboy
 * @Date: 2021-12-16 09:46:56
 * @LastEditTime: 2021-12-16 14:14:47
-->
<template>
  <div class="page-content">
    <JATable :listData="listData" v-bind="contentTableConfig">
      <template #title>
        <h2>{{ contentTableConfig.title }}</h2>
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
    pageName: String,
  },
  components: {
    JATable,
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: { offset: 0, size: 10 },
    })

    const listData = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )

    // switch (props.pageName) {
    //   case 'user':
    //     listData = computed(() => store.state.system.userList)
    //     listCount = computed(() => store.state.system.userCount)
    //     break
    //   case 'role':
    //     listData = computed(() => store.state.system.roleList)
    //     listCount = computed(() => store.state.system.roleCount)
    //     break
    // }
    return { listData }
  },
})
</script>

<style scoped></style>

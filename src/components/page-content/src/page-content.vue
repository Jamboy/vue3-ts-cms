<!--
 * @Description: page content
 * @Author: Jamboy
 * @Date: 2021-12-16 09:46:56
 * @LastEditTime: 2021-12-17 11:25:05
-->
<template>
  <div class="page-content">
    <JATable
      :listData="listData"
      :listCount="listCount"
      v-bind="contentTableConfig"
      v-model:pageInfo="pageInfo"
    >
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
import { defineComponent, computed, ref, watch } from 'vue'
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

    const pageInfo = ref({ pageSize: 10, currentPage: 0 })
    watch(pageInfo, () => getPageData())

    const getPageData = (queryObj: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.pageSize * pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryObj,
        },
      })
    }
    getPageData()
    const listData = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )

    const listCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )
    return { listData, getPageData, listCount, pageInfo }
  },
})
</script>

<style scoped></style>

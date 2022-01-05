<!--
 * @Description: page content
 * @Author: Jamboy
 * @Date: 2021-12-16 09:46:56
 * @LastEditTime: 2022-01-04 11:12:15
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
        <el-button
          v-if="isCreate"
          type="primary"
          size="mini"
          @click="handleNewBtnClick"
        >
          新建用户
        </el-button>
      </template>

      <template #createAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filters.formatTime(row.updateAt) }}
      </template>
      <template #handler="{ row }">
        <el-button
          v-if="isUpdate"
          type="text"
          size="mini"
          @click="handleEditClick(row)"
        >
          <el-icon>
            <edit></edit>
          </el-icon>
          编辑
        </el-button>
        <el-button
          v-if="isDelete"
          type="text"
          size="mini"
          @click="handleClickDelete(row)"
          >删除</el-button
        >
      </template>

      <!-- bind dynamic slot -->
      <template
        v-for="item in otherConfig"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot
          v-if="item.isDynamicSlot"
          :name="item.slotName"
          :row="scope.row"
        ></slot>
      </template>
    </JATable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import JATable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'

export default defineComponent({
  emits: ['handleNewBtnClick', 'handleEditClick'],
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
    },
    pageName: {
      required: true,
      type: String,
    },
  },
  components: {
    JATable,
  },
  setup(props, { emit }) {
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    const store = useStore()
    const pageInfo = ref({ pageSize: 10, currentPage: 0 })
    const dialogVisible = ref(true)
    watch(pageInfo, () => getPageData())

    const getPageData = (queryObj: any = {}) => {
      if (!isQuery) {
        return
      }
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

    const otherConfig = props.contentTableConfig.tableConfig.filter(
      (item: any) => {
        return item.isDynamicSlot
      }
    )

    const handleClickDelete = (row: any) => {
      console.log('row: ', row.id)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: row.id,
      })
    }

    const handleNewBtnClick = () => {
      emit('handleNewBtnClick')
    }

    const handleEditClick = (item: any) => {
      emit('handleEditClick', { item })
    }

    return {
      listData,
      getPageData,
      listCount,
      pageInfo,
      otherConfig,
      isCreate,
      isDelete,
      isUpdate,
      handleClickDelete,
      dialogVisible,
      handleNewBtnClick,
      handleEditClick,
    }
  },
})
</script>

<style scoped></style>

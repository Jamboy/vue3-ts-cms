<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-15 14:57:01
 * @LastEditTime: 2021-12-17 11:15:57
-->
<template>
  <div class="ja-table">
    <div class="header">
      <slot class="title" name="title"> </slot>
      <slot class="handler" name="headerHandler"></slot>
    </div>
    <el-table :data="listData" style="width: 100%" border>
      <el-table-column v-if="showSelection" type="selection"></el-table-column>
      <el-table-column
        v-if="showIndex"
        label="序号"
        type="index"
      ></el-table-column>
      <template v-for="item in tableConfig" :key="item.prop">
        <el-table-column v-bind="item">
          <template #default="{ row }">
            <slot :name="item.slotName" :row="row">
              {{ row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="pageInfo.currentPage"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageInfo.pageSize"
          layout="total,sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['update:pageInfo'],
  props: {
    listData: {
      type: Array,
      required: true,
    },
    listCount: Number,
    tableConfig: {
      type: Array,
      required: true,
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    showSelection: {
      type: Boolean,
      default: false,
    },
    pageInfo: {
      type: Object,
      default: () => {
        return {
          currentPage: 1,
          pageSize: 10,
        }
      },
    },
  },
  setup(props, { emit }) {
    const handleSizeChange = (pageSize: number) => {
      emit('update:pageInfo', { ...props.pageInfo, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      console.log('currentPage: number: ', currentPage)
      emit('update:pageInfo', { ...props.pageInfo, currentPage })
    }
    const totalPage = ref(100)
    return { handleSizeChange, handleCurrentChange, totalPage }
  },
})
</script>

<style lang="less" scoped>
.ja-table {
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 30px;
    }
    .handler {
    }
  }
}
</style>

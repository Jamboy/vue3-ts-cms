<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-15 14:57:01
 * @LastEditTime: 2021-12-15 17:43:05
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
          v-model:currentPage="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total,sizes, prev, pager, next, jumper"
          :total="totalPage"
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
  props: {
    listData: {
      type: Array,
      required: true,
    },
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
  },
  setup() {
    const currentPage = ref(1)
    const handleSizeChange = (val: any) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: any) => {
      console.log(`current page: ${val}`)
    }
    const totalPage = ref(100)
    return { currentPage, handleSizeChange, handleCurrentChange, totalPage }
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

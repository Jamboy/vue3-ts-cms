<!--
 * @Description: base-form
 * @Author: Jamboy
 * @Date: 2021-12-09 15:45:56
 * @LastEditTime: 2021-12-09 17:21:55
-->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-row :gutter="20">
        <template v-for="item of formItem" :key="item.label">
          <el-col :span="12" :offset="0">
            <el-form-item :label="item.label">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import type { IFormType } from '../types'
export default defineComponent({
  props: {
    formItem: {
      type: Array as PropType<IFormType[]>,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>

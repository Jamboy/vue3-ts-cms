<!--
 * @Description: 面包屑
 * @Author: Jamboy
 * @Date: 2021-12-13 09:38:53
 * @LastEditTime: 2021-12-13 13:58:11
-->

<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">
        {{ item.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types/types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => [],
    },
  },
  setup(props) {
    console.log(props.breadcrumbs)
    return {}
  },
})
</script>

<style scoped></style>

<!--
 * @Description: 用户信息
 * @Author: Jamboy
 * @Date: 2021-12-09 14:58:14
 * @LastEditTime: 2021-12-09 15:25:52
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      下拉
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserInfo',
  setup() {
    return {}
  },
})
</script>

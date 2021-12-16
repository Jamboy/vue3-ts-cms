<!--
 * @Description: 入口
 * @Author: Jamboy
 * @Date: 2021-12-03 15:32:23
 * @LastEditTime: 2021-12-15 17:30:46
-->
<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent({
  name: 'App',
  setup() {
    return {
      locale: zhCn,
    }
  },
})
</script>

<style lang="less"></style>

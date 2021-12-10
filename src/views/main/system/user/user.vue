<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-10 13:58:33
-->
<template>
  <div class="user">
    <h2>user</h2>
    <JAForm :formConfig="searchFormConfig"></JAForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JAForm from '@/base-ui/form'
import searchFormConfig from './config/search-config'
export default defineComponent({
  name: 'user',
  components: { JAForm },
  setup() {
    return { searchFormConfig }
  },
})
</script>

<style lang="less" scoped></style>

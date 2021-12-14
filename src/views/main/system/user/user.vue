<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-14 14:09:00
-->
<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
  </div>
</template>

<script lang="ts">
import searchFormConfig from './config/search-config'
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
  },
  setup() {
    return { searchFormConfig }
  },
})
</script>

<style lang="less" scoped></style>

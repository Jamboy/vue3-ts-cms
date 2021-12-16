<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-16 11:42:55
-->
<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    return { searchFormConfig, contentTableConfig }
  },
})
</script>

<style lang="less" scoped></style>

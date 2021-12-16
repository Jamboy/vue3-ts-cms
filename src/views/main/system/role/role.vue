<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:29
 * @LastEditTime: 2021-12-16 14:38:36
-->
<template>
  <div class="role">
    <h2>role</h2>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import contentTableConfig from './config/content.config'
import searchFormConfig from './config/search.config'
export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch },
  setup() {
    return { contentTableConfig, searchFormConfig }
  },
})
</script>

<style scoped></style>

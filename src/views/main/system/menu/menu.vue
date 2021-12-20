<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:03:05
 * @LastEditTime: 2021-12-20 11:10:43
-->
<template>
  <div class="menu">
    <h2>menu</h2>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search/src/page-search.vue'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import PageContent from '@/components/page-content/src/page-content.vue'

export default defineComponent({
  name: 'menu',
  setup() {
    return { searchFormConfig, contentTableConfig }
  },
  components: { PageSearch, PageContent },
})
</script>

<style scoped></style>

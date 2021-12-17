<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-17 10:02:52
-->
<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @searchClick="handleSearch"
    ></PageSearch>
    <PageContent
      ref="pageContent"
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { usePageSearchHook } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const { handleReset, handleSearch, pageContent } = usePageSearchHook()
    return {
      searchFormConfig,
      contentTableConfig,
      handleReset,
      handleSearch,
      pageContent,
    }
  },
})
</script>

<style lang="less" scoped></style>

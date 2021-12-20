<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:29
 * @LastEditTime: 2021-12-20 10:35:00
-->
<template>
  <div class="role">
    <h2>role</h2>
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @searchClick="handleSearch"
    ></PageSearch>
    <PageContent
      ref="pageContent"
      :contentTableConfig="contentTableConfig"
      pageName="role"
    >
      <template #status="{ row }">
        <el-button type="success" size="mini" plain>{{
          row.enable === '1' ? '上架' : '下架'
        }}</el-button>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import contentTableConfig from './config/content.config'
import searchFormConfig from './config/search.config'
import { usePageSearchHook } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch },
  setup() {
    const { handleReset, handleSearch, pageContent } = usePageSearchHook()

    return {
      contentTableConfig,
      searchFormConfig,
      pageContent,
      handleReset,
      handleSearch,
    }
  },
})
</script>

<style scoped></style>

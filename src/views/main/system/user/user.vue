<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2022-01-04 10:45:00
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
    >
      <template #status="{ row }">
        <el-button type="success" size="mini" plain>{{
          row.enable === '1' ? '启用' : '禁用'
        }}</el-button>
      </template>
    </PageContent>
    <PageModal :modalConfig="modalConfig"> </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import { modalConfig } from './config/modal.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { usePageSearchHook } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const { handleReset, handleSearch, pageContent } = usePageSearchHook()
    return {
      searchFormConfig,
      contentTableConfig,
      handleReset,
      handleSearch,
      pageContent,
      modalConfig,
    }
  },
})
</script>

<style lang="less" scoped></style>

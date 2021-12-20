<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:04:07
 * @LastEditTime: 2021-12-20 10:34:43
-->
<template>
  <div class="goods">
    <h2>goods</h2>
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @searchClick="handleSearch"
    ></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContent"
    >
      <template #imgUrl="{ row }">
        <el-image
          style="width: 60px; height: 60px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
        ></el-image>
      </template>

      <template #status="{ row }">
        <el-button type="success" size="mini" plain>{{
          row.enable === '1' ? '上架' : '下架'
        }}</el-button>
      </template>

      <template #oldPrice="{ row }"> ${{ row.oldPrice }} </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { defineComponent } from 'vue'
import contentTableConfig from './config/content.config'
import searchFormConfig from './config/search.config'
import { usePageSearchHook } from '@/hooks/usePageSearch'
PageContent
export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch,
  },
  setup() {
    const { pageContent, handleSearch, handleReset } = usePageSearchHook()
    return {
      contentTableConfig,
      searchFormConfig,
      pageContent,
      handleSearch,
      handleReset,
    }
  },
})
</script>

<style scoped></style>

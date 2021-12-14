<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-14 15:43:25
-->
<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import searchFormConfig from './config/search-config'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: { offset: 0, size: 10 },
    })
    return { searchFormConfig }
  },
})
</script>

<style lang="less" scoped></style>

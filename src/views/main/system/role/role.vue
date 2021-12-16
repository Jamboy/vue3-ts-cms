<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:29
 * @LastEditTime: 2021-12-16 11:45:14
-->
<template>
  <div class="role">
    <h2>role</h2>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import contentTableConfig from './config/content.config'
export default defineComponent({
  name: 'role',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  },
})
</script>

<style scoped></style>

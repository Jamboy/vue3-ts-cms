<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-13 15:01:49
-->
<template>
  <div class="user">
    <h2>user</h2>
    <JAForm :formConfig="searchFormConfig" :formData="formData"></JAForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import JAForm from '@/base-ui/form'
import searchFormConfig from './config/search-config'
export default defineComponent({
  name: 'user',
  components: { JAForm },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: '',
    })
    return { searchFormConfig, formData }
  },
})
</script>

<style lang="less" scoped></style>

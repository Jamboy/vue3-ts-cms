<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-14 10:50:16
-->
<template>
  <div class="user">
    <h2>user</h2>
    <JAForm :formConfig="searchFormConfig" v-model:formData="formData"></JAForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JAForm from '@/base-ui/form'
import searchFormConfig from './config/search-config'
export default defineComponent({
  name: 'user',
  components: { JAForm },
  setup() {
    const formData = ref({
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

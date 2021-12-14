<!--
 * @Description:页面搜索
 * @Author: Jamboy
 * @Date: 2021-12-14 14:03:03
 * @LastEditTime: 2021-12-14 15:11:29
-->
<template>
  <div>
    <JAForm :formConfig="searchFormConfig" v-model:formData="formData">
      <template v-slot:header>
        <h2>高级</h2>
      </template>
      <template #footer>
        <el-button>重置</el-button>
        <el-button type="primary">搜索</el-button>
      </template>
    </JAForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JAForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: { JAForm },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: '',
    })
    return { formData }
  },
})
</script>

<style scoped></style>

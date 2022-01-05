<!--
 * @Description:页面搜索
 * @Author: Jamboy
 * @Date: 2021-12-14 14:03:03
 * @LastEditTime: 2022-01-04 15:06:35
-->
<template>
  <div>
    <JAForm :formConfig="searchFormConfig" v-model:formData="formData">
      <template v-slot:header>
        <h2>高级</h2>
      </template>
      <template #footer>
        <el-button @click="handleReset"> 重置</el-button>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </template>
    </JAForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JAForm from '@/base-ui/form'

export default defineComponent({
  emits: ['resetClick', 'searchClick'],
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: { JAForm },
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriData: any = {}
    for (const item of formItems) {
      formOriData[item.propName] = ''
    }
    const formData = ref(formOriData)

    const handleReset = () => {
      // for (const key in formOriData) {
      //   formData.value[`${key}`] = formOriData[key]
      // }
      for (const key in formData.value) {
        formData.value[key] = ''
      }
      emit('resetClick')
    }

    const handleSearch = () => {
      emit('searchClick', formData.value)
    }

    return { formData, handleReset, handleSearch }
  },
})
</script>

<style scoped></style>

<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-09 11:02:01
 * @LastEditTime: 2021-12-09 17:21:14
-->
<template>
  <div class="user">
    <h2>user</h2>
    <JAForm :formItem="formItems"></JAForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import JAForm, { IFormType } from '@/base-ui/form'
export default defineComponent({
  name: 'user',
  components: { JAForm },
  setup() {
    const formItems: IFormType[] = [
      {
        label: '测试',
        placeholder: '请输入',
      },
      {
        label: '测试2',
        placeholder: '请输入测试2',
      },
    ]
    return { formItems }
  },
})
</script>

<style lang="less" scoped></style>

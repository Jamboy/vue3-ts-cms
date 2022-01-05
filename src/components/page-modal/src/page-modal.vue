<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-01-04 10:41:00
 * @LastEditTime: 2022-01-04 16:59:52
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    title="新建用户"
    width="30%"
    center
    destroy-on-close
  >
    <JAForm :formConfig="modalConfig" v-model:formData="formData"></JAForm>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import JAForm from '@/base-ui/form'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: { JAForm },
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
    },
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue: any) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.propName}`] = newValue[`${item.propName}`]
        }
      }
    )
    return { dialogVisible, formData }
  },
})
</script>

<style scoped></style>

<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-01-04 10:41:00
 * @LastEditTime: 2022-01-05 11:26:29
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
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleConfirmClick"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import JAForm from '@/base-ui/form'
import store from '@/store'
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
      default: () => ({}),
    },
    pageName: {
      type: String,
      required: true,
    },
    otherInfo: {
      type: Object,
      default: () => ({}),
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

    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (!Object.keys(props.defaultInfo).length) {
        // 新增
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
        })
      } else {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        })
      }
    }
    return { dialogVisible, formData, handleConfirmClick }
  },
})
</script>

<style scoped></style>

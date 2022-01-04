<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-01-04 10:41:00
 * @LastEditTime: 2022-01-04 10:44:26
-->
<template>
  <el-dialog v-model="dialogVisible" title="Warning" width="30%" center>
    <JAForm :formConfig="modalConfig"></JAForm>
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
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: { JAForm },
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const dialogVisible = ref(true)
    return { dialogVisible }
  },
})
</script>

<style scoped></style>

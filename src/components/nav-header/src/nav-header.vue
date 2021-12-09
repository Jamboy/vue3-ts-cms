<!--
 * @Description: header
 * @Author: Jamboy
 * @Date: 2021-12-09 09:27:56
 * @LastEditTime: 2021-12-09 09:59:11
-->
<template>
  <div @click="handleFoldClick">
    <el-icon size="24">
      <expand v-if="isFold" />
      <fold v-else />
    </el-icon>
  </div>
  <div>heade11r</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['fold-click'],
  setup(prop, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('fold-click', isFold.value)
    }
    return { handleFoldClick, isFold }
  },
})
</script>

<style scoped></style>

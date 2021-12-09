<!--
 * @Description: header
 * @Author: Jamboy
 * @Date: 2021-12-09 09:27:56
 * @LastEditTime: 2021-12-09 15:02:21
-->
<template>
  <div class="nav-header">
    <div @click="handleFoldClick" class="icon">
      <el-icon size="30">
        <expand v-if="isFold" />
        <fold v-else />
      </el-icon>
    </div>
    <div class="content">
      <div>ff</div>
      <div class="userinfo">
        <UserInfo></UserInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from '../src/user-info.vue'
export default defineComponent({
  emits: ['fold-click'],
  components: {
    UserInfo,
  },
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

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .icon {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  .content {
    display: flex;
    flex: 1;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

<!--
 * @Description: header
 * @Author: Jamboy
 * @Date: 2021-12-09 09:27:56
 * @LastEditTime: 2021-12-14 09:36:26
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
      <JABreadcrumb :breadcrumbs="breadcrumbs"></JABreadcrumb>
      <div class="userinfo">
        <UserInfo></UserInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import UserInfo from '../src/user-info.vue'
import JABreadcrumb from '@/base-ui/breadcrumb/index'
import { pathMapToBreadcrumbs } from '@/utils/map-menus'
export default defineComponent({
  emits: ['fold-click'],
  components: {
    UserInfo,
    JABreadcrumb,
  },

  setup(prop, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('fold-click', isFold.value)
    }

    const breadcrumbs = computed(() => {
      const store = useStore()
      const route = useRoute()
      return pathMapToBreadcrumbs(store.state.login.userMenus, route.path)
    })

    return { handleFoldClick, isFold, breadcrumbs }
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

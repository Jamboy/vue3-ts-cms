<!--
 * @Description: 首页
 * @Author: Jamboy
 * @Date: 2021-12-06 14:11:39
 * @LastEditTime: 2021-12-09 15:32:16
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :class="isCollapsed ? 'hideAside' : ''">
        <NavMenu :isCollapsed="isCollapsed"></NavMenu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @fold-click="handleFoldClick"></NavHeader>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapsed = ref(false)
    const handleFoldClick = (isFold: boolean) => {
      isCollapsed.value = isFold
    }
    return { handleFoldClick, isCollapsed }
  },
})
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;

  .page-info {
    background-color: #fff;
    height: 100%;
  }
}

.page-content {
  height: calc(100%-48px);
  .page-info {
    background: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  width: 210px;
  cursor: pointer;
  background-color: #001529;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  transition: width 0.1s;
  &::-webkit-scrollbar {
    display: none;
  }
  // transition: width 0.1s;
  // -webkit-transition: width 0.1s;
  // -moz-transition: width 0.1s;
  // -o-transition: width 0.1s;
}

.hideAside {
  width: 60px;
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>

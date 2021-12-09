<!--
 * @Description: 左侧菜单
 * @Author: Jamboy
 * @Date: 2021-12-08 16:18:39
 * @LastEditTime: 2021-12-09 09:53:57
-->

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.png" />
      <span class="title">v3</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      default-active="2"
      text-color="#fff"
      :collapse="isCollapsed"
      :collapse-transition="false"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <setting />
              </el-icon>
              <span>
                {{ item.name }}
              </span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    console.log('userMenus: ', userMenus)

    const handleOpen = () => {
      console.log('handleOpen: ')
    }
    const handleClose = () => {
      console.log('handleClose: ')
    }

    return { handleOpen, handleClose, userMenus }
  },
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>

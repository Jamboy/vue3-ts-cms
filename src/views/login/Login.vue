<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 21:17:42
 * @LastEditTime: 2021-12-06 14:20:59
-->
<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
  name: 'Login',
  components: {
    LoginPanel,
  },
})
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<!--
 * @Description: 登录面板
 * @Author: Jamboy
 * @Date: 2021-12-06 14:10:12
 * @LastEditTime: 2021-12-07 18:16:17
-->

<template>
  <div class="login-panel">
    <h1 class="login-title">BACKGROUNDSYS</h1>
    <div class="content">
      <el-tabs type="border-card" stretch @tab-click="onTabChange">
        <el-tab-pane>
          <template #label>
            <el-icon>
              <user-filled />
            </el-icon>
            Login
          </template>
          <LoginAccount ref="loginAccountRef"></LoginAccount>
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <el-icon> <cellphone /> </el-icon>Register
          </template>
          <LoginPhone ref="loginPhoneRef"></LoginPhone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="password-container">
      <el-checkbox
        v-model="isKeepPassword"
        label="记住密码"
        :indeterminate="false"
        @change="onKeepPwdChange"
      ></el-checkbox>
      <span class="forget-password">忘记密码</span>
    </div>
    <div>
      <el-button style="width: 100%" type="primary" @click="handleLoginClick"
        >{{ btnText }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

import useLoginHook from '../hook/userLoginHook'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const btnText = ref('Login')
    const isKeepPassword = ref(false)
    const onKeepPwdChange = () => {
      console.log('onKeepPwdChange: ', isKeepPassword.value)
    }

    const { onTabChange, handleLoginClick, loginAccountRef, loginPhoneRef } =
      useLoginHook(isKeepPassword.value)

    return {
      btnText,
      isKeepPassword,
      onKeepPwdChange,
      onTabChange,
      handleLoginClick,
      loginAccountRef,
      loginPhoneRef,
    }
  },
})
</script>

<style lang="less" scoped>
.login-panel {
  height: 100px;
  width: 340px;
  margin-bottom: 340px;
}

.password-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.forget-password {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}
</style>

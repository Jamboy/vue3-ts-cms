<!--
 * @Description: 登录面板
 * @Author: Jamboy
 * @Date: 2021-12-06 14:10:12
 * @LastEditTime: 2021-12-06 16:40:18
-->

<template>
  <div class="login-panel">
    <h1 class="login-title">BACKGROUNDSYSTEM</h1>
    <div class="content">
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <div>
              <el-icon><user-filled /></el-icon>
              Login
            </div>
          </template>
          <div>
            <el-form
              label-position="left"
              label-width="80px"
              :model="userFormData"
            >
              <el-form-item label="Name" required>
                <el-input v-model="userFormData.name"></el-input>
              </el-form-item>
              <el-form-item label="Password" required>
                <el-input v-model="userFormData.password"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <el-icon><cellphone /></el-icon>Register
          </template>
          <div>
            <el-form
              label-position="left"
              label-width="80px"
              :model="userFormData"
            >
              <el-form-item label="Phone" required>
                <el-input v-model="userFormData.name"></el-input>
              </el-form-item>
              <el-form-item label="Password" required>
                <el-input v-model="userFormData.password"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="password-container">
      <el-checkbox label="记住密码" :indeterminate="false"></el-checkbox>
      <span class="forget-password">忘记密码</span>
    </div>
    <div>
      <el-button style="width: 100%" type="primary" size="default"
        >Login
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const userFormData = reactive({
      name: '',
      password: '',
    })

    return { userFormData }
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

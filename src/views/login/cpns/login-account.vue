<!--
 * @Description: 账号登录面板
 * @Author: Jamboy
 * @Date: 2021-12-07 10:17:58
 * @LastEditTime: 2021-12-07 18:17:17
-->
<template>
  <div>
    <el-form
      label-position="left"
      label-width="80px"
      :model="account"
      :rules="accountRules"
      ref="accountFormRef"
    >
      <el-form-item label="Name" prop="name" required>
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password" required>
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { accountRules } from '../config/account-config'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: '',
    })

    const accountFormRef = ref<InstanceType<typeof ElForm>>()
    const router = useRouter()
    const loginAction = (isKeepPassword: boolean) => {
      console.log('loginAction: ', '正在登陸')
      accountFormRef.value?.validate((valid) => {
        console.log(valid)
        if (valid) {
          if (isKeepPassword) {
            savePassword()
          }
          console.log('loginAction: ', '校验通过，登录中')
          router.push({
            name: 'Main',
          })
        }
      })
    }

    const savePassword = () => {
      console.log('保存密码')
    }

    return { account, accountRules, loginAction, accountFormRef }
  },
})
</script>

<style scoped></style>

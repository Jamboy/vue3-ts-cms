<!--
 * @Description: 账号登录面板
 * @Author: Jamboy
 * @Date: 2021-12-07 10:17:58
 * @LastEditTime: 2021-12-13 09:28:27
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
import { useStore } from 'vuex'
import { accountRules } from '../config/account-config'

import localCache from '../../../utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? '',
    })

    const accountFormRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword = true) => {
      accountFormRef.value?.validate((valid) => {
        console.log(valid)
        if (valid) {
          if (isKeepPassword) {
            savePassword()
          }
          console.log('loginAction: ', '校验通过，登录中的')
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    const savePassword = () => {
      console.log('保存密码')
      localCache.setCache('name', account.name)
      localCache.setCache('password', account.password)
    }

    return { account, accountRules, loginAction, accountFormRef }
  },
})
</script>

<style scoped></style>

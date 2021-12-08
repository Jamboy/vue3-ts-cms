<!--
 * @Description: 手机号登录组件
 * @Author: Jamboy
 * @Date: 2021-12-06 16:52:43
 * @LastEditTime: 2021-12-07 18:21:34
-->

<template>
  <div>
    <el-form
      ref="phoneFormRef"
      :model="phoneData"
      label-width="80px"
      :rules="phoneRules"
      label-position="left"
    >
      <el-form-item label="Phone" prop="phone" required>
        <el-input v-model="phoneData.phone"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password" required>
        <el-input v-model="phoneData.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useRouter } from 'vue-router'
import { phoneRules } from '../config/phone-config'
import LocalCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const phoneData = reactive({
      phone: '',
      password: '',
    })

    const phoneFormRef = ref<InstanceType<typeof ElForm>>()
    const router = useRouter()
    const loginAction = (isKeepPassword: boolean) => {
      console.log('loginAction: ', '正在校验')
      phoneFormRef.value?.validate((valid) => {
        console.log('valid: ', valid)
        if (valid) {
          if (isKeepPassword) {
            savePassword()
          }
          console.log('loginAction: ', '检验通过')
          router.push({
            name: 'Main',
          })
        } else {
          console.log('loginAction: ', '未检验通过')
        }
      })
    }

    const savePassword = () => {
      console.log('保存密码')
      LocalCache.setCache('phonePwd', phoneData)
    }
    return { phoneRules, phoneData, loginAction, phoneFormRef }
  },
})
</script>

<style scoped></style>

/*
 * @Description: 登录面板登录hook
 * @Author: Jamboy
 * @Date: 2021-12-07 16:35:14
 * @LastEditTime: 2021-12-08 09:40:00
 */
import { ref } from 'vue'
import { TabsPaneContext } from 'element-plus'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default function useLoginHook(isKeepPassword: boolean): any {
  const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
  const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
  const isAccountLogin = ref(true)
  const onTabChange = (tab: TabsPaneContext): void => {
    if (tab.index === '0') {
      isAccountLogin.value = true
    } else {
      isAccountLogin.value = false
    }
  }

  const handleLoginClick = (): void => {
    if (isAccountLogin.value) {
      console.log('isAccountLogin: ', isAccountLogin)
      console.log('isKeepPassword: ', isKeepPassword)
      // fixme: 传过来的值非响应式？
      loginAccountRef.value?.loginAction(true)
    } else {
      console.log('loginPhoneRef: ')
      loginPhoneRef.value?.loginAction(isKeepPassword)
    }
  }

  return { onTabChange, handleLoginClick, loginAccountRef, loginPhoneRef }
}

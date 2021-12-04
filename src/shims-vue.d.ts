/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 18:00:04
 * @LastEditTime: 2021-12-04 15:32:29
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare const VUE_APP_BASE_NAME:string

/*
 * @Description: 类型
 * @Author: Jamboy
 * @Date: 2021-12-04 17:46:30
 * @LastEditTime: 2021-12-06 10:42:20
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器
interface JARequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (config: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (config: any) => any
}

// 扩展类型
interface JARequestConfig extends AxiosRequestConfig {
  interceptors?: JARequestInterceptors
  showLoading?: boolean
}

export { JARequestInterceptors, JARequestConfig }

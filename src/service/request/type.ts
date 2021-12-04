/*
 * @Description: 类型
 * @Author: Jamboy
 * @Date: 2021-12-04 17:46:30
 * @LastEditTime: 2021-12-04 17:49:28
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器
interface JARequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (config: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (config: any) => any
}

// 扩展类型
interface JARequestConfig extends AxiosRequestConfig {
  interceptors?: JARequestInterceptors
}

export { JARequestInterceptors, JARequestConfig }

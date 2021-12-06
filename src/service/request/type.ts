/*
 * @Description: 类型
 * @Author: Jamboy
 * @Date: 2021-12-04 17:46:30
 * @LastEditTime: 2021-12-06 12:00:14
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器
interface JARequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (config: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorsCatch?: (config: any) => any
}

// 扩展类型
interface JARequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JARequestInterceptors<T>
  showLoading?: boolean
}

export { JARequestInterceptors, JARequestConfig }

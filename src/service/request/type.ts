/*
 * @Description: 类型
 * @Author: Jamboy
 * @Date: 2021-12-04 17:46:30
 * @LastEditTime: 2021-12-04 17:46:51
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface JARequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (config: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (config: any) => any
}

interface JARequestConfig extends AxiosRequestConfig {
  interceptors?: JARequestInterceptors
}

export { JARequestInterceptors, JARequestConfig }

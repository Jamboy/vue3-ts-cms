/*
 * @Description: 请求方法封装
 * @Author: Jamboy
 * @Date: 2021-12-04 16:00:33
 * @LastEditTime: 2021-12-04 16:42:04
 */
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface JARequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (config: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (config: any) => any
}

interface JARequestConfig extends AxiosRequestConfig {
  interceptors?: JARequestInterceptors
}

class JARequest {
  instance: AxiosInstance
  interceptors?: JARequestInterceptors

  constructor(config: JARequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
  }

  request(config: JARequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log('res: ', res)
    })
  }
}

export default JARequest

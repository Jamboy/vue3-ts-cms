/*
 * @Description: 请求方法封装
 * @Author: Jamboy
 * @Date: 2021-12-04 16:00:33
 * @LastEditTime: 2021-12-04 18:19:26
 */
import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance } from 'axios'
import type { JARequestInterceptors, JARequestConfig } from './type'

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

    // // 所有实例的拦截器
    // this.instance.interceptors.response.use(
    //   (config) => {
    //     return config
    //   },
    //   (err) => {
    //     return err
    //   }
    // )
  }

  request(config: JARequestConfig): any {
    // 定义每个方法的拦截
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptors) {
        res = config.interceptors.responseInterceptors(res)
      }
    })
  }
}

export default JARequest

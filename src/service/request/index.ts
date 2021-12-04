/*
 * @Description: 请求方法封装
 * @Author: Jamboy
 * @Date: 2021-12-04 16:00:33
 * @LastEditTime: 2021-12-04 17:47:40
 */
import axios from 'axios'
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
  }

  request(config: JARequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log('res: ', res)
    })
  }
}

export default JARequest

/*
 * @Description: 请求方法封装
 * @Author: Jamboy
 * @Date: 2021-12-04 16:00:33
 * @LastEditTime: 2021-12-14 15:36:31
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { JARequestInterceptors, JARequestConfig } from './type'
import 'element-plus/es/components/loading/style/css'
import { ElLoading, ILoadingInstance } from 'element-plus'

const DEFAULT_LOADING = true
class JARequest {
  instance: AxiosInstance
  interceptors?: JARequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: JARequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    this.createGlobalInterceptor()
    this.createInstanceInterceptor()
  }

  /**
   * @description: 全局拦截器添加
   * @param {*}
   * @return {*}
   */
  protected createGlobalInterceptor(): void {
    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorsCatch
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorsCatch
    )
  }

  /**
   * @description: 实例拦截器添加
   * @param {*}
   * @return {*}
   */
  protected createInstanceInterceptor(): void {
    // 所有实例请求前的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 显示全局加载状态
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, 0.1)',
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    // 所有实例返回的拦截器
    this.instance.interceptors.response.use(
      (config) => {
        // 关闭全局加载状态
        this.loading?.close()
        return config
      },
      (err) => {
        return err
      }
    )
  }

  request<T = any>(config: JARequestConfig<T>): Promise<T> {
    return new Promise((resolver, reject) => {
      // 定义每个方法的拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolver(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T = any>(config: JARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: JARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: JARequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: JARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default JARequest

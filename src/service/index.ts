/*
 * @Description: service 统一出口
 * @Author: Jamboy
 * @Date: 2021-12-04 15:58:44
 * @LastEditTime: 2021-12-31 16:52:01
 */
import JARequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const jaRequest = new JARequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('requestInterceptors: ', '请求前拦截')
      const token = localCache.getCache('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      console.log('responseInterceptors: ', config)
      return config.data
    },
    responseInterceptorsCatch: (err) => {
      return err
    },
  },
})

export default jaRequest

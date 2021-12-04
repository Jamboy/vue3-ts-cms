/*
 * @Description: service 统一出口
 * @Author: Jamboy
 * @Date: 2021-12-04 15:58:44
 * @LastEditTime: 2021-12-04 17:15:28
 */
import JARequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const jaRequest = new JARequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('requestInterceptors: ', '请求前拦截')
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (config) => {
      console.log('responseInterceptors: ', config)
      return config.data
    },
    responseInterceptorsCatch: (err) => {
      return err
    },
  },
})

export default jaRequest

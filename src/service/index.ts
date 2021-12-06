/*
 * @Description: service 统一出口
 * @Author: Jamboy
 * @Date: 2021-12-04 15:58:44
 * @LastEditTime: 2021-12-06 10:57:06
 */
import JARequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const jaRequest = new JARequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('requestInterceptors: ', '请求前拦截')
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
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

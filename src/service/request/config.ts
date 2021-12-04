/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-04 15:27:41
 * @LastEditTime: 2021-12-04 15:29:55
 */
let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_NAME = 'test'
  BASE_URL = 'te'
} else if (process.env.NODE_ENV === 'production') {
  BASE_NAME = 'test'
  BASE_URL = 'te'
} else {
  BASE_NAME = 'test'
  BASE_URL = 'te'
}

export { BASE_URL, BASE_NAME }

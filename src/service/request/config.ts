/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-04 15:27:41
 * @LastEditTime: 2021-12-08 11:00:02
 */
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
}

export { BASE_URL, TIME_OUT }

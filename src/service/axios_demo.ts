/*
 * @Description: axios
 * @Author: Jamboy
 * @Date: 2021-12-04 15:00:35
 * @LastEditTime: 2021-12-04 15:06:47
 */
import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

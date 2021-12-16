/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-15 16:02:40
 * @LastEditTime: 2021-12-15 16:24:29
 */
import { App } from 'vue'
import { formatUtcTime } from '@/utils/time-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(time: string) {
      return formatUtcTime(time)
    },
  }
}

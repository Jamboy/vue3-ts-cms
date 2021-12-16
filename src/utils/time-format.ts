/*
 * @Description: 日期时间转换
 * @Author: Jamboy
 * @Date: 2021-12-15 16:21:05
 * @LastEditTime: 2021-12-15 16:24:57
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DEF_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatUtcTime(
  utcStr: string,
  format: string = DEF_DATE_FORMAT
): string {
  return dayjs.utc(utcStr).format(format)
}

/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-15 16:01:39
 * @LastEditTime: 2021-12-15 16:09:22
 */

import { App } from 'vue'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerProperties)
}

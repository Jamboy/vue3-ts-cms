/*
 * @Description: 缓存
 * @Author: Jamboy
 * @Date: 2021-12-07 17:47:00
 * @LastEditTime: 2021-12-07 18:08:45
 */

class LocalCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string): any {
    return JSON.parse(localStorage.getItem(key) ?? '')
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()

/*
 * @Description: 缓存
 * @Author: Jamboy
 * @Date: 2021-12-07 17:47:00
 * @LastEditTime: 2021-12-08 09:29:56
 */

class LocalCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()

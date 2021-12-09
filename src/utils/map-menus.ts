/*
 * @Description: 菜单>routers
 * @Author: Jamboy
 * @Date: 2021-12-09 11:39:13
 * @LastEditTime: 2021-12-09 13:52:04
 */
import type { RouteRecord, RouteRecordRaw } from 'vue-router'
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const userRoutes: RouteRecordRaw[] = []

  // 1. 获取到所有的routers
  const allRoutes: RouteRecord[] = []
  // webpack 查找文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  const filePaths = routeFiles.keys()
  filePaths.forEach((key) => {
    // 拿到定义好的route对象
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 根据userMenus生成对应的routes
  allRoutes.forEach((route) => {
    console.log('route.path: ', route.path)
    userMenus.forEach((menu) => {
      menu.children.forEach((child: any) => {
        console.log('child.url: ', child.url)
        console.log(child.url === route.path)
        if (route.path === child.url) {
          console.log('匹配')
          userRoutes.push(route)
        }
      })
    })
  })
  console.log(userRoutes)
  return userRoutes
}

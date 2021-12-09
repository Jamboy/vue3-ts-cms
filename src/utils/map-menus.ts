/*
 * @Description: 菜单>routers
 * @Author: Jamboy
 * @Date: 2021-12-09 11:39:13
 * @LastEditTime: 2021-12-09 14:16:57
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
  // allRoutes.forEach((route) => {
  //   console.log('route.path: ', route.path)
  //   userMenus.forEach((menu) => {
  //     menu.children.forEach((child: any) => {
  //       console.log('child.url: ', child.url)
  //       console.log(child.url === route.path)
  //       if (route.path === child.url) {
  //         console.log('匹配')
  //         userRoutes.push(route)
  //       }
  //     })
  //   })
  // })

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          userRoutes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return userRoutes
}

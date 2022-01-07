/*
 * @Description: 菜单>routers
 * @Author: Jamboy
 * @Date: 2021-12-09 11:39:13
 * @LastEditTime: 2022-01-06 17:03:01
 */
import type { RouteRecord, RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types/types'

let firstMenu: any = null
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
        if (!firstMenu) {
          firstMenu = menu
        }
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

export function pathMapToMenu(
  userMenus: any[],
  path: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], path)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

export function pathMapToBreadcrumbs(userMenus: any[], path: string): any {
  const breadcrumbs: IBreadcrumb[] = []
  // 数组 引用传递
  pathMapToMenu(userMenus, path, breadcrumbs)
  return breadcrumbs
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetPermissions = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(userMenus)
  return permissions
}

export function mapMenusToLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leafKeys
}

export { firstMenu }

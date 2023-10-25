import type { RouteRecordRaw } from 'vue-router/auto'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面标题
     */
    title?: string
    /**
     * 页面描述
     */
    describe?: string
  }
}

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])

    return route
  }

  return setupLayouts([route])[0]
}

// https://router.vuejs.org/zh/guide/
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  extendRoutes(routes) {
    return routes.map((route) => {
      // For each route, pass it to recursiveLayouts, which will apply layouts properly
      // (without duplicating or accidentally double-wrapping components).

      return recursiveLayouts(route)
    })
  },
})

router.afterEach((to) => {
  let title = to.meta.title
  title = title ? `${import.meta.env.VITE_APP_TITLE}-${title}` : import.meta.env.VITE_APP_TITLE
  setTitle(title)
})

export default router

import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'

/**
 * Extracted from vite-ssg
 */
export interface AppCtx<HasRouter extends boolean = true> {
  app: App<Element>
  router: HasRouter extends true ? Router : undefined
  routes: HasRouter extends true ? RouteRecordRaw[] : undefined
  initialState: Record<string, any>
  isClient: boolean
}

export type UserModule = (ctx: AppCtx) => void

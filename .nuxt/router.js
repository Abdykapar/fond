import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e6a7e2e = () => interopDefault(import('../pages/charity.vue' /* webpackChunkName: "pages/charity" */))
const _2a6e5963 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7e890de6 = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _232a0866 = () => interopDefault(import('../pages/links/index.vue' /* webpackChunkName: "pages/links/index" */))
const _2f8dbb90 = () => interopDefault(import('../pages/media/index.vue' /* webpackChunkName: "pages/media/index" */))
const _372e82d5 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _61c8a732 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _47ba6cdf = () => interopDefault(import('../pages/about/about-us.vue' /* webpackChunkName: "pages/about/about-us" */))
const _cdc5e20e = () => interopDefault(import('../pages/about/chairman/index.vue' /* webpackChunkName: "pages/about/chairman/index" */))
const _7c35efa3 = () => interopDefault(import('../pages/about/history.vue' /* webpackChunkName: "pages/about/history" */))
const _4c8c0398 = () => interopDefault(import('../pages/about/organization.vue' /* webpackChunkName: "pages/about/organization" */))
const _3c6aea1c = () => interopDefault(import('../pages/activity/event/index.vue' /* webpackChunkName: "pages/activity/event/index" */))
const _2c24caa2 = () => interopDefault(import('../pages/activity/organizations/index.vue' /* webpackChunkName: "pages/activity/organizations/index" */))
const _2ad244d0 = () => interopDefault(import('../pages/activity/project.vue' /* webpackChunkName: "pages/activity/project" */))
const _1f3708be = () => interopDefault(import('../pages/about/chairman/_id.vue' /* webpackChunkName: "pages/about/chairman/_id" */))
const _22a4c384 = () => interopDefault(import('../pages/activity/event/_id.vue' /* webpackChunkName: "pages/activity/event/_id" */))
const _6a490d8a = () => interopDefault(import('../pages/activity/organizations/_id.vue' /* webpackChunkName: "pages/activity/organizations/_id" */))
const _76a55c64 = () => interopDefault(import('../pages/gallery/_id.vue' /* webpackChunkName: "pages/gallery/_id" */))
const _50b9367d = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/charity",
    component: _0e6a7e2e,
    name: "charity___ky"
  }, {
    path: "/en",
    component: _2a6e5963,
    name: "index___en"
  }, {
    path: "/gallery",
    component: _7e890de6,
    name: "gallery___ky"
  }, {
    path: "/links",
    component: _232a0866,
    name: "links___ky"
  }, {
    path: "/media",
    component: _2f8dbb90,
    name: "media___ky"
  }, {
    path: "/news",
    component: _372e82d5,
    name: "news___ky"
  }, {
    path: "/ru",
    component: _2a6e5963,
    name: "index___ru"
  }, {
    path: "/search",
    component: _61c8a732,
    name: "search___ky"
  }, {
    path: "/about/about-us",
    component: _47ba6cdf,
    name: "about-about-us___ky"
  }, {
    path: "/about/chairman",
    component: _cdc5e20e,
    name: "about-chairman___ky"
  }, {
    path: "/about/history",
    component: _7c35efa3,
    name: "about-history___ky"
  }, {
    path: "/about/organization",
    component: _4c8c0398,
    name: "about-organization___ky"
  }, {
    path: "/activity/event",
    component: _3c6aea1c,
    name: "activity-event___ky"
  }, {
    path: "/activity/organizations",
    component: _2c24caa2,
    name: "activity-organizations___ky"
  }, {
    path: "/activity/project",
    component: _2ad244d0,
    name: "activity-project___ky"
  }, {
    path: "/en/charity",
    component: _0e6a7e2e,
    name: "charity___en"
  }, {
    path: "/en/gallery",
    component: _7e890de6,
    name: "gallery___en"
  }, {
    path: "/en/links",
    component: _232a0866,
    name: "links___en"
  }, {
    path: "/en/media",
    component: _2f8dbb90,
    name: "media___en"
  }, {
    path: "/en/news",
    component: _372e82d5,
    name: "news___en"
  }, {
    path: "/en/search",
    component: _61c8a732,
    name: "search___en"
  }, {
    path: "/ru/charity",
    component: _0e6a7e2e,
    name: "charity___ru"
  }, {
    path: "/ru/gallery",
    component: _7e890de6,
    name: "gallery___ru"
  }, {
    path: "/ru/links",
    component: _232a0866,
    name: "links___ru"
  }, {
    path: "/ru/media",
    component: _2f8dbb90,
    name: "media___ru"
  }, {
    path: "/ru/news",
    component: _372e82d5,
    name: "news___ru"
  }, {
    path: "/ru/search",
    component: _61c8a732,
    name: "search___ru"
  }, {
    path: "/en/about/about-us",
    component: _47ba6cdf,
    name: "about-about-us___en"
  }, {
    path: "/en/about/chairman",
    component: _cdc5e20e,
    name: "about-chairman___en"
  }, {
    path: "/en/about/history",
    component: _7c35efa3,
    name: "about-history___en"
  }, {
    path: "/en/about/organization",
    component: _4c8c0398,
    name: "about-organization___en"
  }, {
    path: "/en/activity/event",
    component: _3c6aea1c,
    name: "activity-event___en"
  }, {
    path: "/en/activity/organizations",
    component: _2c24caa2,
    name: "activity-organizations___en"
  }, {
    path: "/en/activity/project",
    component: _2ad244d0,
    name: "activity-project___en"
  }, {
    path: "/ru/about/about-us",
    component: _47ba6cdf,
    name: "about-about-us___ru"
  }, {
    path: "/ru/about/chairman",
    component: _cdc5e20e,
    name: "about-chairman___ru"
  }, {
    path: "/ru/about/history",
    component: _7c35efa3,
    name: "about-history___ru"
  }, {
    path: "/ru/about/organization",
    component: _4c8c0398,
    name: "about-organization___ru"
  }, {
    path: "/ru/activity/event",
    component: _3c6aea1c,
    name: "activity-event___ru"
  }, {
    path: "/ru/activity/organizations",
    component: _2c24caa2,
    name: "activity-organizations___ru"
  }, {
    path: "/ru/activity/project",
    component: _2ad244d0,
    name: "activity-project___ru"
  }, {
    path: "/en/about/chairman/:id",
    component: _1f3708be,
    name: "about-chairman-id___en"
  }, {
    path: "/en/activity/event/:id",
    component: _22a4c384,
    name: "activity-event-id___en"
  }, {
    path: "/en/activity/organizations/:id",
    component: _6a490d8a,
    name: "activity-organizations-id___en"
  }, {
    path: "/ru/about/chairman/:id",
    component: _1f3708be,
    name: "about-chairman-id___ru"
  }, {
    path: "/ru/activity/event/:id",
    component: _22a4c384,
    name: "activity-event-id___ru"
  }, {
    path: "/ru/activity/organizations/:id",
    component: _6a490d8a,
    name: "activity-organizations-id___ru"
  }, {
    path: "/about/chairman/:id",
    component: _1f3708be,
    name: "about-chairman-id___ky"
  }, {
    path: "/activity/event/:id",
    component: _22a4c384,
    name: "activity-event-id___ky"
  }, {
    path: "/activity/organizations/:id",
    component: _6a490d8a,
    name: "activity-organizations-id___ky"
  }, {
    path: "/en/gallery/:id",
    component: _76a55c64,
    name: "gallery-id___en"
  }, {
    path: "/en/news/:id",
    component: _50b9367d,
    name: "news-id___en"
  }, {
    path: "/ru/gallery/:id",
    component: _76a55c64,
    name: "gallery-id___ru"
  }, {
    path: "/ru/news/:id",
    component: _50b9367d,
    name: "news-id___ru"
  }, {
    path: "/gallery/:id",
    component: _76a55c64,
    name: "gallery-id___ky"
  }, {
    path: "/news/:id",
    component: _50b9367d,
    name: "news-id___ky"
  }, {
    path: "/",
    component: _2a6e5963,
    name: "index___ky"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

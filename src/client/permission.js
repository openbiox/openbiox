import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import store from './store'
var rawTitle = document.title
NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar}
  NProgress.inc()
  if (to.meta.title) {
    document.title = rawTitle + ' - ' + to.meta.title
    document.shortTitle = to.meta.title
  } else {
    document.title = rawTitle + ' - Home Page'
  }
  if (to.name) {
    document.pageName = to.meta.pageName
  }
  document.useBanner = to.meta.useBanner
  if (to.meta.requiresAuth) {
    if (store.state.permission.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      NProgress.done() // finish progress bar
    }
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.inc()
  NProgress.done() // finish progress bar
})

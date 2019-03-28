import Vue from 'vue'
import Router from 'vue-router'
const baseURL = process.env.VUE_APP_BASE_URL
Vue.use(Router)

var routes = [{
  path: baseURL,
  name: 'root',
  component: () => import('@/components/core/HomePage'),
  meta: {
    useBanner: false,
    pageName: 'Home'
  }
},
{
  path: '/home',
  name: 'Home',
  component: () => import('@/components/core/HomePage'),
  meta: {
    useBanner: false,
    pageName: 'Home'
  }
},
{
  path: '/login',
  name: 'Login',
  component: () => import('@/components/admin/Login'),
  meta: {
    title: 'Login',
    useBanner: false,
    pageName: 'Login'
  }
},
{
  path: '/logout',
  name: 'Logout',
  component: () => import('@/components/admin/Logout'),
  meta: {
    title: 'Logout',
    useBanner: false,
    pageName: 'Logout'
  }
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@/components/core/DashboardPage'),
  meta: {
    title: 'Dashboard',
    useBanner: true,
    pageName: 'Dashboard',
    requiresAuth: true
  }
},
{
  path: '/about',
  name: 'About',
  component: () => import('@/components/core/AboutPage'),
  meta: {
    title: 'About Us',
    useBanner: true,
    pageName: 'About'
  }
}
]

// children route
for (var i = 0; i < routes.length; i++) {
  if (routes[i].name === 'Dashboard') {
    routes[i]['children'] = [{
      name: 'DashbordPage-' + i,
      path: ':sectionName',
      component: () => import('@/components/core/DashboardPage'),
      meta: {
        title: 'Dashboard',
        useBanner: true,
        pageName: 'Dashboard',
        requiresAuth: true
      }
    }]
    routes[i]['children'].push({
      name: 'DashbordSubPage-' + i,
      path: ':sectionName/:itemName',
      component: () => import('@/components/core/DashboardPage'),
      meta: {
        title: 'Dashboard',
        useBanner: true,
        pageName: 'Dashboard',
        requiresAuth: true
      }
    })
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

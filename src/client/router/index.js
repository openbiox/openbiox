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
  path: '/members',
  name: 'Members',
  component: () => import('@/components/core/MembersPage'),
  meta: {
    title: 'Members',
    useBanner: true,
    pageName: 'Members'
  }
},
{
  path: '/projects',
  name: 'Projects',
  component: () => import('@/components/core/ProjectsPage'),
  meta: {
    title: 'Projects',
    useBanner: true,
    pageName: 'Projects'
  }
},
{
  path: '/news_events',
  name: 'News & Events',
  component: () => import('@/components/core/NewsEventsPage'),
  meta: {
    title: 'News & Events',
    useBanner: true,
    pageName: 'News & Events'
  }
},
{
  path: '/contact',
  name: 'Contact Us',
  component: () => import('@/components/core/ContactUsPage'),
  meta: {
    title: 'Contact Us',
    useBanner: true,
    pageName: 'Contact Us'
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

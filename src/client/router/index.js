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

export default new Router({
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

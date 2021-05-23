import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'education'
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Overview/Education/Education.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Overview/Skills/Skills.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Overview/Experience/Experience.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Overview/Projects/Projects.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Overview/Blog/Blog.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Overview/Contact/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

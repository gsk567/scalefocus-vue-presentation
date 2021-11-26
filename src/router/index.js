import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import('../views/Basic.vue')
  },
  {
    path: '/fundamentals',
    name: 'Fundamentals',
    component: () => import('../views/Fundamentals.vue')
  },
  {
    path: '/short-ways',
    name: 'ShortWays',
    component: () => import('../views/ShortWays.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/georgi-karagogov',
    name: 'GeorgiKaragogov',
    component: () => import('../views/GeorgiKaragogov.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

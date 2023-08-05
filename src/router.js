import { createRouter, createWebHistory } from 'vue-router'

import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: Footer
  },
  {
    path: '/about',
    name: 'about',
    component: Content
  },
]

let router = createRouter({
  history: createWebHistory('/'),
  routes,
  
})

export default router

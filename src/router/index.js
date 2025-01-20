import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import CircleProgress from '@/views/CircleProgress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/CircleProgress',
      name: 'CircleProgress',
      component: CircleProgress,
    },
  ],
})

export default router

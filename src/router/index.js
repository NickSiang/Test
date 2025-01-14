import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import DonateView from '@/views/DonateView.vue'
import DonatePage01 from '@/views/DonatePage01.vue'
import DonatePage02 from '@/views/DonatePage02.vue'
import DonatePage03 from '@/views/DonatePage03.vue'
import DonatePage04 from '@/views/DonatePage04.vue'
import ServiceView from '@/views/ServiceView.vue'
import NewView from '@/views/NewView.vue'
import ActivePage01 from '@/views/ActivePage01.vue'
import ActivePage02 from '@/views/ActivePage02.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView,
    },
    {
      path: '/DonateView',
      name: 'DonateView',
      component: DonateView,
    },
    {
      path: '/DonatePage01',
      name: 'DonatePage01',
      component: DonatePage01,
    },
    {
      path: '/DonatePage02',
      name: 'DonatePage02',
      component: DonatePage02,
    },
    {
      path: '/DonatePage03',
      name: 'DonatePage03',
      component: DonatePage03,
    },
    {
      path: '/DonatePage04',
      name: 'DonatePage04',
      component: DonatePage04,
    },
    {
      path: '/ServiceView',
      name: 'ServiceView',
      component: ServiceView,
    },
    {
      path: '/NewView',
      name: 'NewView',
      component: NewView,
    },
    {
      path: '/ActivePage01',
      name: 'ActivePage01',
      component: ActivePage01,
    },
    {
      path: '/ActivePage02',
      name: 'ActivePage02',
      component: ActivePage02,
    },
  ],
})

export default router

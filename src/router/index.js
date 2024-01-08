import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ButtonView from '@/views/ButtonView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produto',
      name: 'produto',
      component: ProductView
    },
    {
      path: '/demostracaobtn',
      name: 'buttons',
      component: ButtonView
    }

  ]
})

export default router

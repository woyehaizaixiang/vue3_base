import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/login2',
    name: 'Login2',
    component: () => import('../views/login2.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout.vue'),
    children: [
      {
        path: ':pathMatch(.*)',
        component: () => import('../views/404.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

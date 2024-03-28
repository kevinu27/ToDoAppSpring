import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // Ruta para la vista de detalle de la tarea con parámetro dinámico ":id"
      path: '/task/:id',
      name: 'TaskDetail',
      component: () => import('../views/TaskDetailView.vue') // Asegúrate de crear este componente
    }
  ]
})

export default router

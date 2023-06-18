import { createRouter, createWebHistory } from 'vue-router'
import PopularView from '../views/PopularView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/popular',
      name: 'popular',
      component: PopularView
    },
    {
      path: '/top_rated',
      name: 'top-rated',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TopRatedView.vue')
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: () => import('../views/UpcomingView.vue')
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    }
  ]
})

export default router

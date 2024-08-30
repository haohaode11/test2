import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import test1 from './views/test1.vue'
import test2 from './views/test2.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test1', component: test1 },
  { path: '/test2', component: test2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

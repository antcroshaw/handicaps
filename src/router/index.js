import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Handicaps from '../components/Handicaps'
import About from '../components/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/handicaps',
    name: 'handicaps',
    component: Handicaps
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../Views/landingPage.vue'
import GameRules from '../Views/GameRules.vue'

const routes = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/game', name: 'about', component: GameRules}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
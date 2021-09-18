import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mi-lista',
    name: 'MiLista',
    component: MiLista
  },
  {
    path: '/perfil',
    name: 'Perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Perfil
    //() => import(/* webpackChunkName: "about" */ '../views/Perfil.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
